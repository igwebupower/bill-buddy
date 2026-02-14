import { inngest } from "./client";
import { prisma } from "@/lib/db";
import { getBills, getBillById, getBillStages, getBillPublications, searchCommonsDivisions, getCommonsDivision, searchLordsDivisions, getLordsDivision } from "@/lib/parliament/client";
import { generateBillSummary } from "@/lib/ai/summarize";

// ─── Sync Bills ─────────────────────────────────────────────────────────────────

export const syncBills = inngest.createFunction(
  { id: "sync-bills", concurrency: [{ limit: 1 }] },
  { event: "bills/sync" },
  async ({ step }) => {
    const syncLog = await step.run("create-sync-log", async () => {
      return prisma.syncLog.create({
        data: { jobName: "sync-bills", status: "started" },
      });
    });

    let totalSynced = 0;
    let totalFound = 0;

    try {
      // Fetch bills in pages
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        const result = await step.run(`fetch-page-${page}`, async () => {
          const data = await getBills({ page, take: 50 });
          return {
            items: data.items,
            totalResults: data.totalResults,
            hasMore: page * 50 < data.totalResults,
          };
        });

        totalFound = result.totalResults;

        // Upsert each bill
        for (const bill of result.items) {
          await step.run(`upsert-bill-${bill.billId}`, async () => {
            await prisma.bill.upsert({
              where: { parliamentId: bill.billId },
              create: {
                parliamentId: bill.billId,
                shortTitle: bill.shortTitle,
                longTitle: bill.longTitle,
                billTypeId: bill.billTypeId,
                billTypeCategory: bill.billTypeCategory,
                currentHouse: bill.currentHouse,
                currentStage: bill.currentStage?.description || null,
                originatingHouse: bill.originatingHouse,
                lastUpdate: bill.lastUpdate
                  ? new Date(bill.lastUpdate)
                  : null,
                isAct: bill.isAct,
                isDefeated: bill.isDefeated,
                billWithdrawn: bill.billWithdrawn
                  ? new Date(bill.billWithdrawn)
                  : null,
                sessionId: bill.sessions?.[0]?.id || null,
                sessionName: bill.sessions?.[0]?.name || null,
              },
              update: {
                shortTitle: bill.shortTitle,
                longTitle: bill.longTitle,
                currentHouse: bill.currentHouse,
                currentStage: bill.currentStage?.description || null,
                lastUpdate: bill.lastUpdate
                  ? new Date(bill.lastUpdate)
                  : null,
                isAct: bill.isAct,
                isDefeated: bill.isDefeated,
                billWithdrawn: bill.billWithdrawn
                  ? new Date(bill.billWithdrawn)
                  : null,
              },
            });

            // Sync stages
            if (bill.currentStage) {
              try {
                const stagesData = await getBillStages(bill.billId);
                for (const stage of stagesData.items) {
                  await prisma.billStage.upsert({
                    where: {
                      billId_stageId: {
                        billId: (
                          await prisma.bill.findUnique({
                            where: { parliamentId: bill.billId },
                          })
                        )!.id,
                        stageId: stage.stageId,
                      },
                    },
                    create: {
                      billId: (
                        await prisma.bill.findUnique({
                          where: { parliamentId: bill.billId },
                        })
                      )!.id,
                      stageId: stage.stageId,
                      stageName: stage.description,
                      house: stage.house,
                      sortOrder: stage.sortOrder,
                      sittingDate: stage.stageSittings?.[0]?.date
                        ? new Date(stage.stageSittings[0].date)
                        : null,
                    },
                    update: {
                      stageName: stage.description,
                      house: stage.house,
                      sortOrder: stage.sortOrder,
                      sittingDate: stage.stageSittings?.[0]?.date
                        ? new Date(stage.stageSittings[0].date)
                        : null,
                    },
                  });
                }
              } catch {
                // skip stages if fetch fails
              }
            }

            // Sync sponsors
            for (const sponsor of bill.sponsors) {
              if (sponsor.member) {
                const dbBill = await prisma.bill.findUnique({
                  where: { parliamentId: bill.billId },
                });
                if (dbBill) {
                  await prisma.billSponsor.upsert({
                    where: {
                      id: `${dbBill.id}-${sponsor.member.memberId}`,
                    },
                    create: {
                      id: `${dbBill.id}-${sponsor.member.memberId}`,
                      billId: dbBill.id,
                      memberId: sponsor.member.memberId,
                      name: sponsor.member.name,
                      party: sponsor.member.party,
                      constituency: sponsor.member.memberFrom,
                      photoUrl: sponsor.member.memberPhoto,
                      sortOrder: sponsor.sortOrder,
                    },
                    update: {
                      name: sponsor.member.name,
                      party: sponsor.member.party,
                      constituency: sponsor.member.memberFrom,
                      photoUrl: sponsor.member.memberPhoto,
                    },
                  });
                }
              }
            }

            totalSynced++;
          });
        }

        hasMore = result.hasMore;
        page++;
      }

      await step.run("complete-sync-log", async () => {
        await prisma.syncLog.update({
          where: { id: syncLog.id },
          data: {
            status: "completed",
            billsFound: totalFound,
            billsSynced: totalSynced,
            completedAt: new Date(),
          },
        });
      });

      return { synced: totalSynced, found: totalFound };
    } catch (error) {
      await prisma.syncLog.update({
        where: { id: syncLog.id },
        data: {
          status: "failed",
          error: error instanceof Error ? error.message : "Unknown error",
          completedAt: new Date(),
        },
      });
      throw error;
    }
  }
);

// ─── Generate Summary ───────────────────────────────────────────────────────────

export const generateSummaryFn = inngest.createFunction(
  { id: "generate-summary", concurrency: [{ limit: 3 }] },
  { event: "bills/generate-summary" },
  async ({ event, step }) => {
    const { billId } = event.data;

    const bill = await step.run("fetch-bill", async () => {
      return prisma.bill.findUnique({
        where: { id: billId },
        include: {
          summaries: {
            where: { language: "en" },
            take: 1,
          },
        },
      });
    });

    if (!bill) throw new Error(`Bill not found: ${billId}`);
    if (bill.summaries.length > 0) return { cached: true };

    const result = await step.run("generate", async () => {
      return generateBillSummary(
        bill.shortTitle,
        bill.longTitle,
        bill.billTypeCategory || "Government",
        bill.legislationGovUrl
      );
    });

    await step.run("save-summary", async () => {
      await prisma.billSummary.create({
        data: {
          billId: bill.id,
          language: "en",
          version: 1,
          overview: result.summary.overview,
          purpose: result.summary.purpose,
          keyChanges: result.summary.keyChanges,
          impacts: result.summary.impacts,
          implementation: result.summary.implementation || "",
          tldr: result.summary.tldr,
          tokensUsed: result.tokensUsed,
        },
      });
    });

    return { generated: true, tokensUsed: result.tokensUsed };
  }
);

// ─── Check Stage Changes ────────────────────────────────────────────────────────

export const checkStageChanges = inngest.createFunction(
  { id: "check-stage-changes", concurrency: [{ limit: 1 }] },
  { event: "bills/check-stages" },
  async ({ step }) => {
    const trackedBills = await step.run("get-tracked-bills", async () => {
      return prisma.bill.findMany({
        where: {
          trackedBills: { some: {} },
          isAct: false,
          isDefeated: false,
          billWithdrawn: null,
        },
        select: {
          id: true,
          parliamentId: true,
          shortTitle: true,
          currentStage: true,
        },
      });
    });

    let changesDetected = 0;

    for (const bill of trackedBills) {
      const change = await step.run(
        `check-${bill.parliamentId}`,
        async () => {
          const fresh = await getBillById(bill.parliamentId);
          const newStage = fresh.currentStage?.description || null;

          if (newStage && newStage !== bill.currentStage) {
            // Update bill
            await prisma.bill.update({
              where: { id: bill.id },
              data: { currentStage: newStage },
            });

            // Create notification
            await prisma.notification.create({
              data: {
                billId: bill.id,
                type: fresh.isAct ? "ROYAL_ASSENT" : "STAGE_CHANGE",
                title: `${bill.shortTitle}`,
                body: fresh.isAct
                  ? `Has received Royal Assent and is now an Act of Parliament`
                  : `Has moved to: ${newStage}`,
                data: { previousStage: bill.currentStage, newStage },
              },
            });

            return true;
          }
          return false;
        }
      );

      if (change) changesDetected++;
    }

    return { checked: trackedBills.length, changes: changesDetected };
  }
);

// ─── Sync Divisions (Votes) ─────────────────────────────────────────────────────

export const syncDivisions = inngest.createFunction(
  { id: "sync-divisions", concurrency: [{ limit: 1 }] },
  { event: "bills/sync-divisions" },
  async ({ event, step }) => {
    const { billId } = event.data;

    const bill = await step.run("fetch-bill", async () => {
      return prisma.bill.findUnique({
        where: { id: billId },
        include: {
          stages: { orderBy: { sortOrder: "asc" } },
          divisions: { select: { divisionId: true, house: true } },
        },
      });
    });

    if (!bill) throw new Error(`Bill not found: ${billId}`);

    let totalSynced = 0;

    // Search Commons divisions by bill title
    const commonsDivisions = await step.run("search-commons", async () => {
      try {
        return await searchCommonsDivisions({
          searchTerm: bill.shortTitle,
          take: 100,
        });
      } catch {
        return [];
      }
    });

    const existingIds = new Set(
      bill.divisions.map((d) => `${d.house}:${d.divisionId}`)
    );

    // Sync each Commons division
    for (const div of commonsDivisions) {
      if (existingIds.has(`Commons:${div.DivisionId}`)) continue;

      await step.run(`sync-commons-${div.DivisionId}`, async () => {
        const detail = await getCommonsDivision(div.DivisionId);

        const division = await prisma.division.create({
          data: {
            billId: bill.id,
            house: "Commons",
            divisionId: detail.DivisionId,
            divisionNumber: detail.Number,
            title: detail.Title,
            date: new Date(detail.Date),
            ayeCount: detail.AyeCount,
            noCount: detail.NoCount,
            isDeferred: detail.IsDeferred,
          },
        });

        // Bulk insert member votes
        const votes = [
          ...detail.Ayes.map((m) => ({
            divisionId: division.id,
            memberId: m.MemberId,
            memberName: m.Name,
            party: m.Party,
            constituency: m.MemberFrom,
            lobby: "Aye" as const,
            isTeller: false,
          })),
          ...detail.Noes.map((m) => ({
            divisionId: division.id,
            memberId: m.MemberId,
            memberName: m.Name,
            party: m.Party,
            constituency: m.MemberFrom,
            lobby: "No" as const,
            isTeller: false,
          })),
          ...detail.AyeTellers.map((m) => ({
            divisionId: division.id,
            memberId: m.MemberId,
            memberName: m.Name,
            party: m.Party,
            constituency: m.MemberFrom,
            lobby: "Aye" as const,
            isTeller: true,
          })),
          ...detail.NoTellers.map((m) => ({
            divisionId: division.id,
            memberId: m.MemberId,
            memberName: m.Name,
            party: m.Party,
            constituency: m.MemberFrom,
            lobby: "No" as const,
            isTeller: true,
          })),
        ];

        if (votes.length > 0) {
          await prisma.memberVote.createMany({ data: votes });
        }
      });

      totalSynced++;
    }

    // Search Lords divisions by bill title
    const lordsDivisions = await step.run("search-lords", async () => {
      try {
        return await searchLordsDivisions({
          searchTerm: bill.shortTitle,
          take: 100,
        });
      } catch {
        return [];
      }
    });

    for (const div of lordsDivisions) {
      if (existingIds.has(`Lords:${div.DivisionId}`)) continue;

      await step.run(`sync-lords-${div.DivisionId}`, async () => {
        const detail = await getLordsDivision(div.DivisionId);

        const division = await prisma.division.create({
          data: {
            billId: bill.id,
            house: "Lords",
            divisionId: detail.DivisionId,
            divisionNumber: detail.Number,
            title: detail.Title,
            date: new Date(detail.Date),
            ayeCount: detail.AuthoritativeContentCount,
            noCount: detail.AuthoritativeNotContentCount,
          },
        });

        const votes = [
          ...detail.Contents.map((m) => ({
            divisionId: division.id,
            memberId: m.MemberId,
            memberName: m.Name,
            party: m.Party,
            constituency: m.MemberFrom,
            lobby: "Aye" as const,
            isTeller: false,
          })),
          ...detail.NotContents.map((m) => ({
            divisionId: division.id,
            memberId: m.MemberId,
            memberName: m.Name,
            party: m.Party,
            constituency: m.MemberFrom,
            lobby: "No" as const,
            isTeller: false,
          })),
        ];

        if (votes.length > 0) {
          await prisma.memberVote.createMany({ data: votes });
        }
      });

      totalSynced++;
    }

    return { billId, divisionssynced: totalSynced };
  }
);

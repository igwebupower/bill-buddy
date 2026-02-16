import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getBills, getBillStages } from "@/lib/parliament/client";

export const dynamic = "force-dynamic";
export const maxDuration = 300; // 5 minutes for Vercel

export async function GET(request: NextRequest) {
  // Simple auth via secret or cron header
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  const isVercelCron = request.headers.get("x-vercel-cron") === "true";

  if (!isVercelCron && cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const syncLog = await prisma.syncLog.create({
    data: { jobName: "sync-bills", status: "started" },
  });

  let totalSynced = 0;
  let totalFound = 0;

  try {
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const data = await getBills({ page, take: 50 });
      totalFound = data.totalResults;

      for (const bill of data.items) {
        const dbBill = await prisma.bill.upsert({
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
            lastUpdate: bill.lastUpdate ? new Date(bill.lastUpdate) : null,
            isAct: bill.isAct,
            isDefeated: bill.isDefeated,
            billWithdrawn: bill.billWithdrawn ? new Date(bill.billWithdrawn) : null,
            sessionId: bill.sessions?.[0]?.id || null,
            sessionName: bill.sessions?.[0]?.name || null,
          },
          update: {
            shortTitle: bill.shortTitle,
            longTitle: bill.longTitle,
            currentHouse: bill.currentHouse,
            currentStage: bill.currentStage?.description || null,
            lastUpdate: bill.lastUpdate ? new Date(bill.lastUpdate) : null,
            isAct: bill.isAct,
            isDefeated: bill.isDefeated,
            billWithdrawn: bill.billWithdrawn ? new Date(bill.billWithdrawn) : null,
          },
        });

        // Sync stages
        try {
          const stagesData = await getBillStages(bill.billId);
          for (const stage of stagesData.items) {
            await prisma.billStage.upsert({
              where: {
                billId_stageId: {
                  billId: dbBill.id,
                  stageId: stage.stageId,
                },
              },
              create: {
                billId: dbBill.id,
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

        // Sync sponsors
        for (const sponsor of bill.sponsors) {
          if (sponsor.member) {
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

        totalSynced++;
      }

      hasMore = page * 50 < data.totalResults;
      page++;

      // Safety limit
      if (page > 20) break;
    }

    await prisma.syncLog.update({
      where: { id: syncLog.id },
      data: {
        status: "completed",
        billsFound: totalFound,
        billsSynced: totalSynced,
        completedAt: new Date(),
      },
    });

    return NextResponse.json({
      ok: true,
      synced: totalSynced,
      found: totalFound,
    });
  } catch (error) {
    console.error("Sync failed:", error);

    await prisma.syncLog.update({
      where: { id: syncLog.id },
      data: {
        status: "failed",
        error: error instanceof Error ? error.message : "Unknown error",
        completedAt: new Date(),
      },
    });

    return NextResponse.json(
      { ok: false, error: "Sync failed", synced: totalSynced },
      { status: 500 }
    );
  }
}

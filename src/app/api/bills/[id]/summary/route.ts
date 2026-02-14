import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { generateBillSummary } from "@/lib/ai/summarize";
import { getBillById } from "@/lib/parliament/client";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const parliamentId = parseInt(id, 10);

    // Try to find bill in DB
    let bill: {
      id: string;
      shortTitle: string;
      longTitle: string;
      billTypeCategory: string | null;
      legislationGovUrl: string | null;
      summaries: Array<{
        overview: string;
        purpose: string;
        keyChanges: unknown;
        impacts: unknown;
        implementation: string | null;
        tldr: string;
      }>;
    } | null = null;

    try {
      bill = await prisma.bill.findFirst({
        where: {
          OR: [
            { id },
            { parliamentId: isNaN(parliamentId) ? -1 : parliamentId },
          ],
        },
        include: {
          summaries: {
            where: { language: "en" },
            orderBy: { version: "desc" },
            take: 1,
          },
        },
      });

      // If bill not in DB, fetch from Parliament API and create
      if (!bill && !isNaN(parliamentId)) {
        const pBill = await getBillById(parliamentId);

        bill = await prisma.bill.create({
          data: {
            parliamentId: pBill.billId,
            shortTitle: pBill.shortTitle,
            longTitle: pBill.longTitle,
            billTypeId: pBill.billTypeId,
            billTypeCategory: pBill.billTypeCategory,
            currentHouse: pBill.currentHouse,
            currentStage: pBill.currentStage?.description || null,
            originatingHouse: pBill.originatingHouse,
            lastUpdate: pBill.lastUpdate
              ? new Date(pBill.lastUpdate)
              : null,
            isAct: pBill.isAct,
            isDefeated: pBill.isDefeated,
            sessionId: pBill.sessions?.[0]?.id || null,
            sessionName: pBill.sessions?.[0]?.name || null,
          },
          include: {
            summaries: {
              where: { language: "en" },
              orderBy: { version: "desc" },
              take: 1,
            },
          },
        });
      }
    } catch (dbError) {
      console.error("DB unavailable for summary generation:", dbError);
    }

    // If bill found in DB with existing summary, return it
    if (bill?.summaries && bill.summaries.length > 0) {
      return NextResponse.json({
        summary: bill.summaries[0],
        cached: true,
      });
    }

    // If no bill in DB, fetch from Parliament API for context
    let shortTitle = bill?.shortTitle;
    let longTitle = bill?.longTitle;
    let billTypeCategory = bill?.billTypeCategory || "Government";
    let legislationGovUrl = bill?.legislationGovUrl || null;

    if (!shortTitle && !isNaN(parliamentId)) {
      const pBill = await getBillById(parliamentId);
      shortTitle = pBill.shortTitle;
      longTitle = pBill.longTitle;
      billTypeCategory = pBill.billTypeCategory;
    }

    if (!shortTitle || !longTitle) {
      return NextResponse.json({ error: "Bill not found" }, { status: 404 });
    }

    // Generate summary
    const { summary, tokensUsed } = await generateBillSummary(
      shortTitle,
      longTitle,
      billTypeCategory,
      legislationGovUrl
    );

    // Try to save to DB (non-critical)
    let savedSummary = null;
    if (bill?.id) {
      try {
        savedSummary = await prisma.billSummary.create({
          data: {
            billId: bill.id,
            language: "en",
            version: 1,
            overview: summary.overview,
            purpose: summary.purpose,
            keyChanges: summary.keyChanges,
            impacts: summary.impacts,
            implementation: summary.implementation || "",
            tldr: summary.tldr,
            tokensUsed,
          },
        });
      } catch (saveError) {
        console.error("Failed to save summary to DB:", saveError);
      }
    }

    return NextResponse.json({
      summary: savedSummary || summary,
      cached: false,
    });
  } catch (error) {
    console.error("Error generating summary:", error);
    return NextResponse.json(
      { error: "Failed to generate summary" },
      { status: 500 }
    );
  }
}

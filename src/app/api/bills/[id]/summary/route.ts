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

    // Find or create the bill in DB
    let bill = await prisma.bill.findFirst({
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

    if (!bill) {
      return NextResponse.json({ error: "Bill not found" }, { status: 404 });
    }

    // Check for existing summary
    if (bill.summaries.length > 0) {
      return NextResponse.json({
        summary: bill.summaries[0],
        cached: true,
      });
    }

    // Generate new summary
    const { summary, tokensUsed } = await generateBillSummary(
      bill.shortTitle,
      bill.longTitle,
      bill.billTypeCategory || "Government",
      bill.legislationGovUrl
    );

    // Save to DB
    const savedSummary = await prisma.billSummary.create({
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

    return NextResponse.json({
      summary: savedSummary,
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

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import {
  getBillById,
  getBillStages,
  getBillPublications,
} from "@/lib/parliament/client";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    // Try DB first (id could be cuid or parliamentId)
    const dbBill = await prisma.bill.findFirst({
      where: {
        OR: [
          { id },
          { parliamentId: parseInt(id, 10) || -1 },
        ],
      },
      include: {
        stages: { orderBy: { sortOrder: "asc" } },
        sponsors: { orderBy: { sortOrder: "asc" } },
        publications: { orderBy: { displayDate: "desc" } },
        summaries: {
          where: { language: "en" },
          orderBy: { version: "desc" },
          take: 1,
        },
      },
    });

    if (dbBill) {
      return NextResponse.json(dbBill);
    }

    // Fallback to Parliament API
    const parliamentId = parseInt(id, 10);
    if (isNaN(parliamentId)) {
      return NextResponse.json({ error: "Bill not found" }, { status: 404 });
    }

    const [bill, stagesRes, pubsRes] = await Promise.all([
      getBillById(parliamentId),
      getBillStages(parliamentId),
      getBillPublications(parliamentId).catch(() => ({ publications: [] })),
    ]);

    return NextResponse.json({
      id: String(bill.billId),
      parliamentId: bill.billId,
      shortTitle: bill.shortTitle,
      longTitle: bill.longTitle,
      currentHouse: bill.currentHouse,
      currentStage: bill.currentStage?.description || null,
      originatingHouse: bill.originatingHouse,
      billTypeCategory: bill.billTypeCategory,
      isAct: bill.isAct,
      isDefeated: bill.isDefeated,
      billWithdrawn: bill.billWithdrawn,
      lastUpdate: bill.lastUpdate,
      sessionName: bill.sessions?.[0]?.name || null,
      stages: stagesRes.items.map((s) => ({
        stageId: s.stageId,
        stageName: s.description,
        house: s.house,
        sortOrder: s.sortOrder,
        sittingDate:
          s.stageSittings?.[0]?.date || null,
      })),
      sponsors: bill.sponsors.map((s) => ({
        memberId: s.member?.memberId || null,
        name: s.member?.name || s.organisation?.name || "Unknown",
        party: s.member?.party || null,
        constituency: s.member?.memberFrom || null,
        photoUrl: s.member?.memberPhoto || null,
      })),
      publications: pubsRes.publications.flatMap((p) =>
        p.links.map((link) => ({
          publicationType: p.publicationType.name,
          title: link.title,
          url: link.url,
        }))
      ),
      summaries: [],
      policyTopics: [],
      affectedGroups: [],
    });
  } catch (error) {
    console.error("Error fetching bill:", error);
    return NextResponse.json(
      { error: "Failed to fetch bill" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Find bill by parliamentId or cuid
  const bill = await prisma.bill.findFirst({
    where: {
      OR: [
        { id },
        { parliamentId: parseInt(id, 10) || -1 },
      ],
    },
    select: { id: true },
  });

  if (!bill) {
    return NextResponse.json({ error: "Bill not found" }, { status: 404 });
  }

  const divisions = await prisma.division.findMany({
    where: { billId: bill.id },
    include: {
      votes: {
        orderBy: [{ lobby: "asc" }, { party: "asc" }, { memberName: "asc" }],
      },
    },
    orderBy: { date: "desc" },
  });

  // Aggregate party breakdown for each division
  const items = divisions.map((div) => {
    const partyBreakdown: Record<string, { aye: number; no: number }> = {};

    for (const vote of div.votes) {
      const party = vote.party || "Independent";
      if (!partyBreakdown[party]) {
        partyBreakdown[party] = { aye: 0, no: 0 };
      }
      if (vote.lobby === "Aye") {
        partyBreakdown[party].aye++;
      } else if (vote.lobby === "No") {
        partyBreakdown[party].no++;
      }
    }

    return {
      id: div.id,
      house: div.house,
      divisionId: div.divisionId,
      divisionNumber: div.divisionNumber,
      title: div.title,
      date: div.date.toISOString(),
      ayeCount: div.ayeCount,
      noCount: div.noCount,
      abstainCount: div.abstainCount,
      isDeferred: div.isDeferred,
      stageName: div.stageName,
      partyBreakdown: Object.entries(partyBreakdown)
        .map(([party, counts]) => ({ party, ...counts }))
        .sort((a, b) => (b.aye + b.no) - (a.aye + a.no)),
      votes: div.votes.map((v) => ({
        memberId: v.memberId,
        memberName: v.memberName,
        party: v.party,
        constituency: v.constituency,
        lobby: v.lobby,
        isTeller: v.isTeller,
      })),
    };
  });

  return NextResponse.json({ items });
}

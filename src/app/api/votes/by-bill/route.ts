import { NextRequest, NextResponse } from "next/server";
import {
  searchDivisions,
  getDivisionById,
} from "@/lib/parliament/votes-client";

export async function GET(request: NextRequest) {
  const billTitle = request.nextUrl.searchParams.get("billTitle");
  const memberIdParam = request.nextUrl.searchParams.get("memberId");

  if (!billTitle) {
    return NextResponse.json(
      { error: "billTitle is required" },
      { status: 400 }
    );
  }

  try {
    const memberId = memberIdParam ? parseInt(memberIdParam, 10) : undefined;

    // Find all divisions matching this bill
    const allDivisions = await searchDivisions({ searchTerm: billTitle });

    if (!allDivisions || allDivisions.length === 0) {
      return NextResponse.json({ divisions: [] });
    }

    if (!memberId) {
      // No member specified — return divisions without vote direction
      return NextResponse.json({
        divisions: allDivisions.map((d) => ({
          divisionId: d.DivisionId,
          title: d.Title,
          date: d.Date,
          ayeCount: d.AyeCount,
          noCount: d.NoCount,
          memberVote: null,
        })),
      });
    }

    // Find which divisions this MP voted in
    const memberDivisions = await searchDivisions({
      searchTerm: billTitle,
      memberId,
    });

    const memberDivisionIds = new Set(
      memberDivisions.map((d) => d.DivisionId)
    );

    // Only fetch full details for divisions the MP voted in
    const divisionsWithVotes = await Promise.all(
      allDivisions.map(async (d) => {
        if (!memberDivisionIds.has(d.DivisionId)) {
          return {
            divisionId: d.DivisionId,
            title: d.Title,
            date: d.Date,
            ayeCount: d.AyeCount,
            noCount: d.NoCount,
            memberVote: "NoVoteRecorded" as const,
          };
        }

        const detail = await getDivisionById(d.DivisionId);
        const votedAye =
          detail.Ayes.some((m) => m.MemberId === memberId) ||
          detail.AyeTellers.some((m) => m.MemberId === memberId);
        const votedNo =
          detail.Noes.some((m) => m.MemberId === memberId) ||
          detail.NoTellers.some((m) => m.MemberId === memberId);

        return {
          divisionId: d.DivisionId,
          title: d.Title,
          date: d.Date,
          ayeCount: d.AyeCount,
          noCount: d.NoCount,
          memberVote: votedAye ? "Aye" : votedNo ? "No" : "NoVoteRecorded",
        };
      })
    );

    return NextResponse.json({ divisions: divisionsWithVotes });
  } catch (error) {
    console.error("Votes by-bill error:", error);
    return NextResponse.json(
      { error: "Failed to fetch voting data" },
      { status: 500 }
    );
  }
}

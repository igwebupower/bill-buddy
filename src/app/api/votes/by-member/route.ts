import { NextRequest, NextResponse } from "next/server";
import {
  searchDivisions,
  getDivisionById,
} from "@/lib/parliament/votes-client";

export async function GET(request: NextRequest) {
  const memberIdParam = request.nextUrl.searchParams.get("memberId");
  const takeParam = request.nextUrl.searchParams.get("take");
  const skipParam = request.nextUrl.searchParams.get("skip");

  if (!memberIdParam) {
    return NextResponse.json(
      { error: "memberId is required" },
      { status: 400 }
    );
  }

  const memberId = parseInt(memberIdParam, 10);
  const take = Math.min(parseInt(takeParam || "20", 10), 30);
  const skip = parseInt(skipParam || "0", 10);

  try {
    const divisions = await searchDivisions({ memberId, take, skip });

    // Fetch full details for each division to determine Aye/No
    const divisionsWithVotes = await Promise.all(
      divisions.map(async (d) => {
        const detail = await getDivisionById(d.DivisionId);
        const votedAye =
          detail.Ayes.some((m) => m.MemberId === memberId) ||
          detail.AyeTellers.some((m) => m.MemberId === memberId);

        return {
          divisionId: d.DivisionId,
          title: d.Title,
          date: d.Date,
          ayeCount: d.AyeCount,
          noCount: d.NoCount,
          memberVote: votedAye ? "Aye" : "No",
        };
      })
    );

    return NextResponse.json({
      divisions: divisionsWithVotes,
      total: divisionsWithVotes.length,
    });
  } catch (error) {
    console.error("Votes by-member error:", error);
    return NextResponse.json(
      { error: "Failed to fetch voting history" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const [billCount, summaryCount, trackerCount] = await Promise.all([
      prisma.bill.count(),
      prisma.billSummary.count({ where: { language: "en" } }),
      prisma.deviceProfile.count({
        where: { trackedBills: { some: {} } },
      }),
    ]);

    return NextResponse.json({
      bills: billCount,
      summaries: summaryCount,
      trackers: trackerCount,
    });
  } catch {
    // Fallback if DB is unavailable
    return NextResponse.json({
      bills: 0,
      summaries: 0,
      trackers: 0,
    });
  }
}

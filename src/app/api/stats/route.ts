import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const [billCount, summaryCount, trackedCount] = await Promise.all([
      prisma.bill.count(),
      prisma.billSummary.count({ where: { language: "en" } }),
      prisma.trackedBill.count(),
    ]);

    return NextResponse.json({
      bills: billCount,
      summaries: summaryCount,
      trackers: trackedCount,
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

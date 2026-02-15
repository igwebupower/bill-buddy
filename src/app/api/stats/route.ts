import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const [billCount, summaryCount] = await Promise.all([
      prisma.bill.count(),
      prisma.billSummary.count({ where: { language: "en" } }),
    ]);

    return NextResponse.json({
      bills: billCount,
      summaries: summaryCount,
      languages: 5, // en, cy, ur, pl, ar
    });
  } catch {
    // Fallback if DB is unavailable
    return NextResponse.json({
      bills: 0,
      summaries: 0,
      languages: 5,
    });
  }
}

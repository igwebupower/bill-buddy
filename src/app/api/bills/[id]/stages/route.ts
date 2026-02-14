import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getBillStages } from "@/lib/parliament/client";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Try DB first
  try {
    const dbStages = await prisma.billStage.findMany({
      where: {
        bill: {
          OR: [
            { id },
            { parliamentId: parseInt(id, 10) || -1 },
          ],
        },
      },
      orderBy: { sortOrder: "asc" },
    });

    if (dbStages.length > 0) {
      return NextResponse.json({ items: dbStages });
    }
  } catch (dbError) {
    console.error("DB query failed, falling back to Parliament API:", dbError);
  }

  // Fallback to Parliament API
  const parliamentId = parseInt(id, 10);
  if (isNaN(parliamentId)) {
    return NextResponse.json({ items: [] });
  }

  try {
    const data = await getBillStages(parliamentId);
    return NextResponse.json({
      items: (data?.items ?? []).map((s) => ({
        stageId: s.stageId,
        stageName: s.description,
        house: s.house,
        sortOrder: s.sortOrder,
        sittingDate: s.stageSittings?.[0]?.date || null,
        description: s.description,
      })),
    });
  } catch (apiError) {
    console.error("Parliament API also failed:", apiError);
    return NextResponse.json({ items: [] });
  }
}

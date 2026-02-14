import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getBillStages } from "@/lib/parliament/client";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    // Try DB first
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

    // Fallback to Parliament API
    const parliamentId = parseInt(id, 10);
    if (isNaN(parliamentId)) {
      return NextResponse.json({ items: [] });
    }

    const data = await getBillStages(parliamentId);

    return NextResponse.json({
      items: data.items.map((s) => ({
        stageId: s.stageId,
        stageName: s.description,
        house: s.house,
        sortOrder: s.sortOrder,
        sittingDate: s.stageSittings?.[0]?.date || null,
        description: s.description,
      })),
    });
  } catch (error) {
    console.error("Error fetching stages:", error);
    return NextResponse.json(
      { error: "Failed to fetch stages" },
      { status: 500 }
    );
  }
}

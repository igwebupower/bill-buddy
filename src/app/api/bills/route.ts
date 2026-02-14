import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getBills as getParliamentBills } from "@/lib/parliament/client";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const search = searchParams.get("search") || undefined;
  const house = searchParams.get("house") as
    | "Commons"
    | "Lords"
    | "Unassigned"
    | undefined;
  const type = searchParams.get("type") || undefined;
  const isAct = searchParams.get("isAct");
  const page = parseInt(searchParams.get("page") || "1", 10);
  const take = Math.min(parseInt(searchParams.get("take") || "20", 10), 50);

  try {
    // Try DB first
    const where: Record<string, unknown> = {};

    if (search) {
      where.OR = [
        { shortTitle: { contains: search, mode: "insensitive" } },
        { longTitle: { contains: search, mode: "insensitive" } },
      ];
    }
    if (house) where.currentHouse = house;
    if (type) where.billTypeCategory = type;
    if (isAct === "true") where.isAct = true;
    if (isAct === "false") where.isAct = false;

    const [bills, total] = await Promise.all([
      prisma.bill.findMany({
        where,
        include: {
          stages: { orderBy: { sortOrder: "desc" }, take: 1 },
          sponsors: { orderBy: { sortOrder: "asc" }, take: 3 },
          summaries: {
            where: { language: "en" },
            orderBy: { version: "desc" },
            take: 1,
            select: { id: true, tldr: true },
          },
        },
        orderBy: { lastUpdate: "desc" },
        skip: (page - 1) * take,
        take,
      }),
      prisma.bill.count({ where }),
    ]);

    if (total > 0) {
      return NextResponse.json({
        items: bills,
        totalResults: total,
        currentPage: page,
        itemsPerPage: take,
        totalPages: Math.ceil(total / take),
      });
    }

    // Fallback to Parliament API if DB is empty
    const data = await getParliamentBills({
      search,
      currentHouse: house,
      page,
      take,
    });

    return NextResponse.json({
      items: data.items.map((bill) => ({
        id: String(bill.billId),
        parliamentId: bill.billId,
        shortTitle: bill.shortTitle,
        longTitle: bill.longTitle || bill.shortTitle,
        currentHouse: bill.currentHouse,
        currentStage: bill.currentStage?.description || null,
        billTypeCategory: bill.billTypeCategory || null,
        isAct: bill.isAct,
        isDefeated: bill.isDefeated,
        lastUpdate: bill.lastUpdate,
        sponsors: (bill.sponsors || []).map((s) => ({
          name: s.member?.name || s.organisation?.name || "Unknown",
          party: s.member?.party || null,
          photoUrl: s.member?.memberPhoto || null,
        })),
        stages: bill.currentStage
          ? [
              {
                stageName: bill.currentStage.description,
                house: bill.currentStage.house,
              },
            ]
          : [],
        summaries: [],
      })),
      totalResults: data.totalResults,
      currentPage: page,
      itemsPerPage: take,
      totalPages: Math.ceil(data.totalResults / take),
    });
  } catch (error) {
    console.error("Error fetching bills:", error);

    // Final fallback: direct Parliament API call
    try {
      const data = await getParliamentBills({
        search,
        currentHouse: house,
        page,
        take,
      });

      return NextResponse.json({
        items: data.items.map((bill) => ({
          id: String(bill.billId),
          parliamentId: bill.billId,
          shortTitle: bill.shortTitle,
          longTitle: bill.longTitle || bill.shortTitle,
          currentHouse: bill.currentHouse,
          currentStage: bill.currentStage?.description || null,
          billTypeCategory: bill.billTypeCategory || null,
          isAct: bill.isAct,
          isDefeated: bill.isDefeated,
          lastUpdate: bill.lastUpdate,
          sponsors: (bill.sponsors || []).map((s) => ({
            name: s.member?.name || s.organisation?.name || "Unknown",
            party: s.member?.party || null,
            photoUrl: s.member?.memberPhoto || null,
          })),
          stages: bill.currentStage
            ? [
                {
                  stageName: bill.currentStage.description,
                  house: bill.currentStage.house,
                },
              ]
            : [],
          summaries: [],
        })),
        totalResults: data.totalResults,
        currentPage: page,
        itemsPerPage: take,
        totalPages: Math.ceil(data.totalResults / take),
      });
    } catch (apiError) {
      console.error("Parliament API also failed:", apiError);
      return NextResponse.json(
        { error: "Failed to fetch bills" },
        { status: 500 }
      );
    }
  }
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getUserFromRequest } from "@/lib/auth/session";

export async function GET(request: NextRequest) {
  const user = await getUserFromRequest(request);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const tracked = await prisma.trackedBill.findMany({
    where: { userId: user.id },
    include: {
      bill: {
        include: {
          stages: { orderBy: { sortOrder: "desc" }, take: 1 },
          summaries: {
            where: { language: "en" },
            orderBy: { version: "desc" },
            take: 1,
            select: { tldr: true },
          },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ items: tracked });
}

export async function POST(request: NextRequest) {
  const user = await getUserFromRequest(request);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { billId, parliamentId } = body;

  if (!billId && !parliamentId) {
    return NextResponse.json(
      { error: "Missing billId or parliamentId" },
      { status: 400 }
    );
  }

  // Find the bill
  let bill = billId
    ? await prisma.bill.findUnique({ where: { id: billId } })
    : await prisma.bill.findUnique({
        where: { parliamentId: parseInt(parliamentId, 10) },
      });

  if (!bill) {
    // Create from Parliament API if not in DB
    const { getBillById } = await import("@/lib/parliament/client");
    const pId = parseInt(parliamentId || billId, 10);

    if (isNaN(pId)) {
      return NextResponse.json({ error: "Bill not found" }, { status: 404 });
    }

    const pBill = await getBillById(pId);
    bill = await prisma.bill.create({
      data: {
        parliamentId: pBill.billId,
        shortTitle: pBill.shortTitle,
        longTitle: pBill.longTitle,
        billTypeCategory: pBill.billTypeCategory,
        currentHouse: pBill.currentHouse,
        currentStage: pBill.currentStage?.description || null,
        originatingHouse: pBill.originatingHouse,
        lastUpdate: pBill.lastUpdate ? new Date(pBill.lastUpdate) : null,
        isAct: pBill.isAct,
        isDefeated: pBill.isDefeated,
      },
    });
  }

  const tracked = await prisma.trackedBill.upsert({
    where: {
      userId_billId: { userId: user.id, billId: bill.id },
    },
    create: {
      userId: user.id,
      billId: bill.id,
    },
    update: {},
    include: { bill: true },
  });

  return NextResponse.json(tracked, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const user = await getUserFromRequest(request);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = request.nextUrl;
  const billId = searchParams.get("billId");

  if (!billId) {
    return NextResponse.json({ error: "Missing billId" }, { status: 400 });
  }

  // Try to find by billId or parliamentId
  const bill = await prisma.bill.findFirst({
    where: {
      OR: [
        { id: billId },
        { parliamentId: parseInt(billId, 10) || -1 },
      ],
    },
  });

  if (bill) {
    await prisma.trackedBill.deleteMany({
      where: { userId: user.id, billId: bill.id },
    });
  }

  return NextResponse.json({ ok: true });
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function GET(request: NextRequest) {
  const deviceId = request.headers.get("X-Device-ID");
  if (!deviceId) {
    return NextResponse.json({ error: "Missing device ID" }, { status: 400 });
  }

  const device = await prisma.deviceProfile.findUnique({
    where: { deviceId },
    select: { email: true },
  });

  return NextResponse.json({ email: device?.email ?? null });
}

export async function POST(request: NextRequest) {
  const deviceId = request.headers.get("X-Device-ID");
  if (!deviceId) {
    return NextResponse.json({ error: "Missing device ID" }, { status: 400 });
  }

  const body = await request.json();
  const { email } = body;

  // Allow null/empty to clear, otherwise validate format
  if (email !== null && email !== "" && !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
  }

  await prisma.deviceProfile.upsert({
    where: { deviceId },
    create: { deviceId, email: email || null },
    update: { email: email || null },
  });

  return NextResponse.json({ ok: true, email: email || null });
}

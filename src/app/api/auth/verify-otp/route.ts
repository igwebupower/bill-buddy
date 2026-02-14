import { NextRequest, NextResponse } from "next/server";
import { verifyOTP } from "@/lib/auth/otp";
import { createSession } from "@/lib/auth/session";
import { prisma } from "@/lib/db";

export async function POST(request: NextRequest) {
  const { email, code } = await request.json();

  if (!email || !code) {
    return NextResponse.json(
      { error: "Email and code are required" },
      { status: 400 }
    );
  }

  const normalizedEmail = email.toLowerCase().trim();
  const valid = await verifyOTP(normalizedEmail, code);

  if (!valid) {
    return NextResponse.json(
      { error: "Invalid or expired code" },
      { status: 401 }
    );
  }

  const user = await prisma.user.upsert({
    where: { email: normalizedEmail },
    create: { email: normalizedEmail },
    update: {},
  });

  const { token, expiresAt } = await createSession(user.id);

  return NextResponse.json({
    token,
    expiresAt: expiresAt.toISOString(),
    user: { id: user.id, email: user.email },
  });
}

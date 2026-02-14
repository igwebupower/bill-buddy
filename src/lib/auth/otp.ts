import { prisma } from "@/lib/db";
import { randomInt } from "crypto";

const OTP_EXPIRY_MS = 10 * 60 * 1000; // 10 minutes
const MAX_ATTEMPTS = 5;

export function generateOTP(): string {
  return randomInt(100000, 999999).toString();
}

export async function createVerificationCode(email: string): Promise<string> {
  // Invalidate previous codes
  await prisma.verificationCode.updateMany({
    where: { email, usedAt: null },
    data: { usedAt: new Date() },
  });

  const code = generateOTP();
  await prisma.verificationCode.create({
    data: {
      email: email.toLowerCase().trim(),
      code,
      expiresAt: new Date(Date.now() + OTP_EXPIRY_MS),
    },
  });

  return code;
}

export async function verifyOTP(email: string, code: string): Promise<boolean> {
  const normalizedEmail = email.toLowerCase().trim();

  const record = await prisma.verificationCode.findFirst({
    where: {
      email: normalizedEmail,
      code,
      usedAt: null,
      expiresAt: { gt: new Date() },
      attempts: { lt: MAX_ATTEMPTS },
    },
  });

  if (!record) {
    // Increment attempts on the latest code for this email
    await prisma.verificationCode.updateMany({
      where: { email: normalizedEmail, usedAt: null },
      data: { attempts: { increment: 1 } },
    });
    return false;
  }

  await prisma.verificationCode.update({
    where: { id: record.id },
    data: { usedAt: new Date() },
  });

  return true;
}

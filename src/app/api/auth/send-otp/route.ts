import { NextRequest, NextResponse } from "next/server";
import { createVerificationCode } from "@/lib/auth/otp";
import { sendEmail } from "@/lib/email/client";
import { otpEmailHtml } from "@/lib/email/templates";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, "10 m"),
});

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const normalizedEmail = email.toLowerCase().trim();

  const { success } = await ratelimit.limit(`otp:${normalizedEmail}`);
  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Try again later." },
      { status: 429 }
    );
  }

  const code = await createVerificationCode(normalizedEmail);
  await sendEmail(
    normalizedEmail,
    "Your Bill Buddy verification code",
    otpEmailHtml(code)
  );

  return NextResponse.json({ ok: true });
}

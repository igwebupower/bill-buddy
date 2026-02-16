import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

/**
 * One-click unsubscribe endpoint.
 * GET  /api/unsubscribe?email=...  → shows confirmation page
 * POST /api/unsubscribe             → processes List-Unsubscribe-Post header
 */

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
  if (!email) {
    return new NextResponse("Missing email", { status: 400 });
  }

  await prisma.deviceProfile.updateMany({
    where: { email },
    data: { email: null },
  });

  return new NextResponse(
    `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Unsubscribed — BillBrief</title>
<style>body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#0a0a0a;color:#fafafa}
.card{text-align:center;max-width:400px;padding:40px}h1{font-size:1.25rem;margin:0 0 8px}p{color:#888;font-size:.875rem;margin:0 0 20px}
a{color:#2563eb;text-decoration:none;font-size:.875rem}</style></head>
<body><div class="card"><h1>You've been unsubscribed</h1><p>You will no longer receive email alerts from BillBrief.</p><a href="/">Back to BillBrief</a></div></body></html>`,
    { headers: { "Content-Type": "text/html" } }
  );
}

export async function POST(request: NextRequest) {
  // RFC 8058 one-click: List-Unsubscribe-Post sends body "List-Unsubscribe=One-Click"
  const body = await request.text();
  const email =
    request.nextUrl.searchParams.get("email") ||
    new URLSearchParams(body).get("email");

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  await prisma.deviceProfile.updateMany({
    where: { email },
    data: { email: null },
  });

  return NextResponse.json({ ok: true });
}

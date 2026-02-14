import { NextResponse } from "next/server";
import { inngest } from "@/lib/inngest/client";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await inngest.send({ name: "bills/sync", data: {} });
    return NextResponse.json({ ok: true, message: "Sync triggered" });
  } catch (error) {
    console.error("Failed to trigger sync:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to trigger sync" },
      { status: 500 }
    );
  }
}

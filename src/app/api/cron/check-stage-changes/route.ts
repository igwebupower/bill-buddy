import { NextResponse } from "next/server";
import { inngest } from "@/lib/inngest/client";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await inngest.send({ name: "bills/check-stages", data: {} });
    return NextResponse.json({
      ok: true,
      message: "Stage check triggered",
    });
  } catch (error) {
    console.error("Failed to trigger stage check:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to trigger stage check" },
      { status: 500 }
    );
  }
}

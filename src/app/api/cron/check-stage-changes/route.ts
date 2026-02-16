import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getBillById } from "@/lib/parliament/client";
import { sendEmail } from "@/lib/email";

export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  const isVercelCron = request.headers.get("x-vercel-cron") === "true";

  if (!isVercelCron && cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const trackedBills = await prisma.bill.findMany({
      where: {
        trackedBills: { some: {} },
        isAct: false,
        isDefeated: false,
        billWithdrawn: null,
      },
      select: {
        id: true,
        parliamentId: true,
        shortTitle: true,
        currentStage: true,
      },
    });

    let changesDetected = 0;

    for (const bill of trackedBills) {
      try {
        const fresh = await getBillById(bill.parliamentId);
        const newStage = fresh.currentStage?.description || null;

        if (newStage && newStage !== bill.currentStage) {
          await prisma.bill.update({
            where: { id: bill.id },
            data: { currentStage: newStage },
          });

          await prisma.notification.create({
            data: {
              billId: bill.id,
              type: fresh.isAct ? "ROYAL_ASSENT" : "STAGE_CHANGE",
              title: bill.shortTitle,
              body: fresh.isAct
                ? "Has received Royal Assent and is now an Act of Parliament"
                : `Has moved to: ${newStage}`,
              data: { previousStage: bill.currentStage, newStage },
            },
          });

          changesDetected++;

          // Send email alerts to subscribers
          const subscribers = await prisma.trackedBill.findMany({
            where: {
              billId: bill.id,
              notifyStageChange: true,
              device: { email: { not: null } },
            },
            select: { device: { select: { email: true } } },
          });

          const appUrl =
            process.env.NEXT_PUBLIC_APP_URL || "https://billbrief.co.uk";
          const billUrl = `${appUrl}/bills/${bill.parliamentId}`;

          for (const sub of subscribers) {
            if (!sub.device.email) continue;

            const subject = fresh.isAct
              ? `${bill.shortTitle} — Royal Assent`
              : `${bill.shortTitle} — Stage Change`;

            const html = `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
                <h2 style="margin: 0 0 8px;">${bill.shortTitle}</h2>
                <p style="color: #666; margin: 0 0 16px;">
                  ${
                    fresh.isAct
                      ? "Has received Royal Assent and is now an Act of Parliament."
                      : `Has moved to: <strong>${newStage}</strong>`
                  }
                </p>
                <a href="${billUrl}" style="display: inline-block; background: #2563eb; color: #fff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-size: 14px;">
                  View Bill
                </a>
                <p style="color: #999; font-size: 12px; margin-top: 24px;">
                  You're receiving this because you tracked this bill on BillBrief.
                  To stop email alerts, remove your email in Settings.
                </p>
              </div>
            `;

            try {
              await sendEmail({ to: sub.device.email, subject, html });
            } catch {
              // skip failed emails
            }
          }
        }
      } catch {
        // skip bill if fetch fails
      }
    }

    return NextResponse.json({
      ok: true,
      checked: trackedBills.length,
      changes: changesDetected,
    });
  } catch (error) {
    console.error("Stage check failed:", error);
    return NextResponse.json(
      { ok: false, error: "Stage check failed" },
      { status: 500 }
    );
  }
}

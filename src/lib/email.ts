const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_FROM =
  process.env.EMAIL_FROM || "BillBrief <hello@billbrief.co.uk>";

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}

/** Add or update a contact in Resend for list-building. */
export async function upsertResendContact(email: string) {
  if (!RESEND_API_KEY) return;

  try {
    await fetch("https://api.resend.com/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    });
  } catch {
    // non-critical — don't block the main flow
  }
}

export async function sendEmail({ to, subject, html }: SendEmailParams) {
  if (!RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — skipping email send");
    return;
  }

  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://billbrief.co.uk";
  const unsubUrl = `${appUrl}/api/unsubscribe?email=${encodeURIComponent(to)}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: EMAIL_FROM,
      to,
      subject,
      html,
      headers: {
        "List-Unsubscribe": `<${unsubUrl}>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`Resend API error (${res.status}): ${body}`);
  }
}

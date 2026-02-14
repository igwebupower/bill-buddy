import { anthropic } from "./client";
import { BILL_SUMMARY_SYSTEM, billSummaryPrompt } from "./prompts";
import { fetchBillText } from "../legislation/fetcher";

export interface BillSummaryData {
  overview: string;
  purpose: string;
  keyChanges: string[];
  impacts: Array<{ group: string; impact: string }>;
  implementation: string;
  tldr: string;
}

const MODEL = "claude-sonnet-4-5-20250929";
const MAX_BILL_TEXT_LENGTH = 80000; // ~20k tokens

export async function generateBillSummary(
  title: string,
  longTitle: string,
  billType: string,
  legislationUrl?: string | null
): Promise<{ summary: BillSummaryData; tokensUsed: number }> {
  // Try to fetch full bill text
  let billText = "";
  if (legislationUrl) {
    try {
      billText = await fetchBillText(legislationUrl);
    } catch (error) {
      console.warn("Could not fetch bill text from legislation.gov.uk:", error);
    }
  }

  // If no text, use the long title as context
  if (!billText) {
    billText = longTitle;
  }

  // Truncate if too long
  if (billText.length > MAX_BILL_TEXT_LENGTH) {
    billText = billText.slice(0, MAX_BILL_TEXT_LENGTH) + "\n\n[Text truncated]";
  }

  const response = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 4096,
    system: BILL_SUMMARY_SYSTEM,
    messages: [
      {
        role: "user",
        content: billSummaryPrompt(title, longTitle, billText, billType),
      },
    ],
  });

  const text =
    response.content[0].type === "text" ? response.content[0].text : "";

  const tokensUsed =
    (response.usage?.input_tokens || 0) +
    (response.usage?.output_tokens || 0);

  // Parse JSON response
  const cleaned = text.replace(/```json\n?|\n?```/g, "").trim();
  const summary = JSON.parse(cleaned) as BillSummaryData;

  // Validate structure
  if (
    !summary.overview ||
    !summary.purpose ||
    !Array.isArray(summary.keyChanges) ||
    !Array.isArray(summary.impacts) ||
    !summary.tldr
  ) {
    throw new Error("Invalid summary structure from AI");
  }

  return { summary, tokensUsed };
}

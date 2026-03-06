import { anthropic } from "./client";
import { BILL_SUMMARY_SYSTEM, billSummaryPrompt } from "./prompts";
import { fetchBillText } from "../legislation/fetcher";

export interface BillSummaryData {
  overview: string;
  purpose: string;
  keyChanges: string[];
  impacts: Array<{ group: string; impact: string }>;
  implementation: string;
  extent: string;
  delegatedPowers: string;
  tldr: string;
}

const MODEL = "claude-sonnet-4-6";
const MAX_BILL_TEXT_LENGTH = 80000; // ~20k tokens
const MAX_EN_LENGTH = 20000; // ~5k tokens

export async function generateBillSummary(
  title: string,
  longTitle: string,
  billType: string,
  legislationUrl?: string | null,
  explanatoryNotesUrl?: string | null
): Promise<{ summary: BillSummaryData; tokensUsed: number }> {
  // Fetch bill text and explanatory notes in parallel
  const [billText, explanatoryNotes] = await Promise.all([
    legislationUrl
      ? fetchBillText(legislationUrl).catch((err) => {
          console.warn("Could not fetch bill text from legislation.gov.uk:", err);
          return "";
        })
      : Promise.resolve(""),
    explanatoryNotesUrl
      ? fetchBillText(explanatoryNotesUrl).catch((err) => {
          console.warn("Could not fetch explanatory notes:", err);
          return "";
        })
      : Promise.resolve(""),
  ]);

  // Fall back to long title if no bill text fetched
  const finalBillText = billText || longTitle;

  const truncatedBillText =
    finalBillText.length > MAX_BILL_TEXT_LENGTH
      ? finalBillText.slice(0, MAX_BILL_TEXT_LENGTH) + "\n\n[Text truncated]"
      : finalBillText;

  const truncatedEN =
    explanatoryNotes.length > MAX_EN_LENGTH
      ? explanatoryNotes.slice(0, MAX_EN_LENGTH) + "\n\n[Truncated]"
      : explanatoryNotes;

  const response = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 4096,
    system: BILL_SUMMARY_SYSTEM,
    messages: [
      {
        role: "user",
        content: billSummaryPrompt(
          title,
          longTitle,
          truncatedBillText,
          billType,
          truncatedEN || undefined
        ),
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

  // Validate required fields
  if (
    !summary.overview ||
    !summary.purpose ||
    !Array.isArray(summary.keyChanges) ||
    !Array.isArray(summary.impacts) ||
    !summary.tldr
  ) {
    throw new Error("Invalid summary structure from AI");
  }

  // Default new fields for summaries generated without them (graceful)
  summary.extent = summary.extent || "Not specified in available text";
  summary.delegatedPowers = summary.delegatedPowers || "Not assessed";

  return { summary, tokensUsed };
}

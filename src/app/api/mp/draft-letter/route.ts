import { NextRequest, NextResponse } from "next/server";
import { anthropic } from "@/lib/ai/client";
import { LETTER_DRAFT_SYSTEM, draftLetterPrompt } from "@/lib/ai/prompts";

const MODEL = "claude-sonnet-4-5-20250929";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { billTitle, billSummary, mpName, constituency, stance, personalNote } =
      body;

    if (!billTitle || !billSummary || !mpName || !constituency || !stance) {
      return NextResponse.json(
        { error: "Missing required fields: billTitle, billSummary, mpName, constituency, stance" },
        { status: 400 }
      );
    }

    if (!["support", "oppose", "concerned"].includes(stance)) {
      return NextResponse.json(
        { error: "stance must be one of: support, oppose, concerned" },
        { status: 400 }
      );
    }

    const prompt = draftLetterPrompt(
      billTitle,
      billSummary,
      mpName,
      constituency,
      stance as "support" | "oppose" | "concerned",
      personalNote
    );

    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 1024,
      system: LETTER_DRAFT_SYSTEM,
      messages: [{ role: "user", content: prompt }],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "";

    const subject = `Regarding the ${billTitle}`;

    return NextResponse.json({
      letter: text.trim(),
      subject,
    });
  } catch (error) {
    console.error("Letter draft error:", error);
    const message =
      error instanceof Error && error.message.includes("ANTHROPIC_API_KEY")
        ? "AI service is not configured. Please set the ANTHROPIC_API_KEY environment variable."
        : "Failed to draft letter. Please try again.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { anthropic } from "@/lib/ai/client";
import { BILL_SUMMARY_SYSTEM, translatePrompt } from "@/lib/ai/prompts";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { language } = body;

  if (!language || language === "en") {
    return NextResponse.json(
      { error: "Invalid language" },
      { status: 400 }
    );
  }

  const languageNames: Record<string, string> = {
    cy: "Welsh",
    ur: "Urdu",
    pl: "Polish",
    ar: "Arabic",
  };

  const langName = languageNames[language];
  if (!langName) {
    return NextResponse.json(
      { error: "Unsupported language" },
      { status: 400 }
    );
  }

  try {
    // Get the English summary
    const englishSummary = await prisma.billSummary.findFirst({
      where: { billId: id, language: "en" },
      orderBy: { version: "desc" },
    });

    if (!englishSummary) {
      return NextResponse.json(
        { error: "No English summary to translate" },
        { status: 404 }
      );
    }

    // Check if translation already exists
    const existing = await prisma.billSummary.findFirst({
      where: { billId: id, language },
      orderBy: { version: "desc" },
    });

    if (existing) {
      return NextResponse.json({ summary: existing, cached: true });
    }

    // Generate translation
    const keyChanges = Array.isArray(englishSummary.keyChanges)
      ? (englishSummary.keyChanges as string[])
      : JSON.parse(englishSummary.keyChanges as string);

    const impacts = Array.isArray(englishSummary.impacts)
      ? (englishSummary.impacts as Array<{ group: string; impact: string }>)
      : JSON.parse(englishSummary.impacts as string);

    const prompt = translatePrompt(
      {
        overview: englishSummary.overview,
        purpose: englishSummary.purpose,
        keyChanges,
        impacts,
        implementation: englishSummary.implementation || "",
        tldr: englishSummary.tldr,
      },
      langName
    );

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 4096,
      system: BILL_SUMMARY_SYSTEM,
      messages: [{ role: "user", content: prompt }],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "";
    const cleaned = text.replace(/```json\n?|\n?```/g, "").trim();
    const translated = JSON.parse(cleaned);

    const saved = await prisma.billSummary.create({
      data: {
        billId: id,
        language,
        version: 1,
        overview: translated.overview,
        purpose: translated.purpose,
        keyChanges: translated.keyChanges,
        impacts: translated.impacts,
        implementation: translated.implementation || "",
        tldr: translated.tldr,
        tokensUsed:
          (response.usage?.input_tokens || 0) +
          (response.usage?.output_tokens || 0),
      },
    });

    return NextResponse.json({ summary: saved, cached: false });
  } catch (error) {
    console.error("Translation error:", error);
    return NextResponse.json(
      { error: "Failed to translate summary" },
      { status: 500 }
    );
  }
}

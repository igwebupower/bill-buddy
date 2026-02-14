import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { generateBillSummary } from "@/lib/ai/summarize";
import { getBillById } from "@/lib/parliament/client";
import { anthropic } from "@/lib/ai/client";
import { BILL_SUMMARY_SYSTEM, translatePrompt } from "@/lib/ai/prompts";

const SUPPORTED_LANGUAGES: Record<string, string> = {
  cy: "Welsh",
  ur: "Urdu",
  pl: "Polish",
  ar: "Arabic",
};

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Read requested language from body (default "en")
  let language = "en";
  try {
    const body = await request.json();
    if (body.language && typeof body.language === "string") {
      language = body.language;
    }
  } catch {
    // No body or invalid JSON — default to "en"
  }

  // Validate language
  if (language !== "en" && !SUPPORTED_LANGUAGES[language]) {
    return NextResponse.json(
      { error: "Unsupported language" },
      { status: 400 }
    );
  }

  try {
    const parliamentId = parseInt(id, 10);

    // Try to find bill in DB
    let bill: {
      id: string;
      shortTitle: string;
      longTitle: string;
      billTypeCategory: string | null;
      legislationGovUrl: string | null;
      summaries: Array<{
        overview: string;
        purpose: string;
        keyChanges: unknown;
        impacts: unknown;
        implementation: string | null;
        tldr: string;
      }>;
    } | null = null;

    try {
      bill = await prisma.bill.findFirst({
        where: {
          OR: [
            { id },
            { parliamentId: isNaN(parliamentId) ? -1 : parliamentId },
          ],
        },
        include: {
          summaries: {
            where: { language },
            orderBy: { version: "desc" },
            take: 1,
          },
        },
      });

      // If bill not in DB, fetch from Parliament API and create
      if (!bill && !isNaN(parliamentId)) {
        const pBill = await getBillById(parliamentId);

        bill = await prisma.bill.create({
          data: {
            parliamentId: pBill.billId,
            shortTitle: pBill.shortTitle,
            longTitle: pBill.longTitle,
            billTypeId: pBill.billTypeId,
            billTypeCategory: pBill.billTypeCategory,
            currentHouse: pBill.currentHouse,
            currentStage: pBill.currentStage?.description || null,
            originatingHouse: pBill.originatingHouse,
            lastUpdate: pBill.lastUpdate
              ? new Date(pBill.lastUpdate)
              : null,
            isAct: pBill.isAct,
            isDefeated: pBill.isDefeated,
            sessionId: pBill.sessions?.[0]?.id || null,
            sessionName: pBill.sessions?.[0]?.name || null,
          },
          include: {
            summaries: {
              where: { language },
              orderBy: { version: "desc" },
              take: 1,
            },
          },
        });
      }
    } catch (dbError) {
      console.error("DB unavailable for summary generation:", dbError);
    }

    // If bill found in DB with existing summary in requested language, return it
    if (bill?.summaries && bill.summaries.length > 0) {
      return NextResponse.json({
        summary: bill.summaries[0],
        language,
        cached: true,
      });
    }

    // For non-English: ensure English summary exists first, then translate
    if (language !== "en" && bill?.id) {
      // Check for cached English summary
      let englishSummary = await prisma.billSummary.findFirst({
        where: { billId: bill.id, language: "en" },
        orderBy: { version: "desc" },
      });

      // Generate English summary if it doesn't exist
      if (!englishSummary) {
        const shortTitle = bill.shortTitle;
        const longTitle = bill.longTitle;
        const billTypeCategory = bill.billTypeCategory || "Government";
        const legislationGovUrl = bill.legislationGovUrl || null;

        if (!shortTitle || !longTitle) {
          return NextResponse.json({ error: "Bill not found" }, { status: 404 });
        }

        const { summary: enSummary, tokensUsed } = await generateBillSummary(
          shortTitle,
          longTitle,
          billTypeCategory,
          legislationGovUrl
        );

        try {
          englishSummary = await prisma.billSummary.create({
            data: {
              billId: bill.id,
              language: "en",
              version: 1,
              overview: enSummary.overview,
              purpose: enSummary.purpose,
              keyChanges: enSummary.keyChanges,
              impacts: enSummary.impacts,
              implementation: enSummary.implementation || "",
              tldr: enSummary.tldr,
              tokensUsed,
            },
          });
        } catch (saveError) {
          console.error("Failed to save English summary:", saveError);
          // Use in-memory summary for translation
          englishSummary = {
            id: "",
            billId: bill.id,
            language: "en",
            version: 1,
            overview: enSummary.overview,
            purpose: enSummary.purpose,
            keyChanges: enSummary.keyChanges,
            impacts: enSummary.impacts,
            implementation: enSummary.implementation || "",
            tldr: enSummary.tldr,
            modelUsed: "claude-sonnet-4-5-20250929",
            tokensUsed,
            generatedAt: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          };
        }
      }

      // Translate the English summary
      const keyChanges = Array.isArray(englishSummary.keyChanges)
        ? (englishSummary.keyChanges as string[])
        : JSON.parse(englishSummary.keyChanges as string);

      const impacts = Array.isArray(englishSummary.impacts)
        ? (englishSummary.impacts as Array<{ group: string; impact: string }>)
        : JSON.parse(englishSummary.impacts as string);

      const langName = SUPPORTED_LANGUAGES[language];
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

      // Save translated summary
      let savedTranslation = null;
      try {
        savedTranslation = await prisma.billSummary.create({
          data: {
            billId: bill.id,
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
      } catch (saveError) {
        console.error("Failed to save translation:", saveError);
      }

      return NextResponse.json({
        summary: savedTranslation || translated,
        language,
        cached: false,
      });
    }

    // English summary generation (original flow)
    let shortTitle = bill?.shortTitle;
    let longTitle = bill?.longTitle;
    let billTypeCategory = bill?.billTypeCategory || "Government";
    let legislationGovUrl = bill?.legislationGovUrl || null;

    if (!shortTitle && !isNaN(parliamentId)) {
      const pBill = await getBillById(parliamentId);
      shortTitle = pBill.shortTitle;
      longTitle = pBill.longTitle;
      billTypeCategory = pBill.billTypeCategory;
    }

    if (!shortTitle || !longTitle) {
      return NextResponse.json({ error: "Bill not found" }, { status: 404 });
    }

    // Generate summary
    const { summary, tokensUsed } = await generateBillSummary(
      shortTitle,
      longTitle,
      billTypeCategory,
      legislationGovUrl
    );

    // Try to save to DB (non-critical)
    let savedSummary = null;
    if (bill?.id) {
      try {
        savedSummary = await prisma.billSummary.create({
          data: {
            billId: bill.id,
            language: "en",
            version: 1,
            overview: summary.overview,
            purpose: summary.purpose,
            keyChanges: summary.keyChanges,
            impacts: summary.impacts,
            implementation: summary.implementation || "",
            tldr: summary.tldr,
            tokensUsed,
          },
        });
      } catch (saveError) {
        console.error("Failed to save summary to DB:", saveError);
      }
    }

    return NextResponse.json({
      summary: savedSummary || summary,
      language: "en",
      cached: false,
    });
  } catch (error) {
    console.error("Error generating summary:", error);
    return NextResponse.json(
      { error: "Failed to generate summary" },
      { status: 500 }
    );
  }
}

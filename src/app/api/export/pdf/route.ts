import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getBillById } from "@/lib/parliament/client";
import { jsPDF } from "jspdf";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { billId } = body;

    if (!billId) {
      return NextResponse.json(
        { error: "billId is required" },
        { status: 400 }
      );
    }

    const parliamentId = parseInt(billId, 10);

    // Fetch bill from DB
    const dbBill = await prisma.bill.findFirst({
      where: {
        OR: [
          { id: billId },
          { parliamentId: isNaN(parliamentId) ? -1 : parliamentId },
        ],
      },
      include: {
        summaries: {
          where: { language: "en" },
          orderBy: { version: "desc" },
          take: 1,
        },
      },
    });

    let shortTitle: string;
    let longTitle: string;
    let currentHouse: string | null = null;
    let currentStage: string | null = null;
    let tldr: string | null = null;
    let overview: string | null = null;
    let keyChanges: string[] = [];
    let impacts: Array<{ group: string; impact: string }> = [];
    let implementation: string | null = null;

    if (dbBill) {
      shortTitle = dbBill.shortTitle;
      longTitle = dbBill.longTitle;
      currentHouse = dbBill.currentHouse;
      currentStage = dbBill.currentStage;

      if (dbBill.summaries.length > 0) {
        const summary = dbBill.summaries[0];
        tldr = summary.tldr;
        overview = summary.overview;
        implementation = summary.implementation;

        keyChanges =
          typeof summary.keyChanges === "string"
            ? JSON.parse(summary.keyChanges)
            : Array.isArray(summary.keyChanges)
              ? (summary.keyChanges as string[])
              : [];

        impacts =
          typeof summary.impacts === "string"
            ? JSON.parse(summary.impacts)
            : Array.isArray(summary.impacts)
              ? (summary.impacts as Array<{ group: string; impact: string }>)
              : [];
      }
    } else if (!isNaN(parliamentId)) {
      // Fallback to Parliament API
      const bill = await getBillById(parliamentId);
      shortTitle = bill.shortTitle;
      longTitle = bill.longTitle;
      currentHouse = bill.currentHouse;
      currentStage = bill.currentStage?.description || null;
    } else {
      return NextResponse.json(
        { error: "Bill not found" },
        { status: 404 }
      );
    }

    // Generate PDF
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const marginLeft = 20;
    const marginRight = 20;
    const contentWidth = pageWidth - marginLeft - marginRight;
    let yPos = 25;

    // Helper: add text with wrapping and page break handling
    function addWrappedText(
      text: string,
      x: number,
      y: number,
      maxWidth: number,
      lineHeight: number
    ): number {
      const lines = doc.splitTextToSize(text, maxWidth);
      for (const line of lines) {
        if (y > 270) {
          doc.addPage();
          y = 25;
        }
        doc.text(line, x, y);
        y += lineHeight;
      }
      return y;
    }

    // Helper: add a section heading
    function addHeading(text: string, y: number): number {
      if (y > 255) {
        doc.addPage();
        y = 25;
      }
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(60, 80, 140);
      doc.text(text, marginLeft, y);
      y += 2;
      doc.setDrawColor(60, 80, 140);
      doc.setLineWidth(0.3);
      doc.line(marginLeft, y, marginLeft + contentWidth, y);
      y += 6;
      doc.setTextColor(40, 40, 40);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      return y;
    }

    // --- Header ---
    doc.setFontSize(8);
    doc.setTextColor(130, 130, 130);
    doc.text("BillBrief - UK Parliament Bills Made Simple", marginLeft, 15);
    doc.text(
      `Generated ${new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}`,
      pageWidth - marginRight,
      15,
      { align: "right" }
    );

    // Separator line under header
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.2);
    doc.line(marginLeft, 18, pageWidth - marginRight, 18);

    // --- Bill title ---
    yPos = 28;
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30, 30, 60);
    const titleLines = doc.splitTextToSize(shortTitle, contentWidth);
    for (const line of titleLines) {
      doc.text(line, marginLeft, yPos);
      yPos += 7;
    }

    // --- Meta info ---
    yPos += 2;
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 100, 100);
    const metaParts: string[] = [];
    if (currentHouse) metaParts.push(currentHouse);
    if (currentStage) metaParts.push(currentStage);
    if (metaParts.length > 0) {
      doc.text(metaParts.join("  |  "), marginLeft, yPos);
      yPos += 5;
    }

    // --- Long title ---
    yPos += 1;
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    yPos = addWrappedText(longTitle, marginLeft, yPos, contentWidth, 4.5);
    yPos += 6;

    // --- TLDR ---
    if (tldr) {
      yPos = addHeading("TL;DR", yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(40, 40, 40);
      yPos = addWrappedText(tldr, marginLeft, yPos, contentWidth, 5);
      doc.setFont("helvetica", "normal");
      yPos += 6;
    }

    // --- Overview ---
    if (overview) {
      yPos = addHeading("Overview", yPos);
      yPos = addWrappedText(overview, marginLeft, yPos, contentWidth, 5);
      yPos += 6;
    }

    // --- Key Changes ---
    if (keyChanges.length > 0) {
      yPos = addHeading("Key Changes", yPos);
      for (let i = 0; i < keyChanges.length; i++) {
        if (yPos > 265) {
          doc.addPage();
          yPos = 25;
        }
        const bulletText = `${i + 1}. ${keyChanges[i]}`;
        yPos = addWrappedText(
          bulletText,
          marginLeft + 2,
          yPos,
          contentWidth - 4,
          5
        );
        yPos += 2;
      }
      yPos += 4;
    }

    // --- Impacts ---
    if (impacts.length > 0) {
      yPos = addHeading("Who Is Affected", yPos);
      for (const impact of impacts) {
        if (yPos > 260) {
          doc.addPage();
          yPos = 25;
        }
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text(impact.group, marginLeft + 2, yPos);
        yPos += 5;
        doc.setFont("helvetica", "normal");
        yPos = addWrappedText(
          impact.impact,
          marginLeft + 2,
          yPos,
          contentWidth - 4,
          5
        );
        yPos += 4;
      }
      yPos += 2;
    }

    // --- Implementation timeline ---
    if (implementation) {
      yPos = addHeading("Implementation Timeline", yPos);
      yPos = addWrappedText(
        implementation,
        marginLeft,
        yPos,
        contentWidth,
        5
      );
      yPos += 6;
    }

    // --- Footer on every page ---
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(7);
      doc.setTextColor(150, 150, 150);
      doc.text(
        "Powered by BillBrief - billbrief.co.uk",
        marginLeft,
        287
      );
      doc.text(
        `Page ${i} of ${totalPages}`,
        pageWidth - marginRight,
        287,
        { align: "right" }
      );
    }

    // Output PDF as ArrayBuffer
    const pdfArrayBuffer = doc.output("arraybuffer");

    return new NextResponse(pdfArrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${shortTitle.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-")}-summary.pdf"`,
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}

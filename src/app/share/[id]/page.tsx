import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { getBillById } from "@/lib/parliament/client";
import { ScrollText, ArrowRight, ExternalLink } from "lucide-react";

interface SharePageProps {
  params: Promise<{ id: string }>;
}

async function getShareData(id: string) {
  // Try DB first (id could be cuid or parliamentId)
  const parliamentId = parseInt(id, 10);

  const dbBill = await prisma.bill.findFirst({
    where: {
      OR: [
        { id },
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

  if (dbBill && dbBill.summaries.length > 0) {
    const summary = dbBill.summaries[0];
    const keyChanges: string[] =
      typeof summary.keyChanges === "string"
        ? JSON.parse(summary.keyChanges)
        : Array.isArray(summary.keyChanges)
          ? (summary.keyChanges as string[])
          : [];

    return {
      id: dbBill.id,
      parliamentId: dbBill.parliamentId,
      shortTitle: dbBill.shortTitle,
      longTitle: dbBill.longTitle,
      currentHouse: dbBill.currentHouse,
      currentStage: dbBill.currentStage,
      tldr: summary.tldr,
      overview: summary.overview,
      keyChanges,
    };
  }

  // Fallback: fetch from Parliament API (no summary available)
  if (!isNaN(parliamentId)) {
    try {
      const bill = await getBillById(parliamentId);
      return {
        id: String(bill.billId),
        parliamentId: bill.billId,
        shortTitle: bill.shortTitle,
        longTitle: bill.longTitle,
        currentHouse: bill.currentHouse,
        currentStage: bill.currentStage?.description || null,
        tldr: null,
        overview: null,
        keyChanges: [] as string[],
      };
    } catch {
      return null;
    }
  }

  return null;
}

export async function generateMetadata({
  params,
}: SharePageProps): Promise<Metadata> {
  const { id } = await params;
  const data = await getShareData(id);

  if (!data) {
    return {
      title: "Bill Not Found",
      description: "This bill could not be found.",
    };
  }

  const title = `${data.shortTitle} | BillBrief`;
  const description =
    data.tldr || data.longTitle || "Plain English summary of a UK Parliamentary bill.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "BillBrief",
      url: `/share/${id}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function SharePage({ params }: SharePageProps) {
  const { id } = await params;
  const data = await getShareData(id);

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <ScrollText className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
          <h1 className="text-xl font-semibold mb-2">Bill not found</h1>
          <p className="text-sm text-muted-foreground mb-6">
            This bill may have been removed or the link is invalid.
          </p>
          <Link
            href="/bills"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Browse all bills
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  const billDetailHref = `/bills/${data.parliamentId}`;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-20">
        <div className="w-full max-w-2xl space-y-6">
          {/* Bill card */}
          <div className="rounded-xl border border-border/60 bg-card shadow-lg overflow-hidden">
            {/* Header bar */}
            <div className="bg-primary/10 border-b border-primary/20 px-6 py-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                {data.currentHouse && (
                  <span className="font-medium">{data.currentHouse}</span>
                )}
                {data.currentHouse && data.currentStage && (
                  <span className="text-border">|</span>
                )}
                {data.currentStage && <span>{data.currentStage}</span>}
              </div>
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                {data.shortTitle}
              </h1>
            </div>

            {/* Body */}
            <div className="px-6 py-5 space-y-5">
              {/* TLDR */}
              {data.tldr && (
                <div className="rounded-lg bg-primary/5 border border-primary/15 p-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1.5">
                    TL;DR
                  </p>
                  <p className="text-sm font-medium leading-relaxed">
                    {data.tldr}
                  </p>
                </div>
              )}

              {/* Overview */}
              {data.overview && (
                <div>
                  <h2 className="text-sm font-semibold text-muted-foreground mb-2">
                    Overview
                  </h2>
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {data.overview}
                  </p>
                </div>
              )}

              {/* Key changes */}
              {data.keyChanges.length > 0 && (
                <div>
                  <h2 className="text-sm font-semibold text-muted-foreground mb-3">
                    Key Changes
                  </h2>
                  <ul className="space-y-2.5">
                    {data.keyChanges.map((change, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-sm leading-relaxed">{change}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* No summary fallback */}
              {!data.tldr && !data.overview && (
                <div className="text-center py-6">
                  <p className="text-sm text-muted-foreground mb-1">
                    No summary has been generated for this bill yet.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    View the full bill page to generate one.
                  </p>
                </div>
              )}

              {/* View full bill link */}
              <div className="pt-2">
                <Link
                  href={billDetailHref}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  View full bill details
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6 px-4">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            <ScrollText className="h-4 w-4" />
            BillBrief
          </Link>
          <p className="text-xs text-muted-foreground text-center">
            Plain-English summaries of UK Parliamentary bills
          </p>
        </div>
      </footer>
    </div>
  );
}

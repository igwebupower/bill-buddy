"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { SummarySection } from "@/components/bills/SummarySection";
import { StageTimeline } from "@/components/bills/StageTimeline";
import { TrackButton } from "@/components/bills/TrackButton";
import { ShareDialog } from "@/components/bills/ShareDialog";
import { getHouseColor } from "@/lib/parliament/client";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  ScrollText,
  User,
  BookmarkPlus,
  Share2,
  FileText,
} from "lucide-react";
import Link from "next/link";

interface BillDetail {
  id: string;
  parliamentId: number;
  shortTitle: string;
  longTitle: string;
  currentHouse: string | null;
  currentStage: string | null;
  originatingHouse: string | null;
  billTypeCategory: string | null;
  isAct: boolean;
  isDefeated: boolean;
  billWithdrawn: string | null;
  lastUpdate: string | null;
  sessionName: string | null;
  stages: Array<{
    stageId?: number;
    stageName: string;
    house: string;
    sortOrder?: number;
    sittingDate?: string | null;
  }>;
  sponsors: Array<{
    memberId?: number | null;
    name: string;
    party?: string | null;
    constituency?: string | null;
    photoUrl?: string | null;
  }>;
  publications: Array<{
    publicationType: string;
    title: string;
    url: string;
  }>;
  summaries: Array<{
    overview: string;
    purpose: string;
    keyChanges: string[];
    impacts: Array<{ group: string; impact: string }>;
    implementation?: string | null;
    tldr: string;
  }>;
  policyTopics?: string[];
}

interface BillDetailClientProps {
  id: string;
}

export function BillDetailClient({ id }: BillDetailClientProps) {
  const [bill, setBill] = useState<BillDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/bills/${id}`);
        if (!res.ok) throw new Error("Bill not found");
        const data = await res.json();
        setBill(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load bill");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl space-y-6">
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-5 w-full" />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <Skeleton className="h-40" />
            <Skeleton className="h-60" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-60" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !bill) {
    return (
      <div className="mx-auto max-w-4xl text-center py-16">
        <ScrollText className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
        <h2 className="text-lg font-medium">{error || "Bill not found"}</h2>
        <Button variant="outline" asChild className="mt-4">
          <Link href="/bills">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Bills
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <motion.div
      className="mx-auto max-w-4xl space-y-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Back link */}
      <Link
        href="/bills"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        All Bills
      </Link>

      {/* Header */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {bill.currentHouse && (
            <Badge
              variant="outline"
              className={cn("text-xs", getHouseColor(bill.currentHouse))}
            >
              {bill.currentHouse}
            </Badge>
          )}
          {bill.billTypeCategory && (
            <Badge variant="secondary" className="text-xs">
              {bill.billTypeCategory}
            </Badge>
          )}
          {bill.isAct && (
            <Badge className="bg-emerald-500/15 text-emerald-400 border-emerald-500/30 text-xs">
              Act of Parliament
            </Badge>
          )}
          {bill.isDefeated && (
            <Badge variant="destructive" className="text-xs">
              Defeated
            </Badge>
          )}
          {bill.sessionName && (
            <Badge variant="outline" className="text-xs">
              {bill.sessionName}
            </Badge>
          )}
        </div>

        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {bill.shortTitle}
        </h1>

        <p className="text-muted-foreground">{bill.longTitle}</p>

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          <TrackButton
            billId={id}
            parliamentId={bill.parliamentId}
            billTitle={bill.shortTitle}
          />
          <ShareDialog
            billId={id}
            billTitle={bill.shortTitle}
            tldr={bill.summaries?.[0]?.tldr || bill.longTitle}
          />
        </div>
      </div>

      <Separator />

      {/* Main content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left: Summary */}
        <div className="lg:col-span-2 space-y-6">
          <section>
            <h2 className="text-lg font-semibold mb-4">AI Summary</h2>
            <SummarySection
              billId={id}
              existingSummary={bill.summaries?.[0] || null}
            />
          </section>
        </div>

        {/* Right: Sidebar */}
        <div className="space-y-6">
          {/* Stage Timeline */}
          <Card className="p-5">
            <h3 className="text-sm font-semibold mb-4">Progress</h3>
            <StageTimeline
              stages={bill.stages}
              currentStage={bill.currentStage}
            />
          </Card>

          {/* Sponsors */}
          {bill.sponsors.length > 0 && (
            <Card className="p-5">
              <h3 className="text-sm font-semibold mb-3">Sponsors</h3>
              <div className="space-y-3">
                {bill.sponsors.map((sponsor, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                      <User className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{sponsor.name}</p>
                      {sponsor.party && (
                        <p className="text-xs text-muted-foreground">
                          {sponsor.party}
                          {sponsor.constituency
                            ? ` - ${sponsor.constituency}`
                            : ""}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Publications */}
          {bill.publications && bill.publications.length > 0 && (
            <Card className="p-5">
              <h3 className="text-sm font-semibold mb-3">Documents</h3>
              <div className="space-y-2">
                {bill.publications.map((pub, i) => (
                  <a
                    key={i}
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <FileText className="h-4 w-4 shrink-0" />
                    <span className="line-clamp-1">{pub.title}</span>
                    <ExternalLink className="h-3 w-3 shrink-0 ml-auto" />
                  </a>
                ))}
              </div>
            </Card>
          )}

          {/* Meta */}
          <Card className="p-5">
            <h3 className="text-sm font-semibold mb-3">Details</h3>
            <dl className="space-y-2 text-sm">
              {bill.currentStage && (
                <div>
                  <dt className="text-muted-foreground">Current Stage</dt>
                  <dd className="font-medium">{bill.currentStage}</dd>
                </div>
              )}
              {bill.originatingHouse && (
                <div>
                  <dt className="text-muted-foreground">Originating House</dt>
                  <dd className="font-medium">{bill.originatingHouse}</dd>
                </div>
              )}
              {bill.lastUpdate && (
                <div>
                  <dt className="text-muted-foreground">Last Updated</dt>
                  <dd className="font-medium">
                    {new Date(bill.lastUpdate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </dd>
                </div>
              )}
            </dl>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}

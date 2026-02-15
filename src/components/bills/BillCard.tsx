"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ScrollText, ArrowRight, Calendar } from "lucide-react";
import { getHouseColor, getStageProgress } from "@/lib/parliament/client";
import { cn } from "@/lib/utils";

interface BillCardProps {
  bill: {
    id?: string;
    parliamentId: number;
    shortTitle: string;
    longTitle?: string;
    currentHouse: string | null;
    currentStage: string | null;
    billTypeCategory?: string;
    isAct?: boolean;
    isDefeated?: boolean;
    lastUpdate?: string;
    sponsors?: Array<{
      name: string;
      party?: string | null;
    }>;
    summaries?: Array<{
      tldr?: string;
    }>;
  };
}

export function BillCard({ bill }: BillCardProps) {
  const progress = getStageProgress(bill.currentStage);

  return (
    <Link href={`/bills/${bill.parliamentId}`}>
      <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:shadow-md hover:border-primary/30">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 h-0.5 w-full bg-muted">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="space-y-3">
          {/* Header: badges with dot indicators */}
          <div className="flex flex-wrap items-center gap-2">
            {bill.currentHouse && (
              <Badge
                variant="outline"
                className={cn(
                  "text-xs gap-1.5",
                  getHouseColor(bill.currentHouse)
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    bill.currentHouse === "Commons"
                      ? "bg-commons-text"
                      : "bg-lords-text"
                  )}
                />
                {bill.currentHouse}
              </Badge>
            )}
            {bill.billTypeCategory && (
              <Badge variant="secondary" className="text-xs">
                {bill.billTypeCategory}
              </Badge>
            )}
            {bill.isAct && (
              <Badge className="bg-commons-bg text-commons-text border-commons-text/30 text-xs">
                Act of Parliament
              </Badge>
            )}
            {bill.isDefeated && (
              <Badge variant="destructive" className="text-xs">
                Defeated
              </Badge>
            )}
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {bill.shortTitle}
          </h3>

          {/* Summary or long title */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {bill.summaries?.[0]?.tldr ||
              bill.longTitle ||
              "No summary available yet"}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              {bill.currentStage && (
                <span className="flex items-center gap-1">
                  <ScrollText className="h-3.5 w-3.5" />
                  {bill.currentStage}
                </span>
              )}
              {bill.lastUpdate && (
                <span className="flex items-center gap-1 font-mono-numbers">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(bill.lastUpdate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              )}
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
          </div>

          {/* Sponsors */}
          {bill.sponsors && bill.sponsors.length > 0 && (
            <div className="text-xs text-muted-foreground">
              {bill.sponsors.map((s) => s.name).join(", ")}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

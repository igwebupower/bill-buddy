"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
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
  const billId = bill.id || String(bill.parliamentId);

  return (
    <Link href={`/bills/${bill.parliamentId}`}>
      <Card className="group relative overflow-hidden border-border/50 bg-card/50 p-5 transition-all duration-200 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 h-0.5 w-full bg-muted">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="space-y-3">
          {/* Header: badges */}
          <div className="flex flex-wrap items-center gap-2">
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
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {bill.shortTitle}
          </h3>

          {/* Summary or long title */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {bill.summaries?.[0]?.tldr || bill.longTitle || "No summary available yet"}
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
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(bill.lastUpdate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              )}
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </div>

          {/* Sponsors */}
          {bill.sponsors && bill.sponsors.length > 0 && (
            <div className="text-xs text-muted-foreground">
              {bill.sponsors.map((s) => s.name).join(", ")}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getHouseColor, getStageProgress } from "@/lib/parliament/client";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  ScrollText,
  ArrowRight,
  Filter,
} from "lucide-react";

interface TimelineBill {
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
  sponsors?: Array<{ name: string; party?: string | null }>;
}

interface MonthGroup {
  label: string;
  sortKey: string;
  bills: TimelineBill[];
}

type HouseFilter = "all" | "Commons" | "Lords";

function groupBillsByMonth(bills: TimelineBill[]): MonthGroup[] {
  const grouped: Record<string, TimelineBill[]> = {};

  for (const bill of bills) {
    const date = bill.lastUpdate ? new Date(bill.lastUpdate) : new Date();
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(bill);
  }

  return Object.entries(grouped)
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([sortKey, bills]) => ({
      label: bills[0].lastUpdate
        ? new Date(bills[0].lastUpdate).toLocaleDateString("en-GB", {
            month: "long",
            year: "numeric",
          })
        : "Unknown",
      sortKey,
      bills,
    }));
}

function getBarColor(house: string | null): string {
  switch (house) {
    case "Commons":
      return "bg-commons-text/80";
    case "Lords":
      return "bg-lords-text/80";
    default:
      return "bg-muted-foreground/50";
  }
}

function getBarTrackColor(house: string | null): string {
  switch (house) {
    case "Commons":
      return "bg-commons-bg";
    case "Lords":
      return "bg-lords-bg";
    default:
      return "bg-muted/50";
  }
}

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", stiffness: 200, damping: 22 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.04 } },
};

export function TimelineClient() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [bills, setBills] = useState<TimelineBill[]>([]);
  const [loading, setLoading] = useState(true);
  const [houseFilter, setHouseFilter] = useState<HouseFilter>("all");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/bills?take=30");
        const data = await res.json();
        setBills(data.items || []);
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filteredBills =
    houseFilter === "all"
      ? bills
      : bills.filter((b) => b.currentHouse === houseFilter);

  const monthGroups = groupBillsByMonth(filteredBills);

  function scrollTimeline(direction: "left" | "right") {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.6;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex gap-2">
          <Skeleton className="h-9 w-20" />
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-9 w-20" />
        </div>
        <Skeleton className="h-[500px] w-full" />
      </div>
    );
  }

  if (bills.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-card p-12 text-center">
        <ScrollText className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
        <h3 className="text-lg font-medium mb-1">No bills to display</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Bills will appear here once data is available
        </p>
        <Button asChild>
          <a href="/bills">
            Browse Bills
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Filter controls */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <div className="flex gap-1.5">
            {(["all", "Commons", "Lords"] as const).map((filter) => (
              <Button
                key={filter}
                variant={houseFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setHouseFilter(filter)}
                className={cn(
                  "text-xs h-8",
                  houseFilter !== filter && "border-border"
                )}
              >
                {filter === "all" ? "All Houses" : filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 border-border"
            onClick={() => scrollTimeline("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 border-border"
            onClick={() => scrollTimeline("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-sm bg-commons-text/80" />
          <span>Commons</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-sm bg-lords-text/80" />
          <span>Lords</span>
        </div>
        <div className="ml-auto text-muted-foreground/60">
          Bar width indicates stage progress
        </div>
      </div>

      {/* Horizontal scrollable timeline */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <ScrollArea className="w-full">
          <div ref={scrollRef} className="overflow-x-auto">
            <div className="flex min-w-max">
              {monthGroups.map((group, groupIdx) => (
                <div
                  key={group.sortKey}
                  className={cn(
                    "flex-shrink-0 w-[340px]",
                    groupIdx < monthGroups.length - 1 &&
                      "border-r border-border"
                  )}
                >
                  {/* Month header */}
                  <div className="sticky top-0 z-10 bg-card border-b border-border px-4 py-3">
                    <h3 className="text-sm font-semibold">{group.label}</h3>
                    <p className="text-xs text-muted-foreground font-mono-numbers">
                      {group.bills.length} bill
                      {group.bills.length !== 1 ? "s" : ""}
                    </p>
                  </div>

                  {/* Bills in this month */}
                  <motion.div
                    className="p-3 space-y-2"
                    initial="initial"
                    animate="animate"
                    variants={stagger}
                  >
                    {group.bills.map((bill) => {
                      const progress = getStageProgress(bill.currentStage);

                      return (
                        <motion.div
                          key={bill.parliamentId}
                          variants={fadeUp}
                          className="group cursor-pointer rounded-lg border border-border bg-surface-1 p-3 transition-colors duration-200 hover:border-primary/30 hover:bg-surface-2"
                          onClick={() =>
                            router.push(`/bills/${bill.parliamentId}`)
                          }
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              router.push(`/bills/${bill.parliamentId}`);
                            }
                          }}
                        >
                          {/* Bill title */}
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <p className="text-xs font-medium leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                              {bill.shortTitle}
                            </p>
                            <ArrowRight className="h-3 w-3 text-muted-foreground/0 group-hover:text-primary transition-all shrink-0 mt-0.5" />
                          </div>

                          {/* Progress bar */}
                          <div
                            className={cn(
                              "h-3 w-full rounded-full overflow-hidden",
                              getBarTrackColor(bill.currentHouse)
                            )}
                          >
                            <motion.div
                              className={cn(
                                "h-full rounded-full",
                                getBarColor(bill.currentHouse)
                              )}
                              initial={{ width: 0 }}
                              animate={{ width: `${progress}%` }}
                              transition={{
                                duration: 0.8,
                                delay: 0.1,
                                ease: "easeOut",
                              }}
                            />
                          </div>

                          {/* Metadata row */}
                          <div className="flex items-center justify-between mt-2 gap-2">
                            <div className="flex items-center gap-1.5">
                              {bill.currentHouse && (
                                <Badge
                                  variant="outline"
                                  className={cn(
                                    "text-[10px] px-1.5 py-0 h-4",
                                    getHouseColor(bill.currentHouse)
                                  )}
                                >
                                  {bill.currentHouse}
                                </Badge>
                              )}
                              {bill.isAct && (
                                <Badge className="bg-commons-bg text-commons-text border-commons-text/30 text-[10px] px-1.5 py-0 h-4">
                                  Act
                                </Badge>
                              )}
                            </div>

                            {bill.currentStage && (
                              <span className="text-[10px] text-muted-foreground truncate max-w-[140px]">
                                {bill.currentStage}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Vertical list view for smaller screens */}
      <div className="block lg:hidden space-y-6 mt-4">
        <Separator className="opacity-50" />
        <h3 className="text-sm font-semibold text-muted-foreground">
          List View
        </h3>

        {monthGroups.map((group) => (
          <div key={group.sortKey} className="space-y-3">
            <div className="flex items-center gap-3">
              <h4 className="text-sm font-semibold whitespace-nowrap">
                {group.label}
              </h4>
              <Separator className="flex-1 opacity-50" />
              <Badge variant="secondary" className="text-xs shrink-0 font-mono-numbers">
                {group.bills.length}
              </Badge>
            </div>

            <div className="space-y-2">
              {group.bills.map((bill) => {
                const progress = getStageProgress(bill.currentStage);

                return (
                  <div
                    key={bill.parliamentId}
                    className="rounded-xl border border-border bg-card p-3 cursor-pointer transition-colors hover:border-foreground/15"
                    onClick={() => router.push(`/bills/${bill.parliamentId}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        router.push(`/bills/${bill.parliamentId}`);
                      }
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium line-clamp-1">
                          {bill.shortTitle}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          {bill.currentHouse && (
                            <Badge
                              variant="outline"
                              className={cn(
                                "text-[10px] px-1.5 py-0 h-4",
                                getHouseColor(bill.currentHouse)
                              )}
                            >
                              {bill.currentHouse}
                            </Badge>
                          )}
                          {bill.currentStage && (
                            <span className="text-[10px] text-muted-foreground truncate">
                              {bill.currentStage}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Compact progress bar */}
                      <div className="w-16 shrink-0">
                        <div
                          className={cn(
                            "h-2 w-full rounded-full overflow-hidden",
                            getBarTrackColor(bill.currentHouse)
                          )}
                        >
                          <div
                            className={cn(
                              "h-full rounded-full transition-all duration-500",
                              getBarColor(bill.currentHouse)
                            )}
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <p className="text-[9px] text-muted-foreground text-right mt-0.5 font-mono-numbers">
                          {progress}%
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

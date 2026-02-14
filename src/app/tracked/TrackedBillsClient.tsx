"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useDeviceId } from "@/hooks/useDeviceId";
import { getHouseColor } from "@/lib/parliament/client";
import { cn } from "@/lib/utils";
import {
  BookmarkCheck,
  ArrowRight,
  ScrollText,
  Bell,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";

interface TrackedItem {
  id: string;
  bill: {
    id: string;
    parliamentId: number;
    shortTitle: string;
    currentHouse: string | null;
    currentStage: string | null;
    isAct: boolean;
    lastUpdate: string | null;
    summaries?: Array<{ tldr?: string }>;
  };
  notifyStageChange: boolean;
  notifyRoyalAssent: boolean;
}

export function TrackedBillsClient() {
  const deviceId = useDeviceId();
  const [items, setItems] = useState<TrackedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!deviceId) return;

    async function load() {
      try {
        const res = await fetch("/api/tracked", {
          headers: { "X-Device-ID": deviceId! },
        });
        const data = await res.json();
        setItems(data.items || []);
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [deviceId]);

  async function untrack(billId: string) {
    if (!deviceId) return;

    try {
      await fetch(`/api/tracked?billId=${billId}`, {
        method: "DELETE",
        headers: { "X-Device-ID": deviceId },
      });
      setItems((prev) => prev.filter((t) => t.bill.id !== billId));
      toast("Bill untracked");
    } catch {
      toast.error("Failed to untrack");
    }
  }

  if (loading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-24" />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="glass rounded-xl p-12 text-center">
        <BookmarkCheck className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
        <h3 className="text-lg font-medium mb-1">No tracked bills</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Start tracking bills to get notifications about stage changes
        </p>
        <Button asChild>
          <Link href="/bills">
            Browse Bills
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="glass gradient-border glass-hover rounded-xl p-4 flex items-center gap-4 transition-all"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              {item.bill.currentHouse && (
                <Badge
                  variant="outline"
                  className={cn(
                    "text-xs gap-1.5",
                    getHouseColor(item.bill.currentHouse)
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      item.bill.currentHouse === "Commons"
                        ? "bg-commons-text"
                        : "bg-lords-text"
                    )}
                  />
                  {item.bill.currentHouse}
                </Badge>
              )}
              {item.bill.isAct && (
                <Badge className="bg-commons-bg text-commons-text border-commons-text/30 text-xs">
                  Act
                </Badge>
              )}
            </div>

            <Link
              href={`/bills/${item.bill.parliamentId}`}
              className="text-sm font-semibold hover:text-primary transition-colors line-clamp-1"
            >
              {item.bill.shortTitle}
            </Link>

            {item.bill.currentStage && (
              <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                <ScrollText className="h-3 w-3" />
                {item.bill.currentStage}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Bell className="h-3.5 w-3.5" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-destructive"
              onClick={() => untrack(item.bill.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

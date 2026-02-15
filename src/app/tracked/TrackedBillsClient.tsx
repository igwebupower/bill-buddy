"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { GlassCard } from "@/components/shared/GlassCard";
import { useDeviceId } from "@/hooks/useDeviceId";
import { getHouseColor } from "@/lib/parliament/client";
import { cn } from "@/lib/utils";
import {
  BookmarkCheck,
  ArrowRight,
  ScrollText,
  Bell,
  Trash2,
  Mail,
  X,
  Pencil,
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

  // Email state
  const [savedEmail, setSavedEmail] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);

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

  // Fetch saved email
  useEffect(() => {
    if (!deviceId) return;

    async function loadEmail() {
      try {
        const res = await fetch("/api/device-email", {
          headers: { "X-Device-ID": deviceId! },
        });
        const data = await res.json();
        if (data.email) {
          setSavedEmail(data.email);
        }
      } catch {
        // silently fail
      }
    }

    loadEmail();

    const dismissed = localStorage.getItem("billbrief-email-banner-dismissed");
    if (dismissed === "true") setBannerDismissed(true);
  }, [deviceId]);

  async function saveEmail() {
    if (!deviceId || !emailInput.trim()) return;

    setEmailLoading(true);
    try {
      const res = await fetch("/api/device-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Device-ID": deviceId,
        },
        body: JSON.stringify({ email: emailInput.trim() }),
      });

      if (!res.ok) {
        const data = await res.json();
        toast.error(data.error || "Failed to save email");
        return;
      }

      setSavedEmail(emailInput.trim());
      setEmailInput("");
      setEditingEmail(false);
      toast("Email saved — you'll receive stage-change alerts");
    } catch {
      toast.error("Failed to save email");
    } finally {
      setEmailLoading(false);
    }
  }

  function dismissBanner() {
    setBannerDismissed(true);
    localStorage.setItem("billbrief-email-banner-dismissed", "true");
  }

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
      <div className="rounded-lg border border-border bg-card p-12 text-center">
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
      {/* Email alert banner */}
      {savedEmail && !editingEmail ? (
        <GlassCard className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground min-w-0">
            <Mail className="h-4 w-4 shrink-0 text-primary" />
            <span className="truncate">
              Email alerts: <span className="text-foreground">{savedEmail}</span>
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="shrink-0"
            onClick={() => {
              setEmailInput(savedEmail);
              setEditingEmail(true);
            }}
          >
            <Pencil className="h-3.5 w-3.5 mr-1.5" />
            Change
          </Button>
        </GlassCard>
      ) : !bannerDismissed && !savedEmail ? (
        <GlassCard className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-3.5 w-3.5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Get email alerts</h3>
                <p className="text-xs text-muted-foreground">
                  Receive an email when your tracked bills change stage
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 shrink-0 text-muted-foreground"
              onClick={dismissBanner}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="your@email.com"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && saveEmail()}
            />
            <Button
              size="sm"
              disabled={emailLoading || !emailInput.trim()}
              onClick={saveEmail}
            >
              {emailLoading ? "Saving..." : "Save"}
            </Button>
          </div>
        </GlassCard>
      ) : editingEmail ? (
        <GlassCard className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
              <Mail className="h-3.5 w-3.5 text-primary" />
            </div>
            <h3 className="text-sm font-semibold">Update email</h3>
          </div>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="your@email.com"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && saveEmail()}
            />
            <Button
              size="sm"
              disabled={emailLoading || !emailInput.trim()}
              onClick={saveEmail}
            >
              {emailLoading ? "Saving..." : "Save"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setEditingEmail(false);
                setEmailInput("");
              }}
            >
              Cancel
            </Button>
          </div>
        </GlassCard>
      ) : null}

      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-lg border border-border bg-card p-4 flex items-center gap-4 transition-all hover:bg-accent"
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

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BookmarkPlus, BookmarkCheck, Loader2 } from "lucide-react";
import { useDeviceId } from "@/hooks/useDeviceId";
import { toast } from "sonner";

interface TrackButtonProps {
  billId: string;
  parliamentId?: number;
  billTitle?: string;
}

export function TrackButton({ billId, parliamentId, billTitle }: TrackButtonProps) {
  const deviceId = useDeviceId();
  const [tracked, setTracked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!deviceId) return;

    async function checkTracked() {
      try {
        const res = await fetch("/api/tracked", {
          headers: { "X-Device-ID": deviceId! },
        });
        const data = await res.json();
        const isTracked = data.items?.some(
          (t: { bill: { parliamentId: number } }) =>
            t.bill.parliamentId === (parliamentId || parseInt(billId, 10))
        );
        setTracked(!!isTracked);
      } catch {
        // silently fail
      }
    }

    checkTracked();
  }, [deviceId, billId, parliamentId]);

  async function toggle() {
    if (!deviceId) return;
    setLoading(true);

    try {
      if (tracked) {
        await fetch(`/api/tracked?billId=${billId}`, {
          method: "DELETE",
          headers: { "X-Device-ID": deviceId },
        });
        setTracked(false);
        toast("Bill untracked");
      } else {
        await fetch("/api/tracked", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Device-ID": deviceId,
          },
          body: JSON.stringify({
            parliamentId: parliamentId || billId,
          }),
        });
        setTracked(true);
        toast(
          `Now tracking ${billTitle || "this bill"}. You'll get updates on stage changes.`
        );
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      variant={tracked ? "default" : "outline"}
      size="sm"
      onClick={toggle}
      disabled={loading || !deviceId}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 mr-1.5 animate-spin" />
      ) : tracked ? (
        <BookmarkCheck className="h-4 w-4 mr-1.5" />
      ) : (
        <BookmarkPlus className="h-4 w-4 mr-1.5" />
      )}
      {tracked ? "Tracking" : "Track"}
    </Button>
  );
}

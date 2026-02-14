"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BookmarkPlus, BookmarkCheck, Loader2 } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";
import { AuthDialog } from "@/components/auth/AuthDialog";
import { toast } from "sonner";

interface TrackButtonProps {
  billId: string;
  parliamentId?: number;
  billTitle?: string;
}

export function TrackButton({ billId, parliamentId, billTitle }: TrackButtonProps) {
  const { user, token } = useAuthContext();
  const [tracked, setTracked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    if (!user || !token) return;

    async function checkTracked() {
      try {
        const res = await fetch("/api/tracked", {
          headers: { Authorization: `Bearer ${token}` },
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
  }, [user, token, billId, parliamentId]);

  async function toggle() {
    if (!user || !token) {
      setShowAuth(true);
      return;
    }
    setLoading(true);

    try {
      if (tracked) {
        await fetch(`/api/tracked?billId=${billId}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });
        setTracked(false);
        toast("Bill untracked");
      } else {
        await fetch("/api/tracked", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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
    <>
      <Button
        variant={tracked ? "default" : "outline"}
        size="sm"
        onClick={toggle}
        disabled={loading}
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
      <AuthDialog
        open={showAuth}
        onOpenChange={setShowAuth}
        onAuthenticated={() => toggle()}
      />
    </>
  );
}

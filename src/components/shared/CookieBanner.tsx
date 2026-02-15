"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

const CONSENT_KEY = "billbrief-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card shadow-lg lg:bottom-0">
      <div className="mx-auto max-w-5xl px-4 py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <Cookie className="h-4 w-4 text-primary shrink-0 hidden sm:block" />
        <p className="flex-1 text-xs text-muted-foreground leading-relaxed">
          We use local storage for your preferences and a device ID for
          notifications. No analytics or third-party tracking.{" "}
          <Link
            href="/privacy"
            onClick={accept}
            className="text-primary hover:underline"
          >
            Privacy Policy
          </Link>
        </p>
        <Button size="sm" onClick={accept} className="shrink-0 self-end sm:self-auto">
          Got it
        </Button>
      </div>
    </div>
  );
}

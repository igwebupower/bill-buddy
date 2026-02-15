"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cookie, X } from "lucide-react";

const CONSENT_KEY = "bill-buddy-cookie-consent";

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
    <Card className="fixed bottom-20 left-4 right-4 z-50 p-4 border-primary/20 bg-card shadow-xl lg:bottom-4 lg:left-4 lg:right-auto lg:w-[420px]">
      <div className="flex items-start gap-3">
        <Cookie className="h-5 w-5 text-primary mt-0.5 shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-medium">Cookies &amp; Local Storage</p>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            Bill Buddy uses local storage to save your preferences (theme,
            language, tracked bills) and a device ID for push notifications.
            If you subscribe to bill tracking, your email is stored to send
            stage-change alerts. We don&apos;t use analytics cookies or share
            your data with third parties.
          </p>
          <div className="flex items-center gap-3 mt-3">
            <Button size="sm" onClick={accept}>
              Got it
            </Button>
            <Link
              href="/privacy"
              onClick={accept}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <button
          onClick={accept}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </Card>
  );
}

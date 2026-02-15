"use client";

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Moon, Sun, Trash2, AlertCircle, Mail, Heart } from "lucide-react";
import { useDeviceId } from "@/hooks/useDeviceId";
import { toast } from "sonner";
import { GlassCard } from "@/components/shared/GlassCard";

export function SettingsClient() {
  const deviceId = useDeviceId();
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [notificationPermission, setNotificationPermission] = useState<
    "default" | "granted" | "denied"
  >("default");
  const [vapidAvailable, setVapidAvailable] = useState(false);
  const [savedEmail, setSavedEmail] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);

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
          setEmailInput(data.email);
        }
      } catch {
        // silently fail
      }
    }
    loadEmail();
  }, [deviceId]);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);

    if ("Notification" in window) {
      setNotificationPermission(
        Notification.permission as "default" | "granted" | "denied"
      );
      setNotificationsEnabled(Notification.permission === "granted");
    }

    setVapidAvailable(!!process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY);
  }, []);

  function toggleTheme(dark: boolean) {
    setDarkMode(dark);
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("billbrief-theme", dark ? "dark" : "light");
  }

  async function enableNotifications() {
    if (!("Notification" in window)) {
      toast.error("Push notifications are not supported in this browser");
      return;
    }

    if (!vapidAvailable) {
      toast.error("Push notifications are not configured yet");
      return;
    }

    const permission = await Notification.requestPermission();
    setNotificationPermission(
      permission as "default" | "granted" | "denied"
    );

    if (permission === "granted") {
      setNotificationsEnabled(true);

      if ("serviceWorker" in navigator && deviceId) {
        try {
          const registration = await navigator.serviceWorker.ready;
          const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
          });

          const subJson = subscription.toJSON();
          await fetch("/api/notifications/subscribe", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Device-ID": deviceId,
            },
            body: JSON.stringify({
              endpoint: subJson.endpoint,
              keys: subJson.keys,
            }),
          });

          toast("Push notifications enabled");
        } catch (err) {
          console.error("Failed to subscribe:", err);
          toast.error("Failed to enable notifications");
        }
      }
    } else if (permission === "denied") {
      toast.error(
        "Notifications blocked. Please enable them in your browser settings."
      );
    }
  }

  async function disableNotifications() {
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.ready;
        const subscription =
          await registration.pushManager.getSubscription();

        if (subscription) {
          const endpoint = subscription.endpoint;
          await subscription.unsubscribe();

          await fetch("/api/notifications/unsubscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ endpoint }),
          });
        }

        setNotificationsEnabled(false);
        toast("Push notifications disabled");
      } catch {
        toast.error("Failed to disable notifications");
      }
    }
  }

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
      toast("Email saved — you'll receive stage-change alerts");
    } catch {
      toast.error("Failed to save email");
    } finally {
      setEmailLoading(false);
    }
  }

  async function removeEmail() {
    if (!deviceId) return;
    setEmailLoading(true);
    try {
      await fetch("/api/device-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Device-ID": deviceId,
        },
        body: JSON.stringify({ email: null }),
      });
      setSavedEmail(null);
      setEmailInput("");
      localStorage.removeItem("billbrief-email-banner-dismissed");
      toast("Email removed — alerts disabled");
    } catch {
      toast.error("Failed to remove email");
    } finally {
      setEmailLoading(false);
    }
  }

  function clearAllData() {
    const keys = [
      "billbrief-device-id",
      "billbrief-theme",
      "billbrief-postcode",
      "billbrief-cookie-consent",
    ];
    keys.forEach((key) => localStorage.removeItem(key));
    toast("All local data cleared. Reloading...");
    setTimeout(() => window.location.reload(), 1000);
  }

  return (
    <div className="space-y-6">
      {/* Appearance */}
      <GlassCard className="space-y-4">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/8">
            {darkMode ? (
              <Moon className="h-3.5 w-3.5 text-primary" />
            ) : (
              <Sun className="h-3.5 w-3.5 text-primary" />
            )}
          </div>
          Appearance
        </h2>

        <div className="flex items-center justify-between">
          <Label htmlFor="dark-mode" className="text-sm">
            Dark mode
          </Label>
          <Switch
            id="dark-mode"
            checked={darkMode}
            onCheckedChange={toggleTheme}
          />
        </div>
      </GlassCard>

      {/* Notifications */}
      <GlassCard className="space-y-4">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/8">
            <Bell className="h-3.5 w-3.5 text-primary" />
          </div>
          Notifications
        </h2>

        <div className="flex items-center justify-between">
          <div>
            <Label className="text-sm">Push notifications</Label>
            <p className="text-xs text-muted-foreground mt-0.5">
              Get notified when tracked bills change stage
            </p>
          </div>
          <Switch
            checked={notificationsEnabled}
            onCheckedChange={(checked) => {
              if (checked) {
                enableNotifications();
              } else {
                disableNotifications();
              }
            }}
            disabled={
              notificationPermission === "denied" || !vapidAvailable
            }
          />
        </div>

        {notificationPermission === "denied" && (
          <p className="text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="h-3 w-3 shrink-0" />
            Notifications are blocked by your browser. Please enable them in
            your browser settings.
          </p>
        )}

        {!vapidAvailable && notificationPermission !== "denied" && (
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <AlertCircle className="h-3 w-3 shrink-0" />
            Push notifications are not yet configured for this deployment.
          </p>
        )}
      </GlassCard>

      {/* Email Alerts */}
      <GlassCard className="space-y-4">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/8">
            <Mail className="h-3.5 w-3.5 text-primary" />
          </div>
          Email Alerts
        </h2>

        <p className="text-xs text-muted-foreground">
          Optionally add your email to receive alerts when your tracked bills
          change stage. No account needed.
        </p>

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
            {emailLoading
              ? "Saving..."
              : savedEmail
                ? "Update"
                : "Save"}
          </Button>
          {savedEmail && (
            <Button
              variant="outline"
              size="sm"
              className="text-destructive hover:text-destructive"
              disabled={emailLoading}
              onClick={removeEmail}
            >
              Remove
            </Button>
          )}
        </div>
      </GlassCard>

      {/* Data */}
      <GlassCard className="space-y-4">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/8">
            <Trash2 className="h-3.5 w-3.5 text-primary" />
          </div>
          Data
        </h2>

        <p className="text-xs text-muted-foreground">
          BillBrief uses a device ID stored in your browser to manage tracked
          bills. No account or personal information is required.
        </p>

        {deviceId && (
          <p className="text-xs text-muted-foreground font-mono-numbers">
            Device ID: {deviceId.slice(0, 8)}...
          </p>
        )}

        <Button
          variant="outline"
          size="sm"
          className="text-destructive hover:text-destructive"
          onClick={clearAllData}
        >
          <Trash2 className="h-3.5 w-3.5 mr-2" />
          Clear all local data
        </Button>
      </GlassCard>

      {/* Support */}
      <GlassCard className="space-y-4">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/8">
            <Heart className="h-3.5 w-3.5 text-primary" />
          </div>
          Support BillBrief
        </h2>

        <p className="text-xs text-muted-foreground">
          BillBrief is free and open source. If you find it useful, you can
          support its development.
        </p>

        <Button variant="outline" size="sm" asChild>
          <a
            href="https://buymeacoffee.com/johnigwe88m"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Heart className="h-3.5 w-3.5 mr-2" />
            Buy me a coffee
          </a>
        </Button>
      </GlassCard>
    </div>
  );
}

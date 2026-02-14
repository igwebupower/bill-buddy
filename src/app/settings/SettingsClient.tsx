"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Bell, Moon, Sun, Globe, Trash2 } from "lucide-react";
import { useDeviceId } from "@/hooks/useDeviceId";
import { toast } from "sonner";

const languages = [
  { value: "en", label: "English" },
  { value: "cy", label: "Cymraeg (Welsh)" },
  { value: "ur", label: "Urdu" },
  { value: "pl", label: "Polski (Polish)" },
  { value: "ar", label: "Arabic" },
];

export function SettingsClient() {
  const deviceId = useDeviceId();
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("en");
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [notificationPermission, setNotificationPermission] = useState<
    "default" | "granted" | "denied"
  >("default");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);

    if ("Notification" in window) {
      setNotificationPermission(Notification.permission as "default" | "granted" | "denied");
      setNotificationsEnabled(Notification.permission === "granted");
    }

    const savedLang = localStorage.getItem("bill-buddy-language");
    if (savedLang) setLanguage(savedLang);
  }, []);

  function toggleTheme(dark: boolean) {
    setDarkMode(dark);
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("bill-buddy-theme", dark ? "dark" : "light");
  }

  function changeLanguage(lang: string) {
    setLanguage(lang);
    localStorage.setItem("bill-buddy-language", lang);
    toast("Language preference saved");
  }

  async function enableNotifications() {
    if (!("Notification" in window)) {
      toast.error("Push notifications are not supported in this browser");
      return;
    }

    const permission = await Notification.requestPermission();
    setNotificationPermission(permission as "default" | "granted" | "denied");

    if (permission === "granted") {
      setNotificationsEnabled(true);

      // Register push subscription
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

  return (
    <div className="space-y-6">
      {/* Appearance */}
      <Card className="p-5 space-y-4">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          {darkMode ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
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
      </Card>

      {/* Language */}
      <Card className="p-5 space-y-4">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          <Globe className="h-4 w-4" />
          Language
        </h2>

        <div className="flex items-center justify-between">
          <Label className="text-sm">
            Preferred summary language
          </Label>
          <Select value={language} onValueChange={changeLanguage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <p className="text-xs text-muted-foreground">
          AI summaries will be translated to your preferred language when
          available.
        </p>
      </Card>

      {/* Notifications */}
      <Card className="p-5 space-y-4">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          <Bell className="h-4 w-4" />
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
            disabled={notificationPermission === "denied"}
          />
        </div>

        {notificationPermission === "denied" && (
          <p className="text-xs text-destructive">
            Notifications are blocked by your browser. Please enable them in
            your browser settings.
          </p>
        )}
      </Card>

      {/* Data */}
      <Card className="p-5 space-y-4">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          <Trash2 className="h-4 w-4" />
          Data
        </h2>

        <p className="text-xs text-muted-foreground">
          Bill Buddy uses a device ID stored in your browser to manage tracked
          bills. No account or personal information is required.
        </p>

        {deviceId && (
          <p className="text-xs text-muted-foreground font-mono">
            Device ID: {deviceId.slice(0, 8)}...
          </p>
        )}
      </Card>
    </div>
  );
}

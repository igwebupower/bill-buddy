"use client";

import { useState, useEffect } from "react";
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
import { Bell, Moon, Sun, Globe, LogIn, LogOut, User } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";
import { AuthDialog } from "@/components/auth/AuthDialog";
import { toast } from "sonner";
import { GlassCard } from "@/components/shared/GlassCard";

const languages = [
  { value: "en", label: "English" },
  { value: "cy", label: "Cymraeg (Welsh)" },
  { value: "ur", label: "Urdu" },
  { value: "pl", label: "Polski (Polish)" },
  { value: "ar", label: "Arabic" },
];

export function SettingsClient() {
  const { user, token, logout } = useAuthContext();
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("en");
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [notificationPermission, setNotificationPermission] = useState<
    "default" | "granted" | "denied"
  >("default");
  const [showAuth, setShowAuth] = useState(false);

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

  async function changeLanguage(lang: string) {
    setLanguage(lang);
    localStorage.setItem("bill-buddy-language", lang);

    // Sync to server if authenticated
    if (token) {
      try {
        await fetch("/api/user/preferences", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ preferredLang: lang }),
        });
      } catch {
        // Non-critical — localStorage is the primary source
      }
    }

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

      if ("serviceWorker" in navigator && user && token) {
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
              Authorization: `Bearer ${token}`,
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

          if (token) {
            await fetch("/api/notifications/unsubscribe", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ endpoint }),
            });
          }
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
      <GlassCard className="space-y-4">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-gradient-from/15 to-gradient-via/15">
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

      {/* Language */}
      <GlassCard className="space-y-4">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-gradient-from/15 to-gradient-via/15">
            <Globe className="h-3.5 w-3.5 text-primary" />
          </div>
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
      </GlassCard>

      {/* Notifications */}
      <GlassCard className="space-y-4">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-gradient-from/15 to-gradient-via/15">
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
            disabled={notificationPermission === "denied"}
          />
        </div>

        {notificationPermission === "denied" && (
          <p className="text-xs text-destructive">
            Notifications are blocked by your browser. Please enable them in
            your browser settings.
          </p>
        )}
      </GlassCard>

      {/* Account */}
      <GlassCard className="space-y-4">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-gradient-from/15 to-gradient-via/15">
            <User className="h-3.5 w-3.5 text-primary" />
          </div>
          Account
        </h2>

        {user ? (
          <>
            <p className="text-sm text-muted-foreground">
              Signed in as{" "}
              <span className="font-medium text-foreground">{user.email}</span>
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => logout()}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <p className="text-xs text-muted-foreground">
              Sign in with your email to track bills and sync across devices.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAuth(true)}
            >
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
          </>
        )}
      </GlassCard>
    </div>
  );
}

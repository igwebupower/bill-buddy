import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { AppShell } from "@/components/layout/AppShell";
import { InstallPrompt } from "@/components/shared/InstallPrompt";
import { OfflineIndicator } from "@/components/shared/OfflineIndicator";
import { CookieBanner } from "@/components/shared/CookieBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BillBrief - UK Parliament Bills Made Simple",
    template: "%s | BillBrief",
  },
  description:
    "AI-powered plain-English summaries of UK Parliamentary bills. Track legislation, get alerts, and understand how new laws affect you.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "BillBrief",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0f4ff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1d2e" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TooltipProvider>
          <OfflineIndicator />
          <AppShell>{children}</AppShell>
          <InstallPrompt />
          <CookieBanner />
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}

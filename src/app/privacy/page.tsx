import type { Metadata } from "next";
import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How BillBrief handles your data",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-muted-foreground mt-1">
          Last updated: 15 February 2025
        </p>
      </div>

      <GlassCard className="space-y-4">
        <h2 className="text-sm font-semibold">Overview</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          BillBrief is a free, open-source tool that helps you understand UK
          Parliamentary bills. We are committed to protecting your privacy and
          collect only the minimum data needed to provide the service.
        </p>
      </GlassCard>

      <GlassCard className="space-y-4">
        <h2 className="text-sm font-semibold">What We Store</h2>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium">Device ID</p>
            <p className="text-sm text-muted-foreground">
              A randomly generated identifier stored in your browser&apos;s
              local storage. This is used to manage your tracked bills and push
              notification subscriptions. It is not linked to your identity.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Preferences</p>
            <p className="text-sm text-muted-foreground">
              Your theme (dark/light), language preference, and saved postcode
              are stored locally in your browser. This data never leaves your
              device.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Push Notification Subscription</p>
            <p className="text-sm text-muted-foreground">
              If you enable push notifications, your browser&apos;s push
              subscription endpoint is stored on our server so we can send you
              stage-change alerts for bills you track.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Tracked Bills</p>
            <p className="text-sm text-muted-foreground">
              The list of bills you choose to track is stored on our server,
              linked to your anonymous device ID.
            </p>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="space-y-4">
        <h2 className="text-sm font-semibold">What We Don&apos;t Do</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-primary shrink-0">&bull;</span>
            We do not use analytics or tracking cookies
          </li>
          <li className="flex gap-2">
            <span className="text-primary shrink-0">&bull;</span>
            We do not sell, share, or transfer your data to third parties
          </li>
          <li className="flex gap-2">
            <span className="text-primary shrink-0">&bull;</span>
            We do not require account creation or personal information
          </li>
          <li className="flex gap-2">
            <span className="text-primary shrink-0">&bull;</span>
            We do not track your browsing behaviour across sites
          </li>
        </ul>
      </GlassCard>

      <GlassCard className="space-y-4">
        <h2 className="text-sm font-semibold">Third-Party Services</h2>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium">UK Parliament API</p>
            <p className="text-sm text-muted-foreground">
              Bill data is fetched from the official UK Parliament Bills API and
              Members API. These are public APIs operated by the UK Parliament.
              Your postcode is sent to the Members API when you use the
              &ldquo;Contact Your MP&rdquo; feature.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Anthropic (Claude AI)</p>
            <p className="text-sm text-muted-foreground">
              Bill text is sent to Claude AI to generate plain-English summaries
              and translations. No personal data is included in these requests.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Vercel</p>
            <p className="text-sm text-muted-foreground">
              The application is hosted on Vercel. Standard server logs
              (IP address, request timestamps) may be collected as part of
              normal web hosting operations.
            </p>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="space-y-4">
        <h2 className="text-sm font-semibold">Your Rights</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          You can clear all locally stored data at any time by clearing your
          browser&apos;s local storage or site data for this site. To remove
          server-side data (tracked bills, push subscriptions), disable
          notifications in Settings and un-track all bills. Since no personal
          information is stored, there is no account to delete.
        </p>
      </GlassCard>

      <GlassCard className="space-y-4">
        <h2 className="text-sm font-semibold">Contact</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          If you have questions about this privacy policy, please open an issue
          on our GitHub repository.
        </p>
      </GlassCard>

      <p className="text-xs text-muted-foreground">
        See also:{" "}
        <Link href="/terms" className="text-primary hover:underline">
          Terms &amp; Conditions
        </Link>
      </p>
    </div>
  );
}

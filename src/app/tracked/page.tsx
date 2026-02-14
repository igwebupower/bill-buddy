import type { Metadata } from "next";
import { TrackedBillsClient } from "./TrackedBillsClient";

export const metadata: Metadata = {
  title: "Tracked Bills",
  description: "Bills you are tracking for stage change notifications",
};

export default function TrackedPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Tracked Bills</h1>
        <p className="text-muted-foreground mt-1">
          Bills you&apos;re following for updates and notifications
        </p>
      </div>

      <TrackedBillsClient />
    </div>
  );
}

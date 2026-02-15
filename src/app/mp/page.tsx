import type { Metadata } from "next";
import { MPPageClient } from "./MPPageClient";

export const metadata: Metadata = {
  title: "Your MP",
  description: "Look up your MP and see how they voted in Parliament",
};

export default function MPPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Your MP</h1>
        <p className="text-muted-foreground mt-1">
          Find your MP and see how they voted
        </p>
      </div>

      <MPPageClient />
    </div>
  );
}

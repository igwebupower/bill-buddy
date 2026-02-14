import type { Metadata } from "next";
import { TopicsClient } from "./TopicsClient";

export const metadata: Metadata = {
  title: "Browse Topics",
  description: "Explore UK Parliamentary bills by policy topic",
};

export default function TopicsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Browse Topics</h1>
        <p className="text-muted-foreground mt-1">
          Explore legislation by policy area
        </p>
      </div>

      <TopicsClient />
    </div>
  );
}

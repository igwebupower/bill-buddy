import type { Metadata } from "next";
import { TimelineClient } from "./TimelineClient";

export const metadata: Metadata = {
  title: "Legislative Timeline",
  description:
    "Visual timeline of UK Parliamentary bills showing progress through stages",
};

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Legislative Timeline
        </h1>
        <p className="text-muted-foreground mt-1">
          Track bills as they progress through Parliament
        </p>
      </div>

      <TimelineClient />
    </div>
  );
}

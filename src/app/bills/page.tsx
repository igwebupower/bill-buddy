import type { Metadata } from "next";
import { Suspense } from "react";
import { BillFilters } from "@/components/bills/BillFilters";
import { BillList } from "@/components/bills/BillList";
import { BillCardSkeleton } from "@/components/bills/BillCardSkeleton";

export const metadata: Metadata = {
  title: "Browse Bills",
  description: "Browse and search all UK Parliamentary bills",
};

export default function BillsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Parliamentary Bills
        </h1>
        <p className="text-muted-foreground mt-1">
          Browse current and past UK legislation
        </p>
      </div>

      <Suspense>
        <BillFilters />
      </Suspense>

      <Suspense
        fallback={
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <BillCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        <BillList />
      </Suspense>
    </div>
  );
}

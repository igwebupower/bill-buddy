import { Suspense } from "react";
import { BillDetailClient } from "./BillDetailClient";
import { Skeleton } from "@/components/ui/skeleton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const res = await fetch(
      `https://bills-api.parliament.uk/api/v1/Bills/${id}`,
      { next: { revalidate: 3600 } }
    );
    if (res.ok) {
      const bill = await res.json();
      return {
        title: bill.shortTitle,
        description: bill.longTitle,
      };
    }
  } catch {
    // fallback
  }

  return {
    title: "Bill Details",
    description: "View details and plain English summary of this UK Parliamentary bill",
  };
}

export default async function BillDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-4xl space-y-6">
          <Skeleton className="h-8 w-2/3" />
          <Skeleton className="h-5 w-full" />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              <Skeleton className="h-40" />
              <Skeleton className="h-60" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-60" />
              <Skeleton className="h-40" />
            </div>
          </div>
        </div>
      }
    >
      <BillDetailClient id={id} />
    </Suspense>
  );
}

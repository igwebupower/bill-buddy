import { Skeleton } from "@/components/ui/skeleton";

export function BillCardSkeleton() {
  return (
    <div className="glass rounded-xl p-5 space-y-3">
      <div className="flex gap-2">
        <Skeleton className="h-5 w-20 rounded-full" />
        <Skeleton className="h-5 w-24 rounded-full" />
      </div>
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex justify-between pt-1">
        <Skeleton className="h-3.5 w-32" />
        <Skeleton className="h-3.5 w-20" />
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { BillCard } from "./BillCard";
import { BillCardSkeleton } from "./BillCardSkeleton";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ScrollText } from "lucide-react";

interface Bill {
  id?: string;
  parliamentId: number;
  shortTitle: string;
  longTitle?: string;
  currentHouse: string | null;
  currentStage: string | null;
  billTypeCategory?: string;
  isAct?: boolean;
  isDefeated?: boolean;
  lastUpdate?: string;
  sponsors?: Array<{ name: string; party?: string | null }>;
  summaries?: Array<{ tldr?: string }>;
}

interface BillsResponse {
  items: Bill[];
  totalResults: number;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
}

export function BillList() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<BillsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBills = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams(searchParams.toString());
      const res = await fetch(`/api/bills?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch bills");
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchBills();
  }, [fetchBills]);

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <BillCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-muted-foreground mb-4">{error}</p>
        <Button variant="outline" onClick={fetchBills}>
          Try again
        </Button>
      </div>
    );
  }

  if (!data || data.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <ScrollText className="h-12 w-12 text-muted-foreground/50 mb-4" />
        <h3 className="text-lg font-medium">No bills found</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Try adjusting your search or filters
        </p>
      </div>
    );
  }

  const currentPage = data.currentPage;
  const totalPages = data.totalPages;

  return (
    <div className="space-y-6">
      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        {data.totalResults} bill{data.totalResults !== 1 ? "s" : ""} found
      </p>

      {/* Grid */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {data.items.map((bill) => (
          <BillCard key={bill.parliamentId} bill={bill} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage <= 1}
            onClick={() => {
              const params = new URLSearchParams(searchParams.toString());
              params.set("page", String(currentPage - 1));
              window.location.search = params.toString();
            }}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          <span className="text-sm text-muted-foreground px-3">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage >= totalPages}
            onClick={() => {
              const params = new URLSearchParams(searchParams.toString());
              params.set("page", String(currentPage + 1));
              window.location.search = params.toString();
            }}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}
    </div>
  );
}

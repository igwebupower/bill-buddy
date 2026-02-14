"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

export function BillFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") || "";
  const currentHouse = searchParams.get("house") || "all";
  const currentType = searchParams.get("type") || "all";

  const updateFilters = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value && value !== "all") {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      // Reset page on filter change
      params.delete("page");

      router.push(`/bills?${params.toString()}`);
    },
    [router, searchParams]
  );

  const clearFilters = () => {
    router.push("/bills");
  };

  const hasFilters = currentSearch || currentHouse !== "all" || currentType !== "all";

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      {/* Search */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search bills by title..."
          defaultValue={currentSearch}
          onChange={(e) => {
            const value = e.target.value;
            // Debounce
            const timeout = setTimeout(() => {
              updateFilters({ search: value });
            }, 400);
            return () => clearTimeout(timeout);
          }}
          className="pl-9 bg-muted/30"
        />
      </div>

      {/* House filter */}
      <Select
        value={currentHouse}
        onValueChange={(value) => updateFilters({ house: value })}
      >
        <SelectTrigger className="w-full sm:w-[160px]">
          <SelectValue placeholder="House" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Houses</SelectItem>
          <SelectItem value="Commons">Commons</SelectItem>
          <SelectItem value="Lords">Lords</SelectItem>
        </SelectContent>
      </Select>

      {/* Type filter */}
      <Select
        value={currentType}
        onValueChange={(value) => updateFilters({ type: value })}
      >
        <SelectTrigger className="w-full sm:w-[200px]">
          <SelectValue placeholder="Bill Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="Government">Government</SelectItem>
          <SelectItem value="Private Members'">Private Members&apos;</SelectItem>
          <SelectItem value="Private">Private</SelectItem>
        </SelectContent>
      </Select>

      {/* Clear filters */}
      {hasFilters && (
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          <X className="h-4 w-4 mr-1" />
          Clear
        </Button>
      )}
    </div>
  );
}

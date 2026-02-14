"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Sparkles, RefreshCw, AlertCircle, Users, List, Target, Clock } from "lucide-react";

interface Summary {
  overview: string;
  purpose: string;
  keyChanges: string[] | string;
  impacts: Array<{ group: string; impact: string }> | string;
  implementation?: string | null;
  tldr: string;
}

interface SummarySectionProps {
  billId: string;
  existingSummary?: Summary | null;
}

export function SummarySection({ billId, existingSummary }: SummarySectionProps) {
  const [summary, setSummary] = useState<Summary | null>(existingSummary || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const keyChanges: string[] = summary
    ? Array.isArray(summary.keyChanges)
      ? summary.keyChanges
      : JSON.parse(summary.keyChanges as string)
    : [];

  const impacts: Array<{ group: string; impact: string }> = summary
    ? Array.isArray(summary.impacts)
      ? summary.impacts
      : JSON.parse(summary.impacts as string)
    : [];

  async function generateSummary() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/bills/${billId}/summary`, {
        method: "POST",
      });

      if (!res.ok) {
        throw new Error("Failed to generate summary");
      }

      const data = await res.json();
      setSummary(data.summary);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to generate summary"
      );
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-primary">
          <Sparkles className="h-5 w-5 animate-pulse" />
          <span className="text-sm font-medium">Generating AI summary...</span>
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </Card>
    );
  }

  if (!summary) {
    return (
      <Card className="p-6 text-center">
        <Sparkles className="h-10 w-10 text-primary mx-auto mb-3" />
        <h3 className="font-semibold mb-1">No summary available yet</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Generate a plain-English AI summary of this bill
        </p>
        <Button onClick={generateSummary}>
          <Sparkles className="h-4 w-4 mr-2" />
          Generate Summary
        </Button>
        {error && (
          <p className="text-sm text-destructive mt-3 flex items-center justify-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {error}
          </p>
        )}
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* TLDR */}
      <Card className="p-4 border-primary/20 bg-primary/5">
        <div className="flex items-start gap-2">
          <Sparkles className="h-4 w-4 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-medium text-primary mb-1">TL;DR</p>
            <p className="text-sm font-medium">{summary.tldr}</p>
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="overview" className="gap-1.5">
            <Target className="h-3.5 w-3.5" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="changes" className="gap-1.5">
            <List className="h-3.5 w-3.5" />
            Key Changes
          </TabsTrigger>
          <TabsTrigger value="impacts" className="gap-1.5">
            <Users className="h-3.5 w-3.5" />
            Who&apos;s Affected
          </TabsTrigger>
          <TabsTrigger value="implementation" className="gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            Timeline
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 mt-4">
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-2">
              What this bill does
            </h4>
            <p className="text-sm leading-relaxed whitespace-pre-line">
              {summary.overview}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-2">
              Why it was introduced
            </h4>
            <p className="text-sm leading-relaxed whitespace-pre-line">
              {summary.purpose}
            </p>
          </div>
        </TabsContent>

        <TabsContent value="changes" className="mt-4">
          <ul className="space-y-3">
            {keyChanges.map((change, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed pt-0.5">{change}</p>
              </li>
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="impacts" className="mt-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {impacts.map((impact, i) => (
              <Card key={i} className="p-4 border-border/50">
                <Badge variant="secondary" className="mb-2">
                  {impact.group}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  {impact.impact}
                </p>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="implementation" className="mt-4">
          <p className="text-sm leading-relaxed whitespace-pre-line">
            {summary.implementation || "Implementation timeline not yet specified."}
          </p>
        </TabsContent>
      </Tabs>

      {/* Regenerate */}
      <div className="flex justify-end">
        <Button
          variant="ghost"
          size="sm"
          onClick={generateSummary}
          disabled={loading}
        >
          <RefreshCw className="h-3.5 w-3.5 mr-1" />
          Regenerate
        </Button>
      </div>
    </div>
  );
}

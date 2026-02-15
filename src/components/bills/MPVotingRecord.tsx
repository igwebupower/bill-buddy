"use client";

import { useState, useEffect } from "react";
import { GlassCard } from "@/components/shared/GlassCard";
import { Badge } from "@/components/ui/badge";
import { usePostcode } from "@/hooks/usePostcode";
import { Vote, Loader2 } from "lucide-react";

interface Division {
  divisionId: number;
  title: string;
  date: string;
  ayeCount: number;
  noCount: number;
  memberVote: "Aye" | "No" | "NoVoteRecorded" | null;
}

interface MPVotingRecordProps {
  billTitle: string;
}

export function MPVotingRecord({ billTitle }: MPVotingRecordProps) {
  const { postcode } = usePostcode();
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!postcode) return;

    let cancelled = false;

    async function fetchVotes() {
      setLoading(true);
      setError(null);

      try {
        // Look up MP ID from postcode
        const mpRes = await fetch(
          `/api/mp/lookup?postcode=${encodeURIComponent(postcode!)}`
        );
        if (!mpRes.ok) return;
        const mp = await mpRes.json();

        if (cancelled) return;

        // Fetch voting data for this bill + MP
        const votesRes = await fetch(
          `/api/votes/by-bill?billTitle=${encodeURIComponent(billTitle)}&memberId=${mp.id}`
        );
        if (!votesRes.ok) throw new Error("Failed to fetch votes");
        const data = await votesRes.json();

        if (!cancelled) {
          setDivisions(data.divisions || []);
        }
      } catch {
        if (!cancelled) setError("Failed to load voting data");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchVotes();
    return () => {
      cancelled = true;
    };
  }, [postcode, billTitle]);

  if (!postcode) return null;

  if (loading) {
    return (
      <GlassCard>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading voting record...
        </div>
      </GlassCard>
    );
  }

  if (error) return null;

  if (divisions.length === 0) {
    return (
      <GlassCard>
        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/8">
            <Vote className="h-3.5 w-3.5 text-primary" />
          </div>
          MP Voting Record
        </h3>
        <p className="text-xs text-muted-foreground">
          No recorded Commons votes for this bill.
        </p>
      </GlassCard>
    );
  }

  return (
    <GlassCard>
      <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/8">
          <Vote className="h-3.5 w-3.5 text-primary" />
        </div>
        MP Voting Record
      </h3>

      <div className="space-y-3">
        {divisions.map((d) => {
          const total = d.ayeCount + d.noCount;
          const ayePercent = total > 0 ? (d.ayeCount / total) * 100 : 50;

          // Strip bill name prefix from title for cleaner display
          const shortTitle = d.title
            .replace(new RegExp(`^${billTitle}\\s*[-–—:]\\s*`, "i"), "")
            .trim();

          return (
            <div key={d.divisionId} className="space-y-1.5">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-tight truncate">
                    {shortTitle || d.title}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono-numbers">
                    {new Date(d.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <VoteBadge vote={d.memberVote} />
              </div>

              {/* Vote bar */}
              <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="bg-emerald-500 transition-all"
                  style={{ width: `${ayePercent}%` }}
                />
                <div
                  className="bg-red-500 transition-all"
                  style={{ width: `${100 - ayePercent}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Aye {d.ayeCount}</span>
                <span>No {d.noCount}</span>
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}

function VoteBadge({ vote }: { vote: string | null }) {
  if (vote === "Aye") {
    return (
      <Badge className="bg-emerald-500/15 text-emerald-600 border-emerald-500/30 shrink-0">
        Aye
      </Badge>
    );
  }
  if (vote === "No") {
    return (
      <Badge className="bg-red-500/15 text-red-600 border-red-500/30 shrink-0">
        No
      </Badge>
    );
  }
  return (
    <Badge variant="secondary" className="shrink-0 text-xs">
      Did not vote
    </Badge>
  );
}

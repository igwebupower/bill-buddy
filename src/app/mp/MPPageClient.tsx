"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { GlassCard } from "@/components/shared/GlassCard";
import { usePostcode } from "@/hooks/usePostcode";
import {
  Search,
  Mail,
  ExternalLink,
  AlertCircle,
  Loader2,
  Vote,
} from "lucide-react";

interface MPInfo {
  id: number;
  name: string;
  party: string;
  partyColour: string;
  constituency: string;
  thumbnailUrl: string;
  email: string | null;
  phone: string | null;
  website: string | null;
}

interface Division {
  divisionId: number;
  title: string;
  date: string;
  ayeCount: number;
  noCount: number;
  memberVote: "Aye" | "No";
}

export function MPPageClient() {
  const { postcode: savedPostcode, setPostcode: savePostcode } = usePostcode();
  const [postcode, setPostcode] = useState("");
  const [mp, setMp] = useState<MPInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [divisions, setDivisions] = useState<Division[]>([]);
  const [votesLoading, setVotesLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (savedPostcode) setPostcode(savedPostcode);
  }, [savedPostcode]);

  const fetchVotingHistory = useCallback(
    async (memberId: number, currentSkip: number, append: boolean) => {
      setVotesLoading(true);
      try {
        const res = await fetch(
          `/api/votes/by-member?memberId=${memberId}&take=20&skip=${currentSkip}`
        );
        if (!res.ok) return;
        const data = await res.json();

        const newDivisions: Division[] = data.divisions || [];
        setDivisions((prev) =>
          append ? [...prev, ...newDivisions] : newDivisions
        );
        setHasMore(newDivisions.length === 20);
      } catch {
        // Voting history is supplementary — don't block the page
      } finally {
        setVotesLoading(false);
      }
    },
    []
  );

  async function lookupMP() {
    const trimmed = postcode.trim();
    if (!trimmed) return;

    setLoading(true);
    setError(null);
    setMp(null);
    setDivisions([]);
    setSkip(0);
    setHasMore(true);

    try {
      const res = await fetch(
        `/api/mp/lookup?postcode=${encodeURIComponent(trimmed)}`
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to find MP");
      }

      setMp(data);
      savePostcode(trimmed);

      // Fetch initial voting history
      await fetchVotingHistory(data.id, 0, false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to find MP");
    } finally {
      setLoading(false);
    }
  }

  function loadMore() {
    if (!mp || votesLoading) return;
    const newSkip = skip + 20;
    setSkip(newSkip);
    fetchVotingHistory(mp.id, newSkip, true);
  }

  return (
    <div className="space-y-6">
      {/* Postcode Search */}
      <GlassCard>
        <h3 className="text-sm font-semibold mb-3">Find Your MP</h3>
        <div className="flex gap-2">
          <Input
            placeholder="Enter your postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && lookupMP()}
            className="text-sm"
          />
          <Button
            size="sm"
            onClick={lookupMP}
            disabled={loading || !postcode.trim()}
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Search className="h-4 w-4" />
            )}
          </Button>
        </div>

        {error && (
          <p className="text-xs text-destructive mt-2 flex items-center gap-1">
            <AlertCircle className="h-3 w-3 shrink-0" />
            {error}
          </p>
        )}
      </GlassCard>

      {/* MP Profile */}
      {mp && (
        <GlassCard>
          <div className="flex items-center gap-4">
            <img
              src={mp.thumbnailUrl}
              alt={mp.name}
              className="h-16 w-16 rounded-full object-cover ring-2 ring-border"
            />
            <div className="min-w-0">
              <p className="text-lg font-semibold truncate">{mp.name}</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                <Badge
                  variant="secondary"
                  className="text-xs"
                  style={{
                    backgroundColor: `${mp.partyColour}20`,
                    color: mp.partyColour,
                    borderColor: `${mp.partyColour}40`,
                  }}
                >
                  {mp.party}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {mp.constituency}
                </Badge>
              </div>
            </div>
          </div>

          {/* Contact links */}
          <div className="flex flex-wrap gap-2 mt-4">
            {mp.email && (
              <Button asChild size="sm" variant="outline">
                <a href={`mailto:${mp.email}`}>
                  <Mail className="h-3.5 w-3.5 mr-2" />
                  Email
                </a>
              </Button>
            )}
            {mp.website && (
              <Button asChild size="sm" variant="outline">
                <a
                  href={mp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3.5 w-3.5 mr-2" />
                  Website
                </a>
              </Button>
            )}
          </div>
        </GlassCard>
      )}

      {/* Voting History */}
      {mp && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Vote className="h-5 w-5 text-primary" />
            Recent Voting History
          </h2>

          {divisions.length === 0 && !votesLoading && (
            <GlassCard>
              <p className="text-sm text-muted-foreground">
                No recent voting records found.
              </p>
            </GlassCard>
          )}

          {divisions.map((d) => {
            const total = d.ayeCount + d.noCount;
            const ayePercent = total > 0 ? (d.ayeCount / total) * 100 : 50;

            return (
              <GlassCard key={d.divisionId}>
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-sm font-medium leading-tight">
                        {d.title}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono-numbers mt-0.5">
                        {new Date(d.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    {d.memberVote === "Aye" ? (
                      <Badge className="bg-emerald-500/15 text-emerald-600 border-emerald-500/30 shrink-0">
                        Aye
                      </Badge>
                    ) : (
                      <Badge className="bg-red-500/15 text-red-600 border-red-500/30 shrink-0">
                        No
                      </Badge>
                    )}
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
              </GlassCard>
            );
          })}

          {votesLoading && (
            <div className="flex justify-center py-4">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          )}

          {hasMore && divisions.length > 0 && !votesLoading && (
            <Button
              variant="outline"
              className="w-full"
              onClick={loadMore}
            >
              Load more
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

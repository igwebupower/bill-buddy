"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { GlassCard } from "@/components/shared/GlassCard";
import { cn } from "@/lib/utils";
import { getHouseColor } from "@/lib/parliament/client";
import {
  Vote,
  ChevronDown,
  ChevronUp,
  Users,
} from "lucide-react";

interface PartyBreakdown {
  party: string;
  aye: number;
  no: number;
}

interface MemberVoteItem {
  memberId: number;
  memberName: string;
  party: string | null;
  constituency: string | null;
  lobby: string;
  isTeller: boolean;
}

interface DivisionItem {
  id: string;
  house: string;
  divisionId: number;
  divisionNumber: number | null;
  title: string;
  date: string;
  ayeCount: number;
  noCount: number;
  abstainCount: number;
  isDeferred: boolean;
  stageName: string | null;
  partyBreakdown: PartyBreakdown[];
  votes: MemberVoteItem[];
}

interface DivisionsListProps {
  billId: string;
}

export function DivisionsList({ billId }: DivisionsListProps) {
  const [divisions, setDivisions] = useState<DivisionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showVotesId, setShowVotesId] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/bills/${billId}/divisions`);
        if (res.ok) {
          const data = await res.json();
          setDivisions(data.items || []);
        }
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [billId]);

  if (loading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
      </div>
    );
  }

  if (divisions.length === 0) {
    return (
      <div className="text-center py-8 text-sm text-muted-foreground">
        <Vote className="h-8 w-8 mx-auto mb-2 opacity-40" />
        <p>No recorded divisions for this bill yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {divisions.map((div) => {
        const isExpanded = expandedId === div.id;
        const showingVotes = showVotesId === div.id;
        const total = div.ayeCount + div.noCount;
        const ayePct = total > 0 ? (div.ayeCount / total) * 100 : 50;
        const passed = div.ayeCount > div.noCount;

        return (
          <GlassCard key={div.id} className="space-y-3">
            {/* Header */}
            <div
              className="flex items-start justify-between gap-3 cursor-pointer"
              onClick={() => setExpandedId(isExpanded ? null : div.id)}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge
                    variant="outline"
                    className={cn("text-xs", getHouseColor(div.house))}
                  >
                    {div.house}
                  </Badge>
                  <Badge
                    variant={passed ? "default" : "destructive"}
                    className="text-xs"
                  >
                    {passed ? "Passed" : "Rejected"}
                  </Badge>
                  {div.stageName && (
                    <Badge variant="secondary" className="text-xs">
                      {div.stageName}
                    </Badge>
                  )}
                </div>
                <p className="text-sm font-medium line-clamp-2">{div.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5 font-mono-numbers">
                  {new Date(div.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  {div.divisionNumber != null && ` \u00B7 Division No. ${div.divisionNumber}`}
                </p>
              </div>
              <div className="shrink-0 pt-1">
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </div>

            {/* Vote bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-emerald-500">
                  {div.house === "Lords" ? "Content" : "Ayes"}: {div.ayeCount}
                </span>
                <span className="text-red-400">
                  {div.house === "Lords" ? "Not Content" : "Noes"}: {div.noCount}
                </span>
              </div>
              <div className="h-2.5 rounded-full bg-red-400/30 overflow-hidden">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                  style={{ width: `${ayePct}%` }}
                />
              </div>
            </div>

            {/* Expanded details */}
            {isExpanded && (
              <div className="space-y-3 pt-1">
                {/* Party breakdown */}
                {div.partyBreakdown.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">
                      Party Breakdown
                    </p>
                    <div className="space-y-1.5">
                      {div.partyBreakdown.map((pb) => {
                        const pbTotal = pb.aye + pb.no;
                        const pbAyePct = pbTotal > 0 ? (pb.aye / pbTotal) * 100 : 50;
                        return (
                          <div key={pb.party} className="flex items-center gap-2">
                            <span className="text-xs w-32 truncate" title={pb.party}>
                              {pb.party}
                            </span>
                            <div className="flex-1 h-1.5 rounded-full bg-red-400/20 overflow-hidden">
                              <div
                                className="h-full rounded-full bg-emerald-500/80"
                                style={{ width: `${pbAyePct}%` }}
                              />
                            </div>
                            <span className="text-xs text-muted-foreground font-mono-numbers w-16 text-right">
                              {pb.aye}-{pb.no}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Toggle individual votes */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowVotesId(showingVotes ? null : div.id);
                  }}
                >
                  <Users className="h-4 w-4 mr-2" />
                  {showingVotes
                    ? "Hide individual votes"
                    : `View all ${div.votes.length} votes`}
                </Button>

                {/* Individual votes table */}
                {showingVotes && (
                  <div className="max-h-80 overflow-y-auto rounded-lg border border-glass-border">
                    <table className="w-full text-xs">
                      <thead className="sticky top-0 bg-background/95 backdrop-blur-sm">
                        <tr className="border-b border-glass-border">
                          <th className="text-left p-2 font-medium">MP</th>
                          <th className="text-left p-2 font-medium">Party</th>
                          <th className="text-left p-2 font-medium">Constituency</th>
                          <th className="text-center p-2 font-medium">Vote</th>
                        </tr>
                      </thead>
                      <tbody>
                        {div.votes.map((v) => (
                          <tr
                            key={v.memberId}
                            className="border-b border-glass-border/50 last:border-0"
                          >
                            <td className="p-2">
                              {v.memberName}
                              {v.isTeller && (
                                <span className="ml-1 text-muted-foreground">(Teller)</span>
                              )}
                            </td>
                            <td className="p-2 text-muted-foreground">
                              {v.party || "-"}
                            </td>
                            <td className="p-2 text-muted-foreground truncate max-w-[120px]">
                              {v.constituency || "-"}
                            </td>
                            <td className="p-2 text-center">
                              <Badge
                                variant="outline"
                                className={cn(
                                  "text-xs",
                                  v.lobby === "Aye"
                                    ? "text-emerald-500 border-emerald-500/30"
                                    : "text-red-400 border-red-400/30"
                                )}
                              >
                                {v.lobby}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </GlassCard>
        );
      })}
    </div>
  );
}

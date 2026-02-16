"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { GlassCard } from "@/components/shared/GlassCard";
import { usePostcode } from "@/hooks/usePostcode";
import {
  Mail,
  Search,
  ExternalLink,
  AlertCircle,
  Loader2,
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

interface ContactMPProps {
  billTitle: string;
}

export function ContactMP({ billTitle }: ContactMPProps) {
  const { postcode: savedPostcode, setPostcode: savePostcode } = usePostcode();
  const [postcode, setPostcode] = useState("");
  const [mp, setMp] = useState<MPInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (savedPostcode) setPostcode(savedPostcode);
  }, [savedPostcode]);

  async function lookupMP() {
    const trimmed = postcode.trim();
    if (!trimmed) return;

    setLoading(true);
    setError(null);
    setMp(null);

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
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to find MP");
    } finally {
      setLoading(false);
    }
  }

  function getEmailParts() {
    if (!mp?.email) return null;
    const subject = `Regarding: ${billTitle}`;
    const body = `Dear ${mp.name},\n\nI am writing to you as your constituent regarding the ${billTitle} currently before Parliament.\n\n[Please add your views here]\n\nYours sincerely,\n[Your name]\n[Your address]`;
    return { to: mp.email, subject, body };
  }

  function buildMailtoLink() {
    const parts = getEmailParts();
    if (!parts) return "";
    return `mailto:${parts.to}?subject=${encodeURIComponent(parts.subject)}&body=${encodeURIComponent(parts.body)}`;
  }

  function buildGmailLink() {
    const parts = getEmailParts();
    if (!parts) return "";
    return `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(parts.to)}&su=${encodeURIComponent(parts.subject)}&body=${encodeURIComponent(parts.body)}`;
  }

  function buildOutlookLink() {
    const parts = getEmailParts();
    if (!parts) return "";
    return `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(parts.to)}&subject=${encodeURIComponent(parts.subject)}&body=${encodeURIComponent(parts.body)}`;
  }

  return (
    <GlassCard>
      <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
          <Mail className="h-3.5 w-3.5 text-primary" />
        </div>
        Contact Your MP
      </h3>

      <div className="flex gap-2">
        <Input
          placeholder="Enter postcode"
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

      {mp && (
        <div className="mt-4 space-y-3">
          {/* MP Card */}
          <div className="flex items-center gap-3">
            <img
              src={mp.thumbnailUrl}
              alt={mp.name}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-border"
            />
            <div className="min-w-0">
              <p className="text-sm font-semibold truncate">{mp.name}</p>
              <div className="flex flex-wrap gap-1 mt-1">
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

          {/* Actions */}
          <div className="space-y-2">
            {mp.email && (
              <>
                <p className="text-xs text-muted-foreground">Send via:</p>
                <div className="grid grid-cols-3 gap-1.5">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={buildGmailLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Gmail
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={buildOutlookLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Outlook
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={buildMailtoLink()}>
                      <Mail className="h-3.5 w-3.5 mr-1" />
                      Other
                    </a>
                  </Button>
                </div>
              </>
            )}

            {mp.website && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full"
              >
                <a
                  href={mp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3.5 w-3.5 mr-2" />
                  MP Website
                </a>
              </Button>
            )}

            {!mp.email && !mp.website && (
              <p className="text-xs text-muted-foreground">
                No contact details available for this MP.
              </p>
            )}
          </div>
        </div>
      )}
    </GlassCard>
  );
}

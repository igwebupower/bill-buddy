"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  Send,
  Loader2,
  ArrowLeft,
  ArrowRight,
  Mail,
  ExternalLink,
  ThumbsUp,
  ThumbsDown,
  HelpCircle,
  User,
  MapPin,
  Copy,
  Check,
} from "lucide-react";
import { toast } from "sonner";

interface MPInfo {
  memberId: number;
  name: string;
  party: string;
  partyAbbreviation: string;
  partyColour: string;
  constituency: string;
  photoUrl: string;
  email: string | null;
}

interface WriteToMPDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  billTitle: string;
  billSummary: string;
}

type Step = "postcode" | "confirm" | "stance" | "letter";
type Stance = "support" | "oppose" | "concerned";

export function WriteToMPDialog({
  open,
  onOpenChange,
  billTitle,
  billSummary,
}: WriteToMPDialogProps) {
  const [step, setStep] = useState<Step>("postcode");
  const [postcode, setPostcode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("bill-buddy-postcode") || "";
    }
    return "";
  });
  const [mp, setMp] = useState<MPInfo | null>(null);
  const [stance, setStance] = useState<Stance>("support");
  const [personalNote, setPersonalNote] = useState("");
  const [letter, setLetter] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function reset() {
    setStep("postcode");
    setMp(null);
    setStance("support");
    setPersonalNote("");
    setLetter("");
    setSubject("");
    setError("");
    setCopied(false);
  }

  async function handleLookupMP() {
    if (!postcode.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `/api/mp?postcode=${encodeURIComponent(postcode.trim())}`
      );
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Could not find your MP");
        return;
      }

      setMp(data);
      // Save postcode for future use
      localStorage.setItem("bill-buddy-postcode", postcode.trim());
      setStep("confirm");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDraftLetter() {
    if (!mp) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/mp/draft-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          billTitle,
          billSummary,
          mpName: mp.name,
          constituency: mp.constituency,
          stance,
          personalNote: personalNote.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to draft letter");
        return;
      }

      setLetter(data.letter);
      setSubject(data.subject);
      setStep("letter");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleOpenEmail() {
    if (!mp?.email || !letter) return;

    const greeting = `Dear ${mp.name},\n\n`;
    const signoff = `\n\nYours sincerely,\n[Your name]\n${mp.constituency} constituent`;
    const fullLetter = greeting + letter + signoff;

    const mailtoUrl = `mailto:${encodeURIComponent(mp.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullLetter)}`;
    window.open(mailtoUrl, "_self");

    toast("Opening your email client...");
  }

  function handleWriteToThem() {
    const url = `https://www.writetothem.com/?a=westminstermp&pc=${encodeURIComponent(postcode.trim())}`;
    window.open(url, "_blank", "noopener,noreferrer");

    toast("Opening WriteToThem — paste your letter there");
  }

  async function handleCopyLetter() {
    if (!mp || !letter) return;

    const greeting = `Dear ${mp.name},\n\n`;
    const signoff = `\n\nYours sincerely,\n[Your name]\n${mp.constituency} constituent`;
    const fullLetter = greeting + letter + signoff;

    try {
      await navigator.clipboard.writeText(fullLetter);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast("Letter copied to clipboard");
    } catch {
      toast.error("Could not copy to clipboard");
    }
  }

  const stanceOptions: { value: Stance; label: string; icon: typeof ThumbsUp }[] = [
    { value: "support", label: "I support this bill", icon: ThumbsUp },
    { value: "oppose", label: "I oppose this bill", icon: ThumbsDown },
    { value: "concerned", label: "I have concerns", icon: HelpCircle },
  ];

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        if (!val) reset();
        onOpenChange(val);
      }}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {step === "postcode" && "Write to Your MP"}
            {step === "confirm" && "Your MP"}
            {step === "stance" && "Your Position"}
            {step === "letter" && "Your Letter"}
          </DialogTitle>
          <DialogDescription className="line-clamp-1">
            {billTitle}
          </DialogDescription>
        </DialogHeader>

        {/* Step 1: Postcode */}
        {step === "postcode" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLookupMP();
            }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="postcode">Your UK Postcode</Label>
              <Input
                id="postcode"
                type="text"
                placeholder="e.g. SW1A 1AA"
                value={postcode}
                onChange={(e) =>
                  setPostcode(e.target.value.toUpperCase())
                }
                className="text-center text-lg tracking-wider font-mono"
                autoFocus
              />
              <p className="text-xs text-muted-foreground">
                We use this to find your local MP. It&apos;s stored only on your
                device.
              </p>
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button
              type="submit"
              className="w-full"
              disabled={loading || !postcode.trim()}
            >
              {loading ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <MapPin className="h-4 w-4 mr-2" />
              )}
              Find My MP
            </Button>
          </form>
        )}

        {/* Step 2: Confirm MP */}
        {step === "confirm" && mp && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-lg border border-border bg-muted/30 p-4">
              {mp.photoUrl ? (
                <img
                  src={mp.photoUrl}
                  alt={mp.name}
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-border"
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gradient-from/20 to-gradient-via/20 ring-2 ring-border">
                  <User className="h-8 w-8 text-muted-foreground" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base">{mp.name}</h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <Badge
                    variant="outline"
                    className="text-xs"
                    style={{
                      borderColor: mp.partyColour,
                      color: mp.partyColour,
                    }}
                  >
                    {mp.party}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {mp.constituency}
                  </span>
                </div>
                {mp.email && (
                  <p className="text-xs text-muted-foreground mt-1 truncate">
                    {mp.email}
                  </p>
                )}
              </div>
            </div>

            {!mp.email && (
              <p className="text-xs text-amber-500">
                No email address found for this MP. You can still use
                WriteToThem to contact them.
              </p>
            )}

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setStep("postcode");
                  setMp(null);
                }}
              >
                <ArrowLeft className="h-4 w-4 mr-1.5" />
                Change
              </Button>
              <Button
                size="sm"
                className="flex-1"
                onClick={() => setStep("stance")}
              >
                Continue
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Stance + personal note */}
        {step === "stance" && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>How do you feel about this bill?</Label>
              <div className="grid gap-2">
                {stanceOptions.map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setStance(opt.value)}
                      className={cn(
                        "flex items-center gap-3 rounded-lg border px-4 py-3 text-sm text-left transition-colors",
                        stance === opt.value
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-transparent text-muted-foreground hover:bg-muted/50"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-4 w-4 shrink-0",
                          stance === opt.value
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      />
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="personal-note">
                Personal note{" "}
                <span className="text-muted-foreground font-normal">
                  (optional)
                </span>
              </Label>
              <Textarea
                id="personal-note"
                placeholder="e.g. As a parent, I'm particularly concerned about..."
                value={personalNote}
                onChange={(e) => setPersonalNote(e.target.value)}
                rows={3}
              />
              <p className="text-xs text-muted-foreground">
                Add a personal touch — MPs respond better to individual stories.
              </p>
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setStep("confirm")}
              >
                <ArrowLeft className="h-4 w-4 mr-1.5" />
                Back
              </Button>
              <Button
                size="sm"
                className="flex-1"
                onClick={handleDraftLetter}
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Send className="h-4 w-4 mr-2" />
                )}
                Draft My Letter
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Letter preview + send */}
        {step === "letter" && mp && (
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Your letter to {mp.name}</Label>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 text-xs"
                  onClick={handleCopyLetter}
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 mr-1 text-emerald-400" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <Textarea
                value={letter}
                onChange={(e) => setLetter(e.target.value)}
                rows={10}
                className="text-sm leading-relaxed"
              />
              <p className="text-xs text-muted-foreground">
                Edit this draft freely — it&apos;s your letter. A greeting and
                sign-off will be added automatically.
              </p>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Choose how to send
              </p>

              {mp.email && (
                <Button className="w-full" onClick={handleOpenEmail}>
                  <Mail className="h-4 w-4 mr-2" />
                  Open in Email Client
                </Button>
              )}

              <Button
                variant={mp.email ? "outline" : "default"}
                className="w-full"
                onClick={handleWriteToThem}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Use WriteToThem
              </Button>
            </div>

            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setStep("stance")}
              >
                <ArrowLeft className="h-4 w-4 mr-1.5" />
                Redraft
              </Button>
            </div>

            <p className="text-[11px] text-muted-foreground leading-tight">
              Contains Parliamentary information licensed under the Open
              Parliament Licence v3.0.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

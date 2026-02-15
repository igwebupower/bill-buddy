"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BillCard } from "@/components/bills/BillCard";
import { BillCardSkeleton } from "@/components/bills/BillCardSkeleton";
import { GlassCard } from "@/components/shared/GlassCard";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import {
  Search,
  ScrollText,
  Bell,
  Share2,
  ArrowRight,
  Sparkles,
  Mail,
  Heart,
} from "lucide-react";

const springIn = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", stiffness: 260, damping: 24 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.06 } },
};

const features = [
  {
    icon: Sparkles,
    title: "AI Summaries",
    description:
      "Complex legal language translated into clear, plain English",
  },
  {
    icon: Bell,
    title: "Stage Alerts",
    description:
      "Get notified when bills you track move to the next stage of debate",
  },
  {
    icon: Share2,
    title: "Share Insights",
    description:
      "Generate shareable summary cards and PDFs for social media or research",
  },
  {
    icon: Mail,
    title: "Email Alerts",
    description:
      "Get email notifications when your tracked bills change stage",
  },
];

const defaultStats = [
  { label: "Bills Tracked", value: 0, suffix: "+" },
  { label: "AI Summaries", value: 0, suffix: "+" },
  { label: "Users Tracking", value: 0, suffix: "+" },
];

interface FeaturedBill {
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

export default function HomePage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [featured, setFeatured] = useState<FeaturedBill[]>([]);
  const [loadingFeatured, setLoadingFeatured] = useState(true);
  const [stats, setStats] = useState(defaultStats);

  useEffect(() => {
    async function loadFeatured() {
      try {
        const res = await fetch("/api/bills?take=6");
        const data = await res.json();
        setFeatured(data.items || []);
      } catch {
        // silently fail
      } finally {
        setLoadingFeatured(false);
      }
    }
    async function loadStats() {
      try {
        const res = await fetch("/api/stats");
        const data = await res.json();
        setStats([
          { label: "Bills Tracked", value: data.bills || 0, suffix: "+" },
          { label: "AI Summaries", value: data.summaries || 0, suffix: "+" },
          { label: "Users Tracking", value: data.trackers || 0, suffix: "+" },
        ]);
      } catch {
        // keep defaults
      }
    }
    loadFeatured();
    loadStats();
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/bills?search=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <div className="mx-auto max-w-6xl space-y-16">
      {/* Hero */}
      <motion.section
        className="flex flex-col items-center text-center pt-10 pb-4"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.div variants={springIn} className="mb-5">
          <Badge
            variant="outline"
            className="px-3 py-1 text-sm text-muted-foreground"
          >
            UK Parliamentary Bills
          </Badge>
        </motion.div>

        <motion.h1
          variants={springIn}
          className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Legislation,{" "}
          <span className="text-primary">simplified</span>
        </motion.h1>

        <motion.p
          variants={springIn}
          className="mt-4 max-w-xl text-lg text-muted-foreground leading-relaxed"
        >
          Plain-English summaries of UK Parliamentary bills.
          Track legislation, get alerts, and understand how new laws affect you.
        </motion.p>

        {/* Search */}
        <motion.form
          variants={springIn}
          onSubmit={handleSearch}
          className="mt-8 flex w-full max-w-md gap-2"
        >
          <div className="relative flex-1 flex items-center rounded-lg border border-border bg-card transition-shadow focus-within:ring-2 focus-within:ring-ring/40">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search for a bill..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-11 w-full rounded-lg bg-transparent pl-9 pr-4 text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <Button type="submit" size="lg">
            Search
          </Button>
        </motion.form>

        <motion.div
          variants={springIn}
          className="mt-4 flex gap-3 text-sm text-muted-foreground"
        >
          <span>Try:</span>
          {["Renters", "AI", "NHS"].map((term) => (
            <button
              key={term}
              onClick={() => router.push(`/bills?search=${term}`)}
              className="text-primary hover:underline"
            >
              {term}
            </button>
          ))}
        </motion.div>
      </motion.section>

      {/* Stats row */}
      <motion.section
        className="grid grid-cols-3 gap-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={springIn}>
            <GlassCard className="text-center py-6">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="text-2xl font-bold text-primary font-mono-numbers"
              />
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.section>

      {/* Features */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((feature) => (
          <motion.div key={feature.title} variants={springIn}>
            <GlassCard className="h-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/8 mb-3">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.section>

      {/* Featured Bills */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Latest Bills</h2>
            <p className="text-sm text-muted-foreground">
              Recently updated legislation
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/bills">
              View all
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {loadingFeatured
            ? Array.from({ length: 6 }).map((_, i) => (
                <BillCardSkeleton key={i} />
              ))
            : featured.map((bill) => (
                <BillCard key={bill.parliamentId} bill={bill} />
              ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-8">
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <ScrollText className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-semibold mb-2">
            Stay informed about UK legislation
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Track bills through Parliament, get push notifications for stage
            changes, and share plain-English summaries.
          </p>
          <div className="flex flex-col items-center gap-3">
            <Button asChild size="lg">
              <Link href="/bills">
                Browse Bills
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <a
              href="https://buymeacoffee.com/johnigwe88m"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
            >
              <Heart className="h-4 w-4" /> Support the project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

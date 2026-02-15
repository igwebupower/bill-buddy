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
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const springIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", stiffness: 200, damping: 22 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const features = [
  {
    icon: Sparkles,
    title: "AI Summaries",
    description:
      "Complex legal language translated into clear, plain English by Claude AI",
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
    icon: Globe,
    title: "Multilingual",
    description:
      "Read summaries in Welsh, Urdu, Polish, Arabic and more",
  },
];

const defaultStats = [
  { label: "Bills Tracked", value: 0, suffix: "+" },
  { label: "AI Summaries", value: 0, suffix: "+" },
  { label: "Languages", value: 5 },
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
          { label: "Languages", value: data.languages || 5 },
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
      {/* Hero with gradient mesh */}
      <motion.section
        className="relative flex flex-col items-center text-center pt-8 pb-4 overflow-hidden"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />

        <motion.div variants={springIn} className="relative mb-6">
          <Badge
            variant="outline"
            className="glass px-3 py-1 text-sm border-gradient-from/30 text-primary"
          >
            UK Parliamentary Bills
          </Badge>
        </motion.div>

        <motion.h1
          variants={springIn}
          className="relative text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Legislation,{" "}
          <span className="text-gradient">simplified</span>
        </motion.h1>

        <motion.p
          variants={springIn}
          className="relative mt-4 max-w-xl text-lg text-muted-foreground"
        >
          AI-powered plain-English summaries of UK Parliamentary bills.
          Track legislation, get alerts, and understand how new laws affect you.
        </motion.p>

        {/* Search */}
        <motion.form
          variants={springIn}
          onSubmit={handleSearch}
          className="relative mt-8 flex w-full max-w-md gap-2"
        >
          <div className="glass relative flex-1 flex items-center rounded-lg transition-all focus-within:shadow-glow">
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
          className="relative mt-4 flex gap-3 text-sm text-muted-foreground"
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
                className="text-2xl font-bold text-gradient font-mono-numbers"
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
            <GlassCard gradientBorder className="h-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-gradient-from/20 to-gradient-via/20 mb-3">
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
        <div className="glass relative overflow-hidden rounded-2xl p-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-mesh opacity-40" />
          <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-20" />
          <div className="relative">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gradient-from via-gradient-via to-gradient-to shadow-glow">
              <ScrollText className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl font-semibold mb-2">
              Stay informed about UK legislation
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Track bills through Parliament, get push notifications for stage
              changes, and share plain-English summaries.
            </p>
            <Button asChild size="lg">
              <Link href="/bills">
                Browse Bills
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

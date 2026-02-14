"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BillCard } from "@/components/bills/BillCard";
import { BillCardSkeleton } from "@/components/bills/BillCardSkeleton";
import {
  Search,
  ScrollText,
  Bell,
  Share2,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
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
    loadFeatured();
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
        className="relative flex flex-col items-center text-center pt-8 pb-4"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="mb-6">
          <Badge
            variant="outline"
            className="px-3 py-1 text-sm border-primary/30 text-primary"
          >
            UK Parliamentary Bills
          </Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Legislation,{" "}
          <span className="text-primary">simplified</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-xl text-lg text-muted-foreground"
        >
          AI-powered plain-English summaries of UK Parliamentary bills.
          Track legislation, get alerts, and understand how new laws affect you.
        </motion.p>

        {/* Search */}
        <motion.form
          variants={fadeUp}
          onSubmit={handleSearch}
          className="mt-8 flex w-full max-w-md gap-2"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for a bill..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9 h-11"
            />
          </div>
          <Button type="submit" size="lg">
            Search
          </Button>
        </motion.form>

        <motion.div variants={fadeUp} className="mt-4 flex gap-3 text-sm text-muted-foreground">
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

      {/* Features */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((feature) => (
          <motion.div key={feature.title} variants={fadeUp}>
            <Card className="p-5 border-border/50 bg-card/30 h-full">
              <feature.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </Card>
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
        <Card className="p-8 border-primary/20 bg-primary/5">
          <ScrollText className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">
            Stay informed about UK legislation
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Track bills through Parliament, get push notifications for stage changes, and share plain-English summaries.
          </p>
          <Button asChild size="lg">
            <Link href="/bills">
              Browse Bills
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </Card>
      </section>
    </div>
  );
}

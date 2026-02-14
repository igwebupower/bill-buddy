"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Heart,
  GraduationCap,
  Home,
  Train,
  Leaf,
  TrendingUp,
  Shield,
  Globe,
  Scale,
  Cpu,
  Briefcase,
  HandHeart,
  type LucideIcon,
} from "lucide-react";

interface Topic {
  name: string;
  icon: LucideIcon;
  description: string;
}

const topics: Topic[] = [
  {
    name: "Health",
    icon: Heart,
    description: "NHS, public health, mental health, and medical regulation",
  },
  {
    name: "Education",
    icon: GraduationCap,
    description: "Schools, universities, skills training, and qualifications",
  },
  {
    name: "Housing",
    icon: Home,
    description: "Planning, tenants' rights, building safety, and homelessness",
  },
  {
    name: "Transport",
    icon: Train,
    description: "Railways, roads, aviation, and active travel",
  },
  {
    name: "Environment",
    icon: Leaf,
    description: "Climate, energy, wildlife, and pollution controls",
  },
  {
    name: "Economy",
    icon: TrendingUp,
    description: "Taxation, trade, financial regulation, and economic growth",
  },
  {
    name: "Defence",
    icon: Shield,
    description: "Armed forces, national security, and veterans affairs",
  },
  {
    name: "Immigration",
    icon: Globe,
    description: "Asylum, visas, citizenship, and border control",
  },
  {
    name: "Justice",
    icon: Scale,
    description: "Criminal law, courts, policing, and sentencing reform",
  },
  {
    name: "Technology",
    icon: Cpu,
    description: "Digital regulation, AI, data protection, and online safety",
  },
  {
    name: "Employment",
    icon: Briefcase,
    description: "Workers' rights, minimum wage, pensions, and gig economy",
  },
  {
    name: "Social Welfare",
    icon: HandHeart,
    description: "Benefits, social care, disability support, and child welfare",
  },
];

const container = {
  animate: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function TopicsClient() {
  const router = useRouter();

  function handleTopicClick(topicName: string) {
    router.push(`/bills?search=${encodeURIComponent(topicName)}`);
  }

  return (
    <motion.div
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      initial="initial"
      animate="animate"
      variants={container}
    >
      {topics.map((topic) => (
        <motion.div key={topic.name} variants={item}>
          <Card
            role="button"
            tabIndex={0}
            onClick={() => handleTopicClick(topic.name)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleTopicClick(topic.name);
              }
            }}
            className="group relative cursor-pointer p-6 border-border/50 bg-card/30 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_oklch(0.6_0.18_240_/_0.12)] hover:-translate-y-0.5"
          >
            <div className="flex flex-col gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                <topic.icon className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                  {topic.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}

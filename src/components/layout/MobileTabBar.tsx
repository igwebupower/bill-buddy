"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ScrollText, Tags, BookmarkCheck, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const tabs = [
  { href: "/", label: "Home", icon: Home },
  { href: "/bills", label: "Bills", icon: ScrollText },
  { href: "/topics", label: "Topics", icon: Tags },
  { href: "/tracked", label: "Tracked", icon: BookmarkCheck },
  { href: "/mp", label: "Your MP", icon: Landmark },
];

export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      data-slot="mobile-tab-bar"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/90 backdrop-blur-lg lg:hidden"
    >
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const isActive =
            tab.href === "/"
              ? pathname === "/"
              : pathname.startsWith(tab.href);

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "relative flex flex-col items-center gap-0.5 px-3 py-2.5 text-xs transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="tab-active"
                  className="absolute -top-px left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-primary"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              <tab.icon className="h-5 w-5" />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

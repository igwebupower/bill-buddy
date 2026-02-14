"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ScrollText, Tags, BookmarkCheck, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/", label: "Home", icon: Home },
  { href: "/bills", label: "Bills", icon: ScrollText },
  { href: "/topics", label: "Topics", icon: Tags },
  { href: "/tracked", label: "Tracked", icon: BookmarkCheck },
  { href: "/settings", label: "More", icon: Settings },
];

export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav data-slot="mobile-tab-bar" className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
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
                "flex flex-col items-center gap-0.5 px-3 py-2.5 text-xs transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              <tab.icon className="h-5 w-5" />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ScrollText,
  Home,
  BookmarkCheck,
  BarChart3,
  Tags,
  Landmark,
  Settings,
  X,
  Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/bills", label: "Bills", icon: ScrollText },
  { href: "/topics", label: "Topics", icon: Tags },
  { href: "/mp", label: "Your MP", icon: Landmark },
  { href: "/timeline", label: "Timeline", icon: BarChart3 },
  { href: "/tracked", label: "Tracked", icon: BookmarkCheck },
  { href: "/settings", label: "Settings", icon: Settings },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <aside
        data-slot="sidebar"
        className={cn(
          "fixed top-0 left-0 z-50 flex h-full w-64 flex-col border-r bg-sidebar border-border transition-transform duration-300 lg:sticky lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <Link href="/" className="flex items-center gap-2.5" onClick={onClose}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <ScrollText className="h-4.5 w-4.5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              BillBrief
            </span>
          </Link>
          <button
            onClick={onClose}
            className="rounded-md p-1 hover:bg-accent lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-lg bg-primary/8"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                <item.icon className="relative h-4.5 w-4.5" />
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-border p-4 space-y-2">
          <p className="text-xs text-muted-foreground">
            Data from UK Parliament API
          </p>
          <div className="flex gap-3">
            <Link
              href="/privacy"
              onClick={onClose}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              onClick={onClose}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
          <a
            href="https://buymeacoffee.com/johnigwe88m"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-pink-600 hover:bg-pink-500/10 transition-colors dark:text-pink-400"
          >
            <Heart className="h-4 w-4" /> Support BillBrief
          </a>
        </div>
      </aside>
    </>
  );
}

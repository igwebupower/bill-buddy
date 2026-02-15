"use client";

import { Menu, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import {
  ScrollText,
  Heart,
  GraduationCap,
  Home,
  Scale,
  Cpu,
} from "lucide-react";

interface TopBarProps {
  onMenuClick: () => void;
}

const quickNav = [
  { label: "Health Bills", search: "Health", icon: Heart },
  { label: "Education Bills", search: "Education", icon: GraduationCap },
  { label: "Housing Bills", search: "Housing", icon: Home },
  { label: "Justice Bills", search: "Justice", icon: Scale },
  { label: "Technology Bills", search: "Technology", icon: Cpu },
];

export function TopBar({ onMenuClick }: TopBarProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  function handleSelect(search: string) {
    setOpen(false);
    setQuery("");
    router.push(`/bills?search=${encodeURIComponent(search)}`);
  }

  return (
    <>
      <header
        data-slot="topbar"
        className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background/80 px-4 backdrop-blur-lg lg:px-6"
      >
        <button
          onClick={onMenuClick}
          className="rounded-md p-2 hover:bg-accent lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Spotlight search trigger */}
        <button
          onClick={() => setOpen(true)}
          className="relative flex flex-1 max-w-md items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/20"
        >
          <Search className="h-4 w-4" />
          <span>Search bills...</span>
          <kbd className="ml-auto hidden rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono-numbers text-muted-foreground sm:inline-block">
            Ctrl K
          </kbd>
        </button>
      </header>

      {/* Command palette */}
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search Bills"
        description="Search for UK Parliamentary bills by name or topic"
      >
        <CommandInput
          placeholder="Search bills..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>
            {query.trim() ? (
              <button
                className="text-primary hover:underline"
                onClick={() => handleSelect(query)}
              >
                Search for &ldquo;{query}&rdquo;
              </button>
            ) : (
              "Type to search..."
            )}
          </CommandEmpty>
          <CommandGroup heading="Quick topics">
            {quickNav.map((item) => (
              <CommandItem
                key={item.search}
                onSelect={() => handleSelect(item.search)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          {query.trim() && (
            <CommandGroup heading="Search">
              <CommandItem onSelect={() => handleSelect(query)}>
                <ScrollText className="h-4 w-4" />
                <span>Search for &ldquo;{query}&rdquo;</span>
              </CommandItem>
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}

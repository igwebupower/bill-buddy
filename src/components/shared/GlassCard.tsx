"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GlassCard({
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card shadow-sm p-5 transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  gradientBorder?: boolean;
}

export function GlassCard({
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-5 transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  gradientBorder?: boolean;
}

export function GlassCard({
  className,
  glow,
  gradientBorder,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-xl p-5 transition-all duration-300",
        gradientBorder && "gradient-border glass-hover",
        glow && "shadow-glow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

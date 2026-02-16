import { cn } from "@/lib/utils";

interface BillBriefLogoProps {
  className?: string;
}

export function BillBriefLogo({ className }: BillBriefLogoProps) {
  return (
    <svg
      viewBox="0 0 34 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      {/* Cyan - short */}
      <rect x="0" y="12" width="4.5" height="12" rx="2.25" fill="#4AADE4" />
      {/* Blue - medium */}
      <rect x="6" y="6" width="4.5" height="24" rx="2.25" fill="#1A73E8" />
      {/* Orange - tall */}
      <rect x="12" y="2" width="4.5" height="32" rx="2.25" fill="#F5A623" />
      {/* Orange - tall */}
      <rect x="18" y="4" width="4.5" height="28" rx="2.25" fill="#F5A623" />
      {/* Blue - medium */}
      <rect x="24" y="7" width="4.5" height="22" rx="2.25" fill="#1A73E8" />
      {/* Cyan - short */}
      <rect x="30" y="13" width="4.5" height="10" rx="2.25" fill="#4AADE4" />
    </svg>
  );
}

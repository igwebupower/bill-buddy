import { cn } from "@/lib/utils";

interface BillBriefLogoProps {
  className?: string;
}

export function BillBriefLogo({ className }: BillBriefLogoProps) {
  return (
    <svg
      viewBox="0 0 38 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      {/* Left pair - cyan */}
      <rect x="0" y="13" width="4" height="10" rx="2" fill="#4AADE4" />
      <rect x="5.5" y="8" width="4" height="20" rx="2" fill="#4AADE4" />
      {/* Center pair - orange */}
      <rect x="11" y="3" width="4" height="30" rx="2" fill="#F5A623" />
      <rect x="16.5" y="1" width="4" height="34" rx="2" fill="#F5A623" />
      {/* Right pair - blue */}
      <rect x="22" y="4" width="4" height="28" rx="2" fill="#1A73E8" />
      <rect x="27.5" y="9" width="4" height="18" rx="2" fill="#1A73E8" />
      {/* Right dot - blue */}
      <rect x="33" y="14" width="4" height="8" rx="2" fill="#1A73E8" />
    </svg>
  );
}

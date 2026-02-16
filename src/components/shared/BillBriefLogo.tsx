import { cn } from "@/lib/utils";

interface BillBriefLogoProps {
  className?: string;
}

export function BillBriefLogo({ className }: BillBriefLogoProps) {
  return (
    <svg
      viewBox="0 0 28 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <rect x="0" y="11" width="4" height="10" rx="2" fill="#4AADE4" />
      <rect x="6" y="5" width="4" height="22" rx="2" fill="#1A73E8" />
      <rect x="12" y="1" width="4" height="30" rx="2" fill="#F5A623" />
      <rect x="18" y="4" width="4" height="24" rx="2" fill="#E8912D" />
      <rect x="24" y="8" width="4" height="16" rx="2" fill="#1A73E8" />
    </svg>
  );
}

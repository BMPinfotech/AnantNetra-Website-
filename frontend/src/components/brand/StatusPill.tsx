import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type StatusPillProps = {
  status: "available" | "coming-soon" | "neutral";
  children: ReactNode;
  className?: string;
};

const statusClasses = {
  available:
    "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  "coming-soon":
    "border-brand-lavender/35 bg-brand-lavender/15 text-brand-lavender",
  neutral: "border-line-dark bg-white/5 text-brand-muted",
} as const;

const dotClasses = {
  available: "bg-emerald-400",
  "coming-soon": "bg-brand-lavender",
  neutral: "bg-brand-muted",
} as const;

export function StatusPill({ status, children, className }: StatusPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em]",
        statusClasses[status],
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dotClasses[status])} />
      {children}
    </span>
  );
}

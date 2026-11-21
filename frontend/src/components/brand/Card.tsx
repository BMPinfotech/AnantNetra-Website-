import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  interactive?: boolean;
};

export function Card({
  interactive = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-line-dark bg-brand-surface/70 p-6 text-brand-text md:p-8",
        interactive &&
          "transition-all duration-200 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-[0_16px_40px_-24px_rgba(0,0,0,0.65)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

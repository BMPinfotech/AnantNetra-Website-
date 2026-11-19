import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardTone = "dark" | "light" | "auto";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  tone?: CardTone;
  children: ReactNode;
  interactive?: boolean;
};

const toneClasses: Record<CardTone, string> = {
  dark: "border-line-dark bg-brand-surface/70 text-brand-text",
  light: "border-line-light bg-white text-brand-ink",
  auto: "border-line-light bg-white text-brand-ink dark:border-line-dark dark:bg-brand-surface/70 dark:text-brand-text",
};

export function Card({
  tone = "auto",
  interactive = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border p-6 md:p-8",
        toneClasses[tone],
        interactive &&
          "transition-all duration-200 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-[0_16px_40px_-24px_rgba(23,20,38,0.45)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

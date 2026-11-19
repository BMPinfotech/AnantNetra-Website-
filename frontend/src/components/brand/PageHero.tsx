import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  align = "left",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-line-dark bg-brand-ink py-20 text-brand-text md:py-28",
        className,
      )}
    >
      <div className="brand-grid-pattern pointer-events-none absolute inset-0 opacity-60" />
      <div className="brand-glow pointer-events-none absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 opacity-70" />

      <div
        className={cn(
          "brand-container relative z-10",
          align === "center" && "text-center",
        )}
      >
        {eyebrow ? (
          <span className="brand-eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-brand-accent">
            {eyebrow}
          </span>
        ) : null}

        <h1 className="brand-display max-w-4xl">{title}</h1>

        {description ? (
          <p className="brand-prose mt-5 max-w-prose text-base md:text-lg">
            {description}
          </p>
        ) : null}

        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

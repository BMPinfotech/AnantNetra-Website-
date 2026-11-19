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
        "relative overflow-hidden border-b border-white/10 bg-brand-ink py-20 text-brand-text md:py-28",
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
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-accent">
            {eyebrow}
          </span>
        ) : null}

        <h1 className="max-w-4xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-muted md:text-lg">
            {description}
          </p>
        ) : null}

        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

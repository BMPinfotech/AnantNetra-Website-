import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "font-mono text-[11px] font-semibold uppercase tracking-[0.2em]",
            tone === "dark" ? "text-brand-accent" : "text-brand-accent",
          )}
        >
          {eyebrow}
        </span>
      ) : null}

      <h2
        className={cn(
          "max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-brand-text" : "text-brand-ink",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed md:text-lg",
            tone === "dark" ? "text-brand-muted" : "text-brand-body/75",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

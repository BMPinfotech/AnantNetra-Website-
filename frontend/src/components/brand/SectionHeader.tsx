import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
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
        <span className="brand-eyebrow text-brand-accent">{eyebrow}</span>
      ) : null}

      <h2 className="brand-heading max-w-3xl text-3xl leading-tight text-brand-text md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>

      {description ? (
        <p className="brand-prose max-w-prose text-base md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

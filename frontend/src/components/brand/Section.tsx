import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionTone = "dark" | "light" | "transparent";

type SectionProps = {
  id?: string;
  tone?: SectionTone;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

const toneClasses: Record<SectionTone, string> = {
  dark: "bg-brand-ink text-brand-text",
  light: "bg-brand-light text-brand-body",
  transparent: "bg-transparent",
};

export function Section({
  id,
  tone = "transparent",
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full scroll-mt-24 py-20 md:py-28",
        toneClasses[tone],
        className,
      )}
    >
      <div className={cn("brand-container", containerClassName)}>{children}</div>
    </section>
  );
}

import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "muted";
type ButtonSize = "sm" | "md" | "lg";
type ButtonTone = "light" | "dark" | "auto";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  tone?: ButtonTone;
  className?: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const variantClasses: Record<ButtonVariant, Record<ButtonTone, string>> = {
  primary: {
    light: "bg-brand-accent text-brand-ink shadow-sm hover:bg-[#ff8d4d] active:translate-y-px",
    dark: "bg-brand-accent text-brand-ink shadow-sm hover:bg-[#ff8d4d] active:translate-y-px",
    auto: "bg-brand-accent text-brand-ink shadow-sm hover:bg-[#ff8d4d] active:translate-y-px",
  },
  secondary: {
    light:
      "border border-brand-ink/15 bg-transparent text-brand-ink hover:border-brand-ink/30 hover:bg-brand-ink/5",
    dark:
      "border border-white/20 bg-white/5 text-brand-text hover:border-white/35 hover:bg-white/10",
    auto:
      "border border-brand-ink/15 bg-transparent text-brand-ink hover:border-brand-ink/30 hover:bg-brand-ink/5 dark:border-white/20 dark:bg-white/5 dark:text-brand-text dark:hover:border-white/35 dark:hover:bg-white/10",
  },
  ghost: {
    light: "text-brand-body/80 hover:bg-brand-ink/5 hover:text-brand-ink",
    dark: "text-brand-muted hover:bg-white/5 hover:text-brand-text",
    auto:
      "text-brand-body/80 hover:bg-brand-ink/5 hover:text-brand-ink dark:text-brand-muted dark:hover:bg-white/5 dark:hover:text-brand-text",
  },
  muted: {
    light:
      "cursor-not-allowed border border-brand-ink/10 bg-brand-ink/5 text-brand-ink/45",
    dark:
      "cursor-not-allowed border border-white/10 bg-white/5 text-brand-muted/60",
    auto:
      "cursor-not-allowed border border-brand-ink/10 bg-brand-ink/5 text-brand-ink/45 dark:border-white/10 dark:bg-white/5 dark:text-brand-muted/60",
  },
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  tone = "auto",
  className,
  external = false,
  ...props
}: ButtonLinkProps) {
  const classes = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant][tone],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, SunIcon } from "lucide-react";

import { usePathname } from "next/navigation";

export function ThemeToggle() {
  const pathname = usePathname();
  const { setTheme, theme, resolvedTheme } = useTheme();

  if (pathname === "/incident-response") return null;

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full border border-line-dark bg-brand-surface/90 text-brand-text shadow-lg backdrop-blur-md transition-colors hover:border-brand-accent/40 hover:bg-brand-surface hover:text-brand-accent focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      aria-label={
        currentTheme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
    >
      {currentTheme === "light" ? (
        <SunIcon className="size-5" suppressHydrationWarning />
      ) : (
        <Moon className="size-5" suppressHydrationWarning />
      )}
    </Button>
  );
}

"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

export function ThemeToggle() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until the component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || pathname === "/incident-response") return null;

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full border border-zinc-200 bg-white text-zinc-950 shadow-lg hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon className="size-5" /> : <SunIcon className="size-5" />}
    </Button>
  );
}

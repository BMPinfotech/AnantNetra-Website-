"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { Search, Sun, Moon, Menu, X, Shield } from "lucide-react";

const NAV_LINKS = [
  { label: "Overview", href: "#quantiqen-hero" },
  { label: "SDI Core Layer", href: "#sdi-core" },
  { label: "Built Different", href: "#built-different" },
  { label: "India Moat", href: "#india-moat" },
  { label: "Integrations", href: "#integrations" },
];

export default function QuantiqenNavbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    const initGsap = async () => {
      const gsap = (await import("gsap")).default;
      ctx = gsap.context(() => {
        gsap.from(navRef.current, {
          y: -40,
          opacity: 0,
          duration: 0.6,
          delay: 0.2,
          ease: "power3.out",
        });
      });
    };

    initGsap();

    return () => ctx?.revert();
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActiveSection(id);
          },
          { rootMargin: "-40% 0px -55% 0px" },
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [mounted]);

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const scrollToSection = useCallback((href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  }, [currentTheme, setTheme]);

  return (
    <div
      ref={navRef}
      className="w-full border-b border-slate-200 dark:border-white/5 bg-white/50 dark:bg-[#080B11]/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 md:h-16">
        <div className="flex items-center gap-2.5 shrink-0">
          <Shield className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
          <span
            className="text-base md:text-lg font-bold tracking-tight text-slate-900 dark:text-white"
            style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
          >
            QUANTIQEN
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                activeSection === link.href.slice(1)
                  ? "text-cyan-400 bg-cyan-400/10"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-all duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {currentTheme === "light" ? (
                <Moon className="w-4 h-4" suppressHydrationWarning />
              ) : (
                <Sun className="w-4 h-4" suppressHydrationWarning />
              )}
            </button>
          )}

          <button
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-all duration-300 cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          <button className="hidden sm:inline-flex px-3 md:px-4 py-1.5 md:py-2 text-xs font-bold rounded-lg bg-cyan-500 text-white hover:bg-cyan-400 hover:shadow-[0_0_20px_-5px_rgba(0,240,255,0.5)] active:scale-95 transition-all duration-300 cursor-pointer">
            REQUEST ACCESS
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-all cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-white/5 bg-white dark:bg-black/90 backdrop-blur-md">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                  activeSection === link.href.slice(1)
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <button className="w-full px-4 py-2.5 text-sm font-bold rounded-lg bg-cyan-500 text-white hover:bg-cyan-400 transition-all duration-300 cursor-pointer">
                REQUEST ACCESS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

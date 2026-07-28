"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function EmergencyAdvisory() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(barRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={barRef}
      className="relative w-full g-linear-to-r from-red-50 to-red-100/80 dark:from-red-950/90 dark:to-red-900/80 backdrop-blur-sm border-b border-red-200 dark:border-red-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span
            className="text-xs font-semibold tracking-wider text-red-700 dark:text-red-300"
            style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
          >
            CVE-2025-3184
          </span>
          <span className="hidden sm:inline text-xs text-red-500 dark:text-red-400/60 font-medium">
            Active Threat Intelligence
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <button className="px-3 py-1.5 text-xs font-bold rounded-md bg-red-600 text-white hover:bg-red-500 hover:shadow-[0_0_20px_-5px_rgba(239,68,68,0.6)] active:scale-95 transition-all duration-300 cursor-pointer">
            Incident Report
          </button>

          <span className="hidden sm:inline text-red-300 dark:text-red-700 select-none">|</span>

          <span className="text-xs font-semibold text-red-600 dark:text-red-300 cursor-pointer hover:text-red-800 dark:hover:text-red-100 transition-colors select-none tracking-wide">
            EN / BN
          </span>
        </div>
      </div>
    </div>
  );
}

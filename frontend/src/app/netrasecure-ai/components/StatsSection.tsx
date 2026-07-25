"use client";

import { BrainCircuit, ShieldCheck, Zap, Flag } from "lucide-react";

const stats = [
  {
    icon: BrainCircuit,
    title: "AI Powered",
    description: "Advanced AI models for real-time threat detection",
    badge: "Core Engine",
    gradient: "from-[#00f2fe] to-[#4facfe]",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description: "Your data is encrypted and zero logs are stored",
    badge: "Zero Logs",
    gradient: "from-[#7928ca] to-[#ff0080]",
  },
  {
    icon: Zap,
    title: "Real-Time Protection",
    description: "Continuous 24/7 monitoring against online scams",
    badge: "Active Shield",
    gradient: "from-[#00f2fe] to-[#4facfe]",
  },
  {
    icon: Flag,
    title: "Made in India",
    description: "Built for individuals and secure organizations",
    badge: "National Standard",
    gradient: "from-[#7928ca] to-[#ff0080]",
  },
];

export default function StatsSection() {
  return (
    <section className="relative w-full bg-slate-50 dark:bg-[#030712] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => {
            const isMadeInIndia = stat.title === "Made in India";
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-[rgba(15,23,42,0.6)] dark:shadow-none p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-md dark:hover:border-white/20"
              >
                {/* Background Glow Effect */}
                <div
                  className={`absolute -inset-20 bg-linear-to-r ${stat.gradient} opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-20`}
                />

                <div className="relative z-10">
                  {/* Top Badge & Pulse Indicator */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5">
                      <stat.icon className="h-6 w-6 text-[#00f2fe]" />
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5 px-2.5 py-1 text-[10px] text-slate-500 dark:text-[#94a3b8]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00f2fe] animate-pulse" />
                      {stat.badge}
                    </div>
                  </div>

                  {/* Main Title (Instead of Fake Numbers) */}
                  <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-[#f8fafc]">
                    <span>{stat.title}</span>
                    {isMadeInIndia && <span className="text-lg">🇮🇳</span>}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-[#94a3b8]">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
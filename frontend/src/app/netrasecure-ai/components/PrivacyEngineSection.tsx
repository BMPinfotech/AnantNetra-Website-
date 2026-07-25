"use client";

import { Cpu, Lock, ShieldCheck, Zap, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";

const engineFeatures = [
  {
    icon: Cpu,
    title: "Advanced LLM Brain",
    description:
      "Understands plain security questions and analyzes suspicious texts in natural language without jargon.",
  },
  {
    icon: Zap,
    title: "Real-Time Threat Detection",
    description:
      "Continuously scans millions of web data points to stop new scams and malicious links instantly.",
  },
  {
    icon: Lock,
    title: "Privacy-First Architecture",
    description:
      "Your personal queries and data are encrypted end-to-end and never sold or logged.",
  },
  {
    icon: ShieldCheck,
    title: "Lightning-Fast API Engine",
    description:
      "Delivers instant verification results in milliseconds without slowing down your phone.",
  },
];

export default function AIEngineSection() {
  return (
    <section className="relative w-full bg-slate-50 dark:bg-[#030712] py-20 md:py-28 overflow-hidden text-white">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badgeIcon={Sparkles}
          badgeText="UNDER THE HOOD"
          title="Powered by Smart AI"
          description="Simple, transparent, and powerful cybersecurity technology working behind the scenes for your safety."
        />

        {/* 4 Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {engineFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900/40 dark:shadow-none p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 dark:bg-cyan-500/10 dark:border-cyan-500/20 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
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
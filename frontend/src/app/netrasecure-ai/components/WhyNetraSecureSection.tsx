"use client";

import {
  Zap,
  MessageSquare,
  ShieldCheck,
  BrainCircuit,
  Sparkles,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const highlights = [
  {
    icon: Zap,
    title: "Faster Decision Making",
    description: "Instantly evaluate cyber threats and know exactly what steps to take without delay.",
    badge: "Instant Response",
    gradient: "from-[#00f2fe] to-[#4facfe]",
    color: "text-amber-400",
  },
  {
    icon: MessageSquare,
    title: "Simple Explanations",
    description: "Complex technical risks translated into plain, actionable language anyone can understand.",
    badge: "Plain Language",
    gradient: "from-[#7928ca] to-[#ff0080]",
    color: "text-cyan-400",
  },
  {
    icon: ShieldCheck,
    title: "Proactive Security",
    description: "Detect phishing links and cyber traps before you fall victim to modern digital attacks.",
    badge: "Pre-Attack Warning",
    gradient: "from-[#00f2fe] to-[#4facfe]",
    color: "text-emerald-400",
  },
  {
    icon: BrainCircuit,
    title: "Always Learning",
    description: "Continuously updated AI intelligence that adapts dynamically to brand new threat patterns.",
    badge: "Adaptive AI",
    gradient: "from-[#7928ca] to-[#ff0080]",
    color: "text-indigo-400",
  },
];

export default function WhyNetraSecureSection() {
  return (
    <section id="why-netrasecure" className="relative w-full bg-slate-50 dark:bg-[#030712] py-20 md:py-28 overflow-hidden border-t border-slate-200 dark:border-white/5">
      {/* Background Decor Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-125 w-125 bg-cyan-500/5 dark:bg-[#00f2fe]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badgeIcon={Sparkles}
          badgeText="WHY NETRASECURE"
          title="Why Modern Cybersecurity Needs AI"
          description="Cyber threats evolve every day. Traditional security tools focus on detecting attacks after they begin. NetraSecure AI helps users make safer decisions before they become victims by providing intelligent risk analysis, simple explanations, and proactive cybersecurity guidance."
        />

        {/* 4 Grid Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900/40 dark:shadow-none p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-md hover:border-[#00f2fe]/40 dark:hover:shadow-[0_10px_30px_rgba(0,242,254,0.1)]"
              >
                {/* Glow Overlay on Hover */}
                <div
                  className={`absolute -inset-20 bg-linear-to-r ${item.gradient} opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-15`}
                />

                <div className="relative z-10">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5 transition-colors group-hover:border-[#00f2fe]/30 group-hover:bg-[#00f2fe]/10">
                      <Icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-100 border border-slate-200 text-slate-600 dark:bg-white/5 dark:border-white/10 dark:text-slate-300">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-[#f8fafc] tracking-wide mb-2">
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
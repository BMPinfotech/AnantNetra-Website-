"use client";

import { Check, X, Sparkles, ShieldCheck, AlertTriangle } from "lucide-react";
import SectionHeader from "./SectionHeader";

const comparisons = [
  {
    feature: "24/7 AI Cyber Assistant",
    description: "Context-aware conversational guidance for cyber questions",
    netraSecureText: "24/7 AI Assistant",
    standardText: "None / Static FAQ",
    standardCheck: "no",
  },
  {
    feature: "URL & Link Scanner",
    description: "Deep AI behavioral analysis vs basic blacklist check",
    netraSecureText: "AI Deep Scan",
    standardText: "Basic URL Scan",
    standardCheck: "yes",
  },
  {
    feature: "Scam & Threat Alerts",
    description: "Real-time localized mobile banking & SMS scam intelligence",
    netraSecureText: "Live Local Alerts",
    standardText: "Generic Alerts",
    standardCheck: "warning",
  },
  {
    feature: "Cyber Safety Education",
    description: "Interactive micro-learning modules to build safety habits",
    netraSecureText: "Interactive Modules",
    standardText: "No Education",
    standardCheck: "no",
  },
  {
    feature: "Privacy-First Policy",
    description: "Strict zero-log policy protecting user query data",
    netraSecureText: "Zero Data Logging",
    standardText: "Ad & Data Tracking",
    standardCheck: "no",
  },
];

export default function WhyDifferentSection() {
  return (
    <section className="relative w-full bg-slate-50 dark:bg-[#030712] py-20 md:py-28 overflow-hidden text-white">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-137.5 h-137.5 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badgeIcon={Sparkles}
          badgeText="WHY DIFFERENT"
          title="Why NetraSecure is Different"
          description="See how NetraSecure AI stacks up against standard security tools."
        />
        

        {/* Comparison Table Card */}
        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900/40 dark:shadow-none backdrop-blur-xl">
          <div className="w-full">
            <table className="w-full text-left border-collapse">
              
              {/* Table Header */}
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-950/80">
                  <th className="p-4 sm:p-6 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300">
                    Features
                  </th>
                  <th className="p-4 sm:p-6 text-xs sm:text-sm font-extrabold text-cyan-400 bg-cyan-500/10 text-center w-24 sm:w-48">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <span className="hidden sm:inline">NetraSecure AI</span>
                    </span>
                  </th>
                  <th className="p-4 sm:p-6 text-xs sm:text-semibold text-slate-500 dark:text-slate-400 text-center w-24 sm:w-48">
                    <span className="hidden sm:inline">Standard Security Apps</span>
                    <span className="sm:hidden">Others</span>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {comparisons.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-100/50 dark:hover:bg-slate-800/30 transition-colors">
                    
                    {/* Feature Title & Description */}
                    <td className="p-4 sm:p-6">
                      <div className="font-bold text-slate-900 dark:text-white text-xs sm:text-base">
                        {item.feature}
                      </div>
                      <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 sm:mt-1 leading-snug">
                        {item.description}
                      </div>
                    </td>

                    {/* NetraSecure Column (Always ✅) */}
                    <td className="p-4 sm:p-6 text-center bg-cyan-500/5 border-x border-cyan-500/10">
                      
                      {/* Mobile View: Just Glowing Icon */}
                      <div className="sm:hidden inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                        <Check className="w-4 h-4 stroke-3" />
                      </div>

                      {/* Large View (sm+): Icon + Text */}
                      <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                        <Check className="w-4 h-4 text-cyan-400 stroke-3" />
                        {item.netraSecureText}
                      </div>

                    </td>

                    {/* Standard Security Apps Column */}
                    <td className="p-4 sm:p-6 text-center">
                      
                      {/* 1. If Checked (Yes) */}
                      {item.standardCheck === "yes" && (
                        <>
                          {/* Mobile View */}
                          <div className="sm:hidden inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <Check className="w-4 h-4 stroke-3" />
                          </div>
                          {/* Large View */}
                          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                            <Check className="w-3.5 h-3.5 stroke-3" />
                            {item.standardText}
                          </div>
                        </>
                      )}

                      {/* 2. If Warning (Partial/Limited) */}
                      {item.standardCheck === "warning" && (
                        <>
                          {/* Mobile View */}
                          <div className="sm:hidden inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            <AlertTriangle className="w-4 h-4" />
                          </div>
                          {/* Large View */}
                          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            {item.standardText}
                          </div>
                        </>
                      )}

                      {/* 3. If No (Missing) */}
                      {item.standardCheck === "no" && (
                        <>
                          {/* Mobile View */}
                          <div className="sm:hidden inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                            <X className="w-4 h-4 stroke-3" />
                          </div>
                          {/* Large View */}
                          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium">
                            <X className="w-3.5 h-3.5 stroke-3" />
                            {item.standardText}
                          </div>
                        </>
                      )}

                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
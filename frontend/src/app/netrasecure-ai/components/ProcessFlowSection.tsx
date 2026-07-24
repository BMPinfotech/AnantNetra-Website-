"use client";

import { Download, UserCheck, Scan, Bot, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    number: "01",
    title: "Download App",
    description: "Get NetraSecure AI from Google Play Store or APK direct download.",
    icon: Download,
  },
  {
    number: "02",
    title: "Quick Registration",
    description: "Create your account in seconds with privacy-first approach.",
    icon: UserCheck,
  },
  {
    number: "03",
    title: "Scan URLs & Links",
    description: "Paste any link to analyze phishing, scams, and malicious threats.",
    icon: Scan,
  },
  {
    number: "04",
    title: "Ask AI Assistant",
    description: "Consult the AI assistant 24/7 for instant cyber guidance.",
    icon: Bot,
  },
  {
    number: "05",
    title: "Receive Protection",
    description: "Enjoy automated, real-time proactive shield across your digital life.",
    icon: ShieldCheck,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative w-full bg-slate-50 dark:bg-[#030712] py-20 md:py-28 overflow-hidden text-white">
      <div className="mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Section Header */}
         <SectionHeader
            badgeIcon={Sparkles}
            badgeText="EASY SETUP"
            title="How It Works"
            description="Get protected against digital threats in five simple steps."
          />

        {/* Timeline Flow */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                
                {/* Step Card */}
                <div className="h-full flex flex-col justify-between rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900/40 dark:shadow-none p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-md">
                  <div>
                    {/* Header: Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-cyan-600/40 dark:text-cyan-400/40 font-mono group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {step.number}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 dark:bg-white/5 dark:border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                        <Icon className="h-5 w-5 text-cyan-400" />
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Connector for Desktop Flow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <ArrowRight className="w-5 h-5 text-cyan-500/40" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
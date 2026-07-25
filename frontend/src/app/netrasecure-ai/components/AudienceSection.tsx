"use client";

import { User, GraduationCap, Briefcase, Building, Rocket, Shield, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";

const industries = [
  {
    icon: User,
    title: "Personal Users",
    description: "Everyday internet users looking to protect their personal devices, financial accounts, and privacy.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    description: "Young learners exploring the web safely while building essential cybersecurity awareness and habits.",
  },
  {
    icon: Briefcase,
    title: "Employees",
    description: "Remote and office professionals guarding company communications against sophisticated phishing attempts.",
  },
  {
    icon: Building,
    title: "SMEs",
    description: "Small to mid-sized businesses securing customer data and preventing financial scams without costly IT teams.",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Fast-growing companies needing agile, scalable AI protection to safeguard intellectual property.",
  },
  {
    icon: Shield,
    title: "Enterprises",
    description: "Large organizations looking for localized threat intelligence and continuous employee safety training.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative w-full bg-slate-50 dark:bg-[#030712] py-20 md:py-28 overflow-hidden text-white">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-137.5 h-137.5 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badgeIcon={Sparkles}
          badgeText="WHO IS IT FOR"
          title="Tailored for Every Industry"
          description="From individuals to large enterprises, NetraSecure AI provides smart digital protection for everyone."
          />
          
        {/* 6 Industry Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900/40 dark:shadow-none p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
              >
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 dark:bg-cyan-500/10 dark:border-cyan-500/20 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
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
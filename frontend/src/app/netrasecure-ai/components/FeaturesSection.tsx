"use client";

import {
  Bot,
  ScanSearch,
  ShieldAlert,
  GraduationCap,
  FileText,
  TrendingUp,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: Bot,
    title: "AI Security Assistant",
    subtitle: "Ask cybersecurity questions & get instant 24x7 guidance.",
    bullets: [
      "Ask cybersecurity questions freely",
      "Instant AI guidance in plain language",
      "24×7 active security companion",
    ],
    badge: "AI Powered",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderGlow: "hover:border-cyan-500/50",
    iconColor: "text-cyan-400",
  },
  {
    icon: ScanSearch,
    title: "Smart URL Scanner",
    subtitle: "Instant detection of malicious links and unsafe websites.",
    bullets: [
      "Detect Phishing & Fake Sites",
      "Identify disguised Malware URLs",
      "Scan before you click any link",
    ],
    badge: "Real-Time Scan",
    gradient: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
    borderGlow: "hover:border-fuchsia-500/50",
    iconColor: "text-fuchsia-400",
  },
  {
    icon: ShieldAlert,
    title: "Threat Intelligence",
    subtitle: "Stay updated with daily threat intelligence and fraud alerts.",
    bullets: [
      "Daily Threat Intelligence reports",
      "Alerts on latest financial scams",
      "Real-Time threat updates",
    ],
    badge: "Live Alerts",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderGlow: "hover:border-amber-500/50",
    iconColor: "text-amber-400",
  },
  {
    icon: FileText,
    title: "Security Reports",
    subtitle: "Detailed summaries and actionable risk assessment reports.",
    bullets: [
      "Comprehensive threat reports",
      "Actionable security guidance",
      "Clear risk score analysis",
    ],
    badge: "Insights",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderGlow: "hover:border-blue-500/50",
    iconColor: "text-blue-400",
  },
  {
    icon: GraduationCap,
    title: "Learn Cybersecurity",
    subtitle: "Master cyber hygiene with quick micro-learning modules.",
    bullets: [
      "Bite-sized Micro-learning lessons",
      "Boost practical Cyber Awareness",
      "Interactive Lessons & quizzes",
    ],
    badge: "Interactive",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderGlow: "hover:border-emerald-500/50",
    iconColor: "text-emerald-400",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvements",
    subtitle: "Evolving AI models adapting dynamically to new threats.",
    bullets: [
      "Adaptive AI learning models",
      "Regular security updates",
      "Proactive protection system",
    ],
    badge: "Always Learning",
    gradient: "from-rose-500/20 via-red-500/10 to-transparent",
    borderGlow: "hover:border-rose-500/50",
    iconColor: "text-rose-400",
  },
];

export default function CoreFeaturesSection() {
  return (
    <section id="features" className="relative w-full bg-slate-50 dark:bg-[#030712] py-20 md:py-28 text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badgeIcon={Sparkles}
          badgeText="CORE CAPABILITIES"
          title="Everything You Need to Stay Secure"
          description="Powerful cybersecurity tools combined into one intelligent platform."
        />

        {/* 6 Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900/60 dark:shadow-none p-6 backdrop-blur-xl transition-all duration-300 ${feature.borderGlow} hover:-translate-y-1 hover:shadow-md`}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-40 transition-opacity duration-300 group-hover:opacity-80`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5 transition-transform group-hover:scale-110">
                      <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 border border-slate-200 text-slate-600 dark:bg-white/5 dark:border-white/10 dark:text-slate-300">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                    {feature.subtitle}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-white/10">
                    {feature.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className={`h-4 w-4 shrink-0 ${feature.iconColor}`} />
                        <span className="text-xs text-slate-700 dark:text-slate-200 font-medium">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
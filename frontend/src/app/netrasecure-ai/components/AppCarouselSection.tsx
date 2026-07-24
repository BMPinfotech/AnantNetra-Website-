"use client";

import { useState, useEffect, useRef } from "react";
import {
  Smartphone,
  MessageCircle,
  ScanSearch,
  ShieldAlert,
  GraduationCap,
  PhoneCall,
  ChevronRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const screens = [
  {
    id: "home",
    label: "Home Screen",
    subtitle: "Security Overview & Stats",
    icon: Smartphone,
    badge: "System Secure",
    badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20",
    content: (
      <div className="flex flex-col gap-3 p-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-[#94a3b8]">Security Overview</span>
          <span className="text-xs font-bold text-[#00f2fe]">92/100</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-white/10">
          <div className="h-1.5 w-[92%] rounded-full bg-linear-to-r from-[#00f2fe] to-[#4facfe]" />
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {["URLs Scanned", "Threats Blocked", "Active Sessions", "Alerts Today"].map(
            (item, i) => (
              <div key={i} className="rounded-xl border border-white/5 bg-white/5 p-2.5 backdrop-blur-sm">
                <p className="text-[9px] text-[#94a3b8]">{item}</p>
                <p className="text-sm font-bold text-[#f8fafc]">
                  {[128, 47, 3, 12][i]}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    ),
  },
  {
    id: "chat",
    label: "AI Chat Guard",
    subtitle: "Instant Vulnerability Assistant",
    icon: MessageCircle,
    badge: "Active AI",
    badgeColor: "text-cyan-700 bg-cyan-50 border-cyan-200 dark:text-cyan-400 dark:bg-cyan-500/10 dark:border-cyan-500/20",
    content: (
      <div className="flex flex-col gap-3 p-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-5 w-5 rounded-full bg-linear-to-br from-[#00f2fe] to-[#4facfe] flex items-center justify-center text-[10px] text-black font-bold">AI</div>
          <span className="text-[10px] text-[#94a3b8]">AI Assistant</span>
        </div>
        <div className="flex justify-end">
          <div className="rounded-xl bg-white/10 px-3 py-1.5 text-[10px] text-[#f8fafc]">
            Is this email safe?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="rounded-xl bg-[#00f2fe]/10 border border-[#00f2fe]/20 px-3 py-1.5 text-[10px] text-[#00f2fe]">
            Scanning... No threats detected ✓
          </div>
        </div>
        <div className="flex justify-end">
          <div className="rounded-xl bg-white/10 px-3 py-1.5 text-[10px] text-[#f8fafc]">
            How to create strong password?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="rounded-xl bg-[#00f2fe]/10 border border-[#00f2fe]/20 px-3 py-1.5 text-[10px] text-[#00f2fe]">
            Use 12+ chars with symbols & numbers
          </div>
        </div>
        <div className="mt-auto rounded-xl border border-white/5 bg-white/5 p-2">
          <div className="flex items-center gap-2 text-[9px] text-[#94a3b8]">
            <div className="h-1.5 w-1.5 rounded-full bg-[#00f2fe] animate-pulse" />
            AI is analyzing responses...
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "scanner",
    label: "URL Scanner",
    subtitle: "Real-time Domain & Link Analysis",
    icon: ScanSearch,
    badge: "Zero Latency",
    badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20",
    content: (
      <div className="flex flex-col gap-3 p-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[10px] text-[#94a3b8]">Deep Link Scanner</span>
        </div>
        <div className="rounded-xl border border-white/5 bg-white/5 p-2.5">
          <p className="text-[9px] text-[#94a3b8]">Enter URL to scan</p>
          <div className="mt-1.5 flex items-center gap-2 rounded-lg bg-black/40 border border-white/10 px-2.5 py-1.5">
            <span className="flex-1 truncate text-[9px] text-[#94a3b8]">
              https://suspicious-link.com
            </span>
            <ScanSearch className="h-3.5 w-3.5 text-[#00f2fe]" />
          </div>
        </div>
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-2.5">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-[10px] font-medium text-emerald-400">Safe — No Threats</span>
          </div>
          <p className="mt-1 text-[9px] text-[#94a3b8]">Domain: 2 days old • SSL: Valid</p>
        </div>
      </div>
    ),
  },
  {
    id: "scam",
    label: "Scam Alert",
    subtitle: "Phishing & Fraud Protection",
    icon: ShieldAlert,
    badge: "Threat Alert",
    badgeColor: "text-red-700 bg-red-50 border-red-200 dark:text-red-400 dark:bg-red-500/10 dark:border-red-500/20",
    content: (
      <div className="flex flex-col gap-3 p-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400 animate-pulse" />
          <span className="text-[10px] text-[#94a3b8]">Active Threats</span>
        </div>
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-2.5">
          <div className="flex items-center gap-1.5">
            <ShieldAlert className="h-3.5 w-3.5 text-red-400" />
            <span className="text-[10px] font-medium text-red-400">Phishing Campaign</span>
          </div>
          <p className="mt-1 text-[9px] text-[#94a3b8]">
            Fake banking SMS targeting users
          </p>
          <span className="mt-1 inline-block text-[9px] text-[#00f2fe]">2 min ago</span>
        </div>
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-2.5">
          <div className="flex items-center gap-1.5">
            <ShieldAlert className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-[10px] font-medium text-amber-400">Suspicious Call</span>
          </div>
          <p className="mt-1 text-[9px] text-[#94a3b8]">
            Impersonating govt agency
          </p>
          <span className="mt-1 inline-block text-[9px] text-[#00f2fe]">15 min ago</span>
        </div>
      </div>
    ),
  },
  {
    id: "learn",
    label: "Cyber Learn",
    subtitle: "Interactive Security Training",
    icon: GraduationCap,
    badge: "Education",
    badgeColor: "text-cyan-700 bg-cyan-50 border-cyan-200 dark:text-cyan-400 dark:bg-cyan-500/10 dark:border-cyan-500/20",
    content: (
      <div className="flex flex-col gap-3 p-3">
        <div className="mb-1 flex items-center gap-2">
          <GraduationCap className="h-3.5 w-3.5 text-[#00f2fe]" />
          <span className="text-[10px] text-[#94a3b8]">Micro-Learning Modules</span>
        </div>
        {[
          { title: "Spotting Phishing Emails", progress: 80 },
          { title: "Password Security 101", progress: 45 },
          { title: "Safe Browsing Habits", progress: 20 },
        ].map((item, i) => (
          <div key={i} className="rounded-xl border border-white/5 bg-white/5 p-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-[#f8fafc]">{item.title}</span>
              <span className="text-[9px] text-[#00f2fe] font-semibold">{item.progress}%</span>
            </div>
            <div className="mt-1.5 h-1 w-full rounded-full bg-white/10">
              <div
                className="h-1 rounded-full bg-linear-to-r from-[#00f2fe] to-[#4facfe]"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "emergency",
    label: "Emergency Help",
    subtitle: "Direct Cyber Helpline Access",
    icon: PhoneCall,
    badge: "24/7 Helpline",
    badgeColor: "text-red-700 bg-red-50 border-red-200 dark:text-red-400 dark:bg-red-500/10 dark:border-red-500/20",
    content: (
      <div className="flex flex-col gap-3 p-3">
        <div className="mb-1 flex items-center gap-2">
          <PhoneCall className="h-3.5 w-3.5 text-red-400" />
          <span className="text-[10px] text-[#94a3b8]">Direct Helplines</span>
        </div>
        {[
          { name: "Cyber Crime Helpline", number: "1930" },
          { name: "National Cyber Help", number: "155260" },
          { name: "Govt. CERT-In", number: "1800-11-4949" },
        ].map((item, i) => (
          <div key={i} className="rounded-xl border border-white/5 bg-white/5 p-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-[#f8fafc]">{item.name}</span>
              <span className="text-[10px] font-bold text-[#00f2fe]">{item.number}</span>
            </div>
            <p className="mt-0.5 text-[9px] text-[#94a3b8]">Tap to connect</p>
          </div>
        ))}
      </div>
    ),
  },
];

export default function AppCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screens.length);
    }, 4500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const currentScreen = screens[activeIndex];

  return (
    <section className="relative w-full bg-slate-50 dark:bg-[#030712] py-16 md:py-28 overflow-hidden">
      {/* Background Decor Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-87.5 md:h-112.5 w-87.5 md:w-112.5 bg-cyan-500/5 dark:bg-[#00f2fe]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-75 md:h-100 w-75 md:w-100 bg-blue-500/5 dark:bg-[#4facfe]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
          <SectionHeader
          badgeIcon={Zap}
          badgeText="INTERACTIVE APP TOUR"
          title="Explore NetraSecure AI"
          description="Seamlessly navigate through our next-generation cyber defense modules designed for personal and enterprise security."
          />
        

        {/* ================= MAIN CONTAINER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 1. LEFT SIDE: Vertical Sidebar (Only Visible on LG Devices) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-3">
            {screens.map((screen, index) => {
              const Icon = screen.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={screen.id}
                  onClick={() => handleTabClick(index)}
                  className={`group relative flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-300 ${
                    isActive
                      ? "border-[#00f2fe]/50 bg-[#00f2fe]/10 text-white shadow-[0_0_25px_rgba(0,242,254,0.1)] scale-[1.02]"
                      : "border-slate-200 bg-white text-slate-500 dark:border-white/5 dark:bg-white/3 dark:text-[#94a3b8] dark:hover:border-white/15 dark:hover:bg-white/6 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2.5 rounded-xl transition-colors ${
                        isActive
                          ? "bg-linear-to-br from-[#00f2fe] to-[#4facfe] text-black shadow-md shadow-cyan-500/20"
                          : "bg-white/5 text-[#00f2fe] group-hover:bg-white/10"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide">
                        {screen.label}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-[#94a3b8] mt-0.5">
                        {screen.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isActive ? "translate-x-1 text-[#00f2fe]" : "opacity-0 group-hover:opacity-100 text-slate-500"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* 2. RIGHT SIDE: Phone Mockup Display */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md flex flex-col items-center">
              
              {/* Dynamic Badge Above Mobile */}
              <div className="mb-4 sm:mb-6 flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md transition-all duration-300 ${currentScreen.badgeColor}`}>
                  {currentScreen.badge}
                </span>
              </div>

              {/* Mobile Phone Frame */}
              <div className="relative h-120 w-62.5 sm:h-132.5 sm:w-72.5 rounded-[2.8rem] sm:rounded-[3.2rem] border-4 border-slate-800 bg-[#0a0f1e] p-2.5 sm:p-3 shadow-[0_0_50px_rgba(0,242,254,0.15)] transition-all duration-500">
                
                {/* Dynamic Island / Speaker Notch */}
                <div className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 h-3.5 sm:h-4 w-24 sm:w-28 rounded-full bg-black z-30 flex items-center justify-end px-2">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-900/80" />
                </div>

                {/* Inner Phone Screen Canvas */}
                <div className="h-full w-full overflow-hidden rounded-[2.3rem] sm:rounded-[2.6rem] bg-[#0f172a] border border-white/10 relative flex flex-col">
                  
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-4 sm:px-5 pt-2.5 sm:pt-3 pb-2 text-[10px] text-[#94a3b8] font-mono border-b border-white/5 bg-slate-950/40">
                    <span>9:41</span>
                    <div className="flex gap-1 items-center">
                      <div className="h-2 w-3 rounded-xs bg-[#00f2fe]" />
                      <div className="h-2 w-3 rounded-xs bg-[#00f2fe]" />
                    </div>
                  </div>

                  {/* Dynamic Screen Content Frame */}
                  <div className="flex-1 p-2 overflow-y-auto">
                    {screens.map((screen, index) => (
                      <div
                        key={screen.id}
                        className={`transition-all duration-500 ${
                          index === activeIndex
                            ? "block opacity-100 translate-y-0 scale-100"
                            : "hidden opacity-0 translate-y-4 scale-95"
                        }`}
                      >
                        {screen.content}
                      </div>
                    ))}
                  </div>

                  {/* Navigation Home Bar */}
                  <div className="h-4 w-full bg-slate-950/60 flex items-center justify-center">
                    <div className="h-1 w-20 rounded-full bg-white/20" />
                  </div>

                </div>
              </div>

              {/* Floating Decorative Badges (Desktop Only) */}
              <div className="hidden lg:flex absolute -bottom-4 -left-6 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 rounded-2xl p-3 shadow-lg dark:shadow-xl backdrop-blur-md items-center gap-3 z-20">
                <div className="h-8 w-8 rounded-xl bg-[#00f2fe]/10 border border-[#00f2fe]/30 flex items-center justify-center text-[#00f2fe]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Security Mode</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">AI Protection Active</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ================= MOBILE & TABLET NAVIGATION CONTROLS ================= */}
        {/* Only Visible below LG Devices (< 1024px) */}
        <div className="mt-8 flex flex-col items-center gap-5 lg:hidden">
          
          {/* Horizontal Pill Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {screens.map((screen, index) => {
              const Icon = screen.icon;
              const isActive = index === activeIndex;
              return (
                <button
                  key={screen.id}
                  onClick={() => handleTabClick(index)}
                  className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-medium transition-all duration-300 sm:px-4 sm:py-2 sm:text-xs ${
                    isActive
                    ? "border-[#00f2fe]/50 bg-[#00f2fe]/10 text-[#00f2fe] shadow-[0_0_12px_rgba(0,242,254,0.2)]"
                    : "border-slate-200 bg-white text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-[#94a3b8] dark:hover:bg-white/10 dark:hover:text-[#f8fafc]"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{screen.label}</span>
                </button>
              );
            })}
          </div>

          {/* Pagination Dots Indicator */}
          <div className="flex items-center gap-2">
            {screens.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 bg-linear-to-r from-[#00f2fe] to-[#4facfe]"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
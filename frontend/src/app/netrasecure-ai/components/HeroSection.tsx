"use client";

import { Download, Shield, Search, MessageCircle, Home, Settings, ArrowRight, Play, Sparkles } from "lucide-react";
import CyberBackground from "./CyberBackground";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-slate-50 dark:bg-[#030712]">
      {/* <CyberBackground /> */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-[#00f2fe]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-[#7928ca]/10 rounded-full blur-[120px]" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pt-28 pb-16 md:flex-row md:pt-36 md:pb-20">
        
        {/* Left Column: CTA & Info */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 dark:border-[#00f2fe]/20 dark:bg-[#00f2fe]/10 px-4 py-1.5 text-xs text-cyan-700 dark:text-[#00f2fe] backdrop-blur-sm mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI-Native Cybersecurity</span>
          </div> */}

          {/* Title */}
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 dark:text-[#f8fafc]">
            Your Intelligent{" "}
            <span className="bg-linear-to-r from-[#00f2fe] to-[#4facfe] bg-clip-text text-transparent">
              Cybersecurity Assistant.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base font-semibold text-[#00f2fe]/90 md:text-xl">
            Detect threats. Verify suspicious links. Learn cybersecurity. Stay protected—powered by AI.
          </p>

          {/* Description */}
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-[#94a3b8] md:text-base">
            NetraSecure AI helps individuals and businesses identify cyber risks before they become incidents. From phishing detection to AI-powered security guidance, everything is designed to make cybersecurity simple, fast, and accessible.
          </p>

          {/* Main CTAs (Download Now & View Features) */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row w-full sm:w-auto">
            <a href="#download" className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
              <Play className="h-5 w-5 fill-white" />
              Download Now
            </a>
            <a href="#download" className="flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5 px-6 py-2.5 text-base font-medium text-slate-700 dark:text-white backdrop-blur-sm transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/10 hover:scale-105">
              <Image className="w-7 h-7 object-contain" src="/playStore.webp" width={28} height={28} alt="Play Store" />
              <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase text-slate-400 dark:text-[#ffffffa6] leading-tight">GET IT ON</span>
                  <span className="text-sm font-bold leading-tight text-slate-900 dark:text-white">Google Play</span>
              </div>
            </a>
            {/* <a href="#features" className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5 px-8 py-3.5 text-base font-semibold text-slate-700 dark:text-white backdrop-blur-sm transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-cyan-500/40 hover:text-cyan-400">
              View Features
              <ArrowRight className="h-5 w-5" />
            </a> */}
          </div>

          {/* Store Buttons (Play Store & App Store Coming Soon) */}
          {/* <div className="mt-6 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            <a href="#download" className="flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5 px-6 py-2.5 text-base font-medium text-slate-700 dark:text-white backdrop-blur-sm transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/10 hover:scale-105">
              <Image className="w-7 h-7 object-contain" src="/playStore.webp" width={28} height={28} alt="Play Store" />
              <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase text-slate-400 dark:text-[#ffffffa6] leading-tight">GET IT ON</span>
                  <span className="text-sm font-bold leading-tight text-slate-900 dark:text-white">Google Play</span>
              </div>
            </a>
            <div className="flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5 px-6 py-2.5 text-base font-medium text-slate-500 dark:text-white/70 backdrop-blur-sm opacity-80">
              <Image className="w-7 h-7 object-contain opacity-70" src="/apple.webp" width={28} height={28} alt="App Store" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase text-slate-400 dark:text-[#ffffffa6] leading-tight">App Store</span>
                <span className="text-sm font-bold text-cyan-400 leading-tight">Coming Soon</span>
              </div>
            </div>
          </div> */}
        </div>

        {/* Right Column: Mobile Showcase */}
        <div className="hidden flex-1 md:flex items-center justify-center">
          <div className="relative">
            {/* <div className="absolute -inset-10 bg-linear-to-r from-[#00f2fe]/20 to-[#4facfe]/20 rounded-full blur-[80px]" /> */}
            <div className="relative h-152 w-76 rounded-[3rem] border-2 border-white/8 bg-[#0a0f1e]/80 p-3 shadow-2xl shadow-cyan-500/10 backdrop-blur-sm">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-36 bg-black rounded-b-2xl z-10" />
              <div className="h-full w-full rounded-[2.5rem] bg-[#0f172a]/90 overflow-hidden p-4 flex flex-col gap-2.5">
                
                {/* SVG Grid Overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
                  <defs>
                    <pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse">
                      <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#00f2fe" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Status Bar & App Header */}
                <div className="relative flex items-center justify-between text-[10px] text-[#94a3b8]">
                  <span className="font-semibold">9:41</span>
                  <div className="flex items-center gap-1.5">
                    <Shield className="h-3 w-3 text-[#00f2fe]" />
                    <span className="text-[9px] font-bold text-[#f8fafc] tracking-wide">NetraSecure</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="h-2.5 w-4" viewBox="0 0 16 10"><rect x="0" y="1" width="10" height="8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="0.8"/><rect x="10" y="3.5" width="1.5" height="3" rx="0.5" fill="currentColor"/><rect x="1.5" y="2.5" width="5" height="5" rx="0.8" fill="#00f2fe" opacity="0.4"/><rect x="1.5" y="2.5" width="3.5" height="5" rx="0.8" fill="#00f2fe" opacity="0.6"/><rect x="1.5" y="2.5" width="2" height="5" rx="0.8" fill="#00f2fe" opacity="0.9"/></svg>
                    <svg className="h-2.5 w-3" viewBox="0 0 12 10"><path d="M1 6 L6 1 L11 6" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M1 7 L1 9 L11 9 L11 7" fill="currentColor" opacity="0.4"/></svg>
                  </div>
                </div>

                {/* Feature 1: Security Score Card */}
                <div className="relative rounded-xl border border-white/6 bg-white/4 backdrop-blur-sm p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-medium text-[#94a3b8] tracking-wide">Security Score</span>
                    <span className="text-[8px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 font-medium">Protected</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative shrink-0">
                      <svg className="w-14 h-14 -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15.9155" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white/8" />
                        <circle cx="18" cy="18" r="15.9155" fill="none" stroke="url(#scoreGrad)" strokeWidth="2.5" strokeDasharray="100" strokeDashoffset="6" strokeLinecap="round" />
                        <defs>
                          <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00f2fe" />
                            <stop offset="100%" stopColor="#4facfe" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[11px] font-bold text-[#00f2fe] drop-shadow-[0_0_4px_rgba(0,242,254,0.4)]">94</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-semibold text-[#f8fafc]">Score: 94/100</div>
                      <div className="text-[9px] text-[#64748b] leading-tight mt-0.5">Optimal — All systems secure</div>
                    </div>
                  </div>
                </div>

                {/* Feature 2: URL Scan Widget */}
                <div className="relative rounded-xl border border-white/6 bg-white/4 backdrop-blur-sm p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Search className="h-3 w-3 text-[#00f2fe]" />
                    <span className="text-[10px] font-medium text-[#94a3b8] tracking-wide">URL Scanner</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-white/6 px-2.5 py-2 border border-white/4">
                    <Search className="h-3 w-3 text-[#475569] shrink-0" />
                    <span className="flex-1 truncate text-[9px] text-[#64748b]">https://example-link.com</span>
                    <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/15">
                      <Shield className="h-2.5 w-2.5 text-green-400" />
                      <span className="text-[7px] text-green-400 font-semibold">Verified Safe</span>
                    </div>
                  </div>
                </div>

                {/* Feature 3: AI Chat Snippet */}
                <div className="relative rounded-xl border border-white/6 bg-white/4 backdrop-blur-sm p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="h-3 w-3 text-[#00f2fe]" />
                    <span className="text-[10px] font-medium text-[#94a3b8] tracking-wide">AI Shield Assistant</span>
                  </div>
                  <div className="flex justify-start mb-2">
                    <div className="rounded-xl bg-[#00f2fe]/8 px-3 py-2 border border-[#00f2fe]/8 max-w-[92%]">
                      <span className="text-[9px] text-[#00f2fe] leading-relaxed">
                        AI Shield: No threat vectors detected in recent activity.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-white/6 px-2.5 py-1.5 border border-white/4">
                    <span className="flex-1 text-[9px] text-[#475569]">Ask AI about security...</span>
                    <div className="h-5 w-5 rounded-full bg-[#00f2fe]/20 flex items-center justify-center shrink-0">
                      <ArrowRight className="h-2.5 w-2.5 text-[#00f2fe]" />
                    </div>
                  </div>
                </div>

                {/* Feature 4: Dashboard Summary & Navigation */}
                <div className="relative mt-auto rounded-xl border border-white/6 bg-white/4 backdrop-blur-sm p-3">
                  <div className="flex items-center justify-around mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
                      <span className="text-[9px] text-[#94a3b8] font-medium">Threats Blocked: <span className="text-[#f8fafc]">12</span></span>
                    </div>
                    <div className="w-px h-4 bg-white/6" />
                    <div className="flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
                      <span className="text-[9px] text-[#94a3b8] font-medium">Uptime: <span className="text-[#f8fafc]">99.9%</span></span>
                    </div>
                  </div>
                  <div className="flex items-center justify-around pt-2.5 border-t border-white/6">
                    <div className="flex flex-col items-center gap-0.5">
                      <Home className="h-3.5 w-3.5 text-[#00f2fe]" />
                      <span className="text-[6px] font-medium text-[#00f2fe]">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <MessageCircle className="h-3.5 w-3.5 text-[#475569]" />
                      <span className="text-[6px] font-medium text-[#475569]">AI Chat</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <Search className="h-3.5 w-3.5 text-[#475569]" />
                      <span className="text-[6px] font-medium text-[#475569]">Scanner</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <Settings className="h-3.5 w-3.5 text-[#475569]" />
                      <span className="text-[6px] font-medium text-[#475569]">Settings</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
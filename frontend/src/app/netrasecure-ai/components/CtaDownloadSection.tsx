"use client";

import { Sparkles, QrCode, Download, Building2, UserPlus, Play, Apple } from "lucide-react";
import Image from "next/image";

export default function DownloadSection() {
  return (
    <section id="download" className="relative w-full bg-slate-50 dark:bg-[#030712] py-20 md:py-28 overflow-hidden text-white border-t border-slate-200 dark:border-white/5">
      {/* Background Ambient Glows (Cyber Style) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-87.5 h-87.5 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Main Big CTA Card */}
        <div className="relative overflow-hidden rounded-3xl border border-cyan-200 bg-white dark:border-cyan-500/20 dark:bg-slate-900/40 p-8 md:p-14 backdrop-blur-xl max-w-5xl mx-auto shadow-[0_0_50px_rgba(6,182,212,0.1)]">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            
            {/* Left Column: Big CTA Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 mb-6">
                <Sparkles className="w-3.5 h-3.5" /> GET STARTED TODAY
              </span>

              <h2 className="bg-linear-to-r from-cyan-600 via-blue-600 to-indigo-700 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-200 bg-clip-text text-3xl font-extrabold text-transparent md:text-5xl leading-tight">
                Download NetraSecure AI
              </h2>

              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                Start protecting yourself with AI-powered cybersecurity. Available across major platforms.
              </p>

              {/* Download & Secondary Buttons Grid */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                
                {/* 1. Google Play Button */}
                <a href="#download" className="flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5 px-6 py-2.5 text-base font-medium text-slate-700 dark:text-white backdrop-blur-sm transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/10 hover:scale-105">
                  <Image className="w-7 h-7 object-contain" src="/playStore.webp" width={28} height={28} alt="Play Store" />
                  <div className="flex flex-col items-start">
                      <span className="text-[10px] uppercase text-slate-400 dark:text-[#ffffffa6] leading-tight">GET IT ON</span>
                      <span className="text-sm font-bold leading-tight text-slate-900 dark:text-white">Google Play</span>
                  </div>
                </a>

                {/* 2. App Store (Coming Soon) */}
                <div className="flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5 px-6 py-2.5 text-base font-medium text-slate-500 dark:text-white/70 backdrop-blur-sm opacity-80">
                  <Image className="w-7 h-7 object-contain opacity-70" src="/apple.webp" width={28} height={28} alt="App Store" />
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] uppercase text-slate-400 dark:text-[#ffffffa6] leading-tight">App Store</span>
                    <span className="text-sm font-bold text-cyan-400 leading-tight">Coming Soon</span>
                  </div>
                </div>

                {/* 3. Direct APK Download Button */}
                <a
                  href="#apk-download"
                  className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-sm dark:bg-slate-800 dark:border-white/10 dark:text-white font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>APK Download</span>
                </a>

                {/* 4. Enterprise Demo Button */}
                <a
                  href="#enterprise-demo"
                  className="inline-flex items-center gap-2.5 px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-600 shadow-sm dark:bg-slate-800/80 dark:border-white/10 dark:text-slate-300 font-semibold text-sm hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Enterprise Demo</span>
                </a>

                {/* 5. Join Beta Button */}
                <a
                  href="#join-beta"
                  className="inline-flex items-center gap-2 px-3.5 py-3.5 rounded-xl text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Join Beta</span>
                </a>

              </div>
            </div>

            {/* Right Column: QR Code Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-white/10 dark:bg-slate-950/80 dark:shadow-none p-6 text-center backdrop-blur-md max-w-xs w-full">
                
                {/* QR Code Container */}
                <div className="relative mx-auto w-36 h-36 rounded-xl bg-white p-2.5 shadow-inner flex items-center justify-center mb-4">
                  <QrCode className="w-full h-full text-black" />
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  Scan to Install
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                  Scan with your phone camera to instantly download the latest build.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
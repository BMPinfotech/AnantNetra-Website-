"use client";

import { useState } from "react";
import { Play, Sparkles, X, ShieldCheck } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function VideoDemoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative w-full bg-slate-50 dark:bg-[#030712] py-20 md:py-28 overflow-hidden text-white">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Main Banner Card */}
        <div className="relative overflow-hidden rounded-3xl border border-cyan-200 bg-white dark:border-cyan-500/20 dark:bg-slate-900/40 p-8 md:p-14 backdrop-blur-xl max-w-4xl mx-auto text-center shadow-[0_0_50px_rgba(6,182,212,0.1)]">
        {/* Header Section */}
           <SectionHeader
              badgeIcon={Sparkles}
              badgeText="60-SECOND PRODUCT TOUR"
                title="See NetraSecure AI in Action"
              description="Watch our quick 60-second video demo to discover how AI protects you from URL scams, phishing, and digital threats in real-time."
            />

          {/* Video Thumbnail Placeholder with Interactive Play Button */}
          <div className="mt-10 relative max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 bg-slate-950/80 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-[#030712] via-transparent to-transparent opacity-80" />

            {/* Play Button Icon */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
              <div className="relative flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-cyan-500 text-black shadow-[0_0_30px_rgba(6,182,212,0.6)] group-hover:scale-110 transition-transform duration-300">
                <Play className="w-7 h-7 md:w-8 md:h-8 fill-black ml-1" />
                <span className="absolute -inset-2 rounded-full border border-cyan-400/40 animate-ping pointer-events-none" />
              </div>
              <span className="text-xs md:text-sm font-semibold tracking-wider text-slate-200 uppercase mt-2">
                Watch Product Tour (1 Min)
              </span>
            </div>
          </div>

          {/* CTA Button as specified in Document */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-blue-600 text-white dark:bg-cyan-500 dark:text-black shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:bg-blue-700 dark:hover:bg-cyan-400 transition-all duration-300 hover:scale-105"
            >
              <Play className="w-4 h-4 fill-black" /> Watch Product Tour
            </button>
          </div>

        </div>

      </div>

      {/* Video Modal / Popup */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl bg-slate-900 border border-white/15 overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-rose-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Embed Video (YouTube / Vimeo / MP4 Video) */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/J9tDnq8ynI8?autoplay=1" // এখানে আপনার অরিজিনাল ডেমো ভিডিওর URL বসাবেন
              title="NetraSecure AI Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
"use client";

import { useState } from "react";
import { Sparkles, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const screens = [
  {
    id: "scan",
    title: "URL Scanner",
    tag: "Phishing Detection",
    description: "Simple input screen to test suspicious links before opening.",
    image: "/netrasecure_ai/scan.webp",
  },
  {
    id: "score-result",
    title: "Scan Results",
    tag: "Instant Risk Score",
    description: "Instant risk scoring and deep breakdown of scanned websites.",
    image: "/netrasecure_ai/score_and_result.webp",
  },
  {
    id: "chat",
    title: "AI Assistant",
    tag: "24/7 AI Security",
    description: "Interactive chat interface for real-time cybersecurity advice.",
    image: "/netrasecure_ai/chat.webp",
  },
  {
    id: "report",
    title: "Security Reports",
    tag: "Threat Summary",
    description: "Comprehensive threat history and weekly risk assessments.",
    image: "/netrasecure_ai/report.webp",
  },
];

export default function UIScreenshotsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const prevSlide = () => {
    setActiveTab((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveTab((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="screenshots" className="relative w-full bg-slate-50 dark:bg-[#030712] py-20 md:py-28 overflow-hidden text-white border-t border-slate-200 dark:border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
            badgeIcon={Sparkles}
            badgeText="APP SHOWCASE"
            title="See NetraSecure AI in Action"
            description="Designed with simplicity, speed, and usability."
        />

        {/* 1. DESKTOP VIEW (lg:grid) - Interactive Side Tabs + Frame */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Side: Interactive Feature List */}
          <div className="lg:col-span-5 space-y-3">
            {screens.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-[#00f2fe]/10 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                    : "bg-white border-slate-200 dark:bg-slate-950/40 dark:border-white/5 dark:hover:border-white/20 dark:hover:bg-slate-900/40"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className={`font-bold text-base ${activeTab === idx ? "text-cyan-400" : "text-slate-900 dark:text-white"}`}>
                    {item.title}
                  </h3>
                  {activeTab === idx && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side: Showcase Device Frame */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-75 h-150 rounded-[48px] border-8 border-slate-800 bg-black shadow-[0_0_60px_rgba(6,182,212,0.2)] overflow-hidden">
              {/* Camera Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-800 rounded-full z-30" />
              
              {/* Screen Image */}
              <Image
                width={500}
                height={300}
                src={screens[activeTab].image}
                alt={screens[activeTab].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>

        </div>

        {/* 2. MOBILE / TABLET VIEW (sm, md) - Phone Slider Carousel */}
        <div className="lg:hidden relative max-w-sm mx-auto flex flex-col items-center">
          
          {/* Arrow Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm dark:bg-slate-900/90 dark:border-white/10 dark:text-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm dark:bg-slate-900/90 dark:border-white/10 dark:text-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Phone Frame */}
          <div className="relative w-65 h-130 rounded-[40px] border-[6px] border-slate-800 bg-black shadow-2xl overflow-hidden">
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-slate-800 rounded-full z-30" />
            <img
              src={screens[activeTab].image}
              alt={screens[activeTab].title}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          {/* Mobile Description */}
          <div className="mt-5 text-center space-y-1 px-4">
            <span className="text-[10px] font-mono text-cyan-700 bg-cyan-50 border-cyan-200 dark:text-cyan-400 dark:bg-cyan-500/10 dark:border-cyan-500/20 px-2.5 py-0.5 rounded-full">
              {screens[activeTab].tag}
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2">
              {screens[activeTab].title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {screens[activeTab].description}
            </p>
          </div>

          {/* Indicators */}
          <div className="flex gap-1.5 mt-4">
            {screens.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  activeTab === idx ? "w-5 bg-cyan-400" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
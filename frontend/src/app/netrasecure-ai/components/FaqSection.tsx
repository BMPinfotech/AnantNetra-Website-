"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    q: "What is NetraSecure AI?",
    a: "NetraSecure AI is an intelligent cybersecurity assistant designed to protect everyday users from online threats, phishing links, digital scams, and malicious websites through simple explanations and proactive threat analysis.",
  },
  {
    q: "How does the AI Assistant work?",
    a: "Our AI model analyzes threat intelligence, suspicious text, URLs, and security queries in real time. It translates technical vulnerability details into plain, easy-to-understand guidance so you can take safe action immediately.",
  },
  {
    q: "Is NetraSecure AI free to use?",
    a: "Yes, NetraSecure AI offers core cybersecurity scanning, scam alerts, and AI assistance features for free to ensure basic digital safety is accessible to everyone.",
  },
  {
    q: "Does NetraSecure AI steal or store my personal data?",
    a: "No. NetraSecure AI prioritizes user privacy. Scanned URLs and queries are processed securely to evaluate risk without harvesting, storing, or selling your personal identifying information.",
  },
  {
    q: "What should I do if I think I was scammed?",
    a: "If you suspect financial fraud or a cyber trap, immediately use NetraSecure AI's Emergency Help feature to connect with official helplines, CERT resources, or follow step-by-step guidance on securing your accounts.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full bg-slate-50 dark:bg-[#030712] py-20 md:py-28 overflow-hidden text-white border-t border-slate-200 dark:border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badgeIcon={HelpCircle}
          badgeText="GOT QUESTIONS?"
          title="Frequently Asked Questions"
          description="Everything you need to know about NetraSecure AI."
          />

        {/* 5 Accordion Items (Document v2.0) */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-xl border backdrop-blur-md transition-all duration-300 ${
                  isOpen
                    ? "border-cyan-500/40 bg-white dark:bg-slate-900/70 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                    : "border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900/40 hover:border-cyan-500/30 hover:bg-slate-50 dark:hover:bg-slate-900/60"
                }`}
              >
                {/* FAQ Header / Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm md:text-base font-semibold text-slate-900 dark:text-white transition-colors cursor-pointer select-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-cyan-400/80 shrink-0">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    <span className={isOpen ? "text-cyan-600 dark:text-cyan-300" : "text-slate-900 dark:text-white"}>
                      {faq.q}
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-cyan-400 transition-transform duration-300 ease-in-out ${
                      isOpen ? "rotate-180 text-cyan-300" : ""
                    }`}
                  />
                </button>

                {/* Smooth Expand/Collapse Container using CSS Grid */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5">
                      {faq.a}
                    </div>
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
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrainCircuit, CircleCheckBig, Gauge, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    number: "01",
    title: "Deterministic scoring, AI-explained",
    icon: BrainCircuit,
    description: "The BIS score is math, not a model output — reproducible and defensible in front of a board or a regulator. AI is bounded to explanation-only, grounded via RAG over your own findings store.",
    buttomLine: "VS. probabilistic AI risk scores that shift on re-run"
  },
  {
    number: "02",
    title: "Business impact, not just severity",
    icon: Gauge,
    description: "A critical CVE on a dev sandbox and one on your payments gateway are not the same finding. BIS weighs asset criticality and revenue exposure into the score itself.",
    buttomLine: "VS. CVSS-only prioritization that floods every team"
  },
  {
    number: "03",
    title: "One deployable engine, five modules",
    icon: Layers,
    description: "Consolidated from two services into one unit after a CTOlevel architecture review — with a mandatory Findings Store as the single source of truth across every module.",
    buttomLine: "VS. sprawling microservices no small team can operate"
  },
];

export default function BuiltDifferent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      );

      const items = cardsRef.current?.children;
      if (items) {
        tl.fromTo(
          items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.3",
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="built-different"
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 overflow-hidden bg-white dark:bg-transparent"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <span
            className="text-xs font-semibold text-cyan-400 tracking-[0.2em] mb-4 block"
            style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
          >
            BUILT DIFFERENT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight">
            Three Decisions Most Platforms{" "}
            <span className="text-cyan-400">Didn&apos;t Make</span>
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="group relative rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/3 backdrop-blur-sm p-6 md:p-8 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_0_30px_-8px_rgba(0,240,255,0.35)] dark:hover:shadow-[0_0_30px_-8px_rgba(0,240,255,0.15)] transition-all duration-300 ease-out"
              >
                <span
                  className="text-3xl md:text-4xl font-bold text-slate-200 dark:text-white/5 absolute top-4 right-4 leading-none select-none"
                  style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
                >
                  {card.number}
                </span>

                <div className="w-11 h-11 rounded-xl bg-linear-to-br from-cyan-400/15 to-cyan-400/5 border border-cyan-400/20 flex items-center justify-center mb-4 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_15px_-3px_rgba(0,240,255,0.2)] transition-all duration-300">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed relative z-10">
                  {card.description}
                </p>
                <div className="mt-5 p-3 rounded-lg border border-cyan-200/50 dark:border-cyan-400/20 bg-linear-to-r from-cyan-50/60 to-transparent dark:from-cyan-400/5 dark:to-transparent relative z-10">
                  <p className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <CircleCheckBig className="w-4 h-4 mt-0.5 text-cyan-400 shrink-0" />
                    <span>{card.buttomLine}</span>
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

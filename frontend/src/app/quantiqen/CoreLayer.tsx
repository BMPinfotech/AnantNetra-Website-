"use client";

import { useEffect, useRef } from "react";
import { Radar, SearchCheck, BarChart3, Target } from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Detect",
    icon: Radar,
    description: "Collect signals across your digital landscape — assets, configs, identities, and vendor exposure.",
  },
  {
    number: "02",
    title: "Understand",
    icon: SearchCheck,
    description:"Enrich each signal with threatintel, KEV/EPSS data, and business relevance — not just a CVSS number.",
  },
  {
    number: "03",
    title: "Score",
    icon: BarChart3,
    description:"Run it through the deterministic BIS formula. Same inputs, same score, every time — no model drift.",
  },
  {
    number: "0N",
    title: "Decide",
    icon: Target,
    description:"AI explains the score in plain language, bounded to what the engine already computed. It never re-scores.",
  },
];

export default function CoreLayer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    const initGsap = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
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

        const cards = cardsRef.current?.children;
        if (cards) {
          tl.fromTo(
            cards,
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
      }, sectionRef);
    };

    initGsap();

    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="sdi-core"
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 overflow-hidden content-visibility-auto"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <span
            className="text-xs font-semibold text-cyan-400 tracking-[0.2em] mb-4 block"
            style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
          >
            SDI DETERMINISTIC CORE LAYER
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight">
            We Don&apos;t Just Detect Risks &mdash;{" "}
            <span className="text-cyan-400">We Deliver Decisions</span>
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.number}
                className="group relative rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-6 md:p-8 hover:-translate-y-1 hover:scale-[1.02] hover:border-cyan-400/40 hover:shadow-[0_0_25px_-5px_rgba(0,240,255,0.25)] transition-all duration-300"
              >
                <span
                  className="text-3xl md:text-4xl font-bold text-slate-200 dark:text-white/5 absolute top-4 right-4 leading-none select-none"
                  style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
                >
                  {stage.number}
                </span>

                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 relative z-10">
                  Stage {stage.number}: {stage.title}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed relative z-10">
                  {stage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

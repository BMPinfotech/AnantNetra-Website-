"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function QuantiqenHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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
            start: "top 85%",
            end: "top 35%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          badgeRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        )
          .fromTo(
            headlineRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
            "-=0.3",
          )
          .fromTo(
            subtitleRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
            "-=0.3",
          )
          .fromTo(
            ctaRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
            "-=0.2",
          );
      }, sectionRef);
    };

    initGsap();

    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="quantiqen-hero"
      ref={sectionRef}
      className="relative min-h-[calc(100vh-8rem)] flex items-center justify-center overflow-hidden px-4 py-20 content-visibility-auto"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span
            className="text-[11px] font-semibold tracking-[0.15em] text-slate-700 dark:text-slate-300"
            style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
          >
            THE SDI PLATFORM &mdash; SECURITY DECISION INTELLIGENCE, BUILT IN INDIA
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight mb-6"
        >
          <span className="bg-linear-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent dark:from-white dark:via-cyan-300 dark:to-blue-400">
            QUANTIQEN
          </span>{" "}
          <span className="text-slate-800 dark:text-slate-200">
            runs on SDI &mdash; the core layer that turns alert noise into{" "}
          </span>
          <span className="text-cyan-400">one auditable decision.</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
         SDI is our deterministic risk-and-decision core: risk scoring,
          business impact, and bounded AI explanation, merged into one
          ayer your team can trust and your auditor can read. No black
          box. No guesswork.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-6 py-3 text-sm font-bold rounded-lg bg-cyan-500 text-white hover:bg-cyan-400 hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.5)] active:scale-95 transition-all duration-300 cursor-pointer">
            REQUEST ACCESS
          </button>

          <button className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
            See how BIS scoring works
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}

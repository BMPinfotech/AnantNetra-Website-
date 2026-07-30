"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Shield } from "lucide-react";

export default function QuantiqenFooter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);

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
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          bannerRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
        ).fromTo(
          copyrightRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
          "-=0.2",
        );
      }, sectionRef);
    };

    initGsap();

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 overflow-hidden content-visibility-auto"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Glass CTA Banner */}
        <div
          ref={bannerRef}
          className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-linear-to-br from-white/80 to-white/40 dark:from-white/5 dark:to-white/2 backdrop-blur-md p-8 md:p-12 lg:p-16 text-center shadow-xl"
        >
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_right,rgba(0,240,255,0.06),transparent_60%)] pointer-events-none" />

          <Shield className="w-10 h-10 text-cyan-400 mx-auto mb-6" />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white max-w-2xl mx-auto leading-tight mb-4">
            Get the next decision,{" "}
            <span className="text-cyan-400">not the next 400 alerts.</span>
          </h2>

          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-8">
            Stop chasing noise. Start making decisions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-6 py-3 text-sm font-bold rounded-lg bg-cyan-500 text-white hover:bg-cyan-400 hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.5)] active:scale-95 transition-all duration-300 cursor-pointer">
              REQUEST ACCESS
            </button>

            <button className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border border-slate-300 dark:border-white/20 text-slate-700 dark:text-slate-300 hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-300 cursor-pointer">
              Talk to the team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        {/* <div
          ref={copyrightRef}
          className="mt-8 text-center"
        >
          <p
            className="text-xs text-slate-400 dark:text-slate-600"
            style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
          >
            &copy; 2026 ANANTNETRA TECHNOLOGIES PVT LTD. All rights reserved.
          </p>
        </div> */}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, ScanSearch, Package, MapPin } from "lucide-react";

const features = [
  {
    number: "01",
    title: "DPDP Act Alignment",
    icon: ShieldCheck,
    description:
      "Built to comply with India&apos;s Digital Personal Data Protection Act from the ground up.",
  },
  {
    number: "02",
    title: "Tuned Threat Patterns",
    icon: ScanSearch,
    description:
      "Specialized detection for UPI abuse, OTP scams, and India-first attack vectors.",
  },
  {
    number: "03",
    title: "Mid-Market Packaged Pricing",
    icon: Package,
    description:
      "Enterprise-grade SDI capabilities priced for Indian mid-market adoption.",
  },
  {
    number: "04",
    title: "Architected Localized Infrastructure",
    icon: MapPin,
    description:
      "Data residency compliant with India-based infrastructure and local regulations.",
  },
];

export default function IndiaMoat() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const moatRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
        )
          .fromTo(
            moatRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
            "-=0.3",
          );

        const items = gridRef.current?.children;
        if (items) {
          tl.fromTo(
            items,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              stagger: 0.1,
              ease: "power2.out",
            },
            "-=0.2",
          );
        }
      }, sectionRef);
    };

    initGsap();

    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="india-moat"
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 overflow-hidden content-visibility-auto"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.03)_0%,transparent_70%)]" />

      <div className="flex flex-col lg:flex-row gap-5 relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="flex-1 text-center lg:text-left mb-12 md:mb-16">
          <span
            className="text-xs font-semibold text-cyan-400 tracking-[0.2em] mb-4 block"
            style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
          >
            BEFORE OTHERS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight">
            Security Intelligence Built for India,{" "}
            <span className="text-cyan-400">Not Sold to India.</span>
          </h2>
          <div className="mt-5 p-3 rounded-lg border border-l-5 border-l-cyan-400 dark:border-l-cyan-400 border-cyan-200/50 dark:border-cyan-400/20 bg-linear-to-r from-cyan-50/60 to-transparent dark:from-cyan-400/5 dark:to-transparent relative z-10">
            <p className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Security intelligence built for India, not sold to India.
            </p>
          </div>
        </div>

        {/* 2x2 Feature Grid */}
        <div
          ref={gridRef}
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.number}
                className="group relative rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-6 md:p-8 hover:-translate-y-1 hover:scale-[1.02] hover:border-cyan-400/40 hover:shadow-[0_0_25px_-5px_rgba(0,240,255,0.25)] transition-all duration-300"
              >
                <span
                  className="text-3xl md:text-4xl font-bold text-slate-200 dark:text-white/5 absolute top-4 right-4 leading-none select-none"
                  style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
                >
                  {feature.number}
                </span>

                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 relative z-10">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

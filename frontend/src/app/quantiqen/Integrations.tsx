"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Activity,
  Cloud,
  ShieldAlert,
  Fingerprint,
  ClipboardList,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const integrations = [
  {
    icon: Activity,
    title: "SIEM & Log Pipelines",
    description: "Splunk, Elastic, QRadar",
  },
  {
    icon: Cloud,
    title: "Cloud Posture",
    description: "AWS, GCP, Azure",
  },
  {
    icon: ShieldAlert,
    title: "Vulnerability Scanners",
    description: "Qualys, Tenable, Rapid7",
  },
  {
    icon: Fingerprint,
    title: "Identity Providers",
    description: "Okta, Azure AD, Ping",
  },
  {
    icon: ClipboardList,
    title: "Ticketing Workflows",
    description: "Jira, ServiceNow, PagerDuty",
  },
];

export default function Integrations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      const items = gridRef.current?.children;
      if (items) {
        tl.fromTo(
          items,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.08,
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
      id="integrations"
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <span
            className="text-xs font-semibold text-cyan-400 tracking-[0.2em] mb-4 block"
            style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
          >
            FITS YOUR STACK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight">
            Works Alongside the Tools{" "}
            <span className="text-cyan-400">You Already Run</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {integrations.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-5 md:p-6 text-center hover:-translate-y-1 hover:scale-[1.02] hover:border-cyan-400/40 hover:shadow-[0_0_25px_-5px_rgba(0,240,255,0.25)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                {/* <p
                  className="text-[11px] text-slate-400 dark:text-slate-500"
                  style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
                >
                  {item.description}
                </p> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

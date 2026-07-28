"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Activity,
  AlertTriangle,
  Cpu,
  Zap,
  Shield,
  ShieldCheck,
  Terminal,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const alerts = [
  { id: "CVE-2025-3184", icon: ShieldCheck },
  { id: "EPSS 0.61", icon: Activity },
  { id: "login-anomaly", icon: Terminal },
  { id: "KEV-Listed", icon: Shield },
  { id: "cert-expiry", icon: AlertTriangle },
];

export default function SignalIntakeEngine() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const alertsRef = useRef<HTMLDivElement>(null);

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
        leftRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      )
        .fromTo(
          centerRef.current,
          { scale: 0.85, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.3",
        )
        .fromTo(
          rightRef.current,
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        );

      const items = alertsRef.current?.children;
      if (items) {
        tl.fromTo(
          items,
          { x: -15, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.25,
            stagger: 0.07,
            ease: "power2.out",
          },
          "-=0.15",
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Arrow 1 */}
          <div className="hidden lg:flex absolute left-[calc(33.33%-0.75rem)] top-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <ArrowRight className="w-6 h-6 text-cyan-400/25" />
          </div>
          {/* Arrow 2 */}
          <div className="hidden lg:flex absolute left-[calc(66.66%-0.75rem)] top-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <ArrowRight className="w-6 h-6 text-cyan-400/25" />
          </div>

          {/* Panel 1: Raw Signal Intake */}
          <div
            ref={leftRef}
            className="flex flex-col rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-5 md:p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 tracking-[0.15em]">
                RAW SIGNAL INTAKE
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-400/10 border border-cyan-400/20 mb-4 w-fit">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
              </span>
              <span
                className="text-[10px] font-semibold text-cyan-400"
                style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
              >
                5 Alerts Streamed
              </span>
            </div>

            <div ref={alertsRef} className="space-y-2 flex-1">
              {alerts.map((alert) => {
                const Icon = alert.icon;
                return (
                  <div
                    key={alert.id}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg border border-slate-100 dark:border-white/5 bg-white dark:bg-white/2 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors duration-200"
                  >
                    <Icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span
                      className="text-xs font-medium text-slate-700 dark:text-slate-300 truncate"
                      style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
                    >
                      {alert.id}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Panel 2: SDI Core Central Node */}
          <div
            ref={centerRef}
            className="flex flex-col items-center justify-center gap-5 rounded-xl border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm p-5 md:p-6 min-h-70"
          >
            {/* CPU Visual */}
            <div className="relative w-32 h-32 md:w-36 md:h-36">
              <div className="absolute inset-0 rounded-2xl border border-cyan-400/30 shadow-[0_0_35px_-8px_rgba(0,240,255,0.35)]" />
              <div className="absolute inset-3 rounded-xl border border-cyan-400/20 bg-cyan-400/3 overflow-hidden">
                <div className="w-full h-full bg-[linear-gradient(rgba(0,240,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.08)_1px,transparent_1px)] bg-size-[6px_6px]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Cpu className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 mx-auto mb-1" />
                  <span
                    className="text-[8px] font-bold text-cyan-400 tracking-[0.2em] block"
                    style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
                  >
                    SDI CORE
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <span
                className="text-xs font-bold text-cyan-400 tracking-[0.2em]"
                style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
              >
                DETERMINISTIC ENGINE
              </span>
            </div>
          </div>

          {/* Panel 3: Auditable Decision Record */}
          <div
            ref={rightRef}
            className="flex flex-col rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-5 md:p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 tracking-[0.15em]">
                AUDITABLE DECISION RECORD
              </span>
            </div>

            {/* BIS Score */}
            <div className="text-center py-4">
              <span
                className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 tracking-[0.15em] block mb-2"
                style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
              >
                BIS SCORE
              </span>
              <div className="flex items-baseline justify-center gap-1">
                <span
                  className="text-5xl md:text-6xl font-bold text-cyan-400 leading-none"
                  style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
                >
                  87
                </span>
                <span
                  className="text-lg font-semibold text-slate-400 dark:text-slate-600"
                  style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
                >
                  / 100
                </span>
              </div>
            </div>

            <div className="space-y-3 flex-1 flex flex-col justify-end">
              {/* Asset Context */}
              <div className="px-3 py-3 rounded-lg border border-slate-100 dark:border-white/5 bg-white dark:bg-white/2">
                <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 tracking-[0.15em] block mb-1">
                  ASSET CONTEXT EVALUATION
                </span>
                <span
                  className="text-sm font-medium text-slate-700 dark:text-slate-300"
                  style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
                >
                  Payments-gw-03
                </span>
              </div>

              {/* Patch Window Alert */}
              <div className="px-3 py-3 rounded-lg border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/30">
                <div className="flex items-center gap-2 mb-0.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span className="text-[10px] font-semibold text-red-600 dark:text-red-400 tracking-[0.15em]">
                    REQUIRED PATCH WINDOW
                  </span>
                </div>
                <span
                  className="text-lg font-bold text-red-500 ml-5"
                  style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
                >
                  24 Hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

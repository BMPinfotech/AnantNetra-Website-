"use client";

import { Shield, Plug, Gauge, FileText, Lock, Users, Briefcase, Scale, Network } from "lucide-react";

const capabilities = [
  {
    icon: Plug,
    title: "Security API access & integration",
    desc: "Designed to support API-first integration into your workflows (where available).",
  },
  {
    icon: Gauge,
    title: "Risk scoring",
    desc: "Helps translate signals into risk-oriented views to support prioritization.",
  },
  {
    icon: Shield,
    title: "Decision support",
    desc: "Structured guidance to help teams choose clearer next steps.",
  },
  {
    icon: FileText,
    title: "Structured reporting & recommendations",
    desc: "Outputs designed to be shareable with technical and business stakeholders.",
  },
  {
    icon: Lock,
    title: "Access controls",
    desc: "Designed with access control considerations for team-based use.",
  },
];

const audiences = [
  { icon: Shield, label: "Security teams" },
  { icon: Briefcase, label: "IT leaders" },
  { icon: Scale, label: "Risk and compliance stakeholders" },
  { icon: Network, label: "Organizations managing multiple security systems" },
];

export default function CapabilitiesAndWho() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden content-visibility-auto">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.03)_0%,transparent_70%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <span
            className="text-xs font-semibold text-cyan-400 tracking-[0.2em] mb-4 block"
            style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
          >
            CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Built to support <span className="text-cyan-400">better security decisions</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            The items below describe what QUANTIQEN is designed to support today or in supported offerings. Details may vary by plan; we do not publish proprietary scoring logic or internal thresholds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-cyan-400/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{c.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <span
            className="text-xs font-semibold text-cyan-400 tracking-[0.2em] mb-4 block text-center"
            style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
          >
            WHO IT IS FOR
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Teams that need clearer security decisions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {audiences.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <Icon className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="text-slate-200 text-sm">{a.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

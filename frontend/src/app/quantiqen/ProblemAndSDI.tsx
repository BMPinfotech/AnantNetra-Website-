"use client";

import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

export default function ProblemAndSDI() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden content-visibility-auto">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.03)_0%,transparent_70%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <span
            className="text-xs font-semibold text-cyan-400 tracking-[0.2em] mb-4 block"
            style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
          >
            THE PROBLEM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Too many alerts. Not enough <span className="text-cyan-400">decision clarity</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-semibold text-white">Alert overload</h3>
            </div>
            <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <li className="flex gap-2"><span className="text-cyan-400 mt-1">•</span> Teams juggle multiple tools and streams of alerts with little shared context.</li>
              <li className="flex gap-2"><span className="text-cyan-400 mt-1">•</span> It is hard to know what matters most, who owns the next step, or why.</li>
              <li className="flex gap-2"><span className="text-cyan-400 mt-1">•</span> Decisions are often rushed, inconsistent, or hard to defend after the fact.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-semibold text-white">Decision clarity</h3>
            </div>
            <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
              <li className="flex gap-2"><span className="text-cyan-400 mt-1">•</span> Connect security signals with business context so priority is clearer.</li>
              <li className="flex gap-2"><span className="text-cyan-400 mt-1">•</span> Understand likely business impact before choosing a response path.</li>
              <li className="flex gap-2"><span className="text-cyan-400 mt-1">•</span> Support more informed, defensible next-step decisions across teams.</li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <span
            className="text-xs font-semibold text-cyan-400 tracking-[0.2em] mb-4 block text-center"
            style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
          >
            WHAT IS QUANTIQEN?
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            Security Decision Infrastructure, in plain language
          </h3>
          <p className="text-slate-400 text-center leading-relaxed mb-8 max-w-3xl mx-auto">
            QUANTIQEN is a Security Decision Infrastructure (SDI) platform that helps organizations bring together security signals, business context, and risk understanding so teams can make clearer, more confident security decisions. It is designed to support how you decide what to do next—not to replace the security tools you already run.
          </p>
          <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-6 md:p-8">
            <div className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold mb-2">Important clarity</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  QUANTIQEN introduces a decision-focused approach and is <strong className="text-white">not</strong> a replacement for SIEM, EDR, XDR, firewalls, or antivirus tools. It is meant to work alongside your existing security stack to improve prioritization and decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

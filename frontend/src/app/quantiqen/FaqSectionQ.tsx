"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is QUANTIQEN?",
    a: "QUANTIQEN is a Security Decision Infrastructure (SDI) platform from AnantNetra Technologies. It helps organizations connect security signals with business context, evaluate risks, understand potential business impact, and support more informed next-step security decisions.",
  },
  {
    q: "What is Security Decision Infrastructure?",
    a: "Security Decision Infrastructure is an approach focused on turning security signals into clearer decisions. Instead of only producing alerts, it emphasizes context, prioritization, and structured reasoning so teams can decide what to do next with greater confidence.",
  },
  {
    q: "Does QUANTIQEN provide API access?",
    a: "Yes, API access is part of the Security API Starter offering as described on this page. Available capabilities and limits depend on the plan you choose; contact us if you need details for your use case.",
  },
  {
    q: "Is dashboard access included in every plan?",
    a: "No. For example, the Security API Starter plan does not include dashboard access. Full dashboard access is intended for the Full Platform option (contact sales). Other plans may change over time and are listed as Coming Soon where applicable.",
  },
  {
    q: "How can I get started with QUANTIQEN?",
    a: "You can start by requesting access or contacting the team through the Contact page. We will discuss your needs and guide you to the appropriate option.",
  },
  {
    q: "How can I contact the team for enterprise requirements?",
    a: "Use the Contact page to reach AnantNetra Technologies. For enterprise or full-platform needs, choose “Contact Sales” / “Talk to the Team” options on this page to share your requirements.",
  },
];

export default function FaqSectionQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden content-visibility-auto">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.03)_0%,transparent_70%)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span
            className="text-xs font-semibold text-cyan-400 tracking-[0.2em] mb-4 block"
            style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
          >
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Common questions about <span className="text-cyan-400">QUANTIQEN</span>
          </h2>
        </div>

        <div className="space-y-3 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.q} className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="font-medium">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to talk about <span className="text-cyan-400">QUANTIQEN</span>?
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Request a demo or speak with our team about your security decision challenges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 text-sm font-bold rounded-lg bg-cyan-500 text-white hover:bg-cyan-400 transition-colors"
            >
              Request a Demo
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 text-sm font-semibold rounded-lg border border-white/10 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors"
            >
              Talk to the Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

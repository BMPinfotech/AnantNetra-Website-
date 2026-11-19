"use client";

import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "SECURITY API STARTER",
    priceMain: "₹1,499/month",
    priceAlt: "₹15,000/year",
    highlighted: true,
    badge: "Currently available",
    includes: [
      "Security API access",
      "API integration",
      "Basic API documentation",
      "No dashboard access",
    ],
    cta: "Request Access",
    ctaHref: "/contact",
    note: null as string | null,
  },
  {
    name: "GROWTH",
    priceMain: "Coming Soon",
    priceAlt: null,
    highlighted: false,
    badge: "Future option",
    includes: ["Details to be announced"],
    cta: "Coming Soon",
    ctaHref: null as string | null,
    note: "Future pricing option (features and limits not yet announced).",
  },
  {
    name: "PROFESSIONAL",
    priceMain: "Coming Soon",
    priceAlt: null,
    highlighted: false,
    badge: "Future option",
    includes: ["Details to be announced"],
    cta: "Coming Soon",
    ctaHref: null as string | null,
    note: "Future pricing option (features and limits not yet announced).",
  },
  {
    name: "FULL PLATFORM",
    priceMain: "Contact Us",
    priceAlt: null,
    highlighted: false,
    badge: "For qualified needs",
    includes: ["Intended for organizations requiring full dashboard access"],
    cta: "Contact Sales",
    ctaHref: "/contact",
    note: null as string | null,
  },
];

const comparisonRows = [
  { feature: "Plan Name", values: ["Security API Starter", "Growth", "Professional", "Full Platform"] },
  { feature: "Pricing", values: ["₹1,499/mo · ₹15,000/yr", "Coming Soon", "Coming Soon", "Contact Us"] },
  { feature: "API Access", values: ["Included", "To Be Announced", "To Be Announced", "To Be Announced"] },
  { feature: "Dashboard Access", values: ["Not included", "To Be Announced", "To Be Announced", "Included (intended)"] },
  { feature: "Availability", values: ["Available", "Coming Soon", "Coming Soon", "Contact Sales"] },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative w-full py-16 md:py-24 overflow-hidden content-visibility-auto scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.03)_0%,transparent_70%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <span
            className="text-xs font-semibold text-cyan-400 tracking-[0.2em] mb-4 block"
            style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
          >
            PRICING
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Choose how you want to <span className="text-cyan-400">get started</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            No online payment is available yet. Access is provided via request or conversation with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border bg-white/5 backdrop-blur-sm p-6 md:p-8 flex flex-col ${
                plan.highlighted
                  ? "border-cyan-400/60 shadow-[0_0_30px_-10px_rgba(0,240,255,0.25)]"
                  : "border-white/10"
              }`}
            >
              <div className="mb-4">
                <span className="text-[10px] font-semibold tracking-[0.15em] text-cyan-400 uppercase" style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}>
                  {plan.badge}
                </span>
                <h3 className="text-lg font-bold text-white mt-2">{plan.name}</h3>
              </div>
              <div className="mb-4">
                <div className="text-2xl font-bold text-white">{plan.priceMain}</div>
                {plan.priceAlt && (
                  <div className="text-sm text-slate-400 mt-1">{plan.priceAlt}</div>
                )}
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {plan.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {plan.note && (
                <p className="text-xs text-slate-500 mb-4">{plan.note}</p>
              )}
              {plan.ctaHref ? (
                <Link
                  href={plan.ctaHref}
                  className={`mt-auto inline-flex justify-center items-center px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-cyan-500 text-white hover:bg-cyan-400"
                      : "border border-white/10 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-400"
                  }`}
                >
                  {plan.cta}
                </Link>
              ) : (
                <span className="mt-auto inline-flex justify-center items-center px-4 py-2.5 rounded-lg text-sm font-semibold border border-white/10 text-slate-500 cursor-not-allowed">
                  {plan.cta}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10">
            <h3 className="text-white font-semibold">Plan comparison</h3>
            <p className="text-xs text-slate-500 mt-1">Scroll horizontally on smaller screens.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-slate-400 font-medium px-4 py-3">Feature</th>
                  {plans.map((p) => (
                    <th key={p.name} className="text-left text-white font-semibold px-4 py-3">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5 last:border-0">
                    <td className="px-4 py-3 text-slate-400">{row.feature}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="px-4 py-3 text-slate-200">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

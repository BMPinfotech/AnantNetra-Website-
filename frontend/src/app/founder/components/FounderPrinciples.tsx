import { Card } from "@/components/brand/Card";
import { Section } from "@/components/brand/Section";
import { SectionHeader } from "@/components/brand/SectionHeader";

import { founderProfile } from "../founder.data";

export function FounderPrinciples() {
  return (
    <Section id="principles" tone="dark" className="border-y border-line-dark">
      <SectionHeader
        eyebrow="03 / Operating Standards"
        title="Engineering & Leadership Principles"
        description="The standards that shape how we build products, make decisions, and lead security-focused engineering at AnantNetra."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {founderProfile.principles.map((principle) => (
          <Card
            key={principle.id}
            interactive
            className="group relative overflow-hidden border-white/10 bg-brand-surface/55 p-6 md:p-7"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-lavender/40 to-transparent transition-opacity duration-200 group-hover:via-brand-accent/60" />

            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-accent uppercase">
              {principle.number}
            </p>

            <h3 className="mt-4 text-xl font-semibold leading-snug text-brand-text">
              {principle.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
              {principle.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

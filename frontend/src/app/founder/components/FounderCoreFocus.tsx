import { BrainCircuit, Building2, ShieldCheck, Workflow } from "lucide-react";

import { Card } from "@/components/brand/Card";
import { Section } from "@/components/brand/Section";
import { SectionHeader } from "@/components/brand/SectionHeader";

import { founderProfile } from "../founder.data";

const focusIcons = {
  "ai-ml": BrainCircuit,
  "cybersecurity-sdi": ShieldCheck,
  "product-architecture": Workflow,
  "enterprise-innovation": Building2,
} as const;

export function FounderCoreFocus() {
  return (
    <Section id="focus">
      <SectionHeader
        eyebrow="02 / Domain Leadership"
        title="Core Focus & Capabilities"
        description="The strategic areas where AnantNetra builds, advises, and leads — from decision intelligence to resilient security operations."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {founderProfile.focusAreas.map((area) => {
          const Icon = focusIcons[area.id as keyof typeof focusIcons] ?? ShieldCheck;

          return (
            <Card
              key={area.id}
              interactive
              className="group relative overflow-hidden border-white/10 bg-brand-surface/55 p-6 md:p-7"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition-opacity duration-200 group-hover:via-brand-accent/60" />

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-accent/20 bg-brand-accent/10 text-brand-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-xl font-semibold leading-snug text-brand-text">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
                {area.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

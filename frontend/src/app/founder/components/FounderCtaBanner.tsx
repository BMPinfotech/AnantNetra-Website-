import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/brand/ButtonLink";
import { Card } from "@/components/brand/Card";
import { Section } from "@/components/brand/Section";

import { founderProfile } from "../founder.data";

export function FounderCtaBanner() {
  const { bottom } = founderProfile.ctas;

  return (
    <Section className="pb-20 md:pb-28">
      <Card className="relative overflow-hidden border-white/10 bg-brand-surface/50 px-6 py-10 text-center md:px-12 md:py-14">
        <div className="brand-glow pointer-events-none absolute inset-0 opacity-60" />
        <div className="brand-grid-pattern pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />

        <div className="relative mx-auto max-w-3xl">
          <p className="brand-eyebrow text-brand-accent">Security Architecture</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-text md:text-4xl lg:text-[2.75rem]">
            {bottom.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-base leading-relaxed text-brand-muted md:text-lg">
            {bottom.description}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={bottom.primary.href}>
              {bottom.primary.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={bottom.secondary.href} variant="secondary">
              {bottom.secondary.label}
            </ButtonLink>
          </div>
        </div>
      </Card>
    </Section>
  );
}

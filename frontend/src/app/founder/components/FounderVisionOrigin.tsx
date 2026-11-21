import { Card } from "@/components/brand/Card";
import { Section } from "@/components/brand/Section";
import { SectionHeader } from "@/components/brand/SectionHeader";

import { founderProfile } from "../founder.data";

export function FounderVisionOrigin() {
  const { vision } = founderProfile;

  return (
    <Section id="vision" tone="dark" className="border-y border-line-dark">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionHeader
            align="left"
            eyebrow={vision.eyebrow}
            title={vision.heading}
            description={vision.summary}
            className="lg:sticky lg:top-28"
          />
        </div>

        <div className="lg:col-span-8">
          <Card className="relative overflow-hidden border-white/10 bg-brand-surface/60 p-6 md:p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />
            <div className="space-y-5">
              {vision.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-brand-muted md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className="mt-8 border-l-2 border-brand-accent bg-brand-accent/5 px-5 py-4">
              <p className="text-base font-medium leading-relaxed text-brand-text md:text-lg">
                “{vision.quote}”
              </p>
            </blockquote>
          </Card>
        </div>
      </div>
    </Section>
  );
}

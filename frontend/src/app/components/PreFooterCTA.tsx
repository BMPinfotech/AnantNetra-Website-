import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/brand/ButtonLink";

export default function PreFooterCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-16 md:py-24">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-lavender/10 blur-3xl" />

      <div className="brand-container relative z-10">
        <div className="rounded-3xl border border-brand-accent/30 bg-brand-surface/60 p-8 text-center md:p-14">
          <h2 className="brand-heading text-3xl text-brand-text md:text-4xl">
            Let&apos;s Build Something Meaningful.
          </h2>

          <p className="brand-prose mx-auto mt-4 max-w-2xl text-base md:text-lg">
            Have a product idea, technology challenge or cybersecurity
            requirement? Let&apos;s discuss how we can work together.
          </p>

          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contact" size="lg">
              Talk to AnantNetra
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

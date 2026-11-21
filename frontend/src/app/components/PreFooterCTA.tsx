import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/brand/ButtonLink";

export default function PreFooterCTA() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div className="relative rounded-3xl overflow-hidden bg-brand-surface/80 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-accent/30 shadow-2xl shadow-black/30 animate-fade-in-up">
        {/* Abstract Shapes in CTA for visual interest */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-brand-lavender/20 rounded-full blur-2xl" />

        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Let&apos;s Build Something Meaningful.
          </h2>
          <p className="text-brand-muted text-lg">
            Have a product idea, technology challenge or cybersecurity
            requirement? Let&apos;s discuss how we can work together.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4">
          <ButtonLink href="/contact" size="lg">
            Talk to AnantNetra
            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

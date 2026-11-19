import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/brand/ButtonLink";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line-dark bg-brand-ink pt-36 pb-20 text-brand-text md:pt-44 md:pb-28">
      <div className="brand-grid-pattern pointer-events-none absolute inset-0 opacity-60" />
      <div className="brand-glow pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/3 opacity-80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-brand-ink" />

      <div className="brand-container relative z-10 flex flex-col items-center text-center">
        <span className="brand-eyebrow inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-brand-accent">
          {site.positioning}
        </span>

        <h1 className="brand-display mt-6 max-w-4xl">
          Building Intelligent Technology for a More Secure Digital World.
        </h1>

        <p className="brand-prose mt-6 max-w-2xl text-base md:text-lg">
          At AnantNetra Technologies, we build AI-powered products,
          cybersecurity solutions and scalable digital systems that help
          businesses solve complex challenges and operate with confidence.
        </p>

        <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <ButtonLink
            href="/contact"
            size="lg"
            className="w-full sm:w-auto"
          >
            Discuss a Project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>

          <ButtonLink
            href="#products"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Explore Our Products
          </ButtonLink>
        </div>

        <p className="mt-10 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-brand-muted/70">
          {site.name} &middot; {site.location}
        </p>
      </div>
    </section>
  );
}

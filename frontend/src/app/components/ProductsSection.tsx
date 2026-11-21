import { ArrowRight, Check, Clock } from "lucide-react";

import { ButtonLink } from "@/components/brand/ButtonLink";
import { Section } from "@/components/brand/Section";
import { SectionHeader } from "@/components/brand/SectionHeader";
import { StatusPill } from "@/components/brand/StatusPill";

type Product = {
  name: string;
  category: string;
  description: string;
  highlights: string[];
  status: "available" | "coming-soon";
  statusLabel: string;
  ctaLabel: string;
  ctaHref: string;
  ctaVariant: "primary" | "secondary";
  note?: string;
};

const products: Product[] = [
  {
    name: "QUANTIQEN",
    category: "Security Decision Infrastructure",
    description:
      "QUANTIQEN is a Security Decision Infrastructure platform designed to help organizations evaluate security risks, understand business impact and make more informed security decisions.",
    highlights: [
      "Security API",
      "API-first integration",
      "Risk intelligence",
      "Security decision support",
    ],
    status: "available",
    statusLabel: "Available",
    ctaLabel: "Buy Now",
    ctaHref: "/quantiqen",
    ctaVariant: "primary",
  },
  {
    name: "NetraSecure AI",
    category: "AI-Powered Cybersecurity Assistant",
    description:
      "NetraSecure AI is being developed to make cybersecurity guidance and digital risk awareness more accessible through intelligent AI-powered assistance.",
    highlights: [
      "AI-powered cybersecurity assistance",
      "Suspicious URL checking",
      "Cybersecurity awareness",
      "Upcoming security capabilities",
    ],
    status: "coming-soon",
    statusLabel: "Coming Soon",
    ctaLabel: "Coming Soon",
    ctaHref: "/netrasecure-ai",
    ctaVariant: "secondary",
    note: "Product preview only — no purchase is available yet.",
  },
];

export default function ProductsSection() {
  return (
    <Section id="products" tone="dark">
      <SectionHeader
        eyebrow="Our Products"
        title="Purpose-Built Platforms for Security and Intelligence"
        description="We build our own technology so that the products we recommend are grounded in engineering we operate ourselves."
      />

      <div className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
        {products.map((product) => {
          const HighlightIcon = product.status === "available" ? Check : Clock;

          return (
            <article
              key={product.name}
              className="group relative flex h-full flex-col rounded-2xl border border-line-dark bg-brand-surface/70 p-6 transition-colors duration-200 hover:border-brand-accent/40 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="brand-eyebrow text-brand-muted">
                  {product.category}
                </p>
                <StatusPill status={product.status}>
                  {product.statusLabel}
                </StatusPill>
              </div>

              <h3 className="brand-heading mt-5 text-2xl text-brand-text md:text-3xl">
                {product.name}
              </h3>

              <p className="brand-prose mt-3 text-sm md:text-base">
                {product.description}
              </p>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {product.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm text-brand-text/90"
                  >
                    <HighlightIcon
                      className={
                        product.status === "available"
                          ? "mt-0.5 h-4 w-4 shrink-0 text-brand-accent"
                          : "mt-0.5 h-4 w-4 shrink-0 text-brand-lavender"
                      }
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <ButtonLink
                  href={product.ctaHref}
                  variant={product.ctaVariant}
                  className="w-full sm:w-auto"
                >
                  {product.ctaLabel}
                  {product.ctaVariant === "primary" ? (
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  ) : null}
                </ButtonLink>

                {product.note ? (
                  <p className="mt-3 text-xs text-brand-muted">{product.note}</p>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

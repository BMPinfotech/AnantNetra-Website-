import type { Metadata } from "next";
import {
  AlertTriangle,
  ArrowRight,
  BookOpenCheck,
  Bot,
  CheckCircle2,
  Clock3,
  Link2,
  ShieldCheck,
} from "lucide-react";

import { ButtonLink } from "@/components/brand/ButtonLink";
import { Card } from "@/components/brand/Card";
import { PageHero } from "@/components/brand/PageHero";
import { Section } from "@/components/brand/Section";
import { SectionHeader } from "@/components/brand/SectionHeader";
import { StatusPill } from "@/components/brand/StatusPill";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

import Footer from "../components/Footer";

export const metadata: Metadata = buildMetadata({
  title: "NetraSecure AI — Coming Soon | AnantNetra",
  description:
    "NetraSecure AI is an upcoming AI-powered cybersecurity assistant from AnantNetra Technologies, designed to help users understand digital risks, improve cybersecurity awareness and access practical security guidance.",
  path: "/netrasecure-ai",
  keywords: [
    "NetraSecure AI",
    "AI cybersecurity assistant",
    "cybersecurity awareness",
    "suspicious URL checking",
    "AnantNetra Technologies",
  ],
});

const plannedCapabilities = [
  {
    icon: Bot,
    title: "AI-powered cybersecurity assistance",
    description:
      "Planned conversational guidance designed to make cybersecurity concepts and next steps easier to understand.",
  },
  {
    icon: Link2,
    title: "Suspicious URL checking",
    description:
      "A planned way to review suspicious links before interacting with them, with results presented as risk-aware guidance.",
  },
  {
    icon: BookOpenCheck,
    title: "Cybersecurity awareness",
    description:
      "Planned educational content intended to help people build safer everyday digital habits.",
  },
];

const availabilityNotes = [
  "NetraSecure AI is not yet available for public download or purchase.",
  "Store links will be added only when a verified listing is live.",
  `Questions can be sent to ${site.email}.`,
];

export default function NetraSecureAIPage() {
  return (
    <div className="bg-brand-ink text-brand-text">
      <PageHero
        eyebrow="NetraSecure AI · Coming Soon"
        title={
          <>
            Making Cybersecurity{" "}
            <span className="text-brand-accent">More Accessible.</span>
          </>
        }
        description="NetraSecure AI is an upcoming AI-powered cybersecurity assistant designed to help users understand digital risks, improve cybersecurity awareness and access practical security guidance."
      >
        <div className="flex flex-wrap items-center gap-3">
          <StatusPill status="coming-soon">Coming Soon</StatusPill>
          <span className="text-sm text-brand-muted">
            Planned capabilities are outlined below.
          </span>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            disabled
            className="inline-flex h-11 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-semibold text-brand-muted/60"
          >
            <Clock3 className="h-4 w-4" />
            Coming Soon
          </button>
          <ButtonLink href="#capabilities" variant="secondary">
            Explore Planned Capabilities
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </PageHero>

      <Section id="overview" tone="dark">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Overview"
              title="An AI assistant for everyday digital safety"
              description="NetraSecure AI is being developed to make cybersecurity guidance and digital risk awareness more accessible through intelligent, AI-powered assistance."
            />
            <div className="brand-prose mt-6 space-y-4 text-base">
              <p>
                The product is intended for people who want clearer, plain-language
                guidance when they encounter unfamiliar links, potential scams, or
                general cybersecurity questions.
              </p>
              <p>
                NetraSecure AI is still in development. The capabilities described on
                this page are planned and may change before release.
              </p>
            </div>
          </div>

          <Card className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="brand-eyebrow text-brand-lavender">Product status</p>
                <h2 className="mt-2 text-2xl font-semibold text-brand-text">
                  In development
                </h2>
              </div>
              <StatusPill status="coming-soon">Coming Soon</StatusPill>
            </div>

            <dl className="space-y-4 text-sm">
              <div className="flex items-start justify-between gap-6 border-b border-line-dark pb-4">
                <dt className="text-brand-muted">Product</dt>
                <dd className="text-right font-medium text-brand-text">
                  NetraSecure AI
                </dd>
              </div>
              <div className="flex items-start justify-between gap-6 border-b border-line-dark pb-4">
                <dt className="text-brand-muted">Category</dt>
                <dd className="text-right font-medium text-brand-text">
                  AI-Powered Cybersecurity Assistant
                </dd>
              </div>
              <div className="flex items-start justify-between gap-6 border-b border-line-dark pb-4">
                <dt className="text-brand-muted">Availability</dt>
                <dd className="text-right font-medium text-brand-text">
                  To Be Announced
                </dd>
              </div>
              <div className="flex items-start justify-between gap-6">
                <dt className="text-brand-muted">Public download</dt>
                <dd className="text-right font-medium text-brand-text">
                  Not yet available
                </dd>
              </div>
            </dl>

            <p className="text-xs leading-relaxed text-brand-muted">
              No public download or store listing is available at this time.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="capabilities">
        <SectionHeader
          eyebrow="Planned capabilities"
          title="What we are building"
          description="These capabilities are planned for NetraSecure AI. They are not yet available, and details may change before release."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plannedCapabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <Card
                key={capability.title}
                interactive
                className="flex h-full flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon className="h-5 w-5 text-brand-accent" />
                  </div>
                  <StatusPill status="neutral">Planned</StatusPill>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-text">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  {capability.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section id="limitations" tone="dark">
        <div className="rounded-2xl border border-amber-400/25 bg-amber-400/5 p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-400/25 bg-amber-400/10">
              <AlertTriangle className="h-5 w-5 text-amber-300" />
            </div>
            <div>
              <p className="brand-eyebrow text-amber-300">Important limitations</p>
              <h2 className="mt-2 text-2xl font-semibold text-brand-text">
                Informational guidance, not a guarantee
              </h2>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-brand-muted md:text-base">
                Scans and AI guidance are informational only and do not guarantee that
                a link, device, or transaction is completely safe. Always verify
                important information through official channels and use your own
                judgment before sharing sensitive data or making a transaction.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="availability">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Availability"
              title="Coming Soon"
              description="NetraSecure AI is not yet available for download or purchase. We will share verified availability details when they are ready."
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                disabled
                className="inline-flex h-11 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-semibold text-brand-muted/60"
              >
                <Clock3 className="h-4 w-4" />
                Coming Soon
              </button>
              <ButtonLink href="/contact" variant="secondary">
                Contact the team
              </ButtonLink>
            </div>
          </div>

          <Card className="space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-brand-lavender" />
              <h2 className="text-lg font-semibold text-brand-text">
                What to expect
              </h2>
            </div>
            <ul className="space-y-3">
              {availabilityNotes.map((note) => (
                <li
                  key={note}
                  className="flex gap-3 text-sm leading-relaxed text-brand-muted"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-lavender" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section tone="dark">
        <Card className="relative overflow-hidden p-8 text-center md:p-12">
          <div className="brand-glow pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative">
            <p className="brand-eyebrow text-brand-accent">Questions?</p>
            <h2 className="mt-3 text-3xl font-semibold text-brand-text md:text-4xl">
              Talk to the AnantNetra team.
            </h2>
            <p className="mx-auto mt-4 max-w-prose text-brand-muted">
              Have a question about NetraSecure AI or want to discuss a cybersecurity
              requirement? We would be glad to hear from you.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contact">Contact Us</ButtonLink>
              <ButtonLink
                href={`mailto:${site.email}`}
                variant="secondary"
                external
              >
                Email {site.email}
              </ButtonLink>
            </div>
          </div>
        </Card>
      </Section>

      <Footer />
    </div>
  );
}

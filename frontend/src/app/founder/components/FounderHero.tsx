"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

import { ButtonLink } from "@/components/brand/ButtonLink";
import { StatusPill } from "@/components/brand/StatusPill";

import { founderProfile } from "../founder.data";

export function FounderHero() {
  const [imageError, setImageError] = useState(false);
  const hasPhoto = Boolean(founderProfile.photoUrl) && !imageError;
  const initials = founderProfile.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <section className="relative overflow-hidden bg-brand-ink pt-28 pb-20 text-brand-text md:pt-32 md:pb-28">
      <div className="brand-grid-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-16 h-[28rem] w-[28rem] rounded-full bg-brand-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-brand-lavender/10 blur-3xl" />

      <div className="brand-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex">
              <StatusPill status="coming-soon" className="px-3.5 py-1.5 text-[11px]">
                {founderProfile.statusBadge}
              </StatusPill>
            </div>

            <h1 className="brand-display max-w-4xl text-brand-text">
              {founderProfile.name}
            </h1>

            <p className="mt-4 max-w-2xl text-lg font-semibold leading-snug md:text-xl">
              <span className="bg-gradient-to-r from-brand-accent via-brand-accent to-brand-lavender bg-clip-text text-transparent">
                {founderProfile.role}
              </span>
            </p>

            <p className="brand-prose mt-5 max-w-prose text-base md:text-lg">
              {founderProfile.bio}
            </p>

            <p className="mt-4 max-w-prose text-sm leading-relaxed text-brand-muted md:text-base">
              {founderProfile.tagline}
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {founderProfile.domainTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] font-medium tracking-wide text-brand-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={founderProfile.ctas.primary.href} external>
                {founderProfile.ctas.primary.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>

              <ButtonLink href={founderProfile.ctas.secondary.href} variant="secondary">
                {founderProfile.ctas.secondary.label}
              </ButtonLink>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
              <a
                href={founderProfile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-muted transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink rounded-md"
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>

              <a
                href={`mailto:${founderProfile.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-muted transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink rounded-md"
                aria-label={`Email ${founderProfile.email}`}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {founderProfile.email}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[32rem] lg:ml-auto lg:mr-0">
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-brand-accent/20 blur-2xl" />
            <div className="pointer-events-none absolute -inset-px rounded-[1.6rem] bg-gradient-to-b from-brand-accent/40 via-white/10 to-brand-lavender/30" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-brand-surface/70 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.75)] backdrop-blur-sm">
              <div className="relative aspect-[4/4.3] w-full overflow-hidden bg-brand-surface">
                {hasPhoto ? (
                  <Image
                    src={founderProfile.photoUrl}
                    alt={`Portrait of ${founderProfile.name}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 32rem"
                    className="object-cover object-top"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-brand-surface via-brand-surface to-brand-ink px-6 text-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-brand-accent/30 bg-brand-accent/10 font-heading text-3xl font-semibold text-brand-accent">
                      {initials || "AN"}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-brand-text">
                        {founderProfile.name}
                      </p>
                      <p className="mt-1 text-sm text-brand-muted">
                        Founder portrait coming soon
                      </p>
                    </div>
                  </div>
                )}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-ink/90 via-brand-ink/25 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 border-t border-white/10 bg-brand-ink/55 px-4 py-3 backdrop-blur-md sm:px-5">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-brand-muted uppercase">
                    AnantNetra Leadership
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.12em] text-emerald-300 uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                    Verified
                  </span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

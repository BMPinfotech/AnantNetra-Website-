import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

import { site } from "@/lib/site";

const linkGroups = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Cybersecurity", href: "/Services/Cyber-security" },
      { label: "Technology Consulting", href: "/Services/IT-consult" },
      { label: "Incident Response", href: "/incident-response" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "QUANTIQEN", href: "/quantiqen" },
      { label: "NetraSecure AI", href: "/netrasecure-ai", badge: "Coming Soon" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/PrivacyPolicy" },
      { label: "Terms & Conditions", href: "/Terms" },
    ],
  },
] as const;

function FooterLink({
  href,
  label,
  badge,
}: {
  href: string;
  label: string;
  badge?: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-sm text-brand-muted transition-colors hover:text-brand-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
      >
        <span className="h-px w-0 bg-brand-accent transition-all duration-200 group-hover:w-3" />
        {label}
        {badge ? (
          <span className="rounded-full border border-brand-lavender/30 bg-brand-lavender/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-brand-lavender">
            {badge}
          </span>
        ) : null}
      </Link>
    </li>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-dark bg-white/5 text-brand-muted transition-colors hover:border-brand-accent/40 hover:bg-brand-accent/10 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line-dark bg-brand-ink text-brand-text">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-lavender/5 blur-3xl" />

      <div className="brand-container relative z-10 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              <Image
                src="/lightLogo.svg"
                alt=""
                width={40}
                height={40}
                className="h-9 w-9 object-contain"
              />
              <span className="font-heading text-xl font-semibold tracking-tight">
                AnantNetra
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-muted">
              {site.description}
            </p>
            <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent">
              {site.tagline}
            </p>

            <div className="mt-7 space-y-3 text-sm text-brand-muted">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-brand-text"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand-accent" />
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2.5 transition-colors hover:text-brand-text"
              >
                <Phone className="h-4 w-4 shrink-0 text-brand-accent" />
                {site.phone}
              </a>
              <p className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-brand-accent" />
                {site.location}
              </p>
            </div>

            <div className="mt-7 flex items-center gap-2">
              <SocialLink href={site.social.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={site.social.x} label="X (Twitter)">
                <Twitter className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={`mailto:${site.email}`} label="Email">
                <Mail className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title} className="lg:col-span-2">
              <h2 className="font-heading text-sm font-semibold text-brand-text">
                {group.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <FooterLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    badge={"badge" in link ? link.badge : undefined}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-line-dark pt-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-wrap items-center gap-5">
            <div className="rounded-lg bg-white px-3 py-2">
              <Image
                src="/startup_india.webp"
                alt="Startup India"
                width={96}
                height={32}
                className="h-7 w-auto object-contain"
              />
            </div>
            <div className="rounded-lg bg-white px-3 py-2">
              <Image
                src="/mca.webp"
                alt="Ministry of Corporate Affairs"
                width={96}
                height={32}
                className="h-7 w-auto object-contain"
              />
            </div>
            <p className="font-mono text-[11px] text-brand-muted">
              <span className="font-semibold text-brand-text">CIN:</span>{" "}
              {site.cin}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-brand-muted">
            <Link
              href="/PrivacyPolicy"
              className="transition-colors hover:text-brand-text"
            >
              Privacy Policy
            </Link>
            <Link
              href="/Terms"
              className="transition-colors hover:text-brand-text"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-line-dark pt-6">
          <p className="text-center text-xs text-brand-muted md:text-left">
            © 2026 ANANTNETRA TECHNOLOGIES PVT LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

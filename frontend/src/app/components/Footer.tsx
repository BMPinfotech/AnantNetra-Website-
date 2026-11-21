import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Landmark, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiMedium,
  SiQuora,
  SiReddit,
  SiThreads,
  SiX,
  SiYoutube,
} from "react-icons/si";

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

const linkClass =
  "rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink";

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
        className={`group inline-flex items-center gap-2 text-sm text-brand-muted ${linkClass} hover:text-brand-text`}
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
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-dark bg-white/5 text-brand-muted transition-colors hover:border-brand-accent/40 hover:bg-brand-accent/10 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
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
              className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              <Image
                src="/lightLogo.svg"
                alt=""
                width={40}
                height={40}
                className="h-9 w-9 object-contain"
              />
              <span className="font-heading text-xl font-semibold tracking-tight">
                {site.shortName}
              </span>
            </Link>

            <p className="brand-prose mt-5 max-w-sm text-sm">
              {site.description}
            </p>
            <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent">
              {site.tagline}
            </p>

            <div className="mt-7 space-y-3 text-sm text-brand-muted">
              <a
                href={`mailto:${site.email}`}
                className={`flex items-center gap-2.5 rounded-sm hover:text-brand-text ${linkClass}`}
              >
                <Mail className="h-4 w-4 shrink-0 text-brand-accent" />
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className={`flex items-center gap-2.5 rounded-sm hover:text-brand-text ${linkClass}`}
              >
                <Phone className="h-4 w-4 shrink-0 text-brand-accent" />
                {site.phone}
              </a>
              <p className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-brand-accent" />
                {site.location}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              <SocialLink href={site.social.instagram} label="Instagram">
                <SiInstagram className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={site.social.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={site.social.facebook} label="Facebook">
                <SiFacebook className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={site.social.x} label="X (Twitter)">
                <SiX className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={site.social.threads} label="Threads">
                <SiThreads className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={site.social.youtube} label="YouTube">
                <SiYoutube className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={site.social.quora} label="Quora">
                <SiQuora className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={site.social.medium} label="Medium">
                <SiMedium className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={site.social.reddit} label="Reddit">
                <SiReddit className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={`mailto:${site.email}`} label="Email">
                <Mail className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          {linkGroups.map((group) => (
            <nav
              key={group.title}
              aria-labelledby={`footer-${group.title.toLowerCase()}`}
              className="lg:col-span-2"
            >
              <h2
                id={`footer-${group.title.toLowerCase()}`}
                className="font-heading text-sm font-semibold text-brand-text"
              >
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
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-line-dark pt-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-lg border border-line-dark bg-white/5 px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
              <BadgeCheck
                className="h-3.5 w-3.5 text-brand-lavender"
                aria-hidden="true"
              />
              Startup India
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-line-dark bg-white/5 px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
              <Landmark
                className="h-3.5 w-3.5 text-brand-lavender"
                aria-hidden="true"
              />
              MCA Registered
            </span>
            <p className="font-mono text-[11px] text-brand-muted">
              <span className="font-semibold text-brand-text">CIN:</span>{" "}
              {site.cin}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-brand-muted">
            <Link
              href="/PrivacyPolicy"
              className={`rounded-sm hover:text-brand-text ${linkClass}`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/Terms"
              className={`rounded-sm hover:text-brand-text ${linkClass}`}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-line-dark pt-6">
          <p className="text-center text-xs text-brand-muted">
            {site.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

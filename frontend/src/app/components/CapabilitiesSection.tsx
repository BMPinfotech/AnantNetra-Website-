import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Brain, Compass, ShieldCheck, Boxes } from "lucide-react";

import { Section } from "@/components/brand/Section";
import { SectionHeader } from "@/components/brand/SectionHeader";

type Capability = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const capabilities: Capability[] = [
  {
    title: "Artificial Intelligence",
    description:
      "Move from AI experimentation to production systems that solve real business problems.",
    href: "/Services/IT-consult",
    icon: Brain,
  },
  {
    title: "Cybersecurity",
    description:
      "Find and address security weaknesses before they turn into business risks.",
    href: "/Services/Cyber-security",
    icon: ShieldCheck,
  },
  {
    title: "Product Engineering",
    description:
      "Turn a product concept into a secure, scalable system built to ship and evolve.",
    href: "/quantiqen",
    icon: Boxes,
  },
  {
    title: "Technology Consulting",
    description:
      "Make technology decisions with clearer scope, architecture and delivery plans.",
    href: "/Services/IT-consult",
    icon: Compass,
  },
];

export default function CapabilitiesSection() {
  return (
    <Section id="capabilities">
      <SectionHeader
        eyebrow="Our Capabilities"
        title="Four Practices, One Engineering Mindset"
        description="We combine intelligence, security and engineering so that each decision holds up in production."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((capability) => {
          const Icon = capability.icon;

          return (
            <Link
              key={capability.title}
              href={capability.href}
              className="group flex h-full flex-col rounded-2xl border border-line-dark bg-brand-surface/70 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line-dark bg-white/5 text-brand-lavender transition-colors group-hover:border-brand-accent/40 group-hover:text-brand-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>

              <h3 className="brand-heading mt-5 flex items-start justify-between gap-2 text-lg text-brand-text">
                {capability.title}
                <ArrowUpRight
                  className="mt-1 h-4 w-4 shrink-0 text-brand-muted transition-colors group-hover:text-brand-accent"
                  aria-hidden="true"
                />
              </h3>

              <p className="brand-prose mt-2 text-sm">{capability.description}</p>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

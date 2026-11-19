import { Section } from "@/components/brand/Section";
import { SectionHeader } from "@/components/brand/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "We start with your context, constraints and the outcome the work needs to support.",
  },
  {
    number: "02",
    title: "Define the approach",
    description:
      "We agree on scope, architecture and a practical delivery plan before building.",
  },
  {
    number: "03",
    title: "Build and validate",
    description:
      "We implement in reviewable increments and validate decisions as the work progresses.",
  },
  {
    number: "04",
    title: "Deploy and improve",
    description:
      "We ship, measure what matters and iterate based on real usage and feedback.",
  },
];

export default function HowWeWork() {
  return (
    <Section id="how-we-work" tone="dark">
      <SectionHeader
        eyebrow="How We Work"
        title="A Clear Path From Problem to Production"
        description="A structured four-step approach that keeps scope visible and decisions traceable."
      />

      <ol className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <div
          className="pointer-events-none absolute inset-x-0 top-7 hidden h-px bg-linear-to-r from-transparent via-white/15 to-transparent lg:block"
          aria-hidden="true"
        />

        {steps.map((step) => (
          <li key={step.number} className="relative flex gap-4 lg:flex-col lg:gap-0">
            <span className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand-accent/30 bg-brand-ink font-mono text-sm font-semibold text-brand-accent">
              {step.number}
            </span>

            <div className="lg:mt-6">
              <h3 className="brand-heading text-lg text-brand-text">
                {step.title}
              </h3>
              <p className="brand-prose mt-2 text-sm">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

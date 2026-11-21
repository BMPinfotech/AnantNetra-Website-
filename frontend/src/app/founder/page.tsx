import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";

import Footer from "../components/Footer";
import { FounderCoreFocus } from "./components/FounderCoreFocus";
import { FounderCtaBanner } from "./components/FounderCtaBanner";
import { FounderHero } from "./components/FounderHero";
import { FounderPrinciples } from "./components/FounderPrinciples";
import { FounderVisionOrigin } from "./components/FounderVisionOrigin";

export const metadata: Metadata = buildMetadata({
  title: "Founder Profile | AnantNetra Technologies",
  description:
    "Meet the leadership behind AnantNetra Technologies. Learn about our founder's vision, focus areas, and principles for building transparent, evidence-driven security and AI systems.",
  path: "/founder",
  keywords: [
    "AnantNetra founder",
    "AnantNetra leadership",
    "Security Decision Intelligence",
    "QUANTIQEN",
    "cybersecurity leadership",
    "AI security",
  ],
});

export default function FounderPage() {
  return (
    <div className="bg-brand-ink text-brand-text">
      <FounderHero />
      <FounderVisionOrigin />
      <FounderCoreFocus />
      <FounderPrinciples />
      <FounderCtaBanner />
      <Footer />
    </div>
  );
}

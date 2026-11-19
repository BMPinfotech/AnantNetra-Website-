import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { JetBrains_Mono } from "next/font/google";
import QuantiqenHero from "./QuantiqenHero";
import ProblemAndSDI from "./ProblemAndSDI";
import CapabilitiesAndWho from "./CapabilitiesAndWho";
import PricingSection from "./PricingSection";
import FaqSectionQ from "./FaqSectionQ";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const SignalIntakeEngine = dynamic(() => import("./SignalIntakeEngine"), {
  loading: () => <div className="min-h-[18rem]" />,
});
const CoreLayer = dynamic(() => import("./CoreLayer"), {
  loading: () => <div className="min-h-[18rem]" />,
});
const BuiltDifferent = dynamic(() => import("./BuiltDifferent"), {
  loading: () => <div className="min-h-[18rem]" />,
});
const IndiaMoat = dynamic(() => import("./IndiaMoat"), {
  loading: () => <div className="min-h-[18rem]" />,
});
const Integrations = dynamic(() => import("./Integrations"), {
  loading: () => <div className="min-h-[12rem]" />,
});
const QuantiqenFooter = dynamic(() => import("./QuantiqenFooter"), {
  loading: () => <div className="min-h-[12rem]" />,
});
const Footer = dynamic(() => import("../components/Footer"), {
  loading: () => <div className="min-h-[6rem]" />,
});

export const metadata: Metadata = {
  title: "QUANTIQEN — Security Decision Infrastructure | AnantNetra",
  description:
    "QUANTIQEN helps organizations connect security signals with business context, evaluate risks, and make more informed security decisions. Security Decision Infrastructure by AnantNetra Technologies.",
  openGraph: {
    title: "QUANTIQEN — Security Decision Infrastructure | AnantNetra",
    description:
      "Turn security intelligence into decisions your organization can act on. QUANTIQEN is Security Decision Infrastructure by AnantNetra Technologies.",
    url: "https://anantnetra.com/quantiqen",
    siteName: "AnantNetra",
    images: [{ url: "/favicon.png", width: 512, height: 512 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QUANTIQEN — Security Decision Infrastructure | AnantNetra",
    description:
      "Security Decision Infrastructure to help teams prioritize and decide with confidence.",
    images: ["/favicon.png"],
  },
  alternates: {
    canonical: "https://anantnetra.com/quantiqen",
  },
  keywords: [
    "QUANTIQEN",
    "Security Decision Infrastructure",
    "SDI",
    "security risk scoring",
    "AnantNetra",
    "security API",
  ],
  robots: { index: true, follow: true },
};

export default function QuantiqenPage() {
  return (
    <div className={`pt-14 ${jetbrainsMono.variable} bg-[#030712]`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "QUANTIQEN",
            applicationCategory: "SecurityApplication",
            operatingSystem: "Web",
            description:
              "Security Decision Infrastructure platform helping organizations connect security signals with business context and make informed decisions.",
            url: "https://anantnetra.com/quantiqen",
            author: {
              "@type": "Organization",
              name: "AnantNetra Technologies",
            },
          }),
        }}
      />
      <QuantiqenHero />
      <ProblemAndSDI />
      <CoreLayer />
      <CapabilitiesAndWho />
      <PricingSection />
      <FaqSectionQ />
      {/* Existing sections (preserved) */}
      <SignalIntakeEngine />
      <BuiltDifferent />
      <IndiaMoat />
      <Integrations />
      <QuantiqenFooter />
      <Footer />
    </div>
  );
}

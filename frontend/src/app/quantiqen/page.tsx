import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { JetBrains_Mono } from "next/font/google";
import QuantiqenHero from "./QuantiqenHero";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const SignalIntakeEngine = dynamic(
  () => import("./SignalIntakeEngine"),
  { loading: () => <div className="min-h-75" /> },
);
const CoreLayer = dynamic(() => import("./CoreLayer"), {
  loading: () => <div className="min-h-75" />,
});
const BuiltDifferent = dynamic(() => import("./BuiltDifferent"), {
  loading: () => <div className="min-h-75" />,
});
const IndiaMoat = dynamic(() => import("./IndiaMoat"), {
  loading: () => <div className="min-h-75" />,
});
const Integrations = dynamic(() => import("./Integrations"), {
  loading: () => <div className="min-h-50" />,
});
const QuantiqenFooter = dynamic(() => import("./QuantiqenFooter"), {
  loading: () => <div className="min-h-50" />,
});
const Footer = dynamic(
  () => import("../components/Footer"),
  { loading: () => <div className="min-h-25" /> },
);

export const metadata: Metadata = {
  title: "Quantiqen — SDI Security Decision Intelligence Platform | AnantNetra",
  description:
    "Quantiqen runs on SDI — AnantNetra's deterministic risk-and-decision core. BIS scoring, business impact analysis, and bounded AI explanation in one auditable layer. Built in India.",
  openGraph: {
    title: "Quantiqen — SDI Security Decision Intelligence Platform | AnantNetra",
    description:
      "Quantiqen runs on SDI — AnantNetra's deterministic risk-and-decision core. BIS scoring, business impact analysis, and bounded AI explanation in one auditable layer.",
    url: "https://anantnetra.com/quantiqen",
    siteName: "AnantNetra",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantiqen — SDI Security Decision Intelligence Platform | AnantNetra",
    description:
      "Deterministic risk scoring, business impact analysis, and bounded AI explanation in one auditable layer.",
    images: ["/favicon.png"],
  },
  alternates: {
    canonical: "https://anantnetra.com/quantiqen",
  },
  keywords: [
    "SDI",
    "Security Decision Intelligence",
    "BIS scoring",
    "Quantiqen",
    "AnantNetra",
    "cybersecurity platform",
    "risk scoring",
    "DPDP Act compliance",
    "India cybersecurity",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function QuantiqenPage() {
  return (
    <div className={`pt-14 ${jetbrainsMono.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Quantiqen",
            applicationCategory: "SecurityApplication",
            operatingSystem: "Web",
            description:
              "SDI platform that turns alert noise into auditable decisions using deterministic BIS scoring, business impact analysis, and bounded AI explanation.",
            url: "https://anantnetra.com/quantiqen",
            author: {
              "@type": "Organization",
              name: "AnantNetra Technologies",
            },
          }),
        }}
      />
      <QuantiqenHero />
      <SignalIntakeEngine />
      <CoreLayer />
      <BuiltDifferent />
      <IndiaMoat />
      <Integrations />
      <QuantiqenFooter />
      <Footer />
    </div>
  );
}

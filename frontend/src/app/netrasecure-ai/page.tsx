import type { Metadata } from "next";
import dynamic from "next/dynamic";

import NetraSecureNavbar from "./components/NetraSecureNavbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import Footer from "../components/Footer";


export const metadata: Metadata = {
  title: "NetraSecure AI — Enterprise-Grade Privacy & Security",
  description:
    "NetraSecure AI protects your data with real-time threat detection, privacy-first architecture, and enterprise-grade encryption.",
  openGraph: {
    title: "NetraSecure AI",
    description: "Enterprise-grade privacy & security, powered by AI.",
    type: "website",
  },
};


const AppCarouselSection = dynamic(() => import("./components/AppCarouselSection"));
const WhyNetraSecureSection = dynamic(() => import("./components/WhyNetraSecureSection"));
const FeaturesSection = dynamic(() => import("./components/FeaturesSection"));
const ProcessFlowSection = dynamic(() => import("./components/ProcessFlowSection"));
const ScreenshotsSection = dynamic(() => import("./components/ScreenshotsSection"));
const VideoDemoSection = dynamic(() => import("./components/VideoDemoSection"));
const PrivacyEngineSection = dynamic(() => import("./components/PrivacyEngineSection"));
const ComparisonSection = dynamic(() => import("./components/ComparisonSection"));
const AudienceSection = dynamic(() => import("./components/AudienceSection"));
const CtaDownloadSection = dynamic(() => import("./components/CtaDownloadSection"));
const FaqSection = dynamic(() => import("./components/FaqSection"));

export default function NetraSecureAIPage() {
  return (
    <main className="relative bg-slate-50 dark:bg-[#030712]">
      {/* <NetraSecureNavbar /> */}
      <HeroSection />
      <StatsSection />
      <AppCarouselSection />
      <WhyNetraSecureSection />
      <FeaturesSection />
      <ProcessFlowSection />
      <ScreenshotsSection />
      {/* <VideoDemoSection /> */}
      <PrivacyEngineSection />
      <ComparisonSection />
      <AudienceSection />
      {/* <CtaDownloadSection /> */}
      <FaqSection />
      <Footer />
    </main>
  );
}
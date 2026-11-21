import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { buildMetadata } from "@/lib/metadata";

import HomePage from "@/app/components/HomePage";

export const metadata: Metadata = buildMetadata({
  title: "AnantNetra Technologies — AI, Cybersecurity & Product Engineering",
  description:
    "AnantNetra Technologies builds AI-powered products, cybersecurity solutions and scalable digital systems that help businesses solve complex challenges and operate with confidence.",
  path: "/",
  keywords: [
    "AnantNetra Technologies",
    "Artificial Intelligence Solutions",
    "Cybersecurity Solutions",
    "Security Decision Infrastructure",
    "AI Product Development",
    "Technology Consulting",
    "Software Engineering",
  ],
});

const PageContent = dynamic(() => import("./page-content"), {
  loading: () => <div className="min-h-screen" />,
});

export default function Page() {
  return (
    <main className="relative">
      <HomePage />
      <PageContent />
    </main>
  );
}


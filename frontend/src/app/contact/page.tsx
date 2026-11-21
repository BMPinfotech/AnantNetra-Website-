import type { Metadata } from "next";

import Contact from "@/app/components/Contact";
import { buildMetadata } from "@/lib/metadata";

import Footer from "../components/Footer";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | AnantNetra Technologies",
  description:
    "Contact AnantNetra Technologies to discuss AI solutions, cybersecurity, product engineering, or technology consulting for your organization.",
  path: "/contact",
  keywords: [
    "Contact AnantNetra Technologies",
    "Technology Consulting",
    "Cybersecurity Solutions",
    "AI Product Development",
  ],
});

export default function ContactPage() {
  return (
    // 'pt-24' navbar ke liye spacing chhorne ke liye hai, aap isko adjust kar sakte hain.
    <main className="min-h-screen pt-24 pb-12 bg-white dark:bg-neutral-950">
      <Contact />
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { Rocket } from "lucide-react";

import { buildMetadata } from "@/lib/metadata";

import Footer from "../components/Footer";

export const metadata: Metadata = buildMetadata({
  title: "Services | AnantNetra Technologies",
  description:
    "Explore AnantNetra Technologies services across cybersecurity, technology consulting, and business consulting. More service details are coming soon.",
  path: "/Services",
  keywords: [
    "AnantNetra Technologies services",
    "Cybersecurity Solutions",
    "Technology Consulting",
    "Business Consulting",
  ],
});

export default function Page() {
  return (
    <>
      <div className="mt-12 min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Coming Soon  <span
  className="
    mr-2 inline-flex
    bg-gradient-to-r from-[#fc0915] via-[#ee3984] to-[#7800da]
    p-2 rounded-full
    drop-shadow-[0_0_25px_rgba(238,57,132,0.5)]
    hover:drop-shadow-[0_0_40px_rgba(238,57,132,0.7)]
    transition-all duration-500
  "
>
  <Rocket className="size-8 text-white" /> </span>
        </h1>

        <p className="text-muted-foreground max-w-xl mb-6">
          We’re working hard to bring you something amazing.  
          This service will be available very soon.
        </p>

        <div className="text-sm text-muted-foreground mb-8">
          Stay tuned for updates.
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <Link href="/quantiqen" className="text-brand-accent hover:text-brand-accent/80 underline-offset-4 hover:underline">
            QUANTIQEN
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link href="/netrasecure-ai" className="text-brand-accent hover:text-brand-accent/80 underline-offset-4 hover:underline">
            NetraSecure AI
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link href="/about-us" className="text-brand-accent hover:text-brand-accent/80 underline-offset-4 hover:underline">
            About Us
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link href="/contact" className="text-brand-accent hover:text-brand-accent/80 underline-offset-4 hover:underline">
            Contact
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import React from "react";

import Footer from "@/app/components/Footer";
import { buildMetadata } from "@/lib/metadata";

import CyberSecurityPage from "./CyberSecurity";

export const metadata: Metadata = buildMetadata({
  title: "Cybersecurity Services | AnantNetra Technologies",
  description:
    "AnantNetra Technologies provides cybersecurity services including assessments, audits, and practical security advisory to help organizations strengthen their security posture.",
  path: "/Services/Cyber-security",
  keywords: [
    "Cybersecurity Solutions",
    "Cybersecurity Services",
    "Security Assessment",
    "Security Advisory",
    "AnantNetra Technologies",
  ],
});

function Page() {
    return (
        <>
            <div className='mt-12'>

                <CyberSecurityPage />

            </div>
            <Footer />
        </>
    )
}

export default Page

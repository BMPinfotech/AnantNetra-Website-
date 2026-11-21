import type { Metadata } from "next";
import React from "react";

import Footer from "@/app/components/Footer";
import { buildMetadata } from "@/lib/metadata";

import BusinessConsultancyPage from "./Business-consultancy";

export const metadata: Metadata = buildMetadata({
  title: "Business Consulting | AnantNetra Technologies",
  description:
    "AnantNetra Technologies provides business consulting to help organizations align strategy, operations, and technology for sustainable growth.",
  path: "/Services/Busniessconsult",
  keywords: [
    "Business Consulting",
    "Technology Consulting",
    "Digital Strategy",
    "AnantNetra Technologies",
  ],
});

function Page() {
  return (
    <>
    <div className='mt-12'>

     <BusinessConsultancyPage/>

    </div>
    <Footer />
    </>
  )
}

export default Page
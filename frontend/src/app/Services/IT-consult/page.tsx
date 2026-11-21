import type { Metadata } from "next";
import React from "react";

import Footer from "@/app/components/Footer";
import { buildMetadata } from "@/lib/metadata";

import ITConsultancyPage from "./IT-consultancy";

export const metadata: Metadata = buildMetadata({
  title: "Technology Consulting | AnantNetra Technologies",
  description:
    "AnantNetra Technologies offers technology consulting across strategy, engineering, cloud architecture, and scalable digital system delivery.",
  path: "/Services/IT-consult",
  keywords: [
    "Technology Consulting",
    "Software Engineering",
    "Cloud Architecture",
    "AI Product Development",
    "AnantNetra Technologies",
  ],
});

function Page() {
  return (
    <>
    <div className='mt-12'>

     <ITConsultancyPage/>

    </div>
    <Footer />
    </>
  )
}

export default Page
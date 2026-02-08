"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function OurTimeline() {


  const data = [
  {
    title: "2023",
    content: (
      <div>
        <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
          Founded in Rajasthan, India, with a vision to become a leader in IT and
          Business Consulting. Started with a team of 5 professionals passionate
          about technology and innovation.
        </p>

        <div className="grid grid-cols-2 gap-4">

          <img
            src="https://i.pinimg.com/1200x/a3/51/30/a35130edc8113b0b747ed58f84fa3f8c.jpg"
            alt="startup team"
            className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
          />

          <img
            src="https://i.pinimg.com/1200x/81/92/63/81926307369646a043bc8f71ef7f47ac.jpg"
            alt="team collaboration office"
            className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
          />

          <img
            src="https://i.pinimg.com/736x/2e/a9/61/2ea96109b8c1ec1f795f2a05dce14faf.jpg"
            alt="coding environment modern"
            className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
          />

          <img
            src="https://i.pinimg.com/736x/90/9b/be/909bbe0c7a2ecb8263d7ed9308935221.jpg"
            alt="brainstorming session"
            className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
          />

        </div>
      </div>
    ),
  },

  {
    title: "2024",
    content: (
      <div>
        <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
          Expanded operations across India, onboarding global clients for AI & ML,
          full-stack development, and business consulting. Launched internship &
          research programs for fresh talent.
        </p>

        <div className="grid grid-cols-2 gap-4">

          <img
            src="https://i.pinimg.com/736x/f3/ab/d5/f3abd5e88a7445b9f1f6413be1912691.jpg"
            alt="business growth global"
            className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
          />

          <img
            src="https://i.pinimg.com/1200x/c8/55/95/c85595c3d947f0826ba2ec065ed617d5.jpg"
            alt="AI research lab modern"
            className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
          />

          <img
            src="https://i.pinimg.com/1200x/ae/9c/5a/ae9c5a9766a9e6da961e1428d1f14267.jpg"
            alt="software dev team"
            className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
          />

          <img
            src="https://i.pinimg.com/736x/89/b2/00/89b20007920493863a648fe7373eb0b6.jpg"
            alt="consulting professionals"
            className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
          />

        </div>
      </div>
    ),
  },

  {
    title: "2025",
    content: (
      <div>
        <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
          Serving clients across Asia, Europe, and North America. Introduced AI
          automation tools and advanced analytics solutions. Strengthened global
          partnerships for cloud, cybersecurity, and SaaS development.
        </p>

        <div className="grid grid-cols-2 gap-4">

          <img
            src="https://i.pinimg.com/736x/03/1a/28/031a2813e6ecf395d049873ac24bca6d.jpg"
            alt="global collaborations tech"
            className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
          />

         
<img
  src="https://i.pinimg.com/1200x/46/15/fe/4615fe49eba033e7440511a33f39096f.jpg"
  alt="AI automation tools"
  className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
/>
          <img
            src="https://i.pinimg.com/736x/b6/6a/5c/b66a5c62d0d63770e38a22aca9e10452.jpg"
            alt="cloud architecture aws azure gcp"
            className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
          />

         <img
  src="https://i.pinimg.com/1200x/05/ef/16/05ef16d465d225f99cde0d8f4a511267.jpg"
  alt="cybersecurity operations soc team"
  className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
/>

        </div>
      </div>
    ),
  },
];


  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

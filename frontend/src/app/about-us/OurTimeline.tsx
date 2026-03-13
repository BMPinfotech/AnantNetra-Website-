"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function OurTimeline() {
  const data = [
    {
      title: "2023",
      content: (
        <div>
          <div className="mb-8 font-semibold text-lg text-neutral-800 dark:text-neutral-200">Foundation & Vision</div>
          <ul className="mb-8 text-sm text-neutral-700 dark:text-neutral-300 list-disc pl-5 space-y-2">
            <li>Establishment of AnantNetra with a focus on AI-driven solutions and digital consulting.</li>
            <li>Initial development of AI, machine learning, and web technology services.</li>
            <li>Early collaborations with startups and research-driven projects.</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/Bright-Modern-Office.WebP"
              alt="Bright Modern Office"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/Strategy-Ideation.WebP"
              alt="Strategy Ideation"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="mb-8 font-semibold text-lg text-neutral-800 dark:text-neutral-200">Expansion & Innovation</div>
          <ul className="mb-8 text-sm text-neutral-700 dark:text-neutral-300 list-disc pl-5 space-y-2">
            <li>Expansion of service portfolio including AI integration, cloud solutions, and full-stack development.</li>
            <li>Participation in technology events, hackathons, and research initiatives.</li>
            <li>Development of multiple AI-driven prototypes and enterprise solutions.</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/Team-Expansion-Success.WebP"
              alt="Team Expansion Success"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/Global.WebP"
              alt="Global Server Network"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <div className="mb-8 font-semibold text-lg text-neutral-800 dark:text-neutral-200">Strategic Growth</div>
          <ul className="mb-8 text-sm text-neutral-700 dark:text-neutral-300 list-disc pl-5 space-y-2">
            <li>Strengthening of consulting services for enterprise digital transformation.</li>
            <li>Development of proprietary technology tools and intelligent automation systems.</li>
            <li>Expansion of partnerships across academic, research, and technology sectors.</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/Strategic-Growth.WebP"
              alt="Strategic Growth"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/Partnership.WebP"
              alt="Global Partnerships"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2026",
      content: (
        <div>
          <div className="mb-8 font-semibold text-lg text-neutral-800 dark:text-neutral-200">Innovation in Progress (Running)</div>
          <ul className="mb-8 text-sm text-neutral-700 dark:text-neutral-300 list-disc pl-5 space-y-2">
            <li>Launch and development of advanced AI platforms and automation tools.</li>
            <li>Expansion of global consulting and technology services.</li>
            <li>Continued investment in AI research, enterprise solutions, and scalable digital infrastructure.</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/AI-Tech.WebP"
              alt="AI Technology"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/Digital.WebP"
              alt="Digital Infrastructure"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
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
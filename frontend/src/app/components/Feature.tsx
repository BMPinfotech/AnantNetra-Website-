"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  Cpu,
  Lightbulb,
  Users,
  Globe2,
  LineChart,
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

const features = [
  {
    title: "AI-Driven Digital Transformation",
    description:
      "Empowering organizations with automation, data, and analytics to become future-ready.",
    icon: Cpu,
  },
  {
    title: "Cybersecurity Expertise",
    description:
      "Building resilient zero-trust security frameworks to protect and empower digital ecosystems.",
    icon: ShieldCheck,
  },
  {
    title: "Strategic IT Consultancy",
    description:
      "Bridging technology with business goals through expert advisory and customized roadmaps.",
    icon: Lightbulb,
  },
  {
    title: "SaaS Product Innovation",
    description:
      "Creating scalable, intelligent, and user-centric software solutions that drive growth.",
    icon: LineChart,
  },
  {
    title: "Ethical AI Leadership",
    description:
      "Designing transparent and human-centered AI with equity and responsibility at its core.",
    icon: Users,
  },
  {
    title: "Global Mindset, Local Focus",
    description:
      "Combining global expertise with a local approach to deliver impactful, meaningful outcomes.",
    icon: Globe2,
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // 3D tilt animation on scroll
  const rotateX = useTransform(scrollYProgress, [0, 1], ["-15deg", "15deg"]);
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen py-20 flex items-center justify-center overflow-hidden 
  bg-white dark:bg-neutral-950"
    >
      <div className="relative z-10 mx-auto w-full px-2 sm:px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold tracking-tight md:text-6xl text-slate-900 dark:text-slate-100"
        >
          Beyond Technology. Towards Tomorrow.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-400 max-w-3xl mx-auto"
        >
          At AnantNetra Technologies, we design intelligent, secure, and ethical
          innovations that empower businesses to thrive in a connected future.
        </motion.p>

        {/* Scroll-based tilt container */}
        <motion.div
          style={{ rotateX, y, transformStyle: "preserve-3d", perspective: "1000px" }}
          className="mt-20"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <SpotlightCard
                    spotlightColor="rgba(18, 51, 157, 0.94)"
                    className="group relative h-full flex flex-col bg-white dark:bg-neutral-900 backdrop-blur-lg rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl dark:shadow-black/30 transition-all duration-500 hover:border-slate-300 dark:hover:border-white/20 hover:scale-105 hover:-translate-y-2"
                  >
                    {/* Light shimmer effect */}
                    <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(196,181,253,0.15),transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <CardHeader className="flex flex-col z-20 items-center text-center space-y-4 pt-10">
                      <div className="p-4 z-20 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-neutral-800 shadow-inner">
                        <Icon className="h-8 w-8 text-slate-700 dark:text-slate-300" />
                      </div>
                      <CardTitle className="text-xl z-20 font-semibold text-slate-900 dark:text-slate-100">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-grow z-20 flex items-center justify-center pb-10 px-6">
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

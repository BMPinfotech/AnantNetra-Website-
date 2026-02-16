"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Cpu, Lock, Globe2, LineChart, Brain } from "lucide-react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { CardSpotlight } from "@/components/ui/card-spotlight"; // ✅ your installed components

export default function BentoGrids() {
  return (
    <section className="w-full py-4 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center text-neutral-800 dark:text-neutral-100 lg:-mt-25"
        >
          Explore Our Intelligent Ecosystem
        </motion.h2>

        {/* ✅ Dynamic Mesh Grid - Compact & Full */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4">
          {/* 🟦 Evervault Interactive Card */}
          <motion.div
whileHover={{ y: -5 }}
            className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-1 h-full"
          >
            <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col justify-between items-start p-4 relative h-full rounded-xl bg-white dark:bg-neutral-900 hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              {/* Corner icons */}
              <Icon className="absolute h-5 w-5 -top-2 -left-2 dark:text-white text-black opacity-30 group-hover:opacity-100 transition-opacity" />
              <Icon className="absolute h-5 w-5 -bottom-2 -left-2 dark:text-white text-black opacity-30 group-hover:opacity-100 transition-opacity" />
              <Icon className="absolute h-5 w-5 -top-2 -right-2 dark:text-white text-black opacity-30 group-hover:opacity-100 transition-opacity" />
              <Icon className="absolute h-5 w-5 -bottom-2 -right-2 dark:text-white text-black opacity-30 group-hover:opacity-100 transition-opacity" />

              <div className="w-full flex-grow flex justify-center items-center my-2">
                <EvervaultCard text="Security" />
              </div>

              <h2 className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm font-medium leading-relaxed px-2">
                Experience the next generation of digital safety. Our immersive visuals and subtle micro-interactions differ from the norm, designed for a future where security is not just a feature, but an experience.
              </h2>


            </div>
          </motion.div>

          {/* 🟩 AI Architecture */}
          <motion.div whileHover={{ y: -5 }} className="col-span-1 lg:col-span-2">
            <Card className="h-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-all duration-500 !p-5 !gap-3 flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-semibold text-neutral-800 dark:text-neutral-100 !mb-0 -ml-4">
                  <Cpu className="text-blue-600 dark:text-cyan-400 " />
                  AI Architecture
                </CardTitle>
              </CardHeader>
              <CardContent className="!pt-0 !pb-2 px-2">
                <p className="text-neutral-600 dark:text-neutral-400 text-[15px] leading-relaxed">
                  Our systems don't just process data; they think, adapt, and evolve. Powered by modular AI infrastructure, we provide a foundation that scales with your needs, ensuring your technology is always ahead of the curve.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 🟣 Cognitive Edge */}
          <motion.div whileHover={{ scale: 1.02 }} className="col-span-1 sm:col-span-1 lg:row-span-1">
            <CardSpotlight className="h-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:shadow-xl transition-all duration-500 flex flex-col justify-between p-6">
              <CardHeader className="p-0">
                <CardTitle className="flex z-20 items-center gap-2 text-neutral-800 dark:text-neutral-100 text-lg font-semibold">
                  <Brain className="text-purple-600 dark:text-purple-400 w-6 h-6" />
                  Cognitive Edge
                </CardTitle>
              </CardHeader>
              <CardContent className="z-20 p-0 mt-4">
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  Artificial Intelligence meets human intuition to unlock transformative possibilities. By bridging the gap between raw data and actionable insight, we give you the cognitive edge needed to dominate your market.
                </p>
              </CardContent>
            </CardSpotlight>
          </motion.div>

          {/* 🟢 Zero Trust Security */}
          <motion.div whileHover={{ scale: 1.05 }} className="col-span-1 ">
            <Card className="h-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-all duration-500 p-6 flex flex-col justify-between">
              <CardHeader className="p-0">
                <CardTitle className="flex items-center gap-2 text-neutral-800 dark:text-neutral-100 text-lg font-semibold">
                  <Lock className="text-green-600 dark:text-green-400 w-6 h-6" />
                  Zero Trust Security
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  Security by design — Artificial Intelligence-backed, encrypted, and constantly evolving. Use a zero-trust architecture to ensure that every access request is fully authenticated, authorized, and encrypted before granting access.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 🌍 Global Impact */}
          <motion.div whileHover={{ scale: 1.05 }} className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Card className="h-full relative border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden hover:shadow-xl transition-all duration-500 p-6 flex flex-col justify-between">
              <CardHeader className="p-0">
                <CardTitle className="flex items-center gap-2 text-neutral-800 dark:text-neutral-100 text-lg font-semibold">
                  <Globe2 className="text-blue-500 dark:text-cyan-400 w-6 h-6" />
                  Global Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  Transforming industries across the globe with secure, intelligent technology. We are committed to making a positive impact on the world by delivering solutions that are not only effective but also ethical & sustainable.
                </p>
              </CardContent>
              {/* Flashy gradient motion sweep */}
              <motion.div
                initial={{ x: "-120%", scale: 1, opacity: 0.8 }}
                animate={{ x: "120%", scale: 1.1, opacity: [0.8, 1, 0.8] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-[100px]
             bg-gradient-to-r from-transparent 
             via-cyan-400/60 to-transparent
             dark:via-cyan-300/60 
             blur-2xl opacity-90
             mix-blend-screen"
              />

              {/* Optional glowing tail for depth */}
              <motion.div
                initial={{ x: "-130%", scale: 1 }}
                animate={{ x: "130%", scale: 1 }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="absolute inset-y-0 w-[140px]
             bg-gradient-to-r from-transparent 
             via-blue-500/30 to-transparent 
             dark:via-blue-400/30
             blur-3xl opacity-70
             mix-blend-overlay"
              />
            </Card>
          </motion.div>

          {/* 📊 Predictive Scaling */}
          <motion.div whileHover={{ scale: 1.05 }} className="col-span-1">
            <Card className="h-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-all duration-500 p-6 flex flex-col justify-between">
              <CardHeader className="p-0">
                <CardTitle className="flex items-center gap-2 text-neutral-800 dark:text-neutral-100 text-lg font-semibold">
                  <LineChart className="text-orange-500 dark:text-orange-400 w-6 h-6" />
                  Predictive Scaling
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  Anticipate demand with our AI-driven forecasting models. Scale your infrastructure automatically based on real-time usage patterns to ensure seamless performance and cost-efficiency during unpredictable traffic spikes.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

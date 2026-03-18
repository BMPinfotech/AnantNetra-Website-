"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-[180px] lg:pb-[140px] dark:bg-black bg-white">

      {/* Premium Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-slate-50 dark:bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="-mt-12"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-md font-[800] mb-6 border border-blue-100 dark:border-blue-800">
              About AnantNetra
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-tight"
          >
            Engineering the Future of <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 animate-gradient-x">
              Intelligent Digital Transformation
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl leading-relaxed space-y-6 text-left"
          >
            <p>
              At <strong>AnantNetra</strong>, we are a forward-thinking technology and business consulting organization dedicated to helping enterprises navigate the rapidly evolving digital landscape. Our team of strategists, engineers, and AI specialists work together to transform complex challenges into scalable, secure, and intelligent digital solutions.
            </p>
            <p>
              We do not simply build software—we design <strong>future-ready ecosystems</strong> that empower businesses to innovate, optimize operations, and achieve sustainable growth in an increasingly technology-driven world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {/* Optional Stats or Trust Indicators can go here if needed later */}
          </motion.div>

        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute top-[30%] right-[20%] w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

    </section>
  );
};

export default Hero;

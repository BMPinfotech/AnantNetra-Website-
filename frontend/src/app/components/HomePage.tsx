"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
// import InfiniteSlider from "./InfiniteSlider";

function HomePage() {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    // Ensure we're at top when the component mounts
    window.scrollTo({ top: 0, behavior: "instant" });
    setIsMounted(true);
  }, []);

  // --- Safe MotionValue fallback for SSR ---
  const { scrollYProgress: rawScrollYProgress } = useScroll();
  const scrollYProgress = isMounted
    ? rawScrollYProgress
    : new MotionValue(0);

  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.7]);

  const scrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // --- Optional: show nothing until mounted to avoid hydration mismatches ---
  if (!isMounted) {
    return (
      <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative z-30 grid min-h-screen grid-cols-1 items-center gap-8 px-4 lg:grid-cols-2 lg:px-16"
      >
        {/* Left Column: Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left z-10">
          <h1 className="mx-auto max-w-4xl text-3xl font-bold text-slate-800 md:text-5xl lg:text-7xl sm:text-5xl dark:text-slate-300 lg:mx-0">
            {"AI-Driven Solutions for a Smarter & Secure Future"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h1>
{/* <h1 className="mx-auto max-w-4xl text-3xl font-bold md:text-5xl lg:text-7xl sm:text-5xl lg:mx-0">
  {"AI-Driven Solutions for a Smarter & Secure Future"
    .split(" ")
    .map((word, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{
          duration: 0.3,
          delay: index * 0.1,
          ease: "easeInOut",
        }}
        className="
          mr-2 inline-block
          bg-gradient-to-r from-[#fc0915] via-[#ee3984] to-[#7800da]
          bg-clip-text text-transparent
          drop-shadow-[0_0_25px_rgba(238,57,132,0.5)]
          hover:drop-shadow-[0_0_40px_rgba(238,57,132,0.7)]
          transition-all duration-500
        "
      >
        {word}
      </motion.span>
    ))}
</h1> */}
         
         
  <motion.p
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, delay: 0.8 }}
  className="
    mx-auto mt-8 max-w-xl 
    text-base md:text-lg 
    leading-relaxed 
    text-neutral-600 dark:text-neutral-400 
    lg:mx-0
  "
>
  Transforming enterprises with next-generation{" "}
  <span className="font-semibold text-neutral-800 dark:text-neutral-200">
    Artificial Intelligence
  </span>
  ,{" "}
  <span className="font-semibold text-neutral-800 dark:text-neutral-200">
    Cybersecurity
  </span>
   and{" "}
  <span className="font-semibold text-neutral-800 dark:text-neutral-200">
    IT Consulting
  </span>{" "}
  — driving innovation, resilience and sustainable growth.
</motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <button
              onClick={scrollToVideo}
              className="w-64 rounded-lg bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Explore Now
            </button>
            <a
              href="#contact"
              className="w-64 flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900"
            >
              Contact Support
            </a>
          </motion.div>
        </div>

        {/* Right Column: Placeholder */}
        <div className="hidden h-full w-full lg:block ">
          {/* Placeholder content for future use */}
        </div>
      </motion.div>

      {/* Slider Section */}
      {/* <div>
        <InfiniteSlider />
      </div> */}

      {/* Video Section */}
      <div ref={videoRef} className=" lg:-mt-90 -mt-50 flex flex-col overflow-hidden relative z-20 pt-4">

        <ContainerScroll

          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white mb-8  ">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none ">
                  Quantum
                </span>
              </h1>
            </>
          }
        >
          <video
            src="/video_main.webm"

            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl 
    object-contain md:object-cover 
    w-full h-auto  md:h-full "
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
}

export default HomePage;

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

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.7]);

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
    <div className="relative w-full bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="relative flex min-h-[100vh] sm:min-h-[95vh] w-full flex-col items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <video
            src="/video_Three-1.WebM"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover mt-20"
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/50 dark:bg-black/50" />
        </div>

        {/* Content */}
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="relative z-10 flex w-full max-w-6xl flex-col items-center text-center px-4 sm:px-6 md:px-8"
        >
          <h1 className="mx-auto max-w-5xl text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white drop-shadow-lg">
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
                  className="mr-2 inline-block lg:mr-3"
                >
                  {word}
                </motion.span>
              ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="mx-auto mt-6 max-w-3xl text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-200 drop-shadow-md"
          >
            Transforming enterprises with next-generation{" "}
            <span className="font-semibold text-white">
              Artificial Intelligence
            </span>
            ,{" "}
            <span className="font-semibold text-white">
              Cybersecurity
            </span>{" "}
            and{" "}
            <span className="font-semibold text-white">
              IT Consulting
            </span>{" "}
            — driving innovation, resilience and sustainable growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="mt-18 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <button
              onClick={scrollToVideo}
              className="flex w-full sm:w-56 items-center justify-center rounded-lg bg-white px-6 py-3.5 text-base md:text-lg font-medium text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-white/20"
            >
              Explore Now
            </button>
            <a
              href="#contact"
              className="flex w-full sm:w-56 items-center justify-center rounded-lg border border-white/50 bg-white/10 backdrop-blur-sm px-6 py-3.5 text-base md:text-lg font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Slider Section */}
      {/* <div>
        <InfiniteSlider />
      </div> */}

      {/* Video Section */}
      <div ref={videoRef} className="flex flex-col overflow-hidden relative z-20">

        <ContainerScroll

          titleComponent={
            <>
              <h1 className="text-4xl font-normal text-black dark:text-white mb-8 xl:-mt-105">
                Unleash the power of <br />
                <span className="text-4xl md:text-[clamp(3rem,8vw,6rem)] font-normal -mt-4 leading-tight pb-2 inline-block">
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
            preload="none"
            className="mx-auto rounded-2xl object-contain xl:object-cover w-full h-auto xl:h-full max-w-full"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
}

export default HomePage;

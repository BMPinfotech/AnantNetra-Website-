"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { ReactNode, useRef } from "react";

interface SectionScrollWrapperProps {
  children: ReactNode;
}

export const SectionScrollWrapper: React.FC<SectionScrollWrapperProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // section scroll relative to viewport
  });

  // More visible scaling: 1 → 0.9
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        transformOrigin: "top center",
        willChange: "transform, opacity", // helps with smooth rendering
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

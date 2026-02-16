"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const getRotateY = (index: number) => {
    const seed = index * 37;
    return (seed % 21) - 10;
  };

  return (
    <section className="relative mx-auto w-full max-w-6xl px-8 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12 font-sans antialiased">
      {/* 🖼️ Left Image Section */}
      <div className="relative flex justify-start md:justify-end">
        <div className="relative w-[90%] sm:w-[85%] md:w-[500px] h-[400px] sm:h-[480px] md:h-[450px]">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  x: -100,
                  rotate: getRotateY(index),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0,
                  scale: isActive(index) ? 1 : 0.9,
                  x: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : getRotateY(index),
                  zIndex: isActive(index) ? 10 : 0,
                }}
                exit={{ opacity: 0, x: 100, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center shadow-2xl"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* 💬 Right Text Section */}
      <div className="flex flex-col justify-center text-right md:pl-8 md:text-right">
        <motion.div
          key={active}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            {testimonials[active].name}
          </h3>
          <p className="mt-2 text-base text-gray-700 dark:text-gray-400">
            {testimonials[active].designation}
          </p>

          <p className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-lg ml-auto">
            {testimonials[active].quote}
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4 mt-10">
          <button
            onClick={handlePrev}
            className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 shadow-lg transition-transform hover:scale-105"
          >
            <IconArrowLeft className="h-5 w-5 text-gray-900 dark:text-gray-300 group-hover/button:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 shadow-lg transition-transform hover:scale-105"
          >
            <IconArrowRight className="h-5 w-5 text-gray-900 dark:text-gray-300 group-hover/button:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

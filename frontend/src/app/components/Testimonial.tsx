"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "framer-motion";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Anantnetra Technologies has proper expertise in AI automation with strong industry experience and an excellent foundation in the tech stack. We are proud to partner with Anantnetra Technologies and look forward to continued collaboration.",
      name: "Dr. Yili Qin",
      designation: "Ph.D. in AI & Robotics",
      src: "/Test_one.WebP",
    },
    {
      quote:
        "We found Anantnetra Technologies’ cyber audit experience to be outstanding. Their cybersecurity team demonstrated great knowledge and expertise, delivering a detailed and high-quality audit report in minimal time. We truly appreciate their professionalism and efficiency.",
      name: "Alex S.",
      designation: "Project Manager, Cover",
      src: "/Test_two.WebP",
    },
    
  ];
  return (
    <div>
          <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center text-neutral-800 dark:text-neutral-100"
        >
          What Others Say About Us
        </motion.h2>
        
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
}

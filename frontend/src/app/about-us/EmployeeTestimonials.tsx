"use client";

import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Puneet Soni",
    role: "Tech Operations Manager",
    quote: "Working here has been a transformative experience. The emphasis on innovation and the collaborative environment push me to optimize operations every day."
  },
  {
    id: 2,
    name: "Khushi Kumari",
    role: "AI Engineer",
    quote: "The culture of continuous learning is incredible. I've had the opportunity to work on cutting-edge AI models while being supported by brilliant colleagues."
  },
  {
    id: 3,
    name: "Disha Mali",
    role: "Sales Manager",
    quote: "We don't just deliver software; we solve real-world problems. It's incredibly rewarding to see the direct impact of our solutions on our clients' success."
  }
];

export const EmployeeTestimonials = () => {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4"
          >
            What Our Employees Say About Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
          >
            Hear from the talented individuals who drive our vision forward and make AnantNetra a great place to work.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Quote Mark Decoration */}
              <div className="text-6xl text-indigo-100 dark:text-indigo-900/50 absolute top-4 right-6 font-serif leading-none">
                "
              </div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <p className="text-neutral-700 dark:text-neutral-300 italic mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-bold overflow-hidden border border-indigo-200 dark:border-indigo-800">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random&color=fff&size=48`}
                      alt={testimonial.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                      {testimonial.name}
                    </h4>
                    <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployeeTestimonials;

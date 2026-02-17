"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <div className="py-20 bg-white dark:bg-neutral-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-16"
        >
          What Others Say About Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col bg-slate-50 dark:bg-neutral-900/50 backdrop-blur-sm border border-slate-200 dark:border-neutral-800 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-neutral-700 shadow-sm">
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-neutral-400">
                    {testimonial.designation}
                  </p>
                </div>
              </div>

              <div className="relative">
                <svg
                  className="absolute -top-4 -left-2 w-8 h-8 text-blue-100 dark:text-blue-900/40 -z-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.0547 14.8859 14.6859 16.625 13.8906C13.9172 13.3633 12.9844 11.2305 13.5625 8.52344L14.2891 5.92969C14.7109 4.39453 16.0039 3.25781 17.5586 3.09766L18.4961 3.00391C19.9961 2.85156 21.0742 4.14453 20.8438 5.61719L19.9219 9.14844C19.8672 9.51172 20.1484 9.80859 20.4961 9.80859C21.4336 9.80859 22.1875 10.5625 22.1875 11.5V19.5C22.1875 20.3281 21.5156 21 20.6875 21H14.017ZM6.01719 21L6.01719 18C6.01719 16.0547 6.88594 14.6859 8.625 13.8906C5.91719 13.3633 4.98438 11.2305 5.5625 8.52344L6.28906 5.92969C6.71094 4.39453 8.00391 3.25781 9.55859 3.09766L10.4961 3.00391C11.9961 2.85156 13.0742 4.14453 12.8438 5.61719L11.9219 9.14844C11.8672 9.51172 12.1484 9.80859 12.4961 9.80859C13.4336 9.80859 14.1875 10.5625 14.1875 11.5V19.5C14.1875 20.3281 13.5156 21 12.6875 21H6.01719Z" />
                </svg>
                <p className="text-slate-600 dark:text-neutral-300 leading-relaxed italic relative z-10">
                  "{testimonial.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-10 md:pt-24 md:pb-16 dark:bg-dark">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient blob */}
        <div className="absolute top-20 left-10 md:left-32 h-52 w-52 md:h-72 md:w-72 bg-blue-500/30 dark:bg-blue-700/30 rounded-full blur-3xl animate-pulse" />

        {/* Floating glass block */}
        <div className="absolute top-1/2 left-1/4 h-28 w-28 md:h-40 md:w-40 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl rotate-12 shadow-2xl animate-[float_6s_ease-in-out_infinite]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT IMAGES */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex w-full max-w-md sm:max-w-lg md:max-w-xl gap-4">
              
              {/* Column 1 */}
              <div className="flex flex-col w-1/2 gap-4">
                <img
                  src="https://cdn.tailgrids.com/assets/images/marketing/about/about-01/image-1.jpg"
                  alt=""
                  className="rounded-2xl shadow-lg shadow-blue-500/20 w-full object-cover"
                />
                <img
                  src="https://cdn.tailgrids.com/assets/images/marketing/about/about-01/image-2.jpg"
                  alt=""
                  className="rounded-2xl shadow-lg shadow-blue-500/20 w-full object-cover"
                />
              </div>

              {/* Column 2 */}
              <div className="flex flex-col w-1/2 justify-center">
                <img
                  src="https://cdn.tailgrids.com/assets/images/marketing/about/about-01/image-3.jpg"
                  alt=""
                  className="rounded-2xl shadow-xl shadow-black/20 w-full object-cover"
                />
              </div>

            </div>
          </div>

          {/* RIGHT TEXT CONTENT */}
         <div className="text-center lg:text-left">
          <span className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-medium">
            About Us
          </span>
  <h2 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-dark dark:text-white">
    <span className="block">
      Redefining the Future of Digital Transformation
    </span>
  </h2>

  <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-base leading-relaxed relative z-20">
    <span className="block">
      At AnantNetra Technologies, we are a team of passionate technologists, 
      innovators, and consultants dedicated to redefining the future of 
      digital business transformation.
    </span>
    <span className="block">
      Our mission is to empower enterprises with intelligent, secure, and 
      scalable technology solutions that drive measurable growth and success.
    </span>
  </p>

  <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-base leading-relaxed relative z-20">
    <span className="block">
      Founded in 2023 and headquartered in Rajasthan, India, AnantNetra 
      Technologies stands at the intersection of innovation, intelligence, 
      and integrity.
    </span>
    <span className="block">
      We provide cutting-edge services in Artificial Intelligence, Machine 
      Learning, Cloud Computing, Full-Stack Development, Cybersecurity, 
      and Business Consulting.
    </span>
    <span className="block">
      Through our customer-centric approach, we bridge the gap between 
      business strategy and technology implementation, enabling organizations 
      to unlock new possibilities in the digital era.
    </span>
  </p>


            {/* BUTTON (optional) */}
            {/* 
            <a
              href="#"
              className="inline-flex items-center justify-center py-3 px-7 text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-md shadow-lg shadow-blue-500/30 hover:opacity-90 transition"
            >
              Get Started
            </a>
            */}
          </div>

        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

    </section>
  );
};

export default Hero;

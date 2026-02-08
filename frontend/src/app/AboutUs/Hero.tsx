"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
      
      {/* Background decoration elements */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Gradient blob (blue now) */}
        <div className="absolute top-20 left-32 h-72 w-72 bg-blue-500/30 dark:bg-blue-700/30 rounded-full blur-3xl animate-pulse"></div>

        {/* Light blue glow */}
        <div className="absolute bottom-10 right-20 h-64 w-64 bg-blue-400/20 rounded-full blur-[90px]"></div>

        {/* Floating glass shape */}
        <div className="absolute top-1/2 left-1/4 h-40 w-40 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl rotate-12 shadow-2xl animate-[float_6s_ease-in-out_infinite]"></div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-b1etween -mx-4">
          
          {/* LEFT IMAGES */}
          <div className="w-full px-4 lg:w-6/12">
            <div className="relative flex items-center -mx-3 sm:-mx-4">

              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <img
                    src="https://cdn.tailgrids.com/assets/images/marketing/about/about-01/image-1.jpg"
                    alt=""
                    className="w-full rounded-2xl shadow-lg shadow-blue-500/20"
                  />
                </div>

                <div className="py-3 sm:py-4">
                  <img
                    src="https://cdn.tailgrids.com/assets/images/marketing/about/about-01/image-2.jpg"
                    alt=""
                    className="w-full rounded-2xl shadow-lg shadow-blue-500/20"
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative my-4">
                  <img
                    src="https://cdn.tailgrids.com/assets/images/marketing/about/about-01/image-3.jpg"
                    alt=""
                    className="w-full rounded-2xl shadow-xl shadow-black/20"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT TEXT CONTENT */}
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Make your customers happy by giving services.
              </h2>

              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>

              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                A domain name is one of the first steps to establishing your
                brand. Secure a consistent brand image with a domain name that
                matches your business.
              </p>

              {/* BUTTON */}
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
      </div>

      {/* Floating Animation Keyframes */}
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

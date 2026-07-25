"use client";

import dynamic from "next/dynamic";

const WorldMapSection = dynamic(
  () => import("./components/WorldMapSection"),
  {
    loading: () => (
      <section className="w-full min-h-screen bg-white dark:bg-neutral-950 flex items-center justify-center">
        <div className="animate-pulse w-full max-w-350 h-175 bg-gray-200 dark:bg-neutral-800 rounded-lg" />
      </section>
    ),
  }
);

const Features = dynamic(() => import("./components/Feature"), {
  ssr: false,
  loading: () => (
    <section className="w-full min-h-screen bg-white dark:bg-neutral-950 flex items-center justify-center">
      <div className="animate-pulse w-full max-w-7xl px-6">
        <div className="h-12 w-96 mx-auto bg-gray-200 dark:bg-neutral-800 rounded mb-16" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-64 bg-gray-200 dark:bg-neutral-800 rounded-3xl" />
          ))}
        </div>
      </div>
    </section>
  ),
});

const BentoGrids = dynamic(() => import("./components/BentoGrid"), {
  ssr: false,
  loading: () => (
    <section className="w-full py-4 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="animate-pulse h-12 w-96 mx-auto bg-gray-200 dark:bg-neutral-800 rounded mb-16" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-48 bg-gray-200 dark:bg-neutral-800 rounded-xl" />
          ))}
        </div>
      </div>
    </section>
  ),
});

const AnimatedTestimonialsDemo = dynamic(
  () => import("./components/Testimonial").then((m) => m.AnimatedTestimonialsDemo),
  {
    ssr: false,
    loading: () => (
      <div className="w-full bg-white dark:bg-neutral-950 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="animate-pulse h-10 w-72 mx-auto bg-gray-200 dark:bg-neutral-800 rounded mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="h-48 bg-gray-200 dark:bg-neutral-800 rounded-3xl" />
            ))}
          </div>
        </div>
      </div>
    ),
  }
);

const Contact = dynamic(() => import("./components/Contact"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-8xl mx-auto px-6 lg:px-20 py-16">
      <div className="animate-pulse space-y-8 max-w-3xl mx-auto">
        <div className="h-12 w-96 mx-auto bg-gray-200 dark:bg-neutral-800 rounded" />
        <div className="h-96 bg-gray-200 dark:bg-neutral-800 rounded-2xl" />
      </div>
    </div>
  ),
});

const PreFooterCTA = dynamic(() => import("./components/PreFooterCTA"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div className="animate-pulse h-40 bg-gray-200 dark:bg-neutral-800 rounded-3xl" />
    </div>
  ),
});

const Footer = dynamic(() => import("./components/Footer"), {
  ssr: false,
  loading: () => (
    <footer className="w-full bg-slate-50 dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-neutral-800">
      <div className="animate-pulse max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-48 bg-gray-200 dark:bg-neutral-800 rounded col-span-2" />
          ))}
        </div>
      </div>
    </footer>
  ),
});

export default function PageContent() {
  return (
    <>
      <Features />
      <WorldMapSection />
      <BentoGrids />
      <AnimatedTestimonialsDemo />
      <Contact />
      <PreFooterCTA />
      <Footer />
    </>
  );
}

import dynamic from "next/dynamic";
import HomePage from "@/app/components/HomePage";
import Features from "./components/Feature";
import { AnimatedTestimonialsDemo } from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PreFooterCTA from "./components/PreFooterCTA";

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

const BentoGrids = dynamic(
  () => import("./components/BentoGrid"),
  {
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
  }
);




export default function Page() {
  return (
    <main className="relative">

      <HomePage />

      <BentoGrids />
      <Features />
      <WorldMapSection />
      <AnimatedTestimonialsDemo />
      <Contact />
      {/** only Home page */}
<PreFooterCTA />
      <Footer />

    </main>
  )
    ;
}
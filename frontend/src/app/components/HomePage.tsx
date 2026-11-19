import Link from "next/link";

import ContainerScroll from "./DynamicContainerScroll";
import { site } from "@/lib/site";

function HomePage() {
  return (
    <div className="relative w-full bg-brand-ink">
      <HeroSection />
      <div id="video-section" className="flex flex-col overflow-hidden relative z-20">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-normal text-brand-text mb-8">
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
            className="mx-auto rounded-2xl object-contain xl:object-cover w-full aspect-video xl:h-full max-w-full"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-screen sm:min-h-[95vh] w-full flex-col items-center justify-center overflow-hidden pt-40 pb-16">
      <div className="absolute inset-0 z-0 h-full w-full">
        <div className="relative aspect-video h-full w-full">
          <video
            src="/video_Three-1.WebM"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="h-full w-full object-cover mt-20"
          />
          {/* Brand-ink overlay keeps the hero copy readable without hiding the video */}
          <div className="absolute inset-0 bg-brand-ink/75" />
          <div className="absolute inset-0 bg-linear-to-b from-brand-ink/60 via-brand-ink/55 to-brand-ink" />
        </div>
      </div>

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center text-center px-4 sm:px-6 md:px-8">
        <span className="brand-eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-brand-accent backdrop-blur-sm animate-hero-fade-in">
          {site.positioning}
        </span>

        <h1 className="mx-auto max-w-5xl text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-normal text-brand-text drop-shadow-lg animate-hero-fade-in">
          Building Intelligent Technology for a More Secure Digital World.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-brand-muted drop-shadow-md animate-hero-fade-in-delay">
          At AnantNetra Technologies, we build AI-powered products,
          cybersecurity solutions and scalable digital systems that help
          businesses solve complex challenges and operate with confidence.
        </p>

        <div className="mt-18 flex flex-col sm:flex-row items-center justify-center gap-4 w-full animate-hero-fade-in-delay-2">
          <Link
            href="/contact"
            className="flex w-full sm:w-56 items-center justify-center rounded-lg bg-brand-accent px-6 py-3.5 text-base md:text-lg font-semibold text-brand-ink shadow-lg shadow-brand-accent/20 transition-all duration-300 hover:scale-105 hover:bg-[#ff8d4d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
          >
            Discuss a Project
          </Link>
          <a
            href="#products"
            className="flex w-full sm:w-56 items-center justify-center rounded-lg border border-white/50 bg-white/10 backdrop-blur-sm px-6 py-3.5 text-base md:text-lg font-medium text-brand-text shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
          >
            Explore Our Products
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomePage;

import ContainerScroll from "./DynamicContainerScroll";

function HomePage() {
  return (
    <div className="relative w-full bg-white dark:bg-black">
      <HeroSection />
      <div id="video-section" className="flex flex-col overflow-hidden relative z-20">
        <ContainerScroll
          titleComponent={
            <>
               <h1 className="text-4xl font-normal text-black dark:text-white mb-8">
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
    <section  className="relative flex min-h-screen sm:min-h-[95vh] w-full flex-col items-center justify-center overflow-hidden pt-40 pb-16">
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
          <div className="absolute inset-0 bg-black/50 dark:bg-black/50" />
        </div>
      </div>

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center text-center px-4 sm:px-6 md:px-8">
        <h1 className="mx-auto max-w-5xl text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white drop-shadow-lg animate-hero-fade-in">
          AI-Driven Solutions for a Smarter & Secure Future
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-200 drop-shadow-md animate-hero-fade-in-delay">
          Transforming enterprises with next-generation{" "}
          <span className="font-semibold text-white">Artificial Intelligence</span>,{" "}
          <span className="font-semibold text-white">Cybersecurity</span>{" "}
          and{" "}
          <span className="font-semibold text-white">IT Consulting</span>{" "}
          — driving innovation, resilience and sustainable growth.
        </p>

        <div className="mt-18 flex flex-col sm:flex-row items-center justify-center gap-4 w-full animate-hero-fade-in-delay-2">
          <a
            href="#video-section"
            className="flex w-full sm:w-56 items-center justify-center rounded-lg bg-white px-6 py-3.5 text-base md:text-lg font-medium text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-white/20"
          >
            Explore Now
          </a>
          <a
            href="#contact"
            className="flex w-full sm:w-56 items-center justify-center rounded-lg border border-white/50 bg-white/10 backdrop-blur-sm px-6 py-3.5 text-base md:text-lg font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomePage;

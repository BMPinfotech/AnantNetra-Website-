import { InfiniteSlider } from "@/components/ui/infinite-slider";

export function Awards() {
  const logos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      alt: "AWS Partner",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      alt: "Microsoft Certified",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
      alt: "Google Cloud Partner",
    },
    {
      src: "https://cdn.simpleicons.org/docker",
      alt: "Docker Certified",
    },
    {
      src: "https://cdn.simpleicons.org/kubernetes",
      alt: "Kubernetes Partner",
    },
    {
      src: "https://cdn.simpleicons.org/cisco",
      alt: "Cisco Partner",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden ">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 blur-3xl -z-10 " />

      <div className="relative bg-white/5 rounded-2xl py-20 px-6 shadow-xl">
        <InfiniteSlider gap={60} reverse className="py-2">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="relative flex items-center justify-center p-4"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-15 w-auto object-contain drop-shadow-sm"
              />
            </div>
          ))}
        </InfiniteSlider>

        {/* Gradient Fade Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />
      </div>
    </div>
  );
}
"use client";
import dynamic from "next/dynamic";

const ContainerScroll = dynamic(
  () => import("@/components/ui/container-scroll-animation").then((m) => ({ default: m.ContainerScroll })),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-320">
        <div className="animate-pulse w-full max-w-5xl h-160 bg-white/5 rounded-2xl" />
      </div>
    ),
  }
);

export default ContainerScroll;

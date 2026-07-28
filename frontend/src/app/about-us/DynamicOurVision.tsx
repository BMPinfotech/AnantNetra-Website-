"use client";
import dynamic from "next/dynamic";
import type { BentoProps } from "./OurVision";

const OurVisionInner = dynamic(() => import("./OurVision"), { ssr: false });

export default function DynamicOurVision(props: BentoProps) {
  return <OurVisionInner {...props} />;
}

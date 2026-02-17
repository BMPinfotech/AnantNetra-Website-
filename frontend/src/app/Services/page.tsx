import React from "react";
import Footer from "../components/Footer";
import { Rocket } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="mt-12 min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Coming Soon  <span
  className="
    mr-2 inline-flex
    bg-gradient-to-r from-[#fc0915] via-[#ee3984] to-[#7800da]
    p-2 rounded-full
    drop-shadow-[0_0_25px_rgba(238,57,132,0.5)]
    hover:drop-shadow-[0_0_40px_rgba(238,57,132,0.7)]
    transition-all duration-500
  "
>
  <Rocket className="size-8 text-white" /> </span>
        </h1>

        <p className="text-muted-foreground max-w-xl mb-6">
          We’re working hard to bring you something amazing.  
          This service will be available very soon.
        </p>

        <div className="text-sm text-muted-foreground">
          Stay tuned for updates.
        </div>
      </div>

      <Footer />
    </>
  );
}

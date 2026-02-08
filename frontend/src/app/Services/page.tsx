import React from "react";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <div className="mt-12 min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Coming Soon 🚀
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

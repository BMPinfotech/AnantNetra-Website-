"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function PreFooterCTA() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 dark:from-neutral-900 dark:to-neutral-800 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-2xl"
      >
        {/* Abstract Shapes in CTA for visual interest */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl" />

        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Secure Your Future?
          </h2>
          <p className="text-slate-300 text-lg">
            Join leading enterprises in transforming digital landscapes with robust security and intelligent solutions.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="rounded-full bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 hover:scale-105 transition-transform duration-300"
            asChild
          >
            <Link href="/#contact">
              Apply For Fellowship <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/20 text-black dark:text-white hover:bg-white/10 hover:text-white px-8"
            asChild
          >
            <Link href="/Services/Busniessconsult">
              Business Consultancy <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
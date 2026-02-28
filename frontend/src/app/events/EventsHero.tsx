"use client";
import React from "react";
import { motion } from "framer-motion";

export default function EventsHero() {
    return (
        <section className="relative py-24 overflow-hidden bg-white dark:bg-black">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-slate-50 dark:bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-2"
                >
                    <span className="inline-block py-1 px-4 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-bold mb-6 border border-indigo-100 dark:border-indigo-800 tracking-wide">
                        Stay Connected
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-tight">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600">Events</span> & Experiences
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        Join us for industry-leading webinars, workshops, and conferences. Explore our upcoming schedule and revisit our past highlights.
                    </p>
                </motion.div>
            </div>

            {/* Decorative Blur */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </section>
    );
}

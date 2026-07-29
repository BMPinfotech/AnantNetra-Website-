"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Zap, Award } from "lucide-react";

const highlights = [
    { id: 1, title: "Expert-Led Sessions", description: "Learn from industry leaders & innovators", icon: Calendar },
    { id: 2, title: "Meaningful Connections", description: "Network with professionals and peers worldwide", icon: Users },
    { id: 3, title: "Future-Ready Insights", description: "Explore emerging trends and technologies", icon: Zap },
    { id: 4, title: "Practical Takeaways", description: "Gain actionable strategies you can implement", icon: Award },
];

export default function EventsHero() {
    return (
        <section className="relative py-24 overflow-hidden bg-white dark:bg-black">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-slate-50 dark:bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-2"
                >
                     <span className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-md font-extrabold mb-6 border border-blue-100 dark:border-blue-800"> Stay Connected </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-tight">
                        Our <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-500 to-indigo-600">Events</span> & Experiences
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-normal font-medium text-left">
                        Join us for industry-leading webinars, workshops, and conferences. Explore our upcoming schedule and revisit our past highlights.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 mt-16 lg:divide-x lg:divide-slate-200 dark:lg:divide-zinc-800">
                    {highlights.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={item.id} className="flex items-start gap-4 p-4 lg:px-8 first:lg:pl-0 last:lg:pr-0">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-linear-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-blue-400/20 flex items-center justify-center shadow-lg shadow-blue-500/25">
                                    <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Decorative Blur */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </section>
    );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, CheckCircle2 } from "lucide-react";

interface AgendaItem {
    id: number;
    activity: string;
    description?: string;
    topics?: string[]
}

interface AgendaSectionProps {
    agenda: AgendaItem[];
}

export default function AgendaSection({ agenda }: AgendaSectionProps) {
    return (
        <section className="py-20 bg-white dark:bg-black overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Event <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-500 to-indigo-600">Agenda</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        Join an exclusive evening of meaningful conversations, founder networking, collaborative learning, and real-world
                        business discussions. This event is designed to bring together entrepreneurs, startup founders, business owners, and
                        innovators to share experiences, exchange ideas, and build valuable connections in a relaxed and engaging
                        environment
                    </p>
                </div>

                <div className="relative space-y-12">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-zinc-800 transform md:-translate-x-1/2 hidden sm:block" />

                    {agenda.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Content Card */}
                            <div className="w-full md:w-1/2 group">
                                <div className="p-6 bg-slate-50 dark:bg-zinc-900/50 rounded-3xl border border-slate-100 dark:border-zinc-800 hover:border-indigo-500/50 transition-colors shadow-sm hover:shadow-lg dark:hover:shadow-indigo-500/5">
                                    {/* <div className="flex items-center gap-3 mb-3">
                                        <span className="p-2 bg-indigo-500/10 rounded-xl">
                                            <Clock className="w-5 h-5 text-indigo-500" />
                                        </span>
                                        <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                                            {item.time}
                                        </span>
                                    </div> */}
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
                                        {item.activity}
                                    </h3>
                                    {item.description && (
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    )}
                                    {
                                        item.topics && item.topics.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {item.topics.map((topic, i) => (
                                                    <span
                                                        key={i}
                                                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
                                                    >
                                                        {topic}
                                                    </span>
                                                ))}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>

                            {/* Dot in Middle */}
                            <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white dark:border-black transform -translate-x-1/2 hidden sm:flex items-center justify-center z-10 shadow-lg shadow-indigo-500/20">
                                <CheckCircle2 className="w-4 h-4 text-white" />
                            </div>

                            {/* Empty Space for layout */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

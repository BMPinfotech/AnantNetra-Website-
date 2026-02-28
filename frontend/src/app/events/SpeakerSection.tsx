"use client";
import React from "react";
import { motion } from "framer-motion";

interface Speaker {
    name: string;
    designation: string;
    photo: string;
}

interface SpeakerSectionProps {
    speakers: Speaker[];
}

export default function SpeakerSection({ speakers }: SpeakerSectionProps) {
    return (
        <section className="py-20 bg-slate-50 dark:bg-zinc-950/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">Expert Speakers</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Learn from the thinkers, creators, and leaders who are shaping the future of digital security and technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group text-center"
                        >
                            <div className="relative mb-6 inline-block">
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-20 group-hover:opacity-40" />
                                <div className="relative overflow-hidden rounded-2xl aspect-square w-48 mx-auto shadow-2xl">
                                    <img
                                        src={speaker.photo}
                                        alt={speaker.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {speaker.name}
                            </h3>
                            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 rounded-full inline-block">
                                {speaker.designation}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

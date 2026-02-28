"use client";
import React from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

interface PastEventPhoto {
    url: string;
    caption: string;
}

interface PastEventsGalleryProps {
    photos: PastEventPhoto[];
}

export default function PastEventsGallery({ photos }: PastEventsGalleryProps) {
    return (
        <section className="py-24 bg-slate-50 dark:bg-zinc-950/40">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                            Moments from <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-600">Past Events</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Relive the highlights of our previous gatherings, from keynote sessions to interactive workshops.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 font-semibold bg-white dark:bg-zinc-900 px-6 py-3 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-sm">
                        <Camera className="w-5 h-5 text-rose-500" />
                        <span>Event Archive</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="relative group rounded-3xl overflow-hidden shadow-xl aspect-[4/3]"
                        >
                            <img
                                src={photo.url}
                                alt={photo.caption}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {photo.caption}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

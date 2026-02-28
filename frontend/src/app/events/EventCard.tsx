"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Link as LinkIcon, Users, ArrowRight } from "lucide-react";

interface Speaker {
    name: string;
    designation: string;
    photo: string;
}

interface EventCardProps {
    title: string;
    description: string;
    banner: string;
    date: string;
    time: string;
    location: string;
    isOnline: boolean;
    registrationLink: string;
    speakers: Speaker[];
}

export default function EventCard({
    title,
    description,
    banner,
    date,
    time,
    location,
    isOnline,
    registrationLink,
    speakers,
}: EventCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-zinc-800 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
            {/* Banner */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={banner}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${isOnline
                            ? "bg-green-500/90 text-white backdrop-blur-md"
                            : "bg-blue-600/90 text-white backdrop-blur-md"
                        }`}>
                        {isOnline ? "Online" : "Offline"}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8">
                <div className="flex flex-wrap gap-4 mb-6 text-sm font-medium text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-zinc-800/50 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-zinc-700">
                        <Calendar className="w-4 h-4 text-indigo-500" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-zinc-800/50 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-zinc-700">
                        <Clock className="w-4 h-4 text-indigo-500" />
                        <span>{time}</span>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3 leading-relaxed">
                    {description}
                </p>

                {/* Location/Link */}
                <div className="flex items-start gap-3 mb-8 text-sm font-semibold p-4 bg-slate-50 dark:bg-zinc-800/30 rounded-2xl border border-slate-100 dark:border-zinc-700/50">
                    {isOnline ? (
                        <LinkIcon className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                    ) : (
                        <MapPin className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                    )}
                    <span className="text-slate-700 dark:text-slate-300">
                        {location}
                    </span>
                </div>

                {/* Speakers Preview */}
                {speakers.length > 0 && (
                    <div className="mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-4 flex items-center gap-2">
                            <Users className="w-3.5 h-3.5" /> Featured Speakers
                        </h4>
                        <div className="flex -space-x-3 overflow-hidden">
                            {speakers.map((speaker, idx) => (
                                <div key={idx} className="relative group/speaker" title={`${speaker.name} - ${speaker.designation}`}>
                                    <img
                                        className="inline-block h-10 w-10 rounded-full ring-4 ring-white dark:ring-zinc-900 object-cover"
                                        src={speaker.photo}
                                        alt={speaker.name}
                                    />
                                </div>
                            ))}
                            {speakers.length > 3 && (
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-zinc-800 text-xs font-bold text-slate-600 dark:text-slate-400 ring-4 ring-white dark:ring-zinc-900">
                                    +{speakers.length - 3}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Footer Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-zinc-800">
                    <a
                        href={registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:gap-3 transition-all duration-300"
                    >
                        Register Now <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

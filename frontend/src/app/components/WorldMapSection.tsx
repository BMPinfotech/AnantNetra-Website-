"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function WorldMapSection() {
    const [activeMarker, setActiveMarker] = useState<number | null>(null);

    const locations = [
        {
            id: 1,
            name: "Tokyo, Japan",
            coordinates: [139.6917, 35.6895],
            color: "#ec4899", // Pink
            address: (
                <>
                    <p className="font-semibold text-slate-900 dark:text-white">Sakura Heights, 5-12-8 Shinjuku</p>
                    <p>Shinjuku-ku, Tokyo 160-0022, Japan</p>
                </>
            ),
        },
        {
            id: 2,
            name: "Berlin, Germany",
            coordinates: [13.4050, 52.5200],
            color: "#eab308", // Yellow
            address: (
                <>
                    <p className="font-semibold text-slate-900 dark:text-white">Friedrichstraße 128</p>
                    <p>10117 Berlin, Germany</p>
                </>
            ),
        },
        {
            id: 3,
            name: "Jaipur, India",
            coordinates: [75.7873, 26.9124],
            color: "#a855f7", // Purple
            address: (
                <>
                    <p className="font-semibold text-slate-900 dark:text-white">Rajesh Thakur Home, Ghati Karolan</p>
                    <p>Jagatpura, Jaipur, India</p>
                </>
            ),
        },
    ];

    return (
        <section className="w-full bg-white dark:bg-black py-24 relative overflow-hidden flex flex-col items-center justify-center min-h-screen transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto px-4 w-full relative z-20 flex flex-col items-center">

                {/* Heading */}
                <div className="text-center mb-10 md:mb-20 w-full">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        Our Growing Footprint
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
                    />
                </div>

                {/* Map & Content Container */}
                <div className="relative w-full flex flex-col items-center justify-center">

                    {/* Size Container for Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full h-[300px] md:h-[600px] lg:h-[700px] flex items-center justify-center"
                    >
                        <ComposableMap
                            projectionConfig={{ scale: 220, center: [20, 0] }}
                            style={{ width: "100%", height: "100%" }}
                        >
                            <Geographies geography={geoUrl}>
                                {({ geographies }: { geographies: any[] }) =>
                                    geographies.map((geo: any) => (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            // Using Tailwind classes for sizing/layout, but fill/stroke need careful handling in react-simple-maps.
                                            // However, `className` on Geography applies to the path.
                                            // We use `fill-current` and set color on parent or use direct specific classes.
                                            className="fill-gray-200 dark:fill-[#1A1A1A] stroke-gray-300 dark:stroke-[#333] hover:fill-gray-300 dark:hover:fill-[#252525] outline-none transition-colors duration-300 ease-in-out"
                                            strokeWidth={0.5}
                                            style={{
                                                default: { outline: "none" },
                                                hover: { outline: "none" },
                                                pressed: { outline: "none" },
                                            }}
                                        />
                                    ))
                                }
                            </Geographies>

                            {/* Markers */}
                            {locations.map((loc) => (
                                <Marker key={loc.id} coordinates={loc.coordinates as [number, number]}
                                    onMouseEnter={() => setActiveMarker(loc.id)}
                                    className="cursor-pointer group"
                                >
                                    <g
                                        fill="none"
                                        stroke={loc.color}
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        transform="translate(-12, -24)"
                                    >
                                        <circle cx="12" cy="10" r="3" fill={loc.color} />
                                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                                    </g>
                                    <circle r={8} fill={loc.color} opacity={0.4} className="animate-ping" />
                                </Marker>
                            ))}
                        </ComposableMap>

                        {/* Address Cards Overlay */}
                        <div className="hidden md:flex flex-col gap-4 absolute bottom-10 left-10 z-30 pointer-events-none">
                            {locations.map((loc) => (
                                <motion.div
                                    key={loc.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + loc.id * 0.1 }}
                                    onMouseEnter={() => setActiveMarker(loc.id)}
                                    className={`pointer-events-auto bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-white/10 p-4 rounded-xl max-w-sm flex items-start gap-4 transition-all duration-300 hover:bg-white/90 dark:hover:bg-black/90 hover:scale-105 group shadow-lg ${activeMarker === loc.id ? 'ring-1 ring-blue-500/30' : ''}`}
                                >
                                    {/* Color Indicator */}
                                    <div
                                        className="w-3 h-3 rounded-full mt-1.5 shrink-0 shadow-sm"
                                        style={{ backgroundColor: loc.color }}
                                    />

                                    {/* Content */}
                                    <div className="text-left">
                                        <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">{loc.name}</h4>
                                        <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-normal">
                                            {loc.address}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>

                    {/* Mobile Address Cards */}
                    <div className="md:hidden w-full mt-10 grid grid-cols-1 gap-4 px-2">
                        {locations.map((loc) => (
                            <div
                                key={loc.id}
                                className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 rounded-2xl flex items-start gap-4 shadow-sm"
                            >
                                <div
                                    className="w-3 h-3 rounded-full mt-1.5 shrink-0"
                                    style={{ backgroundColor: loc.color }}
                                />
                                <div>
                                    <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-1">{loc.name}</h4>
                                    <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        {loc.address}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 text-center relative z-20 mt-20 w-full max-w-5xl border-t border-gray-200 dark:border-white/5 pt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col items-center group"
                    >
                        <h3 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-slate-500 mb-3 group-hover:scale-110 transition-transform duration-300">150+</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium tracking-wide">Experienced Security<br />Consultants</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center group"
                    >
                        <h3 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-slate-500 mb-3 group-hover:scale-110 transition-transform duration-300">400+</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium tracking-wide">Active<br />Engagements</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col items-center group"
                    >
                        <h3 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-slate-500 mb-3 group-hover:scale-110 transition-transform duration-300">10+</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium tracking-wide">Years of Average Experience<br />Per Consultant</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

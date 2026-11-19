"use client";
import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const locations = [
    {
        id: 1,
        name: "Tokyo, Japan",
        coordinates: [139.7034, 35.6939],
        color: "#9b8bbf", // Lavender
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.6939,139.7034",

    },
    {
        id: 2,
        name: "Berlin, Germany",
        coordinates: [13.3874, 52.5208],
        color: "#f5f3f8", // Brand text
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=52.5208,13.3874",

    },
    {
        id: 3,
        name: "Jaipur, India",
        coordinates: [75.8758587, 26.8547146],
        color: "#f47b35", // Accent
        googleMapsUrl: "https://www.google.com/maps?q=26.8547146,75.8758587&z=17&hl=en",

    },
];

const WorldMapSection = () => {
    const [activeMarker, setActiveMarker] = useState<number | null>(null);

    return (
        <section id="world-map-section" className="w-full bg-brand-ink py-24 relative overflow-hidden flex flex-col items-center justify-center min-h-screen transition-colors duration-300">
            <div className="max-w-350 mx-auto px-4 w-full relative z-20 flex flex-col items-center">

                <div className="text-center mb-1 md:mb-5 w-full ">
                    <h2 className="text-4xl md:text-6xl font-bold text-brand-text mb-6 tracking-tight animate-fade-in-up">
                        Our Growing Footprint
                    </h2>

                </div>

                <div className="relative w-full flex flex-col items-center justify-center">

                    <div className="relative w-full h-75 md:h-150 lg:h-175 flex items-center justify-center animate-scale-in">
                        <ComposableMap
                            projectionConfig={{ scale: 220, center: [20, 0] }}
                            style={{ width: "100%", height: "100%" }}
                        >
                            {React.useMemo(() => (
                                <Geographies geography={geoUrl}>
                                    {({ geographies }: { geographies: any[] }) =>
                                        geographies.map((geo: any) => (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                className="fill-[#272238] stroke-[#3a3352] hover:fill-[#332c49] outline-none transition-colors duration-300 ease-in-out"
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
                            ), [])}

                            {locations.map((loc) => (
                                <Marker key={loc.id} coordinates={loc.coordinates as [number, number]}
                                    onMouseEnter={() => setActiveMarker(loc.id)}
                                    className="cursor-pointer group"
                                    onMouseLeave={() => setActiveMarker(null)}
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
                                    {activeMarker === loc.id && (
                                        <g pointerEvents="none">
                                            <text
                                                textAnchor="middle"
                                                y="-35"
                                                style={{
                                                    fontFamily: 'system-ui',
                                                    fill: loc.color,
                                                    fontSize: '14px',
                                                    fontWeight: 'bold',
                                                    textShadow: '0px 2px 4px rgba(0,0,0,0.8)'
                                                }}
                                            >
                                                {loc.name}
                                            </text>
                                        </g>
                                    )}
                                </Marker>
                            ))}
                        </ComposableMap>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default React.memo(WorldMapSection);

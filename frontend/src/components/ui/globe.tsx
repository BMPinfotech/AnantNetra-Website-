"use client";
import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { cn } from "@/lib/utils";

export default function Globe({
    className,
    markers = [],
}: {
    className?: string;
    markers?: { location: [number, number]; size: number }[];
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: markers,
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.01;
            },
        });

        return () => {
            globe.destroy();
        };
    }, [markers]);

    return (
        <div
            className={cn(
                "flex items-center justify-center z-[10] w-full max-w-[600px] aspect-square mx-auto",
                className
            )}
        >
            <canvas
                ref={canvasRef}
                style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "100%",
                    aspectRatio: "1",
                }}
            />
        </div>
    );
}

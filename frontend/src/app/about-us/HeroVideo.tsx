"use client";
import React, { useState, useEffect } from "react";

interface Particle {
  id: number;
  left: number;
  top: number;
  delay: number;
  opacity: number;
}

const HeroVideo = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const generatedParticles: Particle[] = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.8 + 0.2,
    }));
    setParticles(generatedParticles);
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full h-auto md:h-[95vh] overflow-hidden rounded-b-3xl">

      {/* Background Video */}
      <video
        src="/video_main.webm"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-auto md:h-full object-contain md:object-cover rounded-2xl"
        draggable={false}
      />

      {/* Soft gradient fade on bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-64 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

      {/* Blue atmospheric glow */}
      <div className="absolute top-[25%] md:top-[30%] left-[35%] md:left-[40%] w-80 h-80 md:w-125 md:h-125 bg-blue-500/20 blur-[120px] md:blur-[160px] rounded-full pointer-events-none"></div>

      {/* Light floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/70 rounded-full animate-[floatUp_8s_linear_infinite]"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              opacity: particle.opacity,
            }}
          ></div>
        ))}
      </div>

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0px) scale(1);
          }
          100% {
            transform: translateY(-120px) scale(1.2);
          }
        }
      `}</style>

    </section>
  );
};

export default HeroVideo;
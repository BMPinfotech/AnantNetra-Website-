"use client";
import React from "react";

const HeroVideo = () => {
  return (
    <section className="relative w-full h-[95vh] overflow-hidden rounded-b-3xl">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video_two.mp4" type="video/mp4" />
      </video>

      {/* Soft gradient fade on bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

      {/* Blue atmospheric glow */}
      <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full pointer-events-none"></div>

      {/* Light floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/70 rounded-full animate-[floatUp_8s_linear_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.8 + 0.2,
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

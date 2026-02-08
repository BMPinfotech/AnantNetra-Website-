"use client";
import React, { useId } from "react";

export function CoreValues() {
  return (
    <section className="relative py-28 lg:py-44 overflow-visible">

      {/* FULL-WIDTH BACKGROUND DECOR */}
      <BackgroundDecor />

      {/* CONTENT WRAPPER */}
      <div className="relative z-20 max-w-7xl mx-auto px-4">

        {/* ---- HEADING ---- */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-medium">
            Our Core Values
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white leading-tight">
            What Defines Our Excellence
          </h2>
        </div>

        {/* ---- GRID ---- */}
        <div
          className="
            relative z-20
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-10 md:gap-8
          "
        >
          {grid.map((feature) => (
            <div
              key={feature.title}
              className="
                group relative
                bg-gradient-to-b 
                from-neutral-100/90 dark:from-neutral-900/90
                to-white/40 dark:to-neutral-950/40
                p-8 md:p-7
                rounded-3xl
                overflow-hidden

                min-h-[330px] 

                transition-all duration-300
                hover:shadow-xl hover:-translate-y-1
              "
            >
              {/* GRID PATTERN */}
              <Grid size={22} />

              <h3
                className="
                  text-lg font-semibold 
                  text-neutral-800 dark:text-white 
                  relative z-20 leading-snug
                  group-hover:text-blue-500 
                  transition-colors
                "
              >
                {feature.title}
              </h3>

              <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-base leading-relaxed relative z-20">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ FULL-WIDTH BACKGROUND DECOR ------------------ */

function BackgroundDecor() {
  return (
    <div
      className="
        absolute inset-0 -z-10
        left-1/2 -translate-x-1/2
        w-[160vw] h-full
        overflow-visible
      "
    >

      {/* THREAD WAVE */}
      <svg
        className="
          absolute top-[-100px] left-1/2 -translate-x-1/2
          w-[1500px] h-[650px]
          opacity-[0.22]
        "
        viewBox="0 0 1500 650"
        fill="none"
      >
        <path
          d="
            M0 320 
            Q 420 180 750 320 
            T 1500 320
          "
          stroke="url(#threadGradient)"
          strokeWidth="2"
        />

        <defs>
          <linearGradient id="threadGradient" x1="0" y1="0" x2="1500" y2="0">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.35" />
          </linearGradient>
        </defs>
      </svg>

      {/* SOFT BLUE GLOW LEFT */}
      <div
        className="
          absolute bottom-[-60px] left-[-200px]
          w-[650px] h-[650px]
          bg-blue-500/20 blur-[150px]
        "
      />

      {/* SOFT BLUE GLOW RIGHT */}
      <div
        className="
          absolute top-[40px] right-[-220px]
          w-[550px] h-[550px]
          bg-blue-400/20 blur-[170px]
        "
      />
    </div>
  );
}

/* ------------------ GRID PATTERN ------------------ */

export const Grid = ({ pattern, size = 22 }: { pattern?: number[][]; size?: number }) => {
  const p =
    pattern ??
    [
      [8, 2],
      [9, 3],
      [8, 4],
      [7, 1],
      [10, 2],
    ];

  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.22]">
      <GridPattern
        width={size}
        height={size}
        x="0"
        y="0"
        squares={p}
        className="
          absolute inset-0 h-full w-full 
          dark:fill-white/5 dark:stroke-white/5
          fill-black/5 stroke-black/5
        "
      />
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M0 ${height} V0 H${width}`} fill="none" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill={`url(#${patternId})`} />

      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([cx, cy]: any) => (
            <rect
              key={`${cx}-${cy}`}
              width={width + 1}
              height={height + 1}
              x={cx * width}
              y={cy * height}
              strokeWidth={0}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
const grid = [
  { 
    title: "Quality", 
    description: "We believe in delivering measurable, reliable, and high-quality solutions that drive long-term client satisfaction." 
  },
  { 
    title: "Integrity", 
    description: "Our work is guided by ethics, transparency, and accountability at every step of engagement." 
  },
  { 
    title: "Innovation", 
    description: "We continuously evolve by adopting emerging technologies and creative problem-solving techniques." 
  },
  { 
    title: "Professionalism", 
    description: "We maintain global business standards, fostering trust and confidence among our clients and partners." 
  },
  { 
    title: "Reliability", 
    description: "We deliver what we promise — on time, every time — with consistent performance and dependable support." 
  },
  { 
    title: "Collaboration", 
    description: "We grow together with our clients, turning partnerships into success stories." 
  },

  { 
    title: "Customer-Centric Approach", 
    description: "We put our clients at the heart of every decision, ensuring solutions that meet their goals and expectations." 
  },
  { 
    title: "Continuous Improvement", 
    description: "We refine our processes, upgrade our skills, and improve consistently to deliver better outcomes over time." 
  }
];


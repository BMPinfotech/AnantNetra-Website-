import React from "react";
import { Awards } from "./Awards";
import { Trophy, MicVocal, Medal } from "lucide-react";

export function ChooseUs() {
  const achievements = [
    {
      title: "Research Achievements",
      description: "Published 10+ research papers in top-tier AI and Cybersecurity journals, contributing to the global body of knowledge.",
      icon: <Medal className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Industry Seminars",
      description: "Keynote speakers at 5+ major tech conferences in 2024, sharing insights on Quantum Computing and Ethical AI.",
      icon: <MicVocal className="w-8 h-8 text-teal-600 dark:text-teal-400" />
    },
    {
      title: "Hackathon Winners",
      description: "Secured top positions in national level hackathons, demonstrating our team's agile problem-solving capabilities.",
      icon: <Trophy className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-600">
            Recognition & Industry Participation
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Our commitment to excellence and innovation has been recognized by industry leaders and peers alike.
          </p>
        </div>

        {/* Awards Slider */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-8 text-slate-800 dark:text-slate-200">
            Awards & Certifications
          </h3>
          <Awards />
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 hover:border-blue-500/50 transition-colors duration-300 relative group"
            >
              <div className="text-4xl mb-6 bg-slate-200 dark:bg-zinc-800 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from "react";
import { Awards } from "./Awards";
import { Cpu, Lightbulb, Rocket } from "lucide-react";

export function ChooseUs() {
  const achievements = [
    {
      title: "Technology Expertise",
      description: "Specialized expertise across Artificial Intelligence, Machine Learning, Cloud Computing, Web & Application Development, DevOps, and Cybersecurity, enabling us to build next-generation digital systems.",
      icon: <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Strategic Consulting",
      description: "Extensive business consulting experience that helps organizations automate workflows, optimize operational processes, and leverage technology for sustainable growth.",
      icon: <Lightbulb className="w-8 h-8 text-teal-600 dark:text-teal-400" />
    },
    {
      title: "Agile Delivery",
      description: "Agile, transparent, and collaborative development models that ensure faster project execution, improved scalability, and continuous innovation.",
      icon: <Rocket className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-slate-800 dark:text-slate-200">
            Industries We Serve
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
            At <strong>AnantNetra</strong>, we collaborate with organizations across diverse industries, delivering technology solutions that address sector-specific challenges and drive innovation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
            {[
              "Information Technology & Software Development",
              "Artificial Intelligence & Data Science",
              "Healthcare & Medical Technology",
              "Finance & FinTech Solutions",
              "Education & EdTech Platforms",
              "Cybersecurity & Digital Infrastructure",
              "Business Process Automation",
              "Research & Innovation Ecosystems"
            ].map((industry, i) => (
              <div key={i} className="flex items-center p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800 text-left hover:border-blue-500/30 transition-all group">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 group-hover:scale-125 transition-transform" />
                <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{industry}</span>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/10 dark:to-teal-900/10 border border-blue-100/50 dark:border-blue-800/20 mb-20">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Participation & Global Engagement</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
              "AnantNetra actively participates in international conferences, research collaborations, hackathons, and technology forums to contribute to the global innovation ecosystem. Our involvement in academic research, AI development programs, and industry events enables us to remain at the forefront of emerging technologies and continuously deliver cutting-edge solutions."
            </p>
          </div>
        </div>

        {/* Awards & Certifications Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-slate-200">
              Awards & Certifications
            </h3>
            {/* <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600  mx-auto" /> */}
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto mb-16">
            <div className="w-full lg:w-1/2 group">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-zinc-900 p-2">
                <img 
                  src="/images/Anantnetra-Technologies-Certificate.WebP" 
                  alt="AnantNetra Technologies Certificate"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-none" />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-bold mb-4 border border-blue-100 dark:border-blue-800">
                Official Recognition
              </span>
              <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
Certification of Appreciation
              </h4>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
               This certificate is awarded to <strong>AnantNetra Technologies</strong> by <strong>Indian Icon Awards</strong> in recognition of its ongoing contributions and untiring efforts in the field of technology.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  <span className="text-sm font-medium">Innovation Excellence</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium">Research-Driven Approach</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span className="text-sm font-medium">Global Technology Standards</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative pt-10 border-t border-slate-100 dark:border-zinc-800/50">
            <p className="text-center text-sm font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-[0.2em] mb-8">
              Certified Partner Ecosystem
            </p>
            <Awards />
          </div>
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

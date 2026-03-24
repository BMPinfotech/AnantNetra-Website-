"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Github, Sparkles } from "lucide-react";
import Footer from "@/app/components/Footer";

interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
    // socials: {
    //     linkedin?: string;
    //     twitter?: string;
    //     github?: string;
    //     email?: string;
    // };
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Parth Vyas",
        role: "Co-Founder & Chief Technology Officer",
        bio: "Technology leader specializing in AI, machine learning, and cybersecurity, driving the development of secure, scalable, and intelligent digital solutions for modern enterprises.",
        imageUrl: "/images/Parth-Image-1.WebP",
        
        // socials: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
        id: 2,
        name: "Puneet Soni",
        role: "Tech Operations Manager",
        bio: "AI and Automation specialist dedicated to optimizing technical operations and implementing intelligent workflow systems.",
        imageUrl: "/images/Puneet-Image.WebP",
        // socials: { linkedin: "#", github: "#" },
    },
    {
        id: 3,
        name: "Vaibhav Maheshwari",
        role: "Tech Operations Manager",
        bio: "Solution development experts focused on designing efficient, scalable, and performance-driven technology systems.",
        imageUrl: "/images/Vaibhav-Image.WebP",
        // socials: { linkedin: "#", github: "#" },
    },
    {
        id: 4,
        name: "Vamasikrishna",
        role: "AI Engineer",
        bio: "Passionate AI engineer focused on building intelligent systems that transform data into impactful real-world solutions.",
        imageUrl: "/images/Vamsi.WebP",
        // socials: { linkedin: "#", github: "#" },
    },
    {
        id: 5,
        name: "Khushi Kumari",
        role: "AI Engineer",
        bio: "Dedicated to developing advanced AI models and data-driven solutions that enable smarter decision-making.",
        imageUrl: "/images/Khushi Pic.WebP",
        // socials: { linkedin: "#", github: "#" },
    },
    {
        id: 6,
        name: "Vinit Kumar Soni",
        role: "Software Engineer",
        bio: "Software Developer focused on building reliable, scalable, and high-performance applications for modern digital platforms.",
        imageUrl: "https://ui-avatars.com/api/?name=Vinit+Kumar+Soni&size=300&background=c7d2fe&color=3730a3",
        // socials: { linkedin: "#", github: "#" },
    },
    {
        id: 7,
        name: "Disha Mali",
        role: "Sales Manager",
        bio: "Strategic sales professional focused on building strong client relationships and delivering technology solutions that create business value.",
        imageUrl: "/images/Disha-Image.WebP",
        // socials: { linkedin: "#", github: "#" },
    },
    {
        id: 8,
        name: "Khushi Deb",
        role: "Digital Marketing Specialist",
        bio: "Digital marketing strategist focused on building brand presence, audience engagement, and data-driven marketing campaigns.",
        imageUrl: "/images/Khushi deb.WebP",
        // socials: { linkedin: "#", github: "#" },
    },
    {
        id: 9,
        name: "Tanmai S",
        role: "Digital Marketing Specialist",
        bio: "Growth-focused digital marketer specializing in online campaigns, social media strategy, and performance marketing.",
        imageUrl: "/images/Tanmai.WebP",
        // socials: { linkedin: "#", github: "#" },
    },
];

export default function MeetTheTeam() {
    return (
        <main className="min-h-screen pt-24 pb-20 bg-white dark:bg-black">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-slate-50 dark:bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-md font-[800] mb-6 border border-blue-100 dark:border-blue-800">
Our People            </span>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                            Meet the Minds Behind <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600">
                                AnantNetra
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-normal text-left">
                            Our multi-disciplinary team of strategists and engineers is dedicated to bridging the gap between complex digital challenges and resilient, future-ready business solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="relative h-84 overflow-hidden rounded-2xl bg-slate-100 dark:bg-zinc-900">
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />

                                {/* Overlay on Hover */}
                               
                            </div>

                            <div className="mt-6 text-center lg:text-left">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3 uppercase tracking-wider">
                                    {member.role}
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>

                            {/* Decorative Accent */}
                            <div className="absolute -bottom-2 -right-2 w-12 h-12 border-r-2 border-b-2 border-indigo-500/0 group-hover:border-indigo-500/50 transition-all duration-300 rounded-br-2xl" />
                        </motion.div>
                    ))}
                </div>
            </section>



            <Footer />
        </main>
    );
}

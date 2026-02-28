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
    socials: {
        linkedin?: string;
        twitter?: string;
        github?: string;
        email?: string;
    };
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Dr. Anant Sharma",
        role: "Founder & CEO",
        bio: "Visionary leader with 15+ years of experience in Cyber Security and AI. Driven by the mission to secure the digital world.",
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop",
        socials: { linkedin: "#", twitter: "#", email: "anant@anantnetra.com" },
    },
    {
        id: 2,
        name: "Vikram Malhotra",
        role: "Chief Technology Officer",
        bio: "Pioneer in Blockchain and Quantum computing. Leads our R&D wing with a focus on future-proof technologies.",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop",
        socials: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
        id: 3,
        name: "Sarah Jenkins",
        role: "Head of Cyber Security",
        bio: "Expert in threat intelligence and incident response. Previously secured critical infrastructure for global enterprises.",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop",
        socials: { linkedin: "#", twitter: "#" },
    },
    {
        id: 4,
        name: "Amit Patel",
        role: "Director of IT Strategy",
        bio: "Specializes in digital transformation and cloud architecture. Helps businesses scale through innovative IT roadmaps.",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=400&auto=format&fit=crop",
        socials: { linkedin: "#", email: "amit@anantnetra.com" },
    },
    {
        id: 5,
        name: "Elena Rodriguez",
        role: "Lead UI/UX Designer",
        bio: "Crafting intuitive and beautiful digital experiences. Focuses on the intersection of human psychology and design.",
        imageUrl: "/images/Tanmai.WebP",
        socials: { linkedin: "#", github: "#" },
    },
    {
        id: 6,
        name: "Ankita Das",
        role: "Senior Security Analyst",
        bio: "Red-teaming specialist with a knack for finding vulnerabilities before the hackers do. Certified ethical hacker.",
        imageUrl: "/images/Khushi Pic.WebP",
        socials: { linkedin: "#", twitter: "#" },
    },
    {
        id: 7,
        name: "Priya Dey",
        role: "Customer Success Manager",
        bio: "Ensures our clients get the absolute best out of AnantNetra services. Dedicated to building long-term partnerships.",
        imageUrl: "/images/Khushi deb.WebP",
        socials: { linkedin: "#", email: "priya@anantnetra.com" },
    },
    {
        id: 8,
        name: "James Wilson",
        role: "Operations Manager",
        bio: "The engine behind our daily efficiency. James keeps our global projects running smoothly and on schedule.",
        imageUrl: "/images/Vamsi.WebP",
        socials: { linkedin: "#", twitter: "#" },
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
                        <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-bold mb-6 border border-indigo-100 dark:border-indigo-800">
                            Our People
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                             Meet the Minds Behind <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600">
                                AnantNetra
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
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
                            <div className="relative h-96 overflow-hidden rounded-2xl bg-slate-100 dark:bg-zinc-900">
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="flex gap-4 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white">
                                        {member.socials.linkedin && (
                                            <a href={member.socials.linkedin} className="hover:text-blue-400 transition-colors">
                                                <Linkedin size={20} />
                                            </a>
                                        )}
                                        {member.socials.twitter && (
                                            <a href={member.socials.twitter} className="hover:text-blue-400 transition-colors">
                                                <Twitter size={20} />
                                            </a>
                                        )}
                                        {member.socials.github && (
                                            <a href={member.socials.github} className="hover:text-blue-400 transition-colors">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {member.socials.email && (
                                            <a href={`mailto:${member.socials.email}`} className="hover:text-blue-400 transition-colors">
                                                <Mail size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
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

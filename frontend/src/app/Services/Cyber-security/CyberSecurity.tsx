
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SpotlightCard from "@/components/SpotlightCard";
import {
    Shield,
    Lock,
    Eye,
    Server,
    FileWarning,
    Wifi,
    Users,
    CheckCircle2,
    AlertTriangle,
    Siren
} from 'lucide-react';

const cyberSecurityServices = [
    {
        title: "Vulnerability Assessment",
        description: "Identify and quantify security vulnerabilities in your environment with our in-depth assessment services. We provide actionable remediation strategies.",
        icon: Eye,
        features: ["Automated Scanning", "Manual Verification", "Risk Prioritization", "Remediation Guidance"]
    },
    {
        title: "Penetration Testing",
        description: "Simulate real-world attacks to identify weaknesses in your systems. Our ethical hackers test your defenses to ensure they can withstand meaningful threats.",
        icon: Shield,
        features: ["Network Penetration", "Web App Testing", "Social Engineering", "Wireless Security"]
    },
    {
        title: "Security Audits & Compliance",
        description: "Ensure your organization meets industry standards and regulatory requirements. We guide you through ISO 27001, GDPR, HIPAA, and other compliance frameworks.",
        icon: FileWarning,
        features: ["Gap Analysis", "Policy Development", "Audit Preparation", "Regulatory Mapping"]
    },
    {
        title: "Incident Response",
        description: "Rapidly respond to and recover from cyber security incidents. Our team minimizes damage and restoration time to get your business back on track.",
        icon: Siren,
        features: ["24/7 Response Team", "Forensic Analysis", "Containment Strategy", "Post-Incident Review"]
    },
    {
        title: "Cloud Security",
        description: "Secure your cloud infrastructure across AWS, Azure, and GCP. We implement best practices to protect your data and applications in the cloud.",
        icon: Server,
        features: ["Cloud Configuration Review", "Identity Management", "Data Encryption", "Secure DevOps"]
    },
    {
        title: "Network Security",
        description: "Protect your network infrastructure from unauthorized access and attacks. We design and implement robust firewall, IDS/IPS, and VPN solutions.",
        icon: Wifi,
        features: ["Firewall Management", "Intrusion Detection", "Secure Remote Access", "Network Segmentation"]
    }
];

const benefits = [
    {
        icon: Lock,
        title: "Data Protection",
        description: "Safeguard sensitive customer and business data from breaches and unauthorized access."
    },
    {
        icon: AlertTriangle,
        title: "Risk Reduction",
        description: "Proactively identify and mitigate security risks before they can be exploited."
    },
    {
        icon: Users,
        title: "Trust & Reputation",
        description: "Build customer trust by demonstrating a commitment to security and privacy."
    },
    {
        icon: CheckCircle2,
        title: "Compliance Assurance",
        description: "Avoid penalties and legal issues by maintaining compliance with relevant regulations."
    }
];

function CyberSecurityPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950">
            {/* Hero Section */}
            <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center justify-center mb-6 mt-6">
                            <Shield className="w-12 h-12 text-blue-500 mr-3" />
                            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-100">
                                Cyber Security
                            </h1>
                        </div>
                        <p className="mt-6 text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Protecting your digital assets with advanced security solutions.
                            We defend your business against evolving cyber threats.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
                        {cyberSecurityServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.1,
                                        ease: [0.25, 1, 0.5, 1],
                                    }}
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    <SpotlightCard
                                        spotlightColor="rgba(18, 51, 157, 0.94)"
                                        className="group relative h-full flex flex-col bg-white dark:bg-neutral-900 backdrop-blur-lg rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl dark:shadow-black/30 transition-all duration-500 hover:border-slate-300 dark:hover:border-white/20 hover:scale-105 hover:-translate-y-2"
                                    >
                                        <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(196,181,253,0.15),transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                        <CardHeader className="flex flex-col z-20 items-start space-y-4 pt-8 px-6">
                                            <div className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-neutral-800">
                                                <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <CardTitle className="text-xl z-20 font-semibold text-slate-900 dark:text-slate-100">
                                                {service.title}
                                            </CardTitle>
                                        </CardHeader>

                                        <CardContent className="flex-grow z-20 pb-6 px-6">
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                                {service.description}
                                            </p>
                                            <ul className="space-y-2">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start text-xs text-slate-500 dark:text-slate-400">
                                                        <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 mt-0.5 shrink-0" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </SpotlightCard>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-neutral-900">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                            Why Choose Our Cyber Security?
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            We provide comprehensive protection tailored to your unique business needs.
                        </p>
                    </motion.div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:shadow-lg transition-shadow"
                                >
                                    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 w-fit mb-4">
                                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                                    className="relative overflow-hidden bg-gradient-to-r from-[#fc0915] via-[#ee3984] to-[#7800da] rounded-3xl p-12 text-white shadow-2xl shadow-[#ee3984]/50 hover:shadow-[#ee3984]/70 transition-shadow duration-500"

                        // className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 animate-gradient-x rounded-3xl p-12 text-white duration-500"
                    >
                        {/* Shine Effect Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Advanced Cyber Defense for Your Enterprise
                        </h2>
                        <p className="text-lg mb-8 text-blue-100">
                            Proactive threat detection and robust security architecture to safeguard your digital assets against evolving attacks.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                        >
                            Schedule Security Assessment
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default CyberSecurityPage;

"use client";
import React from "react";
import EventsHero from "./EventsHero";
import EventCard from "./EventCard";
import SpeakerSection from "./SpeakerSection";
import AgendaSection from "./AgendaSection";
import PastEventsGallery from "./PastEventsGallery";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const mockUpcomingEvents = [
    {
        id: 1,
        title: "Global Cybersecurity Summit 2026",
        description: "Join us for a deep dive into the next generation of digital defenses. Featuring keynotes from industry giants, hands-on workshops on AI-driven threat detection, and exclusive networking sessions. Learn how to safeguard your enterprise against emerging quantum-era threats.",
        banner: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
        date: "March 15, 2026",
        time: "10:00 AM - 04:00 PM IST",
        location: "Cyber City Convention Center, Building 5, Level 2, Hyderabad",
        isOnline: false,
        registrationLink: "https://anantnetra.com/register/cyber-summit-2026",
        speakers: [
            { name: "Dr. Anant Sharma", designation: "CEO, AnantNetra", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop" },
            { name: "Sarah Jenkins", designation: "Head of Security", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop" },
            { name: "Vikram Malhotra", designation: "CTO, AnantNetra", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop" },
            { name: "Elena Rodriguez", designation: "Lead Designer", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=400&auto=format&fit=crop" }
        ],
        agenda: [
            { time: "10:00 AM", activity: "Check-in & Welcome Coffee", description: "Collect your badges and enjoy networking with peers over morning refreshments." },
            { time: "11:00 AM", activity: "Keynote: Securing the Quantum Era", description: "Dr. Anant Sharma discusses the roadmap for universal digital defense mechanisms." },
            { time: "12:30 PM", activity: "Networking Lunch", description: "Enjoy a curated menu while discussing morning insights with industry leaders." },
            { time: "02:00 PM", activity: "Workshop: AI in Threat Detection", description: "Hands-on session using AnantNetra's proprietary AI tools to identify zero-day exploits." },
            { time: "03:30 PM", activity: "Panel Discussion & QA", description: "Closing thoughts and audience Q&A with our panel of experts." }
        ]
    },
    {
        id: 2,
        title: "AI-Powered Business Transformation Webinar",
        description: "Discover how Artificial Intelligence is reshaping modern business consultancy. We'll explore practical use cases where AI-driven insights have led to 40% growth in operational efficiency. Perfect for business leaders and tech enthusiasts alike.",
        banner: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
        date: "April 02, 2026",
        time: "03:00 PM - 05:00 PM UTC",
        location: "Join via Zoom (Link provided after registration)",
        isOnline: true,
        registrationLink: "https://anantnetra.com/webinar/ai-transform-2026",
        speakers: [
            { name: "Amit Patel", designation: "Director of IT Strategy", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=400&auto=format&fit=crop" },
            { name: "James Wilson", designation: "Operations Manager", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop" }
        ],
        agenda: [
            { time: "03:00 PM", activity: "Introduction to AI in SaaS", description: "Brief overview of current trends and market shifts." },
            { time: "03:30 PM", activity: "Case Study: Scaling with NetraSecure AI", description: "Detailed walkthrough of a real-world implementation." },
            { time: "04:30 PM", activity: "Live Interactive Tech Demo", description: "Seeing the platform in action with live data simulations." }
        ]
    },
    {
        id: 3,
        title: "Cloud Migration Strategy Workshop",
        description: "A hands-on workshop for IT managers looking to transition legacy systems to modern cloud architectures. We'll cover security best practices, cost optimization, and multi-cloud strategies.",
        banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
        date: "May 12, 2026",
        time: "09:00 AM - 01:00 PM IST",
        location: "Tech Hub Mumbai, Level 4, BKC",
        isOnline: false,
        registrationLink: "https://anantnetra.com/events/cloud-migration-2026",
        speakers: [
            { name: "Priya Das", designation: "CS Manager", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&auto=format&fit=crop" },
            { name: "Vikram Malhotra", designation: "CTO, AnantNetra", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop" }
        ],
        agenda: [
            { time: "09:00 AM", activity: "Opening Remarks", description: "Overview of the current cloud landscape." },
            { time: "10:00 AM", activity: "Security in the Cloud", description: "Protecting data during and after migration." },
            { time: "12:00 PM", activity: "Interactive Q&A Session", description: "Get answers to your specific architectural questions." }
        ]
    },
    {
        id: 4,
        title: "Blockchain Security & Smart Audit Expo",
        description: "Join international experts as we dissect the vulnerabilities in modern smart contracts. This expo will showcase the latest in automated auditing tools and decentralized security protocols.",
        banner: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
        date: "June 20, 2026",
        time: "11:00 AM - 06:00 PM GST",
        location: "Virtual Expo Hall - Metaverse Platform Alpha",
        isOnline: true,
        registrationLink: "https://anantnetra.com/events/blockchain-sec-2026",
        speakers: [
            { name: "Sarah Jenkins", designation: "Head of Security", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop" },
            { name: "Rajesh Kannan", designation: "Senior Analyst", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop" }
        ],
        agenda: [
            { time: "11:00 AM", activity: "The State of DeFi Security", description: "Exploring major hacks of 2025 and lessons learned." },
            { time: "01:00 PM", activity: "Smart Contract Audit Demo", description: "Live audit of a complex DEX contract." },
            { time: "04:00 PM", activity: "Future of Decentralized ID", description: "Impact of ZK-proofs on security and privacy." }
        ]
    }
];

const mockPastPhotos = [
    { url: "https://i.pinimg.com/1200x/54/3f/45/543f4540dea1f26058dc3213b59e8c77.jpg", caption: "Main Stage - TechConf 2025" },
    { url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop", caption: "Networking Hour - Mumbai Meetup" },
    { url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop", caption: "Workshop Session - Delhi HQ" },
    { url: "https://i.pinimg.com/736x/d8/83/7c/d8837c48fd4dace523ad8fd96282ba0c.jpg", caption: "Panel Discussion - Bengaluru" },
    { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop", caption: "Keynote Entry - Jaipur Summit" },
    { url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop", caption: "Future Tech Expo - 2025" },
    { url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop", caption: "Developer Hackathon - 2024" },
    { url: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop", caption: "Annual Leadership Meet" },
    { url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop", caption: "IT Strategy Round Table" }
];

export default function EventsPage() {
    const featuredEvent = mockUpcomingEvents[0];

    return (
        <main className="min-h-screen pt-20 bg-white dark:bg-black">
            <EventsHero />

            {/* Upcoming Events Section */}
            <section className="py-20 container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                            Upcoming <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Events</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">Discover what's happening next at AnantNetra.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {mockUpcomingEvents.map((event) => (
                        <EventCard key={event.id} {...event} />
                    ))}
                </div>
            </section>

            {/* Detailed Featured Event Info (Dynamic based on first event) */}
            <SpeakerSection speakers={featuredEvent.speakers} />
            <AgendaSection agenda={featuredEvent.agenda} />

            {/* Gallery Section */}
            <PastEventsGallery photos={mockPastPhotos} />

           

            <Footer />
        </main>
    );
}

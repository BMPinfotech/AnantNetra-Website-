"use client";
import React, { useState } from "react";
import EventsHero from "./EventsHero";
import EventCard from "./EventCard";
import RegistrationModal from "./RegistrationModal";
// import SpeakerSection from "./SpeakerSection";
import AgendaSection from "./AgendaSection";
// import PastEventsGallery from "./PastEventsGallery";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const mockUpcomingEvents = [
    {
        id: 1,
        title: "Global Cybersecurity Summit 2026",
        description: "Join us for a deep dive into the next generation of digital defenses. Featuring keynotes from industry giants, hands-on workshops on AI-driven threat detection, and exclusive networking sessions. Learn how to safeguard your enterprise against emerging quantum-era threats.",
        banner: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
        date: "Coming Soon",
        time: "To be Announced",
        location: "Cyber City Convention Center, Building 5, Level 2, Hyderabad",
        isOnline: false,
        registrationLink: "https://anantnetra.com/register/cyber-summit-2026",
        speakers: [
            { name: "Parth Vyas", designation: "CTO, AnantNetra", photo: "/images/Parth-Image.WebP" },
            { name: "Khushi Kumari", designation: "AI Engineer", photo: "/images/Khushi Pic.WebP" },
            { name: "Vamasikrishna", designation: "AI Engineer", photo: "/images/Vamsi.WebP" }
        ],
        agenda: [
            { time: "Topic 1", activity: "Keynote: Securing the Quantum Era", description: "Discussion on universal digital defense mechanisms and the upcoming roadmap." },
            { time: "Topic 2", activity: "AI in Threat Detection", description: "Discussion on using advanced AI tools to identify zero-day exploits and vulnerabilities." },
            { time: "Topic 3", activity: "Future of Decentralized Security", description: "Discussion on the impact of modern security paradigms on enterprise safety." },
            { time: "Session", activity: "Panel Discussion & QA", Closing: true, description: "Closing thoughts and audience Q&A with our panel of experts on various technical topics." }
        ]
    },
    {
        id: 2,
        title: "AI-Powered Business Transformation Webinar",
        description: "Discover how Artificial Intelligence is reshaping modern business consultancy. We'll explore practical use cases where AI-driven insights have led to 40% growth in operational efficiency. Perfect for business leaders and tech enthusiasts alike.",
        banner: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
        date: "Coming Soon",
        time: "To be Announced",
        location: "Join via Zoom (Link provided after registration)",
        isOnline: true,
        registrationLink: "https://anantnetra.com/webinar/ai-transform-2026",
        speakers: [
            { name: "Parth Vyas", designation: "CTO, AnantNetra", photo: "/images/Parth-Image.WebP" },
            { name: "Puneet Soni", designation: "Tech Operations Manager", photo: "/images/Puneet-Image.WebP" },
            { name: "Vaibhav Maheshwari", designation: "Tech Operations Manager", photo: "/images/Vaibhav-Image.WebP" }

        ],
        agenda: [
            { time: "Topic 1", activity: "Introduction to AI in SaaS", description: "Discussion of current trends and market shifts in AI." },
            { time: "Topic 2", activity: "Case Study: Scaling with NetraSecure AI", description: "Detailed walkthrough of a real-world implementation and discussion on improvements." },
            { time: "Topic 3", activity: "Live Interactive Tech Demo", description: "Discussion and Q&A on the platform's response to live data simulations." }
        ]
    },
    {
        id: 3,
        title: "Cloud Migration Strategy Workshop",
        description: "A hands-on workshop for IT managers looking to transition legacy systems to modern cloud architectures. We'll cover security best practices, cost optimization, and multi-cloud strategies.",
        banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
        date: "Coming Soon",
        time: "To be Announced",
        location: "Tech Hub Mumbai, Level 4, BKC",
        isOnline: false,
        registrationLink: "https://anantnetra.com/events/cloud-migration-2026",
        speakers: [
            { name: "Parth Vyas", designation: "CTO, AnantNetra", photo: "/images/Parth-Image.WebP" },
            { name: "Vinit Soni", designation: "Software Engineer", photo: "/images/Vinit-Image.WebP" },
            { name: "Disha Mali", designation: "Sales Manager", photo: "/images/Disha-Image.WebP" }

        ],
        agenda: [
            { time: "Topic 1", activity: "Opening Remarks & Strategy", description: "Discussion on current cloud landscape and strategy formulations." },
            { time: "Topic 2", activity: "Security in the Cloud", description: "Discussion on protecting data during and after migration, exploring modern architectures." },
            { time: "Topic 3", activity: "Interactive Q&A Session", description: "Extensive discussion and answers to specific architectural questions." }
        ]
    },
    {
        id: 4,
        title: "Blockchain Security & Smart Audit Expo",
        description: "Join international experts as we dissect the vulnerabilities in modern smart contracts. This expo will showcase the latest in automated auditing tools and decentralized security protocols.",
        banner: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
        date: "Coming Soon",
        time: "To be Announced",
        location: "Virtual Expo Hall - Metaverse Platform Alpha",
        isOnline: true,
        registrationLink: "https://anantnetra.com/events/blockchain-sec-2026",
        speakers: [
            { name: "Tanmai S", designation: "Digital Marketing Specialist", photo: "/images/Tanmai.WebP" },
            { name: "Parth Vyas", designation: "CTO, AnantNetra", photo: "/images/Parth-Image.WebP" }

        ],
        agenda: [
            { time: "Topic 1", activity: "The State of DeFi Security", description: "Discussion on major hacks of 2025 and exploring lessons learned." },
            { time: "Topic 2", activity: "Smart Contract Audit Demo", description: "Discussion alongside a live audit of a complex DEX contract." },
            { time: "Topic 3", activity: "Future of Decentralized ID", description: "Discussion about the impact of ZK-proofs on security and privacy." }
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEventTitle, setSelectedEventTitle] = useState("");

    const handleRegister = (title: string) => {
        setSelectedEventTitle(title);
        setIsModalOpen(true);
    };

    return (
        <main className="min-h-screen pt-20 bg-white dark:bg-black">
            <EventsHero />

            {/* Upcoming Events Section */}
            <section className="py-20 container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Upcoming <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600">Events</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">Discover what's happening next at AnantNetra.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {mockUpcomingEvents.map((event) => (
                        <EventCard key={event.id} {...event} onRegister={handleRegister} />
                    ))}
                </div>
            </section>

            {/* Detailed Featured Event Info (Dynamic based on first event) */}
            {/* <SpeakerSection speakers={featuredEvent.speakers} /> */}
            <AgendaSection agenda={featuredEvent.agenda} />

            {/* Gallery Section */}
            {/* <PastEventsGallery photos={mockPastPhotos} /> */}

            <RegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                eventTitle={selectedEventTitle}
            />

            <Footer />
        </main>
    );
}

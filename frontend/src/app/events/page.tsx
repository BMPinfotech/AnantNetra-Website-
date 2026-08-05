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

interface ISelectedEventRegister {
    fee: string,
    title: string,
    banner: string, 
    description: string
}

// const mockUpcomingEvents = [
//     {
//         id: 1,
//         title: "Jaipur startup networking meetup",
//         description: "Connect with ambitious founders, entrepreneurs, and business owners to exchange ideas, build meaningful relationships, and grow together. Share your journey, gain valuable insights, and become part of Jaipur's thriving startup ecosystem.",
//         banner: "/event/global_cybersecurity.webp",
//         date: "Coming Soon",
//         fee: "399",
//         time: "To be Announced",
//         location: "Jaipur, Rajasthan, India",
//         isOnline: false,
//         registrationLink: "https://anantnetra.com/register/cyber-summit-2026",
//         speakers: [
//             { name: "Parth Vyas", designation: "CTO, AnantNetra", photo: "/images/Parth-Image.WebP" },
//             { name: "Khushi Kumari", designation: "AI Engineer", photo: "/images/Khushi Pic.WebP" },
//             { name: "Vamasikrishna", designation: "AI Engineer", photo: "/images/Vamsi.WebP" }
//         ],
//         agenda: [
//             { time: "Topic 1", activity: "Keynote: Securing the Quantum Era", description: "Discussion on universal digital defense mechanisms and the upcoming roadmap." },
//             { time: "Topic 2", activity: "AI in Threat Detection", description: "Discussion on using advanced AI tools to identify zero-day exploits and vulnerabilities." },
//             { time: "Topic 3", activity: "Future of Decentralized Security", description: "Discussion on the impact of modern security paradigms on enterprise safety." },
//             { time: "Session", activity: "Panel Discussion & QA", Closing: true, description: "Closing thoughts and audience Q&A with our panel of experts on various technical topics." }
//         ]
//     },
//     {
//         id: 2,
//         title: "AI-Powered Business Transformation Webinar",
//         description: "Discover how Artificial Intelligence is reshaping modern business consultancy. We'll explore practical use cases where AI-driven insights have led to 40% growth in operational efficiency. Perfect for business leaders and tech enthusiasts alike.",
//         banner: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
//         date: "Coming Soon",
//         fee: "",
//         time: "To be Announced",
//         location: "Join via Zoom (Link provided after registration)",
//         isOnline: true,
//         registrationLink: "https://anantnetra.com/webinar/ai-transform-2026",
//         speakers: [
//             { name: "Parth Vyas", designation: "CTO, AnantNetra", photo: "/images/Parth-Image.WebP" },
//             { name: "Puneet Soni", designation: "Tech Operations Manager", photo: "/images/Puneet-Image.WebP" },
//             { name: "Vaibhav Maheshwari", designation: "Tech Operations Manager", photo: "/images/Vaibhav-Image.WebP" }

//         ],
//         agenda: [
//             { time: "Topic 1", activity: "Introduction to AI in SaaS", description: "Discussion of current trends and market shifts in AI." },
//             { time: "Topic 2", activity: "Case Study: Scaling with NetraSecure AI", description: "Detailed walkthrough of a real-world implementation and discussion on improvements." },
//             { time: "Topic 3", activity: "Live Interactive Tech Demo", description: "Discussion and Q&A on the platform's response to live data simulations." }
//         ]
//     },
//     {
//         id: 3,
//         title: "Cloud Migration Strategy Workshop",
//         description: "A hands-on workshop for IT managers looking to transition legacy systems to modern cloud architectures. We'll cover security best practices, cost optimization, and multi-cloud strategies.",
//         banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
//         date: "Coming Soon",
//         fee: "",
//         time: "To be Announced",
//         location: "Tech Hub Mumbai, Level 4, BKC",
//         isOnline: false,
//         registrationLink: "https://anantnetra.com/events/cloud-migration-2026",
//         speakers: [
//             { name: "Parth Vyas", designation: "CTO, AnantNetra", photo: "/images/Parth-Image.WebP" },
//             { name: "Vinit Soni", designation: "Software Engineer", photo: "/images/Vinit-Image.WebP" },
//             { name: "Disha Mali", designation: "Sales Manager", photo: "/images/Disha-Image.WebP" }

//         ],
//         agenda: [
//             { time: "Topic 1", activity: "Opening Remarks & Strategy", description: "Discussion on current cloud landscape and strategy formulations." },
//             { time: "Topic 2", activity: "Security in the Cloud", description: "Discussion on protecting data during and after migration, exploring modern architectures." },
//             { time: "Topic 3", activity: "Interactive Q&A Session", description: "Extensive discussion and answers to specific architectural questions." }
//         ]
//     },
//     {
//         id: 4,
//         title: "Blockchain Security & Smart Audit Expo",
//         description: "Join international experts as we dissect the vulnerabilities in modern smart contracts. This expo will showcase the latest in automated auditing tools and decentralized security protocols.",
//         banner: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
//         date: "Coming Soon",
//         fee: "",
//         time: "To be Announced",
//         location: "Virtual Expo Hall - Metaverse Platform Alpha",
//         isOnline: true,
//         registrationLink: "https://anantnetra.com/events/blockchain-sec-2026",
//         speakers: [
//             { name: "Tanmai S", designation: "Digital Marketing Specialist", photo: "/images/Tanmai.WebP" },
//             { name: "Parth Vyas", designation: "CTO, AnantNetra", photo: "/images/Parth-Image.WebP" }

//         ],
//         agenda: [
//             { time: "Topic 1", activity: "The State of DeFi Security", description: "Discussion on major hacks of 2025 and exploring lessons learned." },
//             { time: "Topic 2", activity: "Smart Contract Audit Demo", description: "Discussion alongside a live audit of a complex DEX contract." },
//             { time: "Topic 3", activity: "Future of Decentralized ID", description: "Discussion about the impact of ZK-proofs on security and privacy." }
//         ]
//     }
// ];
const mockUpcomingEvents = [
  {
    id: 1,
    title: "Jaipur startup networking meetup",
    description: "Connect with ambitious founders, entrepreneurs, and business owners to exchange ideas, build meaningful relationships, and grow together. Share your journey, gain valuable insights, and become part of Jaipur's thriving startup ecosystem.",
    banner: "/event/jaipur.webp",
    date: "15 AUGUST 2026",
    day: "FRIDAY",
    fee: "399",
    time: "5:00 PM – 8:00 PM",
    location: "JAIPUR, RAJASTHAN",
    whoCanJoin: "FOUNDERS, ENTREPRENEURS & BUSINESS OWNERS",
    isOnline: false,
    registrationLink: "https://anantnetra.com/register/cyber-summit-2026",
    highlights: [
      { title: "MEET & NETWORK", desc: "with like-minded founders", icon:"UsersIcon" },
      { title: "SHARE IDEAS", desc: "and get valuable feedback", icon:"Lightbulb" },
      { title: "DISCUSS REAL", desc: "business challenges & opportunities", icon:"MessageSquareText" },
      { title: "BUILD MEANINGFUL", desc: "connections & partnerships", icon:"UsersIcon" },
      { title: "GOODIES, SNACKS", desc: "& exciting experiences", icon:"Gift" }
    ],
    features: [
      "Networking with 20+ founders & entrepreneurs",
      "Access to exclusive founder community",
      "Snacks, refreshments & goodies",
      "Meaningful conversations & collaborations",
      "Event participation certificate (Digital)"
    ],
    termsAndConditions: [
      "Registration is mandatory to attend the event.",
      "Registration fee is non-refundable but transferable.",
      "Seats are limited and will be confirmed on a first-come, first-served basis.",
      "Please carry a valid ID proof.",
      "Organizers reserve the right to make changes to the agenda/venue if required.",
      "By registering, you agree to allow photos and videos to be captured during the event for community purposes."
    ],
    footerMessage: "Don't miss out on this opportunity to connect, learn and grow together!",
    contactEmail: "contact@anantnetra.com",
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
    fee: "",
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
    fee: "",
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
    fee: "",
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

const eventAgendaData = {
    title: "Event Agenda",
    subtitle: "A comprehensive schedule of sessions, workshops, and networking opportunities.",
    description: "Join an exclusive evening of meaningful conversations, founder networking, collaborative learning, and real-world business discussions. This event is designed to bring together entrepreneurs, startup founders, business owners, and innovators to share experiences, exchange ideas, and build valuable connections in a relaxed and engaging environment.",
    agenda: [
        {
            id: 1,
            activity: "Registration & Welcome Networking",
            description: "Arrive, collect your welcome kit, enjoy refreshments, and connect with fellow founders before the sessions begin."
        },
        {
            id: 2,
            activity: "Welcome Address & Community Introduction",
            description: "An introduction to the Founder Circle initiative, the vision behind the community, and how collaborative founder networks can accelerate business growth."
        },
        {
            id: 3,
            activity: "Founder Introductions",
            description: "Every participant will have the opportunity to introduce themselves, their company, what they are building, and the biggest challenge they are currently solving."
        },
        {
            id: 4,
            activity: "Founder Roundtable & Idea Discussions",
            description: "An open and collaborative discussion where founders can share business ideas, products, current challenges, and growth strategies. Participants will exchange practical insights, market experiences, and constructive feedback while learning from one another.",
            topics: [
                "Current Market Trends",
                "Building & Scaling Startups",
                "AI & Technology Opportunities",
                "Customer Acquisition & Marketing",
                "Product Development",
                "Founder Challenges",
                "Business Growth Strategies",
                "Networking & Collaboration"
            ]
        },
        {
            id: 5,
            activity: "Community Idea Validation & Expert Insights",
            description: "A collaborative session where founders receive valuable feedback from fellow entrepreneurs. Ideas are discussed openly, followed by practical suggestions, technical perspectives, and growth recommendations to help strengthen business direction."
        },
        {
            id: 6,
            activity: "Open Networking & Closing",
            description: "Continue conversations over refreshments, exchange contacts, build new partnerships, and become part of a growing founder community committed to innovation and mutual growth."
        }
    ],
    companyDetails: {
        name: "AnantNetra Technologies",
        tagline: "Beyond Technology. Towards Tomorrow.",
        email: "operations@anantnetra.com",
        website: "www.AnantNetra.com",
        callToAction: "Schedule a call with us today to explore how AnantNetra Technologies can support your startup's and growth strategy."
    }
};



export default function EventsPage() {
    const featuredEvent = mockUpcomingEvents[0];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEventTitle, setSelectedEventTitle] = useState("");
  const otherEvents = mockUpcomingEvents.slice(1); 
    const [selectedEvent, setSelectedEvent] = useState({
        fee: "",
        title: "",
        banner: "",
        description: ""
    });

    const handleRegister = ({ fee, title, banner, description}: ISelectedEventRegister) => {
        // setSelectedEventTitle(title);
        setSelectedEvent({
            fee,
            title,
            banner,
            description
        })
        setIsModalOpen(true);
    };

    console.log("Check Selected Event", selectedEvent)

    return (
        <main className="min-h-screen pt-20 bg-white dark:bg-black">
            <EventsHero />

            {/* Upcoming Events Section */}
            <section className="py-20 container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Upcoming <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-500 to-indigo-600">Events</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">Discover what's happening next at AnantNetra.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="h-1 w-24 bg-linear-to-r from-blue-600 to-indigo-600 rounded-full" />
                    </div>
                </div>

                {/* 1. Featured Spotlight Event (Jaipur Event) */}
                {featuredEvent && (
                    <EventCard {...featuredEvent} isFeatured={true} onRegister={handleRegister} />
                )}

                {/* 2. Other Upcoming Events in Equal Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mt-10">
                    {otherEvents.map((event) => (
                    <EventCard key={event.id} {...event} isFeatured={false} onRegister={handleRegister} />
                    ))}
                </div>
            </section>

            {/* Detailed Featured Event Info (Dynamic based on first event) */}
            {/* <SpeakerSection speakers={featuredEvent.speakers} /> */}
            <div className="content-visibility-auto"><AgendaSection agenda={eventAgendaData.agenda} /></div>

            {/* Gallery Section */}
            {/* <PastEventsGallery photos={mockPastPhotos} /> */}

            <RegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                // eventTitle={selectedEventTitle}
                selectedEvent={selectedEvent}
            />

            <Footer />
        </main>
    );
}

export const site = {
  name: "AnantNetra Technologies",
  shortName: "AnantNetra",
  legalName: "AnantNetra Technologies Private Limited",
  cin: "U62099RJ2026PTC112881",
  positioning: "AI, Cybersecurity & Product Engineering",
  tagline: "Beyond Technology. Towards Tomorrow.",
  description:
    "AnantNetra Technologies builds intelligent, secure and scalable technology solutions for a connected future.",
  email: "Contact@anantnetra.com",
  phone: "+91 87695 12003",
  phoneHref: "tel:+918769512003",
  location: "Jaipur, Rajasthan, India",
  copyright:
    "© 2026 ANANTNETRA TECHNOLOGIES PVT LTD. All rights reserved.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://anantnetra.com",
  social: {
    linkedin: "https://www.linkedin.com/company/anantnetra-technologies/",
    x: "https://x.com/anantnetratech",
  },
} as const;

export const mainNavigation = [
  {
    label: "Products",
    items: [
      {
        label: "QUANTIQEN",
        href: "/quantiqen",
        description: "Security Decision Infrastructure platform.",
        status: "Available" as const,
      },
      {
        label: "NetraSecure AI",
        href: "/netrasecure-ai",
        description: "AI-powered cybersecurity assistant.",
        status: "Coming Soon" as const,
      },
    ],
  },
  {
    label: "Services",
    items: [
      {
        label: "Cybersecurity",
        href: "/Services/Cyber-security",
        description: "Assessments, audits and practical security advisory.",
      },
      {
        label: "Technology Consulting",
        href: "/Services/IT-consult",
        description: "Strategy, engineering and cloud architecture.",
      },
      {
        label: "Incident Response",
        href: "/incident-response",
        description: "Report a security concern to our team.",
      },
    ],
  },
  {
    label: "Company",
    items: [
      {
        label: "About Us",
        href: "/about-us",
        description: "Who we are and what we are building.",
      },
      {
        label: "Events",
        href: "/events",
        description: "Upcoming activities and company updates.",
      },
      {
        label: "Contact Us",
        href: "/contact",
        description: "Talk to the AnantNetra team.",
      },
    ],
  },
] as const;

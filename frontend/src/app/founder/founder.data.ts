export const founderProfile = {
  name: "Parth Vyas",
  role: "Founder & Director — AnantNetra Technologies Private Limited",
  tagline:
    "Leading the development of intelligent technology across Artificial Intelligence, Cybersecurity and Enterprise Engineering.",
  bio: "Parth Vyas leads the vision and technology direction at AnantNetra Technologies Private Limited, driving the development of AI-powered solutions, cybersecurity products and enterprise technology. His focus lies in combining strong engineering with practical innovation to address evolving digital and business challenges.",
  photoUrl: "/founder/founder.webp",
  linkedinUrl: "https://www.linkedin.com/in/parth-vyas-769b06206/",
  email: "contact@anantnetra.com",
  organization: "AnantNetra Technologies Private Limited",
  primaryPlatform: "QUANTIQEN SDI",
  statusBadge: "FOUNDER & LEADERSHIP PROFILE",
  domainTags: [
    "Artificial Intelligence & Machine Learning",
    "Cybersecurity & Security Decision Infrastructure",
    "Product Strategy & System Architecture",
    "Enterprise Technology & Innovation",
  ],
  vision: {
    eyebrow: "01 / Vision & Origin",
    heading: "Why AnantNetra Was Built",
    summary:
      "A clear response to security noise, fragmented telemetry, and opaque AI systems.",
    paragraphs: [
      "AnantNetra was built on a simple observation: modern organizations are surrounded by security tools, alerts, and telemetry, yet still struggle to make confident decisions. The problem was never a lack of data — it was the lack of clarity, context, and evidence behind that data.",
      "We set out to build systems that move teams from noisy alerts to transparent, evidence-driven security and AI workflows. By connecting signals with business context and making reasoning visible, AnantNetra helps organizations understand what matters, why it matters, and what to do next.",
    ],
    quote:
      "The future of security is not more alerts — it is clearer decisions, backed by evidence and built with trust.",
  },
  focusAreas: [
    {
      id: "ai-ml",
      title: "Artificial Intelligence & Machine Learning",
      description:
        "Driving AI-powered solutions that combine strong engineering with practical innovation to solve complex digital and business challenges.",
    },
    {
      id: "cybersecurity-sdi",
      title: "Cybersecurity & Security Decision Infrastructure",
      description:
        "Leading the development of cybersecurity products and decision infrastructure, including QUANTIQEN, to help organizations make confident, evidence-driven security decisions.",
    },
    {
      id: "product-architecture",
      title: "Product Strategy & System Architecture",
      description:
        "Shaping product direction and scalable system architecture that align technical execution with long-term business and security goals.",
    },
    {
      id: "enterprise-innovation",
      title: "Enterprise Technology & Innovation",
      description:
        "Building enterprise technology that addresses evolving digital challenges through resilient engineering, practical innovation, and operational clarity.",
    },
  ],
  principles: [
    {
      id: "transparency",
      number: "PRINCIPLE 01",
      title: "Radical Transparency",
      description:
        "Every decision should be explainable. We build systems where evidence, reasoning, and outcomes are visible — not hidden behind black-box outputs.",
    },
    {
      id: "security-default",
      number: "PRINCIPLE 02",
      title: "Security by Default",
      description:
        "Security is not a feature added later. It is a foundational requirement embedded into architecture, workflows, and every product decision from day one.",
    },
    {
      id: "signal-over-noise",
      number: "PRINCIPLE 03",
      title: "Signal Over Noise",
      description:
        "More data does not mean more clarity. We focus on surfacing the signals that matter, reducing noise, and enabling teams to act with precision.",
    },
  ],
  ctas: {
    primary: {
      label: "Connect With Leadership",
      href: "mailto:contact@anantnetra.com",
    },
    secondary: {
      label: "Company Overview",
      href: "/about-us",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/parth-vyas-769b06206/",
    },
    bottom: {
      heading: "Explore Our Security Architecture or Start a Conversation",
      description:
        "Learn how QUANTIQEN turns security signals into confident decisions, or connect with our team to discuss your security challenges.",
      primary: {
        label: "Explore QUANTIQEN",
        href: "/quantiqen",
      },
      secondary: {
        label: "Contact Us",
        href: "/contact",
      },
    },
  },
} as const;

export type FounderProfile = typeof founderProfile;

import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Events | AnantNetra Technologies",
  description:
    "Explore AnantNetra Technologies events, workshops, and community activities focused on AI, cybersecurity, and technology innovation.",
  path: "/events",
  keywords: [
    "AnantNetra Technologies events",
    "Cybersecurity events",
    "AI events",
    "Technology workshops",
  ],
});

export default function EventsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

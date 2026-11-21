import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Incident Response | AnantNetra Technologies",
  description:
    "Report a security concern to AnantNetra Technologies. Our incident response page helps organizations share incident details for timely security assistance.",
  path: "/incident-response",
  keywords: [
    "Incident Response",
    "Cybersecurity incident reporting",
    "Security assistance",
    "AnantNetra Technologies",
  ],
});

export default function IncidentResponseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

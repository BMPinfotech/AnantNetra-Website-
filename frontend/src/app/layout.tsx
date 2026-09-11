import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import ClientNavbar from "./components/Navbar";
import Script from "next/script";
import { ThemeToggle } from "./components/DynamicThemeToggle";
import { Chatbot } from "./components/DynamicChatbot";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://anantnetra.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "AnantNetra — AI-Driven Solutions for a Smarter & Secure Future",
  description:
    "Transforming enterprises with next-generation Artificial Intelligence, Cybersecurity and IT Consulting — driving innovation, resilience and sustainable growth.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "AnantNetra — AI-Driven Solutions for a Smarter & Secure Future",
    description:
      "Transforming enterprises with next-generation Artificial Intelligence, Cybersecurity and IT Consulting — driving innovation, resilience and sustainable growth.",
    url: "https://anantnetra.com",
    siteName: "AnantNetra",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnantNetra — AI-Driven Solutions for a Smarter & Secure Future",
    description:
      "Transforming enterprises with next-generation Artificial Intelligence, Cybersecurity and IT Consulting — driving innovation, resilience and sustainable growth.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://ui-avatars.com" />
        <link rel="preload" as="video" href="/video_Three-1.WebM" type="video/webm" />
        <link rel="preload" as="video" href="/video_main.webm" type="video/webm" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClientNavbar />
          <ThemeToggle />
          <Chatbot />

          <main>
            {children}
          </main>

          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-LTLXFVJJB9"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LTLXFVJJB9');
          gtag('config', 'AW-18410037235');
        `}
          </Script>
        </ThemeProvider>
      </body>
    </html>
  );
}

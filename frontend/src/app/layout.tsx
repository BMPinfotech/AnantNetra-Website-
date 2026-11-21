import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import Script from "next/script";

import { site } from "@/lib/site";

import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import ClientNavbar from "./components/Navbar";
import { Chatbot } from "./components/DynamicChatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const metadataTitle = `${site.name} — ${site.positioning}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: metadataTitle,
  description:
    "AnantNetra Technologies builds AI-powered products, cybersecurity solutions and scalable digital systems that help businesses solve complex challenges and operate with confidence.",
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: metadataTitle,
    description:
      "AnantNetra Technologies builds AI-powered products, cybersecurity solutions and scalable digital systems that help businesses solve complex challenges and operate with confidence.",
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/logo.WebP",
        width: 1200,
        height: 630,
        alt: `${site.name} logo`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "AnantNetra Technologies builds AI-powered products, cybersecurity solutions and scalable digital systems that help businesses solve complex challenges and operate with confidence.",
    images: ["/logo.WebP"],
  },
  keywords: [
    "AnantNetra Technologies",
    "Artificial Intelligence Solutions",
    "Cybersecurity Solutions",
    "Security Decision Infrastructure",
    "Security API",
    "AI Product Development",
    "Technology Consulting",
    "Software Engineering",
  ],
  robots: {
    index: true,
    follow: true,
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://ui-avatars.com" />
        <link rel="preload" as="video" href="/video_Three-1.WebM" type="video/webm" />
        <link rel="preload" as="video" href="/video_main.webm" type="video/webm" />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-ink"
          >
            Skip to content
          </a>

          <ClientNavbar />
          <Chatbot />

          <main id="main-content">{children}</main>

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

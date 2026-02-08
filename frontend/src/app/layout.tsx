import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import ClientNavbar from "./components/Navbar";
import Script from "next/script";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AnantNetra",
  description: "developed by AnantNetra Technologies",
  icons: {
    icon: "/favicon.png", // or "/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>

    </head>
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
    `}
  </Script>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ClientNavbar />
        
        <main>
        {children}
        </main>
        
      </ThemeProvider>
      </body>
    </html>
  );
}

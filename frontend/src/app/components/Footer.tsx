"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  Phone,
  MapPin,
  Facebook,
  Instagram
} from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import { motion } from "framer-motion";
import PreFooterCTA from "./PreFooterCTA";

function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Component ko mount hone ke baad render allow karenge, 
    // isse initial page load time aur rendering fast hoti hai.
    setMounted(true);
  }, []);

  const container = useMemo(() => ({
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }), []);

  const item = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }), []);

  if (!mounted) {
    // Return an initial lightweight placeholder structure
    return <footer className="w-full min-h-[400px] bg-slate-50 dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-neutral-800 font-sans relative overflow-hidden"></footer>;
  }

  return (
    <footer className="w-full bg-slate-50 dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-neutral-800 font-sans relative overflow-hidden">
      {/* Dynamic Background Elements */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" /> */}



      <Separator className="bg-slate-200 dark:bg-white/5 opacity-50" />

      {/* Main Footer Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8"
      >

        {/* Brand Column (Span 4) */}
        <motion.div variants={item} className="lg:col-span-4 space-y-6">
          <Link href="/" className="inline-block group">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <img src="/darkLogo.svg" alt="AnantNetra" className="dark:hidden w-full h-full object-contain" />
                <img src="/lightLogo.svg" alt="AnantNetra" className="hidden dark:block w-full h-full object-contain" />
              </div>
              <h2  className="text-2xl font-bold  max-w-5xl w-[95%] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm shadow-white/5 shadow-lg rounded-full py-1">
                AnantNetra
              </h2>
            </div>
          </Link>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
            Beyond Technology. Towards Tomorrow.<br />
            Designing intelligent, ethical, and secure digital solutions that empower enterprises, startups, and communities globally.
          </p>

          <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-purple-500" />
              <span>Jaipur, Rajasthan, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-500" />
              <a href="mailto:contact@anantnetra.com" className="hover:text-purple-500 transition-colors">contact@anantnetra.com</a>
            </div>
            <div className="flex items-center gap-2 ">
              <FaWhatsapp className="w-5 h-5 text-purple-500"  />
              <span>+91 87695 12003</span>
            </div>

          </div>

          <div className="flex gap-3">
            <SocialButton href="https://www.linkedin.com/company/anantnetra-technologies/" icon={<Linkedin />} label="LinkedIn" />
            <SocialButton href="https://x.com/anantnetratech" icon={<Twitter />} label="Twitter" />
            <SocialButton href="https://github.com" icon={<Github />} label="GitHub" />
            <SocialButton href="mailto:Services@anantnetra.com" icon={<Mail />} label="Email" />
          </div>
        </motion.div>

        {/* Services Column (Span 2) */}
        <motion.div variants={item} className="lg:col-span-2">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-6 text-lg">Services</h3>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <FooterLink href="/Services/IT-consult">IT Consultancy</FooterLink>
            <FooterLink href="/Services/Busniessconsult">Business Consultancy</FooterLink>
            <FooterLink href="/Services/Cyber-security">Cyber Security</FooterLink>
            {/* <FooterLink href="/Services">Digital Transformation</FooterLink>
            <FooterLink href="/Services">Cloud Solutions</FooterLink> */}
          </ul>
        </motion.div>

        {/* Solutions Column (Span 2) */}
        <motion.div variants={item} className="lg:col-span-2">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-6 text-lg">Solutions</h3>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <FooterLink href="/Services">Free Consultancy & Audit Call</FooterLink>
            <FooterLink href="/Services">IT Audit / Product / Service</FooterLink>
            <FooterLink href="/incident-response" className="text-pink-500 font-medium">Incident Response</FooterLink>
            <FooterLink href="/Services">NetraSecure AI</FooterLink>
          </ul>
        </motion.div>

        {/* Company Column (Span 2) */}
        <motion.div variants={item} className="lg:col-span-2">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-6 text-lg">Company</h3>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <FooterLink href="/about-us">About Us</FooterLink>
            <FooterLink href="/meet-the-team">Meet the Team</FooterLink>
            <FooterLink href="/events">Events</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </ul>
        </motion.div>

        {/* Resources Column (Span 2) */}
        <motion.div variants={item} className="lg:col-span-2">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-6 text-lg">Resources</h3>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <FooterLink href="/Services">Blog</FooterLink>
            <FooterLink href="/Services">Knowledge Base</FooterLink>
            <FooterLink href="/Services">White Papers</FooterLink>
            <FooterLink href="/Services">Press Releases</FooterLink>
          </ul>
        </motion.div>

      </motion.div>

      {/* Bottom Bar */}
      <div className="bg-slate-100 dark:bg-[#050505] py-6 border-t border-slate-200 dark:border-white/5">
        <div className="max-w-8xl mx-auto px-6 flex flex-col items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p className="text-center">©  2026 AnantNetra Technologies. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/PrivacyPolicy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/Terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/#world-map-section" className="hover:text-slate-900 dark:hover:text-white transition-colors">Sitemap</Link>
            {/* <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Cookies</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Components

function FooterLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <li>
      <Link
        href={href}
        className={`hover:text-purple-500 dark:hover:text-purple-400 transition-colors flex items-center gap-1 group ${className}`}
      >
        <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 text-purple-500">›</span>
        {children}
      </Link>
    </li>
  );
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full w-9 h-9 border-slate-300 dark:border-white/10 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300 dark:bg-white/5 dark:text-white"
      asChild
      aria-label={label}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-4 h-4" })}
      </a>
    </Button>
  );
}

export default Footer;

"use client";

import React from "react";
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
import { motion } from "framer-motion";

function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className="w-full bg-slate-50 dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-neutral-800 font-sans relative overflow-hidden">
      {/* Dynamic Background Elements */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" /> */}


      {/* Pre-Footer CTA */}
      <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 dark:from-neutral-900 dark:to-neutral-800 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-2xl"
        >
          {/* Abstract Shapes in CTA for visual interest */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Future?
            </h2>
            <p className="text-slate-300 text-lg">
              Join leading enterprises in transforming digital landscapes with robust security and intelligent solutions.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="rounded-full bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 hover:scale-105 transition-transform duration-300"
              asChild
            >
              <Link href="/#contact">
                Get Started Now <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/20 text-black dark:text-white hover:bg-white/10 hover:text-white px-8"
              asChild
            >
              <Link href="#HomePage">Explore Now <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </motion.div>
      </div>

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
              {/* Logo Placeholder - assuming images are available as per Navbar */}
              <div className="relative w-10 h-10">
                <img src="/darkLogo.svg" alt="AnantNetra" className="dark:hidden w-full h-full object-contain" />
                <img src="/lightLogo.svg" alt="AnantNetra" className="hidden dark:block w-full h-full object-contain" />
              </div>
              <h2 className="text-2xl font-bold  max-w-5xl w-[95%] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm shadow-white/5 shadow-lg rounded-full py-1">
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
              <a href="mailto:Services@anantnetra.com" className="hover:text-purple-500 transition-colors">Services@anantnetra.com</a>
            </div>
            {/* Add Phone if available, placeholder for now 
             <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-500" />
                <span>+91 123 456 7890</span>
             </div>
             */}
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
            <FooterLink href="/report-incident" className="text-pink-500 font-medium">Incident Response</FooterLink>
            <FooterLink href="/Services">NetraSecure AI</FooterLink>
          </ul>
        </motion.div>

        {/* Company Column (Span 2) */}
        <motion.div variants={item} className="lg:col-span-2">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-6 text-lg">Company</h3>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <FooterLink href="/about-us">About Us</FooterLink>
            <FooterLink href="/Services">Meet the Team</FooterLink>
            <FooterLink href="/Services">Events</FooterLink>
            <FooterLink href="/#contact">Contact Us</FooterLink>
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
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© {/*{new Date().getFullYear()}*/} 2023 AnantNetra Technologies. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/PrivacyPolicy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/Terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Sitemap</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Cookies</Link>
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

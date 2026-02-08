"use client"

import React from "react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Youtube, Mail } from "lucide-react"
import Link from "next/link"

function Footer() {

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Column 1 — Brand */}
        <div className="col-span-1 sm:col-span-2 space-y-3">
          <Link href="./"><h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            AnantNetra Technologies
          </h2>
          </Link>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm">
            Beyond Technology. Towards Tomorrow.  
            We design intelligent, ethical, and secure digital solutions 
            that empower enterprises, startups, and communities.
          </p>
          <div className="flex gap-3 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/company/anantnetra-technologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://x.com/anantnetratech?s=21" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            {/* <Button variant="ghost" size="icon" asChild>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5" />
              </a>
            </Button> */}
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:contact@anantnetra.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Column 2 — Services */}
        <div>
          <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
            <li><a href="#">Consultancy</a></li>
            <li><a href="#">Cyber Audit</a></li>
            <li><a href="#">Incident Response</a></li>
            <li><a href="#">IT Services</a></li>
            <li><a href="#">Customer Success</a></li>
          </ul>
        </div>

        {/* Column 3 — Company */}
        <div>
          <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
            <li><a href="/about-us">About Us</a></li>
            <li><a href="#">Meet the Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </div>

        {/* Column 4 — Resources */}
        <div>
          <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Knowledge Base</a></li>
            <li><a href="#">Press Releases</a></li>
            <li><a href="#">White Papers</a></li>
          </ul>
        </div>

        {/* Column 5 — Contact / Threat Advisory */}
        <div>
          <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
            <li><a href="#contact">Contact Form / Details</a></li>
            <li><a href="#">Talk to Sales</a></li>
            <li><a href="#">Book a Free Audit</a></li>
            <li><a href="#">Report an Incident</a></li>
          </ul>
        </div>
      </div>

      <Separator />

      {/* Bottom Bar */}
      <div className="w-full mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
        <p>© 2023 AnantNetra Technologies. All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link href="/PrivacyPolicy">Privacy Policy</Link>
          <span>|</span>
          <Link href="/Terms">Terms of Service</Link>
          <span>|</span>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

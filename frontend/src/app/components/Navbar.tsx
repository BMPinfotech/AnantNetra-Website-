"use client";

import React, { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./Theme-toggle";
import Link from "next/link";


function ClientNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Listen to scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Trigger after 50px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <header
  className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50
    transition-[width,background-color,backdrop-filter,box-shadow,padding] duration-500
    ${scrolled
      ? "max-w-5xl w-[95%] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm shadow-white/5 shadow-lg rounded-full py-1"
      : "w-full bg-background shadow-sm rounded-none top-0 py-3"
    }`}
>
      <nav
        className={`max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        {/* Logo or Brand */}
        
        <div>
        <img src="/darkLogo.svg" alt="" width="50" height="50" className="dark:hidden "/>
        <img src="/lightLogo.svg" alt="" width="50" height="50" className=" hidden dark:block "/>
        </div>
        {/* <div className="text-xl font-semibold">AnantNetra</div> */}
        <Link href="/" className="text-xl font-semibold">AnantNetra</Link>
         <ThemeToggle />

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="flex gap-4">
              {/* --- Services --- */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="w-auto min-w-[300px] p-6">
                  <div className="grid grid-cols-2 gap-6 text-sm">
                    <div>
                      <strong className="block mb-2">Consultancy</strong>
                      <ul className="space-y-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="#">IT Consultancy</a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="#">Business Consultancy</a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <strong className="block mb-2">IT Services</strong>
                      <ul className="space-y-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="/Services">Artificial Intelligence</Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/Services">Data Related Services</a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/Services">Development</a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/Services">APIs & Dashboards</a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-2 space-y-2">
                      <NavigationMenuLink asChild>
                        <a href="/Services">Cyber Audit</a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="/Services">Incident Response</a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="/Services">Customer Success</a>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* --- Solutions --- */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent className="w-auto min-w-[250px] p-6">
                  <ul className="space-y-2 text-sm">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/Services">Free Consultancy & Audit Call</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/Services">Cyber Audit</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/Services">IT Audit / Product / Service</a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* --- Platform --- */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
                <NavigationMenuContent className="w-auto min-w-[250px] p-6">
                  <ul className="space-y-2 text-sm">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="./">AnantNetra</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/Services">NetraSecure AI</a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* The next few will hide when scrolled */}
              {!scrolled && (
                <>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                    <NavigationMenuContent className="w-auto min-w-[250px] p-6">
                      <ul className="space-y-2 text-sm">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="/AboutUs">About Us</Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/Services">Meet the Team</a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/Services">Careers</a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/Services">Events</a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent className="w-auto min-w-[250px] p-6">
                      <div className="grid grid-cols-2 gap-6 text-sm">
                        <NavigationMenuLink asChild>
                          <a href="/Services">Blog</a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a href="/Services">Knowledge Base</a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a href="/Services">Press Releases</a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a href="/Services">Data Sheets</a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a href="/Services">White Papers</a>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </>
              )}

              {/* These last ones will always show */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Threat Advisory</NavigationMenuTrigger>
                <NavigationMenuContent className="w-auto min-w-[250px] p-6">
                  <ul className="space-y-2 text-sm">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/Services">Book a Free Audit</a>
                      </NavigationMenuLink>
                    </li>
                    <li className="pt-2 text-xs text-muted-foreground">
                      AnantNetra Technologies | Beyond technology. Towards
                      tomorrow.
                      <br />
                      Visit us at www.AnantNetra.com
                      <br />
                      Have questions? Schedule a call today.
                      <br />
                      <NavigationMenuLink asChild>
                        <a href="/Services">Report an Incident</a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Partners</NavigationMenuTrigger>
                <NavigationMenuContent className="w-auto min-w-[250px] p-6">
                  <ul className="space-y-2 text-sm">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/Services">Apply for Full-Time & Internship</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/Services">Apply for Accelerator</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/Services">Apply as an Investor</a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
                <NavigationMenuContent className="w-auto min-w-[250px] p-6">
                  <NavigationMenuLink asChild>
                    <a href="#contact">Contact Form / Details</a>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t shadow-sm">
          <ul className="flex flex-col p-4 space-y-3 text-sm">
            <li>
              <a href="/Services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/Services" className="hover:underline">
                Solutions
              </a>
            </li>
            <li>
              <a href="/Services" className="hover:underline">
                Platform
              </a>
            </li>
            <li>
              <a href="/Services" className="hover:underline">
                Company
              </a>
            </li>
            <li>
              <a href="/Services" className="hover:underline">
                Resources
              </a>
            </li>
            <li>
              <a href="/Services" className="hover:underline">
                Threat Advisory
              </a>
            </li>
            <li>
              <a href="/Services" className="hover:underline">
                Partners
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default ClientNavbar;

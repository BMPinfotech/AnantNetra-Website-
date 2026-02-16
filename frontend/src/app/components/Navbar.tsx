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
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


function ClientNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<
    | "services"
    | "solutions"
    | "platform"
    | "company"
    | "resources"
    | "threat"
    | "partners"
    | "contact"
    | null
  >(null);

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
      <div
        className={`w-full max-w-7xl mx-auto hidden md:flex justify-end items-center gap-8 px-6 py-2 text-sm font-bold tracking-wide transition-all duration-500 ${scrolled ? "h-0 opacity-0 overflow-hidden py-0" : "h-auto opacity-100"
          }`}
      >
        <Link
          href="/Services"
          className="bg-clip-text text-transparent bg-gradient-to-r from-[#fc4a82] via-purple-500 to-blue-600 hover:opacity-80 transition-opacity"
        >
          Report an Incident
        </Link>
        <Link
          href="/Services"
          className="bg-clip-text text-transparent bg-gradient-to-r from-[#fc4a82] via-purple-500 to-blue-600 hover:opacity-80 transition-opacity"
        >
          Threat Advisory
        </Link>
        <Link
          href="/#contact"
          className="bg-clip-text text-transparent bg-gradient-to-r from-[#fc4a82] via-purple-500 to-blue-600 animate-gradient-x hover:opacity-80 transition-opacity"
        >
          Contact Us
        </Link>
      </div>

      <nav
        className={`max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-500 ${scrolled ? "py-2" : "py-1"
          }`}
      >
        {/* Logo or Brand */}

        <div className="flex items-center gap-2">
          <img src="/darkLogo.svg" alt="" width="50" height="50" className="dark:hidden " />
          <img src="/lightLogo.svg" alt="" width="50" height="50" className=" hidden dark:block " />

          <Link href="/" className="text-xl font-semibold">
            <span>AnantNetra</span>
          </Link>
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="flex gap-4">
              {/* --- Services --- */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="w-auto min-w-[250px] p-4">
                  <ul className="space-y-2 text-sm">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/Services/IT-consult" className="block p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">
                          <strong className="block font-medium">IT Consultancy</strong>
                          <span className="text-xs text-slate-500 dark:text-slate-400">Strategic planning & tech roadmaps</span>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/Services/Busniessconsult" className="block p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">
                          <strong className="block font-medium">Business Consultancy</strong>
                          <span className="text-xs text-slate-500 dark:text-slate-400">Optimizing operations & growth</span>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/Services/Cyber-security" className="block p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">
                          <strong className="block font-medium">Cyber Security</strong>
                          <span className="text-xs text-slate-500 dark:text-slate-400">Protecting your digital assets</span>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* --- Solutions --- */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent className="w-auto min-w-[250px] p-6">
                  <ul className="space-y-2 text-sm">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/#contact">Free Consultancy & Audit Call</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/Services/Cyber-security">Cyber Security</a>
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
                        <Link href="/">AnantNetra</Link>
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
                            <Link href="/about-us">About Us</Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/Services">Meet the Team</a>
                          </NavigationMenuLink>
                        </li>
                        {/* <li>
                          <NavigationMenuLink asChild>
                            <a href="/Services">Careers</a>
                          </NavigationMenuLink>
                        </li> */}
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
                <NavigationMenuTrigger>Partners</NavigationMenuTrigger>
                <NavigationMenuContent className="w-auto min-w-[250px] p-6">
                  <ul className="space-y-2 text-sm">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/Services">Apply for Fellowship</a>
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

              {/* REMOVED Threat Advisory and Contact from here as they are moved to Top Bar */}
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

            {/* NEW: Report an Incident (Top of Mobile Menu) */}
            <li>
              <Link
                href="/Services"
                className="block w-full py-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fc4a82] to-[#5155fd]"
                onClick={() => setMobileOpen(false)}
              >
                Report an Incident
              </Link>
            </li>

            {/*  SERVICES  */}
            <li>
              <button
                onClick={() => setOpenMenu(openMenu === "services" ? null : "services")}
                className="flex justify-between items-center w-full py-2 font-medium"
              >
                Services
                <ChevronDown size={20} strokeWidth={1.75} />        </button>

              {openMenu === "services" && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/Services/IT-consult"
                    className="block py-1"
                    onClick={() => {
                      setMobileOpen(false);
                      setOpenMenu(null);
                    }}
                  >
                    IT Consultancy
                  </Link>

                  <Link
                    href="/Services/Busniessconsult"
                    className="block py-1"
                    onClick={() => {
                      setMobileOpen(false);
                      setOpenMenu(null);
                    }}
                  >
                    Business Consultancy
                  </Link>

                  <Link
                    href="/Services/Cyber-security"
                    className="block py-1"
                    onClick={() => {
                      setMobileOpen(false);
                      setOpenMenu(null);
                    }}
                  >
                    Cyber Security
                  </Link>
                </div>
              )}
            </li>

            {/* SOLUTIONS */}
            <li>
              <button
                onClick={() => setOpenMenu(openMenu === "solutions" ? null : "solutions")}
                className="flex justify-between items-center w-full py-2 font-medium"
              >
                Solutions
                <ChevronDown size={20} strokeWidth={1.75} />        </button>

              {openMenu === "solutions" && (
                <div className="pl-4 mt-2 space-y-1 ml-2">
                  <a className="block py-1" href="/Services">Free Consultancy & Audit Call</a>
                  <a className="block py-1" href="/Services/Cyber-security">Cyber Security</a>
                  <a className="block py-1" href="/Services">IT Audit / Product / Service</a>
                </div>
              )}
            </li>

            {/*  PLATFORM  */}
            <li>
              <button
                onClick={() => setOpenMenu(openMenu === "platform" ? null : "platform")}
                className="flex justify-between items-center w-full py-2 font-medium"
              >
                Platform
                <ChevronDown size={20} strokeWidth={1.75} />        </button>

              {openMenu === "platform" && (
                <div className="pl-4 mt-2 ml-2 space-y-1">
                  <a className="block py-1" href="/">AnantNetra</a>
                  <a className="block py-1" href="/Services">NetraSecure AI</a>
                </div>
              )}
            </li>

            {/*  COMPANY*/}
            <li>
              <button
                onClick={() => setOpenMenu(openMenu === "company" ? null : "company")}
                className="flex justify-between items-center w-full py-2 font-medium"
              >
                Company
                <ChevronDown size={20} strokeWidth={1.75} />        </button>

              {openMenu === "company" && (
                <div className="pl-4 mt-2 ml-2 space-y-1">
                  <a className="block py-1" href="/about-us">About Us</a>
                  <a className="block py-1" href="/Services">Meet the Team</a>
                  {/* <a className="block py-1" href="/Services">Careers</a> */}
                  <a className="block py-1" href="/Services">Events</a>
                </div>
              )}
            </li>

            {/*  RESOURCES  */}
            <li>
              <button
                onClick={() => setOpenMenu(openMenu === "resources" ? null : "resources")}
                className="flex justify-between items-center w-full py-2 font-medium"
              >
                Resources
                <ChevronDown size={20} strokeWidth={1.75} />        </button>

              {openMenu === "resources" && (
                <div className="pl-4 mt-2 grid grid-cols-1 gap-1 ml-2">
                  <a className="block py-1" href="/Services">Blog</a>
                  <a className="block py-1" href="/Services">Knowledge Base</a>
                  <a className="block py-1" href="/Services">Press Releases</a>
                  <a className="block py-1" href="/Services">Data Sheets</a>
                  <a className="block py-1" href="/Services">White Papers</a>
                </div>
              )}
            </li>

            {/*  PARTNERS */}
            <li>
              <button
                onClick={() => setOpenMenu(openMenu === "partners" ? null : "partners")}
                className="flex justify-between items-center w-full py-2 font-medium"
              >
                Partners
                <ChevronDown size={20} strokeWidth={1.75} />        </button>

              {openMenu === "partners" && (
                <div className="pl-4 mt-2 ml-2 space-y-1">
                  <a className="block py-1" href="/Services">Apply for Full-Time & Internship</a>
                  <a className="block py-1" href="/Services">Apply for Accelerator</a>
                  <a className="block py-1" href="/Services">Apply as an Investor</a>
                </div>
              )}
            </li>

            {/* THREAT ADVISORY (Kept for Mobile) */}
            <li>
              <Link
                href="/Services"
                onClick={() => setMobileOpen(false)}
                className="flex justify-between items-center w-full py-2 font-medium"
              >
                Threat Advisory
              </Link>
            </li>

            {/*  CONTACT (Kept for Mobile)  */}
            <li>
              <a
                className="block w-full py-2 font-medium"
                href="/#contact"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </a>
            </li>

          </ul>
        </div>
      )}

    </header>
  );
}

export default ClientNavbar;

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
import { ThemeToggle } from "./Theme-toggle";
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
      <nav
        className={`max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        {/* Logo or Brand */}
        
         <div className="flex items-center gap-2">
  <img src="/darkLogo.svg" alt="" width="50" height="50" className="dark:hidden "/>
  <img src="/lightLogo.svg" alt="" width="50" height="50" className=" hidden dark:block "/>

  <Link href="/" className="text-xl font-semibold">
  <span>AnantNetra</span>
  </Link>
</div>

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
                            <a href="/Services/IT-consult">IT Consultancy</a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                           <a href="/Services/Busniessconsult">Business Consultancy</a>
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
<<<<<<< HEAD
                            <Link href="/about-us">About Us</Link>
=======
                            <Link href="/AboutUs">About Us</Link>
                            
>>>>>>> 3783e8faea14a3ea54caf9b121943f8e291ae728
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
                <NavigationMenuContent className="w-auto min-w-[150px] p-6">
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

      
      
      {/*  SERVICES  */}
      <li>
        <button
          onClick={() => setOpenMenu(openMenu === "services" ? null : "services")}
          className="flex justify-between items-center w-full py-2 font-medium"
        >
          Services
<ChevronDown size={20} strokeWidth={1.75} />        </button>

        {openMenu === "services" && (
          <div className="pl-4 mt-2">

            {/* Consultancy */}
            <div className="mt-3">
              <p className="font-semibold text-sm mb-1">Consultancy</p>
              <ul className="space-y-1 ml-2">
                <li><a className="block py-1" href="/Services">IT Consultancy</a></li>
    <li><a className="block py-1" href="/Services/Business-consultancy">Business Consultancy</a></li>
              </ul>
            </div>

            {/* IT Services */}
            <div className="mt-3">
              <p className="font-semibold text-sm mb-1">IT Services</p>
              <ul className="space-y-1 ml-2">
                <li><a className="block py-1" href="/Services">Artificial Intelligence</a></li>
                <li><a className="block py-1" href="/Services">Data Related Services</a></li>
                <li><a className="block py-1" href="/Services">Development</a></li>
                <li><a className="block py-1" href="/Services">APIs & Dashboards</a></li>
              </ul>
            </div>

            {/* Other services */}
            <div className="mt-3 space-y-1 ml-2">
              <a className="block py-1" href="/Services">Cyber Audit</a>
              <a className="block py-1" href="/Services">Incident Response</a>
              <a className="block py-1" href="/Services">Customer Success</a>
            </div>

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
            <a className="block py-1" href="/Services">Cyber Audit</a>
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
            <a className="block py-1" href="/Services">Careers</a>
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

      {/* THREAT ADVISORY  */}
      <li>
        <button
          onClick={() => setOpenMenu(openMenu === "threat" ? null : "threat")}
          className="flex justify-between items-center w-full py-2 font-medium"
        >
          Threat Advisory
<ChevronDown size={20} strokeWidth={1.75} />        </button>

        {openMenu === "threat" && (
          <div className="pl-4 mt-2 ml-2 space-y-2 text-sm">
            <a className="block py-1" href="/Services">Book a Free Audit</a>

            <p className="text-xs text-muted-foreground">
              AnantNetra Technologies | Beyond technology. Towards tomorrow.
              <br />Visit us at www.AnantNetra.com
              <br />Have questions? Schedule a call today.
            </p>

            <a className="block py-1" href="/Services">Report an Incident</a>
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

      {/*  CONTACT  */}
      <li>
        <button
          onClick={() => setOpenMenu(openMenu === "contact" ? null : "contact")}
          className="flex justify-between items-center w-full py-2 font-medium"
        >
          Contact <ChevronDown size={20} strokeWidth={1.75} />        </button>

        {openMenu === "contact" && (
          <div className="pl-4 mt-2 ml-2">
            <a className="block py-1" href="#contact">Contact Form / Details</a>
          </div>
        )}
      </li>

    </ul>
  </div>
)}

    </header>
  );
}

export default ClientNavbar;

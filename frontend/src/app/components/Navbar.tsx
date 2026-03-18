"use client";

import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
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
import { usePathname } from "next/navigation";

// --- Memoized Desktop Sub-components ---

const ServicesMenu = memo(() => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
    <NavigationMenuContent className="w-auto min-w-[220px] p-4 md:right-auto md:left-1 md:origin-top-right">
      <ul className="space-y-2 text-sm">
        <li>
          <NavigationMenuLink asChild>
            <Link href="/Services/IT-consult" className="block p-2  rounded-md ">
              <strong className="block font-medium">IT Consultancy</strong>
              <span className="text-xs text-slate-500 dark:text-slate-400">Strategic planning & tech roadmaps</span>
            </Link>
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink asChild>
            <Link href="/Services/Busniessconsult" className="block p-2 rounded-md ">
              <strong className="block font-medium">Business Consultancy</strong>
              <span className="text-xs text-slate-500 dark:text-slate-400">Optimizing operations & growth</span>
            </Link>
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink asChild>
            <Link href="/Services/Cyber-security" className="block p-2 rounded-md ">
              <strong className="block font-medium">Cyber Security</strong>
              <span className="text-xs text-slate-500 dark:text-slate-400">Protecting your digital assets</span>
            </Link>
          </NavigationMenuLink>
        </li>
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
));
ServicesMenu.displayName = "ServicesMenu";

const PlatformMenu = memo(() => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
    <NavigationMenuContent className="w-auto min-w-[220px] p-5">
      <ul className="space-y-2 text-sm">
        <li>
          <NavigationMenuLink asChild>
            <Link href="/">AnantNetra</Link>
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink asChild>
            <Link href="/Services">NetraSecure AI</Link>
          </NavigationMenuLink>
        </li>
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
));
PlatformMenu.displayName = "PlatformMenu";

const CompanyMenu = memo(() => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>Company</NavigationMenuTrigger>
    <NavigationMenuContent className="w-auto min-w-[220px] p-5">
      <ul className="space-y-2 text-sm">
        <li>
          <NavigationMenuLink asChild>
            <Link href="/about-us">About Us</Link>
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink asChild>
            <Link href="/meet-the-team">Meet the Team</Link>
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink asChild>
            <Link href="/events">Events</Link>
          </NavigationMenuLink>
        </li>
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
));
CompanyMenu.displayName = "CompanyMenu";

const ResourcesMenu = memo(() => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
    <NavigationMenuContent className="w-auto min-w-[220px] p-4">
      <div className="grid grid-rows-5 gap-4 text-sm">
        <NavigationMenuLink asChild><Link href="/Services">Blog</Link></NavigationMenuLink>
        <NavigationMenuLink asChild><Link href="/Services">Knowledge Base</Link></NavigationMenuLink>
        <NavigationMenuLink asChild><Link href="/Services">Press Releases</Link></NavigationMenuLink>
        <NavigationMenuLink asChild><Link href="/Services">Data Sheets</Link></NavigationMenuLink>
        <NavigationMenuLink asChild><Link href="/Services">White Papers</Link></NavigationMenuLink>
      </div>
    </NavigationMenuContent>
  </NavigationMenuItem>
));
ResourcesMenu.displayName = "ResourcesMenu";

const PartnersMenu = memo(() => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>Partners</NavigationMenuTrigger>
    <NavigationMenuContent className="w-auto min-w-[190px] p-4 md:right-0 md:left-auto md:origin-top-right">
      <ul className="space-y-2 text-sm">
        <li><NavigationMenuLink asChild><Link href="/Services">Apply for Fellowship</Link></NavigationMenuLink></li>
        <li><NavigationMenuLink asChild><Link href="/Services">Apply for Accelerator</Link></NavigationMenuLink></li>
        <li><NavigationMenuLink asChild><Link href="/Services">Apply as an Investor</Link></NavigationMenuLink></li>
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
));
PartnersMenu.displayName = "PartnersMenu";

// --- Mobile Sub-menu logic ---

const MobileMenu = memo(({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = useCallback((section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  }, []);

  if (!isOpen) return null;

  return (
    <div className="xl:hidden bg-background border-t shadow-sm">
      <ul className="flex flex-col p-4 space-y-3 text-sm">
        <li>
          <Link
            href="/incident-response"
            className="block w-full py-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fc4a82] to-[#5155fd]"
            onClick={onClose}
          >
            Report an Incident
          </Link>
        </li>

        {/* SERVICES */}
        <li>
          <button onClick={() => toggleSection("services")} className="flex justify-between items-center w-full py-2 font-medium">
            Services <ChevronDown size={20} className={openSection === "services" ? "rotate-180 transition-transform" : "transition-transform"} />
          </button>
          {openSection === "services" && (
            <div className="pl-4 mt-2 space-y-2">
              <Link href="/Services/IT-consult" className="block py-1" onClick={onClose}>IT Consultancy</Link>
              <Link href="/Services/Busniessconsult" className="block py-1" onClick={onClose}>Business Consultancy</Link>
              <Link href="/Services/Cyber-security" className="block py-1" onClick={onClose}>Cyber Security</Link>
            </div>
          )}
        </li>
      

        {/* PLATFORM */}
        <li>
          <button onClick={() => toggleSection("platform")} className="flex justify-between items-center w-full py-2 font-medium">
            Platform <ChevronDown size={20} className={openSection === "platform" ? "rotate-180 transition-transform" : "transition-transform"} />
          </button>
          {openSection === "platform" && (
            <div className="pl-4 mt-2 ml-2 space-y-1">
              <Link className="block py-1" href="/" onClick={onClose}>AnantNetra</Link>
              <Link className="block py-1" href="/Services" onClick={onClose}>NetraSecure AI</Link>
            </div>
          )}
        </li>

        {/* COMPANY */}
        <li>
          <button onClick={() => toggleSection("company")} className="flex justify-between items-center w-full py-2 font-medium">
            Company <ChevronDown size={20} className={openSection === "company" ? "rotate-180 transition-transform" : "transition-transform"} />
          </button>
          {openSection === "company" && (
            <div className="pl-4 mt-2 ml-2 space-y-1">
              <Link className="block py-1" href="/about-us" onClick={onClose}>About Us</Link>
              <Link href="/meet-the-team" className="block py-1" onClick={onClose}>Meet the Team</Link>
              <Link href="/events" className="block py-1" onClick={onClose}>Events</Link>
            </div>
          )}
        </li>

        {/* RESOURCES */}
        <li>
          <button onClick={() => toggleSection("resources")} className="flex justify-between items-center w-full py-2 font-medium">
            Resources <ChevronDown size={20} className={openSection === "resources" ? "rotate-180 transition-transform" : "transition-transform"} />
          </button>
          {openSection === "resources" && (
            <div className="pl-4 mt-2 grid grid-cols-1 gap-1 ml-2">
              <Link className="block py-1" href="/Services" onClick={onClose}>Blog</Link>
              <Link className="block py-1" href="/Services" onClick={onClose}>Knowledge Base</Link>
              <Link className="block py-1" href="/Services" onClick={onClose}>Press Releases</Link>
              <Link className="block py-1" href="/Services" onClick={onClose}>Data Sheets</Link>
              <Link className="block py-1" href="/Services" onClick={onClose}>White Papers</Link>
            </div>
          )}
        </li>

        {/* PARTNERS */}
        <li>
          <button onClick={() => toggleSection("partners")} className="flex justify-between items-center w-full py-2 font-medium">
            Partners <ChevronDown size={20} className={openSection === "partners" ? "rotate-180 transition-transform" : "transition-transform"} />
          </button>
          {openSection === "partners" && (
            <div className="pl-4 mt-2 ml-2 space-y-1">
              <Link className="block py-1" href="/Services" onClick={onClose}>Apply for Fellowship</Link>
              <Link className="block py-1" href="/Services" onClick={onClose}>Apply for Accelerator</Link>
              <Link className="block py-1" href="/Services" onClick={onClose}>Apply as an Investor</Link>
            </div>
          )}
        </li>

        <li>
          <Link href="/Services" onClick={onClose} className="flex justify-between items-center w-full py-2 font-medium">
            Threat Advisory
          </Link>
        </li>

        <li>
          <Link href="/contact" className="block w-full py-2 font-medium" onClick={onClose}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
});
MobileMenu.displayName = "MobileMenu";

function ClientNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Listen to scroll with requestAnimationFrame for performance
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to catch initial scroll state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array - effect stays stable across renders

  const handleMobileToggle = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const handleMobileClose = useCallback(() => {
    setMobileOpen(false);
  }, []);

 const headerClass = useMemo(() => {
  return `fixed top-0 left-0 right-0 z-50 overflow-visible
    transition-[background-color,backdrop-filter,box-shadow,padding] duration-500
    ${scrolled
        ? "w-full bg-white dark:bg-black backdrop-blur-none shadow-white/5 shadow-lg py-1"
        : "w-full bg-background  shadow-sm py-3"
      }`;
}, [scrolled]);

  const topBarClass = useMemo(() => {
    return `w-full max-w-7xl mx-auto hidden xl:flex justify-end items-center gap-4 px-6 py-2 text-sm font-bold tracking-wide transition-all duration-500 ${scrolled ? "h-0 opacity-0 overflow-hidden py-0" : "h-auto opacity-100"
      }`;
  }, [scrolled]);

  if (!mounted) {
    // Lightweight placeholder for fast initial render
    return <header className="w-full bg-background shadow-sm py-3 min-h-[70px] fixed top-0 left-0 right-0 z-50 transition-all duration-500"></header>;
  }

  if (pathname === "/incident-response") return null;

  return (
    <header className={headerClass}>
      <div className={topBarClass}>
        <Link href="/incident-response" className="bg-clip-text text-transparent bg-gradient-to-r from-[#fc4a82] via-purple-500 to-blue-600 hover:opacity-80 transition-opacity">
          Report an Incident
        </Link>
        <Link href="/Services" className="bg-clip-text text-transparent bg-gradient-to-r from-[#fc4a82] via-purple-500 to-blue-600 hover:opacity-80 transition-opacity">
          Threat Advisory
        </Link>
        <Link href="/contact" className="bg-clip-text text-transparent bg-gradient-to-r from-[#fc4a82] via-purple-500 to-blue-600 animate-gradient-x hover:opacity-80 transition-opacity">
          Contact Us
        </Link>
      </div>

      <nav className={`max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-500 overflow-visible ${scrolled ? "py-2" : "py-1"}`}>
        <div className="flex items-center gap-2">
          <img src="/darkLogo.svg" alt="AnantNetra Logo" width="50" height="50" className="dark:hidden" />
          <img src="/lightLogo.svg" alt="AnantNetra Logo" width="50" height="50" className="hidden dark:block" />
          <Link href="/" className="text-xl font-semibold">
            <span>AnantNetra</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:block">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="flex gap-4">
              <ServicesMenu />
                                <ResourcesMenu />

              {!scrolled && (
                <>
                  <CompanyMenu />
                </>
              )}
                            <PlatformMenu />

              <PartnersMenu />
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="xl:hidden"
          onClick={handleMobileToggle}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <MobileMenu isOpen={mobileOpen} onClose={handleMobileClose} />
    </header>
  );
}

export default memo(ClientNavbar);

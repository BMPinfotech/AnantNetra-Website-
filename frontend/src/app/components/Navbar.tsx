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
import { ButtonLink } from "@/components/brand/ButtonLink";
import { StatusPill } from "@/components/brand/StatusPill";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

type NavItem = {
  label: string;
  href: string;
  description?: string;
  status?: "available" | "coming-soon";
};

const services: NavItem[] = [
  {
    label: "Cybersecurity",
    href: "/Services/Cyber-security",
    description: "Assessments, audits and practical security advisory.",
  },
  {
    label: "Technology Consulting",
    href: "/Services/IT-consult",
    description: "Strategy, engineering and cloud architecture.",
  },
  {
    label: "Business Consultancy",
    href: "/Services/Busniessconsult",
    description: "Operational clarity and sustainable growth.",
  },
];

const products: NavItem[] = [
  {
    label: "QUANTIQEN",
    href: "/quantiqen",
    description: "Security Decision Infrastructure platform.",
    status: "available",
  },
  {
    label: "NetraSecure AI",
    href: "/netrasecure-ai",
    description: "AI-powered cybersecurity assistant.",
    status: "coming-soon",
  },
];

const company: NavItem[] = [
  {
    label: "About Us",
    href: "/about-us",
    description: "Who we are and what we are building.",
  },
  {
    label: "Events",
    href: "/events",
    description: "Upcoming activities and company updates.",
  },
];

const partners: NavItem[] = [
  {
    label: "Partner With Us",
    href: "/contact",
    description: "Explore partnership opportunities.",
  },
  {
    label: "Request a Security Assessment",
    href: "/Services/Cyber-security",
    description: "Start a scoped security review.",
  },
  {
    label: "Report a Security Concern",
    href: "/incident-response",
    description: "Share details with our team.",
  },
];

const mobileSections = [
  { id: "services", label: "Services", items: services },
  { id: "products", label: "Products", items: products },
  { id: "company", label: "Company", items: company },
  { id: "partners", label: "Partners", items: partners },
];

function isActivePath(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

const statusLabel = {
  available: "Available",
  "coming-soon": "Coming Soon",
} as const;

// --- Memoized Desktop Sub-components ---

const DesktopMenu = memo(function DesktopMenu({
  label,
  items,
  pathname,
  width = "w-80",
}: {
  label: string;
  items: NavItem[];
  pathname: string;
  width?: string;
}) {
  const isActive = items.some((item) => isActivePath(pathname, item.href));

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(isActive && "bg-white/5 text-brand-text")}
      >
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent className={cn("p-2", width)}>
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.href}>
              <NavigationMenuLink
                asChild
                className="rounded-lg p-2.5 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                <Link
                  href={item.href}
                  data-active={
                    isActivePath(pathname, item.href) ? "true" : undefined
                  }
                  aria-current={
                    isActivePath(pathname, item.href) ? "page" : undefined
                  }
                >
                  <span className="block font-medium text-brand-text">
                    {item.label}
                  </span>
                  {item.description ? (
                    <span className="mt-0.5 block text-xs leading-relaxed text-brand-muted">
                      {item.description}
                    </span>
                  ) : null}
                  {item.status ? (
                    <StatusPill status={item.status} className="mt-2">
                      {statusLabel[item.status]}
                    </StatusPill>
                  ) : null}
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
});

// --- Mobile Sub-menu logic ---

const MobileMenu = memo(function MobileMenu({
  isOpen,
  pathname,
  openSection,
  onToggleSection,
  onClose,
}: {
  isOpen: boolean;
  pathname: string;
  openSection: string | null;
  onToggleSection: (section: string) => void;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation"
      className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line-dark bg-brand-ink xl:hidden"
    >
      <nav aria-label="Mobile" className="brand-container py-4">
        <ul className="space-y-1 text-sm">
          <li>
            <Link
              href="/incident-response"
              className="flex items-center justify-between rounded-lg px-3 py-2.5 font-semibold text-brand-accent transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              onClick={onClose}
            >
              Report an Incident
            </Link>
          </li>

          {mobileSections.map((section) => {
            const expanded = openSection === section.id;
            const sectionActive = section.items.some((item) =>
              isActivePath(pathname, item.href),
            );

            return (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => onToggleSection(section.id)}
                  aria-expanded={expanded}
                  aria-controls={`mobile-${section.id}`}
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg px-3 py-2.5 font-medium text-brand-text transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent",
                    sectionActive && "bg-white/5",
                  )}
                >
                  {section.label}
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={cn(
                      "transition-transform duration-200",
                      expanded && "rotate-180",
                    )}
                  />
                </button>

                {expanded ? (
                  <ul
                    id={`mobile-${section.id}`}
                    className="mt-1 space-y-1 border-l border-line-dark pl-3"
                  >
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          aria-current={
                            isActivePath(pathname, item.href)
                              ? "page"
                              : undefined
                          }
                          className={cn(
                            "flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-brand-muted transition-colors hover:bg-white/5 hover:text-brand-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent",
                            isActivePath(pathname, item.href) &&
                              "bg-white/5 text-brand-text",
                          )}
                        >
                          <span>{item.label}</span>
                          {item.status ? (
                            <StatusPill status={item.status}>
                              {statusLabel[item.status]}
                            </StatusPill>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}

          <li>
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 font-medium text-brand-text transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              Contact Us
            </Link>
          </li>

          <li className="pt-2">
            <ButtonLink href="/contact" className="w-full" onClick={onClose}>
              Talk to Us
            </ButtonLink>
          </li>
        </ul>
      </nav>
    </div>
  );
});

function ClientNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenSection(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const handleMobileToggle = useCallback(() => {
    setMobileOpen((prev) => !prev);
    setOpenSection(null);
  }, []);

  const handleMobileClose = useCallback(() => {
    setMobileOpen(false);
    setOpenSection(null);
  }, []);

  const handleToggleSection = useCallback((section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  }, []);

  const headerClass = useMemo(() => {
    return cn(
      "fixed left-0 right-0 top-0 z-50 overflow-visible border-b transition-[background-color,backdrop-filter,padding,box-shadow] duration-300",
      scrolled
        ? "border-line-dark bg-brand-ink/90 py-1 shadow-lg shadow-black/20 backdrop-blur-md"
        : "border-transparent bg-background/95 py-3",
    );
  }, [scrolled]);

  const topBarClass = useMemo(() => {
    return cn(
      "mx-auto hidden w-full max-w-7xl items-center justify-end gap-5 px-6 text-xs font-semibold tracking-wide transition-all duration-300 xl:flex",
      scrolled
        ? "h-0 overflow-hidden py-0 opacity-0"
        : "h-auto py-2 opacity-100",
    );
  }, [scrolled]);

  if (pathname === "/incident-response") return null;

  return (
    <header className={headerClass}>
      <div className={topBarClass}>
        <Link
          href="/incident-response"
          className="text-brand-accent transition-colors hover:text-brand-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        >
          Report an Incident
        </Link>
        <Link
          href="/Services/Cyber-security"
          className="text-brand-lavender transition-colors hover:text-brand-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        >
          Threat Advisory
        </Link>
        <Link
          href="/contact"
          className="text-brand-muted transition-colors hover:text-brand-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        >
          Contact Us
        </Link>
      </div>

      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 overflow-visible px-4 transition-all duration-300",
          scrolled ? "py-2" : "py-1",
        )}
      >
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        >
          <Image
            src="/lightLogo.svg"
            alt={`${site.name} logo`}
            width={50}
            height={50}
            priority
            className="h-11 w-11 object-contain"
          />
          <span className="font-heading text-xl font-semibold tracking-tight text-brand-text">
            {site.shortName}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:block">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="flex items-center gap-1">
              <DesktopMenu
                label="Services"
                items={services}
                pathname={pathname}
                width="w-80"
              />
              <DesktopMenu
                label="Products"
                items={products}
                pathname={pathname}
                width="w-96"
              />
              <DesktopMenu
                label="Company"
                items={company}
                pathname={pathname}
                width="w-80"
              />
              <DesktopMenu
                label="Partners"
                items={partners}
                pathname={pathname}
                width="w-96"
              />
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <ButtonLink
            href="/contact"
            size="sm"
            className="hidden xl:inline-flex"
          >
            Talk to Us
          </ButtonLink>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-brand-text hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-brand-accent xl:hidden"
            onClick={handleMobileToggle}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileOpen}
        pathname={pathname}
        openSection={openSection}
        onToggleSection={handleToggleSection}
        onClose={handleMobileClose}
      />
    </header>
  );
}

export default memo(ClientNavbar);

"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type AccordionContextType = {
  openValue: string | null;
  setOpenValue: (v: string | null) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export function Accordion({ children, className = "", type = "single", collapsible = true }: {
  children: ReactNode;
  className?: string;
  type?: "single" | "multiple";
  collapsible?: boolean;
}) {
  const [openValue, setOpenValue] = useState<string | null>(null);
  return (
    <AccordionContext.Provider value={{ openValue, setOpenValue }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

type AccordionItemProps = { children: ReactNode; value: string; className?: string };
export function AccordionItem({ children, value, className = "" }: AccordionItemProps) {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    // fallback: render children without controlling
    return <div className={className}>{children}</div>;
  }
  return <div data-value={value} className={className}>{children}</div>;
}

type TriggerProps = { children: ReactNode; value?: string; className?: string };
export function AccordionTrigger({ children, value, className = "" }: TriggerProps) {
  const ctx = useContext(AccordionContext);
  if (!ctx) return <div className={className}>{children}</div>;

  const handleClick = (e: React.MouseEvent) => {
    const parent = (e.currentTarget as HTMLElement).closest("[data-value]") as HTMLElement | null;
    const val = parent?.getAttribute("data-value") || value || "";
    ctx.setOpenValue(ctx.openValue === val ? null : val);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full text-left ${className}`}
      aria-expanded={ctx.openValue !== null}
    >
      {children}
    </button>
  );
}

type ContentProps = { children: ReactNode; value?: string; className?: string };
export function AccordionContent({ children, value, className = "" }: ContentProps) {
  const ctx = useContext(AccordionContext);
  if (!ctx) return <div className={className}>{children}</div>;

  
  const isOpen = ctx.openValue === value || ctx.openValue === (typeof window !== "undefined" && (document.activeElement?.closest && document.activeElement?.closest("[data-value]")?.getAttribute("data-value")) || null);


  return (
    <div className={`${className} ${isOpen ? "block" : "hidden"}`}>
      {children}
    </div>
  );
}

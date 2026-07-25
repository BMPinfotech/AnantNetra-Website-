"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  radius?: number;
  color?: string;
  children: React.ReactNode;
}

export const CardSpotlight: React.FC<CardSpotlightProps> = ({
  children,
  color = "transparent",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "group/spotlight relative rounded-md border border-neutral-800 bg-neutral-50 dark:bg-black dark:border-neutral-800 p-10 overflow-hidden",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 group-hover/spotlight:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(350px circle at 50% 50%, rgba(255,255,255,0.15), transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

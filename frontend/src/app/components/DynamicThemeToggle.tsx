"use client";
import dynamic from "next/dynamic";

export const ThemeToggle = dynamic(() => import("./Theme-toggle").then((m) => ({ default: m.ThemeToggle })), { ssr: false });

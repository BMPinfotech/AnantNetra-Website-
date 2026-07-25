"use client";
import dynamic from "next/dynamic";

export const Chatbot = dynamic(() => import("./Chatbot").then((m) => ({ default: m.Chatbot })), { ssr: false });

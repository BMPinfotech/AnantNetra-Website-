"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    Mail,
    Send,
    AlertCircle,
    CheckCircle2,
    ShieldAlert
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const IncidentResponsePage = () => {
    const router = useRouter();
    const { theme } = useTheme();
    const [result, setResult] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult("Sending...");
        const form = e.currentTarget;
        const formData = new FormData(form);
        const accessKey = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY || "";
        formData.append("access_key", accessKey);
        formData.append("subject", "CRITICAL: New Incident Report");

        const firstName = formData.get("first_name") as string;
        const lastName = formData.get("last_name") as string;
        formData.append("from_name", `${firstName} ${lastName}`.trim() || "AnantNetra IR Form");
        formData.append("replyto", (formData.get("email") as string) || "");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Report sent successfully! A responder will contact you shortly.");
                form.reset();
            } else {
                console.error("Web3Forms Error:", data);
                setResult(`Error: ${data.message || "Something went wrong."}`);
            }
        } catch (error) {
            console.error("Form Submission Error:", error);
            setResult("Connection error. Please try again.");
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden bg-slate-50/70 dark:bg-black/80 backdrop-blur-2xl transition-all duration-500">
            {/* Background Decorative Blobs */}
            <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-red-500/10 dark:bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 dark:bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Main Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full max-w-lg relative z-10 max-h-[90vh] flex flex-col"
            >
                <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-2xl relative transition-colors duration-300 flex flex-col">
                    {/* Progress Bar / Glow */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-80 shrink-0" />

                    <div className="overflow-y-auto p-5 md:p-8 custom-scrollbar">
                        {/* Header Section */}
                        <div className="text-center mb-6 relative">
                            <button
                                onClick={() => router.back()}
                                className="absolute -top-1 -right-1 md:top-0 md:right-0 w-8 h-8 md:w-10 md:h-10 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-full flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all shadow-sm border border-zinc-200 dark:border-zinc-700 z-20"
                            >
                                <X className="w-4 h-4 md:w-5 md:h-5" />
                            </button>

                            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-500 rounded-full text-[10px] font-bold tracking-widest uppercase mb-3 border border-red-100 dark:border-red-900/50">
                                <ShieldAlert className="w-3 h-3" />
                                Critical Response Unit
                            </div>
                            <h1 className="text-xl md:text-3xl font-black text-zinc-900 dark:text-white mb-2 tracking-tight">Report an Incident</h1>
                            <p className="text-zinc-500 dark:text-zinc-400 text-[11px] md:text-xs font-medium px-4">Instant support from our global security operations center</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                <div className="space-y-1.5">
                                    <Label htmlFor="first_name" className="text-[10px] font-bold text-zinc-600 dark:text-zinc-400 ml-1">First Name*</Label>
                                    <Input
                                        id="first_name"
                                        name="first_name"
                                        required
                                        placeholder="John"
                                        className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-red-500 h-10 text-xs rounded-xl"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="last_name" className="text-[10px] font-bold text-zinc-600 dark:text-zinc-400 ml-1">Last Name*</Label>
                                    <Input
                                        id="last_name"
                                        name="last_name"
                                        required
                                        placeholder="Doe"
                                        className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-red-500 h-10 text-xs rounded-xl"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                <div className="space-y-1.5">
                                    <Label htmlFor="email" className="text-[10px] font-bold text-zinc-600 dark:text-zinc-400 ml-1">Work Email*</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="name@company.com"
                                        className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-red-500 h-10 text-xs rounded-xl"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="phone" className="text-[10px] font-bold text-zinc-600 dark:text-zinc-400 ml-1">Phone Number*</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        required
                                        placeholder="+91 00000 00000"
                                        className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-red-500 h-10 text-xs rounded-xl"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <Label className="text-[10px] font-bold text-zinc-600 dark:text-zinc-400 ml-1">Incident Type*</Label>
                                <Select name="incident_type" required>
                                    <SelectTrigger className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-red-500 h-10 text-xs rounded-xl transition-all">
                                        <SelectValue placeholder="What happened?" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl z-[110] min-w-[var(--radix-select-trigger-width)]">
                                        <SelectItem value="ransomware" className="text-xs">Ransomware / Extortion</SelectItem>
                                        <SelectItem value="data_breach" className="text-xs">Data Breach / Leak</SelectItem>
                                        <SelectItem value="malware" className="text-xs">Malware / Virus Attack</SelectItem>
                                        <SelectItem value="unauthorized_access" className="text-xs">Unauthorized Access</SelectItem>
                                        <SelectItem value="phishing" className="text-xs">Phishing / BEC</SelectItem>
                                        <SelectItem value="ddos" className="text-xs">DDoS / Network Attack</SelectItem>
                                        <SelectItem value="other" className="text-xs">Other Security Event</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="message" className="text-[10px] font-bold text-zinc-600 dark:text-zinc-400 ml-1">Brief Description*</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="Briefly describe the situation..."
                                    className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-red-500 min-h-[80px] text-xs rounded-xl resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-11 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-red-500/20 gap-2"
                                disabled={result === "Sending..."}
                            >
                                {result === "Sending..." ? "Processing..." : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Submit Incident Report
                                    </>
                                )}
                            </Button>

                            <AnimatePresence>
                                {result && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className={`p-3 rounded-lg border text-[10px] font-medium text-center ${result.includes("successfully")
                                            ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900 text-green-700 dark:text-green-400"
                                            : "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900 text-red-700 dark:text-red-400"
                                            }`}
                                    >
                                        {result}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-900/50 px-5 py-3.5 flex flex-wrap items-center justify-center gap-3 md:gap-4 text-zinc-400 dark:text-zinc-600 border-t border-zinc-100 dark:border-zinc-900/50 shrink-0">
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                            <span className="text-[9px] font-bold uppercase tracking-wider">Secure Channel</span>
                        </div>
                        <div className="hidden md:block w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                        <div className="flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-blue-500" />
                            <span className="text-[9px] font-bold uppercase tracking-wider">support@anantnetra.com</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default IncidentResponsePage;

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { X, Loader2 } from "lucide-react";

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
    eventTitle: string;
}

interface FormData {
    fullName: string;
    email: string;
    company: string;
    linkedin: string;
    contactNumber: string;
    transactionId: string;
    idea: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function RegistrationModal({ isOpen, onClose, eventTitle }: RegistrationModalProps) {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [errors, setErrors] = useState<FormErrors>({});
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        company: "",
        linkedin: "",
        contactNumber: "",
        transactionId: "",
        idea: "",
    });

    const validate = (): FormErrors => {
        const errs: FormErrors = {};

        if (!formData.fullName.trim()) errs.fullName = "Full name is required";
        if (!formData.email.trim()) errs.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Enter a valid email address";
        if (!formData.contactNumber.trim()) errs.contactNumber = "Contact number is required";
        else if (!/^[\d\s\-\+\(\)]{7,20}$/.test(formData.contactNumber)) errs.contactNumber = "Enter a valid contact number";
        if (!formData.company.trim()) errs.company = "Company / Organization is required";
        if (!formData.linkedin.trim()) errs.linkedin = "LinkedIn profile is required";
        else if (!/^https?:\/\/(www\.)?linkedin\.com\/.+/i.test(formData.linkedin)) errs.linkedin = "Enter a valid LinkedIn URL";
        if (!formData.transactionId.trim()) errs.transactionId = "Transaction ID is required";
        if (!formData.idea.trim()) errs.idea = "Please tell us about your idea";

        return errs;
    };

    const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        setStatus("submitting");

        try {
            const res = await fetch("/api/event-registration", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, eventTitle }),
            });

            if (!res.ok) throw new Error("API request failed");

            setStatus("success");
            setTimeout(() => {
                setStatus("idle");
                setFormData({ fullName: "", email: "", company: "", linkedin: "", contactNumber: "", transactionId: "", idea: "" });
                onClose();
            }, 2000);
        } catch (error) {
            console.error("Registration failed:", error);
            setStatus("idle");
        }
    };

    const inputClass = "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all dark:bg-zinc-800 dark:border-zinc-700 dark:focus:ring-indigo-500/20 dark:text-white";
    const errorInputClass = "w-full px-4 py-3 rounded-xl bg-slate-50 border border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-zinc-800 dark:border-red-500 dark:focus:ring-red-500/20 dark:text-white";

    const getInputClass = (field: keyof FormData) => errors[field] ? errorInputClass : inputClass;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-4"
                    >
                        <div className="relative h-150 overflow-y-auto rounded-3xl bg-white dark:bg-zinc-900 shadow-2xl border border-slate-200 dark:border-zinc-800">
                            <button
                                onClick={onClose}
                                className="absolute right-4 top-4 z-10 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>

                            <div className="bg-linear-to-r from-indigo-600 to-purple-600 p-6 text-center">
                                <div className="inline-flex bg-white p-2 rounded-2xl mb-3">
                                    <QRCodeSVG value={eventTitle} size={80} bgColor="#ffffff" fgColor="#000000" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Register for Event</h3>
                                <p className="text-indigo-200 text-sm mt-1">Global Cybersecurity Summit 2026</p>
                                <p className="text-indigo-100 text-xs mt-2">Scan the QR code to complete your payment, then fill in the details below.</p>
                            </div>

                            <div className="p-6">
                                {status === "success" ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-12 text-center"
                                    >
                                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Registration Successful!</h4>
                                        <p className="text-slate-600 dark:text-slate-400">We'll send you more details shortly.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    value={formData.fullName}
                                                    onChange={handleChange("fullName")}
                                                    className={getInputClass("fullName")}
                                                    placeholder="John Doe"
                                                />
                                                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange("email")}
                                                    className={getInputClass("email")}
                                                    placeholder="john@example.com"
                                                />
                                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Company / Organization</label>
                                                <input
                                                    type="text"
                                                    value={formData.company}
                                                    onChange={handleChange("company")}
                                                    className={getInputClass("company")}
                                                    placeholder="Optional"
                                                />
                                                {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">LinkedIn Profile</label>
                                                <input
                                                    type="url"
                                                    value={formData.linkedin}
                                                    onChange={handleChange("linkedin")}
                                                    className={getInputClass("linkedin")}
                                                    placeholder="https://linkedin.com/in/..."
                                                />
                                                {errors.linkedin && <p className="text-red-500 text-xs mt-1">{errors.linkedin}</p>}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Contact Number</label>
                                                <input
                                                    type="tel"
                                                    value={formData.contactNumber}
                                                    onChange={handleChange("contactNumber")}
                                                    className={getInputClass("contactNumber")}
                                                    placeholder="+1 234 567 8900"
                                                />
                                                {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Transaction ID</label>
                                                <input
                                                    type="text"
                                                    value={formData.transactionId}
                                                    onChange={handleChange("transactionId")}
                                                    className={getInputClass("transactionId")}
                                                    placeholder="TXN123456789"
                                                />
                                                {errors.transactionId && <p className="text-red-500 text-xs mt-1">{errors.transactionId}</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Idea / Product Working On</label>
                                            <textarea
                                                value={formData.idea}
                                                onChange={handleChange("idea")}
                                                className={`${getInputClass("idea")} min-h-25 resize-y`}
                                                placeholder="Tell us about your idea or the product you're currently building..."
                                            />
                                            {errors.idea && <p className="text-red-500 text-xs mt-1">{errors.idea}</p>}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className="w-full py-4 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                                        >
                                            {status === "submitting" ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Processing...
                                                </>
                                            ) : (
                                                "Confirm Registration"
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
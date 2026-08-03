"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { X, Loader2, AlertCircle, Wallet } from "lucide-react";
import Image from "next/image";

interface EventData {
  fee: string;
  title: string;
  banner: string;
  description: string;
}

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
    eventTitle?: string;
    selectedEvent: EventData
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

export default function RegistrationModal({ isOpen, onClose, eventTitle, selectedEvent }: RegistrationModalProps) {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [serverErrorMessage, setServerErrorMessage] = useState("");
    const [showUpiFallback, setShowUpiFallback] = useState(false);
    const errorTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const upiId = "Parthvyas@slc";
    const merchantName = "Anantnetra technologies private limited";

    const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${selectedEvent.fee}&cu=INR&tn=${encodeURIComponent(selectedEvent.title)}`;

    const upiApps = [
        {
            name: "Google Pay",
            pkg: "com.google.android.apps.nbu.paisa.user",
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 48 48" aria-hidden="true">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
            ),
        },
        {
            name: "PhonePe",
            pkg: "com.phonepe.app",
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#5F259F" aria-hidden="true">
                    <path d="M10.206 9.941h2.949v4.692c-.402.201-.938.268-1.34.268-1.072 0-1.609-.536-1.609-1.743V9.941zm13.47 4.816c-1.523 6.449-7.985 10.442-14.433 8.919C2.794 22.154-1.199 15.691.324 9.243 1.847 2.794 8.309-1.199 14.757.324c6.449 1.523 10.442 7.985 8.919 14.433zm-6.231-5.888a.887.887 0 0 0-.871-.871h-1.609l-3.686-4.222c-.335-.402-.871-.536-1.407-.402l-1.274.401c-.201.067-.268.335-.134.469l4.021 3.82H6.386c-.201 0-.335.134-.335.335v.67c0 .469.402.871.871.871h.938v3.217c0 2.413 1.273 3.82 3.418 3.82.67 0 1.206-.067 1.877-.335v2.145c0 .603.469 1.072 1.072 1.072h.938a.432.432 0 0 0 .402-.402V9.874h1.542c.201 0 .335-.134.335-.335v-.67z" />
                </svg>
            ),
        },
        {
            name: "Paytm",
            pkg: "net.one97.paytm",
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#20336B" aria-hidden="true">
                    <path d="M15.85 8.167a.204.204 0 0 0-.04.004c-.68.19-.543 1.148-1.781 1.23h-.12a.23.23 0 0 0-.052.005h-.001a.24.24 0 0 0-.184.235v1.09c0 .134.106.241.237.241h.645v4.623c0 .132.104.238.233.238h1.058a.236.236 0 0 0 .233-.238v-4.623h.6c.13 0 .236-.107.236-.241v-1.09a.239.239 0 0 0-.236-.24h-.612V8.386a.218.218 0 0 0-.216-.22zm4.225 1.17c-.398 0-.762.15-1.042.395v-.124a.238.238 0 0 0-.234-.224h-1.07a.24.24 0 0 0-.236.242v5.92a.24.24 0 0 0 .236.242h1.07c.12 0 .217-.091.233-.209v-4.25a.393.393 0 0 1 .371-.408h.196a.41.41 0 0 1 .226.09.405.405 0 0 1 .145.319v4.074l.004.155a.24.24 0 0 0 .237.241h1.07a.239.239 0 0 0 .235-.23l-.001-4.246c0-.14.062-.266.174-.34a.419.419 0 0 1 .196-.068h.198c.23.02.37.2.37.408.005 1.396.004 2.8.004 4.224a.24.24 0 0 0 .237.241h1.07c.13 0 .236-.108.236-.241v-4.543c0-.31-.034-.442-.08-.577a1.601 1.601 0 0 0-1.51-1.09h-.015a1.58 1.58 0 0 0-1.152.5c-.291-.308-.7-.5-1.153-.5zM.232 9.4A.234.234 0 0 0 0 9.636v5.924c0 .132.096.238.216.241h1.09c.13 0 .237-.107.237-.24l.004-1.658H2.57c.857 0 1.453-.605 1.453-1.481v-1.538c0-.877-.596-1.484-1.453-1.484H.232zm9.032 0a.239.239 0 0 0-.237.241v2.47c0 .94.657 1.608 1.579 1.608h.675s.016 0 .037.004a.253.253 0 0 1 .222.253c0 .13-.096.235-.219.251l-.018.004-.303.006H9.739a.239.239 0 0 0-.236.24v1.09a.24.24 0 0 0 .236.242h1.75c.92 0 1.577-.669 1.577-1.608v-4.56a.239.239 0 0 0-.236-.24h-1.07a.239.239 0 0 0-.236.24c-.005.787 0 1.525 0 2.255a.253.253 0 0 1-.25.25h-.449a.253.253 0 0 1-.25-.255c.005-.754-.005-1.5-.005-2.25a.239.239 0 0 0-.236-.24zm-4.004.006a.232.232 0 0 0-.238.226v1.023c0 .132.113.24.252.24h1.413c.112.017.2.1.213.23v.14c-.013.124-.1.214-.207.224h-.7c-.93 0-1.594.63-1.594 1.515v1.269c0 .88.57 1.506 1.495 1.506h1.94c.348 0 .63-.27.63-.6v-4.136c0-1.004-.508-1.637-1.72-1.637zm-3.713 1.572h.678c.139 0 .25.115.25.256v.836a.253.253 0 0 1-.25.256h-.1c-.192.002-.386 0-.578 0zm4.67 1.977h.445c.139 0 .252.108.252.24v.932a.23.23 0 0 1-.014.076.25.25 0 0 1-.238.164h-.445a.247.247 0 0 1-.252-.24v-.933c0-.132.113-.239.252-.239Z" />
                </svg>
            ),
        },
        {
            name: "Other UPI",
            pkg: null,
            icon: (
                <Wallet className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            ),
        },
    ];

    const isAndroid = typeof window !== "undefined" && /Android/i.test(window.navigator.userAgent);

    const buildPaymentUrl = (pkg?: string | null) => {
        if (!isAndroid) return upiUrl;
        const pkgPart = pkg ? `package=${pkg};` : "";
        return `intent://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${selectedEvent.fee}&cu=INR&tn=${encodeURIComponent(selectedEvent.title)}#Intent;scheme=upi;${pkgPart}action=android.intent.action.VIEW;category=android.intent.category.DEFAULT;launchFlags=0x10000000;S.browser_fallback_url=${encodeURIComponent(upiUrl)};end`;
    };

    const handlePayNow = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setShowUpiFallback(false);
        const timer = window.setTimeout(() => {
            setShowUpiFallback(true);
        }, 1200);
        const onVisibility = () => {
            document.removeEventListener("visibilitychange", onVisibility);
            window.clearTimeout(timer);
        };
        document.addEventListener("visibilitychange", onVisibility);
    };

    useEffect(() => {
        return () => {
            if (errorTimerRef.current) clearTimeout(errorTimerRef.current);
        };
    }, []);
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
        setServerErrorMessage("");
        setStatus("submitting");

        if (errorTimerRef.current) clearTimeout(errorTimerRef.current);

        try {
            const res = await fetch("/api/event-registration", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, eventTitle: selectedEvent.title }),
            });

            if (!res.ok) {
                const data = await res.json();
                setServerErrorMessage(data.error || data.message || "Something went wrong. Please try again or contact support.");
                setStatus("error");
                errorTimerRef.current = setTimeout(() => setStatus("idle"), 3500);
                return;
            }

            setStatus("success");
            setTimeout(() => {
                setStatus("idle");
                setFormData({ fullName: "", email: "", company: "", linkedin: "", contactNumber: "", transactionId: "", idea: "" });
                onClose();
            }, 2000);
        } catch (error) {
            console.error("Registration failed:", error);
            setServerErrorMessage("Something went wrong. Please try again or contact support.");
            setStatus("error");
            errorTimerRef.current = setTimeout(() => setStatus("idle"), 3500);
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
                                className="absolute right-4 top-4 z-10 p-2 rounded-full text-white duration-300 bg-black hover:bg-slate-100 hover:text-black dark:text-white dark:hover:bg-zinc-800 transition-colors"
                            >
                                <X className="w-5 h-5 " />
                            </button>

                            <div className="bg-linear-to-r from-indigo-600 to-purple-600 p-6 text-center">
                                <div className="inline-flex bg-white p-2 rounded-2xl mb-3">
                                    <Image 
                                    src={selectedEvent.banner}
                                    width={500}
                                    height={300}
                                    alt={selectedEvent.title}
                                    />
                                </div>
                                <p className="text-indigo-100 text-lg mt-1">{selectedEvent.title}</p>
                                <p className="text-indigo-200 text-xs mt-2">{selectedEvent.description}</p>
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
                                                    placeholder="Company / Organization"
                                                />
                                                {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                                            </div>
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
                                        

                                        <div className="flex flex-col sm:flex-row items-start gap-4">
                                            <div className="w-full sm:w-auto shrink-0 ">
                                                 <QRCodeSVG value={upiUrl} size={150} bgColor="#ffffff" fgColor="#000000" />
                                                <p className="text-xs text-left lg:text-center mt-1.5 text-slate-500 dark:text-slate-400 font-medium">Scan to Pay</p>
                                            </div>
                                            <div className="space-y-2 w-full">
                                                <div className="flex-1 w-full">
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
                                                <div className="grid grid-cols-2 gap-2">
                                                    {upiApps.map((app) => (
                                                        <a
                                                            key={app.name}
                                                            href={buildPaymentUrl(app.pkg)}
                                                            onClick={handlePayNow}
                                                            className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 hover:border-slate-300 dark:hover:border-zinc-600 transition-colors hover:scale-[1.02] active:scale-[0.98]"
                                                        >
                                                            <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                                                                {app.icon}
                                                            </span>
                                                            <span className="flex flex-col leading-tight text-left">
                                                                <span className="text-xs font-semibold text-slate-900 dark:text-white">{app.name}</span>
                                                                <span className="text-[11px] text-slate-500 dark:text-slate-400">Pay ₹{selectedEvent.fee}</span>
                                                            </span>
                                                        </a>
                                                    ))}
                                                </div>
                                                {showUpiFallback && (
                                                    <p className="text-xs text-center mt-1.5 text-amber-600 dark:text-amber-400 font-medium">
                                                    No UPI app detected. Open your UPI app and scan the QR code to complete the payment.
                                                    </p>
                                                )}
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

                                        {serverErrorMessage && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm"
                                                role="alert"
                                            >
                                                <AlertCircle className="w-5 h-5 mt-0.5 shrink-0 text-red-500" />
                                                <span>{serverErrorMessage}</span>
                                            </motion.div>
                                        )}
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
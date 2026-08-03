"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2, 
  Mail, 
  Sparkles,
  UsersIcon,
  Lightbulb,
  MessageSquareText,
  Gift,
  type LucideIcon
} from "lucide-react";

const highlightIconMap: Record<string, LucideIcon> = {
  UsersIcon,
  Lightbulb,
  MessageSquareText,
  Gift,
};



interface Highlight {
  title: string;
  desc: string;
  icon?: string;
}

interface EventCardProps {
  title: string;
  description: string;
  banner: string;
  date: string;
  day?: string;
  fee: string;
  time: string;
  location: string;
  whoCanJoin?: string;
  isOnline: boolean;
  isFeatured?: boolean;
  highlights?: Highlight[];
  features?: string[];
  termsAndConditions?: string[];
  footerMessage?: string;
  contactEmail?: string;
  onRegister?: (event: any) => void;
}

export default function EventCard({
  title,
  description,
  banner,
  date,
  day,
  fee,
  time,
  location,
  whoCanJoin,
  isOnline,
  isFeatured = false,
  highlights = [],
  features = [],
  termsAndConditions = [],
  footerMessage,
  contactEmail,
  onRegister,
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={`group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300 ${
        isFeatured ? "w-full" : "h-full flex flex-col justify-between"
      }`}
    >
      {/*  FEATURED SPOTLIGHT CARD */}
      {isFeatured ? (
        <div className="flex flex-col lg:flex-row">
          {/* Banner */}
          <div className="relative w-full lg:w-1/2 aspect-3/2 bg-slate-900 overflow-hidden">
            <Image
              src={banner}
              alt={title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-full bg-center object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 z-10">
              {/* <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-amber-500 text-black shadow-md">
                🔥 Featured Event
              </span> */}
            </div>
            <div className="absolute top-4 right-4 z-10">
              <span className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                isOnline ? "bg-green-500/90 text-white" : "bg-blue-600/90 text-white"
              }`}>
                {isOnline ? "Online" : "Offline"}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 lg:w-1/2 flex flex-col justify-between space-y-5">
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
                {title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-4">
                {description}
              </p>

              {/* Basic Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 text-sm border border-slate-100 dark:border-zinc-700/50 mb-4">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                  <Calendar className="w-5 h-5 text-indigo-500 shrink-0" />
                  <span>{date} {day ? `(${day})` : ""}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                  <Clock className="w-5 h-5 text-indigo-500 shrink-0" />
                  <span>{time}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                  <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
                  <span>{location}</span>
                </div>
                {whoCanJoin && (
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                    <Users className="w-5 h-5 text-indigo-500 shrink-0" />
                    <span className="truncate">{whoCanJoin}</span>
                  </div>
                )}
              </div>

              {/* Highlights */}
              {highlights.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4">
                  {highlights.map((item, idx) => {
                    const IconComponent = item.icon ? highlightIconMap[item.icon] : undefined;
                    const Icon = IconComponent ?? Sparkles;
                    return (
                      <div key={idx} className="p-2.5 rounded-xl bg-indigo-50/50 dark:bg-zinc-800/40 border border-indigo-100/50 dark:border-zinc-700/40">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 mb-1.5">
                          <Icon className="w-4 h-4 text-indigo-500 shrink-0" />
                        </span>
                        <p className="text-sm font-bold text-slate-900 dark:text-zinc-200">{item.title}</p>
                        <p className="text-xs text-slate-500 dark:text-zinc-400 truncate">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Features List */}
              {features.length > 0 && (
                <div className="space-y-2 mb-4">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Terms & Conditions */}
              {termsAndConditions.length > 0 && (
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-100 dark:border-zinc-800 mb-4">
                  <h4 className="text-sm font-bold text-slate-500 dark:text-zinc-400 mb-1 flex items-center gap-1.5 uppercase">
                    <ShieldAlert className="w-4 h-4 text-amber-500" /> Terms & Conditions
                  </h4>
                  <ul className="space-y-1.5 text-sm text-slate-600 dark:text-zinc-400 list-disc list-inside">
                    {termsAndConditions.map((term, idx) => (
                      <li key={idx}>{term}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer & Action */}
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 space-y-3">
              {(footerMessage || contactEmail) && (
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-slate-500 dark:text-zinc-400">
                  {footerMessage && <span>{footerMessage}</span>}
                  {contactEmail && (
                    <a href={`mailto:${contactEmail}`} className="flex items-center gap-1 text-indigo-500 hover:underline">
                      <Mail className="w-3.5 h-3.5" /> {contactEmail}
                    </a>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">REGISTRATION FEE</span>
                  <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                    {fee ? `₹${fee}` : "TBA"}
                  </span>
                </div>
                <button
                  onClick={() => onRegister?.({ fee, title, banner, description })}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-indigo-500/20 transition-all hover:gap-3"
                >
                  Register Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // REGULAR GRID CARD
        <div className="flex flex-col h-full justify-between">
          <div>
            {/* Banner */}
            <div className="relative w-full aspect-video overflow-hidden bg-slate-900">
              <Image
                src={banner}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 z-10">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  isOnline ? "bg-green-500/90 text-white" : "bg-blue-600/90 text-white"
                }`}>
                  {isOnline ? "Online" : "Offline"}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-indigo-500 transition-colors">
                {title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 leading-relaxed">
                {description}
              </p>

              {/* Basic Info */}
              <div className="space-y-2 text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-zinc-800/40 p-3.5 rounded-2xl border border-slate-100 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>{date} {day ? `(${day})` : ""}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>{time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="truncate">{location}</span>
                </div>
                {whoCanJoin && (
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-500 shrink-0" />
                    <span className="truncate">{whoCanJoin}</span>
                  </div>
                )}
              </div>

              {/* Features checklist */}
              {features.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Terms and conditions */}
              {termsAndConditions.length > 0 && (
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-100 dark:border-zinc-800">
                  <h4 className="text-xs font-bold text-slate-500 dark:text-zinc-400 mb-1 flex items-center gap-1 uppercase">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-500" /> Terms
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-zinc-400 list-disc list-inside">
                    {termsAndConditions.slice(0, 2).map((term, idx) => (
                      <li key={idx} className="line-clamp-1">{term}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Action Section */}
          <div className="p-6 pt-0 space-y-3">
            {(footerMessage || contactEmail) && (
              <div className="pt-3 border-t border-slate-100 dark:border-zinc-800 flex flex-col gap-1 text-xs text-slate-500 dark:text-zinc-400">
                {footerMessage && <p className="line-clamp-1">{footerMessage}</p>}
                {contactEmail && (
                  <a href={`mailto:${contactEmail}`} className="flex items-center gap-1 text-indigo-500 hover:underline">
                    <Mail className="w-3.5 h-3.5" /> {contactEmail}
                  </a>
                )}
              </div>
            )}

            <div className="pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">FEE</span>
                <span className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                  {fee ? `₹${fee}` : "TBA"}
                </span>
              </div>
              <button
                onClick={() => onRegister?.({ fee, title, banner, description })}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-indigo-500/20 transition-all hover:gap-3"
              >
                Register Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
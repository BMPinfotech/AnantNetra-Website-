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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}


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
        <div className="relative w-full lg:w-1/2  lg:aspect-none lg:min-h-full bg-slate-900 overflow-hidden">
          <div className="block lg:hidden w-full h-auto">
            <Image
              src={banner}
              alt={title}
              width={1246}
              height={1065}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="hidden lg:block relative w-full min-h-full">
            <Image
              src={banner}
              alt={title}
              fill
              priority
              sizes="50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* Badge */}
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

              {/* ── Registration fee & Register Now (commented out – reusable) ── */}
              {/* <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">REGISTRATION FEE</span>
                  <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                    {fee ? `₹{fee}` : "TBA"}
                  </span>
                </div>
                <button
                  onClick={() => onRegister?.({ fee, title, banner, description })}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-indigo-500/20 transition-all hover:gap-3"
                >
                  Register Now <ArrowRight className="w-4 h-4" />
                </button>
              </div> */}

              <div className="flex items-center justify-between">
                <span className="px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-bold uppercase tracking-wider">
                  Event Completed
                </span>
                <a
                  href="https://chat.whatsapp.com/CKzXdt7qr4xCqh6cUbCbJ9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all hover:gap-3"
                >
                  Join WhatsApp <WhatsAppIcon className="w-4 h-4" />
                </a>
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
 
            {/* ── Fee & Register Now (commented out – reusable) ── */}
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

            {/* <div className="pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Event Completed
              </span>
              <a
                href="http://wa.me/+8801728659562"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all hover:gap-3"
              >
                Join WhatsApp <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div> */}
          </div>
        </div>
      )}
    </motion.div>
  );
}
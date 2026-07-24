import { ElementType } from "react";

interface SectionHeaderProps {
  badgeText: string;
  badgeIcon?: ElementType; 
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  badgeText,
  badgeIcon: Icon,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 lg:mb-14 text-center max-w-2xl mx-auto ${className}`}>
      {/* Badge with Icon */}
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-50 text-cyan-700 border border-cyan-200 dark:bg-[#00f2fe]/10 dark:text-[#00f2fe] dark:border-[#00f2fe]/20 mb-4 transition-colors">
        {Icon && <Icon className="w-3.5 h-3.5" />}
        <span>{badgeText}</span>
      </span>

      {/* Main Title with Gradient */}
      <h2 className="bg-linear-to-r from-cyan-600 via-blue-600 to-indigo-700 dark:from-[#00f2fe] dark:via-[#4facfe] dark:to-white bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl md:text-5xl tracking-tight leading-tight">
        {title}
      </h2>

      {/* Subtitle / Description */}
      {description && (
        <p className="mt-3 text-xs text-slate-600 dark:text-[#94a3b8] sm:text-sm md:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
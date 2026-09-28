import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightText,
  subtitle,
  centered = true,
  light = false
}) => {
  return (
    <div className={`mb-10 sm:mb-14 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B]/10 border border-[#1E3A2B]/20 text-[#1E3A2B] text-xs font-semibold uppercase tracking-wider mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2B]"></span>
          <span>{badge}</span>
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight leading-tight ${light ? 'text-white' : 'text-[#1C1F1D]'}`}>
        {title}{' '}
        {highlightText && (
          <span className={light ? 'text-[#DCA07A]' : 'text-[#1E3A2B]'}>{highlightText}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-sm sm:text-base leading-relaxed ${light ? 'text-[#E2ECE5] font-normal drop-shadow-xs' : 'text-[#383E3A] font-normal'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

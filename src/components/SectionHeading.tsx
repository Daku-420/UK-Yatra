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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight leading-tight ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}{' '}
        {highlightText && (
          <span className="text-brand-orange">{highlightText}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-sm sm:text-base leading-relaxed ${light ? 'text-slate-200' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

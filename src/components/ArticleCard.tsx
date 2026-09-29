import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, MapPin, Mountain } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false }) => {
  return (
    <article
      className={`group flex flex-col rounded-3xl overflow-hidden bg-brand-card border border-white/10 hover:border-brand-orange/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl ${
        featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      <div className={`relative w-full overflow-hidden ${featured ? 'aspect-[16/9] md:aspect-[21/10]' : 'aspect-[16/10]'}`}>
        <img
          src={article.featuredImage}
          alt={article.featuredImageAlt || article.title}
          loading="lazy"
          className="w-full h-full object-cover card-zoom-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/85 backdrop-blur-md text-brand-orange border border-brand-orange/30 shadow-md">
            {article.category}
          </span>
          {article.destination && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
              <MapPin className="w-3 h-3 text-brand-orange" />
              <span>{article.destination}</span>
            </span>
          )}
          {article.trek && !article.destination && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
              <Mountain className="w-3 h-3 text-brand-orange" />
              <span>{article.trek}</span>
            </span>
          )}
        </div>

        {/* Updated Badge */}
        <div className="absolute bottom-3 right-4 text-[10px] font-semibold text-slate-300 bg-slate-950/70 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/10">
          Updated {article.updatedDate}
        </div>
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 bg-brand-card">
        <div>
          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400 mb-2.5">
            <span className="flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              {article.readingTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-medium">
              <Calendar className="w-3.5 h-3.5 text-brand-orange" />
              {article.publishedDate}
            </span>
            {article.subcategory && (
              <>
                <span>•</span>
                <span className="text-slate-400 font-medium">{article.subcategory}</span>
              </>
            )}
          </div>

          {/* Title */}
          <Link to={`/articles/${article.slug}`}>
            <h3
              className={`font-display font-bold text-white group-hover:text-brand-orange transition-colors leading-snug line-clamp-2 ${
                featured ? 'text-lg sm:text-2xl' : 'text-base sm:text-lg'
              }`}
            >
              {article.title}
            </h3>
          </Link>

          {/* Excerpt */}
          <p className="mt-2.5 text-xs sm:text-sm text-slate-300 line-clamp-2 sm:line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Card Footer */}
        <div className="pt-3.5 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={article.author.avatar || '/logo.png'}
              alt={article.author.name}
              className="w-7 h-7 rounded-full object-contain bg-white/10 p-0.5 border border-white/20"
            />
            <div className="leading-tight">
              <span className="text-[11px] text-white font-semibold block">{article.author.name}</span>
            </div>
          </div>

          <Link
            to={`/articles/${article.slug}`}
            className="text-xs font-bold text-brand-orange hover:text-orange-400 flex items-center gap-1.5 transition-colors group-hover:translate-x-0.5"
          >
            <span>Read Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

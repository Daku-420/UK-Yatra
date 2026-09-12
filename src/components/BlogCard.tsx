import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="group flex flex-col rounded-3xl overflow-hidden bg-brand-card border border-white/10 hover:border-brand-orange/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover card-zoom-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/85 backdrop-blur-md text-brand-orange border border-brand-orange/30 shadow-md">
          {post.category}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-brand-card">
        <div>
          <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2">
            <span className="flex items-center gap-1 font-medium">
              <Calendar className="w-3.5 h-3.5 text-brand-orange" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              {post.readTime}
            </span>
          </div>

          <Link to={`/blog/${post.slug}`}>
            <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-brand-orange transition-colors line-clamp-2 leading-snug">
              {post.title}
            </h3>
          </Link>

          <p className="mt-2 text-xs text-slate-300 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-6 h-6 rounded-full object-cover border border-white/15"
            />
            <span className="text-[11px] text-slate-300 font-semibold">{post.author.name}</span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="text-xs font-semibold text-brand-orange hover:underline flex items-center gap-1"
          >
            <span>Read Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

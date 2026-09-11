import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  MessageSquare, 
  Sparkles, 
  ChevronLeft,
  ArrowRight
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogs';
import { getWhatsAppUrl } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug || p.id === slug) || BLOG_POSTS[0];

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="pt-24 pb-20">
      {/* Article Hero */}
      <div className="relative h-[50vh] min-h-[400px] w-full flex items-end pb-12 px-4 sm:px-6 lg:px-8">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-gradient"></div>

        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-brand-dark/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Stories</span>
          </Link>

          <div className="flex items-center gap-3 text-xs mb-3">
            <span className="px-3 py-1 rounded-full bg-brand-orange text-white font-semibold">
              {post.category}
            </span>
            <span className="text-slate-300 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-brand-orange" />
              {post.date}
            </span>
            <span className="text-slate-300 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Breadcrumbs
          items={[
            { label: 'Blog', to: '/blog' },
            { label: post.title }
          ]}
        />

        {/* Author Header Bar */}
        <div className="flex items-center justify-between py-6 border-y border-slate-200 my-6">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover border border-brand-orange/30"
            />
            <div>
              <div className="font-display font-bold text-sm text-slate-900">{post.author.name}</div>
              <div className="text-xs text-slate-600 font-medium">{post.author.role}</div>
            </div>
          </div>

          <a
            href={getWhatsAppUrl(`Hi UKYatra, I read your article "${post.title}" and would like to plan a trip around this!`)}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask Author on WhatsApp</span>
          </a>
        </div>

        {/* Article Body Content */}
        <div className="space-y-6 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-brand-orange" />
          <span className="text-xs text-slate-600 font-medium">Tags:</span>
          {post.tags.map((t, i) => (
            <span key={i} className="px-3 py-1 rounded-full text-xs bg-white text-slate-700 border border-slate-200 shadow-xs">
              #{t}
            </span>
          ))}
        </div>

        {/* In-Article Conversion Banner */}
        <div className="my-12 cream-banner rounded-3xl p-8 text-center space-y-4 shadow-sm">
          <h3 className="text-2xl font-bold font-display text-slate-900">
            Inspired to Visit Uttarakhand?
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 max-w-lg mx-auto">
            Let UKYatra arrange your seamless private journey with expert mountain coordinators.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link to="/customized-trip" className="orange-gradient-btn px-6 py-3 rounded-xl font-bold text-xs text-white shadow-lg">
              Plan Custom Trip
            </Link>
            <Link to="/packages" className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-[#DCD6CC] text-xs font-semibold shadow-xs">
              Browse Tour Packages
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="pt-10 border-t border-slate-200">
            <h3 className="text-xl font-bold font-display text-slate-900 mb-6">
              More Mountain Stories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.id}
                  to={`/blog/${p.slug}`}
                  className="group p-4 rounded-2xl bg-white border border-[#E2DDD5] hover:border-brand-orange/50 transition-all flex gap-4 shadow-xs"
                >
                  <img src={p.image} alt={p.title} className="w-24 h-24 rounded-xl object-cover shrink-0" />
                  <div className="space-y-1">
                    <span className="text-[10px] text-brand-orange font-bold uppercase">{p.category}</span>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 group-hover:text-brand-orange transition-colors line-clamp-2">
                      {p.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

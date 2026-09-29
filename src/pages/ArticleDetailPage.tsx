import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Mountain, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  ChevronRight, 
  ArrowRight, 
  Share2, 
  List, 
  HelpCircle, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { Article, ArticleSection } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { WhatsAppIcon } from '../components/SocialIcons';
import { getWhatsAppUrl } from '../config/siteConfig';

interface ArticleDetailPageProps {
  onOpenBookingModal?: (packageName?: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ onOpenBookingModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Find article by slug or id
  const article = ARTICLES.find((a) => a.slug === slug || a.id === slug);

  // Track active heading on scroll
  useEffect(() => {
    if (!article) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = article.content.map((sec) => document.getElementById(sec.id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop - 180 <= scrollY) {
          setActiveHeadingId(el.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  if (!article) {
    return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 font-display">Guide Not Found</h1>
        <p className="text-slate-600 text-sm">The article you requested could not be located.</p>
        <Link to="/articles" className="orange-gradient-btn px-6 py-3 rounded-xl text-white font-bold text-xs inline-block">
          Explore All Travel Guides
        </Link>
      </div>
    );
  }

  // Related Articles (same category or related IDs, excluding current)
  const relatedArticles = ARTICLES.filter((a) => {
    if (a.id === article.id) return false;
    if (article.relatedArticles && article.relatedArticles.includes(a.slug)) return true;
    return a.category === article.category || (article.destination && a.destination === article.destination);
  }).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Structured Data: Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.seoTitle || article.title,
    description: article.metaDescription || article.excerpt,
    image: article.featuredImage,
    author: {
      '@type': 'Organization',
      name: article.author.name,
      url: 'https://uk-yatra.vercel.app/about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'UK Yatra',
      logo: {
        '@type': 'ImageObject',
        url: 'https://uk-yatra.vercel.app/logo.png'
      }
    },
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://uk-yatra.vercel.app/articles/${article.slug}`
    }
  };

  // Structured Data: FAQPage Schema (if FAQs exist)
  const faqSchema = article.faqs && article.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : undefined;

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <SEOHead
        title={`${article.seoTitle || article.title} | UK Yatra`}
        description={article.metaDescription || article.excerpt}
        canonicalUrl={article.canonicalUrl || `https://uk-yatra.vercel.app/articles/${article.slug}`}
        ogImage={article.featuredImage}
        ogType="article"
        publishedTime={article.publishedDate}
        modifiedTime={article.updatedDate}
        author={article.author.name}
        keywords={[article.primaryKeyword, ...article.secondaryKeywords]}
        schema={faqSchema ? [articleSchema, faqSchema] : articleSchema}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Articles', to: '/articles' },
          { label: article.category, to: `/articles?category=${encodeURIComponent(article.category)}` },
          { label: article.title }
        ]}
      />

      {/* Article Header */}
      <header className="space-y-4 mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            to={`/articles?category=${encodeURIComponent(article.category)}`}
            className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-brand-orange hover:bg-orange-200 transition-colors"
          >
            {article.category}
          </Link>
          {article.subcategory && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
              {article.subcategory}
            </span>
          )}
          {article.destination && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
              <MapPin className="w-3 h-3 text-brand-orange" />
              <span>{article.destination}</span>
            </span>
          )}
          {article.trek && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
              <Mountain className="w-3 h-3 text-brand-orange" />
              <span>{article.trek}</span>
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-4xl">
          {article.excerpt}
        </p>

        {/* Metadata & Author Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar || '/logo.png'}
              alt={article.author.name}
              className="w-10 h-10 rounded-full object-contain bg-slate-50 p-1 border border-brand-orange/30 shrink-0"
            />
            <div>
              <div className="font-display font-bold text-slate-900 text-sm">{article.author.name}</div>
              <div className="text-[11px] text-slate-500">{article.author.role}</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-brand-orange" />
              <span>Published: {article.publishedDate}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-semibold text-slate-800">
              <span>Last Updated: {article.updatedDate}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              <span>{article.readingTime}</span>
            </span>
            <button
              onClick={handleShare}
              className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              title="Share Article"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Featured Banner Image */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-3xl overflow-hidden mb-12 shadow-lg border border-slate-200">
        <img
          src={article.featuredImage}
          alt={article.featuredImageAlt || article.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        {article.featuredImageAlt && (
          <div className="absolute bottom-3 left-4 text-[11px] text-white/90 bg-black/60 backdrop-blur-xs px-3 py-1 rounded-full">
            {article.featuredImageAlt}
          </div>
        )}
      </div>

      {/* Quick Stats Pill Row (if available) */}
      {article.quickStats && article.quickStats.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          {article.quickStats.map((stat, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-[#F8F5EE] border border-[#E8E2D5] text-center">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                {stat.label}
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5 block">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Main Content Layout with Sticky Table of Contents */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left / Main Article Column */}
        <main className="lg:col-span-8 space-y-10">
          {/* Topic Key Highlights & Briefing Box */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-orange-50/90 via-amber-50/60 to-white border border-orange-200/80 shadow-xs space-y-2.5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Topic Briefing & Key Insights
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              Welcome to our verified editorial dossier on <strong>{article.title}</strong>. Curated by the local mountain specialists at Team UK Yatra, this guide delivers updated routes, seasonal conditions, and logistical advice tailored specifically for travellers exploring this topic.
            </p>
          </div>

          {article.content.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 border-b border-slate-200 pb-2">
                {section.heading}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                {section.content.map((p, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Callout Box */}
              {section.callout && (
                <div
                  className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3.5 my-4 ${
                    section.callout.type === 'verified'
                      ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                      : section.callout.type === 'warning'
                      ? 'bg-amber-50/80 border-amber-200 text-amber-950'
                      : section.callout.type === 'tip'
                      ? 'bg-blue-50/80 border-blue-200 text-blue-950'
                      : 'bg-[#F9F6F0] border-[#E2DDD5] text-slate-900'
                  }`}
                >
                  {section.callout.type === 'verified' ? (
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : section.callout.type === 'warning' ? (
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  ) : (
                    <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider">
                      {section.callout.title}
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      {section.callout.text}
                    </p>
                  </div>
                </div>
              )}

              {/* Data Table */}
              {section.table && (
                <div className="overflow-x-auto rounded-2xl border border-slate-200 my-4 shadow-2xs">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#000044] text-white text-[11px] uppercase font-bold tracking-wider">
                      <tr>
                        {section.table.headers.map((h, i) => (
                          <th key={i} className="p-3 sm:p-3.5">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-3 sm:p-3.5 font-medium text-slate-800">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Highlights Bullet List */}
              {section.highlights && section.highlights.length > 0 && (
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F8F5EE] border border-[#E8E2D5] space-y-2.5 my-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    Key Highlights & Takeaways
                  </h4>
                  <ul className="space-y-2">
                    {section.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}

          {/* Contextual In-Article Package CTA */}
          <div className="my-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#000044] to-[#0A0A5C] text-white shadow-xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Himalayan Journeys</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold font-display">
                Planning Your Trip: {article.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Let UK Yatra make your journey seamless with custom tour itineraries tailored around {article.title}, verified mountain drivers, and 24/7 on-ground support.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/packages"
                className="orange-gradient-btn px-5 py-2.5 rounded-xl font-bold text-xs text-white shadow-md inline-flex items-center gap-1.5"
              >
                <span>Explore Tour Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={getWhatsAppUrl(`Hi UK Yatra, I read your article "${article.title}" and would like to plan a trip!`)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:brightness-105 shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* FAQs Section */}
          {article.faqs && article.faqs.length > 0 && (
            <section id="faqs" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-28">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-brand-orange" />
                <h3 className="text-xl font-bold font-display text-slate-900">
                  Frequently Asked Questions: {article.title}
                </h3>
              </div>

              <div className="space-y-2.5">
                {article.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-4 text-left font-bold text-xs sm:text-sm text-slate-900 hover:text-brand-orange transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-brand-orange' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="p-4 pt-0 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-[#FAF8F5]">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Tags */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-600">Topics & Tags:</span>
            {article.tags.map((t, idx) => (
              <Link
                key={idx}
                to={`/articles?q=${encodeURIComponent(t)}`}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white text-slate-700 hover:text-brand-orange border border-slate-200 shadow-2xs transition-colors"
              >
                #{t}
              </Link>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <img
              src={article.author.avatar || '/logo.png'}
              alt={article.author.name}
              className="w-14 h-14 rounded-2xl object-contain bg-slate-50 p-2 border-2 border-brand-orange/40 shrink-0"
            />
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-[10px] font-black uppercase tracking-wider text-brand-orange">
                Author & Local Expert
              </span>
              <h4 className="font-display font-bold text-base text-slate-900">
                {article.author.name}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {article.author.bio || 'Native Himalayan travel coordinator and certified guide with deep expertise in Garhwal and Kumaon routes, permits, and pilgrimage logistics.'}
              </p>
            </div>
          </div>
        </main>

        {/* Right Sidebar: Table of Contents & Relevant Packages */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Table of Contents (Sticky) */}
          <div className="sticky top-28 space-y-6">
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-100">
                <List className="w-4 h-4 text-brand-orange" />
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900">
                  Table of Contents
                </h4>
              </div>
              <div className="text-[11px] text-slate-500 font-medium mb-3 pb-2 border-b border-slate-100 line-clamp-2">
                Topic Guide: <span className="font-semibold text-slate-800">{article.title}</span>
              </div>

              <nav className="space-y-1 max-h-[380px] overflow-y-auto pr-1 hide-scrollbar">
                {article.content.map((sec) => {
                  const isActive = activeHeadingId === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className={`block py-1.5 px-2.5 rounded-lg text-xs transition-colors ${
                        isActive
                          ? 'bg-orange-50 font-bold text-brand-orange'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      }`}
                    >
                      {sec.heading}
                    </a>
                  );
                })}
                {article.faqs && article.faqs.length > 0 && (
                  <a
                    href="#faqs"
                    className="block py-1.5 px-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  >
                    Frequently Asked Questions
                  </a>
                )}
              </nav>
            </div>

            {/* Related Packages Widget */}
            {article.relatedPackages && article.relatedPackages.length > 0 && (
              <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3.5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900">
                    Recommended Tour Packages
                  </h4>
                  <span className="text-[10px] text-brand-orange font-bold">100% Customized</span>
                </div>

                <div className="space-y-3">
                  {article.relatedPackages.map((pkg, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5] space-y-1.5">
                      <h5 className="font-bold text-xs text-slate-900 line-clamp-1">
                        {pkg.title}
                      </h5>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-500">{pkg.duration}</span>
                        <span className="font-bold text-brand-orange">Pricing on Request</span>
                      </div>
                      <Link
                        to={pkg.link}
                        className="w-full text-center block py-1.5 rounded-lg bg-white border border-slate-200 hover:border-brand-orange text-[11px] font-bold text-slate-800 hover:text-brand-orange transition-colors"
                      >
                        View Itinerary & Book
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Expert Contact */}
            <div className="p-5 rounded-3xl bg-[#FAF8F5] border border-[#E2DDD5] text-center space-y-3 shadow-2xs">
              <span className="text-xs font-bold text-slate-900 block">
                Have questions about this route?
              </span>
              <p className="text-[11px] text-slate-600">
                Chat with our local Uttarakhand coordinators directly on WhatsApp.
              </p>
              <a
                href={getWhatsAppUrl(`Hi UK Yatra, I have questions regarding ${article.title}`)}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm hover:brightness-105"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* "You May Also Like" Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="mt-20 pt-12 border-t border-slate-200">
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Recommended Reading
              </span>
              <h3 className="text-2xl font-bold font-display text-slate-900">
                You May Also Like
              </h3>
            </div>
            <Link
              to="/articles"
              className="text-xs font-bold text-brand-orange hover:underline flex items-center gap-1"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.id} article={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

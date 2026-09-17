import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Clock, 
  Calendar, 
  User, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Share2, 
  MapPin, 
  Tag
} from 'lucide-react';
import { TRAVEL_GUIDES } from '../data/travelGuides';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getBreadcrumbSchema, getFAQSchema } from '../utils/seoSchemas';
import { getWhatsAppUrl, SITE_CONFIG } from '../config/siteConfig';
import { WhatsAppIcon } from '../components/SocialIcons';

interface TravelGuideDetailPageProps {
  onOpenBookingModal?: (packageName?: string) => void;
}

export const TravelGuideDetailPage: React.FC<TravelGuideDetailPageProps> = ({ onOpenBookingModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const guide = TRAVEL_GUIDES.find((g) => g.slug === slug || g.id === slug);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!guide) {
    return <Navigate to="/travel-guides" replace />;
  }

  const breadcrumbs = [
    { label: 'Travel Guides', to: '/travel-guides' },
    { label: guide.title }
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Travel Guides', url: '/travel-guides' },
    { name: guide.title, url: `/travel-guides/${guide.slug}` }
  ]);

  const faqSchema = getFAQSchema(guide.faqs);
  const jsonLd = [breadcrumbSchema, faqSchema].filter(Boolean);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-24 pb-20">
      <SEOHead
        title={guide.seoTitle}
        description={guide.seoDescription}
        canonicalPath={`/travel-guides/${guide.slug}`}
        ogImage={guide.image}
        ogType="article"
        jsonLd={jsonLd}
      />

      {/* Article Hero Banner */}
      <div className="relative h-[48vh] min-h-[360px] sm:h-[58vh] sm:min-h-[440px] w-full flex items-end pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <img
          src={guide.image}
          alt={guide.heroAlt}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-gradient"></div>

        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <Link
            to="/travel-guides"
            className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-brand-dark/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Guides</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs mb-3">
            <span className="px-3 py-1 rounded-full bg-brand-orange text-white font-semibold shadow-xs">
              {guide.category}
            </span>
            <span className="text-slate-200 flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-brand-orange" />
              {guide.updatedDate}
            </span>
            <span className="text-slate-200 flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              {guide.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            {guide.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Author Credential Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-5 border-y border-slate-200 my-6">
          <div className="flex items-center gap-3">
            <img
              src={guide.author.avatar}
              alt={guide.author.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-brand-orange/40"
            />
            <div>
              <div className="font-display font-bold text-sm text-slate-900">{guide.author.name}</div>
              <div className="text-xs text-slate-600 font-medium">{guide.author.role}</div>
            </div>
          </div>

          <a
            href={getWhatsAppUrl(`Hi UK Yatra team, I read your guide "${guide.title}" and would like assistance with my travel itinerary!`)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 text-xs font-semibold transition-all shadow-xs"
          >
            <WhatsAppIcon className="w-4 h-4 fill-emerald-600" />
            <span>Consult Author on WhatsApp</span>
          </a>
        </div>

        {/* Lead Executive Summary */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-xs mb-8">
          <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Essential Executive Summary</span>
          </div>
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            {guide.summary}
          </p>
        </div>

        {/* Article Body Sections */}
        <div className="space-y-10">
          {guide.sections.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 tracking-tight">
                {sec.heading}
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {sec.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
              {sec.highlightBox && (
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{sec.highlightBox}</span>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Contextual Package Recommendation Banner */}
        <div className="my-12 cream-banner rounded-3xl p-8 sm:p-10 border border-[#E2DDD5] shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange">
              Recommended Package for this Route
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
              {guide.relatedPackageName}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg">
              Experience this journey with verified mountain transport, clean hotel stays, and local guide assistance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              to={`/packages/${guide.relatedPackageSlug}`}
              className="w-full sm:w-auto orange-gradient-btn px-6 py-3.5 rounded-xl font-display font-bold text-xs text-white shadow-lg flex items-center justify-center gap-2"
            >
              <span>View Package Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        {guide.faqs && guide.faqs.length > 0 && (
          <div className="my-12 space-y-6">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-brand-orange" />
              <h2 className="text-2xl font-bold font-display text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              {guide.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className="rounded-2xl bg-white border border-[#E2DDD5] overflow-hidden transition-all shadow-xs"
                  >
                    <button
                      onClick={() => toggleFaq(i)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-display font-bold text-sm sm:text-base text-slate-900">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-brand-orange shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Article Tags & Internal Linking */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-brand-orange" />
          <span className="text-xs font-semibold text-slate-600">Topics:</span>
          {guide.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs bg-white text-slate-700 border border-slate-200 shadow-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

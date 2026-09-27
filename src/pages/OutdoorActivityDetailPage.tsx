import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  Clock, 
  AlertCircle, 
  ArrowRight, 
  ChevronLeft,
  ChevronDown,
  CheckCircle2,
  XCircle,
  Backpack,
  Mountain,
  SunMedium,
  TrendingUp,
  Sparkles,
  HelpCircle,
  Phone,
  Camera,
  X
} from 'lucide-react';
import { OUTDOOR_ACTIVITIES } from '../data/outdoorActivities';
import { ACTIVITIES } from '../data/activities';
import { getWhatsAppUrl, SITE_CONFIG } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';
import { OutdoorActivityCard } from '../components/OutdoorActivityCard';
import { OutdoorActivity } from '../types';

interface OutdoorActivityDetailPageProps {
  onOpenBookingModal?: (packageName?: string) => void;
}

export const OutdoorActivityDetailPage: React.FC<OutdoorActivityDetailPageProps> = ({ 
  onOpenBookingModal 
}) => {
  const { id } = useParams<{ id: string }>();

  // Find in OUTDOOR_ACTIVITIES or fallback to ACTIVITIES
  const outdoorActivity = OUTDOOR_ACTIVITIES.find((a) => a.id === id);
  const legacyActivity = ACTIVITIES.find((a) => a.id === id);

  // Normalize into standard OutdoorActivity format
  const activity: OutdoorActivity = outdoorActivity || (legacyActivity ? {
    id: legacyActivity.id,
    title: legacyActivity.title,
    category: legacyActivity.category,
    image: legacyActivity.image,
    gallery: [legacyActivity.image],
    shortDesc: legacyActivity.shortDesc,
    fullDesc: legacyActivity.fullDesc,
    location: legacyActivity.topLocations ? legacyActivity.topLocations.join(', ') : 'Uttarakhand',
    destination: 'Uttarakhand',
    difficulty: legacyActivity.difficulty || 'Moderate',
    duration: '1 Day',
    durationDetails: '1 Day',
    season: ['Spring', 'Summer', 'Autumn', 'Winter'],
    bestSeason: legacyActivity.bestSeason,
    startingPrice: legacyActivity.startingPrice || '₹1,500',
    topLocations: legacyActivity.topLocations || [],
    safetyInfo: legacyActivity.safetyInfo || [],
    highlights: [
      'Certified Himalayan guides & instructors',
      'CE-approved safety equipment and gear',
      'Scenic Himalayan landscapes & pristine nature',
      'Flexible customizable batch bookings'
    ],
    whatsIncluded: [
      'Safety equipment and gear rental',
      'Certified trip instructor guidance',
      'First-aid medical support'
    ],
    whatsExcluded: [
      'Personal transportation to site',
      'Personal expenses & gratuities'
    ],
    thingsToCarry: [
      'Comfortable clothing & sturdy footwear',
      'Water bottle and energy snacks',
      'Personal identification and sun protection'
    ],
    bestTimeToVisit: `${legacyActivity.bestSeason} is the ideal period to experience ${legacyActivity.title} in Uttarakhand with clear weather and optimum conditions.`,
    faqs: [
      {
        question: `How do I book ${legacyActivity.title}?`,
        answer: 'Click the "Enquire Now" or "Plan This Adventure" button to submit your travel dates and group size. Our adventure desk will respond within 30 minutes with available batch slots and customized pricing.'
      }
    ]
  } : OUTDOOR_ACTIVITIES[0]);

  // Gallery Preview Lightbox State
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Dynamic SEO meta updating
  useEffect(() => {
    if (activity) {
      document.title = `${activity.title} in Uttarakhand | UK Yatra`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute(
        'content',
        `${activity.title} in ${activity.location}: ${activity.shortDesc} Duration: ${activity.durationDetails || activity.duration}. Best Season: ${activity.bestSeason}. Book certified with UK Yatra.`
      );
    }

    return () => {
      document.title = 'UK Yatra | Uttarakhand Travel & Tour Packages';
    };
  }, [activity]);

  // Related activities from same category or different
  const relatedActivities = OUTDOOR_ACTIVITIES.filter(
    (a) => a.id !== activity.id && (a.category === activity.category || a.destination === activity.destination)
  ).slice(0, 3);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleEnquire = () => {
    if (onOpenBookingModal) {
      onOpenBookingModal(activity.title);
    }
  };

  const galleryImages = activity.gallery && activity.gallery.length > 0 
    ? activity.gallery 
    : [activity.image];

  return (
    <div className="pt-24 pb-20 w-full bg-[#F5F3EF] min-h-screen text-slate-800">
      {/* 1. LARGE HERO BANNER */}
      <div className="relative min-h-[460px] sm:min-h-[520px] lg:h-[60vh] w-full flex items-end pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 bg-[#000044]">
        <img
          src={activity.image}
          alt={activity.title}
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90 animate-in fade-in duration-700"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop';
          }}
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Back Navigation Button */}
          <Link
            to="/outdoor-activities"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-black/50 hover:bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 mb-4 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Outdoor Activities</span>
          </Link>

          {/* Badges Pill Row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-orange text-white shadow-md">
              {activity.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-slate-200 border border-white/15">
              📈 {activity.difficulty}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-slate-200 border border-white/15">
              ⏱ {activity.durationDetails || activity.duration}
            </span>
            {activity.maxAltitude && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-slate-200 border border-white/15 flex items-center gap-1">
                <Mountain className="w-3.5 h-3.5 text-brand-orange" />
                <span>{activity.maxAltitude}</span>
              </span>
            )}
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-tight max-w-4xl drop-shadow-md">
            {activity.title}
          </h1>

          {/* Location Line */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium mt-3">
            <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
            <span>{activity.location}</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN DETAIL CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Breadcrumb Path */}
        <Breadcrumbs
          items={[
            { label: 'Outdoor Activities', to: '/outdoor-activities' },
            { label: activity.title }
          ]}
        />

        {/* High-level Quick Metric Highlights Strip */}
        <div className="mt-6 bg-white rounded-3xl p-5 sm:p-6 border border-[#E2DDD5] shadow-md grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-orange-100 text-brand-orange shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">Duration</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900">{activity.durationDetails || activity.duration}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-blue-100 text-blue-600 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">Difficulty</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900">{activity.difficulty}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-emerald-100 text-emerald-600 shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">Best Season</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">{activity.bestSeason}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-100 text-amber-600 shrink-0">
              <Mountain className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">
                {activity.maxAltitude ? 'Max Altitude' : 'Experience Level'}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-900">
                {activity.maxAltitude || 'All Skill Levels'}
              </span>
            </div>
          </div>
        </div>

        {/* 3. TWO COLUMN LAYOUT: Content Body (Col 8) + Sticky Action Sidebar (Col 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-8">
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                Experience Overview
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {activity.fullDesc}
              </p>
              {activity.shortDesc !== activity.fullDesc && (
                <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#E2DDD5] text-xs text-slate-700 leading-relaxed font-medium">
                  💡 <strong>Trip Highlight:</strong> {activity.shortDesc}
                </div>
              )}
            </div>

            {/* Highlights Section */}
            {activity.highlights && activity.highlights.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand-orange" />
                  <h2 className="text-xl font-bold font-display text-slate-900">
                    Activity Highlights
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {activity.highlights.map((highlight, index) => (
                    <div 
                      key={index}
                      className="p-3.5 rounded-2xl bg-[#F9F7F4] border border-[#E5E0D7] flex items-start gap-3 text-xs text-slate-800 leading-snug font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What's Included & What's Excluded Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-white rounded-3xl p-6 border border-[#E2DDD5] shadow-md space-y-3">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm uppercase tracking-wider pb-2 border-b border-[#EAE5DC]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>What's Included</span>
                </div>
                <ul className="space-y-2.5 pt-1">
                  {activity.whatsIncluded && activity.whatsIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-3xl p-6 border border-[#E2DDD5] shadow-md space-y-3">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-sm uppercase tracking-wider pb-2 border-b border-[#EAE5DC]">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>What's Excluded</span>
                </div>
                <ul className="space-y-2.5 pt-1">
                  {activity.whatsExcluded && activity.whatsExcluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Safety Information & Protocols */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                <h2 className="text-xl font-bold font-display text-slate-900">
                  Safety Protocols & Equipment Standards
                </h2>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                UK Yatra enforces strict international mountaineering and water adventure protocols. You will always be accompanied by certified guides trained in wilderness safety.
              </p>
              <div className="space-y-2.5 pt-2">
                {activity.safetyInfo && activity.safetyInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-xs text-emerald-950 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{info}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Things to Carry */}
            {activity.thingsToCarry && activity.thingsToCarry.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
                <div className="flex items-center gap-2">
                  <Backpack className="w-5 h-5 text-brand-orange" />
                  <h2 className="text-xl font-bold font-display text-slate-900">
                    Important Things to Carry
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {activity.thingsToCarry.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-[#F5F3EF] border border-[#E2DDD5] text-xs text-slate-800 font-medium flex items-center gap-2.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Best Time to Visit */}
            {activity.bestTimeToVisit && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-3">
                <div className="flex items-center gap-2">
                  <SunMedium className="w-5 h-5 text-amber-500" />
                  <h2 className="text-xl font-bold font-display text-slate-900">
                    Best Time to Visit
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {activity.bestTimeToVisit}
                </p>
              </div>
            )}

            {/* Gallery Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-brand-orange" />
                  <h2 className="text-xl font-bold font-display text-slate-900">
                    Photo Gallery
                  </h2>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {galleryImages.length} Photos
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {galleryImages.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setActivePhoto(img)}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-slate-100 border border-[#E2DDD5] hover:border-brand-orange transition-all"
                  >
                    <img
                      src={img}
                      alt={`${activity.title} photo ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <Camera className="w-5 h-5 drop-shadow-md" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Accordion Section */}
            {activity.faqs && activity.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-orange" />
                  <h2 className="text-xl font-bold font-display text-slate-900">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-3 pt-2">
                  {activity.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div 
                        key={idx}
                        className="rounded-2xl border border-[#E2DDD5] overflow-hidden transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          className="w-full flex items-center justify-between p-4 text-left font-bold text-xs sm:text-sm text-slate-900 hover:text-brand-orange bg-[#F9F7F4] transition-colors cursor-pointer"
                        >
                          <span className="pr-4">{faq.question}</span>
                          <ChevronDown 
                            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                              isOpen ? 'rotate-180 text-brand-orange' : ''
                            }`} 
                          />
                        </button>
                        {isOpen && (
                          <div className="p-4 bg-white border-t border-[#EAE5DC] text-xs text-slate-700 leading-relaxed font-normal">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT ACTION SIDEBAR (Sticky on Desktop) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-xl space-y-6">
              {/* Header Box */}
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-orange block">
                  Book Your Adventure
                </span>
                <h3 className="text-2xl font-extrabold font-display text-slate-900 mt-1 leading-tight">
                  {activity.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{activity.location}</span>
                </div>
              </div>

              {/* Price Estimate Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#F5F3EF] to-[#EFECE6] border border-[#E0DBD2]">
                <span className="text-[10px] uppercase font-bold text-slate-500 block tracking-wider">
                  Starting Price
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-extrabold font-display text-brand-orange">
                    {activity.startingPrice || '₹On Request'}
                  </span>
                  <span className="text-xs text-slate-600 font-medium">/ person</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Includes certified gear, guides, and safety supervision.
                </p>
              </div>

              {/* Primary & Secondary CTAs requested */}
              <div className="space-y-3">
                {/* Primary CTA */}
                <button
                  type="button"
                  onClick={handleEnquire}
                  className="w-full orange-gradient-btn py-4 rounded-xl font-display font-bold text-sm text-white shadow-xl shadow-brand-orange/20 flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Secondary CTA */}
                <button
                  type="button"
                  onClick={handleEnquire}
                  className="w-full py-3.5 rounded-xl font-display font-bold text-xs text-slate-900 bg-[#F5F3EF] hover:bg-[#EAE5DC] border border-[#D5CFC5] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-brand-orange" />
                  <span>Plan This Adventure</span>
                </button>

                {/* WhatsApp Direct Inquire */}
                <a
                  href={getWhatsAppUrl(`Hi UK Yatra, I would like to book or enquire about "${activity.title}". Please share available batch slots, inclusions & exact pricing.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-emerald-600 text-white py-3 rounded-xl font-bold text-xs transition-all shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* Direct Phone Call */}
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-700 hover:text-brand-orange transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Call {SITE_CONFIG.phone}</span>
                </a>
              </div>

              {/* Security & Reliability Checklist */}
              <div className="pt-4 border-t border-[#EAE5DC] space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Certified IMF & IRF Safety Standards</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Customized Group Dates</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Clear Cancellation & Refund Policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. RELATED ADVENTURES SECTION */}
        {relatedActivities.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#E2DDD5]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                  More Himalayan Adrenaline
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 mt-1">
                  You Might Also Like
                </h2>
              </div>
              <Link
                to="/outdoor-activities"
                className="text-xs font-bold text-brand-orange hover:text-orange-700 flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedActivities.map((rel) => (
                <OutdoorActivityCard
                  key={rel.id}
                  activity={rel}
                  linkPrefix="/outdoor-activities"
                  onBookNow={(title) => onOpenBookingModal ? onOpenBookingModal(title) : null}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 5. LIGHTBOX MODAL FOR GALLERY PREVIEW */}
      {activePhoto && (
        <div 
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activePhoto}
            alt="Activity preview"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

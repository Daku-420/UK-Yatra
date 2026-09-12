import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  MapPin, 
  Calendar, 
  Star, 
  Check, 
  X, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  ChevronLeft
} from 'lucide-react';
import { TOUR_PACKAGES } from '../data/packages';
import { getPackageWhatsAppUrl, SITE_CONFIG } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';

interface PackageDetailPageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const PackageDetailPage: React.FC<PackageDetailPageProps> = ({ onOpenBookingModal }) => {
  const { id } = useParams<{ id: string }>();
  const tourPackage = TOUR_PACKAGES.find((p) => p.id === id) || TOUR_PACKAGES[0];

  const [openDay, setOpenDay] = useState<number | null>(1);

  const toggleDay = (dayNum: number) => {
    setOpenDay(openDay === dayNum ? null : dayNum);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[440px] w-full flex items-end pb-12 px-4 sm:px-6 lg:px-8">
        <img
          src={tourPackage.image}
          alt={tourPackage.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-gradient"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link
            to="/packages"
            className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-brand-dark/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Packages</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-orange text-white">
              {tourPackage.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-dark/80 backdrop-blur-md text-white border border-white/10 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              <span>{tourPackage.duration}</span>
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-dark/80 backdrop-blur-md text-white border border-white/10 flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{tourPackage.rating} ({tourPackage.reviewsCount} reviews)</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight max-w-3xl">
            {tourPackage.title}
          </h1>
          <div className="mt-2 flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
            <MapPin className="w-4 h-4 text-brand-orange" />
            <span>{tourPackage.destination}</span>
            <span>•</span>
            <span>Best Season: {tourPackage.bestSeason}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Breadcrumbs
          items={[
            { label: 'Tour Packages', to: '/packages' },
            { label: tourPackage.title }
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-6">
          {/* Left Column: Overview, Itinerary, Inclusions */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md">
              <h2 className="text-xl font-bold font-display text-slate-900 mb-3">
                Trip Overview
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {tourPackage.overview}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-xs uppercase font-bold tracking-wider text-brand-orange mb-3">
                  Package Highlights
                </h3>
                <div className="space-y-2">
                  {tourPackage.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Day-Wise Detailed Itinerary */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold font-display text-slate-900">
                    Day-Wise Itinerary
                  </h2>
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">
                    Click each day to view full details, stays and meals included.
                  </p>
                </div>
                <button
                  onClick={() => setOpenDay(openDay === null ? 1 : null)}
                  className="text-xs text-brand-orange font-bold hover:underline cursor-pointer"
                >
                  {openDay === null ? 'Expand Days' : 'Collapse Days'}
                </button>
              </div>

              <div className="space-y-4">
                {tourPackage.itinerary.map((item) => {
                  const isExpanded = openDay === item.day;
                  return (
                    <div
                      key={item.day}
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isExpanded
                          ? 'bg-white border-brand-orange shadow-md'
                          : 'bg-white border-[#E2DDD5] hover:border-slate-300 shadow-xs'
                      }`}
                    >
                      <button
                        onClick={() => toggleDay(item.day)}
                        className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-display font-bold text-xs shrink-0 ${
                            isExpanded ? 'bg-brand-orange text-white' : 'bg-slate-100 text-slate-800'
                          }`}>
                            D{item.day}
                          </span>
                          <span className="font-display font-bold text-sm sm:text-base text-slate-900">
                            {item.title}
                          </span>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-brand-orange shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-4 text-xs animate-in fade-in duration-150">
                          <p className="text-slate-700 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-[11px] text-slate-700">
                            <div className="p-2.5 rounded-xl bg-[#F5F3EF] border border-[#E2DDD5]">
                              🏨 <strong>Stay:</strong> {item.stay}
                            </div>
                            <div className="p-2.5 rounded-xl bg-[#F5F3EF] border border-[#E2DDD5]">
                              🍽️ <strong>Meals Included:</strong> {item.meals}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-white rounded-3xl p-6 border border-[#E2DDD5] shadow-md space-y-4">
                <div className="flex items-center gap-2 text-emerald-700 font-display font-bold text-base">
                  <Check className="w-5 h-5" />
                  <span>Inclusions</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  {tourPackage.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-3xl p-6 border border-[#E2DDD5] shadow-md space-y-4">
                <div className="flex items-center gap-2 text-rose-700 font-display font-bold text-base">
                  <X className="w-5 h-5" />
                  <span>Exclusions</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  {tourPackage.exclusions.map((exc, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0"></span>
                      <span>{exc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sticky Booking Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-lg space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-orange">
                  All-Inclusive Price
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display font-extrabold text-3xl text-slate-900">
                    {tourPackage.startingPrice}
                  </span>
                  {tourPackage.originalPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      {tourPackage.originalPrice}
                    </span>
                  )}
                  <span className="text-xs text-slate-600">/ person</span>
                </div>
                <p className="text-[11px] text-emerald-700 font-medium mt-1">
                  ✓ Price matching & customizable inclusions
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => onOpenBookingModal(tourPackage.title)}
                  className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-bold text-xs text-white shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Book This Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getPackageWhatsAppUrl(tourPackage.title, tourPackage.duration)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-semibold text-xs transition-all shadow-lg shadow-emerald-900/40"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 rounded-xl font-semibold text-xs border border-slate-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call Trip Coordinator</span>
                </a>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-2 text-[11px] text-slate-400">
                <p>• 25% booking advance to confirm</p>
                <p>• Free date rescheduling up to 7 days before trip</p>
                <p>• Dedicated private AC hill vehicle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

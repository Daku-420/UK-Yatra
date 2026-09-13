import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Mountain, 
  Clock, 
  TrendingUp, 
  Calendar, 
  MapPin, 
  Check, 
  X, 
  ShieldCheck, 
  ChevronLeft,
  ArrowRight
} from 'lucide-react';
import { TREKS } from '../data/treks';
import { getTrekWhatsAppUrl } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';

interface TrekDetailPageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const TrekDetailPage: React.FC<TrekDetailPageProps> = ({ onOpenBookingModal }) => {
  const { id } = useParams<{ id: string }>();
  const trek = TREKS.find((t) => t.id === id) || TREKS[0];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[440px] w-full flex items-end pb-12 px-4 sm:px-6 lg:px-8">
        <img
          src={trek.image}
          alt={trek.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-gradient"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link
            to="/trekking"
            className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-brand-dark/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Treks</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-orange text-white">
              {trek.difficulty} Grade
            </span>
            <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-brand-dark/80 backdrop-blur-md text-white border border-white/10 flex items-center gap-1">
              <Mountain className="w-3.5 h-3.5 text-brand-orange" />
              <span>{trek.altitude}</span>
            </span>
            <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-brand-dark/80 backdrop-blur-md text-white border border-white/10 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              <span>{trek.duration}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            {trek.name}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-200">
            {trek.tagline}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Breadcrumbs
          items={[
            { label: 'Trekking', to: '/trekking' },
            { label: trek.name }
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-6">
          {/* Main Left Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-[#E2DDD5] shadow-xs text-center">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Max Altitude</span>
                <span className="font-display font-bold text-sm text-slate-900">{trek.altitude}</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E2DDD5] shadow-xs text-center">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Trail Distance</span>
                <span className="font-display font-bold text-sm text-slate-900">{trek.trailLength}</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E2DDD5] shadow-xs text-center">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Base Camp</span>
                <span className="font-display font-bold text-sm text-slate-900">{trek.baseCamp}</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E2DDD5] shadow-xs text-center">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Best Season</span>
                <span className="font-display font-bold text-sm text-slate-900 truncate">{trek.bestSeason.split('&')[0]}</span>
              </div>
            </div>

            {/* Overview & Highlights */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-6">
              <div>
                <h2 className="text-xl font-bold font-display text-slate-900 mb-3">
                  Trek Overview
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {trek.overview}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-xs uppercase font-bold tracking-wider text-brand-orange mb-3">
                  Key Trail Highlights
                </h3>
                <div className="space-y-2">
                  {trek.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Itinerary */}
            {trek.itinerary && trek.itinerary.length > 0 ? (
              <div>
                <h2 className="text-2xl font-bold font-display text-slate-900 mb-6">
                  Day-by-Day Trek Itinerary
                </h2>
                <div className="space-y-4">
                  {trek.itinerary.map((item) => (
                    <div key={item.day} className="p-5 rounded-2xl bg-white border border-[#E2DDD5] shadow-xs space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-brand-orange/15 text-brand-orange flex items-center justify-center font-display font-bold text-xs">
                          D{item.day}
                        </span>
                        <h3 className="font-display font-bold text-sm sm:text-base text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed pl-11">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-8 rounded-3xl bg-white border border-[#E2DDD5] shadow-sm text-center space-y-3">
                <h3 className="font-bold font-display text-slate-900 text-xl">Detailed Trail Itinerary & Batch Schedule</h3>
                <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
                  Every Himalayan trek itinerary is customized for current trail conditions, group fitness levels, and camping preferences. Chat directly with our certified trek coordinators on WhatsApp to get the day-wise itinerary, equipment checklist, and current batch availability.
                </p>
                <div className="pt-2">
                  <a
                    href={getTrekWhatsAppUrl(trek.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-xs shadow-lg hover:brightness-105"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Get Detailed Trek Itinerary on WhatsApp</span>
                  </a>
                </div>
              </div>
            )}

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-[#E2DDD5] shadow-md space-y-4">
                <div className="flex items-center gap-2 text-emerald-700 font-display font-bold text-base">
                  <Check className="w-5 h-5" />
                  <span>Inclusions</span>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  {trek.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-[#E2DDD5] shadow-md space-y-4">
                <div className="flex items-center gap-2 text-rose-700 font-display font-bold text-base">
                  <X className="w-5 h-5" />
                  <span>Exclusions</span>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  {trek.exclusions.map((exc, i) => (
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
                  All-Inclusive Batch Cost
                </span>
                <div className="font-display font-extrabold text-2xl text-slate-900 mt-1">
                  {trek.startingPrice} {trek.startingPrice !== 'Pricing on Request' && <span className="text-xs font-normal text-slate-500">/ trekker</span>}
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => onOpenBookingModal(trek.name)}
                  className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-bold text-xs text-white shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Book Trek Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getTrekWhatsAppUrl(trek.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold text-xs transition-all shadow-lg"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Ask Trek Leader on WhatsApp</span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-600 font-medium">
                <p>• High-grade alpine gear included</p>
                <p>• Nutritious mountain meals & evening snacks</p>
                <p>• Forest permits & insurance support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

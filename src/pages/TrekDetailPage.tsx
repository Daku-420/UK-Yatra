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
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowRightLeft,
  Snowflake,
  HeartHandshake,
  Dumbbell,
  FileCheck,
  Car,
  Train,
  Plane,
  Luggage,
  AlertTriangle,
  Star,
  Quote
} from 'lucide-react';
import { TREKS } from '../data/treks';
import { DESTINATIONS } from '../data/destinations';
import { getTrekWhatsAppUrl } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';
import { SEOHead } from '../components/SEOHead';
import { TrekCard } from '../components/TrekCard';

interface TrekDetailPageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const TrekDetailPage: React.FC<TrekDetailPageProps> = ({ onOpenBookingModal }) => {
  const { id } = useParams<{ id: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Support both slug and id lookup
  const trek = TREKS.find((t) => t.id === id || t.slug === id);

  if (!trek) {
    return (
      <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 text-center">
        <SEOHead
          title="Trek Not Found | Custom Uttarakhand Himalayan Treks"
          description="Looking for a custom high-altitude trek or alpine trail in Uttarakhand? Connect with certified UK Yatra expedition leaders."
          canonicalPath="/treks"
        />
        <div className="bg-[#000044] border border-white/10 rounded-3xl p-10 shadow-2xl space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mx-auto text-brand-orange">
            <Mountain className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
              Custom Alpine Trek on Demand
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
              Looking for a tailored high-altitude trek or customized Himalayan trail? Connect directly with our certified expedition leaders for route planning, mountain weather updates, and gear support.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={getTrekWhatsAppUrl('Custom Himalayan Trek')}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Inquire on WhatsApp</span>
            </a>
            <Link
              to="/treks"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all inline-block"
            >
              Explore All Treks
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Related treks
  const relatedTrekList = TREKS.filter(
    t => t.id !== trek.id && (trek.relatedTreks?.includes(t.id) || t.region === trek.region)
  ).slice(0, 3);

  // Structured Data Schema for TouristTrip + FAQPage
  const trekSchema: Record<string, any>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: `${trek.name} - Uttarakhand Himalayas`,
      description: trek.overview,
      touristType: trek.difficulty,
      offers: {
        '@type': 'Offer',
        price: trek.startingPrice.replace(/[^0-9]/g, '') || '8499',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01',
        url: `https://uk-yatra.vercel.app/treks/${trek.id}`
      },
      provider: {
        '@type': 'TravelAgency',
        name: 'UK Yatra',
        url: 'https://uk-yatra.vercel.app',
        telephone: '+91 78179 55737'
      }
    }
  ];

  if (trek.faqs && trek.faqs.length > 0) {
    trekSchema.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: trek.faqs.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer
        }
      }))
    });
  }

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="pt-24 pb-20">
      <SEOHead
        title={`${trek.name} Guide: Itinerary, Cost, Best Time & Route | UK Yatra`}
        description={`Complete guide to ${trek.name} in Uttarakhand (${trek.altitude}, ${trek.duration}). Day-wise itinerary, difficulty, how to reach from Dehradun, cost, inclusions, best time, and batch booking.`}
        canonicalPath={`/treks/${trek.id}`}
        ogImage={trek.image}
        ogType="article"
        keywords={[
          trek.name,
          `${trek.name} Itinerary`,
          `${trek.name} Cost`,
          `${trek.name} Best Time`,
          `${trek.name} Difficulty`,
          `How to reach ${trek.name}`,
          'Uttarakhand Treks',
          'Himalayan trekking'
        ]}
        schema={trekSchema}
      />

      {/* Hero Header */}
      <div className="relative h-[65vh] min-h-[460px] w-full flex items-end pb-12 px-4 sm:px-6 lg:px-8">
        <img
          src={trek.image}
          alt={`${trek.name} Himalayan Trail in Uttarakhand`}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-gradient"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link
            to="/treks"
            className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-brand-dark/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Treks</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-brand-orange text-white shadow-sm">
              {trek.difficulty} Grade
            </span>
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-dark/80 backdrop-blur-md text-white border border-white/15 flex items-center gap-1">
              <Mountain className="w-3.5 h-3.5 text-brand-orange" />
              <span>{trek.altitude}</span>
            </span>
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-dark/80 backdrop-blur-md text-white border border-white/15 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              <span>{trek.duration}</span>
            </span>
            {trek.region && (
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-dark/80 backdrop-blur-md text-slate-200 border border-white/15 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{trek.region} Himalayas</span>
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight">
            {trek.name}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed">
            {trek.tagline}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <Breadcrumbs
          items={[
            { label: 'Treks', to: '/treks' },
            { label: `${trek.region || 'Uttarakhand'} Treks`, to: '/treks' },
            { label: trek.name }
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-6">
          {/* Main Left Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-2xl bg-white border border-[#E2DDD5] shadow-xs text-center">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Max Altitude</span>
                <span className="font-display font-bold text-sm text-slate-900">{trek.altitude}</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E2DDD5] shadow-xs text-center">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Trail Distance</span>
                <span className="font-display font-bold text-sm text-slate-900">{trek.trailLength}</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E2DDD5] shadow-xs text-center">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Base Camp</span>
                <span className="font-display font-bold text-sm text-slate-900 truncate">{trek.baseCamp}</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E2DDD5] shadow-xs text-center">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Best Season</span>
                <span className="font-display font-bold text-sm text-slate-900 truncate">{trek.bestSeason.split('&')[0]}</span>
              </div>
            </div>

            {/* Quick Decision Highlights Box */}
            <div className="bg-[#FAF9F6] rounded-3xl p-6 border border-[#E2DDD5] shadow-xs grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Beginner Suitability</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {trek.beginnerSuitability || 'Suitable for active trekkers with standard mountain fitness.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center shrink-0">
                  <Snowflake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Snow Availability</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {trek.snowAvailability || (trek.hasSnow ? 'Snow covered during peak winter months.' : 'Alpine meadows & clear rocky trails.')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Fitness Grade</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {trek.fitnessRequirement || 'Moderate cardio fitness. Able to walk 5-6 km comfortably.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Permits & Logistics</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {trek.permitInformation || 'All state forest entry permits and camping fees arranged by UK Yatra.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Trek Overview & Story */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-6">
              <div>
                <h2 className="text-2xl font-bold font-display text-slate-900 mb-3">
                  About {trek.name}
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {trek.overview}
                </p>
              </div>

              {trek.routeOverview && (
                <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#E2DDD5] text-xs">
                  <span className="font-bold text-slate-900 block mb-1">Route Circuit:</span>
                  <span className="text-slate-700 font-medium">{trek.routeOverview}</span>
                </div>
              )}

              <div className="pt-6 border-t border-slate-100">
                <h3 className="text-xs uppercase font-bold tracking-wider text-brand-orange mb-3">
                  Trail Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {trek.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Complete Day-by-Day Itinerary */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold font-display text-slate-900">
                    Day-by-Day Detailed Itinerary
                  </h2>
                  <p className="text-xs text-slate-600 mt-1">
                    Carefully planned elevation gain profile for optimum high-altitude acclimatization
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {trek.itinerary.map((item) => (
                  <div key={item.day} className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E2DDD5] shadow-xs space-y-3">
                    <div className="flex items-start sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 rounded-xl bg-brand-orange/15 text-brand-orange flex items-center justify-center font-display font-bold text-sm shrink-0">
                          D{item.day}
                        </span>
                        <h3 className="font-display font-bold text-sm sm:text-base text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                      {item.altitude && (
                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full shrink-0">
                          {item.altitude}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed sm:pl-12">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500 sm:pl-12 pt-1 border-t border-slate-50">
                      {item.distance && <span><strong>Distance:</strong> {item.distance}</span>}
                      {item.stay && <span><strong>Stay:</strong> {item.stay}</span>}
                      {item.meals && <span><strong>Meals:</strong> {item.meals}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Reach Base Camp */}
            {trek.howToReach && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
                <h2 className="text-xl font-bold font-display text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-orange" />
                  <span>How to Reach {trek.baseCamp} from Dehradun</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <Car className="w-4 h-4 text-brand-orange" />
                      <span>Road Travel</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {trek.howToReach.distanceFromDehradun}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <Train className="w-4 h-4 text-emerald-600" />
                      <span>Nearest Railhead</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {trek.howToReach.nearestRailhead}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <Plane className="w-4 h-4 text-sky-600" />
                      <span>Nearest Airport</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {trek.howToReach.nearestAirport}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-[#E2DDD5] shadow-md space-y-4">
                <div className="flex items-center gap-2 text-emerald-700 font-display font-bold text-base">
                  <Check className="w-5 h-5" />
                  <span>Package Inclusions</span>
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

            {/* Packing List & Gear Guide */}
            {trek.packingList && trek.packingList.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
                <div className="flex items-center gap-2">
                  <Luggage className="w-5 h-5 text-brand-orange" />
                  <h2 className="text-xl font-bold font-display text-slate-900">
                    What to Pack for {trek.name}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {trek.packingList.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 p-2.5 rounded-xl bg-[#FAF9F6] border border-[#E2DDD5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Photo Gallery with alt text */}
            {trek.gallery && trek.gallery.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold font-display text-slate-900">
                  {trek.name} Photo Gallery
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {trek.gallery.map((img, i) => (
                    <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xs border border-white/10 group">
                      <img
                        src={img}
                        alt={`${trek.name} high altitude expedition view ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Frequently Asked Questions */}
            {trek.faqs && trek.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
                <h2 className="text-xl font-bold font-display text-slate-900">
                  Frequently Asked Questions about {trek.name}
                </h2>
                <div className="space-y-3 pt-2">
                  {trek.faqs.map((faq, i) => (
                    <div key={i} className="border border-[#E2DDD5] rounded-2xl overflow-hidden">
                      <button
                        onClick={() => toggleFaq(i)}
                        className="w-full text-left p-4 font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-4 bg-[#FAF9F6] hover:bg-[#F5F3EF] transition-colors"
                      >
                        <span>{faq.question}</span>
                        {openFaqIndex === i ? (
                          <ChevronUp className="w-4 h-4 text-brand-orange shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>
                      {openFaqIndex === i && (
                        <div className="p-4 bg-white text-xs text-slate-700 leading-relaxed border-t border-[#E2DDD5]">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Traveller Reviews */}
            {trek.reviews && trek.reviews.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold font-display text-slate-900">
                  Verified Trekker Reviews
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {trek.reviews.map((rev) => (
                    <div key={rev.id} className="p-5 rounded-2xl bg-white border border-[#E2DDD5] shadow-xs space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-xs text-slate-900">{rev.author}</div>
                          <div className="text-[11px] text-slate-500">{rev.location} • {rev.date}</div>
                        </div>
                        <div className="flex items-center gap-0.5 text-amber-500">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-700 italic leading-relaxed">
                        "{rev.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sticky Booking & Actions Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-lg space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-orange">
                  All-Inclusive Batch Cost
                </span>
                <div className="font-display font-extrabold text-3xl text-slate-900 mt-1">
                  {trek.startingPrice} <span className="text-xs font-normal text-slate-500">/ trekker</span>
                </div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Fixed dates & customized private departures available</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => onOpenBookingModal(trek.name)}
                  className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-bold text-xs text-white shadow-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                >
                  <span>Book {trek.name} Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getTrekWhatsAppUrl(trek.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold text-xs transition-all shadow-lg hover:brightness-105"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Consult Trek Leader on WhatsApp</span>
                </a>

                <Link
                  to={`/trek-comparison?trekA=${trek.id}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#FAF9F6] border border-[#DCD6CC] text-slate-800 py-3 rounded-xl font-semibold text-xs hover:border-brand-orange hover:text-brand-orange transition-all"
                >
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                  <span>Compare with Another Trek</span>
                </Link>
              </div>

              {/* Safety Badges in booking card */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5 text-[11px] text-slate-600 font-medium">
                <div className="flex items-center gap-2 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1:6 Leader to Guest Safety Ratio</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>4-Season Alpine Tents & Warm Sleeping Bags</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Wilderness First Aid & Medical Oxygen Standby</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Govt. Forest Entry Permits Included</span>
                </div>
              </div>

              {/* Contextual link to destination */}
              {trek.relatedDestinations && trek.relatedDestinations.length > 0 && (
                <div className="pt-4 border-t border-slate-100 text-xs">
                  <span className="text-slate-500 block mb-1">Base Camp & Gateway:</span>
                  <div className="flex flex-wrap gap-2">
                    {trek.relatedDestinations.map(dId => (
                      <Link
                        key={dId}
                        to={`/destinations/${dId}`}
                        className="px-2.5 py-1 rounded-lg bg-[#FAF9F6] border border-[#E2DDD5] text-slate-800 font-semibold hover:text-brand-orange hover:border-brand-orange"
                      >
                        {dId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Treks Carousel / Grid */}
        {relatedTrekList.length > 0 && (
          <div className="mt-20 pt-10 border-t border-[#E2DDD5]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
                  Similar Uttarakhand Treks You Might Like
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Discover more high-altitude Himalayan trails with comparable difficulty or region
                </p>
              </div>
              <Link to="/treks" className="text-xs font-bold text-brand-orange hover:underline hidden sm:block">
                View All Treks →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTrekList.map(t => (
                <TrekCard key={t.id} trek={t} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

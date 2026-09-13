import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Mountain, 
  Plane, 
  Train, 
  Car, 
  Check, 
  Sparkles, 
  ArrowRight,
  ChevronLeft
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { adminStorage } from '../utils/adminStorage';
import { TREKS } from '../data/treks';
import { getDestinationWhatsAppUrl } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PackageCard } from '../components/PackageCard';
import { WhatsAppIcon } from '../components/SocialIcons';

interface DestinationDetailPageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({ onOpenBookingModal }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const destination = DESTINATIONS.find((d) => d.id === id) || DESTINATIONS[0];

  // Find matching packages from dynamic admin storage
  const relatedPackages = adminStorage.getPackages().filter(
    (p) => p.destination.toLowerCase().includes(destination.name.toLowerCase()) || 
           destination.name.toLowerCase().includes(p.destination.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20">
      {/* Immersive Destination Hero */}
      <div className="relative h-[65vh] min-h-[480px] w-full flex items-end pb-12 px-4 sm:px-6 lg:px-8">
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-brand-dark/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Destinations</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-orange text-white">
              {destination.category}
            </span>
            {destination.altitude && (
              <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-brand-dark/80 backdrop-blur-md text-slate-200 border border-white/10 flex items-center gap-1">
                <Mountain className="w-3.5 h-3.5 text-brand-orange" />
                <span>{destination.altitude}</span>
              </span>
            )}
            <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-brand-dark/80 backdrop-blur-md text-slate-200 border border-white/10 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              <span>{destination.idealDuration}</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight">
            {destination.name}
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-200 font-normal max-w-2xl drop-shadow">
            {destination.tagline}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Breadcrumbs
          items={[
            { label: 'Destinations', to: '/destinations' },
            { label: destination.name }
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-6">
          {/* Main Left Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-orange" />
                <span>About {destination.name}</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {destination.description}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Key Highlights:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {destination.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Attractions Grid */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-6">
                Top Attractions in {destination.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.topAttractions.map((att, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white border border-[#E2DDD5] shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-brand-orange/15 text-brand-orange flex items-center justify-center font-bold text-xs">
                        {i + 1}
                      </span>
                      <h3 className="font-display font-bold text-sm text-slate-900">{att.name}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-8">
                      {att.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How To Reach */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-6">
              <h2 className="text-xl font-bold font-display text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-orange" />
                <span>How to Reach {destination.name}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#E2DDD5] space-y-2">
                  <div className="flex items-center gap-2 text-brand-orange font-bold">
                    <Plane className="w-4 h-4" />
                    <span>By Air</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{destination.howToReach.byAir}</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#E2DDD5] space-y-2">
                  <div className="flex items-center gap-2 text-brand-orange font-bold">
                    <Train className="w-4 h-4" />
                    <span>By Train</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{destination.howToReach.byTrain}</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#E2DDD5] space-y-2">
                  <div className="flex items-center gap-2 text-brand-orange font-bold">
                    <Car className="w-4 h-4" />
                    <span>By Road</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{destination.howToReach.byRoad}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sticky Booking & Query Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-lg space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-orange">
                  Plan Your Travel
                </span>
                <h3 className="text-2xl font-bold font-display text-slate-900 mt-1">
                  Visit {destination.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Best time to visit: <strong className="text-slate-800">{destination.bestTime}</strong>
                </p>
              </div>

              {destination.startingPrice && (
                <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#E2DDD5]">
                  <span className="text-[10px] text-slate-500 block uppercase font-medium">Curated Packages From</span>
                  <div className="font-display font-extrabold text-2xl text-slate-900">
                    {destination.startingPrice} <span className="text-xs font-normal text-slate-500">/ person</span>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <button
                  onClick={() => onOpenBookingModal(destination.name)}
                  className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-bold text-xs text-white shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Request Custom Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getDestinationWhatsAppUrl(destination.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-semibold text-xs transition-all shadow-lg shadow-emerald-900/40"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

              <div className="text-[11px] text-slate-400 pt-4 border-t border-white/5 space-y-2">
                <p>✓ 100% Customized mountain itineraries</p>
                <p>✓ Sanitised hill-certified vehicles</p>
                <p>✓ Transparent quotes with zero hidden charges</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tour Packages */}
        {relatedPackages.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mb-8">
              Featured Tour Packages for {destination.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  tourPackage={pkg}
                  onOpenBookingModal={() => onOpenBookingModal(pkg.title)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

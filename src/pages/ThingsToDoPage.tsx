import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Waves, 
  Mountain, 
  Sparkles, 
  Trees, 
  Footprints, 
  Tent, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MapPin
} from 'lucide-react';
import { OUTDOOR_ACTIVITIES } from '../data/outdoorActivities';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { WhatsAppIcon } from '../components/SocialIcons';
import { getWhatsAppUrl } from '../config/siteConfig';

interface ThingsToDoPageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const ThingsToDoPage: React.FC<ThingsToDoPageProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <SEOHead
        title="Top Things to Do in Uttarakhand: Adventure, Trekking & Wildlife | UK Yatra"
        description="Discover the best things to do in Uttarakhand: Ganga river rafting in Rishikesh, skiing in Auli, 83m bungee jumping, Jim Corbett tiger safaris, and high Himalayan trekking."
        canonicalPath="/things-to-do"
        keywords={[
          'Things to do in Uttarakhand',
          'Rishikesh River Rafting',
          'Auli Skiing',
          'Bungee Jumping Rishikesh',
          'Jim Corbett Safari',
          'Uttarakhand Adventure Sports',
          'Trekking in Uttarakhand'
        ]}
      />

      <Breadcrumbs items={[{ label: 'Things to Do in Uttarakhand' }]} />

      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden cream-banner p-8 sm:p-12 mb-10 shadow-sm border border-[#E2DDD5]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Adventures & Experiences</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 leading-tight">
            Top Things to Do in <span className="text-brand-orange">Uttarakhand</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            From white-water river rafting on the sacred rapids of the Ganges to skiing beneath Mt. Nanda Devi in Auli and leaping off India's highest 83-meter bungee platform. Explore certified adventure activities curated with international safety gear and local expertise.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/treks"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl orange-gradient-btn text-white text-xs font-bold shadow-md hover:brightness-110"
            >
              <Mountain className="w-3.5 h-3.5" />
              <span>Explore Himalayan Treks</span>
            </Link>
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#DCD6CC] text-slate-800 text-xs font-bold hover:border-brand-orange hover:text-brand-orange shadow-xs"
            >
              <span>Explore Destinations</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {OUTDOOR_ACTIVITIES.map((act) => (
          <div key={act.id} className="bg-white rounded-3xl border border-[#E2DDD5] shadow-md overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={act.image}
                  alt={`${act.title} in Uttarakhand`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md bg-slate-950/80 text-white">
                  {act.category}
                </div>
                {act.startingPrice && (
                  <div className="absolute bottom-3 right-4 px-3 py-1 rounded-full text-xs font-bold bg-brand-orange text-white">
                    {act.startingPrice}
                  </div>
                )}
              </div>

              <div className="p-6 space-y-3">
                <Link to={`/outdoor-activities/${act.id}`}>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-brand-orange transition-colors">
                    {act.title}
                  </h3>
                </Link>
                <div className="flex items-center gap-2 text-xs text-brand-orange font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{act.location}</span>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {act.shortDesc}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span><strong>Duration:</strong> {act.duration}</span>
                  <span><strong>Best Season:</strong> {act.bestSeason}</span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-2">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <Link
                  to={`/outdoor-activities/${act.id}`}
                  className="py-2.5 rounded-xl bg-[#FAF9F6] border border-[#DCD6CC] text-slate-800 font-bold flex items-center justify-center gap-1 hover:border-brand-orange hover:text-brand-orange transition-all text-center"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => onOpenBookingModal(act.title)}
                  className="py-2.5 rounded-xl orange-gradient-btn text-white font-bold flex items-center justify-center gap-1 shadow-xs hover:brightness-110 transition-all text-center"
                >
                  <span>Book Now</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Safety Commitment Banner */}
      <div className="rounded-3xl p-8 sm:p-10 bg-white border border-[#E2DDD5] shadow-md grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-sm text-slate-900">Certified Operators Only</h4>
          <p className="text-xs text-slate-600">All rafting, paragliding, and bungee operations certified by Uttarakhand Tourism</p>
        </div>
        <div className="space-y-2 border-y md:border-y-0 md:border-x border-slate-100 py-4 md:py-0">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-sm text-slate-900">International Standard Gear</h4>
          <p className="text-xs text-slate-600">UIAA / CE certified life jackets, ropes, harnesses, and safety rafts</p>
        </div>
        <div className="space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-sm text-slate-900">Transparent Fixed Pricing</h4>
          <p className="text-xs text-slate-600">No hidden river permit fees or gear surcharges at the base camp</p>
        </div>
      </div>
    </div>
  );
};

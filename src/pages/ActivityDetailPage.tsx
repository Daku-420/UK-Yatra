import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  Clock, 
  AlertCircle, 
  ArrowRight,
  ChevronLeft
} from 'lucide-react';
import { ACTIVITIES } from '../data/activities';
import { getWhatsAppUrl } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';

interface ActivityDetailPageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const ActivityDetailPage: React.FC<ActivityDetailPageProps> = ({ onOpenBookingModal }) => {
  const { id } = useParams<{ id: string }>();
  const activity = ACTIVITIES.find((a) => a.id === id) || ACTIVITIES[0];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Banner */}
      <div className="relative h-[55vh] min-h-[420px] w-full flex items-end pb-12 px-4 sm:px-6 lg:px-8">
        <img
          src={activity.image}
          alt={activity.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-gradient"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link
            to="/activities"
            className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-brand-dark/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Activities</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-orange text-white">
              {activity.category}
            </span>
            {activity.difficulty && (
              <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-brand-dark/80 backdrop-blur-md text-slate-200 border border-white/10">
                {activity.difficulty}
              </span>
            )}
            <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-brand-dark/80 backdrop-blur-md text-slate-200 border border-white/10">
              Best Season: {activity.bestSeason}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            {activity.title}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Breadcrumbs
          items={[
            { label: 'Activities', to: '/activities' },
            { label: activity.title }
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-6">
          {/* Main Description */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md">
              <h2 className="text-xl font-bold font-display text-slate-900 mb-4">
                Experience Overview
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {activity.fullDesc}
              </p>

              {activity.ageLimit && (
                <div className="mt-6 p-4 rounded-2xl bg-[#000044] border border-[#E2DDD5] flex items-center gap-3 text-xs text-slate-700">
                  <AlertCircle className="w-5 h-5 text-brand-orange shrink-0" />
                  <span><strong>Eligibility / Age Limit:</strong> {activity.ageLimit}</span>
                </div>
              )}
            </div>

            {/* Top Locations in Uttarakhand */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md">
              <h2 className="text-xl font-bold font-display text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-orange" />
                <span>Prime Spots in Uttarakhand</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activity.topLocations.map((loc, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-[#000044] border border-[#E2DDD5] text-xs text-slate-800 font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                    <span>{loc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety & Protocol */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
              <h2 className="text-xl font-bold font-display text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Safety & Equipment Standards</span>
              </h2>
              <div className="space-y-2.5">
                {activity.safetyInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                    <span>{info}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Action Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-lg space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-orange">
                  Book Experience
                </span>
                <h3 className="text-2xl font-bold font-display text-slate-900 mt-1">
                  {activity.title}
                </h3>
              </div>

              {activity.startingPrice && (
                <div className="p-4 rounded-2xl bg-[#000044] border border-[#E2DDD5]">
                  <span className="text-[10px] text-slate-500 block uppercase font-medium">Price Estimate</span>
                  <div className="font-display font-extrabold text-2xl text-slate-900">
                    {activity.startingPrice}
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <button
                  onClick={() => onOpenBookingModal(activity.title)}
                  className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-bold text-xs text-white shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Book This Experience</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppUrl(`Hi UKYatra, I'd like to book/enquire about ${activity.title}. Please share available slots & pricing.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold text-xs transition-all shadow-lg"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

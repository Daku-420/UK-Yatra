import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  TrendingUp, 
  Calendar, 
  ArrowRight, 
  Mountain,
  Sparkles
} from 'lucide-react';
import { OutdoorActivity } from '../types';

interface OutdoorActivityCardProps {
  activity: OutdoorActivity;
  linkPrefix?: string;
  onBookNow?: (title: string) => void;
}

export const OutdoorActivityCard: React.FC<OutdoorActivityCardProps> = ({ 
  activity,
  linkPrefix = '/outdoor-activities'
}) => {
  const detailUrl = `${linkPrefix}/${activity.id}`;

  return (
    <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-[#E2DDD5] hover:border-brand-orange/40 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex-1">
      {/* Top Image Container */}
      <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-[#EFEAE2]">
        <img
          src={activity.image}
          alt={activity.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop';
          }}
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-wrap items-center gap-1.5 z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#000044]/90 backdrop-blur-md text-white border border-white/15 shadow-sm">
            {activity.category}
          </span>
          {activity.isFeatured && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-brand-orange text-white shadow-sm flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Featured</span>
            </span>
          )}
        </div>

        {/* Starting Price Pill */}
        {activity.startingPrice && (
          <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-[11px] font-black bg-white/95 text-slate-900 shadow-md backdrop-blur-xs border border-white/80">
            From <span className="text-brand-orange">{activity.startingPrice}</span>
          </div>
        )}

        {/* Altitude Pill if available */}
        {activity.maxAltitude && (
          <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-slate-200 text-[10px] font-semibold flex items-center gap-1">
            <Mountain className="w-3 h-3 text-brand-orange" />
            <span>{activity.maxAltitude}</span>
          </div>
        )}

        {/* Destination Pill */}
        <div className="absolute bottom-3 left-3 text-white text-xs font-bold drop-shadow-md flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
          <span className="truncate max-w-[200px]">{activity.location.split(',')[0]}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Activity Title */}
          <Link to={detailUrl}>
            <h3 className="text-lg font-bold font-display text-slate-900 group-hover:text-brand-orange transition-colors leading-snug line-clamp-1">
              {activity.title}
            </h3>
          </Link>

          {/* Short Description */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mt-2 font-normal">
            {activity.shortDesc}
          </p>

          {/* Activity Metrics Specifications */}
          <div className="mt-4 pt-3.5 border-t border-[#EAE5DC] grid grid-cols-2 gap-y-2.5 gap-x-2 text-[11px] text-slate-700">
            {/* Location */}
            <div className="flex items-start gap-1.5 col-span-2 text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
              <span className="truncate font-medium">📍 {activity.location}</span>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-1.5 text-slate-800">
              <Clock className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span className="font-semibold truncate">
                ⏱ {activity.durationDetails || activity.duration}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center gap-1.5 text-slate-800">
              <TrendingUp className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span className="font-semibold truncate">
                📈 {activity.difficulty}
              </span>
            </div>

            {/* Best Season */}
            <div className="flex items-start gap-1.5 col-span-2 text-slate-700">
              <Calendar className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
              <span className="font-medium truncate">
                📅 Best Season: <span className="font-semibold text-slate-900">{activity.bestSeason}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Card Footer: Price & Explore Button */}
        <div className="pt-3 border-t border-[#EAE5DC] flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">
              Starting from
            </span>
            <span className="text-base font-extrabold font-display text-slate-900 text-brand-orange">
              {activity.startingPrice || '₹On Request'}
            </span>
          </div>

          <Link
            to={detailUrl}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#000044] hover:bg-brand-orange text-white text-xs font-bold transition-all shadow-sm hover:shadow-md hover:scale-[1.02] cursor-pointer"
          >
            <span>Explore Activity</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

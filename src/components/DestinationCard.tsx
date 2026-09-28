import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowUpRight, Compass } from 'lucide-react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <Link 
      to={`/destinations/${destination.id}`}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-[#E2DDD5] hover:border-[#1E3A2B]/40 transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE5DC]">
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          className="w-full h-full object-cover card-zoom-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

        {/* Category Pill */}
        <div className="absolute top-3.5 left-3.5">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/60 backdrop-blur-md text-white border border-white/20">
            {destination.category}
          </span>
        </div>

        {/* Ideal Duration Badge */}
        <div className="absolute top-3.5 right-3.5">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#1E3A2B] text-white shadow-xs">
            {destination.idealDuration}
          </span>
        </div>

        {/* Destination Name on Image */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-emerald-200 transition-colors flex items-center justify-between drop-shadow-sm">
            <span>{destination.name}</span>
            <span className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-[#1E3A2B] flex items-center justify-center text-white transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </h3>
          <p className="text-xs text-slate-200 line-clamp-1 mt-0.5 drop-shadow-2xs">
            {destination.tagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
        <p className="text-xs text-[#5A625D] line-clamp-2 leading-relaxed">
          {destination.description}
        </p>

        <div className="pt-3 border-t border-[#EAE5DC] grid grid-cols-2 gap-2 text-[11px]">
          <div className="flex items-center gap-1.5 text-[#5A625D]">
            <Calendar className="w-3.5 h-3.5 text-[#1E3A2B] shrink-0" />
            <span className="truncate">{destination.bestTime.split('&')[0]}</span>
          </div>

          <div className="flex items-center justify-end gap-1.5 text-right font-medium text-[#5A625D]">
            {destination.startingPrice && (
              <span>From <strong className="text-[#1C1F1D] font-bold">{destination.startingPrice}</strong></span>
            )}
          </div>
        </div>

        <div className="w-full py-2.5 rounded-xl bg-[#F7F5F0] group-hover:bg-[#1E3A2B] text-center text-xs font-semibold text-[#1C1F1D] group-hover:text-white border border-[#DDD5C7] group-hover:border-[#1E3A2B] transition-all flex items-center justify-center gap-1.5">
          <Compass className="w-3.5 h-3.5" />
          <span>Explore Destination</span>
        </div>
      </div>
    </Link>
  );
};

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
      className="group relative flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-200/80 hover:border-brand-orange/50 transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl"
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          className="w-full h-full object-cover card-zoom-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>

        {/* Category Pill */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900/80 backdrop-blur-md text-white border border-white/10">
            {destination.category}
          </span>
        </div>

        {/* Ideal Duration Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-brand-orange text-white shadow-md">
            {destination.idealDuration}
          </span>
        </div>

        {/* Destination Name on Image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold font-display text-white group-hover:text-amber-300 transition-colors flex items-center justify-between drop-shadow-md">
            <span>{destination.name}</span>
            <span className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-brand-orange flex items-center justify-center text-white transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </h3>
          <p className="text-xs text-slate-200 line-clamp-1 mt-0.5 drop-shadow-sm">
            {destination.tagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {destination.description}
        </p>

        <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px]">
          <div className="flex items-center gap-1.5 text-slate-500">
            <Calendar className="w-3.5 h-3.5 text-brand-orange shrink-0" />
            <span className="truncate">{destination.bestTime.split('&')[0]}</span>
          </div>

          <div className="flex items-center justify-end gap-1.5 text-right font-medium text-slate-700">
            {destination.startingPrice && (
              <span>From <strong className="text-brand-orange font-bold">{destination.startingPrice}</strong></span>
            )}
          </div>
        </div>

        <div className="w-full py-2.5 rounded-xl bg-slate-50 group-hover:bg-brand-orange/10 text-center text-xs font-semibold text-slate-700 group-hover:text-brand-orange border border-slate-200/80 transition-colors flex items-center justify-center gap-1.5">
          <Compass className="w-3.5 h-3.5" />
          <span>Explore Destination</span>
        </div>
      </div>
    </Link>
  );
};

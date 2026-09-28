import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Clock, TrendingUp, Calendar, ArrowRight, ShieldAlert } from 'lucide-react';
import { Trek } from '../types';

interface TrekCardProps {
  trek: Trek;
}

export const TrekCard: React.FC<TrekCardProps> = ({ trek }) => {
  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Moderate':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Challenging':
      case 'Difficult':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-[#E2DDD5] hover:border-[#1E3A2B]/40 transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      {/* Image container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE5DC]">
        <img
          src={trek.image}
          alt={trek.name}
          loading="lazy"
          className="w-full h-full object-cover card-zoom-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

        {/* Difficulty Badge */}
        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-bold backdrop-blur-md bg-black/60 text-white border border-white/20">
          {trek.difficulty}
        </div>

        {/* Altitude Badge */}
        <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5">
          <Mountain className="w-3.5 h-3.5 text-emerald-300" />
          <span>{trek.altitude}</span>
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-xs text-white font-medium">
          <Clock className="w-3.5 h-3.5 text-emerald-300" />
          <span>{trek.duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
        <div>
          <Link to={`/trekking/${trek.id}`}>
            <h3 className="font-display font-bold text-lg text-[#1C1F1D] group-hover:text-[#1E3A2B] transition-colors line-clamp-1">
              {trek.name}
            </h3>
          </Link>
          <p className="text-xs text-[#1E3A2B] font-semibold mt-0.5">
            {trek.tagline}
          </p>
          <p className="mt-2 text-xs text-[#5A625D] line-clamp-2 leading-relaxed">
            {trek.overview}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] pt-3 border-t border-[#EAE5DC]">
            <div className="flex items-center gap-1.5 text-[#5A625D]">
              <TrendingUp className="w-3.5 h-3.5 text-[#1E3A2B]" />
              <span>Trail: {trek.trailLength}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#5A625D]">
              <Calendar className="w-3.5 h-3.5 text-[#1E3A2B]" />
              <span className="truncate">{trek.bestSeason.split('&')[0]}</span>
            </div>
          </div>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-[#EAE5DC] flex items-center justify-between">
          <div>
            <span className="text-[10px] text-[#7E8782] block uppercase tracking-wider font-semibold">Pricing</span>
            <span className="font-display font-bold text-sm text-[#1C1F1D]">{trek.startingPrice}</span>
          </div>

          <Link
            to={`/trekking/${trek.id}`}
            className="px-4 py-2 rounded-xl forest-btn text-xs font-semibold text-white flex items-center gap-1.5 shadow-sm"
          >
            <span>View Trek</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

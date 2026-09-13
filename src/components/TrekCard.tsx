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
    <div className="group relative flex flex-col rounded-3xl overflow-hidden bg-brand-card border border-white/10 hover:border-brand-orange/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl">
      {/* Image container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={trek.image}
          alt={trek.name}
          loading="lazy"
          className="w-full h-full object-cover card-zoom-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-transparent"></div>

        {/* Difficulty Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold backdrop-blur-md bg-slate-950/80 text-white border border-white/15">
          {trek.difficulty}
        </div>

        {/* Altitude Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-white text-xs font-semibold flex items-center gap-1.5">
          <Mountain className="w-3.5 h-3.5 text-brand-orange" />
          <span>{trek.altitude}</span>
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-white font-medium">
          <Clock className="w-3.5 h-3.5 text-brand-orange" />
          <span>{trek.duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-brand-card">
        <div>
          <Link to={`/trekking/${trek.id}`}>
            <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-orange transition-colors line-clamp-1">
              {trek.name}
            </h3>
          </Link>
          <p className="text-xs text-brand-orange font-semibold mt-0.5">
            {trek.tagline}
          </p>
          <p className="mt-2 text-xs text-slate-300 line-clamp-2 leading-relaxed">
            {trek.overview}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] pt-3 border-t border-white/10">
            <div className="flex items-center gap-1.5 text-slate-300">
              <TrendingUp className="w-3.5 h-3.5 text-brand-orange" />
              <span>Trail: {trek.trailLength}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-brand-orange" />
              <span className="truncate">{trek.bestSeason.split('&')[0]}</span>
            </div>
          </div>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-medium">Pricing</span>
            <span className="font-display font-bold text-sm text-brand-orange">{trek.startingPrice}</span>
          </div>

          <Link
            to={`/trekking/${trek.id}`}
            className="px-4 py-2 rounded-xl orange-gradient-btn text-xs font-semibold text-white flex items-center gap-1.5 shadow-md"
          >
            <span>View Trek</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

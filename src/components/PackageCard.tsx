import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, MapPin, Check, ArrowRight } from 'lucide-react';
import { TourPackage } from '../types';
import { getPackageWhatsAppUrl } from '../config/siteConfig';

interface PackageCardProps {
  tourPackage: TourPackage;
  onOpenBookingModal?: (packageName: string) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ tourPackage, onOpenBookingModal }) => {
  return (
    <div className="group relative flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-200/80 hover:border-brand-orange/50 transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl">
      {/* Image container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={tourPackage.image}
          alt={tourPackage.title}
          loading="lazy"
          className="w-full h-full object-cover card-zoom-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

        {/* Rating Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{tourPackage.rating}</span>
          <span className="text-slate-300 text-[10px]">({tourPackage.reviewsCount})</span>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-semibold shadow-md flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          <span>{tourPackage.duration}</span>
        </div>

        {/* Destination Tag */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1 text-xs text-white font-medium drop-shadow-md">
          <MapPin className="w-3.5 h-3.5 text-brand-orange" />
          <span>{tourPackage.destination}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
        <div>
          <Link to={`/packages/${tourPackage.id}`}>
            <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-brand-orange transition-colors line-clamp-2 leading-snug">
              {tourPackage.title}
            </h3>
          </Link>
          <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {tourPackage.overview}
          </p>

          {/* Key Highlights */}
          <div className="mt-3 space-y-1.5">
            {tourPackage.highlights.slice(0, 2).map((h, i) => (
              <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price & Booking Actions */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Starting from</span>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-xl text-slate-900">{tourPackage.startingPrice}</span>
                {tourPackage.originalPrice && (
                  <span className="text-xs text-slate-400 line-through">{tourPackage.originalPrice}</span>
                )}
                <span className="text-[10px] text-slate-500">/ person</span>
              </div>
            </div>

            <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 font-medium">
              {tourPackage.bestSeason.split('&')[0]}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/packages/${tourPackage.id}`}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-center text-xs font-semibold text-slate-800 border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            </Link>

            <button
              onClick={() => onOpenBookingModal ? onOpenBookingModal(tourPackage.title) : window.open(getPackageWhatsAppUrl(tourPackage.title, tourPackage.duration), '_blank')}
              className="w-full py-2.5 rounded-xl orange-gradient-btn text-center text-xs font-semibold text-white transition-all flex items-center justify-center gap-1.5"
            >
              <span>Get Quote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, MapPin, Check, ArrowRight, FileText, Download } from 'lucide-react';
import { TourPackage } from '../types';
import { getPackageWhatsAppUrl } from '../config/siteConfig';

interface PackageCardProps {
  tourPackage: TourPackage;
  onOpenBookingModal?: (packageName: string) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ tourPackage, onOpenBookingModal }) => {
  return (
    <div className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-[#E2DDD5] hover:border-[#1E3A2B]/40 transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      {/* Image container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE5DC]">
        <img
          src={tourPackage.image}
          alt={tourPackage.title}
          loading="lazy"
          className="w-full h-full object-cover card-zoom-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Hub Badge or Rating */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
          {tourPackage.pickupDrop ? (
            <span className="text-emerald-300 font-semibold">{tourPackage.pickupDrop}</span>
          ) : (
            <>
              <Star className="w-3.5 h-3.5 fill-[#C49746] text-[#C49746]" />
              <span>{tourPackage.rating}</span>
            </>
          )}
        </div>

        {/* Duration Badge */}
        <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#1E3A2B] text-white text-xs font-semibold shadow-xs flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-emerald-200" />
          <span>{tourPackage.duration}</span>
        </div>

        {/* Destination Tag */}
        <div className="absolute bottom-3 left-3.5 flex items-center gap-1 text-xs text-white font-medium drop-shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-emerald-300" />
          <span>{tourPackage.destination}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
        <div>
          <Link to={`/packages/${tourPackage.id}`}>
            <h3 className="font-display font-bold text-lg text-[#1C1F1D] group-hover:text-[#1E3A2B] transition-colors line-clamp-2 leading-snug">
              {tourPackage.title}
            </h3>
          </Link>
          <p className="mt-2 text-xs text-[#5A625D] line-clamp-2 leading-relaxed">
            {tourPackage.overview}
          </p>

          {/* Key Highlights */}
          <div className="mt-3 space-y-1.5">
            {tourPackage.highlights.slice(0, 2).map((h, i) => (
              <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#383E3A]">
                <Check className="w-3.5 h-3.5 text-[#1E3A2B] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price & Booking Actions */}
        <div className="pt-4 border-t border-[#EAE5DC] space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#7E8782] block font-semibold">Tariff / Rates</span>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-base sm:text-lg text-[#1C1F1D]">
                  {tourPackage.startingPrice || 'Pricing on Request'}
                </span>
                {tourPackage.originalPrice && !tourPackage.startingPrice?.includes('Request') && (
                  <>
                    <span className="text-xs text-[#7E8782] line-through">{tourPackage.originalPrice}</span>
                    <span className="text-[10px] text-[#7E8782]">/ person</span>
                  </>
                )}
              </div>
            </div>

            <span className="text-[11px] text-[#1E3A2B] bg-[#EDF3EE] px-2 py-0.5 rounded-md border border-[#D5E4D9] font-medium">
              {tourPackage.bestSeason.split('&')[0]}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link
              to={`/packages/${tourPackage.id}`}
              className="flex-1 py-2 px-2 rounded-xl bg-[#F7F5F0] hover:bg-[#EFECE4] text-center text-[11px] sm:text-xs font-semibold text-[#1C1F1D] border border-[#DDD5C7] transition-colors flex items-center justify-center gap-1 whitespace-nowrap"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#5A625D] shrink-0" />
            </Link>

            {tourPackage.pdfBrochure && (
              <a
                href={tourPackage.pdfBrochure}
                download
                className="p-2 sm:p-2 rounded-xl bg-[#F7F5F0] hover:bg-[#EFECE4] text-[#1E3A2B] border border-[#DDD5C7] transition-colors flex items-center justify-center shrink-0"
                title="Download Official PDF Itinerary"
              >
                <Download className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={() => onOpenBookingModal ? onOpenBookingModal(tourPackage.title) : window.open(getPackageWhatsAppUrl(tourPackage.title, tourPackage.duration), '_blank')}
              className="flex-1 py-2 px-2 rounded-xl forest-btn text-center text-[11px] sm:text-xs font-semibold text-white transition-all flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer active:scale-[0.98]"
            >
              <span>Plan Trip</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

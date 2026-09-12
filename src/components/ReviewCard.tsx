import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { Review } from '../types';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-brand-card rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:border-brand-orange/40 transition-all duration-300 shadow-xl hover:shadow-2xl relative">
      <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5" />

      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Comment */}
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic line-clamp-4 font-normal">
          "{review.comment}"
        </p>

        {/* Trip Tag */}
        <div className="mt-4 inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
          📍 {review.tripTaken}
        </div>
      </div>

      {/* Traveller Info */}
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-10 h-10 rounded-full object-cover border border-white/15"
        />
        <div>
          <div className="flex items-center gap-1.5 font-display font-semibold text-xs text-white">
            <span>{review.name}</span>
            {review.verified && (
              <CheckCircle className="w-3.5 h-3.5 text-brand-orange" />
            )}
          </div>
          <span className="text-[10px] text-slate-400 font-medium">{review.location} • {review.reviewDate}</span>
        </div>
      </div>
    </div>
  );
};

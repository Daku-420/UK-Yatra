import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <Link
      to={`/activities/${activity.id}`}
      className="group relative flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-200/80 hover:border-brand-orange/40 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={activity.image}
          alt={activity.title}
          loading="lazy"
          className="w-full h-full object-cover card-zoom-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200/80 shadow-sm">
          {activity.category}
        </div>

        {activity.startingPrice && (
          <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#FF5A1F] text-white shadow-md">
            From {activity.startingPrice}
          </div>
        )}

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold font-display text-white group-hover:text-brand-orange transition-colors flex items-center justify-between">
            <span>{activity.title}</span>
            <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-[#FF5A1F] flex items-center justify-center text-white transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </h3>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {activity.shortDesc}
        </p>

        <div className="pt-3 border-t border-slate-100 space-y-2">
          <div className="text-[11px] text-slate-700 font-medium">
            <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">Top Spots</span>
            <span className="line-clamp-1 font-medium">{activity.topLocations.join(' • ')}</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Certified Instructors & Safety Gear</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

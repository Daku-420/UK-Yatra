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
      className="group relative flex flex-col rounded-3xl overflow-hidden bg-brand-card border border-white/10 hover:border-brand-orange/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={activity.image}
          alt={activity.title}
          loading="lazy"
          className="w-full h-full object-cover card-zoom-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md text-white border border-white/15 shadow-sm">
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

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-brand-card">
        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
          {activity.shortDesc}
        </p>

        <div className="pt-3 border-t border-white/10 space-y-2">
          <div className="text-[11px] text-slate-300 font-medium">
            <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Top Spots</span>
            <span className="line-clamp-1 font-medium">{activity.topLocations.join(' • ')}</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-brand-orange font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
            <span>Certified Instructors & Safety Gear</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

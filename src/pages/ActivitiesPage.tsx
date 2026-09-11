import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Compass } from 'lucide-react';
import { ACTIVITIES } from '../data/activities';
import { ActivityCard } from '../components/ActivityCard';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const ActivitiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Adventure', 'Trekking', 'Snow Sports', 'Wildlife', 'Camping', 'Spiritual'];

  const filteredActivities = selectedCategory === 'All'
    ? ACTIVITIES
    : ACTIVITIES.filter(a => a.category === selectedCategory);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'Activities & Experiences' }]} />

      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden cream-banner p-8 sm:p-12 mb-12 shadow-sm">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Adrenaline & Serenity</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 leading-tight">
            Outdoor <span className="text-brand-orange">Experiences</span> in Uttarakhand
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            From tackling Grade IV rapids on the holy Ganges to soaring over valleys on a paraglider, skiing in powdery Auli snow, and tracking tigers in Corbett.
          </p>
        </div>
      </div>

      {/* Filter Categories */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 hide-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/90 shadow-xs'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Activity Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredActivities.map((act) => (
          <ActivityCard key={act.id} activity={act} />
        ))}
      </div>

      {/* Safety Assurance Banner */}
      <div className="mt-16 bg-white rounded-3xl p-8 border border-[#E2DDD5] shadow-md text-center max-w-3xl mx-auto">
        <ShieldCheck className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
        <h3 className="text-xl font-bold font-display text-slate-900">
          Certified Himalayan Safety Standards
        </h3>
        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
          All high-adrenaline sports and trekking expeditions organized by UKYatra follow international safety protocols. We operate exclusively with certified IMF mountaineers, IRF river rescue kayakers, and DGCA paragliding pilots.
        </p>
      </div>
    </div>
  );
};

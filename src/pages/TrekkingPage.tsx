import React, { useState, useMemo } from 'react';
import { Mountain, Search, Sparkles, ShieldCheck } from 'lucide-react';
import { TREKS } from '../data/treks';
import { TrekCard } from '../components/TrekCard';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const TrekkingPage: React.FC = () => {
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const difficulties = ['All', 'Easy', 'Moderate', 'Challenging'];

  const filteredTreks = useMemo(() => {
    return TREKS.filter((t) => {
      const matchDiff = difficultyFilter === 'All' || t.difficulty === difficultyFilter;
      const matchSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchDiff && matchSearch;
    });
  }, [difficultyFilter, searchQuery]);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'Trekking Expeditions' }]} />

      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden cream-banner p-8 sm:p-12 mb-12 shadow-sm">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Mountain className="w-3.5 h-3.5" />
            <span>High Altitude Trails</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 leading-tight">
            Walk Into The <span className="text-brand-orange">Himalayas</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            From the beginner snow trails of Kedarkantha to the breathtaking 4,000m summits of Chandrashila and Kuari Pass. Led by certified mountaineering leaders with oxygen support and 4-season alpine gear.
          </p>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search trek (e.g. Kedarkantha, Har Ki Dun)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#DCD6CC] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange shadow-sm"
          />
        </div>

        <div className="flex items-center gap-2">
          {difficulties.map((diff) => (
            <button
              key={diff}
              onClick={() => setDifficultyFilter(diff)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                difficultyFilter === diff
                  ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
                  : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/90 shadow-xs'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Treks Grid */}
      {filteredTreks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreks.map((trek) => (
            <TrekCard key={trek.id} trek={trek} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-6 bg-white rounded-3xl border border-[#DCD6CC] shadow-sm max-w-2xl mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center mx-auto border border-brand-orange/20">
            <Mountain className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold font-display text-slate-900">Custom Himalayan Trekking Expeditions</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
            Our high-altitude trekking schedules and alpine departure dates are tailored based on mountain weather and trail conditions. Chat with our certified mountaineering leads for personalized itineraries and gear support!
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/919997126038?text=Hi%20UKYatra%2C%20I%20would%20like%20to%20inquire%20about%20custom%20Himalayan%20trekking%20expeditions."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-xs shadow-lg hover:brightness-105"
            >
              <span>Consult Trek Leader on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Trekking Safety Promise */}
      <div className="mt-16 bg-white rounded-3xl p-8 border border-[#E2DDD5] shadow-md grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="space-y-2">
          <div className="text-2xl font-bold font-display text-brand-orange">1:6 Ratio</div>
          <h4 className="text-sm font-semibold text-slate-900">Trek Leader to Guest Ratio</h4>
          <p className="text-xs text-slate-600">Strict safety supervision on every batch</p>
        </div>
        <div className="space-y-2 border-y md:border-y-0 md:border-x border-slate-100 py-4 md:py-0">
          <div className="text-2xl font-bold font-display text-emerald-600">WFA Certified</div>
          <h4 className="text-sm font-semibold text-slate-900">Wilderness First Responders</h4>
          <p className="text-xs text-slate-600">Equipped with pulse oximeters & medical oxygen</p>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-bold font-display text-amber-600">-10°C Rated</div>
          <h4 className="text-sm font-semibold text-slate-900">Alpine High Grade Gear</h4>
          <p className="text-xs text-slate-600">4-season tents, warm sleeping bags & crampons</p>
        </div>
      </div>
    </div>
  );
};

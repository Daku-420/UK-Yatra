import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mountain, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  ArrowRightLeft, 
  RotateCcw,
  Clock,
  MapPin,
  Snowflake,
  HeartHandshake
} from 'lucide-react';
import { TREKS } from '../data/treks';
import { TrekCard } from '../components/TrekCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';

export const TrekkingPage: React.FC = () => {
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [durationFilter, setDurationFilter] = useState('All');
  const [regionFilter, setRegionFilter] = useState('All');
  const [seasonFilter, setSeasonFilter] = useState('All');
  const [beginnerOnly, setBeginnerOnly] = useState(false);
  const [snowOnly, setSnowOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const difficulties = ['All', 'Easy', 'Moderate', 'Challenging', 'Difficult'];
  const durations = ['All', 'Under 4 Days', '4-5 Days', '6-7 Days', '8+ Days'];
  const regions = ['All', 'Garhwal', 'Kumaon'];
  const seasons = ['All', 'Winter (Dec-Mar)', 'Spring/Summer (Apr-Jun)', 'Monsoon Bloom (Jul-Aug)', 'Autumn Clear (Sep-Nov)'];

  const filteredTreks = useMemo(() => {
    return TREKS.filter((t) => {
      // Difficulty match
      if (difficultyFilter !== 'All' && t.difficulty !== difficultyFilter) return false;

      // Region match
      if (regionFilter !== 'All' && t.region !== regionFilter) return false;

      // Beginner toggle
      if (beginnerOnly && !t.isBeginnerFriendly) return false;

      // Snow toggle
      if (snowOnly && !t.hasSnow) return false;

      // Duration filter
      if (durationFilter !== 'All') {
        const days = parseInt(t.duration.split(' ')[0], 10) || 5;
        if (durationFilter === 'Under 4 Days' && days >= 4) return false;
        if (durationFilter === '4-5 Days' && (days < 4 || days > 5)) return false;
        if (durationFilter === '6-7 Days' && (days < 6 || days > 7)) return false;
        if (durationFilter === '8+ Days' && days < 8) return false;
      }

      // Season filter
      if (seasonFilter !== 'All') {
        if (seasonFilter === 'Winter (Dec-Mar)' && !t.bestMonths?.some(m => ['Dec', 'Jan', 'Feb', 'Mar'].includes(m))) return false;
        if (seasonFilter === 'Spring/Summer (Apr-Jun)' && !t.bestMonths?.some(m => ['Apr', 'May', 'Jun'].includes(m))) return false;
        if (seasonFilter === 'Monsoon Bloom (Jul-Aug)' && !t.bestMonths?.some(m => ['Jul', 'Aug'].includes(m))) return false;
        if (seasonFilter === 'Autumn Clear (Sep-Nov)' && !t.bestMonths?.some(m => ['Sep', 'Oct', 'Nov'].includes(m))) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = t.name.toLowerCase().includes(query);
        const matchOverview = t.overview.toLowerCase().includes(query);
        const matchTagline = t.tagline.toLowerCase().includes(query);
        const matchBase = t.baseCamp.toLowerCase().includes(query);
        if (!matchName && !matchOverview && !matchTagline && !matchBase) return false;
      }

      return true;
    });
  }, [difficultyFilter, durationFilter, regionFilter, seasonFilter, beginnerOnly, snowOnly, searchQuery]);

  const resetFilters = () => {
    setDifficultyFilter('All');
    setDurationFilter('All');
    setRegionFilter('All');
    setSeasonFilter('All');
    setBeginnerOnly(false);
    setSnowOnly(false);
    setSearchQuery('');
  };

  const hasActiveFilters = difficultyFilter !== 'All' || 
    durationFilter !== 'All' || 
    regionFilter !== 'All' || 
    seasonFilter !== 'All' || 
    beginnerOnly || 
    snowOnly || 
    searchQuery.trim() !== '';

  const trekkingSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Uttarakhand Himalayan Treks Catalog',
    description: 'Curated high-altitude Himalayan treks, snow summits, alpine bugyal meadow trails, and glacial lake expeditions in Uttarakhand.',
    numberOfItems: filteredTreks.length,
    itemListElement: filteredTreks.map((t, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TouristTrip',
        name: t.name,
        description: t.overview,
        touristType: t.difficulty,
        offers: {
          '@type': 'Offer',
          price: t.startingPrice.replace(/[^0-9]/g, '') || '8499',
          priceCurrency: 'INR'
        },
        url: `https://uk-yatra.vercel.app/treks/${t.id}`
      }
    }))
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <SEOHead
        title="Best Treks in Uttarakhand | Himalayan Trekking Expeditions & Packages"
        description="Explore the best treks in Uttarakhand: Kedarkantha, Valley of Flowers, Dayara Bugyal, Har Ki Dun, Kuari Pass & Chopta Chandrashila. Certified leaders, 4-season alpine gear, and transparent pricing."
        canonicalPath="/treks"
        keywords={[
          'Best Treks in Uttarakhand',
          'Uttarakhand Treks',
          'Kedarkantha Trek',
          'Valley of Flowers Trek',
          'Dayara Bugyal',
          'Har Ki Dun Trek',
          'Kuari Pass Trek',
          'Winter Treks in Uttarakhand',
          'Himalayan trekking packages'
        ]}
        schema={trekkingSchema}
      />

      <Breadcrumbs items={[{ label: 'Uttarakhand Treks' }]} />

      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden cream-banner p-8 sm:p-12 mb-10 shadow-sm border border-[#E2DDD5]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Mountain className="w-3.5 h-3.5" />
            <span>High Altitude Trails & Alpine Summits</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 leading-tight">
            Trek Into The Grand <span className="text-brand-orange">Uttarakhand Himalayas</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            From the beginner-friendly snow trails of Kedarkantha and vast green meadows of Dayara Bugyal to the breathtaking 4,000m summits of Chandrashila and UNESCO Valley of Flowers. Led by certified mountaineering leaders with 1:6 safety ratios, medical oxygen, and 4-season alpine gear.
          </p>

          {/* Quick Discovery Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/trek-comparison"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#DCD6CC] text-slate-800 text-xs font-bold hover:border-brand-orange hover:text-brand-orange transition-all shadow-xs"
            >
              <ArrowRightLeft className="w-3.5 h-3.5 text-brand-orange" />
              <span>Compare Treks Tool</span>
            </Link>
            <Link
              to="/trek-calendar"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#DCD6CC] text-slate-800 text-xs font-bold hover:border-brand-orange hover:text-brand-orange transition-all shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-brand-orange" />
              <span>Month-by-Month Trek Calendar</span>
            </Link>
            <Link
              to="/uttarakhand-travel-guide"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-dark/10 border border-brand-dark/20 text-brand-dark text-xs font-bold hover:bg-brand-dark hover:text-white transition-all shadow-xs"
            >
              <Mountain className="w-3.5 h-3.5" />
              <span>Uttarakhand Travel Guide</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Discovery & Multi-Filter Control Hub */}
      <div className="bg-white rounded-3xl p-6 border border-[#E2DDD5] shadow-sm mb-10 space-y-6">
        {/* Search Bar + Primary Filters */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search trek by name, peak, or base camp (e.g. Kedarkantha, Sankri, Nanda Devi)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF9F6] border border-[#DCD6CC] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange shadow-xs"
            />
          </div>

          {/* Quick Filter Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setBeginnerOnly(!beginnerOnly)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                beginnerOnly
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-[#FAF9F6] text-slate-700 border border-[#DCD6CC] hover:border-emerald-500'
              }`}
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Beginner Friendly</span>
            </button>

            <button
              onClick={() => setSnowOnly(!snowOnly)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                snowOnly
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'bg-[#FAF9F6] text-slate-700 border border-[#DCD6CC] hover:border-cyan-500'
              }`}
            >
              <Snowflake className="w-3.5 h-3.5" />
              <span>Snow Treks</span>
            </button>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-200 hover:bg-rose-100 flex items-center gap-1 transition-all"
                title="Reset all active filters"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Secondary Detailed Filter Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-100 text-xs">
          {/* Difficulty Dropdown / Buttons */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Difficulty Grade
            </label>
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="w-full bg-[#FAF9F6] border border-[#DCD6CC] rounded-xl px-3 py-2 text-slate-800 font-medium focus:outline-none focus:border-brand-orange"
            >
              {difficulties.map(d => (
                <option key={d} value={d}>{d === 'All' ? 'All Difficulties' : `${d} Grade`}</option>
              ))}
            </select>
          </div>

          {/* Duration Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Trek Duration
            </label>
            <select
              value={durationFilter}
              onChange={(e) => setDurationFilter(e.target.value)}
              className="w-full bg-[#FAF9F6] border border-[#DCD6CC] rounded-xl px-3 py-2 text-slate-800 font-medium focus:outline-none focus:border-brand-orange"
            >
              {durations.map(dur => (
                <option key={dur} value={dur}>{dur === 'All' ? 'Any Duration' : dur}</option>
              ))}
            </select>
          </div>

          {/* Season Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Best Season / Month
            </label>
            <select
              value={seasonFilter}
              onChange={(e) => setSeasonFilter(e.target.value)}
              className="w-full bg-[#FAF9F6] border border-[#DCD6CC] rounded-xl px-3 py-2 text-slate-800 font-medium focus:outline-none focus:border-brand-orange"
            >
              {seasons.map(s => (
                <option key={s} value={s}>{s === 'All' ? 'All Seasons' : s}</option>
              ))}
            </select>
          </div>

          {/* Region Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Himalayan Region
            </label>
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="w-full bg-[#FAF9F6] border border-[#DCD6CC] rounded-xl px-3 py-2 text-slate-800 font-medium focus:outline-none focus:border-brand-orange"
            >
              {regions.map(r => (
                <option key={r} value={r}>{r === 'All' ? 'Garhwal & Kumaon' : `${r} Region`}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count & Active Status */}
        <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-100">
          <div>
            Showing <span className="font-bold text-slate-900">{filteredTreks.length}</span> authentic Uttarakhand {filteredTreks.length === 1 ? 'trek' : 'treks'}
          </div>
          {hasActiveFilters && (
            <div className="text-[11px] text-slate-500">
              Filters applied • <button onClick={resetFilters} className="text-brand-orange underline font-semibold">Clear all</button>
            </div>
          )}
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
          <h3 className="text-2xl font-bold font-display text-slate-900">No Treks Matched Your Current Filters</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
            Try resetting your difficulty or season filters to see our full catalog of iconic Uttarakhand trails, or connect directly with our expedition leaders for a tailored route.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={resetFilters}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-all"
            >
              Reset Filters
            </button>
            <a
              href="https://wa.me/917817955737?text=Hi%20UKYatra%2C%20I%20would%20like%20to%20inquire%20about%20custom%20Himalayan%20trekking%20expeditions."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md hover:brightness-105"
            >
              <span>Consult Trek Leader on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Trekking Safety Promise & E-E-A-T Badges */}
      <div className="mt-16 bg-white rounded-3xl p-8 border border-[#E2DDD5] shadow-md grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div className="space-y-1.5">
          <div className="text-2xl font-bold font-display text-brand-orange">1:6 Ratio</div>
          <h4 className="text-sm font-semibold text-slate-900">Leader to Trekker Ratio</h4>
          <p className="text-xs text-slate-600">Close supervision on every summit push</p>
        </div>
        <div className="space-y-1.5 border-y md:border-y-0 md:border-x border-slate-100 py-4 md:py-0">
          <div className="text-2xl font-bold font-display text-emerald-600">WFA Certified</div>
          <h4 className="text-sm font-semibold text-slate-900">Wilderness Responders</h4>
          <p className="text-xs text-slate-600">Equipped with pulse oximeters & medical oxygen</p>
        </div>
        <div className="space-y-1.5 border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0">
          <div className="text-2xl font-bold font-display text-amber-600">-10°C Rated</div>
          <h4 className="text-sm font-semibold text-slate-900">Alpine Grade Gear</h4>
          <p className="text-xs text-slate-600">4-season tents, warm sleeping bags & crampons</p>
        </div>
        <div className="space-y-1.5">
          <div className="text-2xl font-bold font-display text-sky-600">Ex-Dehradun</div>
          <h4 className="text-sm font-semibold text-slate-900">Reliable Logistics</h4>
          <p className="text-xs text-slate-600">Direct pickups from railway station & airport</p>
        </div>
      </div>

      {/* Contextual Internal Linking Footer */}
      <div className="mt-12 p-6 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] text-xs text-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-bold text-slate-900 block mb-0.5">Looking for more Uttarakhand adventures?</span>
          <span>Explore our curated tour packages, temple yatras, and comprehensive travel guides.</span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link to="/packages" className="text-brand-orange font-bold hover:underline">
            Tour Packages →
          </Link>
          <span className="text-slate-300">•</span>
          <Link to="/destinations" className="text-brand-orange font-bold hover:underline">
            All Destinations →
          </Link>
          <span className="text-slate-300">•</span>
          <Link to="/spiritual" className="text-brand-orange font-bold hover:underline">
            Char Dham Yatra →
          </Link>
        </div>
      </div>
    </div>
  );
};

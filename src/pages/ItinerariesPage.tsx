import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Clock, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Check, 
  Search, 
  Mountain, 
  Sparkles, 
  Sun,
  ShieldCheck
} from 'lucide-react';
import { TOUR_PACKAGES } from '../data/packages';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { getPackageWhatsAppUrl } from '../config/siteConfig';
import { WhatsAppIcon } from '../components/SocialIcons';

interface ItinerariesPageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const ItinerariesPage: React.FC<ItinerariesPageProps> = ({ onOpenBookingModal }) => {
  const [durationFilter, setDurationFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const durations = ['All', '2 - 3 Days (Weekend)', '4 - 5 Days', '6 - 8 Days', '9+ Days (Grand Circuits)'];
  const categories = ['All', 'Char Dham & Pilgrimage', 'Helicopter Yatra', 'Hill Stations & Lakes', 'Alpine Treks', 'Wildlife & Adventure'];

  const filteredItineraries = useMemo(() => {
    return TOUR_PACKAGES.filter((p) => {
      // Duration filter
      if (durationFilter !== 'All') {
        if (durationFilter === '2 - 3 Days (Weekend)' && p.days > 3) return false;
        if (durationFilter === '4 - 5 Days' && (p.days < 4 || p.days > 5)) return false;
        if (durationFilter === '6 - 8 Days' && (p.days < 6 || p.days > 8)) return false;
        if (durationFilter === '9+ Days (Grand Circuits)' && p.days < 9) return false;
      }

      // Category filter
      if (categoryFilter !== 'All') {
        const cat = p.category.toLowerCase();
        if (categoryFilter === 'Char Dham & Pilgrimage' && !cat.includes('dham') && !cat.includes('spiritual') && !cat.includes('road')) return false;
        if (categoryFilter === 'Helicopter Yatra' && !cat.includes('heli')) return false;
        if (categoryFilter === 'Hill Stations & Lakes' && !cat.includes('leisure') && !cat.includes('hill')) return false;
        if (categoryFilter === 'Alpine Treks' && !cat.includes('trek')) return false;
        if (categoryFilter === 'Wildlife & Adventure' && !cat.includes('adventure') && !cat.includes('wildlife')) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchDest = p.destination.toLowerCase().includes(q);
        const matchOverview = p.overview.toLowerCase().includes(q);
        if (!matchTitle && !matchDest && !matchOverview) return false;
      }

      return true;
    });
  }, [durationFilter, categoryFilter, searchQuery]);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <SEOHead
        title="Uttarakhand Travel Itineraries: Curated Day-Wise Road & Trek Circuits | UK Yatra"
        description="Browse handcrafted Uttarakhand travel itineraries. Weekend breaks, Char Dham road & heli circuits, Auli-Chopta snow routes, and Kumaon lake tours with verified day-by-day schedules."
        canonicalPath="/itineraries"
        keywords={[
          'Uttarakhand Travel Itineraries',
          'Uttarakhand day-wise itinerary',
          'Char Dham Yatra Itinerary',
          'Mussoorie Weekend Itinerary',
          'Auli Chopta Itinerary',
          'Rishikesh 3 Days Itinerary'
        ]}
      />

      <Breadcrumbs items={[{ label: 'Itineraries' }]} />

      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden cream-banner p-8 sm:p-12 mb-10 shadow-sm border border-[#E2DDD5]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Curated Mountain Circuits</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 leading-tight">
            Handcrafted <span className="text-brand-orange">Uttarakhand Itineraries</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            Discover verified day-wise road and trekking circuits across Garhwal and Kumaon. Balanced for realistic mountain driving times, proper elevation acclimatization, and maximum scenic immersion.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/customized-trip"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl orange-gradient-btn text-white text-xs font-bold shadow-md hover:brightness-110"
            >
              <span>Build Custom Itinerary</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/uttarakhand-travel-guide"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#DCD6CC] text-slate-800 text-xs font-bold hover:border-brand-orange hover:text-brand-orange shadow-xs"
            >
              <span>Read Uttarakhand Travel Guide</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Search & Filters Hub */}
      <div className="bg-white rounded-3xl p-6 border border-[#E2DDD5] shadow-sm mb-10 space-y-4">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search itinerary (e.g. Kedarnath, Mussoorie, Auli, Chopta)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF9F6] border border-[#DCD6CC] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange shadow-xs"
            />
          </div>

          <div className="flex items-center gap-3">
            <select
              value={durationFilter}
              onChange={(e) => setDurationFilter(e.target.value)}
              className="bg-[#FAF9F6] border border-[#DCD6CC] rounded-xl px-3 py-2 text-xs text-slate-800 font-semibold focus:outline-none focus:border-brand-orange"
            >
              {durations.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Itinerary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItineraries.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-3xl border border-[#E2DDD5] shadow-md overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={pkg.image}
                  alt={`${pkg.title} Uttarakhand itinerary`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md bg-slate-950/80 text-white">
                  {pkg.duration}
                </div>
                {pkg.category && (
                  <div className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-orange text-white">
                    {pkg.category}
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <Link to={`/packages/${pkg.id}`}>
                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-brand-orange transition-colors line-clamp-1">
                      {pkg.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-brand-orange font-semibold mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{pkg.destination}</span>
                  </p>
                </div>

                {/* Day-by-Day Snippet */}
                <div className="space-y-2 border-t border-slate-100 pt-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Day-by-Day Highlights:
                  </span>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    {pkg.itinerary.slice(0, 3).map((item) => (
                      <div key={item.day} className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-md bg-[#FAF9F6] border border-[#E2DDD5] text-brand-orange text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          D{item.day}
                        </span>
                        <span className="line-clamp-1 font-medium">{item.title}</span>
                      </div>
                    ))}
                    {pkg.itinerary.length > 3 && (
                      <span className="text-[11px] text-slate-400 pl-7 block">
                        + {pkg.itinerary.length - 3} more days in full circuit
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-2">
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 mb-2">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block font-semibold">Starting From</span>
                  <span className="font-display font-bold text-sm text-slate-900">{pkg.startingPrice}</span>
                </div>
                <button
                  onClick={() => onOpenBookingModal(pkg.title)}
                  className="px-3.5 py-1.5 rounded-xl orange-gradient-btn text-white text-xs font-bold shadow-xs hover:brightness-110"
                >
                  Book Itinerary
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <Link
                  to={`/packages/${pkg.id}`}
                  className="py-2.5 rounded-xl bg-[#FAF9F6] border border-[#DCD6CC] text-slate-800 font-bold flex items-center justify-center gap-1 hover:border-brand-orange hover:text-brand-orange transition-all text-center"
                >
                  <span>Full Circuit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={getPackageWhatsAppUrl(pkg.title, pkg.duration)}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 rounded-xl bg-[#25D366] text-white font-bold flex items-center justify-center gap-1 shadow-xs hover:brightness-105 transition-all text-center"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

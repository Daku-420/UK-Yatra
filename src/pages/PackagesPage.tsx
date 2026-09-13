import React, { useState, useMemo } from 'react';
import { Sparkles, Search, Filter } from 'lucide-react';
import { adminStorage } from '../utils/adminStorage';
import { PackageCard } from '../components/PackageCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';
import { getWhatsAppUrl } from '../config/siteConfig';

interface PackagesPageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onOpenBookingModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Spiritual', 'Adventure', 'Trekking', 'Hills & Valleys', 'Wildlife'];
  const durations = ['All', '2-3 Days', '4-5 Days', '6+ Days'];
  const allPackages = adminStorage.getPackages();

  const filteredPackages = useMemo(() => {
    return allPackages.filter((pkg) => {
      const matchCat = selectedCategory === 'All' || pkg.category === selectedCategory;
      const matchSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pkg.overview.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchDuration = true;
      if (selectedDuration === '2-3 Days') matchDuration = pkg.days <= 3;
      else if (selectedDuration === '4-5 Days') matchDuration = pkg.days >= 4 && pkg.days <= 5;
      else if (selectedDuration === '6+ Days') matchDuration = pkg.days >= 6;

      return matchCat && matchSearch && matchDuration;
    });
  }, [selectedCategory, selectedDuration, searchQuery]);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'Tour Packages' }]} />

      {/* Header */}
      <div className="relative rounded-3xl overflow-hidden cream-banner p-8 sm:p-12 mb-12 shadow-sm">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Himalayan Tours</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 leading-tight">
            Uttarakhand <span className="text-brand-orange">Tour Packages</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            All-inclusive holiday packages featuring private sanitized mountain transfers, certified hill drivers, comfortable hand-picked stays, and dedicated 24/7 on-trip coordination.
          </p>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search package (e.g. Kedarnath, Auli)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#DCD6CC] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange shadow-sm"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
                  : 'bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 border border-[#DCD6CC] shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Packages Grid */}
      {allPackages.length === 0 ? (
        <div className="text-center py-16 px-6 bg-white rounded-3xl border border-[#DCD6CC] shadow-sm max-w-2xl mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center mx-auto border border-brand-orange/20">
            <Sparkles className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold font-display text-slate-900">Custom Itineraries & Transparent Pricing</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
            Our 2026 seasonal packages and customized day-wise itineraries are currently being updated by our mountain architects. Connect directly with our team on WhatsApp for custom day-wise quotes and bespoke travel plans!
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl("Hi UKYatra, I would like to get custom itinerary options and pricing for Uttarakhand.")}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-xs shadow-lg hover:brightness-105"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Get Custom Itinerary on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenBookingModal()}
              className="w-full sm:w-auto orange-gradient-btn px-6 py-3 rounded-xl font-display font-semibold text-xs text-white shadow-md"
            >
              <span>Enquire Online</span>
            </button>
          </div>
        </div>
      ) : filteredPackages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              tourPackage={pkg}
              onOpenBookingModal={() => onOpenBookingModal(pkg.title)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#E2DDD5] shadow-sm">
          <p className="text-sm text-slate-600">No packages matched your filter criteria.</p>
          <button
            onClick={() => { setSelectedCategory('All'); setSelectedDuration('All'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2 rounded-xl orange-gradient-btn text-xs font-semibold text-white"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};

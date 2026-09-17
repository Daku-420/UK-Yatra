import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Search, Clock, ArrowRight, Calendar, User, ChevronRight } from 'lucide-react';
import { TRAVEL_GUIDES } from '../data/travelGuides';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/seoSchemas';

export const TravelGuidesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Travel Planning', 'Pilgrimage Guide', 'Trekking Guide', 'Budget & Planning'];

  const filteredGuides = TRAVEL_GUIDES.filter((guide) => {
    const matchCat = selectedCategory === 'All' || guide.category === selectedCategory;
    const matchSearch =
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  const breadcrumbs = [{ label: 'Travel Guides' }];
  const jsonLd = getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Travel Guides', url: '/travel-guides' }]);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <SEOHead
        title="Uttarakhand Travel Guides & Trekking Tips | UK Yatra"
        description="Comprehensive Uttarakhand travel guides curated by local mountain experts. Discover the best time to visit, Kedarnath preparation, Chopta trekking guide, and trip costs."
        canonicalPath="/travel-guides"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Header Banner */}
      <div className="relative rounded-3xl overflow-hidden cream-banner p-8 sm:p-12 mb-10 shadow-xs border border-[#E2DDD5]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Expert Mountain Wisdom</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 leading-tight">
            Uttarakhand <span className="text-brand-orange">Travel Guides</span> & Itinerary Planning
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            Authentic, practical advice for Himalayan travelers. Everything you need to know about Char Dham permits, high-altitude trekking preparations, seasonal weather, and transparent travel expenses.
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search guides, routes, costs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange shadow-xs"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Travel Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredGuides.map((guide) => (
          <article
            key={guide.id}
            className="bg-white rounded-3xl border border-[#E2DDD5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
          >
            <div className="relative h-60 overflow-hidden">
              <img
                src={guide.image}
                alt={guide.heroAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-slate-900 shadow-xs">
                  {guide.category}
                </span>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-950/75 backdrop-blur-md text-white flex items-center gap-1">
                  <Clock className="w-3 h-3 text-brand-orange" />
                  {guide.readTime}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-800">{guide.author.name}</span>
                  <span>•</span>
                  <span>{guide.updatedDate}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 group-hover:text-brand-orange transition-colors leading-snug">
                  <Link to={`/travel-guides/${guide.slug}`}>{guide.title}</Link>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {guide.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {guide.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-full text-[10px] bg-slate-100 text-slate-600">
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/travel-guides/${guide.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-orange hover:text-orange-700 transition-colors"
                >
                  <span>Read Guide</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Sparkles, 
  SlidersHorizontal, 
  MapPin, 
  Mountain, 
  Compass, 
  BookOpen, 
  Calendar,
  Heart,
  Trees,
  CheckCircle2,
  ArrowUpDown
} from 'lucide-react';
import { ARTICLES, ARTICLE_CATEGORIES } from '../data/articles';
import { Article, ArticleCategory } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';

export const ArticlesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'recommended' | 'latest'>('recommended');
  const [visibleCount, setVisibleCount] = useState<number>(9);

  // Top featured articles
  const featuredArticles = useMemo(() => {
    return ARTICLES.filter((a) => a.isFeatured).slice(0, 4);
  }, []);

  // Filter & Search Logic
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      // Category filter
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;

      // Search query across title, excerpt, destination, trek, tags, keywords, month
      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase();
      const matchesSearch =
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        (article.destination && article.destination.toLowerCase().includes(q)) ||
        (article.trek && article.trek.toLowerCase().includes(q)) ||
        (article.month && article.month.toLowerCase().includes(q)) ||
        (article.subcategory && article.subcategory.toLowerCase().includes(q)) ||
        article.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        article.secondaryKeywords.some((kw) => kw.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
      }
      // Recommended: featured first
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const displayedArticles = useMemo(() => {
    return filteredArticles.slice(0, visibleCount);
  }, [filteredArticles, visibleCount]);

  const hasMore = visibleCount < filteredArticles.length;

  const categoryIcons: Record<string, React.ElementType> = {
    All: Sparkles,
    Destinations: MapPin,
    Trekking: Mountain,
    Pilgrimage: Compass,
    'Travel Planning': BookOpen,
    Adventure: Compass,
    'Honeymoon & Couples': Heart,
    'Offbeat Uttarakhand': Trees
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Uttarakhand Travel Articles & Guides',
    description: 'Discover the best places to visit, trekking routes, travel tips, itineraries, pilgrimage guides, hidden destinations, seasonal travel advice and everything you need to plan your Uttarakhand trip.',
    url: 'https://uk-yatra.vercel.app/articles',
    publisher: {
      '@type': 'Organization',
      name: 'UK Yatra',
      url: 'https://uk-yatra.vercel.app'
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: displayedArticles.map((article, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `https://uk-yatra.vercel.app/articles/${article.slug}`,
        name: article.title
      }))
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <SEOHead
        title="Uttarakhand Travel Articles & Guides: Treks, Shrines & Itineraries | UK Yatra"
        description="Explore Uttarakhand like a local. Comprehensive travel guides, trekking trails, Char Dham pilgrimage tips, seasonal weather advice, and budget itineraries."
        canonicalUrl="https://uk-yatra.vercel.app/articles"
        ogType="website"
        schema={collectionSchema}
      />

      <Breadcrumbs items={[{ label: 'Articles & Guides' }]} />

      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden mb-12 shadow-xl border border-white/10">
        <div className="relative h-[340px] sm:h-[380px] w-full flex items-center">
          <img
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop"
            alt="Uttarakhand mountain ranges and valleys"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000044]/95 via-[#000044]/80 to-transparent"></div>

          <div className="relative z-10 max-w-3xl p-6 sm:p-12 space-y-4 text-white">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Uttarakhand Travel Articles & Guides</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight text-white tracking-tight">
              Explore Uttarakhand <span className="text-brand-orange">Like a Local</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal max-w-2xl">
              Discover the best places to visit, trekking routes, travel tips, itineraries, pilgrimage guides, hidden destinations, seasonal travel advice and everything you need to plan your Uttarakhand trip.
            </p>

            {/* Quick Search Bar */}
            <div className="pt-2 max-w-xl">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search Uttarakhand travel guides..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(9);
                  }}
                  className="w-full bg-white/95 text-slate-900 placeholder:text-slate-500 rounded-2xl pl-11 pr-24 py-3 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-orange shadow-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-lg"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides Section (when no active search/category filter) */}
      {selectedCategory === 'All' && !searchQuery.trim() && (
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-orange-100 text-brand-orange">
                <Sparkles className="w-4 h-4" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                Featured Travel Guides
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
              Curated by UK Yatra Mountain Experts
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} featured={false} />
            ))}
          </div>
        </section>
      )}

      {/* Category Pills & Sorting Bar */}
      <section className="mb-8 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Main Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 hide-scrollbar">
            {ARTICLE_CATEGORIES.map((cat) => {
              const Icon = categoryIcons[cat] || BookOpen;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(9);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                    isActive
                      ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/25 scale-[1.02]'
                      : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-brand-orange'}`} />
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-3 shrink-0 self-end lg:self-center">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5 text-brand-orange" />
              <span>Sort:</span>
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'recommended' | 'latest')}
              className="bg-white border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-brand-orange shadow-xs"
            >
              <option value="recommended">Recommended</option>
              <option value="latest">Latest Published</option>
            </select>
          </div>
        </div>

        {/* Results Count & Active Filter Indicator */}
        <div className="flex items-center justify-between text-xs text-slate-500 px-1 pt-1">
          <span>
            Showing <strong className="text-slate-900">{displayedArticles.length}</strong> of{' '}
            <strong className="text-slate-900">{filteredArticles.length}</strong> articles
            {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setVisibleCount(9);
              }}
              className="text-brand-orange font-bold hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </section>

      {/* Articles Grid */}
      {displayedArticles.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </section>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm space-y-4 my-8">
          <BookOpen className="w-12 h-12 text-brand-orange mx-auto opacity-50" />
          <h3 className="text-lg font-bold font-display text-slate-900">
            No travel articles found
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            We couldn't find any guides matching your search. Try adjusting your keyword or exploring another category.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="orange-gradient-btn px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-md inline-block"
          >
            View All Guides
          </button>
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 9)}
            className="px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 hover:border-brand-orange text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-105 cursor-pointer"
          >
            Load More Articles ({filteredArticles.length - visibleCount} remaining)
          </button>
        </div>
      )}

      {/* Editorial Trust Banner */}
      <section className="mt-20 cream-banner rounded-3xl p-8 sm:p-12 border border-[#E2DDD5] shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-brand-orange">
              Editorial Standards & Verification
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
              Grounded in Native Himalayan Experience
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              Every travel article published by UK Yatra is verified against official advisories from Uttarakhand Tourism, GMVN, the Forest Department, and district administrations. We do not publish generic content or unverified statistics.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified transit times & road routes</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Authentic altitude & GPS coordinates</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Government biometric registration guides</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>First-hand mountain safety protocols</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4">
            <h4 className="font-display font-bold text-base text-slate-900">
              Need a Custom Trip Plan?
            </h4>
            <p className="text-xs text-slate-600">
              Have specific dates or requirements? Our Dehradun travel coordinators design customized itineraries in 2 hours.
            </p>
            <a
              href="https://wa.me/917817955737?text=Hi%20UKYatra%2C%20I%20am%20exploring%20your%20articles%20and%20would%20like%20to%20plan%20a%20trip."
              target="_blank"
              rel="noreferrer"
              className="orange-gradient-btn w-full py-3 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 shadow-md"
            >
              <span>Talk to Travel Specialist</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

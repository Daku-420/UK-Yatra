import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  MapPin, 
  Clock, 
  Calendar, 
  TrendingUp, 
  Search, 
  X, 
  Filter, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Award, 
  SlidersHorizontal,
  PhoneCall,
  Mountain,
  ChevronRight
} from 'lucide-react';
import { 
  OUTDOOR_ACTIVITIES, 
  OUTDOOR_CATEGORIES, 
  DESTINATION_ADVENTURES 
} from '../data/outdoorActivities';
import { OutdoorActivityCard } from '../components/OutdoorActivityCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { WhatsAppIcon } from '../components/SocialIcons';
import { OutdoorCategory, ActivityDifficulty, ActivityDuration, ActivitySeason } from '../types';

interface OutdoorActivitiesPageProps {
  onOpenBookingModal?: (packageName?: string) => void;
}

export const OutdoorActivitiesPage: React.FC<OutdoorActivitiesPageProps> = ({ onOpenBookingModal }) => {
  // Dynamic SEO meta tags
  useEffect(() => {
    document.title = "Outdoor Activities in Uttarakhand | UK Yatra";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Discover trekking, rafting, camping, skiing, adventure sports, wildlife experiences and more outdoor activities across Uttarakhand with UK Yatra.'
    );

    return () => {
      document.title = 'UK Yatra | Uttarakhand Travel & Tour Packages';
    };
  }, []);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedDuration, setSelectedDuration] = useState<string>('All');
  const [selectedSeason, setSelectedSeason] = useState<string>('All');
  const [selectedDestination, setSelectedDestination] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  const filterSectionRef = useRef<HTMLDivElement>(null);

  // Available filter choices
  const categoryOptions = [
    'All',
    'Trekking',
    'Water Adventures',
    'Adventure Sports',
    'Camping & Nature',
    'Snow Adventures',
    'Climbing & Rappelling',
    'Wildlife & Nature'
  ];

  const difficultyOptions = ['All', 'Easy', 'Moderate', 'Difficult'];
  const durationOptions = ['All', 'Half Day', '1 Day', '2–3 Days', '4–6 Days', '7+ Days'];
  const seasonOptions = ['All', 'Spring', 'Summer', 'Monsoon', 'Autumn', 'Winter'];
  const destinationOptions = [
    'All',
    'Rishikesh',
    'Auli',
    'Chopta',
    'Mussoorie',
    'Nainital',
    'Dhanaulti',
    'Uttarkashi',
    'Jim Corbett',
    'Other'
  ];

  // Featured 6 experiences
  const featuredAdventures = useMemo(() => {
    return OUTDOOR_ACTIVITIES.filter(act => act.isFeatured).slice(0, 6);
  }, []);

  // Filter logic
  const filteredActivities = useMemo(() => {
    return OUTDOOR_ACTIVITIES.filter((activity) => {
      // Category match
      if (selectedCategory !== 'All' && activity.category !== selectedCategory) {
        return false;
      }
      // Difficulty match
      if (selectedDifficulty !== 'All' && activity.difficulty !== selectedDifficulty) {
        return false;
      }
      // Duration match
      if (selectedDuration !== 'All' && activity.duration !== selectedDuration) {
        return false;
      }
      // Season match
      if (selectedSeason !== 'All') {
        const hasSeason = activity.season?.includes(selectedSeason as ActivitySeason);
        const matchesBestSeason = activity.bestSeason.toLowerCase().includes(selectedSeason.toLowerCase());
        if (!hasSeason && !matchesBestSeason) return false;
      }
      // Destination match
      if (selectedDestination !== 'All') {
        if (selectedDestination === 'Other') {
          const knownDests = ['Rishikesh', 'Auli', 'Chopta', 'Mussoorie', 'Nainital', 'Dhanaulti', 'Uttarkashi', 'Jim Corbett'];
          if (knownDests.includes(activity.destination)) return false;
        } else if (activity.destination !== selectedDestination && !activity.location.includes(selectedDestination)) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = activity.title.toLowerCase().includes(query);
        const matchesDesc = activity.shortDesc.toLowerCase().includes(query);
        const matchesLocation = activity.location.toLowerCase().includes(query);
        const matchesCategory = activity.category.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesLocation && !matchesCategory) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedDifficulty, selectedDuration, selectedSeason, selectedDestination, searchQuery]);

  // Count active filters
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== 'All') count++;
    if (selectedDifficulty !== 'All') count++;
    if (selectedDuration !== 'All') count++;
    if (selectedSeason !== 'All') count++;
    if (selectedDestination !== 'All') count++;
    if (searchQuery.trim()) count++;
    return count;
  }, [selectedCategory, selectedDifficulty, selectedDuration, selectedSeason, selectedDestination, searchQuery]);

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedDifficulty('All');
    setSelectedDuration('All');
    setSelectedSeason('All');
    setSelectedDestination('All');
    setSearchQuery('');
  };

  const scrollToFilters = () => {
    if (filterSectionRef.current) {
      filterSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectCategoryFromHero = (categoryName: string) => {
    setSelectedCategory(categoryName);
    scrollToFilters();
  };

  const handleSelectDestination = (destName: string) => {
    setSelectedDestination(destName);
    scrollToFilters();
  };

  return (
    <div className="pt-24 pb-20 w-full bg-[#F5F3EF] min-h-screen text-slate-800">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#000044] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        {/* Background Ambient Glow & Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000&auto=format&fit=crop"
            alt="Uttarakhand Himalayan Adventures"
            className="w-full h-full object-cover opacity-25 object-center mix-blend-luminosity scale-105 animate-in fade-in duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000044] via-[#000044]/90 to-[#000044]/60"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb Header */}
          <div className="mb-6">
            <Breadcrumbs 
              items={[
                { label: 'Outdoor Activities' }
              ]} 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premier Uttarakhand Himalayan Adventures</span>
              </div>

              {/* Exact H1 requested */}
              <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.1]">
                Adventure Awaits in <span className="text-brand-orange underline decoration-brand-orange/40 decoration-wavy underline-offset-8">Uttarakhand</span>
              </h1>

              {/* Exact Supporting Text requested */}
              <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl">
                From Himalayan treks and snowy adventures to river rafting and thrilling outdoor experiences, discover the best adventures across Uttarakhand with UK Yatra.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToFilters}
                  className="orange-gradient-btn px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-display font-bold text-sm sm:text-base text-white shadow-xl shadow-brand-orange/25 flex items-center gap-2.5 transition-all hover:scale-105 cursor-pointer"
                >
                  <Compass className="w-5 h-5" />
                  <span>Explore Adventures</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenBookingModal ? onOpenBookingModal('Custom Adventure Plan') : null}
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-display font-bold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all hover:scale-105 flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-brand-orange" />
                  <span>Plan Your Adventure</span>
                </button>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>IMF / IRF Certified</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>100% Safety Track Record</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Mountain className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>High Alpine Gear</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Custom Group Batches</span>
                </div>
              </div>
            </div>

            {/* Quick Hero Floating Highlights */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4">
                <div className="text-xs uppercase font-extrabold tracking-wider text-brand-orange flex items-center gap-2">
                  <Flame className="w-4 h-4 text-brand-orange" />
                  <span>Top Adventure Hotspots</span>
                </div>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-white">Rishikesh</div>
                      <div className="text-slate-400 text-[11px]">Rafting, Bungee, Glamping</div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">Active</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-white">Kedarkantha & Har Ki Dun</div>
                      <div className="text-slate-400 text-[11px]">Snow Summits & Ancient Valleys</div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-orange/20 text-brand-orange">Top Trek</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-white">Auli & Gorson Bugyal</div>
                      <div className="text-slate-400 text-[11px]">Skiing & Alpine Backcountry</div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">Snow Slopes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ACTIVITY CATEGORIES SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4" />
              <span>Browse by Category</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              Adventure Categories in Uttarakhand
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl font-medium">
              Explore 8 dedicated disciplines of high-adrenaline and scenic outdoor experiences crafted by Himalayan experts.
            </p>
          </div>
          <button
            type="button"
            onClick={scrollToFilters}
            className="text-xs font-bold text-brand-orange hover:text-orange-700 flex items-center gap-1.5 transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>View All Activities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 8 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OUTDOOR_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <div
                key={cat.id}
                onClick={() => handleSelectCategoryFromHero(cat.name)}
                className={`group relative flex flex-col justify-between rounded-3xl overflow-hidden bg-white border cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl text-left ${
                  isSelected 
                    ? 'border-brand-orange ring-2 ring-brand-orange/30 shadow-brand-orange/15' 
                    : 'border-[#E2DDD5] hover:border-brand-orange/40'
                }`}
              >
                {/* Category Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFEAE2]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                  <div className="absolute top-3 left-3 text-2xl p-2 rounded-2xl bg-white/90 backdrop-blur-md shadow-sm">
                    {cat.icon}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg font-bold font-display leading-tight group-hover:text-brand-orange transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] text-slate-200 line-clamp-1 font-medium mt-0.5">
                      {cat.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="pt-3 border-t border-[#EAE5DC]">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1.5">
                      Popular Examples
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.examples.slice(0, 3).map((ex, i) => (
                        <span 
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-[#F5F3EF] border border-[#E2DDD5] text-[10px] font-semibold text-slate-700 truncate max-w-full"
                        >
                          {ex}
                        </span>
                      ))}
                      {cat.examples.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded-md bg-orange-100 text-brand-orange text-[10px] font-bold">
                          +{cat.examples.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-bold text-brand-orange group-hover:text-orange-700">
                    <span>Filter by {cat.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. FEATURED EXPERIENCES SECTION */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="rounded-3xl bg-gradient-to-br from-[#000044] via-[#000038] to-[#0A0D2C] text-white p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Background */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Handcrafted Expeditions</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
                Featured Adventures
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl">
                The most sought-after adrenaline-packed journeys across Uttarakhand, curated with verified equipment and certified mountaineers.
              </p>
            </div>
            <Link
              to="/packages"
              className="text-xs font-bold text-brand-orange hover:text-white flex items-center gap-1.5 transition-colors self-start md:self-auto"
            >
              <span>Explore All Tour Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Featured Grid (6 rich cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {featuredAdventures.map((activity) => (
              <div 
                key={activity.id}
                className="group flex flex-col bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/15 hover:border-brand-orange/50 transition-all duration-300 hover:-translate-y-1 shadow-lg text-white"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                  
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-orange text-white">
                    {activity.category}
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-slate-950/80 backdrop-blur-md text-white border border-white/20">
                    From {activity.startingPrice}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-base font-bold font-display text-white group-hover:text-brand-orange transition-colors truncate">
                      {activity.title}
                    </h3>
                    <div className="text-[11px] text-slate-300 flex items-center gap-2 mt-0.5">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-brand-orange" />
                        <span className="truncate">{activity.location.split(',')[0]}</span>
                      </span>
                      <span>•</span>
                      <span>{activity.durationDetails || activity.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {activity.shortDesc}
                  </p>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
                    <Link
                      to={`/outdoor-activities/${activity.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-orange hover:text-white transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => onOpenBookingModal ? onOpenBookingModal(activity.title) : null}
                      className="px-3 py-1.5 rounded-lg bg-brand-orange hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DESTINATION + ACTIVITY SECTION */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4" />
              <span>Explore by Hub</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              Adventure by Destination
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl font-medium">
              Click any Uttarakhand hub to filter its premier outdoor sports, snow fields, and wilderness experiences.
            </p>
          </div>
        </div>

        {/* 5 Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {DESTINATION_ADVENTURES.map((dest) => {
            const isSelected = selectedDestination === dest.name;
            return (
              <div
                key={dest.id}
                onClick={() => handleSelectDestination(dest.name)}
                className={`group relative rounded-3xl overflow-hidden bg-white border cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl flex flex-col justify-between ${
                  isSelected 
                    ? 'border-brand-orange ring-2 ring-brand-orange/40 shadow-brand-orange/15' 
                    : 'border-[#E2DDD5] hover:border-brand-orange/40'
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFEAE2]">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>

                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-brand-orange text-white shadow-xs">
                    {dest.badge}
                  </span>

                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <h3 className="text-lg font-bold font-display group-hover:text-brand-orange transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-[10px] text-slate-200 line-clamp-1">
                      {dest.tagline}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2.5">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                      Top Experiences
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {dest.activitiesList.slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span>
                          <span className="truncate font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-[#EAE5DC] flex items-center justify-between text-[11px] font-bold text-brand-orange">
                    <span>{dest.activitiesCount}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. "FIND YOUR ADVENTURE" INTERACTIVE FILTER SECTION */}
      <section ref={filterSectionRef} id="find-your-adventure" className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-28">
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E2DDD5] shadow-lg mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#EAE5DC]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange uppercase tracking-wider mb-1">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Interactive Finder</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
                Find Your Adventure
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                Filter instantly across activity types, difficulty levels, duration, seasons, and destination hubs.
              </p>
            </div>

            {/* Keyword Search Input & Mobile Filter Toggle */}
            <div className="flex items-center gap-2.5 w-full md:w-auto">
              <div className="relative flex-1 md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search treks, rafting, skiing..."
                  className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-[#D5CFC5] bg-[#F9F7F4] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:bg-white"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Mobile Filter Expand Toggle */}
              <button
                type="button"
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="md:hidden flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#000044] text-white text-xs font-bold cursor-pointer"
              >
                <Filter className="w-3.5 h-3.5" />
                <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
              </button>
            </div>
          </div>

          {/* Filter Rows (Always visible on desktop, toggleable on mobile) */}
          <div className={`mt-6 space-y-5 ${showMobileFilters ? 'block' : 'hidden md:block'}`}>
            {/* 1. Activity Type */}
            <div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Activity Type:</span>
                <span className="text-[11px] text-slate-500 font-normal">({categoryOptions.length - 1} categories)</span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {categoryOptions.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedCategory(type)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === type
                        ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/25'
                        : 'bg-[#F5F3EF] hover:bg-orange-50 text-slate-700 hover:text-brand-orange border border-[#E2DDD5]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 4 Multi-Select Criteria Columns (Difficulty, Duration, Season, Destination) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {/* Difficulty */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-900 block">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#D5CFC5] bg-[#F9F7F4] text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 cursor-pointer"
                >
                  {difficultyOptions.map(diff => (
                    <option key={diff} value={diff}>
                      {diff === 'All' ? 'All Difficulties' : diff}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-900 block">Duration</label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#D5CFC5] bg-[#F9F7F4] text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 cursor-pointer"
                >
                  {durationOptions.map(dur => (
                    <option key={dur} value={dur}>
                      {dur === 'All' ? 'All Durations' : dur}
                    </option>
                  ))}
                </select>
              </div>

              {/* Season */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-900 block">Season</label>
                <select
                  value={selectedSeason}
                  onChange={(e) => setSelectedSeason(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#D5CFC5] bg-[#F9F7F4] text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 cursor-pointer"
                >
                  {seasonOptions.map(seas => (
                    <option key={seas} value={seas}>
                      {seas === 'All' ? 'All Seasons' : seas}
                    </option>
                  ))}
                </select>
              </div>

              {/* Destination */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-900 block">Destination</label>
                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#D5CFC5] bg-[#F9F7F4] text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 cursor-pointer"
                >
                  {destinationOptions.map(dest => (
                    <option key={dest} value={dest}>
                      {dest === 'All' ? 'All Uttarakhand Destinations' : dest}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active Filter Chips & Reset Bar */}
            <div className="pt-4 border-t border-[#EAE5DC] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-slate-500">
                  Showing <strong>{filteredActivities.length}</strong> of {OUTDOOR_ACTIVITIES.length} Adventures
                </span>

                {selectedCategory !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-100 text-brand-orange font-bold text-[11px]">
                    Category: {selectedCategory}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory('All')} />
                  </span>
                )}

                {selectedDifficulty !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 font-bold text-[11px]">
                    Difficulty: {selectedDifficulty}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedDifficulty('All')} />
                  </span>
                )}

                {selectedDuration !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 font-bold text-[11px]">
                    Duration: {selectedDuration}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedDuration('All')} />
                  </span>
                )}

                {selectedSeason !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 font-bold text-[11px]">
                    Season: {selectedSeason}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedSeason('All')} />
                  </span>
                )}

                {selectedDestination !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 font-bold text-[11px]">
                    Hub: {selectedDestination}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedDestination('All')} />
                  </span>
                )}
              </div>

              {activeFiltersCount > 0 && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="text-xs font-bold text-rose-600 hover:text-rose-700 underline underline-offset-4 cursor-pointer"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Activity Cards Grid */}
        {filteredActivities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredActivities.map((activity) => (
              <OutdoorActivityCard
                key={activity.id}
                activity={activity}
                linkPrefix="/outdoor-activities"
                onBookNow={(title) => onOpenBookingModal ? onOpenBookingModal(title) : null}
              />
            ))}
          </div>
        ) : (
          /* Empty Search Fallback */
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E2DDD5] shadow-sm max-w-xl mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center mx-auto">
              <Compass className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-display text-slate-900">
              No matching adventures found
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              We couldn't find any activities matching your selected filters. Try broadening your difficulty or season choices.
            </p>
            <button
              type="button"
              onClick={handleClearFilters}
              className="px-6 py-2.5 rounded-xl bg-brand-orange text-white text-xs font-bold shadow-md hover:bg-orange-600 transition-all cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

      {/* 6. HIMALAYAN SAFETY & ACCREDITATION BANNER */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2DDD5] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Certified Himalayan Safety Standards</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
              Your Safety Is Our Uncompromising Commitment
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              Every outdoor activity under UK Yatra is led by qualified professionals certified by the Indian Mountaineering Foundation (IMF), Nehru Institute of Mountaineering (NIM), International Rafting Federation (IRF), and Directorate General of Civil Aviation (DGCA). We adhere to rigorous equipment inspection protocols, carry portable oxygen and wilderness first-aid kits on all high alpine routes, and monitor daily Himalayan weather alerts.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-slate-800">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> CE & UIAA Certified Gear
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Pulse Oximeter Daily Monitoring
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 24/7 Mountain Rescue Support
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#F5F3EF] rounded-2xl p-6 border border-[#E2DDD5] text-center space-y-3">
            <div className="text-xs uppercase font-extrabold text-brand-orange tracking-wider">
              Need a Custom Adventure?
            </div>
            <p className="text-xs text-slate-600">
              Travelling with a college batch, school group, or family? Let our adventure planners design a private itinerary.
            </p>
            <button
              type="button"
              onClick={() => onOpenBookingModal ? onOpenBookingModal('Custom Outdoor Adventure Itinerary') : null}
              className="w-full orange-gradient-btn py-3 rounded-xl font-bold text-xs text-white shadow-md cursor-pointer"
            >
              Plan Your Adventure
            </button>
            <a
              href={getWhatsAppUrl("Hi UK Yatra, I would like to plan a custom outdoor adventure trip in Uttarakhand.")}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-emerald-600 text-white py-2.5 rounded-xl font-bold text-xs transition-colors shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>WhatsApp Our Adventure Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { Search, MapPin, Sparkles, Mountain, Trees, Compass, Waves, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { Destination } from '../types';
import { DestinationCard } from '../components/DestinationCard';
import { Breadcrumbs } from '../components/Breadcrumbs';

import { DESTINATION_MEGA_NAV } from '../data/navigationDestinations';

export interface DestinationCategoryDefinition {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  filterFn: (dest: Destination) => boolean;
}

// Complete destination IDs mapping matching the mega nav categories exactly
export const CATEGORY_SLUGS_MAP: Record<string, string[]> = {
  'hill-stations': [
    'mussoorie', 'nainital', 'auli', 'ranikhet', 'chakrata',
    'lansdowne', 'mukteshwar', 'dhanaulti', 'kausani', 'munsiyari',
    'almora', 'chamba', 'kanatal', 'bhowali', 'bhimtal',
    'dhanachuli', 'ramgarh', 'naukuchiatal', 'chaukori', 'pithoragarh',
    'lohaghat', 'champawat', 'binsar', 'khirsu', 'pangot',
    'peora', 'gwaldam', 'abbott-mount'
  ],
  'spiritual-destinations': [
    'haridwar', 'rishikesh', 'yamunotri', 'gangotri',
    'kedarnath', 'badrinath', 'hemkund-sahib', 'tungnath',
    'jageshwar', 'baijnath', 'patal-bhuvaneshwar', 'dhari-devi',
    'neelkanth-mahadev', 'devprayag', 'rudraprayag', 'karnaprayag',
    'nandprayag', 'vishnuprayag', 'guptkashi', 'ukhimath',
    'triyuginarayan', 'kalpeshwar', 'rudranath', 'madhyamaheshwar',
    'adi-kailash', 'om-parvat', 'piran-kaliyar', 'nanakmatta',
    'chitai-golu-devta', 'kasar-devi', 'katarmal-sun-temple'
  ],
  'nature-escapes': [
    'valley-of-flowers', 'chopta', 'dayara-bugyal', 'deoria-tal',
    'har-ki-dun', 'binsar', 'harsil-valley'
  ],
  'wildlife-national-parks': [
    'jim-corbett', 'rajaji-national-park', 'nanda-devi-national-park',
    'valley-of-flowers', 'gangotri-national-park', 'binsar-wildlife-sanctuary'
  ],
  'villages-hidden-gems': [
    'mana-village', 'sari-village', 'sankri', 'khirsu',
    'lata-village', 'osla-village', 'abbott-mount'
  ]
};

export const DESTINATION_CATEGORIES_CONFIG: Record<string, DestinationCategoryDefinition> = {
  'all': {
    slug: 'all',
    name: 'All Destinations',
    tagline: 'Discover Uttarakhand',
    description: 'From the holy shrines of Kedarnath and Badrinath to the rapids of Rishikesh, the snowy slopes of Auli, and remote Himalayan hamlets. Explore all 76 hand-curated destinations across the Devbhoomi.',
    badge: 'Complete Catalog',
    filterFn: () => true
  },
  'hill-stations': {
    slug: 'hill-stations',
    name: 'Hill Stations',
    tagline: 'Scenic Mountain Towns & British-Era Colonial Retreats',
    description: "Discover Uttarakhand's scenic mountain towns and hill retreats, offering crisp alpine air, panoramic snow views, and pleasant colonial promenades.",
    badge: 'Mountain Retreats',
    filterFn: (dest) => CATEGORY_SLUGS_MAP['hill-stations'].includes(dest.id)
  },
  'spiritual-destinations': {
    slug: 'spiritual-destinations',
    name: 'Spiritual Destinations',
    tagline: 'Sacred Temples, Holy Confluences & Divine Himalayan Shrines',
    description: 'Explore sacred temples, pilgrimage sites and spiritual towns where ancient traditions and holy rivers flow through the Devbhoomi.',
    badge: 'Char Dham & Shrines',
    filterFn: (dest) => CATEGORY_SLUGS_MAP['spiritual-destinations'].includes(dest.id)
  },
  'nature-escapes': {
    slug: 'nature-escapes',
    name: 'Nature Escapes',
    tagline: 'High Alpine Valleys, Wildflower Meadows & Scenic Landscapes',
    description: 'Experience Himalayan valleys, meadows, forests and scenic landscapes teeming with endemic flora, crisp mountain streams, and rolling bugyals.',
    badge: 'Valleys & Meadows',
    filterFn: (dest) => CATEGORY_SLUGS_MAP['nature-escapes'].includes(dest.id)
  },
  'wildlife-national-parks': {
    slug: 'wildlife-national-parks',
    name: 'Wildlife & National Parks',
    tagline: 'Royal Bengal Tigers, Asiatic Elephants & Pristine Sanctuaries',
    description: 'Discover wildlife sanctuaries, national parks and Himalayan biodiversity spanning from sub-tropical riverine jungles to alpine biosphere reserves.',
    badge: 'Tiger Reserves & Sanctuaries',
    filterFn: (dest) => CATEGORY_SLUGS_MAP['wildlife-national-parks'].includes(dest.id)
  },
  'villages-hidden-gems': {
    slug: 'villages-hidden-gems',
    name: 'Villages & Hidden Gems',
    tagline: 'Unspoiled Mountain Hamlets, Border Villages & Offbeat Peace',
    description: 'Discover peaceful Himalayan villages and offbeat destinations where traditional Kumaoni and Garhwali architecture and serene slow living thrive.',
    badge: 'Offbeat Villages',
    filterFn: (dest) => CATEGORY_SLUGS_MAP['villages-hidden-gems'].includes(dest.id)
  },
  'lakes-waterfalls': {
    slug: 'lakes-waterfalls',
    name: 'Lakes & Waterfalls',
    tagline: 'Emerald Glacial Lakes, Water Sports & Cascading Waterfalls',
    description: 'Explore serene mountain lakes, waterfalls and natural escapes perfect for boating, watersports, and tranquil riverside moments.',
    badge: 'Lakes & Cascades',
    filterFn: (dest) => ['tehri', 'nainital', 'deoria-tal', 'mussoorie', 'lansdowne'].includes(dest.id)
  }
};

const CATEGORY_KEYS = [
  'all',
  'hill-stations',
  'spiritual-destinations',
  'nature-escapes',
  'wildlife-national-parks',
  'villages-hidden-gems'
];

interface DestinationsPageProps {
  initialCategorySlug?: string;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({ initialCategorySlug }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active category from prop, pathname or search params
  const activeSlug = useMemo(() => {
    if (initialCategorySlug && DESTINATION_CATEGORIES_CONFIG[initialCategorySlug]) {
      return initialCategorySlug;
    }
    const pathPart = location.pathname.replace('/destinations', '').replace(/^\//, '');
    if (pathPart && DESTINATION_CATEGORIES_CONFIG[pathPart]) {
      return pathPart;
    }
    const queryCat = searchParams.get('category');
    if (queryCat && DESTINATION_CATEGORIES_CONFIG[queryCat]) {
      return queryCat;
    }
    return 'all';
  }, [initialCategorySlug, location.pathname, searchParams]);

  const [selectedCategory, setSelectedCategory] = useState<string>(activeSlug);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setSelectedCategory(activeSlug);
  }, [activeSlug]);

  const currentConfig = DESTINATION_CATEGORIES_CONFIG[selectedCategory] || DESTINATION_CATEGORIES_CONFIG['all'];

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    if (slug === 'all') {
      navigate('/destinations');
    } else {
      navigate(`/destinations/${slug}`);
    }
  };

  const filteredDestinations = useMemo(() => {
    const list = DESTINATIONS.filter(dest => {
      const matchesCat = currentConfig.filterFn(dest);
      const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            dest.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            dest.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });

    const orderList = CATEGORY_SLUGS_MAP[selectedCategory];
    if (orderList && orderList.length > 0) {
      list.sort((a, b) => {
        const idxA = orderList.indexOf(a.id);
        const idxB = orderList.indexOf(b.id);
        if (idxA !== -1 && idxB !== -1) return idxA - idxB;
        if (idxA !== -1) return -1;
        if (idxB !== -1) return 1;
        return 0;
      });
    }

    return list;
  }, [currentConfig, searchQuery, selectedCategory]);

  const breadcrumbsItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return [{ label: 'Destinations' }];
    }
    return [
      { label: 'Destinations', to: '/destinations' },
      { label: currentConfig.name }
    ];
  }, [selectedCategory, currentConfig]);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <Breadcrumbs items={breadcrumbsItems} />

      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden cream-banner p-8 sm:p-12 mb-12 shadow-sm border border-[#E2D9CB]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{currentConfig.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 leading-tight">
            {selectedCategory === 'all' ? (
              <>Uttarakhand <span className="text-brand-orange">Destinations</span></>
            ) : (
              <>{currentConfig.name} <span className="text-brand-orange">in Uttarakhand</span></>
            )}
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {currentConfig.description}
          </p>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search destination (e.g. Auli, Chopta)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#DCD6CC] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange shadow-sm"
          />
        </div>

        {/* 6 Category Pills + All */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
          {CATEGORY_KEYS.map((key) => {
            const cat = DESTINATION_CATEGORIES_CONFIG[key];
            const isSelected = selectedCategory === key;
            return (
              <button
                key={key}
                onClick={() => handleCategoryChange(key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/90 shadow-xs'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Quick Category Title */}
      <div className="text-xs text-slate-600 mb-6 flex items-center justify-between font-medium">
        <span>
          Showing <strong className="text-slate-900">{filteredDestinations.length}</strong> {currentConfig.name.toLowerCase()} in Uttarakhand
        </span>
        {searchQuery && (
          <button onClick={() => setSearchQuery('')} className="text-brand-orange underline font-semibold cursor-pointer">
            Clear search
          </button>
        )}
      </div>

      {/* Destination Grid */}
      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-[#DDD5C7] shadow-sm">
          <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-900">No destinations matched your search in this category</h3>
          <p className="text-xs text-slate-500 mt-1">Try clearing search or exploring all Uttarakhand destinations.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); navigate('/destinations'); }}
            className="mt-4 px-4 py-2 rounded-xl orange-gradient-btn text-xs font-semibold text-white cursor-pointer"
          >
            Reset to All Destinations
          </button>
        </div>
      )}
    </div>
  );
};

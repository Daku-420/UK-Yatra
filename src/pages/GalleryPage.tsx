import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  MapPin, 
  Heart, 
  X, 
  Compass
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SITE_CONFIG } from '../config/siteConfig';
import { InstagramIcon } from '../components/SocialIcons';
import { DESTINATIONS } from '../data/destinations';

interface GalleryItem {
  id: string;
  destId?: string;
  title: string;
  location: string;
  category: 'Spiritual' | 'Treks' | 'Adventure' | 'Wildlife' | 'Scenic';
  image: string;
  likes: number;
}

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalImage, setActiveModalImage] = useState<GalleryItem | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(24);

  // Dynamically assemble all authentic local photography from the destination catalog
  const allGalleryItems = useMemo<GalleryItem[]>(() => {
    const items: GalleryItem[] = [];

    for (const dest of DESTINATIONS) {
      // Map destination category to gallery categories
      let cat: GalleryItem['category'] = 'Scenic';
      if (dest.category === 'Spiritual' || ['haridwar', 'rishikesh', 'kedarnath', 'badrinath', 'gangotri', 'yamunotri', 'tungnath', 'jageshwar', 'baijnath', 'hemkund-sahib', 'patal-bhuvaneshwar', 'dhari-devi', 'neelkanth-mahadev', 'devprayag', 'rudraprayag', 'karnaprayag', 'guptkashi', 'ukhimath', 'triyuginarayan', 'kalpeshwar', 'rudranath', 'madhyamaheshwar', 'adi-kailash', 'om-parvat'].includes(dest.id)) {
        cat = 'Spiritual';
      } else if ((dest.category as string) === 'Wildlife' || (dest.category as string) === 'Wildlife & National Parks' || ['jim-corbett', 'rajaji-national-park', 'nanda-devi-national-park', 'binsar-wildlife-sanctuary', 'kedarnath-wildlife-sanctuary', 'askot-wildlife-sanctuary', 'benog-wildlife-sanctuary', 'sonanadi-wildlife-sanctuary', 'jhilmil-jheel-conservation-reserve', 'asan-conservation-reserve', 'pawalgarh-conservation-reserve', 'ramnagar-forest'].includes(dest.id)) {
        cat = 'Wildlife';
      } else if (dest.category === 'Adventure' || ['rishikesh', 'auli', 'tehri', 'chopta'].includes(dest.id)) {
        cat = 'Adventure';
      } else if (['valley-of-flowers', 'dayara-bugyal', 'deoria-tal', 'har-ki-dun', 'sankri', 'sari-village', 'osla-village'].includes(dest.id)) {
        cat = 'Treks';
      } else {
        cat = 'Scenic';
      }

      const images = (dest.gallery && dest.gallery.length > 0) ? dest.gallery : [dest.image];
      images.forEach((img, idx) => {
        const attractionName = dest.topAttractions && dest.topAttractions[idx % dest.topAttractions.length]?.name;
        const photoTitle = idx === 0 
          ? `${dest.name} Himalayan Panorama` 
          : attractionName 
            ? `${attractionName} in ${dest.name}`
            : `${dest.name} Scenic View #${idx + 1}`;

        // Stable pseudo-random likes between 450 and 2400
        const hash = (dest.id + idx).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const likes = 500 + (hash * 37) % 1900;

        items.push({
          id: `dest-${dest.id}-${idx}`,
          destId: dest.id,
          title: photoTitle,
          location: `${dest.name}, Uttarakhand`,
          category: cat,
          image: img,
          likes
        });
      });
    }

    return items;
  }, []);

  const categories = ['All', 'Spiritual', 'Scenic', 'Wildlife', 'Adventure', 'Treks'];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return allGalleryItems;
    return allGalleryItems.filter(item => item.category === selectedCategory);
  }, [allGalleryItems, selectedCategory]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setVisibleCount(24);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Photo & Video Gallery' }]} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>#CaptureUnforgettableMoments</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
            Uttarakhand Visual Gallery
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Discover authentic local photography from high Himalayan shrines, emerald lake districts, alpine bugyals, and peaceful mountain hamlets across all 113 Devbhoomi destinations.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3 text-xs font-bold text-slate-500">
            <span>{allGalleryItems.length} High-Resolution Photographs</span>
            <span>•</span>
            <span>113 Unique Locations</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map(cat => {
            const count = cat === 'All' 
              ? allGalleryItems.length 
              : allGalleryItems.filter(i => i.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30 border border-brand-orange'
                    : 'bg-white text-slate-700 border border-[#E2DDD5] hover:border-brand-orange hover:text-brand-orange shadow-xs'
                }`}
              >
                <span>{cat}</span>
                <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                  selectedCategory === cat ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedItems.map(item => (
            <div
              key={item.id}
              onClick={() => setActiveModalImage(item)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[4/3] bg-white border border-[#E2DDD5] shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/images/destinations/mussoorie/photo-1.jpg';
                }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-brand-orange text-[11px] font-bold uppercase mb-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-base leading-snug drop-shadow-sm">{item.title}</h3>
                </div>

                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-white shrink-0">
                  <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                  <span>{item.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredItems.length && (
          <div className="text-center mb-16">
            <button
              type="button"
              onClick={() => setVisibleCount(prev => prev + 24)}
              className="px-8 py-3.5 rounded-2xl bg-white hover:bg-brand-orange hover:text-white border border-[#DDD5C7] text-slate-800 text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2 group"
            >
              <span>Load More Photographs</span>
              <span className="text-xs text-slate-400 group-hover:text-white/80">
                (Showing {displayedItems.length} of {filteredItems.length})
              </span>
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        {activeModalImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in"
            onClick={() => setActiveModalImage(null)}
          >
            <div 
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-slate-900 border border-white/20 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveModalImage(null)}
                aria-label="Close photo preview"
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 text-white hover:bg-brand-orange transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-16/10 max-h-[72vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activeModalImage.image}
                  alt={activeModalImage.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/images/destinations/mussoorie/photo-1.jpg';
                  }}
                />
              </div>

              <div className="p-6 flex flex-wrap items-center justify-between gap-4 bg-slate-900 border-t border-white/10">
                <div>
                  <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">{activeModalImage.location}</span>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white mt-0.5">{activeModalImage.title}</h3>
                </div>

                <div className="flex items-center gap-3">
                  {activeModalImage.destId && (
                    <Link
                      to={`/destinations/${activeModalImage.destId}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-bold shadow-md hover:bg-brand-orange/90 transition-colors"
                    >
                      <Compass className="w-3.5 h-3.5" />
                      <span>Explore Destination</span>
                    </Link>
                  )}
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 text-xs font-semibold transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Follow @UKYatradotcom</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Social Feed CTA */}
        <div className="text-center bg-white border border-brand-orange/30 rounded-3xl p-8 sm:p-12 shadow-sm">
          <InstagramIcon className="w-10 h-10 text-brand-orange mx-auto mb-3" />
          <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">
            Tag Us on Instagram: @UKYatradotcom
          </h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto mb-6">
            Share your travel photos with hashtag <span className="text-brand-orange font-bold">#CaptureUnforgettableMoments</span> to be featured on our official page.
          </p>
          <a
            href={SITE_CONFIG.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="orange-gradient-btn px-8 py-3.5 rounded-xl font-display font-semibold text-white inline-block shadow-lg shadow-brand-orange/20"
          >
            Visit Instagram Page
          </a>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  Camera, 
  MapPin, 
  Sparkles, 
  Heart, 
  Eye, 
  X, 
  Share2
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SITE_CONFIG } from '../config/siteConfig';
import { InstagramIcon } from '../components/SocialIcons';

interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: 'Spiritual' | 'Treks' | 'Adventure' | 'Wildlife' | 'Scenic';
  image: string;
  likes: number;
}

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalImage, setActiveModalImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Kedarnath Temple in Morning Sun',
      location: 'Kedarnath (3,584m)',
      category: 'Spiritual',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
      likes: 1240
    },
    {
      id: '2',
      title: 'Badrinath Sanctum & Alaknanda Valley',
      location: 'Badrinath Dham',
      category: 'Spiritual',
      image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop',
      likes: 980
    },
    {
      id: '3',
      title: 'Golden Sunset over Nanda Devi from Auli',
      location: 'Auli Snow Slopes',
      category: 'Scenic',
      image: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=1200&auto=format&fit=crop',
      likes: 1540
    },
    {
      id: '4',
      title: 'White Water Rafting on Ganga Rapids',
      location: 'Shivpuri, Rishikesh',
      category: 'Adventure',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop',
      likes: 890
    },
    {
      id: '5',
      title: 'Tungnath Chandrashila Summit Trail',
      location: 'Chopta, Rudraprayag',
      category: 'Treks',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      likes: 1120
    },
    {
      id: '6',
      title: 'Valley of Flowers Bloom in Monsoon',
      location: 'Chamoli UNESCO Reserve',
      category: 'Treks',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      likes: 2100
    },
    {
      id: '7',
      title: 'Royal Bengal Tiger Safari in Corbett',
      location: 'Jim Corbett National Park',
      category: 'Wildlife',
      image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop',
      likes: 1430
    },
    {
      id: '8',
      title: 'Naini Lake Twilight Boating',
      location: 'Nainital, Kumaon',
      category: 'Scenic',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop',
      likes: 760
    },
    {
      id: '9',
      title: 'Divine Evening Ganga Aarti at Triveni Ghat',
      location: 'Rishikesh',
      category: 'Spiritual',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop',
      likes: 1850
    },
    {
      id: '10',
      title: 'Kedarkantha Winter Snow Summit (3,810m)',
      location: 'Sankri, Uttarkashi',
      category: 'Treks',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
      likes: 1670
    },
    {
      id: '11',
      title: 'Boutique Riverside Glamping at Shivpuri',
      location: 'Shivpuri River Bank',
      category: 'Adventure',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      likes: 910
    },
    {
      id: '12',
      title: 'Tehri Lake Speed Boating & Water Sports',
      location: 'Tehri Dam Reservoir',
      category: 'Adventure',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop',
      likes: 840
    }
  ];

  const categories = ['All', 'Spiritual', 'Treks', 'Adventure', 'Wildlife', 'Scenic'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#000044] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Photo & Video Gallery' }]} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>#CaptureUnforgettableMoments</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
            Uttarakhand Visual Gallery
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Immerse yourself in authentic captures from high Himalayan summits, sacred temple shrines, white-water rapids, and serene hill lakes.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30 border border-brand-orange'
                  : 'bg-white text-slate-700 border border-[#E2DDD5] hover:border-brand-orange hover:text-brand-orange shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setActiveModalImage(item)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[4/3] bg-white border border-[#E2DDD5] shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-brand-orange text-[11px] font-bold uppercase mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-white font-bold text-base leading-snug">{item.title}</h3>
                </div>

                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-white">
                  <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                  <span>{item.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeModalImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/95 backdrop-blur-xl animate-in fade-in"
            onClick={() => setActiveModalImage(null)}
          >
            <div 
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-brand-card border border-white/20"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-brand-dark/80 text-white hover:bg-brand-orange transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={activeModalImage.image}
                alt={activeModalImage.title}
                className="w-full max-h-[75vh] object-cover"
              />

              <div className="p-6 flex flex-wrap items-center justify-between gap-4 bg-brand-card">
                <div>
                  <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">{activeModalImage.location}</span>
                  <h3 className="text-xl font-bold font-display text-white mt-0.5">{activeModalImage.title}</h3>
                </div>

                <div className="flex items-center gap-3">
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

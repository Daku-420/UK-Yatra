import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Mountain, 
  Plane, 
  Train, 
  Car, 
  Check, 
  Sparkles, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Camera,
  Eye,
  Maximize2,
  X
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { adminStorage } from '../utils/adminStorage';
import { TREKS } from '../data/treks';
import { getDestinationWhatsAppUrl } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PackageCard } from '../components/PackageCard';
import { WhatsAppIcon } from '../components/SocialIcons';
import { SEOHead } from '../components/SEOHead';
import { getBreadcrumbSchema } from '../utils/seoSchemas';

interface DestinationDetailPageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({ onOpenBookingModal }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const destination = DESTINATIONS.find((d) => d.id === id) || DESTINATIONS[0];

  const galleryImages = (destination.gallery && destination.gallery.length > 0)
    ? destination.gallery
    : [destination.image];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Reset image index when switching destinations
  useEffect(() => {
    setCurrentImageIndex(0);
    setIsLightboxOpen(false);
  }, [id]);

  // Keyboard navigation for slider and lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (galleryImages.length <= 1) return;
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, galleryImages.length]);

  // Gentle auto-slide every 5 seconds if user isn't hovering and lightbox is closed
  useEffect(() => {
    if (isHovered || isLightboxOpen || galleryImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, isLightboxOpen, galleryImages.length]);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  // Mobile touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  // Find matching packages from dynamic admin storage
  const relatedPackages = adminStorage.getPackages().filter(
    (p) => p.destination.toLowerCase().includes(destination.name.toLowerCase()) || 
           destination.name.toLowerCase().includes(p.destination.toLowerCase())
  );

  const DESTINATION_SEO: Record<string, { title: string; desc: string }> = {
    kedarnath: {
      title: 'Kedarnath Tourism, Darshan Guide & Tour Packages | UK Yatra',
      desc: 'Plan your sacred pilgrimage to Kedarnath Dham with UK Yatra. Discover opening dates, trek details, helicopter booking, temple history, and verified tour packages.'
    },
    chopta: {
      title: 'Chopta Tungnath Travel Guide & Trek Packages | UK Yatra',
      desc: 'Explore Chopta, the Mini Switzerland of Uttarakhand. Book Tungnath Chandrashila trek packages, Deoriatal camping, and verified mountain vehicle transfers.'
    },
    auli: {
      title: 'Auli Tour Packages & Skiing Holiday Guide | UK Yatra',
      desc: 'Experience India’s ski capital with UK Yatra. Book Auli tour packages with Asia’s longest ropeway, snow activities, Gorson Bugyal trek, and views of Nanda Devi.'
    },
    rishikesh: {
      title: 'Rishikesh Tour Packages, Rafting & Camping Retreats | UK Yatra',
      desc: 'Experience Rishikesh with UK Yatra. White water river rafting, luxury riverside camping, Triveni Ghat evening Ganga Aarti, and adventure getaways.'
    },
    mussoorie: {
      title: 'Mussoorie Tour Packages & Queen of Hills Guide | UK Yatra',
      desc: 'Book relaxing Mussoorie holiday packages with UK Yatra. Explore Mall Road, Kempty Falls, George Everest Peak, and scenic Shivalik valley views.'
    },
    nainital: {
      title: 'Nainital Tour Packages & Kumaon Lake Tour Guide | UK Yatra',
      desc: 'Discover Nainital with UK Yatra. Book holiday packages covering Naini Lake boating, Naina Devi Temple, Bhimtal, and Kumaon hill station tours.'
    },
    'valley-of-flowers': {
      title: 'Valley of Flowers Trek Package & Blooming Guide | UK Yatra',
      desc: 'Trek into the UNESCO World Heritage Valley of Flowers with UK Yatra. Discover peak blooming dates, Hemkund Sahib pilgrimage, permits, and base camp stays.'
    },
    badrinath: {
      title: 'Badrinath Dham Tour Packages & Darshan Guide | UK Yatra',
      desc: 'Plan your pilgrimage to Sri Badrinath Temple with UK Yatra. Explore Mana village, Tapt Kund, Swarna Aarti, and verified overland travel packages.'
    }
  };

  const seoInfo = DESTINATION_SEO[destination.id] || {
    title: `${destination.name} Travel Guide & Tour Packages | UK Yatra`,
    desc: `Explore ${destination.name} with UK Yatra. Discover attractions, best time to visit, how to reach, and verified Uttarakhand holiday packages.`
  };

  const jsonLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Destinations', url: '/destinations' },
    { name: destination.name, url: `/destinations/${destination.id}` }
  ]);

  return (
    <div className="pt-24 pb-20">
      <SEOHead
        title={seoInfo.title}
        description={seoInfo.desc}
        canonicalPath={`/destinations/${destination.id}`}
        ogImage={destination.image}
        jsonLd={jsonLd}
      />
      {/* Immersive Destination Hero with Interactive Slider */}
      <div 
        className="relative h-[70vh] min-h-[520px] w-full flex items-end pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Images with Fade/Slide Transitions */}
        {galleryImages.map((imgUrl, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={imgUrl}
              alt={`${destination.name} - Photo ${idx + 1}`}
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        {/* Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-hero-gradient z-[1] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/50 z-[1] pointer-events-none" />

        {/* Left Arrow Slide Button */}
        {galleryImages.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/45 hover:bg-brand-orange text-white border border-white/20 hover:border-brand-orange flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-2xl cursor-pointer group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
        )}

        {/* Right Arrow Slide Button */}
        {galleryImages.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/45 hover:bg-brand-orange text-white border border-white/20 hover:border-brand-orange flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-2xl cursor-pointer group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        )}

        {/* Top-Right Photo Counter Pill & Fullscreen Trigger */}
        {galleryImages.length > 1 && (
          <div className="absolute top-6 right-4 sm:right-8 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(true);
              }}
              className="px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md text-white border border-white/15 hover:border-brand-orange text-xs font-semibold flex items-center gap-2 shadow-lg transition-all cursor-pointer group"
              title="Click to view full photo gallery"
            >
              <Camera className="w-3.5 h-3.5 text-brand-orange group-hover:scale-110 transition-transform" />
              <span>Photo {currentImageIndex + 1} of {galleryImages.length}</span>
              <Maximize2 className="w-3 h-3 text-slate-400 group-hover:text-white transition-colors ml-1" />
            </button>
          </div>
        )}

        {/* Bottom Left Content & Interactive Indicator Controls */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-brand-dark/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Destinations</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-orange text-white">
              {destination.category}
            </span>
            {destination.altitude && (
              <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-brand-dark/80 backdrop-blur-md text-slate-200 border border-white/10 flex items-center gap-1">
                <Mountain className="w-3.5 h-3.5 text-brand-orange" />
                <span>{destination.altitude}</span>
              </span>
            )}
            <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-brand-dark/80 backdrop-blur-md text-slate-200 border border-white/10 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              <span>{destination.idealDuration}</span>
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight">
                {destination.name}
              </h1>
              <p className="mt-2 text-base sm:text-lg text-slate-200 font-normal max-w-2xl drop-shadow">
                {destination.tagline}
              </p>
            </div>

            {/* Thumbnail Preview Strip / Indicators on Hero Bottom */}
            {galleryImages.length > 1 && (
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md p-2 rounded-2xl border border-white/15 overflow-x-auto max-w-full no-scrollbar">
                {galleryImages.map((img, thumbIdx) => (
                  <button
                    key={thumbIdx}
                    type="button"
                    onClick={() => setCurrentImageIndex(thumbIdx)}
                    className={`relative w-12 h-10 sm:w-16 sm:h-12 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      thumbIdx === currentImageIndex
                        ? 'border-brand-orange scale-105 ring-2 ring-brand-orange/40 shadow-lg'
                        : 'border-white/30 opacity-60 hover:opacity-100 hover:border-white'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${thumbIdx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Breadcrumbs
          items={[
            { label: 'Destinations', to: '/destinations' },
            { label: destination.name }
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-6">
          {/* Main Left Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-orange" />
                <span>About {destination.name}</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {destination.description}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Key Highlights:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {destination.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dedicated Destination Photo Gallery Grid */}
            {galleryImages.length > 1 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
                      <Camera className="w-5 h-5 text-brand-orange" />
                      <span>{destination.name} Photo Gallery</span>
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Browse all {galleryImages.length} authentic views, shrines, and landscapes. Click any image to view in fullscreen.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="inline-flex items-center gap-1.5 self-start text-xs font-semibold text-brand-orange bg-brand-orange/10 hover:bg-brand-orange hover:text-white px-3.5 py-1.5 rounded-full transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Fullscreen Slider</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setCurrentImageIndex(idx);
                        setIsLightboxOpen(true);
                      }}
                      className={`group relative aspect-4/3 rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 ${
                        idx === currentImageIndex
                          ? 'border-brand-orange ring-2 ring-brand-orange/40 shadow-md'
                          : 'border-slate-200 hover:border-brand-orange hover:shadow-lg hover:-translate-y-0.5'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${destination.name} - Photo ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                        <span className="text-xs text-white font-medium">Photo {idx + 1}</span>
                        <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Top Attractions Grid */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-6">
                Top Attractions in {destination.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.topAttractions.map((att, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white border border-[#E2DDD5] shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-brand-orange/15 text-brand-orange flex items-center justify-center font-bold text-xs">
                        {i + 1}
                      </span>
                      <h3 className="font-display font-bold text-sm text-slate-900">{att.name}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-8">
                      {att.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How To Reach */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-6">
              <h2 className="text-xl font-bold font-display text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-orange" />
                <span>How to Reach {destination.name}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#E2DDD5] space-y-2">
                  <div className="flex items-center gap-2 text-brand-orange font-bold">
                    <Plane className="w-4 h-4" />
                    <span>By Air</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{destination.howToReach.byAir}</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#E2DDD5] space-y-2">
                  <div className="flex items-center gap-2 text-brand-orange font-bold">
                    <Train className="w-4 h-4" />
                    <span>By Train</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{destination.howToReach.byTrain}</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#E2DDD5] space-y-2">
                  <div className="flex items-center gap-2 text-brand-orange font-bold">
                    <Car className="w-4 h-4" />
                    <span>By Road</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{destination.howToReach.byRoad}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sticky Booking & Query Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-lg space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-orange">
                  Plan Your Travel
                </span>
                <h3 className="text-2xl font-bold font-display text-slate-900 mt-1">
                  Visit {destination.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Best time to visit: <strong className="text-slate-800">{destination.bestTime}</strong>
                </p>
              </div>

              {destination.startingPrice && (
                <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#E2DDD5]">
                  <span className="text-[10px] text-slate-500 block uppercase font-medium">Curated Packages From</span>
                  <div className="font-display font-extrabold text-2xl text-slate-900">
                    {destination.startingPrice} <span className="text-xs font-normal text-slate-500">/ person</span>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <button
                  onClick={() => onOpenBookingModal(destination.name)}
                  className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-bold text-xs text-white shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Request Custom Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getDestinationWhatsAppUrl(destination.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-semibold text-xs transition-all shadow-lg shadow-emerald-900/40"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

              <div className="text-[11px] text-slate-400 pt-4 border-t border-white/5 space-y-2">
                <p className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Customized mountain itineraries</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Sanitised hill-certified vehicles</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Transparent quotes with zero hidden charges</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tour Packages */}
        {relatedPackages.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mb-8">
              Featured Tour Packages for {destination.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  tourPackage={pkg}
                  onOpenBookingModal={() => onOpenBookingModal(pkg.title)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col justify-between p-4 sm:p-6 select-none animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Header Bar */}
          <div 
            className="flex items-center justify-between text-white max-w-7xl mx-auto w-full z-10 py-2" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
              <div>
                <h3 className="font-display font-bold text-lg text-white">{destination.name} Dham</h3>
                <p className="text-xs text-slate-400">
                  Photo {currentImageIndex + 1} of {galleryImages.length} • Use Arrow Keys or Swipe to Navigate
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close photo viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Main Image & Slide Arrows */}
          <div 
            className="relative flex-1 flex items-center justify-center max-h-[75vh] sm:max-h-[80vh] my-auto w-full max-w-6xl mx-auto"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {galleryImages.length > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/70 hover:bg-brand-orange text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xl cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
            )}

            <img
              src={galleryImages[currentImageIndex]}
              alt={`${destination.name} photo ${currentImageIndex + 1}`}
              className="max-h-[72vh] sm:max-h-[78vh] max-w-full rounded-2xl object-contain shadow-2xl transition-all duration-300 select-none"
            />

            {galleryImages.length > 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/70 hover:bg-brand-orange text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xl cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            )}
          </div>

          {/* Lightbox Bottom Thumbnails Strip */}
          <div 
            className="flex items-center justify-center gap-2 overflow-x-auto py-3 max-w-4xl mx-auto w-full z-10 no-scrollbar" 
            onClick={(e) => e.stopPropagation()}
          >
            {galleryImages.map((thumb, tIdx) => (
              <button
                key={tIdx}
                type="button"
                onClick={() => setCurrentImageIndex(tIdx)}
                className={`relative w-14 h-11 sm:w-20 sm:h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  tIdx === currentImageIndex
                    ? 'border-brand-orange scale-105 ring-2 ring-brand-orange/50 shadow-lg'
                    : 'border-white/20 opacity-50 hover:opacity-100 hover:border-white'
                }`}
              >
                <img src={thumb} alt={`Thumbnail ${tIdx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

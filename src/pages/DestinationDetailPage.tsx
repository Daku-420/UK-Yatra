import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
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
  Maximize2,
  X,
  Thermometer,
  Compass,
  HelpCircle,
  Star,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Send,
  Sun,
  CloudRain,
  Snowflake,
  Heart,
  Luggage,
  Users,
  Award
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { DESTINATION_MEGA_NAV } from '../data/navigationDestinations';
import { adminStorage } from '../utils/adminStorage';
import { getDestinationWhatsAppUrl, SITE_CONFIG } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PackageCard } from '../components/PackageCard';
import { WhatsAppIcon } from '../components/SocialIcons';
import { getDestinationExtraData } from '../data/destinationDetailData';
import { SEOHead } from '../components/SEOHead';
import { TREKS } from '../data/treks';
import { TrekCard } from '../components/TrekCard';

interface DestinationDetailPageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({ onOpenBookingModal }) => {
  const { id } = useParams<{ id: string }>();

  // Find destination from standard list or navigation mega nav fallback
  const destination = useMemo(() => {
    const found = DESTINATIONS.find((d) => d.id === id);
    if (found) return found;

    let navItemName = id ? id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Destination';
    let navCategory = 'Hills & Valleys';
    for (const group of DESTINATION_MEGA_NAV) {
      const match = group.destinations.find(d => d.slug === id);
      if (match) {
        navItemName = match.name;
        navCategory = group.name;
        break;
      }
    }

    return {
      id: id || 'destination',
      name: navItemName,
      tagline: `Discover the breathtaking beauty, heritage & mountain vistas of ${navItemName}`,
      category: navCategory as any,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop'
      ],
      description: `Explore ${navItemName}, one of Uttarakhand's most captivating destinations. Experience authentic Himalayan hospitality, crisp alpine air, scenic panoramas, and customized travel itineraries curated by UK Yatra specialists.`,
      highlights: [
        'Panoramic Himalayan viewpoints overlooking eternal snow peaks',
        'Scenic nature and heritage walking trails amidst pines and deodars',
        'Authentic mountain culture & warm Kumaoni/Garhwali hospitality',
        'Peaceful and serene alpine ambiance ideal for rejuvenation'
      ],
      bestTime: 'Round the year (Best: March to June & Sept to Nov)',
      altitude: '1,800 m - 3,200 m',
      idealDuration: '2 - 4 Days',
      startingPrice: '₹5,999',
      isPopular: true,
      topAttractions: [
        { name: `${navItemName} Scenic Ridge`, desc: 'Breathtaking viewpoints overlooking snow-clad peaks and misty pine valleys.' },
        { name: 'Heritage Hamlet & Sacred Shrine', desc: 'Ancient stone architecture, spiritual shrines, and timeless mountain traditions.' },
        { name: 'Forest Nature Trails', desc: 'Enchanting paths lined with pine, oak, and blooming rhododendron trees.' }
      ],
      howToReach: {
        byAir: 'Nearest airport is Jolly Grant Airport (Dehradun) or Pantnagar Airport.',
        byTrain: 'Nearest major railheads are Haridwar, Rishikesh, Dehradun, or Kathgodam.',
        byRoad: 'Well-connected by scenic state highways and mountain roads with taxi services.'
      }
    };
  }, [id]);

  // Comprehensive 14-section dynamic data
  const extraData = useMemo(() => {
    return getDestinationExtraData(
      destination.id,
      destination.name,
      destination.category,
      destination.altitude,
      destination.idealDuration,
      destination.bestTime
    );
  }, [destination]);

  const galleryImages = (destination.gallery && destination.gallery.length > 0)
    ? destination.gallery
    : [destination.image];

  // UI state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeItineraryTab, setActiveItineraryTab] = useState<string>(extraData.itineraries[0]?.id || '');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Quick inquiry form state
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMonth, setInquiryMonth] = useState('');
  const [inquiryTravelers, setInquiryTravelers] = useState('2 Travelers');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Sync active itinerary when destination changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setIsLightboxOpen(false);
    if (extraData.itineraries.length > 0) {
      setActiveItineraryTab(extraData.itineraries[0].id);
    }
  }, [id, extraData]);

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

  // Gentle auto-slide every 5 seconds if not hovered & lightbox closed
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

  // Live packages inventory matching destination
  const allPackages = adminStorage.getPackages();
  const matchedPackages = allPackages.filter(
    (p) => p.destination.toLowerCase().includes(destination.name.toLowerCase()) || 
           destination.name.toLowerCase().includes(p.destination.toLowerCase())
  );
  const displayPackages = matchedPackages.length > 0 ? matchedPackages : allPackages.slice(0, 3);

  // Handle bottom lead inquiry form submission
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) return;

    // Send direct WhatsApp inquiry with structured parameters
    const text = encodeURIComponent(
      `Hello UK Yatra! I am planning a trip to ${destination.name}.\n\n` +
      `*Name:* ${inquiryName}\n` +
      `*Phone:* ${inquiryPhone}\n` +
      `*Tentative Travel Month:* ${inquiryMonth || 'Flexible'}\n` +
      `*Group Size:* ${inquiryTravelers}\n\n` +
      `Please share customized itinerary options and cost quotation.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
    setInquirySubmitted(true);
  };

  const activeItinerary = extraData.itineraries.find(i => i.id === activeItineraryTab) || extraData.itineraries[0];

  const destinationSchema: Record<string, any>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'TouristDestination',
      name: `${destination.name}, Uttarakhand`,
      description: destination.description,
      touristType: destination.category,
      includesAttraction: destination.topAttractions.map(att => ({
        '@type': 'TouristAttraction',
        name: att.name,
        description: att.desc
      })),
      url: `https://uk-yatra.vercel.app/destinations/${destination.id}`
    }
  ];

  if (extraData.faqs && extraData.faqs.length > 0) {
    destinationSchema.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: extraData.faqs.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer
        }
      }))
    });
  }

  const nearbyTreks = TREKS.filter(
    t => t.relatedDestinations?.includes(destination.id) ||
         t.baseCamp.toLowerCase().includes(destination.name.toLowerCase()) ||
         t.location?.toLowerCase().includes(destination.name.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20 bg-[#FFFDF9] min-h-screen text-slate-800">
      <SEOHead
        title={`${destination.name} Travel Guide: Places to Visit, Best Time & Packages | UK Yatra`}
        description={`Plan your trip to ${destination.name}, Uttarakhand. Top attractions, ideal duration (${destination.idealDuration}), best season (${destination.bestTime}), how to reach from Dehradun/Delhi, weather, and verified tour packages.`}
        canonicalPath={`/destinations/${destination.id}`}
        ogImage={destination.image}
        keywords={[
          destination.name,
          `${destination.name} travel guide`,
          `Things to do in ${destination.name}`,
          `Best time to visit ${destination.name}`,
          `${destination.name} tour packages`,
          `Places to visit near ${destination.name}`
        ]}
        schema={destinationSchema}
      />
      {/* ========================================================
          SECTION 1: HERO WITH DESTINATION NAME AND CTA
         ======================================================== */}
      <section 
        className="relative h-[72vh] min-h-[540px] w-full flex items-end pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden select-none hero-dark text-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Images with Transitions */}
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

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-hero-gradient z-[1] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/40 z-[1] pointer-events-none" />

        {/* Hero Slider Navigation Arrows */}
        {galleryImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-brand-orange text-white border border-white/20 hover:border-brand-orange flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-2xl cursor-pointer group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-brand-orange text-white border border-white/20 hover:border-brand-orange flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-2xl cursor-pointer group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </>
        )}

        {/* Top-Right Photo Pill & Fullscreen Lightbox Button */}
        {galleryImages.length > 1 && (
          <div className="absolute top-6 right-4 sm:right-8 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(true);
              }}
              className="px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md text-white border border-white/15 hover:border-brand-orange text-xs font-semibold flex items-center gap-2 shadow-lg transition-all cursor-pointer group"
              title="Click to view photo gallery"
            >
              <Camera className="w-3.5 h-3.5 text-brand-orange group-hover:scale-110 transition-transform" />
              <span>Photo {currentImageIndex + 1} of {galleryImages.length}</span>
              <Maximize2 className="w-3 h-3 text-slate-400 group-hover:text-white transition-colors ml-1" />
            </button>
          </div>
        )}

        {/* Hero Bottom Content & CTAs */}
        <div className="relative z-10 max-w-7xl mx-auto w-full text-white">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-1.5 text-xs text-slate-100 hover:text-white bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 mb-4 transition-colors font-medium shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Explore All Uttarakhand Destinations</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange text-white shadow-md">
              {destination.category}
            </span>
            {destination.altitude && (
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-black/65 backdrop-blur-md text-slate-100 border border-white/20 flex items-center gap-1.5 shadow-sm">
                <Mountain className="w-3.5 h-3.5 text-brand-orange" />
                <span>{destination.altitude}</span>
              </span>
            )}
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-black/65 backdrop-blur-md text-slate-100 border border-white/20 flex items-center gap-1.5 shadow-sm">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              <span>{destination.idealDuration}</span>
            </span>
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-black/65 backdrop-blur-md text-amber-300 border border-white/20 flex items-center gap-1.5 shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>{destination.bestTime}</span>
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight drop-shadow-lg">
                {destination.name}
              </h1>
              <p className="mt-2 text-base sm:text-lg text-slate-100 font-normal leading-relaxed drop-shadow-md">
                {destination.tagline}
              </p>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenBookingModal(destination.name)}
                className="orange-gradient-btn px-6 py-3.5 rounded-xl font-display font-bold text-xs sm:text-sm text-white shadow-xl flex items-center gap-2 hover:scale-[1.02] transition-transform cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Plan My {destination.name} Trip</span>
              </button>

              <a
                href={getDestinationWhatsAppUrl(destination.name)}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-white/15 hover:bg-[#25D366] text-white border border-white/20 backdrop-blur-md flex items-center gap-2 transition-all shadow-lg cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current text-[#25D366] hover:text-white" />
                <span>Chat with Expert</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <Breadcrumbs
          items={[
            { label: 'Destinations', to: '/destinations' },
            { label: destination.name }
          ]}
        />

        {/* ========================================================
            SECTION 2: QUICK FACTS (At-a-glance strip)
           ======================================================== */}
        <section className="mt-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md">
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#F0EBE1]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-brand-orange/15 text-brand-orange flex items-center justify-center font-bold">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                  Quick Facts & Travel Essentials
                </h2>
                <p className="text-xs text-slate-500">Key metrics at a glance for planning your journey</p>
              </div>
            </div>
            <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Verified Himalayan Travel Data
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4D9]">
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">Altitude</span>
              <div className="mt-1 font-display font-bold text-sm sm:text-base text-slate-900 flex items-center gap-1.5">
                <Mountain className="w-4 h-4 text-brand-orange shrink-0" />
                <span>{extraData.quickFacts.altitude}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4D9]">
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">Ideal Duration</span>
              <div className="mt-1 font-display font-bold text-sm sm:text-base text-slate-900 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-orange shrink-0" />
                <span>{extraData.quickFacts.duration}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4D9]">
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">Best Season</span>
              <div className="mt-1 font-display font-bold text-sm sm:text-base text-slate-900 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-orange shrink-0" />
                <span>{extraData.quickFacts.bestSeason}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4D9]">
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">Weather / Avg Temp</span>
              <div className="mt-1 font-display font-bold text-sm sm:text-base text-slate-900 flex items-center gap-1.5">
                <Thermometer className="w-4 h-4 text-brand-orange shrink-0" />
                <span>{extraData.quickFacts.avgTemp}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4D9]">
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">Nearest Airport</span>
              <div className="mt-1 font-display font-bold text-xs sm:text-sm text-slate-800 flex items-center gap-1.5">
                <Plane className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="truncate">{extraData.quickFacts.nearestAirport}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4D9]">
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">Nearest Railhead</span>
              <div className="mt-1 font-display font-bold text-xs sm:text-sm text-slate-800 flex items-center gap-1.5">
                <Train className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="truncate">{extraData.quickFacts.nearestRailhead}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4D9]">
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">Himalayan Region</span>
              <div className="mt-1 font-display font-bold text-xs sm:text-sm text-slate-800 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                <span>{extraData.quickFacts.region}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4D9]">
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">Travel Vibe</span>
              <div className="mt-1 font-display font-bold text-xs sm:text-sm text-slate-800 flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="truncate">{extraData.quickFacts.travelVibe}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2-Column Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          {/* Main Left Content Stream */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* ========================================================
                SECTION 3: DESTINATION OVERVIEW
               ======================================================== */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-4 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-brand-orange" />
                <span>About {destination.name}</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {destination.description}
              </p>

              {/* Photo Strip inside Overview */}
              {galleryImages.length > 1 && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Scenic Glimpse ({galleryImages.length} Images)
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsLightboxOpen(true)}
                      className="text-xs font-semibold text-brand-orange hover:underline flex items-center gap-1"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>View Gallery</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {galleryImages.slice(0, 3).map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setCurrentImageIndex(idx);
                          setIsLightboxOpen(true);
                        }}
                        className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-slate-200 hover:border-brand-orange"
                      >
                        <img src={img} alt={`${destination.name} view`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* ========================================================
                SECTION 4: TOP HIGHLIGHTS
               ======================================================== */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md">
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-brand-orange" />
                <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                  Top Highlights of {destination.name}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {destination.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE4D9]">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ========================================================
                SECTION 5: PLACES TO VISIT (Top Attractions)
               ======================================================== */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                    <span>Places to Visit in {destination.name}</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Must-see landmarks, heritage viewpoints, and spiritual shrines
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.topAttractions.map((att, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white border border-[#E2DDD5] shadow-sm hover:shadow-md hover:border-brand-orange transition-all space-y-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-xl bg-brand-orange/15 text-brand-orange flex items-center justify-center font-bold text-xs">
                        {i + 1}
                      </span>
                      <h3 className="font-display font-bold text-sm sm:text-base text-slate-900">{att.name}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-9">
                      {att.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ========================================================
                SECTION 6: THINGS TO DO / ACTIVITIES
               ======================================================== */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
                  <Luggage className="w-5 h-5 text-brand-orange" />
                  <span>Things to Do & Experiences in {destination.name}</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Immersive activities curated by local mountain experts
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {extraData.activities.map((act, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4D9] flex flex-col justify-between hover:border-brand-orange/60 transition-colors">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-orange/10 text-brand-orange">
                          {act.category}
                        </span>
                        <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{act.duration}</span>
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        {act.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {act.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ========================================================
                SECTION 7: BEST TIME TO VISIT (Seasonality Guide)
               ======================================================== */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-orange" />
                  <span>Best Time to Visit {destination.name}</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Seasonal climate breakdown, temperature ranges, and crowd trends
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {extraData.seasons.map((season, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border transition-all ${
                      season.isPopular 
                        ? 'bg-[#FFF9F2] border-brand-orange/40 shadow-xs' 
                        : 'bg-[#FAF8F5] border-[#EAE4D9]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display font-bold text-base text-slate-900 flex items-center gap-1.5">
                        {season.season === 'Summer' && <Sun className="w-4 h-4 text-amber-500" />}
                        {season.season === 'Monsoon' && <CloudRain className="w-4 h-4 text-blue-500" />}
                        {(season.season === 'Winter' || season.season === 'Autumn') && <Snowflake className="w-4 h-4 text-cyan-500" />}
                        <span>{season.season}</span>
                      </span>
                      {season.isPopular && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-brand-orange text-white">
                          Peak
                        </span>
                      )}
                    </div>

                    <div className="text-xs font-semibold text-slate-600 mb-1">{season.months}</div>
                    <div className="text-xs text-brand-orange font-bold mb-3">{season.temp}</div>
                    
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {season.desc}
                    </p>

                    <span className="inline-block px-2.5 py-1 rounded-lg text-[10px] font-medium bg-white border border-[#EAE4D9] text-slate-700">
                      {season.tag}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* ========================================================
                SECTION 8: HOW TO REACH
               ======================================================== */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-orange" />
                  <span>How to Reach {destination.name}</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Air, rail, and road transit routes connecting major hubs
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4D9] space-y-2">
                  <div className="flex items-center gap-2 text-brand-orange font-bold text-sm">
                    <Plane className="w-4 h-4" />
                    <span>By Air</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed font-normal">{destination.howToReach.byAir}</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4D9] space-y-2">
                  <div className="flex items-center gap-2 text-brand-orange font-bold text-sm">
                    <Train className="w-4 h-4" />
                    <span>By Train</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed font-normal">{destination.howToReach.byTrain}</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4D9] space-y-2">
                  <div className="flex items-center gap-2 text-brand-orange font-bold text-sm">
                    <Car className="w-4 h-4" />
                    <span>By Road</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed font-normal">{destination.howToReach.byRoad}</p>
                </div>
              </div>
            </section>

            {/* ========================================================
                SECTION 9: SUGGESTED ITINERARIES (Tabbed)
               ======================================================== */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-brand-orange" />
                    <span>Suggested Itineraries for {destination.name}</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Day-wise plans crafted by mountain travel planners
                  </p>
                </div>

                {/* Tab Switchers */}
                <div className="flex items-center gap-2 bg-[#F5F3EF] p-1.5 rounded-2xl border border-[#EAE4D9] overflow-x-auto">
                  {extraData.itineraries.map((itin) => (
                    <button
                      key={itin.id}
                      type="button"
                      onClick={() => setActiveItineraryTab(itin.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                        activeItineraryTab === itin.id
                          ? 'bg-brand-orange text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {itin.duration}
                    </button>
                  ))}
                </div>
              </div>

              {activeItinerary && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4D9]">
                    <div>
                      <h3 className="font-display font-bold text-base text-slate-900">{activeItinerary.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Recommended for: <strong className="text-slate-700">{activeItinerary.idealFor}</strong></p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenBookingModal(`${destination.name} - ${activeItinerary.title}`)}
                      className="px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-bold shadow-md hover:bg-brand-orange/90 transition-colors shrink-0"
                    >
                      Customise Plan
                    </button>
                  </div>

                  {/* Day-by-Day Timeline */}
                  <div className="space-y-4 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#EAE4D9]">
                    {activeItinerary.days.map((d) => (
                      <div key={d.day} className="relative pl-10">
                        <div className="absolute left-2 top-1.5 -translate-x-1/2 w-6 h-6 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center ring-4 ring-white shadow-sm">
                          {d.day}
                        </div>
                        <div className="p-4 rounded-2xl bg-white border border-[#EAE4D9] shadow-xs space-y-2">
                          <h4 className="font-display font-bold text-sm text-slate-900">
                            Day {d.day}: {d.title}
                          </h4>
                          <ul className="space-y-1">
                            {d.highlights.map((h, hIdx) => (
                              <li key={hIdx} className="text-xs text-slate-600 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* ========================================================
                SECTION 11: NEARBY DESTINATIONS / EXCURSIONS
               ======================================================== */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-brand-orange" />
                  <span>Nearby Destinations & Excursions from {destination.name}</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Combine your journey with neighboring mountain towns and sacred sights
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {extraData.nearby.map((place, idx) => (
                  <Link
                    key={idx}
                    to={place.path}
                    className="group rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#EAE4D9] hover:border-brand-orange hover:shadow-md transition-all flex flex-col"
                  >
                    <div className="relative aspect-16/10 overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/70 text-white backdrop-blur-md">
                        {place.distance}
                      </span>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display font-bold text-sm text-slate-900 group-hover:text-brand-orange transition-colors">
                          {place.name}
                        </h3>
                        <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                          {place.desc}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-orange mt-3">
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ========================================================
                SECTION 12: FAQS (Expandable Accordion)
               ======================================================== */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-orange" />
                  <span>Frequently Asked Questions about {destination.name}</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Answers to permit, route, ATM, network, and packing queries
                </p>
              </div>

              <div className="space-y-3">
                {extraData.faqs.map((faq, fIdx) => {
                  const isOpen = openFaqIndex === fIdx;
                  return (
                    <div
                      key={fIdx}
                      className="rounded-2xl border border-[#EAE4D9] overflow-hidden bg-[#FAF8F5] transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 font-display font-bold text-sm text-slate-900 hover:text-brand-orange transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-brand-orange shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#F0EBE1] pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ========================================================
                SECTION 13: REVIEWS & VISITOR EXPERIENCES
               ======================================================== */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    <span>Traveler Reviews & Experiences</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Verified guest feedback from UK Yatra journeys
                  </p>
                </div>
                <div className="flex items-center gap-1.5 bg-[#FAF8F5] px-3.5 py-1.5 rounded-full border border-[#EAE4D9]">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-800">4.9 / 5.0</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {extraData.reviews.map((rev) => (
                  <div key={rev.id} className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE4D9] space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center text-amber-500">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] font-semibold text-slate-400">{rev.date}</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed italic">
                        "{rev.review}"
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EAE4D9] flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-slate-900 font-bold block">{rev.author}</strong>
                        <span className="text-[11px] text-slate-500">{rev.location}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                        {rev.tripType}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ========================================================
              RIGHT STICKY CARD (Desktop Planning & Direct Inquiry)
             ======================================================== */}
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
                  Ideal Season: <strong className="text-slate-800">{destination.bestTime}</strong>
                </p>
              </div>

              {destination.startingPrice && (
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4D9]">
                  <span className="text-[10px] text-slate-500 block uppercase font-medium">Curated Packages From</span>
                  <div className="font-display font-extrabold text-2xl text-slate-900">
                    {destination.startingPrice} <span className="text-xs font-normal text-slate-500">/ person</span>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => onOpenBookingModal(destination.name)}
                  className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-bold text-xs text-white shadow-xl flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform cursor-pointer"
                >
                  <span>Request Custom Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getDestinationWhatsAppUrl(destination.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 rounded-xl font-semibold text-xs transition-all shadow-md cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

              <div className="text-[11px] text-slate-600 pt-4 border-t border-[#F0EBE1] space-y-2.5">
                <p className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Customized mountain itineraries</span>
                </p>
                <p className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified hill-certified drivers & cabs</span>
                </p>
                <p className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Transparent quotes with zero hidden fees</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            SECTION 10: TOUR PACKAGES (Live matching packages)
           ======================================================== */}
        <section className="mt-20 pt-12 border-t border-[#EAE4D9]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-brand-orange">
                Ready-To-Book Itineraries
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1">
                Featured Tour Packages for {destination.name}
              </h2>
            </div>
            <Link
              to="/packages"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:underline self-start"
            >
              <span>View All 20+ Tour Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                tourPackage={pkg}
                onOpenBookingModal={() => onOpenBookingModal(pkg.title)}
              />
            ))}
          </div>
        </section>

        {/* ========================================================
            SECTION 14: INQUIRY FORM / FINAL CTA
           ======================================================== */}
        <section className="mt-20 rounded-3xl bg-gradient-to-br from-slate-900 via-brand-dark to-slate-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center mb-8">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange text-white inline-block mb-3">
              Fast Response Guaranteed
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight">
              Ready to Explore {destination.name}?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Tell us your preferred dates and travelers. Our local mountain travel specialists will curate a personalized day-wise plan with fair pricing within 30 minutes.
            </p>
          </div>

          {inquirySubmitted ? (
            <div className="max-w-xl mx-auto p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center font-bold">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Inquiry Sent Successfully!</h3>
              <p className="text-xs text-slate-300">
                Our destination manager is reviewing your travel requirements and will connect with your quote shortly.
              </p>
              <button
                type="button"
                onClick={() => setInquirySubmitted(false)}
                className="text-xs text-brand-orange hover:underline pt-2 block mx-auto"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="relative z-10 max-w-3xl mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-hidden focus:border-brand-orange transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-hidden focus:border-brand-orange transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">Travel Month</label>
                  <input
                    type="text"
                    placeholder="e.g. Next Month / May"
                    value={inquiryMonth}
                    onChange={(e) => setInquiryMonth(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-hidden focus:border-brand-orange transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">No. of Travelers</label>
                  <select
                    value={inquiryTravelers}
                    onChange={(e) => setInquiryTravelers(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-white/20 text-white text-xs focus:outline-hidden focus:border-brand-orange transition-colors"
                  >
                    <option value="Solo Traveler">Solo Traveler</option>
                    <option value="2 Travelers (Couple)">2 Travelers (Couple)</option>
                    <option value="3 - 5 Travelers (Family)">3 - 5 Travelers (Family)</option>
                    <option value="6+ Travelers (Group)">6+ Travelers (Group)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto orange-gradient-btn px-8 py-3.5 rounded-xl font-display font-bold text-xs sm:text-sm text-white shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Get Free Customized Itinerary</span>
                </button>

                <a
                  href={getDestinationWhatsAppUrl(destination.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </form>
          )}

          <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero cancellation fee support on select plans</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-400" />
              <span>12,000+ Happy Pilgrims & Mountain Travelers</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Government Registered Tour Operators</span>
            </span>
          </div>
        </section>
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
                <h3 className="font-display font-bold text-lg text-white">{destination.name}</h3>
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

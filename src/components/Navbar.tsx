import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  SunMedium,
  Compass,
  Car,
  Home,
  Package,
  Info,
  MapPin,
  Footprints,
  Sparkles,
  Trees,
  ArrowRight,
  Mountain,
  Waves,
  Tent,
  School
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { InstagramIcon, FacebookIcon, YoutubeIcon, WhatsAppIcon } from './SocialIcons';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import { FEATURED_PACKAGES, TOUR_CATEGORIES } from '../data/navigationTours';

import { DESTINATION_MEGA_NAV } from '../data/navigationDestinations';

const OUTDOOR_NAV_ITEMS = [
  {
    id: 'river-rafting',
    title: 'River Rafting',
    subtitle: 'Rishikesh Ganga Rapids (Grade III-IV)',
    tag: 'Grade III-IV',
    path: '/outdoor-activities/river-rafting',
    icon: Waves
  },
  {
    id: 'himalayan-trekking',
    title: 'Himalayan Trekking',
    subtitle: 'Kedarkantha, Valley of Flowers, Kuari Pass',
    tag: 'High Altitude',
    path: '/outdoor-activities/himalayan-trekking',
    icon: Mountain
  },
  {
    id: 'auli-skiing-snowboarding',
    title: 'Skiing & Snowboarding',
    subtitle: 'Auli Powder Slopes with Nanda Devi Views',
    tag: 'Auli Slopes',
    path: '/outdoor-activities/auli-skiing-snowboarding',
    icon: Sparkles
  },
  {
    id: 'bungee-jumping',
    title: 'Bungee & Giant Swing',
    subtitle: 'India’s Highest 83m Jump (Mohan Chatti)',
    tag: '83m Jump',
    path: '/outdoor-activities/bungee-jumping',
    icon: Footprints
  },
  {
    id: 'wildlife-jeep-safari',
    title: 'Wildlife Jeep Safari',
    subtitle: 'Jim Corbett & Rajaji National Parks',
    tag: 'Tiger Reserve',
    path: '/outdoor-activities/wildlife-jeep-safari',
    icon: Trees
  },
  {
    id: 'paragliding-fly',
    title: 'Tandem Paragliding',
    subtitle: 'Bhimtal & Naukuchiatal High Flights',
    tag: 'Aero Flight',
    path: '/outdoor-activities/paragliding-fly',
    icon: Compass
  },
  {
    id: 'riverside-luxury-camping',
    title: 'Riverside Glamping',
    subtitle: 'Shivpuri, Kanatal & Chopta Meadows',
    tag: 'Luxury Tents',
    path: '/outdoor-activities/riverside-luxury-camping',
    icon: Tent
  },
  {
    id: 'ganga-aarti-spiritual',
    title: 'Ganga Aarti Trails',
    subtitle: 'Har Ki Pauri & Triveni Ghat River Prayers',
    tag: 'Spiritual Trail',
    path: '/outdoor-activities/ganga-aarti-spiritual',
    icon: Sparkles
  }
];

const EDUCATIONAL_NAV_TRACKS = [
  {
    id: 'school-trips',
    name: 'School Trips (Grades 5-12)',
    tagline: 'Curriculum-Aligned STEM, Ecology & Safe Excursions',
    path: '/school-trips',
    badge: '1:8 Safe',
    icon: School,
    programs: [
      {
        id: 'valley-of-flowers-botany',
        title: 'Valley of Flowers Botanical Expedition',
        duration: '5 Days / 4 Nights',
        focus: 'Botany & High-Altitude Ecology',
        path: '/educational-programmes/valley-of-flowers-botany'
      },
      {
        id: 'jim-corbett-wildlife-ecology',
        title: 'Jim Corbett Wildlife & Conservation Camp',
        duration: '4 Days / 3 Nights',
        focus: 'Biodiversity & Conservation',
        path: '/educational-programmes/jim-corbett-wildlife-ecology'
      }
    ]
  },
  {
    id: 'college-trips',
    name: 'College Trips (University Groups)',
    tagline: 'Adventure Treks, River Rafting & Student Batch Discounts',
    path: '/college-trips',
    badge: 'Hot Deals',
    icon: GraduationCap,
    programs: [
      {
        id: 'kuari-pass-geology',
        title: 'Kuari Pass Alpine Geology Trek',
        duration: '6 Days / 5 Nights',
        focus: 'Alpine Geology & Glaciology',
        path: '/educational-programmes/kuari-pass-geology'
      },
      {
        id: 'rishikesh-whitewater-leadership',
        title: 'Rishikesh White Water & Alpine Leadership',
        duration: '4 Days / 3 Nights',
        focus: 'Leadership & River Dynamics',
        path: '/educational-programmes/rishikesh-whitewater-leadership'
      }
    ]
  },
  {
    id: 'summer-learning',
    name: 'Summer Learning Programmes',
    tagline: 'Wilderness Survival, Astronomy & Leadership Bootcamps',
    path: '/summer-learning-programmes',
    badge: 'Camps',
    icon: SunMedium,
    programs: [
      {
        id: 'himalayan-astro-camp',
        title: 'Himalayan Astro-Camp & Stargazing',
        duration: '5 Days / 4 Nights',
        focus: 'Astronomy & Astrophotography',
        path: '/educational-programmes/himalayan-astro-camp'
      },
      {
        id: 'himalayan-wilderness-survival',
        title: 'Wilderness Survival & Alpine Navigation',
        duration: '6 Days / 5 Nights',
        focus: 'Bushcraft & Alpine Survival',
        path: '/educational-programmes/himalayan-wilderness-survival'
      }
    ]
  }
];

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsDropdownOpen, setDestinationsDropdownOpen] = useState(false);
  const [mobileDestinationsOpen, setMobileDestinationsOpen] = useState(false);
  const [mobileDestinationsCategoryOpen, setMobileDestinationsCategoryOpen] = useState<string | null>('hill-stations');
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<'outdoor' | 'educational' | null>(null);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(true);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<'outdoor' | 'educational' | null>(null);
  const [packagesDropdownOpen, setPackagesDropdownOpen] = useState(false);
  const [mobilePackagesOpen, setMobilePackagesOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>('popular-uttarakhand');
  const destinationsDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const packagesDropdownRef = useRef<HTMLDivElement>(null);
  const closeDestinationsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeActivitiesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closePackagesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (path: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (closeDestinationsTimeoutRef.current) {
      clearTimeout(closeDestinationsTimeoutRef.current);
      closeDestinationsTimeoutRef.current = null;
    }
    if (closeActivitiesTimeoutRef.current) {
      clearTimeout(closeActivitiesTimeoutRef.current);
      closeActivitiesTimeoutRef.current = null;
    }
    if (closePackagesTimeoutRef.current) {
      clearTimeout(closePackagesTimeoutRef.current);
      closePackagesTimeoutRef.current = null;
    }
    setDestinationsDropdownOpen(false);
    setActivitiesOpen(false);
    setActiveSubmenu(null);
    setPackagesDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleDestinationsEnter = () => {
    if (closeDestinationsTimeoutRef.current) {
      clearTimeout(closeDestinationsTimeoutRef.current);
      closeDestinationsTimeoutRef.current = null;
    }
    setDestinationsDropdownOpen(true);
  };

  const handleDestinationsLeave = () => {
    if (closeDestinationsTimeoutRef.current) {
      clearTimeout(closeDestinationsTimeoutRef.current);
    }
    closeDestinationsTimeoutRef.current = setTimeout(() => {
      setDestinationsDropdownOpen(false);
    }, 250);
  };

  const handleActivitiesEnter = () => {
    if (closeActivitiesTimeoutRef.current) {
      clearTimeout(closeActivitiesTimeoutRef.current);
      closeActivitiesTimeoutRef.current = null;
    }
    setActivitiesOpen(true);
  };

  const handleActivitiesLeave = () => {
    if (closeActivitiesTimeoutRef.current) {
      clearTimeout(closeActivitiesTimeoutRef.current);
    }
    closeActivitiesTimeoutRef.current = setTimeout(() => {
      setActivitiesOpen(false);
      setActiveSubmenu(null);
    }, 250);
  };

  const handlePackagesEnter = () => {
    if (closePackagesTimeoutRef.current) {
      clearTimeout(closePackagesTimeoutRef.current);
      closePackagesTimeoutRef.current = null;
    }
    setPackagesDropdownOpen(true);
  };

  const handlePackagesLeave = () => {
    if (closePackagesTimeoutRef.current) {
      clearTimeout(closePackagesTimeoutRef.current);
    }
    closePackagesTimeoutRef.current = setTimeout(() => {
      setPackagesDropdownOpen(false);
    }, 250);
  };

  const handleSubmenuEnter = (type: 'outdoor' | 'educational') => {
    if (closeActivitiesTimeoutRef.current) {
      clearTimeout(closeActivitiesTimeoutRef.current);
      closeActivitiesTimeoutRef.current = null;
    }
    setActiveSubmenu(type);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change or unmount
  useEffect(() => {
    if (closeDestinationsTimeoutRef.current) clearTimeout(closeDestinationsTimeoutRef.current);
    if (closeActivitiesTimeoutRef.current) clearTimeout(closeActivitiesTimeoutRef.current);
    if (closePackagesTimeoutRef.current) clearTimeout(closePackagesTimeoutRef.current);
    setMobileMenuOpen(false);
    setDestinationsDropdownOpen(false);
    setActivitiesOpen(false);
    setActiveSubmenu(null);
    setPackagesDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (closeDestinationsTimeoutRef.current) clearTimeout(closeDestinationsTimeoutRef.current);
      if (closeActivitiesTimeoutRef.current) clearTimeout(closeActivitiesTimeoutRef.current);
      if (closePackagesTimeoutRef.current) clearTimeout(closePackagesTimeoutRef.current);
    };
  }, []);

  // Lock body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (destinationsDropdownRef.current && !destinationsDropdownRef.current.contains(event.target as Node)) {
        setDestinationsDropdownOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActivitiesOpen(false);
      }
      if (packagesDropdownRef.current && !packagesDropdownRef.current.contains(event.target as Node)) {
        setPackagesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const isDestinationsActive = location.pathname.startsWith('/destinations');

  const isPackagesActive = 
    location.pathname.startsWith('/packages') || 
    location.pathname.startsWith('/tours');

  const isActivitiesActive = 
    location.pathname.startsWith('/outdoor-activities') ||
    location.pathname.startsWith('/activities') || 
    location.pathname.startsWith('/educational-programme') || 
    location.pathname.startsWith('/educational-program') || 
    location.pathname.startsWith('/college-trips') || 
    location.pathname.startsWith('/school-trips') || 
    location.pathname.startsWith('/summer-learning');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Slim Contact Bar - 100% Solid Vibrant Orange Across Entire Width */}
      <div className="top-contact-bar border-b border-orange-700/30 py-2 px-4 sm:px-8 text-xs font-medium text-white shadow-md hidden md:block">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${SITE_CONFIG.phone}`} 
              className="flex items-center gap-1.5 text-white hover:text-amber-100 font-semibold transition-colors drop-shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
            <span className="text-white/40">|</span>
            <a 
              href={`mailto:${SITE_CONFIG.email}`} 
              className="flex items-center gap-1.5 text-white hover:text-amber-100 font-semibold transition-colors drop-shadow-sm"
            >
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>{SITE_CONFIG.email}</span>
            </a>
            <span className="text-white/40">|</span>
            <span className="text-white font-semibold flex items-center gap-1.5 bg-black/15 px-2.5 py-0.5 rounded-full border border-white/25 drop-shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-yellow-200" />
              <span>Uttarakhand Tourism Certified Partner</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-white">
            <span className="text-[11px] text-white/90 font-semibold mr-1">Follow Us:</span>
            <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noreferrer" className="p-1 rounded-md hover:bg-white/20 text-white transition-colors" aria-label="Instagram">
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noreferrer" className="p-1 rounded-md hover:bg-white/20 text-white transition-colors" aria-label="Facebook">
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a href={SITE_CONFIG.social.youtube} target="_blank" rel="noreferrer" className="p-1 rounded-md hover:bg-white/20 text-white transition-colors" aria-label="YouTube">
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation - Consistent Dark Frosted Header Across All Pages */}
      <nav className="glass-header py-3 shadow-xl border-b border-white/10 px-3 sm:px-5 lg:px-6 xl:px-8 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-2 xl:gap-4">
          {/* Official UK Yatra Brand Logo */}
          <Link to="/" className="flex items-center group py-0.5 shrink-0 mr-1 xl:mr-2">
            <Logo size="md" className="group-hover:scale-[1.02] transition-transform drop-shadow-md" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
            <Link 
              to="/" 
              className={`px-2.5 xl:px-3 py-2 text-sm font-semibold rounded-xl whitespace-nowrap transition-colors ${
                isActive('/') 
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              Home
            </Link>

            {/* Destinations Dropdown */}
            <div 
              ref={destinationsDropdownRef}
              className="relative"
              onMouseEnter={handleDestinationsEnter}
              onMouseLeave={handleDestinationsLeave}
            >
              <button
                type="button"
                onClick={() => setDestinationsDropdownOpen(!destinationsDropdownOpen)}
                className={`px-3 xl:px-3.5 py-2 text-sm font-semibold rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isDestinationsActive || destinationsDropdownOpen
                    ? 'text-brand-orange' 
                    : 'text-white hover:text-brand-orange'
                }`}
                aria-expanded={destinationsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Destinations</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${destinationsDropdownOpen ? 'rotate-180 text-brand-orange' : 'text-white/70'}`} />
              </button>

              {/* Dropdown Menu Panel with seamless hover bridge */}
              {destinationsDropdownOpen && (
                <div 
                  className="absolute top-full -left-12 xl:-left-6 pt-2 z-50 animate-in fade-in duration-150"
                  onMouseEnter={handleDestinationsEnter}
                  onMouseLeave={handleDestinationsLeave}
                >
                  <div 
                    className="w-[960px] xl:w-[1080px] max-w-[calc(100vw-2.5rem)] bg-[#FFFDF9] border-2 border-[#E2D9CB] rounded-3xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35)] p-5 text-slate-900 ring-1 ring-black/10"
                    style={{ maxHeight: 'calc(100vh - 90px)', overflowY: 'auto' }}
                  >
                    {/* Header bar */}
                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#E2D9CB]">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-orange-100 text-brand-orange border border-orange-200">
                          <MapPin className="w-4 h-4" />
                        </span>
                        <div>
                          <span className="text-xs uppercase font-black tracking-wider text-slate-950 block">
                            Uttarakhand Destinations
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium">
                            Explore hill stations, spiritual shrines, nature escapes, wildlife reserves & hidden hamlets
                          </span>
                        </div>
                      </div>
                      <Link
                        to="/destinations"
                        onClick={(e) => {
                          handleNavigate('/destinations', e);
                          setDestinationsDropdownOpen(false);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-orange-50 hover:bg-brand-orange text-brand-orange hover:text-white border border-orange-200 hover:border-brand-orange font-black text-xs flex items-center gap-1.5 transition-all shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer"
                      >
                        <span>View All Destinations</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* 5 Categories organized in a clean balanced mega-menu */}
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3.5 xl:gap-4">
                      {DESTINATION_MEGA_NAV.map((group) => {
                        const IconComponent = group.icon;
                        return (
                          <div 
                            key={group.id}
                            className="flex flex-col justify-between p-3.5 rounded-2xl bg-white border border-[#DDD5C7] shadow-2xs hover:shadow-xs transition-shadow"
                          >
                            <div>
                              {/* Category Header */}
                              <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-[#E2D9CB]">
                                <span className="p-1 rounded-md bg-[#F8F5EE] text-brand-orange border border-[#E2D9CB] shrink-0">
                                  <IconComponent className="w-3.5 h-3.5" />
                                </span>
                                <h3 className="text-[11.5px] uppercase font-black tracking-wider text-slate-950 leading-tight">
                                  {group.name}
                                </h3>
                              </div>

                              {/* Destination List */}
                              <ul className="space-y-1 mb-3">
                                {group.destinations.map((dest) => (
                                  <li key={dest.slug}>
                                    <Link
                                      to={dest.path}
                                      onClick={(e) => {
                                        handleNavigate(dest.path, e);
                                        setDestinationsDropdownOpen(false);
                                      }}
                                      className="text-[12px] font-semibold text-slate-900 hover:text-brand-orange transition-colors flex items-center gap-1.5 py-0.5 group/item cursor-pointer"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover/item:bg-brand-orange group-hover/item:scale-125 transition-all shrink-0" />
                                      <span className="group-hover/item:translate-x-0.5 transition-transform truncate">
                                        {dest.name}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Explore All Category CTA */}
                            <div className="pt-2 border-t border-[#E2D9CB]/80 mt-auto">
                              <Link
                                to={group.path}
                                onClick={(e) => {
                                  handleNavigate(group.path, e);
                                  setDestinationsDropdownOpen(false);
                                }}
                                className="text-[11px] font-black text-brand-orange hover:text-orange-700 transition-colors flex items-center justify-between group/cta cursor-pointer"
                              >
                                <span className="truncate">{group.exploreAllText}</span>
                                <ArrowRight className="w-3 h-3 group-hover/cta:translate-x-0.5 transition-transform shrink-0" />
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tour Packages Dropdown */}
            <div 
              ref={packagesDropdownRef}
              className="relative"
              onMouseEnter={handlePackagesEnter}
              onMouseLeave={handlePackagesLeave}
            >
              <button
                type="button"
                onClick={() => setPackagesDropdownOpen(!packagesDropdownOpen)}
                className={`px-3 xl:px-3.5 py-2 text-sm font-semibold rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isPackagesActive || packagesDropdownOpen
                    ? 'text-brand-orange' 
                    : 'text-white hover:text-brand-orange'
                }`}
                aria-expanded={packagesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Tour Packages</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${packagesDropdownOpen ? 'rotate-180 text-brand-orange' : 'text-white/70'}`} />
              </button>

              {/* Dropdown Menu Panel with seamless hover bridge */}
              {packagesDropdownOpen && (
                <div 
                  className="absolute top-full -left-12 xl:-left-6 pt-2 z-50 animate-in fade-in duration-150"
                  onMouseEnter={handlePackagesEnter}
                  onMouseLeave={handlePackagesLeave}
                >
                  <div 
                    className="w-[900px] xl:w-[960px] max-w-[calc(100vw-2.5rem)] bg-[#FFFDF9] border-2 border-[#E2D9CB] rounded-3xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35)] p-5.5 text-slate-900 ring-1 ring-black/10"
                    style={{ maxHeight: 'calc(100vh - 90px)', overflowY: 'auto' }}
                  >
                  {/* 1. Featured & Popular Destinations Section */}
                  <div className="pb-4 mb-4 border-b border-[#E2D9CB]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-orange-100 text-brand-orange border border-orange-200">
                          <Sparkles className="w-4 h-4" />
                        </span>
                        <span className="text-xs uppercase font-black tracking-wider text-slate-950">
                          Featured & Popular Packages
                        </span>
                      </div>
                      <Link
                        to="/packages"
                        onClick={() => setPackagesDropdownOpen(false)}
                        className="text-xs font-black text-brand-orange hover:text-orange-700 transition-colors flex items-center gap-1"
                      >
                        <span>View All Tours</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                      {FEATURED_PACKAGES.map((item) => (
                        <Link
                          key={item.slug}
                          to={item.path}
                          onClick={() => setPackagesDropdownOpen(false)}
                          className="group/feat flex flex-col p-2.5 rounded-xl bg-white hover:bg-orange-50/40 border border-[#DDD5C7] hover:border-brand-orange shadow-xs hover:shadow-md transition-all text-left"
                        >
                          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden mb-2 bg-[#EFEAE2]">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover/feat:scale-105 transition-transform duration-300"
                              loading="lazy"
                              onError={(e) => {
                                const target = e.currentTarget as HTMLImageElement;
                                target.onerror = null;
                                target.src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400&auto=format&fit=crop';
                              }}
                            />
                            {item.badge && (
                              <span className="absolute top-1 right-1 text-[9px] font-black px-1.5 py-0.5 rounded bg-brand-orange text-white shadow-xs">
                                {item.badge}
                              </span>
                            )}
                            <span className="absolute bottom-1 left-1 text-[9px] font-black px-1.5 py-0.5 rounded bg-slate-950/90 text-white backdrop-blur-xs">
                              {item.duration}
                            </span>
                          </div>
                          <div className="text-[13px] font-black text-slate-950 group-hover/feat:text-brand-orange transition-colors truncate leading-tight">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-700 font-semibold truncate mt-1">
                            {item.subtitle}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* 2. Six Tour Categories Grid (3 Columns) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-4">
                    {TOUR_CATEGORIES.map((category) => (
                      <div key={category.id} className="space-y-2">
                        <div className="flex items-center gap-2 pb-1.5 border-b border-[#E2D9CB]">
                          <span className="text-brand-orange p-1 rounded-md bg-orange-100/70 border border-orange-200/60">
                            {category.id === 'popular-uttarakhand' && <SunMedium className="w-3.5 h-3.5" />}
                            {category.id === 'trekking-adventure' && <Footprints className="w-3.5 h-3.5" />}
                            {category.id === 'spiritual-char-dham' && <Sparkles className="w-3.5 h-3.5" />}
                            {category.id === 'kumaon' && <Compass className="w-3.5 h-3.5" />}
                            {category.id === 'offbeat-uttarakhand' && <MapPin className="w-3.5 h-3.5" />}
                            {category.id === 'wildlife-nature' && <Trees className="w-3.5 h-3.5" />}
                          </span>
                          <h3 className="text-xs uppercase font-black tracking-wider text-slate-950">
                            {category.name}
                          </h3>
                        </div>
                        <ul className="space-y-0.5">
                          {category.items.map((item) => (
                            <li key={item.slug}>
                              <Link
                                to={item.path}
                                onClick={(e) => handleNavigate(item.path, e)}
                                className="group flex items-center justify-between py-1.5 px-2 rounded-lg text-xs hover:bg-[#EFE8DC] transition-colors cursor-pointer"
                              >
                                <span className="flex items-center gap-1.5 truncate">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/60 group-hover:bg-brand-orange transition-colors shrink-0"></span>
                                  <span className="truncate font-bold text-slate-950 group-hover:text-brand-orange text-[12.5px] leading-tight">{item.name}</span>
                                </span>
                                {item.duration && (
                                  <span className="text-[11px] font-extrabold text-slate-900 group-hover:text-brand-orange font-mono ml-2 shrink-0 bg-white group-hover:bg-orange-50 px-2 py-0.5 rounded-md border border-slate-300 group-hover:border-orange-300 shadow-2xs">
                                    {item.duration}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* 3. Bottom Footer Bar */}
                  <div className="pt-3.5 border-t border-[#E2D9CB] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs bg-[#F4EFE6] -mx-5.5 -mb-5.5 px-5.5 py-3 rounded-b-3xl">
                    <div className="text-slate-950 flex items-center gap-2 text-xs font-black">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Uttarakhand Tourism Certified Partner • 100% Customized Itineraries</span>
                    </div>
                    <Link
                      to="/packages"
                      onClick={(e) => handleNavigate('/packages', e)}
                      className="px-5 py-2 rounded-xl bg-brand-orange hover:bg-orange-600 text-white font-black text-xs shadow-md shadow-brand-orange/25 flex items-center gap-1.5 transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <span>VIEW ALL TOURS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
                </div>
              )}
            </div>

            {/* Treks & Himalayan Trails */}
            <Link 
              to="/treks" 
              className={`px-3 xl:px-3.5 py-2 text-sm font-semibold rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                isActive('/treks') || isActive('/trekking') || isActive('/trek-comparison') || isActive('/trek-calendar')
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              <Mountain className="w-3.5 h-3.5 text-brand-orange" />
              <span>Treks</span>
            </Link>

            {/* Travel Guide Pillar */}
            <Link 
              to="/uttarakhand-travel-guide" 
              className={`px-3 xl:px-3.5 py-2 text-sm font-semibold rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                isActive('/uttarakhand-travel-guide') || isActive('/itineraries')
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-brand-orange" />
              <span>Travel Guide</span>
            </Link>

            <Link 
              to="/book-vehicle" 
              className={`px-3 xl:px-3.5 py-2 text-sm font-semibold rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                isActive('/book-vehicle') || isActive('/car-rental')
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              <Car className="w-3.5 h-3.5 text-brand-orange" />
              <span>Book Vehicle</span>
            </Link>

            {/* Activities Dropdown Column */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleActivitiesEnter}
              onMouseLeave={handleActivitiesLeave}
            >
              <button
                type="button"
                onClick={() => setActivitiesOpen(!activitiesOpen)}
                className={`px-3 xl:px-3.5 py-2 text-sm font-semibold rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isActivitiesActive || activitiesOpen
                    ? 'text-brand-orange' 
                    : 'text-white hover:text-brand-orange'
                }`}
                aria-expanded={activitiesOpen}
                aria-haspopup="true"
              >
                <span>Activities</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activitiesOpen ? 'rotate-180 text-brand-orange' : 'text-white/70'}`} />
              </button>

              {/* Dropdown Menu Container (Side-by-Side Flex on Hover with seamless bridge) */}
              {activitiesOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 flex items-start z-50 animate-in fade-in duration-150"
                  onMouseEnter={handleActivitiesEnter}
                  onMouseLeave={handleActivitiesLeave}
                >
                  {/* Left Column: Sub-headings in Light Cream Theme */}
                  <div className="w-80 bg-[#FFFDF9] border-2 border-[#E2D9CB] rounded-3xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/10 p-3 space-y-2.5 shrink-0 text-slate-900">
                    <div className="px-2 pt-0.5 pb-1 text-[10px] uppercase font-black tracking-wider text-slate-500 flex items-center justify-between border-b border-[#E2D9CB]">
                      <span>Explore Activities</span>
                      <span className="text-[9px] text-brand-orange font-bold">Hover to Preview</span>
                    </div>

                    {/* Outdoor Activities Subheading */}
                    <div
                      onMouseEnter={() => handleSubmenuEnter('outdoor')}
                      className="relative"
                    >
                      <Link
                        to="/outdoor-activities"
                        onClick={(e) => handleNavigate('/outdoor-activities', e)}
                        className={`flex items-center justify-between p-3 rounded-2xl border transition-all group shadow-xs cursor-pointer ${
                          activeSubmenu === 'outdoor'
                            ? 'bg-orange-50/80 border-brand-orange ring-2 ring-brand-orange/30 shadow-md'
                            : 'bg-white hover:bg-orange-50/50 border-[#DDD5C7] hover:border-brand-orange'
                        }`}
                      >
                        <div className="flex items-start gap-2.5 min-w-0">
                          <div className="p-2 rounded-xl bg-brand-orange text-white shadow-md shadow-brand-orange/25 group-hover:scale-105 transition-transform shrink-0">
                            <Mountain className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-black text-slate-950 group-hover:text-brand-orange transition-colors flex items-center gap-1.5">
                              <span>Outdoor Activities</span>
                              <span className="text-[9px] bg-brand-orange text-white font-extrabold px-1.5 py-0.2 rounded-sm shadow-xs">Featured</span>
                            </div>
                            <p className="text-[11px] text-slate-600 font-medium leading-snug mt-0.5 truncate">
                              Trekking, rafting, camping, skiing & sports
                            </p>
                          </div>
                        </div>
                        <ChevronRight className={`w-4 h-4 text-brand-orange transition-transform shrink-0 ml-1.5 ${activeSubmenu === 'outdoor' ? 'translate-x-1 font-bold' : ''}`} />
                      </Link>
                    </div>

                    {/* Educational Programmes Subheading */}
                    <div
                      onMouseEnter={() => handleSubmenuEnter('educational')}
                      className="relative"
                    >
                      <Link
                        to="/educational-programmes"
                        onClick={(e) => handleNavigate('/educational-programmes', e)}
                        className={`flex items-center justify-between p-3 rounded-2xl border transition-all group shadow-xs cursor-pointer ${
                          activeSubmenu === 'educational'
                            ? 'bg-indigo-50/80 border-indigo-600 ring-2 ring-indigo-500/30 shadow-md'
                            : 'bg-white hover:bg-indigo-50/40 border-[#DDD5C7] hover:border-indigo-500'
                        }`}
                      >
                        <div className="flex items-start gap-2.5 min-w-0">
                          <div className="p-2 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/25 group-hover:scale-105 transition-transform shrink-0">
                            <GraduationCap className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-black text-slate-950 group-hover:text-indigo-600 transition-colors flex items-center gap-1.5">
                              <span>Educational Programmes</span>
                              <span className="text-[9px] bg-emerald-600 text-white font-extrabold px-1.5 py-0.2 rounded-sm shadow-xs">1:8 Safe</span>
                            </div>
                            <p className="text-[11px] text-slate-600 font-medium leading-snug mt-0.5 truncate">
                              School excursions, college treks & summer camps
                            </p>
                          </div>
                        </div>
                        <ChevronRight className={`w-4 h-4 text-indigo-600 transition-transform shrink-0 ml-1.5 ${activeSubmenu === 'educational' ? 'translate-x-1 font-bold' : ''}`} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Flyout Panel: Outdoor Activities (Light Cream Luxury Theme) */}
                  {activeSubmenu === 'outdoor' && (
                    <div 
                      className="relative ml-2 w-[520px] bg-[#FFFDF9] border-2 border-[#E2D9CB] rounded-3xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/10 p-5 text-slate-900 before:content-[''] before:absolute before:-left-3 before:top-0 before:bottom-0 before:w-3"
                      onMouseEnter={() => handleSubmenuEnter('outdoor')}
                      onMouseLeave={handleActivitiesLeave}
                    >
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E2D9CB]">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-orange-100 text-brand-orange border border-orange-200">
                            <Mountain className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-black uppercase tracking-wider text-slate-950">
                              Outdoor Activities & Sports
                            </h4>
                            <p className="text-[11px] text-slate-600 font-medium">
                              Instant access to Uttarakhand's top mountain, river & snow adventures
                            </p>
                          </div>
                        </div>
                        <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-brand-orange text-white shadow-xs">
                          8 Activities
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 max-h-[380px] overflow-y-auto pr-1 hide-scrollbar">
                        {OUTDOOR_NAV_ITEMS.map((item) => {
                          const IconComp = item.icon;
                          return (
                            <Link
                              key={item.id}
                              to={item.path}
                              onClick={(e) => handleNavigate(item.path, e)}
                              className="group/item flex flex-col justify-between p-2.5 rounded-xl bg-white hover:bg-orange-50/60 border border-[#DDD5C7] hover:border-brand-orange shadow-xs hover:shadow-md transition-all text-left cursor-pointer"
                            >
                              <div className="flex items-start gap-2.5">
                                <div className="p-1.5 rounded-lg bg-orange-50 border border-orange-200/60 text-brand-orange group-hover/item:scale-105 group-hover/item:bg-brand-orange group-hover/item:text-white transition-all shrink-0 mt-0.5">
                                  <IconComp className="w-3.5 h-3.5" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-[12px] font-bold text-slate-900 group-hover/item:text-brand-orange transition-colors truncate">
                                    {item.title}
                                  </div>
                                  <div className="text-[10px] text-slate-500 font-medium line-clamp-1 leading-tight mt-0.5">
                                    {item.subtitle}
                                  </div>
                                </div>
                              </div>
                              <div className="mt-2 flex items-center justify-between text-[10px] pt-1.5 border-t border-slate-100">
                                <span className="font-semibold text-slate-500 bg-[#F4EFE6] px-1.5 py-0.5 rounded text-[9.5px]">{item.tag}</span>
                                <span className="text-brand-orange font-bold group-hover/item:translate-x-0.5 transition-transform flex items-center gap-0.5">
                                  Explore <ChevronRight className="w-3 h-3" />
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="pt-3 mt-3 border-t border-[#E2D9CB] flex items-center justify-between text-xs bg-[#F4EFE6] -mx-5 -mb-5 px-5 py-3 rounded-b-3xl">
                        <div className="text-slate-800 text-xs font-bold flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Certified Safety Gear & Mountain Guides Included</span>
                        </div>
                        <Link
                          to="/outdoor-activities"
                          onClick={(e) => handleNavigate('/outdoor-activities', e)}
                          className="px-4 py-1.5 rounded-xl bg-brand-orange hover:bg-orange-600 text-white font-black text-xs shadow-md shadow-brand-orange/20 flex items-center gap-1 transition-all hover:scale-[1.02] cursor-pointer shrink-0"
                        >
                          <span>VIEW ALL ACTIVITIES</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Right Flyout Panel: Educational Programmes (Light Cream Luxury Theme) */}
                  {activeSubmenu === 'educational' && (
                    <div 
                      className="relative ml-2 w-[540px] bg-[#FFFDF9] border-2 border-[#E2D9CB] rounded-3xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/10 p-5 text-slate-900 before:content-[''] before:absolute before:-left-3 before:top-0 before:bottom-0 before:w-3"
                      onMouseEnter={() => handleSubmenuEnter('educational')}
                      onMouseLeave={handleActivitiesLeave}
                    >
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E2D9CB]">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700 border border-indigo-200">
                            <GraduationCap className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-black uppercase tracking-wider text-slate-950">
                              Educational Programmes & Field Trips
                            </h4>
                            <p className="text-[11px] text-slate-600 font-medium">
                              Curriculum-aligned STEM, ecology, college summits & student camps
                            </p>
                          </div>
                        </div>
                        <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-emerald-600 text-white shadow-xs">
                          1:8 Safe Ratio
                        </span>
                      </div>

                      <div className="space-y-2.5 max-h-[400px] overflow-y-auto pr-1 hide-scrollbar">
                        {EDUCATIONAL_NAV_TRACKS.map((track) => {
                          const TrackIcon = track.icon;
                          return (
                            <div key={track.id} className="p-3 rounded-2xl bg-[#FBF8F2] border border-[#E2D9CB]">
                              <div className="flex items-center justify-between mb-2">
                                <Link
                                  to={track.path}
                                  onClick={(e) => handleNavigate(track.path, e)}
                                  className="flex items-center gap-2 group/trk text-xs font-black text-slate-950 hover:text-brand-orange transition-colors cursor-pointer"
                                >
                                  <span className="p-1 rounded-md bg-white border border-[#DDD5C7] text-brand-orange group-hover/trk:bg-orange-50 transition-colors">
                                    <TrackIcon className="w-3.5 h-3.5" />
                                  </span>
                                  <span>{track.name}</span>
                                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-white border border-[#DDD5C7] text-slate-700 font-bold">{track.badge}</span>
                                </Link>
                                <Link
                                  to={track.path}
                                  onClick={(e) => handleNavigate(track.path, e)}
                                  className="px-2.5 py-1 rounded-lg bg-orange-100 hover:bg-brand-orange border border-orange-200/80 hover:border-brand-orange text-brand-orange hover:text-white font-extrabold text-[11px] flex items-center gap-1 transition-all cursor-pointer shadow-2xs hover:shadow-xs shrink-0 active:scale-95"
                                  title={`View all ${track.name}`}
                                >
                                  <span>All Trips</span>
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>

                              <div className="grid grid-cols-2 gap-2">
                                {track.programs.map((prog) => (
                                  <Link
                                    key={prog.id}
                                    to={prog.path}
                                    onClick={(e) => handleNavigate(prog.path, e)}
                                    className="p-2.5 rounded-xl bg-white hover:bg-orange-50/50 border border-[#DDD5C7] hover:border-brand-orange transition-all text-left group/prog flex flex-col justify-between shadow-xs hover:shadow-md cursor-pointer"
                                  >
                                    <div>
                                      <div className="text-[11.5px] font-bold text-slate-950 group-hover/prog:text-brand-orange line-clamp-1">
                                        {prog.title}
                                      </div>
                                      <div className="text-[10px] text-slate-500 font-medium line-clamp-1 mt-0.5">
                                        {prog.focus}
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-100 text-[10px]">
                                      <span className="font-semibold text-slate-600 bg-[#F4EFE6] px-1.5 py-0.5 rounded text-[9.5px]">{prog.duration}</span>
                                      <span className="text-brand-orange font-bold flex items-center gap-0.5">
                                        Details <ChevronRight className="w-3 h-3" />
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="pt-3 mt-3 border-t border-[#E2D9CB] flex items-center justify-between text-xs bg-[#F4EFE6] -mx-5 -mb-5 px-5 py-3 rounded-b-3xl">
                        <div className="text-slate-800 text-xs font-bold flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                          <span>Institutional Proposals & Custom Dates Available</span>
                        </div>
                        <Link
                          to="/educational-programmes"
                          onClick={(e) => handleNavigate('/educational-programmes', e)}
                          className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shadow-md shadow-indigo-600/20 flex items-center gap-1.5 transition-all hover:scale-[1.02] cursor-pointer shrink-0"
                        >
                          <span>VIEW ALL TRIPS & HUB</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className={`px-3 xl:px-3.5 py-2 text-sm font-semibold rounded-xl whitespace-nowrap transition-colors ${
                isActive('/about') 
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              About Us
            </Link>

            <Link 
              to="/contact" 
              className={`px-3 xl:px-3.5 py-2 text-sm font-semibold rounded-xl whitespace-nowrap transition-colors ${
                isActive('/contact') 
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:block w-48 xl:w-64 min-w-0 shrink">
            <SearchBar />
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <a 
              href={getWhatsAppUrl("Hi UKYatra, I would like to enquire about Uttarakhand trips.")}
              target="_blank"
              rel="noreferrer"
              className="p-2 xl:p-2.5 rounded-xl bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366]/25 border border-[#25D366]/35 transition-all hover:scale-105 shrink-0"
              aria-label="Quick WhatsApp"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 xl:w-5 xl:h-5 text-[#25D366]" />
            </a>

            <button
              onClick={onOpenBookingModal}
              className="orange-gradient-btn px-4 xl:px-5 py-2 xl:py-2.5 rounded-xl font-display font-semibold text-xs xl:text-sm text-white flex items-center gap-2 shadow-lg shadow-brand-orange/20 whitespace-nowrap shrink-0"
            >
              <span>Book Your Trip</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a 
              href={getWhatsAppUrl("Hi UKYatra, I'd like to plan a trip.")}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/35"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg transition-colors bg-white/10 text-white hover:bg-white/20"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu - Midnight Slate Navy Matching #000044 */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] md:top-[88px] h-[calc(100dvh-60px)] md:h-[calc(100dvh-88px)] bg-[#000044]/98 backdrop-blur-2xl border-t border-white/10 z-50 overflow-y-auto p-5 pb-[calc(6.5rem+env(safe-area-inset-bottom,0px))] animate-in slide-in-from-top-4 duration-200 flex flex-col justify-between shadow-2xl text-white">
          <div className="space-y-2">
            <div className="pb-3 mb-2 border-b border-white/10 px-2 flex items-center justify-between">
              <Logo size="sm" />
            </div>
            {/* Mobile Search */}
            <div className="px-1 pb-2">
              <SearchBar autoFocus={false} onClose={() => setMobileMenuOpen(false)} />
            </div>
            <div className="text-xs uppercase font-bold tracking-wider text-slate-400 px-3 py-1">
              Main Menu
            </div>
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                isActive('/') 
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              <Home className="w-5 h-5 text-brand-orange shrink-0" />
              <span>Home</span>
            </Link>

            {/* Destinations Mobile Accordion */}
            <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden my-1">
              <button
                type="button"
                onClick={() => setMobileDestinationsOpen(!mobileDestinationsOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-white hover:text-brand-orange transition-colors cursor-pointer"
                aria-expanded={mobileDestinationsOpen}
              >
                <span className="flex items-center gap-2.5">
                  <MapPin className="w-5 h-5 text-brand-orange shrink-0" />
                  <span>Destinations</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDestinationsOpen ? 'rotate-180 text-brand-orange' : 'text-slate-400'}`} />
              </button>

              {mobileDestinationsOpen && (
                <div className="px-3 pb-3 space-y-2.5 bg-[#FFFDF9] border-t border-[#E2D9CB] pt-3 text-slate-900 rounded-b-xl">
                  <div className="flex items-center justify-between px-1 mb-1">
                    <span className="text-[10px] uppercase font-black tracking-wider text-brand-orange flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5" />
                      <span>5 Travel Categories</span>
                    </span>
                    <Link
                      to="/destinations"
                      onClick={(e) => {
                        handleNavigate('/destinations', e);
                        setMobileDestinationsOpen(false);
                        setMobileMenuOpen(false);
                      }}
                      className="text-[11px] font-black text-brand-orange hover:underline flex items-center gap-0.5"
                    >
                      <span>View All</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="space-y-1.5">
                    {DESTINATION_MEGA_NAV.map((group) => {
                      const IconComponent = group.icon;
                      const isCategoryExpanded = mobileDestinationsCategoryOpen === group.id;
                      return (
                        <div key={group.id} className="rounded-xl bg-white border border-[#DDD5C7] overflow-hidden shadow-2xs">
                          <button
                            type="button"
                            onClick={() => setMobileDestinationsCategoryOpen(isCategoryExpanded ? null : group.id)}
                            className="w-full flex items-center justify-between p-2.5 text-left font-black text-xs text-slate-900 hover:text-brand-orange transition-colors cursor-pointer"
                          >
                            <div className="flex items-center gap-2">
                              <span className="p-1 rounded-md bg-[#F8F5EE] text-brand-orange border border-[#E2D9CB]">
                                <IconComponent className="w-3.5 h-3.5" />
                              </span>
                              <span>{group.name}</span>
                            </div>
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCategoryExpanded ? 'rotate-180 text-brand-orange' : 'text-slate-400'}`} />
                          </button>

                          {isCategoryExpanded && (
                            <div className="px-3 pb-3 pt-1 border-t border-slate-100 space-y-2">
                              <div className="grid grid-cols-2 gap-1 py-1">
                                {group.destinations.map((dest) => (
                                  <Link
                                    key={dest.slug}
                                    to={dest.path}
                                    onClick={(e) => {
                                      handleNavigate(dest.path, e);
                                      setMobileDestinationsOpen(false);
                                      setMobileMenuOpen(false);
                                    }}
                                    className="py-1.5 px-2 rounded-lg text-xs font-bold text-slate-900 hover:text-brand-orange hover:bg-orange-50 active:bg-orange-100 transition-colors truncate"
                                  >
                                    {dest.name}
                                  </Link>
                                ))}
                              </div>
                              <div className="pt-2 border-t border-slate-100">
                                <Link
                                  to={group.path}
                                  onClick={(e) => {
                                    handleNavigate(group.path, e);
                                    setMobileDestinationsOpen(false);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="text-xs font-black text-brand-orange hover:text-orange-700 flex items-center justify-between py-1"
                                >
                                  <span>{group.exploreAllText}</span>
                                  <ArrowRight className="w-3 h-3" />
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Tour Packages Mobile Accordion */}
            <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden my-1">
              <button
                type="button"
                onClick={() => setMobilePackagesOpen(!mobilePackagesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-white hover:text-brand-orange transition-colors cursor-pointer"
                aria-expanded={mobilePackagesOpen}
              >
                <span className="flex items-center gap-2.5">
                  <Package className="w-5 h-5 text-brand-orange shrink-0" />
                  <span>Tour Packages</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobilePackagesOpen ? 'rotate-180 text-brand-orange' : 'text-slate-400'}`} />
              </button>

              {mobilePackagesOpen && (
                <div className="px-3 pb-3 space-y-3 bg-[#FFFDF9] border-t border-[#E2D9CB] pt-3 text-slate-900 rounded-b-xl">
                  {/* Featured Quick Cards */}
                  <div>
                    <div className="text-[10px] uppercase font-black tracking-wider text-brand-orange mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured Packages</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {FEATURED_PACKAGES.map((feat) => (
                        <Link
                          key={feat.slug}
                          to={feat.path}
                          onClick={() => { setMobilePackagesOpen(false); setMobileMenuOpen(false); }}
                          className="flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-orange-50 border border-[#DDD5C7] text-left group shadow-xs transition-colors"
                        >
                          <img 
                            src={feat.image} 
                            alt={feat.name} 
                            className="w-10 h-10 rounded-md object-cover shrink-0" 
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement;
                              target.onerror = null;
                              target.src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400&auto=format&fit=crop';
                            }}
                          />
                          <div className="min-w-0">
                            <div className="text-xs font-black text-slate-950 group-hover:text-brand-orange truncate">{feat.name}</div>
                            <div className="text-[11px] text-slate-700 font-bold">{feat.duration}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* 6 Category Sub-accordions */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] uppercase font-black tracking-wider text-slate-700 mb-1">
                      Destinations & Circuits
                    </div>
                    {TOUR_CATEGORIES.map((category) => {
                      const isCatOpen = mobileCategoryOpen === category.id;
                      return (
                        <div key={category.id} className="rounded-lg bg-white border border-[#DDD5C7] overflow-hidden shadow-xs">
                          <button
                            type="button"
                            onClick={() => setMobileCategoryOpen(isCatOpen ? null : category.id)}
                            className="w-full flex items-center justify-between p-2.5 text-xs font-black text-slate-950 hover:text-brand-orange cursor-pointer"
                          >
                            <span className="flex items-center gap-1.5">
                              <span className="text-brand-orange text-xs">
                                {category.id === 'popular-uttarakhand' && '☀️'}
                                {category.id === 'trekking-adventure' && '🥾'}
                                {category.id === 'spiritual-char-dham' && '✨'}
                                {category.id === 'kumaon' && '🧭'}
                                {category.id === 'offbeat-uttarakhand' && '📍'}
                                {category.id === 'wildlife-nature' && '🌲'}
                              </span>
                              <span>{category.name}</span>
                            </span>
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCatOpen ? 'rotate-180 text-brand-orange' : 'text-slate-500'}`} />
                          </button>
                          {isCatOpen && (
                            <div className="px-3 pb-2.5 pt-1 space-y-1 bg-[#F9F6F0] border-t border-[#DDD5C7]">
                              {category.items.map((item) => (
                                <Link
                                  key={item.slug}
                                  to={item.path}
                                  onClick={() => { setMobilePackagesOpen(false); setMobileMenuOpen(false); }}
                                  className="flex items-center justify-between py-1.5 px-2 rounded text-xs text-slate-950 font-bold hover:text-brand-orange hover:bg-orange-50 transition-colors"
                                >
                                  <span className="truncate">{item.name}</span>
                                  {item.duration && (
                                    <span className="text-[11px] text-slate-900 font-black font-mono ml-2 shrink-0 bg-white border border-slate-300 px-1.5 py-0.5 rounded">{item.duration}</span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* View All Tours Link */}
                  <div className="pt-2 border-t border-[#E2D9CB]">
                    <Link
                      to="/packages"
                      onClick={() => { setMobilePackagesOpen(false); setMobileMenuOpen(false); }}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-brand-orange hover:bg-orange-600 text-white text-xs font-black transition-colors shadow-sm"
                    >
                      <span>VIEW ALL TOUR PACKAGES</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link 
              to="/book-vehicle" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                isActive('/book-vehicle') || isActive('/car-rental')
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              <Car className="w-5 h-5 text-brand-orange shrink-0" />
              <span>Book Your Vehicle</span>
            </Link>

            {/* Activities Mobile Collapsible */}
            <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden my-1">
              <button
                type="button"
                onClick={() => setMobileActivitiesOpen(!mobileActivitiesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-white hover:text-brand-orange transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <Compass className="w-5 h-5 text-brand-orange shrink-0" />
                  <span>Activities</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileActivitiesOpen ? 'rotate-180 text-brand-orange' : 'text-slate-400'}`} />
              </button>
                {mobileActivitiesOpen && (
                  <div className="px-3 pb-3 space-y-2 bg-black/25 border-t border-white/10 pt-2.5">
                    {/* Outdoor Activities Collapsible */}
                    <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                      <div className="flex items-center justify-between p-2.5">
                        <Link 
                          to="/outdoor-activities" 
                          onClick={() => setMobileMenuOpen(false)} 
                          className="flex items-center gap-2 text-xs font-bold text-white hover:text-brand-orange"
                        >
                          <Mountain className="w-4 h-4 text-brand-orange" />
                          <span>Outdoor Activities</span>
                          <span className="text-[9px] bg-brand-orange text-white font-extrabold px-1.5 py-0.2 rounded-sm shadow-xs">Featured</span>
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === 'outdoor' ? null : 'outdoor')}
                          className="p-1 text-slate-300 hover:text-white"
                          aria-label="Toggle Outdoor Activities list"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenuOpen === 'outdoor' ? 'rotate-180 text-brand-orange' : ''}`} />
                        </button>
                      </div>

                      {mobileSubmenuOpen === 'outdoor' && (
                        <div className="px-2 pb-2.5 pt-1 space-y-1 border-t border-white/10 bg-black/20">
                          {OUTDOOR_NAV_ITEMS.map((item) => (
                            <Link
                              key={item.id}
                              to={item.path}
                              onClick={(e) => handleNavigate(item.path, e)}
                              className="flex items-center justify-between py-1.5 px-2 rounded-lg text-[11px] text-slate-300 hover:text-white hover:bg-white/10"
                            >
                              <span className="truncate pr-2">{item.title}</span>
                              <span className="text-brand-orange text-[10px] font-semibold shrink-0">Explore →</span>
                            </Link>
                          ))}
                          <Link
                            to="/outdoor-activities"
                            onClick={(e) => handleNavigate('/outdoor-activities', e)}
                            className="block py-1.5 px-2 text-[11px] font-bold text-brand-orange hover:underline text-center"
                          >
                            View All Outdoor Activities →
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Educational Programmes Collapsible */}
                    <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                      <div className="flex items-center justify-between p-2.5">
                        <Link 
                          to="/educational-programmes" 
                          onClick={(e) => handleNavigate('/educational-programmes', e)} 
                          className="flex items-center gap-2 text-xs font-bold text-white hover:text-brand-orange"
                        >
                          <GraduationCap className="w-4 h-4 text-indigo-400" />
                          <span>Educational Programmes</span>
                          <span className="text-[9px] bg-emerald-500 text-white font-extrabold px-1.5 py-0.2 rounded-sm shadow-xs">1:8 Safe</span>
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === 'educational' ? null : 'educational')}
                          className="p-1 text-slate-300 hover:text-white"
                          aria-label="Toggle Educational Programmes list"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenuOpen === 'educational' ? 'rotate-180 text-brand-orange' : ''}`} />
                        </button>
                      </div>

                      {mobileSubmenuOpen === 'educational' && (
                        <div className="px-2 pb-2.5 pt-1 space-y-2 border-t border-white/10 bg-black/20">
                          {EDUCATIONAL_NAV_TRACKS.map((track) => (
                            <div key={track.id} className="space-y-1">
                              <Link
                                to={track.path}
                                onClick={(e) => handleNavigate(track.path, e)}
                                className="block text-[11px] font-bold text-brand-orange px-2 pt-1"
                              >
                                {track.name} →
                              </Link>
                              {track.programs.map((prog) => (
                                <Link
                                  key={prog.id}
                                  to={prog.path}
                                  onClick={(e) => handleNavigate(prog.path, e)}
                                  className="flex items-center justify-between py-1 px-2 rounded text-[10.5px] text-slate-300 hover:text-white hover:bg-white/10"
                                >
                                  <span className="truncate pr-2">{prog.title}</span>
                                  <span className="text-slate-400 text-[9.5px] shrink-0">{prog.duration}</span>
                                </Link>
                              ))}
                            </div>
                          ))}
                          <Link
                            to="/educational-programmes"
                            onClick={(e) => handleNavigate('/educational-programmes', e)}
                            className="block py-1.5 px-2 text-[11px] font-bold text-brand-orange hover:underline text-center"
                          >
                            Explore All Educational Hub →
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
            </div>

            <Link 
              to="/about" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                isActive('/about') 
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              <Info className="w-5 h-5 text-brand-orange shrink-0" />
              <span>About Us</span>
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                isActive('/contact') 
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              <Phone className="w-5 h-5 text-brand-orange shrink-0" />
              <span>Contact</span>
            </Link>

            <div className="pt-2 mt-2 border-t border-white/10">
              <div className="text-[11px] uppercase font-bold tracking-wider text-slate-400 px-3 py-1">
                Explore More
              </div>
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <Link 
                  to="/destinations" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive('/destinations') 
                      ? 'text-brand-orange' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>Destinations</span>
                </Link>
                <Link 
                  to="/trekking" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive('/trekking') 
                      ? 'text-brand-orange' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Footprints className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>Trekking</span>
                </Link>
                <Link 
                  to="/spiritual" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive('/spiritual') 
                      ? 'text-brand-orange' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>Char Dham</span>
                </Link>
                <Link 
                  to="/customized-trip" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive('/customized-trip') 
                      ? 'text-brand-orange' 
                      : 'text-brand-orange/80 hover:text-brand-orange'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>Custom Trip</span>
                </Link>
                <Link 
                  to="/book-vehicle" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive('/book-vehicle') || isActive('/car-rental')
                      ? 'text-brand-orange' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Car className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>Taxi & Cabs</span>
                </Link>
                <Link 
                  to="/uttarakhand-travel-guide" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive('/uttarakhand-travel-guide')
                      ? 'text-brand-orange' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>Travel Guide</span>
                </Link>
                <Link 
                  to="/trek-comparison" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive('/trek-comparison')
                      ? 'text-brand-orange' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Mountain className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>Compare Treks</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBookingModal) onOpenBookingModal();
              }}
              className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-semibold text-center text-white shadow-lg"
            >
              Book Your Trip Now
            </button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 text-white border border-white/10 font-medium hover:bg-white/15 transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Call Expert: {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

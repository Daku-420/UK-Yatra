import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ShieldCheck,
  ChevronDown,
  GraduationCap,
  School,
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
  Mountain
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { InstagramIcon, FacebookIcon, YoutubeIcon, WhatsAppIcon } from './SocialIcons';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import { FEATURED_PACKAGES, TOUR_CATEGORIES } from '../data/navigationTours';

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(true);
  const [packagesDropdownOpen, setPackagesDropdownOpen] = useState(false);
  const [mobilePackagesOpen, setMobilePackagesOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>('popular-uttarakhand');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const packagesDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActivitiesOpen(false);
    setPackagesDropdownOpen(false);
  }, [location.pathname]);

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

  const isPackagesActive = 
    location.pathname.startsWith('/packages') || 
    location.pathname.startsWith('/tours');

  const isActivitiesActive = 
    location.pathname.startsWith('/activities') || 
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
      <nav className="glass-header py-3 shadow-xl border-b border-white/10 px-4 sm:px-6 lg:px-8 xl:px-10 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-3 xl:gap-6">
          {/* Official UK Yatra Brand Logo */}
          <Link to="/" className="flex items-center group py-0.5 shrink-0 mr-1 xl:mr-2">
            <Logo size="md" className="group-hover:scale-[1.02] transition-transform drop-shadow-md" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
            <Link 
              to="/" 
              className={`px-3 xl:px-3.5 py-2 text-sm font-semibold rounded-xl whitespace-nowrap transition-colors ${
                isActive('/') 
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              Home
            </Link>

            {/* Tour Packages Dropdown */}
            <div 
              ref={packagesDropdownRef}
              className="relative"
              onMouseEnter={() => setPackagesDropdownOpen(true)}
              onMouseLeave={() => setPackagesDropdownOpen(false)}
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

              {/* Dropdown Menu Panel */}
              {packagesDropdownOpen && (
                <div 
                  className="absolute top-full -left-12 xl:-left-6 mt-1.5 w-[900px] xl:w-[960px] max-w-[calc(100vw-2.5rem)] bg-[#FFFDF9] border-2 border-[#E2D9CB] rounded-3xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35)] p-5.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-slate-900 ring-1 ring-black/10"
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
                                onClick={() => setPackagesDropdownOpen(false)}
                                className="group flex items-center justify-between py-1.5 px-2 rounded-lg text-xs hover:bg-[#EFE8DC] transition-colors"
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
                      onClick={() => setPackagesDropdownOpen(false)}
                      className="px-5 py-2 rounded-xl bg-brand-orange hover:bg-orange-600 text-white font-black text-xs shadow-md shadow-brand-orange/25 flex items-center gap-1.5 transition-all hover:scale-[1.02]"
                    >
                      <span>VIEW ALL TOURS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
              onMouseEnter={() => setActivitiesOpen(true)}
              onMouseLeave={() => setActivitiesOpen(false)}
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

              {/* Dropdown Menu */}
              {activitiesOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-[#000044]/98 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-slate-400 border-b border-white/10 mb-1 flex items-center justify-between">
                    <span>Student & Youth Experiences</span>
                    <span className="text-[9px] text-brand-orange bg-brand-orange/15 px-1.5 py-0.5 rounded font-bold">New</span>
                  </div>

                  <Link
                    to="/college-trips"
                    onClick={() => setActivitiesOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-orange-500/15 text-brand-orange border border-orange-500/25 group-hover:scale-105 transition-transform">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-brand-orange transition-colors flex items-center gap-1.5">
                        <span>College Trips</span>
                        <span className="text-[9px] bg-brand-orange/20 text-brand-orange font-semibold px-1.5 py-0.2 rounded-sm">Hot</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug mt-0.5">
                        Adventure treks, river rafting & student batch discounts
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/school-trips"
                    onClick={() => setActivitiesOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 group-hover:scale-105 transition-transform">
                      <School className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                        <span>School Trips</span>
                        <span className="text-[9px] bg-emerald-500/20 text-emerald-300 font-semibold px-1.5 py-0.2 rounded-sm">1:8 Safe</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug mt-0.5">
                        Curriculum-aligned STEM, ecology & safe excursions
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/summer-learning-programmes"
                    onClick={() => setActivitiesOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400 border border-amber-500/25 group-hover:scale-105 transition-transform">
                      <SunMedium className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                        <span>Summer Learning Programmes</span>
                        <span className="text-[9px] bg-amber-500/20 text-amber-300 font-semibold px-1.5 py-0.2 rounded-sm">Camps</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug mt-0.5">
                        Wilderness survival, astronomy & leadership bootcamps
                      </p>
                    </div>
                  </Link>

                  <div className="pt-1.5 mt-1 border-t border-white/10">
                    <Link
                      to="/activities"
                      onClick={() => setActivitiesOpen(false)}
                      className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10 text-[11px] font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Compass className="w-3.5 h-3.5 text-brand-orange" />
                        <span>View All Outdoor Activities</span>
                      </span>
                      <span className="text-brand-orange">→</span>
                    </Link>
                  </div>
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
                <div className="px-3 pb-3 space-y-1 bg-black/25 border-t border-white/10 pt-2">
                  <Link 
                    to="/college-trips" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      isActive('/college-trips') 
                        ? 'text-brand-orange bg-white/10' 
                        : 'text-slate-200 hover:text-white'
                    }`}
                  >
                    <GraduationCap className="w-4 h-4 text-brand-orange" />
                    <span>College Trips</span>
                  </Link>
                  <Link 
                    to="/school-trips" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      isActive('/school-trips') 
                        ? 'text-brand-orange bg-white/10' 
                        : 'text-slate-200 hover:text-white'
                    }`}
                  >
                    <School className="w-4 h-4 text-emerald-400" />
                    <span>School Trips</span>
                  </Link>
                  <Link 
                    to="/summer-learning-programmes" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      isActive('/summer-learning') 
                        ? 'text-brand-orange bg-white/10' 
                        : 'text-slate-200 hover:text-white'
                    }`}
                  >
                    <SunMedium className="w-4 h-4 text-amber-400" />
                    <span>Summer Learning Programmes</span>
                  </Link>
                  <Link 
                    to="/activities" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      isActive('/activities') && !isActive('/college-trips') && !isActive('/school-trips') && !isActive('/summer-learning') 
                        ? 'text-brand-orange bg-white/10' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Compass className="w-4 h-4 text-brand-orange" />
                    <span>All Outdoor Activities</span>
                  </Link>
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

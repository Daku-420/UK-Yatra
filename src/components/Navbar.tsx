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
  Compass
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { InstagramIcon, FacebookIcon, YoutubeIcon, WhatsAppIcon } from './SocialIcons';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
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
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActivitiesOpen(false);
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

  const isActivitiesActive = 
    location.pathname.startsWith('/activities') || 
    location.pathname.startsWith('/college-trips') || 
    location.pathname.startsWith('/school-trips') || 
    location.pathname.startsWith('/summer-learning');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Slim Contact Bar - 100% Solid Vibrant Orange Across Entire Width */}
      <div className="top-contact-bar border-b border-orange-700/30 py-2 px-4 sm:px-8 text-xs font-medium text-white shadow-md hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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
      <nav className="glass-header py-3.5 shadow-xl border-b border-white/10 px-4 sm:px-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Official UK Yatra Brand Logo */}
          <Link to="/" className="flex items-center group py-0.5">
            <Logo size="md" className="group-hover:scale-[1.02] transition-transform drop-shadow-md" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <Link 
              to="/" 
              className={`px-3 xl:px-4 py-2 text-sm font-semibold rounded-xl transition-colors ${
                isActive('/') 
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              Home
            </Link>

            <Link 
              to="/packages" 
              className={`px-3 xl:px-4 py-2 text-sm font-semibold rounded-xl transition-colors ${
                isActive('/packages') 
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              Tour Packages
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
                className={`px-3 xl:px-4 py-2 text-sm font-semibold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer ${
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
                <div className="absolute top-full left-0 mt-1 w-80 bg-[#1E2230]/98 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
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
              className={`px-3 xl:px-4 py-2 text-sm font-semibold rounded-xl transition-colors ${
                isActive('/about') 
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              About Us
            </Link>

            <Link 
              to="/contact" 
              className={`px-3 xl:px-4 py-2 text-sm font-semibold rounded-xl transition-colors ${
                isActive('/contact') 
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:block">
            <SearchBar />
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href={getWhatsAppUrl("Hi UKYatra, I would like to enquire about Uttarakhand trips.")}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366]/25 border border-[#25D366]/35 transition-all hover:scale-105"
              aria-label="Quick WhatsApp"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            </a>

            <button
              onClick={onOpenBookingModal}
              className="orange-gradient-btn px-5 py-2.5 rounded-xl font-display font-semibold text-sm text-white flex items-center gap-2 shadow-lg shadow-brand-orange/20"
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

      {/* Mobile Drawer Menu - Midnight Slate Navy Matching Stats Card */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] md:top-[90px] bottom-0 bg-[#262937]/98 backdrop-blur-2xl border-t border-white/10 z-40 overflow-y-auto p-5 animate-in slide-in-from-top-4 duration-200 flex flex-col justify-between shadow-2xl text-white">
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
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                isActive('/') 
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              🏔️ Home
            </Link>
            <Link 
              to="/packages" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                isActive('/packages') 
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              📦 Tour Packages
            </Link>

            {/* Activities Mobile Collapsible */}
            <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden my-1">
              <button
                type="button"
                onClick={() => setMobileActivitiesOpen(!mobileActivitiesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-white hover:text-brand-orange transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span>🧗</span>
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
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                isActive('/about') 
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              ℹ️ About Us
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                isActive('/contact') 
                  ? 'text-brand-orange' 
                  : 'text-white hover:text-brand-orange'
              }`}
            >
              📞 Contact
            </Link>

            <div className="pt-2 mt-2 border-t border-white/10">
              <div className="text-[11px] uppercase font-bold tracking-wider text-slate-400 px-3 py-1">
                Explore More
              </div>
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <Link 
                  to="/destinations" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive('/destinations') 
                      ? 'text-brand-orange' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  📍 Destinations
                </Link>
                <Link 
                  to="/trekking" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive('/trekking') 
                      ? 'text-brand-orange' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  🥾 Trekking
                </Link>
                <Link 
                  to="/spiritual" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive('/spiritual') 
                      ? 'text-brand-orange' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  🕉️ Char Dham
                </Link>
                <Link 
                  to="/customized-trip" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive('/customized-trip') 
                      ? 'text-brand-orange' 
                      : 'text-brand-orange/80 hover:text-brand-orange'
                  }`}
                >
                  ✨ Custom Trip
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

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Mountain, 
  Users, 
  HeartHandshake, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  ChevronDown,
  Flame,
  Sun,
  Send
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, getCustomTripWhatsAppUrl } from '../config/siteConfig';
import { DESTINATIONS } from '../data/destinations';
import { TOUR_PACKAGES } from '../data/packages';
import { TREKS } from '../data/treks';
import { ACTIVITIES } from '../data/activities';
import { REVIEWS } from '../data/reviews';
import { BLOG_POSTS } from '../data/blogs';
import { FAQS } from '../data/faqs';
import { SectionHeading } from '../components/SectionHeading';
import { DestinationCard } from '../components/DestinationCard';
import { PackageCard } from '../components/PackageCard';
import { TrekCard } from '../components/TrekCard';
import { ReviewCard } from '../components/ReviewCard';
import { BlogCard } from '../components/BlogCard';
import { InstagramIcon } from '../components/SocialIcons';

interface HomePageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBookingModal }) => {
  const navigate = useNavigate();
  const [searchDestination, setSearchDestination] = useState('');
  const [searchCategory, setSearchCategory] = useState('All');
  const [searchMonth, setSearchMonth] = useState('Flexible');
  const [selectedDestCategory, setSelectedDestCategory] = useState('All');

  // Interactive quick customized trip teaser state
  const [customForm, setCustomForm] = useState({
    name: '',
    phone: '',
    destination: 'Kedarnath',
    days: '4-5 Days',
    travellers: '2 Travellers',
    budget: 'Standard (3-Star)'
  });
  const [customSubmitted, setCustomSubmitted] = useState(false);

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchDestination) {
      navigate(`/destinations/${searchDestination}`);
    } else if (searchCategory !== 'All') {
      navigate(`/destinations?category=${encodeURIComponent(searchCategory)}`);
    } else {
      navigate('/destinations');
    }
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCustomSubmitted(true);
  };

  const filteredDestinations = selectedDestCategory === 'All' 
    ? DESTINATIONS.slice(0, 8) 
    : DESTINATIONS.filter(d => d.category === selectedDestCategory);

  const heroDestinations = [
    { id: 'kedarnath', name: 'Kedarnath' },
    { id: 'rishikesh', name: 'Rishikesh' },
    { id: 'auli', name: 'Auli' },
    { id: 'chopta', name: 'Chopta' },
    { id: 'nainital', name: 'Nainital' },
    { id: 'mussoorie', name: 'Mussoorie' },
    { id: 'valley-of-flowers', name: 'Valley of Flowers' },
    { id: 'jim-corbett', name: 'Jim Corbett' },
    { id: 'badrinath', name: 'Badrinath' },
    { id: 'munsiyari', name: 'Munsiyari' },
    { id: 'tehri', name: 'Tehri Lake' },
    { id: 'lansdowne', name: 'Lansdowne' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* ============================================================ */}
      {/* 1. CINEMATIC HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Video — YouTube cinematic autoplay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* YouTube iframe scaled to always cover the viewport at any aspect ratio */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <iframe
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: '177.78vh', height: '56.25vw', minWidth: '100%', minHeight: '100%' }}
              src="https://www.youtube.com/embed/oZI-se7oIsA?autoplay=1&mute=1&loop=1&playlist=oZI-se7oIsA&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&vq=hd1080"
              title="Himalayan Hero Background"
              allow="autoplay; encrypted-media"
              frameBorder="0"
            />
          </div>
          {/* Transparent blocker — intercepts all mouse events so YouTube's control bar never triggers */}
          <div className="absolute inset-0" style={{ zIndex: 1 }} />
          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/30 to-[#F5F3EF]" style={{ zIndex: 2 }} />
          <div className="absolute inset-0 bg-black/20" style={{ zIndex: 2 }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center mt-12 sm:mt-8">
          {/* Top Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-xs sm:text-sm font-semibold text-brand-orange border border-brand-orange/30 shadow-2xl mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Uttarakhand’s Premier Travel & Himalayan Trekking Specialists</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.1] sm:leading-[1.15] max-w-4xl mx-auto uppercase drop-shadow-md">
            YOUR NEXT HIMALAYAN STORY STARTS HERE.
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-base sm:text-xl text-slate-200 font-normal max-w-3xl mx-auto leading-relaxed drop-shadow">
            Explore Uttarakhand through unforgettable journeys, hidden Himalayan escapes, spiritual trails, adventure experiences, and thoughtfully planned trips.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/destinations"
              className="orange-gradient-btn px-8 py-4 rounded-2xl font-display font-bold text-base text-white shadow-2xl flex items-center gap-2.5"
            >
              <Compass className="w-5 h-5" />
              <span>Explore Uttarakhand</span>
            </Link>

            <Link
              to="/customized-trip"
              className="px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 font-display font-semibold text-base transition-all hover:scale-105 flex items-center gap-2 drop-shadow-md"
            >
              <span>Plan My Trip</span>
              <ArrowRight className="w-5 h-5 text-brand-orange" />
            </Link>
          </div>

          {/* Floating Search & Discovery Bar - High-Contrast Dark Frosted Glass */}
          <div className="mt-12 sm:mt-16 max-w-4xl mx-auto bg-slate-950/85 backdrop-blur-xl rounded-3xl p-4 sm:p-5 border border-white/20 shadow-2xl">
            <form onSubmit={handleHeroSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
              {/* Destination Dropdown */}
              <div className="p-2.5 rounded-2xl bg-white/10 border border-white/15">
                <label className="text-[10px] uppercase font-bold tracking-wider text-brand-orange flex items-center gap-1 mb-1">
                  <MapPin className="w-3 h-3" />
                  <span>Where to?</span>
                </label>
                <select
                  value={searchDestination}
                  onChange={(e) => setSearchDestination(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
                >
                  <option value="" className="bg-slate-900 text-slate-300">Choose Destination</option>
                  {heroDestinations.map(d => (
                    <option key={d.id} value={d.id} className="bg-slate-900 text-white">{d.name}</option>
                  ))}
                </select>
              </div>

              {/* Category Dropdown */}
              <div className="p-2.5 rounded-2xl bg-white/10 border border-white/15">
                <label className="text-[10px] uppercase font-bold tracking-wider text-brand-orange flex items-center gap-1 mb-1">
                  <Compass className="w-3 h-3" />
                  <span>Experience Type</span>
                </label>
                <select
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
                >
                  <option value="All" className="bg-slate-900 text-slate-300">All Travel Styles</option>
                  <option value="Spiritual" className="bg-slate-900 text-white">Spiritual & Char Dham</option>
                  <option value="Adventure" className="bg-slate-900 text-white">Adventure & Rafting</option>
                  <option value="Trekking" className="bg-slate-900 text-white">Alpine Trekking</option>
                  <option value="Hills & Valleys" className="bg-slate-900 text-white">Hills & Lakes</option>
                  <option value="Wildlife" className="bg-slate-900 text-white">Wildlife Safari</option>
                  <option value="Weekend Escapes" className="bg-slate-900 text-white">Weekend Escapes</option>
                </select>
              </div>

              {/* Month */}
              <div className="p-2.5 rounded-2xl bg-white/10 border border-white/15">
                <label className="text-[10px] uppercase font-bold tracking-wider text-brand-orange flex items-center gap-1 mb-1">
                  <Calendar className="w-3 h-3" />
                  <span>Travel Month</span>
                </label>
                <select
                  value={searchMonth}
                  onChange={(e) => setSearchMonth(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
                >
                  <option value="Flexible" className="bg-slate-900 text-white">Any Month / Flexible</option>
                  <option value="Mar-Apr" className="bg-slate-900 text-white">March - April (Spring)</option>
                  <option value="May-Jun" className="bg-slate-900 text-white">May - June (Char Dham/Summer)</option>
                  <option value="Jul-Aug" className="bg-slate-900 text-white">July - August (Flowers Bloom)</option>
                  <option value="Sep-Nov" className="bg-slate-900 text-white">September - November (Clear Peaks)</option>
                  <option value="Dec-Feb" className="bg-slate-900 text-white">December - February (Winter Snow)</option>
                </select>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="orange-gradient-btn rounded-2xl py-3 px-6 font-display font-bold text-sm text-white flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/30 self-center h-full min-h-[48px]"
              >
                <Search className="w-4 h-4" />
                <span>Explore Now</span>
              </button>
            </form>
          </div>

          {/* Quick stats counter with frosted glass container for crystal clear legibility */}
          <div className="mt-8 max-w-4xl mx-auto bg-slate-950/80 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-white/15 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              {SITE_CONFIG.stats.map((stat, i) => (
                <div key={i} className="px-3 py-1">
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight drop-shadow-md">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1 drop-shadow-sm tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle Scroll Down Indicator Badge */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-white flex items-center gap-2 animate-bounce text-[11px] font-bold uppercase tracking-wider shadow-2xl pointer-events-none">
          <span className="drop-shadow">Scroll To Discover</span>
          <ChevronDown className="w-3.5 h-3.5 text-brand-orange" />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. DESTINATIONS DISCOVERY SECTION */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
              <Mountain className="w-3.5 h-3.5" />
              <span>Himalayan Sanctuaries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900">
              Explore <span className="text-brand-orange">Uttarakhand</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
              From peaceful valleys to high Himalayan trails, discover the places that make Uttarakhand unforgettable.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {['All', 'Spiritual', 'Adventure', 'Hills & Valleys', 'Weekend Escapes', 'Offbeat Uttarakhand'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedDestCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedDestCategory === cat
                    ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/90 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-sm font-display font-semibold text-xs transition-all hover:scale-105"
          >
            <span>View All 20+ Uttarakhand Destinations</span>
            <ArrowRight className="w-4 h-4 text-brand-orange" />
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. POPULAR EXPERIENCES ("Travel Your Way") */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#EAE6DF]/35 border-y border-[#E2DDD5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tailored Experiences"
            title="Travel Your"
            highlightText="Way"
            subtitle="Whether you seek heart-pounding rapids, quiet village walks, sacred temples, or pristine snow peaks — we curate every detail."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {ACTIVITIES.map((act) => (
              <div key={act.id}>
                <Link
                  to={`/activities/${act.id}`}
                  className="group relative block aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-slate-200/80 hover:border-brand-orange/40 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-xl"
                >
                  <img
                    src={act.image}
                    alt={act.title}
                    loading="lazy"
                    className="w-full h-full object-cover card-zoom-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brand-orange block mb-1">
                      {act.category}
                    </span>
                    <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-brand-orange transition-colors">
                      {act.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand-orange hover:underline"
            >
              <span>Explore all outdoor activities & safety guidelines →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. POPULAR TOUR PACKAGES ("Journeys Worth Taking") */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
              <Flame className="w-3.5 h-3.5" />
              <span>Curated Packages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900">
              Journeys Worth <span className="text-brand-orange">Taking</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
              Handcrafted itineraries with verified hill drivers, sanitised stays, priority darshan, and transparent pricing.
            </p>
          </div>

          <Link
            to="/packages"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:underline"
          >
            <span>Browse All Tour Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.slice(0, 6).map((pkg) => (
            <PackageCard
              key={pkg.id}
              tourPackage={pkg}
              onOpenBookingModal={() => onOpenBookingModal(pkg.title)}
            />
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. WHY TRAVEL WITH UKYatra (Trust & Credibility) */}
      {/* ============================================================ */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Trust & Authenticity"
            title="Why Travel With"
            highlightText="UKYatra?"
            subtitle="We are native Himalayan travellers, mountaineers, and hospitality veterans committed to unforgettable experiences."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Mountain,
                title: "Local Uttarakhand Expertise",
                desc: "Headquartered in Rishikesh & Dehradun with deep, generational knowledge of high passes and hidden hamlets."
              },
              {
                icon: Sparkles,
                title: "Customized Itineraries",
                desc: "Every trip is shaped around your travel pace, family preferences, budget, and special dietary needs."
              },
              {
                icon: ShieldCheck,
                title: "Verified Travel Partners",
                desc: "Strictly vetted hill drivers, sanitised vehicles, boutique mountain lodges, and certified river guides."
              },
              {
                icon: Users,
                title: "Experienced Coordinators",
                desc: "Dedicated personal trip manager assigned to you from the moment you land until departure."
              },
              {
                icon: Award,
                title: "Transparent Pricing",
                desc: "Zero hidden costs, no surprise driver extras, and clear day-by-day inclusion breakdowns."
              },
              {
                icon: Clock,
                title: "24/7 On-Trip Assistance",
                desc: "Round-the-clock emergency support, oxygen cylinder backups, and weather rerouting protocols."
              },
              {
                icon: HeartHandshake,
                title: "Safe & Reliable Travel",
                desc: "Compliant with all state safety regulations, IRCTC heli-yatra protocols, and national park permits."
              },
              {
                icon: Sun,
                title: "Authentic Himalayan Stays",
                desc: "Experience genuine Garhwali & Kumaoni warm hospitality, organic local meals, and panoramic vistas."
              }
            ].map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="p-6 rounded-3xl bg-[#F5F3EF] border border-[#E2DDD5] hover:border-brand-orange/40 hover:bg-white hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/80 text-brand-orange flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold font-display text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/why-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-[#E2DDD5] hover:border-brand-orange/40 hover:bg-slate-50 text-xs font-semibold text-slate-800 shadow-sm transition-all group"
            >
              <span>Discover all 8 pillars of our safety, standards & credentials</span>
              <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. INTERACTIVE CUSTOMIZED TRIP PLANNER ("Your Trip. Your Rules.") */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="relative rounded-3xl overflow-hidden bg-white border border-[#E2DDD5] p-8 sm:p-12 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bespoke Holidays</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900">
                Your Trip. <span className="text-brand-orange">Your Rules.</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tell us what kind of Himalayan experience you're looking for and our destination architects will craft a custom journey around you.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Customized vehicle pickup from Delhi / Dehradun / Haridwar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Choice of luxury resorts, Swiss tents, or boutique homestays</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Complimentary itinerary draft & consultation on WhatsApp</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href={getWhatsAppUrl("Hi UKYatra, I'd like to customize a bespoke Uttarakhand vacation.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-xl hover:bg-emerald-100/70"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7 bg-[#F5F3EF] rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md">
              {!customSubmitted ? (
                <form onSubmit={handleCustomSubmit} className="space-y-4 text-xs">
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2 flex items-center justify-between">
                    <span>Quick Trip Customizer</span>
                    <span className="text-[10px] text-brand-orange font-bold uppercase tracking-wide">Step 1 of 1</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Amit Verma"
                        value={customForm.name}
                        onChange={(e) => setCustomForm({ ...customForm, name: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">WhatsApp Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 9876543210"
                        value={customForm.phone}
                        onChange={(e) => setCustomForm({ ...customForm, phone: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Preferred Destination</label>
                      <select
                        value={customForm.destination}
                        onChange={(e) => setCustomForm({ ...customForm, destination: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      >
                        <option value="Kedarnath & Badrinath">Kedarnath & Badrinath (Do Dham)</option>
                        <option value="Complete Char Dham">Complete Char Dham Yatra</option>
                        <option value="Auli Snow & Skiing">Auli Snow & Skiing</option>
                        <option value="Rishikesh Adventure">Rishikesh & Shivpuri Adventure</option>
                        <option value="Chopta Tungnath Trek">Chopta & Chandrashila</option>
                        <option value="Nainital & Corbett">Nainital & Jim Corbett Safari</option>
                        <option value="Mussoorie & Dhanaulti">Mussoorie & Dhanaulti Weekend</option>
                        <option value="Valley of Flowers">Valley of Flowers & Hemkund</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Trip Duration</label>
                      <select
                        value={customForm.days}
                        onChange={(e) => setCustomForm({ ...customForm, days: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      >
                        <option value="2-3 Days (Weekend)">2-3 Days (Weekend Quickie)</option>
                        <option value="4-5 Days (Short Holiday)">4-5 Days (Short Holiday)</option>
                        <option value="6-8 Days (Standard Explorer)">6-8 Days (Standard Explorer)</option>
                        <option value="9-12 Days (Complete Circuit)">9-12 Days (Complete Circuit)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Travellers Count</label>
                      <select
                        value={customForm.travellers}
                        onChange={(e) => setCustomForm({ ...customForm, travellers: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      >
                        <option value="1 Solo Traveller">1 Solo Traveller</option>
                        <option value="2 Couple / Duo">2 Couple / Duo</option>
                        <option value="3-5 Small Family">3-5 Small Family / Friends</option>
                        <option value="6-12 Group Tour">6-12 Group Tour</option>
                        <option value="12+ Corporate / Big Group">12+ Corporate / Large Group</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Stay Standard</label>
                      <select
                        value={customForm.budget}
                        onChange={(e) => setCustomForm({ ...customForm, budget: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      >
                        <option value="Standard (3-Star)">Standard (Comfortable 3-Star)</option>
                        <option value="Deluxe (4-Star / Boutique)">Deluxe (4-Star / Boutique)</option>
                        <option value="Luxury (5-Star / Riverside Resort)">Luxury (5-Star / Riverside Resort)</option>
                        <option value="Budget Friendly">Budget Friendly / Alpine Tents</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-semibold text-white shadow-xl flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Build My Custom Itinerary</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-slate-900">Custom Trip Requested!</h4>
                  <p className="text-xs text-slate-600">
                    Thank you {customForm.name}! We have started tailoring your plan for <strong>{customForm.destination}</strong> ({customForm.days}).
                  </p>
                  <a
                    href={getCustomTripWhatsAppUrl({
                      destination: customForm.destination,
                      travellers: customForm.travellers,
                      budget: customForm.budget
                    })}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold text-xs shadow-lg hover:brightness-105"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Get Instant Draft on WhatsApp</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. TREKKING SECTION ("Walk Into The Himalayas") */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
              <Mountain className="w-3.5 h-3.5" />
              <span>Himalayan Expeditions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900">
              Walk Into The <span className="text-brand-orange">Himalayas</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
              From the winter snow slopes of Kedarkantha to the floral carpets of Valley of Flowers and Tungnath summit.
            </p>
          </div>

          <Link
            to="/trekking"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:underline"
          >
            <span>Explore All 10+ Himalayan Treks</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREKS.slice(0, 3).map((trek) => (
            <TrekCard key={trek.id} trek={trek} />
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. SPIRITUAL / CHAR DHAM SPOTLIGHT ("Journeys With Meaning") */}
      {/* ============================================================ */}
      <section className="py-20 bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-slate-50 border-y border-amber-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Devbhoomi Pilgrimage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 leading-tight">
                Journeys With <span className="text-[#E65100]">Meaning</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Experience the divine vibrations of the ancient Chota Char Dham (Yamunotri, Gangotri, Kedarnath, Badrinath), Do Dham, and Panch Kedar with dedicated yatra coordinators and medical assistance.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="font-bold text-slate-900 text-sm">Kedarnath Dham</div>
                  <div className="text-[11px] text-slate-500 mt-1 font-medium">3,584m • Lord Shiva Jyotirlinga</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="font-bold text-slate-900 text-sm">Badrinath Dham</div>
                  <div className="text-[11px] text-slate-500 mt-1 font-medium">3,300m • Lord Vishnu Abode</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="font-bold text-slate-900 text-sm">Gangotri Dham</div>
                  <div className="text-[11px] text-slate-500 mt-1 font-medium">3,100m • Source of Bhagirathi</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="font-bold text-slate-900 text-sm">Yamunotri Dham</div>
                  <div className="text-[11px] text-slate-500 mt-1 font-medium">3,291m • Holy Surya Kund</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/spiritual"
                  className="orange-gradient-btn px-6 py-3 rounded-xl font-display font-semibold text-xs text-white shadow-md"
                >
                  Explore Char Dham Packages
                </Link>
                <button
                  onClick={() => onOpenBookingModal("Kedarnath & Char Dham Yatra")}
                  className="px-6 py-3 rounded-xl bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 text-xs font-semibold shadow-sm"
                >
                  Request Yatra Registration Guide
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden aspect-[4/5] border border-slate-200 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop"
                    alt="Kedarnath Temple"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Link 
                  to="/helicopter-packages" 
                  className="block p-4 rounded-2xl bg-white border border-amber-300/80 hover:border-amber-500 hover:bg-amber-50/50 transition-all text-center group shadow-sm"
                >
                  <div className="text-amber-800 font-bold text-sm flex items-center justify-center gap-1">
                    <span>Helicopter Yatra Booking</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5 font-medium">Char Dham & Kedarnath Express Charters</div>
                </Link>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-4 rounded-2xl bg-white border border-emerald-200 text-center shadow-sm">
                  <div className="text-emerald-700 font-bold text-sm">Senior Citizen Friendly</div>
                  <div className="text-[11px] text-slate-600 mt-0.5 font-medium">Pony / Palki / Oxygen Support</div>
                </div>
                <div className="rounded-3xl overflow-hidden aspect-[4/5] border border-slate-200 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop"
                    alt="Badrinath Temple"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. GOOGLE TRUST SECTION */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SectionHeading
          badge="Verified Reviews"
          title="Trusted by"
          highlightText="43,250+ Travellers"
          subtitle="Real guest experiences from across the mountains of Uttarakhand — verified on Google."
        />

        {/* Google Rating Hero Card */}
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

          {/* Big Rating Badge */}
          <div className="flex flex-col items-center justify-center bg-white rounded-3xl shadow-2xl border border-slate-100 px-12 py-10 min-w-[240px]">
            {/* Google "G" logo wordmark */}
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
            </div>
            <div className="text-7xl font-black text-slate-900 leading-none">4.7</div>
            {/* Stars */}
            <div className="flex items-center gap-1 mt-3">
              {[1,2,3,4].map(i => (
                <svg key={i} className="w-7 h-7 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              {/* Half star for 4.7 */}
              <svg className="w-7 h-7" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="half-star">
                    <stop offset="70%" stopColor="#FBBC05" />
                    <stop offset="70%" stopColor="#D1D5DB" />
                  </linearGradient>
                </defs>
                <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="mt-2 text-sm text-slate-500 font-medium">Based on Google Reviews</p>
          </div>

          {/* Trust stats column */}
          <div className="flex flex-col gap-6 max-w-md">
            {[
              { icon: '🏔️', value: '43,250+', label: 'Happy Travellers', sub: 'Families, solo travellers & groups served' },
              { icon: '✅', value: '4.7 / 5.0', label: 'Average Google Rating', sub: 'Verified ratings from real customers' },
              { icon: '🎯', value: '8,500+', label: 'Trips Successfully Completed', sub: 'Across Uttarakhand, Himalayas & beyond' },
            ].map(stat => (
              <div key={stat.label} className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-md border border-slate-100">
                <span className="text-3xl">{stat.icon}</span>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-slate-900">{stat.value}</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-700">{stat.label}</p>
                  <p className="text-xs text-slate-400">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://share.google/jPXqc3m8R3eYrwjKU"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl text-slate-800 font-semibold text-sm transition-all hover:scale-105 group"
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
              <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
              <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
              <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
            </svg>
            <span>Read Our Reviews on Google</span>
            <svg className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. INSTAGRAM & SOCIAL PROOF ("Follow Our Journey") */}
      {/* ============================================================ */}
      <section className="py-16 bg-[#EAE6DF]/35 border-t border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange mb-2">
            <InstagramIcon className="w-4 h-4" />
            <span>@UKYatradotcom</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mb-2">
            Follow Our Himalayan Journey
          </h2>
          <p className="text-xs text-slate-600 mb-8 max-w-md mx-auto">
            Real captures by our trekkers, yatris, and mountain guides across Uttarakhand.
          </p>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {[
              { img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=400&auto=format&fit=crop', tag: '#Kedarnath' },
              { img: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=400&auto=format&fit=crop', tag: '#RishikeshRafting' },
              { img: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=400&auto=format&fit=crop', tag: '#AuliSkiing' },
              { img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=400&auto=format&fit=crop', tag: '#NainitalBoating' },
              { img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop', tag: '#ValleyOfFlowers' },
              { img: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=400&auto=format&fit=crop', tag: '#CorbettSafari' },
            ].map((item, idx) => (
              <a
                key={idx}
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden border border-[#E2DDD5] shadow-sm block"
              >
                <img
                  src={item.img}
                  alt={item.tag}
                  loading="lazy"
                  className="w-full h-full object-cover card-zoom-image"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                  <span className="text-xs font-semibold text-white">{item.tag}</span>
                </div>
              </a>
            ))}
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white border border-[#E2DDD5] hover:border-brand-orange/40 text-xs font-semibold text-slate-800 shadow-sm transition-colors"
          >
            <span>View Full Uttarakhand Photo & Video Gallery</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. TRAVEL STORIES / BLOG ("Stories From The Mountains") */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SectionHeading
          badge="Himalayan Journal"
          title="Stories From The"
          highlightText="Mountains"
          subtitle="Expert travel guides, seasonal weather insights, trekking preparation, and sacred lore."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. FAQ SNIPPET SECTION */}
      {/* ============================================================ */}
      <section className="py-20 bg-white border-t border-[#E2DDD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked"
            highlightText="Questions"
            subtitle="Everything you need to know about planning, booking, and travelling in Uttarakhand."
          />

          <div className="space-y-4">
            {FAQS.slice(0, 4).map((faq, i) => (
              <div key={i} className="bg-[#F5F3EF] rounded-2xl p-5 border border-[#E2DDD5] shadow-sm">
                <h3 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
                  <span className="text-brand-orange">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/faqs" className="text-xs text-brand-orange font-bold hover:underline">
              View All FAQs & Travel Guidelines →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

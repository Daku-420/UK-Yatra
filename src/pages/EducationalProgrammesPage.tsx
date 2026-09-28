import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  School, 
  SunMedium, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Users, 
  Award, 
  Compass, 
  MapPin, 
  BookOpen, 
  Clock,
  Search,
  SlidersHorizontal,
  Send,
  HelpCircle,
  FileCheck,
  HeartHandshake,
  Filter
} from 'lucide-react';
import { EDUCATIONAL_PROGRAMMES, EDUCATIONAL_TRACKS, EducationalProgramme } from '../data/educationalProgrammes';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';

interface EducationalProgrammesPageProps {
  onOpenBookingModal?: (packageName?: string) => void;
}

export const EducationalProgrammesPage: React.FC<EducationalProgrammesPageProps> = ({ onOpenBookingModal }) => {
  useEffect(() => {
    document.title = "Educational Programmes in Uttarakhand | School, College & Summer Camps | UK Yatra";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Discover Uttarakhand educational programmes: curriculum-aligned school excursions, college adventure treks, and summer learning camps with 1:8 safety ratio and certified instructors.'
    );

    return () => {
      document.title = 'UK Yatra | Uttarakhand Travel & Tour Packages';
    };
  }, []);

  // Filter States
  const [selectedTrack, setSelectedTrack] = useState<string>('All');
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [selectedDuration, setSelectedDuration] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [formData, setFormData] = useState({
    institutionName: '',
    coordinatorName: '',
    programmeType: 'School Educational Trip',
    phone: '',
    email: '',
    groupSize: '30-50 Students',
    expectedDate: 'Upcoming Season',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const whatsappMsg = `Hi UK Yatra Team! I am interested in Educational Programmes in Uttarakhand.%0A%0A*Institution:* ${formData.institutionName}%0A*Coordinator:* ${formData.coordinatorName}%0A*Programme Type:* ${formData.programmeType}%0A*Phone:* ${formData.phone}%0A*Group Size:* ${formData.groupSize}%0A*Travel Window:* ${formData.expectedDate}%0A*Notes:* ${formData.message || 'Please provide quotation and customized brochure.'}`;
    window.open(getWhatsAppUrl(whatsappMsg), '_blank');
  };

  // Filtered Programmes Logic
  const filteredProgrammes = useMemo(() => {
    return EDUCATIONAL_PROGRAMMES.filter((p) => {
      // Track filter
      if (selectedTrack !== 'All' && p.track !== selectedTrack) {
        return false;
      }
      // Domain filter
      if (selectedDomain !== 'All' && p.domain !== selectedDomain) {
        return false;
      }
      // Duration filter
      if (selectedDuration === '2–3 Days' && p.durationDays > 3) {
        return false;
      }
      if (selectedDuration === '4–5 Days' && (p.durationDays < 4 || p.durationDays > 5)) {
        return false;
      }
      if (selectedDuration === '6+ Days' && p.durationDays < 6) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesLocation = p.location.toLowerCase().includes(q);
        const matchesDesc = p.shortDesc.toLowerCase().includes(q);
        const matchesDomain = p.domain.toLowerCase().includes(q);
        if (!matchesTitle && !matchesLocation && !matchesDesc && !matchesDomain) {
          return false;
        }
      }
      return true;
    });
  }, [selectedTrack, selectedDomain, selectedDuration, searchQuery]);

  const safetyFeatures = [
    {
      icon: ShieldCheck,
      title: '1:8 Chaperone & Staff Ratio',
      description: 'Every 8 students are escorted by dedicated certified instructors and trained camp coordinators.'
    },
    {
      icon: Award,
      title: 'NIM Certified Mountain Guides',
      description: 'Instructors trained at Nehru Institute of Mountaineering with active Wilderness First Aid & CPR certifications.'
    },
    {
      icon: FileCheck,
      title: 'Board Compliance & NOC Dossier',
      description: 'Complete documentation for CBSE/ICSE/IB schools: Risk assessment, sanitization fitness, and driver police verifications.'
    },
    {
      icon: HeartHandshake,
      title: 'Hygienic Pure Veg Dining',
      description: '100% sanitized kitchen dining with nutritionist-approved student-friendly meals and mineral water.'
    }
  ];

  const faqs = [
    {
      q: 'How does UK Yatra ensure student safety during educational trips?',
      a: 'Safety is our highest priority. We enforce a strict 1:8 instructor-to-student supervision ratio, provide 24/7 on-call medical assistance, use GPS-monitored vehicles with experienced hill drivers, and deploy certified wilderness first responders with emergency oxygen and first-aid kits.'
    },
    {
      q: 'Can itineraries be customized for our school or college curriculum?',
      a: 'Yes, absolutely. We work closely with school principals, department heads, and college student councils to tailor every module—whether you require botanical field study, geology seminars, renewable energy visits, or pure outdoor adventure.'
    },
    {
      q: 'What is the ideal group size and batch booking window?',
      a: 'We accommodate institutional groups ranging from 20 up to 250+ students. For school and college annual excursions, we recommend booking 30–60 days in advance to reserve prime sanitized properties and certified instructors.'
    },
    {
      q: 'Are certificates of completion provided for participating students?',
      a: 'Yes! All participants in our Summer Learning Camps and educational workshops receive an official Certificate of Participation from UK Yatra detailing the skills and modules completed.'
    }
  ];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'Educational Programmes' }]} />

      {/* Hero Banner */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#000044] via-[#080d38] to-[#141b4d] text-white p-8 sm:p-14 lg:p-16 mb-16 shadow-2xl border border-white/10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Himalayan Experiential Learning</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] tracking-tight">
            Educational <span className="text-brand-orange">Programmes</span> in Uttarakhand
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal">
            Empower students through curriculum-aligned school field study, high-altitude college treks, and transformative summer wilderness bootcamps in the scenic Himalayas.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#programmes-directory"
              className="orange-gradient-btn px-6 sm:px-8 py-3.5 rounded-xl font-display font-bold text-sm text-white shadow-xl shadow-brand-orange/25 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Browse All Programmes ({EDUCATIONAL_PROGRAMMES.length})</span>
            </a>

            <a
              href={getWhatsAppUrl("Hi UK Yatra, I would like to inquire about Educational Programmes (School / College / Summer Camps) in Uttarakhand.")}
              target="_blank"
              rel="noreferrer"
              className="px-6 sm:px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-display font-semibold text-sm transition-all flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Talk to Education Coordinator</span>
            </a>
          </div>

          {/* Quick Pillars */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>1:8 Supervision Ratio</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-orange shrink-0" />
              <span>NIM Certified Leaders</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <BookOpen className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Curriculum & NEP 2020 Aligned</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Educational Tracks Overview Cards */}
      <section className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4" />
            <span>Structured Pathways</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Choose Your Educational Track
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Click on a pathway below to view focused guides or scroll down to explore all individual programmes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATIONAL_TRACKS.map((track) => (
            <div
              key={track.id}
              className="group flex flex-col justify-between rounded-3xl bg-white border border-[#E2DDD5] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden text-left"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={track.image}
                    alt={track.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-950/80 text-white backdrop-blur-md border border-white/20">
                    {track.badge}
                  </span>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold text-slate-300 block">{track.audience}</span>
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-brand-orange transition-colors">
                      {track.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {track.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex gap-2">
                <Link
                  to={track.link}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#000044] hover:bg-brand-orange text-white text-xs font-bold font-display flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Explore {track.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedTrack(track.name as any);
                    document.getElementById('programmes-directory')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="py-2.5 px-3 rounded-xl bg-orange-50 hover:bg-orange-100 text-brand-orange border border-orange-200 text-xs font-bold cursor-pointer transition-colors"
                  title={`Filter by ${track.name}`}
                >
                  Filter
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive Programmes Directory (Like Outdoor Activities) */}
      <section id="programmes-directory" className="mb-20 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Programme Directory</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              All Educational Programmes & Circuits
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Showing {filteredProgrammes.length} of {EDUCATIONAL_PROGRAMMES.length} curriculum-aligned Himalayan journeys.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search programmes or subjects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs focus:outline-none focus:border-brand-orange shadow-2xs"
            />
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mb-8 space-y-3">
          {/* Track Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Track:
            </span>
            {['All', 'School Trips', 'College Trips', 'Summer Learning Programmes'].map((track) => (
              <button
                key={track}
                type="button"
                onClick={() => setSelectedTrack(track)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedTrack === track
                    ? 'bg-brand-orange text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {track}
              </button>
            ))}
          </div>

          {/* Domain & Duration Filters */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-500">Domain:</span>
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 font-medium text-slate-700 focus:outline-none focus:border-brand-orange cursor-pointer"
              >
                <option value="All">All Domains</option>
                <option value="STEM & Sciences">STEM & Sciences</option>
                <option value="Wildlife & Ecology">Wildlife & Ecology</option>
                <option value="Adventure & Mountaineering">Adventure & Mountaineering</option>
                <option value="Leadership & Survival">Leadership & Survival</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-500">Duration:</span>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 font-medium text-slate-700 focus:outline-none focus:border-brand-orange cursor-pointer"
              >
                <option value="All">Any Duration</option>
                <option value="2–3 Days">2–3 Days</option>
                <option value="4–5 Days">4–5 Days</option>
                <option value="6+ Days">6+ Days</option>
              </select>
            </div>

            {(selectedTrack !== 'All' || selectedDomain !== 'All' || selectedDuration !== 'All' || searchQuery !== '') && (
              <button
                type="button"
                onClick={() => {
                  setSelectedTrack('All');
                  setSelectedDomain('All');
                  setSelectedDuration('All');
                  setSearchQuery('');
                }}
                className="text-brand-orange hover:underline font-bold ml-auto cursor-pointer"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>

        {/* Programmes Grid (Multi-Page Content Cards) */}
        {filteredProgrammes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProgrammes.map((prog) => {
              const TrackBadgeIcon = prog.track === 'School Trips' ? School : prog.track === 'College Trips' ? GraduationCap : SunMedium;
              return (
                <div
                  key={prog.id}
                  className="group flex flex-col justify-between bg-white rounded-3xl border border-[#E2DDD5] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 text-left"
                >
                  <div>
                    {/* Card Photo Header */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <img
                        src={prog.image}
                        alt={prog.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                      <span className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full border backdrop-blur-md ${prog.badgeColor}`}>
                        {prog.badge}
                      </span>

                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-0.5">
                          <TrackBadgeIcon className="w-3.5 h-3.5 text-brand-orange" />
                          <span>{prog.track}</span>
                          <span>•</span>
                          <span>{prog.duration}</span>
                        </div>
                        <h3 className="text-lg font-bold font-display text-white group-hover:text-brand-orange transition-colors line-clamp-1">
                          {prog.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                          <span>{prog.location}</span>
                        </span>
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          {prog.supervisionRatio}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {prog.shortDesc}
                      </p>

                      <div className="pt-2 border-t border-slate-100 space-y-1.5">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                          Key Field Learning
                        </span>
                        {prog.learningOutcomes.slice(0, 2).map((item, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold block">Estimated Fare</span>
                      <span className="text-base font-extrabold font-display text-slate-900">
                        {prog.startingPrice} <span className="text-[10px] text-slate-500 font-normal">/ student</span>
                      </span>
                    </div>

                    <Link
                      to={`/educational-programmes/${prog.id}`}
                      className="py-2.5 px-4 rounded-xl bg-[#000044] hover:bg-brand-orange text-white text-xs font-bold font-display flex items-center gap-1.5 shadow-sm transition-all"
                    >
                      <span>Full Itinerary</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
            <GraduationCap className="w-10 h-10 text-brand-orange mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No matching programmes found</h3>
            <p className="text-xs text-slate-500">Try adjusting your track or domain filters.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedTrack('All');
                setSelectedDomain('All');
                setSelectedDuration('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Safety & Academic Rigor Section */}
      <section className="mb-20 rounded-3xl bg-[#FBF9F5] border border-[#E8E2D8] p-8 sm:p-12 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Our Safety & Quality Commitment</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
            Why Leading Institutions Partner With UK Yatra
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Every itinerary is built from the ground up prioritizing absolute safety, transparent communication, and genuine pedagogical value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={i} className="bg-white p-5 rounded-2xl border border-[#E5DFD4] shadow-xs text-left space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange border border-orange-200/60 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 font-display">
                  {feat.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Institutional Proposal Request Form */}
      <section className="mb-20 rounded-3xl bg-gradient-to-br from-[#000044] to-[#0A0D2C] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>For Schools, Colleges & Academies</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold font-display leading-tight">
              Request a Custom Educational Proposal
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Submit your tentative dates and student batch count. Our education logistics desk will share a detailed curriculum itinerary, cost estimate, and safety deck within 24 hours.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Complimentary travel for teacher/faculty chaperones</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Detailed risk assessment & parent presentation decks provided</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/15">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white font-display">Inquiry Received</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you! Our institutional travel manager will review your requirements and reach out via phone & WhatsApp shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-200 block mb-1">
                      School / College / Institute Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. St. Xavier's High School"
                      value={formData.institutionName}
                      onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-200 block mb-1">
                      Coordinator / Teacher Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Ramesh Sharma"
                      value={formData.coordinatorName}
                      onChange={(e) => setFormData({ ...formData, coordinatorName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-200 block mb-1">
                      Programme Track *
                    </label>
                    <select
                      value={formData.programmeType}
                      onChange={(e) => setFormData({ ...formData, programmeType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/20 text-xs text-white focus:outline-none focus:border-brand-orange cursor-pointer"
                    >
                      <option value="School Educational Trip">School Trips (Grades 5-12)</option>
                      <option value="College Adventure & Trek">College Trips & Treks</option>
                      <option value="Summer Learning Camp">Summer Learning Camps</option>
                      <option value="Mixed / Custom Educational Tour">Custom Learning Tour</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-200 block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-200 block mb-1">
                      Expected Student Count
                    </label>
                    <select
                      value={formData.groupSize}
                      onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/20 text-xs text-white focus:outline-none focus:border-brand-orange cursor-pointer"
                    >
                      <option value="20-35 Students">20–35 Students</option>
                      <option value="36-60 Students">36–60 Students</option>
                      <option value="61-100 Students">61–100 Students</option>
                      <option value="100+ Large Batch">100+ Students</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-200 block mb-1">
                    Special Requirements or Desired Learning Outcomes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Interested in astronomy, wildlife ecology, rafting, or specific travel dates in May/October..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <button
                  type="submit"
                  className="orange-gradient-btn w-full py-3.5 rounded-xl font-display font-bold text-sm text-white shadow-lg shadow-brand-orange/30 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry & Receive Custom Deck</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="mb-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange uppercase tracking-wider mb-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>Questions & Clarifications</span>
          </div>
          <h3 className="text-2xl font-bold font-display text-slate-900">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs text-left space-y-2">
              <h4 className="text-sm font-bold text-slate-900 font-display flex items-start gap-2">
                <span className="text-brand-orange font-bold">Q.</span>
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed pl-5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

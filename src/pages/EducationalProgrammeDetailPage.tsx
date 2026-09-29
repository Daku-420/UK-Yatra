import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ChevronLeft,
  ChevronDown,
  CheckCircle2,
  XCircle,
  BookOpen,
  Award,
  Sparkles,
  Users,
  GraduationCap,
  School,
  SunMedium,
  Phone,
  FileCheck,
  HeartHandshake,
  Download,
  Camera,
  X,
  Send
} from 'lucide-react';
import { EDUCATIONAL_PROGRAMMES, EducationalProgramme } from '../data/educationalProgrammes';
import { getWhatsAppUrl, SITE_CONFIG } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';

interface EducationalProgrammeDetailPageProps {
  onOpenBookingModal?: (packageName?: string) => void;
}

export const EducationalProgrammeDetailPage: React.FC<EducationalProgrammeDetailPageProps> = ({ 
  onOpenBookingModal 
}) => {
  const { id } = useParams<{ id: string }>();

  const currentProgramme = EDUCATIONAL_PROGRAMMES.find((p) => p.id === id);
  const programme: EducationalProgramme = currentProgramme || EDUCATIONAL_PROGRAMMES[0];

  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'outcomes' | 'safety' | 'inclusions'>('itinerary');

  const [sidebarForm, setSidebarForm] = useState({
    schoolOrCollege: '',
    coordinatorName: '',
    phone: '',
    studentCount: '30-50 Students',
    travelMonth: 'Upcoming Season',
    notes: ''
  });
  const [sidebarSubmitted, setSidebarSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (programme) {
      document.title = `${programme.title} | Educational Programmes | UK Yatra`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute(
        'content',
        `${programme.title} in ${programme.location}. ${programme.shortDesc} 1:8 safety ratio, certified guides, curriculum-aligned.`
      );
    }
  }, [programme, id]);

  const handleSidebarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSidebarSubmitted(true);
    const msg = `Hi UK Yatra! I'd like a formal proposal for the educational programme: *${programme.title}*.%0A%0A*Institution:* ${sidebarForm.schoolOrCollege}%0A*Coordinator:* ${sidebarForm.coordinatorName}%0A*Phone:* ${sidebarForm.phone}%0A*Batch Size:* ${sidebarForm.studentCount}%0A*Travel Month:* ${sidebarForm.travelMonth}%0A*Notes:* ${sidebarForm.notes || 'Please share detailed day-wise itinerary and quote.'}`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  const relatedProgrammes = EDUCATIONAL_PROGRAMMES.filter(
    (p) => p.id !== programme.id
  ).slice(0, 3);

  const getTrackIcon = (track: string) => {
    switch (track) {
      case 'School Trips':
        return School;
      case 'College Trips':
        return GraduationCap;
      case 'Summer Learning Programmes':
      default:
        return SunMedium;
    }
  };

  const TrackIcon = getTrackIcon(programme.track);

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs 
        items={[
          { label: 'Educational Programmes', to: '/educational-programmes' },
          { label: programme.track, to: programme.track === 'School Trips' ? '/school-trips' : programme.track === 'College Trips' ? '/college-trips' : '/summer-learning-programmes' },
          { label: programme.title }
        ]} 
      />

      {/* Main Top Header Block */}
      <div className="mt-4 mb-8">
        <Link 
          to="/educational-programmes" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-orange transition-colors mb-3"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Educational Programmes</span>
        </Link>

        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/15 text-brand-orange border border-brand-orange/30 text-xs font-bold">
            <TrackIcon className="w-3.5 h-3.5" />
            <span>{programme.track}</span>
          </span>

          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-slate-500" />
            <span>{programme.domain}</span>
          </span>

          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{programme.supervisionRatio}</span>
          </span>

          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>{programme.targetAudience}</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
          {programme.title}
        </h1>

        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          {programme.shortDesc}
        </p>

        {/* Quick specs bar */}
        <div className="mt-5 pt-4 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <Clock className="w-4 h-4 text-brand-orange shrink-0" />
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Duration</span>
              <span className="font-bold text-slate-800">{programme.duration}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Location</span>
              <span className="font-bold text-slate-800 truncate">{programme.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <Award className="w-4 h-4 text-emerald-600 shrink-0" />
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Pricing</span>
              <span className="font-bold text-emerald-700">Quote on Request</span>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <FileCheck className="w-4 h-4 text-indigo-600 shrink-0" />
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Curriculum</span>
              <span className="font-bold text-slate-800">NEP 2020 Aligned</span>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Grid */}
      <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-3 rounded-3xl overflow-hidden">
        <div 
          onClick={() => setActivePhoto(programme.image)}
          className="md:col-span-2 relative aspect-[16/10] overflow-hidden bg-slate-900 group cursor-pointer"
        >
          <img 
            src={programme.image} 
            alt={programme.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 text-white flex items-center gap-2 text-xs font-semibold bg-black/40 px-3 py-1.5 rounded-xl backdrop-blur-md">
            <Camera className="w-4 h-4" />
            <span>Click to expand gallery</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
          {programme.gallery.slice(0, 2).map((imgUrl, i) => (
            <div 
              key={i}
              onClick={() => setActivePhoto(imgUrl)}
              className="relative aspect-[16/10] md:aspect-auto md:h-full overflow-hidden bg-slate-900 group cursor-pointer rounded-2xl md:rounded-none"
            >
              <img 
                src={imgUrl} 
                alt={`${programme.title} view ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (Content & Tabs) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Navigation Pill Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200">
            {[
              { id: 'itinerary', label: 'Day-Wise Itinerary' },
              { id: 'overview', label: 'Overview & Highlights' },
              { id: 'outcomes', label: 'Learning Outcomes' },
              { id: 'safety', label: 'Safety & Chaperones' },
              { id: 'inclusions', label: 'Inclusions & Gear' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: ITINERARY */}
          {activeTab === 'itinerary' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-display text-slate-900">
                  Comprehensive Day-Wise Schedule
                </h3>
                <span className="text-xs font-semibold text-slate-500">
                  Total {programme.durationDays} Days / {programme.durationDays - 1} Nights
                </span>
              </div>

              <div className="relative border-l-2 border-brand-orange/30 ml-4 pl-6 space-y-8">
                {programme.itinerary.map((item) => (
                  <div key={item.day} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-brand-orange text-white font-bold text-xs flex items-center justify-center shadow-md">
                      D{item.day}
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-100 pb-2">
                        <h4 className="text-base font-bold font-display text-slate-900">
                          {item.title}
                        </h4>
                        <span className="text-[11px] font-bold text-brand-orange px-2 py-0.5 rounded-md bg-orange-50 border border-orange-200">
                          Focus: {item.learningFocus}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span><strong>Meals:</strong> {item.meals}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                          <span><strong>Stay:</strong> {item.stay}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: OVERVIEW & HIGHLIGHTS */}
          {activeTab === 'overview' && (
            <div className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold font-display text-slate-900">
                About this Educational Expedition
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {programme.fullDesc}
              </p>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Key Programme Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {programme.learningOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-orange-50/50 border border-orange-100 text-xs text-slate-800">
                      <Sparkles className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: LEARNING OUTCOMES & CURRICULUM */}
          {activeTab === 'outcomes' && (
            <div className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div>
                <h3 className="text-xl font-bold font-display text-slate-900">
                  Pedagogical & Curriculum Value
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Designed in compliance with experiential learning frameworks recommended by NEP 2020.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-2">
                <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-indigo-600" />
                  <span>Syllabus Alignment & Board Compliance</span>
                </div>
                <p className="text-xs sm:text-sm text-indigo-950 font-medium leading-relaxed">
                  {programme.curriculumAlignment}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Measurable Student Outcomes
                </h4>
                <div className="space-y-2">
                  {programme.learningOutcomes.map((out, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SAFETY & SUPERVISION */}
          {activeTab === 'safety' && (
            <div className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>1:8 Chaperone & Staff Ratio</span>
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900">
                  Uncompromising Student Safety & Security
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  From sanitized private coaches to certified female tour chaperones, every precaution is strictly audited.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {programme.safetyHighlights.map((sh, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-2.5 text-xs text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{sh}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                <span className="font-bold block">Parent & Principal Direct Hotline</span>
                <p>
                  A dedicated 24/7 emergency control room number is provided to the school administration and parents during the tour duration.
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: INCLUSIONS & GEAR */}
          {activeTab === 'inclusions' && (
            <div className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold font-display text-slate-900">
                Inclusions, Exclusions & Packing Guide
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>What's Included</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {programme.whatsIncluded.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-700 flex items-center gap-1.5 mb-3">
                    <XCircle className="w-4 h-4 text-red-500" />
                    <span>What's Not Included</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {programme.whatsExcluded.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Recommended Items to Carry
                </h4>
                <div className="flex flex-wrap gap-2">
                  {programme.thingsToCarry.map((item, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-700 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Frequently Asked Questions */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold font-display text-slate-900">
              Frequently Asked Questions about {programme.title}
            </h3>

            <div className="space-y-3">
              {programme.faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div key={i} className="rounded-xl border border-slate-200 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                      className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 bg-slate-50/70 hover:bg-slate-100 transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-brand-orange transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-4 text-xs text-slate-600 bg-white leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Sticky Sidebar */}
        <div className="lg:col-span-4 sticky top-28 space-y-6">
          {/* Quick Quotation Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                Institutional Quotation
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-extrabold font-display text-slate-950">
                  Custom Quote on Request
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                *Slabs discounted for batches above 40 students. Faculty travel complimentary.
              </p>
            </div>

            {sidebarSubmitted ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 font-display">Inquiry Sent!</h4>
                <p className="text-xs text-slate-600">
                  Our education tour manager will reach out via WhatsApp & phone with your customized brochure.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSidebarSubmit} className="space-y-3 text-left">
                <div>
                  <label className="text-[11px] font-semibold text-slate-700 block mb-0.5">
                    School / College / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Modern School"
                    value={sidebarForm.schoolOrCollege}
                    onChange={(e) => setSidebarForm({ ...sidebarForm, schoolOrCollege: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-700 block mb-0.5">
                    Coordinator / Teacher Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={sidebarForm.coordinatorName}
                    onChange={(e) => setSidebarForm({ ...sidebarForm, coordinatorName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-0.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91..."
                      value={sidebarForm.phone}
                      onChange={(e) => setSidebarForm({ ...sidebarForm, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-0.5">
                      Batch Size
                    </label>
                    <select
                      value={sidebarForm.studentCount}
                      onChange={(e) => setSidebarForm({ ...sidebarForm, studentCount: e.target.value })}
                      className="w-full px-2.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-orange bg-white"
                    >
                      <option value="20-35 Students">20-35</option>
                      <option value="36-60 Students">36-60</option>
                      <option value="60-100 Students">60-100</option>
                      <option value="100+ Students">100+</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="orange-gradient-btn w-full py-3 rounded-xl font-display font-bold text-xs text-white shadow-md shadow-brand-orange/20 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Custom Itinerary & Quote</span>
                </button>
              </form>
            )}

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={getWhatsAppUrl(`Hi UK Yatra, I want to inquire about *${programme.title}* for our student group.`)}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-emerald-600 text-white py-2.5 rounded-xl font-bold text-xs transition-colors shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 rounded-xl font-bold text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>Call Education Desk: {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>

          {/* Teacher / Faculty Guarantee Banner */}
          <div className="p-5 rounded-3xl bg-[#000044] text-white space-y-3 text-xs shadow-lg">
            <div className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Institutional Safety Guarantee</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              We provide complete compliance dossiers for school boards and university syndicates: driver police verification, fitness certificates, and insurance coverage.
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Photo Preview Modal */}
      {activePhoto && (
        <div 
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <button 
            type="button"
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={activePhoto} 
            alt="Expanded view" 
            className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl" 
          />
        </div>
      )}

      {/* Related Programmes Section */}
      <div className="mt-20 pt-10 border-t border-slate-200">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
              Other Recommended Educational Programmes
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Explore more curriculum-aligned circuits, campus treks, and summer learning camps.
            </p>
          </div>
          <Link
            to="/educational-programmes"
            className="text-xs font-bold text-brand-orange hover:text-orange-700 flex items-center gap-1 transition-colors"
          >
            <span>View All Tracks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProgrammes.map((rel) => (
            <Link
              key={rel.id}
              to={`/educational-programmes/${rel.id}`}
              className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-950/80 text-white backdrop-blur-xs">
                    {rel.track}
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <div className="text-[11px] font-bold text-brand-orange">{rel.duration} • {rel.location}</div>
                  <h4 className="text-sm font-bold font-display text-slate-900 group-hover:text-brand-orange transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {rel.shortDesc}
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0 flex items-center justify-between text-xs font-bold text-brand-orange">
                <span>Custom Group Quote</span>
                <span className="group-hover:translate-x-1 transition-transform">Details →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

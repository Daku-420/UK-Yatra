import React, { useState, useEffect } from 'react';
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
  Send,
  HelpCircle,
  FileCheck,
  HeartHandshake
} from 'lucide-react';
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
      'Explore Uttarakhand educational programmes: curriculum-aligned school excursions, college adventure treks, and summer learning camps with 1:8 safety ratio and certified instructors.'
    );

    return () => {
      document.title = 'UK Yatra | Uttarakhand Travel & Tour Packages';
    };
  }, []);

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

  const programmes = [
    {
      id: 'school-trips',
      title: 'School Trips & Field Excursions',
      subtitle: 'Curriculum-Aligned STEM, Ecology & Heritage Tours',
      badge: '1:8 Safety Ratio',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      icon: School,
      iconBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      link: '/school-trips',
      image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80',
      description: 'Carefully supervised experiential learning tours designed for Classes 5 to 12. Covers environmental studies at FRI Dehradun, earth sciences at Wadia Geology, biodiversity in Jim Corbett, and heritage walks.',
      highlights: [
        'Forest Research Institute (FRI) & Robber’s Cave field studies',
        'Wadia Institute of Himalayan Geology earth science tour',
        'Jim Corbett wildlife safari & riverbed conservation workshop',
        'Tehri Dam engineering & clean renewable energy module',
        'Strict 1:8 teacher-to-student chaperone ratio & 24/7 security'
      ],
      ctaText: 'Explore School Trips'
    },
    {
      id: 'college-trips',
      title: 'College Trips & Adventure Treks',
      subtitle: 'Student Treks, White-Water Rafting & Campus Discounts',
      badge: 'Hot Group Deals',
      badgeColor: 'bg-orange-500/20 text-brand-orange border-orange-500/30',
      icon: GraduationCap,
      iconBg: 'bg-orange-500/20 text-brand-orange border-orange-500/30',
      link: '/college-trips',
      image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80',
      description: 'High-energy, unforgettable youth expeditions crafted for universities and student societies. From snow treks to Kedarkantha and Chopta to thrilling white-water rafting in Rishikesh with group savings.',
      highlights: [
        'Kedarkantha (12,500 ft) & Tungnath-Chandrashila summit treks',
        'Rishikesh 16km/26km Grade III-IV river rafting & cliff jumping',
        'Riverside camping with bonfire, music & stargazing sessions',
        'Industrial & geology study visits with certification',
        'Special bulk student discounts & customized college batch dates'
      ],
      ctaText: 'Explore College Trips'
    },
    {
      id: 'summer-learning',
      title: 'Summer Learning Programmes',
      subtitle: 'Wilderness Survival, Astronomy & Leadership Bootcamps',
      badge: 'Summer Camps',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      icon: SunMedium,
      iconBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      link: '/summer-learning-programmes',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
      description: 'Transformative outdoor bootcamps designed to build life skills, self-reliance, and scientific curiosity. From friction fire making and alpine shelters to dark-sky astrophotography under crystal skies.',
      highlights: [
        'Wilderness survival, compass navigation & alpine bushcraft',
        'Benital Dark Sky stargazing with high-powered telescopes',
        'Himalayan flora & medicinal herbs identification workshops',
        'Confidence-building ropes course, rappelling & team challenges',
        'Official certificates of completion & skill badges'
      ],
      ctaText: 'Explore Summer Programmes'
    }
  ];

  const safetyFeatures = [
    {
      icon: ShieldCheck,
      title: '1:8 Chaperone & Instructor Ratio',
      description: 'Every 8 students are accompanied by dedicated certified instructors and trained camp coordinators.'
    },
    {
      icon: Award,
      title: 'Certified Mountain & First Aid Staff',
      description: 'Guides trained at NIM (Nehru Institute of Mountaineering) and certified in Wilderness First Aid & CPR.'
    },
    {
      icon: FileCheck,
      title: 'Verified Transport & Safe Stays',
      description: 'GPS-enabled sanitized vehicles with hill-permit certified drivers and vetted resorts with separate boy/girl wings.'
    },
    {
      icon: HeartHandshake,
      title: 'Curriculum & NEP 2020 Aligned',
      description: 'Workshops tailored to school CBSE/ICSE/IB curricula and UGC collegiate learning outcomes.'
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
              href="#programmes-grid"
              className="orange-gradient-btn px-6 sm:px-8 py-3.5 rounded-xl font-display font-bold text-sm text-white shadow-xl shadow-brand-orange/25 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Explore All Tracks</span>
            </a>

            <a
              href={getWhatsAppUrl("Hi UK Yatra, I would like to inquire about Educational Programmes (School / College / Summer Camps) in Uttarakhand.")}
              target="_blank"
              rel="noreferrer"
              className="px-6 sm:px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-display font-semibold text-sm transition-all flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Talk to Education Head</span>
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

      {/* 3 Core Educational Tracks */}
      <section id="programmes-grid" className="mb-20 scroll-mt-28">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4" />
            <span>Select Your Track</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Curated Educational Pathways
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Choose from comprehensive school excursions, exciting college adventure treks, or immersive summer camps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programmes.map((prog) => {
            const Icon = prog.icon;
            return (
              <div 
                key={prog.id}
                className="group flex flex-col justify-between rounded-3xl bg-white border border-[#E2DDD5] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden text-left"
              >
                <div>
                  {/* Image header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img 
                      src={prog.image} 
                      alt={prog.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    
                    <span className={`absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-md ${prog.badgeColor}`}>
                      {prog.badge}
                    </span>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`p-1.5 rounded-lg border backdrop-blur-md ${prog.iconBg}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-200">{prog.subtitle}</span>
                      </div>
                      <h3 className="text-xl font-bold font-display text-white group-hover:text-brand-orange transition-colors">
                        {prog.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {prog.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">
                        Core Learning Modules
                      </span>
                      {prog.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <Link
                    to={prog.link}
                    className="w-full py-3 px-5 rounded-xl bg-[#000044] hover:bg-brand-orange text-white text-xs font-bold font-display flex items-center justify-center gap-2 transition-all shadow-md group-hover:shadow-lg"
                  >
                    <span>{prog.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
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

      {/* Institutional Booking Inquiry Form */}
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

import React, { useState } from 'react';
import { 
  SunMedium, 
  Sparkles, 
  ShieldCheck, 
  Telescope, 
  Compass, 
  Award, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Send,
  Tent,
  Flame,
  Calendar,
  Zap,
  Users,
  Check
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';

interface SummerLearningPageProps {
  onOpenBookingModal?: (packageName?: string) => void;
}

export const SummerLearningPage: React.FC<SummerLearningPageProps> = ({ onOpenBookingModal }) => {
  const [formData, setFormData] = useState({
    parentOrStudentName: '',
    phone: '',
    email: '',
    participantAge: '13-16 Years',
    preferredProgramme: 'Wilderness Survival & Bushcraft Camp',
    preferredBatch: 'June 1 - June 7 Batch',
    city: '',
    specialInterests: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const programmes = [
    {
      id: 'wilderness-survival-bushcraft',
      title: 'Himalayan Wilderness Survival & Bushcraft',
      location: 'Kanatal & Dhanaulti Pine Forests (8,500 ft)',
      duration: '6 Days / 5 Nights',
      ageGroup: 'Ages 11 - 18',
      badge: 'Bestseller',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
      skills: [
        'Topographic map reading, terrain navigation & magnetic compass use',
        'Emergency alpine shelter construction using natural boughs & tarp',
        'Friction fire making, campfire safety & outdoor wilderness cooking',
        'Water filtration in the wild & solar water purification techniques',
        'Wilderness First Aid basics & emergency signaling mirrors/whistle'
      ]
    },
    {
      id: 'dark-sky-astronomy-astrophotography',
      title: 'Dark Sky Astronomy & Astrophotography Camp',
      location: 'Benital Astro-Village & Chopta (9,000 ft)',
      duration: '5 Days / 4 Nights',
      ageGroup: 'Ages 12 - 22',
      badge: 'Stargazing Special',
      image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80',
      skills: [
        'Night-sky observations through motorized computerized telescopes',
        'Deep-sky object spotting: Saturn rings, Jupiter moons, Andromeda galaxy',
        'Smartphone & DSLR night astrophotography masterclass',
        'Ancient celestial navigation & constellation identification lore',
        'Interactive lectures with amateur astronomers & astrophysicists'
      ]
    },
    {
      id: 'river-kayaking-leadership',
      title: 'River Expedition & White-Water Leadership Academy',
      location: 'Shivpuri & Byasi, Rishikesh',
      duration: '5 Days / 4 Nights',
      ageGroup: 'Ages 14 - 24',
      badge: 'High Action',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      skills: [
        'Fundamental white-water kayak stroke mechanics & wet exit drills',
        'River hydrology: Reading rapids, eddies, hydraulics & whirlpools',
        'Throw-bag rope rescue drills & white-water swift rescue protocols',
        'Team leadership under dynamic pressure & outdoor confidence',
        'Ecological Ganga river clean-up & riverine biodiversity survey'
      ]
    },
    {
      id: 'mountain-ecology-flora-fieldwork',
      title: 'Alpine Ecology, Glaciology & Climate Fieldwork',
      location: 'Auli, Joshimath & Valley of Flowers Buffer Zone',
      duration: '7 Days / 6 Nights',
      ageGroup: 'Ages 13 - 22',
      badge: 'Nature & Science',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      skills: [
        'Alpine flora herbarium creation & rare medicinal herb documentation',
        'Glacial moraine study & mountain watershed climate impact tracking',
        'Outdoor wildlife camera trap deployment & animal track identification',
        'Environmental documentary filmmaking & field journaling skills',
        'Certified Himalayan Junior Eco-Ambassador credentials'
      ]
    }
  ];

  const pillarBenefits = [
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: '100% Digital Detox',
      desc: 'Swap smartphone screens for towering deodar trees, starry night skies, and genuine peer friendships.'
    },
    {
      icon: <Award className="w-8 h-8 text-brand-orange" />,
      title: 'Merit Certificates',
      desc: 'Official Certificate of Adventure & Wilderness Achievement valued for student portfolios and college applications.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      title: 'Certified Instructors',
      desc: 'Led by Nehru Institute of Mountaineering (NIM) certified mountaineers and international river safety kayakers.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Age-Specific Cohorts',
      desc: 'Carefully segregated peer groups ensuring age-appropriate challenges, mentorship, and comfortable accommodations.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#000044] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs 
          items={[
            { label: 'Activities', to: '/activities' },
            { label: 'Summer Learning Programmes' }
          ]} 
        />

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-16 cream-banner p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 text-xs font-bold uppercase tracking-wider">
              <SunMedium className="w-4 h-4 text-amber-600" />
              <span>Himalayan Youth Summer Camps 2026</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Summer Learning & <br />
              <span className="text-brand-orange">Wilderness Bootcamps</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Transform summer vacations into life-defining growth. Survival skills, dark-sky astronomy, white-water kayaking, and leadership bootcamps in the pure air of the Uttarakhand Himalayas.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#summer-form" 
                className="orange-gradient-btn px-6 py-3 rounded-xl font-display font-semibold text-sm text-white shadow-lg shadow-brand-orange/25 inline-flex items-center gap-2"
              >
                <span>Enroll For Summer Batch</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href={getWhatsAppUrl("Hi UKYatra, I want to know details and batch dates for Summer Learning Programmes in Uttarakhand.")}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-white border border-slate-300 font-display font-semibold text-sm text-slate-800 hover:bg-slate-50 transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600 fill-current" />
                <span>Chat with Summer Camp Dean</span>
              </a>
            </div>
          </div>
        </div>

        {/* Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillarBenefits.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#E2DDD5] rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold font-display text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Programme Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">Summer 2026 Expeditions</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mt-1">
              Curated Summer Learning Tracks
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Each programme is limited to 20 students per cohort to ensure individualized mentor supervision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programmes.map((prog) => (
              <div 
                key={prog.id} 
                className="bg-white border border-[#E2DDD5] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={prog.image} 
                      alt={prog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
                    <span className="absolute top-4 left-4 bg-brand-orange text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {prog.badge}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="flex items-center gap-1.5 font-semibold bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg">
                        <Clock className="w-3.5 h-3.5 text-amber-300" />
                        {prog.duration}
                      </span>
                      <span className="font-semibold bg-emerald-600/90 px-3 py-1 rounded-lg">
                        {prog.ageGroup}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs text-brand-orange font-semibold flex items-center gap-1.5 mb-1.5">
                      <Compass className="w-3.5 h-3.5" />
                      <span>{prog.location}</span>
                    </div>
                    <h3 className="text-xl font-bold font-display text-slate-900 mb-3">
                      {prog.title}
                    </h3>
                    <div className="space-y-2 mb-6">
                      {prog.skills.map((skill, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-auto flex items-center gap-3">
                  <button
                    onClick={() => onOpenBookingModal ? onOpenBookingModal(`Summer Camp: ${prog.title}`) : window.location.href = '#summer-form'}
                    className="flex-1 orange-gradient-btn py-3 rounded-xl font-display font-semibold text-xs text-white text-center shadow-md shadow-brand-orange/20 cursor-pointer"
                  >
                    Reserve Batch Seat
                  </button>
                  <a
                    href={getWhatsAppUrl(`Hi UKYatra, I'd like full itinerary and fee details for ${prog.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                    aria-label="WhatsApp enquiry"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Batch Calendar Schedule */}
        <div className="bg-[#000044] text-white rounded-3xl p-8 sm:p-12 mb-20 shadow-xl border border-white/10">
          <div className="max-w-3xl mb-8">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">Summer Schedule</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1 mb-2">
              Upcoming Summer 2026 Batch Dates
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Early bird registrations receive complimentary round-trip Dehradun/Rishikesh pick-up and expedition kits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">Batch A • Early Summer</span>
              <h4 className="text-base font-bold text-white mt-1 mb-2">May 18 – May 24</h4>
              <p className="text-slate-400 leading-relaxed text-[11px]">Best for schools with early summer vacation breaks. Kanatal & Rishikesh centres.</p>
              <div className="mt-4 inline-flex items-center gap-1 text-emerald-400 font-semibold text-[11px]">
                <Check className="w-3.5 h-3.5" />
                <span>Registrations Open (12 seats left)</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">Batch B • Peak Summer</span>
              <h4 className="text-base font-bold text-white mt-1 mb-2">June 02 – June 08</h4>
              <p className="text-slate-400 leading-relaxed text-[11px]">Ideal mountain climate in high Chopta & Benital Dark Sky Astro-Village.</p>
              <div className="mt-4 inline-flex items-center gap-1 text-amber-300 font-semibold text-[11px]">
                <Zap className="w-3.5 h-3.5" />
                <span>Fast Filling (6 seats left)</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">Batch C • Mid Summer</span>
              <h4 className="text-base font-bold text-white mt-1 mb-2">June 16 – June 22</h4>
              <p className="text-slate-400 leading-relaxed text-[11px]">Alpine wildflower blooms, glaciology fieldwork & river navigation camp.</p>
              <div className="mt-4 inline-flex items-center gap-1 text-emerald-400 font-semibold text-[11px]">
                <Check className="w-3.5 h-3.5" />
                <span>Registrations Open (14 seats left)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enrollment Form */}
        <div id="summer-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white border border-[#E2DDD5] rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">Direct Admission Desk</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1 mb-4">
                Enroll In A Summer Learning Programme
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Fill the enrollment form with your child's age group and selected programme. Our Camp Dean will get in touch with the complete camp kit list, food menu, and accommodation details.
              </p>

              <div className="space-y-3 bg-amber-50/70 border border-amber-200 rounded-2xl p-4 text-xs text-slate-700">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-orange" />
                  <span>Portfolio Credential</span>
                </div>
                <p>Every participant is awarded a certified UKYatra Himalayan Outdoor Expedition Badge and comprehensive evaluation report assessing leadership, grit, and teamwork.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 mt-6 flex items-center gap-4">
              <a 
                href={`tel:${SITE_CONFIG.phone}`} 
                className="flex items-center gap-2 text-xs font-semibold text-slate-800 hover:text-brand-orange transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>Camp Helpline: {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">Seat Reservation Request Received!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you! We have logged your enrollment request for <strong>{formData.preferredProgramme}</strong>. Our camp mentor will call you at <strong>{formData.phone}</strong> to confirm your slot.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Register Another Student
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Parent / Participant Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={formData.parentOrStudentName}
                      onChange={(e) => setFormData({ ...formData, parentOrStudentName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="parent@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">City of Residence</label>
                    <input
                      type="text"
                      placeholder="e.g. Delhi NCR / Mumbai / Bangalore"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Participant Age</label>
                    <select
                      value={formData.participantAge}
                      onChange={(e) => setFormData({ ...formData, participantAge: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden bg-white"
                    >
                      <option value="8-11 Years">8 - 11 Years (Junior)</option>
                      <option value="12-15 Years">12 - 15 Years (Teens)</option>
                      <option value="16-19 Years">16 - 19 Years (Senior)</option>
                      <option value="20-25 Years">20 - 25 Years (Young Adult)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Programme Track</label>
                    <select
                      value={formData.preferredProgramme}
                      onChange={(e) => setFormData({ ...formData, preferredProgramme: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden bg-white"
                    >
                      <option value="Wilderness Survival & Bushcraft Camp">Wilderness Survival</option>
                      <option value="Dark Sky Astronomy & Astrophotography">Astronomy & Stargazing</option>
                      <option value="River Kayaking & Aquatic Leadership">River Kayak & Leadership</option>
                      <option value="Alpine Ecology & Glaciology Fieldwork">Alpine Ecology</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Batch</label>
                    <select
                      value={formData.preferredBatch}
                      onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden bg-white"
                    >
                      <option value="May 18 – May 24 (Batch A)">May 18 – May 24 (Batch A)</option>
                      <option value="June 02 – June 08 (Batch B)">June 02 – June 08 (Batch B)</option>
                      <option value="June 16 – June 22 (Batch C)">June 16 – June 22 (Batch C)</option>
                      <option value="Flexible / Summer Dates">Flexible Dates</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Dietary Restrictions or Special Instructions</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Vegetarian only, any allergies, or specific questions about camp amenities."
                    value={formData.specialInterests}
                    onChange={(e) => setFormData({ ...formData, specialInterests: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-semibold text-xs text-white shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Reserve Seat & Get Camp Brochure</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SummerLearningPage;

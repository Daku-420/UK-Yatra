import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  ShieldCheck, 
  Flame, 
  Camera, 
  Users, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Send,
  Compass,
  Tent,
  Award
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';

interface CollegeTripsPageProps {
  onOpenBookingModal?: (packageName?: string) => void;
}

export const CollegeTripsPage: React.FC<CollegeTripsPageProps> = ({ onOpenBookingModal }) => {
  const [formData, setFormData] = useState({
    collegeName: '',
    leadName: '',
    phone: '',
    email: '',
    groupSize: '25-50',
    preferredDestination: 'Rishikesh Rafting & Camping',
    travelMonth: 'April - May',
    budgetPerStudent: '₹3,000 - ₹5,000',
    specialRequirements: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const popularTrips = [
    {
      id: 'rishikesh-rafting-camping',
      title: 'Rishikesh Adrenaline & Riverside Camps',
      duration: '3 Days / 2 Nights',
      price: '₹3,499',
      badge: 'Most Popular',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      highlights: [
        '16 km Grade III/IV River Rafting with cliff jumping',
        'Riverside luxury Swiss tents with attached washrooms',
        'DJ Night, acoustic live jamming & midnight bonfire',
        'Unlimited buffet meals & evening barbecue snacks',
        'Bungee jumping & zipline add-on assistance'
      ]
    },
    {
      id: 'kedarkantha-winter-snow',
      title: 'Kedarkantha Summit Student Expedition',
      duration: '5 Days / 4 Nights',
      price: '₹5,999',
      badge: 'High Adventure',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      highlights: [
        '12,500 ft Himalayan peak summit with crampons & gaiters',
        'Certified IMF mountaineering instructors & trek marshals',
        'Warm 4-season alpine tents & sub-zero sleeping bags',
        'High-altitude safety: Pulse oximeter, portable oxygen & first aid',
        'Official summit completion certificate for each student'
      ]
    },
    {
      id: 'nag-tibba-weekend-trek',
      title: 'Nag Tibba Weekend Warrior Trek',
      duration: '2 Days / 1 Night',
      price: '₹2,699',
      badge: 'Budget Pick',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Highest peak in lower Himalayas (9,915 ft)',
        'Ideal for first-time college hikers & batch trips',
        'Mesmerizing sunset & snow-capped views of Bandarpoonch',
        'Pick & drop from Dehradun Railway Station / Bus Stand',
        'Stargazing & outdoor survival workshop'
      ]
    },
    {
      id: 'kasar-devi-jibhi-hippie',
      title: 'Kasar Devi & Jageshwar Cultural Trail',
      duration: '4 Days / 3 Nights',
      price: '₹4,899',
      badge: 'Culture & Vibe',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Van Allen Belt spiritual vibration zone meditation',
        'Café culture, live music & photography walks in Almora',
        'Ancient 124 stone temple complex of Jageshwar Dham',
        'Homestays with authentic Kumaoni food & local tales',
        'Comfortable sanitized Urbania / AC bus transport'
      ]
    }
  ];

  const valueProps = [
    {
      icon: <GraduationCap className="w-8 h-8 text-brand-orange" />,
      title: 'Tiered Student Slabs',
      desc: 'Deep group discounts for student councils, society clubs, and batch farewells without compromising quality.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      title: 'NOC & College Permission Support',
      desc: 'We provide detailed itineraries, safety dossiers, verified bus permits, and parent undertaking templates for college administration approvals.'
    },
    {
      icon: <Flame className="w-8 h-8 text-amber-500" />,
      title: 'Bonfires, Music & Games',
      desc: 'Unmatched batch bonding with private outdoor bonfire nights, musical acoustic jamming, volleyball, and team games.'
    },
    {
      icon: <Camera className="w-8 h-8 text-purple-500" />,
      title: 'Creator & Drone Friendly',
      desc: 'Dedicated content stops, scenic vantage points, and optional student videography crew to craft epic reel memories.'
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
            { label: 'College Trips' }
          ]} 
        />

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-16 cream-banner p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Epic Student Expeditions & Batch Treks</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Uttarakhand Trips Built For <br />
              <span className="text-brand-orange">College Students & Youth</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Grade IV river rafting, Himalayan summit treks, lakeside bonfires, and unforgettable batch memories. 
              Certified safety, student-friendly budgets, and zero hassle permissions.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#college-form" 
                className="orange-gradient-btn px-6 py-3 rounded-xl font-display font-semibold text-sm text-white shadow-lg shadow-brand-orange/25 inline-flex items-center gap-2"
              >
                <span>Get College Group Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href={getWhatsAppUrl("Hi UKYatra, I want to organize a college trip to Uttarakhand for our batch.")}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-white border border-slate-300 font-display font-semibold text-sm text-slate-800 hover:bg-slate-50 transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600 fill-current" />
                <span>Chat with Student Coordinator</span>
              </a>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {valueProps.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#E2DDD5] rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold font-display text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Popular College Trip Packages */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">Top Student Picks</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mt-1">
              Curated College Itineraries
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Customizable itineraries designed specifically for batch size 15 to 150+ students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularTrips.map((trip) => (
              <div 
                key={trip.id} 
                className="bg-white border border-[#E2DDD5] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={trip.image} 
                      alt={trip.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                    <span className="absolute top-4 left-4 bg-brand-orange text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {trip.badge}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="flex items-center gap-1.5 font-semibold bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg">
                        <Clock className="w-3.5 h-3.5 text-amber-300" />
                        {trip.duration}
                      </span>
                      <span className="text-lg font-bold text-amber-300">
                        {trip.price} <span className="text-xs text-white/80 font-normal">/student</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold font-display text-slate-900 mb-3">
                      {trip.title}
                    </h3>
                    <div className="space-y-2 mb-6">
                      {trip.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-auto flex items-center gap-3">
                  <button
                    onClick={() => onOpenBookingModal ? onOpenBookingModal(`College Trip: ${trip.title}`) : window.location.href = '#college-form'}
                    className="flex-1 orange-gradient-btn py-3 rounded-xl font-display font-semibold text-xs text-white text-center shadow-md shadow-brand-orange/20 cursor-pointer"
                  >
                    Enquire for Batch
                  </button>
                  <a
                    href={getWhatsAppUrl(`Hi UKYatra, I'd like more details and student group pricing for ${trip.title}.`)}
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

        {/* Safety & Protocol Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-20 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Parent & Administration Trust Matrix</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
              Certified Safety Protocols for College Delegations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Certified Female Trek Captains for mixed groups</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Wilderness First Responder (WFR) certified leads</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>GPS-tracked commercial tourist buses & verified hill drivers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero-tolerance safety briefing & emergency evacuation ties</span>
              </div>
            </div>
          </div>
        </div>

        {/* Group Proposal Form */}
        <div id="college-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white border border-[#E2DDD5] rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">Fast Response</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1 mb-4">
                Request Custom College Trip Plan & Quote
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Fill this form with your estimated student count and tentative travel dates. Our Student Travel Operations Head will share a PDF itinerary with custom discount slabs within 2 hours.
              </p>

              <div className="space-y-3 bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 text-xs text-slate-700">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-orange" />
                  <span>College Rep Perks</span>
                </div>
                <p>Are you a Student Council Representative, Society Head, or Faculty Coordinator? Ask for our complimentary faculty pass & representative stipend policy.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 mt-6 flex items-center gap-4">
              <a 
                href={`tel:${SITE_CONFIG.phone}`} 
                className="flex items-center gap-2 text-xs font-semibold text-slate-800 hover:text-brand-orange transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>Direct Call: {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">Proposal Request Received!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you! Our youth travel specialist is curating your student itinerary with discounted group pricing. We will contact you at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">College / University Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Delhi University / IIT / VIT"
                      value={formData.collegeName}
                      onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Lead Organizer Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.leadName}
                      onChange={(e) => setFormData({ ...formData, leadName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="organizer@college.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Approx Students</label>
                    <select
                      value={formData.groupSize}
                      onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden bg-white"
                    >
                      <option value="15-25">15 - 25 Students</option>
                      <option value="25-50">25 - 50 Students</option>
                      <option value="50-100">50 - 100 Students</option>
                      <option value="100+">100+ Students (Full Batch)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Destination</label>
                    <select
                      value={formData.preferredDestination}
                      onChange={(e) => setFormData({ ...formData, preferredDestination: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden bg-white"
                    >
                      <option value="Rishikesh Rafting & Camping">Rishikesh Rafting & Camping</option>
                      <option value="Kedarkantha Snow Trek">Kedarkantha Snow Trek</option>
                      <option value="Nag Tibba Weekend Trek">Nag Tibba Weekend Trek</option>
                      <option value="Auli Skiing & Valley">Auli Skiing & Valley</option>
                      <option value="Jim Corbett Wildlife & Stay">Jim Corbett Wildlife Safari</option>
                      <option value="Custom Mixed Route">Custom Mixed Route</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Budget / Head</label>
                    <select
                      value={formData.budgetPerStudent}
                      onChange={(e) => setFormData({ ...formData, budgetPerStudent: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden bg-white"
                    >
                      <option value="₹2,500 - ₹3,500">₹2,500 - ₹3,500</option>
                      <option value="₹3,500 - ₹5,000">₹3,500 - ₹5,000</option>
                      <option value="₹5,000 - ₹8,000">₹5,000 - ₹8,000</option>
                      <option value="₹8,000+">₹8,000+ (Premium)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tentative Dates / Special Requests</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Travelling second weekend of May. Need pick-up from Delhi/Chandigarh and bonfire night arrangements."
                    value={formData.specialRequirements}
                    onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-semibold text-xs text-white shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Request For College Proposal</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CollegeTripsPage;

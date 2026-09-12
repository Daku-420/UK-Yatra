import React, { useState } from 'react';
import { 
  School, 
  Sparkles, 
  ShieldCheck, 
  BookOpen, 
  HeartHandshake, 
  Users, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  Send,
  Award,
  Trees,
  Compass,
  FileCheck
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface SchoolTripsPageProps {
  onOpenBookingModal?: (packageName?: string) => void;
}

export const SchoolTripsPage: React.FC<SchoolTripsPageProps> = ({ onOpenBookingModal }) => {
  const [formData, setFormData] = useState({
    schoolName: '',
    coordinatorName: '',
    designation: 'Teacher / Activity Incharge',
    phone: '',
    email: '',
    studentCount: '30-60',
    grades: 'Classes 6th - 9th',
    destination: 'Dehradun & Mussoorie Science & Nature Tour',
    travelWindow: 'October - November',
    specialNotes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const educationalTours = [
    {
      id: 'dehradun-mussoorie-heritage',
      title: 'Dehradun & Mussoorie Science & Heritage Trail',
      duration: '3 Days / 2 Nights',
      grades: 'Grades 5 to 12',
      badge: 'Curriculum Aligned',
      image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80',
      modules: [
        'Forest Research Institute (FRI) botany & timber museum guided walk',
        'Wadia Institute of Himalayan Geology earth science tour',
        'Robber’s Cave (Guchhupani) limestone formation study',
        'Kempty Falls & Mussoorie heritage geography exploration',
        'Supervised evening interactive quiz & creative journal session'
      ]
    },
    {
      id: 'corbett-wildlife-ecology',
      title: 'Jim Corbett Eco-Conservation & Wildlife Study',
      duration: '3 Days / 2 Nights',
      grades: 'Grades 6 to 12',
      badge: 'Eco & Biology',
      image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80',
      modules: [
        'Project Tiger naturalist-guided open jeep biodiversity safari',
        'Bird-watching walk with certified wildlife ornithologist',
        'Interactive workshop on human-wildlife co-existence & conservation',
        'Corbett Heritage Museum & Dhangarhi orientation center visit',
        'Stargazing session with telescope & celestial navigation intro'
      ]
    },
    {
      id: 'tehri-dam-engineering',
      title: 'Tehri Dam Hydropower & Geography Expedition',
      duration: '2 Days / 1 Night',
      grades: 'Grades 8 to 12',
      badge: 'STEM & Engineering',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      modules: [
        'Field visit to Asia’s highest rock-fill dam (260.5 m)',
        'Understanding renewable hydroelectricity generation & turbine mechanics',
        'Himalayan water catchment & environmental impact analysis',
        'Water safety & kayaking intro at Tehri Lake adventure hub',
        'Team obstacle games & leadership building drills'
      ]
    },
    {
      id: 'rishikesh-adventure-bootcamp',
      title: 'Rishikesh Junior Adventure & Outdoor Leadership',
      duration: '3 Days / 2 Nights',
      grades: 'Grades 7 to 12',
      badge: 'Leadership & Sports',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      modules: [
        'Junior-graded gentle river rafting under certified IRF safety marshals',
        'Zipline across valley, low ropes course & commando net climb',
        'Wilderness survival fundamentals: Tent pitching & knot craft',
        'Evening Ganga Aarti cultural immersion at Triveni Ghat',
        'Team-building Olympiad with medals and certificates'
      ]
    }
  ];

  const safetyAssurance = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      title: '1:8 Chaperone Ratio',
      desc: 'Strict escort protocols with dedicated UKYatra tour directors assisting school teachers every moment.'
    },
    {
      icon: <FileCheck className="w-8 h-8 text-blue-600" />,
      title: 'School Board NOC & Compliance',
      desc: 'Complete documentation for CBSE/ICSE/IB schools: Risk assessment dossiers, insurance, transport fitness, and driver police verifications.'
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-brand-orange" />,
      title: 'Hygienic Pure Veg Dining',
      desc: '100% sanitized kitchen dining with nutritionist-approved student-friendly meals and mineral water.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Complimentary Teacher Passes',
      desc: '1 complimentary tour package for accompanying school faculty for every 10-15 participating students.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs 
          items={[
            { label: 'Activities', to: '/activities' },
            { label: 'School Trips' }
          ]} 
        />

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-16 cream-banner p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <School className="w-4 h-4" />
              <span>Experiential Learning & School Excursions</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Educational & Adventure <br />
              <span className="text-brand-orange">School Trips in Uttarakhand</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Curriculum-connected experiential tours designed for CBSE, ICSE, and IB schools. 
              Impeccable child safety, certified naturalists, STEM outdoor labs, and trusted chaperoning.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#school-form" 
                className="orange-gradient-btn px-6 py-3 rounded-xl font-display font-semibold text-sm text-white shadow-lg shadow-brand-orange/25 inline-flex items-center gap-2"
              >
                <span>Request School Proposal & Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href={getWhatsAppUrl("Hi UKYatra, I am an educator looking to organize an educational trip for our school.")}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-white border border-slate-300 font-display font-semibold text-sm text-slate-800 hover:bg-slate-50 transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Talk to School Tour Manager</span>
              </a>
            </div>
          </div>
        </div>

        {/* School Safety & Compliance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {safetyAssurance.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#E2DDD5] rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold font-display text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Popular Educational Itineraries */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">Academic & Experiential Modules</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mt-1">
              Field Study & Educational Circuits
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every itinerary combines STEM science, ecological awareness, history, and character-building teamwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationalTours.map((tour) => (
              <div 
                key={tour.id} 
                className="bg-white border border-[#E2DDD5] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
                    <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {tour.badge}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="flex items-center gap-1.5 font-semibold bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg">
                        <Clock className="w-3.5 h-3.5 text-amber-300" />
                        {tour.duration}
                      </span>
                      <span className="font-semibold bg-brand-orange/90 px-3 py-1 rounded-lg">
                        {tour.grades}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold font-display text-slate-900 mb-3">
                      {tour.title}
                    </h3>
                    <div className="space-y-2.5 mb-6">
                      {tour.modules.map((mod, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-auto flex items-center gap-3">
                  <button
                    onClick={() => onOpenBookingModal ? onOpenBookingModal(`School Trip: ${tour.title}`) : window.location.href = '#school-form'}
                    className="flex-1 orange-gradient-btn py-3 rounded-xl font-display font-semibold text-xs text-white text-center shadow-md shadow-brand-orange/20 cursor-pointer"
                  >
                    Request School Quote
                  </button>
                  <a
                    href={getWhatsAppUrl(`Hi UKYatra, please send curriculum brochure and pricing for school tour: ${tour.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                    aria-label="WhatsApp enquiry"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 10-Point Student Safety Standard */}
        <div className="bg-[#262937] text-white rounded-3xl p-8 sm:p-12 mb-20 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Zero Compromise</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1 mb-3">
              The UKYatra 10-Point School Safety Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Parents entrust us with their most precious treasures. We implement institutional safety benchmarks vetted by senior educationists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-200">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="font-bold text-amber-300 mb-1">1. 24x7 Doctor On Call</div>
              <p className="text-slate-400 text-[11px]">Direct priority tie-ups with district hospitals & local clinics in all tour destinations.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="font-bold text-amber-300 mb-1">2. GPS-Tracked Coaches</div>
              <p className="text-slate-400 text-[11px]">Speed-governed, sanitized Volvo and Force Urbania luxury buses with seatbelts.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="font-bold text-amber-300 mb-1">3. Female Marshals</div>
              <p className="text-slate-400 text-[11px]">Dedicated lady instructors for all co-ed and girls' school groups.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="font-bold text-amber-300 mb-1">4. Student ID Wristbands</div>
              <p className="text-slate-400 text-[11px]">Color-coded emergency contact tags with emergency 24x7 helpline details.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="font-bold text-amber-300 mb-1">5. Fresh Hygienic Food</div>
              <p className="text-slate-400 text-[11px]">Separate hot buffet counters for school groups, mild spices, pure vegetarian option.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="font-bold text-amber-300 mb-1">6. Daily Parent Broadcast</div>
              <p className="text-slate-400 text-[11px]">Organized photo/video updates to school administration and parent broadcast lists.</p>
            </div>
          </div>
        </div>

        {/* School Proposal Request Form */}
        <div id="school-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white border border-[#E2DDD5] rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">Institutional Enquiry</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1 mb-4">
                Request Official School Tour Dossier
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Please share your school's requirements. Our Institutional Head will provide a formal proposal with teacher-to-student ratios, transparent pricing, and learning objectives within 3 hours.
              </p>

              <div className="space-y-3 bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 text-xs text-slate-700">
                <div className="font-bold text-emerald-900 flex items-center gap-2">
                  <Trees className="w-4 h-4 text-emerald-600" />
                  <span>Custom Learning Outcomes</span>
                </div>
                <p>We customize tours around specific academic themes like Class 10 Geography, Environmental Science, Mountain Ecosystems, or Inter-House Adventure Cups.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 mt-6 flex items-center gap-4">
              <a 
                href={`tel:${SITE_CONFIG.phone}`} 
                className="flex items-center gap-2 text-xs font-semibold text-slate-800 hover:text-brand-orange transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>School Desk: {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">Proposal Request Received!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you! Our Institutional Relations Director will call you and dispatch a formal school proposal dossier to <strong>{formData.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Submit Another School Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">School / Institution Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. The Doon School / DPS RK Puram"
                      value={formData.schoolName}
                      onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Coordinator / Principal Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.coordinatorName}
                      onChange={(e) => setFormData({ ...formData, coordinatorName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Official Mobile / WhatsApp *</label>
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Official School Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="tours@school.edu.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Expected Students</label>
                    <select
                      value={formData.studentCount}
                      onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden bg-white"
                    >
                      <option value="20-40">20 - 40 Students</option>
                      <option value="40-80">40 - 80 Students</option>
                      <option value="80-150">80 - 150 Students</option>
                      <option value="150+">150+ (Full Grade/Wing)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Target Grades</label>
                    <select
                      value={formData.grades}
                      onChange={(e) => setFormData({ ...formData, grades: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden bg-white"
                    >
                      <option value="Classes 4th - 6th">Classes 4th - 6th (Juniors)</option>
                      <option value="Classes 7th - 9th">Classes 7th - 9th (Middle)</option>
                      <option value="Classes 10th - 12th">Classes 10th - 12th (Senior)</option>
                      <option value="Mixed Wings">Mixed Grades</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Circuit</label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden bg-white"
                    >
                      <option value="Dehradun & Mussoorie Science & Nature Tour">Dehradun & Mussoorie Science</option>
                      <option value="Jim Corbett Eco & Wildlife Safari">Jim Corbett Wildlife</option>
                      <option value="Tehri Dam Hydropower & Geography">Tehri Dam STEM</option>
                      <option value="Rishikesh Junior Adventure & Leadership">Rishikesh Junior Adventure</option>
                      <option value="Custom Himalayan Tour">Custom School Route</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tentative Dates & Specific Learning Focus</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Travelling mid-October for 3 nights. Looking for botany and STEM field visits with pure vegetarian food."
                    value={formData.specialNotes}
                    onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-semibold text-xs text-white shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Official School Proposal & Dossier</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SchoolTripsPage;

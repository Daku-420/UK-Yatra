import React, { useState } from 'react';
import { 
  Users, 
  Building2, 
  GraduationCap, 
  Heart, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Phone, 
  CheckCircle2,
  Calendar,
  MapPin,
  Send
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';

export const GroupTravelPage: React.FC = () => {
  const [formData, setFormData] = useState({
    groupType: 'Family & Friends',
    name: '',
    phone: '',
    email: '',
    groupSize: '10-20',
    destination: 'Char Dham Circuit',
    dates: '',
    requirements: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const groupTypes = [
    {
      icon: <Building2 className="w-8 h-8 text-brand-orange" />,
      title: 'Corporate Offsites & Leadership Retreats',
      desc: 'Energizing team bonding in Rishikesh & Jim Corbett. Luxury riverside resorts, conference halls, river rafting, outdoor survival games, and curated gala dinners.'
    },
    {
      icon: <Heart className="w-8 h-8 text-rose-400" />,
      title: 'Large Family Pilgrimages & Reunions',
      desc: 'Seamless Char Dham & Do Dham yatras for multi-generational families. Senior-citizen friendly pacing, elevator-equipped stays, pure veg kitchens, and private coaches.'
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-amber-400" />,
      title: 'College Treks & Youth Expeditions',
      desc: 'Budget-optimized adventure treks (Kedarkantha, Tungnath, Kuari Pass) with certified mountaineering instructors, alpine camping, and wilderness safety.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
      title: 'Yoga, Wellness & Spiritual Sanghas',
      desc: 'Holistic retreats in Rishikesh, Uttarkashi, and Devprayag with dedicated yoga halls, Ayurvedic sattvic meals, Ganga arti bookings, and sound healing.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Corporate & Group Travel' }]} />

        {/* Hero */}
        <div className="relative rounded-3xl overflow-hidden mb-16 cream-banner p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>Bespoke Himalayan Group Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Group Tours, Corporate Offsites & <br />
              <span className="text-brand-orange">Family Yatra Circuits</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              From 10 to 200+ guests, UKYatra delivers seamless logistics, dedicated tour directors, private sanitized luxury coaches, and tailor-made Himalayan itineraries.
            </p>
          </div>
        </div>

        {/* Group Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {groupTypes.map((type, idx) => (
            <div key={idx} className="bg-white border border-[#E2DDD5] rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all">
              <div className="mb-4">{type.icon}</div>
              <h3 className="text-xl font-bold font-display text-slate-900 mb-2">{type.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>

        {/* Group Quote Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white border border-[#E2DDD5] rounded-3xl p-8 sm:p-12 mb-20 shadow-sm">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">Custom Quotation</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1 mb-4">
                Request a Custom Group Proposal
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Tell us your group size, tentative dates, and desired experience. Our Group Operations Manager will send a comprehensive day-wise plan with transparent group slab pricing within 3 hours.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated on-ground Tour Coordinator for your group</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sanitized Urbania / Tempo / Volvo luxury buses</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Special group discounts & GST business invoices</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200">
              <div className="text-xs text-slate-500 mb-1">Direct Group Booking Desk:</div>
              <a href={`tel:${SITE_CONFIG.phone}`} className="text-lg font-bold text-slate-900 hover:text-brand-orange transition-colors">
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#F5F3EF] border border-[#E2DDD5] rounded-2xl p-6 sm:p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-medium mb-1.5">Group Organizer Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#E2DDD5] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-1.5">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 78179 55737"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[#E2DDD5] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-slate-700 font-medium mb-1.5">Group Type</label>
                    <select
                      value={formData.groupType}
                      onChange={e => setFormData({ ...formData, groupType: e.target.value })}
                      className="w-full bg-white border border-[#E2DDD5] rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-brand-orange"
                    >
                      <option>Corporate Offsite</option>
                      <option>Family Yatra</option>
                      <option>College / Youth</option>
                      <option>Yoga / Wellness</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-1.5">Approx Group Size</label>
                    <select
                      value={formData.groupSize}
                      onChange={e => setFormData({ ...formData, groupSize: e.target.value })}
                      className="w-full bg-white border border-[#E2DDD5] rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-brand-orange"
                    >
                      <option>6 - 12 Pax</option>
                      <option>12 - 25 Pax</option>
                      <option>25 - 50 Pax</option>
                      <option>50 - 100+ Pax</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-1.5">Tentative Dates</label>
                    <input
                      type="text"
                      placeholder="e.g. May 2026"
                      value={formData.dates}
                      onChange={e => setFormData({ ...formData, dates: e.target.value })}
                      className="w-full bg-white border border-[#E2DDD5] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">Special Requirements / Destinations</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us your desired destinations, hotel category (3-Star/5-Star), activities, dietary preferences..."
                    value={formData.requirements}
                    onChange={e => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full bg-white border border-[#E2DDD5] rounded-xl p-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-semibold text-white shadow-xl shadow-brand-orange/20"
                >
                  Submit Group Proposal Request
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900">Group Request Received!</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Our Group Specialist will call {formData.phone} shortly with custom itinerary options and group pricing.
                </p>
                <a
                  href={getWhatsAppUrl(`Hi UKYatra, I submitted a group inquiry for ${formData.groupSize} (${formData.groupType}).`)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold text-xs hover:bg-emerald-100 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Forward Details to WhatsApp</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

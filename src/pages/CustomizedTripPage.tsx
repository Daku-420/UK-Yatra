import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  Clock, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  ArrowRight,
  ArrowLeft,
  Mountain,
  Heart,
  Zap,
  Snowflake,
  Waves,
  Compass,
  Trees,
  Tent,
  Binoculars
} from 'lucide-react';
import { SITE_CONFIG, getCustomTripWhatsAppUrl } from '../config/siteConfig';
import { DESTINATIONS } from '../data/destinations';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';

export const CustomizedTripPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    // Step 1: Destinations & Themes
    destinations: ['Kedarnath', 'Rishikesh'] as string[],
    themes: ['Spiritual', 'Scenic Nature'] as string[],
    // Step 2: Group & Duration
    travellersType: 'Couple / Duo',
    travellerCount: 2,
    tripDuration: '4 - 5 Days',
    travelMonth: 'Upcoming Month',
    approxDate: '',
    // Step 3: Stays & Budget
    stayPreference: 'Deluxe (4-Star / Boutique Lodge)',
    transportPreference: 'Private Hill Innova / Ertiga',
    budgetRange: '₹15,000 - ₹25,000 per person',
    specialNotes: '',
    // Contact
    name: '',
    phone: '',
    email: '',
    city: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const toggleDestination = (destName: string) => {
    if (formData.destinations.includes(destName)) {
      setFormData({
        ...formData,
        destinations: formData.destinations.filter(d => d !== destName)
      });
    } else {
      setFormData({
        ...formData,
        destinations: [...formData.destinations, destName]
      });
    }
  };

  const toggleTheme = (theme: string) => {
    if (formData.themes.includes(theme)) {
      setFormData({
        ...formData,
        themes: formData.themes.filter(t => t !== theme)
      });
    } else {
      setFormData({
        ...formData,
        themes: [...formData.themes, theme]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const text = `Hi UKYatra, I have created a custom trip plan on your website!\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Destinations:* ${formData.destinations.join(', ')}\n*Themes:* ${formData.themes.join(', ')}\n*Duration:* ${formData.tripDuration}\n*Travellers:* ${formData.travellersType} (${formData.travellerCount} Persons)\n*Stay Style:* ${formData.stayPreference}\n*Approx Date:* ${formData.approxDate || formData.travelMonth}\n*Notes:* ${formData.specialNotes || 'None'}\n\nPlease share customized day-wise itinerary and quote.`;
    window.open(getCustomTripWhatsAppUrl({
      destination: formData.destinations.join(', '),
      travellers: `${formData.travellerCount} Persons`,
      dates: formData.approxDate || formData.travelMonth,
      budget: formData.stayPreference
    }), '_blank');
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'Customized Trip Planner' }]} />

      {/* Hero Intro */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bespoke Himalayan Holidays</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900">
          Your Trip. <span className="text-brand-orange">Your Rules.</span>
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
          Tell us what kind of Himalayan experience you're looking for and our destination architects will construct a personalized day-wise journey with transparent pricing.
        </p>
      </div>

      {!submitted ? (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DCD6CC] shadow-lg">
          {/* Multi-step progress indicator */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#E2DDD5] text-xs">
            <div className={`flex items-center gap-2 ${currentStep >= 1 ? 'text-brand-orange font-bold' : 'text-slate-500'}`}>
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${currentStep >= 1 ? 'bg-brand-orange text-white' : 'bg-slate-100 text-slate-500 border border-[#DCD6CC]'}`}>
                1
              </span>
              <span className="hidden sm:inline">Destinations & Style</span>
            </div>

            <div className={`h-0.5 flex-1 mx-4 ${currentStep >= 2 ? 'bg-brand-orange' : 'bg-[#EAE6DF]'}`}></div>

            <div className={`flex items-center gap-2 ${currentStep >= 2 ? 'text-brand-orange font-bold' : 'text-slate-500'}`}>
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${currentStep >= 2 ? 'bg-brand-orange text-white' : 'bg-slate-100 text-slate-500 border border-[#DCD6CC]'}`}>
                2
              </span>
              <span className="hidden sm:inline">Dates & Group</span>
            </div>

            <div className={`h-0.5 flex-1 mx-4 ${currentStep >= 3 ? 'bg-brand-orange' : 'bg-[#EAE6DF]'}`}></div>

            <div className={`flex items-center gap-2 ${currentStep >= 3 ? 'text-brand-orange font-bold' : 'text-slate-500'}`}>
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${currentStep >= 3 ? 'bg-brand-orange text-white' : 'bg-slate-100 text-slate-500 border border-[#DCD6CC]'}`}>
                3
              </span>
              <span className="hidden sm:inline">Stays & Contact</span>
            </div>
          </div>

          {/* Step 1: Destinations & Themes */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-lg font-bold font-display text-slate-900 mb-1">
                  1. Which places would you like to visit?
                </h3>
                <p className="text-xs text-slate-600 mb-4">
                  Select one or multiple destinations in Uttarakhand.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                  {DESTINATIONS.map((d) => {
                    const isSelected = formData.destinations.includes(d.name);
                    return (
                      <button
                        type="button"
                        key={d.id}
                        onClick={() => toggleDestination(d.name)}
                        className={`p-3 rounded-2xl text-xs font-semibold text-left transition-all border ${
                          isSelected
                            ? 'bg-brand-orange text-white border-brand-orange shadow-md shadow-brand-orange/20'
                            : 'bg-[#000044] text-slate-800 border-[#DCD6CC] hover:border-brand-orange/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{d.name}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span className="text-[10px] block opacity-80 mt-0.5">{d.category}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2DDD5]">
                <h3 className="text-lg font-bold font-display text-slate-900 mb-1">
                  2. Travel Style & Experiences
                </h3>
                <p className="text-xs text-slate-600 mb-4">
                  What kind of vibe are you dreaming of?
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Spiritual / Pilgrimage', icon: Sparkles },
                    { label: 'Snow & Winter Sports', icon: Snowflake },
                    { label: 'Adrenaline & Rafting', icon: Waves },
                    { label: 'Alpine Trekking', icon: Compass },
                    { label: 'Nature & Serenity', icon: Trees },
                    { label: 'Jungle & Wildlife', icon: Binoculars },
                    { label: 'Romantic / Honeymoon', icon: Heart },
                    { label: 'Family Vacation', icon: Users },
                    { label: 'Riverside Glamping', icon: Tent }
                  ].map((themeItem) => {
                    const isSelected = formData.themes.includes(themeItem.label);
                    const Icon = themeItem.icon;
                    return (
                      <button
                        type="button"
                        key={themeItem.label}
                        onClick={() => toggleTheme(themeItem.label)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-brand-orange text-white border-brand-orange shadow-md'
                            : 'bg-[#000044] text-slate-800 border-[#DCD6CC] hover:border-brand-orange/50'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-brand-orange'}`} />
                        <span>{themeItem.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="orange-gradient-btn px-8 py-3 rounded-xl font-display font-bold text-xs text-white flex items-center gap-2 shadow-lg"
                >
                  <span>Continue to Dates & Travellers</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Dates & Group */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200 text-xs">
              <div>
                <h3 className="text-lg font-bold font-display text-slate-900 mb-1">
                  3. Who is travelling?
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
                  {[
                    { type: 'Solo Traveller', count: 1 },
                    { type: 'Couple / Duo', count: 2 },
                    { type: 'Family with Kids', count: 4 },
                    { type: 'Friends / Group', count: 6 }
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.type}
                      onClick={() => setFormData({ ...formData, travellersType: item.type, travellerCount: item.count })}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        formData.travellersType === item.type
                          ? 'bg-brand-orange text-white border-brand-orange'
                          : 'bg-[#000044] text-slate-800 border-[#DCD6CC] hover:border-brand-orange/50'
                      }`}
                    >
                      <div className="font-bold">{item.type}</div>
                      <div className="text-[10px] opacity-80 mt-1">Approx {item.count} person(s)</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E2DDD5]">
                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">Ideal Trip Duration</label>
                  <select
                    value={formData.tripDuration}
                    onChange={(e) => setFormData({ ...formData, tripDuration: e.target.value })}
                    className="w-full bg-[#000044] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-brand-orange"
                  >
                    <option value="2 - 3 Days (Weekend Getaway)">2 - 3 Days (Weekend Getaway)</option>
                    <option value="4 - 5 Days (Popular Holiday)">4 - 5 Days (Popular Holiday)</option>
                    <option value="6 - 8 Days (Complete Explorer)">6 - 8 Days (Complete Explorer)</option>
                    <option value="9 - 12 Days (Char Dham / Grand Circuit)">9 - 12 Days (Char Dham / Grand Circuit)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">Tentative Start Date</label>
                  <input
                    type="date"
                    value={formData.approxDate}
                    onChange={(e) => setFormData({ ...formData, approxDate: e.target.value })}
                    className="w-full bg-[#000044] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              <div className="pt-6 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-2 border border-[#DCD6CC]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="orange-gradient-btn px-8 py-3 rounded-xl font-display font-bold text-xs text-white flex items-center gap-2 shadow-lg"
                >
                  <span>Continue to Accommodation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Stays, Budget & Contact */}
          {currentStep === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-200 text-xs">
              <div>
                <h3 className="text-lg font-bold font-display text-slate-900 mb-1">
                  4. Accommodation & Travel Comfort
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                  {[
                    { label: 'Comfort (3-Star)', desc: 'Clean, verified standard hotels & homestays' },
                    { label: 'Deluxe (4-Star)', desc: 'Premium view rooms, boutique lodges & Swiss tents' },
                    { label: 'Luxury & Resorts', desc: '5-star mountain retreats, heritage villas & river camps' }
                  ].map((stay) => (
                    <button
                      type="button"
                      key={stay.label}
                      onClick={() => setFormData({ ...formData, stayPreference: stay.label })}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        formData.stayPreference.includes(stay.label.split(' ')[0])
                          ? 'bg-brand-orange text-white border-brand-orange'
                          : 'bg-[#000044] text-slate-800 border-[#DCD6CC] hover:border-brand-orange/50'
                      }`}
                    >
                      <div className="font-bold">{stay.label}</div>
                      <div className="text-[10px] opacity-80 mt-1">{stay.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2DDD5]">
                <h3 className="text-lg font-bold font-display text-slate-900 mb-3">
                  5. Where should we send your customized itinerary?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-medium mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#000044] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#000044] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. priya@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#000044] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-1">Your Departure City</label>
                    <input
                      type="text"
                      placeholder="e.g. Delhi, Mumbai, Bengaluru"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#000044] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1">Any specific wishes or requirements?</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Need helicopter slots for Kedarnath, prefer pure vegetarian food, river rafting booking, wheelchair assistance..."
                  value={formData.specialNotes}
                  onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                  className="w-full bg-[#000044] border border-[#DCD6CC] rounded-xl p-3 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-brand-orange"
                ></textarea>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#E2DDD5]">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-2 border border-[#DCD6CC]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="orange-gradient-btn px-8 py-3.5 rounded-xl font-display font-bold text-xs text-white flex items-center gap-2 shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  <span>Generate My Itinerary</span>
                </button>
              </div>
            </form>
          )}
        </div>
      ) : (
        /* Confirmation State */
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCD6CC] shadow-xl text-center space-y-6 max-w-2xl mx-auto animate-in zoom-in-95 duration-200">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <h2 className="text-3xl font-bold font-display text-slate-900">
            Custom Trip Request Ready!
          </h2>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Thank you, <strong className="text-brand-orange">{formData.name}</strong>! We have mapped out your preferred destinations: <strong>{formData.destinations.join(', ')}</strong> for <strong>{formData.tripDuration}</strong>.
          </p>

          <div className="p-5 rounded-2xl bg-[#000044] border border-[#DCD6CC] text-xs text-slate-700 space-y-3">
            <p className="font-semibold text-slate-900 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Connect directly with our Senior Uttarakhand Destination Architect on WhatsApp:</span>
            </p>
            <button
              onClick={handleWhatsAppForward}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-xl font-bold text-xs transition-all shadow-xl"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Send Trip Summary on WhatsApp</span>
            </button>
          </div>

          <button
            onClick={() => { setSubmitted(false); setCurrentStep(1); }}
            className="text-xs text-slate-500 hover:text-brand-orange underline"
          >
            Plan Another Customized Trip
          </button>
        </div>
      )}
    </div>
  );
};

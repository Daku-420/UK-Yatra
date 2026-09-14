import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { InstagramIcon, FacebookIcon, YoutubeIcon, WhatsAppIcon } from '../components/SocialIcons';

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Tour Package Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden cream-banner p-8 sm:p-12 mb-12 shadow-sm">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect with Travel Specialists</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 leading-tight">
            Talk to a <span className="text-brand-orange">Travel Expert</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            Have questions about high-altitude routes, Char Dham biometric registrations, or custom family itineraries? Our team is available 7 days a week.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Contact Information */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-sm space-y-6">
            <h2 className="text-xl font-bold font-display text-slate-900">
              UKYatra Base Camp Offices
            </h2>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-sm">Main Basecamp & Operations:</strong>
                  <span className="text-slate-600 leading-relaxed block mt-0.5">{SITE_CONFIG.address}</span>
                </div>
              </div>


              <div className="flex items-center gap-3.5 pt-2">
                <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                <div>
                  <strong className="text-slate-900 block text-sm">Phone Helpline:</strong>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-slate-600 hover:text-brand-orange transition-colors">{SITE_CONFIG.phone} / {SITE_CONFIG.altPhone}</a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <WhatsAppIcon className="w-5 h-5 text-emerald-600 shrink-0 fill-current" />
                <div>
                  <strong className="text-slate-900 block text-sm">Direct WhatsApp:</strong>
                  <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="text-emerald-600 font-medium hover:underline">
                    {SITE_CONFIG.phone} (Quick Reply)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                <div>
                  <strong className="text-slate-900 block text-sm">Email Address:</strong>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-600 hover:text-brand-orange transition-colors">{SITE_CONFIG.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-2">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-sm">Desk Timings:</strong>
                  <span className="text-slate-600 block mt-0.5">{SITE_CONFIG.workingHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Channels */}
          <div className="bg-white rounded-3xl p-6 border border-[#E2DDD5] shadow-sm">
            <h3 className="font-display font-bold text-sm text-slate-900 mb-3">Connect on Social</h3>
            <div className="flex items-center gap-3">
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-[#000044] hover:bg-brand-orange text-slate-700 hover:text-white transition-all shadow-sm" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-[#000044] hover:bg-brand-orange text-slate-700 hover:text-white transition-all shadow-sm" aria-label="Facebook">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href={SITE_CONFIG.social.youtube} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-[#000044] hover:bg-brand-orange text-slate-700 hover:text-white transition-all shadow-sm" aria-label="YouTube">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Query Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DDD5] shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <h2 className="text-2xl font-bold font-display text-slate-900 mb-1">
                  Send Us a Message
                </h2>
                <p className="text-xs text-slate-600 mb-6 font-medium">
                  Fill out the form below and an Uttarakhand travel specialist will get back to you within 2 hours.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-white border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1.5">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-white border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-white border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1.5">Subject</label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-white border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    >
                      <option value="Tour Package Enquiry">Tour Package Enquiry</option>
                      <option value="Char Dham Yatra Booking">Char Dham Yatra Booking</option>
                      <option value="Himalayan Trekking">Himalayan Trekking</option>
                      <option value="Custom Vacation Planning">Custom Vacation Planning</option>
                      <option value="Hotel & Vehicle Rental">Hotel & Vehicle Rental</option>
                      <option value="Other Query">Other Query</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1.5">Your Message / Travel Details *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your travel dates, destinations of interest, number of travellers..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-white border border-[#DCD6CC] rounded-xl p-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-semibold text-white shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Trip Coordinator</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you {formState.name}! A coordinator from our Rishikesh desk will reach out to you shortly.
                </p>
                <div className="pt-4">
                  <a
                    href={getWhatsAppUrl(`Hi UKYatra, I just submitted a message on your contact form regarding "${formState.subject}".`)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold text-xs shadow-lg"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Chat on WhatsApp Instantly</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

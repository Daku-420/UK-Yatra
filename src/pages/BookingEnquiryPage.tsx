import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Phone, 
  Calendar, 
  Users, 
  ShieldCheck, 
  Sparkles,
  MapPin,
  Clock,
  Lock,
  Zap
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { DESTINATIONS } from '../data/destinations';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';

import { adminStorage } from '../utils/adminStorage';

export const BookingEnquiryPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'Kedarnath Yatra',
    packageChoice: 'Kedarnath Divine Yatra & Valley Escape',
    travelDate: '',
    travellers: '2',
    budget: 'Standard (3-Star)',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    adminStorage.addBooking({
      name: form.name,
      phone: form.phone,
      email: form.email,
      destination: form.destination,
      packageName: form.packageChoice,
      travelDate: form.travelDate,
      travellers: form.travellers,
      budget: form.budget,
      specialRequests: form.specialRequests,
      source: 'Booking Page'
    });
    setSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const text = `Hi UKYatra, I would like to request a booking / callback!\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Destination / Tour:* ${form.destination}\n*Package Choice:* ${form.packageChoice}\n*Travel Date:* ${form.travelDate || 'Flexible'}\n*Travellers:* ${form.travellers}\n*Budget:* ${form.budget}\n*Notes:* ${form.specialRequests || 'None'}`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'Booking & Callback Enquiry' }]} />

      {/* Header Banner */}
      <div className="text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Priority Trip Reservation</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900">
          Book Your Trip / <span className="text-brand-orange">Request Callback</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          Submit your trip preferences below. Our Uttarakhand travel specialists will check live hotel and vehicle availability, and get in touch with a customized quote.
        </p>
      </div>

      {!submitted ? (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DCD6CC] shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-medium mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Malhotra"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-brand-orange"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-1.5">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 9876543210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-brand-orange"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-medium mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. vikram@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-brand-orange"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-1.5">Select Tour Package / Circuit</label>
                <select
                  value={form.packageChoice}
                  onChange={(e) => setForm({ ...form, packageChoice: e.target.value })}
                  className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-brand-orange"
                >
                  <option value="Customized Multi-City Itinerary">Customized Multi-City Itinerary</option>
                  <option value="Char Dham Pilgrimage Circuit">Complete Char Dham Pilgrimage Circuit</option>
                  <option value="Do Dham (Kedarnath & Badrinath)">Do Dham (Kedarnath & Badrinath)</option>
                  <option value="Helicopter Charter Yatra">Helicopter Charter Yatra</option>
                  <option value="Himalayan Trekking & Camping">Himalayan Trekking & Camping</option>
                  <optgroup label="Vehicle & Taxi Rental Fleets">
                    <option value="Vehicle: Toyota Innova Crysta (6+1 Luxury)">Vehicle: Toyota Innova Crysta (6+1 Luxury SUV)</option>
                    <option value="Vehicle: Force Tempo Traveller (12/16/26 Seater)">Vehicle: Force Tempo Traveller (12/16/26 Seater)</option>
                    <option value="Vehicle: Maruti Ertiga (4+1 Economy MUV)">Vehicle: Maruti Ertiga (4+1 Economy MUV)</option>
                    <option value="Vehicle: Force Urbania (VIP Luxury Coach)">Vehicle: Force Urbania (VIP Luxury Coach)</option>
                    <option value="Vehicle: Airport / Railway Station Transfer">Vehicle: Airport / Railway Station Transfer</option>
                    <option value="Vehicle: Char Dham Circuit Cab (10 Days)">Vehicle: Char Dham Circuit Cab (10 Days)</option>
                  </optgroup>
                  {adminStorage.getPackages().map((pkg) => (
                    <option key={pkg.id} value={pkg.title}>
                      {pkg.title} ({pkg.duration})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-slate-700 font-medium mb-1.5">Preferred Travel Date</label>
                <input
                  type="date"
                  value={form.travelDate}
                  onChange={(e) => setForm({ ...form, travelDate: e.target.value })}
                  className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1.5">Number of Travellers</label>
                <select
                  value={form.travellers}
                  onChange={(e) => setForm({ ...form, travellers: e.target.value })}
                  className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-brand-orange"
                >
                  <option value="1 Solo">1 Solo</option>
                  <option value="2 Couple / Duo">2 Couple / Duo</option>
                  <option value="3 - 5 Family / Friends">3 - 5 Family / Friends</option>
                  <option value="6 - 12 Group Tour">6 - 12 Group</option>
                  <option value="12+ Corporate / Big Group">12+ Corporate</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1.5">Accommodation Style</label>
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-brand-orange"
                >
                  <option value="Standard (3-Star)">Standard (3-Star)</option>
                  <option value="Deluxe (4-Star / Boutique)">Deluxe (4-Star / Boutique)</option>
                  <option value="Luxury (5-Star / Riverside)">Luxury & Resorts</option>
                  <option value="Budget / Alpine Camps">Budget / Alpine Camps</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-1.5">Special Requests or Questions</label>
              <textarea
                rows={3}
                placeholder="e.g. Senior citizen parents with knee problems, require ground floor rooms, helicopter tickets, pickup from Jolly Grant airport..."
                value={form.specialRequests}
                onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
                className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl p-3 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-brand-orange"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full orange-gradient-btn py-4 rounded-xl font-display font-bold text-sm text-white shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Request Callback & Best Price Quote</span>
              </button>
            </div>

            <div className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>No advance payment is charged right now. We provide free itinerary consultation.</span>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCD6CC] shadow-xl text-center space-y-6 animate-in zoom-in-95">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Booking Callback Confirmed!
          </h2>

          <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-brand-orange">{form.name}</strong>! We have registered your reservation request for <strong>{form.packageChoice}</strong> ({form.travellers} Travellers).
          </p>

          <div className="p-5 rounded-2xl bg-[#F5F3EF] border border-[#DCD6CC] text-xs text-slate-700 space-y-3">
            <p className="font-semibold text-slate-900 flex items-center justify-center gap-1.5">
              <Zap className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Need to confirm dates immediately or speak with our coordinator?</span>
            </p>
            <button
              onClick={handleWhatsAppForward}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-xl font-bold text-xs transition-all shadow-xl"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Connect on WhatsApp Now</span>
            </button>
          </div>

          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-slate-500 hover:text-brand-orange underline"
          >
            Submit Another Reservation Request
          </button>
        </div>
      )}
    </div>
  );
};

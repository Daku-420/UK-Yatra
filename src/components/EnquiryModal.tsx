import React, { useState } from 'react';
import { X, CheckCircle, MessageSquare, Phone, Send, Calendar, Users, MapPin, Sparkles } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { DESTINATIONS } from '../data/destinations';
import { TOUR_PACKAGES } from '../data/packages';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillDestination?: string;
  prefillPackage?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  prefillDestination = '',
  prefillPackage = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: prefillDestination || 'Kedarnath',
    packageName: prefillPackage || '',
    travelDate: '',
    travellers: '2',
    budget: 'Standard',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi UKYatra, I submitted a booking enquiry!\nName: ${formData.name}\nPhone: ${formData.phone}\nDestination: ${formData.destination}\nPackage: ${formData.packageName || 'Customized'}\nDate: ${formData.travelDate || 'Flexible'}\nTravellers: ${formData.travellers}\nBudget: ${formData.budget}`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-[#DCD6CC] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Plan Your Himalayan Journey</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">
              Book Your Trip / Request Quote
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Share your trip preferences and our local Uttarakhand specialists will customize an itinerary with best available rates.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">Preferred Destination</label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-brand-orange"
                  >
                    {DESTINATIONS.map((dest) => (
                      <option key={dest.id} value={dest.name}>
                        {dest.name} ({dest.category})
                      </option>
                    ))}
                    <option value="Char Dham Circuit">Complete Char Dham Circuit</option>
                    <option value="Custom Multi-City">Custom Multi-City</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">Approx Date</label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">Travellers</label>
                  <select
                    value={formData.travellers}
                    onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                    className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-brand-orange"
                  >
                    <option value="1 (Solo)">1 (Solo)</option>
                    <option value="2 (Couple)">2 (Couple)</option>
                    <option value="3-5 (Small Family/Friends)">3-5 (Family/Friends)</option>
                    <option value="6-12 (Group Tour)">6-12 (Group Tour)</option>
                    <option value="12+ (Large Group/Corporate)">12+ (Large Group)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">Budget Preference</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-brand-orange"
                  >
                    <option value="Budget / Backpacker">Budget / Essential</option>
                    <option value="Standard / 3-Star">Standard / 3-Star</option>
                    <option value="Deluxe / 4-Star">Deluxe / 4-Star</option>
                    <option value="Luxury / 5-Star Resort">Luxury & Villas</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1.5">Special Requirements / Message</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Need helicopter tickets for Kedarnath, wheelchair for elderly parent, river-facing resort in Rishikesh..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl p-3 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-brand-orange"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-semibold text-white shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Free Itinerary & Quote</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500">
                🔒 We respect your privacy. No spam. 100% free consultation.
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              Enquiry Received!
            </h3>
            <p className="text-xs text-slate-700 max-w-sm mx-auto">
              Thank you, <strong className="text-brand-orange">{formData.name}</strong>! Our Himalayan trip coordinator has received your request for <strong>{formData.destination}</strong> and is preparing your personalized plan.
            </p>

            <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#DCD6CC] text-xs text-slate-700 space-y-2">
              <p>⚡ <strong>Need an instant quote right now?</strong></p>
              <button
                onClick={handleWhatsAppDirect}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-semibold transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Connect on WhatsApp Now</span>
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-slate-500 hover:text-brand-orange underline"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

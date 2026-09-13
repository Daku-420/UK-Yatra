import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Phone, Send, Calendar, Users, MapPin, Sparkles, Car } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { DESTINATIONS } from '../data/destinations';
import { WhatsAppIcon } from './SocialIcons';

import { adminStorage } from '../utils/adminStorage';

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

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        destination: prefillDestination || prev.destination || 'Kedarnath',
        packageName: prefillPackage || prev.packageName || ''
      }));
      setSubmitted(false);
    }
  }, [isOpen, prefillDestination, prefillPackage]);

  if (!isOpen) return null;

  const isVehicleBooking = 
    Boolean(formData.packageName && (
      formData.packageName.toLowerCase().includes('taxi') ||
      formData.packageName.toLowerCase().includes('vehicle') ||
      formData.packageName.toLowerCase().includes('car') ||
      formData.packageName.toLowerCase().includes('crysta') ||
      formData.packageName.toLowerCase().includes('tempo') ||
      formData.packageName.toLowerCase().includes('ertiga') ||
      formData.packageName.toLowerCase().includes('urbania')
    ));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    adminStorage.addBooking({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      destination: formData.destination,
      packageName: formData.packageName,
      travelDate: formData.travelDate,
      travellers: formData.travellers,
      budget: formData.budget,
      specialRequests: formData.message,
      source: isVehicleBooking ? 'Vehicle Booking Modal' : 'Enquiry Modal'
    });
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = isVehicleBooking
      ? `Hi UKYatra, I want to book a vehicle / hill cab!\nName: ${formData.name}\nPhone: ${formData.phone}\nVehicle: ${formData.packageName || 'Innova Crysta / Taxi'}\nRoute/Destination: ${formData.destination}\nTravel Date: ${formData.travelDate || 'Flexible'}\nPassengers: ${formData.travellers}\nNotes: ${formData.message || 'None'}`
      : `Hi UKYatra, I submitted a booking enquiry!\nName: ${formData.name}\nPhone: ${formData.phone}\nDestination: ${formData.destination}\nPackage: ${formData.packageName || 'Customized'}\nDate: ${formData.travelDate || 'Flexible'}\nTravellers: ${formData.travellers}\nBudget: ${formData.budget}`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-brand-card border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-wider mb-1">
              {isVehicleBooking ? <Car className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
              <span>{isVehicleBooking ? 'Book Your Vehicle & Hill Taxi' : 'Plan Your Himalayan Journey'}</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-2">
              {isVehicleBooking ? 'Reserve Your Mountain Vehicle' : 'Book Your Trip / Request Quote'}
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              {isVehicleBooking 
                ? 'Travel safely with verified Himalayan drivers, clean sanitized cabs, and transparent rates.' 
                : 'Share your trip preferences and our local Uttarakhand specialists will customize an itinerary with best available rates.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-800/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-400 focus:bg-slate-800 focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-800/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-400 focus:bg-slate-800 focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-800/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-400 focus:bg-slate-800 focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    {isVehicleBooking ? 'Destination / Hill Route' : 'Preferred Destination'}
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full bg-slate-800/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-white focus:bg-slate-800 focus:outline-none focus:border-brand-orange"
                  >
                    {DESTINATIONS.map((dest) => (
                      <option key={dest.id} value={dest.name} className="bg-slate-900 text-white">
                        {dest.name} ({dest.category})
                      </option>
                    ))}
                    <option value="Kedarnath (Sonprayag Base)" className="bg-slate-900 text-white">Kedarnath (Sonprayag Base)</option>
                    <option value="Badrinath & Mana Village" className="bg-slate-900 text-white">Badrinath & Mana Village</option>
                    <option value="Char Dham Circuit" className="bg-slate-900 text-white">Complete Char Dham Circuit</option>
                    <option value="Dehradun Airport to Mussoorie / Rishikesh" className="bg-slate-900 text-white">Dehradun Airport Transfer</option>
                    <option value="Custom Multi-City" className="bg-slate-900 text-white">Custom Multi-City</option>
                  </select>
                </div>
              </div>

              {isVehicleBooking && (
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">Vehicle Fleet Choice</label>
                  <select
                    value={formData.packageName}
                    onChange={(e) => setFormData({ ...formData, packageName: e.target.value })}
                    className="w-full bg-slate-800/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-white focus:bg-slate-800 focus:outline-none focus:border-brand-orange font-semibold text-brand-orange"
                  >
                    <option value="Taxi Rental - Toyota Innova Crysta (Luxury 6+1 / 7+1)">Toyota Innova Crysta (Luxury 6+1 / 7+1) - ₹4,500/day</option>
                    <option value="Taxi Rental - Force Tempo Traveller (12 / 16 / 26 Seater)">Force Tempo Traveller (12 / 16 / 26 Seater) - ₹7,500/day</option>
                    <option value="Taxi Rental - Maruti Suzuki Ertiga (Economy MUV)">Maruti Suzuki Ertiga (Economy 4-5 Pax) - ₹3,200/day</option>
                    <option value="Taxi Rental - Force Urbania Ultra-Luxury Van">Force Urbania Ultra-Luxury Van (10-13 Pax) - ₹9,500/day</option>
                    <option value="Taxi Rental - Sedan Cab (Dzire / Etios)">Swift Dzire / Etios Sedan - Airport & Plains</option>
                  </select>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    {isVehicleBooking ? 'Pickup Date' : 'Approx Date'}
                  </label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full bg-slate-800/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-white focus:bg-slate-800 focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    {isVehicleBooking ? 'Passengers' : 'Travellers'}
                  </label>
                  <select
                    value={formData.travellers}
                    onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                    className="w-full bg-slate-800/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-white focus:bg-slate-800 focus:outline-none focus:border-brand-orange"
                  >
                    <option value="1 (Solo)" className="bg-slate-900 text-white">1-2 Passengers</option>
                    <option value="3-5 (Small Family/Friends)" className="bg-slate-900 text-white">3-5 Passengers</option>
                    <option value="6-7 (Innova/SUV)" className="bg-slate-900 text-white">6-7 Passengers</option>
                    <option value="8-12 (Tempo Traveller)" className="bg-slate-900 text-white">8-12 Passengers</option>
                    <option value="13-26 (Large Group Coach)" className="bg-slate-900 text-white">13-26 Passengers</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    {isVehicleBooking ? 'Trip Type' : 'Budget Preference'}
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-slate-800/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-white focus:bg-slate-800 focus:outline-none focus:border-brand-orange"
                  >
                    {isVehicleBooking ? (
                      <>
                        <option value="Outstation Hill Tour" className="bg-slate-900 text-white">Multi-Day Hill Tour</option>
                        <option value="Airport / Station One-Way" className="bg-slate-900 text-white">One-Way Drop / Transfer</option>
                        <option value="Char Dham Full Yatra Circuit" className="bg-slate-900 text-white">Char Dham Full Circuit (10D)</option>
                        <option value="Round Trip Local Sightseeing" className="bg-slate-900 text-white">Round Trip Sightseeing</option>
                      </>
                    ) : (
                      <>
                        <option value="Budget / Backpacker" className="bg-slate-900 text-white">Budget / Essential</option>
                        <option value="Standard / 3-Star" className="bg-slate-900 text-white">Standard / 3-Star</option>
                        <option value="Deluxe / 4-Star" className="bg-slate-900 text-white">Deluxe / 4-Star</option>
                        <option value="Luxury / 5-Star Resort" className="bg-slate-900 text-white">Luxury & Villas</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1.5">
                  {isVehicleBooking ? 'Pickup Address & Special Requests' : 'Special Requirements / Message'}
                </label>
                <textarea
                  rows={3}
                  placeholder={
                    isVehicleBooking
                      ? "e.g. Flight arrives at Dehradun Airport at 11:30 AM, need roof carrier for 5 bags, child seat needed..."
                      : "e.g. Need helicopter tickets for Kedarnath, wheelchair for elderly parent, river-facing resort in Rishikesh..."
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-800/90 border border-white/15 rounded-xl p-3 text-white placeholder:text-slate-400 focus:bg-slate-800 focus:outline-none focus:border-brand-orange"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-semibold text-white shadow-lg flex items-center justify-center gap-2"
                >
                  {isVehicleBooking ? <Car className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                  <span>{isVehicleBooking ? 'Reserve Vehicle / Get Instant Quote' : 'Request Free Itinerary & Quote'}</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-400">
                🔒 We respect your privacy. No spam. 100% free consultation.
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/60 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">
              Enquiry Received!
            </h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Thank you, <strong className="text-brand-orange">{formData.name}</strong>! Our Himalayan trip coordinator has received your request for <strong>{formData.destination}</strong> and is preparing your personalized plan.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 text-xs text-slate-300 space-y-2">
              <p>⚡ <strong>Need an instant quote right now?</strong></p>
              <button
                onClick={handleWhatsAppDirect}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-semibold transition-all shadow-lg"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Connect on WhatsApp Now</span>
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-slate-400 hover:text-brand-orange underline"
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

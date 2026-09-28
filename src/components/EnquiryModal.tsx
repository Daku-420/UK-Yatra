import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Sparkles, Shield, Send, Calendar } from 'lucide-react';
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
  const allInventoryPackages = adminStorage.getPackages();

  const standardPackages = [
    'Char Dham Yatra by Helicopter (5 Nights / 6 Days)',
    'Do Dham Yatra (Kedarnath & Badrinath by Helicopter)',
    'Kedarnath Dham Helicopter & Trek Special',
    'Complete Char Dham Yatra by Road (10 Days)',
    'Kedarnath & Badrinath Overland Tour (6 Days)',
    'Valley of Flowers & Hemkund Sahib Trek',
    'Chopta Tungnath & Chandrashila Trek',
    'Auli Snow & Skiing Resort Vacation',
    'Nainital & Jim Corbett Wildlife Safari',
    'Mussoorie & Rishikesh Mountain Escape',
    'Customized Uttarakhand Himalayan Journey'
  ];

  // Merge inventory packages with standard options without duplicates
  const packageOptions = Array.from(
    new Set([
      ...(prefillPackage ? [prefillPackage] : []),
      ...standardPackages,
      ...allInventoryPackages.map(p => p.title)
    ])
  );

  const [formData, setFormData] = useState({
    packageName: prefillPackage || standardPackages[0],
    name: '',
    phone: '',
    email: '',
    travelMode: '🚁 Helicopter VIP',
    travellers: '2 Persons',
    travelDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        packageName: prefillPackage || prev.packageName || standardPackages[0]
      }));
      setSubmitted(false);
    }
  }, [isOpen, prefillPackage]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    // Save to local storage for Admin dashboard
    adminStorage.addBooking({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      destination: formData.packageName,
      packageName: formData.packageName,
      travelDate: formData.travelDate,
      travellers: formData.travellers,
      budget: formData.travelMode,
      specialRequests: formData.message,
      source: 'Enquiry Modal'
    });

    // Send structured message directly to WhatsApp
    const message = 
      `*DIRECT BOOKING ENQUIRY - UK YATRA*\n\n` +
      `*Selected Package:* ${formData.packageName}\n` +
      `*Full Name:* ${formData.name}\n` +
      `*Phone / WhatsApp:* ${formData.phone}\n` +
      `*Email Address:* ${formData.email || 'Not provided'}\n` +
      `*Travel Mode:* ${formData.travelMode}\n` +
      `*Number of Pilgrims / Travellers:* ${formData.travellers}\n` +
      `*Preferred Travel Date:* ${formData.travelDate || 'Flexible'}\n` +
      `*Special Requests / Message:* ${formData.message || 'None'}\n\n` +
      `Please provide package quotation and itinerary details.`;

    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const handleWhatsAppDirectAgain = () => {
    const message = 
      `*DIRECT BOOKING ENQUIRY - UK YATRA*\n\n` +
      `*Selected Package:* ${formData.packageName}\n` +
      `*Full Name:* ${formData.name}\n` +
      `*Phone / WhatsApp:* ${formData.phone}\n` +
      `*Travel Mode:* ${formData.travelMode}\n` +
      `*Travellers:* ${formData.travellers}\n` +
      `*Travel Date:* ${formData.travelDate || 'Flexible'}\n` +
      `*Notes:* ${formData.message || 'None'}`;

    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-[580px] bg-[#FAF8F5] rounded-3xl shadow-2xl overflow-hidden border border-[#E5DECE] max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Dark Navy Header matching screenshot */}
        <div className="bg-[#0B1528] px-6 py-5 text-white relative border-b border-white/10 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="pr-10">
            <div className="flex items-center gap-1.5 text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>DIRECT BOOKING SUPPORT</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug line-clamp-1">
              Enquire: {formData.packageName || 'Char Dham Yatra by Helicopter'}
            </h2>
            <p className="text-xs text-slate-300 mt-1 font-normal leading-relaxed">
              Fill details below to send your enquiry directly via WhatsApp to +91 93899 44590.
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-4.5 text-slate-800">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Package */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-900 mb-1.5">
                  SELECT PACKAGE *
                </label>
                <select
                  value={formData.packageName}
                  onChange={(e) => setFormData({ ...formData, packageName: e.target.value })}
                  className="w-full bg-white border border-[#D5CDBC] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 shadow-2xs transition-colors cursor-pointer"
                >
                  {packageOptions.map((pkg, idx) => (
                    <option key={idx} value={pkg}>
                      {pkg}
                    </option>
                  ))}
                </select>
              </div>

              {/* Full Name & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-900 mb-1.5">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-[#D5CDBC] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 shadow-2xs transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-900 mb-1.5">
                    PHONE / WHATSAPP *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#D5CDBC] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 shadow-2xs transition-colors"
                  />
                </div>
              </div>

              {/* Email & Travel Mode Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-900 mb-1.5">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#D5CDBC] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 shadow-2xs transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-900 mb-1.5">
                    TRAVEL MODE
                  </label>
                  <select
                    value={formData.travelMode}
                    onChange={(e) => setFormData({ ...formData, travelMode: e.target.value })}
                    className="w-full bg-white border border-[#D5CDBC] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 shadow-2xs transition-colors cursor-pointer"
                  >
                    <option value="🚁 Helicopter VIP">🚁 Helicopter VIP</option>
                    <option value="🚗 Private Cab / Sedan">🚗 Private Cab / Sedan</option>
                    <option value="🚙 SUV / Innova Crysta">🚙 SUV / Innova Crysta</option>
                    <option value="🚐 Tempo Traveller">🚐 Tempo Traveller</option>
                    <option value="🥾 Trekking & Camping">🥾 Trekking & Camping</option>
                    <option value="✨ Customized Road Tour">✨ Customized Road Tour</option>
                  </select>
                </div>
              </div>

              {/* Pilgrims & Travel Date Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-900 mb-1.5">
                    NUMBER OF PILGRIMS
                  </label>
                  <select
                    value={formData.travellers}
                    onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                    className="w-full bg-white border border-[#D5CDBC] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 shadow-2xs transition-colors cursor-pointer"
                  >
                    <option value="1 Person">1 Person</option>
                    <option value="2 Persons">2 Persons</option>
                    <option value="3 - 5 Persons">3 - 5 Persons</option>
                    <option value="6 - 9 Persons">6 - 9 Persons</option>
                    <option value="10+ Persons">10+ Persons (Group)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-900 mb-1.5">
                    PREFERRED TRAVEL DATE
                  </label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full bg-white border border-[#D5CDBC] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 shadow-2xs transition-colors"
                  />
                </div>
              </div>

              {/* Special Requests / Message */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-900 mb-1.5">
                  SPECIAL REQUESTS / MESSAGE
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention any senior citizen assistance, hotel preferences, or dietary requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-[#D5CDBC] rounded-xl p-3 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 shadow-2xs transition-colors resize-none"
                />
              </div>

              {/* Submit Button Matching Screenshot */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#B47610] via-[#A86C0B] to-[#965E08] hover:from-[#C58414] hover:to-[#A86C0B] text-white py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-amber-900/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                  <span>Send Enquiry via WhatsApp →</span>
                </button>
              </div>

              {/* Trust Badge at Bottom */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-700 font-semibold pt-1">
                <Shield className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Direct WhatsApp enquiry to +91 93899 44590</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Enquiry Sent Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>! Your enquiry for <strong>{formData.packageName}</strong> has been received by our Uttarakhand travel desk.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-[#E2DDD5] text-xs text-slate-700 space-y-2.5 max-w-md mx-auto shadow-xs">
                <p className="font-semibold text-slate-900">
                  Did WhatsApp open automatically?
                </p>
                <button
                  type="button"
                  onClick={handleWhatsAppDirectAgain}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 rounded-xl font-bold text-xs transition-all shadow-md cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Click Here to Chat on WhatsApp</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="text-xs text-brand-orange hover:underline font-semibold cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

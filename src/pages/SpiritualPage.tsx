import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Check, 
  Phone, 
  ArrowRight,
  Info
} from 'lucide-react';
import { SPIRITUAL_CIRCUITS } from '../data/spiritual';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';

interface SpiritualPageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const SpiritualPage: React.FC<SpiritualPageProps> = ({ onOpenBookingModal }) => {
  const [activeTab, setActiveTab] = useState('char-dham');

  const currentCircuit = SPIRITUAL_CIRCUITS.find((c) => c.id === activeTab) || SPIRITUAL_CIRCUITS[0];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'Char Dham & Spiritual Journeys' }]} />

      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden cream-banner p-8 sm:p-12 mb-12 shadow-sm">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Devbhoomi Pilgrimage 2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 leading-tight">
            Journeys With <span className="text-amber-600">Meaning</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            Embark on the sacred path of the Chota Char Dham (Yamunotri, Gangotri, Kedarnath, Badrinath), Do Dham, and Panch Kedar. Organized with priority darshan, certified hill drivers, and 24/7 medical standby.
          </p>
        </div>
      </div>

      {/* Circuit Selector Tabs */}
      <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 hide-scrollbar">
        {SPIRITUAL_CIRCUITS.map((circuit) => (
          <button
            key={circuit.id}
            onClick={() => setActiveTab(circuit.id)}
            className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === circuit.id
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'bg-white text-slate-700 hover:bg-amber-50 hover:text-amber-800 border border-[#E2DDD5] shadow-xs'
            }`}
          >
            <span>🕉️</span>
            <span>{circuit.name}</span>
          </button>
        ))}
      </div>

      {/* Main Circuit Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-8">
          {/* Overview */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-2xl font-bold font-display text-slate-900">
                {currentCircuit.name}
              </h2>
              <span className="text-xs text-amber-800 font-semibold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Duration: {currentCircuit.duration}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentCircuit.description}
            </p>
          </div>

          {/* Shrines Grid */}
          <div>
            <h3 className="text-xl font-bold font-display text-slate-900 mb-6">
              Holy Shrines Covered in this Circuit
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {currentCircuit.shrines.map((shrine, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden border border-[#E2DDD5] shadow-sm flex flex-col justify-between">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={shrine.image}
                      alt={shrine.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <h4 className="text-lg font-bold font-display text-white">{shrine.name}</h4>
                      <span className="text-[11px] text-amber-300 font-medium">{shrine.deity}</span>
                    </div>
                  </div>
                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {shrine.significance}
                    </p>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600 font-medium">
                      <span>📍 {shrine.district}</span>
                      <span>⛰️ {shrine.altitude}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Yatra Preparation Guidelines */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
            <h3 className="text-lg font-bold font-display text-slate-900 flex items-center gap-2">
              <Info className="w-5 h-5 text-amber-600" />
              <span>Essential Yatra Guidelines & Biometric Registration</span>
            </h3>
            <div className="space-y-2.5 text-xs text-slate-700">
              {currentCircuit.yatraGuidelines.map((g, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></span>
                  <span>{g}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Action Box */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-lg space-y-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-600">
                Package Estimate
              </span>
              <div className="font-display font-extrabold text-3xl text-slate-900 mt-1">
                {currentCircuit.startingPrice} <span className="text-xs font-normal text-slate-500">/ person</span>
              </div>
              <p className="text-[11px] text-slate-600 mt-1">
                Best Season: {currentCircuit.bestSeason}
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => onOpenBookingModal(currentCircuit.name)}
                className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-bold text-xs text-white shadow-xl flex items-center justify-center gap-2"
              >
                <span>Book Yatra Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppUrl(`Hi UKYatra, I want to book/enquire about ${currentCircuit.name}. Please share registration details and hotel inclusions.`)}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold text-xs transition-all shadow-lg"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-slate-200 py-3 rounded-xl font-semibold text-xs border border-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>Call Yatra Specialist</span>
              </a>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-2 text-[11px] text-slate-400">
              <p>✓ Biometric registration support included</p>
              <p>✓ Oxygen cylinders in all hill vehicles</p>
              <p>✓ Helicopter slot coordination for Kedarnath</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

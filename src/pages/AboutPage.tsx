import React from 'react';
import { 
  Mountain, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Heart, 
  Award, 
  Compass, 
  MapPin, 
  CheckCircle2, 
  MessageSquare 
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Hero Header */}
      <div className="relative rounded-3xl overflow-hidden cream-banner p-8 sm:p-14 mb-14 shadow-sm">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Mountain className="w-3.5 h-3.5" />
            <span>Rooted in the Himalayas</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 leading-tight">
            We Are <span className="text-brand-orange">UKYatra</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            "Capture Unforgettable Moments!" Founded by native Garhwali and Kumaoni mountain explorers, UKYatra bridges authentic Himalayan heritage with modern safety, transparent pricing, and seamless travel execution.
          </p>
        </div>
      </div>

      {/* Story & Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
        <div className="lg:col-span-6 space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Our Story & Commitment to Uttarakhand
          </h2>
          <p>
            UKYatra was born out of a simple observation: too many travellers experience the magnificent Himalayas through rushed, generic, and uninspiring itineraries.
          </p>
          <p>
            We set out to create a travel company where every driver is a seasoned mountain specialist, every guide is certified in Wilderness First Aid, and every stay—whether a riverside Swiss cottage in Shivpuri, an apple orchard retreat in Mukteshwar, or a high camp in Chopta—delivers genuine mountain warmth.
          </p>
          <div className="p-5 rounded-2xl bg-white border border-[#E2DDD5] shadow-sm space-y-2.5">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Our Core Pillars:</h4>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                <span>Zero Compromise on High-Altitude Safety</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                <span>100% Fair Wages for Local Guides, Porters & Drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                <span>Leave No Trace & Eco-Sensitive Tourism</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop"
              alt="Himalayan Mountain Expedition Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Trust & Certifications */}
      <div className="mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Certified & Recognized
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Operating with full legal compliance, state registration, and industry certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-3xl p-6 border border-[#E2DDD5] shadow-sm space-y-2">
            <ShieldCheck className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
            <h3 className="font-bold text-slate-900 text-sm">Uttarakhand Tourism</h3>
            <p className="text-xs text-slate-600">Registered Tour Operator: {SITE_CONFIG.registrationNo}</p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-[#E2DDD5] shadow-sm space-y-2">
            <Award className="w-10 h-10 text-brand-orange mx-auto mb-2" />
            <h3 className="font-bold text-slate-900 text-sm">Government MSME</h3>
            <p className="text-xs text-slate-600">Registered Enterprise: {SITE_CONFIG.msmeReg}</p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-[#E2DDD5] shadow-sm space-y-2">
            <Users className="w-10 h-10 text-amber-600 mx-auto mb-2" />
            <h3 className="font-bold text-slate-900 text-sm">GST Compliant</h3>
            <p className="text-xs text-slate-600">GSTIN: {SITE_CONFIG.gstin}</p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2DDD5] text-center space-y-4 max-w-3xl mx-auto shadow-sm">
        <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
          Ready to Start Your Himalayan Story?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          Our travel specialists in Rishikesh and Dehradun are ready to design your dream journey.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={getWhatsAppUrl("Hi UKYatra, I'd like to plan a trip with your team.")}
            target="_blank"
            rel="noreferrer"
            className="orange-gradient-btn px-8 py-3.5 rounded-xl font-display font-bold text-xs text-white shadow-xl flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat With Our Team</span>
          </a>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SITE_CONFIG } from '../config/siteConfig';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2DDD5] shadow-md space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-slate-500 font-medium">
          Last Updated: January 01, 2026
        </p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-display text-slate-900">1. Information We Collect</h2>
          <p className="text-slate-700 leading-relaxed">
            When you enquire about or book a travel itinerary with {SITE_CONFIG.name}, we collect personal details including your name, contact phone/WhatsApp number, email address, travel dates, passport/Aadhaar details for state yatra biometric registrations, and specific dietary or medical requirements necessary for high altitude travel.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-display text-slate-900">2. How We Use Your Data</h2>
          <p className="text-slate-700 leading-relaxed">
            Your information is strictly used for:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>Customizing and issuing tour itineraries, hotel vouchers, and transport assignments.</li>
            <li>Registering mandatory Char Dham biometric passes and Forest Department permits.</li>
            <li>Providing 24/7 on-trip support and emergency assistance.</li>
            <li>Sending booking confirmations via WhatsApp, SMS, or email.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-display text-slate-900">3. Data Security & Non-Disclosure</h2>
          <p className="text-slate-700 leading-relaxed">
            We implement strict data protection standards. We do not sell, trade, or rent personal data to third-party marketing companies. Data is only shared with verified operational partners (such as hotel front desks, helicopter operators, and registered drivers) solely to fulfill your trip.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-display text-slate-900">4. Contacting Our Data Officer</h2>
          <p className="text-slate-700 leading-relaxed">
            If you have questions regarding our data practices, please write to us at <a href={`mailto:${SITE_CONFIG.email}`} className="text-brand-orange underline font-medium">{SITE_CONFIG.email}</a> or visit our registered office at {SITE_CONFIG.address}.
          </p>
        </section>
      </div>
    </div>
  );
};

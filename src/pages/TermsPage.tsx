import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SITE_CONFIG } from '../config/siteConfig';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2DDD5] shadow-md space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900">
          Terms & Conditions
        </h1>
        <p className="text-slate-500 font-medium">
          Last Updated: January 01, 2026
        </p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-display text-slate-900">1. Booking Confirmation & Payment Terms</h2>
          <p className="text-slate-700 leading-relaxed">
            A booking is deemed confirmed only upon receipt of the minimum 25% token advance. The balance payment must be settled as per the scheduled payment milestones prior to commencement of the journey.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-display text-slate-900">2. High Altitude & Mountain Terrain Realities</h2>
          <p className="text-slate-700 leading-relaxed">
            Uttarakhand’s high-altitude regions (Kedarnath, Badrinath, Chopta, Hemkund Sahib, Kuari Pass) are subject to sudden weather shifts, landslides, and road blockages beyond human control. While UKYatra will make every effort to arrange alternate routes and safe stays, any additional expenses resulting from natural force majeure situations are the responsibility of the traveller.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-display text-slate-900">3. Medical Fitness & Client Responsibility</h2>
          <p className="text-slate-700 leading-relaxed">
            Trekkers and pilgrims are advised to assess their physical fitness before participating in strenuous high-altitude ascents. Travellers are responsible for carrying personal prescription medications and complying with local government advisories.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-display text-slate-900">4. Jurisdiction</h2>
          <p className="text-slate-700 leading-relaxed">
            All disputes and legal claims arising in connection with services provided by {SITE_CONFIG.legalName} shall be subject to the exclusive jurisdiction of the competent courts in Dehradun / Rishikesh, Uttarakhand, India.
          </p>
        </section>
      </div>
    </div>
  );
};

import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SITE_CONFIG } from '../config/siteConfig';

export const CancellationPolicyPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'Cancellation & Refund Policy' }]} />

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2DDD5] shadow-md space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900">
          Cancellation & Refund Policy
        </h1>
        <p className="text-slate-500 font-medium">
          Last Updated: January 01, 2026
        </p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-display text-slate-900">1. Standard Tour Package Cancellation Slabs</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-slate-200 rounded-2xl overflow-hidden text-xs">
              <thead>
                <tr className="bg-[#000044] text-slate-900 font-bold">
                  <th className="p-3.5 border-b border-slate-200">Cancellation Notice Period</th>
                  <th className="p-3.5 border-b border-slate-200">Refund / Deduction Policy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium">30 or more days before departure</td>
                  <td className="p-3.5 text-emerald-700 font-semibold">90% refund of total trip cost (or 100% credit voucher)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium">15 to 29 days before departure</td>
                  <td className="p-3.5 text-amber-700 font-semibold">70% refund of total trip cost</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium">7 to 14 days before departure</td>
                  <td className="p-3.5 text-amber-800 font-semibold">50% refund of total trip cost</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium">Less than 7 days or No-Show</td>
                  <td className="p-3.5 text-rose-700 font-semibold">No refund (Operational commitments are locked)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-display text-slate-900">2. Free Date Rescheduling</h2>
          <p className="text-slate-700 leading-relaxed">
            We understand emergencies happen. You can reschedule your trip date up to 7 days before departure without any penalty fee, subject to seasonal hotel tariff differences.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-display text-slate-900">3. Helicopter & Special Permit Bookings</h2>
          <p className="text-slate-700 leading-relaxed">
            Kedarnath helicopter tickets and state forest entry permits are issued under government statutory guidelines (IRCTC HeliYatra). Refunds for helicopter tickets are processed according to the official aviation refund rules.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-display text-slate-900">4. Refund Processing Timeline</h2>
          <p className="text-slate-700 leading-relaxed">
            Approved refunds are credited back to the original payment method (Bank Transfer / UPI / Card) within 5 to 7 business working days.
          </p>
        </section>
      </div>
    </div>
  );
};

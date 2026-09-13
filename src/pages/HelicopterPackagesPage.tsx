import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Phone, 
  Info, 
  Calendar,
  Award,
  ChevronDown
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, getPackageWhatsAppUrl } from '../config/siteConfig';
import { adminStorage } from '../utils/adminStorage';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PackageCard } from '../components/PackageCard';
import { WhatsAppIcon } from '../components/SocialIcons';

interface HelicopterPackagesPageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const HelicopterPackagesPage: React.FC<HelicopterPackagesPageProps> = ({ onOpenBookingModal }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Filter helicopter packages from dynamic storage
  const allPackages = adminStorage.getPackages();
  const heliPackages = allPackages.filter(p => 
    p.category === 'Helicopter Yatra' || p.id.includes('helicopter') || p.title.toLowerCase().includes('helicopter')
  );

  const heliFaqs = [
    {
      q: 'Where do the helicopter flights depart from?',
      a: 'All our Char Dham and Do Dham helicopter packages depart from the Sahastradhara Helipad in Dehradun, Uttarakhand. We provide luxury hotel/airport pickup and transfers directly to the helipad lounge.'
    },
    {
      q: 'What is the passenger weight limit for helicopter flights?',
      a: 'Standard passenger weight limit allowed per seat without surcharge is up to 75-80 kg (depending on the aircraft and route conditions). Accurate body weights must be provided at the time of booking to balance the helicopter safely.'
    },
    {
      q: 'Is VIP Darshan included at the temples?',
      a: 'Yes! All UKYatra helicopter packages include priority VIP Darshan coordination at Yamunotri, Gangotri, Kedarnath, and Badrinath, along with special passes for the morning Maha Abhishek Puja at Badrinath.'
    },
    {
      q: 'What happens in case of bad weather or flight delays?',
      a: 'Passenger safety is paramount. In case of inclement weather or DGCA flight restrictions, our on-ground team coordinates immediate ground alternatives, rescheduled departures, or refunds as per our transparent civil aviation policy.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F3EF] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Helicopter Packages' }]} />

        {/* Hero Header */}
        <div className="relative rounded-3xl overflow-hidden mb-16 cream-banner p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Executive Heli Pilgrimage by UKYatra</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Char Dham & Kedarnath <br />
              <span className="text-brand-orange">By Luxury Helicopter</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Experience the supreme sacred abodes of the Himalayas with unmatched comfort, VIP priority darshans, 5-star hospitality, and seamless departures from Dehradun Sahastradhara Helipad.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenBookingModal('Char Dham by Helicopter')}
                className="orange-gradient-btn px-6 py-3.5 rounded-xl font-display font-semibold text-white shadow-xl shadow-brand-orange/25 flex items-center gap-2"
              >
                <span>Request Heli Charter Quote</span>
              </button>
              <a
                href={getWhatsAppUrl("Hi UKYatra, I am interested in Char Dham Helicopter charter options.")}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 font-semibold flex items-center gap-2 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Instant WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white border border-[#E2DDD5] p-6 rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">VIP Priority Darshans</h3>
            <p className="text-xs text-slate-600">Skip the long public queues with dedicated VIP passes at all four shrines.</p>
          </div>

          <div className="bg-white border border-[#E2DDD5] p-6 rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Luxury 4/5-Star Stays</h3>
            <p className="text-xs text-slate-600">Handpicked luxury mountain resorts with all pure-vegetarian gourmet meals included.</p>
          </div>

          <div className="bg-white border border-[#E2DDD5] p-6 rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Same-Day & Express Routes</h3>
            <p className="text-xs text-slate-600">Complete Kedarnath or Do Dham in express time without strenuous mountain trekking.</p>
          </div>

          <div className="bg-white border border-[#E2DDD5] p-6 rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Dehradun Door-to-Door</h3>
            <p className="text-xs text-slate-600">Complimentary executive airport transfers and dedicated yatra tour managers.</p>
          </div>
        </div>

        {/* Helicopter Packages Catalog */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">Curated Heli Charters</span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 mt-1">
                Official Helicopter Packages
              </h2>
            </div>
            <p className="text-xs text-slate-600 max-w-md mt-2 md:mt-0">
              Prices include helicopter flying, VIP Darshan, 5-star stays, gourmet meals, ground logistics, and Dehradun transfers.
            </p>
          </div>

          {heliPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {heliPackages.map(pkg => (
                <PackageCard 
                  key={pkg.id} 
                  tourPackage={pkg} 
                  onOpenBookingModal={() => onOpenBookingModal(pkg.title)} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-6 bg-white rounded-3xl border border-[#DCD6CC] shadow-sm max-w-2xl mx-auto space-y-4">
              <div className="w-16 h-16 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center mx-auto border border-brand-orange/20">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900">Custom Helicopter Charter Quotation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
                Private charter slots from Dehradun Sahastradhara Helipad for Char Dham & Do Dham are customized based on group size, aircraft availability, and passenger payload limits. Connect directly with our aviation desk for transparent quotes!
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppUrl("Hi UKYatra, I would like to enquire about helicopter charter availability and rates.")}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-xs shadow-lg hover:brightness-105"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Enquire Aviation Desk on WhatsApp</span>
                </a>
                <button
                  onClick={() => onOpenBookingModal("Helicopter Charter Yatra")}
                  className="w-full sm:w-auto orange-gradient-btn px-6 py-3 rounded-xl font-display font-semibold text-xs text-white shadow-md"
                >
                  <span>Request Custom Slot</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Heli FAQs */}
        <div className="max-w-4xl mx-auto bg-white border border-[#E2DDD5] rounded-3xl p-8 sm:p-12 mb-16 shadow-sm">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 text-center">
            Frequently Asked Questions on Helicopter Yatras
          </h2>

          <div className="space-y-4">
            {heliFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-[#E2DDD5] rounded-2xl overflow-hidden bg-[#F5F3EF] transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-sm text-slate-900"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-brand-orange transition-transform duration-200 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-[#E2DDD5]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="text-center bg-white border border-brand-orange/30 rounded-3xl p-8 sm:p-12 shadow-sm">
          <h3 className="text-2xl font-bold font-display text-slate-900 mb-3">
            Looking for Custom Group or Private Helicopter Charter?
          </h3>
          <p className="text-xs text-slate-600 max-w-xl mx-auto mb-6">
            We organize private chartered Bell 407 and Airbus H125 helicopters for family groups, corporate dignitaries, and VIPs.
          </p>
          <button
            onClick={() => onOpenBookingModal('Private Heli Charter')}
            className="orange-gradient-btn px-8 py-3.5 rounded-xl font-display font-semibold text-white shadow-xl shadow-brand-orange/25"
          >
            Speak to Heli Operations Specialist
          </button>
        </div>
      </div>
    </div>
  );
};

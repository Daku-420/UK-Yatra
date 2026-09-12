import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  Sparkles, 
  Tag, 
  Clock, 
  CheckCircle2, 
  Users, 
  Gift, 
  ArrowRight
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { TOUR_PACKAGES } from '../data/packages';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PackageCard } from '../components/PackageCard';
import { WhatsAppIcon } from '../components/SocialIcons';

interface OffersPageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({ onOpenBookingModal }) => {
  const deals = [
    {
      badge: '30% OFF Early Bird',
      title: 'Char Dham Yatra 2026 Advance Booking Offer',
      desc: 'Lock in 2025 rates with verified premium hotel slots, confirmed VIP darshan slots, and zero surge pricing.',
      code: 'CHARDHAM30',
      validity: 'Valid until 30th April',
      targetPackage: 'Complete Char Dham Yatra'
    },
    {
      badge: 'Flat ₹3,000 OFF',
      title: 'Group Booking Special (4+ Travellers)',
      desc: 'Traveling with family or college friends? Get flat ₹3,000 instant discount on any private tempo/Innova package.',
      code: 'GROUPYATRA',
      validity: 'Active round the year',
      targetPackage: 'Customized Group Tour'
    },
    {
      badge: 'Free River Rafting Pass',
      title: 'Rishikesh Weekend Camping & Adventure Deal',
      desc: 'Book a 2N/3D Luxury Riverside camp and get 16 km Shivpuri River Rafting pass completely complimentary.',
      code: 'RAFTFREE',
      validity: 'Valid Sep to June',
      targetPackage: 'Rishikesh Adrenaline Weekend'
    },
    {
      badge: 'Free Helicopter Priority',
      title: 'Senior Citizen Special Assistance Package',
      desc: 'Special dedicated porter support, low-altitude acclimatization night, and priority darshan coordination.',
      code: 'SENIORCARE',
      validity: 'Active all season',
      targetPackage: 'Kedarnath Divine Yatra'
    }
  ];

  const featuredDealPackages = TOUR_PACKAGES.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#F5F3EF] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Special Offers & Deals' }]} />

        {/* Hero */}
        <div className="relative rounded-3xl overflow-hidden mb-16 cream-banner p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-md">
              <Flame className="w-3.5 h-3.5 fill-white" />
              <span>Limited-Time Himalayan Deals</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Exclusive Tour Offers & <br />
              <span className="text-brand-orange">Early Bird Discounts</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 font-medium">
              Save up to 30% on pre-booked Char Dham pilgrimages, helicopter charters, weekend camping, and Himalayan treks.
            </p>
          </div>
        </div>

        {/* Promo Code Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {deals.map((deal, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#E2DDD5] rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-orange-50 text-brand-orange border border-orange-200 text-xs font-bold uppercase tracking-wider mb-3">
                  {deal.badge}
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900 mb-2">{deal.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{deal.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 bg-[#F5F3EF] border border-dashed border-brand-orange/40 px-3.5 py-1.5 rounded-xl">
                  <Tag className="w-3.5 h-3.5 text-brand-orange" />
                  <span className="text-xs font-mono font-bold text-slate-900">{deal.code}</span>
                </div>
                
                <button
                  onClick={() => onOpenBookingModal(deal.targetPackage)}
                  className="text-xs font-bold text-brand-orange hover:text-orange-700 flex items-center gap-1 transition-colors"
                >
                  <span>Claim Offer Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Discounted Packages Showcase */}
        <div className="mb-16">
          <div className="mb-10">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">Discounted Circuits</span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 mt-1">
              Trending Deal Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDealPackages.map(pkg => (
              <PackageCard 
                key={pkg.id} 
                tourPackage={pkg} 
                onOpenBookingModal={() => onOpenBookingModal(pkg.title)} 
              />
            ))}
          </div>
        </div>

        {/* WhatsApp Claim Strip */}
        <div className="text-center bg-white border border-brand-orange/30 rounded-3xl p-8 sm:p-12 shadow-sm">
          <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">
            Want a Custom Discount for Large Groups or Corporate Offsites?
          </h3>
          <p className="text-xs text-slate-600 max-w-xl mx-auto mb-6">
            Our trip desk can offer custom group pricing and bespoke itineraries for 10+ guests.
          </p>
          <a
            href={getWhatsAppUrl("Hi UKYatra, I want to inquire about custom group discounts for my upcoming trip.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 font-semibold text-sm transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>Chat for Group Quotation</span>
          </a>
        </div>
      </div>
    </div>
  );
};

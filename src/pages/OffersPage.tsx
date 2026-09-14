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
import { adminStorage } from '../utils/adminStorage';

interface OffersPageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({ onOpenBookingModal }) => {
  const deals = [
    {
      code: 'HELIYATRA2026',
      badge: 'Charter Deal',
      title: 'Flat ₹15,000 Off on Char Dham Helicopter Charters',
      desc: 'Applicable on full-charter and group helicopter bookings confirmed 45+ days prior to departure date from Dehradun Sahastradhara.',
      validity: 'Valid for bookings made this month',
      targetPackage: 'Luxury Char Dham by Heli'
    },
    {
      code: 'EARLYBIRD10',
      badge: 'Early Bird',
      title: '10% Instant Savings on Overland Char Dham Packages',
      desc: 'Book your Innova Crysta / Tempo Traveller overland pilgrimage circuit and receive complimentary luxury hotel upgrades.',
      validity: 'For travel departures across May–Oct',
      targetPackage: 'Complete Char Dham Yatra'
    },
    {
      code: 'TREKCORP15',
      badge: 'Adventure Special',
      title: '15% Off on College & Corporate Group Treks (8+ Trekkers)',
      desc: 'Valid on Kedarkantha, Tungnath-Chandrashila, and Valley of Flowers summit expeditions including complete alpine camping gear.',
      validity: 'Available across all batches',
      targetPackage: 'Tungnath & Chandrashila Peak Trek'
    },
    {
      code: 'DEVOTION5',
      badge: 'Senior Citizens',
      title: 'Flat 5% Special Concession for Senior Citizens (60+ yrs)',
      desc: 'Dedicated yatra assistants, comfortable pacing, and ground support included at no extra cost.',
      validity: 'Always active',
      targetPackage: 'Kedarnath Divine Yatra'
    }
  ];

  const featuredDealPackages = adminStorage.getPackages().slice(0, 6);

  return (
    <div className="min-h-screen bg-[#000044] pt-28 pb-20">
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
                <div className="flex items-center gap-2 bg-[#000044] border border-dashed border-brand-orange/40 px-3.5 py-1.5 rounded-xl">
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

          {featuredDealPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDealPackages.map(pkg => (
                <PackageCard 
                  key={pkg.id} 
                  tourPackage={pkg} 
                  onOpenBookingModal={() => onOpenBookingModal(pkg.title)} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 px-6 bg-white rounded-3xl border border-[#DCD6CC] shadow-sm max-w-xl mx-auto space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Seasonal package deals are currently being updated by our coordinators. Mention any coupon code above on WhatsApp to claim your instant discount on any custom itinerary!
              </p>
            </div>
          )}
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

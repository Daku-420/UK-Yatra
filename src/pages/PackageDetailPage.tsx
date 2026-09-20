import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  MapPin, 
  Calendar, 
  Star, 
  Check, 
  X, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  ChevronLeft,
  Download,
  Building2,
  Utensils,
  Car,
  Luggage,
  AlertCircle,
  HelpCircle,
  Camera,
  Compass,
  Award
} from 'lucide-react';
import { adminStorage } from '../utils/adminStorage';
import { getPackageWhatsAppUrl, SITE_CONFIG } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';
import { STANDARD_CANCELLATION_POLICY, STANDARD_THINGS_TO_CARRY, STANDARD_IMPORTANT_INFO } from '../data/initialTourPackages';

interface PackageDetailPageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

const PACKAGE_ALIASES: Record<string, string> = {
  'auli': 'auli-joshimath',
  'mussoorie': 'mussoorie-dhanaulti',
  'nainital': 'nainital-bhimtal-sattal',
  'rishikesh': 'rishikesh-haridwar',
  'chopta': 'chopta-tungnath-chandrashila',
  'munsiyari': 'munsiyari',
  'valley-of-flowers': 'valley-of-flowers',
  'kedarnath': 'kedarnath-yatra',
  'badrinath': 'badrinath-yatra',
  'gangotri': 'gangotri-yatra',
  'yamunotri': 'yamunotri-yatra',
  'char-dham': 'char-dham-yatra',
  'do-dham': 'do-dham-yatra',
  'jim-corbett': 'jim-corbett-national-park',
  'corbett': 'jim-corbett-nainital',
  'chakrata': 'chakrata-tiger-falls',
  'lansdowne': 'lansdowne-kanatal',
  'almora': 'almora-ranikhet-kausani',
  'ranikhet': 'almora-ranikhet-kausani',
  'kausani': 'kausani-baijnath-binsar',
  'jageshwar': 'jageshwar-chaukori-munsiyari',
  'binsar': 'binsar-wildlife-sanctuary',
  'rajaji': 'rajaji-national-park-rishikesh',
  'pangot': 'pangot-kilbury',
  'chaukori': 'chaukori-patal-bhuvaneshwar',
  'kanatal': 'kanatal-dhanaulti-tehri',
  'khirsu': 'khirsu-pauri-lansdowne',
  'peora': 'peora-mukteshwar-ramgarh',
  'pithoragarh': 'pithoragarh-munsiyari',
  'nag-tibba': 'nag-tibba-trek',
  'kedarkantha': 'kedarkantha-trek',
  'dayara-bugyal': 'dayara-bugyal-trek',
  'kuari-pass': 'kuari-pass-trek',
  'har-ki-dun': 'har-ki-dun-trek',
  'dodital': 'dodital-darwa-pass',
  'panch-kedar': 'panch-kedar'
};

export const PackageDetailPage: React.FC<PackageDetailPageProps> = ({ onOpenBookingModal }) => {
  const { id } = useParams<{ id: string }>();
  const packages = adminStorage.getPackages();

  const normalizedId = (id || '').toLowerCase().trim();
  const targetId = PACKAGE_ALIASES[normalizedId] || normalizedId;

  const tourPackage = packages.find((p) => 
    p.id.toLowerCase() === targetId ||
    p.id.toLowerCase() === normalizedId ||
    p.id.replace(/^uky-[a-z0-9]+-/, '').toLowerCase() === normalizedId
  );

  const [openDay, setOpenDay] = useState<number | null>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null);

  // Dynamic SEO meta updating
  useEffect(() => {
    if (tourPackage) {
      document.title = `${tourPackage.title} | UK Yatra Tour Packages`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', `${tourPackage.title} - ${tourPackage.overview.slice(0, 155)}... Book your customized Uttarakhand itinerary.`);
    }
    return () => {
      document.title = 'UK Yatra | Uttarakhand Travel & Tour Packages';
    };
  }, [tourPackage]);

  const toggleDay = (dayNum: number) => {
    setOpenDay(openDay === dayNum ? null : dayNum);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  if (!tourPackage) {
    return (
      <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 text-center">
        <div className="bg-[#000044] border border-white/10 rounded-3xl p-10 shadow-2xl space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mx-auto text-brand-orange">
            <Sparkles className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
              Custom Itinerary On Demand
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
              Looking for a personalized Himalayan tour? Our travel experts curate tailored itineraries with transparent pricing, verified stays, and trusted mountain drivers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={getPackageWhatsAppUrl('Custom Uttarakhand Itinerary')}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Get Custom Quote on WhatsApp</span>
            </a>
            <Link
              to="/packages"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors"
            >
              Browse All Packages
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const galleryImages = tourPackage.gallery && tourPackage.gallery.length > 0 
    ? tourPackage.gallery 
    : [tourPackage.image];

  const thingsToCarryList = tourPackage.thingsToCarry || STANDARD_THINGS_TO_CARRY;
  const importantInfoList = tourPackage.importantInfo || STANDARD_IMPORTANT_INFO;
  const cancellationList = tourPackage.cancellationPolicy || STANDARD_CANCELLATION_POLICY;

  const defaultFaqs = [
    {
      question: 'How do I book this package and what is the payment schedule?',
      answer: 'You can reserve your preferred dates with a 25% booking advance. The balance can be cleared upon arrival in Uttarakhand or 7 days prior to departure.'
    },
    {
      question: 'Is the transport private or shared?',
      answer: 'All our itineraries include dedicated private commercial tourist vehicles (Sedan/SUV/Tempo Traveller) with licensed hill drivers exclusively for your family/group.'
    },
    {
      question: 'Can the starting point or duration be customized?',
      answer: 'Absolutely! Every itinerary on UK Yatra can be customized for pick-up from Delhi, Dehradun, Haridwar, or Kathgodam, with tailored stays and extra days.'
    },
    {
      question: 'What is the child policy and extra bed arrangement?',
      answer: 'Children below 5 years are complimentary sharing parent bed. Children 5-11 years have special discounted rates with extra mattress/bed.'
    }
  ];

  const faqsList = tourPackage.faqs && tourPackage.faqs.length > 0 ? tourPackage.faqs : defaultFaqs;

  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <div className="relative h-[48vh] min-h-[380px] sm:h-[62vh] sm:min-h-[460px] w-full flex items-end pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <img
          src={tourPackage.image}
          alt={tourPackage.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-gradient"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link
            to="/packages"
            className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-brand-dark/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 mb-3 sm:mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Packages</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2.5 sm:mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-orange text-white">
              {tourPackage.category}
            </span>
            {tourPackage.difficulty && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/90 backdrop-blur-md text-white border border-blue-400/30 flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" />
                <span>{tourPackage.difficulty}</span>
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-dark/80 backdrop-blur-md text-white border border-white/10 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              <span>{tourPackage.duration}</span>
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-dark/80 backdrop-blur-md text-white border border-white/10 flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{tourPackage.rating} ({tourPackage.reviewsCount} reviews)</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight max-w-3xl leading-tight">
            {tourPackage.title}
          </h1>
          <div className="mt-2.5 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-200 font-medium">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
              <span>{tourPackage.destination}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Best Season: {tourPackage.bestSeason}</span>
            </span>
            {tourPackage.startPoint && (
              <>
                <span>•</span>
                <span className="text-emerald-300">
                  Route: {tourPackage.startPoint} → {tourPackage.endPoint || tourPackage.startPoint}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <Breadcrumbs
          items={[
            { label: 'Tour Packages', to: '/packages' },
            { label: tourPackage.title }
          ]}
        />

        {/* Quick Specs Strip */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 p-4 bg-white rounded-2xl border border-[#E2DDD5] shadow-xs text-xs text-slate-700">
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#F5F3EF]">
            <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Starting Point</div>
              <div className="font-semibold text-slate-900 truncate">{tourPackage.startPoint || 'Haridwar / Dehradun'}</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#F5F3EF]">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Ending Point</div>
              <div className="font-semibold text-slate-900 truncate">{tourPackage.endPoint || 'Haridwar / Dehradun'}</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#F5F3EF]">
            <Clock className="w-4 h-4 text-blue-600 shrink-0" />
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Duration</div>
              <div className="font-semibold text-slate-900">{tourPackage.duration}</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#F5F3EF]">
            <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Stay Standard</div>
              <div className="font-semibold text-slate-900 truncate">{tourPackage.accommodationType || 'Verified 3-Star Stays'}</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#F5F3EF]">
            <Car className="w-4 h-4 text-purple-600 shrink-0" />
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Transport</div>
              <div className="font-semibold text-slate-900 truncate">{tourPackage.transportationType || 'Dedicated Private Cab'}</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#F5F3EF]">
            <Utensils className="w-4 h-4 text-emerald-600 shrink-0" />
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Meal Plan</div>
              <div className="font-semibold text-slate-900 truncate">{tourPackage.mealPlan || 'Breakfast & Dinner (MAP)'}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
          {/* Left Column: Overview, Itinerary, Inclusions, Carry, Info, FAQs */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md">
              <div className="flex items-center justify-between gap-4 mb-3">
                <h2 className="text-xl font-bold font-display text-slate-900">
                  Trip Overview
                </h2>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>100% Customized</span>
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {tourPackage.overview}
              </p>

              {/* Package Highlights */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-xs uppercase font-bold tracking-wider text-brand-orange mb-3">
                  Package Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {tourPackage.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Route Summary Trail if available */}
              {tourPackage.routeSummary && tourPackage.routeSummary.length > 0 && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-slate-600 mb-2.5 flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-brand-orange" />
                    <span>Circuit Route & Waypoints</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {tourPackage.routeSummary.map((stop, i) => (
                      <React.Fragment key={i}>
                        <span className="px-3 py-1 rounded-xl bg-[#F5F3EF] border border-[#E2DDD5] text-xs font-semibold text-slate-800">
                          {stop}
                        </span>
                        {i < (tourPackage.routeSummary?.length || 0) - 1 && (
                          <span className="text-brand-orange text-xs font-bold">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Day-Wise Detailed Itinerary */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold font-display text-slate-900">
                    Day-Wise Itinerary
                  </h2>
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">
                    Detailed daily plan, scenic stops, stays, and meals included.
                  </p>
                </div>
                <button
                  onClick={() => setOpenDay(openDay === null ? 1 : null)}
                  className="text-xs text-brand-orange font-bold hover:underline cursor-pointer"
                >
                  {openDay === null ? 'Expand Days' : 'Collapse Days'}
                </button>
              </div>

              {tourPackage.itinerary && tourPackage.itinerary.length > 0 ? (
                <div className="space-y-4">
                  {tourPackage.itinerary.map((item) => {
                    const isExpanded = openDay === item.day;
                    return (
                      <div
                        key={item.day}
                        className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                          isExpanded
                            ? 'bg-white border-brand-orange shadow-md'
                            : 'bg-white border-[#E2DDD5] hover:border-slate-300 shadow-xs'
                        }`}
                      >
                        <button
                          onClick={() => toggleDay(item.day)}
                          className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-display font-bold text-xs shrink-0 ${
                              isExpanded ? 'bg-brand-orange text-white' : 'bg-slate-100 text-slate-800'
                            }`}>
                              D{item.day}
                            </span>
                            <span className="font-display font-bold text-sm sm:text-base text-slate-900">
                              {item.title}
                            </span>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-brand-orange shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-4 text-xs animate-in fade-in duration-150">
                            <p className="text-slate-700 leading-relaxed text-sm">
                              {item.description}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-700">
                              <div className="p-2.5 rounded-xl bg-[#F5F3EF] border border-[#E2DDD5] flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-brand-orange shrink-0" />
                                <span><strong>Stay:</strong> {item.stay}</span>
                              </div>
                              <div className="p-2.5 rounded-xl bg-[#F5F3EF] border border-[#E2DDD5] flex items-center gap-2">
                                <Utensils className="w-4 h-4 text-brand-orange shrink-0" />
                                <span><strong>Meals Included:</strong> {item.meals}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white border border-[#E2DDD5] rounded-2xl p-6 sm:p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mx-auto text-brand-orange">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Customized Day-by-Day Route</h3>
                    <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                      This package is customized according to your arrival point, preferred stays, and group pace. Contact our local team on WhatsApp to get your detailed personalized itinerary PDF.
                    </p>
                  </div>
                  <a
                    href={getPackageWhatsAppUrl(tourPackage.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>Get Detailed PDF Itinerary</span>
                  </a>
                </div>
              )}
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-white rounded-3xl p-6 border border-[#E2DDD5] shadow-md space-y-4">
                <div className="flex items-center gap-2 text-emerald-700 font-display font-bold text-base">
                  <Check className="w-5 h-5" />
                  <span>Inclusions</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  {tourPackage.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-3xl p-6 border border-[#E2DDD5] shadow-md space-y-4">
                <div className="flex items-center gap-2 text-rose-700 font-display font-bold text-base">
                  <X className="w-5 h-5" />
                  <span>Exclusions</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  {tourPackage.exclusions.map((exc, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0"></span>
                      <span>{exc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Things to Carry Checklist */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-lg">
                <Luggage className="w-5 h-5 text-brand-orange" />
                <span>Things to Carry & Packing Essentials</span>
              </div>
              <p className="text-xs text-slate-600">
                Recommended packing checklist for a comfortable and smooth Himalayan trip:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {thingsToCarryList.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 p-2.5 rounded-xl bg-[#F5F3EF] border border-[#E2DDD5]">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Information & Guidelines */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-lg">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                <span>Important Travel Information & Mountain Guidelines</span>
              </div>
              <div className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
                {importantInfoList.map((info, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                    <span>{info}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Gallery Grid */}
            {galleryImages.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-lg">
                    <Camera className="w-5 h-5 text-brand-orange" />
                    <span>Destination Photo Gallery</span>
                  </div>
                  <span className="text-xs text-slate-500">{galleryImages.length} Photographs</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  {galleryImages.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveGalleryImage(img)}
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-xs hover:shadow-md transition-all"
                    >
                      <img
                        src={img}
                        alt={`${tourPackage.title} view ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <Camera className="w-6 h-6 drop-shadow-md" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs Accordion */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-lg mb-2">
                <HelpCircle className="w-5 h-5 text-brand-orange" />
                <span>Frequently Asked Questions</span>
              </div>
              <div className="space-y-3">
                {faqsList.map((faq, i) => {
                  const isFaqOpen = openFaq === i;
                  return (
                    <div
                      key={i}
                      className="border border-[#E2DDD5] rounded-2xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(i)}
                        className="w-full text-left p-4 font-semibold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-50"
                      >
                        <span>{faq.question}</span>
                        {isFaqOpen ? (
                          <ChevronUp className="w-4 h-4 text-brand-orange shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>
                      {isFaqOpen && (
                        <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2 animate-in fade-in duration-150">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-lg">
                <Award className="w-5 h-5 text-emerald-600" />
                <span>Cancellation & Refund Policy</span>
              </div>
              <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                {cancellationList.map((policy, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></span>
                    <span>{policy}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sticky Booking Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-lg space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-orange">
                  Tariff & Quotation
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                    {tourPackage.startingPrice || 'Pricing on Request'}
                  </span>
                  {tourPackage.originalPrice && !tourPackage.startingPrice?.includes('Request') && (
                    <>
                      <span className="text-sm text-slate-400 line-through">
                        {tourPackage.originalPrice}
                      </span>
                      <span className="text-xs text-slate-600">/ person</span>
                    </>
                  )}
                </div>
                <p className="text-[11px] text-emerald-700 font-medium mt-1.5 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Custom quotes tailored to group size, dates & vehicle preference</span>
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => onOpenBookingModal(tourPackage.title)}
                  className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-bold text-xs text-white shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book This Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getPackageWhatsAppUrl(tourPackage.title, tourPackage.duration)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-semibold text-xs transition-all shadow-lg shadow-emerald-900/40"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Get Free Quote on WhatsApp</span>
                </a>

                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 rounded-xl font-semibold text-xs border border-slate-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call Trip Coordinator</span>
                </a>

                {tourPackage.pdfBrochure && (
                  <a
                    href={tourPackage.pdfBrochure}
                    download
                    className="w-full flex items-center justify-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 py-3 rounded-xl font-bold text-xs transition-all shadow-xs"
                  >
                    <Download className="w-4 h-4 text-brand-orange" />
                    <span>Download PDF Itinerary</span>
                  </a>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
                <p className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>25% advance booking amount to confirm</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Free date rescheduling up to 7 days prior</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Private AC vehicle with certified mountain driver</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Gallery */}
      {activeGalleryImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setActiveGalleryImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl">
            <img 
              src={activeGalleryImage} 
              alt="Himalayan view" 
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setActiveGalleryImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

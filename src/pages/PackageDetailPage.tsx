import React, { useState } from 'react';
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
  FileText,
  Download,
  Building2,
  Utensils,
  HelpCircle,
  Users,
  Backpack,
  Compass,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { adminStorage } from '../utils/adminStorage';
import { getPackageWhatsAppUrl, SITE_CONFIG } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';
import { SEOHead } from '../components/SEOHead';
import { PACKAGE_SLUG_MAP } from '../data/packageSlugs';
import { getTouristTripSchema, getBreadcrumbSchema, getFAQSchema } from '../utils/seoSchemas';

interface PackageDetailPageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const PackageDetailPage: React.FC<PackageDetailPageProps> = ({ onOpenBookingModal }) => {
  const { id } = useParams<{ id: string }>();
  const packages = adminStorage.getPackages();
  
  // Resolve package by slug, ID, or fallback alias
  const targetId = id ? (PACKAGE_SLUG_MAP[id] || id) : '';
  const tourPackage = packages.find((p) => p.slug === id || p.id === id || p.id === targetId);

  const [openDay, setOpenDay] = useState<number | null>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
              Looking for a personalized Himalayan tour? Our local travel experts curate tailored itineraries with transparent pricing, verified stays, and trusted mountain drivers.
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
              Browse Packages
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Canonical path: use slug if present, else id
  const canonicalPath = `/packages/${tourPackage.slug || tourPackage.id}`;
  const canonicalUrl = `${SITE_CONFIG.siteUrl}${canonicalPath}`;

  // Default fallback FAQs if none in package data
  const packageFaqs = tourPackage.faqs && tourPackage.faqs.length > 0 ? tourPackage.faqs : [
    {
      question: `How can I book the ${tourPackage.title}?`,
      answer: `You can click "Book This Package" to submit your dates and details, or tap the WhatsApp button to speak directly with our local coordinator. We confirm bookings with transparent vouchers and 24/7 mountain support.`
    },
    {
      question: `What kind of vehicles are provided for this journey?`,
      answer: `We allocate dedicated private hill vehicles (Swift Dzire / Innova Crysta / Tempo Traveller) with experienced, certified mountain drivers licensed for Uttarakhand high-altitude roads.`
    },
    {
      question: `Are accommodations clean and verified?`,
      answer: `Yes, all accommodations undergo inspection by our ground team in Dehradun, Rishikesh, Guptkashi, and Joshimath, ensuring clean linen, attached bathrooms with geysers, and hygienic pure-vegetarian meals.`
    }
  ];

  // Default fallback suitability
  const suitability: string[] = tourPackage.suitableFor && tourPackage.suitableFor.length > 0 
    ? tourPackage.suitableFor 
    : ['Families & Groups', 'Spiritual Devotees', 'Nature Explorers', 'Couples'];

  // Default fallback packing list
  const packingList: string[] = (tourPackage.packingNotes && tourPackage.packingNotes.length > 0)
    ? tourPackage.packingNotes
    : (tourPackage.packingList && tourPackage.packingList.length > 0)
    ? tourPackage.packingList
    : [
        'Layered woollen clothing and thermal inners for cool evenings',
        'Comfortable footwear with sturdy rubber sole grip for mountain trails',
        'Rainwear / umbrella and waterproof backpack protection',
        'Personal medications, motion sickness pills, and essential first aid',
        'Physical Government Photo ID (Aadhar Card) & Yatra Biometric pass if applicable'
      ];

  // Related packages
  const relatedPackages = packages
    .filter((p) => p.id !== tourPackage.id && p.slug !== tourPackage.slug)
    .slice(0, 3);

  // Generate Structured Data
  const tripSchema = getTouristTripSchema(tourPackage, canonicalUrl);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Tour Packages', url: '/packages' },
    { name: tourPackage.title, url: canonicalPath }
  ]);
  const faqSchema = getFAQSchema(packageFaqs);
  const jsonLd = [tripSchema, breadcrumbSchema, faqSchema].filter(Boolean);

  return (
    <div className="pt-24 pb-20">
      {/* Technical SEO Tags */}
      <SEOHead
        title={tourPackage.seoTitle || `${tourPackage.title} | UK Yatra Packages`}
        description={tourPackage.seoDescription || tourPackage.overview.slice(0, 160)}
        canonicalPath={canonicalPath}
        ogImage={tourPackage.image}
        jsonLd={jsonLd}
      />

      {/* Hero Header */}
      <div className="relative h-[46vh] min-h-[350px] sm:h-[62vh] sm:min-h-[460px] w-full flex items-end pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <img
          src={tourPackage.image}
          alt={`${tourPackage.title} - ${tourPackage.destination} tour package by UK Yatra`}
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
            {tourPackage.pickupDrop && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600/90 backdrop-blur-md text-white border border-emerald-400/30 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{tourPackage.pickupDrop}</span>
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-dark/80 backdrop-blur-md text-white border border-white/10 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              <span>{tourPackage.duration}</span>
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-dark/80 backdrop-blur-md text-white border border-white/10 flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Verified Operator</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight max-w-3xl leading-tight">
            {tourPackage.title}
          </h1>
          <div className="mt-2 flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
            <MapPin className="w-4 h-4 text-brand-orange" />
            <span>{tourPackage.destination}</span>
            <span>•</span>
            <span>Best Season: {tourPackage.bestSeason}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Breadcrumbs
          items={[
            { label: 'Tour Packages', to: '/packages' },
            { label: tourPackage.title }
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-6">
          {/* Left Column: Summary, Route, Itinerary, Inclusions, Suitability, Packing, FAQs */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview / Summary */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md">
              <h2 className="text-xl font-bold font-display text-slate-900 mb-3">
                Package Summary
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {tourPackage.overview}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-xs uppercase font-bold tracking-wider text-brand-orange mb-3">
                  Trip Highlights
                </h3>
                <div className="space-y-2">
                  {tourPackage.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Route & Travel Information */}
            {tourPackage.routeInfo && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-lg">
                  <Compass className="w-5 h-5 text-brand-orange" />
                  <h2>Route & Mountain Travel Information</h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {tourPackage.routeInfo}
                </p>
                <div className="pt-3 flex flex-wrap gap-2 text-[11px] text-slate-600">
                  <span className="px-3 py-1 bg-slate-100 rounded-full">✓ Commercial Hill-Certified Driver</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full">✓ Mountain Road Safety Compliant</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full">✓ 24/7 Ground Transit Support</span>
                </div>
              </div>
            )}

            {/* Day-Wise Detailed Itinerary */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold font-display text-slate-900">
                    Day-Wise Itinerary
                  </h2>
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">
                    Expand each day to review mountain routes, stays, and meal inclusions.
                  </p>
                </div>
                <button
                  onClick={() => setOpenDay(openDay === null ? 1 : null)}
                  className="text-xs text-brand-orange font-bold hover:underline cursor-pointer"
                >
                  {openDay === null ? 'Expand All' : 'Collapse'}
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
                          <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-4 text-xs sm:text-sm animate-in fade-in duration-150">
                            <p className="text-slate-700 leading-relaxed">
                              {item.description}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-700">
                              <div className="p-2.5 rounded-xl bg-[#F5F3EF] border border-[#E2DDD5] flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-brand-orange shrink-0" />
                                <span><strong>Stay:</strong> {item.stay}</span>
                              </div>
                              <div className="p-2.5 rounded-xl bg-[#F5F3EF] border border-[#E2DDD5] flex items-center gap-2">
                                <Utensils className="w-4 h-4 text-brand-orange shrink-0" />
                                <span><strong>Meals:</strong> {item.meals}</span>
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
                      This package is customized according to your arrival point, preferred stays, and group pace. Contact our local team on WhatsApp to receive your detailed PDF itinerary.
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
                  <h2>Package Inclusions</h2>
                </div>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {tourPackage.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-3xl p-6 border border-[#E2DDD5] shadow-md space-y-4">
                <div className="flex items-center gap-2 text-rose-700 font-display font-bold text-base">
                  <X className="w-5 h-5" />
                  <h2>Package Exclusions</h2>
                </div>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {tourPackage.exclusions.map((exc, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                      <span>{exc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Who Is This Trip Suitable For */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-lg">
                <Users className="w-5 h-5 text-brand-orange" />
                <h2>Who Is This Trip Suitable For?</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {suitability.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#F5F3EF] text-xs sm:text-sm font-medium text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Packing List & Important Travel Notes */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-lg">
                <Backpack className="w-5 h-5 text-brand-orange" />
                <h2>Packing List & Essential Himalayan Travel Notes</h2>
              </div>
              <div className="space-y-2.5">
                {packingList.map((note: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md space-y-5">
              <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-lg">
                <HelpCircle className="w-5 h-5 text-brand-orange" />
                <h2>Frequently Asked Questions</h2>
              </div>
              <div className="space-y-3">
                {packageFaqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={i} className="rounded-2xl border border-slate-200 overflow-hidden">
                      <button
                        onClick={() => toggleFaq(i)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer bg-slate-50/50 hover:bg-slate-50"
                      >
                        <span className="font-display font-bold text-xs sm:text-sm text-slate-900">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-brand-orange shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="p-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Related Packages for Internal Link Equity */}
            {relatedPackages.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <h2 className="text-2xl font-bold font-display text-slate-900">
                  Related Tour Packages
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedPackages.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/packages/${rel.slug || rel.id}`}
                      className="group bg-white rounded-2xl border border-[#E2DDD5] hover:border-brand-orange/50 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
                    >
                      <img
                        src={rel.image}
                        alt={`${rel.title} - UK Yatra`}
                        className="h-32 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-bold text-brand-orange uppercase">
                            {rel.duration}
                          </span>
                          <h3 className="font-display font-bold text-xs text-slate-900 group-hover:text-brand-orange transition-colors line-clamp-2">
                            {rel.title}
                          </h3>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-600">
                          {rel.startingPrice || 'Pricing on Request'}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Booking & Enquiry Card */}
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
                  <span>Custom quotes tailored to group size, dates & vehicle preferences</span>
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
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-semibold text-xs transition-all shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Enquire on WhatsApp</span>
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
                <p>• Verified Local Uttarakhand Tour Operator</p>
                <p>• Uttarakhand Tourism Reg: {SITE_CONFIG.registrationNo}</p>
                <p>• Free date rescheduling up to 7 days before trip</p>
                <p>• Commercial mountain-certified hill vehicle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

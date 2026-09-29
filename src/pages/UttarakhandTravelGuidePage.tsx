import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Car, 
  Train, 
  Plane, 
  Mountain, 
  Coins, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sun,
  Snowflake,
  CloudRain,
  Trees,
  Footprints,
  Waves,
  Sparkles
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { DESTINATIONS } from '../data/destinations';
import { TREKS } from '../data/treks';
import { WhatsAppIcon } from '../components/SocialIcons';

interface UttarakhandTravelGuidePageProps {
  onOpenBookingModal?: (packageName?: string) => void;
}

export const UttarakhandTravelGuidePage: React.FC<UttarakhandTravelGuidePageProps> = ({ onOpenBookingModal }) => {
  const guideSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Uttarakhand Travel Guide: The Definitive Guide to Destinations, Treks, Circuits & Costs',
    description: 'The definitive guide to traveling in Uttarakhand (Devbhoomi). Best time to visit, Garhwal vs Kumaon, top travel circuits, high Himalayan treks, Char Dham yatra, how to reach, permits, and budget planning.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop',
    author: {
      '@type': 'Organization',
      name: 'UK Yatra Travel Editorial Team',
      url: 'https://uk-yatra.vercel.app/about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'UK Yatra',
      logo: {
        '@type': 'ImageObject',
        url: 'https://uk-yatra.vercel.app/logo.png'
      }
    },
    datePublished: '2026-01-15',
    dateModified: '2026-03-20',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://uk-yatra.vercel.app/uttarakhand-travel-guide'
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <SEOHead
        title="Uttarakhand Travel Guide: Best Time, Circuits, Treks & Costs | UK Yatra"
        description="The ultimate Uttarakhand travel guide. Discover Garhwal & Kumaon, top travel circuits, high-altitude treks, Char Dham pilgrimage, how to reach, costs, weather, and local travel tips."
        canonicalPath="/uttarakhand-travel-guide"
        ogType="article"
        keywords={[
          'Uttarakhand Travel Guide',
          'Best Time to Visit Uttarakhand',
          'Uttarakhand Trip Cost',
          'Uttarakhand Tourism',
          'Garhwal vs Kumaon',
          'How to reach Uttarakhand',
          'Uttarakhand travel circuits',
          'Char Dham Yatra guide'
        ]}
        schema={guideSchema}
      />

      <Breadcrumbs
        items={[
          { label: 'Travel Guide' },
          { label: 'Uttarakhand Travel Guide' }
        ]}
      />

      {/* Hero Pillar Banner */}
      <div className="relative rounded-3xl overflow-hidden cream-banner p-8 sm:p-14 mb-12 shadow-sm border border-[#E2DDD5]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Official Uttarakhand Pillar Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 leading-tight">
            The Definitive <span className="text-brand-orange">Uttarakhand</span> Travel Guide
          </h1>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            Known affectionately as <em>Devbhoomi</em> (The Land of the Gods), Uttarakhand is a Himalayan paradise cradling the sources of the holy Ganga and Yamuna, India's highest peaks, ancient pilgrimage routes, and endless alpine meadows. Whether you are planning a spiritual yatra, an exhilarating winter snow trek, or a peaceful hill retreat, this guide provides firsthand, grounded insights for every traveler.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-bold text-slate-600">
            <span>By UK Yatra Mountain Editorial</span>
            <span>•</span>
            <span>Updated March 2026</span>
            <span>•</span>
            <span>12 Min Read</span>
          </div>
        </div>
      </div>

      {/* Fast Navigation TOC */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-xs mb-12">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
          In This Comprehensive Guide:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-bold text-slate-800">
          <a href="#regions" className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E2DDD5] hover:border-brand-orange hover:text-brand-orange transition-colors flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
            <span>1. Garhwal vs Kumaon</span>
          </a>
          <a href="#best-time" className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E2DDD5] hover:border-brand-orange hover:text-brand-orange transition-colors flex items-center gap-2">
            <Calendar className="w-4 h-4 text-brand-orange shrink-0" />
            <span>2. Best Time to Visit</span>
          </a>
          <a href="#circuits" className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E2DDD5] hover:border-brand-orange hover:text-brand-orange transition-colors flex items-center gap-2">
            <Compass className="w-4 h-4 text-brand-orange shrink-0" />
            <span>3. Top 5 Travel Circuits</span>
          </a>
          <a href="#how-to-reach" className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E2DDD5] hover:border-brand-orange hover:text-brand-orange transition-colors flex items-center gap-2">
            <Plane className="w-4 h-4 text-brand-orange shrink-0" />
            <span>4. How to Reach</span>
          </a>
          <a href="#budget" className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E2DDD5] hover:border-brand-orange hover:text-brand-orange transition-colors flex items-center gap-2">
            <Coins className="w-4 h-4 text-brand-orange shrink-0" />
            <span>5. Trip Cost & Budget</span>
          </a>
          <a href="#treks" className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E2DDD5] hover:border-brand-orange hover:text-brand-orange transition-colors flex items-center gap-2">
            <Mountain className="w-4 h-4 text-brand-orange shrink-0" />
            <span>6. Iconic Himalayan Treks</span>
          </a>
          <a href="#permits" className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E2DDD5] hover:border-brand-orange hover:text-brand-orange transition-colors flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0" />
            <span>7. Permits & Registration</span>
          </a>
          <a href="#faq" className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E2DDD5] hover:border-brand-orange hover:text-brand-orange transition-colors flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-orange shrink-0" />
            <span>8. Common FAQs</span>
          </a>
        </div>
      </div>

      {/* Section 1: Garhwal vs Kumaon */}
      <section id="regions" className="mb-14 scroll-mt-28">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DDD5] shadow-md space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                1. Understanding Uttarakhand: Garhwal vs Kumaon
              </h2>
              <p className="text-xs text-slate-500">Two culturally distinct Himalayan realms under one magnificent state</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Uttarakhand is geographically and culturally divided into two main administrative divisions: <strong>Garhwal</strong> in the west and <strong>Kumaon</strong> in the east. Understanding their differences will help you choose the right region for your travel goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] space-y-3">
              <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
                <Mountain className="w-4 h-4 text-brand-orange" />
                <span>Garhwal Region: High Peaks & Spiritual Capitals</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Garhwal is home to the sacred Char Dham shrines (Yamunotri, Gangotri, Kedarnath, Badrinath), towering glacial summits (Nanda Devi, Kamet, Chaukhamba, Shivling), India's premier ski slopes at <Link to="/destinations/auli" className="text-brand-orange font-bold hover:underline">Auli</Link>, and the yoga and rafting capital of <Link to="/destinations/rishikesh" className="text-brand-orange font-bold hover:underline">Rishikesh</Link>.
              </p>
              <div className="text-xs text-slate-700 pt-2 border-t border-slate-200/60 space-y-1">
                <p><strong>Key Hubs:</strong> Dehradun, Rishikesh, Haridwar, Joshimath, Uttarkashi, Rudraprayag.</p>
                <p><strong>Best For:</strong> High altitude trekking, river rafting, bungee jumping, and sacred pilgrimages.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] space-y-3">
              <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
                <Trees className="w-4 h-4 text-emerald-600" />
                <span>Kumaon Region: Lake Districts & Forest Serenity</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kumaon is characterized by enchanting emerald lakes, rolling pine-covered ridges, peaceful British cantonments, and direct wildlife corridors. From the iconic lake city of <Link to="/destinations/nainital" className="text-brand-orange font-bold hover:underline">Nainital</Link> to the Himalayan panoramas of <Link to="/destinations/kausani" className="text-brand-orange font-bold hover:underline">Kausani</Link> and the tiger-rich jungles of <Link to="/destinations/jim-corbett" className="text-brand-orange font-bold hover:underline">Jim Corbett</Link>.
              </p>
              <div className="text-xs text-slate-700 pt-2 border-t border-slate-200/60 space-y-1">
                <p><strong>Key Hubs:</strong> Nainital, Kathgodam, Almora, Ranikhet, Mukteshwar, Ramnagar.</p>
                <p><strong>Best For:</strong> Family vacations, wildlife safaris, boutique mountain stays, and quiet birdwatching.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Best Time to Visit */}
      <section id="best-time" className="mb-14 scroll-mt-28">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DDD5] shadow-md space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                2. Best Time to Visit Uttarakhand
              </h2>
              <p className="text-xs text-slate-500">Month-by-month weather breakdowns and seasonal travel planning</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
                <Sun className="w-4 h-4" />
                <span>Summer (Apr - Jun)</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 block">Temp: 15°C - 30°C</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pleasant mountain weather. Ideal for hill stations (Mussoorie, Nainital), Char Dham opening, and high-altitude meadow treks.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                <CloudRain className="w-4 h-4" />
                <span>Monsoon (Jul - Aug)</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 block">Temp: 18°C - 26°C</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Lush green landscapes and the peak blooming window for <Link to="/treks/valley-of-flowers" className="text-brand-orange font-bold hover:underline">Valley of Flowers</Link>. Travel with caution on highway mountain roads.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-700">
                <Compass className="w-4 h-4" />
                <span>Autumn (Sep - Nov)</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 block">Temp: 8°C - 22°C</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                The golden window for mountain clarity. Razor-sharp visibility of snow peaks, dry hiking trails, and serene post-monsoon pilgrimage.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-700">
                <Snowflake className="w-4 h-4" />
                <span>Winter (Dec - Mar)</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 block">Temp: -5°C - 15°C</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Powder snow at <Link to="/destinations/auli" className="text-brand-orange font-bold hover:underline">Auli</Link> and famous winter treks like <Link to="/treks/kedarkantha" className="text-brand-orange font-bold hover:underline">Kedarkantha</Link> and <Link to="/treks/brahmatal" className="text-brand-orange font-bold hover:underline">Brahmatal</Link>.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/trek-calendar"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange hover:underline"
            >
              <span>Explore the Month-by-Month Trek & Weather Calendar →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Top Travel Circuits */}
      <section id="circuits" className="mb-14 scroll-mt-28">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DDD5] shadow-md space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                3. The 5 Classic Uttarakhand Travel Circuits
              </h2>
              <p className="text-xs text-slate-500">Proven itineraries crafted around realistic driving times and mountain logistics</p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Circuit 1 */}
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-display font-bold text-base text-slate-900">
                  Circuit 1: The Sacred Char Dham Yatra (9 - 11 Days)
                </h3>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800">
                  Pilgrimage & Spiritual
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Route:</strong> Haridwar / Dehradun → Barkot (Yamunotri) → Uttarkashi (Gangotri) → Guptkashi / Sonprayag (Kedarnath) → Badrinath → Rishikesh.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                The most revered pilgrimage in the Hindu Himalayas. We operate both comfortable road-based packages and express VIP helicopter charters with dedicated ground teams.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-bold">
                <Link to="/packages/uky-road-01-complete-char-dham-delhi-09n-10d" className="text-brand-orange hover:underline">
                  View Char Dham Road Itinerary →
                </Link>
                <Link to="/helicopter-packages" className="text-slate-800 hover:text-brand-orange hover:underline">
                  View Heli Charters →
                </Link>
              </div>
            </div>

            {/* Circuit 2 */}
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-display font-bold text-base text-slate-900">
                  Circuit 2: The Golden Triangle of the Hills (4 - 6 Days)
                </h3>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                  Weekend & Couples
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Route:</strong> Dehradun → Mussoorie (Mall Road & George Everest) → Dhanaulti (Eco Park & Surkanda Devi) → Rishikesh (Ganga Rafting & Aarti).
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                The most accessible circuit from Delhi NCR via the new Delhi-Dehradun expressway. Perfect for a 4-to-5-day family escape or romantic getaway.
              </p>
            </div>

            {/* Circuit 3 */}
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-display font-bold text-base text-slate-900">
                  Circuit 3: Kumaon Lakes & Panoramic Himalayan Ridges (6 - 8 Days)
                </h3>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-sky-100 text-sky-800">
                  Nature & Heritage
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Route:</strong> Kathgodam → Nainital → Mukteshwar → Almora → Kausani (Trishul & Nanda Devi Panoramas) → Binsar Wildlife Sanctuary → Ranikhet.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Escape commercial crowds into the gentle pine fragrance of Kumaon. Breathtaking sunrises over the 300-km Himalayan ridge from Kausani.
              </p>
            </div>

            {/* Circuit 4 */}
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-display font-bold text-base text-slate-900">
                  Circuit 4: Winter Snow & High Peaks (Auli - Chopta - Joshimath, 5 - 7 Days)
                </h3>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-cyan-100 text-cyan-800">
                  Snow & Adventure
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Route:</strong> Rishikesh → Chopta (Tungnath & Chandrashila Snow Hike) → Joshimath → Auli (Skiing & Gorson Bugyal) → Rishikesh.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                The ultimate winter wonderland circuit. Combine snowshoeing in the meadows of Chopta with ski lessons and cable car rides facing Mt. Nanda Devi in Auli.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How to Reach */}
      <section id="how-to-reach" className="mb-14 scroll-mt-28">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DDD5] shadow-md space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center shrink-0">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                4. Transportation: How to Reach Uttarakhand
              </h2>
              <p className="text-xs text-slate-500">Airports, major railheads, expressways, and mountain taxi logistics</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <Plane className="w-4 h-4 text-sky-600" />
                <span>By Air</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Garhwal:</strong> Jolly Grant Airport (DED), Dehradun. Daily flights from Delhi, Mumbai, Bengaluru, Hyderabad, and Ahmedabad.<br/>
                <strong>Kumaon:</strong> Pantnagar Airport (PGH), connected to Delhi.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <Train className="w-4 h-4 text-emerald-600" />
                <span>By Train</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Garhwal:</strong> Dehradun (DDN), Haridwar (HW), and Yog Nagari Rishikesh (YNRK) have direct Vande Bharat and Shatabdi express trains.<br/>
                <strong>Kumaon:</strong> Kathgodam (KGM) is the premier railhead.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <Car className="w-4 h-4 text-brand-orange" />
                <span>By Road</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                The new Delhi-Dehradun Expressway cuts driving time to under 4 hours. UK Yatra provides sanitized private vehicles with native hill drivers across all routes.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/car-rental"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange hover:underline"
            >
              <span>Explore UK Yatra Hill-Certified Vehicle Fleets (Innova, Tempo Traveller, Urbania) →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Trip Cost & Budget */}
      <section id="budget" className="mb-14 scroll-mt-28">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DDD5] shadow-md space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                5. Uttarakhand Trip Cost & Budget Estimator
              </h2>
              <p className="text-xs text-slate-500">Realistic daily budgets based on current hotel tariffs, fuel costs, and permits</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Budget / Backpacker</span>
              <div className="text-2xl font-bold font-display text-slate-900">
                ₹1,800 - ₹2,800 <span className="text-xs font-normal text-slate-500">/ person / day</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                <li>• Homestays, GMVN/KMVN dorms & guesthouses</li>
                <li>• Shared cabs and public transport</li>
                <li>• Local dhabas & mountain cafe dining</li>
                <li>• Independent trail hiking or group batches</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-brand-orange/5 border border-brand-orange/30 space-y-3 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange block">Comfort / Mid-Range (Most Popular)</span>
              <div className="text-2xl font-bold font-display text-brand-orange">
                ₹3,800 - ₹6,500 <span className="text-xs font-normal text-slate-500">/ person / day</span>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 leading-relaxed font-medium">
                <li>• 3-Star mountain hotels & boutique swiss tents</li>
                <li>• Private dedicated sedan or SUV (Innova/Ertiga)</li>
                <li>• Buffet breakfast & dinner included</li>
                <li>• Dedicated local guides & verified permits</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Luxury & Helicopter Yatra</span>
              <div className="text-2xl font-bold font-display text-slate-900">
                ₹12,000+ <span className="text-xs font-normal text-slate-500">/ person / day</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                <li>• Luxury 4/5-star resorts & heritage colonial estates</li>
                <li>• VIP temple darshan coordination & escort</li>
                <li>• Helicopter shuttle tickets or chartered flights</li>
                <li>• Premium vehicle (Fortuner / Urbania / Mercedes)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Iconic Himalayan Treks Quick Table */}
      <section id="treks" className="mb-14 scroll-mt-28">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DDD5] shadow-md space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                <Mountain className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  6. Top Uttarakhand Treks Overview
                </h2>
                <p className="text-xs text-slate-500">Summary of the state's most sought-after trekking expeditions</p>
              </div>
            </div>
            <Link to="/treks" className="text-xs font-bold text-brand-orange hover:underline">
              Explore All {TREKS.length} Treks →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#E2DDD5] text-slate-500">
                  <th className="py-3 px-4 font-bold uppercase">Trek Name</th>
                  <th className="py-3 px-4 font-bold uppercase">Altitude</th>
                  <th className="py-3 px-4 font-bold uppercase">Duration</th>
                  <th className="py-3 px-4 font-bold uppercase">Difficulty</th>
                  <th className="py-3 px-4 font-bold uppercase">Best Season</th>
                  <th className="py-3 px-4 font-bold uppercase">Starting Base</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {TREKS.slice(0, 7).map((t) => (
                  <tr key={t.id} className="hover:bg-[#FAF9F6]">
                    <td className="py-3 px-4 font-bold text-slate-900">
                      <Link to={`/treks/${t.id}`} className="hover:text-brand-orange">
                        {t.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-brand-orange font-semibold">{t.altitude}</td>
                    <td className="py-3 px-4 text-slate-700">{t.duration}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded-full font-bold ${
                        t.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-800' :
                        t.difficulty === 'Moderate' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {t.difficulty}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-700">{t.bestSeason.split('&')[0]}</td>
                    <td className="py-3 px-4 text-slate-700">{t.baseCamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 7: Permits & Mandatory Registration */}
      <section id="permits" className="mb-14 scroll-mt-28">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DDD5] shadow-md space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                7. Essential Permits & Biometric Registration
              </h2>
              <p className="text-xs text-slate-500">Government compliance and environmental checkpost rules</p>
            </div>
          </div>

          <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5]">
              <span className="font-bold text-slate-900 block mb-1">1. Char Dham Biometric Registration:</span>
              <span>Mandatory for all pilgrims traveling to Yamunotri, Gangotri, Kedarnath, or Badrinath via road or helicopter. UK Yatra coordinates this registration on behalf of all registered guests.</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5]">
              <span className="font-bold text-slate-900 block mb-1">2. National Park Entry Permits:</span>
              <span>Required for protected ecological sanctuaries such as Valley of Flowers, Nanda Devi Biosphere, Gangotri National Park (Gaumukh), and Govind Pashu Vihar (Kedarkantha, Har Ki Dun). Our expedition fees include all official permits.</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5]">
              <span className="font-bold text-slate-900 block mb-1">3. Inner Line Permits (ILP) for Border Villages:</span>
              <span>Required for specific frontier trails near Niti Valley and Milam Glacier; easily issued through district administration with valid Aadhaar/Passport identification.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#000044] to-[#000033] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        <div className="space-y-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
            Plan Your Tailored Uttarakhand Journey with UK Yatra
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Whether you need a private family road tour, a high Himalayan trek batch, or an exclusive helicopter pilgrimage, our Dehradun-based travel specialists will build your personalized day-wise itinerary in under 2 hours.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <Link
            to="/customized-trip"
            className="w-full sm:w-auto orange-gradient-btn px-6 py-3.5 rounded-xl font-bold text-xs text-white text-center shadow-lg"
          >
            Custom Trip Builder
          </Link>
          <a
            href="https://wa.me/917817955737?text=Hi%20UKYatra%2C%20I%20read%20your%20Uttarakhand%20Travel%20Guide%20and%20would%20like%20to%20plan%20a%20trip."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-xl font-bold text-xs shadow-lg hover:brightness-105"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

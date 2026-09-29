import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Mountain, 
  Sun, 
  Snowflake, 
  CloudRain, 
  Wind, 
  ArrowRight, 
  CheckCircle2, 
  Compass,
  ArrowRightLeft
} from 'lucide-react';
import { TREKS } from '../data/treks';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { TrekCard } from '../components/TrekCard';
import { getTrekWhatsAppUrl } from '../config/siteConfig';
import { WhatsAppIcon } from '../components/SocialIcons';

interface MonthMeta {
  code: string;
  name: string;
  season: string;
  temp: string;
  weatherSummary: string;
  snowStatus: string;
  icon: any;
}

const MONTHS_DATA: MonthMeta[] = [
  {
    code: 'Jan',
    name: 'January',
    season: 'Peak Winter Snow',
    temp: '-6°C to 10°C',
    weatherSummary: 'Deep powder snow across high trails. Crisp sunny days and sub-zero starry nights.',
    snowStatus: 'Heavy Snowpack on all trails above 9,000 ft',
    icon: Snowflake
  },
  {
    code: 'Feb',
    name: 'February',
    season: 'Late Winter Snow',
    temp: '-4°C to 12°C',
    weatherSummary: 'Excellent snow cover with slightly longer daylight hours. Ideal for snow glissading.',
    snowStatus: 'Prime Snow Trekking Condition',
    icon: Snowflake
  },
  {
    code: 'Mar',
    name: 'March',
    season: 'Spring Thaw & Early Rhododendrons',
    temp: '0°C to 16°C',
    weatherSummary: 'Snow begins melting on lower slopes; scarlet red rhododendrons begin blooming in lower forests.',
    snowStatus: 'Snow on summits, thawing in valleys',
    icon: Sun
  },
  {
    code: 'Apr',
    name: 'April',
    season: 'Spring Rhododendron Bloom',
    temp: '6°C to 20°C',
    weatherSummary: 'Vibrant pink and red rhododendron bloom. Pleasant daytime temperatures across Garhwal.',
    snowStatus: 'Snow confined to high ridges & passes',
    icon: Sun
  },
  {
    code: 'May',
    name: 'May',
    season: 'Early Summer & High Bugyals',
    temp: '10°C to 24°C',
    weatherSummary: 'Lush green alpine meadows open up. Clear mornings with excellent visibility of snow summits.',
    snowStatus: 'Clear trails; high passes retain snow bridges',
    icon: Sun
  },
  {
    code: 'Jun',
    name: 'June',
    season: 'Peak Summer Season',
    temp: '12°C to 25°C',
    weatherSummary: 'Warm pleasant weather on lower trails, cool breeze at campsites. Best for high-altitude passes.',
    snowStatus: 'All high meadow trails completely open',
    icon: Sun
  },
  {
    code: 'Jul',
    name: 'July',
    season: 'Monsoon Alpine Explosion',
    temp: '12°C to 20°C',
    weatherSummary: 'Himalayan wildflowers burst into life. Mist-wrapped valleys and gushing mountain streams.',
    snowStatus: 'UNESCO Valley of Flowers in active bloom',
    icon: CloudRain
  },
  {
    code: 'Aug',
    name: 'August',
    season: 'Peak Floral Bloom',
    temp: '12°C to 20°C',
    weatherSummary: 'Peak blooming of Brahma Kamal and Blue Poppies in Valley of Flowers. Emerald green landscapes.',
    snowStatus: 'Floral explosion across Chamoli biosphere',
    icon: CloudRain
  },
  {
    code: 'Sep',
    name: 'September',
    season: 'Post-Monsoon Crystal Skies',
    temp: '8°C to 18°C',
    weatherSummary: 'Sharp, crystal-clear Himalayan air. The monsoon clouds depart, revealing razor-sharp peak views.',
    snowStatus: 'Crisp dry trails; exceptional photography window',
    icon: Wind
  },
  {
    code: 'Oct',
    name: 'October',
    season: 'Autumn Golden Hour',
    temp: '4°C to 16°C',
    weatherSummary: 'Golden autumn grasslands, brilliant blue skies, and comfortable daytime trekking conditions.',
    snowStatus: 'Clear dry trails with chilly starry nights',
    icon: Wind
  },
  {
    code: 'Nov',
    name: 'November',
    season: 'Early Winter Crispness',
    temp: '0°C to 14°C',
    weatherSummary: 'Crisp freezing nights and azure blue skies. Frost begins forming on alpine meadows.',
    snowStatus: 'Early winter frost; quiet and peaceful trails',
    icon: Snowflake
  },
  {
    code: 'Dec',
    name: 'December',
    season: 'Winter Snow Arrivals',
    temp: '-5°C to 10°C',
    weatherSummary: 'Fresh snowfall transforms Garhwal forests into a winter wonderland. White Christmas & New Year trails.',
    snowStatus: 'Snowfall begins mid-December onwards',
    icon: Snowflake
  }
];

export const TrekCalendarPage: React.FC = () => {
  const currentMonthCode = new Date().toLocaleString('en-US', { month: 'short' });
  const [selectedMonth, setSelectedMonth] = useState<string>(
    MONTHS_DATA.some(m => m.code === currentMonthCode) ? currentMonthCode : 'Jan'
  );

  const activeMonthData = MONTHS_DATA.find(m => m.code === selectedMonth) || MONTHS_DATA[0];

  // Filter treks active in this month
  const activeTreks = TREKS.filter(t => t.bestMonths?.includes(selectedMonth));

  const pageTitle = `Uttarakhand Trek Calendar: Best Treks in ${activeMonthData.name} | UK Yatra`;
  const pageDesc = `Discover the best treks to do in Uttarakhand in ${activeMonthData.name}. Weather, temperature (${activeMonthData.temp}), snowfall conditions, and verified Himalayan itineraries.`;

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <SEOHead
        title={pageTitle}
        description={pageDesc}
        canonicalPath="/trek-calendar"
        keywords={[
          `Best Treks in ${activeMonthData.name}`,
          'Uttarakhand Trek Calendar',
          'Trek by Month Uttarakhand',
          'Winter Treks in Uttarakhand',
          'Monsoon Treks Uttarakhand'
        ]}
      />

      <Breadcrumbs
        items={[
          { label: 'Treks', to: '/treks' },
          { label: 'Trek Calendar' }
        ]}
      />

      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden cream-banner p-8 sm:p-12 mb-10 shadow-sm border border-[#E2DDD5]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Month-by-Month Trail Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 leading-tight">
            Uttarakhand <span className="text-brand-orange">Trek Calendar</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            Plan your Himalayan trek according to nature's seasons. Discover which high-altitude trails are blanketed in winter snow, when alpine meadows (bugyals) turn emerald green, and the exact blooming window for UNESCO Valley of Flowers.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/trek-comparison"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#DCD6CC] text-slate-800 text-xs font-bold hover:border-brand-orange hover:text-brand-orange transition-all shadow-xs"
            >
              <ArrowRightLeft className="w-3.5 h-3.5 text-brand-orange" />
              <span>Compare Selected Treks</span>
            </Link>
            <Link
              to="/uttarakhand-travel-guide"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-dark/10 border border-brand-dark/20 text-brand-dark text-xs font-bold hover:bg-brand-dark hover:text-white transition-all shadow-xs"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Uttarakhand Travel Guide</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 12 Months Horizontal Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 hide-scrollbar">
        {MONTHS_DATA.map((m) => {
          const isSelected = m.code === selectedMonth;
          return (
            <button
              key={m.code}
              onClick={() => setSelectedMonth(m.code)}
              className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex flex-col items-center gap-1 shrink-0 ${
                isSelected
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30 scale-105'
                  : 'bg-white text-slate-700 hover:bg-[#FAF9F6] border border-[#DCD6CC]'
              }`}
            >
              <span className="text-xs">{m.name}</span>
              <span className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                {m.season.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Month Climate & Trail Condition Brief */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md mb-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-orange/15 text-brand-orange">
                {activeMonthData.season}
              </span>
              <span className="text-xs text-slate-500 font-semibold">• Uttarakhand Trekking Window</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
              Trekking in {activeMonthData.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeMonthData.weatherSummary}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto shrink-0">
            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] text-center">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Avg Temperature</span>
              <span className="font-display font-bold text-sm text-slate-900">{activeMonthData.temp}</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD5] text-center">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Trail Status</span>
              <span className="font-display font-bold text-xs text-brand-orange">{activeMonthData.snowStatus}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Treks Active in this Month */}
      <div className="space-y-6 mb-16">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
              Recommended Treks for {activeMonthData.name} ({activeTreks.length} Available)
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Verified Himalayan itineraries running fixed batch departures in {activeMonthData.name}
            </p>
          </div>
          <Link to="/treks" className="text-xs font-bold text-brand-orange hover:underline hidden sm:block">
            View All {TREKS.length} Treks →
          </Link>
        </div>

        {activeTreks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTreks.map((trek) => (
              <TrekCard key={trek.id} trek={trek} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-6 bg-white rounded-3xl border border-[#E2DDD5]">
            <p className="text-sm text-slate-600">
              High mountain passes are resting this month. Check out our lower altitude weekend trails or consult our team.
            </p>
          </div>
        )}
      </div>

      {/* Consult Banner */}
      <div className="rounded-3xl p-8 bg-[#000044] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold font-display">
            Planning a Trek in {activeMonthData.name}?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Get real-time mountain trail updates, snow reports, and batch schedules for {activeMonthData.name} from our native Uttarakhand expedition leads.
          </p>
        </div>
        <a
          href={`https://wa.me/917817955737?text=Hi%20UKYatra%2C%20I%20am%20planning%20a%20trek%20in%20${activeMonthData.name}.%20Please%20suggest%20the%20best%20itinerary%20and%20batch%20dates.`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-xl font-bold text-xs shadow-lg hover:brightness-105 shrink-0"
        >
          <WhatsAppIcon className="w-4 h-4 fill-current" />
          <span>Inquire for {activeMonthData.name} Batches</span>
        </a>
      </div>
    </div>
  );
};

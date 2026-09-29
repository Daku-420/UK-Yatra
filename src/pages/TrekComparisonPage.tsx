import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ArrowRightLeft, 
  Mountain, 
  Check, 
  X, 
  Clock, 
  TrendingUp, 
  Calendar, 
  Snowflake, 
  HeartHandshake, 
  Dumbbell, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { TREKS } from '../data/treks';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { WhatsAppIcon } from '../components/SocialIcons';
import { getTrekWhatsAppUrl } from '../config/siteConfig';

export const TrekComparisonPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const trekAId = searchParams.get('trekA') || 'kedarkantha';
  const trekBId = searchParams.get('trekB') || 'dayara-bugyal';
  const trekCId = searchParams.get('trekC') || '';

  const [selectedA, setSelectedA] = useState<string>(trekAId);
  const [selectedB, setSelectedB] = useState<string>(trekBId);
  const [selectedC, setSelectedC] = useState<string>(trekCId);

  // Sync state when params change
  useEffect(() => {
    if (searchParams.get('trekA')) setSelectedA(searchParams.get('trekA')!);
    if (searchParams.get('trekB')) setSelectedB(searchParams.get('trekB')!);
    if (searchParams.get('trekC')) setSelectedC(searchParams.get('trekC')!);
  }, [searchParams]);

  // Update query params when selection changes
  const updateComparison = (a: string, b: string, c?: string) => {
    setSelectedA(a);
    setSelectedB(b);
    setSelectedC(c || '');
    const newParams: Record<string, string> = { trekA: a, trekB: b };
    if (c) newParams.trekC = c;
    setSearchParams(newParams);
  };

  const trekA = TREKS.find(t => t.id === selectedA) || TREKS[0];
  const trekB = TREKS.find(t => t.id === selectedB) || TREKS[1];
  const trekC = selectedC ? TREKS.find(t => t.id === selectedC) : null;

  const comparedTreks = [trekA, trekB, ...(trekC ? [trekC] : [])];

  const presets = [
    { title: 'Kedarkantha vs Dayara Bugyal', a: 'kedarkantha', b: 'dayara-bugyal', desc: 'Snow Summit vs Alpine Meadows' },
    { title: 'Nag Tibba vs Chopta Chandrashila', a: 'nag-tibba', b: 'chopta-chandrashila', desc: 'Weekend Summit vs Highest Shiva Shrine' },
    { title: 'Kuari Pass vs Brahmatal', a: 'kuari-pass', b: 'brahmatal', desc: 'Nanda Devi Views vs Frozen Glacial Lake' },
    { title: 'Har Ki Dun vs Bali Pass', a: 'har-ki-dun', b: 'bali-pass', desc: 'Ancient Valley Trail vs 16,200 ft Technical Pass' },
  ];

  const pageTitle = `Compare Treks: ${trekA.name} vs ${trekB.name} ${trekC ? `vs ${trekC.name}` : ''} | UK Yatra`;
  const pageDesc = `Detailed side-by-side comparison of ${trekA.name} and ${trekB.name}. Compare difficulty, max altitude, trail distance, snow availability, beginner suitability, cost, and best season in Uttarakhand.`;

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <SEOHead
        title={pageTitle}
        description={pageDesc}
        canonicalPath="/trek-comparison"
        keywords={[
          'Compare Uttarakhand Treks',
          `${trekA.name} vs ${trekB.name}`,
          'Kedarkantha vs Dayara Bugyal',
          'Uttarakhand Trek comparison',
          'Best Himalayan trek for beginners'
        ]}
      />

      <Breadcrumbs
        items={[
          { label: 'Treks', to: '/treks' },
          { label: 'Compare Treks' }
        ]}
      />

      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden cream-banner p-8 sm:p-12 mb-10 shadow-sm border border-[#E2DDD5]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <ArrowRightLeft className="w-3.5 h-3.5" />
            <span>Side-by-Side Trail Decision Engine</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 leading-tight">
            Compare <span className="text-brand-orange">Uttarakhand Treks</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            Not sure whether to pick a snow summit, an open alpine meadow (bugyal), or a deep glacial valley? Compare key parameters side-by-side: altitude, difficulty, beginner suitability, fitness requirements, costs, and best months.
          </p>

          {/* Quick Comparison Presets */}
          <div className="pt-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">Popular Comparisons:</span>
            <div className="flex flex-wrap gap-2">
              {presets.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => updateComparison(p.a, p.b)}
                  className="px-3 py-1.5 rounded-xl bg-white border border-[#DCD6CC] hover:border-brand-orange hover:text-brand-orange text-xs font-semibold text-slate-800 transition-all shadow-2xs"
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Selectors Bar */}
      <div className="bg-white rounded-3xl p-6 border border-[#E2DDD5] shadow-sm mb-10">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
          Select Treks to Compare
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Trek 1</label>
            <select
              value={selectedA}
              onChange={(e) => updateComparison(e.target.value, selectedB, selectedC)}
              className="w-full bg-[#FAF9F6] border border-[#DCD6CC] rounded-xl px-3 py-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-brand-orange"
            >
              {TREKS.map(t => (
                <option key={t.id} value={t.id}>{t.name} ({t.altitude})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Trek 2</label>
            <select
              value={selectedB}
              onChange={(e) => updateComparison(selectedA, e.target.value, selectedC)}
              className="w-full bg-[#FAF9F6] border border-[#DCD6CC] rounded-xl px-3 py-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-brand-orange"
            >
              {TREKS.map(t => (
                <option key={t.id} value={t.id}>{t.name} ({t.altitude})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Trek 3 (Optional)</label>
            <select
              value={selectedC}
              onChange={(e) => updateComparison(selectedA, selectedB, e.target.value)}
              className="w-full bg-[#FAF9F6] border border-[#DCD6CC] rounded-xl px-3 py-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-brand-orange"
            >
              <option value="">None (Compare 2 Treks)</option>
              {TREKS.filter(t => t.id !== selectedA && t.id !== selectedB).map(t => (
                <option key={t.id} value={t.id}>{t.name} ({t.altitude})</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Comparison Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {comparedTreks.map((t) => (
          <div key={t.id} className="bg-white rounded-3xl border border-[#E2DDD5] shadow-md overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={t.image}
                  alt={`${t.name} trekking comparison in Uttarakhand`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md bg-slate-950/80 text-white">
                  {t.difficulty}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-brand-orange text-white">
                  {t.altitude}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <Link to={`/treks/${t.id}`}>
                    <h3 className="font-display font-bold text-xl text-slate-900 hover:text-brand-orange transition-colors">
                      {t.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-brand-orange font-semibold mt-0.5">{t.tagline}</p>
                </div>

                <div className="space-y-3 text-xs border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Duration:</span>
                    <span className="font-bold text-slate-900">{t.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Trail Distance:</span>
                    <span className="font-bold text-slate-900">{t.trailLength}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Base Camp:</span>
                    <span className="font-bold text-slate-900">{t.baseCamp}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Region:</span>
                    <span className="font-bold text-slate-900">{t.region} Himalayas</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Distance from Dehradun:</span>
                    <span className="font-bold text-slate-900">{t.distanceFromDehradunKm} km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Best Season:</span>
                    <span className="font-bold text-slate-900">{t.bestSeason.split('&')[0]}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Snow Trek:</span>
                    <span className={`font-bold ${t.hasSnow ? 'text-cyan-600' : 'text-slate-500'}`}>
                      {t.hasSnow ? 'Yes (Winter Snow)' : 'No (Green/Rock)'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Beginner Friendly:</span>
                    <span className={`font-bold ${t.isBeginnerFriendly ? 'text-emerald-600' : 'text-amber-600'}`}>
                      {t.isBeginnerFriendly ? 'Yes' : 'Moderate Experience'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Starting Price:</span>
                    <span className="font-bold text-base text-brand-orange">{t.startingPrice}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-2">
              <Link
                to={`/treks/${t.id}`}
                className="w-full py-2.5 rounded-xl orange-gradient-btn text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:brightness-110 transition-all"
              >
                <span>View Full Itinerary</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={getTrekWhatsAppUrl(t.name)}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs hover:brightness-105 transition-all"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* In-Depth Comparative Attribute Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-md overflow-x-auto mb-16">
        <h2 className="text-2xl font-bold font-display text-slate-900 mb-6">
          Detailed Comparison Matrix
        </h2>
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-[#E2DDD5]">
              <th className="py-3 px-4 font-bold text-slate-500 uppercase tracking-wider w-1/4">Parameters</th>
              {comparedTreks.map(t => (
                <th key={t.id} className="py-3 px-4 font-display font-extrabold text-base text-slate-900">
                  {t.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="py-3.5 px-4 font-bold text-slate-700 bg-[#FAF9F6]">Trek Type / Character</td>
              {comparedTreks.map(t => (
                <td key={t.id} className="py-3.5 px-4 text-slate-800">{t.tagline}</td>
              ))}
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-bold text-slate-700 bg-[#FAF9F6]">Max Summit / Pass Altitude</td>
              {comparedTreks.map(t => (
                <td key={t.id} className="py-3.5 px-4 font-bold text-brand-orange">{t.altitude}</td>
              ))}
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-bold text-slate-700 bg-[#FAF9F6]">Difficulty Grade</td>
              {comparedTreks.map(t => (
                <td key={t.id} className="py-3.5 px-4">
                  <span className={`px-2.5 py-1 rounded-full font-bold ${
                    t.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-800' :
                    t.difficulty === 'Moderate' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {t.difficulty}
                  </span>
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-bold text-slate-700 bg-[#FAF9F6]">Fitness Requirement</td>
              {comparedTreks.map(t => (
                <td key={t.id} className="py-3.5 px-4 text-slate-700">{t.fitnessRequirement || 'Moderate cardio fitness.'}</td>
              ))}
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-bold text-slate-700 bg-[#FAF9F6]">Beginner Suitability</td>
              {comparedTreks.map(t => (
                <td key={t.id} className="py-3.5 px-4 text-slate-700">{t.beginnerSuitability}</td>
              ))}
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-bold text-slate-700 bg-[#FAF9F6]">Snow Availability</td>
              {comparedTreks.map(t => (
                <td key={t.id} className="py-3.5 px-4 text-slate-700">{t.snowAvailability}</td>
              ))}
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-bold text-slate-700 bg-[#FAF9F6]">How to Reach (Road Route)</td>
              {comparedTreks.map(t => (
                <td key={t.id} className="py-3.5 px-4 text-slate-700">{t.howToReach?.distanceFromDehradun}</td>
              ))}
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-bold text-slate-700 bg-[#FAF9F6]">Key Highlights</td>
              {comparedTreks.map(t => (
                <td key={t.id} className="py-3.5 px-4 text-slate-700 space-y-1">
                  {t.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-bold text-slate-700 bg-[#FAF9F6]">Approximate Cost</td>
              {comparedTreks.map(t => (
                <td key={t.id} className="py-3.5 px-4 font-bold text-slate-900">{t.startingPrice} / trekker</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Contextual CTA Banner */}
      <div className="rounded-3xl p-8 bg-[#000044] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold font-display">
            Still Not Sure Which Trek Suits Your Group?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Talk directly with our native certified mountain leaders. We assess your fitness level, vacation dates, and scenic preferences to recommend the perfect trail.
          </p>
        </div>
        <a
          href="https://wa.me/917817955737?text=Hi%20UKYatra%2C%20I%20need%20help%20choosing%20the%20right%20Uttarakhand%20trek%20for%20my%20group."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-xl font-bold text-xs shadow-lg hover:brightness-105 shrink-0"
        >
          <WhatsAppIcon className="w-4 h-4 fill-current" />
          <span>Consult with UK Yatra Trek Leader</span>
        </a>
      </div>
    </div>
  );
};

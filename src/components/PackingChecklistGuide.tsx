import React, { useState } from 'react';
import { 
  CheckSquare, 
  Square, 
  RotateCcw, 
  Share2, 
  Copy, 
  Check, 
  AlertTriangle, 
  ShieldAlert, 
  HeartPulse, 
  Activity, 
  Droplets, 
  Wind, 
  FileText, 
  Sparkles,
  Luggage,
  Layers,
  Compass
} from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';
import { WhatsAppIcon } from './SocialIcons';

interface ChecklistItem {
  id: string;
  name: string;
  desc: string;
  category: 'clothing' | 'gear' | 'medical' | 'docs';
  isCrucial?: boolean;
}

const CHECKLIST_DATA: ChecklistItem[] = [
  // 1. Clothing & Thermals
  {
    id: 'c-1',
    name: 'Thermal Innerwear (Top & Bottom)',
    desc: 'At least 2 pairs of merino wool or synthetic thermal base layers for night warmth.',
    category: 'clothing',
    isCrucial: true
  },
  {
    id: 'c-2',
    name: 'Windproof & Waterproof Down Jacket',
    desc: 'Fleece-lined winter jacket capable of withstanding temperatures down to -5°C.',
    category: 'clothing',
    isCrucial: true
  },
  {
    id: 'c-3',
    name: 'Quick-Dry Trekking Pants',
    desc: '2-3 breathable, non-denim trekking trousers (denim absorbs moisture and freezes).',
    category: 'clothing'
  },
  {
    id: 'c-4',
    name: 'Full Waterproof Rain Poncho / Raincoat',
    desc: 'Himalayan mountain weather is unpredictable; sudden afternoon showers are common.',
    category: 'clothing',
    isCrucial: true
  },
  {
    id: 'c-5',
    name: 'Woollen Beanie & UV Sun Hat',
    desc: 'Woollen cap covering ears for windy summits + wide brim hat for intense day sun.',
    category: 'clothing'
  },
  {
    id: 'c-6',
    name: 'Fleece / Waterproof Gloves',
    desc: 'One pair of light fleece gloves and one pair of windproof/waterproof ski gloves.',
    category: 'clothing'
  },

  // 2. Footwear & Trail Gear
  {
    id: 'g-1',
    name: 'High-Ankle Trekking Boots with Deep Lugs',
    desc: 'Waterproof trekking boots with sturdy ankle support (broken in before travel).',
    category: 'gear',
    isCrucial: true
  },
  {
    id: 'g-2',
    name: 'Trekking Pole (Adjustable)',
    desc: 'Significantly reduces knee strain by 30% during steep descents like Kedarnath & Tungnath.',
    category: 'gear',
    isCrucial: true
  },
  {
    id: 'g-3',
    name: '40L – 50L Rucksack with Rain Cover',
    desc: 'Ergonomic backpack with padded hip strap to comfortably carry daily essentials.',
    category: 'gear'
  },
  {
    id: 'g-4',
    name: 'UV400 Polarized Sunglasses',
    desc: 'Protects eyes from snow blindness and harsh high-altitude Himalayan ultraviolet rays.',
    category: 'gear'
  },
  {
    id: 'g-5',
    name: 'LED Headlamp with Spare Batteries',
    desc: 'Essential for early 4:00 AM summit attacks or night power blackouts in mountain stays.',
    category: 'gear'
  },
  {
    id: 'g-6',
    name: 'Insulated Thermos Water Bottle (1 Litre)',
    desc: 'Keeps drinking water lukewarm in freezing night temperatures.',
    category: 'gear'
  },

  // 3. Medical & High Altitude (AMS) Kit
  {
    id: 'm-1',
    name: 'Diamox (Acetazolamide) — Doctor Consulted',
    desc: 'Helps body adjust to thin oxygen above 2,500m (consult your physician before taking).',
    category: 'medical',
    isCrucial: true
  },
  {
    id: 'm-2',
    name: 'Camphor (Karpuram) in Cloth Pouch',
    desc: 'Traditional Himalayan trekker remedy: inhaling camphor eases oxygen absorption.',
    category: 'medical',
    isCrucial: true
  },
  {
    id: 'm-3',
    name: 'ORS / Electral Sachets & Glucose',
    desc: 'Critical for continuous electrolyte hydration against altitude dehydration.',
    category: 'medical',
    isCrucial: true
  },
  {
    id: 'm-4',
    name: 'Pain Relief Spray (Volini / Moov) & Crepe Bandage',
    desc: 'Quick relief for calf muscle cramps, sprains, and knee fatigue.',
    category: 'medical'
  },
  {
    id: 'm-5',
    name: 'Portable Finger Pulse Oximeter',
    desc: 'Monitor blood oxygen (SpO2) at Kedarnath, Tungnath, and Hemkund.',
    category: 'medical'
  },
  {
    id: 'm-6',
    name: 'Motion Sickness / Altitude Nausea Tablets (Avomine/Ondem)',
    desc: 'Crucial for winding hill roads with 500+ mountain hairpin bends.',
    category: 'medical'
  },

  // 4. Documents & Digital Essentials
  {
    id: 'd-1',
    name: 'Official Yatra Biometric Registration QR Slip',
    desc: 'Mandatory govt registration document checked at all yatra entry checkpoints.',
    category: 'docs',
    isCrucial: true
  },
  {
    id: 'd-2',
    name: 'Original Aadhaar Card / Passport + 4 Photos',
    desc: 'Required for hotel check-ins, helicopter boarding, and trek permits.',
    category: 'docs',
    isCrucial: true
  },
  {
    id: 'd-3',
    name: 'Heavy Duty Power Bank (20,000 mAh)',
    desc: 'Cold temperatures drain phone batteries 3x faster; power cuts are frequent in hills.',
    category: 'docs',
    isCrucial: true
  },
  {
    id: 'd-4',
    name: 'Physical Emergency Cash (₹5,000 – ₹10,000)',
    desc: 'Hill ATMs frequently run out of cash and UPI internet signal often drops above 2,500m.',
    category: 'docs',
    isCrucial: true
  }
];

export const PackingChecklistGuide: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'clothing' | 'gear' | 'medical' | 'docs'>('all');
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({
    'c-1': true,
    'c-2': true,
    'd-1': true,
    'd-2': true
  });
  const [copied, setCopied] = useState(false);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleReset = () => {
    setCheckedIds({});
  };

  const handleCheckAll = () => {
    const allChecked: Record<string, boolean> = {};
    CHECKLIST_DATA.forEach((item) => {
      allChecked[item.id] = true;
    });
    setCheckedIds(allChecked);
  };

  const filteredItems = activeCategory === 'all' 
    ? CHECKLIST_DATA 
    : CHECKLIST_DATA.filter((item) => item.category === activeCategory);

  const totalCount = CHECKLIST_DATA.length;
  const packedCount = Object.values(checkedIds).filter(Boolean).length;
  const progressPercent = Math.round((packedCount / totalCount) * 100);

  const copyToClipboard = () => {
    const text = CHECKLIST_DATA.map((item) => {
      const isDone = checkedIds[item.id] ? '✅' : '⬜';
      return `${isDone} ${item.name} (${item.desc})`;
    }).join('\n');

    navigator.clipboard.writeText(`UKYatra Himalayan Packing Checklist (${packedCount}/${totalCount} Packed):\n\n${text}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="packing-guide" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
            <Luggage className="w-3.5 h-3.5" />
            <span>Mountain Readiness Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900">
            Himalayan Packing Checklist <span className="text-brand-orange">& Altitude Guide</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl font-medium">
            Interactive, doctor-reviewed packing checklist and Acute Mountain Sickness (AMS) safety guide to keep your family safe above 3,000 metres.
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <button
            onClick={copyToClipboard}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-[#DCD6CC] text-xs font-semibold shadow-xs transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Checklist'}</span>
          </button>

          <a
            href={getWhatsAppUrl(`Hi UKYatra, I'd like your complete PDF Mountain Packing List & Medical Guide.`)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 border border-emerald-500/30 text-xs font-semibold transition-all"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600" />
            <span>Get PDF on WhatsApp</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Interactive Checklist (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD5] shadow-xl">
          {/* Packing Progress Bar */}
          <div className="mb-6 p-4 rounded-2xl bg-[#F5F3EF] border border-[#E2DDD5]">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-2">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-orange" />
                <span>Your Himalayan Packing Status</span>
              </span>
              <span className="text-brand-orange">
                {packedCount} of {totalCount} Packed ({progressPercent}%)
              </span>
            </div>
            {/* Bar */}
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-brand-orange to-amber-500 transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex justify-between items-center mt-2 text-[11px] text-slate-500">
              <span>{progressPercent === 100 ? '🎉 Fully packed and trail ready!' : 'Check items as you pack into your rucksack.'}</span>
              <div className="flex gap-2">
                <button 
                  onClick={handleCheckAll} 
                  className="text-brand-orange hover:underline font-semibold"
                >
                  Check All
                </button>
                <span>•</span>
                <button 
                  onClick={handleReset} 
                  className="text-slate-500 hover:text-slate-800 hover:underline"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { id: 'all', label: 'All Items', icon: Luggage },
              { id: 'clothing', label: 'Clothing & Thermals', icon: Layers },
              { id: 'gear', label: 'Footwear & Trail Gear', icon: Compass },
              { id: 'medical', label: 'Medical & AMS Kit', icon: HeartPulse },
              { id: 'docs', label: 'Documents & Cash', icon: FileText }
            ].map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-brand-orange text-white shadow-sm shadow-brand-orange/30'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Checklist Items List */}
          <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1">
            {filteredItems.map((item) => {
              const isChecked = !!checkedIds[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                    isChecked
                      ? 'bg-emerald-50/60 border-emerald-300 text-slate-800'
                      : 'bg-[#FAF8F5] hover:bg-white border-[#E2DDD5] text-slate-700'
                  }`}
                >
                  <button 
                    type="button" 
                    className="mt-0.5 text-emerald-600 focus:outline-none shrink-0"
                  >
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400" />
                    )}
                  </button>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs sm:text-sm font-bold ${isChecked ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                        {item.name}
                      </span>
                      {item.isCrucial && (
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-rose-100 text-rose-700 border border-rose-200 shrink-0">
                          Mandatory
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Altitude Sickness (AMS) Medical Guide (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* AMS Advisory Box */}
          <div className="bg-brand-card text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Doctor’s High Altitude Advisory</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white mb-2">
              Understanding Acute Mountain Sickness (AMS)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              Above 2,500m (8,200 ft), atmospheric air pressure drops and oxygen density is reduced. Most Kedarnath (3,584m), Tungnath (3,680m), and Hemkund (4,329m) visitors ascend quickly from plain cities, making acclimatization essential.
            </p>

            {/* 3 Golden Rules */}
            <div className="space-y-3 mb-6 text-xs">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <Droplets className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Rule #1: Drink 3 to 4 Litres of Water Daily</div>
                  <div className="text-slate-300 text-[11px] mt-0.5">High altitude breathing causes rapid dehydration. Sip lukewarm water with electrolytes continuously.</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <Activity className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Rule #2: Never Rush the Uphill Trek</div>
                  <div className="text-slate-300 text-[11px] mt-0.5">Walk at a conversational pace. If you can’t speak full sentences while walking, slow down immediately.</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Rule #3: Descend on Severe Symptoms</div>
                  <div className="text-slate-300 text-[11px] mt-0.5">The only permanent cure for severe mountain sickness is immediate descent of 500–1,000 metres.</div>
                </div>
              </div>
            </div>

            {/* Symptoms Warning Checklist */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10">
              <div className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Symptoms Comparison</span>
                <span className="text-[10px] text-slate-400">Know the difference</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/20">
                  <div className="font-bold text-amber-400 mb-1">Mild Altitude Fatigue</div>
                  <ul className="text-[11px] text-slate-300 space-y-1 list-disc pl-3">
                    <li>Mild headache</li>
                    <li>Slight dizziness</li>
                    <li>Reduced appetite</li>
                    <li>Rest & hydrate</li>
                  </ul>
                </div>

                <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-500/20">
                  <div className="font-bold text-rose-400 mb-1">Severe AMS (Danger)</div>
                  <ul className="text-[11px] text-slate-300 space-y-1 list-disc pl-3">
                    <li>Persistent vomiting</li>
                    <li>Loss of balance / ataxia</li>
                    <li>Severe breathlessness at rest</li>
                    <li>Immediate descent required</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* UK Yatra 24/7 Safety Assurance */}
          <div className="p-5 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-emerald-800">
              <HeartPulse className="w-4 h-4 text-emerald-600" />
              <span>UK Yatra Medical Standby Protocol</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
              Every UK Yatra group is equipped with portable pulse oximeters and oxygen cylinder backups. Our local mountain trip coordinators maintain direct radio contact with GMVN medical posts in Kedarnath and Badrinath.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

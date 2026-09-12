import React, { useState } from 'react';
import { 
  MapPin, 
  Mountain, 
  Clock, 
  Navigation, 
  ChevronRight, 
  Sparkles, 
  AlertCircle, 
  Bed, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';
import { WhatsAppIcon } from './SocialIcons';

interface RouteStop {
  id: string;
  name: string;
  altitude: string;
  altitudeMeters: number;
  driveFromPrev?: string;
  stay: string;
  highlight: string;
  tip: string;
  isKeyTemple?: boolean;
  isSummit?: boolean;
}

interface Circuit {
  id: string;
  name: string;
  shortName: string;
  duration: string;
  idealFor: string;
  maxAltitude: string;
  totalDistance: string;
  difficulty: 'Easy-Moderate' | 'Moderate' | 'Challenging';
  description: string;
  stops: RouteStop[];
}

const CIRCUITS: Circuit[] = [
  {
    id: 'char-dham',
    name: 'Sacred Char Dham Circuit',
    shortName: 'Full Char Dham',
    duration: '10 Days / 9 Nights',
    idealFor: 'Complete Spiritual Pilgrimage & Himalayan Vistas',
    maxAltitude: '3,584 m (Kedarnath)',
    totalDistance: 'Approx. 1,650 km circuit',
    difficulty: 'Moderate',
    description: 'The ancient clockwise pradakshina covering Yamunotri, Gangotri, Kedarnath, and Badrinath across Garhwal Himalayas.',
    stops: [
      {
        id: 'cd-1',
        name: 'Haridwar / Rishikesh',
        altitude: '314 m',
        altitudeMeters: 314,
        stay: 'Haridwar / Rishikesh Hotel',
        highlight: 'Ganga Aarti at Har Ki Pauri / Triveni Ghat & Tour briefing',
        tip: 'Collect biometric yatra card & finish vehicle check early morning.'
      },
      {
        id: 'cd-2',
        name: 'Barkot / Janki Chatti',
        altitude: '2,118 m',
        altitudeMeters: 2118,
        driveFromPrev: '215 km (7-8 hrs)',
        stay: 'Barkot Riverside Camp/Hotel',
        highlight: 'Scenic drive along Yamuna valley with views of Bandarpoonch peak',
        tip: 'Rest early; tomorrow involves a 6 km uphill trek to Yamunotri.'
      },
      {
        id: 'cd-3',
        name: 'Yamunotri Dham',
        altitude: '3,291 m',
        altitudeMeters: 3291,
        driveFromPrev: '45 km drive + 6 km trek',
        stay: 'Barkot',
        highlight: 'Holy dip in Surya Kund thermal spring & Divya Shila pooja',
        tip: 'Ponies and palkis are available at Janki Chatti if needed.',
        isKeyTemple: true
      },
      {
        id: 'cd-4',
        name: 'Uttarkashi',
        altitude: '1,158 m',
        altitudeMeters: 1158,
        driveFromPrev: '100 km (4-5 hrs)',
        stay: 'Uttarkashi Heritage Lodge',
        highlight: 'Historic Kashi Vishwanath Temple with giant divine trident (Trishul)',
        tip: 'Pleasant temperature, ideal for recharge before Gangotri.'
      },
      {
        id: 'cd-5',
        name: 'Gangotri Dham',
        altitude: '3,100 m',
        altitudeMeters: 3100,
        driveFromPrev: '100 km (3-4 hrs each way)',
        stay: 'Uttarkashi / Harsil Valley',
        highlight: 'Origin shrine of holy Ganga, Bhagirath Shila & cedar forests of Harsil',
        tip: 'Taste famous Harsil apples and visit submerged Shivling in river waters.',
        isKeyTemple: true
      },
      {
        id: 'cd-6',
        name: 'Guptkashi / Sonprayag',
        altitude: '1,319 m',
        altitudeMeters: 1319,
        driveFromPrev: '220 km (8-9 hrs)',
        stay: 'Guptkashi / Phata Deluxe Cottage',
        highlight: 'Ancient Vishwanath Temple & Mandakini River valley',
        tip: 'Helicopter shuttles for Kedarnath operate from Phata/Sersi nearby.'
      },
      {
        id: 'cd-7',
        name: 'Kedarnath Dham',
        altitude: '3,584 m',
        altitudeMeters: 3584,
        driveFromPrev: '30 km drive + 16 km trek',
        stay: 'GMVN / Temple Guesthouse at Kedarnath',
        highlight: '11th-century Jyotirlinga surrounded by snowbound Kedardome peaks',
        tip: 'Temperatures drop below zero at night; heavy thermals mandatory.',
        isKeyTemple: true
      },
      {
        id: 'cd-8',
        name: 'Pipalkoti / Joshimath',
        altitude: '1,890 m',
        altitudeMeters: 1890,
        driveFromPrev: '16 km trek down + 140 km drive',
        stay: 'Pipalkoti / Joshimath Hotel',
        highlight: 'Descent from Kedarnath followed by gateway to Nanda Devi sanctuary',
        tip: 'Scenic stopover at Karnaprayag (confluence of Alaknanda & Pindar rivers).'
      },
      {
        id: 'cd-9',
        name: 'Badrinath Dham',
        altitude: '3,300 m',
        altitudeMeters: 3300,
        driveFromPrev: '75 km (3 hrs)',
        stay: 'Badrinath / Joshimath Hotel',
        highlight: 'Lord Badri Vishal darshan, Tapt Kund hot sulphur springs & Mana village',
        tip: 'Visit Mana (India’s first village), Bhim Pul, and Saraswati river origin.',
        isKeyTemple: true
      },
      {
        id: 'cd-10',
        name: 'Rishikesh Departure',
        altitude: '372 m',
        altitudeMeters: 372,
        driveFromPrev: '290 km (8-9 hrs)',
        stay: 'Home Journey / Rishikesh Resort',
        highlight: 'Final blessings at Devprayag (Alaknanda meets Bhagirathi to form Ganga)',
        tip: 'Trip concludes with lifelong Himalayan memories.'
      }
    ]
  },
  {
    id: 'do-dham',
    name: 'Kedarnath & Badrinath Express',
    shortName: 'Do Dham Circuit',
    duration: '6 Days / 5 Nights',
    idealFor: 'Time-efficient pilgrims seeking the two most sacred Himalayan Dhams',
    maxAltitude: '3,584 m (Kedarnath)',
    totalDistance: 'Approx. 850 km circuit',
    difficulty: 'Moderate',
    description: 'The most popular express circuit covering the twin jewels of Shiva and Vishnu in Uttarakhand.',
    stops: [
      {
        id: 'dd-1',
        name: 'Haridwar / Rishikesh',
        altitude: '314 m',
        altitudeMeters: 314,
        stay: 'Rishikesh Hotel',
        highlight: 'Early morning pickup and journey up the Mandakini gorge',
        tip: 'Depart by 6:00 AM to beat mountain road bottlenecks.'
      },
      {
        id: 'dd-2',
        name: 'Guptkashi / Phata',
        altitude: '1,319 m',
        altitudeMeters: 1319,
        driveFromPrev: '210 km (7 hrs)',
        stay: 'Phata / Sitapur Lodge',
        highlight: 'Base camp for Kedarnath trek or next-morning helicopter shuttle',
        tip: 'Confirm your biometric QR token and helicopter boarding slot.'
      },
      {
        id: 'dd-3',
        name: 'Kedarnath Dham',
        altitude: '3,584 m',
        altitudeMeters: 3584,
        driveFromPrev: '16 km trek / 8 min heli',
        stay: 'Kedarnath Base Camp Stay',
        highlight: 'Evening Aarti with glowing oil lamps against glacial peak silhouettes',
        tip: 'Keep your pulse oximeter handy; walk slowly at your natural pace.',
        isKeyTemple: true
      },
      {
        id: 'dd-4',
        name: 'Pipalkoti via Chopta',
        altitude: '1,340 m',
        altitudeMeters: 1340,
        driveFromPrev: '16 km trek down + 130 km drive',
        stay: 'Pipalkoti Riverside Stay',
        highlight: 'Drive through mini-Switzerland Chopta and lush rhododendron forests',
        tip: 'Comfortable lower altitude night stay to recharge fully.'
      },
      {
        id: 'dd-5',
        name: 'Badrinath Dham',
        altitude: '3,300 m',
        altitudeMeters: 3300,
        driveFromPrev: '75 km (3 hrs)',
        stay: 'Badrinath Hotel',
        highlight: 'Golden temple facade of Lord Vishnu & holy dip in Tapt Kund',
        tip: 'Attend evening Swarna Aarti for a magical spiritual atmosphere.',
        isKeyTemple: true
      },
      {
        id: 'dd-6',
        name: 'Return via Devprayag',
        altitude: '372 m',
        altitudeMeters: 372,
        driveFromPrev: '295 km (9 hrs)',
        stay: 'Rishikesh / Train Departure',
        highlight: 'Spectacular confluence views at Rudraprayag and Devprayag',
        tip: 'Safe return transfer to Dehradun Airport or Haridwar Railway Station.'
      }
    ]
  },
  {
    id: 'chopta-tungnath',
    name: 'Chopta Tungnath & Chandrashila',
    shortName: 'Chopta Alpine Summit',
    duration: '4 Days / 3 Nights',
    idealFor: 'Weekend Trekkers, Photography & Highest Shiva Temple in the World',
    maxAltitude: '4,000 m (Chandrashila Peak)',
    totalDistance: 'Approx. 450 km drive + 12 km trek',
    difficulty: 'Easy-Moderate',
    description: 'Trek to the highest Shiva temple on earth (Tungnath, 3,680m) followed by 360° panoramic Himalayan summit views from Chandrashila.',
    stops: [
      {
        id: 'ct-1',
        name: 'Rishikesh to Sari Village',
        altitude: '2,000 m',
        altitudeMeters: 2000,
        driveFromPrev: '190 km (6 hrs)',
        stay: 'Sari Homestay / Camps',
        highlight: 'Picturesque terraced fields of Sari village and gateway to Deoriatal',
        tip: 'Acclimatize with a short evening stroll through walnut orchards.'
      },
      {
        id: 'ct-2',
        name: 'Deoriatal Lake',
        altitude: '2,438 m',
        altitudeMeters: 2438,
        driveFromPrev: '2.5 km scenic uphill walk',
        stay: 'Deoriatal Dome Tents',
        highlight: 'Glass-like lake reflection of Chaukhamba peak at golden hour',
        tip: 'Incredible sunrise photography spot overlooking Kedarnath range.'
      },
      {
        id: 'ct-3',
        name: 'Chopta Basecamp',
        altitude: '2,680 m',
        altitudeMeters: 2680,
        driveFromPrev: '22 km drive',
        stay: 'Chopta Alpine Meadows Camp',
        highlight: 'Expansive Bugyal meadows known as the Mini Switzerland of India',
        tip: 'Pre-trek briefing and gear inspection before summit morning.'
      },
      {
        id: 'ct-4',
        name: 'Tungnath Temple',
        altitude: '3,680 m',
        altitudeMeters: 3680,
        driveFromPrev: '3.5 km paved switchback trail',
        stay: 'Chopta Camps',
        highlight: 'Highest Panch Kedar temple with centuries of mythical history',
        tip: 'Paved trail with railings; take gentle steps and sip water often.',
        isKeyTemple: true
      },
      {
        id: 'ct-5',
        name: 'Chandrashila Summit',
        altitude: '4,000 m',
        altitudeMeters: 4000,
        driveFromPrev: '1.5 km summit ridge walk',
        stay: 'Chopta Camps',
        highlight: 'Breathtaking 360° vista of Nanda Devi, Trishul, Kedar, and Chaukhamba',
        tip: 'Summit at early morning for crystal-clear Himalayan horizons.',
        isSummit: true
      },
      {
        id: 'ct-6',
        name: 'Return to Rishikesh',
        altitude: '372 m',
        altitudeMeters: 372,
        driveFromPrev: '200 km (6.5 hrs)',
        stay: 'Rishikesh Departure',
        highlight: 'Scenic drive following the roaring Mandakini & Alaknanda rivers',
        tip: 'Optional evening river rafting or Ganga aarti before departure.'
      }
    ]
  },
  {
    id: 'valley-of-flowers',
    name: 'Valley of Flowers & Hemkund',
    shortName: 'Valley of Flowers',
    duration: '6 Days / 5 Nights',
    idealFor: 'Botanists, Nature Lovers, Alpine Trekkers & Spiritual Pilgrims',
    maxAltitude: '4,329 m (Hemkund Sahib)',
    totalDistance: 'Approx. 580 km drive + 38 km trek',
    difficulty: 'Moderate',
    description: 'UNESCO World Heritage botanical paradise blooming with over 500 wildflower species, paired with the high-altitude glacial Hemkund lake.',
    stops: [
      {
        id: 'vof-1',
        name: 'Rishikesh to Joshimath',
        altitude: '1,890 m',
        altitudeMeters: 1890,
        driveFromPrev: '250 km (8 hrs)',
        stay: 'Joshimath Hotel',
        highlight: 'Panch Prayag confluences on the iconic Badrinath highway',
        tip: 'Good market to buy trekking poles, rain covers, and dry fruits.'
      },
      {
        id: 'vof-2',
        name: 'Govindghat to Ghangaria',
        altitude: '3,048 m',
        altitudeMeters: 3048,
        driveFromPrev: '20 km drive + 10 km trek',
        stay: 'Ghangaria Mountain Lodge',
        highlight: 'Trek along Pushpawati river valley with gushing waterfalls',
        tip: 'Helicopter shuttle available between Govindghat & Ghangaria if needed.'
      },
      {
        id: 'vof-3',
        name: 'Valley of Flowers',
        altitude: '3,658 m',
        altitudeMeters: 3658,
        driveFromPrev: '4 km each way into valley',
        stay: 'Ghangaria Lodge',
        highlight: 'UNESCO sanctuary carpets of Blue Poppy, Brahma Kamal, and orchids',
        tip: 'No overnight camping allowed inside the National Park; return by 5 PM.',
        isSummit: true
      },
      {
        id: 'vof-4',
        name: 'Hemkund Sahib',
        altitude: '4,329 m',
        altitudeMeters: 4329,
        driveFromPrev: '6 km steep uphill trek',
        stay: 'Ghangaria Lodge',
        highlight: 'Pristine glacial lake surrounded by 7 snow peaks & holy Gurudwara',
        tip: 'Highest point of the trek; sip hot tea & langar at the Gurudwara.',
        isKeyTemple: true
      },
      {
        id: 'vof-5',
        name: 'Return via Badrinath',
        altitude: '3,300 m',
        altitudeMeters: 3300,
        driveFromPrev: '10 km trek down + 35 km drive',
        stay: 'Badrinath / Joshimath',
        highlight: 'Optional afternoon darshan at Badrinath Temple',
        tip: 'Relax your muscles in the natural thermal springs of Tapt Kund.'
      },
      {
        id: 'vof-6',
        name: 'Joshimath to Rishikesh',
        altitude: '372 m',
        altitudeMeters: 372,
        driveFromPrev: '250 km (8 hrs)',
        stay: 'Rishikesh Departure',
        highlight: 'Descent through fragrant pine forests and sacred riverside valleys',
        tip: 'Celebratory Himalayan dinner in Rishikesh.'
      }
    ]
  }
];

export const RouteCircuitMap: React.FC = () => {
  const [activeCircuitId, setActiveCircuitId] = useState('char-dham');
  const [selectedStopIndex, setSelectedStopIndex] = useState(0);

  const activeCircuit = CIRCUITS.find((c) => c.id === activeCircuitId) || CIRCUITS[0];
  const selectedStop = activeCircuit.stops[selectedStopIndex] || activeCircuit.stops[0];

  const handleCircuitChange = (id: string) => {
    setActiveCircuitId(id);
    setSelectedStopIndex(0);
  };

  return (
    <section id="route-circuit-map" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
            <Navigation className="w-3.5 h-3.5" />
            <span>Interactive Route Visualizer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900">
            Himalayan Circuit <span className="text-brand-orange">& Elevation Map</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl font-medium">
            Explore day-by-day route progressions, elevation changes, night halt checkpoints, and essential mountain tips for Uttarakhand’s celebrated circuits.
          </p>
        </div>

        {/* Quick WhatsApp assistance badge */}
        <div className="mt-4 md:mt-0">
          <a
            href={getWhatsAppUrl(`Hi UKYatra, I'd like detailed route maps & custom itinerary for ${activeCircuit.name}.`)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 border border-emerald-500/30 transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 fill-emerald-600" />
            <span>Request Custom Route Plan</span>
          </a>
        </div>
      </div>

      {/* Circuit Selector Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {CIRCUITS.map((circuit) => {
          const isActive = circuit.id === activeCircuitId;
          return (
            <button
              key={circuit.id}
              onClick={() => handleCircuitChange(circuit.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30 scale-[1.02]'
                  : 'bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 border border-[#DCD6CC] shadow-xs'
              }`}
            >
              <Mountain className={`w-4 h-4 ${isActive ? 'text-white' : 'text-brand-orange'}`} />
              <span>{circuit.shortName}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                isActive ? 'bg-black/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {circuit.duration.split('/')[0].trim()}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Map & Waypoint Board */}
      <div className="bg-brand-card rounded-3xl border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl text-white">
        {/* Circuit Summary Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-8 mb-8 border-b border-white/10">
          <div>
            <div className="text-[11px] font-bold text-brand-orange uppercase tracking-wider">Circuit Name</div>
            <div className="text-lg sm:text-xl font-display font-extrabold text-white mt-0.5">{activeCircuit.name}</div>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">{activeCircuit.description}</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Duration</span>
            </div>
            <div className="text-sm sm:text-base font-bold text-white mt-1">{activeCircuit.duration}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">{activeCircuit.totalDistance}</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Max Altitude</span>
            </div>
            <div className="text-sm sm:text-base font-bold text-emerald-400 mt-1">{activeCircuit.maxAltitude}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Difficulty: {activeCircuit.difficulty}</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>Best Suited For</span>
            </div>
            <div className="text-xs font-semibold text-slate-200 mt-1 leading-snug">{activeCircuit.idealFor}</div>
          </div>
        </div>

        {/* Visual Route Timeline / Step Progression */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs uppercase font-bold tracking-wider text-slate-300 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span>Interactive Waypoints (Click Any Stop To Inspect Details)</span>
            </div>
            <div className="text-[11px] text-slate-400">
              Stop {selectedStopIndex + 1} of {activeCircuit.stops.length}
            </div>
          </div>

          {/* Horizontal Scrollable Waypoint Track */}
          <div className="relative overflow-x-auto pb-4 pt-2 -mx-2 px-2 scrollbar-thin">
            <div className="flex items-center gap-3 min-w-max">
              {activeCircuit.stops.map((stop, idx) => {
                const isSelected = idx === selectedStopIndex;
                return (
                  <React.Fragment key={stop.id}>
                    <button
                      onClick={() => setSelectedStopIndex(idx)}
                      className={`group relative p-3.5 rounded-2xl text-left transition-all border cursor-pointer min-w-[170px] ${
                        isSelected
                          ? 'bg-brand-orange text-white border-brand-orange shadow-lg shadow-brand-orange/40 scale-105'
                          : 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-white/10 hover:border-brand-orange/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                          isSelected ? 'bg-black/20 text-white' : 'bg-white/10 text-brand-orange'
                        }`}>
                          Stop #{idx + 1}
                        </span>
                        {stop.isKeyTemple && (
                          <span className="text-xs" title="Sacred Holy Shrine">🛕</span>
                        )}
                        {stop.isSummit && (
                          <span className="text-xs" title="Alpine Mountain Summit">🏔️</span>
                        )}
                      </div>

                      <div className={`font-display font-bold text-xs sm:text-sm line-clamp-1 ${
                        isSelected ? 'text-white' : 'text-slate-100 group-hover:text-brand-orange'
                      }`}>
                        {stop.name}
                      </div>

                      <div className="flex items-center gap-1 mt-1 text-[11px]">
                        <Mountain className={`w-3 h-3 ${isSelected ? 'text-white/80' : 'text-slate-400'}`} />
                        <span className={isSelected ? 'text-white/90 font-medium' : 'text-slate-400 font-medium'}>
                          {stop.altitude}
                        </span>
                      </div>
                    </button>

                    {idx < activeCircuit.stops.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Stop Details Card */}
        <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-white/15 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange uppercase tracking-wider mb-1">
                <span>Waypoint Details</span>
                <span>•</span>
                <span>Stop #{selectedStopIndex + 1}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white flex items-center gap-3">
                <span>{selectedStop.name}</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-emerald-400 border border-white/10">
                  Elevation: {selectedStop.altitude} ({selectedStop.altitudeMeters}m)
                </span>
              </h3>
            </div>

            {selectedStop.driveFromPrev && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                <Navigation className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Travel Distance: <strong className="text-white">{selectedStop.driveFromPrev}</strong></span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Highlight */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="text-xs font-bold text-brand-orange flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Key Sight & Experience</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {selectedStop.highlight}
              </p>
            </div>

            {/* Night Stay */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <Bed className="w-3.5 h-3.5" />
                <span>Recommended Stay Station</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {selectedStop.stay}
              </p>
            </div>

            {/* Mountain Guide Tip */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Local Mountaineer’s Tip</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {selectedStop.tip}
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Hill-trained drivers with strict adherence to mountain night-driving rules</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={getWhatsAppUrl(`Hi UKYatra, please share the day-wise itinerary and cost for the ${activeCircuit.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="orange-gradient-btn px-6 py-3 rounded-xl font-display font-bold text-xs text-white shadow-lg flex items-center gap-2"
              >
                <span>Book This Circuit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

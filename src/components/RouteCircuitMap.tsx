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
  TrendingUp,
  Map as MapIcon,
  Compass,
  Layers
} from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';
import { WhatsAppIcon } from './SocialIcons';
import { InteractiveHimalayanMap, MapCircuitData, MapStop } from './InteractiveHimalayanMap';

export const CIRCUITS: MapCircuitData[] = [
  {
    id: 'char-dham',
    name: 'Sacred Char Dham Circuit',
    shortName: 'Full Char Dham',
    duration: '10 Days / 9 Nights',
    maxAltitude: '3,584 m (Kedarnath)',
    totalDistance: 'Approx. 1,650 km circuit',
    difficulty: 'Moderate',
    stops: [
      {
        id: 'cd-1',
        name: 'Haridwar / Rishikesh',
        altitude: '314 m',
        altitudeMeters: 314,
        stay: 'Haridwar / Rishikesh Hotel',
        highlight: 'Ganga Aarti at Har Ki Pauri / Triveni Ghat & Tour briefing',
        tip: 'Collect biometric yatra card & finish vehicle check early morning.',
        coordinates: [30.0869, 78.2676]
      },
      {
        id: 'cd-2',
        name: 'Barkot / Janki Chatti',
        altitude: '2,118 m',
        altitudeMeters: 2118,
        driveFromPrev: '215 km (7-8 hrs)',
        stay: 'Barkot Riverside Camp/Hotel',
        highlight: 'Scenic drive along Yamuna valley with views of Bandarpoonch peak',
        tip: 'Rest early; tomorrow involves a 6 km uphill trek to Yamunotri.',
        coordinates: [30.8105, 78.2072]
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
        isKeyTemple: true,
        coordinates: [31.0140, 78.4600]
      },
      {
        id: 'cd-4',
        name: 'Uttarkashi',
        altitude: '1,158 m',
        altitudeMeters: 1158,
        driveFromPrev: '100 km (4-5 hrs)',
        stay: 'Uttarkashi Heritage Lodge',
        highlight: 'Historic Kashi Vishwanath Temple with giant divine trident (Trishul)',
        tip: 'Pleasant temperature, ideal for recharge before Gangotri.',
        coordinates: [30.7268, 78.4354]
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
        isKeyTemple: true,
        coordinates: [30.9947, 78.9398]
      },
      {
        id: 'cd-6',
        name: 'Guptkashi / Sonprayag',
        altitude: '1,319 m',
        altitudeMeters: 1319,
        driveFromPrev: '220 km (8-9 hrs)',
        stay: 'Guptkashi / Phata Deluxe Cottage',
        highlight: 'Ancient Vishwanath Temple & Mandakini River valley',
        tip: 'Helicopter shuttles for Kedarnath operate from Phata/Sersi nearby.',
        coordinates: [30.5228, 79.0768]
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
        isKeyTemple: true,
        coordinates: [30.7352, 79.0669]
      },
      {
        id: 'cd-8',
        name: 'Pipalkoti / Joshimath',
        altitude: '1,890 m',
        altitudeMeters: 1890,
        driveFromPrev: '16 km trek down + 140 km drive',
        stay: 'Pipalkoti / Joshimath Hotel',
        highlight: 'Descent from Kedarnath followed by gateway to Nanda Devi sanctuary',
        tip: 'Scenic stopover at Karnaprayag (confluence of Alaknanda & Pindar rivers).',
        coordinates: [30.4290, 79.3364]
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
        isKeyTemple: true,
        coordinates: [30.7433, 79.4938]
      },
      {
        id: 'cd-10',
        name: 'Rishikesh Departure',
        altitude: '372 m',
        altitudeMeters: 372,
        driveFromPrev: '290 km (8-9 hrs)',
        stay: 'Home Journey / Rishikesh Resort',
        highlight: 'Final blessings at Devprayag (Alaknanda meets Bhagirathi to form Ganga)',
        tip: 'Trip concludes with lifelong Himalayan memories.',
        coordinates: [30.0869, 78.2676]
      }
    ],
    highwayRoute: [
      [30.0869, 78.2676], // Rishikesh
      [30.3475, 78.3970], // Chamba
      [30.5980, 78.3180], // Dharasu
      [30.8105, 78.2072], // Barkot
      [30.9840, 78.4350], // Janki Chatti
      [30.8105, 78.2072], // Barkot
      [30.5980, 78.3180], // Dharasu Bend
      [30.7268, 78.4354], // Uttarkashi
      [30.8160, 78.6180], // Bhatwari
      [31.0367, 78.7378], // Harsil
      [30.9947, 78.9398], // Gangotri Dham
      [31.0367, 78.7378], // Harsil
      [30.7268, 78.4354], // Uttarkashi
      [30.3475, 78.3970], // Chamba
      [30.2227, 78.7844], // Srinagar Garhwal
      [30.2858, 78.9811], // Rudraprayag
      [30.3540, 79.0060], // Tilwara
      [30.5050, 79.0880], // Kund
      [30.5228, 79.0768], // Guptkashi
      [30.5750, 79.0430], // Phata
      [30.6300, 78.9950], // Sonprayag
      [30.6528, 79.0270], // Gaurikund
      [30.5050, 79.0880], // Kund
      [30.2858, 78.9811], // Rudraprayag
      [30.2589, 79.2185], // Karnaprayag
      [30.3300, 79.3240], // Nandaprayag
      [30.4070, 79.3270], // Chamoli
      [30.4290, 79.3364], // Pipalkoti
      [30.5564, 79.5658], // Joshimath
      [30.6253, 79.5959], // Govindghat
      [30.7433, 79.4938], // Badrinath Dham
      [30.7710, 79.4975], // Mana Village
      [30.5564, 79.5658], // Joshimath
      [30.4070, 79.3270], // Chamoli
      [30.2589, 79.2185], // Karnaprayag
      [30.2858, 78.9811], // Rudraprayag
      [30.2227, 78.7844], // Srinagar Garhwal
      [30.1460, 78.5992], // Devprayag
      [30.0869, 78.2676]  // Rishikesh
    ],
    trekSegments: [
      [
        [30.9840, 78.4350],
        [31.0010, 78.4480],
        [31.0140, 78.4600]
      ],
      [
        [30.6528, 79.0270],
        [30.6720, 79.0410],
        [30.6980, 79.0520],
        [30.7180, 79.0610],
        [30.7352, 79.0669]
      ]
    ]
  },
  {
    id: 'do-dham',
    name: 'Kedarnath & Badrinath Express',
    shortName: 'Do Dham Circuit',
    duration: '6 Days / 5 Nights',
    maxAltitude: '3,584 m (Kedarnath)',
    totalDistance: 'Approx. 850 km circuit',
    difficulty: 'Moderate',
    stops: [
      {
        id: 'dd-1',
        name: 'Haridwar / Rishikesh',
        altitude: '314 m',
        altitudeMeters: 314,
        stay: 'Rishikesh Hotel',
        highlight: 'Early morning pickup and journey up the Mandakini gorge',
        tip: 'Depart by 6:00 AM to beat mountain road bottlenecks.',
        coordinates: [30.0869, 78.2676]
      },
      {
        id: 'dd-2',
        name: 'Guptkashi / Phata',
        altitude: '1,319 m',
        altitudeMeters: 1319,
        driveFromPrev: '210 km (7 hrs)',
        stay: 'Phata / Sitapur Lodge',
        highlight: 'Base camp for Kedarnath trek or next-morning helicopter shuttle',
        tip: 'Confirm your biometric QR token and helicopter boarding slot.',
        coordinates: [30.5228, 79.0768]
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
        isKeyTemple: true,
        coordinates: [30.7352, 79.0669]
      },
      {
        id: 'dd-4',
        name: 'Pipalkoti via Chopta',
        altitude: '1,340 m',
        altitudeMeters: 1340,
        driveFromPrev: '16 km trek down + 130 km drive',
        stay: 'Pipalkoti Riverside Stay',
        highlight: 'Drive through mini-Switzerland Chopta and lush rhododendron forests',
        tip: 'Comfortable lower altitude night stay to recharge fully.',
        coordinates: [30.4855, 79.1764]
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
        isKeyTemple: true,
        coordinates: [30.7433, 79.4938]
      },
      {
        id: 'dd-6',
        name: 'Return via Devprayag',
        altitude: '372 m',
        altitudeMeters: 372,
        driveFromPrev: '295 km (9 hrs)',
        stay: 'Rishikesh / Train Departure',
        highlight: 'Spectacular confluence views at Rudraprayag and Devprayag',
        tip: 'Safe return transfer to Dehradun Airport or Haridwar Railway Station.',
        coordinates: [30.1460, 78.5992]
      }
    ],
    highwayRoute: [
      [30.0869, 78.2676], // Rishikesh
      [30.1460, 78.5992], // Devprayag
      [30.2227, 78.7844], // Srinagar
      [30.2858, 78.9811], // Rudraprayag
      [30.5228, 79.0768], // Guptkashi
      [30.5750, 79.0430], // Phata
      [30.6528, 79.0270], // Gaurikund
      [30.5050, 79.0880], // Kund
      [30.5180, 79.0960], // Ukhimath
      [30.4855, 79.1764], // Chopta
      [30.4560, 79.2800], // Mandal
      [30.4070, 79.3270], // Chamoli
      [30.4290, 79.3364], // Pipalkoti
      [30.5564, 79.5658], // Joshimath
      [30.7433, 79.4938], // Badrinath
      [30.4070, 79.3270], // Chamoli
      [30.2858, 78.9811], // Rudraprayag
      [30.1460, 78.5992], // Devprayag
      [30.0869, 78.2676]  // Rishikesh
    ],
    trekSegments: [
      [
        [30.6528, 79.0270],
        [30.6850, 79.0450],
        [30.7150, 79.0600],
        [30.7352, 79.0669]
      ]
    ]
  },
  {
    id: 'chopta-tungnath',
    name: 'Chopta Tungnath & Chandrashila',
    shortName: 'Chopta Alpine Summit',
    duration: '4 Days / 3 Nights',
    maxAltitude: '4,000 m (Chandrashila Peak)',
    totalDistance: 'Approx. 450 km drive + 12 km trek',
    difficulty: 'Easy-Moderate',
    stops: [
      {
        id: 'ct-1',
        name: 'Rishikesh to Sari Village',
        altitude: '2,000 m',
        altitudeMeters: 2000,
        driveFromPrev: '190 km (6 hrs)',
        stay: 'Sari Homestay / Camps',
        highlight: 'Picturesque terraced fields of Sari village and gateway to Deoriatal',
        tip: 'Acclimatize with a short evening stroll through walnut orchards.',
        coordinates: [30.5100, 79.1200]
      },
      {
        id: 'ct-2',
        name: 'Deoriatal Lake',
        altitude: '2,438 m',
        altitudeMeters: 2438,
        driveFromPrev: '2.5 km scenic uphill walk',
        stay: 'Deoriatal Dome Tents',
        highlight: 'Glass-like lake reflection of Chaukhamba peak at golden hour',
        tip: 'Incredible sunrise photography spot overlooking Kedarnath range.',
        coordinates: [30.5210, 79.1290]
      },
      {
        id: 'ct-3',
        name: 'Chopta Basecamp',
        altitude: '2,680 m',
        altitudeMeters: 2680,
        driveFromPrev: '22 km drive',
        stay: 'Chopta Alpine Meadows Camp',
        highlight: 'Expansive Bugyal meadows known as the Mini Switzerland of India',
        tip: 'Pre-trek briefing and gear inspection before summit morning.',
        coordinates: [30.4855, 79.1764]
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
        isKeyTemple: true,
        coordinates: [30.4886, 79.2163]
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
        isSummit: true,
        coordinates: [30.4900, 79.2190]
      },
      {
        id: 'ct-6',
        name: 'Return to Rishikesh',
        altitude: '372 m',
        altitudeMeters: 372,
        driveFromPrev: '200 km (6.5 hrs)',
        stay: 'Rishikesh Departure',
        highlight: 'Scenic drive following the roaring Mandakini & Alaknanda rivers',
        tip: 'Optional evening river rafting or Ganga aarti before departure.',
        coordinates: [30.0869, 78.2676]
      }
    ],
    highwayRoute: [
      [30.0869, 78.2676], // Rishikesh
      [30.1460, 78.5992], // Devprayag
      [30.2227, 78.7844], // Srinagar
      [30.2858, 78.9811], // Rudraprayag
      [30.5050, 79.0880], // Kund
      [30.5100, 79.1200], // Sari Village
      [30.4855, 79.1764], // Chopta
      [30.5050, 79.0880], // Kund
      [30.2858, 78.9811], // Rudraprayag
      [30.0869, 78.2676]  // Rishikesh
    ],
    trekSegments: [
      [
        [30.5100, 79.1200],
        [30.5160, 79.1240],
        [30.5210, 79.1290]
      ],
      [
        [30.4855, 79.1764],
        [30.4868, 79.1950],
        [30.4886, 79.2163],
        [30.4900, 79.2190]
      ]
    ]
  },
  {
    id: 'valley-of-flowers',
    name: 'Valley of Flowers & Hemkund',
    shortName: 'Valley of Flowers',
    duration: '6 Days / 5 Nights',
    maxAltitude: '4,329 m (Hemkund Sahib)',
    totalDistance: 'Approx. 580 km drive + 38 km trek',
    difficulty: 'Moderate',
    stops: [
      {
        id: 'vof-1',
        name: 'Rishikesh to Joshimath',
        altitude: '1,890 m',
        altitudeMeters: 1890,
        driveFromPrev: '250 km (8 hrs)',
        stay: 'Joshimath Hotel',
        highlight: 'Panch Prayag confluences on the iconic Badrinath highway',
        tip: 'Good market to buy trekking poles, rain covers, and dry fruits.',
        coordinates: [30.5564, 79.5658]
      },
      {
        id: 'vof-2',
        name: 'Govindghat to Ghangaria',
        altitude: '3,048 m',
        altitudeMeters: 3048,
        driveFromPrev: '20 km drive + 10 km trek',
        stay: 'Ghangaria Mountain Lodge',
        highlight: 'Trek along Pushpawati river valley with gushing waterfalls',
        tip: 'Helicopter shuttle available between Govindghat & Ghangaria if needed.',
        coordinates: [30.7001, 79.5880]
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
        isSummit: true,
        coordinates: [30.7280, 79.6053]
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
        isKeyTemple: true,
        coordinates: [30.6997, 79.6277]
      },
      {
        id: 'vof-5',
        name: 'Return via Badrinath',
        altitude: '3,300 m',
        altitudeMeters: 3300,
        driveFromPrev: '10 km trek down + 35 km drive',
        stay: 'Badrinath / Joshimath',
        highlight: 'Optional afternoon darshan at Badrinath Temple',
        tip: 'Relax your muscles in the natural thermal springs of Tapt Kund.',
        coordinates: [30.7433, 79.4938]
      },
      {
        id: 'vof-6',
        name: 'Joshimath to Rishikesh',
        altitude: '372 m',
        altitudeMeters: 372,
        driveFromPrev: '250 km (8 hrs)',
        stay: 'Rishikesh Departure',
        highlight: 'Descent through fragrant pine forests and sacred riverside valleys',
        tip: 'Celebratory Himalayan dinner in Rishikesh.',
        coordinates: [30.0869, 78.2676]
      }
    ],
    highwayRoute: [
      [30.0869, 78.2676], // Rishikesh
      [30.1460, 78.5992], // Devprayag
      [30.2227, 78.7844], // Srinagar
      [30.2858, 78.9811], // Rudraprayag
      [30.2589, 79.2185], // Karnaprayag
      [30.4070, 79.3270], // Chamoli
      [30.5564, 79.5658], // Joshimath
      [30.6253, 79.5959], // Govindghat
      [30.7433, 79.4938], // Badrinath
      [30.5564, 79.5658], // Joshimath
      [30.0869, 78.2676]  // Rishikesh
    ],
    trekSegments: [
      [
        [30.6253, 79.5959],
        [30.6550, 79.5920],
        [30.6800, 79.5900],
        [30.7001, 79.5880]
      ],
      [
        [30.7001, 79.5880],
        [30.7140, 79.5970],
        [30.7280, 79.6053]
      ],
      [
        [30.7001, 79.5880],
        [30.6997, 79.6277]
      ]
    ]
  }
];

export const RouteCircuitMap: React.FC = () => {
  const [activeCircuitId, setActiveCircuitId] = useState('char-dham');
  const [selectedStopIndex, setSelectedStopIndex] = useState(0);
  const [activeViewMode, setActiveViewMode] = useState<'map' | 'elevation' | 'both'>('both');

  const activeCircuit = CIRCUITS.find((c) => c.id === activeCircuitId) || CIRCUITS[0];
  const selectedStop = activeCircuit.stops[selectedStopIndex] || activeCircuit.stops[0];

  const handleCircuitChange = (id: string) => {
    setActiveCircuitId(id);
    setSelectedStopIndex(0);
  };

  const handleSelectStopById = (stopId: string) => {
    const idx = activeCircuit.stops.findIndex(s => s.id === stopId);
    if (idx !== -1) {
      setSelectedStopIndex(idx);
    }
  };

  // Find max altitude for elevation bar scaling
  const maxCircuitAltitude = Math.max(...activeCircuit.stops.map((s) => s.altitudeMeters));

  return (
    <section id="route-circuit-map" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Geographic GPS Map & Elevation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900">
            Himalayan Route <span className="text-brand-orange">Circuit Map</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl font-medium">
            Explore live interactive topographic & satellite maps, real highway routes, mountain walking trails, elevation ascents, and overnight stops across Uttarakhand.
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
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap gap-2.5">
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

        {/* View Mode Toggle Switch */}
        <div className="inline-flex items-center p-1 rounded-xl bg-white border border-[#DCD6CC] shadow-xs text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveViewMode('map')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeViewMode === 'map' 
                ? 'bg-brand-orange text-white shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <MapIcon className="w-3.5 h-3.5" />
            <span>GPS Map Only</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveViewMode('both')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeViewMode === 'both' 
                ? 'bg-brand-orange text-white shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Map + Profile</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveViewMode('elevation')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeViewMode === 'elevation' 
                ? 'bg-brand-orange text-white shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Elevation Only</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Map & Waypoint Board */}
      <div className="bg-brand-card rounded-3xl border border-white/10 p-5 sm:p-7 lg:p-8 shadow-2xl text-white">
        {/* Circuit Summary Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 mb-6 border-b border-white/10">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Duration</div>
            <div className="text-base sm:text-lg font-bold font-display text-white mt-0.5">{activeCircuit.duration}</div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Max Altitude</div>
            <div className="text-base sm:text-lg font-bold font-display text-amber-400 mt-0.5">{activeCircuit.maxAltitude}</div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Total Route</div>
            <div className="text-base sm:text-lg font-bold font-display text-white mt-0.5">{activeCircuit.totalDistance}</div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Difficulty Level</div>
            <div className="inline-flex items-center gap-1.5 mt-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/10 text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{activeCircuit.difficulty}</span>
            </div>
          </div>
        </div>

        {/* 1. Interactive Leaflet GPS Map Container */}
        {(activeViewMode === 'map' || activeViewMode === 'both') && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs uppercase font-bold tracking-wider text-slate-300 flex items-center gap-1.5">
                <MapIcon className="w-4 h-4 text-brand-orange" />
                <span>Geographic Route Circuit Map (Leaflet Topo & Satellite)</span>
              </div>
              <div className="text-[11px] text-slate-400">
                Click any waypoint marker for details or switch between Topo / Satellite / Road layers
              </div>
            </div>

            <InteractiveHimalayanMap
              circuit={activeCircuit}
              activeStopId={selectedStop.id}
              onSelectStop={handleSelectStopById}
            />
          </div>
        )}

        {/* Visual Route Timeline / Step Progression */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs uppercase font-bold tracking-wider text-slate-300 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span>Interactive Waypoints (Click Any Stop To Pan Map & Inspect)</span>
            </div>
            <div className="text-[11px] text-slate-400">
              Stop {selectedStopIndex + 1} of {activeCircuit.stops.length}
            </div>
          </div>

          {/* Horizontal Scrollable Waypoint Track */}
          <div className="relative overflow-x-auto pb-3 pt-1 -mx-2 px-2 scrollbar-thin">
            <div className="flex items-center gap-3 min-w-max">
              {activeCircuit.stops.map((stop, idx) => {
                const isSelected = idx === selectedStopIndex;
                return (
                  <React.Fragment key={stop.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedStopIndex(idx)}
                      className={`group relative p-3 rounded-2xl text-left transition-all border cursor-pointer min-w-[165px] ${
                        isSelected
                          ? 'bg-brand-orange text-white border-brand-orange shadow-lg shadow-brand-orange/40 scale-105'
                          : 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-white/10 hover:border-brand-orange/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                          isSelected ? 'bg-black/20 text-white' : 'bg-white/10 text-brand-orange'
                        }`}>
                          Stop #{idx + 1}
                        </span>
                        {stop.isKeyTemple && (
                          <span className="text-xs" title="Sacred Holy Shrine">🕉️</span>
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

        {/* 2. Elevation Profile Chart */}
        {(activeViewMode === 'elevation' || activeViewMode === 'both') && (
          <div className="mb-8 bg-slate-900/70 p-5 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-slate-300">
                <TrendingUp className="w-4 h-4 text-brand-orange" />
                <span>Visual Elevation Profile (Altitude Ascent / Descent)</span>
              </div>
              <div className="text-[11px] text-slate-400 flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-brand-orange" /> Selected Stop
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-amber-400" /> Sacred Dham
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400" /> High Summit
                </span>
              </div>
            </div>

            <div className="relative pt-6 pb-2 overflow-x-auto scrollbar-thin">
              <div className="flex items-end justify-between gap-2 sm:gap-4 min-w-[620px] h-44 px-2 border-b border-white/10">
                {activeCircuit.stops.map((stop, idx) => {
                  const isSelected = idx === selectedStopIndex;
                  const heightPercent = Math.max(16, Math.round((stop.altitudeMeters / maxCircuitAltitude) * 100));

                  return (
                    <div
                      key={stop.id}
                      onClick={() => setSelectedStopIndex(idx)}
                      className="flex-1 flex flex-col items-center justify-end h-full group cursor-pointer"
                    >
                      <span className={`text-[10px] font-bold mb-1.5 transition-all ${
                        isSelected 
                          ? 'text-white bg-brand-orange px-1.5 py-0.5 rounded shadow' 
                          : 'text-slate-400 group-hover:text-white'
                      }`}>
                        {stop.altitude}
                      </span>

                      <div
                        style={{ height: `${heightPercent}%` }}
                        className={`w-full max-w-[48px] rounded-t-lg transition-all duration-300 relative ${
                          isSelected
                            ? 'bg-gradient-to-t from-brand-orange to-amber-400 shadow-lg shadow-brand-orange/50 ring-2 ring-white/60'
                            : stop.isKeyTemple
                            ? 'bg-gradient-to-t from-amber-600 to-amber-400/80 group-hover:brightness-125'
                            : stop.isSummit
                            ? 'bg-gradient-to-t from-cyan-600 to-cyan-400/80 group-hover:brightness-125'
                            : 'bg-gradient-to-t from-slate-700 to-slate-500 group-hover:from-slate-600 group-hover:to-brand-orange/70'
                        }`}
                      >
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[9px] font-extrabold text-black/70">
                          #{idx + 1}
                        </div>
                      </div>

                      <div className={`mt-2 text-center text-[10px] font-medium leading-tight truncate max-w-[64px] transition-colors ${
                        isSelected ? 'text-brand-orange font-bold' : 'text-slate-400 group-hover:text-slate-200'
                      }`}>
                        {stop.name.split('/')[0].trim()}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Key Highlight */}
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Scenic & Spiritual Highlight</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                {selectedStop.highlight}
              </p>
            </div>

            {/* Night Stay & Mountain Pro-Tip */}
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-start gap-3">
                <Bed className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Recommended Night Stay</div>
                  <div className="text-sm font-bold text-white mt-0.5">{selectedStop.stay}</div>
                </div>
              </div>

              <div className="bg-amber-500/10 p-4 rounded-2xl border border-amber-500/20 flex items-start gap-3 text-amber-200">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-amber-400 font-bold">Mountain Guide Tip</div>
                  <p className="text-xs text-amber-100/90 mt-0.5 leading-relaxed font-medium">
                    {selectedStop.tip}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Need personalized hotel bookings or helicopter tickets for this stop?
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={getWhatsAppUrl(`Hi UKYatra team, I am inquiring about stay and travel arrangements at ${selectedStop.name} for the ${activeCircuit.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold transition-all shadow-lg shadow-brand-orange/30"
              >
                <span>Book / Inquire This Stop</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

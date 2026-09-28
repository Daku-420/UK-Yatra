import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Compass, 
  ArrowRight, 
  Mountain, 
  ChevronRight,
  Sparkles,
  Info,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';

interface DestinationItem {
  id: string;
  name: string;
  altName?: string;
  altitude: string;
  bestTime: string;
  tagline: string;
  image: string;
  highlights: string[];
  hasDedicatedPage?: boolean;
}

interface DistrictData {
  id: string;
  name: string;
  division: 'Garhwal' | 'Kumaon';
  headquarters: string;
  area: string;
  elevationRange: string;
  tagline: string;
  overview: string;
  centerCoordinates: { x: number; y: number };
  svgPath: string;
  destinations: DestinationItem[];
}

interface HotspotPin {
  id: string;
  name: string;
  districtId: string;
  x: number;
  y: number;
  altitude: string;
  isCharDham?: boolean;
}

export const UTTARAKHAND_DISTRICTS: DistrictData[] = [
  // ==========================================
  // GARHWAL DIVISION (7 DISTRICTS)
  // ==========================================
  {
    id: 'chamoli',
    name: 'Chamoli',
    division: 'Garhwal',
    headquarters: 'Gopeshwar',
    area: '7,520 sq km',
    elevationRange: '800 m to 7,816 m (Nanda Devi)',
    tagline: 'Abode of Badrinath, Auli Ski Slopes & Valley of Flowers',
    overview: 'The second largest district of Uttarakhand, Chamoli is a realm of colossal snow peaks including Nanda Devi, Kamet, and Trishul. It hosts the revered Badrinath Dham, the alpine ski resort of Auli, and the world-famous UNESCO floral sanctuary.',
    centerCoordinates: { x: 530, y: 220 },
    svgPath: 'M 410,130 L 520,90 L 660,110 L 690,230 L 590,290 L 490,290 L 440,240 L 370,230 Z',
    destinations: [
      {
        id: 'badrinath',
        name: 'Badrinath Dham',
        altitude: '3,133 m (10,279 ft)',
        bestTime: 'May to October',
        tagline: 'Foremost Char Dham shrine of Lord Vishnu between Nar & Narayana mountains',
        image: '/images/destinations/badrinath/photo-1.jpg',
        highlights: ['Badrinath Temple Darshan', 'Tapt Kund natural hot springs', 'Mana: The Last Indian Village', 'Vyas Gufa & Saraswati River'],
        hasDedicatedPage: true
      },
      {
        id: 'auli',
        name: 'Auli Ski Resort',
        altitude: '2,800 m (9,186 ft)',
        bestTime: 'Dec to Mar (Snow & Ski) | Apr to Jun (Lush Bugyals)',
        tagline: 'Premier skiing destination with uninterrupted panoramas of Nanda Devi',
        image: '/images/destinations/auli/photo-1.jpg',
        highlights: ['4 km Joshimath to Auli Cable Car', 'Ski slopes & chairlift rides', 'Artificial lake reflection views', 'Gorson Bugyal high meadow trek'],
        hasDedicatedPage: true
      },
      {
        id: 'valley-of-flowers',
        name: 'Valley of Flowers',
        altitude: '3,658 m (12,001 ft)',
        bestTime: 'July to September (Peak Blossom)',
        tagline: 'UNESCO World Heritage alpine valley hosting over 500 wild Himalayan blooms',
        image: '/images/destinations/valley-of-flowers/photo-1.jpg',
        highlights: ['Endless floral carpets along Pushpawati River', 'Brahmakamal & Blue Poppy spotting', 'Hemkund Sahib high glacial Gurudwara', 'Ghangaria pine base camp'],
        hasDedicatedPage: true
      },
      {
        id: 'joshimath',
        name: 'Joshimath (Jyotirmath)',
        altitude: '1,890 m (6,200 ft)',
        bestTime: 'All Year Round',
        tagline: 'Ancient spiritual gateway established by Adi Shankaracharya',
        image: '/images/destinations/auli/photo-2.jpg',
        highlights: ['Shankaracharya Math & Kalpavriksha tree', 'Narsingh Temple winter seat', 'Ropeway base station to Auli', 'Gateway to Valley of Flowers']
      }
    ]
  },
  {
    id: 'rudraprayag',
    name: 'Rudraprayag',
    division: 'Garhwal',
    headquarters: 'Rudraprayag',
    area: '1,984 sq km',
    elevationRange: '800 m to 3,584 m',
    tagline: 'Sacred Seat of Kedarnath Jyotirlinga & Mini Switzerland Chopta',
    overview: 'Named after the holy confluence of Alaknanda and Mandakini rivers, Rudraprayag houses the 11th Jyotirlinga of Kedarnath Ji and the scenic rhododendron meadows of Chopta, home to the highest Shiva temple on Earth at Tungnath.',
    centerCoordinates: { x: 430, y: 310 },
    svgPath: 'M 370,230 L 440,240 L 490,290 L 470,370 L 400,370 L 380,310 Z',
    destinations: [
      {
        id: 'kedarnath',
        name: 'Kedarnath Dham',
        altitude: '3,584 m (11,758 ft)',
        bestTime: 'May to June & September to October',
        tagline: 'Revered 11th Jyotirlinga set dramatically against Kedarnath & Kedar Dome peaks',
        image: '/images/destinations/kedarnath/photo-1.jpg',
        highlights: ['Ancient stone Kedarnath Jyotirlinga temple', 'Bhairavnath temple ridge view', 'Scenic 16 km Mandakini valley trek', 'Evening chanting & Aarti on snow slopes'],
        hasDedicatedPage: true
      },
      {
        id: 'chopta',
        name: 'Chopta & Tungnath',
        altitude: '2,680 m - 3,680 m',
        bestTime: 'April to November (Snow treks in Winter)',
        tagline: 'Mini Switzerland of India with the world’s highest stone Shiva temple',
        image: '/images/destinations/chopta/photo-1.jpg',
        highlights: ['Tungnath temple at 12,073 ft', 'Chandrashila summit 360° panorama (13,100 ft)', 'Deoria Tal crystal lake reflections', 'Alpine camping in rhododendron bugyals'],
        hasDedicatedPage: true
      },
      {
        id: 'triyuginarayan',
        name: 'Triyuginarayan',
        altitude: '1,980 m (6,496 ft)',
        bestTime: 'April to November',
        tagline: 'Legendary site of Lord Shiva and Goddess Parvati’s celestial wedding',
        image: '/images/destinations/kedarnath/photo-2.jpg',
        highlights: ['Akhand Dhuni (Eternal Holy Flame)', 'Brahma, Vishnu & Rudra sacred kunds', 'Traditional Himalayan wedding destination', 'Pristine mountain village setting']
      }
    ]
  },
  {
    id: 'uttarkashi',
    name: 'Uttarkashi',
    division: 'Garhwal',
    headquarters: 'Uttarkashi',
    area: '8,016 sq km',
    elevationRange: '1,158 m to 7,000+ m',
    tagline: 'Origins of Holy Ganga & Yamuna, Apple Valleys & High Passes',
    overview: 'The largest district in Uttarakhand by area, Uttarkashi is the northern frontier bordering Tibet. It cradles the origins of India’s two holiest rivers at Gangotri and Yamunotri, the picturesque apple bowl of Harsil, and renowned treks like Dayara Bugyal and Gaumukh.',
    centerCoordinates: { x: 280, y: 160 },
    svgPath: 'M 150,160 L 220,80 L 370,70 L 410,130 L 370,230 L 280,250 L 210,220 Z',
    destinations: [
      {
        id: 'gangotri',
        name: 'Gangotri Dham',
        altitude: '3,100 m (10,170 ft)',
        bestTime: 'May to October',
        tagline: 'Seat of Goddess Ganga nestled along pine forests and granite spires',
        image: '/images/destinations/harsil/photo-1.jpg',
        highlights: ['18th-century white marble Ganga Temple', 'Surya Kund and Bhagirath Shila', 'Submerged Shivling in riverbed', 'Gateway to Gaumukh Glacier trek'],
        hasDedicatedPage: true
      },
      {
        id: 'yamunotri',
        name: 'Yamunotri Dham',
        altitude: '3,291 m (10,797 ft)',
        bestTime: 'May to October',
        tagline: 'First shrine of Char Dham pilgrimage with natural boiling thermal springs',
        image: '/images/destinations/yamunotri/photo-1.jpg',
        highlights: ['Yamunotri temple darshan', 'Surya Kund thermal boiling waters', 'Divya Shila worship', 'Scenic 6 km trek along Yamuna gorge'],
        hasDedicatedPage: true
      },
      {
        id: 'harsil',
        name: 'Harsil Valley',
        altitude: '2,620 m (8,595 ft)',
        bestTime: 'April to June & September to November',
        tagline: 'Picturesque apple valley with wooden deodar hamlets and emerald riverbanks',
        image: '/images/destinations/harsil/photo-2.jpg',
        highlights: ['Wilson’s historic apple orchards', 'Dharali village wooden architecture', 'Saat Tal alpine lakes hike', 'Clear view of snow-capped mountains'],
        hasDedicatedPage: true
      }
    ]
  },
  {
    id: 'dehradun',
    name: 'Dehradun',
    division: 'Garhwal',
    headquarters: 'Dehradun',
    area: '3,088 sq km',
    elevationRange: '372 m to 2,200 m',
    tagline: 'State Capital, Yoga Capital Rishikesh & Queen of Hills Mussoorie',
    overview: 'The bustling hub of Uttarakhand, Dehradun district spans the scenic Doon Valley between the Himalayas and Shivaliks. It holds the world capital of Yoga in Rishikesh, the colonial charm of Mussoorie, and the untouched cantonment forests of Chakrata.',
    centerCoordinates: { x: 180, y: 300 },
    svgPath: 'M 150,160 L 210,220 L 240,290 L 250,350 L 220,420 L 140,400 L 110,300 L 120,220 Z',
    destinations: [
      {
        id: 'mussoorie',
        name: 'Mussoorie',
        altitude: '2,005 m (6,578 ft)',
        bestTime: 'March to June & September to November',
        tagline: 'The Queen of Hills with heritage colonial promenades and valley sunsets',
        image: '/images/destinations/mussoorie/photo-1.jpg',
        highlights: ['Mall Road & Camel’s Back Road stroll', 'Kempty & Bhatta cascading falls', 'Sir George Everest ridge point', 'Gun Hill ropeway overlook'],
        hasDedicatedPage: true
      },
      {
        id: 'rishikesh',
        name: 'Rishikesh',
        altitude: '372 m (1,220 ft)',
        bestTime: 'October to May',
        tagline: 'Global Yoga Capital & adrenaline hub for Ganga white-water rafting',
        image: '/images/destinations/rishikesh/photo-1.jpg',
        highlights: ['Soulful Parmarth Niketan Ganga Aarti', 'White-water river rafting (Grade III-IV)', 'Ram Jhula & Lakshman Jhula', 'Beatles Ashram (Chaurasi Kutia)'],
        hasDedicatedPage: true
      },
      {
        id: 'chakrata',
        name: 'Chakrata',
        altitude: '2,118 m (6,948 ft)',
        bestTime: 'March to June & October to February',
        tagline: 'Quiet cantonment retreat tucked amid ancient deodar canopies and waterfalls',
        image: '/images/destinations/chakrata/photo-1.jpg',
        highlights: ['Tiger Falls (one of India’s highest direct drops)', 'Deoban dense ancient deodar forests', 'Chilmiri Neck sunset overlook', 'Budher limestone caves'],
        hasDedicatedPage: true
      }
    ]
  },
  {
    id: 'tehri',
    name: 'Tehri Garhwal',
    division: 'Garhwal',
    headquarters: 'New Tehri',
    area: '3,642 sq km',
    elevationRange: '800 m to 2,756 m',
    tagline: 'Asia’s Highest Rockfill Dam, Water Sports & Kanatal Pine Forests',
    overview: 'Cradling the massive emerald reservoir of Tehri Dam, this district offers thrilling jet-skiing, speedboating, and floating houseboats alongside tranquil deodar ridge escapes in Kanatal and Dhanaulti.',
    centerCoordinates: { x: 290, y: 310 },
    svgPath: 'M 280,250 L 370,230 L 380,310 L 400,370 L 320,390 L 250,350 L 240,290 Z',
    destinations: [
      {
        id: 'tehri',
        name: 'Tehri Dam & Lake',
        altitude: '850 m (2,788 ft)',
        bestTime: 'October to May',
        tagline: 'Asia’s highest dam with a vast 42 sq km reservoir dedicated to water sports',
        image: '/images/destinations/tehri/photo-1.jpg',
        highlights: ['Jet skiing, banana rides & speed boating', 'Floating houseboats & luxury lake resorts', 'Tehri Dam engineering overlook', 'Annual Tehri Adventure Water Festival'],
        hasDedicatedPage: true
      },
      {
        id: 'kanatal',
        name: 'Kanatal',
        altitude: '2,590 m (8,497 ft)',
        bestTime: 'All Year Round',
        tagline: 'Quiet, mist-laden pine village away from crowded tourist circuits',
        image: '/images/destinations/tehri/photo-2.jpg',
        highlights: ['Surkanda Devi 360° hilltop temple', 'Kaudia Forest nature safaris', 'Glamping & luxury apple orchard cottages', 'Clear winter snowfall'],
        hasDedicatedPage: true
      },
      {
        id: 'dhanaulti',
        name: 'Dhanaulti',
        altitude: '2,286 m (7,500 ft)',
        bestTime: 'March to June & September to January',
        tagline: 'Serene deodar haven featuring eco-parks and quiet mountain walks',
        image: '/images/destinations/dhanaulti/photo-1.jpg',
        highlights: ['Amber and Dhara Deodar Eco-Parks', 'Potato Farm (Aloo Khet) Himalayan view', 'Camp Thangdhar outdoor activities', 'Apple orchards of Chamba'],
        hasDedicatedPage: true
      }
    ]
  },
  {
    id: 'pauri',
    name: 'Pauri Garhwal',
    division: 'Garhwal',
    headquarters: 'Pauri',
    area: '5,230 sq km',
    elevationRange: '600 m to 3,114 m',
    tagline: 'Colonial Lansdowne Pines, Khirsu Apple Valleys & Ancient Forts',
    overview: 'Steeped in rich Garhwali heritage, Pauri Garhwal ranges from the historic military cantonment of Lansdowne with its British-era churches to peaceful apple villages like Khirsu looking out to 300 km of snow peaks.',
    centerCoordinates: { x: 360, y: 450 },
    svgPath: 'M 320,390 L 400,370 L 470,370 L 480,470 L 430,540 L 310,520 L 280,450 Z',
    destinations: [
      {
        id: 'lansdowne',
        name: 'Lansdowne',
        altitude: '1,706 m (5,597 ft)',
        bestTime: 'All Year Round',
        tagline: 'Quiet and immaculate cantonment town established by the British in 1887',
        image: '/images/destinations/lansdowne/photo-1.jpg',
        highlights: ['Tip-in-Top viewpoint & panoramic peaks', 'Bhulla Tal scenic boating lake', 'St. John’s & St. Mary’s heritage churches', 'Garhwal Rifles Regimental Museum'],
        hasDedicatedPage: true
      },
      {
        id: 'khirsu',
        name: 'Khirsu',
        altitude: '1,700 m (5,577 ft)',
        bestTime: 'March to June & September to November',
        tagline: 'Hidden apple orchard village boasting an uninterrupted view of Trishul & Chaukhamba',
        image: '/images/destinations/lansdowne/photo-2.jpg',
        highlights: ['Panoramic views of over 300 Himalayan peaks', 'Dense oak, deodar and apple groves', 'Peaceful village walks and birding', 'Ghandiyal Devta sacred forest shrine'],
        hasDedicatedPage: true
      }
    ]
  },
  {
    id: 'haridwar',
    name: 'Haridwar',
    division: 'Garhwal',
    headquarters: 'Haridwar',
    area: '2,360 sq km',
    elevationRange: '250 m to 400 m',
    tagline: 'Gateway to the Gods & Legendary Ganga Evening Aarti at Har Ki Pauri',
    overview: 'Where the sacred River Ganga descends onto the northern plains from the mountains. Haridwar is one of the seven holiest Hindu cities, renowned for Har Ki Pauri, ancient temples, and Rajaji wildlife safaris.',
    centerCoordinates: { x: 220, y: 470 },
    svgPath: 'M 220,420 L 250,350 L 320,390 L 280,450 L 310,520 L 240,550 L 160,510 L 170,440 Z',
    destinations: [
      {
        id: 'haridwar',
        name: 'Har Ki Pauri & Haridwar',
        altitude: '314 m (1,030 ft)',
        bestTime: 'October to April',
        tagline: 'Sacred ghat where the celestial nectar fell, illuminated by thousands of floating lamps',
        image: '/images/destinations/rishikesh/photo-2.jpg',
        highlights: ['Evening Maha Ganga Aarti at Brahmakund', 'Mansa Devi & Chandi Devi ropeway temples', 'Holy dip in ancient sacred ghats', 'Traditional Ayurvedic markets & bazaars'],
        hasDedicatedPage: true
      },
      {
        id: 'rajaji',
        name: 'Rajaji National Park',
        altitude: '300 m - 1,000 m',
        bestTime: 'November to June',
        tagline: 'Vast elephant corridor and tiger habitat in the Shivalik foothills',
        image: '/images/destinations/jim-corbett/photo-2.jpg',
        highlights: ['Wild Asian Elephant jeep safaris', 'Leopard and spotted deer sightings', 'Birdwatcher’s paradise with 315+ bird species', 'Chilla and Motichur safari gates'],
        hasDedicatedPage: true
      }
    ]
  },

  // ==========================================
  // KUMAON DIVISION (6 DISTRICTS)
  // ==========================================
  {
    id: 'nainital',
    name: 'Nainital',
    division: 'Kumaon',
    headquarters: 'Nainital',
    area: '4,251 sq km',
    elevationRange: '300 m to 2,615 m',
    tagline: 'The Lake District of India, Colonial Yachting & Oak Forests',
    overview: 'Centered around the emerald, eye-shaped Naini Lake, this beloved Kumaon district is famed for its constellation of freshwater lakes (Bhimtal, Sattal, Naukuchiatal), cliffside viewpoints in Mukteshwar, and colonial charm.',
    centerCoordinates: { x: 540, y: 580 },
    svgPath: 'M 430,540 L 510,520 L 590,560 L 640,590 L 610,650 L 500,660 L 430,610 Z',
    destinations: [
      {
        id: 'nainital',
        name: 'Nainital Lake Town',
        altitude: '2,084 m (6,837 ft)',
        bestTime: 'March to June & September to November',
        tagline: 'Enchanting city of lakes framed by Ayarpatta and Naina peaks',
        image: '/images/destinations/nainital/photo-1.jpg',
        highlights: ['Heritage boating in Naini Lake', 'Naina Devi Temple Shakti Peeth', 'Snow View cable car over the Himalayas', 'Mall Road & Tibetan bazaar walks'],
        hasDedicatedPage: true
      },
      {
        id: 'bhimtal',
        name: 'Bhimtal & Sattal',
        altitude: '1,370 m (4,495 ft)',
        bestTime: 'All Year Round',
        tagline: 'Picturesque lake with an island aquarium and interconnected pristine waters',
        image: '/images/destinations/nainital/photo-2.jpg',
        highlights: ['Island aquarium boat ride in Bhimtal', 'Seven interconnected lakes of Sattal', 'Kayaking and paddleboarding', 'World-class birdwatching in dense oak forests'],
        hasDedicatedPage: true
      },
      {
        id: 'mukteshwar',
        name: 'Mukteshwar',
        altitude: '2,171 m (7,123 ft)',
        bestTime: 'March to June & October to February',
        tagline: 'Scenic fruit orchard ridge famous for Chauli Ki Jali rocky overhangs',
        image: '/images/destinations/nainital/photo-3.jpg',
        highlights: ['Chauli Ki Jali cliff viewpoint & rock climbing', '350-year-old Mukteshwar Shiva Temple', 'Sunrise over Nanda Devi & Trishul', 'Lush apricot and peach orchards'],
        hasDedicatedPage: true
      }
    ]
  },
  {
    id: 'almora',
    name: 'Almora',
    division: 'Kumaon',
    headquarters: 'Almora',
    area: '3,144 sq km',
    elevationRange: '1,200 m to 2,412 m',
    tagline: 'Cultural Heart of Kumaon, Heritage Temples & Kasar Devi Sanctuary',
    overview: 'Shaped like a horseshoe across a ridge, Almora is celebrated for its deep cultural roots, ancient stone temples at Jageshwar Dham, the spiritual cosmic magnetism of Kasar Devi, and scenic military pine hills in Ranikhet.',
    centerCoordinates: { x: 590, y: 480 },
    svgPath: 'M 470,370 L 580,360 L 620,420 L 700,420 L 680,520 L 590,560 L 510,520 L 480,470 Z',
    destinations: [
      {
        id: 'ranikhet',
        name: 'Ranikhet',
        altitude: '1,869 m (6,132 ft)',
        bestTime: 'All Year Round',
        tagline: 'The Queen’s Meadow featuring tranquil pine avenues and British cantonment beauty',
        image: '/images/destinations/ranikhet/photo-1.jpg',
        highlights: ['Chaubatia Apple & Fruit Research Orchards', 'Golf Course at Upat (one of India’s highest 9-hole greens)', 'Kumaon Regimental Centre Museum', 'Jhula Devi temple with thousands of bells'],
        hasDedicatedPage: true
      },
      {
        id: 'binsar',
        name: 'Binsar Wildlife Sanctuary',
        altitude: '2,412 m (7,913 ft)',
        bestTime: 'October to March & April to June',
        tagline: 'Protected ancient oak and rhododendron wilderness with 300 km peak vistas',
        image: '/images/destinations/binsar/photo-1.jpg',
        highlights: ['Zero Point 360-degree panorama of Trishul & Shivling', 'Forest walks amidst 200+ Himalayan birds', 'Heritage Bineshwar Mahadev Temple', 'Eco-lodges nestled inside pristine forest canopy'],
        hasDedicatedPage: true
      },
      {
        id: 'jageshwar',
        name: 'Jageshwar Dham',
        altitude: '1,870 m (6,135 ft)',
        bestTime: 'All Year Round',
        tagline: 'Sacred grove of 124 stone temples dating from the 7th to 12th century',
        image: '/images/destinations/jageshwar/photo-1.jpg',
        highlights: ['Maha Mrityunjaya & Jyotirlinga stone temples', 'Towering ancient deodars lining the Jataganga stream', 'Archaeological Museum stone sculptures', 'Peaceful meditative spiritual energy'],
        hasDedicatedPage: true
      }
    ]
  },
  {
    id: 'bageshwar',
    name: 'Bageshwar',
    division: 'Kumaon',
    headquarters: 'Bageshwar',
    area: '2,241 sq km',
    elevationRange: '1,004 m to 5,500+ m',
    tagline: 'Scenic River Confluence, Ancient Baijnath & Gateway to Pindari Glacier',
    overview: 'Nestled at the confluence of Gomti and Sarayu rivers, Bageshwar is famed for the Bagnath Temple, the scenic hill station of Kausani known as the Switzerland of India, and base points for thrilling glacier expeditions.',
    centerCoordinates: { x: 640, y: 360 },
    svgPath: 'M 590,290 L 690,230 L 750,370 L 700,420 L 620,420 L 580,360 Z',
    destinations: [
      {
        id: 'kausani',
        name: 'Kausani',
        altitude: '1,890 m (6,200 ft)',
        bestTime: 'March to June & September to November',
        tagline: 'The Switzerland of India offering a 300 km uninterrupted view of Himalayan crests',
        image: '/images/destinations/kausani/photo-1.jpg',
        highlights: ['Unrivalled view of Trishul, Nanda Devi & Panchachuli', 'Anasakti Ashram (where Mahatma Gandhi stayed)', 'Tea estate garden walks & factory tour', 'Rudradhari falls and cave temple hike'],
        hasDedicatedPage: true
      },
      {
        id: 'baijnath',
        name: 'Baijnath Temple Complex',
        altitude: '1,125 m (3,691 ft)',
        bestTime: 'All Year Round',
        tagline: '12th-century stone temple complex dedicated to Lord Shiva on the Gomti banks',
        image: '/images/destinations/kausani/photo-2.jpg',
        highlights: ['Intricate stone idols of Parvati and Shiva', 'Feeding sacred Mahseer fish at the lake', 'Historic Katyuri dynasty architecture', 'Scenic river backdrop'],
        hasDedicatedPage: true
      }
    ]
  },
  {
    id: 'pithoragarh',
    name: 'Pithoragarh',
    division: 'Kumaon',
    headquarters: 'Pithoragarh',
    area: '7,090 sq km',
    elevationRange: '1,627 m to 6,904 m',
    tagline: 'Little Kashmir, Soaring Panchachuli Peaks & Alpine Munsiyari',
    overview: 'The eastern frontier of Uttarakhand bordering Tibet and Nepal. Pithoragarh boasts soaring snow peaks like the Panchachuli five sisters, alpine bugyals in Munsiyari, tea gardens in Chaukori, and the sacred Adi Kailash trail.',
    centerCoordinates: { x: 800, y: 310 },
    svgPath: 'M 660,110 L 820,160 L 920,280 L 880,450 L 780,450 L 750,370 L 690,230 Z',
    destinations: [
      {
        id: 'munsiyari',
        name: 'Munsiyari',
        altitude: '2,200 m (7,218 ft)',
        bestTime: 'March to June & September to November (Snow in Jan)',
        tagline: 'Front-row seat to the dramatic five peaks of Panchachuli and high alpine trails',
        image: '/images/destinations/munsiyari/photo-1.jpg',
        highlights: ['Stunning sunrise over Panchachuli I-V peaks', 'Khaliya Top trek (3,500 m panoramic ridge)', 'Birthi Falls 126-meter cascade', 'Tribal Heritage Museum & woolen handicrafts'],
        hasDedicatedPage: true
      },
      {
        id: 'chaukori',
        name: 'Chaukori',
        altitude: '2,010 m (6,594 ft)',
        bestTime: 'March to June & October to February',
        tagline: 'Idyllic tea gardens with direct views of Nanda Devi and Nanda Kot',
        image: '/images/destinations/munsiyari/photo-2.jpg',
        highlights: ['Aromatic tea gardens amidst deodar woods', 'Unobstructed morning Himalayan views', 'Patal Bhuvaneshwar limestone cave complex nearby', 'Peaceful, unhurried hill ambiance'],
        hasDedicatedPage: true
      }
    ]
  },
  {
    id: 'champawat',
    name: 'Champawat',
    division: 'Kumaon',
    headquarters: 'Champawat',
    area: '1,766 sq km',
    elevationRange: '1,610 m to 2,111 m',
    tagline: 'Historic Capital of Chand Dynasties & Serene Pines of Abbott Mount',
    overview: 'The historical cradle of Kumaon’s Chand kings, Champawat is famed for exquisite stone temple carvings at Baleshwar, tranquil ashram forests in Lohaghat, and peaceful European-style cottages in Abbott Mount.',
    centerCoordinates: { x: 750, y: 510 },
    svgPath: 'M 700,420 L 780,450 L 880,450 L 850,560 L 760,610 L 680,520 Z',
    destinations: [
      {
        id: 'abbott-mount',
        name: 'Abbott Mount',
        altitude: '2,111 m (6,926 ft)',
        bestTime: 'All Year Round',
        tagline: 'Tranquil European-style enclave set amidst towering pines and Himalayan views',
        image: '/images/destinations/munsiyari/photo-3.jpg',
        highlights: ['Colonial era cottages and ancient church', 'Wide views of eastern Himalayan ranges', 'Trek to Pancheshwar Mahakali confluence', 'Abundant birdlife and pristine deodar trails'],
        hasDedicatedPage: true
      },
      {
        id: 'lohaghat',
        name: 'Lohaghat & Mayawati Ashram',
        altitude: '1,754 m (5,754 ft)',
        bestTime: 'March to June & September to November',
        tagline: 'Historic mountain town and seat of Advaita Ashrama visited by Swami Vivekananda',
        image: '/images/destinations/ranikhet/photo-2.jpg',
        highlights: ['Mayawati Advaita Ashram library & meditation hall', 'Abbot Mount colonial circuit', 'Banasur Ka Kila hilltop fortress', 'Spring blooming rhododendrons'],
        hasDedicatedPage: true
      }
    ]
  },
  {
    id: 'udham-singh-nagar',
    name: 'Udham Singh Nagar',
    division: 'Kumaon',
    headquarters: 'Rudrapur',
    area: '2,542 sq km',
    elevationRange: '200 m to 400 m',
    tagline: 'Terai Gateway to Jim Corbett Tiger Safaris & Himalayan Foothills',
    overview: 'Located in the fertile southern Terai belt, this district serves as a key air gateway via Pantnagar Airport and shares the immediate sanctuary boundary of the legendary Jim Corbett National Park.',
    centerCoordinates: { x: 640, y: 640 },
    svgPath: 'M 430,610 L 500,660 L 610,650 L 640,590 L 760,610 L 850,560 L 820,660 L 600,670 L 430,630 Z',
    destinations: [
      {
        id: 'jim-corbett',
        name: 'Jim Corbett National Park (Ramnagar)',
        altitude: '400 m to 1,200 m',
        bestTime: 'November to June',
        tagline: 'India’s oldest national park and premier Royal Bengal Tiger sanctuary',
        image: '/images/destinations/jim-corbett/photo-1.jpg',
        highlights: ['4x4 open jeep & canter tiger safaris in Dhikala & Bijrani', 'Garjia Devi temple perched on Kosi river boulder', 'Luxury riverside forest lodges & eco-resorts', 'Elephant and deer herds along the Ramganga river'],
        hasDedicatedPage: true
      },
      {
        id: 'pantnagar',
        name: 'Pantnagar (Air Gateway)',
        altitude: '244 m (800 ft)',
        bestTime: 'All Year Round',
        tagline: 'Key regional air transit hub connecting Delhi directly to Kumaon hill resorts',
        image: '/images/destinations/nainital/photo-4.jpg',
        highlights: ['Fast flight gateway to Nainital, Bhimtal & Corbett', 'India’s first Agricultural University campus', 'Smooth highway transit to Kumaon valleys', 'Picturesque Terai farmlands'],
        hasDedicatedPage: true
      }
    ]
  }
];

export const MAP_HOTSPOTS: HotspotPin[] = [
  { id: 'badrinath', name: 'Badrinath Dham', districtId: 'chamoli', x: 555, y: 155, altitude: '3,133 m', isCharDham: true },
  { id: 'kedarnath', name: 'Kedarnath Dham', districtId: 'rudraprayag', x: 425, y: 260, altitude: '3,584 m', isCharDham: true },
  { id: 'gangotri', name: 'Gangotri Dham', districtId: 'uttarkashi', x: 335, y: 135, altitude: '3,100 m', isCharDham: true },
  { id: 'yamunotri', name: 'Yamunotri Dham', districtId: 'uttarkashi', x: 235, y: 170, altitude: '3,291 m', isCharDham: true },
  { id: 'auli', name: 'Auli Ski Resort', districtId: 'chamoli', x: 510, y: 215, altitude: '2,800 m' },
  { id: 'valley-of-flowers', name: 'Valley of Flowers', districtId: 'chamoli', x: 575, y: 185, altitude: '3,658 m' },
  { id: 'chopta', name: 'Chopta / Tungnath', districtId: 'rudraprayag', x: 450, y: 320, altitude: '2,680 m' },
  { id: 'mussoorie', name: 'Mussoorie', districtId: 'dehradun', x: 190, y: 275, altitude: '2,005 m' },
  { id: 'rishikesh', name: 'Rishikesh', districtId: 'dehradun', x: 215, y: 360, altitude: '372 m' },
  { id: 'tehri', name: 'Tehri Dam', districtId: 'tehri', x: 295, y: 325, altitude: '850 m' },
  { id: 'lansdowne', name: 'Lansdowne', districtId: 'pauri', x: 375, y: 460, altitude: '1,706 m' },
  { id: 'haridwar', name: 'Haridwar', districtId: 'haridwar', x: 200, y: 460, altitude: '314 m' },
  { id: 'nainital', name: 'Nainital Lakes', districtId: 'nainital', x: 545, y: 570, altitude: '2,084 m' },
  { id: 'kausani', name: 'Kausani', districtId: 'bageshwar', x: 635, y: 370, altitude: '1,890 m' },
  { id: 'ranikhet', name: 'Ranikhet / Binsar', districtId: 'almora', x: 585, y: 470, altitude: '1,869 m' },
  { id: 'munsiyari', name: 'Munsiyari', districtId: 'pithoragarh', x: 790, y: 285, altitude: '2,200 m' },
  { id: 'jim-corbett', name: 'Jim Corbett', districtId: 'udham-singh-nagar', x: 500, y: 640, altitude: '400 m' },
  { id: 'abbott-mount', name: 'Abbott Mount', districtId: 'champawat', x: 760, y: 510, altitude: '2,111 m' }
];

interface UttarakhandMapExplorerProps {
  onOpenBookingModal?: (destinationName?: string) => void;
}

export const UttarakhandMapExplorer: React.FC<UttarakhandMapExplorerProps> = ({
  onOpenBookingModal
}) => {
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>('chamoli');
  const [activeDivisionFilter, setActiveDivisionFilter] = useState<'All' | 'Garhwal' | 'Kumaon'>('All');
  const [hoveredDistrictId, setHoveredDistrictId] = useState<string | null>(null);
  const [hoveredHotspot, setHoveredHotspot] = useState<HotspotPin | null>(null);

  const selectedDistrict = UTTARAKHAND_DISTRICTS.find(d => d.id === selectedDistrictId) || UTTARAKHAND_DISTRICTS[0];

  const filteredDistricts = UTTARAKHAND_DISTRICTS.filter(d => {
    if (activeDivisionFilter === 'Garhwal') return d.division === 'Garhwal';
    if (activeDivisionFilter === 'Kumaon') return d.division === 'Kumaon';
    return true;
  });

  const handleSelectDistrict = (districtId: string) => {
    setSelectedDistrictId(districtId);
    // Smooth scroll down to destination cards on mobile
    if (window.innerWidth < 1024) {
      const detailsEl = document.getElementById('district-details-panel');
      if (detailsEl) {
        detailsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  const handleHotspotClick = (pin: HotspotPin, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedDistrictId(pin.districtId);
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
          <Compass className="w-3.5 h-3.5 animate-spin-slow" />
          <span>Interactive Uttarakhand Geographic Guide</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
          Explore by <span className="text-brand-orange">Districts & Locations</span>
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          Click any of Uttarakhand's 13 districts or prominent Himalayan pilgrimage & adventure hotspots on the map to explore the destinations, altitudes, and itineraries in that region.
        </p>

        {/* Division Filter Tabs */}
        <div className="inline-flex items-center p-1 bg-white rounded-2xl border border-[#D5CDBC] shadow-xs mt-6 gap-1">
          <button
            type="button"
            onClick={() => setActiveDivisionFilter('All')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeDivisionFilter === 'All'
                ? 'bg-brand-orange text-white shadow-md'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            All 13 Districts
          </button>
          <button
            type="button"
            onClick={() => setActiveDivisionFilter('Garhwal')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeDivisionFilter === 'Garhwal'
                ? 'bg-brand-orange text-white shadow-md'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Garhwal Division (7)
          </button>
          <button
            type="button"
            onClick={() => setActiveDivisionFilter('Kumaon')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeDivisionFilter === 'Kumaon'
                ? 'bg-brand-orange text-white shadow-md'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Kumaon Division (6)
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Map + District Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Map Box */}
        <div className="lg:col-span-7 bg-[#000044] rounded-3xl p-5 sm:p-7 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Subtle Himalayan topographic contours in background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/25 via-transparent to-transparent pointer-events-none"></div>

          {/* Map Controls & Status Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 relative z-10 pb-4 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-white font-bold">Uttarakhand Map Explorer</span>
              <span className="text-slate-400 text-[11px] hidden sm:inline">| Click to select district</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-blue-500/80"></span>
                <span>Garhwal</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-amber-500/80"></span>
                <span>Kumaon</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange"></span>
                <span>Hotspots</span>
              </span>
            </div>
          </div>

          {/* Responsive SVG Map Canvas */}
          <div className="relative w-full aspect-[1000/680] my-4 select-none">
            <svg
              viewBox="0 0 1000 680"
              className="w-full h-full drop-shadow-2xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Decorative Bounds / Elevation Rings */}
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="garhwalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#0F2454" stopOpacity="0.85" />
                </linearGradient>
                <linearGradient id="kumaonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#92400E" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#451A03" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF5A1F" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#C2410C" stopOpacity="0.95" />
                </linearGradient>
              </defs>

              {/* Geographic District Polygons */}
              <g id="districts-layer">
                {UTTARAKHAND_DISTRICTS.map((district) => {
                  const isSelected = selectedDistrictId === district.id;
                  const isHovered = hoveredDistrictId === district.id;
                  const isGarhwal = district.division === 'Garhwal';

                  return (
                    <path
                      key={district.id}
                      d={district.svgPath}
                      fill={
                        isSelected 
                          ? 'url(#activeGrad)' 
                          : isHovered
                            ? (isGarhwal ? '#2563EB' : '#D97706')
                            : (isGarhwal ? 'url(#garhwalGrad)' : 'url(#kumaonGrad)')
                      }
                      stroke={isSelected ? '#FFFFFF' : '#94A3B8'}
                      strokeWidth={isSelected ? '3' : '1.5'}
                      strokeDasharray={isSelected ? 'none' : 'none'}
                      className="transition-all duration-300 cursor-pointer filter hover:drop-shadow-lg"
                      onClick={() => handleSelectDistrict(district.id)}
                      onMouseEnter={() => setHoveredDistrictId(district.id)}
                      onMouseLeave={() => setHoveredDistrictId(null)}
                      aria-label={`Select ${district.name} district`}
                    />
                  );
                })}
              </g>

              {/* District Center Labels */}
              <g id="labels-layer" className="pointer-events-none">
                {UTTARAKHAND_DISTRICTS.map((district) => {
                  const isSelected = selectedDistrictId === district.id;
                  return (
                    <g key={`lbl-${district.id}`}>
                      <text
                        x={district.centerCoordinates.x}
                        y={district.centerCoordinates.y}
                        textAnchor="middle"
                        className={`font-display text-[12px] sm:text-[14px] font-extrabold tracking-wide transition-all ${
                          isSelected ? 'fill-white font-black scale-105' : 'fill-slate-100 opacity-90'
                        }`}
                        style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
                      >
                        {district.name}
                      </text>
                      <text
                        x={district.centerCoordinates.x}
                        y={district.centerCoordinates.y + 14}
                        textAnchor="middle"
                        className={`text-[9px] uppercase tracking-wider font-semibold ${
                          isSelected ? 'fill-amber-200' : 'fill-slate-300 opacity-75'
                        }`}
                      >
                        {district.destinations.length} Key Places
                      </text>
                    </g>
                  );
                })}
              </g>

              {/* Hotspot Location Pins */}
              <g id="hotspots-layer">
                {MAP_HOTSPOTS.map((pin) => {
                  const isSelectedDistrict = selectedDistrictId === pin.districtId;
                  const isHovered = hoveredHotspot?.id === pin.id;

                  return (
                    <g
                      key={pin.id}
                      transform={`translate(${pin.x}, ${pin.y})`}
                      className="cursor-pointer group"
                      onClick={(e) => handleHotspotClick(pin, e)}
                      onMouseEnter={() => setHoveredHotspot(pin)}
                      onMouseLeave={() => setHoveredHotspot(null)}
                    >
                      {/* Pulse halo for active/hovered pin */}
                      {(isSelectedDistrict || isHovered) && (
                        <circle
                          r="12"
                          className="fill-brand-orange/40 animate-ping"
                        />
                      )}

                      {/* Outer Ring */}
                      <circle
                        r="7"
                        fill={pin.isCharDham ? '#FF5A1F' : (isSelectedDistrict ? '#FF5A1F' : '#F59E0B')}
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        className="transition-transform group-hover:scale-125"
                      />

                      {/* Center Dot */}
                      <circle
                        r="2.5"
                        fill="#FFFFFF"
                      />

                      {/* Small text label beside pin */}
                      <text
                        x="10"
                        y="4"
                        className="text-[10px] font-bold fill-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] opacity-95 group-hover:fill-brand-orange group-hover:font-extrabold transition-colors"
                      >
                        {pin.name}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>

            {/* Hover Tooltip Popup if a hotspot pin is hovered */}
            {hoveredHotspot && (
              <div 
                className="absolute z-30 bg-slate-900/95 backdrop-blur-md text-white px-3 py-2 rounded-xl border border-brand-orange/50 shadow-2xl text-xs pointer-events-none transform -translate-x-1/2 -translate-y-full mb-3 animate-in fade-in zoom-in-95 duration-150"
                style={{
                  left: `${(hoveredHotspot.x / 1000) * 100}%`,
                  top: `${(hoveredHotspot.y / 680) * 100}%`
                }}
              >
                <div className="font-extrabold text-brand-orange flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{hoveredHotspot.name}</span>
                </div>
                <div className="text-[11px] text-slate-300">
                  Elevation: <strong className="text-white">{hoveredHotspot.altitude}</strong>
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  District: {UTTARAKHAND_DISTRICTS.find(d => d.id === hoveredHotspot.districtId)?.name}
                </div>
              </div>
            )}
          </div>

          {/* Quick District Selector Carousel Pills on Bottom of Map Box */}
          <div className="pt-3 border-t border-white/10 relative z-10">
            <div className="text-[11px] uppercase font-bold tracking-wider text-slate-400 mb-2 flex items-center justify-between">
              <span>Quick District Jump:</span>
              <span className="text-brand-orange font-bold">13 Districts Available</span>
            </div>
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto hide-scrollbar">
              {filteredDistricts.map((d) => (
                <button
                  key={d.id}
                  onClick={() => handleSelectDistrict(d.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedDistrictId === d.id
                      ? 'bg-brand-orange text-white shadow-md'
                      : 'bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10'
                  }`}
                >
                  {d.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Active District Showcase & Destinations List */}
        <div id="district-details-panel" className="lg:col-span-5 space-y-5">
          {/* District Header Overview Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D5CDBC] shadow-lg relative overflow-hidden">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${
                  selectedDistrict.division === 'Garhwal'
                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                    : 'bg-amber-100 text-amber-900 border border-amber-200'
                }`}>
                  {selectedDistrict.division} Division
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
                  {selectedDistrict.name} District
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-slate-500 uppercase font-bold tracking-wider block">Headquarters</span>
                <span className="font-bold text-slate-900 text-sm">{selectedDistrict.headquarters}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-brand-orange mb-2">
              {selectedDistrict.tagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedDistrict.overview}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-100 text-xs text-slate-700">
              <div className="bg-[#FAF8F5] p-2.5 rounded-xl border border-[#E8E2D5]">
                <span className="text-[10px] text-slate-500 block uppercase font-bold">Elevation Range</span>
                <strong className="text-slate-900">{selectedDistrict.elevationRange}</strong>
              </div>
              <div className="bg-[#FAF8F5] p-2.5 rounded-xl border border-[#E8E2D5]">
                <span className="text-[10px] text-slate-500 block uppercase font-bold">Total Area</span>
                <strong className="text-slate-900">{selectedDistrict.area}</strong>
              </div>
            </div>
          </div>

          {/* Destinations Inside Selected District Header */}
          <div className="flex items-center justify-between px-1">
            <h4 className="font-display font-extrabold text-lg text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-orange" />
              <span>Top Destinations in {selectedDistrict.name}</span>
            </h4>
            <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded-full border border-brand-orange/20">
              {selectedDistrict.destinations.length} Destinations
            </span>
          </div>

          {/* Destinations Cards Stack */}
          <div className="space-y-4">
            {selectedDistrict.destinations.map((dest) => (
              <div 
                key={dest.id}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-[#D5CDBC] shadow-md hover:border-brand-orange/50 transition-all group flex flex-col sm:flex-row gap-4 items-start sm:items-center"
              >
                {/* Destination Thumbnail */}
                <div className="relative w-full sm:w-32 aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback placeholder image if not present
                      (e.target as HTMLImageElement).src = '/images/destinations/kedarnath/photo-1.jpg';
                    }}
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white">
                    {dest.altitude.split('(')[0]}
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex-1 space-y-1.5 w-full">
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="font-display font-bold text-base text-slate-900 group-hover:text-brand-orange transition-colors">
                      {dest.name}
                    </h5>
                    <span className="text-[10px] text-slate-500 font-semibold bg-slate-100 px-2 py-0.5 rounded">
                      {dest.bestTime.split('&')[0]}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {dest.tagline}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1 text-[11px] text-slate-700">
                    {dest.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 truncate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <Link
                      to={`/destinations/${dest.id}`}
                      className="flex-1 py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Explore {dest.name}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => onOpenBookingModal ? onOpenBookingModal(dest.name) : null}
                      className="py-1.5 px-3 rounded-lg orange-gradient-btn text-white text-[11px] font-bold shadow-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Plan Trip</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom District Exploration Callout */}
          <div className="bg-[#000044] rounded-2xl p-5 text-white flex items-center justify-between gap-4 shadow-xl border border-white/10">
            <div>
              <h5 className="font-display font-bold text-sm text-white">
                Planning a trip covering {selectedDistrict.name}?
              </h5>
              <p className="text-xs text-slate-300 mt-0.5">
                Our local coordinators customize transport, stays, and permits.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenBookingModal ? onOpenBookingModal(`${selectedDistrict.name} Tour Package`) : null}
              className="orange-gradient-btn px-4 py-2.5 rounded-xl font-display font-bold text-xs text-white shrink-0 shadow-md cursor-pointer"
            >
              Custom Enquiry →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'kedarnath',
    name: 'Kedarnath',
    tagline: 'The Sacred Abode of Lord Shiva Amidst Glacial Peaks',
    category: 'Spiritual',
    image: '/images/destinations/kedarnath/photo-1.jpg',
    gallery: [
      '/images/destinations/kedarnath/photo-1.jpg',
      '/images/destinations/kedarnath/photo-2.jpg',
      '/images/destinations/kedarnath/photo-3.jpg',
      '/images/destinations/kedarnath/photo-4.jpg',
      '/images/destinations/kedarnath/photo-5.jpg',
      '/images/destinations/kedarnath/photo-6.jpg'
    ],
    description: 'Set at an altitude of 3,584 metres against the magnificent Kedar dome, Kedarnath is the most revered shrine of Lord Shiva in the Garhwal Himalayas. A divine journey of faith, endurance, and unmatched alpine beauty.',
    highlights: ['Kedarnath Temple (1200+ yrs old)', 'Bhairavnath Temple viewpoint', 'Vasuki Tal glacial trek', 'Helicopter and pony trail options'],
    bestTime: 'May to June & September to October',
    altitude: '3,584 m (11,759 ft)',
    idealDuration: '3 - 5 Days',
    startingPrice: '₹14,999',
    isPopular: true,
    isFeaturedHero: true,
    topAttractions: [
      { name: 'Kedarnath Temple', desc: 'Ancient stone temple dedicated to Lord Shiva surrounded by snow clad peaks.' },
      { name: 'Bhairavnath Temple', desc: 'Protector deity offering panoramic valley and temple vistas.' },
      { name: 'Vasuki Tal', desc: 'High altitude glacial lake at 4,135 meters known for Brahma Kamal flowers.' },
      { name: 'Gaurikund', desc: 'Starting point of the Kedarnath trek with sacred hot water sulphur springs.' }
    ],
    howToReach: {
      byAir: 'Nearest airport is Jolly Grant, Dehradun (238 km to Gaurikund). Helicopter services available from Phata/Guptkashi/Sirsi.',
      byTrain: 'Nearest railway stations are Rishikesh (216 km) and Haridwar (240 km).',
      byRoad: 'Well connected by road up to Sonprayag/Gaurikund via NH58 and NH107.'
    }
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    tagline: 'Yoga Capital of the World & Gateway to Himalayan Adventure',
    category: 'Adventure',
    image: '/images/destinations/rishikesh/photo-1.jpg',
    gallery: [
      '/images/destinations/rishikesh/photo-1.jpg',
      '/images/destinations/rishikesh/photo-2.jpg',
      '/images/destinations/rishikesh/photo-3.jpg',
      '/images/destinations/rishikesh/photo-4.jpg',
      '/images/destinations/rishikesh/photo-5.jpg'
    ],
    description: 'Where the holy Ganges surges down the Shivalik foothills, Rishikesh bridges serene spirituality with high-adrenaline sports like white-water rafting, bungee jumping, riverside luxury camping, and evening Ganga Aarti.',
    highlights: ['White water rafting (Grade III & IV)', 'Triveni Ghat Ganga Aarti', 'Beatles Ashram & Tapovan', 'India’s highest Bungee Jump (83m)'],
    bestTime: 'September to May (Round the year except monsoons)',
    altitude: '372 m (1,220 ft)',
    idealDuration: '2 - 4 Days',
    startingPrice: '₹4,999',
    isPopular: true,
    topAttractions: [
      { name: 'Triveni Ghat', desc: 'Famous for the magnificent evening Maha Aarti with chants and floating lamps.' },
      { name: 'Ram Jhula & Laxman Jhula', desc: 'Iconic suspension bridges over the turquoise Ganges.' },
      { name: 'Shivpuri River Camps', desc: 'Riverside white sandy beach campsites with rafting launches.' },
      { name: 'Beatles Ashram', desc: 'Chaurasi Kutia where the Beatles stayed in 1968 for Transcendental Meditation.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun is just 20 km away.',
      byTrain: 'Yog Nagari Rishikesh Railway Station is right in town.',
      byRoad: '6 hours direct highway drive from Delhi (240 km).'
    }
  },
  {
    id: 'auli',
    name: 'Auli',
    tagline: 'India’s Premier Skiing Paradise & 360° Himalayan Vista',
    category: 'Adventure',
    image: '/images/destinations/auli/photo-1.jpg',
    gallery: [
      '/images/destinations/auli/photo-1.jpg',
      '/images/destinations/auli/photo-2.jpg',
      '/images/destinations/auli/photo-3.jpg',
      '/images/destinations/auli/photo-4.jpg',
      '/images/destinations/auli/photo-5.jpg'
    ],
    description: 'Surrounded by pine and oak forests with front-row views of Nanda Devi, Kamet, and Mana Parvat, Auli is the ultimate winter wonderland for skiing, snowboarding, and highest cable car rides.',
    highlights: ['Auli Ropeway (Longest in Asia, 4 km)', 'Artificial Lake with reflections', 'Nanda Devi 360° Panorama', 'Gorson Bugyal Snow Trek'],
    bestTime: 'December to March (Snow) & April to June (Meadows)',
    altitude: '2,800 m (9,200 ft)',
    idealDuration: '3 - 5 Days',
    startingPrice: '₹12,499',
    isPopular: true,
    isFeaturedHero: true,
    topAttractions: [
      { name: 'Auli Ropeway', desc: 'Connects Joshimath to Auli offering bird’s-eye views of Himalayan ranges.' },
      { name: 'Gorson Bugyal', desc: 'Sprawling alpine meadow trek through conifer trees.' },
      { name: 'Auli Artificial Lake', desc: 'World’s highest man-made lake designed for snowmaking.' },
      { name: 'Joshimath Base', desc: 'Historical transit town with Shankaracharya Math and ropeway terminal.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (280 km).',
      byTrain: 'Rishikesh Railway Station (250 km).',
      byRoad: 'Scenic mountain drive via Rishikesh - Devprayag - Joshimath (NH58).'
    }
  },
  {
    id: 'chopta',
    name: 'Chopta',
    tagline: 'The Mini Switzerland of Uttarakhand & Tungnath Gateway',
    category: 'Offbeat Uttarakhand',
    image: '/images/destinations/chopta/photo-1.jpg',
    gallery: [
      '/images/destinations/chopta/photo-1.jpg',
      '/images/destinations/chopta/photo-2.jpg',
      '/images/destinations/chopta/photo-3.jpg',
      '/images/destinations/chopta/photo-4.jpg',
      '/images/destinations/chopta/photo-5.jpg'
    ],
    description: 'An untouched alpine meadow nestled within Kedarnath Wildlife Sanctuary. Chopta is the base for Tungnath (highest Shiva temple on earth) and the dramatic Chandrashila summit.',
    highlights: ['Tungnath Temple (3,680m)', 'Chandrashila Peak (4,000m)', 'Deoria Tal Reflection Lake', 'Lush Rhododendron Forests'],
    bestTime: 'April to June & September to November (Winter treks in Jan-Feb)',
    altitude: '2,680 m (8,790 ft)',
    idealDuration: '3 - 4 Days',
    startingPrice: '₹7,999',
    isPopular: true,
    topAttractions: [
      { name: 'Tungnath Temple', desc: '3rd Kedar and world’s highest stone Shiva shrine.' },
      { name: 'Chandrashila Summit', desc: 'Breath-taking 360-degree panorama of Chaukhamba, Trishul, and Nanda Devi.' },
      { name: 'Deoria Tal', desc: 'Emerald lake at 2,438m reflecting Chaukhamba peaks in still waters.' },
      { name: 'Rohini Bugyal', desc: 'Secluded pasture nestled in dense oak forests.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (225 km).',
      byTrain: 'Rishikesh (205 km) or Haridwar (230 km).',
      byRoad: 'Accessible via Rudraprayag - Ukhimath - Chopta road.'
    }
  },
  {
    id: 'mussoorie',
    name: 'Mussoorie',
    tagline: 'The Queen of Hills & Quintessential Colonial Retreat',
    category: 'Weekend Escapes',
    image: '/images/destinations/mussoorie/photo-1.jpg',
    gallery: [
      '/images/destinations/mussoorie/photo-1.jpg',
      '/images/destinations/mussoorie/photo-2.jpg',
      '/images/destinations/mussoorie/photo-3.jpg',
      '/images/destinations/mussoorie/photo-4.jpg',
      '/images/destinations/mussoorie/photo-5.jpg'
    ],
    description: 'Perched overlooking the Doon Valley and Shivalik range, Mussoorie charms travellers with misty colonial promenades, cascading waterfalls, quaint bakeries, and romantic Himalayan winterline sunsets.',
    highlights: ['Mall Road & Camel’s Back Road', 'Kempty Falls & George Everest House', 'Lal Tibba highest viewpoint', 'Dhanaulti Eco Park day trip'],
    bestTime: 'March to June & September to December',
    altitude: '2,005 m (6,578 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: '₹5,499',
    isPopular: true,
    topAttractions: [
      { name: 'Sir George Everest House', desc: 'Historic estate with jaw-dropping views of Aglar Valley and snow peaks.' },
      { name: 'Lal Tibba', desc: 'Oldest viewing point with telescope vistas of Badrinath and Kedarnath.' },
      { name: 'Company Garden', desc: 'Lush botanical garden with fountains and paddle boating.' },
      { name: 'Camel’s Back Road', desc: 'Peaceful 3km walking promenade shaped like a camel’s hump.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport is 60 km away (1.5 hours).',
      byTrain: 'Dehradun Railway Station is 34 km away (1 hour).',
      byRoad: '6-7 hours from Delhi via Delhi-Dehradun Expressway.'
    }
  },
  {
    id: 'nainital',
    name: 'Nainital',
    tagline: 'The Enchanting City of Lakes & Verdant Kumaon Hills',
    category: 'Hills & Valleys',
    image: '/images/destinations/nainital/photo-1.jpg',
    gallery: [
      '/images/destinations/nainital/photo-1.jpg',
      '/images/destinations/nainital/photo-2.jpg',
      '/images/destinations/nainital/photo-3.jpg',
      '/images/destinations/nainital/photo-4.jpg',
      '/images/destinations/nainital/photo-5.jpg'
    ],
    description: 'Set around the emerald pear-shaped Naini Lake, this legendary hill resort combines boating, colonial architecture, vibrant Tibetan markets, and panoramic viewpoints over the Kumaon Himalayas.',
    highlights: ['Naini Lake Yachting & Boating', 'Naina Devi Temple (Shaktipeeth)', 'Snow View Point & Ropeway', 'Bhimtal & Pangot Birding trails'],
    bestTime: 'March to June & October to February',
    altitude: '2,084 m (6,837 ft)',
    idealDuration: '3 - 4 Days',
    startingPrice: '₹6,499',
    isPopular: true,
    topAttractions: [
      { name: 'Naini Lake', desc: 'Picturesque freshwater body surrounded by seven lush hills.' },
      { name: 'Naina Peak (Cheena Peak)', desc: 'Highest peak in Nainital (2,615m) offering grand Himalayan views.' },
      { name: 'Pangot & Kilbury Sanctuary', desc: 'Haven for over 500 Himalayan bird species.' },
      { name: 'Tiffin Top (Dorothy’s Seat)', desc: 'Terraced hilltop viewpoint ideal for picnics and nature walks.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport is 70 km away.',
      byTrain: 'Kathgodam Railway Station is 35 km away (1 hour).',
      byRoad: 'Direct highway connectivity from Delhi (315 km, 7 hours).'
    }
  },
  {
    id: 'valley-of-flowers',
    name: 'Valley of Flowers',
    tagline: 'UNESCO World Heritage Site with Hundreds of Alpine Blooms',
    category: 'Wildlife',
    image: '/images/destinations/valley-of-flowers/photo-1.jpg',
    gallery: [
      '/images/destinations/valley-of-flowers/photo-1.jpg',
      '/images/destinations/valley-of-flowers/photo-2.jpg',
      '/images/destinations/valley-of-flowers/photo-3.jpg',
      '/images/destinations/valley-of-flowers/photo-4.jpg',
      '/images/destinations/valley-of-flowers/photo-5.jpg'
    ],
    description: 'A botanical wonderland hidden in Chamoli district where over 500 species of wild Himalayan flowers carpet the valley floor against cascading streams and towering snow-capped peaks.',
    highlights: ['UNESCO World Heritage National Park', 'Hemkund Sahib high altitude Sikh shrine (4,329m)', 'Endemic flora: Blue Poppy, Brahma Kamal', 'Pushpawati River meadows'],
    bestTime: 'July to September (Peak bloom in late July - August)',
    altitude: '3,658 m (12,000 ft)',
    idealDuration: '5 - 6 Days',
    startingPrice: '₹13,999',
    isPopular: true,
    isFeaturedHero: true,
    topAttractions: [
      { name: 'Valley National Park', desc: 'Carpet of alpine flora framed by Rataban, Gauri Parbat and Nilgiri Parbat.' },
      { name: 'Hemkund Sahib', desc: 'Sacred star-shaped gurudwara beside a pristine glacial lake.' },
      { name: 'Ghangaria Base', desc: 'Scenic mountain hamlet and base camp for Valley and Hemkund.' },
      { name: 'Govindghat', desc: 'Confluence of Alaknanda and Lakshman Ganga rivers.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (290 km to Govindghat).',
      byTrain: 'Rishikesh Station (270 km to Govindghat).',
      byRoad: 'Drive from Haridwar/Rishikesh to Govindghat, then trek 14 km to Ghangaria.'
    }
  },
  {
    id: 'jim-corbett',
    name: 'Jim Corbett National Park',
    tagline: 'India’s Oldest Tiger Reserve & Raw Jungle Safari',
    category: 'Wildlife',
    image: '/images/destinations/jim-corbett/photo-1.jpg',
    gallery: [
      '/images/destinations/jim-corbett/photo-1.jpg',
      '/images/destinations/jim-corbett/photo-2.jpg',
      '/images/destinations/jim-corbett/photo-3.jpg',
      '/images/destinations/jim-corbett/photo-4.jpg',
      '/images/destinations/jim-corbett/photo-5.jpg'
    ],
    description: 'Spread over 520 square kilometres in Nainital and Pauri Garhwal districts, Corbett is the premier wilderness for Royal Bengal Tigers, Asiatic Elephants, and diverse Himalayan birdlife along the Ramganga River.',
    highlights: ['Dhikala & Bijrani Open Jeep Safari', 'Luxury Jungle River Resorts', 'Corbett Waterfalls & Heritage Museum', 'Over 600 Bird Species'],
    bestTime: 'November to June (Dhikala opens Nov 15)',
    altitude: '400 - 1,220 m',
    idealDuration: '2 - 3 Days',
    startingPrice: '₹7,499',
    isPopular: true,
    topAttractions: [
      { name: 'Dhikala Zone', desc: 'Core tiger territory with sweeping grasslands and Ramganga riverbed.' },
      { name: 'Bijrani & Jhirna Zones', desc: 'Rich Sal forests renowned for leopard and sloth bear sightings.' },
      { name: 'Garjiya Devi Temple', desc: 'Picturesque temple perched on a giant rock in Kosi River.' },
      { name: 'Corbett Falls', desc: 'Scenic 20m waterfall surrounded by teak wood forests.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (80 km) or Delhi IGI (260 km).',
      byTrain: 'Ramnagar Railway Station is 12 km from park gates.',
      byRoad: 'Smooth 5.5 hour drive from Delhi (245 km).'
    }
  },
  {
    id: 'badrinath',
    name: 'Badrinath',
    tagline: 'The Sanctum of Lord Vishnu Between Nar & Narayana Mountains',
    category: 'Spiritual',
    image: '/images/destinations/badrinath/photo-1.jpg',
    gallery: [
      '/images/destinations/badrinath/photo-1.jpg',
      '/images/destinations/badrinath/photo-2.jpg',
      '/images/destinations/badrinath/photo-3.jpg',
      '/images/destinations/badrinath/photo-4.jpg',
      '/images/destinations/badrinath/photo-5.jpg'
    ],
    description: 'One of the four sacred Char Dham shrines of India, Badrinath stands majestically along the Alaknanda River under the shadow of the pyramid-shaped Nilkantha peak.',
    highlights: ['Badrinath Temple & Tapt Kund', 'Mana Village (First Indian Village on Tibet border)', 'Vasudhara Falls (122m cascade)', 'Nilkantha Peak sunrise view'],
    bestTime: 'May to June & September to November',
    altitude: '3,300 m (10,827 ft)',
    idealDuration: '3 - 4 Days',
    startingPrice: '₹13,999',
    isPopular: true,
    topAttractions: [
      { name: 'Badrinath Temple', desc: 'Vibrant ancient shrine housing 1-metre black stone deity of Badrinarayan.' },
      { name: 'Mana Village', desc: 'Border village featuring Vyas Gufa, Ganesh Gufa, and Bhim Pul.' },
      { name: 'Tapt Kund', desc: 'Natural hot sulphur spring having sacred therapeutic waters.' },
      { name: 'Vasudhara Falls', desc: 'Spectacular alpine waterfall cascading down sheer rock cliff.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (314 km) / Helipad at Badrinath.',
      byTrain: 'Rishikesh Station (295 km).',
      byRoad: 'Accessible by motorable NH58 passing through Joshimath and Vishnuprayag.'
    }
  },
  {
    id: 'munsiyari',
    name: 'Munsiyari',
    tagline: 'The Little Kashmir of Kumaon at the Foot of Panchachuli',
    category: 'Offbeat Uttarakhand',
    image: '/images/destinations/munsiyari/photo-1.jpg',
    gallery: [
      '/images/destinations/munsiyari/photo-1.jpg',
      '/images/destinations/munsiyari/photo-2.jpg',
      '/images/destinations/munsiyari/photo-3.jpg',
      '/images/destinations/munsiyari/photo-4.jpg',
      '/images/destinations/munsiyari/photo-5.jpg'
    ],
    description: 'Perched on the rim of Goriganga river valley in Pithoragarh, Munsiyari provides unhindered vistas of the iconic five snow peaks of Panchachuli and serves as gateway to Milam & Ralam glaciers.',
    highlights: ['Panchachuli 5 Peaks View', 'Birthi Waterfalls (126m)', 'Milam & Ralam Glacier trails', 'Khaliya Top Snow Trek'],
    bestTime: 'March to June & September to November',
    altitude: '2,200 m (7,200 ft)',
    idealDuration: '4 - 6 Days',
    startingPrice: '₹11,499',
    isPopular: false,
    topAttractions: [
      { name: 'Khaliya Top', desc: 'Sub-alpine trek offering 360-degree views of Himalayan snowline.' },
      { name: 'Birthi Falls', desc: 'Majestic waterfall dropping through lush mountain gorges.' },
      { name: 'Tribal Heritage Museum', desc: 'Curated artefacts of the ancient Shauka trading community with Tibet.' },
      { name: 'Darkot Village', desc: 'Quaint hamlet famous for handmade Pashmina and Angora wool shawls.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (310 km).',
      byTrain: 'Kathgodam Railway Station (275 km).',
      byRoad: 'Scenic road drive via Almora - Bageshwar - Thal - Munsiyari.'
    }
  },
  {
    id: 'tehri',
    name: 'Tehri Lake',
    tagline: 'Asia’s Largest Dam Reservoir & Water Adventure Hub',
    category: 'Adventure',
    image: '/images/destinations/tehri/photo-1.jpg',
    gallery: [
      '/images/destinations/tehri/photo-1.jpg',
      '/images/destinations/tehri/photo-2.jpg',
      '/images/destinations/tehri/photo-3.jpg',
      '/images/destinations/tehri/photo-4.jpg',
      '/images/destinations/tehri/photo-5.jpg'
    ],
    description: 'A massive turquoise reservoir surrounded by terraced green hills. Tehri has transformed into Uttarakhand’s ultimate lake destination with jet-skiing, speedboats, houseboats, and flyboarding.',
    highlights: ['Tehri Dam (Asia’s tallest)', 'Floating Houseboats & Water sports', 'Jet Skiing & Banana rides', 'Panoramic Dobra-Chanti suspension bridge'],
    bestTime: 'October to May',
    altitude: '1,750 m',
    idealDuration: '2 - 3 Days',
    startingPrice: '₹5,999',
    isPopular: false,
    topAttractions: [
      { name: 'Tehri Dam Viewpoint', desc: 'Engineering marvel towering over the Bhagirathi River.' },
      { name: 'Floating Huts & Marina', desc: 'Luxury stay experience right over the lake waters.' },
      { name: 'Dobra Chanti Bridge', desc: 'India’s longest single-lane motorable suspension bridge with night lighting.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (85 km).',
      byTrain: 'Rishikesh Railway Station (75 km).',
      byRoad: 'Direct highway drive from Rishikesh or Dehradun via Chamba.'
    }
  },
  {
    id: 'lansdowne',
    name: 'Lansdowne',
    tagline: 'Quiet Cantonment Charm, Pine Woods & Colonial Serenity',
    category: 'Weekend Escapes',
    image: '/images/destinations/lansdowne/photo-1.jpg',
    gallery: [
      '/images/destinations/lansdowne/photo-1.jpg',
      '/images/destinations/lansdowne/photo-2.jpg',
      '/images/destinations/lansdowne/photo-3.jpg',
      '/images/destinations/lansdowne/photo-4.jpg',
      '/images/destinations/lansdowne/photo-5.jpg'
    ],
    description: 'Founded as a British military cantonment and home to the Garhwal Rifles, Lansdowne is an unspoilt hill station filled with thick blue pine forests, heritage churches, and peaceful forest walks.',
    highlights: ['Tip-in-Top viewpoint', 'Bhulla Tal Lake', 'Garhwal Rifles War Memorial', 'St. John’s Colonial Church'],
    bestTime: 'Round the year (Except heavy monsoon)',
    altitude: '1,706 m (5,600 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: '₹4,999',
    isPopular: false,
    topAttractions: [
      { name: 'Tip-in-Top (Tiffin Top)', desc: 'Ridge viewpoint overlooking the snow peaks of Chaukhamba and Trishul.' },
      { name: 'Bhulla Tal', desc: 'Serene artificial lake maintained by the army with paddle boating.' },
      { name: 'Garhwal Rifles Regimental Museum', desc: 'Houses historical army weapons and wartime exhibits.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (145 km).',
      byTrain: 'Kotdwar Railway Station (40 km, 1.5 hours).',
      byRoad: '6 hours drive from Delhi (250 km) via Kotdwar.'
    }
  }
];

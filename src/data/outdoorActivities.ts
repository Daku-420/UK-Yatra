import { OutdoorActivity, OutdoorCategory } from '../types';

export interface OutdoorCategoryItem {
  id: OutdoorCategory;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  image: string;
  imagePosition?: string;
  examples: string[];
}

export const OUTDOOR_CATEGORIES: OutdoorCategoryItem[] = [
  {
    id: 'Trekking',
    name: 'Trekking',
    icon: '🥾',
    tagline: 'High Alpine Trails & Sacred Summits',
    description: 'Traverse whispering pine forests, rolling alpine meadows (bugyals), and cross mountain passes overlooking 7,000m+ Himalayan giants.',
    image: '/assets/OUTDOOR ACTIVITIES/TREKKING.jpg',
    imagePosition: 'center 80%',
    examples: [
      'Kedarkantha Trek',
      'Valley of Flowers Trek',
      'Nag Tibba Trek',
      'Chopta–Tungnath–Chandrashila',
      'Dayara Bugyal',
      'Har Ki Dun',
      'Brahmatal',
      'Kuari Pass'
    ]
  },
  {
    id: 'Water Adventures',
    name: 'Water Adventures',
    icon: '🌊',
    tagline: 'Turbulent Glacial Rapids & Cascades',
    description: 'Feel the raw fury of the holy Ganga and Tons rivers with Grade III-IV rapids, cliff jumps, and technical white-water kayaking.',
    image: '/assets/OUTDOOR ACTIVITIES/WATER ADVENTURE.jpg',
    imagePosition: 'center 85%',
    examples: [
      'River Rafting',
      'Kayaking',
      'River Crossing',
      'Waterfall Rappelling',
      'Cliff Jumping'
    ]
  },
  {
    id: 'Adventure Sports',
    name: 'Adventure Sports',
    icon: '🪂',
    tagline: 'Sheer Gravity & Adrenaline Surges',
    description: 'Leap off fixed cantilever platforms 83m above rocky gorges, zipline across the holy Ganges, or soar with thermal updrafts on a paraglider.',
    image: '/assets/OUTDOOR ACTIVITIES/ADVENTURE SPORTS.jpg',
    imagePosition: '55% 40%',
    examples: [
      'Bungee Jumping',
      'Giant Swing',
      'Flying Fox / Zipline',
      'Paragliding',
      'Rope Adventures'
    ]
  },
  {
    id: 'Camping & Nature',
    name: 'Camping & Nature',
    icon: '🏕️',
    tagline: 'Under Million-Star Himalayan Skies',
    description: 'Immerse in nature with luxury riverside Swiss camps, alpine meadow pitches, crackling bonfires, and zero light-pollution stargazing.',
    image: '/assets/OUTDOOR ACTIVITIES/CAMPING & NATURE.jpg',
    imagePosition: 'center 85%',
    examples: [
      'Riverside Camping',
      'Forest Camping',
      'Mountain Camping',
      'Luxury Glamping',
      'Stargazing',
      'Nature Walks',
      'Village Experiences'
    ]
  },
  {
    id: 'Snow Adventures',
    name: 'Snow Adventures',
    icon: '❄️',
    tagline: 'Powder Slopes & Frozen Wonderlands',
    description: 'Carve powdery runs on India’s top ski resort in Auli, sledge down virgin slopes, and pitch camps amidst snow-covered conifer ridges.',
    image: '/assets/OUTDOOR ACTIVITIES/SNOW ADVENTURE.jpg',
    imagePosition: 'center 50%',
    examples: [
      'Skiing in Auli',
      'Snow Trekking',
      'Snow Camping',
      'Snow Sledging',
      'Winter Hiking',
      'Snow Experiences'
    ]
  },
  {
    id: 'Climbing & Rappelling',
    name: 'Climbing & Rappelling',
    icon: '🧗',
    tagline: 'Natural Granite & Thundering Waterfalls',
    description: 'Test your nerve and balance against natural Himalayan rock faces, overhangs, and vertical cascades under the watchful eye of certified mountaineers.',
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1000&auto=format&fit=crop',
    imagePosition: 'center 35%',
    examples: [
      'Rock Climbing',
      'Rappelling',
      'Bouldering',
      'Adventure Rope Courses'
    ]
  },
  {
    id: 'Wildlife & Nature',
    name: 'Wildlife & Nature',
    icon: '🐾',
    tagline: 'Tiger Territory & Himalayan Flora',
    description: 'Track the Royal Bengal Tiger in Jim Corbett, spot elusive Himalayan monals, and wander through lush UNESCO biosphere reserves.',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1000&auto=format&fit=crop',
    imagePosition: 'center 40%',
    examples: [
      'Jungle Safari',
      'Bird Watching',
      'Wildlife Photography',
      'Nature Trails',
      'Forest Experiences'
    ]
  }
];

export interface DestinationAdventureItem {
  id: string;
  name: string;
  tagline: string;
  image: string;
  badge: string;
  activitiesCount: string;
  activitiesList: string[];
}

export const DESTINATION_ADVENTURES: DestinationAdventureItem[] = [
  {
    id: 'Rishikesh',
    name: 'Rishikesh',
    tagline: 'Adventure Capital of India',
    image: '/images/destinations/rishikesh/photo-1.jpg',
    badge: 'World Famous',
    activitiesCount: '15+ Adventures',
    activitiesList: ['River Rafting', 'Bungee Jumping', 'Camping', 'Zipline', 'Kayaking']
  },
  {
    id: 'Auli',
    name: 'Auli',
    tagline: 'India’s Premier Ski Resort',
    image: '/images/destinations/auli/photo-1.jpg',
    badge: 'Winter Paradise',
    activitiesCount: '8+ Adventures',
    activitiesList: ['Skiing', 'Snow Trekking', 'Snow Experiences', 'Camping']
  },
  {
    id: 'Chopta',
    name: 'Chopta',
    tagline: 'Mini Switzerland & Tungnath Base',
    image: '/images/destinations/chopta/photo-1.jpg',
    badge: 'Scenic Bugyals',
    activitiesCount: '10+ Adventures',
    activitiesList: ['Trekking', 'Camping', 'Snow Trekking', 'Stargazing']
  },
  {
    id: 'Mussoorie',
    name: 'Mussoorie',
    tagline: 'Queen of the Hills & Ridge Walks',
    image: '/images/destinations/mussoorie/photo-1.jpg',
    badge: 'Colonial Trails',
    activitiesCount: '12+ Adventures',
    activitiesList: ['Trekking', 'Camping', 'Rock Climbing', 'Adventure Activities']
  },
  {
    id: 'Jim Corbett',
    name: 'Jim Corbett',
    tagline: 'Oldest National Park in India',
    image: '/images/destinations/jim-corbett/photo-1.jpg',
    badge: 'Tiger Kingdom',
    activitiesCount: '7+ Adventures',
    activitiesList: ['Jungle Safari', 'Bird Watching', 'Wildlife Experiences']
  }
];

export const OUTDOOR_ACTIVITIES: OutdoorActivity[] = [
  {
    id: 'kedarkantha-trek',
    title: 'Kedarkantha Winter Trek',
    category: 'Trekking',
    location: 'Sankri, Uttarkashi, Uttarakhand',
    destination: 'Uttarkashi',
    difficulty: 'Moderate',
    duration: '4–6 Days',
    durationDetails: '5 Days / 4 Nights',
    season: ['Winter', 'Spring'],
    bestSeason: 'December to April (Peak Winter Snow)',
    startingPrice: 'Pricing on Request',
    maxAltitude: '12,500 ft (3,810 m)',
    image: '/assets/OUTDOOR ACTIVITIES/TREKKING.jpg',
    imagePosition: 'center 80%',
    gallery: [
      '/assets/OUTDOOR ACTIVITIES/TREKKING.jpg',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDesc: 'Summit one of India’s most iconic winter snow peaks with a 360-degree panorama of 13 Himalayan giants.',
    fullDesc: 'Kedarkantha is celebrated as India’s finest winter trek. Starting from the charming wooden hamlet of Sankri in Govind Pashu Vihar National Park, the trail leads through dense oak and pine woods carpeted in knee-deep snow, opening up to frozen Juda Ka Talab. The summit push at dawn rewards trekkers with a jaw-dropping sunrise illuminating Swargarohini, Bandarpoonch, Black Peak, and the Gangotri range.',
    topLocations: ['Sankri Village', 'Juda Ka Talab', 'Kedarkantha Base Camp', 'Kedarkantha Summit (12,500 ft)'],
    highlights: [
      'Complete 360-degree Himalayan summit panorama at 12,500 ft',
      'Camping beside the frozen Juda Ka Talab lake amidst pine woods',
      'Thrilling snow-sliding descents on the post-summit trail',
      'Rich Garhwali culture and traditional wooden homestays in Sankri',
      'Certified IMF trek leaders with sub-zero alpine gear and safety backup'
    ],
    whatsIncluded: [
      '4 nights accommodation (Alpine dome tents on twin/triple sharing & Sankri guest house)',
      'All nutritious vegetarian meals from Day 1 dinner to Day 5 breakfast',
      'Certified Wilderness First Aid (WFA) trek leaders & mountain local guides',
      'Microspikes, gaiters, 4-season sleeping bags, and sleeping mats',
      'Forest entry permits, camping fees & environmental cess',
      'Safety equipment: Medical kit, oxygen cylinders & pulse oximeters'
    ],
    whatsExcluded: [
      'Transport from Dehradun to Sankri and return (available as add-on)',
      'Personal trekking gear (trekking poles, thermal layers, backpack)',
      'Backpack offloading charges',
      'Personal insurance and any emergency evacuation costs'
    ],
    safetyInfo: [
      'Trek leaders certified by Nehru Institute of Mountaineering (NIM)',
      'Twice-daily pulse and blood-oxygen saturation checks',
      'Strict acclimatization protocol followed on each ascent',
      'Emergency evacuation protocol with local mountain rescue units'
    ],
    thingsToCarry: [
      'Sturdy waterproof trekking shoes with ankle support and deep lugs',
      'Puffer down jacket rated for -10°C, fleece jacket, and thermal inners',
      'Waterproof gloves (fleece inner + waterproof outer) & balaclava',
      'UV sunglasses (Category 3 or 4) to prevent snow blindness',
      'Trekking poles with snow baskets',
      '50-60L rucksack with rain cover',
      'Headlamp with extra lithium batteries'
    ],
    bestTimeToVisit: 'December to April offers deep powder snow and frozen alpine lakes. April to May reveals blooming rhododendrons and vibrant green meadows, while October to November provides crystal-clear blue skies and razor-sharp views of Himalayan ranges.',
    faqs: [
      {
        question: 'Is Kedarkantha suitable for first-time trekkers?',
        answer: 'Yes! Kedarkantha is considered an ideal beginner-to-intermediate snow trek. While it involves uphill hiking in snow, the daily walking hours (4-6 hours) are gradual, making it manageable for anyone with basic physical fitness.'
      },
      {
        question: 'How cold does it get at Kedarkantha Base Camp?',
        answer: 'In peak winter (December to February), night temperatures can drop between -5°C to -12°C. We supply premium sub-zero duck-down sleeping bags and insulated foam mats to keep you warm and cozy inside all-weather dome tents.'
      },
      {
        question: 'Is mobile network available on the trail?',
        answer: 'BSNL and Jio offer intermittent connectivity up to Sankri village. Beyond Sankri on the trail, there is no reliable mobile network, allowing you to completely unplug in pure Himalayan wilderness.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'rishikesh-river-rafting',
    title: 'Rishikesh White Water River Rafting',
    category: 'Water Adventures',
    location: 'Shivpuri to NIM Beach, Rishikesh, Uttarakhand',
    destination: 'Rishikesh',
    difficulty: 'Moderate',
    duration: '1 Day',
    durationDetails: '1 Day (approx. 4–5 Hours)',
    season: ['Spring', 'Summer', 'Autumn', 'Winter'],
    bestSeason: 'Late September to June',
    startingPrice: 'Pricing on Request',
    image: '/assets/OUTDOOR ACTIVITIES/WATER ADVENTURE.jpg',
    imagePosition: 'center 85%',
    gallery: [
      '/assets/OUTDOOR ACTIVITIES/WATER ADVENTURE.jpg',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDesc: 'Conquer legendary Grade III and IV rapids like Roller Coaster, Golf Course, and The Wall on the holy turquoise Ganga.',
    fullDesc: 'Rishikesh is celebrated worldwide as India’s undisputed capital of white-water rafting. Plunge into exhilarating white-water waves rushing down from the Gangotri glacier. Guided by international certified river guides and escorted by safety rescue kayakers, paddle through iconic rapids, leap off high river boulders, and body-surf in calm emerald river eddies.',
    topLocations: ['Marine Drive (26 km)', 'Shivpuri (16 km)', 'Brahmpuri (10 km)', 'Kaudiyala (36 km Grade IV+)'],
    highlights: [
      'Navigate famous Grade III & IV rapids (Roller Coaster, Golf Course, Three Blind Mice)',
      'Exciting cliff jumping from a 25-foot boulder into the holy river',
      'Body surfing in calm turquoise stretches with professional life jackets',
      'Accompanied by dedicated safety rescue kayakers on every expedition',
      'GoPro video recording assistance available on request'
    ],
    whatsIncluded: [
      'High-grade self-bailing river raft with carbon-fiber paddles',
      'CE-certified high-buoyancy life jacket and river helmet',
      'Certified river trip leader and secondary safety kayaker',
      'Transfer from Rishikesh meeting office to rafting launch point',
      'Safety briefing, mock water drill, and cliff jump guidance'
    ],
    whatsExcluded: [
      'Optional GoPro video recordings',
      'Personal snacks and bottled beverages',
      'Transport from hotel to Rishikesh office'
    ],
    safetyInfo: [
      'Mandatory International Rafting Federation (IRF) certified river guides',
      'Dedicated safety kayak follows each raft for immediate recovery',
      'Non-swimmers can safely raft with our high-buoyancy CE life vests',
      'Strict zero-alcohol and drug policy enforced before boarding'
    ],
    thingsToCarry: [
      'Quick-dry synthetic t-shirt and shorts (avoid denim/cotton)',
      'Secure strap sandals, river booties, or old sneakers',
      'Dry bag or waterproof phone pouch',
      'Change of warm dry clothes and towel for post-rafting',
      'Sunscreen lotion and sunglasses with head retainer strap'
    ],
    bestTimeToVisit: 'October to mid-December offers crystal clear emerald waters and pleasant sunshine. March to May brings exhilarating high-volume glacial runoff for maximum adrenaline thrill.',
    faqs: [
      {
        question: 'Do I need to know swimming to do river rafting?',
        answer: 'No! Non-swimmers can safely enjoy the 12 km and 16 km stretches. Our CE-approved life vests provide exceptional buoyancy, and all participants are briefed on how to float safely in the current.'
      },
      {
        question: 'What is the minimum age requirement for rafting?',
        answer: 'The minimum age for the standard 16 km Shivpuri stretch is 14 years. For younger children aged 8-13, the gentle 9 km Brahmpuri family stretch is recommended.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'auli-skiing-experience',
    title: 'Auli Skiing & Snowboarding Experience',
    category: 'Snow Adventures',
    location: 'Auli, Chamoli District, Uttarakhand',
    destination: 'Auli',
    difficulty: 'Moderate',
    duration: '4–6 Days',
    durationDetails: '4–6 Days (or Daily Passes)',
    season: ['Winter'],
    bestSeason: 'Late December to March',
    startingPrice: 'Pricing on Request',
    maxAltitude: '10,010 ft (3,050 m)',
    image: '/assets/OUTDOOR ACTIVITIES/SNOW ADVENTURE.jpg',
    imagePosition: 'center 50%',
    gallery: [
      '/assets/OUTDOOR ACTIVITIES/SNOW ADVENTURE.jpg',
      'https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDesc: 'Glide down powdery slopes on India’s premier ski slopes directly facing the majesty of Nanda Devi.',
    fullDesc: 'Nestled between 2,500 and 3,050 metres in the Chamoli Himalayas, Auli provides international-standard ski slopes with panoramic views of Mount Nanda Devi, Kamet, and Mana Parvat. Whether you are stepping onto skis for the very first time or carving technical turns down Gorson Bugyal slopes, our National Institute of Mountaineering (NIM) certified instructors guide you through snow ploughs, stem turns, and parallel carving.',
    topLocations: ['Auli Ski Slopes', 'Joshimath-Auli Cable Car (4 km)', 'Gorson Bugyal Snow Trail', 'Artificial Lake Slopes'],
    highlights: [
      'Learn skiing or snowboarding from certified national ski athletes',
      'Ride the 4 km Joshimath ropeway—one of the longest cable cars in Asia',
      'Spectacular uninterrupted vistas of India’s second-highest peak: Nanda Devi (7,816 m)',
      'Modern imported Rossignol/Head skis, boots, bindings, and poles',
      'Certificate of course completion for 4-day and 6-day ski programs'
    ],
    whatsIncluded: [
      'Ski gear rental: Skis, boots, poles, and protective helmets',
      'Dedicated NIM certified ski instructor (1:6 instructor-student ratio)',
      'Ski lift / chair lift pass support',
      'Warm hotel / alpine resort stay in Auli or Joshimath',
      'Daily breakfast, hearty mountain lunches, and dinners'
    ],
    whatsExcluded: [
      'Cable car / ropeway tickets from Joshimath to Auli',
      'Specialized ski goggles and waterproof ski pants/jackets (available for rent)',
      'Personal medical insurance'
    ],
    safetyInfo: [
      'Certified FIS & NIM ski instructors with international mountain rescue training',
      'On-slope ski patrol and first-aid response team stationed during sessions',
      'Daily slope condition assessment and artificial grooming'
    ],
    thingsToCarry: [
      'Waterproof ski trousers and winter insulated parka jacket',
      'UV-blocking snow ski goggles with anti-fog coating',
      'Thermal base layers (wool or synthetic polyester)',
      'Waterproof insulated ski gloves and extra woolen socks',
      'High-SPF lip balm and sunblock cream'
    ],
    bestTimeToVisit: 'January and February offer the deepest snowfall and powdery conditions, ideal for skiing and snowboarding enthusiasts. March brings sunny crisp mornings and pleasant snow carving.',
    faqs: [
      {
        question: 'Can absolute beginners learn skiing in Auli?',
        answer: 'Yes! Our 4-day and 6-day beginner programs start with basic balance, sliding, and snow-plough braking on gentle nursery slopes before advancing to steeper chairlift runs.'
      },
      {
        question: 'How do we reach Auli in winter if roads are snowy?',
        answer: 'You reach Joshimath by road from Rishikesh/Dehradun, and then take the scenic 4 km passenger ropeway (cable car) directly to Tower 8 or 10 in Auli, bypassing all snowbound roads.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'valley-of-flowers-trek',
    title: 'Valley of Flowers Alpine Trek',
    category: 'Trekking',
    location: 'Govindghat & Ghangaria, Chamoli, Uttarakhand',
    destination: 'Other',
    difficulty: 'Moderate',
    duration: '4–6 Days',
    durationDetails: '6 Days / 5 Nights',
    season: ['Monsoon', 'Summer'],
    bestSeason: 'July to September (Peak Floral Bloom)',
    startingPrice: 'Pricing on Request',
    maxAltitude: '14,400 ft (4,389 m) at Hemkund Sahib',
    image: '/images/destinations/valley-of-flowers/photo-1.jpg',
    gallery: [
      '/images/destinations/valley-of-flowers/photo-1.jpg',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDesc: 'A UNESCO World Heritage sanctuary carpeted in over 500 varieties of wild Himalayan orchids, poppies, and primulas.',
    fullDesc: 'Discovered in 1931 by British mountaineer Frank Smythe, the Valley of Flowers is an emerald wonderland tucked away in the Zanskar range. Every monsoon, glacial melt and mountain rains transform this 87 sq km biosphere into a breathtaking natural tapestry of rare alpine blossoms, including the legendary Blue Poppy and sacred Brahma Kamal, set beside cascading waterfalls and misty glaciers.',
    topLocations: ['Govindghat', 'Ghangaria Basecamp', 'Valley of Flowers National Park', 'Hemkund Sahib Glacial Lake'],
    highlights: [
      'UNESCO World Heritage National Park with 500+ endangered floral species',
      'Witness the mythical blue poppy, cobra lily, and Brahma Kamal in wild habitat',
      'Trek to holy Hemkund Sahib—the highest Gurudwara on Earth at 14,400 ft',
      'Pristine Pushpawati river gorge trails with dramatic gushing waterfalls',
      'Rich Himalayan wildlife: Snow leopard, Asiatic black bear & musk deer habitat'
    ],
    whatsIncluded: [
      '5 nights guest house/hotel accommodation (twin/triple sharing)',
      'All meals from Day 1 dinner to Day 6 breakfast',
      'Forest department permits and national park entry tickets',
      'Experienced WFA certified trek leader and local Himalayan guide',
      'Medical kit, pulse oximeter, and emergency oxygen supply'
    ],
    whatsExcluded: [
      'Mule, porter, or helicopter services between Govindghat and Ghangaria',
      'Transport from Haridwar/Rishikesh to Govindghat (available on request)',
      'Personal trekking poles and rain poncho'
    ],
    safetyInfo: [
      'Trails well maintained by Uttarakhand Forest Department and army units',
      'Daily weather checks and monsoon rockfall precautions observed',
      'Strict night curfew inside the national park to protect natural habitat'
    ],
    thingsToCarry: [
      'Full body waterproof rain poncho or breathable rain jacket and pants',
      'Sturdy hiking shoes with Gore-Tex waterproof membrane',
      'Quick-dry trekking trousers and synthetic moisture-wicking shirts',
      'Waterproof backpack cover and dry sacks for electronics',
      'Trekking poles with rubber tips'
    ],
    bestTimeToVisit: 'July to August reveals peak floral blossoms and vibrant green meadows. September brings clearer skies, changing autumn foliage, and sparkling glacial reflections.',
    faqs: [
      {
        question: 'Can children and senior citizens do this trek?',
        answer: 'Yes! The trail from Govindghat to Ghangaria (14 km) has well-paved stone paths, and mules or helicopter rides are available for those who prefer not to walk.'
      },
      {
        question: 'Are we allowed to camp inside the Valley of Flowers?',
        answer: 'No. Camping inside the national park is strictly prohibited by law to preserve its fragile ecosystem. All trekkers stay in comfortable guest houses at Ghangaria (3 km away) and take day excursions.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'chopta-tungnath-chandrashila-trek',
    title: 'Chopta–Tungnath–Chandrashila Trek',
    category: 'Trekking',
    location: 'Chopta, Rudraprayag, Uttarakhand',
    destination: 'Chopta',
    difficulty: 'Easy',
    duration: '2–3 Days',
    durationDetails: '3 Days / 2 Nights',
    season: ['Spring', 'Summer', 'Autumn', 'Winter'],
    bestSeason: 'Round the Year (April-June for flowers, Dec-Mar for snow)',
    startingPrice: 'Pricing on Request',
    maxAltitude: '13,100 ft (4,000 m) at Chandrashila Peak',
    image: '/images/destinations/chopta/photo-1.jpg',
    gallery: [
      '/images/destinations/chopta/photo-1.jpg',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDesc: 'Hike to the world’s highest Shiva temple at Tungnath (3,680m) and summit Chandrashila for grand 360° views.',
    fullDesc: 'Affectionately known as the "Mini Switzerland of Uttarakhand", Chopta is an alpine pasture surrounded by thick deodar, pine, and rhododendron forests. The stone-paved trail ascends past grazing bugyals to Tungnath—the highest of the Panch Kedar temples dating back over 1,000 years. An exhilarating final ridge push leads to the summit of Chandrashila (Moon Rock) at 13,100 ft, presenting uninterrupted panoramas of Chaukhamba, Trishul, and Nanda Devi.',
    topLocations: ['Chopta Meadows', 'Tungnath Temple', 'Chandrashila Peak', 'Deoria Tal Lake'],
    highlights: [
      'Pay homage at Tungnath—the world’s highest stone Shiva shrine (3,680 m)',
      'Summit Chandrashila at 13,100 ft for the most dramatic 360° Himalayan vista in Garhwal',
      'Excursion to Deoria Tal with reflection of the Chaukhamba massifs in clear water',
      'Vibrant red, pink, and white rhododendron forests blooming in spring',
      'Exciting winter snow hiking and high-altitude stargazing under clear skies'
    ],
    whatsIncluded: [
      '2 nights stay in alpine Swiss camps or eco-lodges at Chopta',
      'Nutritious buffet breakfast, packed trail lunches, and hot dinners',
      'Certified mountain trek leader and local nature guide',
      'Forest entry permits and trekking fees',
      'First-aid kit and emergency oxygen cylinder'
    ],
    whatsExcluded: [
      'Transport to/from Rishikesh or Haridwar (available as add-on)',
      'Personal trekking gear and microspikes (provided in winter if needed)',
      'Personal pony / mule charges'
    ],
    safetyInfo: [
      'Well-marked stone path up to Tungnath temple',
      'Trek leaders trained in high-altitude sickness and mountain guidance',
      'Pace maintained to ensure comfortable gradual altitude acclimatization'
    ],
    thingsToCarry: [
      'Comfortable hiking shoes with good traction',
      'Warm fleece jacket, down jacket, and windbreaker',
      'Warm woolen beanie and sun protection hat',
      'Refillable water bottle and electrolyte sachets',
      'Trekking pole for descent support'
    ],
    bestTimeToVisit: 'April to May brings carpets of scarlet rhododendrons and pleasant daytime weather. October to November offers razor-sharp visibility and golden sunsets. December to March transforms the summit into an ethereal snow paradise.',
    faqs: [
      {
        question: 'Is this trek suitable for beginners and families?',
        answer: 'Yes! Chopta-Tungnath is one of the most accessible high-altitude summits in India. The climb is 3.5 km to Tungnath and another 1.5 km to Chandrashila, making it popular for beginners and adventurous families.'
      },
      {
        question: 'Is the Tungnath temple open during winter?',
        answer: 'The temple shrine itself remains closed in winter (the idol shifts to Makkumath), but the trekking trail to Tungnath and Chandrashila remains open and provides an incredible snow trek experience.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'himalayan-camping-experience',
    title: 'Himalayan Luxury Glamping & Camping',
    category: 'Camping & Nature',
    location: 'Shivpuri (Rishikesh) & Dhanaulti, Uttarakhand',
    destination: 'Rishikesh',
    difficulty: 'Easy',
    duration: '2–3 Days',
    durationDetails: '2–3 Days',
    season: ['Spring', 'Summer', 'Autumn', 'Winter'],
    bestSeason: 'September to June',
    startingPrice: 'Pricing on Request',
    image: '/assets/OUTDOOR ACTIVITIES/CAMPING & NATURE.jpg',
    imagePosition: 'center 85%',
    gallery: [
      '/assets/OUTDOOR ACTIVITIES/CAMPING & NATURE.jpg',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDesc: 'Starlit skies, crackling bonfires, live acoustic jams, and luxury Swiss tents beside mountain streams.',
    fullDesc: 'Disconnect from urban noise and wake up to birdsong, rustling pine leaves, and murmuring Himalayan streams. Our hand-picked glamping resorts combine rugged outdoor romance with hotel-like luxury: spacious waterproof Swiss tents with ensuite western bathrooms, air cooling/heating, sparkling swimming pools, volleyball courts, barbecue evenings, and guided sunrise forest trails.',
    topLocations: ['Shivpuri (Rishikesh)', 'Dhanaulti Apple Orchards', 'Kanatal Pine Ridges', 'Chopta Alpine Meadows'],
    highlights: [
      'Luxury Swiss cottage tents with attached modern washrooms and 24/7 hot water',
      'Riverside beach or scenic valley view properties with private bonfires',
      'Unlimited gourmet buffet meals with local Garhwali delicacies and live barbecue',
      'Outdoor activities: Zipline, archery, badminton, swimming pool, and nature walks',
      'Stargazing sessions under clear pollution-free Himalayan night skies'
    ],
    whatsIncluded: [
      'Stay in luxury Swiss dome / safari tent with twin/triple sharing',
      'Welcome drinks, evening tea with snacks, buffet dinner, and breakfast',
      'Evening campfire with acoustic music and group outdoor games',
      'Access to swimming pool and indoor/outdoor games arena',
      'Guided morning nature walk through surrounding pine forests'
    ],
    whatsExcluded: [
      'Hard beverages and personal room service orders',
      'Transport to/from camp (available on request)',
      'External adventure tickets (rafting, bungee jumping)'
    ],
    safetyInfo: [
      '24/7 gated private compound with security guards and CCTV coverage',
      'Comprehensive fire safety equipment and illuminated camp pathways',
      'Doctor-on-call and fully equipped first-aid station on site'
    ],
    thingsToCarry: [
      'Light woolen jacket or hoodie for chilly mountain evenings',
      'Comfortable walking shoes or sports sneakers',
      'Swimwear for swimming pool access',
      'Personal toiletries, mosquito repellent, and power bank',
      'Camera or telescope for stargazing'
    ],
    bestTimeToVisit: 'October to March offers crisp sunny days, cozy bonfire evenings, and clear starry skies. April to June is ideal for escaping high city temperatures and enjoying cool mountain breezes.',
    faqs: [
      {
        question: 'Are these camps safe for families with young children?',
        answer: 'Yes! Our selected glamping properties are completely family-friendly with attached washrooms, continuous power backup, purified drinking water, and fenced perimeters.'
      },
      {
        question: 'Can we customize camping with river rafting or treks?',
        answer: 'Absolutely. We offer complete adventure combos combining riverside camping with white-water rafting, bungee jumping, and day hikes.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bungee-jumping-rishikesh',
    title: 'Bungee Jumping & Giant Swing',
    category: 'Adventure Sports',
    location: 'Mohan Chatti, Rishikesh, Uttarakhand',
    destination: 'Rishikesh',
    difficulty: 'Difficult',
    duration: 'Half Day',
    durationDetails: 'Half Day (approx. 2–3 Hours)',
    season: ['Spring', 'Summer', 'Autumn', 'Winter'],
    bestSeason: 'Round the Year (Except monsoon July-August)',
    startingPrice: 'Pricing on Request',
    image: '/assets/OUTDOOR ACTIVITIES/ADVENTURE SPORTS.jpg',
    imagePosition: '55% 40%',
    gallery: [
      '/assets/OUTDOOR ACTIVITIES/ADVENTURE SPORTS.jpg',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDesc: 'Take the ultimate leap of faith from India’s highest fixed cantilever platform (83m) over the Hall River gorge.',
    fullDesc: 'Designed and operated by certified jump masters from New Zealand, feel the mind-bending thrill of pure gravity as you free-fall 83 metres into a breathtaking rocky canyon in Mohan Chatti, Rishikesh. Rebound inches above the crystal Hall river and receive your official "Dare to Jump" certificate and badge.',
    topLocations: ['Mohan Chatti, Rishikesh', 'Shivpuri Canyon, Rishikesh'],
    highlights: [
      'India’s highest fixed cantilever bungee platform (83 meters high)',
      'Operated following Australian & New Zealand safety standards (AS/NZS 5848)',
      'High-resolution multi-camera HD video recording and badge certification',
      'Optional tandem Giant Swing and Flying Fox add-ons on the same site',
      'Scenic canyon recovery walk with refreshing complimentary mountain drinks'
    ],
    whatsIncluded: [
      'One official bungee jump from the 83m cantilever bridge',
      'Safety briefing and comprehensive medical screening by jump masters',
      'Imported harness and bungee cord inspection setup',
      'Official Dare to Jump completion certificate and badge'
    ],
    whatsExcluded: [
      'Entry ticket to adventure zone and shuttle bus from tapovan office',
      'HD video and photography package (purchasable at counter)',
      'Personal food and beverages'
    ],
    safetyInfo: [
      'Cords imported from New Zealand with strict daily cycle tracking',
      'Three-level fail-safe redundant harness check before every jump',
      'Mandatory medical declaration and weight check (40 kg to 110 kg)',
      'Trained paramedics and emergency response unit on standby'
    ],
    thingsToCarry: [
      'Valid Government photo ID proof',
      'Comfortable clothes and tightly laced sneakers (no sandals or slippers)',
      'Prescribed medication if any (strict restrictions on cardiac/epileptic history)'
    ],
    bestTimeToVisit: 'October to June provides optimal clear canyon weather and pleasant jumping conditions.',
    faqs: [
      {
        question: 'What are the weight and health limits for Bungee Jumping?',
        answer: 'Jumpers must weigh between 40 kg and 110 kg and be at least 12 years old. Individuals with high blood pressure, heart conditions, neurological disorders, epilepsy, or recent fractures are not permitted to jump.'
      }
    ],
    isFeatured: false
  },
  {
    id: 'tandem-paragliding-himalayas',
    title: 'Tandem Paragliding in the Valley',
    category: 'Adventure Sports',
    location: 'Bhimtal & Mussoorie, Uttarakhand',
    destination: 'Nainital',
    difficulty: 'Moderate',
    duration: 'Half Day',
    durationDetails: 'Half Day (Flight: 15–25 mins)',
    season: ['Spring', 'Summer', 'Autumn', 'Winter'],
    bestSeason: 'October to June (Clear mountain thermals)',
    startingPrice: 'Pricing on Request',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDesc: 'Soar like a Himalayan golden eagle over terraced valleys, blue lakes, and snow-draped ridge lines.',
    fullDesc: 'Catch thermal updrafts and experience weightless flight seated comfortably in front of an experienced DGCA/APPI licensed tandem glider pilot. Launch from hilltop vantage points in Bhimtal, Naukuchiatal, or Mussoorie, carving smooth arcs across the sky with dramatic aerial vistas of emerald pine valleys and distant glaciated peaks.',
    topLocations: ['Pandegaon / Naukuchiatal (Nainital)', 'Bhimtal Valley', 'George Everest Peak (Mussoorie)', 'Rishikesh Valley'],
    highlights: [
      'Tandem flight piloted by instructors with 500+ logged flight hours',
      'Glide 1,500 to 3,000 feet above scenic alpine lakes and terraced villages',
      'Wide-angle GoPro selfie video footage capture throughout flight',
      'Smooth, gentle landing on designated grassy landing zones'
    ],
    whatsIncluded: [
      '15 to 25 minute tandem paragliding flight with certified pilot',
      'Safety helmet, reserve parachute, and pilot harness harness',
      'Transfer from landing zone back to vehicle pickup point'
    ],
    whatsExcluded: [
      'GoPro video transfer to mobile phone (nominal counter fee)',
      'Transport to take-off hill'
    ],
    safetyInfo: [
      'All flights subject to real-time wind speed and thermals assessment',
      'Modern reserve parachute deployed in the harness of every tandem wing',
      'DGCA approved flight corridors strictly followed'
    ],
    thingsToCarry: [
      'Sport shoes with secure grip for take-off run',
      'Windproof jacket or hoodie',
      'Sunglasses with head strap'
    ],
    bestTimeToVisit: 'October to May offers clear blue skies, predictable thermals, and panoramic visibility.',
    faqs: [
      {
        question: 'Do I need prior training to fly tandem?',
        answer: 'None at all! The pilot controls all steering, thermals, and landing. You simply take a short 5-step jog down the grassy slope on take-off and relax into the harness seat.'
      }
    ],
    isFeatured: false
  },
  {
    id: 'corbett-tiger-safari',
    title: 'Jim Corbett 4x4 Tiger Safari',
    category: 'Wildlife & Nature',
    location: 'Ramnagar, Jim Corbett National Park, Uttarakhand',
    destination: 'Jim Corbett',
    difficulty: 'Easy',
    duration: 'Half Day',
    durationDetails: 'Half Day (3–4 Hours per safari)',
    season: ['Autumn', 'Winter', 'Spring', 'Summer'],
    bestSeason: 'November 15 to June 15',
    startingPrice: 'Pricing on Request',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop',
      '/images/destinations/jim-corbett/photo-1.jpg',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDesc: 'Venture into the heart of Royal Bengal Tiger territory in India’s oldest and most prestigious national park.',
    fullDesc: 'Traverse dense Sal forests, sprawling grasslands (chaurs), and pebble-strewn Ramganga riverbeds in an open 4x4 Gypsy. Jim Corbett is home to the world’s highest density of wild Royal Bengal Tigers, wild Asian elephant herds, spotted deer, barking deer, gharials, and over 600 species of migratory birds.',
    topLocations: ['Dhikala Zone (Grasslands)', 'Bijrani Zone', 'Jhirna Zone (Open all year)', 'Dhela Zone'],
    highlights: [
      'Open-top 4x4 Gypsy safari into prime Royal Bengal Tiger territory',
      'Expert government authorized forest naturalist tracking pugmarks and alarm calls',
      'Incredible wildlife photography opportunities for elephants, deer, and raptors',
      'Scenic vistas along the Ramganga River and Kosi River basins'
    ],
    whatsIncluded: [
      'Private 4x4 Gypsy registered with forest department (up to 6 guests)',
      'Government entry permit and forest road tax',
      'Authorized forest naturalist guide charges',
      'Pick-up and drop from Ramnagar hotels'
    ],
    whatsExcluded: [
      'Professional camera and video lens fees',
      'Tips to driver and naturalist'
    ],
    safetyInfo: [
      'Strict adherence to forest department eco-safari rules and stay-inside-vehicle mandate',
      'Experienced local drivers trained in wildlife behavior and forest navigation'
    ],
    thingsToCarry: [
      'Government Photo ID proof matching the permit reservation',
      'Binoculars and telephoto zoom camera lens',
      'Earthy tone clothing (khaki, olive green, brown—avoid bright colors)',
      'Dust mask and sunglasses for open jeep tracks'
    ],
    bestTimeToVisit: 'November to February is ideal for pleasant weather and birdwatching. March to June provides peak predator sightings around waterholes.',
    faqs: [
      {
        question: 'How early should Corbett safari permits be booked?',
        answer: 'Permits are strictly issued by the forest department on a quota system. We recommend booking at least 30 to 45 days in advance, especially for the popular Dhikala and Bijrani zones.'
      }
    ],
    isFeatured: false
  },
  {
    id: 'rock-climbing-waterfall-rappelling',
    title: 'Rock Climbing & Waterfall Rappelling',
    category: 'Climbing & Rappelling',
    location: 'Mussoorie & Rishikesh, Uttarakhand',
    destination: 'Mussoorie',
    difficulty: 'Moderate',
    duration: 'Half Day',
    durationDetails: 'Half Day (3–4 Hours)',
    season: ['Spring', 'Summer', 'Autumn'],
    bestSeason: 'March to June & September to November',
    startingPrice: 'Pricing on Request',
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDesc: 'Descend through roaring natural waterfalls and scale sheer Himalayan granite overhangs with certified mountaineers.',
    fullDesc: 'Get your hands on raw Himalayan granite and descend down vertical waterfall rock faces. Under the direct instruction of IMF-certified mountaineers, learn essential belaying, footwork, hand jams, and abseiling techniques. Waterfall rappelling adds the exhilarating rush of cascading mountain stream water as you descend backwards down slippery rocky crags.',
    topLocations: ['Kempty Falls / Jharipani (Mussoorie)', 'Neer Garh Waterfall (Rishikesh)', 'George Everest crags'],
    highlights: [
      'Waterfall rappelling directly through cascading mountain streams',
      'Natural rock climbing pitches with top-rope and lead climbing setups',
      'Learn technical knots, figure-8 descenders, and belay management',
      'Instruction by certified mountaineers from Nehru Institute of Mountaineering'
    ],
    whatsIncluded: [
      'Certified climbing harness, dynamic kernmantle ropes, and carabiners',
      'UIAA-certified climbing helmets and rappelling gloves',
      'Full technical instruction and safety belayer on every run'
    ],
    whatsExcluded: [
      'Specialized rock climbing shoes (sturdy sports shoes work well)',
      'Personal transport to waterfall base'
    ],
    safetyInfo: [
      'UIAA and CE-certified climbing hardware inspected prior to each session',
      'Double-anchor backup system for all rappelling setups',
      'Controlled descent with secondary belay line held by instructor'
    ],
    thingsToCarry: [
      'Snug-fitting sports shoes with rubber soles',
      'Comfortable stretchable athletic clothing',
      'Towel and complete change of clothes for waterfall rappelling'
    ],
    bestTimeToVisit: 'March to June and September to November offer warm rock faces and comfortable water flow.',
    faqs: [
      {
        question: 'Do I need upper body strength to do rock climbing?',
        answer: 'Contrary to common belief, rock climbing relies heavily on leg strength and balance rather than sheer arm strength. Our instructors teach you proper foot placement on beginner pitches.'
      }
    ],
    isFeatured: false
  },
  {
    id: 'har-ki-dun-trek',
    title: 'Har Ki Dun Ancient Valley Trek',
    category: 'Trekking',
    location: 'Govind National Park, Uttarkashi, Uttarakhand',
    destination: 'Uttarkashi',
    difficulty: 'Moderate',
    duration: '7+ Days',
    durationDetails: '7 Days / 6 Nights',
    season: ['Spring', 'Summer', 'Autumn'],
    bestSeason: 'April to June & September to November',
    startingPrice: 'Pricing on Request',
    maxAltitude: '11,700 ft (3,566 m)',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDesc: 'Known as the "Valley of Gods", walk the mythological trail taken by the Pandavas to heaven amidst ancient wooden villages.',
    fullDesc: 'Cradled in the western Garhwal Himalayas beneath the towering face of Swargarohini, Har Ki Dun is one of the most culturally immersive treks in India. Follow the rushing Supin River past centuries-old wooden villages like Osla and Gangad, where time stands still. The hanging amphitheater valley offers direct views of Jaundhar Glacier and Swargarohini peaks.',
    topLocations: ['Sankri', 'Taluka', 'Osla Ancient Village', 'Har Ki Dun Valley', 'Maninda Tal'],
    highlights: [
      'Mythological trail walked by the Pandavas on their ascent to heaven',
      'Century-old wooden architecture and ancient Someshwar temple in Osla',
      'Direct, intimate face-to-face vistas of the Swargarohini massif',
      'Rich Himalayan biosphere with golden eagles, monals, and alpine meadows'
    ],
    whatsIncluded: [
      '6 nights accommodation (tents on twin sharing and traditional homestays)',
      'All meals from Day 1 dinner to Day 7 breakfast',
      'Certified trek leaders, local guides, and camp staff',
      'Forest department permits and national park environmental fees',
      'First-aid medical kit and emergency oxygen cylinders'
    ],
    whatsExcluded: [
      'Transport from Dehradun to Sankri and back',
      'Personal porter / mule for offloading'
    ],
    safetyInfo: [
      'Experienced mountain leaders with extensive high-altitude rescue experience',
      'Daily physiological health monitoring and high-altitude safety equipment'
    ],
    thingsToCarry: [
      'Sturdy waterproof trekking boots and trekking poles',
      'Down jacket (-5°C), thermal base layers, and fleece',
      'Rain jacket or waterproof poncho'
    ],
    bestTimeToVisit: 'April to June features lush green landscapes and blooming wildflowers. September to November offers clear crisp views and amber autumn pastures.',
    faqs: [
      {
        question: 'What is the daily walking distance on Har Ki Dun?',
        answer: 'Trekkers cover approximately 8 to 12 km daily along gradual river trails with moderate inclines, making it a very rewarding endurance trek.'
      }
    ],
    isFeatured: false
  },
  {
    id: 'dayara-bugyal-trek',
    title: 'Dayara Bugyal Alpine Meadow Trek',
    category: 'Trekking',
    location: 'Barsu / Raithal, Uttarkashi, Uttarakhand',
    destination: 'Uttarkashi',
    difficulty: 'Easy',
    duration: '4–6 Days',
    durationDetails: '4 Days / 3 Nights',
    season: ['Spring', 'Summer', 'Autumn', 'Winter'],
    bestSeason: 'Round the Year (Snow in winter, lush green in summer)',
    startingPrice: 'Pricing on Request',
    maxAltitude: '12,000 ft (3,657 m)',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDesc: 'Stroll across 28 square kilometers of endless velvet green alpine meadows with Bandarpoonch looming overhead.',
    fullDesc: 'Dayara Bugyal is widely regarded as one of the two most spectacular high-altitude meadows in India alongside Bedni Bugyal. Spanning across 28 sq km between 10,000 and 12,000 feet, the gentle rolling grasslands offer unobstructed views of the Bandarpoonch, Kala Nag (Black Peak), and Draupadi Ka Danda massifs. In winter, the entire expanse turns into an idyllic natural ski and snow field.',
    topLocations: ['Raithal Village', 'Gui Camp', 'Chilapada', 'Dayara Top (12,000 ft)', 'Bakaria Top'],
    highlights: [
      'One of India’s largest and most scenic high-altitude meadow systems',
      'Stunning panorama of the Gangotri and Bandarpoonch mountain ranges',
      'Delightful village homestays showcasing traditional Garhwali wooden craftsmanship',
      'Perfect beginner-friendly trek with gentle gradients and cozy campsites'
    ],
    whatsIncluded: [
      '3 nights stay in all-weather dome tents and traditional homestay',
      'All vegetarian meals on trek',
      'Certified mountain leader and local mountain guide',
      'Forest entry permits and safety equipment'
    ],
    whatsExcluded: [
      'Transport between Dehradun and Raithal basecamp',
      'Personal gear'
    ],
    safetyInfo: [
      'Gradual elevation gain reduces any risk of acute mountain sickness (AMS)',
      'Oximeter and medical first aid carried by trek guides'
    ],
    thingsToCarry: [
      'Trekking shoes, warm fleece, wind jacket, and sun protection'
    ],
    bestTimeToVisit: 'May to June for emerald green carpets and grazing sheep flocks. December to March for rolling white snowfields and winter camping.',
    faqs: [
      {
        question: 'Is Dayara Bugyal good for families with children?',
        answer: 'Yes! It is one of the easiest and most picturesque treks in Uttarakhand, making it a favorite for families and novice hikers.'
      }
    ],
    isFeatured: false
  },
  {
    id: 'stargazing-chopta-meadows',
    title: 'Stargazing & Forest Night Camp in Chopta',
    category: 'Camping & Nature',
    location: 'Chopta, Rudraprayag, Uttarakhand',
    destination: 'Chopta',
    difficulty: 'Easy',
    duration: '1 Day',
    durationDetails: '1 Day / Night Experience',
    season: ['Spring', 'Autumn', 'Winter'],
    bestSeason: 'October to May (Dark, clear skies)',
    startingPrice: 'Pricing on Request',
    maxAltitude: '8,790 ft (2,680 m)',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      '/images/destinations/chopta/photo-1.jpg',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDesc: 'Observe the Milky Way, distant nebulae, and Saturn’s rings through computerized telescopes in zero light pollution.',
    fullDesc: 'Perched in the Kedarnath Wildlife Sanctuary with virtually zero light pollution, Chopta offers Bortle Class 2-3 night skies. Peer through high-powered optical and computerized Schmidt-Cassegrain telescopes to witness celestial wonders: the spiral arms of Andromeda Galaxy, the Orion Nebula, Saturn’s rings, lunar craters, and vibrant shooting meteor showers.',
    topLocations: ['Chopta Alpine Meadow Camp', 'Duggalbitta Clear Ridge', 'Deoria Tal Stargaze Point'],
    highlights: [
      'Telescope observation guided by amateur astronomy naturalists',
      'Astrophotography tips and long-exposure Milky Way portrait assistance',
      'Cozy bonfire with hot herbal mountain tea and acoustic music',
      'Constellation storytelling and satellite identification'
    ],
    whatsIncluded: [
      'Telescope viewing session with astronomy educator',
      'Night camping in insulated Swiss tents with warm bedding',
      'Evening bonfire and warm beverages',
      'Assistance with personal DSLR / mobile astrophotography'
    ],
    whatsExcluded: [
      'Personal transport to Chopta camp',
      'Professional camera gear'
    ],
    safetyInfo: [
      'Secure campsite inside private eco-resort grounds',
      'Thermal insulation and heated water bags provided in winter'
    ],
    thingsToCarry: [
      'Heavy winter down jacket and woolen headgear',
      'Camera with manual exposure mode and tripod (optional)'
    ],
    bestTimeToVisit: 'October to April provides the darkest, most transparent skies with little humidity or cloud interference.',
    faqs: [
      {
        question: 'Can we photograph the Milky Way with a smartphone?',
        answer: 'Yes! Modern smartphones with night mode or pro/manual mode can capture stunning long exposures of the Milky Way with our tripod mounts.'
      }
    ],
    isFeatured: false
  },
  {
    id: 'kayaking-white-water-school',
    title: 'Kayaking & White Water School',
    category: 'Water Adventures',
    location: 'Shivpuri, Rishikesh, Uttarakhand',
    destination: 'Rishikesh',
    difficulty: 'Difficult',
    duration: '2–3 Days',
    durationDetails: '2–3 Days Course',
    season: ['Spring', 'Autumn', 'Winter'],
    bestSeason: 'October to May',
    startingPrice: 'Pricing on Request',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDesc: 'Master the eskimo roll, eddy hopping, and river reading in solo whitewater kayaks on the upper Ganga.',
    fullDesc: 'Step beyond group rafting and learn to command the river solo. Under the instruction of national slalom champions and certified IRF rescue kayakers, master flat-water balance, the classic C-to-C eskimo roll, ferry gliding across strong currents, and reading river hydraulics (holes, pillows, and wave trains).',
    topLocations: ['Shivpuri Eddy Pools', 'Marine Drive Rapid Sections', 'Kaudiyala Playwaves'],
    highlights: [
      '1-on-1 and small group instruction by champion whitewater kayakers',
      'Master the essential Eskimo roll and wet-exit techniques',
      'Modern imported Dagger, Jackson, and Pyranha whitewater kayaks',
      'Progressive difficulty from still flatwater to Grade II & III rapids'
    ],
    whatsIncluded: [
      'High-performance river kayak, spray skirt, and carbon paddle',
      'CE-certified high-buoyancy life vest, river helmet, and wetsuit/dry top',
      'Dedicated certified river coach and safety rescue escort',
      'Course completion certificate and video analysis'
    ],
    whatsExcluded: [
      'Hotel accommodation and meals in Rishikesh',
      'Personal river booties'
    ],
    safetyInfo: [
      'Strict 1:3 instructor to student ratio ensures constant supervision',
      'Beginners train in calm river pools before entering any moving rapids'
    ],
    thingsToCarry: [
      'Swimming attire and quick-dry synthetic layers',
      'Nose clip and strap for prescription glasses',
      'Sunscreen and waterproof dry bag'
    ],
    bestTimeToVisit: 'October, November, March, and April offer ideal water levels and comfortable sunny temperatures.',
    faqs: [
      {
        question: 'Is swimming mandatory for whitewater kayaking?',
        answer: 'Yes. Basic swimming competence and comfort in deep water is required for solo whitewater kayak training.'
      }
    ],
    isFeatured: false
  },
  {
    id: 'nag-tibba-weekend-trek',
    title: 'Nag Tibba Weekend Snow Trek',
    category: 'Trekking',
    location: 'Pantwari, Tehri Garhwal (near Mussoorie), Uttarakhand',
    destination: 'Mussoorie',
    difficulty: 'Easy',
    duration: '2–3 Days',
    durationDetails: '2 Days / 1 Night',
    season: ['Winter', 'Spring', 'Autumn'],
    bestSeason: 'November to April (Snow in Dec-Feb)',
    startingPrice: 'Pricing on Request',
    maxAltitude: '9,915 ft (3,022 m)',
    image: '/images/destinations/mussoorie/photo-1.jpg',
    gallery: [
      '/images/destinations/mussoorie/photo-1.jpg',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDesc: 'The highest peak in the lower Garhwal range, offering a 10,000-ft summit and overnight camping in just a weekend.',
    fullDesc: 'Nag Tibba ("Serpent’s Peak") is Uttarakhand’s ultimate weekend getaway trek. Located just a 3-hour drive from Dehradun via Mussoorie, the trail begins at Pantwari village and climbs through thick oak and rhododendron woodlands. At the 9,915-foot summit stands a rustic temple dedicated to the Serpent God, presenting jaw-dropping panoramas of Bandarpoonch, Swargarohini, Srikanth, and the Gangotri group.',
    topLocations: ['Pantwari Base Village', 'Nag Tibba Base Camp', 'Nag Devta Temple', 'Nag Tibba Summit (9,915 ft)'],
    highlights: [
      'Complete a legitimate 10,000-ft Himalayan summit in just 2 days from Delhi/Dehradun',
      'Camp beneath starlit skies amidst ancient oak forests with bonfires',
      'Spectacular uninterrupted vistas of Bandarpoonch, Kedarnath, and Chanabang',
      'Ideal introductory trek for working professionals, students, and first-timers'
    ],
    whatsIncluded: [
      '1 night stay in alpine camping tents on twin/triple sharing',
      'Nutritious meals (Day 1 lunch & dinner, Day 2 breakfast & lunch)',
      'Certified mountain trek leader and local guide',
      'Campfire, forest permits, and first-aid support'
    ],
    whatsExcluded: [
      'Transport from Dehradun to Pantwari (add-on available)',
      'Personal trekking poles and thermal gear'
    ],
    safetyInfo: [
      'Gentle gradual ascent minimizes altitude strain',
      'Guides carry comprehensive medical kits and oximeters'
    ],
    thingsToCarry: [
      'Comfortable hiking shoes with good grip',
      'Fleece jacket, windbreaker, and warm woolen cap',
      'Water bottle and energy snacks'
    ],
    bestTimeToVisit: 'December to March provides thick snow trails without extreme high-altitude hazards. October to November and April to June offer pleasant sunny ridge walks.',
    faqs: [
      {
        question: 'Can I do Nag Tibba over a regular Saturday-Sunday weekend?',
        answer: 'Yes! You leave Dehradun early Saturday morning, trek to base camp, summit early Sunday morning, and return to Dehradun by Sunday evening in time for your train or flight.'
      }
    ],
    isFeatured: false
  },
  {
    id: 'flying-fox-zipline-ganga',
    title: 'Flying Fox / Zipline Across the Ganga',
    category: 'Adventure Sports',
    location: 'Shivpuri, Rishikesh, Uttarakhand',
    destination: 'Rishikesh',
    difficulty: 'Easy',
    duration: 'Half Day',
    durationDetails: 'Half Day (1–2 Hours)',
    season: ['Spring', 'Summer', 'Autumn', 'Winter'],
    bestSeason: 'Round the Year (Except heavy monsoon)',
    startingPrice: 'Pricing on Request',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDesc: 'Fly at speeds up to 140 km/h on a 1-kilometer steel zip wire suspended 70 meters above the holy river.',
    fullDesc: 'Strapped safely into a secure flying harness, launch from a cliffside platform and soar 70 metres directly above the raging white-water rapids of the holy Ganges. Powered purely by gravity, zoom across two massive steel zip wires spanning up to 1 kilometre with panoramic views of the forested Himalayan foothills.',
    topLocations: ['Shivpuri Riverbank', 'Mohan Chatti Canyon'],
    highlights: [
      'Fly 200 feet above the Ganges river at speeds exceeding 120 km/h',
      'Tandem or solo flight options available for friends and couples',
      'Engineered following international European EN standards',
      'Instant digital photos and action video capture points'
    ],
    whatsIncluded: [
      'Full zipline flight across both cable sections',
      'High-grade full body safety harness and certified helmet',
      'Safety briefing and trial demonstration by jump master'
    ],
    whatsExcluded: [
      'Digital photos and video footage package',
      'Transport to zipline point'
    ],
    safetyInfo: [
      'Heavy-duty galvanized steel cables tested for over 5 tons of breaking strength',
      'Dual pulley brakes and automated magnetic arrest deceleration mechanism',
      'Trained operators certified by international rope access associations'
    ],
    thingsToCarry: [
      'Secure sports footwear (no slippers or loose sandals)',
      'Comfortable casual clothing'
    ],
    bestTimeToVisit: 'September through June offers optimal weather and clear canyon vistas.',
    faqs: [
      {
        question: 'Can children participate in Flying Fox / Zipline?',
        answer: 'Yes! Children aged 10 and above who meet the minimum weight requirement (30 kg) can participate, either solo or riding tandem with an adult.'
      }
    ],
    isFeatured: false
  },
  {
    id: 'pangot-bird-watching-trails',
    title: 'Pangot & Nainital Bird Watching Expedition',
    category: 'Wildlife & Nature',
    location: 'Pangot & Kilbury Sanctuary, Nainital, Uttarakhand',
    destination: 'Nainital',
    difficulty: 'Easy',
    duration: '1 Day',
    durationDetails: '1–2 Days',
    season: ['Spring', 'Autumn', 'Winter'],
    bestSeason: 'October to May',
    startingPrice: 'Pricing on Request',
    image: '/images/destinations/nainital/photo-1.jpg',
    gallery: [
      '/images/destinations/nainital/photo-1.jpg',
      'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDesc: 'Spot over 250 species of rare Himalayan birds including the Koklass Pheasant and Cheer Pheasant in lush oak forests.',
    fullDesc: 'Located just 15 km from Nainital at an altitude of 6,500 feet, Pangot is an internationally renowned birding haven. Wander through dense, moss-draped oak, pine, and rhododendron canopies in the Kilbury Sanctuary, home to over 250 species of resident and migratory Himalayan birds. Accompanied by a veteran ornithologist guide, identify species by calls, plumage, and behavioral sightings.',
    topLocations: ['Kilbury Bird Sanctuary', 'Guggu Khan', 'Vinayak Forest Ridge', 'Woodcock Jungle Trail'],
    highlights: [
      'Guided walks led by specialist Himalayan ornithologists and birding naturalists',
      'Spot rare species: Himalayan Monal, Koklass Pheasant, Cheer Pheasant, and Lammergeier',
      'Quiet serene forest trails far away from crowded tourist circuits',
      'Bird call identification workshops and photography positioning assistance'
    ],
    whatsIncluded: [
      'Half-day or full-day guided birding trail with expert ornithologist',
      'Field binoculars for group use and regional bird identification guide',
      'Forest sanctuary entry fees',
      'Morning hot tea and packed trail snacks'
    ],
    whatsExcluded: [
      'Professional camera and spotting scopes',
      'Transport from Nainital hotel (can be arranged)'
    ],
    safetyInfo: [
      'Gentle forest paths with minimal incline suitable for all ages',
      'All trails stay on designated forest department paths'
    ],
    thingsToCarry: [
      'DSLR or mirrorless camera with telephoto lens (300mm+ recommended)',
      'Comfortable walking shoes and earthy-colored quiet jacket',
      'Personal notebook and binoculars'
    ],
    bestTimeToVisit: 'November to April brings migratory birds down from high Himalayan elevations into the temperate valleys of Pangot.',
    faqs: [
      {
        question: 'Do I need professional birding experience to enjoy Pangot?',
        answer: 'Not at all! Our naturalist guides are passionate about introducing beginners to the joy of bird observation and call identification.'
      }
    ],
    isFeatured: false
  },
  {
    id: 'dhanaulti-eco-adventure-park',
    title: 'Dhanaulti Forest Rope Courses & Flying Fox',
    category: 'Adventure Sports',
    location: 'Eco Park, Dhanaulti, Uttarakhand',
    destination: 'Dhanaulti',
    difficulty: 'Easy',
    duration: 'Half Day',
    durationDetails: 'Half Day (2–3 Hours)',
    season: ['Spring', 'Summer', 'Autumn', 'Winter'],
    bestSeason: 'Round the Year',
    startingPrice: 'Pricing on Request',
    maxAltitude: '7,500 ft (2,286 m)',
    image: '/images/destinations/mussoorie/photo-1.jpg',
    gallery: [
      '/images/destinations/mussoorie/photo-1.jpg',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDesc: 'Walk Burma bridges, skywalks, and ziplines suspended between colossal 150-year-old Deodar cedar trees.',
    fullDesc: 'Nestled amidst the serene deodar forests of Dhanaulti, the Eco Adventure Park offers thrilling aerial rope courses for both adrenaline seekers and adventurous families. Negotiate Burma bridges, swinging logs, commando nets, and zip between ancient trees with the crisp scent of pine resin and direct views of the snow-clad Garhwal range.',
    topLocations: ['Amber Eco Park', 'Dhara Eco Park', 'Surkanda Devi viewpoint', 'Kanatal pine forest'],
    highlights: [
      'Multi-level aerial obstacle rope courses suspended in ancient deodar tree canopy',
      'Zip-line and sky-walk experiences with views of snow peaks',
      'Completely safe continuous belay safety wire system',
      'Family-friendly activities for kids, youth, and corporate teams'
    ],
    whatsIncluded: [
      'Access to aerial adventure obstacle course and tree zipline',
      'Full body safety harness, lanyards, and climbing helmet',
      'Safety briefing and supervision by trained adventure marshals'
    ],
    whatsExcluded: [
      'Entry ticket to government eco-park',
      'Personal transport from Mussoorie or Dehradun'
    ],
    safetyInfo: [
      'Modern continuous belay safety cable—participants never detached mid-course',
      'Trained adventure marshals stationed at every canopy tree platform'
    ],
    thingsToCarry: [
      'Casual sportswear and sneakers with rubber grip',
      'Light fleece jacket for cool shade in dense deodar forest'
    ],
    bestTimeToVisit: 'Round the year. In winter, enjoy crisp sunshine and occasional snow dustings on the pine trees.',
    faqs: [
      {
        question: 'Is this suitable for young children?',
        answer: 'Yes! There are dedicated low-rope obstacle courses designed specifically for children aged 6 to 12.'
      }
    ],
    isFeatured: false
  }
];

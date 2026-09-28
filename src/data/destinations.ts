import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  // ==========================================
  // 1. HILL STATIONS
  // ==========================================
  {
    id: 'mussoorie',
    name: 'Mussoorie',
    tagline: 'The Queen of Hills & Quintessential Colonial Retreat',
    category: 'Hills & Valleys',
    image: '/images/destinations/mussoorie/photo-1.jpg',
    gallery: [
      '/images/destinations/mussoorie/photo-1.jpg',
      '/images/destinations/mussoorie/photo-2.jpg',
      '/images/destinations/mussoorie/photo-3.jpg',
      '/images/destinations/mussoorie/photo-4.jpg'
    ],
    description: 'Perched overlooking the Doon Valley and Shivalik range, Mussoorie charms travellers with its colonial architecture, bustling Mall Road, cascading waterfalls, and panoramic sunset viewpoints at Gun Hill and George Everest Peak.',
    highlights: ['Mall Road heritage walk', 'Kempty & Bhatta Falls', 'George Everest Peak ridge trail', 'Gun Hill cable car'],
    bestTime: 'March to June & September to November (Winter snow in Jan)',
    altitude: '2,005 m (6,578 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: '₹5,499',
    isPopular: true,
    topAttractions: [
      { name: 'Kempty Falls', desc: 'Famous multi-tiered mountain waterfall surrounded by high cliffs.' },
      { name: 'Gun Hill', desc: 'Historical viewpoint reached via cable car offering Doon Valley vistas.' },
      { name: 'Sir George Everest House', desc: 'Historic observatory estate with 360-degree ridge panoramas.' },
      { name: 'Camel’s Back Road', desc: 'Peaceful 3 km nature walk with rock formation shaped like a camel.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (60 km).',
      byTrain: 'Dehradun Railway Station (35 km, 1.5 hours).',
      byRoad: 'Direct highway connectivity from Delhi via Saharanpur/Dehradun (280 km).'
    }
  },
  {
    id: 'nainital',
    name: 'Nainital',
    tagline: 'The Enchanting City of Lakes & Verdant Kumaon Ridges',
    category: 'Hills & Valleys',
    image: '/images/destinations/nainital/photo-1.jpg',
    gallery: [
      '/images/destinations/nainital/photo-1.jpg',
      '/images/destinations/nainital/photo-2.jpg',
      '/images/destinations/nainital/photo-3.jpg',
      '/images/destinations/nainital/photo-4.jpg'
    ],
    description: 'Set around the emerald pear-shaped Naini Lake, this legendary hill resort combines heritage boating, Naina Devi temple blessings, colonial architecture, and high mountain views from Snow View and China Peak.',
    highlights: ['Boating in Naini Lake', 'Naina Devi Temple darshan', 'Snow View Point cable car', 'Mallital & Tibetan Market'],
    bestTime: 'March to June & September to November',
    altitude: '2,084 m (6,837 ft)',
    idealDuration: '3 - 4 Days',
    startingPrice: '₹6,499',
    isPopular: true,
    topAttractions: [
      { name: 'Naini Lake', desc: 'Heart of the town offering yachting, paddle boating, and evening lights.' },
      { name: 'Naina Devi Temple', desc: 'Sacred Shakti Peeth on the northern shore of Naini Lake.' },
      { name: 'Snow View Point', desc: 'Offers spectacular views of Nanda Devi, Trishul, and Nanda Kot.' },
      { name: 'Tiffin Top (Dorothy’s Seat)', desc: 'Terrace viewpoint over the town and Kumaon mountain folds.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (70 km).',
      byTrain: 'Kathgodam Railway Station (35 km, 1 hour).',
      byRoad: '7 hours drive from Delhi via Moradabad - Rampur - Haldwani (310 km).'
    }
  },
  {
    id: 'auli',
    name: 'Auli',
    tagline: 'India’s Premier Skiing Paradise & 360° Himalayan Vista',
    category: 'Hills & Valleys',
    image: '/images/destinations/auli/photo-1.jpg',
    gallery: [
      '/images/destinations/auli/photo-1.jpg',
      '/images/destinations/auli/photo-2.jpg',
      '/images/destinations/auli/photo-3.jpg',
      '/images/destinations/auli/photo-4.jpg'
    ],
    description: 'Surrounded by pine and oak forests with front-row views of Nanda Devi, Kamet, and Mana Parvat, Auli is the ultimate winter wonderland for skiing, snowboarding, and highest cable car rides.',
    highlights: ['Auli Ropeway (Longest in Asia, 4 km)', 'Artificial Lake with reflections', 'Nanda Devi 360° Panorama', 'Gorson Bugyal Snow Trek'],
    bestTime: 'December to March (Snow) & April to June (Meadows)',
    altitude: '2,800 m (9,200 ft)',
    idealDuration: '3 - 5 Days',
    startingPrice: '₹12,499',
    isPopular: true,
    topAttractions: [
      { name: 'Auli Ropeway', desc: 'Connects Joshimath to Auli offering bird’s-eye views of Himalayan ranges.' },
      { name: 'Gorson Bugyal', desc: 'Sprawling alpine meadow trek through conifer trees.' },
      { name: 'Auli Artificial Lake', desc: 'World’s highest man-made lake designed for snowmaking.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (280 km).',
      byTrain: 'Rishikesh Railway Station (250 km).',
      byRoad: 'Scenic mountain drive via Rishikesh - Devprayag - Joshimath (NH58).'
    }
  },
  {
    id: 'ranikhet',
    name: 'Ranikhet',
    tagline: 'The Queen’s Meadow, Military Heritage & Apple Orchards',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Home to the Kumaon Regimental Centre, Ranikhet offers undisturbed tranquility, fragrant pine and deodar forests, ancient Jhula Devi temple, and majestic views of Trishul and Nanda Devi peaks.',
    highlights: ['Majkhali snow panorama', 'Chaubatia Apple Orchards', 'Jhula Devi Bell Temple', 'Kumaon Regimental Centre Museum'],
    bestTime: 'March to June & September to November',
    altitude: '1,869 m (6,132 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: '₹5,999',
    isPopular: true,
    topAttractions: [
      { name: 'Chaubatia Orchards', desc: 'Famed fruit gardens with panoramic Himalayan vistas.' },
      { name: 'Jhula Devi Temple', desc: '8th-century shrine adorned with thousands of devotee bells.' },
      { name: 'Ranikhet Golf Course', desc: 'One of the highest 9-hole golf courses in Asia.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (115 km).',
      byTrain: 'Kathgodam Railway Station (85 km).',
      byRoad: 'Well connected by road from Almora, Nainital, and Haldwani.'
    }
  },
  {
    id: 'chakrata',
    name: 'Chakrata',
    tagline: 'Secluded Jaunsar Bawar Haven & Roaring Tiger Falls',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'An untouched British cantonment nestled in the Jaunsar-Bawar region. Chakrata is renowned for dense deodar forests, peaceful walking trails, Chilmiri sunset neck, and the thundering 312-foot Tiger Falls.',
    highlights: ['Tiger Falls (One of highest in India)', 'Chilmiri Neck sunset viewpoint', 'Deoban ancient deodar woods', 'Budher Caves trek'],
    bestTime: 'March to June & October to December',
    altitude: '2,118 m (6,948 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: '₹4,999',
    isPopular: true,
    topAttractions: [
      { name: 'Tiger Falls', desc: 'Majestic 312 ft waterfall plunging into a natural emerald pool.' },
      { name: 'Chilmiri Neck', desc: 'Highest peak in Chakrata offering dramatic sunrise & sunset vistas.' },
      { name: 'Deoban', desc: 'Dense deodar forest haven providing clear glimpses of 55 Himalayan peaks.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (115 km).',
      byTrain: 'Dehradun Railway Station (90 km).',
      byRoad: 'Accessible via Vikasnagar - Kalsi - Chakrata route.'
    }
  },
  {
    id: 'lansdowne',
    name: 'Lansdowne',
    tagline: 'Quiet Cantonment Charm, Pine Woods & Colonial Serenity',
    category: 'Hills & Valleys',
    image: '/images/destinations/lansdowne/photo-1.jpg',
    gallery: ['/images/destinations/lansdowne/photo-1.jpg', '/images/destinations/lansdowne/photo-2.jpg'],
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
      { name: 'Garhwal Rifles Museum', desc: 'Houses historical army weapons and wartime exhibits.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (145 km).',
      byTrain: 'Kotdwar Railway Station (40 km, 1.5 hours).',
      byRoad: '6 hours drive from Delhi (250 km) via Kotdwar.'
    }
  },
  {
    id: 'mukteshwar',
    name: 'Mukteshwar',
    tagline: 'Apple Orchards, Rock Climbing & Trishul Peak Views',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'],
    description: 'Named after the 350-year-old Shiva shrine Mukteshwar Dham, this quiet Kumaon ridge town is surrounded by sprawling fruit orchards and dramatic overhanging cliffs at Chauli Ki Jali.',
    highlights: ['Chauli Ki Jali rocky cliff', 'Mukteshwar Dham 350-yr shrine', 'Breathtaking Nanda Devi vistas', 'Peaceful orchard stays'],
    bestTime: 'March to June & October to January',
    altitude: '2,171 m (7,122 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: '₹5,499',
    isPopular: true,
    topAttractions: [
      { name: 'Chauli Ki Jali', desc: 'Dramatic natural rock ledge famed for rappelling and valley sunsets.' },
      { name: 'Mukteshwar Temple', desc: 'Ancient stone temple situated at the highest point in town.' },
      { name: 'Bhatelia Orchards', desc: 'Vibrant fruit estates producing crisp apples, plums, and peaches.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (95 km).',
      byTrain: 'Kathgodam Railway Station (65 km).',
      byRoad: 'Well connected via Bhowali - Ramgarh road.'
    }
  },
  {
    id: 'dhanaulti',
    name: 'Dhanaulti',
    tagline: 'Serene Alpine Haven Amidst Deodars & Surkanda Devi Peak',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'],
    description: 'Located just 30 km past Mussoorie, Dhanaulti offers quiet alpine charm without commercial crowds. Walk through towering deodar woods at Eco Park and trek to the sacred mountain-top Surkanda Devi temple.',
    highlights: ['Eco Park Deodar Woods', 'Surkanda Devi Temple (2,757m)', 'Potato Farm Viewpoint', 'Adventure sports park'],
    bestTime: 'Round the year (Snow in Dec-Feb)',
    altitude: '2,286 m (7,500 ft)',
    idealDuration: '2 Days',
    startingPrice: '₹4,499',
    isPopular: true,
    topAttractions: [
      { name: 'Eco Park (Amber & Dhara)', desc: 'Peaceful walking trails surrounded by high deodar trees.' },
      { name: 'Surkanda Devi Temple', desc: 'Prominent Shakti Peeth offering 360-degree snow peaks views.' },
      { name: 'Kanatal Scenic Ridge', desc: 'Quiet adjoining village famed for adventure camps.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (85 km).',
      byTrain: 'Dehradun Railway Station (60 km).',
      byRoad: 'Direct scenic drive from Mussoorie or Chamba.'
    }
  },
  {
    id: 'kausani',
    name: 'Kausani',
    tagline: 'Switzerland of India & 300-km Himalayan Snow Wall',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'],
    description: 'Mahatma Gandhi dubbed Kausani the "Switzerland of India". Perched atop a ridge, it offers an uninterrupted 300 km panoramic view of Himalayan peaks including Trishul, Nanda Devi, and Panchachuli.',
    highlights: ['300 km Himalayan snow peak panorama', 'Anasakti Ashram (Gandhi Smarak)', 'Kausani Tea Estate', 'Rudradhari Falls & Caves'],
    bestTime: 'April to June & September to November',
    altitude: '1,890 m (6,200 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: '₹5,999',
    isPopular: true,
    topAttractions: [
      { name: 'Anasakti Ashram', desc: 'Where Mahatma Gandhi wrote his treatise on Anasakti Yoga.' },
      { name: 'Kausani Tea Estate', desc: 'Organic tea plantations stretching across high mountain terraces.' },
      { name: 'Sumitranandan Pant Museum', desc: 'Birthplace of the legendary Hindi poet.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (165 km).',
      byTrain: 'Kathgodam Railway Station (135 km).',
      byRoad: 'Well connected via Almora and Ranikhet.'
    }
  },
  {
    id: 'munsiyari',
    name: 'Munsiyari',
    tagline: 'Gateway to Milam Glacier & Panchachuli Snow Peaks',
    category: 'Hills & Valleys',
    image: '/images/destinations/munsiyari/photo-1.jpg',
    gallery: ['/images/destinations/munsiyari/photo-1.jpg', '/images/destinations/munsiyari/photo-2.jpg'],
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
      { name: 'Tribal Heritage Museum', desc: 'Curated artefacts of the ancient Shauka trading community.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (310 km).',
      byTrain: 'Kathgodam Railway Station (275 km).',
      byRoad: 'Scenic road drive via Almora - Bageshwar - Thal - Munsiyari.'
    }
  },

  // ==========================================
  // 2. SPIRITUAL DESTINATIONS
  // ==========================================
  {
    id: 'haridwar',
    name: 'Haridwar',
    tagline: 'Gateway to the Gods & Holy Har Ki Pauri Ganga Aarti',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop'],
    description: 'Where the holy Ganges exits the Himalayas to touch the plains of Northern India. Haridwar is one of India’s seven holiest cities (Sapta Puri) famous for the mesmerizing evening Ganga Aarti at Har Ki Pauri.',
    highlights: ['Har Ki Pauri Maha Aarti', 'Mansa Devi & Chandi Devi cable cars', 'Daksheshwar Mahadev Temple', 'Sacred Brahma Kund dip'],
    bestTime: 'October to April (Round the year)',
    altitude: '314 m',
    idealDuration: '2 Days',
    startingPrice: '₹3,999',
    isPopular: true,
    topAttractions: [
      { name: 'Har Ki Pauri', desc: 'Sacred ghat where thousands gather for the golden twilight Ganga Aarti.' },
      { name: 'Mansa Devi Temple', desc: 'Hilltop shrine overlooking the holy city, reached by ropeway.' },
      { name: 'Chandi Devi Temple', desc: 'Revered temple atop Neel Parvat dedicated to Goddess Chandi.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (38 km).',
      byTrain: 'Haridwar Junction is a major national railhead.',
      byRoad: '4.5 hours drive from Delhi via Meerut Expressway (215 km).'
    }
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    tagline: 'Yoga Capital of the World & Gateway to Himalayan Adventure',
    category: 'Spiritual',
    image: '/images/destinations/rishikesh/photo-1.jpg',
    gallery: ['/images/destinations/rishikesh/photo-1.jpg', '/images/destinations/rishikesh/photo-2.jpg'],
    description: 'Where the holy Ganges surges down the Shivalik foothills, Rishikesh bridges serene spirituality with high-adrenaline sports like white-water rafting, riverside luxury camping, and soulful Ganga Aarti.',
    highlights: ['Triveni Ghat Ganga Aarti', 'Ram & Laxman Jhula bridges', 'Beatles Ashram meditation', 'White water river rafting'],
    bestTime: 'September to May',
    altitude: '372 m (1,220 ft)',
    idealDuration: '2 - 4 Days',
    startingPrice: '₹4,999',
    isPopular: true,
    topAttractions: [
      { name: 'Triveni Ghat', desc: 'Confluence of Ganga, Yamuna & Saraswati famed for soulful evening Aarti.' },
      { name: 'Ram Jhula & Laxman Jhula', desc: 'Historic suspension bridges lined with ashrams and cafes.' },
      { name: 'Beatles Ashram', desc: 'Historic ashram where the Beatles studied Transcendental Meditation.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (20 km).',
      byTrain: 'Yog Nagari Rishikesh Railway Station.',
      byRoad: '6 hours direct highway drive from Delhi (240 km).'
    }
  },
  {
    id: 'yamunotri',
    name: 'Yamunotri',
    tagline: 'Sacred Origin of River Yamuna & Goddess Yamuna Dham',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'],
    description: 'The westernmost shrine of the Char Dham circuit, nestled against Bandarpoonch peak. Devotees cook rice and potatoes in the boiling hot springs of Surya Kund before offering prayers to black marble Goddess Yamuna.',
    highlights: ['Yamunotri Temple darshan', 'Surya Kund thermal hot springs', 'Divya Shila sacred rock', 'Janki Chatti base trek (6 km)'],
    bestTime: 'May to June & September to October',
    altitude: '3,291 m (10,797 ft)',
    idealDuration: '3 Days',
    startingPrice: '₹9,999',
    isPopular: true,
    topAttractions: [
      { name: 'Yamunotri Temple', desc: 'Revered shrine of Goddess Yamuna constructed by Maharaja Pratap Shah.' },
      { name: 'Surya Kund', desc: 'Natural geothermal hot spring where prasad is cooked in muslin cloth.' },
      { name: 'Divya Shila', desc: 'Powerful rock pillar worshipped before entering the main temple.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (190 km to Janki Chatti base).',
      byTrain: 'Dehradun / Rishikesh Railway Station.',
      byRoad: 'Road up to Janki Chatti, followed by a 6 km walking/pony trek.'
    }
  },
  {
    id: 'gangotri',
    name: 'Gangotri',
    tagline: 'The Holy Birthplace of River Bhagirathi & King Bhagirath Penance',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'],
    description: 'Set on the banks of Bhagirathi amidst deodar forests, Gangotri is the sacred seat of Goddess Ganga. According to Hindu mythology, here Lord Shiva released the mighty river from his locks.',
    highlights: ['Gangotri White Granite Temple', 'Bhagirath Shila meditation stone', 'Submerged Shivling in river', 'Gaumukh Glacier trek starting point'],
    bestTime: 'May to June & September to October',
    altitude: '3,100 m (10,170 ft)',
    idealDuration: '3 Days',
    startingPrice: '₹9,999',
    isPopular: true,
    topAttractions: [
      { name: 'Gangotri Temple', desc: '18th-century temple built by Gurkha General Amar Singh Thapa.' },
      { name: 'Surya Kund & Gauri Kund', desc: 'Dramatic natural gorges where Bhagirathi falls with thunderous power.' },
      { name: 'Submerged Shivling', desc: 'Natural rock Shivling visible during winter when river water recedes.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (250 km).',
      byTrain: 'Rishikesh (240 km) or Haridwar (260 km).',
      byRoad: 'Motorable highway all the way to Gangotri temple gate.'
    }
  },
  {
    id: 'kedarnath',
    name: 'Kedarnath',
    tagline: 'The Sacred Abode of Lord Shiva Amidst Glacial Peaks',
    category: 'Spiritual',
    image: '/images/destinations/kedarnath/photo-1.jpg',
    gallery: ['/images/destinations/kedarnath/photo-1.jpg', '/images/destinations/kedarnath/photo-2.jpg'],
    description: 'Set at an altitude of 3,584 metres against the magnificent Kedar dome, Kedarnath is the most revered shrine of Lord Shiva in the Garhwal Himalayas. A divine journey of faith, endurance, and unmatched alpine beauty.',
    highlights: ['Kedarnath Temple (1200+ yrs old)', 'Bhairavnath Temple viewpoint', 'Vasuki Tal glacial trek', 'Helicopter and pony trail options'],
    bestTime: 'May to June & September to October',
    altitude: '3,584 m (11,759 ft)',
    idealDuration: '3 - 5 Days',
    startingPrice: '₹14,999',
    isPopular: true,
    topAttractions: [
      { name: 'Kedarnath Temple', desc: 'Ancient stone temple dedicated to Lord Shiva surrounded by snow clad peaks.' },
      { name: 'Bhairavnath Temple', desc: 'Protector deity offering panoramic valley and temple vistas.' },
      { name: 'Gaurikund', desc: 'Starting point of the Kedarnath trek with sacred hot sulphur springs.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Dehradun (238 km to Gaurikund) + Helipad at Phata/Guptkashi.',
      byTrain: 'Rishikesh (216 km) / Haridwar (240 km).',
      byRoad: 'Road connectivity up to Sonprayag/Gaurikund via NH107.'
    }
  },
  {
    id: 'badrinath',
    name: 'Badrinath',
    tagline: 'The Cosmic Seat of Lord Badri Vishal & Alaknanda Valley',
    category: 'Spiritual',
    image: '/images/destinations/badrinath/photo-1.jpg',
    gallery: ['/images/destinations/badrinath/photo-1.jpg', '/images/destinations/badrinath/photo-2.jpg'],
    description: 'One of the Char Dhams of India and the holiest temple of Lord Vishnu, situated between Nar and Narayana mountain ranges alongside the sacred thermal springs of Tapt Kund.',
    highlights: ['Badrinath Temple golden facade', 'Tapt Kund natural hot springs', 'Mana - The First Indian Village', 'Vasudhara Falls (122m)'],
    bestTime: 'May to June & September to October',
    altitude: '3,300 m (10,826 ft)',
    idealDuration: '3 - 4 Days',
    startingPrice: '₹13,999',
    isPopular: true,
    topAttractions: [
      { name: 'Badrinath Temple', desc: 'Colorful facade shrine with 1-meter tall black stone idol of Lord Vishnu.' },
      { name: 'Tapt Kund', desc: 'Sacred geothermal sulphur spring believed to have medicinal powers.' },
      { name: 'Brahma Kapal', desc: 'Holy platform on the banks of Alaknanda for ancestral rites.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (314 km).',
      byTrain: 'Rishikesh Railway Station (295 km).',
      byRoad: 'Fully motorable highway (NH58) directly up to temple gate.'
    }
  },
  {
    id: 'hemkund-sahib',
    name: 'Hemkund Sahib',
    tagline: 'World’s Highest Gurudwara & Pristine Glacial Lake',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop'],
    description: 'Situated at an astonishing altitude of 4,329 meters and surrounded by seven snow-capped peaks, Sri Hemkund Sahib is where the tenth Sikh Guru, Guru Gobind Singh Ji, meditated in his previous incarnation.',
    highlights: ['Glacial lake reflection of 7 peaks', 'World’s highest Sikh Gurudwara', 'Rare Brahma Kamal flowers', 'Lakshman Temple nearby'],
    bestTime: 'June to October (Doors open June 1)',
    altitude: '4,329 m (14,202 ft)',
    idealDuration: '4 - 5 Days',
    startingPrice: '₹11,999',
    isPopular: true,
    topAttractions: [
      { name: 'Gurudwara Hemkund Sahib', desc: 'Star-shaped white marble shrine beside the crystal glacial waters.' },
      { name: 'Hemkund Lake', desc: 'Sacred alpine tarn fed by mountain glaciers.' },
      { name: 'Ghangaria Base', desc: 'Scenic valley camp serving both Hemkund Sahib and Valley of Flowers.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (290 km to Govindghat).',
      byTrain: 'Rishikesh Railway Station (275 km).',
      byRoad: 'Drive to Govindghat, then 14 km trek to Ghangaria, and 6 km ascent to Hemkund.'
    }
  },
  {
    id: 'tungnath',
    name: 'Tungnath',
    tagline: 'The Highest Shiva Shrine on Earth & Third Kedar',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'],
    description: 'Standing at 3,680 meters, Tungnath is the highest among all Panch Kedar temples and the highest Shiva temple on earth. A gentle 4 km stone path from Chopta leads pilgrims to this eternal sanctuary.',
    highlights: ['Highest Shiva Temple on Earth (3,680m)', '3rd Kedar of Panch Kedar', 'Paved trail through rhododendrons', 'Chandrashila summit extension'],
    bestTime: 'April to November (Winter treks available)',
    altitude: '3,680 m (12,073 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: '₹6,999',
    isPopular: true,
    topAttractions: [
      { name: 'Tungnath Stone Temple', desc: 'Ancient stone sanctum where arms of Lord Shiva are worshipped.' },
      { name: 'Chandrashila Peak', desc: '4,000m ridge top with sweeping 360-degree Himalayan views.' },
      { name: 'Ravanshila Rock', desc: 'Ancient rock where demon king Ravana performed intense penance.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (225 km to Chopta).',
      byTrain: 'Rishikesh Railway Station (205 km).',
      byRoad: 'Drive to Chopta base via Ukhimath, followed by a 4 km uphill trek.'
    }
  },

  // ==========================================
  // 3. NATURE ESCAPES
  // ==========================================
  {
    id: 'valley-of-flowers',
    name: 'Valley of Flowers',
    tagline: 'UNESCO Biosphere Carpeted with 500+ Wildflower Species',
    category: 'Hills & Valleys',
    image: '/images/destinations/valley-of-flowers/photo-1.jpg',
    gallery: ['/images/destinations/valley-of-flowers/photo-1.jpg', '/images/destinations/valley-of-flowers/photo-2.jpg'],
    description: 'Discovered accidentally by Frank Smythe in 1931, this high-altitude valley explodes into a natural carpet of over 500 varieties of wildflowers, glacial streams, and butterflies during the monsoon.',
    highlights: ['UNESCO World Heritage Site', '500+ species of alpine wildflowers', 'Pushpawati river waterfalls', 'Rare Blue Poppy & Brahma Kamal'],
    bestTime: 'July to September (Peak bloom in late July - August)',
    altitude: '3,658 m (12,000 ft)',
    idealDuration: '4 - 6 Days',
    startingPrice: '₹12,999',
    isPopular: true,
    topAttractions: [
      { name: 'Valley Floral Meadows', desc: 'Stretches for 8 km surrounded by Gauri Parvat and Rataban peaks.' },
      { name: 'Pushpawati River', desc: 'Melting glacier stream surging through the centre of the valley.' },
      { name: 'Joan Margaret Legge Memorial', desc: 'Grave of the British botanist who lost her life researching flowers.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (290 km to Govindghat).',
      byTrain: 'Rishikesh Railway Station (275 km).',
      byRoad: 'Drive to Govindghat, trek 14 km to Ghangaria, enter valley via Forest Gate.'
    }
  },
  {
    id: 'chopta',
    name: 'Chopta',
    tagline: 'The Mini Switzerland of Uttarakhand & Tungnath Gateway',
    category: 'Hills & Valleys',
    image: '/images/destinations/chopta/photo-1.jpg',
    gallery: ['/images/destinations/chopta/photo-1.jpg', '/images/destinations/chopta/photo-2.jpg'],
    description: 'An untouched alpine meadow nestled within Kedarnath Wildlife Sanctuary. Chopta is the base for Tungnath and the dramatic Chandrashila summit overlooking Chaukhamba peaks.',
    highlights: ['Tungnath Temple (3,680m)', 'Chandrashila Peak (4,000m)', 'Deoria Tal Reflection Lake', 'Lush Rhododendron Forests'],
    bestTime: 'April to June & September to November',
    altitude: '2,680 m (8,790 ft)',
    idealDuration: '3 - 4 Days',
    startingPrice: '₹7,999',
    isPopular: true,
    topAttractions: [
      { name: 'Tungnath Temple', desc: '3rd Kedar and world’s highest stone Shiva shrine.' },
      { name: 'Chandrashila Summit', desc: 'Breath-taking 360-degree panorama of Chaukhamba and Nanda Devi.' },
      { name: 'Deoria Tal', desc: 'Emerald lake at 2,438m reflecting Chaukhamba peaks.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (225 km).',
      byTrain: 'Rishikesh (205 km) or Haridwar (230 km).',
      byRoad: 'Accessible via Rudraprayag - Ukhimath - Chopta road.'
    }
  },
  {
    id: 'dayara-bugyal',
    name: 'Dayara Bugyal',
    tagline: 'Endless Alpine Velvet Meadows & Panoramic Snow Horizons',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'],
    description: 'Considered among the most breathtaking sub-alpine meadows in India, Dayara Bugyal spans across 28 square kilometers of lush velvet grasslands in summer and converts into vast powder snowfields in winter.',
    highlights: ['28 sq km alpine meadow expanse', 'Bakaria Top summit (3,810m)', 'Barnala Tal lake campsite', 'Winter butter festival (Anduri Utsav)'],
    bestTime: 'May to November (Meadows) & Dec to March (Snow)',
    altitude: '3,048 m - 3,810 m',
    idealDuration: '4 - 5 Days',
    startingPrice: '₹8,999',
    isPopular: true,
    topAttractions: [
      { name: 'Bakaria Top', desc: 'Highest point of Dayara Bugyal with panoramic view of Bandarpoonch.' },
      { name: 'Barnala Tal', desc: 'Serene sub-alpine water tarn along the trail through oak forests.' },
      { name: 'Barsu & Raithal Villages', desc: 'Picturesque base hamlets with centuries-old wooden Garhwali homes.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (195 km to Barsu).',
      byTrain: 'Dehradun Railway Station (180 km).',
      byRoad: 'Drive from Uttarkashi to Raithal or Barsu village, followed by trek.'
    }
  },
  {
    id: 'deoria-tal',
    name: 'Deoria Tal',
    tagline: 'Crystal Mountain Tarn Reflecting Chaukhamba Peaks',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop'],
    description: 'At an altitude of 2,438 meters, Deoria Tal is an idyllic emerald lake famous for its mirror-like reflections of the Chaukhamba massif. According to the Mahabharata, this is where the Yaksha tested the Pandavas.',
    highlights: ['Chaukhamba mirror reflection', 'Mahabharata Yaksha Prashna site', '2.5 km gentle hike from Sari village', 'Lush forest camping & bird watching'],
    bestTime: 'Round the year (Best: March to June & Sept to Nov)',
    altitude: '2,438 m (7,999 ft)',
    idealDuration: '2 Days',
    startingPrice: '₹3,999',
    isPopular: true,
    topAttractions: [
      { name: 'Chaukhamba Lake Reflection', desc: 'Iconic crystal mirror view during early sunrise.' },
      { name: 'Sari Village Base', desc: 'Terraced stone hamlet with traditional Apple and Peach orchards.' },
      { name: 'Forest Watchtower', desc: 'Viewpoint for birders observing Himalayan monals and woodpeckers.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (210 km to Sari).',
      byTrain: 'Rishikesh Railway Station (195 km).',
      byRoad: 'Drive to Sari village via Rudraprayag & Ukhimath, then 2.5 km stone trail.'
    }
  },
  {
    id: 'har-ki-dun',
    name: 'Har Ki Dun Valley',
    tagline: 'The Cradle of the Gods & Ancient Morinda Glacial Valley',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop'],
    description: 'A cradle-shaped hanging valley nestled inside Govind Pashu Vihar National Park. Known as the Valley of Gods, it is steeped in folklore as the trail the Pandavas ascended on their path to heaven.',
    highlights: ['Swargarohini & Jaundhar glacier vistas', 'Ancient Someshwar wooden temples', 'Alpine flora and endemic bird species', 'Sankri & Osla heritage hamlets'],
    bestTime: 'April to June & September to December',
    altitude: '3,566 m (11,700 ft)',
    idealDuration: '6 - 7 Days',
    startingPrice: '₹13,499',
    isPopular: true,
    topAttractions: [
      { name: 'Swargarohini Peak View', desc: 'Glacial stair mountain believed to lead directly to heaven.' },
      { name: 'Osla Ancient Village', desc: 'Centuries-old wooden village with unique carved architecture.' },
      { name: 'Maninda Tal', desc: 'High alpine glacial tarn known for rare Brahma Kamal flowers.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (215 km to Sankri base).',
      byTrain: 'Dehradun Railway Station (200 km).',
      byRoad: 'Drive to Sankri village, followed by trail through Taluka and Seema.'
    }
  },
  {
    id: 'binsar',
    name: 'Binsar',
    tagline: 'Zero Point Panorama & Pristine Oak Forest Sanctuary',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'],
    description: 'Former summer capital of the Chand Kings of Kumaon, Binsar is a tranquil wildlife haven enclosed by dense oak and rhododendron forests. Its Zero Point offers panoramic views of Kedarnath, Shivling, Trishul, and Nanda Devi.',
    highlights: ['Zero Point 300 km snow view', 'Binsar Wildlife Sanctuary trails', 'Bineshwar Mahadev 16th-century temple', '200+ species of Himalayan birds'],
    bestTime: 'October to March (Clear peaks) & April to June',
    altitude: '2,420 m (7,940 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: '₹6,499',
    isPopular: true,
    topAttractions: [
      { name: 'Zero Point', desc: 'Highest viewpoint inside the sanctuary offering close-up snow peak vistas.' },
      { name: 'Bineshwar Mahadev Temple', desc: 'Historic temple dedicated to Lord Shiva built by King Kalyan Chand.' },
      { name: 'Mary Budden Estate', desc: 'Heritage colonial property surrounded by serene wilderness.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (150 km).',
      byTrain: 'Kathgodam Railway Station (120 km).',
      byRoad: '30 km drive from Almora via motorable sanctuary road.'
    }
  },
  {
    id: 'harsil-valley',
    name: 'Harsil Valley',
    tagline: 'Pristine Bhagirathi Apple Valley & Himalayan Deodars',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'],
    description: 'Nestled on the banks of Bhagirathi River on the route to Gangotri, Harsil is a fairy-tale hamlet celebrated for its crisp red apple orchards, dense deodar forests, traditional wooden bridges, and serene Swiss-like tranquility.',
    highlights: ['Crisp organic apple orchards', 'Wilson’s Cottage heritage lore', 'Mukhba village (Winter seat of Ganga)', 'Saat Tal glacial lake trek'],
    bestTime: 'April to June & September to November',
    altitude: '2,620 m (8,600 ft)',
    idealDuration: '3 - 4 Days',
    startingPrice: '₹7,999',
    isPopular: true,
    topAttractions: [
      { name: 'Mukhba Village', desc: 'Sacred winter home where idol of Goddess Ganga is worshipped for 6 months.' },
      { name: 'Dharali Apple Orchards', desc: 'Picturesque riverside hamlet famed for red and golden apples.' },
      { name: 'Saat Tal Harsil', desc: 'Cluster of seven pristine natural lakes hidden in pine forests.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (220 km).',
      byTrain: 'Rishikesh Railway Station (210 km).',
      byRoad: 'Scenic drive along Uttarkashi - Gangotri highway.'
    }
  },

  // ==========================================
  // 4. WILDLIFE & NATIONAL PARKS
  // ==========================================
  {
    id: 'jim-corbett',
    name: 'Jim Corbett National Park',
    tagline: 'India’s Oldest National Park & Royal Bengal Tiger Kingdom',
    category: 'Wildlife',
    image: '/images/destinations/corbett/photo-1.jpg',
    gallery: ['/images/destinations/corbett/photo-1.jpg', '/images/destinations/corbett/photo-2.jpg'],
    description: 'Established in 1936 along the Ramganga River, Corbett is India’s legendary tiger reserve. Experience thrilling open-top 4x4 Jeep safaris, herd of wild Asiatic elephants, and over 600 species of birds.',
    highlights: ['Dhikala & Bijrani Jeep Safari', 'Royal Bengal Tigers & Elephants', 'Ramganga River safari lodges', 'Corbett Waterfall & Museum'],
    bestTime: 'November to June (Dhikala zone opens Nov 15)',
    altitude: '385 m - 1,100 m',
    idealDuration: '2 - 3 Days',
    startingPrice: '₹7,999',
    isPopular: true,
    topAttractions: [
      { name: 'Dhikala Tourism Zone', desc: 'Core tiger territory famed for sprawling grasslands and wildlife sightings.' },
      { name: 'Bijrani Zone', desc: 'Dense sal and teak forests offering highest tiger sighting probabilities.' },
      { name: 'Garjiya Devi Temple', desc: 'Sacred rock shrine set in the middle of Kosi River.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (80 km) or Delhi IGI (260 km).',
      byTrain: 'Ramnagar Railway Station (12 km).',
      byRoad: '5.5 hours smooth drive from Delhi via Moradabad & Kashipur (245 km).'
    }
  },
  {
    id: 'rajaji-national-park',
    name: 'Rajaji National Park',
    tagline: 'Asiatic Elephant Sanctuary in the Shivalik Foothills',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop'],
    description: 'Spanning across 820 square kilometers of the Shivalik ranges near Haridwar and Rishikesh, Rajaji is home to over 500 wild Asiatic elephants, leopards, tigers, sloth bears, and 400 species of birds.',
    highlights: ['Chilla & Motichur Safari Zones', '500+ Asiatic Wild Elephants', 'Tiger corridor conservation', 'Bird watching on Ganga canal'],
    bestTime: 'November 15 to June 15',
    altitude: '300 m - 1,000 m',
    idealDuration: '2 Days',
    startingPrice: '₹5,499',
    isPopular: true,
    topAttractions: [
      { name: 'Chilla Safari Zone', desc: 'Premier safari gate near Haridwar with elephant herds and leopards.' },
      { name: 'Motichur Zone', desc: 'Dense sal jungle zone offering serene nature trails.' },
      { name: 'Kansro Zone', desc: 'Secluded reserve zone renowned for avian biodiversity.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (25 km).',
      byTrain: 'Haridwar Railway Station (15 km).',
      byRoad: 'Convenient road drive from Haridwar, Rishikesh, or Dehradun.'
    }
  },
  {
    id: 'nanda-devi-national-park',
    name: 'Nanda Devi National Park',
    tagline: 'UNESCO World Biosphere & High Himalayan Wilderness',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'],
    description: 'Surrounding India’s second highest mountain, Nanda Devi (7,816m), this UNESCO Biosphere Reserve is a pristine high-altitude sanctuary housing the elusive Snow Leopard, Himalayan Musk Deer, and Bharal (Blue Sheep).',
    highlights: ['UNESCO World Heritage Biosphere', 'Nanda Devi peak (7,816m)', 'Snow Leopard & Bharal habitat', 'Rishi Ganga River gorge'],
    bestTime: 'May to October',
    altitude: '3,500 m - 7,816 m',
    idealDuration: '5 - 7 Days',
    startingPrice: '₹16,999',
    isPopular: false,
    topAttractions: [
      { name: 'Rishi Ganga Gorge', desc: 'One of the deepest and most dramatic mountain gorges on earth.' },
      { name: 'Lata Village Buffer Entry', desc: 'Cultural trailhead where indigenous forest guides lead expeditions.' },
      { name: 'Dharansi Pass', desc: 'Challenging vantage point looking into the inner Nanda Devi sanctuary.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (300 km).',
      byTrain: 'Rishikesh Railway Station (280 km).',
      byRoad: 'Drive to Joshimath, then road to Lata village entry point.'
    }
  },
  {
    id: 'gangotri-national-park',
    name: 'Gangotri National Park',
    tagline: 'High Alpine Snow Leopard Reserve & Gaumukh Glacier',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'],
    description: 'Encompassing the Gaumukh glacier and dramatic peaks like Shivling and Bhagirathi, this park protects coniferous forests, glacial tarns, and high-altitude wildlife including the Tibetan Wolf, Snow Leopard, and Ibex.',
    highlights: ['Gaumukh Glacier & Tapovan trail', 'Shivling & Bhagirathi Sister Peaks', 'Rare Snow Leopard & Blue Sheep', 'High altitude glacial moraines'],
    bestTime: 'May to October',
    altitude: '1,800 m - 7,083 m',
    idealDuration: '5 - 6 Days',
    startingPrice: '₹14,999',
    isPopular: false,
    topAttractions: [
      { name: 'Gaumukh Glacier', desc: 'Vast snout of the Gangotri Glacier where the holy river originates.' },
      { name: 'Tapovan Meadows', desc: 'Sacred high alpine meadow directly under the towering Mount Shivling.' },
      { name: 'Bhojwasa', desc: 'Riverside birch forest camp on the trek between Gangotri and Gaumukh.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (250 km to Gangotri gate).',
      byTrain: 'Rishikesh Railway Station (240 km).',
      byRoad: 'Drive to Gangotri temple, enter park via official Forest Department permit checkpoint.'
    }
  },
  {
    id: 'binsar-wildlife-sanctuary',
    name: 'Binsar Wildlife Sanctuary',
    tagline: 'Avian Wonderland, Barking Deer & Dense Rhododendron Forests',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop'],
    description: 'Spanning across 47 square kilometers in the Kumaon hills, Binsar Sanctuary protects endangered wildlife such as leopards, ghoral, red foxes, and black bears amidst ancient oak and rhododendron canopies.',
    highlights: ['200+ resident & migratory bird species', 'Himalayan Black Bear & Leopard', 'Dense undisturbed oak jungle', 'Zero Point Himalayan panorama'],
    bestTime: 'October to May',
    altitude: '2,200 m - 2,500 m',
    idealDuration: '2 - 3 Days',
    startingPrice: '₹6,499',
    isPopular: true,
    topAttractions: [
      { name: 'Sanctuary Forest Trails', desc: 'Marked eco-walking paths for quiet wildlife tracking and birding.' },
      { name: 'Zero Point', desc: 'Lookout tower delivering 300 km uninterrupted views of snow crests.' },
      { name: 'Khali Estate', desc: 'Historic 1875 estate where Indian luminaries stayed in the wilderness.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (150 km).',
      byTrain: 'Kathgodam Railway Station (120 km).',
      byRoad: '30 km road drive from Almora to Ayarpani sanctuary gate.'
    }
  },

  // ==========================================
  // 5. VILLAGES & HIDDEN GEMS
  // ==========================================
  {
    id: 'mana-village',
    name: 'Mana Village',
    tagline: 'The First Indian Village & Sacred Saraswati River Origin',
    category: 'Offbeat Uttarakhand',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'],
    description: 'Officially recognized by the Prime Minister as "The First Village of India", Mana sits at 3,200 meters just 3 km from Badrinath on the ancient Indo-Tibet trade route. Home to Vyas Gufa and the thundering Bheem Pul.',
    highlights: ['Bheem Pul natural stone bridge', 'Vyas Gufa (Where Mahabharata was penned)', 'Ganesh Gufa cave', 'Last tea stall of India on border'],
    bestTime: 'May to October',
    altitude: '3,200 m (10,500 ft)',
    idealDuration: '1 - 2 Days',
    startingPrice: '₹4,999',
    isPopular: true,
    topAttractions: [
      { name: 'Bheem Pul', desc: 'Gigantic boulder placed across Saraswati River by Pandava prince Bheema.' },
      { name: 'Vyas Gufa', desc: 'Ancient cave where sage Veda Vyasa composed the epic Mahabharata.' },
      { name: 'Vasudhara Falls Trail', desc: 'Spectacular 5 km glacier trail to a 122m cascade that turns to mist.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (317 km).',
      byTrain: 'Rishikesh Railway Station (298 km).',
      byRoad: 'Direct motorable road just 3 km ahead of Badrinath temple.'
    }
  },
  {
    id: 'sari-village',
    name: 'Sari Village',
    tagline: 'Charming Stone Hamlet & Trailhead for Deoria Tal',
    category: 'Offbeat Uttarakhand',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop'],
    description: 'A picture-postcard Garhwali village with terraced fields, stone slate roofs, and apple orchards. Sari is the beloved gateway for the 2.5 km hike to the emerald waters of Deoria Tal.',
    highlights: ['Authentic Garhwali homestays', 'Stone and slate traditional architecture', 'Apple & Peach orchard walks', 'Direct trail to Deoria Tal'],
    bestTime: 'Round the year',
    altitude: '2,000 m (6,560 ft)',
    idealDuration: '2 Days',
    startingPrice: '₹3,999',
    isPopular: true,
    topAttractions: [
      { name: 'Deoria Tal Trail', desc: 'Well-marked stone path winding up to the Chaukhamba reflection lake.' },
      { name: 'Sari Apple Orchards', desc: 'Walk along terraced fields tasting local mountain fruits.' },
      { name: 'Ukhimath Omkareshwar Temple', desc: 'Ancient winter shrine of Lord Kedarnath situated nearby.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (210 km).',
      byTrain: 'Rishikesh (195 km).',
      byRoad: 'Drive from Rudraprayag towards Ukhimath and take the Sari branch road.'
    }
  },
  {
    id: 'sankri',
    name: 'Sankri',
    tagline: 'Alpine Base Village for Kedarkantha & Har Ki Dun Treks',
    category: 'Offbeat Uttarakhand',
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop'],
    description: 'Tucked inside the Govind Pashu Vihar National Park, Sankri is a bustling mountaineer’s haven with wooden alpine homes, apple orchards, and sweeping views of the Swargarohini range.',
    highlights: ['Basecamp for Kedarkantha Snow Trek', 'Gateway to Har Ki Dun & Ruinsara Tal', 'Traditional wooden homes', 'Sunset over Swargarohini peak'],
    bestTime: 'Round the year (Snow in Dec-March)',
    altitude: '1,950 m (6,400 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: '₹4,499',
    isPopular: true,
    topAttractions: [
      { name: 'Sankri Village Promenade', desc: 'Boutique mountain cafes, gear rental shops, and wooden lodges.' },
      { name: 'Juda Ka Talab Trail', desc: 'Forested ascent to the frozen alpine tarn under pine canopies.' },
      { name: 'Supin River Confluence', desc: 'Mountain stream gushing past lush green terraced fields.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (215 km).',
      byTrain: 'Dehradun Railway Station (200 km, 7 hours drive).',
      byRoad: 'Scenic mountain drive via Mussoorie - Purola - Mori - Sankri.'
    }
  },
  {
    id: 'khirsu',
    name: 'Khirsu',
    tagline: 'Quiet Pine & Apple Ridge Overlooking 300+ Himalayan Peaks',
    category: 'Offbeat Uttarakhand',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'],
    description: 'A secluded secret in Pauri Garhwal. Surrounded by thick oak, deodar, and apple orchards, Khirsu provides an astonishing view of hundreds of named and unnamed snow-capped Himalayan peaks.',
    highlights: ['Panoramic view of 300+ snow peaks', 'Dense forest walking trails', 'Orchard picking in season', 'Ghandiyal Devta ancient shrine'],
    bestTime: 'March to June & September to November',
    altitude: '1,700 m (5,577 ft)',
    idealDuration: '2 Days',
    startingPrice: '₹3,999',
    isPopular: false,
    topAttractions: [
      { name: 'Khirsu Forest Park', desc: 'Serene nature trails shaded by centuries-old oak and deodar canopies.' },
      { name: 'Ghandiyal Devta Temple', desc: 'Revered guardian shrine known for local folklore and fairs.' },
      { name: 'Kandoliya Temple Viewpoint', desc: 'Nearby shrine in Pauri offering sunset views over snow peaks.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (145 km).',
      byTrain: 'Kotdwar (115 km) or Rishikesh (130 km).',
      byRoad: 'Accessible via Srinagar Garhwal or Pauri town.'
    }
  },
  {
    id: 'lata-village',
    name: 'Lata Village',
    tagline: 'Cradle of the Chipko Movement & Nanda Devi Gateway',
    category: 'Offbeat Uttarakhand',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'],
    description: 'Perched high in the Dhauli Ganga valley, Lata is the historic birthplace of the world-famous Chipko forest-protection movement and cultural gateway to Nanda Devi Biosphere Reserve.',
    highlights: ['Birthplace of the Chipko Movement', 'Nanda Devi Temple & sacred fairs', 'Traditional carved wooden homes', 'Gateway to Bhyundar & Nanda Devi trails'],
    bestTime: 'May to October',
    altitude: '2,316 m (7,600 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: '₹4,999',
    isPopular: false,
    topAttractions: [
      { name: 'Nanda Devi Temple Lata', desc: 'Ancient village sanctuary hosting dramatic mask dances.' },
      { name: 'Chipko Smarak', desc: 'Memorial celebrating the brave women who hugged trees to save forests.' },
      { name: 'Dharansi Pass Trail', desc: 'Ascent starting from the village toward high alpine pastures.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (300 km).',
      byTrain: 'Rishikesh Railway Station (280 km).',
      byRoad: 'Drive from Joshimath along the Malari road (25 km to Lata roadhead).'
    }
  },
  {
    id: 'osla-village',
    name: 'Osla Village',
    tagline: 'Ancient Wooden Architectural Marvel in the Valley of Gods',
    category: 'Offbeat Uttarakhand',
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop'],
    description: 'A timeless settlement untouched by modernization along the Har Ki Dun trail. Famous for its multi-story wooden houses carved with intricate deities and an ancient temple dedicated to Someshwar Devta.',
    highlights: ['Someshwar Devta carved wooden temple', 'Century-old multi-story wooden houses', 'Traditional sheep-wool weaving', 'Dramatic Supin river gorge backdrop'],
    bestTime: 'April to June & September to November',
    altitude: '2,600 m (8,530 ft)',
    idealDuration: '3 - 4 Days',
    startingPrice: '₹7,999',
    isPopular: false,
    topAttractions: [
      { name: 'Someshwar Temple', desc: 'Intricately carved wood-and-stone shrine venerating Lord Shiva.' },
      { name: 'Traditional Village Granaries', desc: 'Elevated timber barns designed to preserve mountain grains.' },
      { name: 'Supin River Valley Walk', desc: 'Stunning paths along high alpine meadows and pine forests.' }
    ],
    howToReach: {
      byAir: 'Dehradun Airport (230 km to Sankri).',
      byTrain: 'Dehradun Railway Station (215 km).',
      byRoad: 'Drive to Sankri, road to Taluka, followed by a scenic 12 km trek.'
    }
  },
  {
    id: 'abbott-mount',
    name: 'Abbott Mount',
    tagline: 'Colonial Hilltop Haven, Historic Church & Solitude in Kumaon',
    category: 'Offbeat Uttarakhand',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'],
    description: 'Founded by British businessman John Harold Abbott in 1914, this hidden hilltop in Champawat is famous for stone cottages, a 1942 stone church amidst deodars, and complete peace away from any tourist rush.',
    highlights: ['Historic 1942 St. John’s Church', 'Panoramic snow views of Trishul & Maiktoli', 'Dense deodar and walnut forests', 'Mahakali River angling nearby'],
    bestTime: 'March to June & October to December',
    altitude: '2,011 m (6,600 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: '₹5,499',
    isPopular: false,
    topAttractions: [
      { name: 'St. John’s Church', desc: 'Quaint stone church built in 1942 shaded by century-old deodars.' },
      { name: 'Abbott Mountain Ridge', desc: 'Vantage point delivering wide vistas of the Eastern Himalayas.' },
      { name: 'Pancheshwar Confluence', desc: 'Nearby meeting point of Saryu and Mahakali rivers famous for mahseer fishing.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (160 km).',
      byTrain: 'Kathgodam Railway Station (140 km).',
      byRoad: 'Scenic road drive via Tanakpur or Haldwani through Champawat.'
    }
  },

  // ==========================================
  // 6. LAKES & ADVENTURE (Tehri Lake)
  // ==========================================
  {
    id: 'tehri',
    name: 'Tehri Lake',
    tagline: 'Asia’s Largest Dam Reservoir & Water Adventure Hub',
    category: 'Adventure',
    image: '/images/destinations/tehri/photo-1.jpg',
    gallery: ['/images/destinations/tehri/photo-1.jpg', '/images/destinations/tehri/photo-2.jpg'],
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
  }
];

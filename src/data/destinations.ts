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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
  {
    id: 'almora',
    name: 'Almora',
    tagline: 'Cultural Heartland of Kumaon & Panoramic Himalayan Ridge',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Perched on a horse-saddle shaped ridge in Kumaon, Almora is celebrated for its rich cultural heritage, 200-year-old Lala Bazaar, ancient Kasar Devi temple renowned for its unique geomagnetic energy, and unobstructed views of Nanda Devi and Trishul.',
    highlights: ['Kasar Devi Temple & Crank’s Ridge', '9th-century Katarmal Sun Temple', 'Bright End Corner sunrise & sunset', 'Heritage Lala Bazaar & traditional Bal Mithai'],
    bestTime: 'March to June & September to November',
    altitude: '1,638 m (5,374 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Kasar Devi Temple', desc: 'Ancient meditative shrine visited by Swami Vivekananda and Bob Dylan.' },
      { name: 'Katarmal Sun Temple', desc: 'Rare 9th-century Surya temple famous for intricate stone masonry.' },
      { name: 'Chitai Golu Devta', desc: 'Famed temple of the God of Justice covered in thousands of brass bells.' },
      { name: 'Bright End Corner', desc: 'Picturesque viewpoint marking the edge of Almora ridge for sunsets.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (115 km).',
      byTrain: 'Kathgodam Railway Station (82 km, 3 hours).',
      byRoad: 'Direct scenic highway connectivity from Delhi via Kathgodam & Bhowali (360 km).'
    }
  },
  {
    id: 'chamba',
    name: 'Chamba',
    tagline: 'Quiet Garhwal Mountain Outpost & Apple Orchard Haven',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Perched at 1,600 m amidst pine and deodar forests in Tehri Garhwal, Chamba is a tranquil, uncommercialized retreat offering sweeping views of the snow-clad Himalayas, verdant terrace fields, and the shimmering waters of nearby Tehri Lake.',
    highlights: ['Pristine Himalayan peak panorama', 'Proximity to Tehri Lake water sports', 'Gabbar Singh Memorial', 'Pine and rhododendron nature trails'],
    bestTime: 'March to June & October to December',
    altitude: '1,600 m (5,249 ft)',
    idealDuration: '2 Days',
    startingPrice: 'Pricing on Request',
    isPopular: false,
    topAttractions: [
      { name: 'Tehri Dam & Lake', desc: 'Massive reservoir offering jet skiing, boating, and scenic water views.' },
      { name: 'Surkanda Devi Temple', desc: 'High-altitude Shakti Peeth with 360-degree Himalayan views.' },
      { name: 'Gabbar Singh Memorial', desc: 'Historic memorial honoring World War I Victoria Cross recipient.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (75 km).',
      byTrain: 'Rishikesh Railway Station (60 km, 2 hours).',
      byRoad: 'Connected via smooth mountain highways from Rishikesh (60 km) and Mussoorie (55 km).'
    }
  },
  {
    id: 'kanatal',
    name: 'Kanatal',
    tagline: 'Serene High-Altitude Apple Orchards & Forest Glades',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Located on the Mussoorie-Chamba highway at 2,590 m, Kanatal is a quiet mountain hamlet shrouded in mist, apple orchards, and dense cedar groves. Famous for peaceful eco-resorts, forest walks in Kaudia Forest, and breathtaking views of the Bandarpunch peaks.',
    highlights: ['Kaudia Jungle Safari & nature walk', 'Surkanda Devi Temple ropeway trek', 'Tehri Lake view excursions', 'Stargazing & alpine camping'],
    bestTime: 'Throughout the year (Winter snow in Dec-Feb)',
    altitude: '2,590 m (8,500 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Kaudia Forest', desc: 'Dense pine forest sanctuary home to barking deer, wild boars, and nature trails.' },
      { name: 'Surkanda Devi Temple', desc: 'Sacred mountain temple reached by a scenic walk or ropeway ride.' },
      { name: 'Chamba Overlook', desc: 'Panoramic ridge viewpoint looking out towards the Garhwal peaks.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (90 km).',
      byTrain: 'Dehradun (85 km) or Rishikesh (75 km).',
      byRoad: 'Easily accessible via Dhanaulti from Mussoorie (38 km) or Rishikesh via Chamba.'
    }
  },
  {
    id: 'bhowali',
    name: 'Bhowali',
    tagline: 'The Fruit Basket of Kumaon & Historic Sanatorium Town',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Situated just 11 km from Nainital at an altitude of 1,706 m, Bhowali is surrounded by lush oak and pine forests. Known historically for its rejuvenating mountain air, bustling fruit markets filled with fresh apricots and plums, and the spiritual Golu Devta temple at Ghorakhal.',
    highlights: ['Golu Devta Temple at Ghorakhal', 'Kumaon wholesale fruit market', 'Shyamkhet Tea Garden', 'Gateway hub to Nainital, Bhimtal & Almora'],
    bestTime: 'March to June & September to November',
    altitude: '1,706 m (5,597 ft)',
    idealDuration: '1 - 2 Days',
    startingPrice: 'Pricing on Request',
    isPopular: false,
    topAttractions: [
      { name: 'Ghorakhal Temple', desc: 'Sacred bell temple of Golu Devta situated on a picturesque wooded hilltop.' },
      { name: 'Shyamkhet Tea Garden', desc: 'Boutique organic tea estate producing premium Himalayan black and green tea.' },
      { name: 'Kainchi Dham Proximity', desc: 'Located just 9 km from Neem Karoli Baba’s revered Kainchi Dham.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (65 km).',
      byTrain: 'Kathgodam Railway Station (35 km, 1 hour).',
      byRoad: 'Situated right on the main highway connecting Nainital, Bhimtal, and Almora.'
    }
  },
  {
    id: 'bhimtal',
    name: 'Bhimtal',
    tagline: 'Picturesque Lake Town with an Island Aquarium & Pine Forests',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Larger and more peaceful than neighboring Nainital, Bhimtal is set around a magnificent C-shaped masonry lake featuring an island aquarium in its center. Surrounded by dense pine and oak trees, it offers boating, kayaking, historical temples, and tranquil nature walks.',
    highlights: ['Bhimtal Lake island boating', 'Victorian masonry dam & aquarium', '17th-century Bhimeshwar Mahadev Temple', 'Butterfly Research Centre'],
    bestTime: 'March to June & September to December',
    altitude: '1,370 m (4,495 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Bhimtal Lake Island', desc: 'Picturesque central island featuring an aquarium reachable only by boat.' },
      { name: 'Bhimeshwar Mahadev Temple', desc: 'Historic 17th-century Shiva temple built beside the ancient lake embankment.' },
      { name: 'Butterfly Museum', desc: 'Renowned sanctuary housing over 240 species of Himalayan butterflies.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (55 km).',
      byTrain: 'Kathgodam Railway Station (22 km, 45 minutes).',
      byRoad: 'Well paved road connection directly from Kathgodam, Haldwani, and Nainital.'
    }
  },
  {
    id: 'dhanachuli',
    name: 'Dhanachuli',
    tagline: 'Untouched Kumaon Ridge Hamlet with Majestic Peak Vistas',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'A hidden village near Mukteshwar perched at 2,133 m, Dhanachuli offers unspoiled mountain beauty, endless apple and peach orchards, and dramatic unobstructed views of the snow-clad Nanda Devi range in total peace.',
    highlights: ['Bhalu Gaad Waterfall trek', 'Nanda Devi panoramic ridge views', 'Apple and plum orchard strolls', 'Luxury boutique mountain homestays'],
    bestTime: 'March to June & October to February',
    altitude: '2,133 m (7,000 ft)',
    idealDuration: '2 Days',
    startingPrice: 'Pricing on Request',
    isPopular: false,
    topAttractions: [
      { name: 'Bhalu Gaad Waterfall', desc: '60-foot pristine jungle waterfall hidden within a forested canyon.' },
      { name: 'Chauli Ki Jali Proximity', desc: 'Dramatic cliff edge offering natural rock climbing and valley vistas.' },
      { name: 'Dhanachuli Orchards', desc: 'Terraced organic farms laden with apples, apricots, and plums in season.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (85 km).',
      byTrain: 'Kathgodam Railway Station (55 km, 2 hours).',
      byRoad: 'Easily accessible via Bhimtal and Dhanachuli Bend from Kathgodam.'
    }
  },
  {
    id: 'ramgarh',
    name: 'Ramgarh',
    tagline: 'Fruit Bowl of Kumaon & Rabindranath Tagore’s Mountain Muse',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Divided into Malla (Upper) and Talla (Lower) Ramgarh, this idyllic hill retreat was the beloved sanctuary of Rabindranath Tagore and Mahadevi Verma. Renowned for acres of apricot, peach, and apple orchards overlooking the glittering snow peaks.',
    highlights: ['Tagore Top historic retreat', 'Mahadevi Verma Memorial Museum', 'Fruit orchards of peaches and plums', 'Peaceful Himalayan bird watching'],
    bestTime: 'March to June & September to November',
    altitude: '1,789 m (5,869 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Tagore Top', desc: 'Peaceful ridge where Rabindranath Tagore composed parts of Gitanjali.' },
      { name: 'Mahadevi Verma Museum', desc: 'Dedicated to the celebrated Hindi poetess who lived and wrote here.' },
      { name: 'Nathuakhan Trail', desc: 'Enchanting pine forest walk connecting Ramgarh to the artist hamlet of Nathuakhan.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (76 km).',
      byTrain: 'Kathgodam Railway Station (45 km, 1.5 hours).',
      byRoad: 'Scenic mountain drive from Kathgodam via Bhowali on the Mukteshwar road.'
    }
  },
  {
    id: 'naukuchiatal',
    name: 'Naukuchiatal',
    tagline: 'The Mystical Nine-Cornered Lake of Kumaon',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Famed for its nine-cornered freshwater lake surrounded by terraced mountains and oak woods, Naukuchiatal is an adventure and relaxation haven offering paragliding, kayaking, birding, and serene lakeside luxury.',
    highlights: ['Paragliding over lake valley', 'Nine-cornered lake boating & angling', 'Birdwatching paradise', 'Lakeside promenade cafes'],
    bestTime: 'March to June & September to December',
    altitude: '1,220 m (4,002 ft)',
    idealDuration: '2 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Naukuchiatal Lake', desc: 'Deep freshwater nine-cornered lake fed by an underground perennial spring.' },
      { name: 'Pandegaon Paragliding Hub', desc: 'Premier tandem paragliding site offering aerial lake views.' },
      { name: 'Jungliagaon Bird Trail', desc: 'Lush mountain trail home to rare Himalayan woodpeckers, barbets, and thrushes.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (60 km).',
      byTrain: 'Kathgodam Railway Station (26 km, 50 minutes).',
      byRoad: 'Located just 4 km from Bhimtal, easily reachable by cab from Kathgodam.'
    }
  },
  {
    id: 'chaukori',
    name: 'Chaukori',
    tagline: 'Lush Tea Gardens & Front-Row Seats to Nanda Devi & Panchachuli',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Nestled in the Pithoragarh district, Chaukori is a bowl-shaped hill town famous for emerald tea gardens, deodar and pine woods, and one of the clearest, most magnificent panoramic views of the Nanda Devi, Nanda Kot, and Panchachuli peaks.',
    highlights: ['British-era emerald tea gardens', 'Panchachuli five-peak sunrise view', 'Patal Bhuvaneshwar cave proximity', 'Stargazing in crystal night skies'],
    bestTime: 'March to June & September to November',
    altitude: '2,010 m (6,594 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Chaukori Tea Estates', desc: 'Fragrant emerald tea bushes set against dramatic snow peaks.' },
      { name: 'Patal Bhuvaneshwar', desc: 'Subterranean limestone cave temple dedicated to Lord Shiva (35 km away).' },
      { name: 'Mahakali Temple Gangolihat', desc: 'Ancient Shakti shrine established by Adi Shankaracharya.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (205 km).',
      byTrain: 'Kathgodam Railway Station (175 km, 6 hours).',
      byRoad: 'Scenic mountain route through Almora, Bageshwar, and Kanda.'
    }
  },
  {
    id: 'pithoragarh',
    name: 'Pithoragarh',
    tagline: 'Little Kashmir of Uttarakhand & Gateway to the High Himalayas',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Known affectionately as "Little Kashmir", Pithoragarh sits in the lush Soar Valley bordered by Nepal and Tibet. Boasting a historic Chand dynasty fort, ancient temples, cascading waterfalls, and the gateway to the sacred Kailash Mansarovar and Adi Kailash trails.',
    highlights: ['Pithoragarh Fort (Chand Dynasty)', 'Chandak Hill & Mostamanu Temple', 'Askot Wildlife Sanctuary proximity', 'Soar Valley sunrise vistas'],
    bestTime: 'April to June & September to December',
    altitude: '1,627 m (5,338 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Pithoragarh Fort', desc: 'Historical hilltop fortress offering panoramic 360-degree views of the valley.' },
      { name: 'Chandak Hill', desc: 'Scenic mountain lookout hosting the revered Mostamanu Temple.' },
      { name: 'Kapileshwar Mahadev', desc: 'Ancient cave temple situated at the edge of the Soar Valley.' }
    ],
    howToReach: {
      byAir: 'Naini Saini Airport Pithoragarh / Pantnagar (210 km).',
      byTrain: 'Tanakpur (150 km) or Kathgodam (180 km).',
      byRoad: 'Well connected by NH9 via Tanakpur, Champawat, and Ghat.'
    }
  },
  {
    id: 'lohaghat',
    name: 'Lohaghat',
    tagline: 'Pine-Clad Spiritual Gem & Historic Mayavati Ashram',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Resting gracefully on the banks of the Lohawati River at 1,754 m, Lohaghat is known for its historic pine forests, buransh (rhododendron) blooms in spring, the serene Advaita Ashrama at Mayavati, and proximity to Abbott Mount.',
    highlights: ['Mayavati Advaita Ashram (Swami Vivekananda)', 'Banasur Ka Kila historic fortress', 'Abbott Mount colonial churches proximity', 'Buransh rhododendron blossoms'],
    bestTime: 'March to June & September to November',
    altitude: '1,754 m (5,755 ft)',
    idealDuration: '2 Days',
    startingPrice: 'Pricing on Request',
    isPopular: false,
    topAttractions: [
      { name: 'Mayavati Advaita Ashrama', desc: 'Tranquil spiritual ashram where Swami Vivekananda stayed and meditated.' },
      { name: 'Banasur Fort', desc: 'Ancient mythological hill fortress offering panoramic valley views.' },
      { name: 'Pancheshwar Confluence', desc: 'Sacred meeting point of Saryu and Mahakali rivers, renowned for angling.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (160 km).',
      byTrain: 'Tanakpur Railway Station (90 km, 3 hours).',
      byRoad: 'Accessible via Tanakpur-Pithoragarh highway through Champawat.'
    }
  },
  {
    id: 'champawat',
    name: 'Champawat',
    tagline: 'Ancient Chand Capital of Rich Stone Architecture & Folklore',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'The former capital of the Chand dynasty rulers of Kumaon, Champawat is steeped in history and folklore. Renowned for exquisite stone carvings at the 12th-century Baleshwar Temple, Kranteshwar Mahadev on the hilltop, and deep forest trails.',
    highlights: ['Baleshwar Temple 12th-century stone carvings', 'Kranteshwar Mahadev summit', 'Ek Hathiya Ka Naula ancient rock-cut architecture', 'Pristine deodar ridges'],
    bestTime: 'October to May',
    altitude: '1,615 m (5,298 ft)',
    idealDuration: '2 Days',
    startingPrice: 'Pricing on Request',
    isPopular: false,
    topAttractions: [
      { name: 'Baleshwar Temple', desc: 'Masterpiece of stone architectural carving dating back to 10th-12th century.' },
      { name: 'Kranteshwar Mahadev', desc: 'Summit temple located 6 km from town providing 360-degree Kumaon vistas.' },
      { name: 'Ek Hathiya Ka Naula', desc: 'Ancient carved water structure carved by a one-handed artisan in a single night.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (150 km).',
      byTrain: 'Tanakpur Railway Station (75 km, 2.5 hours).',
      byRoad: 'Connected via NH9 directly from Tanakpur, Haldwani, and Pithoragarh.'
    }
  },
  {
    id: 'pangot',
    name: 'Pangot',
    tagline: 'Birdwatcher’s Himalayan Paradise & Oak Woodland Hamlet',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Located just 15 km past Nainital through the lush forested Kilbury sanctuary, Pangot is world-renowned among ornithologists and nature lovers. Home to over 580 species of birds, quiet forest lodges, and peaceful walking trails through rhododendron and oak woods.',
    highlights: ['Kilbury Bird Sanctuary & 580+ bird species', 'Cheena / China Peak trek', 'Peaceful eco-lodges away from crowds', 'Spectacular sunset at Woodside ridge'],
    bestTime: 'October to June',
    altitude: '1,984 m (6,509 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Kilbury Bird Sanctuary', desc: 'Forested sanctuary habitat for cheer pheasants, koklass, and mountain hawk-eagles.' },
      { name: 'Guano Hills', desc: 'Dense bamboo, oak, and deodar forest ridge trail ideal for quiet nature walks.' },
      { name: 'China Peak Viewpoint', desc: 'Nainital’s highest vantage point, easily reached via a forest hike from Pangot.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (85 km).',
      byTrain: 'Kathgodam Railway Station (50 km, 2 hours).',
      byRoad: '15 km scenic forest drive up from Nainital through Kilbury.'
    }
  },
  {
    id: 'peora',
    name: 'Peora',
    tagline: 'Eco-Friendly Kumaoni Fruit Village & Tranquil Pine Haven',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'A pristine eco-tourism village tucked between Almora and Mukteshwar at 2,014 m, Peora is celebrated for sustainable homestays, pine needle crafts, organic orchards, and panoramic views of snow-capped Kumaon peaks in complete serenity.',
    highlights: ['Organic herbal tea & pine craft workshops', 'Sweeping vistas of Trishul & Nanda Devi', 'Tranquil village nature walks', 'Birdwatching in oak forests'],
    bestTime: 'March to June & September to November',
    altitude: '2,014 m (6,607 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: 'Pricing on Request',
    isPopular: false,
    topAttractions: [
      { name: 'Organic Village Orchards', desc: 'Lush fruit groves with community workshops producing natural herbal extracts.' },
      { name: 'Peora Pine Ridge', desc: 'Quiet mountain trail providing unobstructed morning views of the snowline.' },
      { name: 'Mukteshwar Proximity', desc: 'Only 18 km away from the famous 350-year-old Mukteshwar Dham.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (100 km).',
      byTrain: 'Kathgodam Railway Station (70 km, 2.5 hours).',
      byRoad: 'Direct scenic road connecting Bhowali, Almora, and Mukteshwar.'
    }
  },
  {
    id: 'gwaldam',
    name: 'Gwaldam',
    tagline: 'Where Garhwal Meets Kumaon Amidst Tea Estates & High Peaks',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Perched on the border of Garhwal and Kumaon between Almora and Joshimath, Gwaldam is an idyllic hamlet surrounded by state tea gardens, apple orchards, and direct towering views of Trishul peak (7,120 m) and Nanda Ghunti.',
    highlights: ['Direct front-row views of Trishul peak', 'State-run tea estates & processing gardens', 'Base camp for Roopkund trail journeys', 'Pindari Glacier route proximity'],
    bestTime: 'March to June & September to November',
    altitude: '1,708 m (5,603 ft)',
    idealDuration: '2 Days',
    startingPrice: 'Pricing on Request',
    isPopular: false,
    topAttractions: [
      { name: 'Gwaldam Tea Gardens', desc: 'Picturesque tea gardens stretching down mountain slopes with peak backdrops.' },
      { name: 'Badhangarh Temple', desc: 'Fortress temple perched at 2,260 m with 360-degree views of Garhwal and Kumaon.' },
      { name: 'Angora Wool Farm', desc: 'Government breeding center surrounded by orchards and pine forests.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (195 km) or Jolly Grant Dehradun (240 km).',
      byTrain: 'Kathgodam (165 km) or Rishikesh (215 km).',
      byRoad: 'Located on the highway connecting Kausani (40 km) and Karnaprayag (65 km).'
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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

    {
    id: 'jageshwar',
    name: 'Jageshwar',
    tagline: 'Valley of 124 Ancient Jyotirlinga Stone Shrines in Sacred Deodar Groves',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Nestled in a tranquil valley flanked by towering deodar forests and the holy Jata Ganga stream, Jageshwar Dham is an 8th to 12th-century cluster of 124 stone temples dedicated to Lord Shiva, considered one of the earliest Jyotirlinga pilgrimage sites.',
    highlights: ['Cluster of 124 preserved Nagara-style stone temples', 'Maha Mrityunjaya & Jageshwar Jyotirlinga shrines', 'Dense deodar forest nature trails along Jata Ganga', 'Archaeological Museum housing exquisite Katyuri sculptures'],
    bestTime: 'March to June & September to November; Shravan Mela in July-August',
    altitude: '1,870 m (6,135 ft)',
    idealDuration: '1 - 2 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Jageshwar Mahadev Temple', desc: 'Central sanctum holding the consecrated Jyotirlinga worshipped since Mahabharata lore.' },
      { name: 'Maha Mrityunjaya Temple', desc: 'Oldest temple in the cluster dating back to the 8th century with eye-shaped lingam.' },
      { name: 'Dandeshwar Shiva Temple', desc: 'Largest temple complex situated slightly upstream amidst majestic deodar woods.' },
      { name: 'Archaeological Museum', desc: 'Preserves 150+ heritage statues including the famous Paun Raja metal icon.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (150 km) or Jolly Grant Dehradun (340 km).',
      byTrain: 'Kathgodam Railway Station (118 km, approx 4 hours drive).',
      byRoad: 'Well-paved hill roads connecting Almora (36 km), Nainital (100 km), and Delhi (395 km).'
    }
  },
  {
    id: 'baijnath',
    name: 'Baijnath',
    tagline: 'Historic Katyuri Temple Complex on the Banks of Gomti River',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Capital of the ancient Katyuri rulers in the 12th century, Baijnath sits beside the placid Gomti River. The main shrine houses a masterfully chiseled black-stone sculpture of Goddess Parvati and Lord Shiva amidst temple ruins.',
    highlights: ['12th-century Katyuri dynasty architecture', 'Intricately carved black stone idol of Goddess Parvati', 'Sacred Gomti river ghats with golden Mahseer fish', 'Kot Bhramari Devi temple on hilltop overlooking valley'],
    bestTime: 'September to May (Maha Shivratri is celebrated with immense fervor)',
    altitude: '1,125 m (3,691 ft)',
    idealDuration: '1 - 2 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Baijnath Temple Complex', desc: 'Stone-carved complex of 18 shrines constructed by Katyuri kings.' },
      { name: 'Gomti River Ghat', desc: 'Devotees feed the sacred golden Mahseer fish along pristine steps.' },
      { name: 'Kot Bhramari Devi Temple', desc: 'Fortress temple on a mountain ridge dedicated to Bhramari (Goddess of bees).' },
      { name: 'Garur Valley & Tea Gardens', desc: 'Verdant terraced fields extending towards nearby Kausani.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (180 km).',
      byTrain: 'Kathgodam Railway Station (160 km).',
      byRoad: 'Accessible by taxi and state buses from Kausani (17 km), Almora (72 km), and Bageshwar (20 km).'
    }
  },
  {
    id: 'patal-bhuvaneshwar',
    name: 'Patal Bhuvaneshwar',
    tagline: 'Mystical Subterranean Limestone Cave Temple of 33 Crore Deities',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'A 160-meter long and 90-foot deep underground cave temple carved out of limestone by rainwater. Puranic belief holds that thirty-three crore Hindu deities reside in this sanctum where stalactites and stalagmites have taken forms of mythological iconography.',
    highlights: ['Deep subterranean descent assisted by iron chains', 'Naturally formed Sheshnag, Kamdhenu, and Ganesha stalactites', 'Ancient Pandava and King Rituparna legends from Skanda Purana', 'Haat Kalika Shaktipeeth in nearby Gangolihat'],
    bestTime: 'October to May',
    altitude: '1,350 m (4,429 ft)',
    idealDuration: '1 - 2 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Underground Limestone Cave', desc: 'Spectacular underground chambers with naturally sculpted divine figures.' },
      { name: 'Kamdhenu & Sheshnag Formations', desc: 'Mineral deposits resembling the divine wish-fulfilling cow and serpent king.' },
      { name: 'Haat Kalika Temple (Gangolihat)', desc: 'Fierce Shakti shrine revered by the Indian Army Kumaon Regiment (14 km away).' },
      { name: 'Berinag Tea Estates', desc: 'Scenic mountain stopover renowned for panoramic views of Panchachuli.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (225 km).',
      byTrain: 'Kathgodam Railway Station (192 km).',
      byRoad: 'Connected by road via Gangolihat (14 km), Berinag (32 km), and Pithoragarh (88 km).'
    }
  },
  {
    id: 'dhari-devi',
    name: 'Dhari Devi',
    tagline: 'Guardian Deity of Devbhoomi & Protector of the Sacred Alaknanda River',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Located in Kalyasaur between Srinagar and Rudraprayag, Dhari Devi is revered as the guardian protector of Uttarakhand and the four holy Dhams. The idol is placed on a raised platform over the Alaknanda waters and uniquely changes expression from a girl child to a woman and elder throughout the day.',
    highlights: ['Guardian goddess of Char Dham pilgrimages', 'Elevated floating sanctum surrounded by turquoise Alaknanda waters', 'Miraculous facial transition across morning, noon, and evening', 'Sacred Kalimath counterpart holding the lower half of the deity'],
    bestTime: 'September to June (Navratri draws thousands of devotees)',
    altitude: '620 m (2,034 ft)',
    idealDuration: '1 Day',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Dhari Devi Floating Shrine', desc: 'Sacred open-roof temple where the upper half of Goddess Kali is worshipped.' },
      { name: 'Alaknanda River Gorge', desc: 'Scenic suspension pedestrian bridge walkway over the mountain river.' },
      { name: 'Srinagar Garhwal', desc: 'Historic former royal capital of the Garhwal Kingdom (15 km away).' },
      { name: 'Kamleshwar Mahadev Temple', desc: 'Ancient Shiva temple where Lord Rama offered 1,000 lotus flowers.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (135 km).',
      byTrain: 'Rishikesh Railway Station (118 km) or Yog Nagari Rishikesh.',
      byRoad: 'Directly on the Badrinath National Highway (NH-7), 15 km from Srinagar and 19 km from Rudraprayag.'
    }
  },
  {
    id: 'neelkanth-mahadev',
    name: 'Neelkanth Mahadev',
    tagline: 'Venerated Shiva Shrine Where Lord Shiva Consumed the Halahala Poison',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Perched in the dense forested hills across the Ganges from Rishikesh, Neelkanth Mahadev marks the mythic spot where Lord Shiva drank the deadly poison churned out of the ocean during Samudra Manthan, turning his throat blue.',
    highlights: ['Mythic Samudra Manthan ocean churning heritage', 'Ringed by Brahmakoot, Manikoot, and Vishnukoot peaks', 'Vibrant Shravan Kanwar Yatra and Maha Shivratri festivals', 'Picturesque trek through Rajaji tiger reserve buffers'],
    bestTime: 'September to June (Avoid peak Kanwar peak in July unless joining pilgrimage)',
    altitude: '1,330 m (4,363 ft)',
    idealDuration: '1 Day',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Neelkanth Mahadev Sanctum', desc: 'Ancient stone sanctum housing the sacred Swayambhu Lingam.' },
      { name: 'Natural Mountain Spring', desc: 'Sacred fresh water spring where pilgrims take a holy bath before entering.' },
      { name: 'Jhilmil Gufa Trek', desc: 'Forest cave trail inhabited by meditating hermits within lush woodlands.' },
      { name: 'Manikoot Ridge Views', desc: 'Overlooks deep forested ravines and the distant plains of Haridwar.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (48 km).',
      byTrain: 'Rishikesh Railway Station (32 km drive, or 12 km trek from Ram Jhula).',
      byRoad: 'Taxis, shared jeeps, and regular buses operate daily from Rishikesh.'
    }
  },
  {
    id: 'devprayag',
    name: 'Devprayag',
    tagline: 'Holy Confluence of Bhagirathi and Alaknanda Birthplace of Mother Ganga',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Devprayag is the first and holiest of the Panch Prayags, where the roaring turquoise waters of the Bhagirathi meet the calm green currents of the Alaknanda to officially form the holy River Ganga. It is home to the ancient Raghunathji Temple, one of the 108 Divya Desams.',
    highlights: ['Spectacular two-tone river confluence forming Mother Ganga', 'Ancient 1,250-year-old Raghunathji Temple (Lord Rama)', 'Sacred Brahmakund and Vashishta Kund bathing ghats', 'Nakshatra Vedhshala ancient astronomical observatory'],
    bestTime: 'October to May (crystal clear water colors during autumn and winter)',
    altitude: '830 m (2,723 ft)',
    idealDuration: '1 - 2 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Sangam Confluence Ghat', desc: 'Point where Bhagirathi and Alaknanda rivers merge into the Ganga.' },
      { name: 'Raghunathji Temple', desc: 'Magnificent pyramid-shaped stone temple holding black granite Lord Rama deity.' },
      { name: 'Nakshatra Vedhshala', desc: '1946 astronomical observatory containing historic telescope instruments and rare manuscripts.' },
      { name: 'Danda Naggaraja Temple', desc: 'Revered serpent god shrine situated high on an overlooking mountain ridge.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (90 km).',
      byTrain: 'Rishikesh Railway Station (70 km).',
      byRoad: 'Directly positioned on the Delhi-Badrinath National Highway (NH-7).'
    }
  },
  {
    id: 'rudraprayag',
    name: 'Rudraprayag',
    tagline: 'Holy Confluence of Alaknanda and Mandakini Named After Lord Shiva\'s Rudra Avatar',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Second of the Panch Prayags, Rudraprayag marks the majestic confluence where the Mandakini river rushing from Kedarnath joins the Alaknanda descending from Badrinath. Legend says Sage Narada meditated here on a rock to learn music from Lord Shiva.',
    highlights: ['Confluence of Alaknanda and Mandakini rivers', 'Vital bifurcation junction for Kedarnath and Badrinath yatra routes', 'Narad Shila and ancient Rudranath Temple right at the sangam', 'Koteshwar Mahadev cave temple along Alaknanda riverbanks'],
    bestTime: 'October to May',
    altitude: '895 m (2,936 ft)',
    idealDuration: '1 - 2 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Alaknanda-Mandakini Sangam', desc: 'Powerful confluence with bathing ghats overlooking steep emerald gorges.' },
      { name: 'Rudra Temple & Narad Shila', desc: 'Sacred boulder where Sage Narad received divine musical knowledge from Shiva.' },
      { name: 'Koteshwar Mahadev Temple', desc: 'Cave shrine 3 km away where Lord Shiva meditated en route to Kedarnath.' },
      { name: 'Jim Corbett Memorial', desc: 'Historical site marking the hunting of the infamous Man-Eating Leopard of Rudraprayag.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (155 km).',
      byTrain: 'Rishikesh Railway Station (140 km).',
      byRoad: 'Major mountain highway nexus connecting NH-7 (Badrinath) and NH-107 (Kedarnath).'
    }
  },
  {
    id: 'karnaprayag',
    name: 'Karnaprayag',
    tagline: 'Sangam of Alaknanda and Pindar River Where Mahabharata Hero Karna Meditated',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Third of the holy Panch Prayags, Karnaprayag is situated at the meeting of the glacial Pindar river from Pindari Glacier with the Alaknanda. Here, Mahabharata hero Karna performed deep penance to obtain the invulnerable armor (Kavacha) from Surya Dev.',
    highlights: ['Third sacred Panch Prayag confluence', 'Ancient Karna Temple and historic cremation memorial stone', 'Uma Devi Temple dedicated to Goddess Parvati', 'Gateway to Nanda Devi sanctuary treks and Gwaldam hills'],
    bestTime: 'September to May',
    altitude: '1,450 m (4,757 ft)',
    idealDuration: '1 - 2 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Pindar-Alaknanda Sangam', desc: 'Roaring glacial meeting point lined with stone bathing ghats.' },
      { name: 'Karna Temple', desc: 'Rare temple dedicated to the legendary son of Sun god Surya.' },
      { name: 'Uma Devi Temple', desc: 'Venerated shrine holding an ancient idol dating back to the 8th century.' },
      { name: 'Nauti Village Excursion', desc: 'Starting point of the world-famous 280 km Nanda Devi Raj Jat Yatra (20 km away).' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (185 km).',
      byTrain: 'Rishikesh Railway Station (170 km).',
      byRoad: 'Situated on NH-7, 32 km from Rudraprayag and 68 km from Joshimath.'
    }
  },
  {
    id: 'nandprayag',
    name: 'Nandprayag',
    tagline: 'Serene Confluence of Alaknanda and Nandakini Blessed by King Nanda',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Fourth of the holy Panch Prayags, Nandprayag is a peaceful riverside settlement where the tranquil Nandakini River originating from Nanda Ghunti meets the Alaknanda. The town once served as the capital of the Yadu kingdom under King Nanda.',
    highlights: ['Fourth Panch Prayag confluence in pristine Chamoli district', 'Ancient Gopalji Temple dedicated to Lord Krishna', 'Serene uncrowded alpine valleys and terraced village orchards', 'Gateway to the Roopkund and Homkund trekking corridors'],
    bestTime: 'September to May',
    altitude: '914 m (2,999 ft)',
    idealDuration: '1 Day',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Nandakini-Alaknanda Sangam', desc: 'Picturesque confluence of green and crystal blue mountain waters.' },
      { name: 'Gopalji Temple', desc: 'Sacred Krishna shrine installed by Raja Man Singh of Jaipur in 1898.' },
      { name: 'Chamoli Valley Terraces', desc: 'Surrounding apple, walnut, and apricot orchards overlooking the river.' },
      { name: 'Ancient Stone Footbridges', desc: 'Walkways connecting traditional Garhwali wooden hillside homes.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (205 km).',
      byTrain: 'Rishikesh Railway Station (190 km).',
      byRoad: 'Located on NH-7 between Karnaprayag (22 km) and Chamoli town (10 km).'
    }
  },
  {
    id: 'vishnuprayag',
    name: 'Vishnuprayag',
    tagline: 'First Confluence of Alaknanda and Dhauliganga Beneath Towering Himalayan Cliffs',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'The uppermost and first of the sacred Panch Prayags, Vishnuprayag is formed where the tumultuous Dhauliganga flowing from Niti Valley merges into the Alaknanda. Sage Narada is said to have worshipped Lord Vishnu here to achieve enlightenment.',
    highlights: ['First confluence of the sacred Panch Prayag descending from Himalayas', 'Dramatic vertical mountain gorges and suspension bridge', '1889 Vishnu Temple constructed by Maharani Ahilyabai Holkar of Indore', 'Gateway to Joshimath, Badrinath, and the Valley of Flowers'],
    bestTime: 'May to October',
    altitude: '1,372 m (4,501 ft)',
    idealDuration: '1 Day',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Dhauliganga-Alaknanda Confluence', desc: 'Thunderous clash of two fierce glacial torrents below sheer granite peaks.' },
      { name: 'Vishnu Temple & Vishnu Kund', desc: 'Historic stone temple featuring an octagonal structure and sacred pool.' },
      { name: 'Kagbhusandi Lake Trailhead', desc: 'High-altitude emerald lake trek surrounded by Brahmakamal blossoms.' },
      { name: 'Joshimath Base (12 km away)', desc: 'Spiritual seat of Adi Shankaracharya and ropeway station to Auli ski slopes.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (280 km).',
      byTrain: 'Rishikesh Railway Station (265 km).',
      byRoad: 'Situated 12 km downhill from Joshimath on the main highway toward Badrinath (NH-7).'
    }
  },
  {
    id: 'guptkashi',
    name: 'Guptkashi',
    tagline: 'Sacred Valley Town of Ancient Vishwanath Temple & Ardhanarishwar Shrine',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Guptkashi (Hidden Benares) is a legendary holy town situated high above the Mandakini river valley facing Chaukhamba peak. Shiva concealed himself here from the Pandavas in the form of Nandi bull before emerging at Kedarnath. It houses the ancient Vishwanath Temple and Manikarnika Kund fed by Ganga and Yamuna spouts.',
    highlights: ['Ancient Vishwanath Temple mirroring the energy of Kashi Varanasi', 'Manikarnika Kund fed continuously by holy underground streams', 'Rare half-male half-female Ardhanarishwar stone idol', 'Primary staging hub with major helicopter services to Kedarnath'],
    bestTime: 'May to June & September to November',
    altitude: '1,319 m (4,327 ft)',
    idealDuration: '1 - 2 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Vishwanath Temple', desc: 'Ancient stone sanctum dedicated to Lord Shiva with towering shikhara.' },
      { name: 'Manikarnika Kund', desc: 'Sacred bathing reservoir with water flowing from cow-head (Gomukh) spouts.' },
      { name: 'Ardhanarishwar Temple', desc: 'Unique sanctum representing the indivisible cosmic union of Shiva and Shakti.' },
      { name: 'Chaukhamba Peak Viewpoint', desc: 'Panoramic unobstructed morning views of snow-draped Chaukhamba peaks.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (195 km); Helipads operate direct Kedarnath shuttles.',
      byTrain: 'Rishikesh Railway Station (180 km).',
      byRoad: 'Accessible along NH-107 via Rudraprayag (40 km) and Kund.'
    }
  },
  {
    id: 'ukhimath',
    name: 'Ukhimath',
    tagline: 'Winter Abode of Lord Kedarnath & Madhyamaheshwar with Omkareshwar Peeth',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Perched across the valley from Guptkashi, Ukhimath is the sacred winter seat of Lord Kedarnath and Lord Madhyamaheshwar. When high Himalayan shrines close for winter due to heavy snowfall, their festive palanquins (dolis) are brought down and worshipped here with full Vedic rites.',
    highlights: ['Official winter seat of Kedarnath and Madhyamaheshwar Rawal priests', 'Historic Omkareshwar Temple with multi-tiered stone architecture', 'Mythic wedding site of Princess Usha (daughter of Banasura) and Aniruddha', 'Magnificent panoramic view of Chaukhamba and Kedarnath massif'],
    bestTime: 'Throughout the year (November to April for Kedarnath Winter Doli rituals)',
    altitude: '1,311 m (4,301 ft)',
    idealDuration: '1 - 2 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Omkareshwar Temple', desc: 'Historic temple complex housing winter sanctums for Kedarnath and Madhyamaheshwar.' },
      { name: 'Usha-Aniruddha Mandap', desc: 'Carved wooden pavilion where the grandson of Lord Krishna was wed.' },
      { name: 'Sari Village & Deoria Tal (12 km)', desc: 'Trailhead to the legendary lake reflecting the Chaukhamba peak.' },
      { name: 'Chopta Gateway', desc: 'Base station for the scenic mountain highway heading toward Tungnath.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (205 km).',
      byTrain: 'Rishikesh Railway Station (190 km).',
      byRoad: '41 km from Rudraprayag via Kund on the Gopeshwar-Chamoli mountain highway.'
    }
  },
  {
    id: 'triyuginarayan',
    name: 'Triyuginarayan',
    tagline: 'The Celestial Wedding Venue of Lord Shiva and Goddess Parvati with Eternal Flame',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Triyuginarayan is revered as the divine venue where Lord Shiva married Goddess Parvati in the presence of Lord Vishnu as the bride\'s brother and Lord Brahma as the head priest. The sacred Akhand Dhuni (eternal wood fire) in front of the temple has burned continuously across three cosmic epochs (Treta, Dvapara, and Kali Yuga).',
    highlights: ['Perpetual eternal sacred flame burning across three cosmic yugas', 'Beloved destination for Vedic and celebrity spiritual weddings', 'Four sacred holy kunds: Brahma, Vishnu, Rudra, and Saraswati', 'Rare 8th-century silver Vishnu idol housed in stone sanctum'],
    bestTime: 'April to June & September to November (accessible during mild winter)',
    altitude: '1,980 m (6,496 ft)',
    idealDuration: '1 - 2 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Akhand Dhuni Sanctum', desc: 'Devotees offer wood logs to the eternal fire and collect sacred ashes for blessings.' },
      { name: 'Four Sacred Kunds', desc: 'Holy pools where deities bathed before the celestial wedding ceremony.' },
      { name: 'Triyuginarayan Vishnu Temple', desc: 'Exquisite stone-built temple featuring silver statues of Vishnu and Lakshmi.' },
      { name: 'Panwali Kantha Meadow Trail', desc: 'High alpine ridge trail with breathtaking views of Gangotri and Kedarnath ranges.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (225 km).',
      byTrain: 'Rishikesh Railway Station (210 km).',
      byRoad: '12 km mountain motorable road branching uphill from Sonprayag on the Kedarnath route.'
    }
  },
  {
    id: 'kalpeshwar',
    name: 'Kalpeshwar',
    tagline: 'Fifth Kedar Shrouded in Urgam Valley Where Lord Shiva\'s Jata (Hair Locks) are Worshipped',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'The fifth and final shrine of the sacred Panch Kedar pilgrimage, Kalpeshwar is nestled in the fertile terraced Urgam Valley. It is the only Panch Kedar temple that remains accessible and open to pilgrims throughout all twelve months of the year.',
    highlights: ['Fifth Kedar where Lord Shiva\'s hair locks (Jata) are enshrined', 'Open all 12 months unlike other snow-blocked Panch Kedar shrines', 'Wish-fulfilling Kalpavriksha tree in the serene Urgam valley', 'Pristine emerald step-farm landscapes and rustic homestays'],
    bestTime: 'Throughout the year; Best April to June & September to November',
    altitude: '2,200 m (7,218 ft)',
    idealDuration: '2 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Kalpeshwar Cave Temple', desc: 'Ancient rock cave sanctum entered through a natural cleft where Shiva\'s locks are worshipped.' },
      { name: 'Wish-Fulfilling Kalpavriksha', desc: 'Sacred giant ancient tree deeply venerated by yogis and pilgrims.' },
      { name: 'Urgam Valley Terraced Fields', desc: 'Lush agricultural valley famous for organic kidney beans (rajma) and apples.' },
      { name: 'Dhyan Badri Temple', desc: 'One of the Panch Badri shrines located a short distance away in Urgam.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (265 km).',
      byTrain: 'Rishikesh Railway Station (250 km).',
      byRoad: 'Drive from Helang (on the Joshimath road) to Devgram village (9 km), followed by a gentle 300m walk.'
    }
  },
  {
    id: 'rudranath',
    name: 'Rudranath',
    tagline: 'Fourth Kedar Where Lord Shiva\'s Mukh (Face) is Revered Amidst Alpine Bugyals',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Rudranath is the fourth Kedar of the sacred Panch Kedar pilgrimage. Lord Shiva is worshipped in his natural stone cave sanctum as "Neelkanth Mahadev" in the form of his face (Mukh). The 20 km trek through Panar Bugyal is widely regarded as one of the most spiritually stirring and visually breathtaking Himalayan trails.',
    highlights: ['Fourth Kedar worshipping the face of Lord Shiva', 'Challenging 20 km wilderness trek through lush rhododendron forests and high meadows', 'Vaitarni river and sacred holy tarns (Surya, Chandra, and Tara kunds)', 'Magnificent unobstructed vistas of Nanda Devi, Trishul, and Hathi Parvat'],
    bestTime: 'May to October (Temple opens in May and closes around Diwali for winter)',
    altitude: '3,600 m (11,811 ft)',
    idealDuration: '3 - 4 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Rudranath Cave Sanctum', desc: 'Natural rock chamber where the tranquil stone face of Shiva is anointed with sandalwood.' },
      { name: 'Panar Bugyal', desc: 'Spectacular undulating alpine grass meadow with front-row mountain views.' },
      { name: 'Vaitarni River', desc: 'Sacred mythological stream where pilgrims perform rituals for ancestors.' },
      { name: 'Pitradhar Ridge', desc: 'High mountain crest offering 360-degree panoramas of Garhwal peaks.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (240 km to base).',
      byTrain: 'Rishikesh Railway Station (225 km to Sagar village / Gopeshwar).',
      byRoad: 'Reach Sagar Village (5 km from Gopeshwar) by road, followed by a rewarding 20 km trek.'
    }
  },
  {
    id: 'madhyamaheshwar',
    name: 'Madhyamaheshwar',
    tagline: 'Second Kedar Nestled Beneath Chaukhamba Where Shiva\'s Nabhi (Navel) is Worshipped',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Second of the sacred Panch Kedars, Madhyamaheshwar sits in a divine amphitheater directly beneath the four towering summits of Mount Chaukhamba. The temple enshrines the navel (Nabhi) and stomach of Lord Shiva, surrounded by vibrant alpine pastures.',
    highlights: ['Second Kedar temple dedicated to the sacred navel of Shiva', 'Climb to Budha Madhyamaheshwar for dramatic Chaukhamba reflections in mountain tarns', 'Scenic 16 km forest trek along the roaring Madhyamaheshwar Ganga', 'Rich pastoral tranquility in unspoilt high-altitude meadows'],
    bestTime: 'May to October',
    altitude: '3,497 m (11,473 ft)',
    idealDuration: '3 - 4 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Madhyamaheshwar Stone Temple', desc: 'Classic black stone sanctum housing the navel lingam worshipped by priests.' },
      { name: 'Budha Madhyamaheshwar Ridge', desc: '1.5 km climb above temple offering mind-boggling mirrored reflections of Chaukhamba.' },
      { name: 'Ransi Village Gateway', desc: 'Picturesque starting point with the ancient Rakeshwari Devi stone temple.' },
      { name: 'Gaundhar Confluence', desc: 'Confluence of Markanga Ganga and Madhyamaheshwar Ganga with suspension bridges.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (220 km to Ransi).',
      byTrain: 'Rishikesh Railway Station (205 km).',
      byRoad: 'Drive from Ukhimath to Ransi village (20 km), followed by a 16 km moderate mountain trek.'
    }
  },
  {
    id: 'adi-kailash',
    name: 'Adi Kailash',
    tagline: 'Sacred Chhota Kailash & Parvati Sarovar in the Remote Indo-Tibetan Borderlands',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Adi Kailash, also revered as Chhota Kailash or Baba Kailash, is a sacred Himalayan peak mirroring the divine shape of Mount Kailash. Located in the high Vyas Valley near the Indo-Tibetan border, pilgrims venerate the emerald waters of holy Parvati Sarovar and the divine Gauri Kund beneath the towering glaciated massif.',
    highlights: ['Venerated Indian counterpart to Mount Kailash accessible without entering Tibet', 'Sacred Parvati Sarovar and Shiva-Parvati Mandir at 4,500m', 'Ancient Gauri Kund mirroring snow-clad pyramidal peaks', 'High-altitude borderland landscapes through traditional Rung villages'],
    bestTime: 'May to June & September to October (Inner Line Permits issued for Indian nationals)',
    altitude: '5,945 m (peak) / 4,497 m (base)',
    idealDuration: '6 - 8 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Mount Adi Kailash', desc: 'Pyramidal snow mountain sacred to Shiva and Shakti devotees.' },
      { name: 'Parvati Sarovar', desc: 'Holy alpine lake where reflection of Adi Kailash appears on calm mornings.' },
      { name: 'Gauri Kund', desc: 'Glacial pool at the base of the mountain dedicated to Goddess Parvati.' },
      { name: 'Gunji & Kuti Villages', desc: 'High-altitude border settlements retaining rich indigenous Rung tribal culture.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (340 km to Dharchula).',
      byTrain: 'Kathgodam Railway Station (300 km to Dharchula).',
      byRoad: 'Motorable 4x4 road connects Dharchula via Gunji and Nabi to Jyolingkong (base of Adi Kailash).'
    }
  },
  {
    id: 'om-parvat',
    name: 'Om Parvat',
    tagline: 'Miraculous Peak Inscribed Naturally with the Sacred Cosmic Syllable ॐ in Snow',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Rising to 5,590 meters on the international boundary, Om Parvat is world-renowned for its phenomenal black-rock mountain face where deposition of perennial snow naturally carves the sacred Hindu symbol "OM" (ॐ). It is one of the eight Kailash peaks revered across the Himalayas.',
    highlights: ['Astounding naturally formed sacred "OM" (ॐ) snow pattern', 'Vyas Gufa where Maharishi Ved Vyas meditated and compiled the Mahabharata', 'Sacred Kali River originating from the springs of Kalapani', 'Unforgettable high mountain pass landscapes facing Nepal and Tibet'],
    bestTime: 'May to June & September to October',
    altitude: '5,590 m (18,340 ft)',
    idealDuration: '6 - 8 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Om Parvat Viewpoint at Nabidhang', desc: 'Clear front-facing vantage point for viewing the miracle of natural OM snow formation.' },
      { name: 'Kalapani Temple & Kali River Origin', desc: 'Sacred natural springs worshipped as the cradle of the Kali River.' },
      { name: 'Vyas Gufa', desc: 'Cave dwelling where Sage Ved Vyas stayed and composed Vedic scriptures.' },
      { name: 'Sheshnag Mountain', desc: 'Adjacent mountain range ridge resembling the hood of celestial serpent Sheshnag.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (340 km to Dharchula).',
      byTrain: 'Kathgodam Railway Station (300 km to Dharchula).',
      byRoad: 'Inner Line Permit route via 4x4 mountain vehicles from Dharchula to Gunji and Nabidhang.'
    }
  },
  {
    id: 'piran-kaliyar',
    name: 'Piran Kaliyar',
    tagline: 'Centuries-Old Sufi Dargah of Hazrat Alauddin Ali Ahmed Sabir Kalyari',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Located in Kaliyar village near Roorkee and Haridwar, Piran Kaliyar Sharif is the 13th-century Sufi shrine of Hazrat Alauddin Ali Ahmed Sabir Kalyari, renowned spiritual master of the Chishti order. It stands as an enduring symbol of interfaith unity and spiritual solace.',
    highlights: ['13th-century Chishti Sufi shrine revered for spiritual healing', 'Annual Urs festival drawing devotees of all faiths from across the subcontinent', 'Peaceful setting along the historic banks of Upper Ganga Canal', 'Proximity to Roorkee University heritage and Haridwar ghats'],
    bestTime: 'October to March (Urs festival dates vary by Islamic calendar)',
    altitude: '260 m (853 ft)',
    idealDuration: '1 Day',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Dargah Sharif of Sabir Kalyari', desc: 'Main marble sanctum adorned with carved jaali screens and prayer offerings.' },
      { name: 'Upper Ganga Canal Banks', desc: 'Historic 19th-century canal engineering lined with peaceful shaded paths.' },
      { name: 'Solani Aqueduct (Roorkee)', desc: 'Colonial masonry engineering marvel situated just 6 km away.' },
      { name: 'Haridwar Ghats Link', desc: 'Located only 22 km from Har Ki Pauri for unified spiritual itineraries.' }
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (60 km).',
      byTrain: 'Roorkee Railway Station (7 km) or Haridwar Junction (22 km).',
      byRoad: 'Situated off NH-334 with excellent four-lane highway connectivity from Delhi (185 km).'
    }
  },
  {
    id: 'nanakmatta',
    name: 'Nanakmatta',
    tagline: 'Venerated Sikh Pilgrimage Gurdwara Associated with Guru Nanak Dev Ji & Doodh Wala Kuan',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Nanakmatta is a major historic Sikh pilgrimage town situated on the banks of Deoha river in the Udham Singh Nagar district. Guru Nanak Dev Ji visited here during his third Udasi (spiritual travels) in 1514 and meditated beneath a peepal tree, holding theological dialogues with Siddhas and Yogis.',
    highlights: ['Sacred Gurdwara Nanakmatta Sahib blessed by Guru Nanak Dev Ji', 'Miraculous Doodh Wala Kuan (Well of Milk) and Panja Sahib peepal tree', 'Expansive Nanakmatta Dam reservoir offering boating and migratory birdwatching', 'Grand celebrations during Guru Nanak Jayanti, Diwali, and Baisakhi'],
    bestTime: 'October to April',
    altitude: '298 m (978 ft)',
    idealDuration: '1 - 2 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Gurdwara Nanakmatta Sahib', desc: 'White marble gurdwara complex with sacred Sarovar lake and 24-hour Langar hall.' },
      { name: 'Sacred Peepal Tree', desc: 'Holy tree that turned green again when blessed by Guru Nanak Dev Ji.' },
      { name: 'Doodh Wala Kuan', desc: 'Historic stone well where milk miraculously turned into pure sweet water.' },
      { name: 'Nanakmatta Sagar (Reservoir)', desc: 'Huge artificial lake created by the dam, popular for boating and winter birds.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (55 km).',
      byTrain: 'Khatima Railway Station (15 km) or Rudrapur City (50 km).',
      byRoad: 'Situated on the Khatima-Sitarganj highway (NH-9), easily reachable from Delhi (285 km).'
    }
  },
  {
    id: 'chitai-golu-devta',
    name: 'Chitai Golu Devta',
    tagline: 'The Legendary Temple of Justice Hung with Thousands of Sacred Brass Bells',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Chitai Golu Devta Temple, dedicated to Lord Golu—an incarnation of Shiva regarded as the God of Justice—is situated on a pine-clad hill near Almora. Devotees seeking fairness and resolution pin written legal petitions and letters to the deity, and return to hang brass bells when their prayers are answered.',
    highlights: ['Mesmerizing canopy of thousands of brass bells of all sizes', 'Unique custom of offering handwritten letters and legal affidavits to the deity', 'Deeply embedded folk deity of the Kumaon region', 'Surrounded by fragrant pine forests 9 km from Almora town'],
    bestTime: 'Throughout the year',
    altitude: '1,700 m (5,577 ft)',
    idealDuration: '1 Day',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Chitai Bell Canopy Sanctum', desc: 'Sanctum where resonant brass bells rang constantly by devotees fill every archway.' },
      { name: 'Written Petition Wall', desc: 'Fascinating collection of letters and stamp-paper petitions seeking divine justice.' },
      { name: 'Almora Heritage Town', desc: 'Cultural capital of Kumaon known for Bal Mithai and wooden craft lanes (9 km away).' },
      { name: 'Bright End Corner', desc: 'Sunset viewpoint offering panoramic views of Himalayan peaks.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (125 km).',
      byTrain: 'Kathgodam Railway Station (90 km).',
      byRoad: 'Situated 9 km east of Almora along the Pithoragarh Highway.'
    }
  },
  {
    id: 'kasar-devi',
    name: 'Kasar Devi',
    tagline: 'Cosmic Energy Vortex Sanctuary on the Van Allen Radiation Belt',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Kasar Devi is renowned worldwide for its extraordinary geomagnetic field caused by the Van Allen Radiation Belt—a phenomenon shared only with Stonehenge and Machu Picchu. Worshipped since the 2nd century AD, this hilltop sanctuary has drawn spiritual seekers including Swami Vivekananda, Lama Govinda, Rabindranath Tagore, and Bob Dylan.',
    highlights: ['Global geomagnetic energy vortex enhancing meditation and calm', '2nd-century hilltop cave temple worshipped by Swami Vivekananda in 1890', 'Crank\'s Ridge (Hippie Hill) Bohemian counter-culture legacy', 'Spectacular 300-km panoramic views of Trishul, Nanda Devi, and Panchachuli'],
    bestTime: 'Throughout the year; Autumn and Winter offer peerless crystal views',
    altitude: '2,116 m (6,942 ft)',
    idealDuration: '2 - 3 Days',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Kasar Devi Cave Temple', desc: 'Rock cave sanctum where Goddess Durga defeated the demons Shumbha and Nishumbha.' },
      { name: 'Crank\'s Ridge (Hippie Trail)', desc: 'Ridge promenade lined with peaceful cafes, art spaces, and meditation centers.' },
      { name: 'Kalimath & Almora Overlook', desc: 'Sunset viewing ridge over the rolling hills and pine forests.' },
      { name: 'Binsar Wildlife Sanctuary Gateway', desc: 'Virgin oak and rhododendron forest reserve just 20 km uphill.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (128 km).',
      byTrain: 'Kathgodam Railway Station (92 km).',
      byRoad: '8 km winding pine drive north from Almora on the Binsar road.'
    }
  },
  {
    id: 'katarmal-sun-temple',
    name: 'Katarmal Sun Temple',
    tagline: '9th-Century Architectural Marvel of Surya Dev & Second Largest Sun Temple in India',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Constructed in the 9th century by Katyuri monarch Katarmalla, this grand sun temple complex is considered India\'s second most significant sun shrine after Konark. Engineered with remarkable astronomical precision, the first rays of dawn pierce the main sanctum to illuminate the idol of Surya (Baraditya).',
    highlights: ['Grand 9th-century Katyuri dynasty sun shrine cluster', '44 miniature auxiliary stone shrines surrounding the main shikhara', 'Astronomical dawn alignment illuminating the innermost sanctum', 'Peaceful pine-covered ridge overlooking the Kosi River valley'],
    bestTime: 'September to May',
    altitude: '2,114 m (6,935 ft)',
    idealDuration: '1 Day',
    startingPrice: 'Pricing on Request',
    isPopular: true,
    topAttractions: [
      { name: 'Main Baraditya Sun Shrine', desc: 'Towering stone temple sanctum holding ancient engraved sun motifs.' },
      { name: 'Cluster of 44 Sub-Shrines', desc: 'Delicately carved secondary shrines dedicated to Shiva, Vishnu, and Parvati.' },
      { name: 'Ancient Carved Wooden Panels', desc: 'Intricate cedar door carvings preserved by the Archaeological Survey of India.' },
      { name: 'Kosi River Valley Vista', desc: 'Scenic mountain walk through terraced fields and fragrant pine groves.' }
    ],
    howToReach: {
      byAir: 'Pantnagar Airport (135 km).',
      byTrain: 'Kathgodam Railway Station (100 km).',
      byRoad: '17 km drive from Almora along the Kausani road to Kosi village, followed by a gentle 1 km paved stone climb.'
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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
    startingPrice: 'Pricing on Request',
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

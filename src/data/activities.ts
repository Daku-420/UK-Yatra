import { Activity } from '../types';

export const ACTIVITIES: Activity[] = [
  {
    id: 'river-rafting',
    title: 'White Water River Rafting',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop',
    shortDesc: 'Navigate Grade III to IV rapids on the turquoise holy Ganga River in Rishikesh.',
    fullDesc: 'Rishikesh is India’s undisputed capital for white-water rafting. Experience the thrilling rapids like The Wall, Roller Coaster, Three Blind Mice, and Golf Course accompanied by certified river guides, rescue kayaks, and international safety gear.',
    topLocations: ['Rishikesh (Shivpuri to NIM Beach - 16 km)', 'Marine Drive to Rishikesh (26 km)', 'Kaudiyala to Rishikesh (36 km Grade IV+)', 'Tons River (Mori)'],
    bestSeason: 'Late September to June',
    difficulty: 'Easy to High (Depending on stretch)',
    ageLimit: '14 to 60 Years',
    startingPrice: '₹1,000 / person',
    safetyInfo: [
      'Certified rescue kayakers escort every expedition',
      'CE-certified life jackets and high-impact helmets mandatory',
      'Thorough safety briefing and mock drill before boarding',
      'All guides certified by Indian Mountaineering Foundation / IRF'
    ]
  },
  {
    id: 'bungee-jumping',
    title: 'Bungee Jumping & Giant Swing',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    shortDesc: 'Take the leap of faith from India’s highest fixed cantilever platform (83m) over Hall River.',
    fullDesc: 'Designed and operated by jump masters from New Zealand, feel the rush of sheer gravity as you freefall 83 metres into a scenic rocky gorge in Rishikesh.',
    topLocations: ['Mohan Chatti, Rishikesh', 'Shivpuri, Rishikesh'],
    bestSeason: 'Round the year (Except monsoon July-Aug)',
    difficulty: 'Extreme Adrenaline',
    ageLimit: '12 to 45 Years (Min weight 40kg, Max 110kg)',
    startingPrice: '₹3,550 / jump',
    safetyInfo: [
      'Operated under strict Australian & New Zealand safety standards (AS/NZS 5848)',
      'High-grade imported bungy cords inspected daily',
      'Professional medical screening before jump permit'
    ]
  },
  {
    id: 'himalayan-trekking',
    title: 'Himalayan High Altitude Trekking',
    category: 'Trekking',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    shortDesc: 'From beginner ridge walks to high mountain pass crossings exceeding 4,000 meters.',
    fullDesc: 'Uttarakhand houses some of the most diverse trekking terrain on the planet. Walk through whispering pine forests, lush Bugyals (alpine meadows), pristine glacial lakes, and reach vantage points offering panoramic views of the greater Himalayan peaks.',
    topLocations: ['Kedarkantha', 'Tungnath-Chandrashila', 'Valley of Flowers', 'Kuari Pass', 'Har Ki Dun', 'Dayara Bugyal'],
    bestSeason: 'March to June & September to December (Winter snow Dec-Mar)',
    difficulty: 'Easy to Challenging',
    ageLimit: '8 to 65 Years (Depending on trail)',
    startingPrice: '₹5,499 / trek',
    safetyInfo: [
      'Wilderness First Aid (WFA) certified trek leaders on every batch',
      'Portable oxygen cylinders and pulse oximeter monitoring twice daily',
      'High quality alpine 4-season tents and sub-zero sleeping bags'
    ]
  },
  {
    id: 'auli-skiing-snowboarding',
    title: 'Skiing & Snowboarding in Auli',
    category: 'Snow Sports',
    image: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=1200&auto=format&fit=crop',
    shortDesc: 'Glide down powdery slopes on India’s premier ski destination with Nanda Devi views.',
    fullDesc: 'Auli boasts slope gradients of 10° to 20° surrounded by ancient conifer forests. Learn skiing from National Institute of Mountaineering certified instructors or carve the backcountry slopes on modern snowboards.',
    topLocations: ['Auli Ski Slopes (Joshimath)', 'Gorson Bugyal Backcountry'],
    bestSeason: 'Late December to March',
    difficulty: 'Beginner to Advanced courses available',
    ageLimit: '10+ Years',
    startingPrice: '₹3,000 / day session',
    safetyInfo: [
      'Certified ski instructors with international FIS certifications',
      'Modern groomers and artificial snow backup',
      'Helmets and padded safety gear included'
    ]
  },
  {
    id: 'wildlife-jeep-safari',
    title: 'Wild Tiger & Elephant Safari',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop',
    shortDesc: 'Venture into the heart of Royal Bengal Tiger territory in Jim Corbett & Rajaji National Parks.',
    fullDesc: 'Witness the raw majesty of Indian wildlife. Track Royal Bengal Tigers, wild elephant herds, leopards, gharials, and over 600 species of birds across the Sal forests and Ramganga river grasslands.',
    topLocations: ['Jim Corbett National Park (Dhikala, Bijrani, Jhirna)', 'Rajaji National Park (Chilla, Motichur)'],
    bestSeason: 'November 15 to June 15',
    difficulty: 'Easy / Family Friendly',
    ageLimit: 'All age groups',
    startingPrice: '₹4,500 / 4x4 Jeep (Up to 6 persons)',
    safetyInfo: [
      'Registered 4x4 Gypsy vehicles with trained government forest drivers',
      'Authorized forest naturalists accompany every safari',
      'Strict eco-tourism code of conduct observed'
    ]
  },
  {
    id: 'ganga-aarti-spiritual',
    title: 'Sacred Ganga Aarti & Temple Trails',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop',
    shortDesc: 'Immerse in the celestial vibrations of Haridwar & Rishikesh evening river prayers.',
    fullDesc: 'As twilight descends over the holy Ganges, hundreds of lamps are lit, conch shells resonate, and Vedic hymns fill the mountain breeze at Har Ki Pauri and Triveni Ghat. A soulful, unforgettable spiritual experience.',
    topLocations: ['Triveni Ghat, Rishikesh', 'Har Ki Pauri, Haridwar', 'Parmarth Niketan, Rishikesh', 'Devprayag Sangam'],
    bestSeason: 'Round the Year',
    difficulty: 'Easy / Soulful',
    ageLimit: 'All age groups',
    startingPrice: 'Free / Included in packages',
    safetyInfo: [
      'Designated viewing seating and VIP ghat assistance available',
      'Life guards stationed along the ghat steps'
    ]
  },
  {
    id: 'riverside-luxury-camping',
    title: 'Riverside Luxury Camping & Glamping',
    category: 'Camping',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    shortDesc: 'Starlit nights, bonfires, live music, and luxury Swiss tents beside mountain streams.',
    fullDesc: 'Disconnect from the hustle and wake up to the song of mountain birds and gushing rivers. Our curated glamping sites offer attached washrooms, air coolers/heaters, swimming pools, outdoor games, and gourmet buffet meals.',
    topLocations: ['Shivpuri (Rishikesh)', 'Kanatal & Dhanaulti', 'Chopta Meadows', 'Pangot (Nainital)'],
    bestSeason: 'September to June',
    difficulty: 'Relaxed & Leisure',
    ageLimit: 'All age groups',
    startingPrice: '₹1,800 / person per night with all meals',
    safetyInfo: [
      '24/7 guarded secure private properties',
      'Clean running water and sanitized modern washrooms',
      'Power backup and first-aid kits on site'
    ]
  },
  {
    id: 'paragliding-fly',
    title: 'Tandem Paragliding in the Valley',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop',
    shortDesc: 'Soar like a Himalayan eagle with certified tandem pilots over valleys and blue lakes.',
    fullDesc: 'Experience the exhilarating freedom of flight. Soar 1,000 to 3,000 feet above the valleys of Bhimtal, Naukuchiatal, and Mussoorie, taking in unobstructed views of terraced green slopes and distant snow peaks.',
    topLocations: ['Bhimtal & Naukuchiatal (Nainital)', 'Mussoorie / George Everest', 'Rishikesh Mazdoor camp'],
    bestSeason: 'October to June (Clear skies)',
    difficulty: 'Moderate Thrill',
    ageLimit: '10 to 60 Years (Weight 35kg - 95kg)',
    startingPrice: '₹1,800 / flight with GoPro recording',
    safetyInfo: [
      'Tandem flights piloted only by DGCA / APPI certified pilots with 500+ hours',
      'Emergency reserve parachutes checked and repacked routinely'
    ]
  }
];

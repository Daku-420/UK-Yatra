import { TourPackage } from '../types';

/**
 * Standard Cancellation and Refund Policy across UK Yatra packages
 */
export const STANDARD_CANCELLATION_POLICY = [
  'Free cancellation & 100% refund if cancelled 30 days prior to travel date.',
  '75% refund if cancelled between 15 to 29 days before travel date.',
  '50% refund if cancelled between 7 to 14 days before travel date.',
  'Date rescheduling is free of charge up to 7 days before departure subject to vehicle & hotel availability.',
  'Cancellations within 7 days of departure are non-refundable due to pre-booked mountain stays and transport fleet reserves.'
];

/**
 * Standard Packing & Essentials Checklist
 */
export const STANDARD_THINGS_TO_CARRY = [
  'Government ID Card (Aadhaar / Voter ID / Passport) for permits and hotel check-in',
  'Warm fleece jacket, thermals and windproof outer layer for chilly mountain evenings',
  'Comfortable walking/hiking shoes with good grip and 3-4 pairs of cotton socks',
  'Sun protection: UV sunglasses, SPF 50 sunscreen lotion, and a wide-brim hat',
  'Personal medicine kit (prescribed drugs, motion sickness pills, pain relief spray)',
  'Power bank, camera, water bottle / thermos flask, and reusable rain poncho'
];

/**
 * Standard Important Information for Travelers
 */
export const STANDARD_IMPORTANT_INFO = [
  'All hill transport is conducted in commercial tourist-registered private vehicles with experienced mountain drivers.',
  'Daily driving times in the hills average 4-6 hours depending on road terrain and scenic stopovers.',
  'Mobile connectivity (Jio and Airtel) is reliable across main highway corridors and towns; remote passes may have intermittent coverage.',
  'ATMs are widely available in gateway hubs (Dehradun, Haridwar, Rishikesh, Haldwani, Nainital); carry adequate cash for rural stops.',
  'Stay hydrated and allow time for gentle acclimatization at high-altitude passes above 2,500 meters.'
];

export const INITIAL_TOUR_PACKAGES: TourPackage[] = [
  // 1. Rishikesh – Haridwar — 3N/4D
  {
    id: 'rishikesh-haridwar',
    title: 'Rishikesh & Haridwar Spiritual & Adventure Gateway (3N/4D)',
    destination: 'Rishikesh, Haridwar & Shivpuri',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'September to May',
    category: 'Popular Uttarakhand',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewsCount: 68,
    overview: 'Experience the holy confluence of ancient Vedic traditions and thrilling Himalayan outdoor activities. From witnessing the divine evening Ganga Aarti at Har Ki Pauri and Parmarth Niketan to white-water river rafting and cliff jumping in Rishikesh, this quintessential 4-day circuit delivers the ultimate balance of spirituality, yoga wellness, and nature.',
    highlights: [
      'Witness the celestial evening Ganga Aarti at Har Ki Pauri, Haridwar & Triveni Ghat, Rishikesh',
      'Thrilling 16 km White Water River Rafting expedition through Grade III+ rapids on the sacred Ganges',
      'Explore the legendary Beatles Ashram, Ram Jhula, Laxman Jhula & iconic cafe culture',
      'Bespoke sunrise excursion to Kunjapuri Temple with 360-degree snow-capped Himalayan vistas',
      'Private AC tourist transport with certified local chauffeur and 3-star riverside boutique stays'
    ],
    startPoint: 'Haridwar / Dehradun',
    endPoint: 'Haridwar / Dehradun',
    difficulty: 'Easy (Family Friendly)',
    accommodationType: 'Riverside Boutique Resort / Premium 3-Star Stays',
    transportationType: 'Dedicated Private AC Sedan / SUV (Dzire / Ertiga / Innova)',
    mealPlan: 'Daily Buffet Breakfast & Chef-curated Dinners (MAP)',
    routeSummary: ['Haridwar', 'Mansadevi Temple', 'Rishikesh Tapovan', 'Shivpuri Rapid Zone', 'Kunjapuri Peak', 'Triveni Ghat'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Haridwar – Temples & Har Ki Pauri Ganga Aarti',
        description: 'Warm welcome by our team at Haridwar Railway Station or Dehradun Airport. Transfer and check-in to your hotel. Visit the ancient Mansa Devi & Chandi Devi ropeway temples. In the evening, immerse your senses in the world-renowned Ganga Aarti at Har Ki Pauri with thousands of floating oil lamps.',
        stay: 'Haridwar Heritage Hotel',
        meals: 'Dinner Included'
      },
      {
        day: 2,
        title: 'Haridwar to Rishikesh – Ashrams, Bridges & Sunset Aarti',
        description: 'After breakfast, take a scenic 45-minute drive along the canal to Rishikesh. Visit Ram Jhula, Laxman Jhula suspension bridge area, and the vibrant Beatles Ashram (Chaurasi Kutia). Relax at riverside organic cafes and attend the soul-stirring musical Aarti at Parmarth Niketan.',
        stay: 'Rishikesh Riverside Resort',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Ganga River Rafting & Kunjapuri Himalayan Sunrise',
        description: 'Optional early morning drive to Kunjapuri Devi Temple (1,676 m) for sunrise over the Garhwal peaks. Later, gear up for an exhilarating 16 km river rafting stretch from Shivpuri to Rishikesh with cliff jumping and body surfing under certified river guides.',
        stay: 'Rishikesh Riverside Resort',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Neer Garh Waterfall & Departure',
        description: 'Enjoy a leisurely breakfast and take a short refreshing trek to Neer Garh Waterfall. Browse the local handicraft and rudraksha markets before dropping off at Haridwar Railway Station or Dehradun Airport with unforgettable Himalayan memories.',
        stay: 'Departure',
        meals: 'Breakfast Included'
      }
    ],
    inclusions: [
      '3 Nights accommodation in verified 3-star boutique properties',
      'Daily breakfast and dinner as per itinerary',
      'All transfers and sightseeing by private AC vehicle',
      'Licensed river rafting permit, life jackets, helmets & guide fees',
      'Fuel, toll taxes, interstate state permits, and driver allowances'
    ],
    exclusions: [
      'Monument / ashram entrance tickets and temple ropeway charges',
      'Personal expenses, laundry, telephone, and room service tips',
      'Optional adventure activities (bungee jumping, flying fox)'
    ],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'September to May brings clear skies and optimal river rafting conditions. Winter months (Nov-Feb) offer crisp mountain air and starry night skies.',
    faqs: [
      { question: 'Is river rafting safe for beginners and families?', answer: 'Yes, certified river guides accompany all rafting trips with international-grade safety equipment. Minimum age for rafting is 14 years.' },
      { question: 'Can the starting point be customized to Delhi?', answer: 'Yes, we can easily provide Delhi pick-up and drop via our private chauffeur fleet upon request.' }
    ],
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 2. Mussoorie – Dhanaulti — 3N/4D
  {
    id: 'mussoorie-dhanaulti',
    title: 'Mussoorie & Dhanaulti Pine Mist Retreat (3N/4D)',
    destination: 'Mussoorie, Dhanaulti & Landour',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Year Round (Snow in Dec-Feb)',
    category: 'Popular Uttarakhand',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1605649487212-47bdab064df8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviewsCount: 52,
    overview: 'Discover the colonial charm of the "Queen of the Hills" and the tranquil deodar forests of Dhanaulti. Wander through the literary heritage of Landour, marvel at misty waterfalls, and take in the panoramic snow line views of the Bandarpunch and Swargarohini massifs from Surkanda Devi.',
    highlights: [
      'Heritage walk through serene Landour, Lal Tibba viewpoint & Char Dukan',
      'Scenic trip to Kempty Falls, Gun Hill ropeway point & Company Garden',
      'Explore Eco Park Dhanaulti and the towering dense deodar canopies',
      'Ropeway or trek to the sacred ridge-top Surkanda Devi Temple (3,030 m)',
      'Evening stroll along Mall Road with scenic valley sunset overlooks'
    ],
    startPoint: 'Dehradun',
    endPoint: 'Dehradun',
    difficulty: 'Easy (Leisure)',
    accommodationType: 'Valley-view Boutique Hotel / Hill Resort',
    transportationType: 'Private AC Hill Cab (Dzire / Ertiga / Innova Crysta)',
    mealPlan: 'Daily Breakfast & Dinner Included',
    routeSummary: ['Dehradun', 'Mussoorie Mall Road', 'Landour Lal Tibba', 'Kempty Falls', 'Dhanaulti Eco Park', 'Surkanda Devi'],
    itinerary: [
      {
        day: 1,
        title: 'Dehradun to Mussoorie – Arrival & Mall Road Sunset',
        description: 'Pick-up from Dehradun Airport or Railway Station and picturesque 1.5-hour climb to Mussoorie. Check-in at your valley-view hotel. In the evening, stroll along the pedestrian-friendly Mall Road and watch the twinkling lights of the Doon Valley.',
        stay: 'Mussoorie Valley Hotel',
        meals: 'Dinner Included'
      },
      {
        day: 2,
        title: 'Landour Heritage Trail & Kempty Falls',
        description: 'Morning drive to Landour, visiting Lal Tibba, Sister’s Bazaar, and Char Dukan. Sample homemade apple crumbles and local cheeses. Later head to Kempty Falls and Company Garden before enjoying leisure time in town.',
        stay: 'Mussoorie Valley Hotel',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Excursion to Dhanaulti & Surkanda Devi Temple',
        description: 'Scenic mountain drive to Dhanaulti (24 km). Walk among the fragrant deodars at Eco Park. Proceed to Kaddukhal and take the ropeway up to Surkanda Devi Temple for jaw-dropping 360° views of the Garhwal snow peaks.',
        stay: 'Dhanaulti Pine Resort / Mussoorie',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Bhatta Falls & Dehradun Drop',
        description: 'After a leisurely breakfast, check out and stop at Bhatta Falls or Robber’s Cave en route to Dehradun for your onward flight or train.',
        stay: 'Departure',
        meals: 'Breakfast Included'
      }
    ],
    inclusions: [
      '3 Nights accommodation in curated valley-view rooms',
      'Daily breakfast and dinner at the hotel',
      'All transfers and sightseeing by private dedicated mountain cab',
      'Toll charges, parking fees, and driver allowances'
    ],
    exclusions: ['Entry tickets to gardens, ropeway tickets, and personal extras'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'March to June is pleasant with blooming rhododendrons; December to February offers winter snow in Dhanaulti and chilly pine vistas.',
    faqs: [
      { question: 'Does it snow in Mussoorie and Dhanaulti?', answer: 'Dhanaulti regularly receives snowfall between late December and early February due to its higher elevation (2,286 m).' }
    ],
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 3. Rishikesh – Mussoorie — 4N/5D
  {
    id: 'rishikesh-mussoorie',
    title: 'Rishikesh & Mussoorie Twin Hills Circuit (4N/5D)',
    destination: 'Rishikesh, Dehradun & Mussoorie',
    duration: '4 Nights / 5 Days',
    days: 5,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'September to June',
    category: 'Popular Uttarakhand',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df8?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewsCount: 44,
    overview: 'The ideal vacation pairing the spiritual energy and adventure rapids of the Ganges in Rishikesh with the breezy colonial hills and pine ridges of Mussoorie and Landour.',
    highlights: [
      '2 Nights in Rishikesh with river rafting, cafe hopping & Parmarth Aarti',
      '2 Nights in Mussoorie with Landour heritage walk & Lal Tibba vista point',
      'Visit Sahastradhara sulfur springs and Robbers Cave in Dehradun',
      'Comfortable private mountain cab throughout the 5-day journey'
    ],
    startPoint: 'Dehradun / Haridwar',
    endPoint: 'Dehradun / Haridwar',
    difficulty: 'Easy',
    accommodationType: '3-Star Premium Hotel Stays',
    transportationType: 'Private AC Mountain Vehicle',
    mealPlan: 'Daily Breakfast & Dinner',
    routeSummary: ['Haridwar / Dehradun', 'Rishikesh', 'Shivpuri', 'Dehradun Valley', 'Mussoorie', 'Landour'],
    itinerary: [
      { day: 1, title: 'Arrival & Rishikesh Exploration', description: 'Pick-up and transfer to Rishikesh. Evening visit to Ram Jhula and Triveni Ghat Aarti.', stay: 'Rishikesh Resort', meals: 'Dinner' },
      { day: 2, title: 'Rafting Adventure & Cafe Culture', description: 'River rafting on the Ganges, Beatles Ashram tour, and sunset cafe experience.', stay: 'Rishikesh Resort', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Rishikesh to Mussoorie via Dehradun', description: 'Scenic drive ascending into Mussoorie with a stop at Robber’s Cave in Dehradun. Evening on Mall Road.', stay: 'Mussoorie Hotel', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Mussoorie & Landour Sightseeing', description: 'Explore Landour, Char Dukan, Kempty Falls, and Company Garden.', stay: 'Mussoorie Hotel', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Check-out & Dehradun Departure', description: 'Morning breakfast followed by drop-off at Dehradun Airport or Railway Station.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['4 Nights stay in verified hotels', 'Daily breakfast and dinner', 'All transfers by private cab', 'Driver allowances & tolls'],
    exclusions: ['Rafting tickets', 'Personal expenses', 'Camera tickets'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'September to June.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 4. Nainital – Bhimtal – Sattal — 3N/4D
  {
    id: 'nainital-bhimtal-sattal',
    title: 'Nainital Lake District & Sattal Forest Serenade (3N/4D)',
    destination: 'Nainital, Bhimtal, Sattal & Naukuchiatal',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'March to November',
    category: 'Popular Uttarakhand',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f841807d?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1582650625119-3a31f841807d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviewsCount: 76,
    overview: 'Unwind amidst the sparkling waters of Uttarakhand’s beloved Lake District. Cruise on Naini Lake in traditional paddle boats, explore the seven interconnected freshwater lakes of Sattal framed by dense oak forests, and visit the serene island temple of Bhimtal.',
    highlights: [
      'Boat cruise on pear-shaped Naini Lake and visit sacred Naina Devi Temple',
      'Aerial ropeway to Snow View Point with majestic Nanda Devi mountain views',
      'Excursion to Bhimtal with its central island aquarium cafe and Naukuchiatal',
      'Nature walk and bird watching amidst the pristine freshwater lakes of Sattal',
      'Stroll the historic Governor’s House and bustling Tibetan candle market'
    ],
    startPoint: 'Kathgodam / Pantnagar / Delhi',
    endPoint: 'Kathgodam / Pantnagar / Delhi',
    difficulty: 'Easy (Family Relaxed)',
    accommodationType: 'Lake-view Hotel / Colonial Heritage Resort',
    transportationType: 'Private AC Tourist Cab',
    mealPlan: 'Daily Buffet Breakfast & Dinner',
    routeSummary: ['Kathgodam', 'Nainital Naini Lake', 'Snow View', 'Bhimtal', 'Sattal', 'Naukuchiatal'],
    itinerary: [
      { day: 1, title: 'Kathgodam to Nainital – Arrival & Lake Walk', description: 'Pick up from Kathgodam Railway Station or Pantnagar Airport. Drive up through winding pine valleys to Nainital. Check-in and evening boat ride on Naini Lake.', stay: 'Nainital Hotel', meals: 'Dinner' },
      { day: 2, title: 'Nainital Sights & Snow View Ridge', description: 'Visit Naina Peak, Cave Garden, Lover’s Point, and take the ropeway up to Snow View. Evening shopping along Mall Road.', stay: 'Nainital Hotel', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Lakes Tour: Bhimtal, Sattal & Naukuchiatal', description: 'Full day excursion to the serene lakes: Bhimtal with its island temple, the seven forested lakes of Sattal, and nine-cornered Naukuchiatal.', stay: 'Nainital Hotel', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Khurpatal Overlook & Kathgodam Drop', description: 'Check out after breakfast. Stop by scenic Khurpatal lake overlook and drop at Kathgodam Railway Station.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['3 Nights stay in premium rooms', 'Daily breakfast & dinner', 'Private AC vehicle for all tours', 'Tolls & driver charges'],
    exclusions: ['Boating fees, ropeway tickets, personal tips'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'March through June for pleasant boat cruises; September through November for crystal clear Himalayan skies.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 5. Nainital – Mukteshwar — 4N/5D
  {
    id: 'nainital-mukteshwar',
    title: 'Nainital & Mukteshwar Apple Orchard Haven (4N/5D)',
    destination: 'Nainital, Bhowali, Ramgarh & Mukteshwar',
    duration: '4 Nights / 5 Days',
    days: 5,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Year Round',
    category: 'Popular Uttarakhand',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582650625119-3a31f841807d?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviewsCount: 38,
    overview: 'Combine the vibrant lake promenades of Nainital with the peaceful fruit orchards, rock cliffs of Chauli Ki Jali, and 180-degree Himalayan snow views of Mukteshwar.',
    highlights: [
      '2 Nights in Nainital covering Naini Lake, Naina Devi & Bhimtal',
      '2 Nights in Mukteshwar amidst apple orchards & pine woods',
      'Spectacular sunset over Trishul & Nanda Devi from Chauli Ki Jali',
      'Visit the 350-year-old hilltop Mukteshwar Dham Shiva temple'
    ],
    startPoint: 'Kathgodam',
    endPoint: 'Kathgodam',
    difficulty: 'Easy',
    accommodationType: 'Boutique Orchard Stays & Lake Hotels',
    transportationType: 'Private AC Mountain Sedan / SUV',
    mealPlan: 'Daily Breakfast and Dinner',
    routeSummary: ['Kathgodam', 'Nainital', 'Bhowali', 'Ramgarh Orchards', 'Mukteshwar', 'Chauli Ki Jali'],
    itinerary: [
      { day: 1, title: 'Arrival at Nainital', description: 'Kathgodam pick-up, drive to Nainital, check in, and enjoy an evening boat ride on Naini Lake.', stay: 'Nainital Hotel', meals: 'Dinner' },
      { day: 2, title: 'Nainital & Bhimtal Highlights', description: 'Explore Snow View, Cave Garden, and the serene waters of Bhimtal and Naukuchiatal.', stay: 'Nainital Hotel', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Nainital to Mukteshwar via Ramgarh', description: 'Scenic drive through the fruit bowl of Kumaon (Ramgarh). Arrive in Mukteshwar and relax at your orchard lodge.', stay: 'Mukteshwar Resort', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Chauli Ki Jali & Mukteshwar Dham', description: 'Visit the dramatic cliffs of Chauli Ki Jali for panoramic Himalayan views, and explore the ancient Mukteshwar Shiva Temple.', stay: 'Mukteshwar Resort', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Departure to Kathgodam', description: 'After breakfast, drive down through pine forests to Kathgodam for your train connection.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['4 Nights accommodation', 'Breakfast and dinner daily', 'Private cab for all transfers', 'Driver allowances and parking'],
    exclusions: ['Adventure activities at Chauli Ki Jali (zipline/rappelling)', 'Personal laundry and tips'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'March to June for pleasant weather; Oct to Feb for snow and crisp Himalayan peaks.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 6. Mussoorie – Rishikesh – Haridwar — 5N/6D
  {
    id: 'mussoorie-rishikesh-haridwar',
    title: 'Mussoorie, Rishikesh & Haridwar Grand Garhwal Circuit (5N/6D)',
    destination: 'Haridwar, Rishikesh, Dehradun, Mussoorie & Dhanaulti',
    duration: '5 Nights / 6 Days',
    days: 6,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'September to June',
    category: 'Popular Uttarakhand',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df8?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewsCount: 89,
    overview: 'The signature Garhwal triumvirate: immerse in the spiritual chants of Haridwar, experience the river rapids and yoga energy of Rishikesh, and escape to the colonial serenity and pine mist of Mussoorie and Dhanaulti.',
    highlights: [
      'Ganga Aarti at Har Ki Pauri and Parmarth Niketan',
      'Ganges white water rafting and Beatles Ashram visit',
      'Colonial Landour, Lal Tibba, Kempty Falls, and Mall Road in Mussoorie',
      'Full day excursion to the alpine deodars and Surkanda Devi ridge in Dhanaulti'
    ],
    startPoint: 'Haridwar / Dehradun',
    endPoint: 'Haridwar / Dehradun',
    difficulty: 'Easy',
    accommodationType: 'Curated 3-Star & Boutique Resorts',
    transportationType: 'Private AC Tourist Cab',
    mealPlan: 'Daily Breakfast & Dinner',
    routeSummary: ['Haridwar', 'Rishikesh', 'Shivpuri', 'Dehradun', 'Mussoorie', 'Dhanaulti'],
    itinerary: [
      { day: 1, title: 'Arrival Haridwar & Har Ki Pauri Aarti', description: 'Pick up, check-in, visit Mansa Devi Temple, and evening Ganga Aarti.', stay: 'Haridwar Hotel', meals: 'Dinner' },
      { day: 2, title: 'Haridwar to Rishikesh – Rafting & Ashrams', description: 'Short drive to Rishikesh. Experience Ganga river rafting, Ram Jhula, and Beatles Ashram.', stay: 'Rishikesh Resort', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Kunjapuri Sunrise & Drive to Mussoorie', description: 'Morning Himalayan sunrise at Kunjapuri, drive via Dehradun to Mussoorie, evening on Mall Road.', stay: 'Mussoorie Hotel', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Mussoorie & Landour Exploration', description: 'Visit Lal Tibba, Char Dukan in Landour, Kempty Falls, and Company Garden.', stay: 'Mussoorie Hotel', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Dhanaulti & Surkanda Devi Excursion', description: 'Scenic drive to Dhanaulti Eco Park and trek/ropeway to Surkanda Devi Temple (3,030 m).', stay: 'Mussoorie Hotel', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Dehradun Sights & Departure', description: 'Visit Robber’s Cave in Dehradun before drop-off at Airport or Railway Station.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['5 Nights accommodation', 'Breakfast and dinner daily', 'Private vehicle throughout', 'Tolls and driver charges'],
    exclusions: ['Rafting, entry fees, personal items'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'September to June.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 7. Chopta – Tungnath – Chandrashila — 3N/4D
  {
    id: 'chopta-tungnath-chandrashila',
    title: 'Chopta, Tungnath & Chandrashila Alpine Summit Trek (3N/4D)',
    destination: 'Chopta, Tungnath, Chandrashila & Sari Village',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'April to June & September to December',
    category: 'Trekking & Adventure',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.95,
    reviewsCount: 112,
    overview: 'Known as the "Mini Switzerland of India", Chopta is an alpine meadow paradise. Trek to Tungnath (3,680 m)—the highest of the Panch Kedar temples—and summit Chandrashila Peak (4,000 m) for a life-altering 360-degree panorama of Nanda Devi, Trishul, Chaukhamba, and Kedar Dome.',
    highlights: [
      'Trek to Tungnath — the world’s highest Shiva temple at 12,073 ft',
      'Sunrise summit of Chandrashila Peak (13,123 ft) with unobstructed Himalayan views',
      'Trek to the emerald glacial waters of Deoria Tal with Chaukhamba mountain reflections',
      'Camp in cozy alpine Swiss tents in the blooming rhododendron meadows of Chopta',
      'Scenic drives passing Devprayag and Rudraprayag holy river confluences'
    ],
    startPoint: 'Rishikesh / Haridwar',
    endPoint: 'Rishikesh / Haridwar',
    difficulty: 'Moderate (Accessible for Beginners)',
    accommodationType: 'Swiss Alpine Camps with Attached Washrooms & Heaters',
    transportationType: 'Private Hill Cab (Innova / Bolero / Tempo Traveller)',
    mealPlan: 'Wholesome Mountain Meals (Breakfast, Packed Lunch on Trek, Warm Dinner)',
    routeSummary: ['Rishikesh', 'Devprayag Confluence', 'Rudraprayag', 'Kund', 'Ukhimath', 'Chopta Meadows', 'Tungnath', 'Chandrashila'],
    itinerary: [
      {
        day: 1,
        title: 'Rishikesh to Chopta via Devprayag & Rudraprayag',
        description: 'Early morning pick up from Rishikesh/Haridwar. Drive through the picturesque Mandakini and Alaknanda river valleys. Stop to see the holy confluence at Devprayag. Ascend through oak and rhododendron forests to reach Chopta (2,680 m). Evening campfire and star gazing.',
        stay: 'Chopta Alpine Swiss Camps',
        meals: 'Dinner Included'
      },
      {
        day: 2,
        title: 'Summit Day: Chopta to Tungnath & Chandrashila Peak',
        description: 'Start early morning at 4:30 AM for the paved mountain trail to Tungnath Temple (3.5 km). Offer prayers at the 1,000-year-old shrine, then push onward for 1.5 km over alpine meadows to the summit of Chandrashila (4,000 m) for sunrise over Chaukhamba, Trishul, and Nanda Devi.',
        stay: 'Chopta Alpine Swiss Camps',
        meals: 'Breakfast, Packed Lunch & Dinner'
      },
      {
        day: 3,
        title: 'Sari Village & Deoria Tal Emerald Lake Trek',
        description: 'Drive 20 km to Sari Village. Undertake a pleasant 2.5 km trek through rhododendron woods to Deoria Tal (2,438 m). Marvel at the mirror reflection of the Chaukhamba peak on the lake surface. Return to Chopta or camp at Sari.',
        stay: 'Chopta Swiss Camps / Sari Homestay',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Chopta to Rishikesh / Haridwar Return',
        description: 'Post breakfast, drive back along the scenic Alaknanda river highway with a stopover at Dhari Devi Temple. Arrive in Rishikesh/Haridwar by evening for your onward travel.',
        stay: 'Departure',
        meals: 'Breakfast Included'
      }
    ],
    inclusions: [
      '3 Nights accommodation in Swiss Alpine Camps / mountain hotels',
      'All meals during the trek as specified',
      'Experienced certified local mountain trek leader and support staff',
      'Private transport from Rishikesh/Haridwar to Chopta and return',
      'Forest entry permits, camping fees, and first aid support'
    ],
    exclusions: ['Pony / porter charges if hired personally', 'Personal trekking equipment and tips'],
    thingsToCarry: [
      ...STANDARD_THINGS_TO_CARRY,
      'Sturdy trekking shoes with ankle support and deep treads',
      'Warm fleece jacket, down feather jacket, thermal inners, woollen cap & gloves',
      'Trekking pole and headlamp with spare batteries'
    ],
    importantInfo: [
      ...STANDARD_IMPORTANT_INFO,
      'The Chandrashila summit involves steep switchbacks; walking poles are highly recommended.',
      'Night temperatures at Chopta can dip below freezing even in summer; pack adequate thermal layers.'
    ],
    bestTimeToVisit: 'April-May for blooming red and pink rhododendrons; October-November for crisp skies; Dec-March for snow trekking.',
    faqs: [
      { question: 'Is Chandrashila trek suitable for beginners?', answer: 'Yes, it is one of the most accessible 4,000m Himalayan summits with a well-laid stone path up to Tungnath.' }
    ],
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 8. Chopta – Deoria Tal — 3N/4D
  {
    id: 'chopta-deoria-tal',
    title: 'Chopta & Deoria Tal Forest Lake Trek (3N/4D)',
    destination: 'Sari Village, Deoria Tal & Chopta Meadows',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Year Round (Best March-June & Oct-Dec)',
    category: 'Trekking & Adventure',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewsCount: 47,
    overview: 'A gentle and magical wilderness retreat centered on the emerald alpine waters of Deoria Tal and the rolling grasslands of Chopta. Perfect for families, photographers, and first-time mountain trekkers seeking peaceful campfires and mountain sunsets.',
    highlights: [
      'Camp beside the sacred waters of Deoria Tal reflecting Mount Chaukhamba',
      'Forest walks through dense rhododendron and oak woodlands',
      'Explore Chopta bugyals (alpine meadows) and Ukhimath Omkareshwar temple',
      'Spectacular starry skies and birdwatching opportunities'
    ],
    startPoint: 'Rishikesh',
    endPoint: 'Rishikesh',
    difficulty: 'Easy to Moderate',
    accommodationType: 'Swiss Meadow Tents & Village Homestays',
    transportationType: 'Private Mountain Cab',
    mealPlan: 'Daily Breakfast & Dinner',
    routeSummary: ['Rishikesh', 'Devprayag', 'Rudraprayag', 'Sari Village', 'Deoria Tal', 'Chopta'],
    itinerary: [
      { day: 1, title: 'Rishikesh to Sari Village', description: 'Scenic drive to Sari village along the Mandakini river. Evening walk through terraced village fields.', stay: 'Sari Homestay / Camp', meals: 'Dinner' },
      { day: 2, title: 'Trek to Deoria Tal Lake', description: '2.5 km trek to Deoria Tal. Spend the day admiring Chaukhamba reflections, birding, and lakeside photography.', stay: 'Deoria Tal / Sari Camps', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Chopta Bugyals & Meadows Day', description: 'Drive to Chopta meadows, walk the scenic ridge trails, visit Ukhimath Omkareshwar temple.', stay: 'Chopta Swiss Camps', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Chopta to Rishikesh Return', description: 'Drive down to Rishikesh with memories of quiet Himalayan lake reflections.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['3 Nights stay in camps/lodges', 'Daily meals', 'Trek guide and permits', 'Private transport'],
    exclusions: ['Personal porter/pony', 'Tips and personal items'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'March to June & September to December.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 9. Auli – Joshimath — 3N/4D
  {
    id: 'auli-joshimath',
    title: 'Auli & Joshimath Himalayan Ski & Snow Vista Escape (3N/4D)',
    destination: 'Auli, Joshimath & Gurso Bugyal',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'December to March (Skiing) & April to June (Green Bugyals)',
    category: 'Popular Uttarakhand',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewsCount: 84,
    overview: 'Known as India’s premier ski paradise, Auli sits at 2,800 meters surrounded by dense coniferous forests and unmatched views of Mount Nanda Devi (India’s second highest peak), Kamet, and Mana Parvat. Ride Asia’s longest cable car from Joshimath and trek to high-altitude Gurso Bugyal.',
    highlights: [
      'Ride the 4 km Joshimath to Auli ropeway with aerial vistas of the Alaknanda gorge',
      'Unobstructed front-row views of majestic Mount Nanda Devi (7,816 m)',
      'Trek through snow / wildflower meadows to Gurso Bugyal and Chattrakund lake',
      'Skiing lessons and snow activities during winter season (Jan-March)',
      'Visit historic Shankaracharya Math and Narsingh Temple in Joshimath'
    ],
    startPoint: 'Rishikesh / Dehradun',
    endPoint: 'Rishikesh / Dehradun',
    difficulty: 'Easy to Moderate',
    accommodationType: 'Premium Ski Resort / Wooden Himalayan Cottages',
    transportationType: 'Private AC Mountain SUV (Innova / Ertiga)',
    mealPlan: 'Daily Breakfast and Warm Himalayan Dinners',
    routeSummary: ['Rishikesh', 'Devprayag', 'Karnaprayag', 'Joshimath', 'Auli Ropeway', 'Gurso Bugyal'],
    itinerary: [
      {
        day: 1,
        title: 'Rishikesh to Joshimath along Panch Prayag',
        description: 'Morning drive along the legendary Panch Prayags (Devprayag, Rudraprayag, Karnaprayag, Nandaprayag). Arrive in Joshimath by evening and check into your hotel.',
        stay: 'Joshimath Valley Hotel',
        meals: 'Dinner Included'
      },
      {
        day: 2,
        title: 'Joshimath to Auli – Ropeway & Snow Slopes',
        description: 'Board the famous 4 km cable car to Auli (or drive via scenic road). Spend the day admiring the Nanda Devi panorama, trying skiing (seasonal), or relaxing at the artificial lake.',
        stay: 'Auli Resort / Wooden Chalet',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Gurso Bugyal & Chattrakund Meadow Hike',
        description: 'Gentle 3 km hike from Auli to Gurso Bugyal (3,056 m) for surreal 360-degree Himalayan vistas. Proceed to sweet water lake Chattrakund. Evening bonfire with mountain views.',
        stay: 'Auli Resort / Joshimath',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Joshimath to Rishikesh / Dehradun Departure',
        description: 'Descend the mountain highway to Rishikesh/Dehradun for onward flights and trains.',
        stay: 'Departure',
        meals: 'Breakfast Included'
      }
    ],
    inclusions: ['3 Nights stay in mountain view resorts', 'Breakfast and dinner daily', 'Private vehicle for all road travel', 'Driver allowances and tolls'],
    exclusions: ['Cable car (ropeway) tickets', 'Skiing rental and instructor fees', 'Personal expenses'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'December to March for snow & skiing; April to June for lush green meadows and clear skies.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 10. Valley of Flowers — 4N/5D
  {
    id: 'valley-of-flowers',
    title: 'Valley of Flowers & Hemkund Sahib UNESCO Alpine Bloom (4N/5D)',
    destination: 'Govindghat, Ghangaria, Valley of Flowers & Hemkund Sahib',
    duration: '4 Nights / 5 Days',
    days: 5,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'July to September (Peak Monsoon Bloom)',
    category: 'Trekking & Adventure',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.96,
    reviewsCount: 135,
    overview: 'A UNESCO World Heritage site of mystical beauty nestled high in the Western Himalayas. Walk through carpets of over 500 species of wild alpine blooms including Blue Poppies, Brahmakamal, and orchids, and visit the sacred high-altitude Sikh pilgrimage of Hemkund Sahib (4,329 m).',
    highlights: [
      'Explore the UNESCO World Heritage Valley of Flowers national park',
      'Spot the rare Blue Poppy, Himalayan Bell Flower, and Brahmakamal',
      'Pilgrimage to Gurudwara Sri Hemkund Sahib & glacial lake (14,200 ft)',
      'Scenic trek alongside the roaring Pushpawati and Lakshman Ganga rivers',
      'Certified Himalayan botanist/trek leader and safety equipment'
    ],
    startPoint: 'Rishikesh / Haridwar',
    endPoint: 'Rishikesh / Haridwar',
    difficulty: 'Moderate',
    accommodationType: 'Ghangaria Mountain Lodge & Joshimath Hotel',
    transportationType: 'Private Mountain Cab (Rishikesh to Govindghat)',
    mealPlan: 'Nutritious Mountain Meals (Breakfast, Packed Trek Lunch, Warm Dinner)',
    routeSummary: ['Rishikesh', 'Joshimath', 'Govindghat', 'Pulna', 'Ghangaria Basecamp', 'Valley of Flowers', 'Hemkund Sahib'],
    itinerary: [
      { day: 1, title: 'Rishikesh to Govindghat / Joshimath', description: 'Scenic drive through Alaknanda river valley to Govindghat. Evening briefing and trek preparation.', stay: 'Joshimath / Govindghat Hotel', meals: 'Dinner' },
      { day: 2, title: 'Govindghat to Ghangaria (9 km trek)', description: 'Short taxi to Pulna, then trek alongside the roaring river to the mountain basecamp of Ghangaria (3,048 m).', stay: 'Ghangaria Lodge', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Ghangaria to Valley of Flowers & Return', description: 'Enter the national park and spend 6 hours exploring flower carpeted meadows surrounded by glacier peaks and waterfalls.', stay: 'Ghangaria Lodge', meals: 'Breakfast, Packed Lunch & Dinner' },
      { day: 4, title: 'Hemkund Sahib High-Altitude Lake Excursion', description: 'Ascend the zigzag path to Hemkund Sahib (4,329 m) for hot tea, prasad, and reflections in the glacial lake. Descend to Ghangaria.', stay: 'Ghangaria Lodge', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Trek Down to Govindghat & Return Drive to Rishikesh', description: 'Trek down to Pulna/Govindghat, board private vehicle and drive back to Rishikesh.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['4 Nights stay', 'All meals during the trek', 'National Park entry permits', 'Trek leader & guide', 'Private transport'],
    exclusions: ['Helicopter / pony rides from Govindghat to Ghangaria', 'Personal porter fees'],
    thingsToCarry: [
      ...STANDARD_THINGS_TO_CARRY,
      'High-grade waterproof trekking shoes & gaiters',
      'Quality rain poncho / waterproof breathable jacket & pants',
      'Thermal innerwear and quick-dry trekking trousers'
    ],
    importantInfo: [
      ...STANDARD_IMPORTANT_INFO,
      'Valley of Flowers is only open from June to October. Peak bloom occurs between July 15 and August 31.',
      'No overnight camping is permitted inside the national park; visitors must exit by 5:00 PM.'
    ],
    bestTimeToVisit: 'July to September for the peak wildflower explosion.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 11. Kedarnath Yatra — 3N/4D
  {
    id: 'kedarnath-yatra',
    title: 'Kedarnath Dham Sacred Jyotirlinga Yatra (3N/4D)',
    destination: 'Sonprayag, Gaurikund, Kedarnath Temple & Guptkashi',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'May to June & September to November',
    category: 'Spiritual & Char Dham',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.98,
    reviewsCount: 210,
    overview: 'Undertake the most revered Himalayan pilgrimage to Kedarnath Ji—the 11th Jyotirlinga of Lord Shiva situated at 3,584 meters against the dramatic snowy backdrop of the Kedarnath and Kedar Dome peaks.',
    highlights: [
      'VIP assistance for evening and morning Abhishek Darshan at Kedarnath Temple',
      'Option of scenic helicopter shuttle or private pony/palki from Phata/Guptkashi',
      'Overnight stay near the holy shrine with illuminated nighttime temple views',
      'Visit Triyuginarayan Temple (sacred Shiva-Parvati celestial wedding site)',
      'Complete biometric registration, transit coordination & private transport'
    ],
    startPoint: 'Haridwar / Rishikesh / Dehradun',
    endPoint: 'Haridwar / Rishikesh / Dehradun',
    difficulty: 'Challenging (16 km high altitude trek or helicopter transfer)',
    accommodationType: 'Guptkashi Hotel & Kedarnath Basecamp GMVN / Private Tent',
    transportationType: 'Dedicated Private AC Mountain Vehicle',
    mealPlan: 'Daily Vegetarian Pure Sattvic Breakfast & Dinner',
    routeSummary: ['Haridwar', 'Rishikesh', 'Devprayag', 'Rudraprayag', 'Guptkashi', 'Sonprayag', 'Gaurikund', 'Kedarnath Dham'],
    itinerary: [
      {
        day: 1,
        title: 'Haridwar to Guptkashi / Phata',
        description: 'Morning pickup from Haridwar/Rishikesh. Scenic drive along Mandakini river via Devprayag and Rudraprayag confluences. Arrive in Guptkashi/Phata, check in and rest before yatra.',
        stay: 'Guptkashi / Phata Hotel',
        meals: 'Dinner Included'
      },
      {
        day: 2,
        title: 'Guptkashi to Kedarnath Dham – Darshan & Aarti',
        description: 'Early morning transfer to Sonprayag/Helipad. Ascend to Kedarnath via helicopter or 16 km trek from Gaurikund. Check-in at Kedarnath, attend soul-stirring evening Sandhya Aarti, and witness the golden temple glowing in the moonlight.',
        stay: 'Kedarnath Temple Cottages / Stays',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Morning Darshan & Return to Guptkashi',
        description: 'Early morning VIP Darshan at sanctum sanctorum. Descend to Sonprayag/Helipad and transfer to hotel in Guptkashi. Optional visit to Triyuginarayan Akhand Dhuni temple.',
        stay: 'Guptkashi Hotel',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Guptkashi to Haridwar / Rishikesh Return',
        description: 'After breakfast, drive down through the scenic valley back to Haridwar/Rishikesh for onward journey.',
        stay: 'Departure',
        meals: 'Breakfast Included'
      }
    ],
    inclusions: [
      '3 Nights accommodation (2N Guptkashi, 1N Kedarnath)',
      'Pure vegetarian sattvic breakfast and dinner',
      'Private AC vehicle from Haridwar to Haridwar',
      'Biometric Yatra registration facilitation',
      'Tolls, parking, and driver allowances'
    ],
    exclusions: ['Helicopter tickets, pony/palki charges, personal pooja dakshina'],
    thingsToCarry: [
      ...STANDARD_THINGS_TO_CARRY,
      'Thermal inners, heavy woollens & windbreaker jacket (sub-zero night temps)',
      'Medical fitness certificate, rain poncho, walking stick & backpack'
    ],
    importantInfo: [
      ...STANDARD_IMPORTANT_INFO,
      'Mandatory biometric registration required by Uttarakhand government.',
      'Helicopter tickets are subject to government IRCTC portal slots and DGCA weather clearances.'
    ],
    bestTimeToVisit: 'May to June for pleasant yatra weather; September to November for clear skies and crisp autumn darshan.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 12. Kedarnath – Badrinath — 5N/6D
  {
    id: 'kedarnath-badrinath',
    title: 'Kedarnath & Badrinath Do Dham Sacred Yatra (5N/6D)',
    destination: 'Guptkashi, Kedarnath, Chopta, Joshimath, Badrinath & Mana Village',
    duration: '5 Nights / 6 Days',
    days: 6,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'May to June & September to November',
    category: 'Spiritual & Char Dham',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.97,
    reviewsCount: 168,
    overview: 'The definitive Do Dham pilgrimage linking Lord Shiva at Kedarnath (3,584 m) with Lord Vishnu at Badrinath (3,133 m). Cross stunning mountain valleys via Chopta and visit Mana—the last Indian village at the Indo-Tibetan border.',
    highlights: [
      'Darshan at Kedarnath Ji Jyotirlinga and Badrinath Ji Dham',
      'Dip in the sacred Tapt Kund natural hot sulfur springs at Badrinath',
      'Explore Mana Village: Vyas Gufa, Ganesh Gufa, Bhim Pul & Saraswati River',
      'Drive through the scenic alpine meadows of Chopta and Joshimath',
      'Pure sattvic vegetarian dining and VIP darshan assistance'
    ],
    startPoint: 'Haridwar / Rishikesh',
    endPoint: 'Haridwar / Rishikesh',
    difficulty: 'Moderate to Challenging',
    accommodationType: 'Curated Pilgrim Hotels & Kedarnath Basecamp Stay',
    transportationType: 'Dedicated Private AC Mountain Cab',
    mealPlan: 'Daily Sattvic Breakfast & Dinner',
    routeSummary: ['Haridwar', 'Guptkashi', 'Kedarnath', 'Chopta', 'Joshimath', 'Badrinath', 'Mana Village', 'Rishikesh'],
    itinerary: [
      { day: 1, title: 'Haridwar to Guptkashi', description: 'Drive along Mandakini valley via Devprayag and Rudraprayag.', stay: 'Guptkashi Hotel', meals: 'Dinner' },
      { day: 2, title: 'Guptkashi to Kedarnath Dham', description: 'Trek or helicopter to Kedarnath. Evening Aarti and overnight stay.', stay: 'Kedarnath Stay', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Kedarnath to Guptkashi / Pipalkoti', description: 'Morning temple darshan, descend to Sonprayag and drive towards Pipalkoti.', stay: 'Pipalkoti Hotel', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Pipalkoti to Badrinath Dham', description: 'Drive via Joshimath to Badrinath. Holy dip in Tapt Kund and evening Swarna Aarti.', stay: 'Badrinath Hotel', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Badrinath & Mana Village to Rudraprayag', description: 'Visit Mana Village, Vyas Gufa, and Bhim Pul. Afternoon drive to Rudraprayag.', stay: 'Rudraprayag Hotel', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Rudraprayag to Haridwar / Rishikesh Return', description: 'Drive down to Haridwar/Rishikesh for train/flight departure.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['5 Nights stay', 'Pure veg breakfast and dinner daily', 'Private vehicle throughout', 'Tolls, parking, driver allowance'],
    exclusions: ['Helicopter tickets, pony/palki, VIP pooja receipts'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'May-June & September-November.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 13. Char Dham Yatra — 10N/11D
  {
    id: 'char-dham-yatra',
    title: 'Complete Char Dham Yatra Road Circuit (10N/11D)',
    destination: 'Yamunotri, Gangotri, Kedarnath, Badrinath & Mana',
    duration: '10 Nights / 11 Days',
    days: 11,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'May to June & September to November',
    category: 'Spiritual & Char Dham',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.98,
    reviewsCount: 245,
    overview: 'The most revered pilgrimage in Hinduism. Fulfill your spiritual quest by circumambulating the four divine Himalayan abodes: Yamunotri, Gangotri, Kedarnath, and Badrinath in the traditional clockwise direction with seasoned mountain chauffeurs and verified stays.',
    highlights: [
      'Darshan at all four sacred Dhams: Yamunotri, Gangotri, Kedarnath, Badrinath',
      'Witness the origin of holy rivers Yamuna, Bhagirathi, Mandakini & Alaknanda',
      'Comfortable private vehicle with dedicated experienced hill driver',
      'Overnight in beautiful Harsil valley, Guptkashi, and Badrinath town',
      'Complete government biometric registration assistance and on-ground team support'
    ],
    startPoint: 'Haridwar / Dehradun / Delhi',
    endPoint: 'Haridwar / Dehradun / Delhi',
    difficulty: 'Moderate',
    accommodationType: 'Carefully Selected Clean Hill Stays & Deluxe Camps',
    transportationType: 'Dedicated Private AC Tourist Cab (Innova / Ertiga / Tempo Traveller)',
    mealPlan: 'Daily Pure Sattvic Vegetarian Breakfast & Dinner',
    routeSummary: ['Haridwar', 'Barkot', 'Yamunotri', 'Uttarkashi', 'Gangotri', 'Guptkashi', 'Kedarnath', 'Pipalkoti', 'Badrinath', 'Rudraprayag', 'Rishikesh'],
    itinerary: [
      { day: 1, title: 'Haridwar / Dehradun to Barkot', description: 'Scenic drive via Mussoorie and Kempty Falls to Barkot.', stay: 'Barkot Hotel', meals: 'Dinner' },
      { day: 2, title: 'Barkot to Yamunotri Dham & Return', description: 'Drive to Janki Chatti, 6 km trek to Yamunotri Temple, holy dip in Surya Kund, return to Barkot.', stay: 'Barkot Hotel', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Barkot to Uttarkashi', description: 'Drive along Bhagirathi valley, visit Kashi Vishwanath Temple in Uttarkashi.', stay: 'Uttarkashi Hotel', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Uttarkashi to Gangotri Dham & Return', description: 'Scenic drive via Harsil apple valley to Gangotri Temple. Offer prayers and return.', stay: 'Uttarkashi Hotel', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Uttarkashi to Guptkashi', description: 'Cross the picturesque Chamba / Tehri lake region to reach Guptkashi in Mandakini valley.', stay: 'Guptkashi Hotel', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Guptkashi to Kedarnath Dham', description: 'Trek or fly by helicopter to Kedarnath. Attend divine evening Aarti.', stay: 'Kedarnath Stay', meals: 'Breakfast & Dinner' },
      { day: 7, title: 'Kedarnath to Guptkashi / Pipalkoti', description: 'Morning Abhishek darshan, descend to Sonprayag and drive to Pipalkoti.', stay: 'Pipalkoti Hotel', meals: 'Breakfast & Dinner' },
      { day: 8, title: 'Pipalkoti to Badrinath Dham', description: 'Drive via Joshimath to Badrinath. Tapt Kund bath and evening Aarti.', stay: 'Badrinath Hotel', meals: 'Breakfast & Dinner' },
      { day: 9, title: 'Badrinath & Mana Village to Rudraprayag', description: 'Visit Mana (last Indian village), Vyas Gufa, and drive to Rudraprayag.', stay: 'Rudraprayag Hotel', meals: 'Breakfast & Dinner' },
      { day: 10, title: 'Rudraprayag to Rishikesh', description: 'Drive along Alaknanda, visit Devprayag Sangam, evening Ganga Aarti in Rishikesh.', stay: 'Rishikesh Hotel', meals: 'Breakfast & Dinner' },
      { day: 11, title: 'Rishikesh / Haridwar Departure', description: 'Drop-off at Haridwar / Dehradun Railway Station or Airport.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['10 Nights accommodation', 'Pure vegetarian breakfast and dinner daily', 'Private vehicle throughout', 'Toll, state taxes, parking, driver allowance'],
    exclusions: ['Helicopter tickets, pony/doli charges, laundry & personal expenses'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'May to June & September to November.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 14. Chakrata – Tiger Falls — 3N/4D
  {
    id: 'chakrata-tiger-falls',
    title: 'Chakrata & Tiger Falls Secluded Pine Retreat (3N/4D)',
    destination: 'Chakrata, Tiger Falls, Deoban & Budher Caves',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Year Round (Winter Snow in Dec-Feb)',
    category: 'Offbeat Uttarakhand',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.85,
    reviewsCount: 39,
    overview: 'Tucked away in the Jaunsar-Bawar region, Chakrata is an untouched cantonment hill station famous for Tiger Falls—one of India’s highest direct waterfalls—dense deodar canopies of Deoban, and limestone caves.',
    highlights: [
      'Trek to Tiger Falls plunging 312 feet into a pristine natural pool',
      'Explore the ancient deodar forests of Deoban (9,400 ft) with views of 50+ Himalayan peaks',
      'Walk through the limestone stalactite formations of Budher Caves (Miola glacier)',
      'Experience peaceful colonial bungalows and authentic Jaunsari village culture'
    ],
    startPoint: 'Dehradun',
    endPoint: 'Dehradun',
    difficulty: 'Easy to Moderate',
    accommodationType: 'Eco Pine Resort / British Colonial Rest House',
    transportationType: 'Private AC Mountain Vehicle',
    mealPlan: 'Daily Breakfast & Dinner',
    routeSummary: ['Dehradun', 'Kalsi', 'Chakrata Market', 'Tiger Falls', 'Deoban Peak', 'Budher Caves'],
    itinerary: [
      { day: 1, title: 'Dehradun to Chakrata', description: 'Scenic drive via Ashokan Rock Edict at Kalsi. Check in and evening walk through peaceful cantonment lanes.', stay: 'Chakrata Resort', meals: 'Dinner' },
      { day: 2, title: 'Tiger Falls Hike & Natural Pool', description: 'Trek or drive to Tiger Falls, enjoy the cascading water and picnic in the valley.', stay: 'Chakrata Resort', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Deoban Himalayan Viewpoint & Budher Caves', description: 'Drive to Deoban at 9,400 ft for jaw-dropping views of Garhwal peaks and explore Budher caves.', stay: 'Chakrata Resort', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Chakrata to Dehradun Departure', description: 'Leisurely breakfast and drive back down to Dehradun.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['3 Nights stay', 'Breakfast and dinner', 'Private cab and driver', 'Tolls and parking'],
    exclusions: ['Personal expenses, entry tickets'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'March to June for greenery; Dec to Feb for peaceful snowfall.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 15. Lansdowne – Kanatal — 4N/5D
  {
    id: 'lansdowne-kanatal',
    title: 'Lansdowne & Kanatal Quiet Pines & Valley Trails (4N/5D)',
    destination: 'Lansdowne, Kotdwar, Kanatal & Tehri Lake',
    duration: '4 Nights / 5 Days',
    days: 5,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Year Round',
    category: 'Offbeat Uttarakhand',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1605649487212-47bdab064df8?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviewsCount: 34,
    overview: 'Escape the crowds in two of Uttarakhand’s most peaceful hill sanctuaries. Enjoy the disciplined colonial serenity of Lansdowne and the mist-laden pine forests of Kanatal with water sports on Tehri Lake.',
    highlights: [
      '2 Nights in quiet Lansdowne: Tip-in-Top, Bhulla Tal & Garhwal Rifles Regimental Museum',
      '2 Nights in Kanatal surrounded by deodars and Kaudia forest',
      'Water sports and speed boating on the emerald waters of Tehri Lake',
      'Panoramic sunset overlooking the Garhwal Himalayas'
    ],
    startPoint: 'Delhi / Dehradun / Kotdwar',
    endPoint: 'Delhi / Dehradun / Kotdwar',
    difficulty: 'Easy',
    accommodationType: 'Pine View Cottages & Hill Boutique Hotels',
    transportationType: 'Private AC Mountain Vehicle',
    mealPlan: 'Daily Breakfast & Dinner',
    routeSummary: ['Kotdwar / Dehradun', 'Lansdowne', 'Pauri Hills', 'Tehri Lake', 'Kanatal'],
    itinerary: [
      { day: 1, title: 'Arrival & Drive to Lansdowne', description: 'Scenic drive through pine covered hills to Lansdowne. Evening stroll around colonial churches.', stay: 'Lansdowne Hotel', meals: 'Dinner' },
      { day: 2, title: 'Lansdowne Heritage & Tip-in-Top', description: 'Visit Bhulla Tal lake, Tip-in-Top viewpoint, St. John’s Church, and Garhwal Rifles Museum.', stay: 'Lansdowne Hotel', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Lansdowne to Kanatal via Tehri Lake', description: 'Drive via Tehri Dam. Enjoy optional jet skiing and speed boating on Tehri Lake before climbing to Kanatal.', stay: 'Kanatal Pine Resort', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Kaudia Forest Safari & Surkanda Ridge', description: 'Walk through Kaudia forest trails, take in views of apple orchards and Himalayan peaks.', stay: 'Kanatal Pine Resort', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Kanatal to Dehradun / Delhi Drop', description: 'After breakfast, descend to Dehradun or Delhi for onward departure.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['4 Nights stay', 'Breakfast & dinner daily', 'Private vehicle throughout', 'Driver allowances and tolls'],
    exclusions: ['Boating fees at Tehri Lake', 'Personal expenses'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'Year round.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 16. Almora – Ranikhet – Kausani — 5N/6D
  {
    id: 'almora-ranikhet-kausani',
    title: 'Almora, Ranikhet & Kausani Classic Kumaon Panorama (5N/6D)',
    destination: 'Kathgodam, Almora, Binsar, Kausani & Ranikhet',
    duration: '5 Nights / 6 Days',
    days: 6,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'September to June',
    category: 'Kumaon',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f841807d?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1582650625119-3a31f841807d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewsCount: 65,
    overview: 'Kumaon’s cultural heartland. From the cobbled stone bazaar and Kasar Devi energy of Almora, to the 300-km Himalayan snow panorama of Kausani (dubbed the "Switzerland of India" by Mahatma Gandhi), and the golf courses and army pines of Ranikhet.',
    highlights: [
      'Breathtaking 300-km sunrise panorama of Trishul, Nanda Devi & Panchachuli from Kausani',
      'Visit Kasar Devi Temple on the Crank’s Ridge with geomagnetic earth currents',
      'Explore the lush tea gardens and Anasakti Ashram (Gandhi Ashram) in Kausani',
      'Wander the Asia’s highest 9-hole golf course and Chaubatia apple gardens in Ranikhet',
      'Sample legendary Almora Bal Mithai and Singauri sweet delicacies'
    ],
    startPoint: 'Kathgodam',
    endPoint: 'Kathgodam',
    difficulty: 'Easy (Family Circuit)',
    accommodationType: 'Heritage Kumaoni Haveli & Himalayan View Resorts',
    transportationType: 'Private AC Mountain Vehicle',
    mealPlan: 'Daily Breakfast & Dinner',
    routeSummary: ['Kathgodam', 'Almora', 'Kasar Devi', 'Kausani Tea Estate', 'Ranikhet Golf Course', 'Kathgodam'],
    itinerary: [
      { day: 1, title: 'Kathgodam to Almora', description: 'Scenic drive through Kumaon hills to Almora. Check in and visit Kasar Devi Temple.', stay: 'Almora Resort', meals: 'Dinner' },
      { day: 2, title: 'Almora Cultural Trail & Jageshwar Excursion', description: 'Visit the 124 ancient stone temples of Jageshwar Dham in a dense deodar grove, and browse the 200-year-old Lala Bazaar.', stay: 'Almora Resort', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Almora to Kausani via Baijnath', description: 'Drive to Kausani, stopping at the 12th-century stone temples of Baijnath on the Gomti river. Sunset over Trishul peaks.', stay: 'Kausani Hotel', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Kausani Sunrise & Tea Gardens', description: 'Watch the sunrise paint Nanda Devi golden. Visit Anasakti Ashram and Girias Organic Tea Estate.', stay: 'Kausani Hotel', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Kausani to Ranikhet', description: 'Drive to the cantonment town of Ranikhet. Visit Chaubatia apple orchards, Golf Ground, and Jhula Devi temple.', stay: 'Ranikhet Resort', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Ranikhet to Kathgodam Departure', description: 'Descend to Kathgodam for your train connection.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['5 Nights stay in scenic rooms', 'Breakfast and dinner daily', 'Private vehicle for all travel', 'Tolls and driver allowance'],
    exclusions: ['Entry tickets to museums/orchards', 'Personal sweets & shopping'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'September to June.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 17. Munsiyari — 4N/5D
  {
    id: 'munsiyari',
    title: 'Munsiyari Panchachuli Peaks & Johar Valley Frontier (4N/5D)',
    destination: 'Kathgodam, Chaukori, Munsiyari, Birthi Falls & Almora',
    duration: '4 Nights / 5 Days',
    days: 5,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'March to June & September to November',
    category: 'Kumaon',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.92,
    reviewsCount: 41,
    overview: 'Known as the "Little Kashmir of Uttarakhand", Munsiyari sits at 2,298 meters at the gateway to the Milam and Ralam glaciers. Marvel at the five towering snow peaks of Panchachuli right from your room window, and discover the rich Shauka tribal trade history of Johar Valley.',
    highlights: [
      'Front-row views of the iconic Panchachuli Peaks (1, 2, 3, 4, 5)',
      'Hike to the cascading 126-meter Birthi Falls on the mountain highway',
      'Visit Darkot village to see traditional handwoven Angora and Pashmina shawls',
      'Hike to Thamri Kund forest lake and view ancient tribal relics at the Tribal Heritage Museum'
    ],
    startPoint: 'Kathgodam',
    endPoint: 'Kathgodam',
    difficulty: 'Moderate (Longer Mountain Drives)',
    accommodationType: 'Panchachuli-view Wooden Cottages & KMVN Stays',
    transportationType: 'Private AC Hill SUV (Innova / Bolero)',
    mealPlan: 'Daily Breakfast & Kumaoni Home-Style Dinners',
    routeSummary: ['Kathgodam', 'Almora', 'Chaukori Tea Gardens', 'Birthi Falls', 'Kalamuni Pass', 'Munsiyari'],
    itinerary: [
      { day: 1, title: 'Kathgodam to Chaukori', description: 'Ascend through Almora to Chaukori, famous for tea gardens and views of Nanda Devi.', stay: 'Chaukori Hotel', meals: 'Dinner' },
      { day: 2, title: 'Chaukori to Munsiyari via Birthi Falls', description: 'Cross Kalamuni Pass (2,700 m) and stop at Birthi Falls before reaching Munsiyari. Sunset on Panchachuli peaks.', stay: 'Munsiyari Resort', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Munsiyari Sightseeing & Darkot Village', description: 'Visit Nanda Devi Temple meadow, Darkot weaving village, Tribal Heritage Museum, and Thamri Kund lake.', stay: 'Munsiyari Resort', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Munsiyari to Bageshwar / Almora', description: 'Scenic drive descending to the holy confluence of Sarayu and Gomti at Bageshwar, onwards to Almora.', stay: 'Almora Resort', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Almora to Kathgodam Departure', description: 'Drive down to Kathgodam for your onward train.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['4 Nights accommodation', 'Breakfast and dinner daily', 'Private SUV throughout', 'All mountain tolls and driver allowance'],
    exclusions: ['Personal expenses and porter charges'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'March to June for clear mountain views; Oct-Nov for crisp golden peaks.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 18. Jageshwar – Chaukori – Munsiyari — 6N/7D
  {
    id: 'jageshwar-chaukori-munsiyari',
    title: 'Jageshwar, Chaukori & Munsiyari Grand Eastern Kumaon (6N/7D)',
    destination: 'Kathgodam, Jageshwar Dham, Patal Bhuvaneshwar, Chaukori & Munsiyari',
    duration: '6 Nights / 7 Days',
    days: 7,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'March to June & September to November',
    category: 'Offbeat Uttarakhand',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.95,
    reviewsCount: 56,
    overview: 'The definitive deep-Kumaon odyssey. Explore the 8th-century temple complex of Jageshwar nestled among soaring deodars, delve into the mystical subterranean limestone cave temple of Patal Bhuvaneshwar, and behold the Himalayan frontier in Munsiyari.',
    highlights: [
      'Jageshwar Dham: 124 ancient stone temples nestled in an ancient deodar sanctuary',
      'Descent into Patal Bhuvaneshwar limestone cave with natural stalagmite formations',
      'Tea gardens and panoramic sunset overlooks in Chaukori',
      '2 Nights in Munsiyari under the dramatic shadow of Panchachuli Peaks'
    ],
    startPoint: 'Kathgodam',
    endPoint: 'Kathgodam',
    difficulty: 'Moderate',
    accommodationType: 'Curated Kumaoni Stays & Mountain Cottages',
    transportationType: 'Private AC Mountain Vehicle',
    mealPlan: 'Daily Breakfast and Dinner',
    routeSummary: ['Kathgodam', 'Jageshwar Dham', 'Patal Bhuvaneshwar', 'Chaukori', 'Birthi Falls', 'Munsiyari', 'Almora'],
    itinerary: [
      { day: 1, title: 'Kathgodam to Jageshwar Dham', description: 'Drive via Almora to Jageshwar. Check in and experience evening prayers in the ancient deodar grove.', stay: 'Jageshwar Resort', meals: 'Dinner' },
      { day: 2, title: 'Jageshwar to Patal Bhuvaneshwar & Chaukori', description: 'Explore Jageshwar cluster, drive to Patal Bhuvaneshwar subterranean cave, and continue to Chaukori.', stay: 'Chaukori Hotel', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Chaukori to Munsiyari via Birthi Falls', description: 'Drive over Kalamuni pass with stops at Birthi Falls. Arrive in Munsiyari for sunset.', stay: 'Munsiyari Resort', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Munsiyari High Alpine Exploration', description: 'Visit Nanda Devi Temple, Darkot tribal village, and Thamri Kund forest lake.', stay: 'Munsiyari Resort', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Munsiyari to Bageshwar / Kausani', description: 'Drive descending to Bageshwar temple and onward to the tea gardens of Kausani.', stay: 'Kausani Hotel', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Kausani to Nainital', description: 'Morning Himalayan sunrise and drive down to Nainital for an evening lake walk.', stay: 'Nainital Hotel', meals: 'Breakfast & Dinner' },
      { day: 7, title: 'Nainital to Kathgodam Departure', description: 'Check out and drop at Kathgodam Railway Station.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['6 Nights stay', 'Breakfast and dinner daily', 'Private vehicle throughout', 'Driver allowance and tolls'],
    exclusions: ['Cave entry and pooja receipts', 'Personal expenses'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'March to June & September to November.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 19. Jim Corbett – Nainital — 4N/5D
  {
    id: 'jim-corbett-nainital',
    title: 'Jim Corbett Tiger Safari & Nainital Lake Paradise (4N/5D)',
    destination: 'Jim Corbett National Park, Nainital & Bhimtal',
    duration: '4 Nights / 5 Days',
    days: 5,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'October to June',
    category: 'Wildlife & Nature',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f841807d?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1582650625119-3a31f841807d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.93,
    reviewsCount: 142,
    overview: 'The perfect balance of wildlife excitement and tranquil mountain retreat. Track Bengal tigers, wild elephants, and spotted deer on a 4x4 open Gypsy safari in Jim Corbett National Park, then ascend into the cool breezes and boating lakes of Nainital.',
    highlights: [
      '2 Nights in Jim Corbett with exclusive 4x4 open Gypsy jungle safari',
      '2 Nights in Nainital with lake boating and Snow View cable car',
      'Stay in luxury riverside jungle resort along the Kosi River',
      'Visit Corbett Waterfall, Garjia Devi Temple & Corbett Museum',
      'Excursion to Bhimtal and Naukuchiatal freshwater lakes'
    ],
    startPoint: 'Delhi / Kathgodam / Ramnagar',
    endPoint: 'Delhi / Kathgodam',
    difficulty: 'Easy (Family Favorite)',
    accommodationType: 'Riverside Wilderness Resort & Lake-view Hotel',
    transportationType: 'Private AC Vehicle + 4x4 Open Safari Gypsy',
    mealPlan: 'Daily Buffet Breakfast & Dinner',
    routeSummary: ['Delhi / Kathgodam', 'Ramnagar', 'Jim Corbett Safari Zone', 'Kaladhungi', 'Nainital', 'Bhimtal'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival at Jim Corbett – Riverside Resort & Garjia Temple',
        description: 'Pick-up from Delhi, Kathgodam or Ramnagar. Check-in to your luxury jungle resort along the Kosi River. Afternoon visit to Garjia Devi Temple and Corbett Museum.',
        stay: 'Corbett Riverside Resort',
        meals: 'Dinner Included'
      },
      {
        day: 2,
        title: '4x4 Open Gypsy Jungle Safari & Corbett Waterfall',
        description: 'Early morning open Gypsy safari in Bijrani / Jhirna / Dhela zone. Track Bengal tigers and birdlife with certified forest guides. Afternoon visit to Corbett Waterfall.',
        stay: 'Corbett Riverside Resort',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Corbett to Nainital – Hill Ascent & Lake Boating',
        description: 'Drive up through the winding sal and pine forests to Nainital (65 km). Check in and enjoy an afternoon boat ride on Naini Lake and visit Naina Devi temple.',
        stay: 'Nainital Lake Hotel',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Nainital Lakes & Snow View Ridge',
        description: 'Take the cable car to Snow View for mountain vistas. Afternoon excursion to Bhimtal and Naukuchiatal.',
        stay: 'Nainital Lake Hotel',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 5,
        title: 'Check-out & Kathgodam / Delhi Departure',
        description: 'After breakfast, descend to Kathgodam Railway Station or drive back to Delhi.',
        stay: 'Departure',
        meals: 'Breakfast Included'
      }
    ],
    inclusions: [
      '2 Nights Corbett luxury resort + 2 Nights Nainital lake-view hotel',
      'Daily breakfast and dinner',
      '1x 4x4 open Gypsy safari with permits, driver, and forest guide fees',
      'Private AC vehicle for all transfers and sightseeing',
      'Tolls, parking, and driver allowances'
    ],
    exclusions: ['Additional safaris', 'Boating and ropeway tickets', 'Personal tips'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: [
      ...STANDARD_IMPORTANT_INFO,
      'Corbett safari permits are booked in advance on the official forest department portal with government ID.'
    ],
    bestTimeToVisit: 'October to June for wildlife sightings; safaris operate in all designated zones.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 20. Corbett – Rishikesh — 4N/5D
  {
    id: 'corbett-rishikesh',
    title: 'Jim Corbett & Rishikesh Jungle & Rapids Safari (4N/5D)',
    destination: 'Jim Corbett National Park, Rajaji Corridor & Rishikesh',
    duration: '4 Nights / 5 Days',
    days: 5,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'October to May',
    category: 'Wildlife & Nature',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.88,
    reviewsCount: 58,
    overview: 'The ultimate nature & thrill fusion: seek the elusive Royal Bengal Tiger in the wilderness of Jim Corbett, and conquer the white-water rapids of the Holy Ganges in Rishikesh.',
    highlights: [
      'Open Jeep safari in Jim Corbett National Park',
      'Ganges white water river rafting (16 km stretch)',
      'Evening Ganga Aarti at Parmarth Niketan & Beatles Ashram visit',
      'Riverside campfire & luxury resort stays'
    ],
    startPoint: 'Delhi / Dehradun',
    endPoint: 'Delhi / Dehradun',
    difficulty: 'Easy to Moderate',
    accommodationType: 'Riverside Jungle & Adventure Eco Lodges',
    transportationType: 'Private AC Cab + Safari Gypsy',
    mealPlan: 'Daily Breakfast & Dinner',
    routeSummary: ['Delhi / Dehradun', 'Ramnagar', 'Corbett Jungle', 'Kotdwar / Haridwar', 'Rishikesh'],
    itinerary: [
      { day: 1, title: 'Arrival at Jim Corbett', description: 'Check-in to resort, explore Kosi river bank and Garjia temple.', stay: 'Corbett Resort', meals: 'Dinner' },
      { day: 2, title: 'Corbett Tiger Safari & Nature Walk', description: 'Morning 4x4 open Gypsy safari in Corbett core/buffer zone. Afternoon relaxation.', stay: 'Corbett Resort', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Corbett to Rishikesh via Haridwar', description: 'Scenic drive to Rishikesh. Attend Parmarth Niketan Ganga Aarti in the evening.', stay: 'Rishikesh Resort', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Ganga River Rafting & Beatles Ashram', description: 'Experience exciting 16 km white water rafting, cliff jumping, and explore Beatles Ashram.', stay: 'Rishikesh Resort', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Rishikesh Departure', description: 'Breakfast and drop at Dehradun Airport or Haridwar Railway Station.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['4 Nights stay', 'Breakfast & dinner daily', '1 Corbett Gypsy safari', 'Private vehicle throughout'],
    exclusions: ['River rafting fees', 'Personal expenses'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'October to May.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 21. Additional Dropdown Tour: Badrinath Yatra (3N/4D)
  {
    id: 'badrinath-yatra',
    title: 'Badrinath Dham & Mana Valley Divine Pilgrimage (3N/4D)',
    destination: 'Joshimath, Badrinath & Mana Village',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'May to June & September to November',
    category: 'Spiritual & Char Dham',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop'],
    rating: 4.96,
    reviewsCount: 94,
    overview: 'Pilgrimage to Badrinath Temple—the paramount abode of Lord Badri Vishal situated between Nar and Narayana mountain ranges at 3,133 meters. Visit Tapt Kund hot springs, Brahma Kapal, and Mana—the last Indian border village.',
    highlights: ['Special Darshan at Badrinath Temple', 'Explore Mana Village, Vyas Gufa, Bhim Pul & Saraswati River', 'Holy dip in Tapt Kund natural thermal springs', 'Visit Joshimath Shankaracharya Math'],
    startPoint: 'Haridwar / Rishikesh',
    endPoint: 'Haridwar / Rishikesh',
    difficulty: 'Easy to Moderate',
    accommodationType: 'Badrinath Town Hotel & Joshimath Resort',
    transportationType: 'Private AC Mountain Vehicle',
    mealPlan: 'Daily Sattvic Breakfast & Dinner',
    routeSummary: ['Haridwar', 'Joshimath', 'Badrinath Dham', 'Mana Village', 'Rudraprayag'],
    itinerary: [
      { day: 1, title: 'Haridwar to Joshimath', description: 'Drive along the Panch Prayags to Joshimath.', stay: 'Joshimath Hotel', meals: 'Dinner' },
      { day: 2, title: 'Joshimath to Badrinath Dham', description: 'Scenic drive to Badrinath. Tapt Kund bath, evening temple darshan and Swarna Aarti.', stay: 'Badrinath Hotel', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Mana Village to Rudraprayag', description: 'Morning temple darshan, visit Mana Village, Vyas Gufa and drive to Rudraprayag.', stay: 'Rudraprayag Hotel', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Rudraprayag to Haridwar Return', description: 'Drive down to Haridwar / Rishikesh for onward departure.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['3 Nights stay', 'Sattvic breakfast and dinner', 'Private cab throughout', 'Tolls & driver allowance'],
    exclusions: ['Personal pooja receipts', 'Tips'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'May-June & September-November.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 22. Additional Dropdown Tour: Gangotri Yatra (3N/4D)
  {
    id: 'gangotri-yatra',
    title: 'Gangotri Dham & Harsil Apple Valley Pilgrimage (3N/4D)',
    destination: 'Uttarkashi, Harsil Valley & Gangotri Dham',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'May to June & September to November',
    category: 'Spiritual & Char Dham',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop'],
    rating: 4.92,
    reviewsCount: 62,
    overview: 'Journey to the sacred source of Mother Ganga at Gangotri Dham (3,100 m). Pass through the emerald cedar and apple orchards of Harsil valley and bathe in the spiritual serenity of the Bhagirathi river.',
    highlights: ['Darshan at the 18th-century white marble Gangotri Temple', 'Explore Harsil Valley—the "Mini Switzerland of India"', 'Visit Kashi Vishwanath temple in Uttarkashi', 'Walk to Surya Kund waterfall and submerged Shivling'],
    startPoint: 'Haridwar / Dehradun',
    endPoint: 'Haridwar / Dehradun',
    difficulty: 'Easy',
    accommodationType: 'Harsil Apple Resort & Uttarkashi Hotel',
    transportationType: 'Private AC Mountain Vehicle',
    mealPlan: 'Daily Vegetarian Meals',
    routeSummary: ['Haridwar', 'Uttarkashi', 'Bhatwari', 'Harsil Valley', 'Gangotri Dham'],
    itinerary: [
      { day: 1, title: 'Haridwar to Uttarkashi', description: 'Drive along Bhagirathi river, visit Kashi Vishwanath Temple.', stay: 'Uttarkashi Hotel', meals: 'Dinner' },
      { day: 2, title: 'Uttarkashi to Gangotri via Harsil', description: 'Scenic drive through apple country to Gangotri Temple. Offer prayers, visit Surya Kund, return to Harsil.', stay: 'Harsil Resort', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Harsil to Chamba / Rishikesh', description: 'Relax in Harsil pine woods, drive down towards Rishikesh.', stay: 'Rishikesh Hotel', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Rishikesh / Haridwar Departure', description: 'Breakfast and drop at Airport/Station.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['3 Nights stay', 'Meals daily', 'Private transport', 'All tolls'],
    exclusions: ['Personal items', 'Pooja receipts'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'May-June & September-November.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 23. Additional Dropdown Tour: Yamunotri Yatra (3N/4D)
  {
    id: 'yamunotri-yatra',
    title: 'Yamunotri Dham Sacred Thermal Springs Pilgrimage (3N/4D)',
    destination: 'Barkot, Janki Chatti & Yamunotri Temple',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'May to June & September to November',
    category: 'Spiritual & Char Dham',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'],
    rating: 4.9,
    reviewsCount: 54,
    overview: 'The first shrine of the sacred Char Dham circuit. Trek along the pristine Yamuna river to Yamunotri Dham (3,291 m) nestled in the shadow of Kalindi Parvat, and cook rice in the boiling thermal waters of Surya Kund.',
    highlights: ['Darshan at holy Yamunotri Temple', 'Take a dip in Surya Kund & Divya Shila', 'Scenic 6 km mountain trek from Janki Chatti', 'Pony / palki coordination & private transport'],
    startPoint: 'Haridwar / Dehradun',
    endPoint: 'Haridwar / Dehradun',
    difficulty: 'Moderate (6 km trek each way or pony)',
    accommodationType: 'Barkot Riverside Hotel / Camp',
    transportationType: 'Private AC Mountain Vehicle',
    mealPlan: 'Daily Vegetarian Meals',
    routeSummary: ['Haridwar', 'Mussoorie', 'Barkot', 'Janki Chatti', 'Yamunotri Dham'],
    itinerary: [
      { day: 1, title: 'Haridwar to Barkot', description: 'Drive via Mussoorie and Kempty Falls to Barkot.', stay: 'Barkot Hotel', meals: 'Dinner' },
      { day: 2, title: 'Barkot to Yamunotri Dham & Return', description: 'Drive to Janki Chatti, 6 km trek to Yamunotri temple, sacred darshan, return to Barkot.', stay: 'Barkot Hotel', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Barkot to Rishikesh', description: 'Drive down to Rishikesh, evening Ganga Aarti.', stay: 'Rishikesh Hotel', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Departure', description: 'Drop at Railway Station or Airport.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['3 Nights stay', 'Meals daily', 'Private transport', 'All tolls'],
    exclusions: ['Pony/doli charges', 'Personal pooja dakshina'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'May-June & September-November.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 24. Additional Dropdown Tour: Do Dham Yatra (5N/6D)
  {
    id: 'do-dham-yatra',
    title: 'Do Dham Yatra: Kedarnath & Badrinath Highway Express (5N/6D)',
    destination: 'Guptkashi, Kedarnath, Badrinath & Rishikesh',
    duration: '5 Nights / 6 Days',
    days: 6,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'May to June & September to November',
    category: 'Spiritual & Char Dham',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop'],
    rating: 4.96,
    reviewsCount: 122,
    overview: 'Experience the two most sought-after Himalayan Dhams with seamless ground handling, dedicated hill vehicles, and verified clean hotel stays.',
    highlights: ['Kedarnath Ji Abhishek Darshan', 'Badrinath Ji Evening Aarti', 'Mana Village & Bhim Pul border visit', 'Scenic drives crossing Devprayag & Rudraprayag'],
    startPoint: 'Haridwar / Rishikesh',
    endPoint: 'Haridwar / Rishikesh',
    difficulty: 'Moderate',
    accommodationType: 'Pilgrim Stays & Mountain Lodges',
    transportationType: 'Private AC Mountain Vehicle',
    mealPlan: 'Daily Vegetarian Breakfast & Dinner',
    routeSummary: ['Haridwar', 'Guptkashi', 'Kedarnath', 'Pipalkoti', 'Badrinath', 'Rishikesh'],
    itinerary: [
      { day: 1, title: 'Haridwar to Guptkashi', description: 'Drive along Mandakini valley to Guptkashi.', stay: 'Guptkashi Hotel', meals: 'Dinner' },
      { day: 2, title: 'Guptkashi to Kedarnath', description: 'Trek or fly by helicopter to Kedarnath. Evening Aarti.', stay: 'Kedarnath Stay', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Kedarnath to Pipalkoti', description: 'Morning darshan, descend to Sonprayag and drive to Pipalkoti.', stay: 'Pipalkoti Hotel', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Pipalkoti to Badrinath', description: 'Drive to Badrinath, Tapt Kund bath, evening temple Aarti.', stay: 'Badrinath Hotel', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Badrinath & Mana to Rudraprayag', description: 'Visit Mana village, drive to Rudraprayag.', stay: 'Rudraprayag Hotel', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Rudraprayag to Haridwar', description: 'Return drive to Haridwar.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['5 Nights stay', 'Meals daily', 'Private transport', 'All tolls'],
    exclusions: ['Helicopter tickets, pony/palki', 'Personal expenses'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'May-June & September-November.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 25. Additional Dropdown Tour: Panch Kedar (12N/13D)
  {
    id: 'panch-kedar',
    title: 'Panch Kedar Pilgrimage: All 5 Sacred Shiva Abodes (12N/13D)',
    destination: 'Kedarnath, Tungnath, Rudranath, Madhyamaheshwar & Kalpeshwar',
    duration: '12 Nights / 13 Days',
    days: 13,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'May to June & September to October',
    category: 'Spiritual & Char Dham',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop'],
    rating: 4.99,
    reviewsCount: 36,
    overview: 'The ultimate Shaivite spiritual adventure. Visit all five sacred temples where Lord Shiva manifested: Kedarnath (hump), Tungnath (arms), Rudranath (face), Madhyamaheshwar (navel), and Kalpeshwar (hair locks).',
    highlights: ['Complete Panch Kedar pilgrimage', 'Trek through untouched alpine bugyals of Rudranath & Madhyamaheshwar', 'World’s highest Shiva temple at Tungnath', 'Experienced mountain trek guides and pack mules'],
    startPoint: 'Rishikesh / Haridwar',
    endPoint: 'Rishikesh / Haridwar',
    difficulty: 'Challenging (Alpine trekking)',
    accommodationType: 'Mountain Lodges, Alpine Camps & GMVN',
    transportationType: 'Private Hill Cab + Trekking',
    mealPlan: 'Daily Breakfast & Warm Mountain Dinners',
    routeSummary: ['Rishikesh', 'Guptkashi', 'Kedarnath', 'Chopta', 'Tungnath', 'Sagar', 'Rudranath', 'Ransi', 'Madhyamaheshwar', 'Urgam', 'Kalpeshwar'],
    itinerary: [
      { day: 1, title: 'Rishikesh to Guptkashi', description: 'Drive to Guptkashi.', stay: 'Guptkashi Hotel', meals: 'Dinner' },
      { day: 2, title: 'Guptkashi to Kedarnath (Kedar 1)', description: 'Trek to Kedarnath Dham. Evening Aarti.', stay: 'Kedarnath Stay', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Kedarnath to Chopta', description: 'Descend to Sonprayag and drive to Chopta.', stay: 'Chopta Camps', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Tungnath & Chandrashila (Kedar 2)', description: 'Trek to Tungnath (3,680 m) and Chandrashila summit.', stay: 'Chopta Camps', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Chopta to Sagar & Trek to Panar Bugyal', description: 'Drive to Sagar, trek to Panar alpine meadows.', stay: 'Panar Camp', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Panar to Rudranath (Kedar 3)', description: 'Trek to Rudranath temple with Nanda Devi views.', stay: 'Rudranath Stay', meals: 'Breakfast & Dinner' },
      { day: 7, title: 'Rudranath to Mandal & Drive to Ukhimath', description: 'Descend to Mandal village, drive to Ukhimath.', stay: 'Ukhimath Hotel', meals: 'Breakfast & Dinner' },
      { day: 8, title: 'Drive to Ransi & Trek to Gaundhar', description: 'Drive to Ransi, trek to Gaundhar riverside village.', stay: 'Gaundhar Lodge', meals: 'Breakfast & Dinner' },
      { day: 9, title: 'Gaundhar to Madhyamaheshwar (Kedar 4)', description: 'Trek to sacred Madhyamaheshwar temple (3,497 m).', stay: 'Madhyamaheshwar Stay', meals: 'Breakfast & Dinner' },
      { day: 10, title: 'Madhyamaheshwar to Ransi & Drive to Pipalkoti', description: 'Trek down to Ransi, drive to Pipalkoti.', stay: 'Pipalkoti Hotel', meals: 'Breakfast & Dinner' },
      { day: 11, title: 'Pipalkoti to Urgam Valley & Kalpeshwar (Kedar 5)', description: 'Drive to Urgam, visit Kalpeshwar cave temple.', stay: 'Urgam Homestay', meals: 'Breakfast & Dinner' },
      { day: 12, title: 'Urgam to Rishikesh', description: 'Scenic drive down to Rishikesh.', stay: 'Rishikesh Hotel', meals: 'Breakfast & Dinner' },
      { day: 13, title: 'Departure', description: 'Drop at Railway Station / Airport.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['12 Nights stay', 'Meals daily', 'Private transport', 'Trek guides and permits'],
    exclusions: ['Porter/mule personal costs', 'Personal equipment'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'May-June & September-October.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 26. Additional Dropdown Tour: Kedarkantha Trek (4N/5D)
  {
    id: 'kedarkantha-trek',
    title: 'Kedarkantha Winter Snow Summit Trek (4N/5D)',
    destination: 'Sankri, Juda Ka Talab, Kedarkantha Basecamp & Summit',
    duration: '4 Nights / 5 Days',
    days: 5,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'December to April (Snow) & May to June',
    category: 'Trekking & Adventure',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop'],
    rating: 4.94,
    reviewsCount: 98,
    overview: 'India’s most celebrated winter snow trek. Climb through fairy-tale pine forests to frozen Juda Ka Talab, and summit Kedarkantha (12,500 ft) for a 360-degree panorama of Swargarohini, Black Peak, and Bandarpoonch.',
    highlights: ['Summit Kedarkantha Peak (3,810 m / 12,500 ft)', 'Camp at frozen alpine lake Juda Ka Talab', 'Snow slide down white slopes under expert guides', 'Experience rich wooden architecture of Sankri village'],
    startPoint: 'Dehradun',
    endPoint: 'Dehradun',
    difficulty: 'Easy to Moderate',
    accommodationType: 'Four-Season Alpine Camping Tents & Sankri Homestay',
    transportationType: 'Private Cab (Dehradun to Sankri)',
    mealPlan: 'Wholesome High-Energy Mountain Meals',
    routeSummary: ['Dehradun', 'Mussoorie', 'Mori', 'Sankri Base', 'Juda Ka Talab', 'Kedarkantha Summit'],
    itinerary: [
      { day: 1, title: 'Dehradun to Sankri Basecamp', description: 'Drive via Mussoorie and Tons river valley to Sankri (1,950 m).', stay: 'Sankri Homestay', meals: 'Dinner' },
      { day: 2, title: 'Sankri to Juda Ka Talab', description: 'Trek through pine and oak woods to frozen lake Juda Ka Talab (2,774 m).', stay: 'Alpine Camps', meals: 'Breakfast, Lunch & Dinner' },
      { day: 3, title: 'Juda Ka Talab to Kedarkantha Basecamp', description: 'Trek to basecamp (3,124 m) under open mountain skies.', stay: 'Basecamp Tents', meals: 'Breakfast, Lunch & Dinner' },
      { day: 4, title: 'Summit Day: Kedarkantha Peak & Descend to Sankri', description: 'Early morning summit push for sunrise, descend to Sankri village.', stay: 'Sankri Homestay', meals: 'Breakfast, Lunch & Dinner' },
      { day: 5, title: 'Sankri to Dehradun Departure', description: 'Drive back to Dehradun for evening train/flight.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['4 Nights accommodation', 'All meals on trek', 'Crampons, microspikes, gaiters', 'Trek leader and permits', 'Transport Dehradun-Sankri-Dehradun'],
    exclusions: ['Personal backpack offloading', 'Personal clothing'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'December to April for snow; May-June for flowers.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 27. Additional Dropdown Tour: Dayara Bugyal Trek (4N/5D)
  {
    id: 'dayara-bugyal-trek',
    title: 'Dayara Bugyal High Alpine Meadow Trek (4N/5D)',
    destination: 'Raithal Village, Gui, Dayara Bugyal & Bakaria Top',
    duration: '4 Nights / 5 Days',
    days: 5,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Year Round (Best May-June & Sept-Feb)',
    category: 'Trekking & Adventure',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'],
    rating: 4.91,
    reviewsCount: 43,
    overview: 'Dayara Bugyal is revered among the most expansive and stunning alpine meadows in the Himalayas. Spanning 28 square kilometers of velvet green grasslands in summer and rolling ski snow in winter with views of Bandarpoonch and Draupadi Ka Danda.',
    highlights: ['Vast 28 sq km alpine meadow at 11,800 ft', 'Summit Bakaria Top for 360-degree Garhwal snow line', 'Camp among silver birch and oak forests at Gui', 'Village culture at Raithal with traditional stone houses'],
    startPoint: 'Dehradun',
    endPoint: 'Dehradun',
    difficulty: 'Easy to Moderate',
    accommodationType: 'Alpine Tents & Raithal Village Lodge',
    transportationType: 'Private Cab (Dehradun to Raithal)',
    mealPlan: 'Daily Mountain Meals',
    routeSummary: ['Dehradun', 'Uttarkashi', 'Raithal', 'Gui Camps', 'Dayara Bugyal', 'Bakaria Top'],
    itinerary: [
      { day: 1, title: 'Dehradun to Raithal Village', description: 'Scenic drive via Uttarkashi to Raithal basecamp.', stay: 'Raithal Homestay', meals: 'Dinner' },
      { day: 2, title: 'Raithal to Gui Campsite', description: 'Trek through oak forests to Gui campsite (2,900 m).', stay: 'Gui Camps', meals: 'Breakfast, Lunch & Dinner' },
      { day: 3, title: 'Gui to Dayara Bugyal & Bakaria Top', description: 'Ascend to the vast meadow of Dayara Bugyal and summit Bakaria Top (3,600 m).', stay: 'Dayara Camps', meals: 'Breakfast, Lunch & Dinner' },
      { day: 4, title: 'Dayara Bugyal to Raithal Village', description: 'Trek down to Raithal, enjoy local village hospitality.', stay: 'Raithal Homestay', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Raithal to Dehradun Return', description: 'Drive back to Dehradun.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['4 Nights stay', 'All trek meals', 'Trek guide and permits', 'Transport Dehradun to Raithal and back'],
    exclusions: ['Personal items'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'Year round.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 28. Additional Dropdown Tour: Nag Tibba Trek (2N/3D)
  {
    id: 'nag-tibba-trek',
    title: 'Nag Tibba Weekend Summit Trek (2N/3D)',
    destination: 'Pantwari Village, Nag Tibba Base & Summit',
    duration: '2 Nights / 3 Days',
    days: 3,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'September to May',
    category: 'Trekking & Adventure',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop'],
    rating: 4.88,
    reviewsCount: 79,
    overview: 'The highest peak in the lesser Himalayan range of Garhwal at 9,915 ft. The ideal weekend trek from Dehradun or Delhi offering snow in winter, dense oak woods, and views of Swargarohini, Bandarpoonch, and Kedarnath.',
    highlights: ['Summit Nag Tibba Peak (3,022 m / 9,915 ft)', 'Visit the sacred Nag Devta ancient stone temple', 'Cozy overnight camping under starry skies', 'Perfect beginner-friendly weekend itinerary'],
    startPoint: 'Dehradun',
    endPoint: 'Dehradun',
    difficulty: 'Easy',
    accommodationType: 'Alpine Swiss Tents & Mountain Homestay',
    transportationType: 'Private Cab (Dehradun to Pantwari)',
    mealPlan: 'Trek Meals (Breakfast, Lunch & Dinner)',
    routeSummary: ['Dehradun', 'Mussoorie', 'Nainbagh', 'Pantwari', 'Nag Tibba Base', 'Summit'],
    itinerary: [
      { day: 1, title: 'Dehradun to Pantwari & Trek to Basecamp', description: 'Drive to Pantwari (85 km), trek 4.5 km to Nag Tibba basecamp.', stay: 'Basecamp Tents', meals: 'Dinner' },
      { day: 2, title: 'Summit Push to Nag Tibba & Return', description: 'Early morning summit trek to Nag Tibba Peak (9,915 ft), return to basecamp.', stay: 'Basecamp Tents', meals: 'Breakfast, Lunch & Dinner' },
      { day: 3, title: 'Trek to Pantwari & Drive to Dehradun', description: 'Descend to Pantwari and drive back to Dehradun by evening.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['2 Nights stay', 'Meals on trek', 'Trek leader and camping permits', 'Transport from Dehradun'],
    exclusions: ['Personal gear'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'September to May.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 29. Additional Dropdown Tour: Kuari Pass Trek (4N/5D)
  {
    id: 'kuari-pass-trek',
    title: 'Kuari Pass Lord Curzon Trail Trek (4N/5D)',
    destination: 'Joshimath, Dhak, Tali Top & Kuari Pass',
    duration: '4 Nights / 5 Days',
    days: 5,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'October to May (Winter Snow Trek)',
    category: 'Trekking & Adventure',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop'],
    rating: 4.95,
    reviewsCount: 67,
    overview: 'Follow the historic trail walked by Lord Curzon in 1905. Kuari Pass (12,516 ft) delivers the grandest close-up views of Mount Nanda Devi, Dronagiri, Kamet, and Hathi-Ghodi Parvat.',
    highlights: ['Panoramic front-row view of Mount Nanda Devi (7,816 m)', 'Cross Kuari Pass ridge at 12,516 ft', 'Camp at scenic meadows of Gulling and Tali Top', 'Pass through dense oak, rhododendron and birch forests'],
    startPoint: 'Rishikesh',
    endPoint: 'Rishikesh',
    difficulty: 'Moderate',
    accommodationType: 'Alpine Tents & Joshimath Hotel',
    transportationType: 'Private Cab (Rishikesh to Joshimath)',
    mealPlan: 'Daily Mountain Meals',
    routeSummary: ['Rishikesh', 'Joshimath', 'Dhak', 'Gulling', 'Tali Top', 'Kuari Pass'],
    itinerary: [
      { day: 1, title: 'Rishikesh to Joshimath', description: 'Drive along Alaknanda river to Joshimath.', stay: 'Joshimath Hotel', meals: 'Dinner' },
      { day: 2, title: 'Joshimath to Dhak & Trek to Gulling', description: 'Short drive to Dhak, trek to Gulling campsite (2,900 m).', stay: 'Gulling Camps', meals: 'Breakfast, Lunch & Dinner' },
      { day: 3, title: 'Gulling to Tali Forest Camp', description: 'Trek through oak forests to Tali Top (3,370 m).', stay: 'Tali Camps', meals: 'Breakfast, Lunch & Dinner' },
      { day: 4, title: 'Tali to Kuari Pass Summit & Return', description: 'Cross Kuari Pass (3,815 m / 12,516 ft) with surreal Nanda Devi vistas. Descend to Joshimath.', stay: 'Joshimath Hotel', meals: 'Breakfast, Lunch & Dinner' },
      { day: 5, title: 'Joshimath to Rishikesh Return', description: 'Drive back to Rishikesh for departure.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['4 Nights stay', 'Meals on trek', 'Trek leader and permits', 'Transport from Rishikesh'],
    exclusions: ['Personal items'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'October to May.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 30. Additional Dropdown Tour: Har Ki Dun Trek (6N/7D)
  {
    id: 'har-ki-dun-trek',
    title: 'Har Ki Dun Valley of Gods Cradle Trek (6N/7D)',
    destination: 'Sankri, Taluka, Osla, Har Ki Dun Valley & Jaundhar Glacier',
    duration: '6 Nights / 7 Days',
    days: 7,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'April to June & September to November',
    category: 'Trekking & Adventure',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'],
    rating: 4.93,
    reviewsCount: 52,
    overview: 'Har Ki Dun is a cradle-shaped amphitheatre valley steeped in Mahabharata mythology. Known as the path taken by the Pandavas to heaven (Swargarohini), it offers glacier views, ancient wooden temples, and pristine rivers.',
    highlights: ['Explore the legendary Valley of Gods at 11,700 ft', 'Views of Swargarohini peaks and Jaundhar Glacier', 'Visit 2,000-year-old wooden temples in Osla village', 'Trek along the gushing Supin River'],
    startPoint: 'Dehradun',
    endPoint: 'Dehradun',
    difficulty: 'Moderate',
    accommodationType: 'Alpine Tents & Village Homestays',
    transportationType: 'Private Cab',
    mealPlan: 'Daily Mountain Meals',
    routeSummary: ['Dehradun', 'Sankri', 'Taluka', 'Osla', 'Har Ki Dun', 'Seema'],
    itinerary: [
      { day: 1, title: 'Dehradun to Sankri', description: 'Drive to Sankri basecamp.', stay: 'Sankri Homestay', meals: 'Dinner' },
      { day: 2, title: 'Sankri to Taluka & Trek to Osla / Seema', description: 'Drive to Taluka, trek 12 km to Seema.', stay: 'Seema Camps', meals: 'Breakfast, Lunch & Dinner' },
      { day: 3, title: 'Seema to Har Ki Dun Valley', description: 'Trek to Har Ki Dun (3,566 m).', stay: 'Har Ki Dun Camps', meals: 'Breakfast, Lunch & Dinner' },
      { day: 4, title: 'Explore Har Ki Dun & Maninda Tal', description: 'Full day exploring high valley and glacier viewpoints.', stay: 'Har Ki Dun Camps', meals: 'Breakfast, Lunch & Dinner' },
      { day: 5, title: 'Har Ki Dun to Seema', description: 'Trek back to Seema.', stay: 'Seema Camps', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Seema to Taluka & Drive to Sankri', description: 'Trek to Taluka, drive to Sankri.', stay: 'Sankri Homestay', meals: 'Breakfast & Dinner' },
      { day: 7, title: 'Sankri to Dehradun Departure', description: 'Drive back to Dehradun.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['6 Nights stay', 'Meals daily', 'Trek permits and guides', 'Private cab'],
    exclusions: ['Personal porter fees'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'April-June & September-November.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 31. Additional Dropdown Tour: Dodital – Darwa Pass (4N/5D)
  {
    id: 'dodital-darwa-pass',
    title: 'Dodital & Darwa Pass Sacred Lake & High Ridge Trek (4N/5D)',
    destination: 'Uttarkashi, Sangamchatti, Agoda, Dodital & Darwa Pass',
    duration: '4 Nights / 5 Days',
    days: 5,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'April to June & September to November',
    category: 'Trekking & Adventure',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop'],
    rating: 4.9,
    reviewsCount: 31,
    overview: 'Revered as the birthplace of Lord Ganesha, Dodital is a tranquil freshwater lake surrounded by dense oak, pine, and deodar forests. Climb to Darwa Pass (13,615 ft) for grand panoramas of the Bandarpoonch range.',
    highlights: ['Camp beside the sacred emerald waters of Dodital', 'Summit Darwa Pass at 13,615 ft', 'Home of the Himalayan Golden Trout fish', 'Dense rhododendron and pine forest walking trails'],
    startPoint: 'Dehradun / Haridwar',
    endPoint: 'Dehradun / Haridwar',
    difficulty: 'Moderate',
    accommodationType: 'Lakeside Camping & Forest Rest Houses',
    transportationType: 'Private Cab (Dehradun to Sangamchatti)',
    mealPlan: 'Daily Mountain Meals',
    routeSummary: ['Dehradun', 'Uttarkashi', 'Sangamchatti', 'Bebra', 'Dodital', 'Darwa Pass'],
    itinerary: [
      { day: 1, title: 'Dehradun to Uttarkashi / Sangamchatti', description: 'Drive to Uttarkashi and Sangamchatti, trek 4 km to Bebra.', stay: 'Bebra Camps', meals: 'Dinner' },
      { day: 2, title: 'Bebra to Dodital (3,024 m)', description: 'Trek 12 km through oak forests to Dodital lake.', stay: 'Dodital Camps', meals: 'Breakfast, Lunch & Dinner' },
      { day: 3, title: 'Dodital to Darwa Pass Summit (4,150 m)', description: 'Steep climb to Darwa Pass for Bandarpoonch views. Return to Dodital.', stay: 'Dodital Camps', meals: 'Breakfast, Lunch & Dinner' },
      { day: 4, title: 'Dodital to Sangamchatti & Uttarkashi', description: 'Trek down to Sangamchatti, drive to Uttarkashi.', stay: 'Uttarkashi Hotel', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Uttarkashi to Dehradun Departure', description: 'Drive down to Dehradun.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['4 Nights stay', 'Meals daily', 'Trek permits and guides', 'Private cab'],
    exclusions: ['Fishing permits if required', 'Personal items'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'April to June & September to November.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 32. Additional Dropdown Tour: Kausani – Baijnath – Binsar (4N/5D)
  {
    id: 'kausani-baijnath-binsar',
    title: 'Kausani, Baijnath & Binsar Valley Heritage (4N/5D)',
    destination: 'Kausani, Baijnath Temple, Binsar Wildlife Sanctuary & Almora',
    duration: '4 Nights / 5 Days',
    days: 5,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Year Round',
    category: 'Kumaon',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f841807d?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1582650625119-3a31f841807d?q=80&w=800&auto=format&fit=crop'],
    rating: 4.89,
    reviewsCount: 40,
    overview: 'Immerse yourself in Kumaon’s cultural and natural crown jewels: 12th-century stone shrines of Baijnath, the 300-km Himalayan horizon of Kausani, and the bird-rich sanctuary forests of Binsar.',
    highlights: ['300 km Himalayan snow peak panorama from Kausani', '12th-century stone temple cluster of Baijnath', 'Zero Point walk in Binsar Wildlife Sanctuary', 'Tea garden tours and quiet oak trails'],
    startPoint: 'Kathgodam',
    endPoint: 'Kathgodam',
    difficulty: 'Easy',
    accommodationType: 'Heritage Resorts & Forest Stays',
    transportationType: 'Private AC Mountain Vehicle',
    mealPlan: 'Daily Breakfast & Dinner',
    routeSummary: ['Kathgodam', 'Kausani', 'Baijnath', 'Binsar Sanctuary', 'Kathgodam'],
    itinerary: [
      { day: 1, title: 'Kathgodam to Kausani', description: 'Drive to Kausani, evening tea garden walk.', stay: 'Kausani Hotel', meals: 'Dinner' },
      { day: 2, title: 'Baijnath Temple & Kausani Sights', description: 'Visit ancient Baijnath temples, Anasakti Ashram, and enjoy sunset over Trishul.', stay: 'Kausani Hotel', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Kausani to Binsar Wildlife Sanctuary', description: 'Scenic drive to Binsar. Check in to sanctuary estate.', stay: 'Binsar Resort', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Binsar Zero Point & Birding Walk', description: 'Hike to Zero Point for 360-degree mountain views.', stay: 'Binsar Resort', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Binsar to Kathgodam Departure', description: 'Descend to Kathgodam.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['4 Nights stay', 'Meals daily', 'Private transport', 'All tolls'],
    exclusions: ['Sanctuary vehicle entry fee', 'Personal items'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'Year round.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 33. Additional Dropdown Tour: Almora – Binsar – Jageshwar (4N/5D)
  {
    id: 'almora-binsar-jageshwar',
    title: 'Almora, Binsar & Jageshwar Sacred Deodar Woods (4N/5D)',
    destination: 'Almora, Kasar Devi, Binsar & Jageshwar Dham',
    duration: '4 Nights / 5 Days',
    days: 5,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Year Round',
    category: 'Kumaon',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'],
    rating: 4.92,
    reviewsCount: 48,
    overview: 'A tranquil journey through the sacred deodar groves of Jageshwar Dham, the spiritual geomagnetic resonance of Kasar Devi, and the wildlife canopy of Binsar.',
    highlights: ['Visit 124 Jyotirlinga stone temples at Jageshwar Dham', 'Meditate at Kasar Devi Temple on Crank’s Ridge', 'Walk to Zero Point in Binsar Wildlife Sanctuary', 'Authentic Kumaoni cuisine and local handicrafts'],
    startPoint: 'Kathgodam',
    endPoint: 'Kathgodam',
    difficulty: 'Easy',
    accommodationType: 'Boutique Forest Resorts',
    transportationType: 'Private AC Mountain Vehicle',
    mealPlan: 'Daily Breakfast & Dinner',
    routeSummary: ['Kathgodam', 'Almora', 'Jageshwar Dham', 'Binsar', 'Kathgodam'],
    itinerary: [
      { day: 1, title: 'Kathgodam to Almora', description: 'Drive to Almora, visit Kasar Devi.', stay: 'Almora Resort', meals: 'Dinner' },
      { day: 2, title: 'Jageshwar Dham Pilgrimage', description: 'Full day exploring Jageshwar temple complex.', stay: 'Almora / Jageshwar', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Almora to Binsar Sanctuary', description: 'Drive into Binsar oak sanctuary.', stay: 'Binsar Resort', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Binsar Wilderness Trail', description: 'Forest birding and Zero Point panorama.', stay: 'Binsar Resort', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Binsar to Kathgodam Departure', description: 'Drive back to Kathgodam.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['4 Nights stay', 'Meals daily', 'Private transport', 'All tolls'],
    exclusions: ['Personal expenses'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'Year round.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 34. Additional Dropdown Tour: Pithoragarh – Munsiyari (5N/6D)
  {
    id: 'pithoragarh-munsiyari',
    title: 'Pithoragarh Soar Valley & Munsiyari Alpine Circuit (5N/6D)',
    destination: 'Kathgodam, Pithoragarh, Dharchula, Munsiyari & Chaukori',
    duration: '5 Nights / 6 Days',
    days: 6,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'March to June & September to November',
    category: 'Kumaon',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop'],
    rating: 4.9,
    reviewsCount: 35,
    overview: 'Explore the Eastern Kumaon borderlands. From the historic Chand dynasty fort in the bowl-shaped Soar valley of Pithoragarh, to the dramatic Panchachuli peaks of Munsiyari.',
    highlights: ['Pithoragarh Fort & Chandak viewpoint', 'Unmatched views of Panchachuli Peaks in Munsiyari', 'Birthi Falls and Kalamuni Pass crossing', 'Chaukori tea gardens overlooking Nanda Devi'],
    startPoint: 'Kathgodam',
    endPoint: 'Kathgodam',
    difficulty: 'Moderate',
    accommodationType: 'Heritage Stays & Mountain Resorts',
    transportationType: 'Private AC Mountain Vehicle',
    mealPlan: 'Daily Breakfast & Dinner',
    routeSummary: ['Kathgodam', 'Pithoragarh', 'Munsiyari', 'Chaukori', 'Almora'],
    itinerary: [
      { day: 1, title: 'Kathgodam to Pithoragarh', description: 'Drive via Ghat to Pithoragarh Soar valley.', stay: 'Pithoragarh Hotel', meals: 'Dinner' },
      { day: 2, title: 'Pithoragarh Sights & Drive to Munsiyari', description: 'Visit Pithoragarh fort, drive over Kalamuni pass to Munsiyari.', stay: 'Munsiyari Resort', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Munsiyari Exploration', description: 'Visit Darkot village, Thamri Kund, and enjoy Panchachuli sunset.', stay: 'Munsiyari Resort', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Munsiyari to Chaukori', description: 'Drive via Birthi Falls to the tea gardens of Chaukori.', stay: 'Chaukori Hotel', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Chaukori to Almora', description: 'Scenic drive to Almora, evening market walk.', stay: 'Almora Resort', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Almora to Kathgodam Departure', description: 'Descend to Kathgodam.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['5 Nights stay', 'Meals daily', 'Private transport', 'All tolls'],
    exclusions: ['Personal items'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'March to June & September to November.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 35. Additional Dropdown Tour: Chaukori – Patal Bhuvaneshwar (4N/5D)
  {
    id: 'chaukori-patal-bhuvaneshwar',
    title: 'Chaukori & Patal Bhuvaneshwar Mystic Caves & Peaks (4N/5D)',
    destination: 'Kathgodam, Almora, Chaukori & Patal Bhuvaneshwar',
    duration: '4 Nights / 5 Days',
    days: 5,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Year Round',
    category: 'Kumaon',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop'],
    rating: 4.88,
    reviewsCount: 37,
    overview: 'A mystical getaway blending tea gardens with the subterranean limestone marvel of Patal Bhuvaneshwar cave temple.',
    highlights: ['Descend into Patal Bhuvaneshwar limestone cavern', 'Panoramic tea garden vistas of Nanda Devi and Trishul in Chaukori', 'Visit Kasar Devi and Jageshwar temple clusters', 'Peaceful, unhurried mountain pace'],
    startPoint: 'Kathgodam',
    endPoint: 'Kathgodam',
    difficulty: 'Easy to Moderate',
    accommodationType: 'Valley Resorts & Tea Garden Cottages',
    transportationType: 'Private AC Mountain Cab',
    mealPlan: 'Daily Breakfast & Dinner',
    routeSummary: ['Kathgodam', 'Almora', 'Chaukori', 'Patal Bhuvaneshwar', 'Kathgodam'],
    itinerary: [
      { day: 1, title: 'Kathgodam to Almora', description: 'Drive to Almora, evening visit to Kasar Devi.', stay: 'Almora Hotel', meals: 'Dinner' },
      { day: 2, title: 'Almora to Chaukori', description: 'Drive via Berinag to Chaukori tea gardens.', stay: 'Chaukori Resort', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Patal Bhuvaneshwar Cave Exploration', description: 'Excursion to the subterranean limestone temple of Patal Bhuvaneshwar.', stay: 'Chaukori Resort', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Chaukori to Binsar / Almora', description: 'Drive back to Binsar wildlife ridge.', stay: 'Binsar Hotel', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Departure to Kathgodam', description: 'Descend to Kathgodam.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['4 Nights stay', 'Meals daily', 'Private transport', 'All tolls'],
    exclusions: ['Cave entry and guide fees'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'Year round.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 36. Additional Dropdown Tour: Kanatal – Dhanaulti – Tehri (3N/4D)
  {
    id: 'kanatal-dhanaulti-tehri',
    title: 'Kanatal, Dhanaulti & Tehri Lake Aqua-Pine Escape (3N/4D)',
    destination: 'Dehradun, Dhanaulti, Kanatal & Tehri Lake',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Year Round',
    category: 'Offbeat Uttarakhand',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1605649487212-47bdab064df8?q=80&w=800&auto=format&fit=crop'],
    rating: 4.86,
    reviewsCount: 42,
    overview: 'A refreshing mountain loop uniting the deodars of Dhanaulti, the quiet village homestays of Kanatal, and jet skiing / water sports on the emerald reservoir of Tehri Dam.',
    highlights: ['Water sports and speed boating on Tehri Lake', 'Deodar forest walks at Dhanaulti Eco Park', 'Ropeway to Surkanda Devi Temple (3,030 m)', 'Pine valley sunset views from Kanatal'],
    startPoint: 'Dehradun / Delhi',
    endPoint: 'Dehradun / Delhi',
    difficulty: 'Easy',
    accommodationType: 'Pine View Cottages & Luxury Camps',
    transportationType: 'Private AC Cab',
    mealPlan: 'Daily Breakfast & Dinner',
    routeSummary: ['Dehradun', 'Mussoorie', 'Dhanaulti', 'Kanatal', 'Tehri Lake'],
    itinerary: [
      { day: 1, title: 'Dehradun to Dhanaulti', description: 'Drive up to Dhanaulti, visit Eco Park.', stay: 'Dhanaulti Resort', meals: 'Dinner' },
      { day: 2, title: 'Surkanda Devi & Kanatal Trails', description: 'Trek/ropeway to Surkanda Devi, drive to Kanatal, walk Kaudia forest.', stay: 'Kanatal Camp', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Tehri Lake Water Adventure', description: 'Day trip to Tehri Lake for speed boating, banana rides, and jet skiing.', stay: 'Kanatal / Tehri Resort', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Departure to Dehradun', description: 'Drive down to Dehradun.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['3 Nights stay', 'Meals daily', 'Private transport', 'All tolls'],
    exclusions: ['Water sports charges', 'Personal items'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'Year round.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 37. Additional Dropdown Tour: Khirsu – Pauri – Lansdowne (4N/5D)
  {
    id: 'khirsu-pauri-lansdowne',
    title: 'Khirsu, Pauri & Lansdowne Serene Pine Ridge (4N/5D)',
    destination: 'Kotdwar, Lansdowne, Khirsu & Pauri',
    duration: '4 Nights / 5 Days',
    days: 5,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Year Round',
    category: 'Offbeat Uttarakhand',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'],
    rating: 4.84,
    reviewsCount: 29,
    overview: 'Experience the quiet heart of Garhwal: the colonial discipline of Lansdowne, the untouched apple hamlet of Khirsu overlooking 300 snow peaks, and Pauri’s sunset slopes.',
    highlights: ['Panoramic view of 300+ Himalayan peaks from Khirsu', 'Quiet colonial walks in Lansdowne and Bhulla Tal lake', 'Visit Kyunkaleshwar Mahadev ancient temple in Pauri', 'Dense pine and oak forest hiking trails'],
    startPoint: 'Kotdwar / Dehradun',
    endPoint: 'Kotdwar / Dehradun',
    difficulty: 'Easy',
    accommodationType: 'Forest Rest Houses & Boutique Cottages',
    transportationType: 'Private AC Mountain Vehicle',
    mealPlan: 'Daily Breakfast & Dinner',
    routeSummary: ['Kotdwar', 'Lansdowne', 'Khirsu', 'Pauri', 'Devprayag'],
    itinerary: [
      { day: 1, title: 'Drive to Lansdowne', description: 'Scenic drive to Lansdowne, visit St. John’s church.', stay: 'Lansdowne Hotel', meals: 'Dinner' },
      { day: 2, title: 'Lansdowne Sights', description: 'Explore Tip-in-Top, Bhulla Tal, and Garhwal Rifles Museum.', stay: 'Lansdowne Hotel', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Lansdowne to Khirsu', description: 'Drive to the tranquil apple village of Khirsu.', stay: 'Khirsu Resort', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Khirsu & Pauri Sights', description: 'Visit Kyunkaleshwar Temple, Kandoliya park, and sunset viewpoint.', stay: 'Khirsu / Pauri Hotel', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Departure via Devprayag', description: 'Drive via Devprayag confluence to Dehradun/Rishikesh.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['4 Nights stay', 'Meals daily', 'Private transport', 'All tolls'],
    exclusions: ['Personal items'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'Year round.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 38. Additional Dropdown Tour: Peora – Mukteshwar – Ramgarh (4N/5D)
  {
    id: 'peora-mukteshwar-ramgarh',
    title: 'Peora, Mukteshwar & Ramgarh Fruit Orchard Sanctuary (4N/5D)',
    destination: 'Kathgodam, Peora, Ramgarh & Mukteshwar',
    duration: '4 Nights / 5 Days',
    days: 5,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Year Round',
    category: 'Offbeat Uttarakhand',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f841807d?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1582650625119-3a31f841807d?q=80&w=800&auto=format&fit=crop'],
    rating: 4.9,
    reviewsCount: 33,
    overview: 'Immerse in the peaceful village life of Peora—famed for its eco-tourism and birdlife—surrounded by peach, plum, and apricot orchards of Ramgarh, and the dramatic cliffs of Mukteshwar.',
    highlights: ['Stay in rustic stone cottages in peaceful Peora village', 'Wander organic fruit orchards in Ramgarh (Kumaon’s fruit bowl)', 'Sunset over Trishul & Nanda Devi at Chauli Ki Jali', 'Exceptional birdwatching and village walking trails'],
    startPoint: 'Kathgodam',
    endPoint: 'Kathgodam',
    difficulty: 'Easy',
    accommodationType: 'Eco Homestays & Boutique Orchard Lodges',
    transportationType: 'Private AC Cab',
    mealPlan: 'Organic Home-Cooked Kumaoni Breakfast & Dinner',
    routeSummary: ['Kathgodam', 'Ramgarh', 'Peora Village', 'Mukteshwar', 'Kathgodam'],
    itinerary: [
      { day: 1, title: 'Kathgodam to Ramgarh', description: 'Drive through pine country to Ramgarh fruit orchards.', stay: 'Ramgarh Lodge', meals: 'Dinner' },
      { day: 2, title: 'Ramgarh to Peora Village', description: 'Short drive to quiet Peora village, walk through pine needles and terraced farms.', stay: 'Peora Homestay', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Peora to Mukteshwar', description: 'Drive to Mukteshwar, visit 350-year-old temple and Chauli Ki Jali cliff.', stay: 'Mukteshwar Resort', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Mukteshwar Orchard Day', description: 'Explore local jam cooperatives and scenic ridge trails.', stay: 'Mukteshwar Resort', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Departure to Kathgodam', description: 'Drive down to Kathgodam.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['4 Nights stay', 'Meals daily', 'Private transport', 'All tolls'],
    exclusions: ['Personal shopping'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'Year round.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 39. Additional Dropdown Tour: Pangot – Kilbury (3N/4D)
  {
    id: 'pangot-kilbury',
    title: 'Pangot & Kilbury Bird Sanctuary & Oak Ridge (3N/4D)',
    destination: 'Kathgodam, Nainital & Pangot Bird Sanctuary',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'October to June',
    category: 'Wildlife & Nature',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'],
    rating: 4.88,
    reviewsCount: 38,
    overview: 'A world-famous birders paradise just 15 km above Nainital. Over 250 species of Himalayan birds inhabit the dense oak and rhododendron sanctuary of Kilbury and Pangot.',
    highlights: ['Spot rare birds: Cheer Pheasant, Koklass Pheasant, Himalayan Griffon', 'Quiet forest lodges surrounded by ancient oak canopies', 'Trek to Naina Peak for view of the Kumaon snow line', 'Excursion to Naini Lake'],
    startPoint: 'Kathgodam',
    endPoint: 'Kathgodam',
    difficulty: 'Easy',
    accommodationType: 'Birding Eco Lodges & Wooden Chalets',
    transportationType: 'Private AC Mountain Vehicle',
    mealPlan: 'Daily Breakfast & Dinner',
    routeSummary: ['Kathgodam', 'Nainital', 'Kilbury Sanctuary', 'Pangot'],
    itinerary: [
      { day: 1, title: 'Kathgodam to Pangot via Nainital', description: 'Drive up past Nainital into the quiet woods of Pangot.', stay: 'Pangot Lodge', meals: 'Dinner' },
      { day: 2, title: 'Kilbury Birding Trails', description: 'Guided morning and afternoon bird walks with expert naturalist.', stay: 'Pangot Lodge', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Naina Peak Hike & Naini Lake Boating', description: 'Hike to Naina Peak, visit Naini Lake in afternoon.', stay: 'Pangot / Nainital Hotel', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Departure to Kathgodam', description: 'Drive down to Kathgodam for your train.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['3 Nights stay', 'Meals daily', 'Naturalist guide for 1 trail', 'Private transport'],
    exclusions: ['Camera fees', 'Personal gear'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'October to June.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 40. Additional Dropdown Tour: Jim Corbett National Park (3N/4D)
  {
    id: 'jim-corbett-national-park',
    title: 'Jim Corbett National Park Classic Tiger Safari (3N/4D)',
    destination: 'Ramnagar, Jim Corbett Safari Zones & Kosi River',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'October to June',
    category: 'Wildlife & Nature',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f841807d?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1582650625119-3a31f841807d?q=80&w=800&auto=format&fit=crop'],
    rating: 4.94,
    reviewsCount: 165,
    overview: 'India’s oldest national park. Set out on two open 4x4 Gypsy safaris in famous safari zones (Bijrani / Jhirna / Dhela) accompanied by certified trackers to witness the Royal Bengal Tiger in its natural habitat.',
    highlights: ['Two dedicated 4x4 open Gypsy safaris in Corbett core zones', 'Track Bengal tigers, Asian elephants, and over 600 bird species', 'Stay at a luxury wildlife resort along the pebble banks of Kosi River', 'Visit Garjia Devi temple and Jim Corbett’s heritage house museum'],
    startPoint: 'Delhi / Ramnagar / Kathgodam',
    endPoint: 'Delhi / Ramnagar / Kathgodam',
    difficulty: 'Easy',
    accommodationType: 'Luxury Wildlife Jungle Resort with Swimming Pool',
    transportationType: 'Private AC Cab + 4x4 Open Safari Gypsy',
    mealPlan: 'Daily Buffet Breakfast, Lunch & Dinner',
    routeSummary: ['Delhi / Kathgodam', 'Ramnagar', 'Corbett Core Safari Zones', 'Kosi River'],
    itinerary: [
      { day: 1, title: 'Arrival in Corbett – Jungle Resort Check-in', description: 'Pick up and check in to your resort. Afternoon nature walk along Kosi River.', stay: 'Corbett Luxury Resort', meals: 'Lunch & Dinner' },
      { day: 2, title: 'Morning Safari & Corbett Waterfall', description: 'Early morning 4x4 Gypsy safari in Bijrani/Jhirna zone. Afternoon visit to Corbett Waterfall and Garjia Temple.', stay: 'Corbett Luxury Resort', meals: 'Breakfast, Lunch & Dinner' },
      { day: 3, title: 'Afternoon Safari & Wildlife Documentary', description: 'Second game safari in afternoon. Evening wildlife documentary and bonfire.', stay: 'Corbett Luxury Resort', meals: 'Breakfast, Lunch & Dinner' },
      { day: 4, title: 'Corbett to Delhi / Kathgodam Departure', description: 'Breakfast and transfer to Delhi or Kathgodam.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['3 Nights luxury resort stay', 'All meals included (AP Plan)', '2 Open 4x4 Gypsy safaris with permits and guides', 'Private transfers'],
    exclusions: ['Personal drinks, tips, laundry'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'October to June.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 41. Additional Dropdown Tour: Rajaji National Park – Rishikesh (3N/4D)
  {
    id: 'rajaji-national-park-rishikesh',
    title: 'Rajaji National Park & Rishikesh Wildlife Retreat (3N/4D)',
    destination: 'Chilla Range, Rajaji Tiger Reserve, Haridwar & Rishikesh',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'November to June',
    category: 'Wildlife & Nature',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop'],
    rating: 4.86,
    reviewsCount: 39,
    overview: 'Nestled in the Shivalik foothills between Haridwar and Dehradun, Rajaji is famous for its wild elephant herds, leopards, tigers, and rich riverine habitats.',
    highlights: ['Open Gypsy safari in Chilla Range of Rajaji Tiger Reserve', 'Spot herds of wild Asiatic elephants, spotted deer, and hornbills', 'Combine with Ganga Aarti and river rafting in nearby Rishikesh', 'Eco jungle resort stays on the edge of the Shivalik forest'],
    startPoint: 'Haridwar / Dehradun',
    endPoint: 'Haridwar / Dehradun',
    difficulty: 'Easy',
    accommodationType: 'Eco Wildlife Resort & Jungle Cottages',
    transportationType: 'Private AC Cab + Safari Gypsy',
    mealPlan: 'Daily Breakfast & Dinner',
    routeSummary: ['Haridwar', 'Chilla Range Rajaji', 'Rishikesh', 'Triveni Ghat'],
    itinerary: [
      { day: 1, title: 'Arrival & Jungle Resort Check-in', description: 'Arrive in Haridwar/Rishikesh and transfer to jungle resort near Chilla.', stay: 'Rajaji Eco Resort', meals: 'Dinner' },
      { day: 2, title: 'Rajaji Jungle Safari & Forest Trails', description: 'Morning 4x4 open Gypsy safari in Chilla range. Afternoon birdwatching.', stay: 'Rajaji Eco Resort', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Rishikesh Rafting & Evening Aarti', description: 'Short drive to Rishikesh. River rafting and Parmarth Niketan evening Ganga Aarti.', stay: 'Rishikesh Resort', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Departure', description: 'Breakfast and drop at Haridwar or Dehradun.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['3 Nights stay', 'Meals daily', '1 Rajaji safari with permits and guide', 'Private cab'],
    exclusions: ['Personal expenses'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'November to June.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 42. Additional Dropdown Tour: Nainital – Pangot – Kilbury (3N/4D)
  {
    id: 'nainital-pangot-kilbury',
    title: 'Nainital, Pangot & Kilbury Nature & Avian Circuit (3N/4D)',
    destination: 'Nainital, Kilbury Sanctuary & Pangot',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Year Round',
    category: 'Wildlife & Nature',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f841807d?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1582650625119-3a31f841807d?q=80&w=800&auto=format&fit=crop'],
    rating: 4.89,
    reviewsCount: 34,
    overview: 'A scenic nature getaway combining the emerald waters of Naini Lake with the dense oak and bird sanctuary forests of Kilbury and Pangot.',
    highlights: ['Boating on Naini Lake and visit Naina Devi temple', 'Guided bird walk in Kilbury forest sanctuary', 'Quiet mountain chalets in Pangot', 'Naina Peak panoramic view of the Himalayas'],
    startPoint: 'Kathgodam',
    endPoint: 'Kathgodam',
    difficulty: 'Easy',
    accommodationType: 'Lake View Hotel & Pangot Nature Lodge',
    transportationType: 'Private AC Mountain Vehicle',
    mealPlan: 'Daily Breakfast & Dinner',
    routeSummary: ['Kathgodam', 'Nainital', 'Kilbury', 'Pangot'],
    itinerary: [
      { day: 1, title: 'Kathgodam to Nainital', description: 'Drive to Nainital, evening boat ride on Naini Lake.', stay: 'Nainital Hotel', meals: 'Dinner' },
      { day: 2, title: 'Nainital to Pangot via Kilbury', description: 'Scenic ascent into Kilbury sanctuary, guided forest walk, stay in Pangot.', stay: 'Pangot Lodge', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Pangot Birding & Naina Peak Trail', description: 'Morning bird trail and hike to Naina Peak for mountain views.', stay: 'Pangot Lodge', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Departure to Kathgodam', description: 'Descend to Kathgodam.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['3 Nights stay', 'Meals daily', 'Private transport', 'All tolls'],
    exclusions: ['Personal items'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'Year round.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  },

  // 43. Additional Dropdown Tour: Binsar Wildlife Sanctuary (3N/4D)
  {
    id: 'binsar-wildlife-sanctuary',
    title: 'Binsar Wildlife Sanctuary Forest Crown Retreat (3N/4D)',
    destination: 'Kathgodam, Almora & Binsar Sanctuary',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Year Round',
    category: 'Wildlife & Nature',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'],
    rating: 4.91,
    reviewsCount: 45,
    overview: 'Stay inside the protected wilderness of Binsar Wildlife Sanctuary at 2,400 meters. Surrounded by ancient oak and rhododendron canopies, Binsar is renowned for Zero Point—giving an unrivaled 300-km view of Chaukhamba, Trishul, Nanda Devi, Shivling, and Panchachuli.',
    highlights: ['Zero Point sunrise hike with 300 km uninterrupted Himalayan snow views', 'Over 200 species of birds and barking deer, leopards, and flying squirrels', 'Heritage British forest estate and eco lodge stays', 'Visit the ancient Kasar Devi and Bineshwar Mahadev temples'],
    startPoint: 'Kathgodam',
    endPoint: 'Kathgodam',
    difficulty: 'Easy',
    accommodationType: 'Sanctuary Forest Cottages & KMVN Rest House',
    transportationType: 'Private AC Mountain Vehicle',
    mealPlan: 'Daily Breakfast & Kumaoni Dinner',
    routeSummary: ['Kathgodam', 'Bhowali', 'Almora', 'Binsar Sanctuary Gate', 'Zero Point'],
    itinerary: [
      { day: 1, title: 'Kathgodam to Binsar Sanctuary', description: 'Ascend through Almora to the gate of Binsar Wildlife Sanctuary. Check into your forest lodge.', stay: 'Binsar Forest Lodge', meals: 'Dinner' },
      { day: 2, title: 'Zero Point Sunrise & Nature Hike', description: 'Early morning hike to Zero Point for jaw-dropping panorama. Afternoon forest bird walk.', stay: 'Binsar Forest Lodge', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Kasar Devi & Bineshwar Temple', description: 'Visit Bineshwar temple inside the forest and Kasar Devi temple on Crank’s Ridge.', stay: 'Binsar Forest Lodge', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Binsar to Kathgodam Departure', description: 'Drive down to Kathgodam.', stay: 'Departure', meals: 'Breakfast' }
    ],
    inclusions: ['3 Nights stay inside sanctuary', 'Meals daily', 'Sanctuary entry permits', 'Private cab'],
    exclusions: ['Personal items'],
    thingsToCarry: STANDARD_THINGS_TO_CARRY,
    importantInfo: STANDARD_IMPORTANT_INFO,
    bestTimeToVisit: 'Year round.',
    cancellationPolicy: STANDARD_CANCELLATION_POLICY
  }
];

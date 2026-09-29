export interface DestinationQuickFacts {
  altitude: string;
  duration: string;
  bestSeason: string;
  avgTemp: string;
  nearestAirport: string;
  nearestRailhead: string;
  region: string;
  travelVibe: string;
}

export interface DestinationActivity {
  title: string;
  category: 'Adventure' | 'Spiritual' | 'Sightseeing' | 'Nature & Trails' | 'Culture & Food';
  desc: string;
  duration: string;
}

export interface SeasonInfo {
  season: string;
  months: string;
  temp: string;
  desc: string;
  tag: string;
  isPopular: boolean;
}

export interface ItineraryDay {
  day: number;
  title: string;
  highlights: string[];
}

export interface SuggestedItinerary {
  id: string;
  title: string;
  duration: string;
  idealFor: string;
  days: ItineraryDay[];
}

export interface NearbyPlace {
  name: string;
  distance: string;
  desc: string;
  path: string;
  image: string;
}

export interface DestinationFAQ {
  question: string;
  answer: string;
}

export interface DestinationReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  tripType: string;
  review: string;
}

export interface DestinationExtraData {
  quickFacts: DestinationQuickFacts;
  activities: DestinationActivity[];
  seasons: SeasonInfo[];
  itineraries: SuggestedItinerary[];
  nearby: NearbyPlace[];
  faqs: DestinationFAQ[];
  reviews: DestinationReview[];
}

// Destination-specific curated databases with contextual fallbacks
export const DESTINATION_DETAILS_MAP: Record<string, Partial<DestinationExtraData>> = {
  kedarnath: {
    quickFacts: {
      altitude: '3,584 m (11,759 ft)',
      duration: '3 - 5 Days',
      bestSeason: 'May to June & Sept to Oct',
      avgTemp: '5°C to 18°C (Summer) / Below 0°C (Winter)',
      nearestAirport: 'Jolly Grant, Dehradun (238 km)',
      nearestRailhead: 'Rishikesh (216 km) / Haridwar (240 km)',
      region: 'Garhwal Himalayas (Rudraprayag)',
      travelVibe: 'Pilgrimage, High-Altitude Devotion, Sacred Treks'
    },
    activities: [
      { title: 'Morning & Evening Temple Aarti', category: 'Spiritual', desc: 'Participate in the soulful chanting and sacred Shiva rituals amidst echoing conches and alpine peaks.', duration: '1 - 2 Hours' },
      { title: 'Bhairavnath Temple Trek', category: 'Nature & Trails', desc: 'A short 500m uphill hike offering a 360-degree panoramic vista of Kedarnath temple and Kedar Dome.', duration: '1 Hour' },
      { title: 'Vasuki Tal Glacial Expedition', category: 'Adventure', desc: 'A challenging high-altitude glacial lake trek at 4,135 meters where sacred Brahma Kamal flowers bloom.', duration: 'Half Day' },
      { title: 'Gaurikund Hot Springs Dip', category: 'Culture & Food', desc: 'Bathe in the natural medicinal sulphur hot springs believed to purify the body before the sacred pilgrimage.', duration: '1 Hour' }
    ],
    seasons: [
      { season: 'Summer', months: 'May to June', temp: '8°C - 18°C', desc: 'Temple doors open with grand celebrations. Clear skies, pleasant days, ideal for trekking and helicopter flights.', tag: 'Best for Yatra', isPopular: true },
      { season: 'Monsoon', months: 'July to August', temp: '10°C - 15°C', desc: 'Lush greenery along Mandakini valley, but subject to rain and landslide alerts. Travel with caution.', tag: 'Low Season', isPopular: false },
      { season: 'Autumn', months: 'Sept to Oct', temp: '2°C - 12°C', desc: 'Crystal-clear post-monsoon Himalayan views, crisp air, and peaceful darshan before winter closure.', tag: 'Clear Mountain Views', isPopular: true }
    ],
    itineraries: [
      {
        id: 'express',
        title: 'Express Heli Yatra',
        duration: '2 Days / 1 Night',
        idealFor: 'Families & Senior Citizens',
        days: [
          { day: 1, title: 'Arrival at Phata / Guptkashi & Helicopter to Kedarnath', highlights: ['Scenic flight over Mandakini valley', 'VIP Evening Darshan at Kedarnath Temple', 'Overnight stay in alpine cottages'] },
          { day: 2, title: 'Morning Bhasma Aarti & Return Flight', highlights: ['Early morning temple rituals', 'Return flight to Phata base', 'Scenic drive back to Rishikesh/Haridwar'] }
        ]
      },
      {
        id: 'trekker',
        title: 'Classic Walking Yatra',
        duration: '4 Days / 3 Nights',
        idealFor: 'Devotees & Trek Enthusiasts',
        days: [
          { day: 1, title: 'Haridwar / Rishikesh to Guptkashi / Sonprayag', highlights: ['Drive via Devprayag & Rudraprayag confluences', 'Evening briefing and registration check'] },
          { day: 2, title: 'Sonprayag to Gaurikund & Trek to Kedarnath (16 km)', highlights: ['Trek alongside Mandakini river', 'Jungle Chatti & Bheem Bali stops', 'Evening arrival and temple lighting'] },
          { day: 3, title: 'Sacred Darshan & Trek Down to Sonprayag', highlights: ['Early morning temple prayer', 'Bhairavnath temple visit', 'Descent to Gaurikund & night stay in Guptkashi'] },
          { day: 4, title: 'Guptkashi to Haridwar / Dehradun Departure', highlights: ['Riverside breakfast', 'Drop-off at railway station / airport with divine memories'] }
        ]
      }
    ],
    nearby: [
      { name: 'Badrinath', distance: '218 km', desc: 'Sacred seat of Lord Vishnu along the Alaknanda river.', path: '/destinations/badrinath', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop' },
      { name: 'Chopta', distance: '73 km', desc: 'Mini Switzerland of Uttarakhand and base for Tungnath.', path: '/destinations/chopta', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop' },
      { name: 'Rishikesh', distance: '216 km', desc: 'Yoga capital and gateway to Himalayan pilgrim trails.', path: '/destinations/rishikesh', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop' }
    ],
    faqs: [
      { question: 'Is prior biometric registration mandatory for Kedarnath?', answer: 'Yes, biometric registration via the official Uttarakhand Tourism portal is mandatory for all pilgrims before boarding helicopters or beginning the trek.' },
      { question: 'What is the trek distance from Gaurikund to Kedarnath?', answer: 'The trek distance is approximately 16 kilometres from Gaurikund. Well-paved stone paths, pony services, palanquins (doli), and helicopter options are available.' },
      { question: 'What kind of warm clothing should I pack?', answer: 'Even in peak summer (May-June), night temperatures drop close to freezing. Carry thermal inners, windproof fleece jackets, gloves, woollen caps, and sturdy waterproof trekking boots.' },
      { question: 'Are medical and ATM facilities available at the shrine?', answer: 'Emergency medical centers with oxygen support operate along the trail and near the temple. While an ATM exists at Kedarnath, cash shortages are frequent, so carry sufficient cash from Guptkashi.' }
    ],
    reviews: [
      { id: '1', author: 'Rajesh & Suman Sharma', location: 'Ahmedabad', rating: 5, date: 'June 2025', tripType: 'Family Pilgrimage', review: 'UK Yatra arranged our helicopter tickets and GMVN cottage stay flawlessly. The darshan at 5 AM was a divine experience we will cherish forever.' },
      { id: '2', author: 'Aditya Deshmukh', location: 'Pune', rating: 5, date: 'October 2025', tripType: 'Solo Spiritual Trek', review: 'The autumn trek was clear and crisp. The mountain views of Chaukhamba and Kedar Dome were breathtaking. Excellent support and reliable driver from Rishikesh.' }
    ]
  },
  mussoorie: {
    quickFacts: {
      altitude: '2,005 m (6,578 ft)',
      duration: '2 - 3 Days',
      bestSeason: 'March to June & Sept to Nov',
      avgTemp: '12°C to 24°C (Summer) / 1°C to 10°C (Winter)',
      nearestAirport: 'Jolly Grant, Dehradun (58 km)',
      nearestRailhead: 'Dehradun Railway Station (35 km)',
      region: 'Garhwal Hills (Dehradun District)',
      travelVibe: 'Queen of Hills, Colonial Heritage, Romantic Getaways'
    },
    activities: [
      { title: 'Mall Road Heritage Walk', category: 'Culture & Food', desc: 'Stroll along the historic promenade lined with colonial lampposts, cozy cafes, Tibetan handicrafts, and steaming momos.', duration: '2 Hours' },
      { title: 'Gun Hill Cable Car Ride', category: 'Adventure', desc: 'Ride the aerial ropeway to Mussoorie’s second highest peak for panoramic vistas of the Doon valley and Bunderpunch peaks.', duration: '1 Hour' },
      { title: 'Kempty Falls Dip & Picnic', category: 'Sightseeing', desc: 'Marvel at the cascading mountain waterfall surrounded by high cliffs, popular for refreshing swims and hill snacks.', duration: 'Half Day' },
      { title: 'George Everest House Nature Trail', category: 'Nature & Trails', desc: 'Walk through deodar forests to the historic estate of Sir George Everest with breathtaking ridge sunsets.', duration: '3 Hours' }
    ],
    seasons: [
      { season: 'Summer', months: 'March to June', temp: '15°C - 26°C', desc: 'Pleasant weather offering escape from northern plains heat. Perfect for sightseeing, nature walks and cafe hopping.', tag: 'Peak Tourist Season', isPopular: true },
      { season: 'Monsoon', months: 'July to August', temp: '14°C - 20°C', desc: 'Misty hills and lush green valleys with famous winter-line clouds, ideal for romantic and budget stays.', tag: 'Lush & Romantic', isPopular: false },
      { season: 'Winter', months: 'Dec to Feb', temp: '1°C - 10°C', desc: 'Chilly days with occasional snowfall, especially around Dhanaulti and Lal Tibba. Clear mountain sunsets.', tag: 'Snow & Winter Line', isPopular: true }
    ],
    itineraries: [
      {
        id: 'weekend',
        title: 'Classic Mussoorie Weekend',
        duration: '2 Days / 1 Night',
        idealFor: 'Couples & Quick Escapes',
        days: [
          { day: 1, title: 'Arrival, Mall Road & Gun Hill Sunset', highlights: ['Scenic drive from Dehradun', 'Check-in at valley-view hotel', 'Ropeway ride to Gun Hill', 'Evening cafe hopping on Mall Road'] },
          { day: 2, title: 'Kempty Falls, George Everest & Departure', highlights: ['Morning trip to Kempty Falls', 'Panoramic ridge walk at Sir George Everest Estate', 'Drop at Dehradun station/airport'] }
        ]
      },
      {
        id: 'extended',
        title: 'Mussoorie & Dhanaulti Retreat',
        duration: '4 Days / 3 Nights',
        idealFor: 'Families & Nature Lovers',
        days: [
          { day: 1, title: 'Dehradun to Mussoorie & Colonial Trail', highlights: ['Drive via Mussoorie bypass', 'Visit Camel’s Back Road', 'Sunset at Library Chowk'] },
          { day: 2, title: 'Lal Tibba, Landour & Sister Bazaar', highlights: ['Old British cantonment walk', 'Famous pancakes & homemade jams at Char Dukan', 'Lal Tibba telescope views'] },
          { day: 3, title: 'Day Excursion to Dhanaulti Eco Park & Surkanda Devi', highlights: ['Alpine deodar park walks', 'Cable car or hike to sacred Surkanda Devi Temple (3,030m)', 'Bonfire evening in Dhanaulti'] },
          { day: 4, title: 'Return via Sahastradhara & Dehradun Departure', highlights: ['Scenic downhill drive', 'Shopping at Paltan Bazaar', 'Drop-off at airport/station'] }
        ]
      }
    ],
    nearby: [
      { name: 'Dhanaulti', distance: '32 km', desc: 'Peaceful alpine deodar retreat free from crowds.', path: '/destinations/dhanaulti', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop' },
      { name: 'Chakrata', distance: '78 km', desc: 'Secluded cantonment with Tiger Falls and ancient caves.', path: '/destinations/chakrata', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop' },
      { name: 'Rishikesh', distance: '75 km', desc: 'Ganges rafting, spiritual aartis, and yoga ashrams.', path: '/destinations/rishikesh', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop' }
    ],
    faqs: [
      { question: 'How far is Mussoorie from Delhi and Dehradun?', answer: 'Mussoorie is approximately 35 km (1.5 hours) from Dehradun and 280 km (6-7 hours drive via Delhi-Meerut Expressway) from New Delhi.' },
      { question: 'Does it snow in Mussoorie during winter?', answer: 'Yes, Mussoorie often receives snowfall between late December and early February, particularly in higher areas like Lal Tibba, Landour, and nearby Dhanaulti.' },
      { question: 'What is the best way to travel around Mussoorie?', answer: 'Local taxis, rented scooters, and walking along pedestrian-friendly areas like Mall Road and Camel’s Back Road are the most convenient ways to explore.' }
    ],
    reviews: [
      { id: '1', author: 'Neha & Siddharth Kapoor', location: 'Delhi NCR', rating: 5, date: 'January 2026', tripType: 'Couples Getaway', review: 'We caught the winter snowfall in Landour! UK Yatra arranged our boutique stay and private cab perfectly. The driver was very polite and knew all the hidden cafes.' },
      { id: '2', author: 'Pooja Verma', location: 'Chandigarh', rating: 5, date: 'May 2025', tripType: 'Family Vacation', review: 'A wonderful 3-day family trip. The kids loved the ropeway ride and Kempty falls. Smooth hotel check-in and totally hassle-free service.' }
    ]
  },
  dehradun: {
    quickFacts: {
      altitude: '640 m (2,100 ft)',
      duration: '2 - 3 Days',
      bestSeason: 'October to May',
      avgTemp: '18°C to 30°C (Summer) / 5°C to 20°C (Winter)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (25 km)',
      nearestRailhead: 'Dehradun Railway Station (DDN)',
      region: 'Doon Valley (Garhwal Gateway)',
      travelVibe: 'Valley City, Heritage Institutes, Himalayan Gateways, Weekend Stays'
    },
    activities: [
      { title: 'Robber’s Cave (Guchhupani) Walk', category: 'Nature & Trails', desc: 'Wade through knee-deep freezing stream water inside a dark, narrow limestone cavern.', duration: '2 Hours' },
      { title: 'Sahastradhara Sulphur Springs Bath', category: 'Sightseeing', desc: 'Bathe in the thousand-fold limestone waterfalls renowned for skin healing minerals.', duration: '2 - 3 Hours' },
      { title: 'Mindrolling Monastery Peace Garden', category: 'Spiritual', desc: 'Admire the 185-foot Great Stupa and tranquil Tibetan prayer gardens in Clement Town.', duration: '1 - 2 Hours' },
      { title: 'Paltan Bazaar & Local Bakery Tour', category: 'Culture & Food', desc: 'Sample famous Dehradun rusks, plum cakes from Ellora’s, and Tibetan momos at Astley Hall.', duration: '2 Hours' }
    ],
    seasons: [
      { season: 'Winter', months: 'Nov to Feb', temp: '5°C - 20°C', desc: 'Crisp sunny days and chilly nights, perfect for city sightseeing, bakery hopping, and day trips.', tag: 'Pleasant & Cool', isPopular: true },
      { season: 'Spring', months: 'March to April', temp: '15°C - 28°C', desc: 'Blooming jacarandas and pleasant valley weather before the peak summer heat.', tag: 'Spring Bloom', isPopular: true },
      { season: 'Summer', months: 'May to June', temp: '22°C - 35°C', desc: 'Warm in the afternoon, ideal morning gateway to Mussoorie and high altitude treks.', tag: 'Gateway Hub', isPopular: false }
    ],
    itineraries: [
      {
        id: 'gateway',
        title: 'Essential Dehradun Heritage & Nature',
        duration: '2 Days / 1 Night',
        idealFor: 'Families & Weekend Explorers',
        days: [
          { day: 1, title: 'Arrival, FRI, Robber’s Cave & Paltan Bazaar', highlights: ['Greco-Roman architecture at Forest Research Institute', 'Guchhupani cave river trail', 'Local cafe and bakery crawl'] },
          { day: 2, title: 'Sahastradhara, Mindrolling Monastery & Onward Journey', highlights: ['Mineral spring waterfalls', 'Mindrolling Stupa prayer garden', 'Transfer to Mussoorie or airport'] }
        ]
      }
    ],
    nearby: [
      { name: 'Mussoorie', distance: '35 km', desc: 'The Queen of Hills with Mall Road and George Everest Ridge.', path: '/destinations/mussoorie', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop' },
      { name: 'Rishikesh', distance: '45 km', desc: 'World capital of yoga, Ganga rafting, and evening river prayers.', path: '/destinations/rishikesh', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop' },
      { name: 'Haridwar', distance: '55 km', desc: 'Ancient sacred pilgrim city on the banks of holy river Ganga.', path: '/destinations/haridwar', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop' }
    ],
    faqs: [
      { question: 'What is Dehradun famous for?', answer: 'Dehradun is famous for its prestigious institutions (IMA, FRI, Doon School), natural wonders like Robber’s Cave and Sahastradhara, authentic bakeries, and as the gateway to Garhwal Himalayas.' },
      { question: 'How far is Dehradun from Delhi?', answer: 'Dehradun is approximately 240 km from New Delhi. With the new Delhi-Dehradun Expressway, travel time is reduced to just 3.5 to 4 hours.' }
    ],
    reviews: [
      { id: '1', author: 'Akash Mehra', location: 'Delhi', rating: 5, date: 'February 2026', tripType: 'Weekend Trip', review: 'UK Yatra arranged our private cab from Dehradun airport and hotel stay seamlessly. The driver was knowledgeable and recommended the best bakery in town.' }
    ]
  },
  rishikesh: {
    quickFacts: {
      altitude: '372 m (1,220 ft)',
      duration: '2 - 4 Days',
      bestSeason: 'September to June (Rafting: Sep-Jun)',
      avgTemp: '15°C to 35°C',
      nearestAirport: 'Jolly Grant Airport, Dehradun (20 km)',
      nearestRailhead: 'Yog Nagari Rishikesh (YNRK) / Rishikesh Station',
      region: 'Garhwal Foothills (Ganga Valley)',
      travelVibe: 'Yoga Capital, River Rafting, Evening Aarti, Cafe Culture'
    },
    activities: [
      { title: 'Ganga White Water River Rafting', category: 'Adventure', desc: 'Brave Grade III and IV rapids like Roller Coaster and Golf Course with certified river guides.', duration: '3 - 4 Hours' },
      { title: 'Triveni Ghat Evening Maha Aarti', category: 'Spiritual', desc: 'Participate in the mesmerizing sunset prayer ceremony with floating diyas and Vedic chanting.', duration: '1.5 Hours' },
      { title: 'The Beatles Ashram (Chaurasi Kutia)', category: 'Sightseeing', desc: 'Walk through graffiti-covered meditation domes where The Beatles stayed and composed in 1968.', duration: '2 Hours' },
      { title: 'Bungee Jumping & Giant Swing', category: 'Adventure', desc: 'Leap from India’s highest 83-meter platform over the Hall River gorge at Mohan Chatti.', duration: 'Half Day' }
    ],
    seasons: [
      { season: 'Autumn & Spring', months: 'Sept to Nov & Feb to April', temp: '15°C - 28°C', desc: 'The golden season for river rafting, bungee jumping, and riverside camping.', tag: 'Prime Adventure Window', isPopular: true },
      { season: 'Winter', months: 'Dec to Jan', temp: '8°C - 20°C', desc: 'Crisp sunny days, misty mornings, peaceful ashrams, and pleasant campfire evenings.', tag: 'Serene & Crisp', isPopular: true },
      { season: 'Monsoon', months: 'July to August', temp: '22°C - 30°C', desc: 'River rafting is closed due to high water levels. Ideal for Ayurvedic rejuvenation and quiet retreats.', tag: 'Ayurveda & Yoga', isPopular: false }
    ],
    itineraries: [
      {
        id: 'adventure-spiritual',
        title: 'Rishikesh Adventure & Soul Detox',
        duration: '3 Days / 2 Nights',
        idealFor: 'Youth, Friends & Couples',
        days: [
          { day: 1, title: 'Arrival, Riverside Camp Check-In & Triveni Aarti', highlights: ['Drive from Dehradun/Delhi', 'Check-in to luxury Swiss tent in Shivpuri', 'Evening Maha Aarti at Triveni Ghat'] },
          { day: 2, title: 'White Water Rafting, Cliff Jumping & Cafe Crawl', highlights: ['16 km rafting from Shivpuri to NIM Beach', 'Body surfing & cliff jump', 'Cafe hopping in Tapovan'] },
          { day: 3, title: 'Beatles Ashram, Neer Garh Waterfall & Departure', highlights: ['Morning meditation and photography at Chaurasi Kutia', 'Hike to Neer Garh Waterfall', 'Departure transfer'] }
        ]
      }
    ],
    nearby: [
      { name: 'Haridwar', distance: '25 km', desc: 'Historic pilgrimage city famous for Har Ki Pauri Ganga Aarti.', path: '/destinations/haridwar', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop' },
      { name: 'Dehradun', distance: '45 km', desc: 'Capital city with cafes, monasteries, and caves.', path: '/destinations/dehradun', image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=600&auto=format&fit=crop' },
      { name: 'Shivpuri', distance: '16 km', desc: 'Prime rafting base and luxury riverside camping hub.', path: '/destinations/rishikesh', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop' }
    ],
    faqs: [
      { question: 'When is river rafting open in Rishikesh?', answer: 'River rafting is open from late September until the end of June. It remains closed in July and August during the heavy monsoon season for safety.' },
      { question: 'Is Rishikesh suitable for families and senior citizens?', answer: 'Yes! While known for adventure sports, Rishikesh offers tranquil Ganga-facing luxury resorts, peaceful evening aartis, and world-renowned yoga ashrams that cater wonderfully to all age groups.' }
    ],
    reviews: [
      { id: '1', author: 'Rahul & Priya Bansal', location: 'Delhi', rating: 5, date: 'November 2025', tripType: 'Adventure Trip', review: 'The 16 km rafting and riverside camping organized by UK Yatra was top-tier. Certified river guides, very safe equipment, and great campfire food!' }
    ]
  }
};

// Generic fallback data generator so that ANY destination has rich 14-section data
export function getDestinationExtraData(id: string, name: string, category: string, altitude?: string, idealDuration?: string, bestTime?: string): DestinationExtraData {
  if (DESTINATION_DETAILS_MAP[id]) {
    const existing = DESTINATION_DETAILS_MAP[id];
    return {
      quickFacts: {
        altitude: altitude || existing.quickFacts?.altitude || '1,850 m (6,070 ft)',
        duration: idealDuration || existing.quickFacts?.duration || '3 - 4 Days',
        bestSeason: bestTime || existing.quickFacts?.bestSeason || 'March to June & Sept to Nov',
        avgTemp: existing.quickFacts?.avgTemp || '10°C to 22°C (Summer) / 0°C to 10°C (Winter)',
        nearestAirport: existing.quickFacts?.nearestAirport || 'Jolly Grant Airport, Dehradun',
        nearestRailhead: existing.quickFacts?.nearestRailhead || 'Haridwar / Rishikesh / Kathgodam',
        region: existing.quickFacts?.region || 'Uttarakhand Himalayas',
        travelVibe: existing.quickFacts?.travelVibe || `${category} & Himalayan Tourism`
      },
      activities: existing.activities || [
        { title: `${name} Scenic Viewpoint Walk`, category: 'Sightseeing', desc: `Stroll through peaceful mountain paths overlooking panoramic Himalayan valleys.`, duration: '2 Hours' },
        { title: 'Local Heritage & Temple Visit', category: 'Culture & Food', desc: `Explore ancient mountain shrines and sample traditional Garhwali/Kumaoni delicacies.`, duration: 'Half Day' },
        { title: 'Nature Photography & Sunset Watching', category: 'Nature & Trails', desc: `Capture spectacular golden hour views over snow-clad Himalayan ridges.`, duration: '2 Hours' }
      ],
      seasons: existing.seasons || [
        { season: 'Summer', months: 'April to June', temp: '14°C - 24°C', desc: 'Crisp mountain air, clear vistas, and pleasant sunny days perfect for sightseeing.', tag: 'Best for Sightseeing', isPopular: true },
        { season: 'Monsoon', months: 'July to August', temp: '16°C - 20°C', desc: 'Fresh mountain rains bringing emerald green hills and gushing seasonal waterfalls.', tag: 'Lush & Green', isPopular: false },
        { season: 'Winter', months: 'Nov to Feb', temp: '0°C - 12°C', desc: 'Chilly alpine climate with sparkling snow views and cozy mountain bonfire evenings.', tag: 'Crisp Snow Vistas', isPopular: true }
      ],
      itineraries: existing.itineraries || [
        {
          id: 'standard',
          title: `Essential ${name} Discovery`,
          duration: '3 Days / 2 Nights',
          idealFor: 'Couples & Family Holidays',
          days: [
            { day: 1, title: `Arrival & Evening Stroll in ${name}`, highlights: ['Scenic hill drive', 'Hotel check-in with valley views', 'Sunset viewpoint walk'] },
            { day: 2, title: `Full Day Exploration of ${name}`, highlights: ['Major local attractions and shrines', 'Traditional culinary lunch', 'Local market crafts & photography'] },
            { day: 3, title: 'Morning Alpine Sunrise & Departure', highlights: ['Early breakfast with mountain views', 'Souvenir shopping', 'Transfer to airport / railway station'] }
          ]
        }
      ],
      nearby: existing.nearby || [
        { name: 'Rishikesh', distance: 'Scenic Drive', desc: 'Yoga capital of the world and hub for Ganga river rafting.', path: '/destinations/rishikesh', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop' },
        { name: 'Nainital', distance: 'Scenic Drive', desc: 'Iconic emerald lake city surrounded by seven high ridges.', path: '/destinations/nainital', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop' },
        { name: 'Auli', distance: 'Scenic Drive', desc: 'India’s premier ski destination with sweeping Nanda Devi panoramas.', path: '/destinations/auli', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop' }
      ],
      faqs: existing.faqs || [
        { question: `What is the best time to visit ${name}?`, answer: `${name} is best visited between March and June for pleasant weather, and from September to November for crystal clear Himalayan views.` },
        { question: `How many days are ideal to explore ${name}?`, answer: `A duration of 2 to 4 days is ideal to experience all prime attractions, viewpoints, and local heritage without rushing.` },
        { question: `How are the mobile network and ATM facilities in ${name}?`, answer: `Major telecom operators (Jio, Airtel) have reliable 4G/5G connectivity. While local ATMs exist, carrying adequate cash for local shops and remote trails is recommended.` },
        { question: `Can UK Yatra arrange customized private cabs and hotels for ${name}?`, answer: `Yes! UK Yatra provides 100% personalized itineraries including private hill-certified vehicles, sanitized stays, and local guide assistance.` }
      ],
      reviews: existing.reviews || [
        { id: '1', author: 'Ananya & Rohit Sen', location: 'Kolkata', rating: 5, date: 'October 2025', tripType: 'Himalayan Explorer', review: `Our trip to ${name} was organized seamlessly by UK Yatra. Great driver, transparent pricing, and lovely hotel views!` },
        { id: '2', author: 'Vikram Joshi', location: 'Mumbai', rating: 5, date: 'May 2025', tripType: 'Family Vacation', review: `Exceptional hospitality and smooth logistics. The itinerary was perfectly balanced for senior citizens and children.` }
      ]
    };
  }

  // Generic dynamic fallback
  return {
    quickFacts: {
      altitude: altitude || '1,950 m (6,400 ft)',
      duration: idealDuration || '3 - 4 Days',
      bestSeason: bestTime || 'March to June & Sept to Nov',
      avgTemp: '12°C to 24°C (Summer) / 2°C to 12°C (Winter)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (DED)',
      nearestRailhead: 'Haridwar / Rishikesh / Kathgodam',
      region: 'Uttarakhand Devbhoomi',
      travelVibe: `${category} & Himalayan Scenic Trails`
    },
    activities: [
      { title: `${name} Ridge & Sunset Walk`, category: 'Sightseeing', desc: `Stroll through peaceful pine paths overlooking panoramic Himalayan peaks.`, duration: '2 Hours' },
      { title: 'Local Heritage & Temple Darshan', category: 'Spiritual', desc: `Visit ancient sacred temples and learn about local Himalayan lore.`, duration: 'Half Day' },
      { title: 'Nature Photography & Birding', category: 'Nature & Trails', desc: `Capture spectacular golden hour views and endemic Himalayan birdlife.`, duration: '3 Hours' },
      { title: 'Traditional Kumaoni / Garhwali Dining', category: 'Culture & Food', desc: `Savor authentic local meals made from organic mountain grains and herbs.`, duration: '1 - 2 Hours' }
    ],
    seasons: [
      { season: 'Summer', months: 'April to June', temp: '15°C - 26°C', desc: 'Pleasant weather and clear blue skies, ideal for sightseeing and family travel.', tag: 'Best for Sightseeing', isPopular: true },
      { season: 'Monsoon', months: 'July to August', temp: '16°C - 22°C', desc: 'Lush green valleys, blooming wildflowers, and mist-wrapped ridges.', tag: 'Emerald Greenery', isPopular: false },
      { season: 'Winter', months: 'Nov to Feb', temp: '0°C - 12°C', desc: 'Crisp alpine air, snow-capped panoramas, and peaceful mountain retreats.', tag: 'Snow & Clear Peaks', isPopular: true }
    ],
    itineraries: [
      {
        id: 'weekend',
        title: `Weekend Escape to ${name}`,
        duration: '2 Days / 1 Night',
        idealFor: 'Couples & Quick Breaks',
        days: [
          { day: 1, title: `Arrival & Sunset Exploration in ${name}`, highlights: ['Scenic mountain drive', 'Check-in at valley hotel', 'Sunset photography walk'] },
          { day: 2, title: `Heritage Trails & Departure`, highlights: ['Morning alpine breakfast', 'Top attraction visits', 'Return drive'] }
        ]
      },
      {
        id: 'explorer',
        title: `Comprehensive ${name} Discovery`,
        duration: '4 Days / 3 Nights',
        idealFor: 'Families & Relaxed Travelers',
        days: [
          { day: 1, title: 'Arrival & Welcome to the Himalayas', highlights: ['Private cab transfer', 'Traditional welcome tea', 'Evening nature stroll'] },
          { day: 2, title: `Core Sightseeing & Cultural Landmarks in ${name}`, highlights: ['Guided heritage tour', 'Iconic viewpoints', 'Local market exploration'] },
          { day: 3, title: 'Excursion to Nearby High-Altitude Ridges', highlights: ['Day hike / scenic excursion', 'Picnic lunch amidst pines', 'Stargazing evening'] },
          { day: 4, title: 'Scenic Farewell & Return Transfer', highlights: ['Early sunrise view', 'Souvenir shopping', 'Transfer to railhead / airport'] }
        ]
      }
    ],
    nearby: [
      { name: 'Rishikesh', distance: 'Direct Highway', desc: 'World capital of yoga, sacred evening aartis, and white-water rapids.', path: '/destinations/rishikesh', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop' },
      { name: 'Mussoorie', distance: 'Scenic Ridge Route', desc: 'The Queen of Hills featuring historic British promenades and waterfalls.', path: '/destinations/mussoorie', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop' },
      { name: 'Nainital', distance: 'Lake District', desc: 'Enchanting emerald lake surrounded by lush forested mountain peaks.', path: '/destinations/nainital', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop' }
    ],
    faqs: [
      { question: `What makes ${name} special compared to other destinations?`, answer: `${name} offers a pristine blend of authentic Himalayan tranquility, scenic panoramas, and genuine mountain warmth away from commercial crowds.` },
      { question: `What is the best way to reach ${name}?`, answer: `You can reach ${name} via direct highway drives from Dehradun, Rishikesh, or Kathgodam. UK Yatra provides sanitized private cabs with experienced mountain drivers.` },
      { question: `Is ${name} safe for family travel and senior citizens?`, answer: `Yes, ${name} has good road access, comfortable hotels, and safe walking trails suitable for both kids and elderly travelers.` },
      { question: `How can I book a customized tour package for ${name}?`, answer: `Simply click 'Request Custom Itinerary' or reach out to UK Yatra on WhatsApp. Our destination experts will craft a personalized day-wise plan within 30 minutes.` }
    ],
    reviews: [
      { id: '1', author: 'Deepak Mehrotra', location: 'Lucknow', rating: 5, date: 'October 2025', tripType: 'Family Vacation', review: `Our trip to ${name} was memorable. UK Yatra handled everything from vehicle to hotel bookings seamlessly. Highly recommended!` },
      { id: '2', author: 'Meera Nambiar', location: 'Bangalore', rating: 5, date: 'May 2025', tripType: 'Couples Retreat', review: `Peaceful ambiance, clean mountain air, and great local recommendations from the team. Thank you UK Yatra!` }
    ]
  };
}

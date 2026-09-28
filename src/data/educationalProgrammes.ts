export interface EducationalProgramme {
  id: string;
  title: string;
  track: 'School Trips' | 'College Trips' | 'Summer Learning Programmes';
  domain: 'STEM & Sciences' | 'Wildlife & Ecology' | 'Adventure & Mountaineering' | 'Heritage & Culture' | 'Leadership & Survival';
  targetAudience: string;
  duration: string;
  durationDays: number;
  location: string;
  startingPrice: string;
  supervisionRatio: string;
  image: string;
  gallery: string[];
  badge: string;
  badgeColor: string;
  shortDesc: string;
  fullDesc: string;
  learningOutcomes: string[];
  curriculumAlignment: string;
  safetyHighlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    learningFocus: string;
    meals: string;
    stay: string;
  }[];
  whatsIncluded: string[];
  whatsExcluded: string[];
  thingsToCarry: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const EDUCATIONAL_TRACKS = [
  {
    id: 'school-trips',
    name: 'School Trips',
    audience: 'Grades 5 to 12',
    tagline: 'Curriculum-Aligned STEM, Ecology & Safe Excursions',
    badge: '1:8 Safe Ratio',
    description: 'Chaperoned educational journeys tailored to CBSE, ICSE, and IB school syllabi. Includes guided science walks, geology excursions, botanical taxonomy, and supervised campfire debriefs.',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80',
    link: '/school-trips'
  },
  {
    id: 'college-trips',
    name: 'College Trips',
    audience: 'University & Youth Batches',
    tagline: 'Adventure Treks, River Rafting & Student Batch Discounts',
    badge: 'Hot Deals',
    description: 'High-energy outdoor summits and adventure expeditions built for college councils, batch farewells, and student societies. Exceptional group discounts and certified mountain marshals.',
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80',
    link: '/college-trips'
  },
  {
    id: 'summer-learning',
    name: 'Summer Learning Programmes',
    audience: 'Ages 10 to 21',
    tagline: 'Wilderness Survival, Astronomy & Leadership Bootcamps',
    badge: 'Camps & Certificates',
    description: 'Immersive Himalayan bootcamps designed to foster self-reliance, wilderness survival, stargazing astronomy, and team leadership under certified outdoor educators.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
    link: '/summer-learning-programmes'
  }
];

export const EDUCATIONAL_PROGRAMMES: EducationalProgramme[] = [
  // ==========================================
  // 1. SCHOOL TRIPS
  // ==========================================
  {
    id: 'dehradun-mussoorie-heritage',
    title: 'Dehradun & Mussoorie Science & Heritage Trail',
    track: 'School Trips',
    domain: 'STEM & Sciences',
    targetAudience: 'Grades 5 to 12',
    duration: '3 Days / 2 Nights',
    durationDays: 3,
    location: 'Dehradun & Mussoorie',
    startingPrice: '₹3,850',
    supervisionRatio: '1:8 Chaperone Ratio',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    badge: 'Curriculum Aligned',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    shortDesc: 'A rich experiential tour covering Forest Research Institute botany, Wadia Institute Himalayan geology, limestone hydrology, and colonial hill station history.',
    fullDesc: 'The Dehradun & Mussoorie Science & Heritage Trail is meticulously structured for middle and high school students to explore science outside textbooks. From analyzing 100-year-old timber museum exhibits and dinosaur fossils to observing natural limestone karst formations at Robber’s Cave and studying altitude-dependent plant ecology in Mussoorie.',
    learningOutcomes: [
      'Understand forest conservation biology & timber taxonomy at FRI Dehradun',
      'Examine tectonic plate collision and Himalayan orogeny at Wadia Geology Institute',
      'Observe limestone solution caves and karst hydrology at Robber’s Cave',
      'Analyze colonial geography and Himalayan mountain ranges from Mussoorie ridge',
      'Participate in daily supervised field quizzes and reflective learning journal sessions'
    ],
    curriculumAlignment: 'CBSE / ICSE Science (Grades 6-10), Environmental Studies, Geography (Himalayan landforms & water resources), and NEP 2020 experiential learning modules.',
    safetyHighlights: [
      'Dedicated female chaperones for girl students',
      'Strict 1:8 instructor-student headcount at every transit and museum entry',
      'Sanitized AC coaches with vetted hill drivers and GPS tracking',
      'First aid responder with portable oxygen kit traveling with the group'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Dehradun & Forestry Museum Immersion',
        description: 'Morning reception at Dehradun Station / Airport. Check into sanitized student hotel. Afternoon guided botanical tour of the Forest Research Institute (FRI) Greco-Roman heritage campus and 6 research museums. Interactive evening science quiz.',
        learningFocus: 'Forestry, Botany & Architecture',
        meals: 'Lunch, Evening Snacks & Dinner',
        stay: 'Verified Student Hotel, Dehradun'
      },
      {
        day: 2,
        title: 'Geology Lab & Karst Formations to Mussoorie',
        description: 'Morning hands-on session at Wadia Institute of Himalayan Geology with senior research scientists. Post-lunch field exploration of Robber’s Cave (Guchhupani) water channels. Scenic drive up to Mussoorie with sunset mountain observation.',
        learningFocus: 'Plate Tectonics, Earth Sciences & Cave Hydrology',
        meals: 'Breakfast, Packed Lunch & Buffet Dinner',
        stay: 'Mountain Resort, Mussoorie'
      },
      {
        day: 3,
        title: 'Heritage Walk, Journal Presentation & Departure',
        description: 'Morning nature walk along Camel’s Back Road observing flora and Himalayan vistas. Interactive presentation where students present their team field journals and receive official UK Yatra participation certificates. Safe departure transfer.',
        learningFocus: 'Geography, Reflection & Presentation Skills',
        meals: 'Breakfast & Lunch',
        stay: 'Departure'
      }
    ],
    whatsIncluded: [
      '2 Nights accommodation on quad/triple sharing in student-certified hotels',
      'All meals: Hygienic pure vegetarian/multicuisine buffets & evening snacks',
      'Dedicated AC transport with verified drivers and toll taxes',
      'All entry permits, museum tickets & certified education guides',
      'UK Yatra student learning journal kits & official certificates of participation',
      '24/7 UK Yatra tour manager and certified first aid marshal'
    ],
    whatsExcluded: [
      'Personal expenses, laundry, and shopping',
      'Any optional rides or personal snacks outside the set menu'
    ],
    thingsToCarry: [
      'School uniform / sports tracksuits & warm fleece jacket',
      'Comfortable walking shoes with sturdy rubber grip',
      'Refillable water bottle & small field backpack',
      'Notebook, pens, and personal toiletries'
    ],
    faqs: [
      {
        question: 'What is the teacher-to-student chaperone ratio provided?',
        answer: 'UK Yatra assigns 1 dedicated field coordinator for every 8 to 10 students, in addition to the accompanying school teachers.'
      },
      {
        question: 'Are special dietary requirements accommodated?',
        answer: 'Yes. All meals are prepared in hygienic kitchens with fresh ingredients. Jain, gluten-free, or specific allergy-safe meals are arranged with prior notice.'
      }
    ]
  },
  {
    id: 'corbett-wildlife-ecology',
    title: 'Jim Corbett Eco-Conservation & Wildlife Study',
    track: 'School Trips',
    domain: 'Wildlife & Ecology',
    targetAudience: 'Grades 6 to 12',
    duration: '3 Days / 2 Nights',
    durationDays: 3,
    location: 'Jim Corbett National Park',
    startingPrice: '₹4,450',
    supervisionRatio: '1:8 Chaperone Ratio',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    badge: 'Eco & Biology',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    shortDesc: 'A rich biodiversity safari and ecology field trip inside India’s oldest tiger reserve, studying food chains, sal forest ecosystems, and riverine birds.',
    fullDesc: 'Take classrooms directly into the wild! Students explore Jim Corbett National Park alongside certified wildlife naturalists. The itinerary covers open-jeep conservation safaris, bird-watching trails along Kosi riverbanks, human-wildlife conflict workshops, and interactive night sky astronomy sessions.',
    learningOutcomes: [
      'Learn tiger conservation biology & camera trap wildlife monitoring techniques',
      'Identify 40+ species of Himalayan birds and deciduous flora',
      'Analyze riverine ecology along the Kosi river basin and riparian microhabitats',
      'Understand forest corridor management and indigenous community stewardship',
      'Document animal tracks, pugmarks, and plant leaf impressions in field journals'
    ],
    curriculumAlignment: 'CBSE / ICSE Biology (Ecosystems, Food Webs & Biodiversity), Environmental Science, and Wildlife Conservation modules.',
    safetyHighlights: [
      'Govt-certified open gypsies with experienced drivers who maintain strict speed limits',
      'Never exiting designated safe zones inside the core and buffer reserve',
      'Resorts with secure perimeter fencing, CCTV, and 24/7 night patrol guards',
      'First-aid marshal with antivenom-aware medical protocol on standby'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival, Dhangarhi Orientation & Riverside Ecology Walk',
        description: 'Arrival at Corbett. Orientation session at Dhangarhi Museum detailing history of Project Tiger. Late afternoon bird watching and riparian ecology walk along Kosi river. Evening documentary screening on wildlife corridors.',
        learningFocus: 'Biodiversity & Forest History',
        meals: 'Lunch, Evening High Tea & Dinner',
        stay: 'Fenced Nature Resort, Ramnagar'
      },
      {
        day: 2,
        title: 'Dawn Safari & Habitat Conservation Workshop',
        description: 'Early morning 4x4 open gypsy safari through Jhirna/Dhela eco-tourism zones accompanied by forest department guides. Afternoon interactive workshop with a tiger biologist on human-carnivore coexistence. Night stargazing with telescopes.',
        learningFocus: 'Predator-Prey Dynamics & Nocturnal Ecology',
        meals: 'Breakfast, Lunch & Barbecue Dinner',
        stay: 'Fenced Nature Resort, Ramnagar'
      },
      {
        day: 3,
        title: 'Heritage Corbett House, Project Work & Departure',
        description: 'Morning visit to Choti Haldwani heritage village and Jim Corbett’s winter home. Student presentation of biodiversity field journals, award ceremony, and safe transit back to school.',
        learningFocus: 'Community Conservation & Creative Journaling',
        meals: 'Breakfast & Packed Lunch',
        stay: 'Departure'
      }
    ],
    whatsIncluded: [
      '2 Nights resort stay with private ensuite bathrooms and security',
      'All buffet meals designed for students (wholesome vegetarian cuisine)',
      '1 Dedicated Safari in open gypsies with forest permits and naturalist guides',
      'Dhangarhi Museum and heritage site tickets',
      'UK Yatra field notebooks, bird identification charts & certificates'
    ],
    whatsExcluded: [
      'Personal camera fee (if levied by forest department on professional gear)',
      'Personal shopping and laundry'
    ],
    thingsToCarry: [
      'Earthy/dull colored clothes (green, khaki, brown; avoid bright red/yellow)',
      'Binoculars and personal camera (optional but recommended)',
      'Warm fleece for early morning safaris & sun cap for afternoon',
      'Insect repellent lotion & refillable water flask'
    ],
    faqs: [
      {
        question: 'Are student safaris completely safe in tiger territory?',
        answer: 'Absolutely. Gypsy safaris remain strictly on designated eco-tourism forest tracks under the guidance of licensed forest department guides. Students are not allowed to step out of the vehicles inside the forest.'
      }
    ]
  },
  {
    id: 'tehri-dam-engineering',
    title: 'Tehri Dam Hydropower & Geography Expedition',
    track: 'School Trips',
    domain: 'STEM & Sciences',
    targetAudience: 'Grades 8 to 12',
    duration: '2 Days / 1 Night',
    durationDays: 2,
    location: 'Tehri Garhwal & New Tehri',
    startingPrice: '₹2,950',
    supervisionRatio: '1:8 Chaperone Ratio',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
    ],
    badge: 'STEM & Engineering',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    shortDesc: 'A live civil engineering and renewable energy study of Asia’s tallest rock-fill dam, Himalayan river catchment, and water sports science.',
    fullDesc: 'Designed specifically for secondary and senior secondary students, this trip explores the magnificent 260.5-meter-high Tehri Dam. Students study hydro turbine mechanics, clean power transmission, seismic design adaptations, and water displacement physics before engaging in supervised lake adventure activities.',
    learningOutcomes: [
      'Study renewable hydroelectric energy generation, penstocks, and spillway engineering',
      'Analyze earthquake-resistant rock-and-earth fill design principles in seismically active zones',
      'Understand human resettlement history and planned urbanization at New Tehri',
      'Learn basic kayak balance physics and buoyancy principles with certified marshals'
    ],
    curriculumAlignment: 'Physics (Fluid Dynamics, Work & Energy), Social Science (Water Resources, Dam Construction & Society), and Geography.',
    safetyHighlights: [
      'Approved view point entries with high perimeter barriers and safety briefings',
      'Mandatory life jackets and certified rescue speedboats for all water activities on Tehri Lake',
      'Supervised campus hotel with secure access controls'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Tehri Dam Engineering Tour & Hydropower Seminar',
        description: 'Morning departure from Dehradun/Rishikesh to Tehri. Guided orientation overlooking the massive reservoir. Technical discussion on rock-fill construction, reservoir capacity (4 billion cubic meters), and clean power distribution. Evening camp briefing.',
        learningFocus: 'Civil Engineering, Hydrology & Renewable Energy',
        meals: 'Lunch, Tea & Buffet Dinner',
        stay: 'Lakeview Hotel, New Tehri'
      },
      {
        day: 2,
        title: 'Lake Water Physics, Team Drills & Departure',
        description: 'Morning water safety workshop and supervised motorboat/kayak intro with life jackets. Team engineering challenge: building raft models using buoyancy principles. Certificate distribution and safe journey return.',
        learningFocus: 'Fluid Mechanics, Team Problem Solving',
        meals: 'Breakfast & Hot Lunch',
        stay: 'Departure'
      }
    ],
    whatsIncluded: [
      '1 Night stay in comfortable twin/triple sharing student rooms',
      'All meals (lunch, dinner, breakfast, lunch)',
      'Dedicated AC coach transfers and hill driving permits',
      'Tehri Dam technical guide and entrance approvals',
      'Supervised boat ride with life jacket safety gear'
    ],
    whatsExcluded: ['Personal expenses and camera charges'],
    thingsToCarry: ['Sports shoes, sunglasses, windcheater jacket, notebook & pen'],
    faqs: [
      {
        question: 'Is access to inside the dam power house allowed?',
        answer: 'Powerhouse internal access is subject to THDC official security permissions. In case of restricted entry, detailed engineering lectures and top-of-dam view point study are conducted by certified engineers.'
      }
    ]
  },

  // ==========================================
  // 2. COLLEGE TRIPS
  // ==========================================
  {
    id: 'rishikesh-college-rafting',
    title: 'Rishikesh University River Rafting & Adventure Camps',
    track: 'College Trips',
    domain: 'Adventure & Mountaineering',
    targetAudience: 'College & University Batches',
    duration: '3 Days / 2 Nights',
    durationDays: 3,
    location: 'Rishikesh & Shivpuri',
    startingPrice: '₹3,499',
    supervisionRatio: 'Certified IRF Marshals',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80'
    ],
    badge: 'Bestseller',
    badgeColor: 'bg-orange-500/20 text-brand-orange border-orange-500/30',
    shortDesc: 'The ultimate college bonding trip featuring 16 km Grade III/IV river rafting, riverside Swiss tents, live music, bonfire night, and cliff jumping.',
    fullDesc: 'Tailor-made for college batch trips, university societies, and student groups. Experience the thunder of white-water rapids (Roller Coaster, Golf Course, Club House), riverside luxury camping with attached washrooms, volleyball tournaments, midnight acoustic bonfires, and café hopping in vibrant Rishikesh.',
    learningOutcomes: [
      'Team communication and synchronised paddle maneuvers in swift water currents',
      'River hydrology reading: identifying eddies, hydraulic jumps, and keeper holes',
      'Overcoming fear and developing self-confidence through supervised cliff jumping',
      'Outdoor group leadership and crisis coordination under pressure'
    ],
    curriculumAlignment: 'Outdoor Physical Education, Team Dynamics, Leadership Development & Sports Management.',
    safetyHighlights: [
      'International Rafting Federation (IRF) certified river guides on every raft',
      'Top-tier CE-certified helmets, high-flotation life jackets, and throw bags',
      'Dedicated safety kayak accompanying the student flotilla through major rapids',
      'Zero-tolerance policy on intoxicants during water activities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Rishikesh, Camp Check-in & Volleyball Tournament',
        description: 'Morning arrival at Shivpuri camp. Welcome drinks and allotment of riverside Swiss tents with attached bathrooms. Afternoon beach volleyball, tug-of-war, and stream hike. Evening bonfire with acoustic music, barbecue snacks, and buffet dinner.',
        learningFocus: 'Team Dynamics & Ice Breaking',
        meals: 'Lunch, Evening Snacks & Dinner',
        stay: 'Riverside Camp / Swiss Tents, Shivpuri'
      },
      {
        day: 2,
        title: '16 KM Grade III/IV Rafting, Cliff Jump & Beatles Ashram',
        description: 'Safety briefing and gear fitting. Tackle iconic rapids (Three Blind Mice, Roller Coaster, Golf Course). Supervised 25 ft cliff jumping at Magpie point. Afternoon visit to Beatles Ashram / Ram Jhula café culture. Evening musical jamming.',
        learningFocus: 'White-Water Navigation & Peer Leadership',
        meals: 'Breakfast, Lunch & Dinner',
        stay: 'Riverside Camp, Shivpuri'
      },
      {
        day: 3,
        title: 'Sunrise Yoga, Bungee Add-on & Safe Return',
        description: 'Morning riverside stretching and yoga session. Optional bungee jumping or giant swing at Mohan Chatti. Farewell group photograph, batch certificates, and return journey.',
        learningFocus: 'Reflection, Mental Wellness & Celebration',
        meals: 'Breakfast & Packed Lunch',
        stay: 'Departure'
      }
    ],
    whatsIncluded: [
      '2 Nights accommodation in luxury Swiss tents (triple/quad sharing) with attached bathrooms',
      'All buffet meals (6 meals + 2 evening snacks & tea)',
      '16 km White-water rafting with all safety equipment (helmets, life jackets, paddles)',
      'Cliff jumping & body surfing under certified river marshals',
      'Camp bonfire, outdoor games & music equipment access'
    ],
    whatsExcluded: [
      'Bungee jumping, giant swing, or zip-line tickets (can be added on request)',
      'Transport to and from your home city (can be bundled at discounted student rates)'
    ],
    thingsToCarry: [
      'Quick-dry t-shirts and shorts for rafting',
      'Sturdy strap sandals or water shoes',
      'Sunscreen, sunglasses with strap, and waterproof mobile pouch',
      'Valid student ID card for discounts'
    ],
    faqs: [
      {
        question: 'Do students need swimming skills to participate in rafting?',
        answer: 'No prior swimming experience is required! High-buoyancy life jackets keep you floating safely, and professional guides steer each raft with a rescue kayak alongside.'
      }
    ]
  },
  {
    id: 'kedarkantha-college-summit',
    title: 'Kedarkantha Winter Summit Student Expedition',
    track: 'College Trips',
    domain: 'Adventure & Mountaineering',
    targetAudience: 'College & University Batches',
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    location: 'Sankri & Govind National Park',
    startingPrice: '₹5,999',
    supervisionRatio: '1:6 Mountaineer Ratio',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    badge: 'High Altitude',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    shortDesc: 'A triumphant 12,500 ft Himalayan winter summit trek with snow microspikes, pine forest camps, and 360-degree views of 13 giant peaks.',
    fullDesc: 'The gold standard of Himalayan student summit treks. Scaling Kedarkantha peak is an empowering milestone for college groups. Trek through the dense pine forests of Govind Pashu Vihar, camp by the frozen Juda Ka Talab, and push for the summit at dawn under a canopy of stars to witness the sun illuminate Swargarohini, Bandarpoonch, and Black Peak.',
    learningOutcomes: [
      'High-altitude acclimatization science, pace management, and hydration discipline',
      'Proper use of mountaineering crampons, gaiters, and trekking poles in snow',
      'Leave No Trace (LNT) alpine ethics and wilderness environmental stewardship',
      'Mental resilience, camaraderie, and overcoming physical fatigue'
    ],
    curriculumAlignment: 'Mountaineering Fundamentals, Physical Stamina, Environmental Leadership & Geography.',
    safetyHighlights: [
      'IMF & NIM certified trek leaders and technical sweep marshals',
      'Twice daily pulse oximeter & oxygen saturation monitoring logs for every student',
      'High-altitude emergency medical kit, portable oxygen cylinders & stretchers on trail',
      'Sub-zero rated sleeping bags (-10°C) with insulated foam mattresses'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dehradun to Sankri Basecamp (6,400 ft)',
        description: 'Scenic 200 km drive along the Tons river valley. Check into traditional wooden homestay in Sankri village. Evening gear check, crampon fitting, and high-altitude safety briefing.',
        learningFocus: 'Expedition Planning & Equipment Orientation',
        meals: 'Lunch, Tea & Dinner',
        stay: 'Sankri Homestay'
      },
      {
        day: 2,
        title: 'Trek to Juda Ka Talab (9,100 ft)',
        description: 'Trek through pine and maple woodlands into the snow zone. Camp setup alongside the frozen Juda Ka Talab lake. Snow craft workshop on walking and braking with trekking poles.',
        learningFocus: 'Ascent Rhythm & Alpine Camping',
        meals: 'All Meals & Hot Soups',
        stay: 'Alpine Snow Tents'
      },
      {
        day: 3,
        title: 'Trek to Kedarkantha Base Camp (11,250 ft)',
        description: 'Short steep ascent over snow meadows to Base Camp. Jaw-dropping panoramic views of Bandarpoonch and Kala Nag. Early dinner and rest for midnight summit push.',
        learningFocus: 'Acclimatization & High Altitude Physiology',
        meals: 'All Meals',
        stay: 'Alpine Base Camp Tents'
      },
      {
        day: 4,
        title: 'Summit Push (12,500 ft) & Descent to Hargaon',
        description: '3:00 AM summit push using headlamps and microspikes. Sunrise from the 12,500 ft summit shrine. 360° views of 13 Himalayan giants. Descend to Hargaon camp for summit celebration bonfire.',
        learningFocus: 'Summit Achievement & Mountain Ethics',
        meals: 'All Meals & Celebration Treat',
        stay: 'Hargaon Tents'
      },
      {
        day: 5,
        title: 'Descend to Sankri & Drive to Dehradun',
        description: 'Gentle descent through pine forests back to Sankri. Certificate distribution and drive back to Dehradun Railway Station by 8:00 PM.',
        learningFocus: 'Expedition Debrief & Safe Return',
        meals: 'Breakfast & Packed Lunch',
        stay: 'Departure'
      }
    ],
    whatsIncluded: [
      'All accommodations: Homestay in Sankri & alpine dome tents on trail',
      'Nutritious high-protein vegetarian meals, hot soups, and trail snacks',
      'Certified mountaineering instructors, camp leaders, and local porters',
      'Mountaineering gear: Microspikes/crampons, gaiters, 4-season sleeping bags',
      'Forest department trek permits and Govind National Park entry fee',
      'Official Summit Completion Certificate for every participating student'
    ],
    whatsExcluded: ['Personal trekking backpack (available on rental) and trekking shoes'],
    thingsToCarry: [
      'Waterproof high-ankle trekking shoes with good grip',
      '3-layer warm clothing (thermal, fleece, and down feather windproof jacket)',
      'UV sunglasses, fleece gloves, woolen cap, and sun hat',
      'Personal water bottle & thermos flask for warm water'
    ],
    faqs: [
      {
        question: 'Is Kedarkantha suitable for students with zero prior trekking experience?',
        answer: 'Yes! Kedarkantha is considered the friendliest beginner summit trek in India. With our steady acclimatization pace and certified instructors, healthy college students comfortably achieve the summit.'
      }
    ]
  },

  // ==========================================
  // 3. SUMMER LEARNING PROGRAMMES
  // ==========================================
  {
    id: 'wilderness-survival-bushcraft',
    title: 'Himalayan Wilderness Survival & Bushcraft Camp',
    track: 'Summer Learning Programmes',
    domain: 'Leadership & Survival',
    targetAudience: 'Ages 11 to 18',
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    location: 'Kanatal & Dhanaulti Pine Forests (8,500 ft)',
    startingPrice: '₹8,900',
    supervisionRatio: '1:6 Instructor Ratio',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'
    ],
    badge: 'Popular Camp',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    shortDesc: 'A life-changing outdoor boot camp teaching friction fire making, alpine shelter building, solar water filtration, and compass navigation in pristine oak-pine forests.',
    fullDesc: 'Step away from screens and step into self-reliance! Under the mentorship of former army instructors and certified outdoor survivalists, students learn practical life skills: reading topographic maps, building emergency weather shelters using fallen pine boughs, purifying stream water, identifying edible Himalayan plants, and mastering friction fire craft.',
    learningOutcomes: [
      'Master magnetic compass navigation, topographical map reading, and terrain orientation',
      'Build natural waterproof emergency shelters using timber, foliage, and tarps',
      'Learn friction fire starting using flint-and-steel and bow-drill techniques without matches',
      'Perform solar water distillation and multi-layer carbon/sand filtration',
      'Wilderness First Aid: splinting, emergency stretcher fabrication, and signaling'
    ],
    curriculumAlignment: 'Applied Science, Practical Geography, Disaster Preparedness, and Character Development.',
    safetyHighlights: [
      'Enclosed, guarded campsite with clear boundary perimeters and illumination',
      'Trained wilderness paramedics and emergency vehicle parked on-site 24/7',
      'Strict fire pit safety protocols with fire extinguishers and water buckets',
      'Zero student movement outside camp without designated instructor escort'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Camp Arrival, Orientation & Tent Pitching Mastery',
        description: 'Arrival at Kanatal alpine camp. Welcome briefing, camp safety rules, and tent allotment. Afternoon hands-on workshop: pitching alpine tents, tying knot hitches (taut-line, bowline, clove hitch). Evening team building games.',
        learningFocus: 'Camp Craft & Knot Mechanics',
        meals: 'Lunch, Tea & Dinner',
        stay: 'Kanatal Wilderness Camp'
      },
      {
        day: 2,
        title: 'Navigation, Compass & Topo-Map Orienteering',
        description: 'Morning classroom: understanding contours, declination, and azimuths. Compass navigation treasure hunt across 5 sq km pine forest. Afternoon edible and medicinal Himalayan plant foraging walk with botanist.',
        learningFocus: 'Map Reading & Ethnobotany',
        meals: 'All Meals',
        stay: 'Kanatal Wilderness Camp'
      },
      {
        day: 3,
        title: 'Bushcraft Fire Making & Survival Cooking',
        description: 'Mastering fire fundamentals without matches: flint and steel, magnesium rod, and tinder preparation. Outdoor survival cooking: baking bread on sticks and cooking foil meals over coals. Campfire reflections.',
        learningFocus: 'Thermodynamics & Survival Cooking',
        meals: 'All Meals',
        stay: 'Kanatal Wilderness Camp'
      },
      {
        day: 4,
        title: 'Shelter Construction & Water Filtration Engineering',
        description: 'Team challenge: constructing an overnight debris hut and A-frame emergency shelter withstanding mountain wind and rain. Building sand-charcoal-gravel bio-filters to purify stream water.',
        learningFocus: 'Structural Engineering & Water Purification',
        meals: 'All Meals',
        stay: 'Kanatal Wilderness Camp'
      },
      {
        day: 5,
        title: 'Wilderness First Aid, Night Solo Simulation & Star Gazing',
        description: 'First aid scenarios: improvised fractures, snakebite management, and litter carries. Supervised 30-minute solo reflection walk in safe zone. Midnight stargazing and constellation navigation.',
        learningFocus: 'First Response, Mental Fortitude & Astronomy',
        meals: 'All Meals',
        stay: 'Kanatal Wilderness Camp'
      },
      {
        day: 6,
        title: 'Survival Olympiad, Certification & Safe Departure',
        description: 'Morning 5-stage Survival Challenge testing navigation, fire, knots, and stretcher carry. Award of Survival Scout Badges and official UK Yatra Certificates. Safe departure transfer to Dehradun.',
        learningFocus: 'Evaluation, Peer Review & Celebration',
        meals: 'Breakfast & Farewell Lunch',
        stay: 'Departure'
      }
    ],
    whatsIncluded: [
      '5 Nights stay in secure alpine adventure tents with clean bedding',
      'All nutritious meals and evening health snacks',
      'All survival training gear: Compasses, maps, flint-steel kits, tarps, ropes',
      'Instructors certified by NIM and Wilderness First Aid specialists',
      'Survival Scout Badge and Certificate of Completion'
    ],
    whatsExcluded: ['Personal gear and travel insurance (optional add-on)'],
    thingsToCarry: [
      'Rugged jeans/cargo pants and t-shirts (full sleeves)',
      'Comfortable hiking shoes and extra socks',
      'Headlamp or flashlight with spare batteries',
      'Pocket notebook and pen'
    ],
    faqs: [
      {
        question: 'Are mobile phones allowed during the survival camp?',
        answer: 'Phones are kept safely with camp coordinators during day modules to promote immersion and focus. Students are given a designated 30-minute window in the evening to call parents.'
      }
    ]
  },
  {
    id: 'dark-sky-astronomy-astrophotography',
    title: 'Benital Dark-Sky Astronomy & Astrophotography Camp',
    track: 'Summer Learning Programmes',
    domain: 'STEM & Sciences',
    targetAudience: 'Ages 12 to 21',
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    location: 'Benital Astro Village, Chamoli (8,600 ft)',
    startingPrice: '₹9,450',
    supervisionRatio: '1:6 Mentor Ratio',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'
    ],
    badge: 'Astro Camp',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    shortDesc: 'A captivating nocturnal astronomy camp at Uttarakhand’s official Dark Sky Park, observing Saturn rings, nebulae, and learning DSLR astrophotography.',
    fullDesc: 'Benital in Chamoli is one of the highest and darkest observing sites in the Himalayas, with Bortle Class 2 pristine skies. Mentored by astrophysicists and amateur astronomers, students observe Saturn’s rings, Jupiter’s moons, the Andromeda galaxy, and the glowing Milky Way through 8-inch and 11-inch motorized computerized telescopes.',
    learningOutcomes: [
      'Operate Newtonian and Schmidt-Cassegrain computerized telescopes',
      'Identify 30+ constellations, nebulae, binary star systems, and satellite passes',
      'Master DSLR/Smartphone astrophotography settings: ISO, aperture, stacking, and long exposures',
      'Learn about cosmological distances, stellar life cycles, and black holes'
    ],
    curriculumAlignment: 'Astrophysics, Optics & Physics (Lenses, Focal Lengths, Light Spectrum), and Digital Photography.',
    safetyHighlights: [
      'Warm heated indoor observation lounge for cold night observation sessions',
      'Regulated night schedule with daytime rest and sleep cycles',
      'Thermal blankets and continuous warm beverages available during stargazing'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Benital Astro Village & Telescope Basics',
        description: 'Check in at Benital Astro Village camp. Orientation on light pollution and dark sky preservation. Afternoon workshop: telescope optics and mounting systems. First night sky observation session.',
        learningFocus: 'Telescope Mechanics & Night Sky Etiquette',
        meals: 'Lunch, High Tea & Midnight Soup Dinner',
        stay: 'Benital Astro Camp'
      },
      {
        day: 2,
        title: 'Solar Astronomy & Deep Sky Observation',
        description: 'Morning safe solar observation using hydrogen-alpha solar filters to view sunspots and solar flares. Afternoon seminar on planetary science. Night session: observing Jupiter’s Great Red Spot and Saturn’s Cassini Division.',
        learningFocus: 'Solar Physics & Planetary Observation',
        meals: 'All Meals & Midnight Tea',
        stay: 'Benital Astro Camp'
      },
      {
        day: 3,
        title: 'Astrophotography & Milky Way Long Exposures',
        description: 'Hands-on daytime workshop on camera sensors, manual focus, and stacking software. Night practical shoot: capturing Milky Way arches and star trails over Himalayan peaks.',
        learningFocus: 'Astrophotography & Image Stacking',
        meals: 'All Meals',
        stay: 'Benital Astro Camp'
      },
      {
        day: 4,
        title: 'Messier Marathon Challenge & Constellation Lore',
        description: 'Team Messier Marathon: students locate deep-sky objects (Orion Nebula, Andromeda, Pleiades) using star charts. Folklore and mythology of constellations across ancient cultures.',
        learningFocus: 'Astronomical Navigation & Cosmology',
        meals: 'All Meals',
        stay: 'Benital Astro Camp'
      },
      {
        day: 5,
        title: 'Photo Exhibition, Certificates & Return',
        description: 'Exhibition of student astrophotos. Award of Junior Astronomer Certificates and safe return departure transfer.',
        learningFocus: 'Presentation & Wrap-up',
        meals: 'Breakfast & Packed Lunch',
        stay: 'Departure'
      }
    ],
    whatsIncluded: [
      '4 Nights stay in insulated alpine tents / astro village cottages',
      'Access to 8-inch and 11-inch motorized computerized telescopes and solar filters',
      'Mentorship by visiting astrophysicists and certified astrophotographers',
      'All meals including midnight warm drinks and snacks',
      'Certificate of Astronomy Bootcamp Participation'
    ],
    whatsExcluded: ['DSLR Camera (students can bring their own or use camp cameras)'],
    thingsToCarry: [
      'Heavy warm winter clothing (temperatures can drop to 3-6°C at night)',
      'Red-light flashlight (preserves night-adjusted vision)',
      'Sturdy tripod and DSLR/phone (optional)',
      'Thermal wear, warm socks, and woolen gloves'
    ],
    faqs: [
      {
        question: 'What happens if clouds appear during the night?',
        answer: 'We schedule daytime indoor simulation workshops, virtual planetarium software tutorials, and telescope optics assembly. Mountain weather at Benital typically clears up overnight.'
      }
    ]
  },
  {
    id: 'himalayan-botany-herbal-ecology',
    title: 'Valley of Flowers & Chamoli Alpine Botany Camp',
    track: 'Summer Learning Programmes',
    domain: 'Wildlife & Ecology',
    targetAudience: 'Ages 14 to 22',
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    location: 'Ghangaria & Valley of Flowers UNESCO Site',
    startingPrice: '₹9,800',
    supervisionRatio: '1:6 Botanical Guide Ratio',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    badge: 'UNESCO Heritage',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    shortDesc: 'A world-class botanical expedition inside the UNESCO World Heritage Valley of Flowers studying 500+ rare sub-alpine flowering species and medicinal herbs.',
    fullDesc: 'Step into nature’s most magnificent living laboratory. Led by plant taxonomists and local herbalists, students explore the glacial valley of Pushpawati river. Study endemic flowers like the Blue Poppy, Brahma Kamal, and Himalayan Bellflower, catalog floral specimens, and understand delicate alpine ecosystem preservation.',
    learningOutcomes: [
      'Identify 50+ alpine floral families and endemic high-altitude species',
      'Herbarium preparation and ethical botanical photographic taxonomy',
      'Study adaptations of high-altitude flora against UV radiation and freezing temperatures',
      'Understand UNESCO Biosphere Reserve conservation guidelines'
    ],
    curriculumAlignment: 'Botany, Environmental Ecology, Biodiversity Conservation & Herbal Sciences.',
    safetyHighlights: [
      'Strict trail safety with registered mountain guides',
      'Daily medical checkups and oxygen monitoring at Ghangaria base',
      'Zero-litter plastic-free protocols strictly monitored'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Rishikesh to Govindghat Base',
        description: 'Scenic drive along Devprayag and Rudraprayag confluences. Evening orientation on alpine flower morphology.',
        learningFocus: 'Geography & River Confluences',
        meals: 'All Meals',
        stay: 'Govindghat Guesthouse'
      },
      {
        day: 2,
        title: 'Trek to Ghangaria (10,000 ft)',
        description: 'Trek along Bhyundar Ganga river. Studying changing vegetation zones from temperate forest to sub-alpine rhododendrons.',
        learningFocus: 'Altitudinal Zonation in Plants',
        meals: 'All Meals',
        stay: 'Ghangaria Hotel'
      },
      {
        day: 3,
        title: 'Valley of Flowers Core Exploration',
        description: 'Enter the national park. Guided study of Pushpawati river bed flora: Blue Poppy, Potentilla, Geranium, and Cobra Lily.',
        learningFocus: 'Alpine Floral Morphology',
        meals: 'All Meals & Trail Snacks',
        stay: 'Ghangaria Hotel'
      },
      {
        day: 4,
        title: 'Hemkund Lake Alpine Glacial Ecosystem',
        description: 'Ascent to 14,200 ft sacred lake. Study of the rare Brahma Kamal (Saussurea obvallata) and glacial moraines.',
        learningFocus: 'Cryosphere Botany & High-Altitude Adaptations',
        meals: 'All Meals',
        stay: 'Ghangaria Hotel'
      },
      {
        day: 5,
        title: 'Descent to Govindghat & Herbarium Workshop',
        description: 'Trek down to Govindghat. Evening botanical journal compilation and peer presentation of plant findings.',
        learningFocus: 'Taxonomic Documentation & Journaling',
        meals: 'All Meals',
        stay: 'Govindghat Hotel'
      },
      {
        day: 6,
        title: 'Return to Rishikesh / Dehradun',
        description: 'Scenic return drive with certificate distribution ceremony.',
        learningFocus: 'Reflection & Safe Return',
        meals: 'Breakfast & Lunch',
        stay: 'Departure'
      }
    ],
    whatsIncluded: [
      'All accommodations in Govindghat and Ghangaria',
      'All meals and trail energy snacks',
      'National Park entry fees, permits, and botanical guides',
      'UK Yatra Botanical Field Journal & Certificate'
    ],
    whatsExcluded: ['Personal pony or porter charges (if hired)'],
    thingsToCarry: ['Waterproof trekking shoes, rain poncho, thermal layers, camera'],
    faqs: [
      {
        question: 'When is the best time for the Valley of Flowers camp?',
        answer: 'July to early September is the peak bloom season when hundreds of flower varieties blanket the valley.'
      }
    ]
  }
];

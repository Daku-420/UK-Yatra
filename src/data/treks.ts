import { Trek } from '../types';

/**
 * Authoritative Uttarakhand Himalayan Treks Database
 * Comprehensive catalog covering high-altitude summits, alpine meadows (bugyals),
 * glacial lakes, and river valley trails. Designed for technical SEO, trek comparison,
 * month-by-month calendar discovery, and rich landing pages.
 */
export const TREKS: Trek[] = [
  {
    id: 'kedarkantha',
    slug: 'kedarkantha',
    name: 'Kedarkantha Trek',
    tagline: "India's Classic Winter Snow Trek & 360° Himalayan Summit",
    difficulty: 'Easy',
    duration: '5 Days / 4 Nights',
    altitude: '12,500 ft (3,810 m)',
    maxAltitude: '12,500 ft',
    trailLength: '20 km',
    distance: '20 km',
    region: 'Garhwal',
    baseCamp: 'Sankri Village',
    startingPoint: 'Sankri (Uttarkashi District)',
    endingPoint: 'Sankri',
    bestSeason: 'December to April (Snow) & May, Oct-Nov',
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Oct', 'Nov', 'Dec'],
    temperature: {
      summer: '8°C to 18°C',
      winter: '-5°C to 10°C (Summit sub-zero)',
      day: '5°C to 15°C',
      night: '-5°C to 2°C'
    },
    snowAvailability: 'Heavy snowfall from mid-December through April. Deep snow campsites.',
    hasSnow: true,
    beginnerSuitability: 'Ideal for beginners and first-time winter trekkers with reasonable fitness.',
    isBeginnerFriendly: true,
    fitnessRequirement: 'Should be able to jog 4-5 km in 30 minutes without undue fatigue.',
    permitInformation: 'Govind Pashu Vihar National Park permits required; arranged by UK Yatra at Sankri forest checkpost.',
    howToReach: {
      nearestRailhead: 'Dehradun Railway Station (200 km, 7-8 hours scenic mountain drive)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (225 km)',
      distanceFromDehradun: '200 km via Mussoorie, Nainbagh, Purola, and Mori',
      byRoad: 'Shared cabs and private vehicle transfers available directly from Dehradun ISBT and Railway Station.'
    },
    distanceFromDehradunKm: 200,
    startingPrice: '₹8,499',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'
    ],
    highlights: [
      'Spectacular 360-degree summit sunrise view of Swargarohini, Black Peak (Kalanag), and Bandarpoonch',
      'Camping beside the frozen Juda Ka Talab alpine lake surrounded by pine and oak trees',
      'Exhilarating snow glissading down slopes during the winter months (Jan to March)',
      'Scenic trail through Govind Pashu Vihar National Park with charming wooden Himalayan hamlets'
    ],
    overview: 'Kedarkantha is widely celebrated as India’s finest winter summit trek. Located inside the Govind Pashu Vihar National Park in western Garhwal, this trail treats trekkers to deep snow corridors, picturesque high-altitude campsites, and an unmatched 360-degree summit ridge. From the summit at 12,500 feet, you witness a sweeping amphitheater of mountain giants including Bandarpoonch, Swargarohini, Black Peak, and the Dhaula Dhar ranges of Himachal Pradesh.',
    routeOverview: 'Dehradun → Mussoorie → Purola → Sankri (Base Camp) → Juda Ka Talab (Camp 1) → Kedarkantha Base Camp (Camp 2) → Summit Push (12,500 ft) → Hargaon Camp → Sankri → Dehradun.',
    itinerary: [
      {
        day: 1,
        title: 'Drive from Dehradun to Sankri (Base Camp)',
        desc: 'Meet our team at Dehradun Railway Station by 6:30 AM. Embark on a picturesque 200 km drive passing Mussoorie, Kempty Falls, Nainbagh, and along the roaring Tons River to Sankri village (6,400 ft). Evening briefing and gear check.',
        stay: 'Guesthouse / Homestay in Sankri',
        meals: 'Dinner',
        altitude: '6,400 ft (1,950 m)',
        distance: '200 km drive (7-8 hours)'
      },
      {
        day: 2,
        title: 'Trek from Sankri to Juda Ka Talab',
        desc: 'Begin trekking from Sankri through dense pine and oak forests. The trail ascends steadily over forest bridges with views of potato fields and mountain hamlets. Reach the iconic Juda Ka Talab campsite, where the frozen lake sits amidst giant conifers.',
        stay: 'Alpine Tents at Juda Ka Talab',
        meals: 'Breakfast, Lunch, Evening Snacks & Dinner',
        altitude: '9,100 ft (2,773 m)',
        distance: '4 km trek (4-5 hours)'
      },
      {
        day: 3,
        title: 'Trek from Juda Ka Talab to Kedarkantha Base Camp',
        desc: 'Trek above the tree line through rolling snowfields. As the forest clears, majestic views of Bandarpoonch, Swargarohini, and Kala Nag emerge. Arrive at Kedarkantha Base Camp early afternoon. Practice gaiter & microspike usage for summit day.',
        stay: 'Alpine Tents at Kedarkantha Base Camp',
        meals: 'Breakfast, Lunch, Evening Snacks & Dinner',
        altitude: '10,600 ft (3,230 m)',
        distance: '4 km trek (3-4 hours)'
      },
      {
        day: 4,
        title: 'Summit Push (12,500 ft) & Descent to Hargaon Camp',
        desc: 'Alpine summit push begins at 3:30 AM under a canopy of stars. Ascend the steep ridge to the Kedarkantha summit before sunrise. Watch the golden rays illuminate Swargarohini and Bandarpoonch. Enjoy summit hot tea, then descend via Hargaon meadow camp.',
        stay: 'Alpine Tents at Hargaon Camp',
        meals: 'Breakfast, Pack Lunch, Evening Snacks & Dinner',
        altitude: '12,500 ft summit (Descent to 8,900 ft)',
        distance: '6 km trek (6-7 hours)'
      },
      {
        day: 5,
        title: 'Descent from Hargaon to Sankri & Drive to Dehradun',
        desc: 'Trek down through dense pine groves and apple orchards back to Sankri. Board vehicles by 11:30 AM for the return journey to Dehradun. Reach Dehradun Railway Station / Airport by 7:30 PM with unforgettable summit memories.',
        stay: 'Departure',
        meals: 'Breakfast',
        altitude: '6,400 ft at Sankri',
        distance: '6 km trek + 200 km drive'
      }
    ],
    inclusions: [
      'Accommodation in Sankri guesthouse and 4-season alpine tents on twin/triple sharing',
      'All nutritious vegetarian mountain meals (Breakfast, Lunch, Evening Snacks, Soup, Dinner)',
      'Certified Wilderness First Aid (WFA) Trek Leader & local high-altitude mountain guides (1:6 ratio)',
      'High-grade mountaineering equipment: All-season tents, sub-zero sleeping bags, insulated mattresses, crampons/microspikes, and gaiters',
      'Govind Pashu Vihar National Park forest permits and camping fees',
      'Safety equipment: Medical oxygen cylinders, pulse oximeters, and first-aid kits'
    ],
    exclusions: [
      'Transport from Dehradun to Sankri and return (Available on request at actual cost)',
      'Personal trekking gear (Boots, warm jacket, trekking pole, backpack)',
      'Mule/porter charges for carrying personal backpack (Offloading available on prior notice)',
      'Emergency evacuation, travel insurance, or unforeseen medical expenses',
      'Any meals during road journeys between Dehradun and Sankri'
    ],
    packingList: [
      'Sturdy waterproof trekking boots with deep lug soles',
      'Quick-dry synthetic base layers (thermal top & bottom)',
      'Fleece jacket and heavy down jacket (-10°C rated)',
      'Waterproof outer pants and trekking trousers',
      'Warm woolen socks (4 pairs) and waterproof gloves',
      'UV sunglasses with Category 3/4 protection',
      'Headlamp or LED torch with extra batteries',
      'Insulated 1-litre thermos flask and water bottle'
    ],
    safetyInfo: [
      '1:6 Leader-to-Trekker ratio on all summit attempts',
      'Mandatory daily morning & evening pulse oximeter vitals check',
      'Wilderness First Aid certified expedition leadership',
      'Portable oxygen cylinder and emergency stretcher on standby'
    ],
    faqs: [
      {
        question: 'Is Kedarkantha trek suitable for beginners?',
        answer: 'Yes! Kedarkantha is one of the best Himalayan summit treks for beginners because the daily distances are manageable (4 to 6 km per day) and the ascent profile is gradual, allowing excellent acclimatization.'
      },
      {
        question: 'When is the best time to see snow on Kedarkantha?',
        answer: 'Snow begins falling in mid-December and remains on the trail until mid-April. For maximum snow cover and frozen lake views at Juda Ka Talab, plan your trek between January and early March.'
      },
      {
        question: 'How cold does it get during the Kedarkantha trek?',
        answer: 'During winter (Dec-Feb), daytime temperatures range from 5°C to 12°C in the sun, while night temperatures at Base Camp drop between -2°C and -8°C. Our 4-season sleeping bags are rated down to -10°C.'
      },
      {
        question: 'How do I reach Sankri base camp from Dehradun?',
        answer: 'Sankri is 200 km from Dehradun. Shared cabs depart early morning (6:00 to 7:00 AM) from near Dehradun Railway Station. UK Yatra also organizes coordinated vehicle transfers for all registered batch members.'
      }
    ],
    reviews: [
      {
        id: 'rev-kk-1',
        author: 'Arjun Nambiar',
        location: 'Bengaluru',
        rating: 5,
        date: 'January 2026',
        comment: 'Kedarkantha was my very first Himalayan summit! The sunrise view of Swargarohini from 12,500 feet left me speechless. The UK Yatra team provided microspikes, hot nutritious food, and exceptional safety supervision.'
      },
      {
        id: 'rev-kk-2',
        author: 'Smriti & Tanmay Roy',
        location: 'Kolkata',
        rating: 5,
        date: 'December 2025',
        comment: 'The snow camp at Juda Ka Talab was like a fairytale. Excellent trek leaders who monitored our oxygen levels daily. Highly recommend UK Yatra for winter trekking in Uttarakhand!'
      }
    ],
    relatedTreks: ['dayara-bugyal', 'har-ki-dun', 'kuari-pass', 'brahmatal'],
    relatedDestinations: ['sankri', 'mussoorie', 'dehradun'],
    relatedPackages: ['uky-road-08-winter-snow-auli-chopta-05n-06d'],
    relatedArticles: ['best-winter-treks-in-uttarakhand', 'kedarkantha-complete-travel-guide']
  },
  {
    id: 'valley-of-flowers',
    slug: 'valley-of-flowers',
    name: 'Valley of Flowers & Hemkund Sahib Trek',
    tagline: 'UNESCO World Heritage Alpine Floral Paradise & Sacred High Lake',
    difficulty: 'Moderate',
    duration: '6 Days / 5 Nights',
    altitude: '14,400 ft (4,389 m)',
    maxAltitude: '14,400 ft (Hemkund Sahib)',
    trailLength: '38 km',
    distance: '38 km',
    region: 'Garhwal',
    baseCamp: 'Govindghat / Pulna',
    startingPoint: 'Pulna (near Govindghat, Chamoli)',
    endingPoint: 'Govindghat',
    bestSeason: 'July to September (Monsoon Floral Bloom)',
    bestMonths: ['Jul', 'Aug', 'Sep'],
    temperature: {
      summer: '12°C to 20°C',
      winter: 'Snowbound (Closed)',
      day: '10°C to 17°C',
      night: '4°C to 10°C'
    },
    snowAvailability: 'Late snow patches around Hemkund Sahib in June/early July. Valley blooms July-August.',
    hasSnow: false,
    beginnerSuitability: 'Suitable for fit beginners and experienced hikers ready for moderate stone-paved ascents.',
    isBeginnerFriendly: true,
    fitnessRequirement: 'Ability to walk 8-10 km uphill with light daypack. Moderate cardio stamina.',
    permitInformation: 'Forest entry permit issued by Nanda Devi Biosphere Reserve / Valley of Flowers National Park at Ghangaria.',
    howToReach: {
      nearestRailhead: 'Rishikesh Railway Station (275 km) or Haridwar (295 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (290 km)',
      distanceFromDehradun: '290 km via Rishikesh, Devprayag, Srinagar, Rudraprayag, and Joshimath',
      byRoad: 'NH58 connects directly from Rishikesh to Govindghat. Paved motorable road up to Pulna village.'
    },
    distanceFromDehradunKm: 290,
    startingPrice: '₹9,999',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop'
    ],
    highlights: [
      'Over 500 varieties of wild Himalayan flowers including the rare Blue Poppy and sacred Brahma Kamal',
      'UNESCO World Heritage site nestled within the Nanda Devi Biosphere Reserve',
      'Trek to the holy glacial lake of Shri Hemkund Sahib surrounded by seven towering snow peaks at 14,400 ft',
      'Roaring Pushpawati river cascades, glacial meltwater streams, and pristine birch forests'
    ],
    overview: 'Valley of Flowers National Park is a dreamscape in Uttarakhand’s Chamoli district. Discovered accidentally by British mountaineer Frank S. Smythe in 1931, this high-altitude glacial valley erupts into a riot of colors between July and early September. Trekkers walk alongside the Pushpawati River among carpets of wildflowers, surrounded by towering 6,000-meter peaks. The expedition is paired with a climb to Hemkund Sahib—the world’s highest Sikh pilgrimage shrine situated by a crystal-clear glacial lake.',
    routeOverview: 'Rishikesh → Joshimath → Govindghat → Pulna → Ghangaria (Base Camp) → Valley of Flowers → Ghangaria → Hemkund Sahib (14,400 ft) → Ghangaria → Govindghat → Rishikesh.',
    itinerary: [
      {
        day: 1,
        title: 'Drive from Rishikesh to Joshimath / Govindghat',
        desc: 'Depart Rishikesh early morning along NH58. Witness the sacred Panch Prayag river confluences (Devprayag, Rudraprayag, Karnaprayag). Arrive at Joshimath or Govindghat by evening. Check in to mountain hotel and briefing.',
        stay: 'Hotel in Govindghat / Joshimath',
        meals: 'Dinner',
        altitude: '6,200 ft (1,890 m)',
        distance: '275 km drive (9-10 hours)'
      },
      {
        day: 2,
        title: 'Drive to Pulna & Trek to Ghangaria (Base Camp)',
        desc: 'Short 4 km drive to Pulna. Begin the scenic stone-paved trek along the Bhyundar Ganga river. Pass charming mountain cafes, walnut orchards, and cascading waterfalls to reach Ghangaria (9,800 ft), the base camp for both Valley and Hemkund.',
        stay: 'Hotel / Guesthouse in Ghangaria',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '9,800 ft (2,987 m)',
        distance: '10 km trek (5-6 hours)'
      },
      {
        day: 3,
        title: 'Trek from Ghangaria to Valley of Flowers and Back',
        desc: 'Enter the UNESCO National Park checkpost at 7:00 AM. Cross the wooden bridge over Pushpawati River. Enter the sprawling carpet of flowers stretching 8 km deep into the valley. Visit Joan Margaret Legge memorial grave. Return to Ghangaria by 5:00 PM (No night camping allowed inside).',
        stay: 'Hotel / Guesthouse in Ghangaria',
        meals: 'Breakfast, Pack Lunch, Dinner',
        altitude: '11,500 ft (3,505 m)',
        distance: '8 km trek (6 hours)'
      },
      {
        day: 4,
        title: 'Trek to Hemkund Sahib (14,400 ft) and Back to Ghangaria',
        desc: 'Ascend the steep, switchback path to the sacred glacial lake of Hemkund Sahib (14,400 ft). Witness the rare Brahma Kamal blooming along rock faces. Visit the high-altitude Gurudwara and Lakshman Temple. Enjoy hot langar and sweet tea before descending back to Ghangaria.',
        stay: 'Hotel / Guesthouse in Ghangaria',
        meals: 'Breakfast, Langar/Pack Lunch, Dinner',
        altitude: '14,400 ft (4,389 m)',
        distance: '12 km round-trip trek (7-8 hours)'
      },
      {
        day: 5,
        title: 'Trek Down from Ghangaria to Pulna & Drive to Joshimath',
        desc: 'Trek downhill back along the Bhyundar valley to Pulna village. Board waiting vehicles to Govindghat and transfer to Joshimath. Optional visit to Shankaracharya Math or local bazaar. Celebration dinner with the team.',
        stay: 'Hotel in Joshimath',
        meals: 'Breakfast, Dinner',
        altitude: '6,200 ft',
        distance: '10 km trek + 25 km drive'
      },
      {
        day: 6,
        title: 'Drive from Joshimath to Rishikesh / Dehradun',
        desc: 'Early morning drive along the Alaknanda valley. Pass through scenic mountain towns and arrive in Rishikesh by 6:00 PM. Drop-off at railway station or airport.',
        stay: 'Departure',
        meals: 'Breakfast',
        altitude: '1,200 ft at Rishikesh',
        distance: '275 km drive'
      }
    ],
    inclusions: [
      'Hotel / Guesthouse accommodations in Govindghat, Joshimath, and Ghangaria on twin sharing',
      'All meals on the trek (Breakfast, Lunch/Packed Lunch, Evening Tea, Dinner)',
      'Certified trek leaders with extensive botanical knowledge and wilderness first aid certification',
      'Valley of Flowers National Park permits and entry fees for Indian nationals',
      'First aid kit, emergency oxygen cylinder, and pulse oximeter'
    ],
    exclusions: [
      'Transportation between Rishikesh and Govindghat (Available on shared basis)',
      'Mule, porter, or helicopter charges between Govindghat and Ghangaria',
      'Personal trekking gear, rain ponchos, and backpack offloading',
      'National park entry fee for foreign nationals',
      'Any personal expenses and food ordered outside package menu'
    ],
    packingList: [
      'Quality rain poncho or waterproof jacket and pants (Essential for monsoon)',
      'Waterproof high-ankle trekking shoes with good grip on wet stones',
      'Quick-dry clothing and synthetic t-shirts (3-4 sets)',
      'Waterproof backpack cover and dry bags for electronics',
      'Thermals and light fleece for evening chill in Ghangaria'
    ],
    safetyInfo: [
      'Ghangaria sits at nearly 10,000 ft; we enforce hydration and steady pace',
      'Medical oxygen and emergency pony support on standby at Ghangaria',
      'Monsoon weather monitoring with local administrative alerts'
    ],
    faqs: [
      {
        question: 'When is the best time to see the flowers in full bloom?',
        answer: 'The peak blooming window is from mid-July to late August. Early July sees fresh alpine sprouts, late July to August offers dense color carpets, and early September features seed pods and golden autumn hues.'
      },
      {
        question: 'Is night camping allowed inside the Valley of Flowers?',
        answer: 'No. The Valley of Flowers is a strictly protected UNESCO World Heritage National Park. All visitors must exit the valley gate by 5:00 PM and stay overnight in Ghangaria village.'
      },
      {
        question: 'Can senior citizens visit Valley of Flowers and Hemkund Sahib?',
        answer: 'Yes! Helicopter service is available between Govindghat and Ghangaria. Ponies and palanquins (doli) are also readily available for the trek to Hemkund Sahib and the entrance of the valley.'
      }
    ],
    reviews: [
      {
        id: 'rev-vof-1',
        author: 'Dr. Meenakshi Sundaram',
        location: 'Chennai',
        rating: 5,
        date: 'August 2025',
        comment: 'Witnessing the Blue Poppy and Brahma Kamal in their natural habitat was a dream come true. The logistics by UK Yatra from Rishikesh to Ghangaria were smooth, and our botanical guide made every flower come alive!'
      }
    ],
    relatedTreks: ['kuari-pass', 'chopta-chandrashila', 'dayara-bugyal'],
    relatedDestinations: ['hemkund-sahib', 'valley-of-flowers', 'auli', 'badrinath', 'rishikesh'],
    relatedPackages: ['uky-road-03-badrinath-auli-chopta-05n-06d'],
    relatedArticles: ['valley-of-flowers-blooming-guide', 'best-treks-in-uttarakhand']
  },
  {
    id: 'dayara-bugyal',
    slug: 'dayara-bugyal',
    name: 'Dayara Bugyal Trek',
    tagline: 'Vastest Alpine Meadow of Uttarakhand with Bandarpoonch Views',
    difficulty: 'Easy',
    duration: '5 Days / 4 Nights',
    altitude: '12,057 ft (3,675 m)',
    maxAltitude: '12,057 ft',
    trailLength: '22 km',
    distance: '22 km',
    region: 'Garhwal',
    baseCamp: 'Raithal Village (Uttarkashi)',
    startingPoint: 'Raithal Village',
    endingPoint: 'Barsu or Raithal',
    bestSeason: 'Round the Year (Dec-Mar for Snow; May-Oct for Meadows)',
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Sep', 'Oct', 'Nov', 'Dec'],
    temperature: {
      summer: '10°C to 20°C',
      winter: '-5°C to 8°C',
      day: '8°C to 16°C',
      night: '-4°C to 4°C'
    },
    snowAvailability: 'Expansive snow carpet across 28 sq km of meadows between December and March.',
    hasSnow: true,
    beginnerSuitability: 'One of the most beginner-friendly and family-friendly alpine treks in the Himalayas.',
    isBeginnerFriendly: true,
    fitnessRequirement: 'Basic fitness. Ability to walk 4-5 hours daily with regular breathers.',
    permitInformation: 'Uttarkashi forest department permits; arranged on arrival at Raithal.',
    howToReach: {
      nearestRailhead: 'Dehradun Railway Station (185 km, 6-7 hours)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (205 km)',
      distanceFromDehradun: '185 km via Chamba, Uttarkashi, and Bhatwari',
      byRoad: 'Drive from Dehradun along the Bhagirathi river valley to Raithal village.'
    },
    distanceFromDehradunKm: 185,
    startingPrice: '₹7,999',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'
    ],
    highlights: [
      'Walk across 28 square kilometers of pristine undulating high-altitude meadows (Bugyal)',
      'Front-row panoramic views of Mt. Bandarpoonch (6,316m), Black Peak, and Gangotri massifs',
      'Traditional Garhwali stone architecture and homestay culture in Raithal village',
      'Transforms from emerald green wildflowers in summer to an endless ski-slope in winter'
    ],
    overview: 'Dayara Bugyal ranks among the two most spectacular alpine meadows in India. Spanning over 28 square kilometers at an elevation exceeding 11,000 feet in Uttarkashi, it provides an uninterrupted vista of the Bandarpoonch and Draupadi Ka Danda massifs. Unlike summit ridges with steep precipices, Dayara offers rolling green hills in summer and velvety snowfields in winter, making it a favorite for beginners, photographers, and families alike.',
    routeOverview: 'Dehradun → Uttarkashi → Raithal (Base Camp) → Gui Campsite → Dayara Top (12,057 ft) → Chilapada → Raithal → Dehradun.',
    itinerary: [
      {
        day: 1,
        title: 'Drive from Dehradun to Raithal Base Camp',
        desc: 'Depart Dehradun early morning via the scenic Tehri Dam reservoir or Mussoorie bypass. Follow the turquoise Bhagirathi river past Uttarkashi town to the historic stone-house village of Raithal (7,000 ft). Overnight in village homestay.',
        stay: 'Homestay in Raithal',
        meals: 'Dinner',
        altitude: '7,000 ft (2,133 m)',
        distance: '185 km drive (6-7 hours)'
      },
      {
        day: 2,
        title: 'Trek from Raithal to Gui Campsite',
        desc: 'Begin ascending through lush oak, pine, and rhododendron forests. Gradual climb with peek-a-boo views of Gangotri ranges. Reach Gui campsite situated in a quiet forest clearing with traditional shepherd huts and a tranquil pond.',
        stay: 'Alpine Tents at Gui',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '9,500 ft (2,895 m)',
        distance: '4.5 km trek (4 hours)'
      },
      {
        day: 3,
        title: 'Trek from Gui to Dayara Bugyal Meadow Camp',
        desc: 'Trek past the tree line into the vast open meadows of Dayara. The horizon suddenly opens up to an ocean of green grass (or glittering snow). Set up camp with uninterrupted views of Bandarpoonch and Kala Nag peaks.',
        stay: 'Alpine Tents at Dayara Bugyal',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '11,100 ft (3,383 m)',
        distance: '3.5 km trek (3 hours)'
      },
      {
        day: 4,
        title: 'Exploration to Dayara Top (12,057 ft) & Descent to Gui / Raithal',
        desc: 'Morning hike to Bakaria Top / Dayara Top (12,057 ft) for the highest vantage point of the meadow. Enjoy breathtaking 360-degree views of Gangotri I, II, III, Srikanth, and Jaonli. Descend back through Gui to Raithal village.',
        stay: 'Homestay in Raithal',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '12,057 ft at Top, descent to 7,000 ft',
        distance: '7 km trek (5 hours)'
      },
      {
        day: 5,
        title: 'Drive from Raithal to Dehradun',
        desc: 'After a hearty village breakfast, board vehicles for Dehradun. Reach Dehradun Railway Station by 4:00 PM for onwards travels.',
        stay: 'Departure',
        meals: 'Breakfast',
        altitude: '2,200 ft at Dehradun',
        distance: '185 km drive'
      }
    ],
    inclusions: [
      'Homestay in Raithal and 4-season alpine tents on trek',
      'All nutritious mountain meals prepared fresh at camps',
      'Certified trek leaders, local guides, and camping staff',
      'High-grade camping gear, sleeping bags, and mats',
      'Forest entry permits and conservation charges',
      'Safety equipment (Oximeters, oxygen cylinder, medical kit)'
    ],
    exclusions: [
      'Transport from Dehradun to Raithal and return (Available on actual shared cost)',
      'Personal backpack offloading on mules',
      'Personal equipment and insurance'
    ],
    packingList: [
      'Trekking shoes with solid ankle support',
      'Warm fleece jacket and windproof shell jacket',
      'Woolen cap, sun cap, and polarized sunglasses',
      'Trekking poles (highly recommended for descents)'
    ],
    safetyInfo: [
      'Gradual altitude gain of less than 2,500 ft per day',
      'Daily vitals monitoring',
      'Easy trail with multiple exit routes'
    ],
    faqs: [
      {
        question: 'Which is better: Kedarkantha or Dayara Bugyal?',
        answer: 'Both are stellar. Kedarkantha offers an exhilarating summit push with a distinct mountain peak at 12,500 ft, whereas Dayara Bugyal features endless rolling meadows (Bugyal) and grander close-up panoramas of Mt. Bandarpoonch.'
      },
      {
        question: 'Is Dayara Bugyal safe for children and families?',
        answer: 'Yes, Dayara Bugyal is one of the safest high-altitude meadows in India with gentle gradients and comfortable campsites, making it ideal for family adventures.'
      }
    ],
    reviews: [
      {
        id: 'rev-db-1',
        author: 'Kavita & Alok Saxena',
        location: 'New Delhi',
        rating: 5,
        date: 'May 2025',
        comment: 'The meadows of Dayara Bugyal in spring are heavenly. Wild buttercups everywhere and Bandarpoonch peak shining in front of our tents. UK Yatra took great care of our 10-year-old son.'
      }
    ],
    relatedTreks: ['kedarkantha', 'har-ki-dun', 'kuari-pass'],
    relatedDestinations: ['dayara-bugyal', 'dehradun', 'mussoorie'],
    relatedPackages: ['uky-road-08-winter-snow-auli-chopta-05n-06d'],
    relatedArticles: ['best-treks-in-uttarakhand', 'best-winter-treks-in-uttarakhand']
  },
  {
    id: 'har-ki-dun',
    slug: 'har-ki-dun',
    name: 'Har Ki Dun Trek',
    tagline: 'The Valley of Gods, Ancient Pandava Trails & Swargarohini Vistas',
    difficulty: 'Moderate',
    duration: '7 Days / 6 Nights',
    altitude: '11,700 ft (3,566 m)',
    maxAltitude: '11,700 ft',
    trailLength: '47 km',
    distance: '47 km',
    region: 'Garhwal',
    baseCamp: 'Sankri Village',
    startingPoint: 'Taluka (near Sankri)',
    endingPoint: 'Taluka / Sankri',
    bestSeason: 'March to June & September to December',
    bestMonths: ['Mar', 'Apr', 'May', 'Jun', 'Sep', 'Oct', 'Nov', 'Dec'],
    temperature: {
      summer: '10°C to 20°C',
      winter: '-8°C to 5°C',
      day: '6°C to 15°C',
      night: '-3°C to 5°C'
    },
    snowAvailability: 'Snowfall from late December through early April. Valley remains blanketed in white in winter.',
    hasSnow: true,
    beginnerSuitability: 'Suitable for beginners with good endurance, as daily walking distances are 10-14 km.',
    isBeginnerFriendly: false,
    fitnessRequirement: 'Good endurance. Ability to trek 5-6 hours consecutively on mountain trails.',
    permitInformation: 'Govind Pashu Vihar National Park entry permits obtained at Sankri.',
    howToReach: {
      nearestRailhead: 'Dehradun Railway Station (200 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (225 km)',
      distanceFromDehradun: '200 km via Mussoorie and Purola to Sankri, then 12 km to Taluka',
      byRoad: 'Private and shared cabs ply daily from Dehradun to Sankri.'
    },
    distanceFromDehradunKm: 200,
    startingPrice: '₹10,499',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'
    ],
    highlights: [
      'Trek along the mythical trail where the Pandavas ascended towards heaven (Swargarohini)',
      'Explore Osla and Seema: ancient 2,000-year-old Himalayan wooden architecture and Duryodhana/Someshwar temples',
      'Stunning views of Swargarohini I, II, III peaks, Jaundhar Glacier, and Hata Peak',
      'Rich biodiversity of Govind Pashu Vihar with sightings of golden eagles, musk deer, and bhojpatra trees'
    ],
    overview: 'Har Ki Dun, or "The Valley of Gods", is a cradle-shaped hanging valley in the western Garhwal Himalayas. Rich in folklore, this is the historic route believed to have been taken by the Pandavas on their ascent to heaven. Trekkers cross pristine conifer forests, roaring Supin river rapids, and centuries-old wooden villages like Osla, culminating in front of the colossal Swargarohini snow ridge.',
    routeOverview: 'Dehradun → Sankri → Taluka → Seema / Osla → Har Ki Dun Valley → Jaundhar Glacier Viewpoint → Osla → Taluka → Sankri → Dehradun.',
    itinerary: [
      {
        day: 1,
        title: 'Drive from Dehradun to Sankri (Base Camp)',
        desc: 'Scenic 200 km drive from Dehradun through pine valleys along the Tons and Supin rivers. Overnight at guesthouse in Sankri.',
        stay: 'Guesthouse in Sankri',
        meals: 'Dinner',
        altitude: '6,400 ft',
        distance: '200 km drive'
      },
      {
        day: 2,
        title: 'Drive to Taluka & Trek to Seema / Pauni Ghaat',
        desc: '12 km dirt road drive to Taluka. Begin trek through cedar and chestnut forests along the gushing Supin River. Cross historic wooden suspension bridges to reach campsite near Seema.',
        stay: 'Alpine Tents',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '8,200 ft',
        distance: '12 km drive + 10 km trek'
      },
      {
        day: 3,
        title: 'Trek from Seema to Kalkattiyadhar',
        desc: 'Steady ascent crossing agricultural fields of amaranth and barley. Cross the bridge over Supin river and catch your first grand views of Har Ki Dun peak and Swargarohini. Camp on high grassy ridge at Kalkattiyadhar.',
        stay: 'Alpine Tents',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '9,800 ft',
        distance: '8 km trek (5 hours)'
      },
      {
        day: 4,
        title: 'Trek to Har Ki Dun Valley & Maninda Tal / Jaundhar Glacier',
        desc: 'Trek into the amphitheater of Har Ki Dun valley. Towering Swargarohini and Hata peaks dominate the horizon. Explore the glacial snout towards Jaundhar or the serene waters of Maninda Tal.',
        stay: 'Alpine Tents at Har Ki Dun',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '11,700 ft',
        distance: '7 km trek (5 hours)'
      },
      {
        day: 5,
        title: 'Trek from Har Ki Dun to Seema via Ancient Osla Village',
        desc: 'Descend through the valley and visit the historic village of Osla. Admire the carved wooden temples and meet the local villagers. Continue down to Seema campsite.',
        stay: 'Alpine Tents',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '8,200 ft',
        distance: '14 km trek (6 hours)'
      },
      {
        day: 6,
        title: 'Trek from Seema to Taluka & Drive to Sankri',
        desc: 'Easy downhill trek alongside the Supin river to Taluka. Vehicle picks up for the short drive back to Sankri. Celebratory dinner and hot shower.',
        stay: 'Guesthouse in Sankri',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '6,400 ft',
        distance: '10 km trek + 12 km drive'
      },
      {
        day: 7,
        title: 'Drive from Sankri to Dehradun',
        desc: 'Return drive to Dehradun arriving by 6:00 PM for flights or trains.',
        stay: 'Departure',
        meals: 'Breakfast',
        altitude: '2,200 ft at Dehradun',
        distance: '200 km drive'
      }
    ],
    inclusions: [
      'Guesthouse stays in Sankri and premium camping tents on trail',
      'All meals throughout the trekking expedition',
      'Certified mountain trek leaders, local guides, and cook team',
      'Forest department permits and national park passes',
      'Medical oxygen, first aid equipment, and emergency protocols'
    ],
    exclusions: [
      'Vehicle transport from Dehradun to Sankri & return (Shared cabs arranged)',
      'Personal offloading of rucksacks on mules',
      'Personal insurance and trekking gear'
    ],
    packingList: [
      'Trekking boots with high ankle support',
      'Fleece and down jacket rated for sub-zero temperatures',
      'Thermal inners, moisture-wicking shirts, trekking pants',
      'Personal toiletries and water purification tablets'
    ],
    safetyInfo: [
      'Gradual multi-day elevation gain prevents AMS',
      'Daily health parameters checked by leaders'
    ],
    faqs: [
      {
        question: 'How difficult is Har Ki Dun compared to Kedarkantha?',
        answer: 'Kedarkantha is shorter (5 days, 20 km) and reaches a higher peak (12,500 ft). Har Ki Dun is longer (7 days, 47 km) at 11,700 ft with greater endurance requirements and deeper valley exploration.'
      }
    ],
    reviews: [
      {
        id: 'rev-hkd-1',
        author: 'Rohan Deshmukh',
        location: 'Pune',
        rating: 5,
        date: 'October 2025',
        comment: 'Har Ki Dun felt like stepping into an ancient world. The wooden houses in Osla and the colossal Swargarohini wall in front of our camp were unforgettable. Superb execution by UK Yatra.'
      }
    ],
    relatedTreks: ['kedarkantha', 'dayara-bugyal', 'bali-pass'],
    relatedDestinations: ['sankri', 'osla-village', 'dehradun'],
    relatedPackages: ['uky-road-08-winter-snow-auli-chopta-05n-06d'],
    relatedArticles: ['best-treks-in-uttarakhand', 'best-winter-treks-in-uttarakhand']
  },
  {
    id: 'nag-tibba',
    slug: 'nag-tibba',
    name: 'Nag Tibba Weekend Trek',
    tagline: "Serpent's Peak Weekend Summit with Bandarpoonch & Gangotri Panoramas",
    difficulty: 'Easy',
    duration: '2 Days / 1 Night',
    altitude: '9,915 ft (3,022 m)',
    maxAltitude: '9,915 ft',
    trailLength: '16 km',
    distance: '16 km',
    region: 'Garhwal',
    baseCamp: 'Pantwari Village (near Mussoorie)',
    startingPoint: 'Pantwari Village',
    endingPoint: 'Pantwari Village',
    bestSeason: 'October to May (Winter Snow in Jan-Feb)',
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Oct', 'Nov', 'Dec'],
    temperature: {
      summer: '12°C to 24°C',
      winter: '-2°C to 12°C',
      day: '10°C to 20°C',
      night: '0°C to 8°C'
    },
    snowAvailability: 'Snow covered from late December through February; perfect weekend snow trek.',
    hasSnow: true,
    beginnerSuitability: 'The best 2-day beginner trek in Uttarakhand; great for working professionals from Delhi/NCR.',
    isBeginnerFriendly: true,
    fitnessRequirement: 'Basic fitness. Ability to walk 7-8 km in a day.',
    permitInformation: 'Local panchayat and forest permits arranged at Pantwari.',
    howToReach: {
      nearestRailhead: 'Dehradun Railway Station (85 km, 3 hours drive)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (110 km)',
      distanceFromDehradun: '85 km via Mussoorie, Kempty Falls, and Nainbagh',
      byRoad: 'Taxis readily available from Dehradun and Mussoorie directly to Pantwari.'
    },
    distanceFromDehradunKm: 85,
    startingPrice: '₹2,999',
    image: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    highlights: [
      'Highest peak in the lower Garhwal Himalayas (9,915 ft) accessible in just a weekend',
      'Spectacular view of Bandarpoonch, Swargarohini, Gangotri, and Kedarnath peaks',
      'Visit the ancient Nag Devta (Snake God) temple nestled in oak and deodar woods',
      'Bonfire and stargazing camp under clear mountain skies'
    ],
    overview: 'Nag Tibba (Serpent’s Peak) is the highest peak in the lesser Himalayan region of Uttarakhand. Located just 85 km from Dehradun near Mussoorie, this trek is the undisputed king of weekend Himalayan adventures. You climb through lush rhododendron and oak forests, camp under starlit skies, and reach the 9,915-foot summit to behold an awe-inspiring vista of the entire Garhwal snow range.',
    routeOverview: 'Dehradun → Mussoorie → Nainbagh → Pantwari (Base) → Nag Tibba Base Camp (Overnight) → Nag Tibba Summit (9,915 ft) → Pantwari → Dehradun.',
    itinerary: [
      {
        day: 1,
        title: 'Drive from Dehradun to Pantwari & Trek to Base Camp',
        desc: 'Depart Dehradun at 6:30 AM via Mussoorie and Nainbagh. Reach Pantwari by 10:00 AM. Start trekking through oak and rhododendron trails. Arrive at Nag Tibba Base Camp by late afternoon. Hot snacks, bonfire, and stargazing.',
        stay: 'Alpine Tents at Base Camp',
        meals: 'Lunch, Evening Snacks & Dinner',
        altitude: '7,600 ft at Base Camp',
        distance: '85 km drive + 5 km trek'
      },
      {
        day: 2,
        title: 'Summit Push (9,915 ft), Descend to Pantwari & Drive to Dehradun',
        desc: 'Early morning 4:30 AM climb to Nag Devta temple and onwards to the summit ridge. Watch the golden sunrise over Bandarpoonch, Swargarohini, and Kedarnath. Descend back to base camp for hot breakfast, continue downhill to Pantwari, and drive to Dehradun by 7:00 PM.',
        stay: 'Departure',
        meals: 'Breakfast & Lunch',
        altitude: '9,915 ft summit, descent to Dehradun',
        distance: '11 km trek + 85 km drive'
      }
    ],
    inclusions: [
      'Alpine dome tent accommodation on twin sharing at base camp',
      'Fresh hot vegetarian meals from Day 1 lunch to Day 2 lunch',
      'Certified trek leader, local guides, and support staff',
      'Camping equipment: Tents, sleeping bags, and insulated mats',
      'First aid kit and emergency oximeter'
    ],
    exclusions: [
      'Transport between Dehradun and Pantwari (Shared cabs coordinated at ₹600-800)',
      'Personal gear and porter expenses'
    ],
    packingList: ['Trekking shoes or good sports shoes', 'Warm fleece and windproof jacket', 'Water bottle and headlamp'],
    safetyInfo: ['Safe trail with short evacuation distance to Pantwari roadhead'],
    faqs: [
      {
        question: 'Can I do Nag Tibba trek over a Saturday and Sunday from Delhi?',
        answer: 'Absolutely! Take the Friday night train or bus from Delhi to Dehradun, complete the trek over Saturday and Sunday, and board the Sunday evening train back to Delhi.'
      }
    ],
    reviews: [
      {
        id: 'rev-nt-1',
        author: 'Sanya Gupta',
        location: 'Gurugram',
        rating: 5,
        date: 'February 2026',
        comment: 'Best weekend getaway from Delhi! Reached Dehradun on Saturday morning, camped in snow at Nag Tibba, and was back home in Gurgaon by Sunday night. Well organized by UK Yatra.'
      }
    ],
    relatedTreks: ['kedarkantha', 'dayara-bugyal', 'chopta-chandrashila'],
    relatedDestinations: ['mussoorie', 'dhanaulti', 'dehradun'],
    relatedPackages: ['uky-road-08-winter-snow-auli-chopta-05n-06d'],
    relatedArticles: ['best-weekend-trips-from-delhi', 'best-treks-in-uttarakhand']
  },
  {
    id: 'kuari-pass',
    slug: 'kuari-pass',
    name: 'Kuari Pass (Lord Curzon Trail) Trek',
    tagline: "Front-Row Alpine Amphitheater of India's Greatest Himalayan Peaks",
    difficulty: 'Moderate',
    duration: '6 Days / 5 Nights',
    altitude: '12,516 ft (3,815 m)',
    maxAltitude: '12,516 ft',
    trailLength: '33 km',
    distance: '33 km',
    region: 'Garhwal',
    baseCamp: 'Joshimath / Dhak Village',
    startingPoint: 'Dhak Village (near Joshimath)',
    endingPoint: 'Dhak or Auli',
    bestSeason: 'December to March (Winter Snow) & April to June, Sep-Nov',
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Sep', 'Oct', 'Nov', 'Dec'],
    temperature: {
      summer: '8°C to 18°C',
      winter: '-8°C to 8°C',
      day: '6°C to 15°C',
      night: '-5°C to 3°C'
    },
    snowAvailability: 'Deep snow between December and March along Gorson Bugyal and Kuari Pass ridge.',
    hasSnow: true,
    beginnerSuitability: 'Excellent for motivated beginners seeking dramatic close-up views of Mt. Nanda Devi.',
    isBeginnerFriendly: true,
    fitnessRequirement: 'Moderate cardio stamina. Ability to walk 5-6 hours on undulating mountain trails.',
    permitInformation: 'Nanda Devi Biosphere buffer zone forest permits arranged at Joshimath.',
    howToReach: {
      nearestRailhead: 'Rishikesh Railway Station (255 km) or Haridwar (280 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (275 km)',
      distanceFromDehradun: '275 km via Rishikesh, Srinagar, and Joshimath',
      byRoad: 'NH58 connects directly from Rishikesh to Joshimath, with taxi link to Dhak village.'
    },
    distanceFromDehradunKm: 275,
    startingPrice: '₹9,499',
    image: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    highlights: [
      'Unsurpassed close-up view of India’s second-highest peak: Mt. Nanda Devi (7,816m)',
      'Peerless panorama of Dronagiri, Kamet, Chaukhamba, Hathi-Ghodi Parvat, and Trishul',
      'Historic trail pioneered by British Viceroy Lord Curzon in 1905',
      'Picturesque campsites at Gulling, Tali Forest, and Khullara alpine meadows'
    ],
    overview: 'Pioneered by Lord Curzon in 1905, the Kuari Pass trek is revered as the ultimate mountain panorama trail in the Indian Himalayas. While other treks give distant views of famous summits, Kuari Pass places you right across the valley from Mt. Nanda Devi (7,816m), Kamet, Dronagiri, and the Trishul massifs. The trail winds through ancient rhododendron, oak, and conifer forests before opening onto the breathtaking high-altitude meadows of Gorson and Khullara.',
    routeOverview: 'Rishikesh → Joshimath → Dhak Village → Gulling Top → Tali Forest Camp → Kuari Pass (12,516 ft) → Khullara → Auli / Dhak → Joshimath → Rishikesh.',
    itinerary: [
      {
        day: 1,
        title: 'Drive from Rishikesh to Joshimath',
        desc: 'Drive along NH58 following the Alaknanda and Bhagirathi confluences. Overnight in hotel in Joshimath.',
        stay: 'Hotel in Joshimath',
        meals: 'Dinner',
        altitude: '6,200 ft',
        distance: '255 km drive'
      },
      {
        day: 2,
        title: 'Drive to Dhak Village & Trek to Gulling Top',
        desc: 'Drive 12 km to Dhak roadhead. Ascend past step-farmed terrace hamlets of Tugasi and Kharcho into dense oak forests to Gulling camp.',
        stay: 'Alpine Tents at Gulling',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '9,600 ft',
        distance: '6 km trek'
      },
      {
        day: 3,
        title: 'Trek from Gulling to Tali Forest / Khullara',
        desc: 'Climb through enchanted conifer forests. Sudden breathtaking clearings reveal Mt. Dronagiri and Hathi Parvat. Camp on the edge of the forest.',
        stay: 'Alpine Tents at Tali',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '11,000 ft',
        distance: '5 km trek'
      },
      {
        day: 4,
        title: 'Trek to Kuari Pass (12,516 ft) & Return to Camp',
        desc: 'Ascend to the ridge of Kuari Pass. Gaze at the monumental amphitheater of peaks: Nanda Devi, Kamet, Bethartoli, Dunagiri. Return to camp for sunset.',
        stay: 'Alpine Tents',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '12,516 ft at Pass',
        distance: '8 km trek'
      },
      {
        day: 5,
        title: 'Trek Down to Auli / Dhak & Drive to Joshimath',
        desc: 'Trek across Gorson Bugyal with continuous Nanda Devi views. Descend to Auli ski resort or Dhak and drive back to Joshimath.',
        stay: 'Hotel in Joshimath',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '6,200 ft',
        distance: '8 km trek + 15 km drive'
      },
      {
        day: 6,
        title: 'Drive from Joshimath to Rishikesh / Dehradun',
        desc: 'Scenic drive back through the Garhwal foothills. Arrive in Rishikesh by 6:00 PM.',
        stay: 'Departure',
        meals: 'Breakfast',
        altitude: '1,200 ft',
        distance: '255 km drive'
      }
    ],
    inclusions: [
      'Hotel stay in Joshimath and high-altitude alpine tents on trek',
      'All nutritious mountain meals',
      'Certified trek leaders and local guide staff',
      'Mountaineering equipment (tents, sub-zero bags, microspikes in winter)',
      'Forest entry permits and safety medical gear'
    ],
    exclusions: ['Transport between Rishikesh and Joshimath', 'Personal backpack offloading'],
    packingList: ['Sturdy waterproof trekking boots', 'Warm 3-layer clothing', 'UV sunglasses and sunscreen'],
    safetyInfo: ['Pulse oximeter checks twice daily', 'Oxygen cylinder carried throughout'],
    faqs: [
      {
        question: 'Can you see Mt. Nanda Devi clearly from Kuari Pass?',
        answer: 'Yes! Kuari Pass offers one of the closest and most magnificent views of Mt. Nanda Devi (7,816 m) alongside Dronagiri and Kamet.'
      }
    ],
    reviews: [
      {
        id: 'rev-kp-1',
        author: 'Nikhil Kashyap',
        location: 'Hyderabad',
        rating: 5,
        date: 'December 2025',
        comment: 'Seeing Nanda Devi up close from the Kuari Pass ridge took my breath away. Excellent snow equipment and warm tents provided by UK Yatra.'
      }
    ],
    relatedTreks: ['kedarkantha', 'valley-of-flowers', 'brahmatal'],
    relatedDestinations: ['auli', 'joshimath', 'rishikesh'],
    relatedPackages: ['uky-road-08-winter-snow-auli-chopta-05n-06d'],
    relatedArticles: ['best-treks-in-uttarakhand', 'best-time-to-visit-auli']
  },
  {
    id: 'chopta-chandrashila',
    slug: 'chopta-chandrashila',
    name: 'Chopta Tungnath & Chandrashila Peak Trek',
    tagline: "World's Highest Shiva Temple & 360° Himalayan Summit Vista",
    difficulty: 'Easy',
    duration: '4 Days / 3 Nights',
    altitude: '13,123 ft (4,000 m)',
    maxAltitude: '13,123 ft',
    trailLength: '10 km',
    distance: '10 km',
    region: 'Garhwal',
    baseCamp: 'Chopta (Mini Switzerland of Uttarakhand)',
    startingPoint: 'Chopta (Rudraprayag / Chamoli border)',
    endingPoint: 'Chopta / Sari Village',
    bestSeason: 'Round the Year (April-June for Rhododendrons; Dec-March for Snow)',
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Sep', 'Oct', 'Nov', 'Dec'],
    temperature: {
      summer: '10°C to 22°C',
      winter: '-5°C to 10°C',
      day: '8°C to 18°C',
      night: '-3°C to 5°C'
    },
    snowAvailability: 'Snowfall between late December and March. Microspikes used on summit trail.',
    hasSnow: true,
    beginnerSuitability: 'Paved stone path up to Tungnath; easily achievable for beginners with determination.',
    isBeginnerFriendly: true,
    fitnessRequirement: 'Moderate stamina for the steep 1 km ascent from Tungnath to Chandrashila summit.',
    permitInformation: 'Kedarnath Wildlife Sanctuary forest permits included.',
    howToReach: {
      nearestRailhead: 'Rishikesh (200 km) or Haridwar (225 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (220 km)',
      distanceFromDehradun: '220 km via Rishikesh, Devprayag, Rudraprayag, and Ukhimath',
      byRoad: 'Scenic mountain highway through Mandakini valley to Chopta.'
    },
    distanceFromDehradunKm: 220,
    startingPrice: '₹6,499',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    highlights: [
      'Visit Tungnath Temple (12,073 ft)—the highest of all Panch Kedar Shiva shrines in the world',
      'Summit Chandrashila (13,123 ft) for 360-degree views of Chaukhamba, Nanda Devi, and Trishul',
      'Camp beside the emerald waters of Deoria Tal lake with Chaukhamba mirror reflections',
      'Walk through blazing scarlet and pink rhododendron forests in spring (April-May)'
    ],
    overview: 'Chopta, affectionately known as the "Mini Switzerland of Uttarakhand," serves as the base for this iconic journey. The trail begins with a scenic hike to the emerald waters of Deoria Tal lake before proceeding to Chopta. From here, a well-paved stone path ascends to Tungnath—the highest Shiva temple in the world at 12,073 feet. A further 1 km steep scramble reaches Chandrashila Peak (13,123 ft), offering an unforgettable 360-degree panorama of Chaukhamba, Kedarnath peak, Nanda Devi, and Bandarpunch.',
    routeOverview: 'Rishikesh → Sari Village → Deoria Tal → Chopta → Tungnath Temple → Chandrashila Summit (13,123 ft) → Chopta → Rishikesh.',
    itinerary: [
      {
        day: 1,
        title: 'Drive from Rishikesh to Sari Village & Hike to Deoria Tal',
        desc: 'Depart Rishikesh early morning following the Alaknanda and Mandakini rivers via Devprayag and Rudraprayag. Arrive at Sari village and hike 2.5 km to the pristine Deoria Tal lake.',
        stay: 'Alpine Tents at Deoria Tal',
        meals: 'Dinner',
        altitude: '7,841 ft',
        distance: '190 km drive + 2.5 km hike'
      },
      {
        day: 2,
        title: 'Hike to Sari Village & Drive to Chopta Meadow Camp',
        desc: 'Witness golden sunrise reflections of Mt. Chaukhamba in Deoria Tal lake. Walk down to Sari and drive 20 km through Kedarnath Wildlife Sanctuary to Chopta meadows (8,700 ft). Acclimatization walk.',
        stay: 'Swiss Tents / Cottages in Chopta',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '8,700 ft',
        distance: '2.5 km hike + 20 km drive'
      },
      {
        day: 3,
        title: 'Summit Push: Chopta to Tungnath (12,073 ft) & Chandrashila (13,123 ft)',
        desc: 'Begin trek at 4:30 AM on the paved stone trail. Reach ancient Tungnath Temple amidst morning bell chimes. Continue the steep 1 km ascent to Chandrashila Peak. Bask in the 360-degree Himalayan panorama before descending to Chopta.',
        stay: 'Swiss Tents / Cottages in Chopta',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '13,123 ft summit',
        distance: '10 km round-trip trek'
      },
      {
        day: 4,
        title: 'Drive from Chopta to Rishikesh / Dehradun',
        desc: 'Morning mountain breakfast and drive back through Rudraprayag. Arrive in Rishikesh by 5:30 PM.',
        stay: 'Departure',
        meals: 'Breakfast',
        altitude: '1,200 ft',
        distance: '200 km drive'
      }
    ],
    inclusions: [
      'Camping tents at Deoria Tal and Swiss tents/cottages in Chopta',
      'All meals from Day 1 dinner to Day 4 breakfast',
      'Certified mountain trek leader and local guide',
      'Kedarnath Wildlife Sanctuary forest permits',
      'Microspikes / crampons during winter snow conditions'
    ],
    exclusions: ['Transport to/from Rishikesh (Available at actuals)', 'Personal expenses and pony rides'],
    packingList: ['Sturdy trekking shoes', 'Warm fleece & windcheater', 'Sun protection sunglasses'],
    safetyInfo: ['Paved stone path up to Tungnath; easily navigable with certified guides'],
    faqs: [
      {
        question: 'Is Tungnath temple open in winter?',
        answer: 'The temple shrine doors are closed from November to April, but the trek to the temple and Chandrashila summit remains open throughout the winter for snow trekking.'
      }
    ],
    reviews: [
      {
        id: 'rev-ct-1',
        author: 'Priyanka Ghosh',
        location: 'Mumbai',
        rating: 5,
        date: 'May 2025',
        comment: 'Chopta and Tungnath are pure magic. The rhododendrons in May were in full bloom, and standing on Chandrashila summit with Chaukhamba right in front was the highlight of my year!'
      }
    ],
    relatedTreks: ['kedarkantha', 'kuari-pass', 'dayara-bugyal'],
    relatedDestinations: ['chopta', 'tungnath', 'deoria-tal', 'rishikesh'],
    relatedPackages: ['uky-road-08-winter-snow-auli-chopta-05n-06d'],
    relatedArticles: ['best-treks-in-uttarakhand', 'best-winter-treks-in-uttarakhand']
  },
  {
    id: 'brahmatal',
    slug: 'brahmatal',
    name: 'Brahmatal Trek',
    tagline: 'Winter Glacial Lake Trek with Frontal Views of Mt. Trishul & Nanda Ghunti',
    difficulty: 'Moderate',
    duration: '6 Days / 5 Nights',
    altitude: '12,250 ft (3,734 m)',
    maxAltitude: '12,250 ft',
    trailLength: '24 km',
    distance: '24 km',
    region: 'Garhwal',
    baseCamp: 'Lohajung Village (Chamoli District)',
    startingPoint: 'Lohajung Village',
    endingPoint: 'Lohajung Village',
    bestSeason: 'December to March (Winter Snow) & April-May, Oct-Nov',
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Oct', 'Nov', 'Dec'],
    temperature: {
      summer: '8°C to 18°C',
      winter: '-7°C to 8°C',
      day: '5°C to 14°C',
      night: '-6°C to 2°C'
    },
    snowAvailability: 'Deep snow all along the lake and high ridge between mid-December and March.',
    hasSnow: true,
    beginnerSuitability: 'Great for beginners looking for a true winter snow trek with dramatic mountain walls.',
    isBeginnerFriendly: true,
    fitnessRequirement: 'Moderate fitness. Capacity to trek 5 hours daily on snow.',
    permitInformation: 'Forest entry permits arranged at Lohajung.',
    howToReach: {
      nearestRailhead: 'Kathgodam Railway Station (210 km, 8-9 hours drive)',
      nearestAirport: 'Pantnagar Airport (240 km) or Dehradun (300 km)',
      distanceFromDehradun: '300 km / From Kathgodam: 210 km via Almora and Gwaldam',
      byRoad: 'Shared and private vehicles available from Kathgodam/Rishikesh to Lohajung.'
    },
    distanceFromDehradunKm: 300,
    startingPrice: '₹8,999',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    highlights: [
      'Spectacular frozen glacial lakes: Bekaltal and Brahmatal nested in alpine ridges',
      'Incredible eye-level panoramic views of Mt. Trishul (7,120m) and Nanda Ghunti (6,309m)',
      'Scenic ridge walk through ancient rhododendron and oak forests',
      'Camp on snow under brilliant Milky Way star displays'
    ],
    overview: 'Brahmatal is one of Uttarakhand’s premier winter snow treks. Named after Lord Brahma who according to mythology meditated at the high glacial lake, this trail offers an extraordinary ridge walk with jaw-dropping close-up views of Mt. Trishul and Nanda Ghunti. Unlike many winter treks that keep you in valleys, Brahmatal’s ridge gives you expansive 180-degree mountain views while walking on fresh crisp snow.',
    routeOverview: 'Kathgodam/Rishikesh → Lohajung → Bekaltal → Brahmatal Lake → Brahmatal Pass (12,250 ft) → Khorurai → Lohajung → Kathgodam.',
    itinerary: [
      {
        day: 1,
        title: 'Drive from Kathgodam / Rishikesh to Lohajung',
        desc: 'Scenic drive through Kumaon and Garhwal foothills passing Kausani and Gwaldam. Arrive at Lohajung village (7,600 ft). Overnight in guesthouse.',
        stay: 'Guesthouse in Lohajung',
        meals: 'Dinner',
        altitude: '7,600 ft',
        distance: '210 km drive'
      },
      {
        day: 2,
        title: 'Trek from Lohajung to Bekaltal',
        desc: 'Ascend through oak and rhododendron forests past Mandoli village. Reach the frozen shores of Bekaltal lake surrounded by giant trees.',
        stay: 'Alpine Tents at Bekaltal',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '9,690 ft',
        distance: '6 km trek'
      },
      {
        day: 3,
        title: 'Trek from Bekaltal to Brahmatal',
        desc: 'Leave the tree line behind and ascend onto rolling snow meadows. Gaze at the panoramic views of Mt. Trishul and Nanda Ghunti. Pitch tents near Brahmatal.',
        stay: 'Alpine Tents at Brahmatal',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '10,440 ft',
        distance: '7 km trek'
      },
      {
        day: 4,
        title: 'Summit Push to Brahmatal Pass (12,250 ft) & Descent to Khorurai',
        desc: 'Climb to the highest point of Brahmatal Pass. Marvel at the monumental amphitheater of Trishul, Nanda Ghunti, and Chaukhamba. Descend to Khorurai camp.',
        stay: 'Alpine Tents at Khorurai',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '12,250 ft at Pass',
        distance: '7 km trek'
      },
      {
        day: 5,
        title: 'Trek Down from Khorurai to Lohajung',
        desc: 'Descend through familiar oak woods back to Lohajung base camp. Celebration dinner.',
        stay: 'Guesthouse in Lohajung',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '7,600 ft',
        distance: '4 km trek'
      },
      {
        day: 6,
        title: 'Drive from Lohajung to Kathgodam',
        desc: 'Return drive to Kathgodam railway station for evening trains to Delhi.',
        stay: 'Departure',
        meals: 'Breakfast',
        altitude: '1,800 ft at Kathgodam',
        distance: '210 km drive'
      }
    ],
    inclusions: [
      'Guesthouse in Lohajung and 4-season alpine tents on trek',
      'All nutritious meals, hot drinks, and soups on trail',
      'Experienced trek leaders, local guides, and cook team',
      'Winter gear: microspikes and gaiters included',
      'Forest permits and medical oxygen cylinders'
    ],
    exclusions: ['Transport to/from Lohajung', 'Backpack offloading on mules'],
    packingList: ['Waterproof winter boots', 'Heavy down jacket', 'Balaclava and thermal gloves'],
    safetyInfo: ['Daily health parameters tracked with pulse oximeters'],
    faqs: [
      {
        question: 'How is Brahmatal compared to Kedarkantha?',
        answer: 'Both are outstanding winter treks. Kedarkantha has an iconic triangle summit peak, while Brahmatal offers an open ridge walk with much closer views of Mt. Trishul and Nanda Ghunti.'
      }
    ],
    reviews: [
      {
        id: 'rev-bm-1',
        author: 'Saurabh Mathur',
        location: 'Jaipur',
        rating: 5,
        date: 'January 2026',
        comment: 'Mt. Trishul felt so close you could almost touch it. Walking on the frozen Brahmatal lake ridge was an exhilarating experience. 10/10 for UK Yatra!'
      }
    ],
    relatedTreks: ['kedarkantha', 'kuari-pass', 'ali-bedni-bugyal'],
    relatedDestinations: ['auli', 'nainital', 'kausani'],
    relatedPackages: ['uky-road-08-winter-snow-auli-chopta-05n-06d'],
    relatedArticles: ['best-winter-treks-in-uttarakhand', 'best-treks-in-uttarakhand']
  },
  {
    id: 'gaumukh-tapovan',
    slug: 'gaumukh-tapovan',
    name: 'Gaumukh Tapovan Glacier Trek',
    tagline: 'Source of the Holy Ganga & The Grand Amphitheater of Mt. Shivling',
    difficulty: 'Challenging',
    duration: '8 Days / 7 Nights',
    altitude: '14,200 ft (4,328 m)',
    maxAltitude: '14,200 ft',
    trailLength: '46 km',
    distance: '46 km',
    region: 'Garhwal',
    baseCamp: 'Gangotri Temple Town',
    startingPoint: 'Gangotri',
    endingPoint: 'Gangotri',
    bestSeason: 'May to June & September to October',
    bestMonths: ['May', 'Jun', 'Sep', 'Oct'],
    temperature: {
      summer: '5°C to 15°C',
      winter: 'Closed due to extreme snow',
      day: '5°C to 14°C',
      night: '-4°C to 4°C'
    },
    snowAvailability: 'Late snow in May; crisp dry conditions in September-October.',
    hasSnow: false,
    beginnerSuitability: 'Recommended for experienced trekkers or very fit hikers due to boulder fields and glacial moraines.',
    isBeginnerFriendly: false,
    fitnessRequirement: 'High endurance required. Comfortable with steep moraine ascents and boulder hopping.',
    permitInformation: 'Strict Gangotri National Park permits (capped daily limit by Uttarakhand Forest Dept); arranged by UK Yatra.',
    howToReach: {
      nearestRailhead: 'Dehradun Railway Station (240 km) or Haridwar (290 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (250 km)',
      distanceFromDehradun: '240 km via Uttarkashi and Harsil to Gangotri',
      byRoad: 'NH34 leads directly to Gangotri holy town.'
    },
    distanceFromDehradunKm: 240,
    startingPrice: '₹14,999',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'
    ],
    highlights: [
      'Stand at Gaumukh (Cow’s Snout)—the sacred glacial source where Bhagirathi River originates',
      'Camp at Tapovan: a pristine high-altitude meadow sitting directly at the base of Mt. Shivling (6,543m)',
      'Unmatched panoramic views of Bhagirathi I, II, III peaks and Meru Peak (Shark’s Fin)',
      'Traverse the massive Gangotri Glacier moraine with certified mountaineering leaders'
    ],
    overview: 'The Gaumukh Tapovan trek is both a profound spiritual pilgrimage and one of the world’s most dramatic alpine expeditions. Originating from the holy shrine of Gangotri, the trail traverses the Gangotri National Park along the Bhagirathi River to Gaumukh, the glacial snout where the holy Ganga is born. Crossing the Gangotri Glacier brings you to Tapovan, an alpine meadow of sadhus and meditation, where Mt. Shivling rises dramatically like a pyramid of ice and rock right before your eyes.',
    routeOverview: 'Dehradun → Uttarkashi → Gangotri → Chirbasa → Bhojbasa → Gaumukh → Tapovan (14,200 ft) → Bhojbasa → Gangotri → Dehradun.',
    itinerary: [
      {
        day: 1,
        title: 'Drive from Dehradun to Gangotri via Harsil Valley',
        desc: 'Scenic 240 km drive through the apple capital of Harsil to Gangotri (10,000 ft). Evening Ganga Aarti at Gangotri temple.',
        stay: 'Hotel in Gangotri',
        meals: 'Dinner',
        altitude: '10,000 ft',
        distance: '240 km drive'
      },
      {
        day: 2,
        title: 'Acclimatization & Local Exploration in Gangotri',
        desc: 'Acclimatization walk to Surya Kund and Pandava Gufa. Permit verification at Gangotri National Park checkpost.',
        stay: 'Hotel in Gangotri',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '10,000 ft',
        distance: '3 km walk'
      },
      {
        day: 3,
        title: 'Trek from Gangotri to Chirbasa / Bhojbasa',
        desc: 'Trek along the granite gorge of the Bhagirathi River through birch (bhojpatra) and pine groves. Views of Bhagirathi peaks. Camp at Bhojbasa.',
        stay: 'Alpine Tents at Bhojbasa',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '12,450 ft',
        distance: '14 km trek (6 hours)'
      },
      {
        day: 4,
        title: 'Trek from Bhojbasa to Gaumukh & Climb to Tapovan',
        desc: 'Hike to the sacred glacial snout at Gaumukh. Cross the moraine of the Gangotri Glacier and ascend the steep ridge to Tapovan (14,200 ft). Camp at the foot of Mt. Shivling.',
        stay: 'Alpine Tents at Tapovan',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '14,200 ft',
        distance: '9 km trek (6-7 hours)'
      },
      {
        day: 5,
        title: 'Exploration of Tapovan, Meru Glacier & Mt. Shivling Base',
        desc: 'Rest and exploration day. Watch the sunrise turn Mt. Shivling and Bhagirathi peaks to pure gold. Spot blue sheep (bharal) grazing on the high meadows.',
        stay: 'Alpine Tents at Tapovan',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '14,200 ft',
        distance: 'Day hike around meadow'
      },
      {
        day: 6,
        title: 'Trek Down from Tapovan to Bhojbasa',
        desc: 'Carefully descend the moraine back across Gangotri Glacier to Bhojbasa camp.',
        stay: 'Alpine Tents at Bhojbasa',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '12,450 ft',
        distance: '9 km trek'
      },
      {
        day: 7,
        title: 'Trek from Bhojbasa to Gangotri',
        desc: 'Descend along the Bhagirathi river to Gangotri. Celebration dinner in town.',
        stay: 'Hotel in Gangotri',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '10,000 ft',
        distance: '14 km trek'
      },
      {
        day: 8,
        title: 'Drive from Gangotri to Dehradun',
        desc: 'Return drive through Uttarkashi arriving in Dehradun by 7:00 PM.',
        stay: 'Departure',
        meals: 'Breakfast',
        altitude: '2,200 ft at Dehradun',
        distance: '240 km drive'
      }
    ],
    inclusions: [
      'Hotel stays in Gangotri and alpine tents at Bhojbasa and Tapovan',
      'All meals throughout the trek',
      'Mountaineering certified trek leaders and high-altitude mountain guides',
      'Gangotri National Park entry permits and environmental fees',
      'Safety equipment (oxygen cylinders, high-altitude medical kit)'
    ],
    exclusions: ['Transport between Dehradun and Gangotri', 'Personal porter services'],
    packingList: ['Sturdy crampon-compatible trekking boots', 'Cold-weather thermal down suit/jacket', 'Sturdy trekking poles'],
    safetyInfo: ['Experienced mountain guides assist across the glacier moraine'],
    faqs: [
      {
        question: 'Is a special permit required for Gaumukh Tapovan?',
        answer: 'Yes, the Uttarakhand Forest Department restricts entry to only 150 persons per day into Gangotri National Park. UK Yatra secures your official permits well in advance.'
      }
    ],
    reviews: [
      {
        id: 'rev-gt-1',
        author: 'Vivek Chawla',
        location: 'New Delhi',
        rating: 5,
        date: 'October 2025',
        comment: 'Standing at Tapovan with Mt. Shivling towering straight above our tent was the most humbling experience of my life. Professional guides who navigated the glacier with utmost safety.'
      }
    ],
    relatedTreks: ['har-ki-dun', 'kuari-pass', 'kedarkantha'],
    relatedDestinations: ['gangotri', 'harsil-valley', 'dehradun'],
    relatedPackages: ['uky-road-01-complete-char-dham-delhi-09n-10d'],
    relatedArticles: ['best-treks-in-uttarakhand']
  },
  {
    id: 'ali-bedni-bugyal',
    slug: 'ali-bedni-bugyal',
    name: 'Ali Bedni Bugyal Trek',
    tagline: 'Twin Alpine Meadows with Grand Panoramas of Mt. Trishul & Chaukhamba',
    difficulty: 'Moderate',
    duration: '6 Days / 5 Nights',
    altitude: '11,686 ft (3,562 m)',
    maxAltitude: '11,686 ft',
    trailLength: '30 km',
    distance: '30 km',
    region: 'Garhwal',
    baseCamp: 'Lohajung Village (Chamoli)',
    startingPoint: 'Didna Village / Lohajung',
    endingPoint: 'Wan Village / Lohajung',
    bestSeason: 'May to June (Lush Green) & September to November (Crisp Views)',
    bestMonths: ['May', 'Jun', 'Sep', 'Oct', 'Nov'],
    temperature: {
      summer: '10°C to 20°C',
      winter: '-4°C to 8°C',
      day: '8°C to 18°C',
      night: '2°C to 8°C'
    },
    snowAvailability: 'Winter snow in Dec-Feb; famous for lush emerald grasslands in spring-autumn.',
    hasSnow: false,
    beginnerSuitability: 'Perfect for beginners with decent stamina wanting to experience high Himalayan meadows.',
    isBeginnerFriendly: true,
    fitnessRequirement: 'Moderate fitness. Ability to trek 4-6 hours daily.',
    permitInformation: 'Forest permits obtained at Lohajung checkpost.',
    howToReach: {
      nearestRailhead: 'Kathgodam Railway Station (210 km)',
      nearestAirport: 'Pantnagar Airport (240 km)',
      distanceFromDehradun: '300 km / From Kathgodam: 210 km via Almora and Kausani',
      byRoad: 'Connected via paved roads from Kathgodam to Lohajung.'
    },
    distanceFromDehradunKm: 300,
    startingPrice: '₹8,499',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    highlights: [
      'Twin high-altitude meadows (Bugyals) that stretch endlessly across mountain ridges',
      'Closest view of Mt. Trishul (7,120m) rising straight up from the meadow edge',
      'The sacred Bedni Kund pond where the famous Nanda Devi Raj Jat Yatra halts',
      'Dense ancient oak and conifer forests with rare Himalayan birdlife'
    ],
    overview: 'Ali and Bedni Bugyals are twin alpine meadows regarded by trekkers as the velvet carpets of the Himalayas. Perched at nearly 12,000 feet in Chamoli, these endless rolling grasslands face the titanic rock and ice face of Mt. Trishul. The trail climbs through traditional Garhwali villages, thick rhododendron groves, and sacred mountain shrines before emerging onto vast open plains with unobstructed mountain panoramas.',
    routeOverview: 'Kathgodam → Lohajung → Didna Village → Ali Bugyal → Bedni Bugyal → Wan Village → Lohajung → Kathgodam.',
    itinerary: [
      {
        day: 1,
        title: 'Drive from Kathgodam to Lohajung',
        desc: 'Picturesque drive through the Kumaon hills to Lohajung base camp. Overnight in guesthouse.',
        stay: 'Guesthouse in Lohajung',
        meals: 'Dinner',
        altitude: '7,600 ft',
        distance: '210 km drive'
      },
      {
        day: 2,
        title: 'Trek from Lohajung to Didna Village',
        desc: 'Descend to the Neel Ganga river, then ascend through oak and bamboo forests to Didna village.',
        stay: 'Village Homestay / Tents',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '8,000 ft',
        distance: '6.5 km trek'
      },
      {
        day: 3,
        title: 'Trek from Didna to Ali Bugyal',
        desc: 'Climb through the oak forest known as Tolpani. Break out of the tree line onto the immense velvety meadow of Ali Bugyal.',
        stay: 'Alpine Tents',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '11,320 ft',
        distance: '7 km trek'
      },
      {
        day: 4,
        title: 'Trek from Ali Bugyal to Bedni Bugyal & Bedni Kund',
        desc: 'Gentle ridge walk connecting Ali to Bedni Bugyal. Visit sacred Bedni Kund with reflections of Mt. Trishul. Marvel at Chaukhamba and Neelkanth peaks.',
        stay: 'Alpine Tents at Bedni Bugyal',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '11,686 ft',
        distance: '5 km trek'
      },
      {
        day: 5,
        title: 'Trek Down from Bedni Bugyal to Wan Village & Drive to Lohajung',
        desc: 'Descend through dense rhododendron and cypress forests to Wan village roadhead. Vehicle transfers group back to Lohajung.',
        stay: 'Guesthouse in Lohajung',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '7,600 ft',
        distance: '10 km trek + 15 km drive'
      },
      {
        day: 6,
        title: 'Drive from Lohajung to Kathgodam',
        desc: 'Return drive to Kathgodam for evening trains.',
        stay: 'Departure',
        meals: 'Breakfast',
        altitude: '1,800 ft at Kathgodam',
        distance: '210 km drive'
      }
    ],
    inclusions: [
      'Guesthouse in Lohajung and high-altitude tents on meadows',
      'All meals, hot beverages, and snacks on the trek',
      'Certified trek leaders, local guides, and camping staff',
      'Forest entry permits and medical safety support'
    ],
    exclusions: ['Transport between Kathgodam and Lohajung', 'Personal porter expenses'],
    packingList: ['Trekking boots with good grip', 'Fleece and down jacket', 'Rain cover and sunscreen'],
    safetyInfo: ['Gradual ridge ascent allows natural acclimatization'],
    faqs: [
      {
        question: 'Which is better: Dayara Bugyal or Ali Bedni Bugyal?',
        answer: 'Both are world-class meadows. Dayara Bugyal offers stunning views of Mt. Bandarpoonch and is closer to Dehradun. Ali Bedni Bugyal is larger and looks directly at the majestic Mt. Trishul (7,120m).'
      }
    ],
    reviews: [
      {
        id: 'rev-abb-1',
        author: 'Swati Sen',
        location: 'Kolkata',
        rating: 5,
        date: 'October 2025',
        comment: 'Walking on the meadows of Ali Bugyal felt like floating on clouds. The views of Trishul peak during sunrise will stay with me forever. Thank you UK Yatra!'
      }
    ],
    relatedTreks: ['brahmatal', 'dayara-bugyal', 'kuari-pass'],
    relatedDestinations: ['nainital', 'kausani', 'auli'],
    relatedPackages: ['uky-road-08-winter-snow-auli-chopta-05n-06d'],
    relatedArticles: ['best-treks-in-uttarakhand']
  },
  {
    id: 'phulara-ridge',
    slug: 'phulara-ridge',
    name: 'Phulara Ridge Trek',
    tagline: 'Rare Continuous Alpine Ridge Walk with 250° Himalayan Horizon',
    difficulty: 'Moderate',
    duration: '6 Days / 5 Nights',
    altitude: '12,127 ft (3,696 m)',
    maxAltitude: '12,127 ft',
    trailLength: '27 km',
    distance: '27 km',
    region: 'Garhwal',
    baseCamp: 'Sankri Village',
    startingPoint: 'Sankri Village',
    endingPoint: 'Taluka / Sankri',
    bestSeason: 'May to June & September to November',
    bestMonths: ['May', 'Jun', 'Sep', 'Oct', 'Nov'],
    temperature: {
      summer: '10°C to 20°C',
      winter: '-5°C to 10°C',
      day: '8°C to 16°C',
      night: '0°C to 6°C'
    },
    snowAvailability: 'Late snow patches in May; clear panoramic walking ridge in autumn.',
    hasSnow: false,
    beginnerSuitability: 'Great for trekkers with some hiking experience looking for a unique ridge trek rather than valley walking.',
    isBeginnerFriendly: true,
    fitnessRequirement: 'Moderate endurance. 5-6 hours of daily mountain walking.',
    permitInformation: 'Govind Pashu Vihar National Park permits arranged at Sankri.',
    howToReach: {
      nearestRailhead: 'Dehradun Railway Station (200 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (225 km)',
      distanceFromDehradun: '200 km via Mussoorie and Purola to Sankri',
      byRoad: 'Direct cab and shared taxi connectivity from Dehradun.'
    },
    distanceFromDehradunKm: 200,
    startingPrice: '₹8,999',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'
    ],
    highlights: [
      'One of the only true continuous high-altitude ridge walks in the Indian Himalayas',
      'Breathtaking 250-degree panoramic views of Kedarkantha, Swargarohini, and Bandarpoonch',
      'Camp at Pushtara Bugyal—a pristine wildflower meadow dotted with endemic flora',
      'Offbeat trail with pristine campsites free from heavy commercial trekking crowds'
    ],
    overview: 'Most Himalayan trails traverse along river valleys or ascend straight up to a single summit. Phulara Ridge is a rare and celebrated exception: it gives you a glorious 4-hour ridge walk at over 12,000 feet, with valleys falling away on both sides and a panoramic horizon of snow-clad giants like Swargarohini, Bandarpoonch, and Kalanag accompanying your every step.',
    routeOverview: 'Dehradun → Sankri → Sikolta → Bhoj Gadi → Phulara Ridge (12,127 ft) → Pushtara Bugyal → Taluka → Sankri → Dehradun.',
    itinerary: [
      {
        day: 1,
        title: 'Drive from Dehradun to Sankri Base Camp',
        desc: 'Drive 200 km along Mussoorie and Tons river to Sankri. Overnight in guesthouse.',
        stay: 'Guesthouse in Sankri',
        meals: 'Dinner',
        altitude: '6,400 ft',
        distance: '200 km drive'
      },
      {
        day: 2,
        title: 'Trek from Sankri to Sikolta',
        desc: 'Trek through pine, oak, and walnut forests. Camp in a quiet clearing at Sikolta.',
        stay: 'Alpine Tents',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '9,300 ft',
        distance: '5 km trek'
      },
      {
        day: 3,
        title: 'Trek from Sikolta to Bhoj Gadi',
        desc: 'Ascend out of the tree line into bhojpatra (birch) groves. Stunning views of Kedarkantha peak across the valley.',
        stay: 'Alpine Tents at Bhoj Gadi',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '11,155 ft',
        distance: '4 km trek'
      },
      {
        day: 4,
        title: 'The Great Ridge Walk (12,127 ft) to Pushtara Bugyal',
        desc: 'The highlight day! Walk for 4 hours along the narrow alpine ridge with breathtaking 250° views of Swargarohini, Black Peak, and Bandarpoonch. Descend to the lush meadows of Pushtara.',
        stay: 'Alpine Tents at Pushtara',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '12,127 ft on Ridge, camp at 9,500 ft',
        distance: '6 km trek (5-6 hours)'
      },
      {
        day: 5,
        title: 'Trek from Pushtara to Taluka & Drive to Sankri',
        desc: 'Descend through thick pine woods to Taluka village. Vehicle transfers group back to Sankri.',
        stay: 'Guesthouse in Sankri',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '6,400 ft',
        distance: '8 km trek + 12 km drive'
      },
      {
        day: 6,
        title: 'Drive from Sankri to Dehradun',
        desc: 'Return drive to Dehradun arriving by 6:00 PM.',
        stay: 'Departure',
        meals: 'Breakfast',
        altitude: '2,200 ft at Dehradun',
        distance: '200 km drive'
      }
    ],
    inclusions: [
      'Guesthouse in Sankri and alpine tents on trek',
      'All meals throughout the expedition',
      'Certified trek leaders, local guides, and camping team',
      'Govind Pashu Vihar National Park permits and safety equipment'
    ],
    exclusions: ['Transport to/from Dehradun', 'Personal offloading charges'],
    packingList: ['Sturdy trekking boots', 'Warm fleece and rain gear', 'Trekking poles'],
    safetyInfo: ['Safe ridge walking with guide escort on both flanks'],
    faqs: [
      {
        question: 'What makes Phulara Ridge different from Kedarkantha?',
        answer: 'Kedarkantha is a peak summit climb, while Phulara Ridge is an extended 4-hour ridge walk where you stroll along the crest of the mountain with 250-degree Himalayan views.'
      }
    ],
    reviews: [
      {
        id: 'rev-pr-1',
        author: 'Karan Bhasin',
        location: 'Chandigarh',
        rating: 5,
        date: 'October 2025',
        comment: 'The ridge walk on Day 4 is something I will never forget. Valleys on both sides and gigantic snow peaks all around. So peaceful and uncommercialized.'
      }
    ],
    relatedTreks: ['kedarkantha', 'har-ki-dun', 'dayara-bugyal'],
    relatedDestinations: ['sankri', 'mussoorie', 'dehradun'],
    relatedPackages: ['uky-road-08-winter-snow-auli-chopta-05n-06d'],
    relatedArticles: ['best-treks-in-uttarakhand']
  },
  {
    id: 'bali-pass',
    slug: 'bali-pass',
    name: 'Bali Pass High Alpine Pass Trek',
    tagline: 'Thrilling 16,200 ft Alpine Pass Connecting Har Ki Dun to Yamunotri',
    difficulty: 'Difficult',
    duration: '8 Days / 7 Nights',
    altitude: '16,207 ft (4,940 m)',
    maxAltitude: '16,207 ft',
    trailLength: '56 km',
    distance: '56 km',
    region: 'Garhwal',
    baseCamp: 'Sankri Village',
    startingPoint: 'Taluka / Sankri',
    endingPoint: 'Janki Chatti (Yamunotri base)',
    bestSeason: 'May to June & September to October',
    bestMonths: ['May', 'Jun', 'Sep', 'Oct'],
    temperature: {
      summer: '5°C to 15°C',
      winter: '-12°C to 0°C (Closed in deep winter)',
      day: '2°C to 10°C',
      night: '-8°C to -2°C'
    },
    snowAvailability: 'Snow and ice bridges over pass until early July; steep scree and snow in autumn.',
    hasSnow: true,
    beginnerSuitability: 'Not suitable for beginners. Requires prior high-altitude trekking experience (e.g. Kedarkantha or Rupin Pass).',
    isBeginnerFriendly: false,
    fitnessRequirement: 'High physical stamina and endurance. Ability to cross knife-edge snow ridges and steep 60° descents.',
    permitInformation: 'Govind Pashu Vihar and Yamunotri valley permits obtained.',
    howToReach: {
      nearestRailhead: 'Dehradun Railway Station (200 km to start / 180 km from end point)',
      nearestAirport: 'Jolly Grant Airport, Dehradun',
      distanceFromDehradun: '200 km to Sankri (Start) / 180 km from Janki Chatti (Finish)',
      byRoad: 'Round trip vehicle coordinated by UK Yatra.'
    },
    distanceFromDehradunKm: 200,
    startingPrice: '₹17,499',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'
    ],
    highlights: [
      'Cross the formidable 16,207 ft Bali Pass with panoramic views of Bandarpoonch and Swargarohini',
      'Camp at the mystical high glacial lake of Ruinsara Tal surrounded by alpine meadows',
      'Traverse ancient wooden hamlets of Osla and Seema in the Supin river valley',
      'Descend directly into the sacred Dham of Yamunotri and bathe in hot sulphur springs'
    ],
    overview: 'Bali Pass is one of the most adventurous high-altitude pass crossings in the Indian Himalayas. Connecting the ancient Har Ki Dun valley in Govind Pashu Vihar to the sacred shrine of Yamunotri, this expedition features high glacial moraines, the serene alpine lake of Ruinsara Tal, and a thrilling knife-edge ridge traverse at 16,207 feet. Recommended for experienced mountaineers and trekkers seeking a true wilderness challenge.',
    routeOverview: 'Dehradun → Sankri → Taluka → Seema → Ruinsara Tal (11,800 ft) → Odari Camp → Bali Pass (16,207 ft) → Upper Damini → Yamunotri → Janki Chatti → Dehradun.',
    itinerary: [
      {
        day: 1,
        title: 'Drive from Dehradun to Sankri Base Camp',
        desc: 'Scenic 200 km drive along the Tons river to Sankri. Overnight in guesthouse.',
        stay: 'Guesthouse in Sankri',
        meals: 'Dinner',
        altitude: '6,400 ft',
        distance: '200 km drive'
      },
      {
        day: 2,
        title: 'Drive to Taluka & Trek to Seema',
        desc: 'Drive 12 km to Taluka. Trek along Supin river past wooden hamlets to Seema.',
        stay: 'Alpine Tents',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '8,200 ft',
        distance: '12 km drive + 10 km trek'
      },
      {
        day: 3,
        title: 'Trek from Seema to Ruinsara Tal',
        desc: 'Trek through alpine forests towards Ruinsara valley. Arrive at the holy glacial lake of Ruinsara Tal (11,800 ft) with Mt. Swargarohini reflecting in the water.',
        stay: 'Alpine Tents at Ruinsara Tal',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '11,800 ft',
        distance: '11 km trek'
      },
      {
        day: 4,
        title: 'Acclimatization Day at Ruinsara Tal',
        desc: 'Rest and acclimatization day. Short hike towards Kyarkoti or Black Peak base camp.',
        stay: 'Alpine Tents',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '11,800 ft',
        distance: '3 km exploratory hike'
      },
      {
        day: 5,
        title: 'Trek from Ruinsara Tal to Odari Camp',
        desc: 'Trek across glacial moraines to Odari (cave camp). Technical rope and crampon briefing by expedition leader.',
        stay: 'Alpine Tents at Odari',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '13,100 ft',
        distance: '5 km trek'
      },
      {
        day: 6,
        title: 'Trek from Odari to Bali Pass Base Camp',
        desc: 'Short, steep climb to Bali Pass summit base camp. Early dinner and rest for midnight summit push.',
        stay: 'Alpine Tents',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '15,100 ft',
        distance: '4 km trek'
      },
      {
        day: 7,
        title: 'Cross Bali Pass (16,207 ft) & Descend to Upper Damini',
        desc: 'Depart at 3:00 AM. Cross the knife-edge snow ridge to the summit of Bali Pass (16,207 ft). Spectacular close-up views of Bandarpoonch (6,316m) and Kalanag. Steep technical descent using fixed ropes to Upper Damini.',
        stay: 'Alpine Tents at Upper Damini',
        meals: 'Breakfast, Pack Lunch, Dinner',
        altitude: '16,207 ft at Pass, descent to 10,800 ft',
        distance: '10 km trek (8-10 hours)'
      },
      {
        day: 8,
        title: 'Trek from Upper Damini to Yamunotri & Janki Chatti, Drive to Dehradun',
        desc: 'Trek down to the sacred shrine of Yamunotri. Take a holy dip in the hot springs, continue 5 km down to Janki Chatti, and board vehicles for Dehradun.',
        stay: 'Departure',
        meals: 'Breakfast',
        altitude: 'Descent to Dehradun',
        distance: '7 km trek + 180 km drive'
      }
    ],
    inclusions: [
      'Guesthouse in Sankri and high-grade 4-season alpine expedition tents',
      'All nutritious mountain meals and high-energy trail snacks',
      'Certified mountaineering expedition leaders, local high-altitude guides, and technical staff',
      'Technical mountaineering equipment: ropes, microspikes, ice axes, helmets where required',
      'National park permits and safety medical oxygen'
    ],
    exclusions: ['Transport between Dehradun and base camps', 'Personal porter services'],
    packingList: ['Crampon-compatible high ankle trekking boots', 'Cold-weather thermal down jacket (-15°C rated)', 'Waterproof gaiters and mountaineering gloves'],
    safetyInfo: ['Experienced mountain guides with fixed ropes on steep pass sections', 'High-altitude oxygen kit and emergency protocol'],
    faqs: [
      {
        question: 'Who should attempt Bali Pass?',
        answer: 'Bali Pass is a challenging crossover trek for fit trekkers with prior Himalayan high-altitude experience (above 13,000 ft) who are comfortable on steep snow ridges and boulder scree.'
      }
    ],
    reviews: [
      {
        id: 'rev-bp-1',
        author: 'Captain Sandeep Varma',
        location: 'Dehradun',
        rating: 5,
        date: 'June 2025',
        comment: 'Bali Pass was the ultimate test of endurance. The knife-edge ridge at 16,200 ft with Bandarpoonch towering right in front was surreal. Top-notch technical guidance from UK Yatra leaders.'
      }
    ],
    relatedTreks: ['har-ki-dun', 'kedarkantha', 'gaumukh-tapovan'],
    relatedDestinations: ['sankri', 'yamunotri', 'dehradun'],
    relatedPackages: ['uky-road-01-complete-char-dham-delhi-09n-10d'],
    relatedArticles: ['best-treks-in-uttarakhand']
  },
  {
    id: 'pangarchulla',
    slug: 'pangarchulla',
    name: 'Pangarchulla Peak Snow Climb',
    tagline: 'Exciting 15,000 ft Himalayan Peak Summit Climb near Joshimath',
    difficulty: 'Challenging',
    duration: '6 Days / 5 Nights',
    altitude: '15,069 ft (4,593 m)',
    maxAltitude: '15,069 ft',
    trailLength: '36 km',
    distance: '36 km',
    region: 'Garhwal',
    baseCamp: 'Joshimath / Dhak Village',
    startingPoint: 'Dhak Village',
    endingPoint: 'Auli / Joshimath',
    bestSeason: 'April to May (Peak Spring Snow Climb) & October-November',
    bestMonths: ['Apr', 'May', 'Oct', 'Nov'],
    temperature: {
      summer: '5°C to 15°C',
      winter: '-10°C to 5°C',
      day: '5°C to 14°C',
      night: '-5°C to 2°C'
    },
    snowAvailability: 'Exciting steep snow gulley climbing in April and May.',
    hasSnow: true,
    beginnerSuitability: 'Recommended for fit trekkers seeking their first 15,000 ft peak climb before moving to 6,000m summits.',
    isBeginnerFriendly: false,
    fitnessRequirement: 'High endurance. Ability to hike 8-10 hours on summit day with 4,000 ft elevation gain.',
    permitInformation: 'Nanda Devi Biosphere buffer zone permits arranged at Joshimath.',
    howToReach: {
      nearestRailhead: 'Rishikesh Railway Station (255 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (275 km)',
      distanceFromDehradun: '275 km via Rishikesh and Joshimath',
      byRoad: 'NH58 to Joshimath, with short vehicle link to Dhak.'
    },
    distanceFromDehradunKm: 275,
    startingPrice: '₹10,999',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'
    ],
    highlights: [
      'Real mountaineering peak summit climb to 15,069 ft with crampons and ice axes',
      'Unsurpassed 360° summit views of Nanda Devi, Chaukhamba, Kamet, and Dronagiri',
      'Exciting snow ridge and boulder scramble under certified expedition leaders',
      'Camp in the scenic meadows of Khullara overlooking deep Himalayan valleys'
    ],
    overview: 'Pangarchulla Peak is one of the most thrilling non-technical peak climbs in the Garhwal Himalayas. Rising proudly to 15,069 feet above the Kuari Pass sanctuary near Joshimath, Pangarchulla challenges climbers with a steep 4,000-foot summit day ascent through snow gulleys and knife-edge boulder ridges. The reward at the top is a heart-stopping 360-degree panorama of Mt. Nanda Devi, Chaukhamba, Hathi-Ghodi Parvat, and Trishul.',
    routeOverview: 'Rishikesh → Joshimath → Dhak → Gulling → Khullara Base Camp → Pangarchulla Summit (15,069 ft) → Khullara → Auli / Joshimath → Rishikesh.',
    itinerary: [
      {
        day: 1,
        title: 'Drive from Rishikesh to Joshimath',
        desc: 'Scenic drive through Devprayag and Rudraprayag along NH58. Overnight in Joshimath.',
        stay: 'Hotel in Joshimath',
        meals: 'Dinner',
        altitude: '6,200 ft',
        distance: '255 km drive'
      },
      {
        day: 2,
        title: 'Drive to Dhak Village & Trek to Gulling',
        desc: 'Drive 12 km to Dhak. Climb through terrace hamlets into oak woods to Gulling camp.',
        stay: 'Alpine Tents',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '9,600 ft',
        distance: '6 km trek'
      },
      {
        day: 3,
        title: 'Trek from Gulling to Khullara Base Camp',
        desc: 'Trek out of the forest into the high meadows of Khullara. Acclimatization walk and crampon practice.',
        stay: 'Alpine Tents at Khullara',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '11,100 ft',
        distance: '5 km trek'
      },
      {
        day: 4,
        title: 'Summit Push to Pangarchulla Peak (15,069 ft) & Return',
        desc: 'Summit climb begins at 2:30 AM under headlamps. Negotiate steep snow slopes and boulder ridges to reach the summit of Pangarchulla. Celebrate sunrise overlooking Mt. Nanda Devi before carefully descending to Khullara camp.',
        stay: 'Alpine Tents at Khullara',
        meals: 'Breakfast, Pack Lunch, Dinner',
        altitude: '15,069 ft summit',
        distance: '12 km round-trip (8-10 hours)'
      },
      {
        day: 5,
        title: 'Trek Down to Auli & Drive to Joshimath',
        desc: 'Trek across Gorson Bugyal down to Auli. Transfer to Joshimath for hot showers and victory dinner.',
        stay: 'Hotel in Joshimath',
        meals: 'Breakfast, Lunch, Dinner',
        altitude: '6,200 ft',
        distance: '8 km trek + 15 km drive'
      },
      {
        day: 6,
        title: 'Drive from Joshimath to Rishikesh',
        desc: 'Return drive along NH58 arriving by 6:00 PM.',
        stay: 'Departure',
        meals: 'Breakfast',
        altitude: '1,200 ft',
        distance: '255 km drive'
      }
    ],
    inclusions: [
      'Hotel in Joshimath and alpine expedition tents on trek',
      'All meals throughout the climb',
      'Certified mountaineering instructors (1:4 ratio on summit day)',
      'Climbing equipment: Microspikes/crampons, gaiters, safety ropes',
      'Forest permits and emergency medical oxygen'
    ],
    exclusions: ['Transport between Rishikesh and Joshimath', 'Personal offloading charges'],
    packingList: ['Sturdy crampon-compatible mountaineering boots', 'Cold-weather thermal down jacket', 'Headlamp with extra lithium batteries'],
    safetyInfo: ['Strict 1:4 leader-to-climber ratio on summit ridge', 'Turnaround time enforced at 9:00 AM'],
    faqs: [
      {
        question: 'How difficult is Pangarchulla compared to Kuari Pass?',
        answer: 'Kuari Pass is a moderate pass crossing at 12,500 ft, whereas Pangarchulla is a challenging peak climb reaching over 15,000 ft with steep 60° snow slopes and rock scrambles.'
      }
    ],
    reviews: [
      {
        id: 'rev-pc-1',
        author: 'Aditya Srivastava',
        location: 'Bengaluru',
        rating: 5,
        date: 'May 2025',
        comment: 'Pangarchulla gave me the real taste of mountaineering! Kicking steps into steep snow at 4 AM and summiting as the sun rose behind Nanda Devi was pure adrenaline. UK Yatra safety standards are unmatched.'
      }
    ],
    relatedTreks: ['kuari-pass', 'kedarkantha', 'brahmatal'],
    relatedDestinations: ['auli', 'joshimath', 'rishikesh'],
    relatedPackages: ['uky-road-08-winter-snow-auli-chopta-05n-06d'],
    relatedArticles: ['best-treks-in-uttarakhand']
  }
];

import { TourPackage } from '../types';

export const PACKAGE_SLUG_MAP: Record<string, string> = {
  'uttarakhand-tour-packages': 'uky-leisure-uttarakhand-grand-tour-7n-8d',
  'char-dham-yatra-package': 'uky-road-char-dham-yatra-haridwar-9n-10d',
  'do-dham-yatra-package': 'uky-road-do-dham-kedarnath-badrinath-5n-6d',
  'chopta-tungnath-chandrashila': 'uky-trek-chopta-tungnath-chandrashila-2n-3d',
  'auli-tour-package': 'uky-adventure-auli-snow-ski-meadows-4n-5d',
  'mussoorie-tour-package': 'uky-leisure-mussoorie-queen-of-hills-3n-4d',
  'rishikesh-tour-package': 'uky-leisure-rishikesh-adventure-camping-2n-3d',
  'kedarnath-yatra-package': 'uky-pilgrimage-kedarnath-yatra-ex-haridwar-4n-5d',
  'valley-of-flowers-trek': 'uky-trek-valley-of-flowers-hemkund-5n-6d',
  'nainital-tour-package': 'uky-leisure-nainital-lake-district-3n-4d'
};

/**
 * 10 Dedicated High-Intent Uttarakhand Tour Packages
 * Fully detailed with real itineraries, inclusions, route info, suitability, packing advice, and FAQs.
 */
export const ADDITIONAL_SEO_PACKAGES: TourPackage[] = [
  {
    id: 'uky-road-char-dham-yatra-haridwar-9n-10d',
    slug: 'char-dham-yatra-package',
    seoTitle: 'Char Dham Yatra Package from Haridwar & Delhi | UK Yatra',
    seoDescription: 'Complete 9N/10D Char Dham Yatra package covering Yamunotri, Gangotri, Kedarnath & Badrinath. Verified hotel stays, dedicated mountain vehicle, biometric registration support & local guides.',
    title: 'Complete Char Dham Yatra Package (9N/10D)',
    destination: 'Yamunotri, Gangotri, Kedarnath & Badrinath',
    duration: '9 Nights / 10 Days',
    days: 10,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'May - Jun & Sep - Nov',
    category: 'Spiritual Pilgrimage',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewsCount: 165,
    overview: 'The sacred Char Dham Yatra of Uttarakhand—encompassing Yamunotri, Gangotri, Kedarnath, and Badrinath—is regarded as one of India’s most spiritually meritorious journeys. UK Yatra operates this sacred circuit with deep local experience, providing comfortable hotel accommodations, verified mountain-tested commercial drivers, seamless darshan coordination, and assistance with government biometric yatra registrations from Haridwar, Rishikesh, or Dehradun.',
    highlights: [
      'Darshan at all four sacred Himalayan Dhams in traditional parikrama sequence',
      'Scenic drives along Bhagirathi, Alaknanda, and Mandakini river valleys',
      'Visit holy confluences at Devprayag, Rudraprayag, and Karnaprayag',
      'Comfortable twin/triple sharing hotels with hygienic pure-veg breakfast and dinner',
      'Assistance with Kedarnath helicopter slots and pony/palki arrangements'
    ],
    routeInfo: 'Haridwar – Barkot (Yamunotri) – Uttarkashi (Gangotri) – Guptkashi (Kedarnath) – Pipalkoti / Joshimath (Badrinath) – Rishikesh – Haridwar (Approx 1,450 km round-trip)',
    suitableFor: [
      'Pilgrims & Devotees seeking sacred Char Dham blessings',
      'Families and multigenerational travel groups',
      'Senior citizens (with pony/palki/helicopter options)',
      'Spiritual seekers exploring Himalayan shrines'
    ],
    packingNotes: [
      'Heavy woollen clothing, thermal inners, woollen caps, and windproof gloves',
      'Sturdy walking shoes with rubber grip for Yamunotri and Kedarnath trails',
      'Raincoat or waterproof poncho with backpack rain cover',
      'Government biometric registration slip and physical ID proof (Aadhar Card)',
      'Personal medicine kit (altitude care, pain relief, motion sickness tablets)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Haridwar / Rishikesh to Barkot (210 km / 7-8 hrs)',
        description: 'Morning pickup from Haridwar Railway Station or Dehradun Airport. Drive through Mussoorie foothills with scenic stops. Arrive at Barkot in the evening. Rest and acclimatize. Overnight stay at Barkot.',
        stay: 'Hotel / Camp in Barkot',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Barkot to Yamunotri Dham & Return to Barkot',
        description: 'Early morning drive to Janki Chatti. Trek 6 km to Yamunotri Temple by foot, pony, or palki. Take a holy dip in Surya Kund, cook rice in the hot spring, and seek blessings at Yamunotri Ji. Trek back to Janki Chatti and drive to Barkot. Overnight stay at Barkot.',
        stay: 'Hotel / Camp in Barkot',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Barkot to Uttarkashi (100 km / 4 hrs)',
        description: 'Drive along the turquoise Bhagirathi river to Uttarkashi. Visit the ancient Kashi Vishwanath Temple and Shakti Temple. Evening at leisure. Overnight stay at Uttarkashi.',
        stay: 'Hotel in Uttarkashi',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Uttarkashi to Gangotri Dham & Return (100 km each way)',
        description: 'Drive through the scenic Harsil Valley, known for apple orchards and deodar forests. Arrive at Gangotri Dham, take a holy dip in the Bhagirathi river, and attend darshan at the 18th-century temple. Return to Uttarkashi by evening. Overnight stay at Uttarkashi.',
        stay: 'Hotel in Uttarkashi',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 5,
        title: 'Uttarkashi to Guptkashi / Sitapur (220 km / 8 hrs)',
        description: 'Drive towards the Mandakini valley via Tehri dam bypass and Srinagar Garhwal. Check into your hotel in Guptkashi or Sitapur. Evening briefing for next day Kedarnath yatra. Overnight stay at Guptkashi.',
        stay: 'Hotel in Guptkashi / Sitapur',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 6,
        title: 'Guptkashi to Sonprayag & Kedarnath Dham (Trek / Heli)',
        description: 'Early transfer to Sonprayag/Helipad. Ascend the sacred trail to Kedarnath (16 km) by trek, pony, or helicopter shuttle. Reach Kedarnath by afternoon, check in to GMVN/hotel/camp, and participate in the evening divine Aarti. Overnight stay at Kedarnath.',
        stay: 'GMVN / Hotel / Camp at Kedarnath',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 7,
        title: 'Kedarnath Temple Darshan & Descent to Guptkashi',
        description: 'Early morning Abhishek darshan of Lord Shiva. Soak in the awe-inspiring sunrise over Kedar Dome. Trek or fly down to Sonprayag. Drive back to Guptkashi for dinner and rest. Overnight stay at Guptkashi.',
        stay: 'Hotel in Guptkashi',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 8,
        title: 'Guptkashi to Badrinath via Chopta / Joshimath (200 km / 7 hrs)',
        description: 'Drive via Ukhimath, Chopta meadows, and Joshimath to Badrinath Dham. Take a holy bath in Tapt Kund (natural hot water spring) and attend the evening Swarna Aarti at Badrinath Temple. Overnight stay at Badrinath or Pipalkoti.',
        stay: 'Hotel in Badrinath or Pipalkoti',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 9,
        title: 'Badrinath Sightseeing & Mana Village to Rudraprayag / Srinagar',
        description: 'Morning visit to Mana Village (the last Indian village), Vyas Gufa, Ganesh Gufa, and the roaring Bhim Pul over the Saraswati river. Begin descent towards Rudraprayag or Srinagar. Overnight stay at Rudraprayag.',
        stay: 'Hotel in Rudraprayag or Srinagar',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 10,
        title: 'Rudraprayag to Rishikesh & Haridwar Departure (160 km / 5 hrs)',
        description: 'Scenic return drive along the Alaknanda river via Devprayag Sangam. Drop at Rishikesh / Haridwar Railway Station or Dehradun Airport with sacred memories of the complete Char Dham.',
        stay: 'Tour Concludes',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Dedicated mountain vehicle with professional local driver throughout the yatra',
      '9 Nights hotel accommodation on twin/triple sharing basis',
      'Daily breakfast and pure vegetarian dinner at hotels (MAP plan)',
      'All toll taxes, state transport permits, green cess, and parking charges',
      'Assistance with mandatory government yatra biometric registration',
      'Local ground coordination at key hubs'
    ],
    exclusions: [
      'Helicopter tickets, pony, palki, or porter charges',
      'Special VIP puja tickets or priest dakshina',
      'Lunches, personal mineral water, and room service',
      '5% GST'
    ],
    faqs: [
      {
        question: 'What is the ideal duration for the complete Char Dham by road?',
        answer: 'The recommended duration from Haridwar is 9 Nights / 10 Days (or 11 to 12 Days from Delhi) to allow safe mountain driving, proper acclimatization, and rest between long drives.'
      },
      {
        question: 'Are there helicopter services available for Char Dham?',
        answer: 'Yes, UK Yatra coordinates helicopter packages directly from Sahastradhara Helipad in Dehradun, completing the 4 Dhams in 5 Nights / 6 Days.'
      }
    ],
    isFeatured: true,
    pdfBrochure: '/assets/itinerary/03. By Road/Haridwar/01. Chardham by Road Ex Haridwar - 09N 10D.pdf',
    pickupDrop: 'Ex-Haridwar / Dehradun'
  },
  {
    id: 'uky-road-do-dham-kedarnath-badrinath-5n-6d',
    slug: 'do-dham-yatra-package',
    seoTitle: 'Do Dham Yatra Package (Kedarnath & Badrinath) | UK Yatra',
    seoDescription: 'Book 5N/6D Do Dham Yatra package from Haridwar or Delhi. Visit sacred Kedarnath Jyotirlinga and Badrinath Temple with verified hotel stays and mountain transport.',
    title: 'Do Dham Yatra (Kedarnath & Badrinath) (5N/6D)',
    destination: 'Kedarnath & Badrinath Dham',
    duration: '5 Nights / 6 Days',
    days: 6,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'May - Jun & Sep - Nov',
    category: 'Spiritual Pilgrimage',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviewsCount: 94,
    overview: 'The Do Dham Yatra covering Kedarnath (Lord Shiva) and Badrinath (Lord Vishnu) is the most popular pilgrimage choice for devotees with limited vacation time. UK Yatra’s 5N/6D circuit from Haridwar combines comfortable mountain vehicle transport, verified stays in Guptkashi and Joshimath/Pipalkoti, darshan guidance, and complete coordination for the Kedarnath trek or helicopter flight.',
    highlights: [
      'Darshan at Kedarnath Jyotirlinga and Sri Badrinath Temple',
      'Visit historic Mana village, Bhim Pul, and Vyas Gufa near the Tibetan border',
      'Witness sacred confluences at Devprayag, Rudraprayag, and Karnaprayag',
      'Comfortable verified hotel stays with pure vegetarian meals',
      'Complete local coordination and 24/7 on-trip support'
    ],
    routeInfo: 'Haridwar – Devprayag – Rudraprayag – Guptkashi (Kedarnath) – Pipalkoti / Joshimath (Badrinath) – Rishikesh – Haridwar (850 km)',
    suitableFor: [
      'Devotees seeking Kedarnath and Badrinath darshan',
      'Families with 5-6 days available',
      'First-time Himalayan pilgrims'
    ],
    packingNotes: [
      'Warm jackets, thermal innerwear, and woollen caps',
      'Waterproof raincoat or poncho',
      'Trekking shoes for Kedarnath trail',
      'Yatra registration slip and Aadhar Card copy'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Haridwar to Guptkashi (210 km / 7-8 hrs)',
        description: 'Morning pickup from Haridwar or Rishikesh. Drive along the scenic Mandakini river valley via Devprayag and Rudraprayag. Arrive at Guptkashi in the evening. Overnight stay at Guptkashi.',
        stay: 'Hotel in Guptkashi',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Guptkashi to Sonprayag & Kedarnath (Trek / Heli)',
        description: 'Early morning transfer to Sonprayag/Helipad. Trek 16 km or fly to Kedarnath Dham. Attend the soulful evening temple Aarti. Overnight stay at Kedarnath.',
        stay: 'GMVN / Hotel / Camp in Kedarnath',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Kedarnath Temple Darshan & Return to Guptkashi',
        description: 'Early morning darshan at Kedarnath temple. Trek or fly back to Sonprayag. Meet driver and transfer to Guptkashi hotel. Overnight stay at Guptkashi.',
        stay: 'Hotel in Guptkashi',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Guptkashi to Badrinath (200 km / 7 hrs)',
        description: 'Drive through scenic Chopta and Joshimath to Badrinath Dham. Take bath in Tapt Kund and attend evening Aarti at Badri Vishal. Overnight stay at Badrinath or Pipalkoti.',
        stay: 'Hotel in Badrinath or Pipalkoti',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 5,
        title: 'Badrinath Sightseeing & Mana Village to Rudraprayag',
        description: 'Morning darshan at Badrinath. Visit Mana Village, Saraswati river origin, and Bhim Pul. Afternoon drive down to Rudraprayag or Srinagar. Overnight stay at Rudraprayag.',
        stay: 'Hotel in Rudraprayag',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 6,
        title: 'Rudraprayag to Rishikesh & Haridwar Drop',
        description: 'Morning drive back towards Rishikesh. Explore Ram Jhula and drop at Haridwar Railway Station or Dehradun Airport by late afternoon.',
        stay: 'Tour Concludes',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Private mountain vehicle with driver allowances and tolls included',
      '5 Nights hotel accommodation on twin/triple sharing',
      'Breakfast and dinner as per itinerary',
      'Yatra registration assistance'
    ],
    exclusions: [
      'Helicopter tickets, pony/palki charges',
      'Lunch, personal items, and 5% GST'
    ],
    faqs: [
      {
        question: 'Can Do Dham be completed in 5 days?',
        answer: 'Yes, 5 Nights / 6 Days is the optimal duration from Haridwar/Rishikesh for a comfortable and spiritually enriching Do Dham journey.'
      }
    ],
    isFeatured: true,
    pdfBrochure: '/assets/itinerary/03. By Road/Haridwar/02. Dodham by Road Haridwar - 05N 06D.pdf',
    pickupDrop: 'Ex-Haridwar / Dehradun'
  },
  {
    id: 'uky-trek-chopta-tungnath-chandrashila-2n-3d',
    slug: 'chopta-tungnath-chandrashila',
    seoTitle: 'Chopta Tungnath Chandrashila Trek Package | UK Yatra',
    seoDescription: 'Book Chopta Tungnath & Chandrashila summit trek package from Haridwar/Rishikesh. Trek to the world’s highest Shiva temple (3,680m) with 360° Himalayan views, Swiss camps & local guides.',
    title: 'Chopta Tungnath & Chandrashila Trek (2N/3D)',
    destination: 'Chopta, Tungnath & Chandrashila',
    duration: '2 Nights / 3 Days',
    days: 3,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Apr - Jun (Meadows) & Sep - Nov (Clear Peaks) / Dec - Feb (Snow Trek)',
    category: 'Alpine Trek',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewsCount: 96,
    overview: 'Chopta, often celebrated as the “Mini Switzerland of Uttarakhand”, is an alpine haven of rhododendron groves and sprawling meadows (Bugyals). It serves as the base camp for the trek to Tungnath—the world’s highest Shiva temple (3,680m)—and the dramatic Chandrashila summit (4,000m), offering an awe-inspiring 360-degree panorama of Chaukhamba, Nanda Devi, Trishul, and Kedarnath peaks.',
    highlights: [
      'Summit Tungnath (3,680m) - the highest of the Panch Kedar shrines',
      'Spectacular sunrise from Chandrashila Peak (4,000m) overlooking major Himalayan ranges',
      'Stay in cozy Swiss tents in the meadows of Chopta with campfire & local hospitality',
      'Scenic side trip to Deoriatal emerald lake reflecting the Chaukhamba massif',
      'Ideal weekend Himalayan trek for beginners, youth groups, and nature photographers'
    ],
    routeInfo: 'Haridwar – Rishikesh – Devprayag – Rudraprayag – Ukhimath – Chopta (185 km drive / 5-6 hrs) + 10 km round-trip summit trek',
    suitableFor: [
      'Beginner & Experienced Himalayan Trekkers',
      'College & Youth Travel Groups',
      'Nature & Landscape Photographers',
      'Weekend Adventure Seekers from Delhi NCR'
    ],
    packingNotes: [
      'High-ankle trekking shoes with good grip',
      'Warm fleece jacket, thermal inners, and windproof outer layer',
      'Trekking pole for support during descent',
      'Headlamp / LED torch for pre-dawn Chandrashila summit push',
      'Water bottle and energy snacks'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Haridwar / Rishikesh to Chopta (185 km / 5-6 hrs)',
        description: 'Morning drive from Haridwar/Rishikesh through the Alaknanda and Mandakini river valleys. Pass Devprayag, Rudraprayag, and Ukhimath. Ascend into dense oak and rhododendron forests to reach Chopta (2,680m). Check in to cozy Swiss tents. Evening bonfire amidst crisp alpine air. Overnight stay at Chopta.',
        stay: 'Swiss Camps in Chopta',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 2,
        title: 'Chopta to Tungnath & Chandrashila Summit & Return (10 km Trek)',
        description: 'Early morning start around 4:00 AM. Ascend 3.5 km on the stone trail to Tungnath Temple. Offer prayers and continue 1.5 km further up to Chandrashila summit (4,000m) for an unforgettable sunrise illuminating the Greater Himalayas. Descend back to Chopta campsite by afternoon. Overnight stay at Chopta.',
        stay: 'Swiss Camps in Chopta',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Chopta to Deoriatal & Return to Haridwar / Rishikesh',
        description: 'Morning short visit to Deoriatal lake near Sari village. Enjoy mirror reflections of Chaukhamba in the water. Drive down via Rudraprayag to Rishikesh. Attend evening Ganga Aarti at Rishikesh and drop at Haridwar Railway Station.',
        stay: 'Tour Concludes',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Transport in dedicated vehicle from Haridwar/Rishikesh and return',
      '2 Nights accommodation in Swiss Camps at Chopta on sharing basis',
      'Breakfast and dinner at campsite',
      'Experienced local certified trek guide and basic first aid',
      'All toll, fuel, and parking expenses'
    ],
    exclusions: [
      'Lunch and trail refreshments',
      'Personal trekking gear and porter costs',
      '5% GST'
    ],
    faqs: [
      {
        question: 'Is the Chopta Tungnath trek suitable for beginners?',
        answer: 'Yes! It is one of the most accessible Himalayan summit treks in India. The stone pathway is well-graded, making it achievable for anyone with basic fitness.'
      },
      {
        question: 'Can this trek be done in winter for snow?',
        answer: 'Yes, during December to February, Chopta transforms into a winter wonderland with snow cover, making the Chandrashila winter trek an exciting snow experience.'
      }
    ],
    isFeatured: true,
    pdfBrochure: '/assets/itinerary/05. Tungnath Chopta Trek/09. Tungnath By Road Ex Haridwar.pdf',
    pickupDrop: 'Ex-Haridwar / Rishikesh'
  },
  {
    id: 'uky-adventure-auli-snow-ski-meadows-4n-5d',
    slug: 'auli-tour-package',
    seoTitle: 'Auli Tour Package from Delhi & Dehradun | UK Yatra',
    seoDescription: 'Book 4N/5D Auli tour package with UK Yatra. Experience Asia’s longest cable car ropeway, winter skiing slopes, Gorson Bugyal trek, and views of Nanda Devi peak.',
    title: 'Auli Ski & Alpine Meadows Tour (4N/5D)',
    destination: 'Joshimath & Auli',
    duration: '4 Nights / 5 Days',
    days: 5,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Dec - Mar (Snow & Skiing) & Apr - Jun (Green Bugyals)',
    category: 'Snow & Adventure',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewsCount: 118,
    overview: 'Auli is India’s premier winter sports destination, famed for wide powdery ski slopes, the highest man-made lake in the world, and Asia’s longest ropeway connecting Joshimath to Auli top (4 km). Surrounded by dense oak and coniferous forests with uninterrupted front-row panoramas of Nanda Devi (India’s second highest peak), Kamet, and Dunagiri, UK Yatra provides full private vehicle logistics, comfortable hotel stays, ski instructor arrangements, and Gorson Bugyal guided hikes.',
    highlights: [
      'Ride Asia’s longest aerial cable car ropeway (4 km) from Joshimath to Auli',
      'Front-row 180-degree view of Nanda Devi, Hathi-Ghodi Parvat, and Kamet peaks',
      'Skiing and snowboarding lessons with certified instructors (during winter months)',
      'Scenic snow/meadow hike to Gorson Bugyal (3,056m) and Chattrakund lake',
      'Private vehicle transport from Delhi, Dehradun, or Haridwar'
    ],
    routeInfo: 'Delhi / Haridwar – Rishikesh – Devprayag – Srinagar – Joshimath (280 km from Haridwar / 500 km from Delhi) + 4 km Ropeway or 14 km hill road to Auli',
    suitableFor: [
      'Honeymooners & Couples seeking scenic mountain escapes',
      'Adventure lovers, skiers, and snowboarders',
      'Families looking for snow experiences and ropeway rides',
      'Photographers chasing high Himalayan vistas'
    ],
    packingNotes: [
      'Waterproof high-ankle snow boots and thermal woollen socks',
      'Heavy down feather jacket, insulated winter trousers, and warm gloves',
      'Polarized UV-protection sunglasses (essential against snow blindness)',
      'Moisturizing lip balm, sunscreen lotion, and cold cream'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi / Haridwar to Srinagar / Rudraprayag (200 km / 6 hrs)',
        description: 'Morning departure from Delhi or Haridwar. Drive along the picturesque Ganges and Alaknanda corridors. Halt at Devprayag to view the holy confluence. Arrive at Srinagar Garhwal or Rudraprayag. Overnight stay at hotel.',
        stay: 'Hotel in Srinagar or Rudraprayag',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Srinagar to Joshimath & Auli Ropeway (140 km / 5 hrs)',
        description: 'After breakfast, continue the mountain ascent past Karnaprayag and Chamoli to Joshimath. Board the thrilling 4 km aerial cable car ropeway to Auli (or travel via road). Check in to your resort in Auli. Witness the golden alpenglow over Nanda Devi peak at sunset. Overnight stay at Auli.',
        stay: 'Hotel / Resort in Auli or Joshimath',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Auli Skiing, Artificial Lake & Gorson Bugyal Hike',
        description: 'Spend the day enjoying snow activities, skiing lessons, or relaxing by the Auli Artificial Lake. Embark on a guided 3 km day trek to the vast meadows of Gorson Bugyal, with breathtaking Himalayan panoramas on all sides. Return to hotel for dinner. Overnight stay at Auli.',
        stay: 'Hotel / Resort in Auli or Joshimath',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Auli to Rishikesh via Devprayag (250 km / 8 hrs)',
        description: 'Descend to Joshimath and commence the return drive down the valley. Arrive at Rishikesh by evening. Attend the peaceful Ganga Aarti at Triveni Ghat. Overnight stay at Rishikesh.',
        stay: 'Hotel in Rishikesh',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 5,
        title: 'Rishikesh Sightseeing & Drop at Haridwar / Delhi',
        description: 'Morning visit to Ram Jhula and local riverfront cafes. Transfer to Haridwar Railway Station or Dehradun Airport (or drive back to Delhi) with unforgettable memories of Auli.',
        stay: 'Tour Concludes',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Private dedicated commercial vehicle for all intercity transfers and sightseeing',
      '4 Nights accommodation on twin sharing basis in verified hotels/resorts',
      'Daily breakfast and dinner (MAP plan)',
      'All toll taxes, parking, driver allowance, and mountain road permits'
    ],
    exclusions: [
      'Auli Ropeway tickets and chairlift tickets (payable directly at counter)',
      'Skiing equipment rental and instructor fees',
      'Lunch, personal beverages, and 5% GST'
    ],
    faqs: [
      {
        question: 'When is the best time to visit Auli for snowfall?',
        answer: 'Late December through early March is the peak snow season when the ski slopes are active and artificial snow guns operate.'
      },
      {
        question: 'Is Auli worth visiting in summer?',
        answer: 'Absolutely. In summer (April to June), Auli transforms into lush green alpine meadows (Bugyals) with pleasant 15°C to 20°C temperatures and clear views of Nanda Devi.'
      }
    ],
    isFeatured: true,
    pdfBrochure: null,
    pickupDrop: 'Ex-Delhi / Dehradun / Haridwar'
  },
  {
    id: 'uky-leisure-mussoorie-queen-of-hills-3n-4d',
    slug: 'mussoorie-tour-package',
    seoTitle: 'Mussoorie Tour Package & Queen of Hills Weekend | UK Yatra',
    seoDescription: 'Book 3N/4D Mussoorie tour package with UK Yatra. Explore Mall Road, Kempty Falls, George Everest Peak, Company Garden, Dhanaulti Eco Park, and Dehradun valleys.',
    title: 'Mussoorie Queen of Hills & Dhanaulti (3N/4D)',
    destination: 'Mussoorie, Dhanaulti & Dehradun',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Round the Year (Snow in Dec-Jan, pleasant in Mar-Jun)',
    category: 'Hill Station Leisure',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviewsCount: 82,
    overview: 'Perched on a 2,000-metre ridge overlooking the Doon Valley, Mussoorie has charmed travelers since the colonial era with its historic estates, cascading mountain falls, and spectacular winterline sunsets. UK Yatra’s 3N/4D holiday covers the iconic Mall Road, Kempty Falls, Sir George Everest House, Company Garden, and a scenic day excursion into the quiet deodar forests of Dhanaulti.',
    highlights: [
      'Stroll the historic Mussoorie Mall Road and Gun Hill ropeway',
      'Visit famous Kempty Falls and scenic Company Garden',
      'Sunset hike to Sir George Everest Peak with unhindered Doon Valley views',
      'Day trip to Dhanaulti Eco Park and Surkanda Devi Temple (2,757m)',
      'Smooth private taxi transfers from Dehradun Airport or Railway Station'
    ],
    routeInfo: 'Dehradun – Mussoorie (35 km / 1.5 hrs) – Dhanaulti (32 km from Mussoorie) – Dehradun (Approx 180 km circuit)',
    suitableFor: [
      'Couples & Honeymooners seeking mountain romance',
      'Families looking for relaxed hill leisure and kids activities',
      'Weekend travelers from Delhi NCR and Chandigarh'
    ],
    packingNotes: [
      'Light woollens and cardigans for summer evenings; heavy jackets in winter',
      'Comfortable walking shoes for Mall Road and Gun Hill strolls',
      'Umbrella or light rain jacket during monsoon months'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dehradun / Delhi to Mussoorie Arrival & Mall Road',
        description: 'Pickup from Dehradun Railway Station / Jolly Grant Airport (or direct drive from Delhi). Ascend the scenic serpentine highway to Mussoorie (2,005m). Check into your hotel. In the evening, explore the bustling Mall Road, browse local wooden crafts, and ride the ropeway to Gun Hill. Overnight stay in Mussoorie.',
        stay: 'Hotel / Resort in Mussoorie',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Mussoorie Local Sightseeing: Kempty Falls & George Everest',
        description: 'Post breakfast, visit the renowned Kempty Falls for scenic cascades. Continue to Company Garden and Camel’s Back Road. Later in the afternoon, visit the historic Sir George Everest House and take a gentle sunset ridge walk overlooking the snow-crested Himalayas and twinkling Doon lights. Overnight stay in Mussoorie.',
        stay: 'Hotel / Resort in Mussoorie',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Day Excursion to Dhanaulti & Surkanda Devi Temple',
        description: 'Scenic 32 km drive through tall deodar and oak forests to Dhanaulti. Explore the serene Dhanaulti Eco Park. Continue to the sacred Surkanda Devi Temple (accessible via a short ropeway or 1.5 km uphill walk) for breathtaking 360-degree views of the Garhwal Himalayas. Return to Mussoorie for dinner. Overnight stay in Mussoorie.',
        stay: 'Hotel / Resort in Mussoorie',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Mussoorie to Dehradun Sightseeing & Departure',
        description: 'After breakfast, check out from the hotel. Drive down to Dehradun. Visit Robber’s Cave (Guchhupani) or Sahastradhara sulphur springs. Transfer to Dehradun Railway Station or Airport for your journey home.',
        stay: 'Tour Concludes',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Private dedicated commercial AC vehicle for all transfers and sightseeing',
      '3 Nights hotel accommodation in Mussoorie',
      'Daily breakfast and dinner at the hotel',
      'Toll taxes, parking fees, and driver allowances'
    ],
    exclusions: [
      'Ropeway tickets and monument entry fees',
      'Lunch, snacks, and personal expenses',
      '5% GST'
    ],
    faqs: [
      {
        question: 'How far is Mussoorie from Dehradun airport?',
        answer: 'Jolly Grant Airport in Dehradun is approximately 60 km from Mussoorie, taking around 2 to 2.5 hours by road.'
      },
      {
        question: 'What is the winterline phenomenon in Mussoorie?',
        answer: 'From October to January, Mussoorie witnesses a rare optical atmospheric phenomenon called the winterline—a vibrant two-tone sunset band visible from only a few places worldwide.'
      }
    ],
    isFeatured: true,
    pdfBrochure: '/assets/itinerary/04. Haridwar_Rishikesh_DDun_Massoorri/Haridwar Rishikesh Dehradun Mussoorie - 3N 4D.pdf',
    pickupDrop: 'Ex-Dehradun / Haridwar / Delhi'
  },
  {
    id: 'uky-leisure-uttarakhand-grand-tour-7n-8d',
    slug: 'uttarakhand-tour-packages',
    seoTitle: 'Uttarakhand Tour Packages & Best Himalayan Itineraries | UK Yatra',
    seoDescription: 'Explore the best of Uttarakhand with UK Yatra’s 7N/8D Grand Tour. Experience Haridwar Ganga Aarti, Rishikesh river rafting, Dehradun valley, Mussoorie Queen of Hills, and Dhanaulti.',
    title: 'Grand Uttarakhand Tour (Haridwar, Rishikesh, Dehradun & Mussoorie) (7N/8D)',
    destination: 'Haridwar, Rishikesh, Dehradun, Mussoorie & Dhanaulti',
    duration: '7 Nights / 8 Days',
    days: 8,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Round the Year',
    category: 'Complete Uttarakhand Circuit',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewsCount: 156,
    overview: 'Experience the complete essence of Uttarakhand in one seamless holiday. Combining the sacred spirituality of Haridwar’s Har Ki Pauri and Rishikesh’s riverfront ashrams with the colonial charm of Mussoorie, the pine serenity of Dhanaulti, and the vibrant cafes of Dehradun, UK Yatra’s 7N/8D Grand Tour is the definitive holiday package for families and first-time Himalayan travelers.',
    highlights: [
      'Soul-stirring evening Ganga Aarti at Har Ki Pauri and Triveni Ghat',
      'White-water river rafting and suspension bridges in Rishikesh',
      'Scenic colonial hill station exploration in Mussoorie (Mall Road, Kempty Falls)',
      'Day excursion to pristine deodar forests of Dhanaulti and Surkanda Devi',
      'Dedicated private vehicle, verified stays, and 24/7 on-trip coordinator'
    ],
    routeInfo: 'Delhi / Haridwar – Haridwar (2N) – Rishikesh (2N) – Dehradun – Mussoorie (3N) – Dhanaulti – Haridwar / Delhi (Approx 600 km round-trip)',
    suitableFor: [
      'Families and multigenerational groups',
      'Couples seeking diverse spiritual and hill experiences',
      'First-time visitors to Uttarakhand',
      'Corporate retreats and group vacations'
    ],
    packingNotes: [
      'Layered clothing suitable for mild foothill temperatures and cool hill station evenings',
      'Comfortable walking shoes for heritage trails and mall roads',
      'Modest attire for visiting sacred ghats and temples'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Haridwar & Har Ki Pauri Ganga Aarti',
        description: 'Arrive at Haridwar Railway Station or Dehradun Airport. Check into your hotel. In the evening, witness the world-famous Ganga Aarti at Har Ki Pauri where thousands of earthen lamps float on the sacred river. Overnight stay in Haridwar.',
        stay: 'Hotel in Haridwar',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Haridwar Temple Tour (Mansa Devi & Chandi Devi)',
        description: 'Morning cable car ride to Mansa Devi and Chandi Devi hill shrines. Visit Daksh Prajapati Temple and Shantikunj. Evening at leisure to explore local spice and sweet bazaars. Overnight stay in Haridwar.',
        stay: 'Hotel in Haridwar',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Haridwar to Rishikesh & Tapovan Exploration',
        description: 'Short 45-minute drive to Rishikesh. Check into your riverside resort. Visit Ram Jhula, Laxman Jhula area, and the iconic Beatles Ashram. Attend the devotional evening Aarti at Parmarth Niketan. Overnight stay in Rishikesh.',
        stay: 'Hotel / Resort in Rishikesh',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Rishikesh Adventure Sports & Riverside Leisure',
        description: 'Gear up for an exciting 16 km white-water rafting trip down the Ganges from Shivpuri, complete with cliff jumping and body surfing. Afternoon at leisure exploring Tapovan’s organic cafes or yoga centers. Overnight stay in Rishikesh.',
        stay: 'Hotel / Resort in Rishikesh',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 5,
        title: 'Rishikesh to Dehradun & Mussoorie (85 km / 3 hrs)',
        description: 'Drive to Mussoorie via Dehradun. En route, explore Robber’s Cave (Guchhupani) in Dehradun. Ascend into the Shivalik hills to Mussoorie. Evening walk along the Mall Road. Overnight stay in Mussoorie.',
        stay: 'Hotel / Resort in Mussoorie',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 6,
        title: 'Mussoorie Sightseeing: Kempty Falls & George Everest',
        description: 'Full-day sightseeing covering Kempty Falls, Company Garden, Camel’s Back Road, and a scenic afternoon ridge hike up to Sir George Everest Peak. Overnight stay in Mussoorie.',
        stay: 'Hotel / Resort in Mussoorie',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 7,
        title: 'Day Trip to Dhanaulti & Surkanda Devi Peak',
        description: 'Excursion through dense deodar forests to Dhanaulti Eco Park and Surkanda Devi Temple (2,757m) with 360-degree views of the Garhwal snow peaks. Return to Mussoorie for dinner. Overnight stay in Mussoorie.',
        stay: 'Hotel / Resort in Mussoorie',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 8,
        title: 'Mussoorie to Dehradun / Haridwar Departure',
        description: 'After breakfast, drive down to Dehradun. Drop at Jolly Grant Airport or Haridwar Railway Station for your onward journey with fond memories of Uttarakhand.',
        stay: 'Tour Concludes',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Dedicated AC vehicle throughout the 8-day tour',
      '7 Nights hotel accommodation on twin/triple sharing',
      'Daily breakfast and dinner (MAP plan)',
      '16 km River Rafting in Rishikesh with professional river guides',
      'All toll taxes, state road taxes, parking, and driver allowances'
    ],
    exclusions: [
      'Cable car/ropeway tickets and monument entry fees',
      'Lunches and personal refreshments',
      '5% GST'
    ],
    faqs: [
      {
        question: 'Can this package be customized for our arrival in Delhi?',
        answer: 'Yes, UK Yatra provides direct pickup and drop from Delhi NCR (IGI Airport, New Delhi Railway Station, or your residence) with private AC transport.'
      },
      {
        question: 'Is this tour suitable for senior citizens?',
        answer: 'Yes, this circuit has smooth paved roads, minimal steep climbing, and leisurely pacing suitable for all family members.'
      }
    ],
    isFeatured: true,
    pdfBrochure: '/assets/itinerary/04. Haridwar_Rishikesh_DDun_Massoorri/Haridwar Rishikesh Dehradun Mussoorie - 7N 8D.pdf',
    pickupDrop: 'Ex-Haridwar / Dehradun / Delhi'
  },
  {
    id: 'uky-pilgrimage-kedarnath-yatra-ex-haridwar-4n-5d',
    slug: 'kedarnath-yatra-package',
    seoTitle: 'Kedarnath Yatra Package from Haridwar & Dehradun | UK Yatra',
    seoDescription: 'Book Kedarnath Yatra package 4N/5D with UK Yatra. Includes hotel stay in Guptkashi/Sonprayag, priority darshan support, verified mountain driver, and helicopter/trekking assistance.',
    title: 'Kedarnath Yatra Sacred Pilgrimage (4N/5D)',
    destination: 'Guptkashi, Sonprayag & Kedarnath Dham',
    duration: '4 Nights / 5 Days',
    days: 5,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'May - Jun & Sep - Nov',
    category: 'Spiritual Yatra',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewsCount: 112,
    overview: 'Undertake the divine pilgrimage to Kedarnath Ji, the highest of the 12 Jyotirlingas, cradled in the Mandakini valley beneath the towering Kedar Dome (3,584m). UK Yatra coordinates your complete journey from Haridwar, Rishikesh, or Dehradun—managing mandatory government biometric registration, clean pre-booked hotel accommodations in Guptkashi or Phata, Sonprayag taxi shuttles, and optional helicopter slot coordination or pony/palki support for the 16 km Gaurikund trail.',
    highlights: [
      'Darshan at Kedarnath Jyotirlinga (3,584m) amidst snow-clad peaks',
      'Option for scenic 16 km trek from Gaurikund or IRCTC HeliYatra shuttle assistance',
      'En-route visit to holy Sangam at Devprayag (Alaknanda & Bhagirathi) and Rudraprayag',
      'Comfortable twin/triple sharing hotels in Guptkashi with pure vegetarian meals',
      '24/7 dedicated on-trip helpline and local mountain operational support'
    ],
    routeInfo: 'Haridwar – Rishikesh – Devprayag – Srinagar – Rudraprayag – Guptkashi – Sonprayag (210 km drive) + Sonprayag to Gaurikund local shuttle + 16 km trek to Kedarnath Temple',
    suitableFor: [
      'Shiva Devotees & Pilgrims',
      'Families & Groups',
      'Adventure Walkers & Trekkers',
      'Solo Pilgrims'
    ],
    packingNotes: [
      'Thermal innerwear and heavy woollen fleece jackets (night temperature drops below 0°C)',
      'Waterproof raincoat, poncho, and waterproof bag cover',
      'Sturdy trekking shoes with ankle support and woollen socks',
      'Personal medical kit with paracetamol, pain balm, Diamox (consult your physician), and band-aids',
      'Physical printout of Kedarnath Yatra Registration Slip and Aadhar Card'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Haridwar / Rishikesh to Guptkashi / Phata',
        description: 'Morning pickup from Haridwar Railway Station or Dehradun Airport. Drive along the scenic Mandakini and Alaknanda river valleys via Devprayag Sangam and Rudraprayag. Arrive at Guptkashi/Phata in the evening and check in to your hotel. Attend the evening briefing regarding the next day trek or helicopter schedule. Overnight stay at Guptkashi.',
        stay: 'Hotel / Resort in Guptkashi or Phata',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Guptkashi to Sonprayag & Trek / Helicopter to Kedarnath',
        description: 'Early morning departure for Sonprayag. For helicopter passengers, transfer to the designated helipad (Sirsi/Phata/Guptkashi). For trekkers, board the local jeep shuttle to Gaurikund. Begin the 16 km mountain ascent along the Mandakini river via Jungle Chatti, Bheembali, and Linchauli. Arrive at Kedarnath top by evening, check into your stay, and attend the sublime evening Aarti at the temple. Overnight stay at Kedarnath.',
        stay: 'GMVN Guest House / Hotel / Camp at Kedarnath',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Morning Darshan & Trek Down to Sonprayag – Guptkashi',
        description: 'Wake up early for the divine morning darshan and Abhishek at the sacred sanctum. Soak in panoramic sunrise views of the Kedar Peak. After temple darshan, begin the descent back to Gaurikund (or fly down to the helipad). Meet our driver at Sonprayag and transfer back to the hotel in Guptkashi for well-earned rest. Overnight stay at Guptkashi.',
        stay: 'Hotel / Resort in Guptkashi',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Guptkashi to Rishikesh (via Dhari Devi Temple)',
        description: 'After breakfast, start your return drive. En route, visit the revered Dhari Devi Temple near Srinagar, guardian deity of the Char Dham. Continue driving to Rishikesh. Check in to your hotel and witness the world-renowned Ganga Aarti at Triveni Ghat or Parmarth Niketan in the evening. Overnight stay at Rishikesh.',
        stay: 'Hotel in Rishikesh',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 5,
        title: 'Rishikesh Sightseeing & Drop at Haridwar / Dehradun',
        description: 'Morning visit to Ram Jhula, Laxman Jhula area, and local ashrams. Enjoy riverfront views of the holy Ganges. Later, transfer to Haridwar Railway Station or Jolly Grant Airport Dehradun for your onward journey with divine memories.',
        stay: 'Tour Concludes',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Transport in dedicated sanitized mountain vehicle (Swift Dzire / Innova / Tempo Traveller)',
      '4 Nights accommodation on twin/triple sharing basis',
      'Daily breakfast and pure vegetarian dinner as per itinerary',
      'All driver allowances, toll taxes, parking charges, and green cess',
      'Assistance with mandatory government yatra biometric registration',
      'Local ground coordination team assistance at Guptkashi and Sonprayag'
    ],
    exclusions: [
      'Helicopter tickets (must be booked via IRCTC portal; guidance provided)',
      'Pony, palki, or porter charges on the Gaurikund-Kedarnath trail',
      'Lunch, packaged mineral water, and personal refreshments',
      'Special VIP puja or darshan receipts',
      '5% GST as applicable on government norms'
    ],
    faqs: [
      {
        question: 'What is the best time to visit Kedarnath?',
        answer: 'The ideal time is May to June during summer, and September to October post-monsoon when skies are clearest and temperatures are comfortable. The temple remains closed in winter from Diwali until Akshaya Tritiya.'
      },
      {
        question: 'How long and difficult is the Kedarnath trek?',
        answer: 'The trek from Gaurikund to Kedarnath is approximately 16 kilometres with an elevation gain of around 1,600 metres. It typically takes 6 to 9 hours depending on individual fitness. Palkis, ponies, and helicopter services are available.'
      },
      {
        question: 'Is yatra registration mandatory for Kedarnath?',
        answer: 'Yes, government biometric registration through the official Uttarakhand Tourism portal is strictly mandatory for every pilgrim before entering Sonprayag.'
      }
    ],
    isFeatured: true,
    pdfBrochure: null,
    pickupDrop: 'Ex-Haridwar / Dehradun'
  },
  {
    id: 'uky-trek-valley-of-flowers-hemkund-5n-6d',
    slug: 'valley-of-flowers-trek',
    seoTitle: 'Valley of Flowers Trek & Hemkund Sahib Package | UK Yatra',
    seoDescription: 'Book official 5N/6D Valley of Flowers and Hemkund Sahib trek package. Certified mountain guides, Joshimath stays, Ghangaria base camp, entry permits, and Haridwar transport included.',
    title: 'Valley of Flowers & Hemkund Sahib Trek (5N/6D)',
    destination: 'Ghangaria, Valley of Flowers & Hemkund Sahib',
    duration: '5 Nights / 6 Days',
    days: 6,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Jul - Sep (Peak Blooming Season)',
    category: 'Alpine Trek',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewsCount: 88,
    overview: 'Valley of Flowers is a UNESCO World Heritage National Park hidden in Chamoli district, where over 500 varieties of wild alpine flora bloom against snow-streaked peaks and rushing glacial streams. Paired with the sacred high-altitude Sikh shrine of Hemkund Sahib (4,329m), this is one of the most rewarding and biologically rich treks in the Indian Himalayas. UK Yatra handles your complete logistics from Haridwar/Rishikesh with certified local mountain guides.',
    highlights: [
      'Trek into the UNESCO World Heritage Valley of Flowers with rare Himalayan orchids & poppies',
      'Visit holy Gurudwara Sri Hemkund Sahib and glacial lake at 4,329 metres',
      'Stay at scenic Ghangaria base camp surrounded by fir and birch forests',
      'Experienced wilderness trek leads with first-aid certification and oxygen cylinders',
      'Convenient pickup and drop from Haridwar/Rishikesh'
    ],
    routeInfo: 'Haridwar – Rishikesh – Joshimath / Govindghat (290 km drive) + Govindghat to Pulna drive + 10 km trek to Ghangaria base + Day treks to Valley of Flowers (4 km each way) and Hemkund Sahib (6 km steep ascent)',
    suitableFor: [
      'Nature Lovers & Botanists',
      'Adventure Trekkers with moderate fitness',
      'Photographers & Birdwatchers',
      'Pilgrims visiting Hemkund Sahib'
    ],
    packingNotes: [
      'Sturdy water-resistant trekking boots with strong Vibram grip',
      'High-grade waterproof raincoat/poncho and backpack rain cover',
      'Quick-dry trekking trousers and moisture-wicking synthetic tees',
      'Trekking poles (highly recommended for the steep descent from Hemkund)',
      'Waterproof pouch for mobile, camera, and original identity proofs'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Haridwar to Joshimath / Govindghat (290 km / 9-10 hrs)',
        description: 'Early morning drive from Haridwar alongside the Ganges and Alaknanda rivers. Pass through the sacred confluences of Devprayag, Rudraprayag, and Karnaprayag. Arrive at Joshimath or Govindghat by evening. Overnight stay at hotel.',
        stay: 'Hotel in Joshimath or Govindghat',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Govindghat to Pulna (drive) & Trek to Ghangaria (10 km / 5 hrs)',
        description: 'Short drive from Govindghat to Pulna village (4 km). From Pulna, begin your scenic trek along the Bhyundar Ganga river. Pass charming wooden bridges, waterfalls, and tea stalls to reach Ghangaria base camp (3,048m). Evening rest and briefing. Overnight stay at Ghangaria.',
        stay: 'Hotel / Guesthouse in Ghangaria',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Ghangaria to Valley of Flowers & Return (8 km round trip)',
        description: 'After an early breakfast, enter the Valley of Flowers National Park after entry formalities. Walk across fragrant meadows blooming with Geraniums, Blue Poppies, and Himalayan Lilies up to Joan Margaret Legge grave. Spend hours soaking in the breathtaking wilderness before returning to Ghangaria by 5:00 PM. Overnight stay at Ghangaria.',
        stay: 'Hotel / Guesthouse in Ghangaria',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Ghangaria to Hemkund Sahib (4,329m) & Return (12 km round trip)',
        description: 'Begin early morning for the steep, stone-paved climb to Gurudwara Hemkund Sahib and the pristine glacial lake. Spot the rare Brahma Kamal flower on the rocks. Partake in hot langar and sweet tea at the Gurudwara before starting the descent back to Ghangaria. Overnight stay at Ghangaria.',
        stay: 'Hotel / Guesthouse in Ghangaria',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 5,
        title: 'Ghangaria to Pulna (Trek) & Drive to Joshimath',
        description: 'Trek down 10 km from Ghangaria to Pulna. Meet our vehicle and drive back to Joshimath. Time permitting, visit Shankaracharya Math or take the Auli ropeway for evening sunset. Overnight stay at Joshimath.',
        stay: 'Hotel in Joshimath',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 6,
        title: 'Joshimath to Haridwar / Rishikesh (290 km / 9 hrs)',
        description: 'After breakfast, commence the return drive down the Alaknanda highway towards Rishikesh and Haridwar. Drop at Haridwar Railway Station or Dehradun Airport by 7:00 PM.',
        stay: 'Trip Ends',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Haridwar to Haridwar hill transport by dedicated vehicle',
      'Accommodation for 2 Nights in Joshimath and 3 Nights in Ghangaria',
      'Breakfast and dinner as per itinerary',
      'Valley of Flowers National Park forest entry permits and paperwork',
      'Experienced certified local mountain guide and first-aid support',
      'All toll, driver allowance, and vehicle parking fees'
    ],
    exclusions: [
      'Lunch and trail snacks',
      'Pony or porter charges for luggage',
      'Any emergency medical rescue or helicopter evacuation',
      'Personal gear and clothing',
      '5% GST'
    ],
    faqs: [
      {
        question: 'When is the best time to see the flowers in full bloom?',
        answer: 'Mid-July to late August is the peak blooming season when hundreds of varieties flower in succession. The park is open from June 1 to October 31 each year.'
      },
      {
        question: 'Is Valley of Flowers suitable for beginners?',
        answer: 'Yes, anyone with moderate cardiovascular fitness who can walk 5-7 hours daily with rest stops can comfortably complete the trek.'
      }
    ],
    isFeatured: true,
    pdfBrochure: null,
    pickupDrop: 'Ex-Haridwar / Rishikesh'
  },
  {
    id: 'uky-leisure-nainital-lake-district-3n-4d',
    slug: 'nainital-tour-package',
    seoTitle: 'Nainital Tour Package & Lake Tour | UK Yatra',
    seoDescription: 'Book 3N/4D Nainital tour package from Delhi or Kathgodam. Visit Naini Lake, Bhimtal, Naukuchiatal, Naina Devi Temple, Snow View Point, and enjoy luxury lakeside stays.',
    title: 'Nainital & Kumaon Lake Tour (3N/4D)',
    destination: 'Nainital, Bhimtal, Naukuchiatal & Sattal',
    duration: '3 Nights / 4 Days',
    days: 4,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Round the Year (Snow in Dec-Jan, pleasant in Mar-Jun)',
    category: 'Hills & Lakes',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviewsCount: 76,
    overview: 'Nainital is Uttarakhand’s crowning lake city, set in an eye-shaped valley surrounded by the green hills of Ayarpatta and Naina. UK Yatra’s 3N/4D Kumaon holiday covers peaceful boating on Naini Lake, sacred visits to the Naina Devi Shaktipeeth, panoramic vistas of Trishul and Nanda Devi peaks from Snow View, and an exploration of the serene sister lakes of Bhimtal, Naukuchiatal, and Sattal.',
    highlights: [
      'Traditional wooden row boating and yachting on emerald Naini Lake',
      'Darshan at Maa Naina Devi Temple and scenic walk on the heritage Mall Road',
      'Day excursion to the quiet waters of Bhimtal, Sattal, and Naukuchiatal',
      'Aerial ropeway ride to Snow View Point with unhindered Himalayan panoramas',
      'Optional day trip to Mukteshwar or Jim Corbett National Park'
    ],
    routeInfo: 'Delhi / Kathgodam – Nainital (310 km from Delhi / 35 km from Kathgodam) – Bhimtal / Sattal circuit – Kathgodam / Delhi',
    suitableFor: [
      'Families with Children & Seniors',
      'Couples & Honeymooners',
      'Weekend Leisure Travellers from Delhi NCR',
      'Nature & Lake Enthusiasts'
    ],
    packingNotes: [
      'Light jackets and shawls during spring and summer; heavy coats and thermals in winter',
      'Comfortable walking sneakers for Mall Road and Thandi Sadak',
      'Camera and power banks'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi / Kathgodam to Nainital & Mall Road Evening',
        description: 'Morning pickup from Kathgodam Railway Station or Delhi NCR. Ascend the pine-clad Kumaon hills to Nainital (2,084m). Check into your hotel. In the evening, enjoy a leisurely stroll along the Mall Road, visit the Naina Devi Temple, and experience sunset boating on Naini Lake. Overnight stay in Nainital.',
        stay: 'Hotel / Resort in Nainital',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Nainital Local Sightseeing & Snow View Cable Car',
        description: 'After breakfast, explore Nainital’s top scenic spots: Cave Garden, Lover’s Point, Lands End, and the high-altitude Nainital Zoo. Take the ropeway up to Snow View Point for bird’s-eye vistas of Nanda Devi. Evening at leisure for Tibetan Market shopping. Overnight stay in Nainital.',
        stay: 'Hotel / Resort in Nainital',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Excursion to Bhimtal, Naukuchiatal & Sattal',
        description: 'Day trip to the tranquil Kumaon Lake District. Visit Bhimtal with its picturesque central island aquarium cafe, Naukuchiatal (the nine-cornered lake offering paragliding and kayaking), and the interconnected pine lakes of Sattal. Return to Nainital for dinner and overnight stay.',
        stay: 'Hotel / Resort in Nainital',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Nainital to Kathgodam / Delhi Departure',
        description: 'After breakfast, check out from the hotel. Drive down through Bhowali fruit orchards. Drop at Kathgodam Railway Station or return drive to Delhi NCR with pleasant Himalayan memories.',
        stay: 'Tour Concludes',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Private AC vehicle for all transfers and sightseeing as per itinerary',
      '3 Nights hotel accommodation in Nainital',
      'Daily breakfast and dinner at the hotel',
      'All toll taxes, state road taxes, parking charges, and driver allowances'
    ],
    exclusions: [
      'Boating charges and ropeway tickets',
      'Lunches, snacks, and personal expenses',
      'Entry fees to zoo, museums, or adventure sports',
      '5% GST'
    ],
    faqs: [
      {
        question: 'Which is the nearest railway station to Nainital?',
        answer: 'Kathgodam Railway Station (KGM) is just 34 km away (approx. 1 hour drive) and well connected with direct trains from Delhi, Lucknow, and Kolkata.'
      },
      {
        question: 'Is Nainital a good destination for families with children?',
        answer: 'Yes, Nainital offers gentle walks, lake boating, cable car rides, and clean mountain air suitable for all age groups.'
      }
    ],
    isFeatured: true,
    pdfBrochure: null,
    pickupDrop: 'Ex-Delhi / Kathgodam'
  },
  {
    id: 'uky-leisure-rishikesh-adventure-camping-2n-3d',
    slug: 'rishikesh-tour-package',
    seoTitle: 'Rishikesh Tour Package & Adventure Weekend | UK Yatra',
    seoDescription: 'Book 2N/3D Rishikesh tour package with UK Yatra. White-water river rafting (16km), riverside luxury camping, cliff jumping, Triveni Ghat Ganga Aarti, and cafe visits.',
    title: 'Rishikesh Adventure & Ganga Retreat (2N/3D)',
    destination: 'Rishikesh, Shivpuri & Tapovan',
    duration: '2 Nights / 3 Days',
    days: 3,
    startingPrice: 'Pricing on Request',
    originalPrice: null,
    bestSeason: 'Sep - Jun (Rafting open Sep to Jun)',
    category: 'Adventure & Spiritual',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviewsCount: 140,
    overview: 'Known as the Yoga Capital of the World and the adventure hub of North India, Rishikesh uniquely pairs high-octane river rafting with soul-stirring Ganga Aartis. UK Yatra’s 2N/3D getaway includes 16 km white-water rafting from Shivpuri, riverside luxury camping, cliff jumping, visits to the Beatles Ashram and iconic suspension bridges, and priority seating for evening chants on the sacred banks of the Ganges.',
    highlights: [
      '16 km Grade III/IV river rafting on the Ganges with certified river guides',
      'Riverside luxury camping with swimming pool, bonfire, and live music',
      'Spiritual evening Maha Aarti at Triveni Ghat or Parmarth Niketan',
      'Explore Ram Jhula, Laxman Jhula, and famous organic Tapovan cafes',
      'Optional bungee jumping (83m India’s highest) and flying fox'
    ],
    routeInfo: 'Delhi / Dehradun – Rishikesh / Shivpuri (240 km from Delhi via Meerut Expressway / 20 km from Dehradun Airport)',
    suitableFor: [
      'Adventure Seekers & College Friends',
      'Corporate Team Outings',
      'Couples & Solo Explorers',
      'Yoga & Spiritual Retreatants'
    ],
    packingNotes: [
      'Quick-dry shorts, synthetic t-shirts, and water shoes for rafting',
      'Comfortable cotton wear and a warm hoodie for evening riverside breeze',
      'Waterproof phone case and sunscreen lotion'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Rishikesh / Shivpuri Camp Check-in',
        description: 'Arrive at Rishikesh or Jolly Grant Airport. Transfer to your scenic riverside luxury campsite in Shivpuri. Welcome drinks and check-in. Afternoon at leisure enjoying beach volleyball or the campsite pool. In the evening, gather around the bonfire with light music followed by a buffet dinner. Overnight stay in Swiss Camps.',
        stay: 'Luxury Riverside Camp in Shivpuri',
        meals: 'Lunch & Dinner'
      },
      {
        day: 2,
        title: 'White Water Rafting & Evening Ganga Aarti',
        description: 'Post breakfast, gear up for an exhilarating 16 km rafting expedition from Shivpuri down to NIM Beach. Conquer famous rapids like Return to Sender, Roller Coaster, Golf Course, and Club House, with body surfing and cliff jumping along the way. In the afternoon, explore Beatles Ashram and Tapovan cafes. By dusk, witness the spellbinding Ganga Aarti at Triveni Ghat. Overnight stay at hotel or camp.',
        stay: 'Hotel or Luxury Camp in Rishikesh',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Yoga Morning, Ram Jhula Walk & Departure',
        description: 'Start with a gentle morning yoga session by the riverbank. Visit Ram Jhula and Gita Bhawan. Time for shopping Himalayan spices, rudraksha, and local handicrafts. Afternoon transfer to Haridwar Railway Station or Dehradun Airport for your onward journey.',
        stay: 'Trip Ends',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      '2 Nights accommodation in Luxury AC Swiss Camps or 3-star boutique hotel',
      'All meals: 2 Breakfasts, 1 Lunch, 2 Dinners (Buffet)',
      '16 km River Rafting with complete safety gear (life jackets, helmets, pedals) and expert guide',
      'Evening bonfire and campsite recreation activities',
      'All transfers in private vehicle from Haridwar/Dehradun'
    ],
    exclusions: [
      'Bungee jumping, giant swing, or zipline charges',
      'Personal expenses, snacks, and extra beverages',
      '5% GST'
    ],
    faqs: [
      {
        question: 'Is rafting safe for non-swimmers?',
        answer: 'Yes. Life jackets and certified river rescue kayakers accompany all rafts, making it safe for non-swimmers on guided routes.'
      },
      {
        question: 'What is the rafting season in Rishikesh?',
        answer: 'Rafting operates from mid-September until late June. It remains closed during the monsoon months of July and August for river safety.'
      }
    ],
    isFeatured: true,
    pdfBrochure: null,
    pickupDrop: 'Ex-Delhi / Dehradun / Haridwar'
  }
];

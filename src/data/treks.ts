import { Trek } from '../types';

export const TREKS: Trek[] = [
  {
    id: 'kedarkantha-winter-trek',
    name: 'Kedarkantha Summit Trek',
    tagline: 'India’s Favorite Winter Snow Trek with 360° Alpine Panorama',
    difficulty: 'Easy',
    duration: '5 Days / 4 Nights',
    altitude: '3,810 m (12,500 ft)',
    bestSeason: 'December to April (Snow) & May to June',
    startingPrice: 'Pricing on Request',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    trailLength: '20 km (Total round trip)',
    baseCamp: 'Sankri Village (Uttarkashi)',
    highlights: [
      'Summit sunrise over 13 Himalayan peaks (Swargarohini, Bandarpoonch, Black Peak)',
      'Juda Ka Talab frozen high-altitude lake campsite',
      'Dense pine and oak forests with knee-deep winter snow',
      'Warm local Garhwali homestay hospitality in Sankri'
    ],
    overview: 'Kedarkantha is widely regarded as the best beginner-to-intermediate winter trek in India. Starting from the quaint hamlet of Sankri in Govind Wildlife Sanctuary, the trail climbs through enchanted pine woods, frozen tarns, and opens up to an exhilarating mountain summit ridge.',
    itinerary: [],
    inclusions: [
      'Sankri guest house & alpine camping on twin/triple sharing',
      'All nutritious vegetarian meals + evening hot snacks during trek',
      'Qualified & certified trek leaders, local guides, cook and camp staff',
      'Trekking gear: High altitude tents, -10°C sleeping bags, microspikes & gaiters',
      'Forest entry permits and Govind National Park fees'
    ],
    exclusions: ['Backpack offloading charges', 'Personal trekking apparel & shoes']
  },
  {
    id: 'tungnath-chandrashila',
    name: 'Tungnath & Chandrashila Peak Trek',
    tagline: 'World’s Highest Shiva Temple & 360° Himalayan Throne',
    difficulty: 'Easy',
    duration: '3 Days / 2 Nights',
    altitude: '4,000 m (13,123 ft)',
    bestSeason: 'Round the Year (April to Dec & Snow in Jan-Mar)',
    startingPrice: 'Pricing on Request',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    trailLength: '10 km (Chopta - Tungnath - Summit - Return)',
    baseCamp: 'Chopta / Sari Village (Rudraprayag)',
    highlights: [
      'Tungnath Temple (Highest of Panch Kedar, 3,680m)',
      'Chandrashila Summit panoramic views of Nanda Devi, Trishul, Chaukhamba, Kedardome',
      'Deoria Tal pristine reflection lake campsite',
      'Rhododendron forests blooming in red & pink in spring'
    ],
    overview: 'A short but immensely rewarding trek that packs the drama of high Himalayan summits into an accessible 3-day journey. Ideal for beginners, families, and photographers.',
    itinerary: [
      {
        day: 1,
        title: 'Haridwar to Chopta (via Devprayag & Rudraprayag)',
        desc: 'Morning scenic drive from Haridwar along river confluences (Devprayag & Rudraprayag) reaching the alpine meadows of Chopta. Check-in to Swiss Camps, evening acclimatization walk with views of Chaukhamba peaks.',
        stay: 'Deluxe Swiss Camps in Chopta',
        meals: 'Dinner Included'
      },
      {
        day: 2,
        title: 'Chopta to Tungnath Temple (3,680m) & Chandrashila Peak (4,000m)',
        desc: 'Early morning trek through rhododendron forests to the sacred Tungnath Temple, the highest Shiva temple in the world. Continue ascending to Chandrashila Peak for a majestic 360-degree panorama of Mt. Nanda Devi, Trishul, and Chaukhamba. Descend back to Chopta.',
        stay: 'Deluxe Swiss Camps in Chopta',
        meals: 'Breakfast & Dinner Included'
      },
      {
        day: 3,
        title: 'Chopta to Haridwar / Rishikesh Drop',
        desc: 'Morning breakfast amidst serene mountain meadows. Drive back towards Rishikesh and Haridwar with halts at local craft bazaars and temple ghats.',
        stay: 'Return Transfer / Onward Journey',
        meals: 'Breakfast Included'
      }
    ],
    inclusions: [
      'Accommodation in comfortable Swiss Camps on consolidated bed-sharing model',
      'Daily breakfast and hot dinner prepared by camp kitchen',
      'Certified local mountain trek leader & guide',
      'Private sanitized vehicle for transfers from Haridwar/Rishikesh'
    ],
    exclusions: ['Pony / horse charges', 'Personal porter services', 'Personal expenses & travel insurance']
  },
  {
    id: 'kuari-pass-trek',
    name: 'Kuari Pass (Lord Curzon Trail)',
    tagline: 'The Grand Viewpoint Trek of Mt. Nanda Devi & Kamet',
    difficulty: 'Moderate',
    duration: '6 Days / 5 Nights',
    altitude: '3,876 m (12,716 ft)',
    bestSeason: 'October to May (Great for winter snow)',
    startingPrice: 'Pricing on Request',
    image: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=1200&auto=format&fit=crop',
    trailLength: '33 km',
    baseCamp: 'Joshimath (Chamoli)',
    highlights: [
      'Closest unobstructed views of India’s 2nd highest peak Mt. Nanda Devi (7,816m)',
      'Magnificent ridge walks through Gorson Bugyal and Khullara meadows',
      'Stargazing in zero-light-pollution high altitude campsites',
      'Ancient oak and chestnut forests of Garhwal'
    ],
    overview: 'First traversed by Lord Curzon in 1905, the Kuari Pass trek is famed for offering the most spectacular front-seat view of India’s most revered mountain, Mt. Nanda Devi, alongside Dronagiri, Hathi-Ghodi Parvat, and Kamet.',
    itinerary: [],
    inclusions: ['All campsite stays and mountain meals', 'Technical equipment and permits', 'Expert trek leader and local guide', 'Transport from Rishikesh'],
    exclusions: ['Offloading of personal rucksack', 'Insurance']
  },
  {
    id: 'har-ki-dun-trek',
    name: 'Har Ki Dun - Valley of Gods Trek',
    tagline: 'Cradle-Shaped Ancient Valley steeped in Mahabharata Legends',
    difficulty: 'Moderate',
    duration: '7 Days / 6 Nights',
    altitude: '3,566 m (11,700 ft)',
    bestSeason: 'April to June & September to December',
    startingPrice: 'Pricing on Request',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    trailLength: '47 km',
    baseCamp: 'Sankri (Uttarkashi)',
    highlights: [
      'Views of the majestic Swargarohini peaks (Stairway to Heaven)',
      'Ancient wooden architecture villages like Osla and Gangad (3,000 yrs old)',
      'Supin River valley trails through alpine flowers and birch forests',
      'Rich Himalayan birdlife and mythology'
    ],
    overview: 'Har Ki Dun is a timeless valley tucked away inside Govind Ballabh Pant National Park. Legend says the Pandavas ascended to heaven via the Swargarohini peaks looming over this valley. The trek showcases ancient culture and untouched Himalayan beauty.',
    itinerary: [],
    inclusions: ['Homestays & High-altitude camping', 'Nutritious meals', 'Experienced guides & permits', 'Shared transport from Dehradun'],
    exclusions: ['Personal mule expenses', 'Personal gear']
  },
  {
    id: 'dayara-bugyal-trek',
    name: 'Dayara Bugyal Meadow Trek',
    tagline: 'Asia’s Most Expansive Alpine Meadow & Butter Festival Land',
    difficulty: 'Easy',
    duration: '4 Days / 3 Nights',
    altitude: '3,750 m (12,303 ft)',
    bestSeason: 'Round the Year (Snow in Dec-Feb, Green in May-Oct)',
    startingPrice: 'Pricing on Request',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    trailLength: '22 km',
    baseCamp: 'Raithal Village (Uttarkashi)',
    highlights: [
      'Sprawling 28 sq km of rolling alpine meadows (Bugyals)',
      'Front row view of Bandarpoonch (Monkey’s Tail) and Black Peak',
      'Charming traditional Garhwali homes in Raithal',
      'Gentle gradients perfect for first-time trekkers and children'
    ],
    overview: 'Dayara Bugyal is celebrated as one of the two most beautiful high-altitude meadows in India. Spanning over 28 square kilometers, in summer it transforms into a lush green carpet of wildflowers, while in winter it is buried under powdery snow.',
    itinerary: [],
    inclusions: ['Village homestay & tents', 'All meals', 'Guide & permits', 'Transport from Dehradun'],
    exclusions: ['Personal porter', 'Personal trekking gear']
  },
  {
    id: 'brahmatal-winter-trek',
    name: 'Brahmatal Frozen Lake Trek',
    tagline: 'Spectacular Ridge Trek Overlooking Mt. Trishul & Nanda Ghunti',
    difficulty: 'Moderate',
    duration: '5 Days / 4 Nights',
    altitude: '3,840 m (12,600 ft)',
    bestSeason: 'December to April',
    startingPrice: 'Pricing on Request',
    image: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=1200&auto=format&fit=crop',
    trailLength: '24 km',
    baseCamp: 'Lohajung (Chamoli)',
    highlights: [
      'Two glacial lakes: Bekaltal & Brahmatal (where Lord Brahma meditated)',
      'Unmatched panoramic summit ridge views of Mt. Trishul (7,120m)',
      'Dramatic rhododendron & oak forests draped in heavy winter snow',
      'High altitude pass crossing with 360-degree Himalayan skyline'
    ],
    overview: 'Unlike many winter treks that lead into valleys, Brahmatal climbs up to an exposed ridge, rewarding trekkers with face-to-face vistas of Mt. Trishul and Nanda Ghunti that feel close enough to touch.',
    itinerary: [],
    inclusions: ['Lohajung guest house & mountain camps', 'All meals during trek', 'Crampons, gaiters, safety gear', 'Guide & permits'],
    exclusions: ['Backpack offloading', 'Personal travel gear']
  }
];

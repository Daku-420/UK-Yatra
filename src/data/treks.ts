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
    startingPrice: '₹6,999',
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
    itinerary: [
      { day: 1, title: 'Dehradun to Sankri Base Camp (200 km drive)', desc: 'Scenic mountain drive via Mussoorie, Damta, Purola, and Mori along the roaring Tons River.' },
      { day: 2, title: 'Sankri (6,400 ft) to Juda Ka Talab (9,100 ft)', desc: 'Trek 4 km through pine woods to the legendary frozen lake campsite of Juda Ka Talab.' },
      { day: 3, title: 'Juda Ka Talab to Kedarkantha Base Camp (11,250 ft)', desc: 'Trek 4 km ascending above tree-line with wide open snow meadows and mountain vistas.' },
      { day: 4, title: 'Base Camp to Kedarkantha Summit (12,500 ft) & Descent to Hargaon', desc: 'Pre-dawn 3 AM summit climb for magical sunrise. Descend back to Hargaon camp.' },
      { day: 5, title: 'Hargaon to Sankri & Drive back to Dehradun', desc: 'Descend 6 km to Sankri and drive back to Dehradun railway station by 8 PM.' }
    ],
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
    startingPrice: '₹5,499',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    trailLength: '10 km (Chopta - Tungnath - Summit - Return)',
    baseCamp: 'Chopta / Sari Village (Rudraprayag)',
    highlights: [
      'Tungnath Temple (Highest of Panch Kedar, 3,680m)',
      'Chandrashila Summit panoramic views of Nanda Devi, Trishul, Chaukhamba, Kedardome',
      'Deoria Tal pristine reflection lake campsite',
      'Rhododendron forests blooming in red & pink in spring'
    ],
    overview: 'A short but immensely rewarding trek that packs the drama of high Himalayan summits into an accessible 3-day itinerary. Ideal for beginners, families, and photographers.',
    itinerary: [
      { day: 1, title: 'Rishikesh to Sari - Trek to Deoria Tal (2,438m)', desc: 'Drive from Rishikesh to Sari village (190 km) and hike 2.5 km to Deoria Tal camp.' },
      { day: 2, title: 'Deoria Tal to Chopta Base Camp', desc: 'Forest ridge trek through Rohini Bugyal with glimpses of Chaukhamba reflections.' },
      { day: 3, title: 'Chopta to Tungnath & Chandrashila Summit (4,000m) - Return to Rishikesh', desc: 'Dawn ascent to the ancient temple and summit cliff. Descend to Chopta and drive back.' }
    ],
    inclusions: ['Tent/Swiss cottage accommodation', 'All meals', 'Certified mountain guide', 'Permits & safety equipment'],
    exclusions: ['Personal expenses', 'Pony costs']
  },
  {
    id: 'kuari-pass-trek',
    name: 'Kuari Pass (Lord Curzon Trail)',
    tagline: 'The Grand Viewpoint Trek of Mt. Nanda Devi & Kamet',
    difficulty: 'Moderate',
    duration: '6 Days / 5 Nights',
    altitude: '3,876 m (12,716 ft)',
    bestSeason: 'October to May (Great for winter snow)',
    startingPrice: '₹8,999',
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
    itinerary: [
      { day: 1, title: 'Rishikesh to Joshimath drive (250 km)', desc: 'Follow the Alaknanda river valley up to Joshimath.' },
      { day: 2, title: 'Joshimath to Dhak village drive - Trek to Gulling (9,600 ft)', desc: 'Start trek from Dhak village through terraced farmland to Gulling forest camp.' },
      { day: 3, title: 'Gulling to Khullara campsite (11,100 ft)', desc: 'Ascend through dense oak woods to the open alpine clearing of Khullara.' },
      { day: 4, title: 'Khullara to Kuari Pass (12,716 ft) & back to Tali camp', desc: 'Summit day along the grand ridge with breathtaking mountain panoramas.' },
      { day: 5, title: 'Tali to Auli via Gorson Bugyal - Joshimath', desc: 'Walk across the rolling green/snow slopes of Gorson Bugyal to Auli.' },
      { day: 6, title: 'Joshimath to Rishikesh return drive', desc: 'Drive back to Rishikesh with a bagful of Himalayan memories.' }
    ],
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
    startingPrice: '₹9,999',
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
    itinerary: [
      { day: 1, title: 'Dehradun to Sankri (200 km drive)', desc: 'Drive to the scenic base camp of Sankri.' },
      { day: 2, title: 'Sankri to Taluka drive - Trek to Pauni Garaat (8,200 ft)', desc: 'Trek along Supin river through lush mountain meadows.' },
      { day: 3, title: 'Pauni Garaat to Kalkattiyadhar (9,800 ft)', desc: 'Trek past the heritage village of Osla with its intricate wooden temple.' },
      { day: 4, title: 'Kalkattiyadhar to Har Ki Dun Valley (11,700 ft) & return', desc: 'Explore the cradle valley under the shadow of Swargarohini and Jaundhar Glacier.' },
      { day: 5, title: 'Kalkattiyadhar to Pauni Garaat', desc: 'Descend along the river valley trails.' },
      { day: 6, title: 'Pauni Garaat to Taluka - Drive to Sankri', desc: 'Return to Sankri base camp for celebratory dinner.' },
      { day: 7, title: 'Sankri to Dehradun Departure', desc: 'Morning drive to Dehradun railway station.' }
    ],
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
    startingPrice: '₹6,499',
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
    itinerary: [
      { day: 1, title: 'Dehradun to Raithal Village (180 km)', desc: 'Drive past Bhagirathi valley and Uttarkashi to Raithal homestay.' },
      { day: 2, title: 'Raithal (7,400 ft) to Gui Campsite (9,500 ft)', desc: 'Gradual ascent through silver oak and rhododendron forest.' },
      { day: 3, title: 'Gui to Dayara Bugyal Summit (12,303 ft) to Gui / Raithal', desc: 'Step out onto the vast meadows with jaw-dropping vistas of Bandarpoonch.' },
      { day: 4, title: 'Raithal to Dehradun Departure', desc: 'Drive back to Dehradun with unforgettable memories.' }
    ],
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
    startingPrice: '₹7,499',
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
    itinerary: [
      { day: 1, title: 'Kathgodam/Rishikesh to Lohajung (220 km)', desc: 'Drive through Kumaon/Garhwal hills to Lohajung base camp.' },
      { day: 2, title: 'Lohajung to Bekaltal (9,690 ft)', desc: 'Trek 6 km through dense oak forest to the hidden lake of Bekaltal.' },
      { day: 3, title: 'Bekaltal to Brahmatal Campsite (10,450 ft)', desc: 'Climb above the tree-line into open snowfields with Trishul views.' },
      { day: 4, title: 'Brahmatal to Brahmatal Pass Summit (12,600 ft) & descent to Lohajung', desc: 'Summit push for sunrise on Mt. Trishul and descend to Lohajung.' },
      { day: 5, title: 'Lohajung to Kathgodam/Rishikesh Departure', desc: 'Drive back to the railway station for evening trains.' }
    ],
    inclusions: ['Lohajung guest house & mountain camps', 'All meals during trek', 'Crampons, gaiters, safety gear', 'Guide & permits'],
    exclusions: ['Backpack offloading', 'Personal travel gear']
  }
];

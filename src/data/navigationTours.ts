export interface TourNavItem {
  name: string;
  slug: string;
  path: string;
  duration?: string;
  badge?: string;
}

export interface TourCategoryGroup {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
  badge?: string;
  items: TourNavItem[];
}

export interface FeaturedTour {
  name: string;
  subtitle: string;
  slug: string;
  path: string;
  duration: string;
  badge?: string;
  image: string;
}

export const FEATURED_PACKAGES: FeaturedTour[] = [
  {
    name: 'Chopta Tungnath Chandrashila',
    subtitle: 'Highest Shiva Temple & Alpine Summit',
    slug: 'chopta-tungnath-chandrashila',
    path: '/tours/chopta-tungnath-chandrashila',
    duration: '3N/4D',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Valley of Flowers',
    subtitle: 'UNESCO World Heritage Alpine Bloom',
    slug: 'valley-of-flowers',
    path: '/tours/valley-of-flowers',
    duration: '4N/5D',
    badge: 'Top Pick',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Kedarnath Yatra',
    subtitle: 'Sacred Jyotirlinga Himalayan Darshan',
    slug: 'kedarnath-yatra',
    path: '/tours/kedarnath-yatra',
    duration: '3N/4D',
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Auli',
    subtitle: 'Ski Resort & Nanda Devi Panoramic Vistas',
    slug: 'auli-joshimath',
    path: '/tours/auli-joshimath',
    duration: '3N/4D',
    badge: 'Snow & Views',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Mussoorie',
    subtitle: 'Queen of Hills & Dhanaulti Pine Forests',
    slug: 'mussoorie-dhanaulti',
    path: '/tours/mussoorie-dhanaulti',
    duration: '3N/4D',
    badge: 'Weekend',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Nainital',
    subtitle: 'Emerald Lake & Kumaon Lake District',
    slug: 'nainital-bhimtal-sattal',
    path: '/tours/nainital-bhimtal-sattal',
    duration: '3N/4D',
    badge: 'Family Fav',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop'
  }
];

export const TOUR_CATEGORIES: TourCategoryGroup[] = [
  {
    id: 'popular-uttarakhand',
    name: 'Popular Uttarakhand',
    tagline: 'Iconic hill stations & serene river confluences',
    iconName: 'SunMedium',
    items: [
      { name: 'Rishikesh – Haridwar', slug: 'rishikesh-haridwar', path: '/tours/rishikesh-haridwar', duration: '3N/4D' },
      { name: 'Mussoorie – Dhanaulti', slug: 'mussoorie-dhanaulti', path: '/tours/mussoorie-dhanaulti', duration: '3N/4D' },
      { name: 'Rishikesh – Mussoorie', slug: 'rishikesh-mussoorie', path: '/tours/rishikesh-mussoorie', duration: '4N/5D' },
      { name: 'Nainital – Bhimtal – Sattal', slug: 'nainital-bhimtal-sattal', path: '/tours/nainital-bhimtal-sattal', duration: '3N/4D' },
      { name: 'Nainital – Mukteshwar', slug: 'nainital-mukteshwar', path: '/tours/nainital-mukteshwar', duration: '4N/5D' },
      { name: 'Mussoorie – Rishikesh – Haridwar', slug: 'mussoorie-rishikesh-haridwar', path: '/tours/mussoorie-rishikesh-haridwar', duration: '5N/6D' }
    ]
  },
  {
    id: 'trekking-adventure',
    name: 'Trekking & Adventure',
    tagline: 'Alpine meadows, glacier summits & ridge trails',
    iconName: 'Footprints',
    badge: 'Adventure',
    items: [
      { name: 'Chopta – Tungnath – Chandrashila', slug: 'chopta-tungnath-chandrashila', path: '/tours/chopta-tungnath-chandrashila', duration: '3N/4D' },
      { name: 'Chopta – Deoria Tal', slug: 'chopta-deoria-tal', path: '/tours/chopta-deoria-tal', duration: '3N/4D' },
      { name: 'Valley of Flowers', slug: 'valley-of-flowers', path: '/tours/valley-of-flowers', duration: '4N/5D' },
      { name: 'Kedarkantha Trek', slug: 'kedarkantha-trek', path: '/tours/kedarkantha-trek', duration: '4N/5D' },
      { name: 'Dayara Bugyal Trek', slug: 'dayara-bugyal-trek', path: '/tours/dayara-bugyal-trek', duration: '4N/5D' },
      { name: 'Nag Tibba Trek', slug: 'nag-tibba-trek', path: '/tours/nag-tibba-trek', duration: '2N/3D' },
      { name: 'Kuari Pass Trek', slug: 'kuari-pass-trek', path: '/tours/kuari-pass-trek', duration: '4N/5D' },
      { name: 'Har Ki Dun Trek', slug: 'har-ki-dun-trek', path: '/tours/har-ki-dun-trek', duration: '6N/7D' },
      { name: 'Dodital – Darwa Pass', slug: 'dodital-darwa-pass', path: '/tours/dodital-darwa-pass', duration: '4N/5D' }
    ]
  },
  {
    id: 'spiritual-char-dham',
    name: 'Spiritual & Char Dham',
    tagline: 'Sacred Himalayan Dhams & holy shrines',
    iconName: 'Sparkles',
    badge: 'Sacred',
    items: [
      { name: 'Kedarnath Yatra', slug: 'kedarnath-yatra', path: '/tours/kedarnath-yatra', duration: '3N/4D' },
      { name: 'Badrinath Yatra', slug: 'badrinath-yatra', path: '/tours/badrinath-yatra', duration: '3N/4D' },
      { name: 'Gangotri Yatra', slug: 'gangotri-yatra', path: '/tours/gangotri-yatra', duration: '3N/4D' },
      { name: 'Yamunotri Yatra', slug: 'yamunotri-yatra', path: '/tours/yamunotri-yatra', duration: '3N/4D' },
      { name: 'Kedarnath – Badrinath', slug: 'kedarnath-badrinath', path: '/tours/kedarnath-badrinath', duration: '5N/6D' },
      { name: 'Do Dham Yatra', slug: 'do-dham-yatra', path: '/tours/do-dham-yatra', duration: '5N/6D' },
      { name: 'Char Dham Yatra', slug: 'char-dham-yatra', path: '/tours/char-dham-yatra', duration: '10N/11D' },
      { name: 'Panch Kedar', slug: 'panch-kedar', path: '/tours/panch-kedar', duration: '12N/13D' }
    ]
  },
  {
    id: 'kumaon',
    name: 'Kumaon',
    tagline: 'Pristine Himalayan valleys, lakes & ancient temples',
    iconName: 'Compass',
    items: [
      { name: 'Nainital – Bhimtal – Sattal', slug: 'nainital-bhimtal-sattal', path: '/tours/nainital-bhimtal-sattal', duration: '3N/4D' },
      { name: 'Almora – Ranikhet – Kausani', slug: 'almora-ranikhet-kausani', path: '/tours/almora-ranikhet-kausani', duration: '5N/6D' },
      { name: 'Kausani – Baijnath – Binsar', slug: 'kausani-baijnath-binsar', path: '/tours/kausani-baijnath-binsar', duration: '4N/5D' },
      { name: 'Almora – Binsar – Jageshwar', slug: 'almora-binsar-jageshwar', path: '/tours/almora-binsar-jageshwar', duration: '4N/5D' },
      { name: 'Munsiyari', slug: 'munsiyari', path: '/tours/munsiyari', duration: '4N/5D' },
      { name: 'Pithoragarh – Munsiyari', slug: 'pithoragarh-munsiyari', path: '/tours/pithoragarh-munsiyari', duration: '5N/6D' },
      { name: 'Chaukori – Patal Bhuvaneshwar', slug: 'chaukori-patal-bhuvaneshwar', path: '/tours/chaukori-patal-bhuvaneshwar', duration: '4N/5D' }
    ]
  },
  {
    id: 'offbeat-uttarakhand',
    name: 'Offbeat Uttarakhand',
    tagline: 'Hidden pine hamlets, waterfalls & peaceful retreats',
    iconName: 'MapPin',
    badge: 'Tranquil',
    items: [
      { name: 'Chakrata – Tiger Falls', slug: 'chakrata-tiger-falls', path: '/tours/chakrata-tiger-falls', duration: '3N/4D' },
      { name: 'Kanatal – Dhanaulti – Tehri', slug: 'kanatal-dhanaulti-tehri', path: '/tours/kanatal-dhanaulti-tehri', duration: '3N/4D' },
      { name: 'Lansdowne – Kanatal', slug: 'lansdowne-kanatal', path: '/tours/lansdowne-kanatal', duration: '4N/5D' },
      { name: 'Khirsu – Pauri – Lansdowne', slug: 'khirsu-pauri-lansdowne', path: '/tours/khirsu-pauri-lansdowne', duration: '4N/5D' },
      { name: 'Peora – Mukteshwar – Ramgarh', slug: 'peora-mukteshwar-ramgarh', path: '/tours/peora-mukteshwar-ramgarh', duration: '4N/5D' },
      { name: 'Pangot – Kilbury', slug: 'pangot-kilbury', path: '/tours/pangot-kilbury', duration: '3N/4D' },
      { name: 'Jageshwar – Chaukori – Munsiyari', slug: 'jageshwar-chaukori-munsiyari', path: '/tours/jageshwar-chaukori-munsiyari', duration: '6N/7D' }
    ]
  },
  {
    id: 'wildlife-nature',
    name: 'Wildlife & Nature',
    tagline: 'Tiger reserves, birding sanctuaries & alpine bugyals',
    iconName: 'Trees',
    badge: 'Ecology',
    items: [
      { name: 'Jim Corbett National Park', slug: 'jim-corbett-national-park', path: '/tours/jim-corbett-national-park', duration: '3N/4D' },
      { name: 'Jim Corbett – Nainital', slug: 'jim-corbett-nainital', path: '/tours/jim-corbett-nainital', duration: '4N/5D' },
      { name: 'Corbett – Rishikesh', slug: 'corbett-rishikesh', path: '/tours/corbett-rishikesh', duration: '4N/5D' },
      { name: 'Rajaji National Park – Rishikesh', slug: 'rajaji-national-park-rishikesh', path: '/tours/rajaji-national-park-rishikesh', duration: '3N/4D' },
      { name: 'Nainital – Pangot – Kilbury', slug: 'nainital-pangot-kilbury', path: '/tours/nainital-pangot-kilbury', duration: '3N/4D' },
      { name: 'Binsar Wildlife Sanctuary', slug: 'binsar-wildlife-sanctuary', path: '/tours/binsar-wildlife-sanctuary', duration: '3N/4D' },
      { name: 'Auli – Joshimath – Gurso Bugyal', slug: 'auli-joshimath', path: '/tours/auli-joshimath', duration: '3N/4D' }
    ]
  }
];

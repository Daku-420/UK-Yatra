export type DestinationCategory = 
  | 'Hills & Valleys' 
  | 'Spiritual' 
  | 'Adventure' 
  | 'Wildlife' 
  | 'Weekend Escapes' 
  | 'Offbeat Uttarakhand';

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  category: DestinationCategory;
  image: string;
  gallery?: string[];
  description: string;
  highlights: string[];
  bestTime: string;
  altitude?: string;
  idealDuration: string;
  startingPrice?: string;
  isPopular?: boolean;
  isFeaturedHero?: boolean;
  topAttractions: { name: string; desc: string; icon?: string }[];
  howToReach: {
    byAir: string;
    byTrain: string;
    byRoad: string;
  };
}

export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  duration: string;
  days: number;
  startingPrice: string;
  originalPrice?: string | null;
  bestSeason: string;
  category: string;
  image: string;
  gallery?: string[];
  rating: number;
  reviewsCount: number;
  overview: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    stay: string;
    meals: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  isFeatured?: boolean;
  pdfBrochure?: string | null;
  pickupDrop?: string;
  // Enhanced package detail specifications
  startPoint?: string;
  endPoint?: string;
  difficulty?: 'Easy' | 'Moderate' | 'Challenging' | 'Difficult' | string;
  accommodationType?: string;
  transportationType?: string;
  mealPlan?: string;
  thingsToCarry?: string[];
  importantInfo?: string[];
  bestTimeToVisit?: string;
  routeSummary?: string[];
  faqs?: { question: string; answer: string }[];
  cancellationPolicy?: string[];
}

export interface Trek {
  id: string;
  name: string;
  tagline: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Difficult';
  duration: string;
  altitude: string;
  bestSeason: string;
  startingPrice: string;
  image: string;
  gallery?: string[];
  trailLength: string;
  baseCamp: string;
  highlights: string[];
  overview: string;
  itinerary: { day: number; title: string; desc: string; stay?: string; meals?: string; altitude?: string; distance?: string }[];
  inclusions: string[];
  exclusions: string[];
  // Extended fields for rich trek data architecture & comparison
  slug?: string;
  location?: string;
  region?: 'Garhwal' | 'Kumaon' | string;
  distance?: string;
  maxAltitude?: string;
  startingPoint?: string;
  endingPoint?: string;
  bestMonths?: string[];
  temperature?: {
    summer?: string;
    winter?: string;
    day?: string;
    night?: string;
  } | string;
  snowAvailability?: string;
  hasSnow?: boolean;
  beginnerSuitability?: string;
  isBeginnerFriendly?: boolean;
  fitnessRequirement?: string;
  permitInformation?: string;
  howToReach?: {
    nearestRailhead: string;
    nearestAirport: string;
    distanceFromDehradun: string;
    byRoad?: string;
  };
  distanceFromDehradunKm?: number;
  routeOverview?: string;
  packingList?: string[];
  safetyInfo?: string[];
  videos?: string[];
  faqs?: { question: string; answer: string }[];
  reviews?: { id: string; author: string; location: string; rating: number; date: string; comment: string }[];
  relatedTreks?: string[];
  relatedDestinations?: string[];
  relatedPackages?: string[];
  relatedArticles?: string[];
}

export type OutdoorCategory = 
  | 'Trekking' 
  | 'Water Adventures' 
  | 'Adventure Sports' 
  | 'Camping & Nature' 
  | 'Snow Adventures' 
  | 'Climbing & Rappelling' 
  | 'Wildlife & Nature';

export type ActivityDifficulty = 'Easy' | 'Moderate' | 'Difficult';
export type ActivityDuration = 'Half Day' | '1 Day' | '2–3 Days' | '4–6 Days' | '7+ Days';
export type ActivitySeason = 'Spring' | 'Summer' | 'Monsoon' | 'Autumn' | 'Winter';

export interface Activity {
  id: string;
  title: string;
  category: string;
  image: string;
  imagePosition?: string;
  shortDesc: string;
  fullDesc: string;
  topLocations: string[];
  bestSeason: string;
  difficulty?: string;
  ageLimit?: string;
  safetyInfo: string[];
  startingPrice?: string;
  // Extended fields for Outdoor Activities
  location?: string;
  destination?: string;
  duration?: ActivityDuration | string;
  durationDetails?: string;
  season?: ActivitySeason[] | string[];
  maxAltitude?: string;
  highlights?: string[];
  whatsIncluded?: string[];
  whatsExcluded?: string[];
  thingsToCarry?: string[];
  bestTimeToVisit?: string;
  gallery?: string[];
  faqs?: { question: string; answer: string }[];
  isFeatured?: boolean;
}

export interface OutdoorActivity extends Activity {
  category: OutdoorCategory | string;
  location: string;
  destination: string;
  difficulty: ActivityDifficulty | string;
  duration: ActivityDuration | string;
  durationDetails?: string;
  season: ActivitySeason[] | string[];
  highlights: string[];
  whatsIncluded: string[];
  whatsExcluded: string[];
  thingsToCarry: string[];
  bestTimeToVisit: string;
  gallery: string[];
  faqs: { question: string; answer: string }[];
}

export interface Review {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  tripTaken: string;
  reviewDate: string;
  comment: string;
  verified?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  content: string[];
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Char Dham' | 'Trekking' | 'Booking & Payments' | 'Weather & Packing';
}

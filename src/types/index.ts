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
  itinerary: { day: number; title: string; desc: string; stay?: string; meals?: string }[];
  inclusions: string[];
  exclusions: string[];
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

export type ArticleCategory =
  | 'Destinations'
  | 'Trekking'
  | 'Pilgrimage'
  | 'Travel Planning'
  | 'Adventure'
  | 'Honeymoon & Couples'
  | 'Offbeat Uttarakhand';

export interface ArticleSection {
  id: string;
  heading: string;
  level?: 'h2' | 'h3';
  content: string[];
  callout?: {
    type: 'verified' | 'tip' | 'warning' | 'route' | 'note';
    title: string;
    text: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
  highlights?: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  subcategory?: string;
  featuredImage: string;
  featuredImageAlt?: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio?: string;
  };
  publishedDate: string;
  updatedDate: string;
  readingTime: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  tags: string[];
  destination?: string;
  trek?: string;
  month?: string;
  relatedArticles?: string[];
  relatedPackages?: {
    id?: string;
    title: string;
    duration: string;
    price: string;
    link: string;
    image?: string;
  }[];
  seoTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  content: ArticleSection[];
  faqs?: { question: string; answer: string }[];
  quickStats?: { label: string; value: string; icon?: string }[];
  isFeatured?: boolean;
}


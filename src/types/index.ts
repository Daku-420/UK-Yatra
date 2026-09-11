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
  originalPrice?: string;
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
  itinerary: { day: number; title: string; desc: string }[];
  inclusions: string[];
  exclusions: string[];
}

export interface Activity {
  id: string;
  title: string;
  category: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  topLocations: string[];
  bestSeason: string;
  difficulty?: string;
  ageLimit?: string;
  safetyInfo: string[];
  startingPrice?: string;
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

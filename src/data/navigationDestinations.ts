import React from 'react';
import { Mountain, Sparkles, Trees, Compass, MapPin } from 'lucide-react';

export interface DestinationItem {
  name: string;
  slug: string;
  path: string;
}

export interface DestinationNavGroup {
  id: string;
  name: string;
  slug: string;
  path: string;
  exploreAllText: string;
  icon: React.ComponentType<{ className?: string }>;
  destinations: DestinationItem[];
}

export const DESTINATION_MEGA_NAV: DestinationNavGroup[] = [
  {
    id: 'hill-stations',
    name: 'Hill Stations',
    slug: 'hill-stations',
    path: '/destinations/hill-stations',
    exploreAllText: 'Explore All Hill Stations',
    icon: Mountain,
    destinations: [
      { name: 'Mussoorie', slug: 'mussoorie', path: '/destinations/mussoorie' },
      { name: 'Nainital', slug: 'nainital', path: '/destinations/nainital' },
      { name: 'Auli', slug: 'auli', path: '/destinations/auli' },
      { name: 'Ranikhet', slug: 'ranikhet', path: '/destinations/ranikhet' },
      { name: 'Chakrata', slug: 'chakrata', path: '/destinations/chakrata' },
      { name: 'Lansdowne', slug: 'lansdowne', path: '/destinations/lansdowne' },
      { name: 'Mukteshwar', slug: 'mukteshwar', path: '/destinations/mukteshwar' },
      { name: 'Dhanaulti', slug: 'dhanaulti', path: '/destinations/dhanaulti' },
      { name: 'Kausani', slug: 'kausani', path: '/destinations/kausani' },
      { name: 'Munsiyari', slug: 'munsiyari', path: '/destinations/munsiyari' },
      { name: 'Almora', slug: 'almora', path: '/destinations/almora' },
      { name: 'Chamba', slug: 'chamba', path: '/destinations/chamba' },
      { name: 'Kanatal', slug: 'kanatal', path: '/destinations/kanatal' },
      { name: 'Bhowali', slug: 'bhowali', path: '/destinations/bhowali' },
      { name: 'Bhimtal', slug: 'bhimtal', path: '/destinations/bhimtal' },
      { name: 'Dhanachuli', slug: 'dhanachuli', path: '/destinations/dhanachuli' },
      { name: 'Ramgarh', slug: 'ramgarh', path: '/destinations/ramgarh' },
      { name: 'Naukuchiatal', slug: 'naukuchiatal', path: '/destinations/naukuchiatal' },
      { name: 'Chaukori', slug: 'chaukori', path: '/destinations/chaukori' },
      { name: 'Pithoragarh', slug: 'pithoragarh', path: '/destinations/pithoragarh' },
      { name: 'Lohaghat', slug: 'lohaghat', path: '/destinations/lohaghat' },
      { name: 'Champawat', slug: 'champawat', path: '/destinations/champawat' },
      { name: 'Binsar', slug: 'binsar', path: '/destinations/binsar' },
      { name: 'Khirsu', slug: 'khirsu', path: '/destinations/khirsu' },
      { name: 'Pangot', slug: 'pangot', path: '/destinations/pangot' },
      { name: 'Peora', slug: 'peora', path: '/destinations/peora' },
      { name: 'Gwaldam', slug: 'gwaldam', path: '/destinations/gwaldam' },
      { name: 'Abbott Mount', slug: 'abbott-mount', path: '/destinations/abbott-mount' }
    ]
  },
  {
    id: 'spiritual-destinations',
    name: 'Spiritual Destinations',
    slug: 'spiritual-destinations',
    path: '/destinations/spiritual-destinations',
    exploreAllText: 'Explore All Spiritual Destinations',
    icon: Sparkles,
    destinations: [
      { name: 'Haridwar', slug: 'haridwar', path: '/destinations/haridwar' },
      { name: 'Rishikesh', slug: 'rishikesh', path: '/destinations/rishikesh' },
      { name: 'Yamunotri', slug: 'yamunotri', path: '/destinations/yamunotri' },
      { name: 'Gangotri', slug: 'gangotri', path: '/destinations/gangotri' },
      { name: 'Kedarnath', slug: 'kedarnath', path: '/destinations/kedarnath' },
      { name: 'Badrinath', slug: 'badrinath', path: '/destinations/badrinath' },
      { name: 'Hemkund Sahib', slug: 'hemkund-sahib', path: '/destinations/hemkund-sahib' },
      { name: 'Tungnath', slug: 'tungnath', path: '/destinations/tungnath' },
      { name: 'Jageshwar', slug: 'jageshwar', path: '/destinations/jageshwar' },
      { name: 'Baijnath', slug: 'baijnath', path: '/destinations/baijnath' },
      { name: 'Patal Bhuvaneshwar', slug: 'patal-bhuvaneshwar', path: '/destinations/patal-bhuvaneshwar' },
      { name: 'Dhari Devi', slug: 'dhari-devi', path: '/destinations/dhari-devi' },
      { name: 'Neelkanth Mahadev', slug: 'neelkanth-mahadev', path: '/destinations/neelkanth-mahadev' },
      { name: 'Devprayag', slug: 'devprayag', path: '/destinations/devprayag' },
      { name: 'Rudraprayag', slug: 'rudraprayag', path: '/destinations/rudraprayag' },
      { name: 'Karnaprayag', slug: 'karnaprayag', path: '/destinations/karnaprayag' },
      { name: 'Nandprayag', slug: 'nandprayag', path: '/destinations/nandprayag' },
      { name: 'Vishnuprayag', slug: 'vishnuprayag', path: '/destinations/vishnuprayag' },
      { name: 'Guptkashi', slug: 'guptkashi', path: '/destinations/guptkashi' },
      { name: 'Ukhimath', slug: 'ukhimath', path: '/destinations/ukhimath' },
      { name: 'Triyuginarayan', slug: 'triyuginarayan', path: '/destinations/triyuginarayan' },
      { name: 'Kalpeshwar', slug: 'kalpeshwar', path: '/destinations/kalpeshwar' },
      { name: 'Rudranath', slug: 'rudranath', path: '/destinations/rudranath' },
      { name: 'Madhyamaheshwar', slug: 'madhyamaheshwar', path: '/destinations/madhyamaheshwar' },
      { name: 'Adi Kailash', slug: 'adi-kailash', path: '/destinations/adi-kailash' },
      { name: 'Om Parvat', slug: 'om-parvat', path: '/destinations/om-parvat' },
      { name: 'Piran Kaliyar', slug: 'piran-kaliyar', path: '/destinations/piran-kaliyar' },
      { name: 'Nanakmatta', slug: 'nanakmatta', path: '/destinations/nanakmatta' },
      { name: 'Chitai Golu Devta', slug: 'chitai-golu-devta', path: '/destinations/chitai-golu-devta' },
      { name: 'Kasar Devi', slug: 'kasar-devi', path: '/destinations/kasar-devi' },
      { name: 'Katarmal Sun Temple', slug: 'katarmal-sun-temple', path: '/destinations/katarmal-sun-temple' }
    ]
  },
  {
    id: 'nature-escapes',
    name: 'Nature & Valleys',
    slug: 'nature-escapes',
    path: '/destinations/nature-escapes',
    exploreAllText: 'Explore All Nature & Valleys',
    icon: Trees,
    destinations: [
      { name: 'Valley of Flowers', slug: 'valley-of-flowers', path: '/destinations/valley-of-flowers' },
      { name: 'Chopta', slug: 'chopta', path: '/destinations/chopta' },
      { name: 'Dayara Bugyal', slug: 'dayara-bugyal', path: '/destinations/dayara-bugyal' },
      { name: 'Deoria Tal', slug: 'deoria-tal', path: '/destinations/deoria-tal' },
      { name: 'Har Ki Dun Valley', slug: 'har-ki-dun', path: '/destinations/har-ki-dun' },
      { name: 'Harsil Valley', slug: 'harsil-valley', path: '/destinations/harsil-valley' },
      { name: 'Binsar', slug: 'binsar', path: '/destinations/binsar' },
      { name: 'Khirsu', slug: 'khirsu', path: '/destinations/khirsu' },
      { name: 'Sari Village', slug: 'sari-village', path: '/destinations/sari-village' },
      { name: 'Mandal Valley', slug: 'mandal-valley', path: '/destinations/mandal-valley' },
      { name: 'Mandakini Valley', slug: 'mandakini-valley', path: '/destinations/mandakini-valley' },
      { name: 'Bhilangana Valley', slug: 'bhilangana-valley', path: '/destinations/bhilangana-valley' },
      { name: 'Darma Valley', slug: 'darma-valley', path: '/destinations/darma-valley' },
      { name: 'Johar Valley', slug: 'johar-valley', path: '/destinations/johar-valley' },
      { name: 'Niti Valley', slug: 'niti-valley', path: '/destinations/niti-valley' },
      { name: 'Nelong Valley', slug: 'nelong-valley', path: '/destinations/nelong-valley' },
      { name: 'Mana Valley', slug: 'mana-valley', path: '/destinations/mana-valley' },
      { name: 'Kalpeshwar Valley', slug: 'kalpeshwar-valley', path: '/destinations/kalpeshwar-valley' },
      { name: 'Gangotri Valley', slug: 'gangotri-valley', path: '/destinations/gangotri-valley' },
      { name: 'Yamunotri Valley', slug: 'yamunotri-valley', path: '/destinations/yamunotri-valley' },
      { name: 'Tons Valley', slug: 'tons-valley', path: '/destinations/tons-valley' },
      { name: 'Pindar Valley', slug: 'pindar-valley', path: '/destinations/pindar-valley' },
      { name: 'Ramganga Valley', slug: 'ramganga-valley', path: '/destinations/ramganga-valley' },
      { name: 'Dhanaulti', slug: 'dhanaulti', path: '/destinations/dhanaulti' },
      { name: 'Kanatal', slug: 'kanatal', path: '/destinations/kanatal' },
      { name: 'Chaiinsheel Valley', slug: 'chaiinsheel-valley', path: '/destinations/chaiinsheel-valley' },
      { name: 'Gwaldam', slug: 'gwaldam', path: '/destinations/gwaldam' },
      { name: 'Munsiyari', slug: 'munsiyari', path: '/destinations/munsiyari' },
      { name: 'Chaukori', slug: 'chaukori', path: '/destinations/chaukori' }
    ]
  },
  {
    id: 'wildlife-national-parks',
    name: 'Wildlife & National Parks',
    slug: 'wildlife-national-parks',
    path: '/destinations/wildlife-national-parks',
    exploreAllText: 'Explore All Wildlife Destinations',
    icon: Compass,
    destinations: [
      { name: 'Jim Corbett National Park', slug: 'jim-corbett', path: '/destinations/jim-corbett' },
      { name: 'Rajaji National Park', slug: 'rajaji-national-park', path: '/destinations/rajaji-national-park' },
      { name: 'Nanda Devi National Park', slug: 'nanda-devi-national-park', path: '/destinations/nanda-devi-national-park' },
      { name: 'Valley of Flowers National Park', slug: 'valley-of-flowers', path: '/destinations/valley-of-flowers' },
      { name: 'Gangotri National Park', slug: 'gangotri-national-park', path: '/destinations/gangotri-national-park' },
      { name: 'Binsar Wildlife Sanctuary', slug: 'binsar-wildlife-sanctuary', path: '/destinations/binsar-wildlife-sanctuary' }
    ]
  },
  {
    id: 'villages-hidden-gems',
    name: 'Villages & Hidden Gems',
    slug: 'villages-hidden-gems',
    path: '/destinations/villages-hidden-gems',
    exploreAllText: 'Explore All Hidden Gems',
    icon: MapPin,
    destinations: [
      { name: 'Mana Village', slug: 'mana-village', path: '/destinations/mana-village' },
      { name: 'Sari Village', slug: 'sari-village', path: '/destinations/sari-village' },
      { name: 'Sankri', slug: 'sankri', path: '/destinations/sankri' },
      { name: 'Khirsu', slug: 'khirsu', path: '/destinations/khirsu' },
      { name: 'Lata Village', slug: 'lata-village', path: '/destinations/lata-village' },
      { name: 'Osla Village', slug: 'osla-village', path: '/destinations/osla-village' },
      { name: 'Abbott Mount', slug: 'abbott-mount', path: '/destinations/abbott-mount' }
    ]
  }
];

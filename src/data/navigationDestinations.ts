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
      { name: 'Munsiyari', slug: 'munsiyari', path: '/destinations/munsiyari' }
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
      { name: 'Tungnath', slug: 'tungnath', path: '/destinations/tungnath' }
    ]
  },
  {
    id: 'nature-escapes',
    name: 'Nature Escapes',
    slug: 'nature-escapes',
    path: '/destinations/nature-escapes',
    exploreAllText: 'Explore All Nature Escapes',
    icon: Trees,
    destinations: [
      { name: 'Valley of Flowers', slug: 'valley-of-flowers', path: '/destinations/valley-of-flowers' },
      { name: 'Chopta', slug: 'chopta', path: '/destinations/chopta' },
      { name: 'Dayara Bugyal', slug: 'dayara-bugyal', path: '/destinations/dayara-bugyal' },
      { name: 'Deoria Tal', slug: 'deoria-tal', path: '/destinations/deoria-tal' },
      { name: 'Har Ki Dun Valley', slug: 'har-ki-dun', path: '/destinations/har-ki-dun' },
      { name: 'Binsar', slug: 'binsar', path: '/destinations/binsar' },
      { name: 'Harsil Valley', slug: 'harsil-valley', path: '/destinations/harsil-valley' }
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

import { SITE_CONFIG } from '../config/siteConfig';
import { TourPackage } from '../types';

export interface BreadcrumbItem {
  name: string;
  url?: string;
}

export interface FAQItemData {
  question: string;
  answer: string;
}

/**
 * Generates valid JSON-LD for TravelAgency (Organization)
 * Grounded in verified UK Yatra business information.
 */
export const getTravelAgencySchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${SITE_CONFIG.siteUrl}/#travelagency`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.siteUrl,
    logo: `${SITE_CONFIG.siteUrl}/logo.png`,
    image: `${SITE_CONFIG.siteUrl}/images/destinations/kedarnath/photo-1.jpg`,
    description: 'Uttarakhand-based travel agency and tour operator specializing in Kedarnath Yatra, Char Dham pilgrimage, Chopta Tungnath trekking, Auli holidays, and customized Himalayan journeys.',
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: '₹₹ - ₹₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Bank Transfer, UPI, Credit Card, Net Banking',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No. A-7, First Floor, Ganpati Plaza Complex, Birla Farm, Haripur Kalan',
      addressLocality: 'Dehradun',
      addressRegion: 'Uttarakhand',
      postalCode: '249205',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.0435,
      longitude: 78.1963
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '08:00',
        closes: '22:00'
      }
    ],
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Uttarakhand'
      },
      {
        '@type': 'City',
        name: 'Dehradun'
      },
      {
        '@type': 'City',
        name: 'Haridwar'
      },
      {
        '@type': 'City',
        name: 'Rishikesh'
      }
    ],
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.youtube,
      SITE_CONFIG.social.twitter
    ].filter(Boolean)
  };
};

/**
 * Generates WebSite Schema with SearchAction
 */
export const getWebSiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.siteUrl}/#website`,
    url: SITE_CONFIG.siteUrl,
    name: 'UK Yatra',
    publisher: {
      '@id': `${SITE_CONFIG.siteUrl}/#travelagency`
    },
    inLanguage: 'en-IN'
  };
};

/**
 * Generates BreadcrumbList Schema
 */
export const getBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url.startsWith('http') ? item.url : `${SITE_CONFIG.siteUrl}${item.url}` } : {})
    }))
  };
};

/**
 * Generates TouristTrip Schema for package pages
 */
export const getTouristTripSchema = (pkg: TourPackage, canonicalUrl: string) => {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${canonicalUrl}#trip`,
    name: pkg.title,
    description: pkg.overview,
    url: canonicalUrl,
    touristType: pkg.suitableFor || ['Pilgrims', 'Trekkers', 'Couples', 'Families'],
    provider: {
      '@type': 'TravelAgency',
      name: 'UK Yatra',
      url: SITE_CONFIG.siteUrl,
      telephone: SITE_CONFIG.phone
    },
    image: pkg.image ? (pkg.image.startsWith('http') ? pkg.image : `${SITE_CONFIG.siteUrl}${pkg.image}`) : undefined
  };

  if (pkg.itinerary && pkg.itinerary.length > 0) {
    schema.itinerary = {
      '@type': 'ItemList',
      numberOfItems: pkg.itinerary.length,
      itemListElement: pkg.itinerary.map((day) => ({
        '@type': 'ListItem',
        position: day.day,
        name: day.title,
        description: day.description
      }))
    };
  }

  if (pkg.startingPrice && !pkg.startingPrice.includes('Request')) {
    const rawPrice = pkg.startingPrice.replace(/[^0-9]/g, '');
    if (rawPrice) {
      schema.offers = {
        '@type': 'Offer',
        price: rawPrice,
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: canonicalUrl,
        validFrom: '2026-01-01'
      };
    }
  }

  return schema;
};

/**
 * Generates FAQPage Schema
 */
export const getFAQSchema = (faqs: FAQItemData[]) => {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

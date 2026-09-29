import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_CONFIG } from '../config/siteConfig';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string[];
  schema?: Record<string, any> | Record<string, any>[];
}

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop';
const BASE_URL = 'https://uk-yatra.vercel.app';

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  keywords = [],
  schema
}) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Title
    const formattedTitle = title 
      ? (title.includes('UK Yatra') || title.includes('UKYatra') ? title : `${title} | UK Yatra`)
      : 'UK Yatra | Uttarakhand Travel, Himalayan Treks & Pilgrimage Packages';
    document.title = formattedTitle;

    // Helper to set or create meta tag
    const setMeta = (attr: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Meta description
    const metaDesc = description || 
      'Plan your Uttarakhand journey with UK Yatra. Discover Himalayan treks, Char Dham pilgrimage packages, customized itineraries, Auli skiing, Rishikesh rafting, and scenic mountain retreats.';
    setMeta('name', 'description', metaDesc);

    // 3. Keywords
    if (keywords.length > 0) {
      setMeta('name', 'keywords', keywords.join(', '));
    }

    // 4. Canonical URL
    const canonicalUrl = `${BASE_URL}${canonicalPath || location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 5. Open Graph Meta Tags
    setMeta('property', 'og:site_name', 'UK Yatra');
    setMeta('property', 'og:locale', 'en_IN');
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:title', formattedTitle);
    setMeta('property', 'og:description', metaDesc);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', ogImage);

    // 6. Twitter / X Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:site', '@UKYatradotcom');
    setMeta('name', 'twitter:title', formattedTitle);
    setMeta('name', 'twitter:description', metaDesc);
    setMeta('name', 'twitter:image', ogImage);

    // 7. JSON-LD Structured Data
    const existingScript = document.getElementById('seo-dynamic-jsonld');
    if (existingScript) {
      existingScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'seo-dynamic-jsonld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const cleanScript = document.getElementById('seo-dynamic-jsonld');
      if (cleanScript) cleanScript.remove();
    };
  }, [title, description, canonicalPath, ogImage, ogType, keywords, schema, location.pathname]);

  return null;
};

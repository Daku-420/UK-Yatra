import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  jsonLd?: Record<string, unknown> | (Record<string, unknown> | null)[] | null;
  schema?: Record<string, unknown> | (Record<string, unknown> | null)[] | null;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath,
  canonicalUrl,
  ogImage = `${SITE_CONFIG.siteUrl}/images/destinations/kedarnath/photo-1.jpg`,
  ogType = 'website',
  jsonLd,
  schema
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to set or create meta tag
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Set Meta Description
    setMetaTag('name', 'description', description);

    // 3. Set Canonical Link
    const targetPath = canonicalPath || canonicalUrl || '';
    const resolvedCanonical = targetPath.startsWith('http')
      ? targetPath
      : `${SITE_CONFIG.siteUrl}${targetPath === '/' || !targetPath ? '' : (targetPath.startsWith('/') ? targetPath : `/${targetPath}`)}`;
      
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', resolvedCanonical);

    // 4. Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', resolvedCanonical);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', 'UK Yatra');
    setMetaTag('property', 'og:image', ogImage.startsWith('http') ? ogImage : `${SITE_CONFIG.siteUrl}${ogImage}`);

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage.startsWith('http') ? ogImage : `${SITE_CONFIG.siteUrl}${ogImage}`);

    // 6. JSON-LD Schemas injection
    const scriptId = 'uk-yatra-json-ld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const payload = jsonLd || schema;
    if (payload) {
      const schemas = Array.isArray(payload) ? payload.filter(Boolean) : [payload];
      if (schemas.length === 1) {
        scriptTag.text = JSON.stringify(schemas[0], null, 2);
      } else if (schemas.length > 1) {
        scriptTag.text = JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': schemas
        }, null, 2);
      } else {
        scriptTag.text = '';
      }
    } else {
      scriptTag.text = '';
    }

    return () => {
      // Clean up script on unmount if needed
    };
  }, [title, description, canonicalPath, canonicalUrl, ogImage, ogType, jsonLd, schema]);

  return null;
};

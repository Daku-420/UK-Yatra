import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  schema?: Record<string, any> | Record<string, any>[];
  keywords?: string[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author,
  schema,
  keywords,
}) => {
  useEffect(() => {
    // 1. Document Title
    const originalTitle = document.title;
    document.title = title;

    // Helper to create or update meta tag
    const setMetaTag = (attribute: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
      return element;
    };

    // Helper for link tags (canonical)
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
      return element;
    };

    // Standard SEO Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    if (keywords && keywords.length > 0) {
      setMetaTag('name', 'keywords', keywords.join(', '));
    }

    // Canonical URL
    const effectiveCanonical = canonicalUrl || (typeof window !== 'undefined' ? window.location.href.split('?')[0] : '');
    if (effectiveCanonical) {
      setLinkTag('canonical', effectiveCanonical);
    }

    // Open Graph
    setMetaTag('property', 'og:site_name', 'UK Yatra - Uttarakhand Travel & Pilgrimage');
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    if (effectiveCanonical) {
      setMetaTag('property', 'og:url', effectiveCanonical);
    }
    if (ogType === 'article') {
      if (publishedTime) setMetaTag('property', 'article:published_time', publishedTime);
      if (modifiedTime) setMetaTag('property', 'article:modified_time', modifiedTime);
      if (author) setMetaTag('property', 'article:author', author);
    }

    // Twitter / X Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // JSON-LD Structured Data
    let scriptElement: HTMLScriptElement | null = null;
    if (schema) {
      scriptElement = document.createElement('script');
      scriptElement.type = 'application/ld+json';
      scriptElement.setAttribute('data-dynamic-seo', 'true');
      scriptElement.textContent = JSON.stringify(schema);
      document.head.appendChild(scriptElement);
    }

    return () => {
      document.title = originalTitle;
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [title, description, canonicalUrl, ogImage, ogType, publishedTime, modifiedTime, author, schema, keywords]);

  return null;
};

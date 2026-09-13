import { DESTINATIONS } from '../data/destinations';
import { TOUR_PACKAGES } from '../data/packages';
import { TREKS } from '../data/treks';
import { ACTIVITIES } from '../data/activities';
import { SPIRITUAL_CIRCUITS } from '../data/spiritual';
import { FAQS } from '../data/faqs';
import { BLOG_POSTS } from '../data/blogs';
export type SearchCategory = 
  | 'package' 
  | 'destination' 
  | 'trek' 
  | 'activity' 
  | 'spiritual' 
  | 'faq' 
  | 'blog' 
  | 'admin';

export interface MatchOccurrence {
  sectionType: string; // e.g. "Itinerary (Day 3)", "Overview", "Inclusions", "FAQ Answer", "Top Attraction"
  snippet: string;
}

export interface DeepSearchResult {
  id: string;
  title: string;
  subtitle: string;
  category: SearchCategory;
  categoryLabel: string;
  categoryColor: string;
  url: string;
  price?: string;
  image?: string;
  matches: MatchOccurrence[]; // All places where the keyword is written!
  matchScore: number;
}

interface RawSearchDoc {
  id: string;
  title: string;
  subtitle: string;
  category: SearchCategory;
  url: string;
  price?: string;
  image?: string;
  fields: {
    section: string;
    text: string;
  }[];
}

export const CATEGORY_STYLES: Record<SearchCategory, { label: string; badge: string; icon: string }> = {
  package:     { label: 'Tour Package',     badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30', icon: '📦' },
  destination: { label: 'Destination',      badge: 'bg-sky-500/20 text-sky-300 border-sky-500/30',       icon: '📍' },
  trek:        { label: 'Trek & Trail',     badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', icon: '🥾' },
  activity:    { label: 'Outdoor Activity', badge: 'bg-pink-500/20 text-pink-300 border-pink-500/30',    icon: '🧗' },
  spiritual:   { label: 'Sacred Dham',      badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30', icon: '🕉️' },
  faq:         { label: 'FAQ & Advisory',   badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30', icon: '❓' },
  blog:        { label: 'Travel Guide',     badge: 'bg-teal-500/20 text-teal-300 border-teal-500/30',     icon: '📰' },
  admin:       { label: 'Staff Admin',      badge: 'bg-orange-500/20 text-orange-300 border-orange-500/30', icon: '🔐' },
};

// Build exhaustive site searchable corpus
const buildComprehensiveSearchIndex = (): RawSearchDoc[] => {
  const docs: RawSearchDoc[] = [];

  // 1. TOUR PACKAGES (Title, overview, itinerary days, inclusions, exclusions, highlights)
  TOUR_PACKAGES.forEach(pkg => {
    const fields: { section: string; text: string }[] = [
      { section: 'Package Title', text: pkg.title },
      { section: 'Destination', text: pkg.destination },
      { section: 'Overview', text: pkg.overview },
      { section: 'Category & Season', text: `${pkg.category} • Best season: ${pkg.bestSeason}` },
      ...pkg.highlights.map(h => ({ section: 'Key Highlight', text: h })),
      ...(pkg.itinerary || []).map(day => ({
        section: `Itinerary (Day ${day.day}: ${day.title})`,
        text: `${day.description} • Night Stay: ${day.stay} • Meals: ${day.meals}`
      })),
      ...(pkg.inclusions || []).map(inc => ({ section: 'Package Inclusion', text: inc })),
      ...(pkg.exclusions || []).map(exc => ({ section: 'Package Exclusion', text: exc }))
    ];

    docs.push({
      id: pkg.id,
      title: pkg.title,
      subtitle: `${pkg.destination} • ${pkg.duration}`,
      category: 'package',
      url: `/packages/${pkg.id}`,
      price: pkg.startingPrice,
      image: pkg.image,
      fields
    });
  });

  // 2. DESTINATIONS (Description, highlights, attractions, travel methods)
  DESTINATIONS.forEach(dest => {
    const fields: { section: string; text: string }[] = [
      { section: 'Destination Name', text: dest.name },
      { section: 'Tagline & Category', text: `${dest.tagline} • ${dest.category}` },
      { section: 'Overview Description', text: dest.description },
      { section: 'Best Time & Altitude', text: `Best time: ${dest.bestTime} • Altitude: ${dest.altitude || 'N/A'}` },
      ...(dest.highlights || []).map(h => ({ section: 'Destination Highlight', text: h })),
      ...(dest.topAttractions || []).map(att => ({
        section: `Top Attraction: ${att.name}`,
        text: att.desc
      })),
      { section: 'How to Reach (Air)', text: dest.howToReach.byAir },
      { section: 'How to Reach (Train)', text: dest.howToReach.byTrain },
      { section: 'How to Reach (Road)', text: dest.howToReach.byRoad }
    ];

    docs.push({
      id: dest.id,
      title: dest.name,
      subtitle: dest.tagline || dest.category,
      category: 'destination',
      url: `/destinations/${dest.id}`,
      price: dest.startingPrice,
      image: dest.image,
      fields
    });
  });

  // 3. TREKS (Overview, itinerary days, trail length, base camp, highlights)
  TREKS.forEach(trek => {
    const fields: { section: string; text: string }[] = [
      { section: 'Trek Name', text: trek.name },
      { section: 'Trail Overview', text: trek.overview },
      { section: 'Trail Stats', text: `Base camp: ${trek.baseCamp} • Trail length: ${trek.trailLength} • Max Altitude: ${trek.altitude} • Grade: ${trek.difficulty}` },
      ...(trek.highlights || []).map(h => ({ section: 'Trek Highlight', text: h })),
      ...(trek.itinerary || []).map(day => ({
        section: `Trek Trail (Day ${day.day}: ${day.title})`,
        text: day.desc
      })),
      ...(trek.inclusions || []).map(inc => ({ section: 'Trek Inclusion', text: inc }))
    ];

    docs.push({
      id: trek.id,
      title: trek.name,
      subtitle: `${trek.duration} • ${trek.difficulty} • ${trek.altitude}`,
      category: 'trek',
      url: `/trekking/${trek.id}`,
      price: trek.startingPrice,
      image: trek.image,
      fields
    });
  });

  // 4. OUTDOOR ACTIVITIES
  (ACTIVITIES || []).forEach((act: any) => {
    const fields: { section: string; text: string }[] = [
      { section: 'Activity Title', text: act.name || act.title },
      { section: 'Description', text: act.shortDesc || act.fullDesc || '' },
      { section: 'Top Locations', text: (act.topLocations || []).join(', ') },
      ...(act.safetyInfo || []).map((s: string) => ({ section: 'Safety & Gear Guide', text: s }))
    ];

    docs.push({
      id: act.id,
      title: act.name || act.title,
      subtitle: `${act.category || 'Adventure'} • ${(act.topLocations || []).slice(0, 2).join(', ')}`,
      category: 'activity',
      url: `/activities/${act.id}`,
      price: act.startingPrice || act.price,
      image: act.image,
      fields
    });
  });

  // 5. SPIRITUAL CIRCUITS
  (SPIRITUAL_CIRCUITS || []).forEach((sc: any) => {
    const fields: { section: string; text: string }[] = [
      { section: 'Circuit Title', text: sc.name || sc.title },
      { section: 'Tagline & Duration', text: `${sc.tagline || ''} • ${sc.duration || ''}` },
      { section: 'Spiritual Significance', text: sc.description || sc.overview || '' },
      ...(sc.temples || []).map((t: any) => ({ section: `Temple Shrine: ${t.name || t}`, text: t.desc || t.significance || '' }))
    ];

    docs.push({
      id: sc.id,
      title: sc.name || sc.title,
      subtitle: sc.tagline || sc.duration || 'Spiritual Circuit',
      category: 'spiritual',
      url: `/spiritual/${sc.id}`,
      price: sc.startingPrice,
      image: sc.image,
      fields
    });
  });

  // 6. FAQS (Frequently Asked Questions & Answers)
  FAQS.forEach((faq, index) => {
    const fields = [
      { section: `FAQ Question (${faq.category})`, text: faq.question },
      { section: `FAQ Answer (${faq.category})`, text: faq.answer }
    ];

    docs.push({
      id: `faq-${index}`,
      title: faq.question,
      subtitle: `Frequently Asked Question • ${faq.category}`,
      category: 'faq',
      url: '/faqs',
      fields
    });
  });

  // 7. TRAVEL BLOGS & ARTICLES
  BLOG_POSTS.forEach(blog => {
    const fields: { section: string; text: string }[] = [
      { section: 'Article Headline', text: blog.title },
      { section: 'Article Summary', text: blog.excerpt },
      ...(blog.content || []).map((para, pIdx) => ({
        section: `Guide Section #${pIdx + 1}`,
        text: para
      })),
      { section: 'Tags & Topics', text: (blog.tags || []).join(', ') }
    ];

    docs.push({
      id: blog.slug || blog.id,
      title: blog.title,
      subtitle: `${blog.category} • ${blog.readTime}`,
      category: 'blog',
      url: `/blog/${blog.slug}`,
      image: blog.image,
      fields
    });
  });

  // 8. ADMIN PORTAL
  docs.push({
    id: 'admin-management-portal',
    title: 'UKYatra Executive Admin Portal',
    subtitle: 'Staff Login • Bookings CRM • Package Catalog • Weather Advisory Control',
    category: 'admin',
    url: '/admin',
    fields: [
      { section: 'Portal Title', text: 'Admin Portal Staff Login Dashboard CRM Bookings Leads' },
      { section: 'Executive Tools', text: 'Manage customer bookings, helicopter tokens, package pricing, weather advisories, and system settings' }
    ]
  });

  return docs;
};

const SEARCH_DOCS = buildComprehensiveSearchIndex();

// Extract snippet with window of words around the matched query
const extractSnippet = (fullText: string, query: string): string => {
  const lowerText = fullText.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const matchIndex = lowerText.indexOf(lowerQuery);

  if (matchIndex === -1) {
    return fullText.length > 110 ? fullText.slice(0, 110) + '...' : fullText;
  }

  const snippetStart = Math.max(0, matchIndex - 35);
  const snippetEnd = Math.min(fullText.length, matchIndex + query.length + 65);

  let snippet = fullText.slice(snippetStart, snippetEnd).trim();
  if (snippetStart > 0) snippet = '...' + snippet;
  if (snippetEnd < fullText.length) snippet = snippet + '...';

  return snippet;
};

// Deep search across all fields of every document
export const performDeepSearch = (rawQuery: string): DeepSearchResult[] => {
  const query = rawQuery.trim().toLowerCase();
  if (!query || query.length < 2) return [];

  const results: DeepSearchResult[] = [];

  for (const doc of SEARCH_DOCS) {
    let score = 0;
    const matches: MatchOccurrence[] = [];
    const seenSections = new Set<string>();

    // Check title match (high weight)
    if (doc.title.toLowerCase().includes(query)) {
      score += 10;
    }

    // Check subtitle
    if (doc.subtitle.toLowerCase().includes(query)) {
      score += 4;
    }

    // Check every deep field (itinerary, inclusions, overviews, FAQs, tips)
    for (const field of doc.fields) {
      const fieldLower = field.text.toLowerCase();
      if (fieldLower.includes(query)) {
        score += 2;
        if (!seenSections.has(field.section) && matches.length < 4) {
          seenSections.add(field.section);
          matches.push({
            sectionType: field.section,
            snippet: extractSnippet(field.text, query)
          });
        }
      }
    }

    if (score > 0) {
      const meta = CATEGORY_STYLES[doc.category] || CATEGORY_STYLES.package;
      results.push({
        id: doc.id,
        title: doc.title,
        subtitle: doc.subtitle,
        category: doc.category,
        categoryLabel: meta.label,
        categoryColor: meta.badge,
        url: doc.url,
        price: doc.price,
        image: doc.image,
        matches,
        matchScore: score
      });
    }
  }

  // Sort by relevance score
  return results.sort((a, b) => b.matchScore - a.matchScore);
};

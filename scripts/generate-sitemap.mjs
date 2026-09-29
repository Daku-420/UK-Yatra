import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://uk-yatra.vercel.app';
const currentDate = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { path: '', changefreq: 'daily', priority: '1.0' },
  { path: '/articles', changefreq: 'daily', priority: '0.95' },
  { path: '/destinations', changefreq: 'daily', priority: '0.9' },
  { path: '/packages', changefreq: 'daily', priority: '0.9' },
  { path: '/spiritual', changefreq: 'weekly', priority: '0.85' },
  { path: '/trekking', changefreq: 'weekly', priority: '0.85' },
  { path: '/outdoor-activities', changefreq: 'weekly', priority: '0.85' },
  { path: '/customized-trip', changefreq: 'monthly', priority: '0.8' },
  { path: '/book-vehicle', changefreq: 'monthly', priority: '0.8' },
  { path: '/helicopter-packages', changefreq: 'weekly', priority: '0.8' },
  { path: '/educational-programmes', changefreq: 'weekly', priority: '0.8' },
  { path: '/school-trips', changefreq: 'weekly', priority: '0.8' },
  { path: '/college-trips', changefreq: 'weekly', priority: '0.8' },
  { path: '/summer-learning-programmes', changefreq: 'weekly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.7' },
  { path: '/why-us', changefreq: 'monthly', priority: '0.7' },
  { path: '/offers', changefreq: 'weekly', priority: '0.7' },
  { path: '/gallery', changefreq: 'monthly', priority: '0.6' },
  { path: '/reviews', changefreq: 'weekly', priority: '0.7' },
  { path: '/faqs', changefreq: 'monthly', priority: '0.6' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
  { path: '/cancellation-policy', changefreq: 'yearly', priority: '0.3' },
];

// 1. Articles slugs
let articleSlugs = [];
try {
  const articlesFile = fs.readFileSync('src/data/articles.ts', 'utf8');
  const matches = [...articlesFile.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  articleSlugs = [...new Set(matches)];
} catch (e) {
  console.warn('Could not read articles.ts:', e.message);
}

// 2. Destinations ids
let destinationIds = [];
try {
  const destFile = fs.readFileSync('src/data/destinations.ts', 'utf8');
  const matches = [...destFile.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  destinationIds = [...new Set(matches)];
} catch (e) {
  console.warn('Could not read destinations.ts:', e.message);
}

// 3. Blog slugs
let blogSlugs = [];
try {
  const blogFile = fs.readFileSync('src/data/blogs.ts', 'utf8');
  const matches = [...blogFile.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  blogSlugs = [...new Set(matches)];
} catch (e) {
  console.warn('Could not read blogs.ts:', e.message);
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Static routes
for (const route of staticRoutes) {
  xml += `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
}

// Articles
for (const slug of articleSlugs) {
  xml += `  <url>
    <loc>${BASE_URL}/articles/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;
}

// Destinations
for (const id of destinationIds) {
  xml += `  <url>
    <loc>${BASE_URL}/destinations/${id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
`;
}

// Blog
for (const slug of blogSlugs) {
  xml += `  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
`;
}

xml += `</urlset>\n`;

// Ensure public directory exists
if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
console.log(`Generated public/sitemap.xml with:`);
console.log(`- ${staticRoutes.length} static routes`);
console.log(`- ${articleSlugs.length} article pages`);
console.log(`- ${destinationIds.length} destination pages`);
console.log(`- ${blogSlugs.length} blog pages`);

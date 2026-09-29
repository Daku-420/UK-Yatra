import fs from 'fs';
import path from 'path';

// Let's create a script to generate public/sitemap.xml
const BASE_URL = 'https://uk-yatra.vercel.app';
const currentDate = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { path: '', changefreq: 'daily', priority: '1.0' },
  { path: '/uttarakhand-travel-guide', changefreq: 'weekly', priority: '0.95' },
  { path: '/treks', changefreq: 'daily', priority: '0.95' },
  { path: '/trek-comparison', changefreq: 'weekly', priority: '0.9' },
  { path: '/trek-calendar', changefreq: 'weekly', priority: '0.9' },
  { path: '/destinations', changefreq: 'daily', priority: '0.95' },
  { path: '/packages', changefreq: 'daily', priority: '0.9' },
  { path: '/itineraries', changefreq: 'weekly', priority: '0.85' },
  { path: '/things-to-do', changefreq: 'weekly', priority: '0.85' },
  { path: '/spiritual', changefreq: 'weekly', priority: '0.85' },
  { path: '/outdoor-activities', changefreq: 'weekly', priority: '0.85' },
  { path: '/educational-programmes', changefreq: 'weekly', priority: '0.8' },
  { path: '/school-trips', changefreq: 'weekly', priority: '0.8' },
  { path: '/college-trips', changefreq: 'weekly', priority: '0.8' },
  { path: '/summer-learning-programmes', changefreq: 'weekly', priority: '0.8' },
  { path: '/helicopter-packages', changefreq: 'weekly', priority: '0.8' },
  { path: '/customized-trip', changefreq: 'monthly', priority: '0.8' },
  { path: '/car-rental', changefreq: 'monthly', priority: '0.8' },
  { path: '/book-vehicle', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog', changefreq: 'daily', priority: '0.85' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.7' },
  { path: '/faqs', changefreq: 'monthly', priority: '0.7' },
  { path: '/reviews', changefreq: 'weekly', priority: '0.7' },
  { path: '/offers', changefreq: 'weekly', priority: '0.7' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.4' },
  { path: '/terms', changefreq: 'yearly', priority: '0.4' },
  { path: '/cancellation-policy', changefreq: 'yearly', priority: '0.4' },
];

// Read treks
const treksContent = fs.readFileSync('src/data/treks.ts', 'utf8');
const trekIdMatches = [...treksContent.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
const uniqueTreks = [...new Set(trekIdMatches)];

// Read destinations
const destContent = fs.readFileSync('src/data/destinations.ts', 'utf8');
const destIdMatches = [...destContent.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
const uniqueDests = [...new Set(destIdMatches)];

// Read blogs
const blogsContent = fs.readFileSync('src/data/blogs.ts', 'utf8');
const blogSlugMatches = [...blogsContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
const uniqueBlogs = [...new Set(blogSlugMatches)];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

// Add static routes
for (const route of staticRoutes) {
  xml += `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
}

// Add destinations
for (const destId of uniqueDests) {
  xml += `  <url>
    <loc>${BASE_URL}/destinations/${destId}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
`;
}

// Add treks
for (const trekId of uniqueTreks) {
  xml += `  <url>
    <loc>${BASE_URL}/treks/${trekId}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;
}

// Add blogs
for (const blogSlug of uniqueBlogs) {
  xml += `  <url>
    <loc>${BASE_URL}/blog/${blogSlug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
}

xml += `</urlset>\n`;

fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
console.log(`Generated public/sitemap.xml with:`);
console.log(`- ${staticRoutes.length} static routes`);
console.log(`- ${uniqueDests.length} destination pages`);
console.log(`- ${uniqueTreks.length} trek pages`);
console.log(`- ${uniqueBlogs.length} blog articles`);

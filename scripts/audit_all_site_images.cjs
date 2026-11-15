const fs = require('fs');
const path = require('path');

const srcFiles = [
  'src/data/destinations.ts',
  'src/data/destinationDetailData.ts',
  'src/data/initialTourPackages.ts',
  'src/data/packages.ts',
  'src/data/treks.ts',
  'src/data/activities.ts',
  'src/data/articles.ts',
  'src/data/blogs.ts',
  'src/data/reviews.ts',
  'src/data/educationalProgrammes.ts',
  'src/data/navigationDestinations.ts',
  'src/data/navigationTours.ts',
  'src/pages/HomePage.tsx',
  'src/pages/DestinationsPage.tsx',
  'src/pages/DestinationDetailPage.tsx',
  'src/pages/PackagesPage.tsx',
  'src/pages/PackageDetailPage.tsx',
  'src/pages/GalleryPage.tsx'
];

let totalFound = 0;
let missingImages = [];

const imageRegex = /['"](\/(?:images|assets)\/[^'"]+\.(?:jpg|jpeg|png|webp|svg|gif|avif))['"]/gi;

for (const file of srcFiles) {
  if (!fs.existsSync(file)) continue;
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    totalFound++;
    const imgPath = match[1];
    const diskPath = path.join('public', imgPath);
    if (!fs.existsSync(diskPath)) {
      missingImages.push({ file, imgPath, diskPath });
    }
  }
}

console.log('Total local image references scanned:', totalFound);
console.log('Missing images count:', missingImages.length);
if (missingImages.length > 0) {
  console.log('Missing images list:');
  missingImages.forEach(m => console.log(`  [${m.file}] ${m.imgPath}`));
}

const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('public/images/destinations');
const diskEntries = fs.readdirSync(baseDir, { withFileTypes: true });
const diskFolders = diskEntries.filter(e => e.isDirectory()).map(e => e.name);

// Map of folder name to its image files (web-accessible relative paths)
const folderImages = {};
for (const folder of diskFolders) {
  const folderPath = path.join(baseDir, folder);
  const files = fs.readdirSync(folderPath).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext);
  });
  folderImages[folder] = files.map(f => `/images/destinations/${folder}/${f}`);
}

console.log('Total folders with images:', Object.keys(folderImages).length);
fs.writeFileSync('scripts/folder_images.json', JSON.stringify(folderImages, null, 2));
console.log('Saved scripts/folder_images.json');

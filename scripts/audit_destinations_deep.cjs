const fs = require('fs');
const path = require('path');

// 1. Read destinations.ts
const destFile = fs.readFileSync('src/data/destinations.ts', 'utf8');

// Parse destinations objects loosely or extract fields
const destBlocks = destFile.split(/\n\s*\{\s*\n\s*id:\s*'/);
console.log('Found chunks starting with id:', destBlocks.length - 1);

const destinations = [];
for (let i = 1; i < destBlocks.length; i++) {
  const block = destBlocks[i];
  const idMatch = block.match(/^([^']+)'/);
  const nameMatch = block.match(/name:\s*'([^']+)'/);
  const categoryMatch = block.match(/category:\s*'([^']+)'/);
  const imageMatch = block.match(/image:\s*'([^']+)'/);
  
  // gallery match
  const galleryMatch = block.match(/gallery:\s*\[([\s\S]*?)\]/);
  let gallery = [];
  if (galleryMatch) {
    gallery = [...galleryMatch[1].matchAll(/'([^']+)'/g)].map(m => m[1]);
  }

  if (idMatch && nameMatch) {
    destinations.push({
      id: idMatch[1],
      name: nameMatch[1],
      category: categoryMatch ? categoryMatch[1] : '',
      image: imageMatch ? imageMatch[1] : '',
      gallery: gallery
    });
  }
}

console.log('Parsed total destinations:', destinations.length);

// 2. Check for duplicate IDs or Names in destinations.ts
const idMap = new Map();
const nameMap = new Map();
const dupDestinations = [];

destinations.forEach(d => {
  const normId = d.id.toLowerCase();
  const normName = d.name.toLowerCase().trim();

  if (idMap.has(normId)) {
    dupDestinations.push({ type: 'DUPLICATE_ID', id: d.id, first: idMap.get(normId), second: d });
  } else {
    idMap.set(normId, d);
  }

  if (nameMap.has(normName)) {
    dupDestinations.push({ type: 'DUPLICATE_NAME', name: d.name, first: nameMap.get(normName), second: d });
  } else {
    nameMap.set(normName, d);
  }
});

console.log('Duplicate destinations in destinations.ts:', dupDestinations);

// 3. Inspect public/images/destinations
const publicDestDir = path.resolve('public/images/destinations');
const diskEntries = fs.readdirSync(publicDestDir, { withFileTypes: true });

const diskFolders = diskEntries.filter(e => e.isDirectory()).map(e => e.name);
console.log('Total folders in public/images/destinations:', diskFolders.length);

// Check duplicate/alias folder names (e.g. mussoorie vs mussorie, lansdowne vs LANSDWONE)
const normalizedFolders = new Map();
const duplicateFolders = [];
diskFolders.forEach(folder => {
  const clean = folder.toLowerCase().replace(/[-_\s]+/g, '');
  if (normalizedFolders.has(clean)) {
    duplicateFolders.push({ folder, existing: normalizedFolders.get(clean) });
  } else {
    normalizedFolders.set(clean, folder);
  }
});
console.log('Duplicate/Conflicting folders on disk:', duplicateFolders);

// 4. Check image usage across destinations (are two different destinations pointing to the exact same image?)
const imageUsage = new Map();
const sharedImages = [];
destinations.forEach(d => {
  if (d.image) {
    if (imageUsage.has(d.image)) {
      sharedImages.push({ image: d.image, dest1: imageUsage.get(d.image), dest2: d.id });
    } else {
      imageUsage.set(d.image, d.id);
    }
  }
});
console.log('Shared / Repeated hero images across different destinations:', sharedImages.length);
if (sharedImages.length > 0) {
  console.log('Examples of shared hero images:', sharedImages.slice(0, 10));
}

// 5. Check which destinations have images that don't match their own folder
const folderMismatches = [];
destinations.forEach(d => {
  const img = d.image || '';
  const match = img.match(/\/images\/destinations\/([^\/]+)\//);
  if (match) {
    const usedFolder = match[1].toLowerCase().replace(/[-_\s]+/g, '');
    const expectedFolder = d.id.toLowerCase().replace(/[-_\s]+/g, '');
    // If the folder used doesn't match the destination id
    if (usedFolder !== expectedFolder && !usedFolder.includes(expectedFolder) && !expectedFolder.includes(usedFolder)) {
      folderMismatches.push({ destId: d.id, destName: d.name, image: d.image, usedFolder: match[1] });
    }
  }
});
console.log('Destinations using a folder that does not match their name/id:', folderMismatches.length);
if (folderMismatches.length > 0) {
  console.log('Mismatch details:', folderMismatches);
}

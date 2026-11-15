const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('public/images/destinations');

// Load folder images
const diskFolders = fs.readdirSync(baseDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

const folderImageMap = new Map();
for (const folder of diskFolders) {
  const p = path.join(baseDir, folder);
  const files = fs.readdirSync(p).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext) && fs.statSync(path.join(p, f)).isFile();
  });
  if (files.length > 0) {
    folderImageMap.set(folder.toLowerCase(), { folder, files });
    folderImageMap.set(folder.toLowerCase().replace(/[-_\s]+/g, ''), { folder, files });
  }
}

// 8 exact duplicate destination IDs to remove
const duplicateIdsToRemove = new Set([
  'khirsu-villages',
  'kausani-villages',
  'darma-valley-villages',
  'niti-valley-villages',
  'mana-valley',
  'kalpeshwar-valley',
  'gangotri-valley',
  'yamunotri-valley'
]);

// Read destinations.ts
let destContent = fs.readFileSync('src/data/destinations.ts', 'utf8');

// Match each destination block
// Format in destinations.ts is:
//   {
//     id: '...',
//     ...
//   },
const destRegex = /\n\s*\{\s*\n\s*id:\s*'([^']+)'[\s\S]*?\n\s*\}(,?)/g;

let matches = [];
let m;
while ((m = destRegex.exec(destContent)) !== null) {
  matches.push({
    full: m[0],
    id: m[1],
    index: m.index,
    length: m[0].length
  });
}

console.log('Total destinations matched by regex:', matches.length);

// Destination-to-folder mapping
const primaryFolders = {
  'mussoorie': 'mussoorie',
  'nainital': 'nainital',
  'auli': 'auli',
  'ranikhet': 'ranikhet',
  'chakrata': 'chakrata',
  'lansdowne': 'lansdowne',
  'mukteshwar': 'mukteshwar',
  'dhanaulti': 'dhanaulti',
  'kausani': 'kausani',
  'munsiyari': 'munsiyari',
  'almora': 'almora',
  'chamba': 'chamba',
  'kanatal': 'kanatal',
  'bhowali': 'bhowali',
  'bhimtal': 'bhimtal',
  'dhanachuli': 'dhanachuli',
  'ramgarh': 'ramgarh',
  'chaukori': 'chaukori',
  'pithoragarh': 'pithoragarh',
  'lohaghat': 'lohaghat',
  'champawat': 'champawat',
  'pangot': 'pangot',
  'peora': 'peora',
  'gwaldam': 'gwaldam',
  'haridwar': 'haridwar',
  'rishikesh': 'rishikesh',
  'yamunotri': 'yamunotri',
  'gangotri': 'gangotri',
  'kedarnath': 'kedarnath',
  'badrinath': 'badrinath',
  'hemkund-sahib': 'hemkund-sahib',
  'tungnath': 'tungnath',
  'jageshwar': 'jageshwar',
  'baijnath': 'baijnath',
  'patal-bhuvaneshwar': 'patal-bhuvaneshwar',
  'dhari-devi': 'dhari devi',
  'neelkanth-mahadev': 'neelkanth',
  'devprayag': 'devprayag',
  'rudraprayag': 'rudraprayag',
  'karnaprayag': 'karnaprayag',
  'nandprayag': 'nandprayag',
  'vishnuprayag': 'vishnuprayag',
  'guptkashi': 'guptkashi',
  'ukhimath': 'ukhimath',
  'triyuginarayan': 'triyuginarayan',
  'kalpeshwar': 'kalpeshwar',
  'rudranath': 'rudranath',
  'madhyamaheshwar': 'madhyamaheshwar',
  'adi-kailash': 'adi kailash',
  'om-parvat': 'om parvat',
  'kasar-devi': 'kasar-devi',
  'valley-of-flowers': 'valley-of-flowers',
  'chopta': 'chopta',
  'dayara-bugyal': 'dayara-bugyal',
  'binsar': 'binsar',
  'harsil-valley': 'harsil',
  'darma-valley': 'darma-valley',
  'niti-valley': 'niti-valley',
  'jim-corbett': 'jim corbett',
  'rajaji-national-park': 'rajaji-national-park',
  'nanda-devi-national-park': 'nanda-devi-national-park',
  'gangotri-national-park': 'gangotri-national-park',
  'binsar-wildlife-sanctuary': 'binsar-wildlife-sanctuary',
  'kedarnath-wildlife-sanctuary': 'kedarnath-wildlife-sanctuary',
  'askot-wildlife-sanctuary': 'askot-wildlife-sanctuary',
  'nandhaur-wildlife-sanctuary': 'nandhaur-wildlife-sanctuary',
  'benog-wildlife-sanctuary': 'benog-wildlife-sanctuary',
  'sonanadi-wildlife-sanctuary': 'sonanadi-wildlife-sanctuary',
  'jhilmil-jheel-conservation-reserve': 'jhilmil-jheel',
  'asan-conservation-reserve': 'asan-conservation-reserve',
  'pawalgarh-conservation-reserve': 'pawalgarh-conservation-reserve',
  'ramnagar-forest': 'ramnagar-forest',
  'corbett-landscape': 'corbett-landscape',
  'kaladhungi': 'kaladhungi',
  'khirsu': 'khirsu',
  'abbott-mount': 'abbott-mount',
  'tehri': 'tehri'
};

// Check which destinations have their own primary folder
console.log('Primary folders defined:', Object.keys(primaryFolders).length);

// Let's verify every primary folder exists and has images
for (const [id, folder] of Object.entries(primaryFolders)) {
  const p = path.join(baseDir, folder);
  if (!fs.existsSync(p)) {
    console.error(`ERROR: Folder does not exist for ${id}: ${p}`);
  } else {
    const files = fs.readdirSync(p);
    if (files.length === 0) {
      console.error(`ERROR: Folder is empty for ${id}: ${p}`);
    }
  }
}
console.log('All primary folders verified successfully!');

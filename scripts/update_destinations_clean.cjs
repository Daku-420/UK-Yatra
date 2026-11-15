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

console.log('Available folders indexed:', folderImageMap.size);

// Read destinations.ts
let destFile = fs.readFileSync('src/data/destinations.ts', 'utf8');

// List of exact duplicates to remove
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

// Helper to find folder for destination id or name
function getFolderForDest(id, name) {
  const normId = id.toLowerCase().replace(/[-_\s]+/g, '');
  const normName = name.toLowerCase().replace(/[-_\s]+/g, '');

  // Exact mappings
  const overrides = {
    'bhimtal': 'bhimtal',
    'chaukori': 'chaukori',
    'pithoragarh': 'pithoragarh',
    'lohaghat': 'lohaghat',
    'champawat': 'champawat',
    'pangot': 'pangot',
    'kasar-devi': 'kasar-devi',
    'darma-valley': 'darma-valley',
    'niti-valley': 'niti-valley',
    'valley-of-flowers': 'valley-of-flowers',
    'harsil-valley': 'harsil',
    'patal-bhuvaneshwar': 'patal-bhuvaneshwar',
    'rudranath': 'rudranath',
    'dayara-bugyal': 'dayara-bugyal',
    'hemkund-sahib': 'hemkund-sahib',
    'guptkashi': 'guptkashi',
    'triyuginarayan': 'triyuginarayan',
    'karnaprayag': 'karnaprayag',
    'abbott-mount': 'abbott-mount',
    'corbett-landscape': 'corbett-landscape',
    'jim-corbett': 'jim corbett',
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
    'gangotri-national-park': 'gangotri-national-park',
    'nanda-devi-national-park': 'nanda-devi-national-park',
    'rajaji-national-park': 'rajaji-national-park',
    'deoria-tal': 'chopta',
    'har-ki-dun': 'chakrata',
    'govind-pashu-vihar-national-park': 'chakrata',
    'mandal-valley': 'chopta',
    'mandakini-valley': 'guptkashi',
    'bhilangana-valley': 'tehri',
    'johar-valley': 'munsiyari',
    'nelong-valley': 'harsil',
    'tons-valley': 'chakrata',
    'pindar-valley': 'gwaldam',
    'ramganga-valley': 'ranikhet',
    'chaiinsheel-valley': 'chakrata',
    'mana-village': 'badrinath',
    'sari-village': 'chopta',
    'sankri': 'chakrata',
    'lata-village': 'badrinath',
    'osla-village': 'chakrata',
    'kalap': 'khirsu',
    'dharali': 'harsil',
    'mukhwa': 'gangotri',
    'jakhol': 'chakrata',
    'taluka': 'chakrata',
    'agoda': 'dayara-bugyal',
    'bagori': 'harsil',
    'barsu': 'dayara-bugyal',
    'gangnani': 'harsil',
    'kanakchauri': 'rudraprayag',
    'dhanpur': 'peora',
    'shaukiyathal': 'munsiyari',
    'shitlakhet': 'ranikhet',
    'satkhol': 'peora',
    'kanda': 'baijnath',
    'khati': 'munsiyari',
    'loharkhet': 'munsiyari',
    'chitai-golu-devta': 'almora',
    'katarmal-sun-temple': 'jageshwar'
  };

  if (overrides[id]) {
    const entry = folderImageMap.get(overrides[id].toLowerCase().replace(/[-_\s]+/g, ''));
    if (entry) return entry;
  }

  if (folderImageMap.has(normId)) return folderImageMap.get(normId);
  if (folderImageMap.has(normName)) return folderImageMap.get(normName);

  return null;
}

console.log('Validating destination mappings...');

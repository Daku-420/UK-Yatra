const fs = require('fs');
const path = require('path');

const base = path.resolve('public/images/destinations');

const aliases = [
  { from: 'New folder', to: 'pangot' },
  { from: 'valley of flowers', to: 'valley-of-flowers' },
  { from: 'CHAMPAWAT', to: 'champawat' },
  { from: 'Chaukori', to: 'chaukori' },
  { from: 'LOHAGHAT', to: 'lohaghat' },
  { from: 'PITHORAGARH', to: 'pithoragarh' },
  { from: 'Niti valley', to: 'niti-valley' },
  { from: 'darma valley', to: 'darma-valley' },
  { from: 'kasar devi', to: 'kasar-devi' },
  { from: 'patal bhunehswar', to: 'patal-bhuvaneshwar' },
  { from: 'guptakashi', to: 'guptkashi' },
  { from: 'rushranath', to: 'rudranath' },
  { from: 'dhtayabugyal', to: 'dayara-bugyal' },
  { from: 'hemkund saheb', to: 'hemkund-sahib' },
  { from: 'askot w santuary', to: 'askot-wildlife-sanctuary' },
  { from: 'nanduar wildlife santuary', to: 'nandhaur-wildlife-sanctuary' },
  { from: 'jheel wildlife', to: 'jhilmil-jheel' },
  { from: 'ramnagar national', to: 'ramnagar-forest' },
  { from: 'corbett zone', to: 'corbett-landscape' },
  { from: 'abbout mount', to: 'abbott-mount' },
  { from: 'benog wildlife', to: 'benog-wildlife-sanctuary' },
  { from: 'sonanadi wildlife', to: 'sonanadi-wildlife-sanctuary' },
  { from: 'gangotri national park', to: 'gangotri-national-park' },
  { from: 'nanda devi national park', to: 'nanda-devi-national-park' },
  { from: 'rajaji national park', to: 'rajaji-national-park' },
  { from: 'asan conservation', to: 'asan-conservation-reserve' },
  { from: 'pawal garh', to: 'pawalgarh-conservation-reserve' },
  { from: 'kedarnath windlife sancuary', to: 'kedarnath-wildlife-sanctuary' },
  { from: 'binsar national santuary', to: 'binsar-wildlife-sanctuary' },
  { from: 'tiryuginarayan', to: 'triyuginarayan' },
  { from: 'karnprayag', to: 'karnaprayag' },
  { from: 'harshil', to: 'harsil' }
];

console.log('Ensuring clean slug aliases...');
for (const a of aliases) {
  const fromPath = path.join(base, a.from);
  const toPath = path.join(base, a.to);

  // If source exists and target does not exist or target is different case on Windows
  if (fs.existsSync(fromPath)) {
    // On Windows, if from and to only differ in case, checking existsSync(toPath) might be true
    // but in Linux it is false.
    if (!fs.existsSync(toPath) || fromPath.toLowerCase() === toPath.toLowerCase()) {
      if (fromPath.toLowerCase() !== toPath.toLowerCase()) {
        if (!fs.existsSync(toPath)) {
          fs.mkdirSync(toPath, { recursive: true });
        }
        const files = fs.readdirSync(fromPath);
        for (const f of files) {
          const srcFile = path.join(fromPath, f);
          const dstFile = path.join(toPath, f);
          if (fs.statSync(srcFile).isFile() && !fs.existsSync(dstFile)) {
            fs.copyFileSync(srcFile, dstFile);
          }
        }
        console.log(`Copied ${files.length} files from "${a.from}" to "${a.to}"`);
      }
    }
  }
}
console.log('Done creating aliases.');

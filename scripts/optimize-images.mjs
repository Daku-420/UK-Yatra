import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Disable libvips file caching to prevent file locking on Windows
sharp.cache(false);

const TARGET_DIRS = ['public/images', 'public/assets'];
const MIN_SIZE_BYTES = 300 * 1024; // 300 KB threshold

let processed = 0;
let optimized = 0;
let originalBytes = 0;
let finalBytes = 0;
let failed = 0;

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) return;

  const stat = fs.statSync(filePath);
  if (stat.size <= MIN_SIZE_BYTES) return;

  processed++;
  originalBytes += stat.size;

  try {
    const inputBuffer = fs.readFileSync(filePath);

    let pipeline = sharp(inputBuffer).resize({
      width: 1920,
      height: 1280,
      fit: 'inside',
      withoutEnlargement: true,
    });

    if (ext === '.png') {
      pipeline = pipeline.png({ quality: 80, compressionLevel: 9, effort: 7 });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true });
    } else if (ext === '.webp') {
      pipeline = pipeline.webp({ quality: 82, effort: 5 });
    }

    const buf = await pipeline.toBuffer();

    if (buf.length < stat.size) {
      fs.writeFileSync(filePath, buf);
      optimized++;
      finalBytes += buf.length;
      const savedPct = ((1 - buf.length / stat.size) * 100).toFixed(0);
      console.log(`[OPTIMIZED] ${path.relative('public', filePath)}: ${(stat.size / 1024).toFixed(0)}KB -> ${(buf.length / 1024).toFixed(0)}KB (-${savedPct}%)`);
    } else {
      finalBytes += stat.size;
    }
  } catch (err) {
    console.error(`[ERROR] Failed to optimize ${filePath}:`, err.message);
    failed++;
    finalBytes += stat.size;
  }
}

async function walk(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else if (entry.isFile()) {
      await processFile(full);
    }
  }
}

console.log('Starting image optimization across public directories...');
for (const dir of TARGET_DIRS) {
  await walk(dir);
}

const mbSaved = ((originalBytes - finalBytes) / (1024 * 1024)).toFixed(2);
const origMB = (originalBytes / (1024 * 1024)).toFixed(2);
const finalMB = (finalBytes / (1024 * 1024)).toFixed(2);

console.log('\n=========================================');
console.log(`Image Optimization Summary:`);
console.log(`- Files evaluated > 300KB: ${processed}`);
console.log(`- Files compressed & optimized: ${optimized}`);
console.log(`- Errors: ${failed}`);
console.log(`- Original size: ${origMB} MB`);
console.log(`- New size: ${finalMB} MB`);
console.log(`- Total bandwidth saved: ${mbSaved} MB (${((1 - finalBytes / originalBytes) * 100).toFixed(1)}% reduction!)`);
console.log('=========================================\n');

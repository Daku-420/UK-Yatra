const fs = require('fs');
const path = require('path');

function getFiles(folderName) {
  const p = path.resolve('public/images/destinations', folderName);
  if (!fs.existsSync(p)) return [];
  return fs.readdirSync(p).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext);
  });
}

const destImageConfig = {
  // 1. Hill Stations
  'mussoorie': { image: '/images/destinations/mussoorie/photo-1.jpg', folder: 'mussoorie' },
  'nainital': { image: '/images/destinations/nainital/photo-1.jpg', folder: 'nainital' },
  'auli': { image: '/images/destinations/auli/Sunlit Snowy Mountain Ski Resort.jpg', folder: 'auli' },
  'ranikhet': { image: '/images/destinations/ranikhet/ranikhet-pine-meadows.jpg', folder: 'ranikhet' },
  'chakrata': { image: '/images/destinations/chakrata/Sunlit Mountain Resort Panorama.jpg', folder: 'chakrata' },
  'lansdowne': { image: '/images/destinations/lansdowne/photo-1.jpg', folder: 'lansdowne' },
  'mukteshwar': { image: '/images/destinations/mukteshwar/mukteshwar-shrine-gateway.jpg', folder: 'mukteshwar' },
  'dhanaulti': { image: '/images/destinations/dhanaulti/dhanaulti-nature-forest.jpg', folder: 'dhanaulti' },
  'kausani': { image: '/images/destinations/kausani/kausani-himalayan-peaks.jpg', folder: 'kausani' },
  'munsiyari': { image: '/images/destinations/munsiyari/munsiyari-panchachuli-peaks.jpg', folder: 'munsiyari' },
  'almora': { image: '/images/destinations/almora/almora-ridge-view.jpg', folder: 'almora' },
  'chamba': { image: '/images/destinations/chamba/chamba-himalayan-vista.jpg', folder: 'chamba' },
  'kanatal': { image: '/images/destinations/kanatal/Hillside Geodesic Dome Glamping Retreat.jpg', folder: 'kanatal' },
  'bhowali': { image: '/images/destinations/bhowali/Serene Mountain Lakeside Temple Town.jpg', folder: 'bhowali' },
  'bhimtal': { image: '/images/destinations/bhimtal/' + getFiles('bhimtal')[0], folder: 'bhimtal' },
  'dhanachuli': { image: '/images/destinations/dhanachuli/dhanachuli-heritage-haven.jpg', folder: 'dhanachuli' },
  'ramgarh': { image: '/images/destinations/ramgarh/ramgarh-fruit-orchards.jpg', folder: 'ramgarh' },
  'chaukori': { image: '/images/destinations/chaukori/' + getFiles('chaukori')[0], folder: 'chaukori' },
  'pithoragarh': { image: '/images/destinations/pithoragarh/1920px-Pithoragarh_skyline.jpg', folder: 'pithoragarh' },
  'lohaghat': { image: '/images/destinations/lohaghat/' + getFiles('lohaghat')[0], folder: 'lohaghat' },
  'champawat': { image: '/images/destinations/champawat/' + getFiles('champawat')[0], folder: 'champawat' },
  'pangot': { image: '/images/destinations/pangot/Misty Mountain Cottage in Lush Greenery.png', folder: 'pangot' },
  'peora': { image: '/images/destinations/peora/Misty Hillside Home with Red Roses.png', folder: 'peora' },
  'gwaldam': { image: '/images/destinations/gwaldam/Misty Mountain Forest Retreat.png', folder: 'gwaldam' },

  // 2. Spiritual Destinations
  'haridwar': { image: '/images/destinations/haridwar/haridwar-ganga-aarti-aerial.jpg', folder: 'haridwar' },
  'rishikesh': { image: '/images/destinations/rishikesh/1 (1).jpg', folder: 'rishikesh' },
  'yamunotri': { image: '/images/destinations/yamunotri/3 (1).jpg', folder: 'yamunotri' },
  'gangotri': { image: '/images/destinations/gangotri/Gangotri Temple in the Mountain Valley.png', folder: 'gangotri' },
  'kedarnath': { image: '/images/destinations/kedarnath/kedarnath-temple-front.jpg', folder: 'kedarnath' },
  'badrinath': { image: '/images/destinations/badrinath/photo-1.jpg', folder: 'badrinath' },
  'hemkund-sahib': { image: '/images/destinations/hemkund-sahib/Hemkund_Lake.jpg', folder: 'hemkund-sahib' },
  'tungnath': { image: '/images/destinations/tungnath/Golden Shrine Above the Clouds.png', folder: 'tungnath' },
  'jageshwar': { image: '/images/destinations/jageshwar/Ancient Forest Temple Complex.png', folder: 'jageshwar' },
  'baijnath': { image: '/images/destinations/baijnath/Ancient Stone Temple Courtyard.png', folder: 'baijnath' },
  'patal-bhuvaneshwar': { image: '/images/destinations/patal-bhuvaneshwar/1510244852_patal_bhuvaneshwar_banner3.jpg.webp', folder: 'patal-bhuvaneshwar' },
  'dhari-devi': { image: '/images/destinations/dhari devi/Floating Temple Pavilion Over Calm Green Water.png', folder: 'dhari devi' },
  'neelkanth-mahadev': { image: '/images/destinations/neelkanth/Colorful Hindu Temple Entrance Crowd.png', folder: 'neelkanth' },
  'devprayag': { image: '/images/destinations/devprayag/devprayag-the-sangam-of-alaknanda-and-bhagirathi-rivers.webp', folder: 'devprayag' },
  'rudraprayag': { image: '/images/destinations/rudraprayag/Hillside Town Along a Mountain River.png', folder: 'rudraprayag' },
  'karnaprayag': { image: '/images/destinations/karnaprayag/Hillside Town Above the River.png', folder: 'karnaprayag' },
  'nandprayag': { image: '/images/destinations/nandprayag/Gemini_Generated_Image_4i9f314i9f314i9f.png', folder: 'nandprayag' },
  'vishnuprayag': { image: '/images/destinations/vishnuprayag/Gemini_Generated_Image_4gp27h4gp27h4gp2.png', folder: 'vishnuprayag' },
  'guptkashi': { image: '/images/destinations/guptkashi/guptkashi-uttarakhand-wide-view-of-temple.webp', folder: 'guptkashi' },
  'ukhimath': { image: '/images/destinations/ukhimath/Ukhimath-The-Winter-Seat-of-Lord-Kedarnath-Ji.webp', folder: 'ukhimath' },
  'triyuginarayan': { image: '/images/destinations/triyuginarayan/Gemini_Generated_Image_7npc0j7npc0j7npc-clean.png', folder: 'triyuginarayan' },
  'kalpeshwar': { image: '/images/destinations/kalpeshwar/Gemini_Generated_Image_3mchwm3mchwm3mch-clean.png', folder: 'kalpeshwar' },
  'rudranath': { image: '/images/destinations/rudranath/1551335374_4.jpg.webp', folder: 'rudranath' },
  'madhyamaheshwar': { image: '/images/destinations/madhyamaheshwar/Gemini_Generated_Image_26xz7q26xz7q26xz.png', folder: 'madhyamaheshwar' },
  'adi-kailash': { image: '/images/destinations/adi kailash/adi-kailash-om-parvat-yatra-18.webp', folder: 'adi kailash' },
  'om-parvat': { image: '/images/destinations/om parvat/Gemini_Generated_Image_1l9q0t1l9q0t1l9q.png', folder: 'om parvat' },
  'chitai-golu-devta': { image: '/images/destinations/almora/2 (2).jpg', folder: 'almora' },
  'kasar-devi': { image: '/images/destinations/kasar-devi/' + getFiles('kasar-devi')[0], folder: 'kasar-devi' },
  'katarmal-sun-temple': { image: '/images/destinations/almora/2 (3).jpg', folder: 'almora' },

  // 3. Nature Escapes / Valleys
  'valley-of-flowers': { image: '/images/destinations/valley-of-flowers/ewHyy2mR5mIrlinwGKYZXgOIYewCP-hRlvwuLWKtvIoOa3AeNNeeRdOgfyto7GkymriYUIil_lxE4eLWw7gSgrZBCvELengLej_3TK3-4Uzve1BNrCvoiqHgc-zHV9pZzMJ1NgsoXN_rk24W8OTmETCEn3YLneilVuLJnWjH8yc.jpg', folder: 'valley-of-flowers' },
  'chopta': { image: '/images/destinations/chopta/photo-1.jpg', folder: 'chopta' },
  'dayara-bugyal': { image: '/images/destinations/dayara-bugyal/dayara_bugyal_3_1.webp', folder: 'dayara-bugyal' },
  'deoria-tal': { image: '/images/destinations/chopta/3 (4).jpg', folder: 'chopta' },
  'har-ki-dun': { image: '/images/destinations/chakrata/1 (2).jpg', folder: 'chakrata' },
  'binsar': { image: '/images/destinations/binsar/3_1920x1080.webp', folder: 'binsar' },
  'harsil-valley': { image: '/images/destinations/harsil/1543513902_1543513900031.jpg.webp', folder: 'harsil' },
  'mandal-valley': { image: '/images/destinations/chopta/3 (1).jpg', folder: 'chopta' },
  'mandakini-valley': { image: '/images/destinations/guptkashi/Chaukhamba_peak,_Garhwal_Himalayas,_Uttarakhand.jpg', folder: 'guptkashi' },
  'bhilangana-valley': { image: '/images/destinations/tehri/photo-2.jpg', folder: 'tehri' },
  'darma-valley': { image: '/images/destinations/darma-valley/' + getFiles('darma-valley')[0], folder: 'darma-valley' },
  'johar-valley': { image: '/images/destinations/munsiyari/photo-2.jpg', folder: 'munsiyari' },
  'niti-valley': { image: '/images/destinations/niti-valley/' + getFiles('niti-valley')[0], folder: 'niti-valley' },
  'nelong-valley': { image: '/images/destinations/harsil/images.jpg', folder: 'harsil' },
  'tons-valley': { image: '/images/destinations/chakrata/1 (1).jpg', folder: 'chakrata' },
  'pindar-valley': { image: '/images/destinations/gwaldam/Misty Hillside Village Panorama.png', folder: 'gwaldam' },
  'ramganga-valley': { image: '/images/destinations/ranikhet/1 (3).jpg', folder: 'ranikhet' },
  'chaiinsheel-valley': { image: '/images/destinations/chakrata/1 (3).jpg', folder: 'chakrata' },

  // 4. Wildlife & National Parks
  'jim-corbett': { image: '/images/destinations/jim corbett/1585732-2000x1382-desktop-hd-jim-corbett-national-park-background.webp', folder: 'jim corbett' },
  'rajaji-national-park': { image: '/images/destinations/rajaji-national-park/Gemini_Generated_Image_1ni9h31ni9h31ni9.png', folder: 'rajaji-national-park' },
  'nanda-devi-national-park': { image: '/images/destinations/nanda-devi-national-park/Gemini_Generated_Image_qhfi5zqhfi5zqhfi.png', folder: 'nanda-devi-national-park' },
  'gangotri-national-park': { image: '/images/destinations/gangotri-national-park/Gemini_Generated_Image_d4j72id4j72id4j7.png', folder: 'gangotri-national-park' },
  'binsar-wildlife-sanctuary': { image: '/images/destinations/binsar-wildlife-sanctuary/Gemini_Generated_Image_br2pxrbr2pxrbr2p.png', folder: 'binsar-wildlife-sanctuary' },
  'govind-pashu-vihar-national-park': { image: '/images/destinations/chakrata/1 (1).jpg', folder: 'chakrata' },
  'kedarnath-wildlife-sanctuary': { image: '/images/destinations/kedarnath-wildlife-sanctuary/kws.webp', folder: 'kedarnath-wildlife-sanctuary' },
  'askot-wildlife-sanctuary': { image: '/images/destinations/askot-wildlife-sanctuary/askot-sanctuary-askote-pithoragarh-tourist-attraction-anwlkeb.webp', folder: 'askot-wildlife-sanctuary' },
  'nandhaur-wildlife-sanctuary': { image: '/images/destinations/nandhaur-wildlife-sanctuary/af9c0d06351d3283066aefe1d971226b.webp', folder: 'nandhaur-wildlife-sanctuary' },
  'benog-wildlife-sanctuary': { image: '/images/destinations/benog-wildlife-sanctuary/IMG_1520.webp', folder: 'benog-wildlife-sanctuary' },
  'sonanadi-wildlife-sanctuary': { image: '/images/destinations/sonanadi-wildlife-sanctuary/sonanadi-wildlife-sanctuary.webp', folder: 'sonanadi-wildlife-sanctuary' },
  'jhilmil-jheel-conservation-reserve': { image: '/images/destinations/jhilmil-jheel/deer.webp', folder: 'jhilmil-jheel' },
  'asan-conservation-reserve': { image: '/images/destinations/asan-conservation-reserve/Ruddy Ducks Resting on a Lakeside Dock.png', folder: 'asan-conservation-reserve' },
  'pawalgarh-conservation-reserve': { image: '/images/destinations/pawalgarh-conservation-reserve/Pawalgarh Gate Forest Entrance.png', folder: 'pawalgarh-conservation-reserve' },
  'ramnagar-forest': { image: '/images/destinations/ramnagar-forest/Nagar Van Forest Gateway.png', folder: 'ramnagar-forest' },
  'corbett-landscape': { image: '/images/destinations/corbett-landscape/Off-Road Jeeps Crossing a Rustic River Bridge.png', folder: 'corbett-landscape' },
  'kaladhungi': { image: '/images/destinations/kaladhungi/Colonial Cottage Amid Lush Gardens.png', folder: 'kaladhungi' },

  // 5. Villages & Hidden Gems
  'mana-village': { image: '/images/destinations/badrinath/photo-2.jpg', folder: 'badrinath' },
  'sari-village': { image: '/images/destinations/chopta/3 (2).jpg', folder: 'chopta' },
  'sankri': { image: '/images/destinations/chakrata/1 (1).jpg', folder: 'chakrata' },
  'khirsu': { image: '/images/destinations/khirsu/Misty Mountain Village Panorama.png', folder: 'khirsu' },
  'lata-village': { image: '/images/destinations/badrinath/photo-4.jpg', folder: 'badrinath' },
  'osla-village': { image: '/images/destinations/chakrata/Sunlit Mountain Resort Panorama.jpg', folder: 'chakrata' },
  'abbott-mount': { image: '/images/destinations/abbott-mount/Glacier-Crowned Mountain Wilderness.png', folder: 'abbott-mount' },
  'kalap': { image: '/images/destinations/khirsu/Sunlit Mountain Village in Bloom.png', folder: 'khirsu' },
  'dharali': { image: '/images/destinations/harsil/1602328040_1602328036685.jpg.webp', folder: 'harsil' },
  'mukhwa': { image: '/images/destinations/gangotri/Himalayan Temple Valley Pilgrimage.png', folder: 'gangotri' },
  'jakhol': { image: '/images/destinations/chakrata/1 (3).jpg', folder: 'chakrata' },
  'taluka': { image: '/images/destinations/chakrata/1 (2).jpg', folder: 'chakrata' },
  'agoda': { image: '/images/destinations/dayara-bugyal/2db70ae7a153fdddaee9b127fba08338.webp', folder: 'dayara-bugyal' },
  'bagori': { image: '/images/destinations/harsil/Gemini_Generated_Image_p6p83wp6p83wp6p8.png', folder: 'harsil' },
  'barsu': { image: '/images/destinations/dayara-bugyal/01M5VYFBF5CCREABTFQNNHXJG9.webp', folder: 'dayara-bugyal' },
  'gangnani': { image: '/images/destinations/harsil/HARSIL_TRIP_GARHWAL_3-1024x686.webp', folder: 'harsil' },
  'kanakchauri': { image: '/images/destinations/rudraprayag/Mountain River Valley with Cliffside Pavilion.png', folder: 'rudraprayag' },
  'dhanpur': { image: '/images/destinations/peora/Terraced Hills Through Pine Canopy.png', folder: 'peora' },
  'shaukiyathal': { image: '/images/destinations/munsiyari/photo-3.jpg', folder: 'munsiyari' },
  'shitlakhet': { image: '/images/destinations/ranikhet/1 (2).jpg', folder: 'ranikhet' },
  'satkhol': { image: '/images/destinations/peora/Terraced Hillside Mediterranean Villa.png', folder: 'peora' },
  'kanda': { image: '/images/destinations/baijnath/Stone Temple Courtyard in Sunlight.png', folder: 'baijnath' },
  'khati': { image: '/images/destinations/munsiyari/Mountain Resort Cottages and Snowy Peaks.png', folder: 'munsiyari' },
  'loharkhet': { image: '/images/destinations/munsiyari/photo-4.jpg', folder: 'munsiyari' },

  // 6. Lakes & Adventure
  'tehri': { image: '/images/destinations/tehri/photo-1.jpg', folder: 'tehri' }
};

console.log('Total destinations configured:', Object.keys(destImageConfig).length);

let missing = 0;
for (const [id, cfg] of Object.entries(destImageConfig)) {
  const disk = path.join('public', cfg.image.replace(/^\//, ''));
  if (!fs.existsSync(disk)) {
    console.error(`MISSING: ${id} -> ${cfg.image}`);
    missing++;
  }
}
console.log('Total missing images:', missing);

const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('public/images/destinations');

function getFiles(folderName) {
  const p = path.resolve(baseDir, folderName);
  if (!fs.existsSync(p)) return [];
  return fs.readdirSync(p).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext);
  });
}

function getGallery(folderName, heroImage) {
  const files = getFiles(folderName);
  const fullPaths = files.map(f => `/images/destinations/${folderName}/${f}`);
  if (heroImage && fullPaths.includes(heroImage)) {
    return [heroImage, ...fullPaths.filter(p => p !== heroImage)];
  }
  return fullPaths;
}

// Config mapping for all 113 unique destinations
const destConfig = {
  // 1. Hill Stations
  'mussoorie': {
    hero: '/images/destinations/mussoorie/photo-1.jpg',
    gallery: getGallery('mussoorie', '/images/destinations/mussoorie/photo-1.jpg')
  },
  'nainital': {
    hero: '/images/destinations/nainital/photo-1.jpg',
    gallery: getGallery('nainital', '/images/destinations/nainital/photo-1.jpg')
  },
  'auli': {
    hero: '/images/destinations/auli/Sunlit Snowy Mountain Ski Resort.jpg',
    gallery: getGallery('auli', '/images/destinations/auli/Sunlit Snowy Mountain Ski Resort.jpg')
  },
  'ranikhet': {
    hero: '/images/destinations/ranikhet/ranikhet-pine-meadows.jpg',
    gallery: getGallery('ranikhet', '/images/destinations/ranikhet/ranikhet-pine-meadows.jpg')
  },
  'chakrata': {
    hero: '/images/destinations/chakrata/Sunlit Mountain Resort Panorama.jpg',
    gallery: getGallery('chakrata', '/images/destinations/chakrata/Sunlit Mountain Resort Panorama.jpg')
  },
  'lansdowne': {
    hero: '/images/destinations/lansdowne/photo-1.jpg',
    gallery: getGallery('lansdowne', '/images/destinations/lansdowne/photo-1.jpg')
  },
  'mukteshwar': {
    hero: '/images/destinations/mukteshwar/mukteshwar-shrine-gateway.jpg',
    gallery: getGallery('mukteshwar', '/images/destinations/mukteshwar/mukteshwar-shrine-gateway.jpg')
  },
  'dhanaulti': {
    hero: '/images/destinations/dhanaulti/dhanaulti-nature-forest.jpg',
    gallery: getGallery('dhanaulti', '/images/destinations/dhanaulti/dhanaulti-nature-forest.jpg')
  },
  'kausani': {
    hero: '/images/destinations/kausani/kausani-himalayan-peaks.jpg',
    gallery: getGallery('kausani', '/images/destinations/kausani/kausani-himalayan-peaks.jpg')
  },
  'munsiyari': {
    hero: '/images/destinations/munsiyari/munsiyari-panchachuli-peaks.jpg',
    gallery: getGallery('munsiyari', '/images/destinations/munsiyari/munsiyari-panchachuli-peaks.jpg')
  },
  'almora': {
    hero: '/images/destinations/almora/almora-ridge-view.jpg',
    gallery: getGallery('almora', '/images/destinations/almora/almora-ridge-view.jpg')
  },
  'chamba': {
    hero: '/images/destinations/chamba/chamba-himalayan-vista.jpg',
    gallery: getGallery('chamba', '/images/destinations/chamba/chamba-himalayan-vista.jpg')
  },
  'kanatal': {
    hero: '/images/destinations/kanatal/Hillside Geodesic Dome Glamping Retreat.jpg',
    gallery: getGallery('kanatal', '/images/destinations/kanatal/Hillside Geodesic Dome Glamping Retreat.jpg')
  },
  'bhowali': {
    hero: '/images/destinations/bhowali/Serene Mountain Lakeside Temple Town.jpg',
    gallery: getGallery('bhowali', '/images/destinations/bhowali/Serene Mountain Lakeside Temple Town.jpg')
  },
  'bhimtal': {
    hero: '/images/destinations/bhimtal/' + getFiles('bhimtal')[0],
    gallery: getGallery('bhimtal', '/images/destinations/bhimtal/' + getFiles('bhimtal')[0])
  },
  'dhanachuli': {
    hero: '/images/destinations/dhanachuli/dhanachuli-heritage-haven.jpg',
    gallery: getGallery('dhanachuli', '/images/destinations/dhanachuli/dhanachuli-heritage-haven.jpg')
  },
  'ramgarh': {
    hero: '/images/destinations/ramgarh/ramgarh-fruit-orchards.jpg',
    gallery: getGallery('ramgarh', '/images/destinations/ramgarh/ramgarh-fruit-orchards.jpg')
  },
  'chaukori': {
    hero: '/images/destinations/chaukori/' + getFiles('chaukori')[0],
    gallery: getGallery('chaukori', '/images/destinations/chaukori/' + getFiles('chaukori')[0])
  },
  'pithoragarh': {
    hero: '/images/destinations/pithoragarh/1920px-Pithoragarh_skyline.jpg',
    gallery: getGallery('pithoragarh', '/images/destinations/pithoragarh/1920px-Pithoragarh_skyline.jpg')
  },
  'lohaghat': {
    hero: '/images/destinations/lohaghat/' + getFiles('lohaghat')[0],
    gallery: getGallery('lohaghat', '/images/destinations/lohaghat/' + getFiles('lohaghat')[0])
  },
  'champawat': {
    hero: '/images/destinations/champawat/' + getFiles('champawat')[0],
    gallery: getGallery('champawat', '/images/destinations/champawat/' + getFiles('champawat')[0])
  },
  'pangot': {
    hero: '/images/destinations/pangot/Misty Mountain Cottage in Lush Greenery.png',
    gallery: getGallery('pangot', '/images/destinations/pangot/Misty Mountain Cottage in Lush Greenery.png')
  },
  'peora': {
    hero: '/images/destinations/peora/Misty Hillside Home with Red Roses.png',
    gallery: getGallery('peora', '/images/destinations/peora/Misty Hillside Home with Red Roses.png')
  },
  'gwaldam': {
    hero: '/images/destinations/gwaldam/Misty Mountain Forest Retreat.png',
    gallery: getGallery('gwaldam', '/images/destinations/gwaldam/Misty Mountain Forest Retreat.png')
  },

  // 2. Spiritual Destinations
  'haridwar': {
    hero: '/images/destinations/haridwar/haridwar-ganga-aarti-aerial.jpg',
    gallery: getGallery('haridwar', '/images/destinations/haridwar/haridwar-ganga-aarti-aerial.jpg')
  },
  'rishikesh': {
    hero: '/images/destinations/rishikesh/1 (1).jpg',
    gallery: getGallery('rishikesh', '/images/destinations/rishikesh/1 (1).jpg')
  },
  'yamunotri': {
    hero: '/images/destinations/yamunotri/3 (1).jpg',
    gallery: getGallery('yamunotri', '/images/destinations/yamunotri/3 (1).jpg')
  },
  'gangotri': {
    hero: '/images/destinations/gangotri/Gangotri Temple in the Mountain Valley.png',
    gallery: getGallery('gangotri', '/images/destinations/gangotri/Gangotri Temple in the Mountain Valley.png')
  },
  'kedarnath': {
    hero: '/images/destinations/kedarnath/kedarnath-temple-front.jpg',
    gallery: getGallery('kedarnath', '/images/destinations/kedarnath/kedarnath-temple-front.jpg')
  },
  'badrinath': {
    hero: '/images/destinations/badrinath/photo-1.jpg',
    gallery: getGallery('badrinath', '/images/destinations/badrinath/photo-1.jpg')
  },
  'hemkund-sahib': {
    hero: '/images/destinations/hemkund-sahib/Hemkund_Lake.jpg',
    gallery: getGallery('hemkund-sahib', '/images/destinations/hemkund-sahib/Hemkund_Lake.jpg')
  },
  'tungnath': {
    hero: '/images/destinations/tungnath/Golden Shrine Above the Clouds.png',
    gallery: getGallery('tungnath', '/images/destinations/tungnath/Golden Shrine Above the Clouds.png')
  },
  'jageshwar': {
    hero: '/images/destinations/jageshwar/Ancient Forest Temple Complex.png',
    gallery: getGallery('jageshwar', '/images/destinations/jageshwar/Ancient Forest Temple Complex.png')
  },
  'baijnath': {
    hero: '/images/destinations/baijnath/Ancient Stone Temple Courtyard.png',
    gallery: getGallery('baijnath', '/images/destinations/baijnath/Ancient Stone Temple Courtyard.png')
  },
  'patal-bhuvaneshwar': {
    hero: '/images/destinations/patal-bhuvaneshwar/1510244852_patal_bhuvaneshwar_banner3.jpg.webp',
    gallery: getGallery('patal-bhuvaneshwar', '/images/destinations/patal-bhuvaneshwar/1510244852_patal_bhuvaneshwar_banner3.jpg.webp')
  },
  'dhari-devi': {
    hero: '/images/destinations/dhari devi/Floating Temple Pavilion Over Calm Green Water.png',
    gallery: getGallery('dhari devi', '/images/destinations/dhari devi/Floating Temple Pavilion Over Calm Green Water.png')
  },
  'neelkanth-mahadev': {
    hero: '/images/destinations/neelkanth/Colorful Hindu Temple Entrance Crowd.png',
    gallery: getGallery('neelkanth', '/images/destinations/neelkanth/Colorful Hindu Temple Entrance Crowd.png')
  },
  'devprayag': {
    hero: '/images/destinations/devprayag/devprayag-the-sangam-of-alaknanda-and-bhagirathi-rivers.webp',
    gallery: getGallery('devprayag', '/images/destinations/devprayag/devprayag-the-sangam-of-alaknanda-and-bhagirathi-rivers.webp')
  },
  'rudraprayag': {
    hero: '/images/destinations/rudraprayag/Hillside Town Along a Mountain River.png',
    gallery: getGallery('rudraprayag', '/images/destinations/rudraprayag/Hillside Town Along a Mountain River.png')
  },
  'karnaprayag': {
    hero: '/images/destinations/karnaprayag/Hillside Town Above the River.png',
    gallery: getGallery('karnaprayag', '/images/destinations/karnaprayag/Hillside Town Above the River.png')
  },
  'nandprayag': {
    hero: '/images/destinations/nandprayag/Gemini_Generated_Image_4i9f314i9f314i9f.png',
    gallery: getGallery('nandprayag', '/images/destinations/nandprayag/Gemini_Generated_Image_4i9f314i9f314i9f.png')
  },
  'vishnuprayag': {
    hero: '/images/destinations/vishnuprayag/Gemini_Generated_Image_4gp27h4gp27h4gp2.png',
    gallery: getGallery('vishnuprayag', '/images/destinations/vishnuprayag/Gemini_Generated_Image_4gp27h4gp27h4gp2.png')
  },
  'guptkashi': {
    hero: '/images/destinations/guptkashi/guptkashi-uttarakhand-wide-view-of-temple.webp',
    gallery: getGallery('guptkashi', '/images/destinations/guptkashi/guptkashi-uttarakhand-wide-view-of-temple.webp')
  },
  'ukhimath': {
    hero: '/images/destinations/ukhimath/Ukhimath-The-Winter-Seat-of-Lord-Kedarnath-Ji.webp',
    gallery: getGallery('ukhimath', '/images/destinations/ukhimath/Ukhimath-The-Winter-Seat-of-Lord-Kedarnath-Ji.webp')
  },
  'triyuginarayan': {
    hero: '/images/destinations/triyuginarayan/Gemini_Generated_Image_7npc0j7npc0j7npc-clean.png',
    gallery: getGallery('triyuginarayan', '/images/destinations/triyuginarayan/Gemini_Generated_Image_7npc0j7npc0j7npc-clean.png')
  },
  'kalpeshwar': {
    hero: '/images/destinations/kalpeshwar/Gemini_Generated_Image_3mchwm3mchwm3mch-clean.png',
    gallery: getGallery('kalpeshwar', '/images/destinations/kalpeshwar/Gemini_Generated_Image_3mchwm3mchwm3mch-clean.png')
  },
  'rudranath': {
    hero: '/images/destinations/rudranath/1551335374_4.jpg.webp',
    gallery: getGallery('rudranath', '/images/destinations/rudranath/1551335374_4.jpg.webp')
  },
  'madhyamaheshwar': {
    hero: '/images/destinations/madhyamaheshwar/Gemini_Generated_Image_26xz7q26xz7q26xz.png',
    gallery: getGallery('madhyamaheshwar', '/images/destinations/madhyamaheshwar/Gemini_Generated_Image_26xz7q26xz7q26xz.png')
  },
  'adi-kailash': {
    hero: '/images/destinations/adi kailash/adi-kailash-om-parvat-yatra-18.webp',
    gallery: getGallery('adi kailash', '/images/destinations/adi kailash/adi-kailash-om-parvat-yatra-18.webp')
  },
  'om-parvat': {
    hero: '/images/destinations/om parvat/Gemini_Generated_Image_1l9q0t1l9q0t1l9q.png',
    gallery: getGallery('om parvat', '/images/destinations/om parvat/Gemini_Generated_Image_1l9q0t1l9q0t1l9q.png')
  },
  'chitai-golu-devta': {
    hero: '/images/destinations/almora/2 (2).jpg',
    gallery: ['/images/destinations/almora/2 (2).jpg', '/images/destinations/almora/2 (1).jpg', '/images/destinations/almora/2 (4).jpg']
  },
  'kasar-devi': {
    hero: '/images/destinations/kasar-devi/' + getFiles('kasar-devi')[0],
    gallery: getGallery('kasar-devi', '/images/destinations/kasar-devi/' + getFiles('kasar-devi')[0])
  },
  'katarmal-sun-temple': {
    hero: '/images/destinations/almora/2 (3).jpg',
    gallery: ['/images/destinations/almora/2 (3).jpg', '/images/destinations/almora/2 (1).jpg', '/images/destinations/almora/almora-ridge-view.jpg']
  },

  // 3. Nature Escapes / Valleys
  'valley-of-flowers': {
    hero: '/images/destinations/valley-of-flowers/ewHyy2mR5mIrlinwGKYZXgOIYewCP-hRlvwuLWKtvIoOa3AeNNeeRdOgfyto7GkymriYUIil_lxE4eLWw7gSgrZBCvELengLej_3TK3-4Uzve1BNrCvoiqHgc-zHV9pZzMJ1NgsoXN_rk24W8OTmETCEn3YLneilVuLJnWjH8yc.jpg',
    gallery: getGallery('valley-of-flowers', '/images/destinations/valley-of-flowers/ewHyy2mR5mIrlinwGKYZXgOIYewCP-hRlvwuLWKtvIoOa3AeNNeeRdOgfyto7GkymriYUIil_lxE4eLWw7gSgrZBCvELengLej_3TK3-4Uzve1BNrCvoiqHgc-zHV9pZzMJ1NgsoXN_rk24W8OTmETCEn3YLneilVuLJnWjH8yc.jpg')
  },
  'chopta': {
    hero: '/images/destinations/chopta/photo-1.jpg',
    gallery: getGallery('chopta', '/images/destinations/chopta/photo-1.jpg')
  },
  'dayara-bugyal': {
    hero: '/images/destinations/dayara-bugyal/dayara_bugyal_3_1.webp',
    gallery: getGallery('dayara-bugyal', '/images/destinations/dayara-bugyal/dayara_bugyal_3_1.webp')
  },
  'deoria-tal': {
    hero: '/images/destinations/chopta/3 (4).jpg',
    gallery: ['/images/destinations/chopta/3 (4).jpg', '/images/destinations/chopta/3 (1).jpg', '/images/destinations/chopta/3 (2).jpg']
  },
  'har-ki-dun': {
    hero: '/images/destinations/chakrata/1 (2).jpg',
    gallery: ['/images/destinations/chakrata/1 (2).jpg', '/images/destinations/chakrata/1 (1).jpg', '/images/destinations/chakrata/1 (3).jpg']
  },
  'binsar': {
    hero: '/images/destinations/binsar/3_1920x1080.webp',
    gallery: getGallery('binsar', '/images/destinations/binsar/3_1920x1080.webp')
  },
  'harsil-valley': {
    hero: '/images/destinations/harsil/1543513902_1543513900031.jpg.webp',
    gallery: getGallery('harsil', '/images/destinations/harsil/1543513902_1543513900031.jpg.webp')
  },
  'mandal-valley': {
    hero: '/images/destinations/chopta/3 (1).jpg',
    gallery: ['/images/destinations/chopta/3 (1).jpg', '/images/destinations/chopta/3 (3).jpg', '/images/destinations/chopta/photo-2.jpg']
  },
  'mandakini-valley': {
    hero: '/images/destinations/guptkashi/Chaukhamba_peak,_Garhwal_Himalayas,_Uttarakhand.jpg',
    gallery: ['/images/destinations/guptkashi/Chaukhamba_peak,_Garhwal_Himalayas,_Uttarakhand.jpg', '/images/destinations/guptkashi/guptkashi-uttarakhand-wide-view-of-temple.webp']
  },
  'bhilangana-valley': {
    hero: '/images/destinations/tehri/photo-2.jpg',
    gallery: ['/images/destinations/tehri/photo-2.jpg', '/images/destinations/tehri/photo-3.jpg', '/images/destinations/tehri/photo-4.jpg']
  },
  'darma-valley': {
    hero: '/images/destinations/darma-valley/' + getFiles('darma-valley')[0],
    gallery: getGallery('darma-valley', '/images/destinations/darma-valley/' + getFiles('darma-valley')[0])
  },
  'johar-valley': {
    hero: '/images/destinations/munsiyari/photo-2.jpg',
    gallery: ['/images/destinations/munsiyari/photo-2.jpg', '/images/destinations/munsiyari/photo-1.jpg', '/images/destinations/munsiyari/2 (1).jpg']
  },
  'niti-valley': {
    hero: '/images/destinations/niti-valley/' + getFiles('niti-valley')[0],
    gallery: getGallery('niti-valley', '/images/destinations/niti-valley/' + getFiles('niti-valley')[0])
  },
  'nelong-valley': {
    hero: '/images/destinations/harsil/images.jpg',
    gallery: ['/images/destinations/harsil/images.jpg', '/images/destinations/harsil/1543513902_1543513900031.jpg.webp', '/images/destinations/harsil/1602328040_1602328036685.jpg.webp']
  },
  'tons-valley': {
    hero: '/images/destinations/chakrata/1 (1).jpg',
    gallery: ['/images/destinations/chakrata/1 (1).jpg', '/images/destinations/chakrata/1 (2).jpg', '/images/destinations/chakrata/Sunlit Mountain Resort Panorama.jpg']
  },
  'pindar-valley': {
    hero: '/images/destinations/gwaldam/Misty Hillside Village Panorama.png',
    gallery: ['/images/destinations/gwaldam/Misty Hillside Village Panorama.png', '/images/destinations/gwaldam/Misty Mountain Forest Retreat.png']
  },
  'ramganga-valley': {
    hero: '/images/destinations/ranikhet/1 (3).jpg',
    gallery: ['/images/destinations/ranikhet/1 (3).jpg', '/images/destinations/ranikhet/1 (1).jpg', '/images/destinations/ranikhet/1 (4).jpg']
  },
  'chaiinsheel-valley': {
    hero: '/images/destinations/chakrata/1 (3).jpg',
    gallery: ['/images/destinations/chakrata/1 (3).jpg', '/images/destinations/chakrata/1 (1).jpg', '/images/destinations/chakrata/1 (2).jpg']
  },

  // 4. Wildlife & National Parks
  'jim-corbett': {
    hero: '/images/destinations/jim corbett/1585732-2000x1382-desktop-hd-jim-corbett-national-park-background.webp',
    gallery: getGallery('jim corbett', '/images/destinations/jim corbett/1585732-2000x1382-desktop-hd-jim-corbett-national-park-background.webp')
  },
  'rajaji-national-park': {
    hero: '/images/destinations/rajaji-national-park/Gemini_Generated_Image_1ni9h31ni9h31ni9.png',
    gallery: getGallery('rajaji-national-park', '/images/destinations/rajaji-national-park/Gemini_Generated_Image_1ni9h31ni9h31ni9.png')
  },
  'nanda-devi-national-park': {
    hero: '/images/destinations/nanda-devi-national-park/Gemini_Generated_Image_qhfi5zqhfi5zqhfi.png',
    gallery: getGallery('nanda-devi-national-park', '/images/destinations/nanda-devi-national-park/Gemini_Generated_Image_qhfi5zqhfi5zqhfi.png')
  },
  'gangotri-national-park': {
    hero: '/images/destinations/gangotri-national-park/Gemini_Generated_Image_d4j72id4j72id4j7.png',
    gallery: getGallery('gangotri-national-park', '/images/destinations/gangotri-national-park/Gemini_Generated_Image_d4j72id4j72id4j7.png')
  },
  'binsar-wildlife-sanctuary': {
    hero: '/images/destinations/binsar-wildlife-sanctuary/Gemini_Generated_Image_br2pxrbr2pxrbr2p.png',
    gallery: getGallery('binsar-wildlife-sanctuary', '/images/destinations/binsar-wildlife-sanctuary/Gemini_Generated_Image_br2pxrbr2pxrbr2p.png')
  },
  'govind-pashu-vihar-national-park': {
    hero: '/images/destinations/nanda-devi-national-park/Gemini_Generated_Image_uy4mdbuy4mdbuy4m.png',
    gallery: ['/images/destinations/nanda-devi-national-park/Gemini_Generated_Image_uy4mdbuy4mdbuy4m.png', '/images/destinations/nanda-devi-national-park/m_Gangotri_national_park_1_l_583_881.webp']
  },
  'kedarnath-wildlife-sanctuary': {
    hero: '/images/destinations/kedarnath-wildlife-sanctuary/kws.webp',
    gallery: getGallery('kedarnath-wildlife-sanctuary', '/images/destinations/kedarnath-wildlife-sanctuary/kws.webp')
  },
  'askot-wildlife-sanctuary': {
    hero: '/images/destinations/askot-wildlife-sanctuary/askot-sanctuary-askote-pithoragarh-tourist-attraction-anwlkeb.webp',
    gallery: getGallery('askot-wildlife-sanctuary', '/images/destinations/askot-wildlife-sanctuary/askot-sanctuary-askote-pithoragarh-tourist-attraction-anwlkeb.webp')
  },
  'nandhaur-wildlife-sanctuary': {
    hero: '/images/destinations/nandhaur-wildlife-sanctuary/af9c0d06351d3283066aefe1d971226b.webp',
    gallery: getGallery('nandhaur-wildlife-sanctuary', '/images/destinations/nandhaur-wildlife-sanctuary/af9c0d06351d3283066aefe1d971226b.webp')
  },
  'benog-wildlife-sanctuary': {
    hero: '/images/destinations/benog-wildlife-sanctuary/IMG_1520.webp',
    gallery: getGallery('benog-wildlife-sanctuary', '/images/destinations/benog-wildlife-sanctuary/IMG_1520.webp')
  },
  'sonanadi-wildlife-sanctuary': {
    hero: '/images/destinations/sonanadi-wildlife-sanctuary/sonanadi-wildlife-sanctuary.webp',
    gallery: getGallery('sonanadi-wildlife-sanctuary', '/images/destinations/sonanadi-wildlife-sanctuary/sonanadi-wildlife-sanctuary.webp')
  },
  'jhilmil-jheel-conservation-reserve': {
    hero: '/images/destinations/jhilmil-jheel/deer.webp',
    gallery: getGallery('jhilmil-jheel', '/images/destinations/jhilmil-jheel/deer.webp')
  },
  'asan-conservation-reserve': {
    hero: '/images/destinations/asan-conservation-reserve/Ruddy Ducks Resting on a Lakeside Dock.png',
    gallery: getGallery('asan-conservation-reserve', '/images/destinations/asan-conservation-reserve/Ruddy Ducks Resting on a Lakeside Dock.png')
  },
  'pawalgarh-conservation-reserve': {
    hero: '/images/destinations/pawalgarh-conservation-reserve/Pawalgarh Gate Forest Entrance.png',
    gallery: getGallery('pawalgarh-conservation-reserve', '/images/destinations/pawalgarh-conservation-reserve/Pawalgarh Gate Forest Entrance.png')
  },
  'ramnagar-forest': {
    hero: '/images/destinations/ramnagar-forest/Nagar Van Forest Gateway.png',
    gallery: getGallery('ramnagar-forest', '/images/destinations/ramnagar-forest/Nagar Van Forest Gateway.png')
  },
  'corbett-landscape': {
    hero: '/images/destinations/corbett-landscape/Off-Road Jeeps Crossing a Rustic River Bridge.png',
    gallery: getGallery('corbett-landscape', '/images/destinations/corbett-landscape/Off-Road Jeeps Crossing a Rustic River Bridge.png')
  },
  'kaladhungi': {
    hero: '/images/destinations/kaladhungi/Colonial Cottage Amid Lush Gardens.png',
    gallery: getGallery('kaladhungi', '/images/destinations/kaladhungi/Colonial Cottage Amid Lush Gardens.png')
  },

  // 5. Villages & Hidden Gems
  'mana-village': {
    hero: '/images/destinations/badrinath/photo-2.jpg',
    gallery: ['/images/destinations/badrinath/photo-2.jpg', '/images/destinations/badrinath/photo-3.jpg', '/images/destinations/badrinath/photo-5.jpg']
  },
  'sari-village': {
    hero: '/images/destinations/chopta/3 (2).jpg',
    gallery: ['/images/destinations/chopta/3 (2).jpg', '/images/destinations/chopta/3 (3).jpg', '/images/destinations/chopta/photo-2.jpg']
  },
  'sankri': {
    hero: '/images/destinations/munsiyari/photo-1.jpg',
    gallery: ['/images/destinations/munsiyari/photo-1.jpg', '/images/destinations/munsiyari/2 (1).jpg', '/images/destinations/munsiyari/2 (2).jpg']
  },
  'khirsu': {
    hero: '/images/destinations/khirsu/Misty Mountain Village Panorama.png',
    gallery: getGallery('khirsu', '/images/destinations/khirsu/Misty Mountain Village Panorama.png')
  },
  'lata-village': {
    hero: '/images/destinations/badrinath/photo-4.jpg',
    gallery: ['/images/destinations/badrinath/photo-4.jpg', '/images/destinations/badrinath/photo-1.jpg', '/images/destinations/badrinath/photo-3.jpg']
  },
  'osla-village': {
    hero: '/images/destinations/munsiyari/Himalayan Valley Sports Field Panorama.png',
    gallery: ['/images/destinations/munsiyari/Himalayan Valley Sports Field Panorama.png', '/images/destinations/munsiyari/Hillside Town Beneath Blue Mountains.png']
  },
  'abbott-mount': {
    hero: '/images/destinations/abbott-mount/Glacier-Crowned Mountain Wilderness.png',
    gallery: getGallery('abbott-mount', '/images/destinations/abbott-mount/Glacier-Crowned Mountain Wilderness.png')
  },
  'kalap': {
    hero: '/images/destinations/khirsu/Sunlit Mountain Village in Bloom.png',
    gallery: ['/images/destinations/khirsu/Sunlit Mountain Village in Bloom.png', '/images/destinations/khirsu/Misty Mountain Village Panorama.png']
  },
  'dharali': {
    hero: '/images/destinations/harsil/1602328040_1602328036685.jpg.webp',
    gallery: ['/images/destinations/harsil/1602328040_1602328036685.jpg.webp', '/images/destinations/harsil/1543513902_1543513900031.jpg.webp']
  },
  'mukhwa': {
    hero: '/images/destinations/gangotri/Himalayan Temple Valley Pilgrimage.png',
    gallery: ['/images/destinations/gangotri/Himalayan Temple Valley Pilgrimage.png', '/images/destinations/gangotri/Gangotri Temple in the Mountain Valley.png']
  },
  'jakhol': {
    hero: '/images/destinations/munsiyari/2 (3).jpg',
    gallery: ['/images/destinations/munsiyari/2 (3).jpg', '/images/destinations/munsiyari/2 (4).jpg']
  },
  'taluka': {
    hero: '/images/destinations/munsiyari/2 (4).jpg',
    gallery: ['/images/destinations/munsiyari/2 (4).jpg', '/images/destinations/munsiyari/2 (1).jpg']
  },
  'agoda': {
    hero: '/images/destinations/dayara-bugyal/2db70ae7a153fdddaee9b127fba08338.webp',
    gallery: ['/images/destinations/dayara-bugyal/2db70ae7a153fdddaee9b127fba08338.webp', '/images/destinations/dayara-bugyal/dayara_bugyal_3_1.webp']
  },
  'bagori': {
    hero: '/images/destinations/harsil/Gemini_Generated_Image_p6p83wp6p83wp6p8.png',
    gallery: ['/images/destinations/harsil/Gemini_Generated_Image_p6p83wp6p83wp6p8.png', '/images/destinations/harsil/1543513902_1543513900031.jpg.webp']
  },
  'barsu': {
    hero: '/images/destinations/dayara-bugyal/01M5VYFBF5CCREABTFQNNHXJG9.webp',
    gallery: ['/images/destinations/dayara-bugyal/01M5VYFBF5CCREABTFQNNHXJG9.webp', '/images/destinations/dayara-bugyal/dayara_bugyal_3_1.webp']
  },
  'gangnani': {
    hero: '/images/destinations/harsil/HARSIL_TRIP_GARHWAL_3-1024x686.webp',
    gallery: ['/images/destinations/harsil/HARSIL_TRIP_GARHWAL_3-1024x686.webp', '/images/destinations/harsil/1543513902_1543513900031.jpg.webp']
  },
  'kanakchauri': {
    hero: '/images/destinations/rudraprayag/Mountain River Valley with Cliffside Pavilion.png',
    gallery: ['/images/destinations/rudraprayag/Mountain River Valley with Cliffside Pavilion.png', '/images/destinations/rudraprayag/Hillside Town Along a Mountain River.png']
  },
  'dhanpur': {
    hero: '/images/destinations/peora/Terraced Hills Through Pine Canopy.png',
    gallery: ['/images/destinations/peora/Terraced Hills Through Pine Canopy.png', '/images/destinations/peora/Misty Hillside Home with Red Roses.png']
  },
  'shaukiyathal': {
    hero: '/images/destinations/munsiyari/photo-3.jpg',
    gallery: ['/images/destinations/munsiyari/photo-3.jpg', '/images/destinations/munsiyari/munsiyari-panchachuli-peaks.jpg']
  },
  'shitlakhet': {
    hero: '/images/destinations/ranikhet/1 (2).jpg',
    gallery: ['/images/destinations/ranikhet/1 (2).jpg', '/images/destinations/ranikhet/ranikhet-pine-meadows.jpg']
  },
  'satkhol': {
    hero: '/images/destinations/peora/Terraced Hillside Mediterranean Villa.png',
    gallery: ['/images/destinations/peora/Terraced Hillside Mediterranean Villa.png', '/images/destinations/peora/Misty Hillside Home with Red Roses.png']
  },
  'kanda': {
    hero: '/images/destinations/baijnath/Stone Temple Courtyard in Sunlight.png',
    gallery: ['/images/destinations/baijnath/Stone Temple Courtyard in Sunlight.png', '/images/destinations/baijnath/Ancient Stone Temple Courtyard.png']
  },
  'khati': {
    hero: '/images/destinations/munsiyari/Mountain Resort Cottages and Snowy Peaks.png',
    gallery: ['/images/destinations/munsiyari/Mountain Resort Cottages and Snowy Peaks.png', '/images/destinations/munsiyari/photo-1.jpg']
  },
  'loharkhet': {
    hero: '/images/destinations/munsiyari/photo-4.jpg',
    gallery: ['/images/destinations/munsiyari/photo-4.jpg', '/images/destinations/munsiyari/photo-5.jpg']
  },

  // 6. Lakes & Adventure
  'tehri': {
    hero: '/images/destinations/tehri/photo-1.jpg',
    gallery: getGallery('tehri', '/images/destinations/tehri/photo-1.jpg')
  }
};

// 8 duplicate destination IDs to remove completely
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

console.log('Writing updated destinations.ts...');

// Read original destinations.ts
const origContent = fs.readFileSync('src/data/destinations.ts', 'utf8');

// Parse out each destination block
// Matches "\r?\n  {\r?\n    id: '"
const blocks = origContent.split(/\r?\n\s*\{\r?\n\s*id:\s*'/);

let newBlocks = [];
let keptCount = 0;
let removedCount = 0;

for (let i = 1; i < blocks.length; i++) {
  const block = blocks[i];
  const idMatch = block.match(/^([^']+)'/);
  if (!idMatch) {
    console.error('Failed to parse ID from block:', block.substring(0, 50));
    continue;
  }
  const id = idMatch[1];

  if (duplicateIdsToRemove.has(id)) {
    console.log(`REMOVING duplicate location: ${id}`);
    removedCount++;
    continue;
  }

  const cfg = destConfig[id];
  if (!cfg) {
    console.error(`ERROR: No config for destination id: ${id}`);
    continue;
  }

  // Replace image: '...'
  let updatedBlock = block.replace(/image:\s*'[^']+'/, `image: '${cfg.hero}'`);

  // Replace gallery: [ ... ]
  const galleryStr = cfg.gallery.map(g => `      '${g}'`).join(',\n');
  updatedBlock = updatedBlock.replace(/gallery:\s*\[[\s\S]*?\]/, `gallery: [\n${galleryStr}\n    ]`);

  // Clean trailing commas and closing brace
  updatedBlock = updatedBlock.replace(/,?\s*\}\s*,?\s*$/, '');
  newBlocks.push(`  {\n    id: '${updatedBlock}\n  }`);
  keptCount++;
}

// Assemble header
const header = blocks[0].replace(/export const DESTINATIONS: Destination\[\] = \[[\s\S]*$/, 'export const DESTINATIONS: Destination[] = [\n');
const finalContent = header + newBlocks.join(',\n\n') + '\n];\n';

fs.writeFileSync('src/data/destinations.ts', finalContent, 'utf8');
console.log(`Updated destinations.ts: kept ${keptCount}, removed ${removedCount} duplicates.`);

// 2. Update navigationDestinations.ts
console.log('Updating navigationDestinations.ts...');
let navContent = fs.readFileSync('src/data/navigationDestinations.ts', 'utf8');
for (const id of duplicateIdsToRemove) {
  const reg = new RegExp(`\\s*\\{[^}]*slug:\\s*'${id}'[^}]*\\},?`, 'g');
  navContent = navContent.replace(reg, '');
}
navContent = navContent.replace(/,(\s*\])/g, '$1');
fs.writeFileSync('src/data/navigationDestinations.ts', navContent, 'utf8');

// 3. Update DestinationsPage.tsx
console.log('Updating DestinationsPage.tsx...');
let dpContent = fs.readFileSync('src/pages/DestinationsPage.tsx', 'utf8');
for (const id of duplicateIdsToRemove) {
  const reg = new RegExp(`\\s*'${id}',?`, 'g');
  dpContent = dpContent.replace(reg, '');
}
dpContent = dpContent.replace(/,(\s*\])/g, '$1');
fs.writeFileSync('src/pages/DestinationsPage.tsx', dpContent, 'utf8');

// 4. Update PackageDetailPage.tsx
console.log('Updating PackageDetailPage.tsx...');
let pdpContent = fs.readFileSync('src/pages/PackageDetailPage.tsx', 'utf8');
for (const id of duplicateIdsToRemove) {
  const reg = new RegExp(`\\s*'${id}':\\s*'[^']+',?`, 'g');
  pdpContent = pdpContent.replace(reg, '');
}
pdpContent = pdpContent.replace(/,(\s*\})/g, '$1');
fs.writeFileSync('src/pages/PackageDetailPage.tsx', pdpContent, 'utf8');

// 5. Update destinationDetailData.ts
console.log('Updating destinationDetailData.ts...');
let dddContent = fs.readFileSync('src/data/destinationDetailData.ts', 'utf8');
// Fix any old Rishikesh image in destinationDetailData.ts
dddContent = dddContent.replace(
  /path:\s*'\/destinations\/rishikesh',\s*image:\s*'[^']+'/g,
  `path: '/destinations/rishikesh', image: '/images/destinations/rishikesh/1 (1).jpg'`
);
// Fix Mussoorie
dddContent = dddContent.replace(
  /path:\s*'\/destinations\/mussoorie',\s*image:\s*'[^']+'/g,
  `path: '/destinations/mussoorie', image: '/images/destinations/mussoorie/photo-1.jpg'`
);
// Fix Nainital
dddContent = dddContent.replace(
  /path:\s*'\/destinations\/nainital',\s*image:\s*'[^']+'/g,
  `path: '/destinations/nainital', image: '/images/destinations/nainital/photo-1.jpg'`
);
// Remove duplicate keys from DESTINATION_DETAILS_MAP if any
for (const id of duplicateIdsToRemove) {
  const reg = new RegExp(`\\s*['"]?${id}['"]?:\\s*\\{[\\s\\S]*?\\n\\s*\\},?`, 'g');
  dddContent = dddContent.replace(reg, '');
}
fs.writeFileSync('src/data/destinationDetailData.ts', dddContent, 'utf8');

console.log('ALL UPDATES COMPLETE!');

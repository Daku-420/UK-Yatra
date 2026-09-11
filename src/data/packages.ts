import { TourPackage } from '../types';

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'chardham-helicopter-luxury-5n6d',
    title: 'Char Dham Yatra by Helicopter (5N/6D Ex-Dehradun)',
    destination: 'Yamunotri, Gangotri, Kedarnath, Badrinath',
    duration: '6 Days / 5 Nights',
    days: 6,
    startingPrice: '₹1,85,000',
    originalPrice: '₹2,20,000',
    bestSeason: 'May to Jun & Sep to Oct',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop',
    rating: 4.98,
    reviewsCount: 312,
    overview: 'The flagship luxury pilgrimage package by UKYatra as featured on UKYatra.com. Fly in absolute comfort from Dehradun Sahastradhara Helipad to all four sacred Himalayan Dhams with VIP priority darshans, premium resort stays, helicopter inter-valley transfers, and 24/7 executive ground handlers.',
    highlights: [
      'Helicopter flights across all four Dhams from Dehradun Sahastradhara',
      'VIP Priority Darshan assistance at Yamunotri, Gangotri, Kedarnath & Badrinath',
      'Maha Abhishek Puja at Badrinath Temple with special passes',
      '5 Nights luxury/premium hotel stays with all vegetarian gourmet meals',
      'Palki / Pony / Car transfers at Yamunotri included',
      'Dedicated UKYatra tour manager and local airport transfers'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dehradun to Yamunotri (Kharsali Helipad)',
        description: 'Depart from Dehradun Sahastradhara Helipad to Kharsali Helipad. Check-in to luxury resort, journey to Yamunotri Temple via Palki/Pony for divine darshan, visit Surya Kund hot springs.',
        stay: 'Luxury Resort in Kharsali / Yamunotri',
        meals: 'Breakfast, Lunch & Dinner'
      },
      {
        day: 2,
        title: 'Kharsali to Gangotri (Harsil Helipad)',
        description: 'Fly from Kharsali to scenic Harsil Valley. Drive to Gangotri Temple for holy darshan and Bhagirathi Aarti. Enjoy serene evening in apple orchards of Harsil.',
        stay: 'Premium Himalayan Resort in Harsil Valley',
        meals: 'Breakfast, Lunch & Dinner'
      },
      {
        day: 3,
        title: 'Harsil to Kedarnath (Sersi / Phata Helipad Shuttle)',
        description: 'Fly to Sersi/Guptkashi helipad and board executive shuttle to Kedarnath Helipad (500m from temple). Attend the divine evening Aarti at Kedarnath.',
        stay: 'Premium Hotel / Cottages in Guptkashi or Kedarnath Top',
        meals: 'Breakfast, Lunch & Dinner'
      },
      {
        day: 4,
        title: 'Kedarnath Darshan to Badrinath Dham',
        description: 'Morning Abhishek darshan at Kedarnath. Fly across snow-capped peaks to Badrinath Helipad. Check-in to luxury hotel and attend evening Swarna Aarti.',
        stay: 'Luxury Hotel in Badrinath (Sarovar / Snow Crest)',
        meals: 'Breakfast, Lunch & Dinner'
      },
      {
        day: 5,
        title: 'Badrinath Maha Abhishek Puja & Mana Village Excursion',
        description: 'Special early morning Maha Abhishek Puja inside Badrinath sanctum sanctorum. Afternoon tour of Mana (First Indian Village), Vyas Gufa, and Saraswati River origin.',
        stay: 'Luxury Hotel in Badrinath',
        meals: 'Breakfast, Lunch & Dinner'
      },
      {
        day: 6,
        title: 'Badrinath to Dehradun Sahastradhara Return Drop',
        description: 'Fly back to Dehradun Sahastradhara Helipad with divine blessings and cherished memories. Luxury car drop to Dehradun Airport / Railway Station.',
        stay: 'End of Sacred Tour',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Helicopter flying from Dehradun to Kharsali, Harsil, Sersi, Badrinath & return',
      'VIP Priority Darshan passes at all 4 shrines',
      '5 Nights accommodation in verified premium/luxury properties',
      'All meals (Pure vegetarian gourmet breakfast, lunch, and dinner)',
      'Palki / Pony charges at Yamunotri',
      'Local car transfers at Harsil, Guptkashi, and Badrinath',
      'Special Badrinath Maha Abhishek Puja coordination',
      'Airport/Hotel luxury cab pickup and drop in Dehradun'
    ],
    exclusions: [
      'Weight surcharge over 75kg per passenger as per civil aviation norms',
      'Personal tips, laundry, and items of personal nature'
    ],
    isFeatured: true
  },
  {
    id: 'dodham-helicopter-luxury-3n4d',
    title: 'Do Dham Yatra by Helicopter (3N/4D - Kedarnath & Badrinath)',
    destination: 'Dehradun, Kedarnath & Badrinath',
    duration: '4 Days / 3 Nights',
    days: 4,
    startingPrice: '₹1,15,000',
    originalPrice: '₹1,40,000',
    bestSeason: 'May to Jun & Sep to Oct',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    rating: 4.96,
    reviewsCount: 189,
    overview: 'Express pilgrimage covering Lord Shiva’s highest Jyotirlinga (Kedarnath) and Lord Vishnu’s sacred abode (Badrinath) via private executive helicopter from Dehradun with VIP priority darshan and luxury stays.',
    highlights: [
      'Helicopter charter service from Dehradun Sahastradhara',
      'VIP Darshan at Kedarnath & Badrinath Temples',
      '3 Nights luxury hotel accommodation',
      'All vegetarian meals & dedicated ground assistance',
      'Mana Village & Saraswati River tour'
    ],
    itinerary: [
      { day: 1, title: 'Dehradun Arrival & Briefing', description: 'Arrive in Dehradun, airport pickup, check-in to luxury hotel, yatra briefing and weight check.', stay: '5-Star Hotel in Dehradun', meals: 'Dinner' },
      { day: 2, title: 'Dehradun to Kedarnath Dham', description: 'Fly to Sersi helipad, take shuttle to Kedarnath Temple. VIP darshan and evening Aarti.', stay: 'Premium Hotel in Guptkashi/Kedarnath', meals: 'Breakfast, Lunch & Dinner' },
      { day: 3, title: 'Kedarnath to Badrinath Dham', description: 'Fly directly from Sersi to Badrinath helipad. Priority darshan, visit Mana village.', stay: 'Luxury Hotel in Badrinath', meals: 'Breakfast, Lunch & Dinner' },
      { day: 4, title: 'Badrinath to Dehradun Sahastradhara Return', description: 'Fly back to Dehradun, drop to Dehradun airport with divine memories.', stay: 'End of Tour', meals: 'Breakfast' }
    ],
    inclusions: [
      'Helicopter transfers from Dehradun and between shrines',
      '3 Nights premium hotel accommodation',
      'VIP Darshan coordination at both temples',
      'All meals and local ground luxury transfers'
    ],
    exclusions: ['Personal expenses and porter charges'],
    isFeatured: true
  },
  {
    id: 'kedarnath-helicopter-same-day',
    title: 'Kedarnath Yatra by Helicopter (Same Day Ex-Dehradun)',
    destination: 'Dehradun & Kedarnath Temple',
    duration: '1 Day (Same Day Return)',
    days: 1,
    startingPrice: '₹55,000',
    originalPrice: '₹65,000',
    bestSeason: 'May to Jun & Sep to Oct',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    rating: 4.94,
    reviewsCount: 145,
    overview: 'Same-day divine darshan at Kedarnath Jyotirlinga from Dehradun Sahastradhara. Fly directly into the Mandakini valley, receive priority VIP darshan, spend 2-3 hours at the sacred sanctum, and return to Dehradun before sunset.',
    highlights: [
      'Same day return from Dehradun Sahastradhara Helipad',
      'VIP Priority Darshan pass at Kedarnath Temple',
      'Breakfast and refreshments included',
      'Ideal for senior citizens and busy executives'
    ],
    itinerary: [
      { day: 1, title: 'Dehradun to Kedarnath & Return (Same Day)', description: '06:00 AM takeoff from Dehradun Sahastradhara. Arrive Sersi/Kedarnath, VIP darshan at temple, return flight to Dehradun by 02:00 PM.', stay: 'Day Tour (No overnight stay)', meals: 'Breakfast & Refreshments' }
    ],
    inclusions: ['Helicopter tickets Dehradun - Kedarnath - Dehradun', 'VIP Darshan pass', 'Breakfast & assistance'],
    exclusions: ['Overnight accommodation', 'Personal expenses'],
    isFeatured: true
  },
  {
    id: 'kedarnath-divine-yatra',
    title: 'Kedarnath Divine Yatra & Valley Escape (By Road)',
    destination: 'Kedarnath & Guptkashi',
    duration: '4 Days / 3 Nights',
    days: 4,
    startingPrice: '₹14,999',
    originalPrice: '₹17,999',
    bestSeason: 'May to Jun & Sep to Oct',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    reviewsCount: 142,
    overview: 'Embark on the sacred pilgrimage to the 1200-year-old Kedarnath Temple nestled against towering Himalayan glaciers. Includes private transfers from Haridwar/Rishikesh, hotel stays in Guptkashi/Sonprayag, priority temple assistance, and guided trek coordination.',
    highlights: [
      'Kedarnath Temple Darshan & Evening Aarti',
      'Scenic drive along Alaknanda and Mandakini rivers',
      'Overnight stay near Kedarnath Temple base',
      'Helicopter ticket / Pony arrangement assistance',
      'All meals and luxury transport from Haridwar/Rishikesh'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Haridwar/Rishikesh - Drive to Guptkashi / Sitapur',
        description: 'Meet our trip coordinator at Haridwar/Rishikesh. Drive along the scenic Mandakini valley with views of Devprayag and Rudraprayag sangams. Check-in to hotel in Guptkashi/Sitapur.',
        stay: 'Premium Hotel in Guptkashi/Sitapur',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Guptkashi/Sonprayag to Kedarnath Base (16 km Trek / Helipad)',
        description: 'Early morning transfer to Sonprayag. Start the sacred 16 km trek to Kedarnath or take the helicopter from Phata/Sirsi. Arrive at Kedarnath by evening, attend the divine temple Aarti, and absorb the spiritual energy.',
        stay: 'Guest House / Camp near Kedarnath Temple',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Morning Darshan & Return Trek to Sonprayag - Guptkashi',
        description: 'Witness the morning temple Abhishek with golden sunrise hitting the Kedar Dome. Trek down to Gaurikund/Sonprayag. Drive back to Guptkashi for relaxing evening.',
        stay: 'Premium Hotel in Guptkashi',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Guptkashi to Rishikesh/Haridwar Departure',
        description: 'After breakfast, drive back to Rishikesh/Haridwar with unforgettable blessings and memories of the Himalayas.',
        stay: 'End of Tour',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Private AC/Heated transport (Innova/Tempo Traveller) for the entire route',
      '3 Nights accommodation (2 Nights Guptkashi + 1 Night Kedarnath Top)',
      'Daily breakfast and dinner (Pure vegetarian)',
      'Registration assistance & Trek Coordinator guidance',
      'Driver allowances, toll taxes, parking fees, and all state taxes'
    ],
    exclusions: [
      'Helicopter tickets, pony/doli charges',
      'Personal expenses, laundry, telephone, camera fees',
      'Any unexpected expense caused by landslides, roadblocks or natural delays'
    ],
    isFeatured: true
  },
  {
    id: 'char-dham-complete-yatra',
    title: 'Complete Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath)',
    destination: 'Complete Uttarakhand Circuit',
    duration: '10 Days / 9 Nights',
    days: 10,
    startingPrice: '₹32,500',
    originalPrice: '₹38,000',
    bestSeason: 'May - June & Sep - Oct',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop',
    rating: 4.95,
    reviewsCount: 218,
    overview: 'The most sacred pilgrimage circuit of India covering all four divine abodes: Yamunotri, Gangotri, Kedarnath, and Badrinath. Conducted with seasoned Himalayan drivers, verified quality hotels, oxygen support, and personal assistance.',
    highlights: [
      'Darshan at all four shrines: Yamunotri, Gangotri, Kedarnath, Badrinath',
      'Mana Village (First Indian Village) & Bheem Pul',
      'Ganga Aarti at Haridwar & Rishikesh',
      'Hot springs at Yamunotri and Badrinath',
      'Dedicated yatra support team throughout'
    ],
    itinerary: [
      { day: 1, title: 'Haridwar/Dehradun to Barkot (215 km)', description: 'Scenic drive to Barkot via Mussoorie and Kempty Falls.', stay: 'Barkot Hotel', meals: 'Dinner' },
      { day: 2, title: 'Barkot - Yamunotri Darshan - Barkot', description: 'Early drive to Janki Chatti. Trek 6 km to Yamunotri Temple. Holy dip in Surya Kund.', stay: 'Barkot Hotel', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Barkot to Uttarkashi (100 km)', description: 'Drive to Uttarkashi, visit ancient Kashi Vishwanath Temple and Shakti Temple.', stay: 'Uttarkashi Hotel', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Uttarkashi - Gangotri Darshan - Uttarkashi', description: 'Drive through beautiful Harsil valley to Gangotri. Holy dip in Bhagirathi River.', stay: 'Uttarkashi Hotel', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Uttarkashi to Guptkashi (220 km)', description: 'Drive along Mandakini River to Guptkashi.', stay: 'Guptkashi Hotel', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Guptkashi to Kedarnath Trek / Heli', description: 'Trek or fly to Kedarnath temple, participate in evening aarti.', stay: 'Kedarnath Base Camp', meals: 'Breakfast & Dinner' },
      { day: 7, title: 'Kedarnath to Guptkashi', description: 'Morning temple darshan, trek down to Gaurikund and relax in Guptkashi.', stay: 'Guptkashi Hotel', meals: 'Breakfast & Dinner' },
      { day: 8, title: 'Guptkashi to Badrinath (190 km)', description: 'Drive to Badrinath via Chopta/Joshimath. Evening temple darshan.', stay: 'Badrinath Hotel', meals: 'Breakfast & Dinner' },
      { day: 9, title: 'Badrinath - Mana Village - Rudraprayag', description: 'Explore Mana Village, Vyas Gufa, and drive to Rudraprayag confluence.', stay: 'Rudraprayag Hotel', meals: 'Breakfast & Dinner' },
      { day: 10, title: 'Rudraprayag to Haridwar/Rishikesh Drop', description: 'Drive back to Haridwar via Devprayag (Alaknanda-Bhagirathi sangam).', stay: 'End of Journey', meals: 'Breakfast' }
    ],
    inclusions: [
      '9 Nights accommodation in verified comfortable hotels',
      'All transfers in sanitised private vehicle with experienced hill driver',
      'Breakfast and dinner daily',
      'Chardham Yatra registration & biometric assistance',
      'Emergency oxygen cylinder in vehicle',
      'Tolls, parking, driver allowance'
    ],
    exclusions: ['Pony/Palanquin/Helicopter costs', 'VIP darshan passes', 'Personal expenses'],
    isFeatured: true
  },
  {
    id: 'auli-snow-glacier-escape',
    title: 'Auli Snow Wonderland & Alpine Panorama',
    destination: 'Auli & Joshimath',
    duration: '4 Days / 3 Nights',
    days: 4,
    startingPrice: '₹12,499',
    originalPrice: '₹15,000',
    bestSeason: 'Dec - Mar (Snow) & Apr - Jun (Meadows)',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=1200&auto=format&fit=crop',
    rating: 4.88,
    reviewsCount: 96,
    overview: 'Experience India’s finest alpine snow resort with front-row views of Nanda Devi. Includes cable car rides, skiing sessions with certified instructors, and cozy mountain resort stays.',
    highlights: [
      'Auli 4km Cable Car ropeway ride',
      'Skiing & Snowboarding introduction with equipment',
      'Gorson Bugyal high meadow snow trek',
      '360° views of Nanda Devi, Kamet & Trishul',
      'Bonfire nights & warm Himalayan hospitality'
    ],
    itinerary: [
      { day: 1, title: 'Rishikesh to Joshimath/Auli (250 km)', description: 'Scenic drive past Devprayag, Srinagar, and Karnaprayag confluences. Arrive Joshimath.', stay: 'Joshimath / Auli Resort', meals: 'Dinner' },
      { day: 2, title: 'Auli Ski Slopes & Ropeway Ride', description: 'Ascend to Auli via Asia’s longest ropeway. Skiing practice on snow slopes with instructors.', stay: 'Auli Mountain Resort', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Gorson Bugyal Trek & Sunset Viewpoint', description: 'Trek 3 km to Gorson Bugyal through thick conifer and oak forests under snow.', stay: 'Auli Mountain Resort', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Joshimath to Rishikesh Departure', description: 'Drive back to Rishikesh with breathtaking mountain photos and memories.', stay: 'End of Tour', meals: 'Breakfast' }
    ],
    inclusions: ['3 Nights stay in premium hotels/resorts', 'Breakfast & Dinner daily', 'Skiing basic equipment and instructor', 'Private transport from Rishikesh', 'Local permits'],
    exclusions: ['Ropeway / Chairlift tickets', 'Personal snow boots / winter jackets (available on rent)'],
    isFeatured: true
  },
  {
    id: 'chopta-tungnath-chandrashila-trek',
    title: 'Chopta Tungnath & Chandrashila Peak Expedition',
    destination: 'Chopta, Tungnath & Deoria Tal',
    duration: '4 Days / 3 Nights',
    days: 4,
    startingPrice: '₹7,999',
    originalPrice: '₹9,999',
    bestSeason: 'Round the Year (Snow in Jan-Mar)',
    category: 'Trekking',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    rating: 4.92,
    reviewsCount: 164,
    overview: 'Trek to the highest Shiva temple on earth (Tungnath at 3,680m) and summit Chandrashila Peak (4,000m) for an unmatched 360-degree panorama of the entire Garhwal Himalayan range.',
    highlights: [
      'Summit Chandrashila (4,000 m / 13,123 ft)',
      'Darshan at ancient Tungnath Temple',
      'Deoria Tal emerald lake campsite with Chaukhamba reflection',
      'Alpine meadow camping in Chopta',
      'Expert certified mountaineering trek leaders'
    ],
    itinerary: [
      { day: 1, title: 'Rishikesh to Sari Village & Deoria Tal Trek', description: 'Drive to Sari village (190 km) and trek 2.5 km to the majestic Deoria Tal lake.', stay: 'Deoria Tal Lakeside Camps', meals: 'Dinner' },
      { day: 2, title: 'Deoria Tal to Chopta via Rohini Bugyal', description: 'Scenic forest ridge walk through rhododendron woodlands to Chopta base camp.', stay: 'Chopta Alpine Meadow Resort', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Chopta to Tungnath & Chandrashila Summit (4,000m)', description: 'Early morning summit push to witness magical sunrise over Chaukhamba, Trishul, and Nanda Devi.', stay: 'Chopta Resort', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Chopta to Rishikesh Return', description: 'Drive back to Rishikesh with rafting stopover option.', stay: 'End of Tour', meals: 'Breakfast' }
    ],
    inclusions: ['Camps and luxury Swiss tents in Chopta', 'All meals during the trek', 'Certified mountaineering guide', 'Transport from Rishikesh', 'Forest entry permits'],
    exclusions: ['Personal trekking gear', 'Tips and personal porter'],
    isFeatured: true
  },
  {
    id: 'rishikesh-adventure-riverside',
    title: 'Rishikesh Adrenaline Weekend & River Camping',
    destination: 'Rishikesh & Shivpuri',
    duration: '3 Days / 2 Nights',
    days: 3,
    startingPrice: '₹4,999',
    originalPrice: '₹6,499',
    bestSeason: 'Sep to Jun',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop',
    rating: 4.85,
    reviewsCount: 180,
    overview: 'The ultimate weekend escape for thrill seekers! 16 km white-water rafting on the roaring Ganges, cliff jumping, riverside luxury camping with swimming pool, bonfire music, and Ganga Aarti.',
    highlights: [
      '16 km White Water Rafting (Grade III/IV rapids)',
      'Cliff jumping & Body surfing in Ganga',
      'Luxury AC Swiss Cottages with Swimming Pool in Shivpuri',
      'Evening Bonfire, Barbecue & Live acoustic music',
      'Visit to Beatles Ashram & Triveni Ghat Aarti'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Rishikesh - Shivpuri Riverside Check-in', description: 'Arrive at campsite, enjoy welcome drinks, afternoon waterfall hike, evening bonfire and music.', stay: 'Shivpuri Luxury Camp', meals: 'Lunch & Dinner' },
      { day: 2, title: 'Ganga White Water Rafting & Cliff Jump', description: 'Tackle famous rapids like Roller Coaster, Golf Course, and Club House. Free afternoon for Bungee or Beatles Ashram.', stay: 'Shivpuri Luxury Camp', meals: 'Breakfast, Lunch & Dinner' },
      { day: 3, title: 'Triveni Ghat - Local Cafes - Departure', description: 'Visit Lakshman Jhula cafes and depart with high adrenaline memories.', stay: 'End of Tour', meals: 'Breakfast' }
    ],
    inclusions: ['2 Nights luxury camp stay with swimming pool access', 'All meals (Buffet Veg/Non-veg)', '16 km Rafting with safety kayakers & safety gear', 'Cliff jumping, body surfing', 'Bonfire & DJ night'],
    exclusions: ['Bungee jumping / Flying fox fees', 'Local transfers from station to camp'],
    isFeatured: false
  },
  {
    id: 'valley-of-flowers-hemkund-trek',
    title: 'Valley of Flowers & Hemkund Sahib Trek',
    destination: 'Ghangaria, Chamoli',
    duration: '6 Days / 5 Nights',
    days: 6,
    startingPrice: '₹13,999',
    originalPrice: '₹16,999',
    bestSeason: 'July to September',
    category: 'Trekking',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    rating: 4.96,
    reviewsCount: 110,
    overview: 'Walk through a UNESCO World Heritage carpet of over 500 varieties of wild Himalayan flowers, followed by an ascent to the holy Hemkund Sahib lake at 4,329 meters surrounded by 7 snow peaks.',
    highlights: [
      'UNESCO World Heritage Valley of Flowers exploration',
      'Brahma Kamal, Blue Poppy & Himalayan Bell flowers',
      'Hemkund Sahib sacred glacial lake & Gurudwara (4,329m)',
      'Ghangaria base camp stays',
      'Certified wilderness first-aid trek leaders'
    ],
    itinerary: [
      { day: 1, title: 'Rishikesh to Govindghat / Joshimath (270 km)', description: 'Drive along Alaknanda River to Govindghat.', stay: 'Govindghat Hotel', meals: 'Dinner' },
      { day: 2, title: 'Govindghat to Ghangaria Trek (14 km)', description: 'Trek alongside Lakshman Ganga river to Ghangaria.', stay: 'Ghangaria Guest House', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Ghangaria to Valley of Flowers (4 km)', description: 'Full day exploring the alpine floral meadows and Pushpawati River.', stay: 'Ghangaria Guest House', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Ghangaria to Hemkund Sahib (6 km steep)', description: 'Ascend to 4,329m to the sacred glacial lake and Gurudwara.', stay: 'Ghangaria Guest House', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Ghangaria to Govindghat - Badrinath', description: 'Trek down to Govindghat, optional visit to Badrinath Temple.', stay: 'Joshimath Hotel', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Joshimath to Rishikesh Departure', description: 'Drive back to Rishikesh with memories of a lifetime.', stay: 'End of Tour', meals: 'Breakfast' }
    ],
    inclusions: ['5 Nights accommodation', 'All meals during trek', 'National park entry permits', 'Trek leader & mountain guides', 'Transport from Rishikesh'],
    exclusions: ['Pony/mule charges', 'Personal gear'],
    isFeatured: true
  },
  {
    id: 'jim-corbett-wildlife-escape',
    title: 'Jim Corbett Royal Tiger Safari & Jungle Retreat',
    destination: 'Jim Corbett National Park',
    duration: '3 Days / 2 Nights',
    days: 3,
    startingPrice: '₹7,499',
    originalPrice: '₹9,499',
    bestSeason: 'October to June',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop',
    rating: 4.87,
    reviewsCount: 88,
    overview: 'Explore the dense Sal forests of India’s oldest national park on an open 4x4 Jeep Safari. Stay in luxury riverside jungle resorts along Kosi river with guided nature walks and birding tours.',
    highlights: [
      'Open 4x4 Jeep Safari in Corbett Tiger Reserve (Bijrani/Jhirna/Dhikala)',
      'Luxury riverfront resort stay with swimming pool',
      'Corbett Waterfalls & Heritage Museum visit',
      'Garjiya Devi Temple excursion',
      'Bonfire and jungle naturalist sessions'
    ],
    itinerary: [
      { day: 1, title: 'Arrival at Corbett Resort - River walk', description: 'Check-in to riverside resort, evening tea by Kosi river, bonfire dinner.', stay: 'Luxury Jungle Resort', meals: 'Lunch & Dinner' },
      { day: 2, title: 'Morning Tiger Safari & Local Sightseeing', description: 'Dawn 4x4 Jeep Safari into Corbett core zone. Afternoon visit to Corbett Falls and Garjiya Devi Temple.', stay: 'Luxury Jungle Resort', meals: 'Breakfast, Lunch & Dinner' },
      { day: 3, title: 'Morning Birding Walk & Departure', description: 'Guided riverside birding walk followed by departure.', stay: 'End of Tour', meals: 'Breakfast' }
    ],
    inclusions: ['2 Nights luxury resort stay', 'All meals included', '1 Open 4x4 Jeep Safari with naturalist & forest permits', 'Resort activities & swimming pool access'],
    exclusions: ['Extra safari rounds', 'Personal expenses'],
    isFeatured: false
  },
  {
    id: 'nainital-mukteshwar-kumaon-escape',
    title: 'Nainital, Bhimtal & Mukteshwar Kumaon Retreat',
    destination: 'Nainital & Mukteshwar',
    duration: '4 Days / 3 Nights',
    days: 4,
    startingPrice: '₹6,499',
    originalPrice: '₹8,200',
    bestSeason: 'Round the Year',
    category: 'Hills & Valleys',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    reviewsCount: 74,
    overview: 'Soak in the tranquility of the Kumaon lake district. Yachting in Naini Lake, bird watching in Pangot, paragliding in Bhimtal, and watching golden sunrises over Trishul peak in Mukteshwar.',
    highlights: [
      'Naini Lake boating & Naina Devi Darshan',
      'Mukteshwar 350-year-old temple & Chauli Ki Jali cliffs',
      'Bhimtal, Sattal & Naukuchiatal lake hopping',
      'Panoramic Himalayan views of Trishul & Nanda Devi',
      'Fruit orchards and pine forest walks'
    ],
    itinerary: [
      { day: 1, title: 'Kathgodam/Delhi to Nainital', description: 'Drive to Nainital, check-in, evening stroll on Mall Road & Naini Lake boating.', stay: 'Nainital Lakeview Hotel', meals: 'Dinner' },
      { day: 2, title: 'Nainital Lake Tour & Viewpoints', description: 'Visit Snow View Point, Cave Garden, Bhimtal and Naukuchiatal.', stay: 'Nainital Lakeview Hotel', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Nainital to Mukteshwar (50 km)', description: 'Drive to serene Mukteshwar. Visit Chauli Ki Jali, Mukteshwar Dham, and orchard estates.', stay: 'Mukteshwar Mountain Lodge', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Mukteshwar to Kathgodam/Delhi Departure', description: 'Morning Himalayan sunrise and return drive.', stay: 'End of Tour', meals: 'Breakfast' }
    ],
    inclusions: ['3 Nights stay in premium hotels', 'Breakfast & Dinner', 'Private sanitized vehicle for sightseeing', 'Toll, parking, and driver allowance'],
    exclusions: ['Boating/Paragliding tickets', 'Entry fees'],
    isFeatured: false
  }
];

export interface SpiritualCircuit {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  bestSeason: string;
  description: string;
  shrines: {
    name: string;
    deity: string;
    altitude: string;
    district: string;
    significance: string;
    image: string;
  }[];
  yatraGuidelines: string[];
  startingPrice: string;
}

export const SPIRITUAL_CIRCUITS: SpiritualCircuit[] = [
  {
    id: 'char-dham',
    name: 'Chota Char Dham Yatra',
    subtitle: 'The Sacred Quadrilateral of Uttarakhand Himalayas',
    duration: '10 - 12 Days',
    bestSeason: 'May to June & September to November',
    startingPrice: '₹32,500',
    description: 'The ancient fourfold pilgrimage circuit established by Adi Shankaracharya in the 8th century. Completing the Char Dham is believed to cleanse worldly sins and grant Moksha (spiritual liberation). The clockwise order starts at Yamunotri, proceeds to Gangotri, then Kedarnath, and concludes at Badrinath.',
    shrines: [
      {
        name: 'Yamunotri Dham',
        deity: 'Goddess Yamuna (Daughter of Sun)',
        altitude: '3,291 m (10,797 ft)',
        district: 'Uttarkashi',
        significance: 'Source of the holy Yamuna River, featuring the thermal springs of Surya Kund and Divya Shila.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop'
      },
      {
        name: 'Gangotri Dham',
        deity: 'Goddess Ganga',
        altitude: '3,100 m (10,170 ft)',
        district: 'Uttarkashi',
        significance: 'Sacred spot where River Ganga descended to Earth when King Bhagirath performed rigorous penance.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
      },
      {
        name: 'Kedarnath Dham',
        deity: 'Lord Shiva (Sadashiva)',
        altitude: '3,584 m (11,759 ft)',
        district: 'Rudraprayag',
        significance: 'One of the 12 Jyotirlingas and the primary seat among the sacred Panch Kedar shrines.',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop'
      },
      {
        name: 'Badrinath Dham',
        deity: 'Lord Vishnu (Badrinarayan)',
        altitude: '3,300 m (10,827 ft)',
        district: 'Chamoli',
        significance: 'The supreme sanctum of Lord Vishnu between Nar and Narayana mountains, flanked by Alaknanda.',
        image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop'
      }
    ],
    yatraGuidelines: [
      'Compulsory Biometric Registration on Uttarakhand Tourism portal (Handled seamlessly by UKYatra for guests)',
      'Carry valid photo ID (Aadhaar / Voter ID / Passport)',
      'Medical fitness certificate recommended for pilgrims above 55 years',
      'Pack thermal layers, warm woolen socks, waterproof jackets, and sturdy walking shoes',
      'Acclimatize properly and drink plenty of water with electrolytes to prevent acute mountain sickness'
    ]
  },
  {
    id: 'do-dham-kedar-badri',
    name: 'Do Dham Yatra (Kedarnath & Badrinath)',
    subtitle: 'The Sacred Confluence of Shaivism & Vaishnavism',
    duration: '5 - 6 Days',
    bestSeason: 'May to June & September to November',
    startingPrice: '₹19,999',
    description: 'The most popular yatra route covering the two most iconic Himalayan temples: Kedarnath (Lord Shiva) and Badrinath (Lord Vishnu). Perfect for devotees with time constraints seeking profound spiritual rejuvenation.',
    shrines: [
      {
        name: 'Kedarnath Temple',
        deity: 'Lord Shiva',
        altitude: '3,584 m',
        district: 'Rudraprayag',
        significance: 'Sacred Jyotirlinga in the shadow of Kedardome.',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop'
      },
      {
        name: 'Badrinath Temple',
        deity: 'Lord Vishnu',
        altitude: '3,300 m',
        district: 'Chamoli',
        significance: 'Sacred abode along Alaknanda River, with Mana village.',
        image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop'
      }
    ],
    yatraGuidelines: [
      'Helicopter options available from Phata / Guptkashi / Sirsi for Kedarnath',
      'Priority VIP darshan queue coordination available through UKYatra team',
      'Oxygen cylinder equipped vehicles for high mountain stretches'
    ]
  },
  {
    id: 'panch-kedar',
    name: 'The Sacred Panch Kedar Circuit',
    subtitle: 'The 5 Holy Temples of Lord Shiva in Garhwal Himalayas',
    duration: '14 - 16 Days',
    bestSeason: 'May to June & September to October',
    startingPrice: '₹42,000',
    description: 'According to Mahabharata legends, the Pandavas sought Shiva to absolve their sins from the Kurukshetra war. Shiva took the form of a bull; when caught, his body appeared in 5 different sacred locations across Garhwal.',
    shrines: [
      { name: '1. Kedarnath (Hump)', deity: 'Lord Shiva', altitude: '3,584 m', district: 'Rudraprayag', significance: 'The divine bull’s hump appeared here.', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop' },
      { name: '2. Tungnath (Arms)', deity: 'Lord Shiva', altitude: '3,680 m', district: 'Rudraprayag', significance: 'World’s highest Shiva temple where hands/arms appeared.', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop' },
      { name: '3. Rudranath (Face/Mukh)', deity: 'Lord Shiva', altitude: '2,286 m', district: 'Chamoli', significance: 'Neelkanth Mahadev’s face is worshipped here amid dense rhododendron woods.', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop' },
      { name: '4. Madhyamaheshwar (Navel)', deity: 'Lord Shiva', altitude: '3,497 m', district: 'Rudraprayag', significance: 'The belly and navel of the divine bull are worshipped.', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop' },
      { name: '5. Kalpeshwar (Matted Hair/Jata)', deity: 'Lord Shiva', altitude: '2,200 m', district: 'Chamoli', significance: 'The locks of hair (Jata) of Shiva are worshipped inside a natural stone cave.', image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop' }
    ],
    yatraGuidelines: [
      'Demanding trekking route suited for physically fit devotees and trekking enthusiasts',
      'Accompanied by seasoned local Sherpas and mountain cooks'
    ]
  }
];

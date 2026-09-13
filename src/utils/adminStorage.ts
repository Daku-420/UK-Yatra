import { TOUR_PACKAGES } from '../data/packages';
import { TourPackage } from '../types';
import { REVIEWS } from '../data/reviews';
import { SITE_CONFIG } from '../config/siteConfig';

export type BookingStatus = 'Pending' | 'Contacted' | 'Confirmed' | 'Completed' | 'Cancelled';

export interface AdminBooking {
  id: string;
  name: string;
  phone: string;
  email?: string;
  destination: string;
  packageName?: string;
  travelDate?: string;
  travellers: string;
  budget?: string;
  specialRequests?: string;
  status: BookingStatus;
  staffNotes?: string;
  createdAt: string;
  source: 'Enquiry Modal' | 'Booking Page' | 'Custom Planner' | 'Contact Form' | 'Direct Admin Entry';
  totalAmountEstimated?: number;
}

export interface AdminWeatherAdvisory {
  id: string;
  hub: string;
  altitude: string;
  temp: string;
  condition: string;
  yatraStatus: 'Clear & Open' | 'Registration Mandatory' | 'Active Advisory' | 'Rainfall / Precaution';
  statusColor: 'emerald' | 'amber' | 'blue' | 'rose';
  roadStatus: string;
  nightAdvisory: string;
  lastUpdated: string;
}

export interface AdminSettings {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  upiId: string;
  activeSeason: string;
  adminPasswordHash?: string;
}

const STORAGE_KEYS = {
  BOOKINGS: 'ukyatra_admin_bookings',
  PACKAGES: 'ukyatra_admin_packages_custom',
  WEATHER: 'ukyatra_admin_weather',
  REVIEWS: 'ukyatra_admin_reviews',
  SETTINGS: 'ukyatra_admin_settings',
  AUTH: 'ukyatra_admin_auth'
};

// Seed realistic initial bookings
const INITIAL_BOOKINGS: AdminBooking[] = [
  {
    id: 'UKY-8492',
    name: 'Vikram & Ananya Singhania',
    phone: '+91 98201 54321',
    email: 'vikram.singhania@gmail.com',
    destination: 'Kedarnath & Badrinath',
    packageName: 'Kedarnath Divine Yatra & Valley Escape',
    travelDate: '2026-10-12',
    travellers: '4 Adults',
    budget: 'Luxury (4-Star / Helicopter)',
    specialRequests: 'Elderly parents travelling; need VIP Darshan assistance and helicopter shuttle from Phata.',
    status: 'Confirmed',
    staffNotes: 'Helicopter tickets booked via GMVN Sersi slot. Token advance ₹40,000 received.',
    createdAt: '2026-09-11T14:32:00.000Z',
    source: 'Booking Page',
    totalAmountEstimated: 125000
  },
  {
    id: 'UKY-8488',
    name: 'Dr. Priya Nambiar',
    phone: '+91 94470 12890',
    email: 'priya.nambiar@apollo.org',
    destination: 'Full Char Dham Circuit',
    packageName: 'Sacred Char Dham Classic Circuit',
    travelDate: '2026-10-20',
    travellers: '2 Adults',
    budget: 'Deluxe (Cottages)',
    specialRequests: 'Doctor group interested in medical backup and private Innova Crysta for full 10-day circuit.',
    status: 'Contacted',
    staffNotes: 'Quotation sent on WhatsApp. Waiting for route confirmation via Rishikesh departure.',
    createdAt: '2026-09-12T09:15:00.000Z',
    source: 'Enquiry Modal',
    totalAmountEstimated: 98000
  },
  {
    id: 'UKY-8475',
    name: 'Rohan Deshmukh & Friends',
    phone: '+91 97654 32198',
    email: 'rohan.desh@techm.com',
    destination: 'Chopta Tungnath & Chandrashila',
    packageName: 'Chopta Tungnath & Chandrashila Alpine Trek',
    travelDate: '2026-10-02',
    travellers: '6 Youths',
    budget: 'Adventure / Camps',
    specialRequests: 'College reunion trek; need dome tents at Deoriatal and alpine guide for Chandrashila sunrise.',
    status: 'Pending',
    staffNotes: 'Fresh lead from Instagram campaign. Requires group discount breakdown.',
    createdAt: '2026-09-12T18:45:00.000Z',
    source: 'Custom Planner',
    totalAmountEstimated: 54000
  },
  {
    id: 'UKY-8461',
    name: 'Suresh Chandra Sharma',
    phone: '+91 98112 34567',
    email: 'scsharma.advocate@delhibar.in',
    destination: 'Yamunotri & Gangotri',
    packageName: 'Do Dham Sacred Pilgrimage',
    travelDate: '2026-10-25',
    travellers: '3 Adults',
    budget: 'Standard',
    specialRequests: 'Pickup required from Dehradun Airport (Jolly Grant) with Hindi speaking driver.',
    status: 'Completed',
    staffNotes: 'Trip concluded successfully. Client left 5-star review.',
    createdAt: '2026-09-08T11:20:00.000Z',
    source: 'Enquiry Modal',
    totalAmountEstimated: 68000
  },
  {
    id: 'UKY-8453',
    name: 'Aakash Mehra',
    phone: '+91 99887 76655',
    email: 'aakash.m@startup.co',
    destination: 'Valley of Flowers & Hemkund',
    packageName: 'Valley of Flowers UNESCO Floral Sanctuary Trek',
    travelDate: '2026-09-28',
    travellers: '2 Trekkers',
    budget: 'Standard',
    specialRequests: 'Looking for botanical flora guide and pony assistance if needed.',
    status: 'Cancelled',
    staffNotes: 'Cancelled due to client work emergency. Deposit credit note issued for next season.',
    createdAt: '2026-09-05T16:10:00.000Z',
    source: 'Booking Page',
    totalAmountEstimated: 38000
  }
];

// Seed initial weather advisories
const INITIAL_WEATHER: AdminWeatherAdvisory[] = [
  {
    id: 'w-1',
    hub: 'Kedarnath Dham',
    altitude: '3,584 m',
    temp: '6°C / -2°C',
    condition: 'Partly Cloudy',
    yatraStatus: 'Registration Mandatory',
    statusColor: 'emerald',
    roadStatus: 'Sonprayag to Gaurikund operational; Trek open',
    nightAdvisory: 'Night temperature below 0°C. Heavy winter thermals mandatory.',
    lastUpdated: 'Today, 06:00 AM'
  },
  {
    id: 'w-2',
    hub: 'Badrinath Dham',
    altitude: '3,300 m',
    temp: '9°C / 2°C',
    condition: 'Clear Skies',
    yatraStatus: 'Clear & Open',
    statusColor: 'emerald',
    roadStatus: 'Joshimath to Badrinath NH-7 smooth traffic',
    nightAdvisory: 'Chilly morning and evening winds. Light woollens during day.',
    lastUpdated: 'Today, 06:00 AM'
  },
  {
    id: 'w-3',
    hub: 'Gangotri Dham',
    altitude: '3,100 m',
    temp: '11°C / 4°C',
    condition: 'Sunny & Pleasant',
    yatraStatus: 'Clear & Open',
    statusColor: 'emerald',
    roadStatus: 'Uttarkashi - Harsil Highway all clear',
    nightAdvisory: 'Pleasant daytime weather; light jacket recommended.',
    lastUpdated: 'Today, 06:00 AM'
  },
  {
    id: 'w-4',
    hub: 'Yamunotri Dham',
    altitude: '3,291 m',
    temp: '8°C / 1°C',
    condition: 'Mild Fog in Morning',
    yatraStatus: 'Registration Mandatory',
    statusColor: 'amber',
    roadStatus: 'Barkot to Janki Chatti clear; 6 km trek dry',
    nightAdvisory: 'Evening cool breezes; carry windproof fleece jackets.',
    lastUpdated: 'Today, 06:00 AM'
  }
];

const INITIAL_SETTINGS: AdminSettings = {
  phone: SITE_CONFIG.phone,
  whatsapp: SITE_CONFIG.whatsappNumber,
  email: SITE_CONFIG.email,
  address: SITE_CONFIG.address,
  upiId: 'ukyatra@icici',
  activeSeason: 'Autumn & Char Dham Pilgrimage 2026',
  adminPasswordHash: 'ukyatra321'
};

export const adminStorage = {
  // --- BOOKINGS & LEADS ---
  getBookings: (): AdminBooking[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
      if (!stored) {
        localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(INITIAL_BOOKINGS));
        return INITIAL_BOOKINGS;
      }
      return JSON.parse(stored);
    } catch {
      return INITIAL_BOOKINGS;
    }
  },

  addBooking: (booking: Omit<AdminBooking, 'id' | 'createdAt' | 'status'>): AdminBooking => {
    const bookings = adminStorage.getBookings();
    const newBooking: AdminBooking = {
      ...booking,
      id: `UKY-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
      status: 'Pending'
    };
    const updated = [newBooking, ...bookings];
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(updated));
    return newBooking;
  },

  updateBookingStatus: (id: string, status: BookingStatus, notes?: string): void => {
    const bookings = adminStorage.getBookings();
    const updated = bookings.map(b => {
      if (b.id === id) {
        return {
          ...b,
          status,
          ...(notes !== undefined ? { staffNotes: notes } : {})
        };
      }
      return b;
    });
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(updated));
  },

  deleteBooking: (id: string): void => {
    const bookings = adminStorage.getBookings();
    const updated = bookings.filter(b => b.id !== id);
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(updated));
  },

  exportBookingsCSV: (): void => {
    const bookings = adminStorage.getBookings();
    if (!bookings.length) return;

    const headers = ['Booking ID', 'Date', 'Customer Name', 'Phone', 'Email', 'Destination', 'Package', 'Travel Date', 'Travellers', 'Budget', 'Status', 'Estimated Revenue (INR)', 'Special Notes', 'Staff Remarks'];
    const rows = bookings.map(b => [
      b.id,
      new Date(b.createdAt).toLocaleDateString('en-IN'),
      `"${(b.name || '').replace(/"/g, '""')}"`,
      `"${b.phone || ''}"`,
      `"${b.email || ''}"`,
      `"${(b.destination || '').replace(/"/g, '""')}"`,
      `"${(b.packageName || '').replace(/"/g, '""')}"`,
      `"${b.travelDate || 'Flexible'}"`,
      `"${b.travellers || ''}"`,
      `"${b.budget || ''}"`,
      b.status,
      b.totalAmountEstimated || 0,
      `"${(b.specialRequests || '').replace(/"/g, '""')}"`,
      `"${(b.staffNotes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `UKYatra_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  // --- TOUR PACKAGES ---
  getPackages: (): TourPackage[] => {
    try {
      ['ukyatra_admin_packages', 'ukyatra_admin_packages_v2', 'ukyatra_admin_packages_v3'].forEach(k => {
        if (localStorage.getItem(k)) localStorage.removeItem(k);
      });
      const stored = localStorage.getItem(STORAGE_KEYS.PACKAGES);
      if (!stored) {
        localStorage.setItem(STORAGE_KEYS.PACKAGES, JSON.stringify([]));
        return [];
      }
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  },

  savePackages: (packages: TourPackage[]) => {
    localStorage.setItem(STORAGE_KEYS.PACKAGES, JSON.stringify(packages));
  },

  addPackage: (pkg: TourPackage): TourPackage => {
    const list = adminStorage.getPackages();
    const updated = [pkg, ...list];
    adminStorage.savePackages(updated);
    return pkg;
  },

  deletePackage: (id: string): void => {
    const list = adminStorage.getPackages();
    const updated = list.filter(p => p.id !== id);
    adminStorage.savePackages(updated);
  },

  // --- WEATHER ADVISORIES ---
  getWeather: (): AdminWeatherAdvisory[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.WEATHER);
      if (!stored) {
        localStorage.setItem(STORAGE_KEYS.WEATHER, JSON.stringify(INITIAL_WEATHER));
        return INITIAL_WEATHER;
      }
      return JSON.parse(stored);
    } catch {
      return INITIAL_WEATHER;
    }
  },

  updateWeatherHub: (id: string, updates: Partial<AdminWeatherAdvisory>): void => {
    const list = adminStorage.getWeather();
    const updated = list.map(item => {
      if (item.id === id) {
        return {
          ...item,
          ...updates,
          lastUpdated: `Updated ${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}`
        };
      }
      return item;
    });
    localStorage.setItem(STORAGE_KEYS.WEATHER, JSON.stringify(updated));
  },

  // --- REVIEWS ---
  getReviews: () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.REVIEWS);
      if (!stored) {
        localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(REVIEWS));
        return REVIEWS;
      }
      return JSON.parse(stored);
    } catch {
      return REVIEWS;
    }
  },

  saveReviews: (reviews: typeof REVIEWS) => {
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
  },

  // --- SETTINGS ---
  getSettings: (): AdminSettings => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (!stored) {
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(INITIAL_SETTINGS));
        return INITIAL_SETTINGS;
      }
      const parsed = JSON.parse(stored);
      if (parsed && (parsed.adminPasswordHash === 'ukyatra2026' || !parsed.adminPasswordHash)) {
        parsed.adminPasswordHash = 'ukyatra321';
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(parsed));
      }
      return parsed;
    } catch {
      return INITIAL_SETTINGS;
    }
  },

  saveSettings: (settings: AdminSettings): void => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  },

  // --- RESET DEMO DATA ---
  resetAllDemoData: (): void => {
    localStorage.removeItem(STORAGE_KEYS.BOOKINGS);
    localStorage.removeItem(STORAGE_KEYS.PACKAGES);
    localStorage.removeItem(STORAGE_KEYS.WEATHER);
    localStorage.removeItem(STORAGE_KEYS.REVIEWS);
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
  }
};

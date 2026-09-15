import React, { useState } from 'react';
import { 
  Car, 
  ShieldCheck, 
  Users, 
  Fuel, 
  MapPin, 
  CheckCircle2, 
  Phone, 
  Sparkles,
  Clock,
  ArrowRight
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';
import { adminStorage } from '../utils/adminStorage';

interface CarRentalPageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const CarRentalPage: React.FC<CarRentalPageProps> = ({ onOpenBookingModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'SUVs & MUVs',
    'Sedans & Hatchbacks',
    'Tempo Travellers',
    'Luxury & VIP',
    'Buses & Coaches'
  ];

  const vehicleShowcase = [
    // --- SUVS & MUVS ---
    {
      id: 'innova-crysta',
      name: 'Toyota Innova Crysta',
      category: 'SUVs & MUVs',
      sub: 'Luxury 6+1 / 7+1 SUV',
      capacity: '6-7 Seater',
      luggage: '4 Large Bags',
      rate: 'From ₹4,500 / day',
      perKm: '₹18 / km',
      badge: 'Most Popular',
      desc: 'Reclining captain seats, dual AC & mountain heating, roof carrier, hill certified driver. Prime choice for Char Dham.',
      image: '/images/vehicles/innova-crysta.jpg'
    },
    {
      id: 'innova-hycross',
      name: 'Toyota Innova Hycross',
      category: 'SUVs & MUVs',
      sub: 'Next-Gen Hybrid 7-Seater',
      capacity: '6-7 Seater',
      luggage: '4 Large Bags',
      rate: 'From ₹5,500 / day',
      perKm: '₹22 / km',
      badge: 'Eco Premium',
      desc: 'Ultra-silent hybrid engine, Ottoman lounge seating, panoramic sunroof, superior ride comfort on winding hills.',
      image: '/images/vehicles/innova-hycross.jpg'
    },
    {
      id: 'maruti-ertiga',
      name: 'Maruti Suzuki Ertiga',
      category: 'SUVs & MUVs',
      sub: 'Economy 4+1 MUV',
      capacity: '4-5 Seater',
      luggage: '2-3 Bags',
      rate: 'From ₹3,200 / day',
      perKm: '₹14 / km',
      badge: 'Economical Family',
      desc: 'Comfortable 3-row seating, high fuel mileage, clean sanitized interiors, ideal for budget family trips.',
      image: '/images/vehicles/maruti-ertiga.jpg'
    },
    {
      id: 'kia-carens',
      name: 'Kia Carens Luxury',
      category: 'SUVs & MUVs',
      sub: 'Family 6/7 Seater RV',
      capacity: '6 Seater',
      luggage: '3 Bags',
      rate: 'From ₹3,600 / day',
      perKm: '₹15 / km',
      badge: 'Modern Comfort',
      desc: 'Ventilated seats, individual AC vents for all 3 rows, sky roof, hill-start assist and premium suspension.',
      image: '/images/vehicles/kia-carens.jpg'
    },
    {
      id: 'toyota-fortuner',
      name: 'Toyota Fortuner (4x4)',
      category: 'SUVs & MUVs',
      sub: 'Full-Size 4WD Mountain SUV',
      capacity: '6-7 Seater',
      luggage: '5 Bags',
      rate: 'From ₹8,500 / day',
      perKm: '₹35 / km',
      badge: 'VIP 4x4 Off-Road',
      desc: 'High ground clearance, unstoppable 4x4 power for snow ghats, rugged stance, VIP mountain convoy status.',
      image: '/images/vehicles/toyota-fortuner.jpg'
    },
    {
      id: 'mahindra-scorpio-thar',
      name: 'Mahindra Scorpio-N / Thar',
      category: 'SUVs & MUVs',
      sub: 'Adventure 4x4 Off-Roader',
      capacity: '4-6 Seater',
      luggage: '3 Bags',
      rate: 'From ₹4,800 / day',
      perKm: '₹20 / km',
      badge: 'Trek & Adventure',
      desc: 'Built for high altitude mountain passes, rough terrain, Chopta-Tungnath, Mana Pass, and rugged trails.',
      image: '/images/vehicles/mahindra-scorpio-thar.jpg'
    },

    // --- SEDANS & HATCHBACKS ---
    {
      id: 'maruti-dzire',
      name: 'Maruti Suzuki Dzire',
      category: 'Sedans & Hatchbacks',
      sub: 'Prime Sedan 4+1',
      capacity: '4 Seater',
      luggage: '2-3 Bags',
      rate: 'From ₹2,800 / day',
      perKm: '₹11 / km',
      badge: 'Best Seller Sedan',
      desc: 'Smooth highway cruise, spacious legroom, climate control, perfect for airport transfers & Dehradun/Haridwar.',
      image: '/images/vehicles/maruti-dzire.jpg'
    },
    {
      id: 'toyota-etios-aura',
      name: 'Toyota Etios / Hyundai Aura',
      category: 'Sedans & Hatchbacks',
      sub: 'Comfort Outstation Sedan',
      capacity: '4 Seater',
      luggage: '3 Bags',
      rate: 'From ₹2,900 / day',
      perKm: '₹12 / km',
      badge: 'Budget Executive',
      desc: 'Generous luggage boot, comfortable seating for long ghat drives, seasoned mountain-certified driver.',
      image: '/images/vehicles/toyota-etios-aura.jpg'
    },
    {
      id: 'maruti-swift-wagonr',
      name: 'Maruti Swift / WagonR',
      category: 'Sedans & Hatchbacks',
      sub: 'Compact Hatchback',
      capacity: '3-4 Seater',
      luggage: '2 Bags',
      rate: 'From ₹2,200 / day',
      perKm: '₹10 / km',
      badge: 'Economy Choice',
      desc: 'Pocket-friendly city & hill tours, nimble mountain handling, easy parking in Mussoorie & Nainital.',
      image: '/images/vehicles/maruti-swift-wagonr.jpg'
    },

    // --- TEMPO TRAVELLERS ---
    {
      id: 'tempo-traveller-12-26',
      name: 'Force Tempo Traveller',
      category: 'Tempo Travellers',
      sub: '12 / 16 / 26 Seater Coach',
      capacity: '12-26 Seater',
      luggage: '12+ Bags',
      rate: 'From ₹7,500 / day',
      perKm: '₹24 / km',
      badge: 'Best for Groups',
      desc: '2x1 pushback luxury seats, high clearance suspension, LCD screen, commercial hill permit certified.',
      image: '/images/vehicles/tempo-traveller-12-26.jpg'
    },
    {
      id: 'tempo-traveller-maharaja',
      name: 'Maharaja Luxury Traveller',
      category: 'Tempo Travellers',
      sub: 'Royal 1x1 Sofa Seating',
      capacity: '9-12 Seater',
      luggage: '10 Bags',
      rate: 'From ₹8,500 / day',
      perKm: '₹28 / km',
      badge: 'Maharaja Class',
      desc: '1x1 plush maharaja recliner sofas, ambient mood lighting, USB for every seat, ice box and music setup.',
      image: '/images/vehicles/tempo-traveller-maharaja.jpg'
    },
    {
      id: 'force-urbania',
      name: 'Force Urbania Van',
      category: 'Tempo Travellers',
      sub: 'VIP Luxury 10-13 Seater',
      capacity: '10-13 Seater',
      luggage: '8+ Bags',
      rate: 'From ₹9,500 / day',
      perKm: '₹32 / km',
      badge: 'Executive VIP',
      desc: 'Aircraft style luxury seating, panoramic tinted windows, individual USB charging, air suspension.',
      image: '/images/vehicles/force-urbania.jpg'
    },

    // --- LUXURY & VIP ---
    {
      id: 'toyota-vellfire',
      name: 'Toyota Vellfire Lounge',
      category: 'Luxury & VIP',
      sub: 'Ultra-Luxury Executive Lounge',
      capacity: '6 Seater',
      luggage: '4 Bags',
      rate: 'From ₹18,000 / day',
      perKm: '₹75 / km',
      badge: 'Ultra Luxury',
      desc: 'First-class airline lounge seating, heated massage recliners, dual sunroof, presidential luxury.',
      image: '/images/vehicles/toyota-vellfire.jpg'
    },
    {
      id: 'kia-carnival',
      name: 'Kia Carnival Limousine',
      category: 'Luxury & VIP',
      sub: 'VIP 7-Seater Luxury MUV',
      capacity: '7 Seater',
      luggage: '5 Bags',
      rate: 'From ₹7,500 / day',
      perKm: '₹30 / km',
      badge: 'VIP Limousine',
      desc: 'Generous stand-up headroom, VIP captain recliners, smart dual electric doors, quiet cabin insulation.',
      image: '/images/vehicles/kia-carnival.jpg'
    },
    {
      id: 'mercedes-benz',
      name: 'Mercedes-Benz E / S-Class',
      category: 'Luxury & VIP',
      sub: 'Elite Wedding & VIP Sedan',
      capacity: '4 Seater',
      luggage: '3 Bags',
      rate: 'From ₹14,000 / day',
      perKm: '₹55 / km',
      badge: 'Royal Luxury',
      desc: 'World-class comfort, elite presence for destination weddings, luxury corporate retreats, and dignitaries.',
      image: '/images/vehicles/mercedes-benz.jpg'
    },

    // --- BUSES & COACHES ---
    {
      id: 'mini-bus-27',
      name: '27-Seater Deluxe Mini Bus',
      category: 'Buses & Coaches',
      sub: 'Char Dham Group Mini Coach',
      capacity: '27 Seater',
      luggage: '25+ Bags',
      rate: 'From ₹12,000 / day',
      perKm: '₹42 / km',
      badge: 'Group Pilgrimage',
      desc: '2x2 pushback seats, dedicated roof carrier, microphone & sound system, commercial hill permit.',
      image: '/images/vehicles/mini-bus-27.jpg'
    },
    {
      id: 'volvo-bus-45-52',
      name: '45 / 52-Seater Volvo Coach',
      category: 'Buses & Coaches',
      sub: 'Large Group Pilgrimage Bus',
      capacity: '45-52 Seater',
      luggage: '50+ Bags',
      rate: 'From ₹16,500 / day',
      perKm: '₹55 / km',
      badge: 'Yatra Delegation',
      desc: 'Large yatra samitis, school & corporate tours, underbelly luggage decks, air suspension for smooth travel.',
      image: '/images/vehicles/volvo-bus-45-52.jpg'
    }
  ];

  const popularRoutes = [
    { from: 'Dehradun Airport (Jolly Grant)', to: 'Rishikesh / Haridwar', time: '45 mins', price: '₹1,400' },
    { from: 'Dehradun Airport', to: 'Mussoorie Queen of Hills', time: '2 hrs', price: '₹2,500' },
    { from: 'Haridwar / Rishikesh', to: 'Guptkashi / Sonprayag (Kedarnath Base)', time: '7 - 8 hrs', price: '₹5,500 / day' },
    { from: 'Haridwar / Rishikesh', to: 'Joshimath / Badrinath', time: '9 - 10 hrs', price: '₹6,000 / day' },
    { from: 'Complete Char Dham Circuit (10 Days)', to: 'All 4 Shrines ex-Haridwar', time: '10 Days', price: 'Custom fixed package' },
    { from: 'Delhi NCR', to: 'Rishikesh / Dehradun', time: '5 hrs (Expressway)', price: '₹4,800' }
  ];

  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    pickup: 'Dehradun Airport (Jolly Grant)',
    drop: 'Rishikesh / Haridwar',
    vehicle: 'Toyota Innova Crysta (Luxury 6+1 / 7+1)',
    date: '',
    passengers: '2-4 Passengers',
    tripType: 'Multi-Day Hill Tour'
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    adminStorage.addBooking({
      name: bookingForm.name,
      phone: bookingForm.phone,
      email: '',
      destination: `${bookingForm.pickup} to ${bookingForm.drop}`,
      packageName: `Taxi Rental - ${bookingForm.vehicle}`,
      travelDate: bookingForm.date,
      travellers: bookingForm.passengers,
      budget: bookingForm.tripType,
      specialRequests: `Pickup: ${bookingForm.pickup}, Drop: ${bookingForm.drop}, Trip: ${bookingForm.tripType}`,
      source: 'Car Rental Page Form'
    });
    setBookingSubmitted(true);
  };

  const handleWhatsAppInstant = () => {
    const text = `Hi UKYatra, I would like to book a vehicle!\n*Name:* ${bookingForm.name || 'Traveler'}\n*Phone:* ${bookingForm.phone || 'Provided'}\n*Vehicle:* ${bookingForm.vehicle}\n*Pickup:* ${bookingForm.pickup}\n*Drop:* ${bookingForm.drop}\n*Date:* ${bookingForm.date || 'Flexible'}\n*Passengers:* ${bookingForm.passengers}\n*Trip Type:* ${bookingForm.tripType}`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Book Your Vehicle & Cab Rentals' }]} />

        {/* Hero & Quick Vehicle Booking Form Grid */}
        <div className="relative rounded-3xl overflow-hidden mb-16 cream-banner p-6 sm:p-10 lg:p-12 shadow-sm border border-[#E2DDD5]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider">
                <Car className="w-3.5 h-3.5" />
                <span>Sanitized Himalayan Fleets & Hill Certified Drivers</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
                Book Your Vehicle & <br />
                <span className="text-brand-orange">Uttarakhand Hill Taxi</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium max-w-xl">
                Pre-book verified mountain SUVs, luxury tempo travellers, and sanitized cabs. 
                Transparent per-day rates, seasoned hill drivers, 24/7 breakdown backup, and commercial permits for all Uttarakhand routes.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white/80 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="text-brand-orange font-bold text-sm">₹3,200/day</div>
                  <div className="text-[11px] text-slate-600 font-medium">Starting Rates</div>
                </div>
                <div className="p-3 bg-white/80 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="text-emerald-600 font-bold text-sm">100% Hill Safe</div>
                  <div className="text-[11px] text-slate-600 font-medium">Verified Mountain Drivers</div>
                </div>
                <div className="p-3 bg-white/80 rounded-2xl border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
                  <div className="text-sky-600 font-bold text-sm">Zero Surcharge</div>
                  <div className="text-[11px] text-slate-600 font-medium">Transparent Pricing</div>
                </div>
              </div>
            </div>

            {/* Right Quick Booking Card */}
            <div className="lg:col-span-5 bg-white border border-brand-orange/30 rounded-3xl p-6 shadow-xl relative">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-orange-50 text-brand-orange">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold font-display text-slate-900 text-sm">Instant Vehicle Booking</h3>
                    <p className="text-[11px] text-slate-500">Fixed Himalayan rates & live availability</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Live
                </span>
              </div>

              {!bookingSubmitted ? (
                <form onSubmit={handleBookingSubmit} className="space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Pickup Location</label>
                      <select
                        value={bookingForm.pickup}
                        onChange={(e) => setBookingForm({ ...bookingForm, pickup: e.target.value })}
                        className="w-full bg-[#F5F3EF] border border-slate-200 rounded-xl px-2.5 py-2 text-slate-800 focus:outline-none focus:border-brand-orange text-xs"
                      >
                        <option value="Dehradun Airport (Jolly Grant)">Dehradun Airport</option>
                        <option value="Haridwar Railway Station">Haridwar Station</option>
                        <option value="Rishikesh">Rishikesh</option>
                        <option value="Kathgodam / Haldwani">Kathgodam / Haldwani</option>
                        <option value="Delhi NCR (Pickup)">Delhi NCR</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Destination</label>
                      <select
                        value={bookingForm.drop}
                        onChange={(e) => setBookingForm({ ...bookingForm, drop: e.target.value })}
                        className="w-full bg-[#F5F3EF] border border-slate-200 rounded-xl px-2.5 py-2 text-slate-800 focus:outline-none focus:border-brand-orange text-xs"
                      >
                        <option value="Kedarnath (Sonprayag)">Kedarnath Base</option>
                        <option value="Badrinath & Joshimath">Badrinath & Joshimath</option>
                        <option value="Complete Char Dham (10D)">Char Dham Circuit</option>
                        <option value="Mussoorie Queen of Hills">Mussoorie</option>
                        <option value="Nainital Lake Tour">Nainital</option>
                        <option value="Auli & Chopta">Auli & Chopta</option>
                        <option value="Jim Corbett National Park">Jim Corbett</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Select Vehicle</label>
                    <select
                      value={bookingForm.vehicle}
                      onChange={(e) => setBookingForm({ ...bookingForm, vehicle: e.target.value })}
                      className="w-full bg-[#F5F3EF] border border-slate-200 rounded-xl px-2.5 py-2 text-slate-900 font-medium focus:outline-none focus:border-brand-orange text-xs"
                    >
                      <optgroup label="Popular SUVs & MUVs">
                        <option value="Toyota Innova Crysta">Toyota Innova Crysta (6+1 SUV) - ₹4,500/day</option>
                        <option value="Toyota Innova Hycross">Toyota Innova Hycross (Hybrid 7s) - ₹5,500/day</option>
                        <option value="Maruti Suzuki Ertiga">Maruti Suzuki Ertiga (4-5 Pax MUV) - ₹3,200/day</option>
                        <option value="Kia Carens Luxury">Kia Carens Luxury (6 Seater) - ₹3,600/day</option>
                        <option value="Toyota Fortuner (4x4)">Toyota Fortuner 4x4 (Off-Road Beast) - ₹8,500/day</option>
                        <option value="Mahindra Scorpio-N / Thar">Mahindra Scorpio-N / Thar 4x4 - ₹4,800/day</option>
                      </optgroup>
                      <optgroup label="Sedans & Hatchbacks">
                        <option value="Maruti Suzuki Dzire">Maruti Suzuki Dzire (Sedan 4+1) - ₹2,800/day</option>
                        <option value="Toyota Etios / Hyundai Aura">Toyota Etios / Hyundai Aura - ₹2,900/day</option>
                        <option value="Maruti Swift / WagonR">Maruti Swift / WagonR (Hatchback) - ₹2,200/day</option>
                      </optgroup>
                      <optgroup label="Tempo Travellers & Vans">
                        <option value="Force Tempo Traveller (12-26s)">Force Tempo Traveller (12/16/26s) - ₹7,500/day</option>
                        <option value="Maharaja Luxury Traveller">Maharaja Luxury Traveller (1x1 Sofas) - ₹8,500/day</option>
                        <option value="Force Urbania Van">Force Urbania VIP Van (10-13s) - ₹9,500/day</option>
                      </optgroup>
                      <optgroup label="Executive & Luxury Fleet">
                        <option value="Toyota Vellfire Lounge">Toyota Vellfire VIP Lounge - ₹18,000/day</option>
                        <option value="Kia Carnival Limousine">Kia Carnival Limousine - ₹7,500/day</option>
                        <option value="Mercedes-Benz E / S-Class">Mercedes-Benz E/S-Class - ₹14,000/day</option>
                      </optgroup>
                      <optgroup label="Group Pilgrimage Coaches">
                        <option value="27-Seater Deluxe Mini Bus">27-Seater Deluxe Mini Bus - ₹12,000/day</option>
                        <option value="45 / 52-Seater Volvo Coach">45/52-Seater Volvo Bus - ₹16,500/day</option>
                      </optgroup>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Travel Date</label>
                      <input
                        type="date"
                        required
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        className="w-full bg-[#F5F3EF] border border-slate-200 rounded-xl px-2.5 py-2 text-slate-800 focus:outline-none focus:border-brand-orange text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Passengers</label>
                      <select
                        value={bookingForm.passengers}
                        onChange={(e) => setBookingForm({ ...bookingForm, passengers: e.target.value })}
                        className="w-full bg-[#F5F3EF] border border-slate-200 rounded-xl px-2.5 py-2 text-slate-800 focus:outline-none focus:border-brand-orange text-xs"
                      >
                        <option value="1-2 Passengers">1-2 Passengers</option>
                        <option value="3-5 Passengers">3-5 Passengers</option>
                        <option value="6-7 Passengers">6-7 Passengers</option>
                        <option value="8-12 Passengers">8-12 Passengers</option>
                        <option value="12+ Passengers">12+ Passengers</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Amit Kumar"
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        className="w-full bg-[#F5F3EF] border border-slate-200 rounded-xl px-2.5 py-2 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 9876543210"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        className="w-full bg-[#F5F3EF] border border-slate-200 rounded-xl px-2.5 py-2 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange text-xs"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      type="submit"
                      className="w-full orange-gradient-btn py-2.5 rounded-xl font-display font-semibold text-xs text-white shadow-md flex items-center justify-center gap-1.5"
                    >
                      <Car className="w-3.5 h-3.5" />
                      <span>Reserve This Vehicle</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppInstant}
                      className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                      <span>Get Instant WhatsApp Quote</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base font-display">
                    Booking Request Sent!
                  </h4>
                  <p className="text-xs text-slate-600">
                    Thank you <strong>{bookingForm.name}</strong>! Our fleet manager is checking driver availability for your <strong>{bookingForm.vehicle}</strong> and will call you shortly.
                  </p>
                  <button
                    onClick={handleWhatsAppInstant}
                    className="w-full orange-gradient-btn py-2.5 rounded-xl font-semibold text-xs text-white shadow-md flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    <span>Speed Up on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setBookingSubmitted(false)}
                    className="text-[11px] text-slate-400 hover:text-brand-orange underline block mx-auto pt-1"
                  >
                    Book another vehicle
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* BOOK YOUR VEHICLE / FLEET SHOWCASE */}
      {/* ============================================================ */}
      <section className="py-24 relative overflow-hidden border-y border-white/10 mb-16">
        {/* Scenic Mountains and River Valley Road Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=2069&auto=format&fit=crop"
            alt="Mountains and River Valley Road"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
                <Car className="w-3.5 h-3.5" />
                <span>Sanitized Himalayan Fleets</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white">
                Book Your <span className="text-brand-orange">Vehicle</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl font-medium">
                Clean, sanitized SUVs and mini coaches with verified hill drivers for Char Dham, airport transfers, and outstation tours.
              </p>
            </div>

            <a
              href="#fare-chart"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:underline cursor-pointer"
            >
              <span>View Full Fleet & Fixed Fare Chart</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {categories.map((cat) => {
              const count = cat === 'All' ? vehicleShowcase.length : vehicleShowcase.filter(v => v.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    selectedCategory === cat
                      ? 'orange-gradient-btn text-white shadow-lg shadow-brand-orange/30 scale-105'
                      : 'bg-brand-card/80 hover:bg-brand-card text-slate-300 border border-white/10 hover:border-white/20'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedCategory === cat ? 'bg-white/25 text-white' : 'bg-white/10 text-slate-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Vehicle Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(selectedCategory === 'All' ? vehicleShowcase : vehicleShowcase.filter(v => v.category === selectedCategory)).map((v) => (
              <div 
                key={v.id}
                className="bg-brand-card border border-white/10 hover:border-brand-orange/40 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                    <img
                      src={v.image}
                      alt={v.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-brand-orange text-white font-bold text-[10px] uppercase shadow-md">
                      {v.badge}
                    </span>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15">
                        {v.rate}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-md border border-brand-orange/20">
                        {v.category}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-400">
                        {v.perKm}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base text-white group-hover:text-brand-orange transition-colors">
                      {v.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium mb-3">
                      {v.sub}
                    </p>

                    <div className="flex items-center gap-3 text-[11px] text-slate-300 py-2 border-y border-white/10 mb-3">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-brand-orange" />
                        <span>{v.capacity}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Hill Driver</span>
                      </span>
                      <span className="text-slate-400 text-[10px]">
                        {v.luggage}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                      {v.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 space-y-2">
                  <button
                    onClick={() => {
                      setBookingForm(prev => ({ ...prev, vehicle: v.name }));
                      onOpenBookingModal(`Taxi Rental - ${v.name}`);
                    }}
                    className="w-full orange-gradient-btn py-2.5 rounded-xl font-display font-semibold text-xs text-white text-center shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Car className="w-3.5 h-3.5" />
                    <span>Book This Vehicle</span>
                  </button>
                  <a
                    href={getWhatsAppUrl(`Hi UKYatra, I would like to book or inquire about ${v.name} (${v.rate}, ${v.perKm}) taxi rental.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-center font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-emerald-400" />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 border border-brand-orange/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-brand-orange/20 text-brand-orange shrink-0">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white font-display">
                  Need an Outstation Cab or Complete 10-Day Char Dham Vehicle?
                </h4>
                <p className="text-xs text-slate-300">
                  We provide dedicated mountain vehicles with permit, driver allowance, and toll estimates included.
                </p>
              </div>
            </div>
            <a
              href="#fare-chart"
              className="orange-gradient-btn px-6 py-2.5 rounded-xl text-xs font-bold text-white whitespace-nowrap shadow-lg shrink-0 cursor-pointer"
            >
              Explore Fleet & Fares
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Transparent Per-KM & Daily Outstation Rate Chart (Rajputana Cabs Model) */}
        <div id="fare-chart" className="bg-white border border-[#E2DDD5] rounded-3xl p-6 sm:p-10 mb-12 shadow-sm scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Rajputana Standard Fare Transparency</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                Outstation & Uttarakhand Per-KM Taxi Fare Chart
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Standard outstation rates per km, estimated 250 KM daily package, and driver allowance.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 self-start sm:self-auto flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Zero Surge & Fixed Tariffs</span>
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider">
                  <th className="pb-3 font-semibold">Vehicle Category & Model</th>
                  <th className="pb-3 font-semibold">Capacity</th>
                  <th className="pb-3 font-semibold">Per KM Rate</th>
                  <th className="pb-3 font-semibold">Est. Day Rate (250 KM)</th>
                  <th className="pb-3 font-semibold">Driver Allowance</th>
                  <th className="pb-3 font-semibold text-right">Instant Booking</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  { name: 'Maruti Swift / WagonR (Hatchback)', pax: '3-4 Pax', perKm: '₹10 / km', dayRate: '₹2,500 / day', driver: '₹300 / day' },
                  { name: 'Maruti Suzuki Dzire / Etios (Sedan)', pax: '4 Pax', perKm: '₹11 - ₹12 / km', dayRate: '₹2,800 - ₹3,000 / day', driver: '₹300 / day' },
                  { name: 'Maruti Ertiga (MUV)', pax: '5-6 Pax', perKm: '₹14 / km', dayRate: '₹3,500 / day', driver: '₹400 / day' },
                  { name: 'Kia Carens (Family RV)', pax: '6 Pax', perKm: '₹15 / km', dayRate: '₹3,750 / day', driver: '₹400 / day' },
                  { name: 'Toyota Innova Crysta (Luxury SUV)', pax: '6-7 Pax', perKm: '₹18 / km', dayRate: '₹4,500 / day', driver: '₹500 / day' },
                  { name: 'Toyota Innova Hycross (Hybrid 7s)', pax: '6-7 Pax', perKm: '₹22 / km', dayRate: '₹5,500 / day', driver: '₹500 / day' },
                  { name: 'Mahindra Scorpio-N / Thar (4x4)', pax: '4-6 Pax', perKm: '₹20 / km', dayRate: '₹5,000 / day', driver: '₹500 / day' },
                  { name: 'Toyota Fortuner (4x4 Beast)', pax: '6-7 Pax', perKm: '₹35 / km', dayRate: '₹8,500 / day', driver: '₹600 / day' },
                  { name: 'Force Tempo Traveller (12-16s)', pax: '12-16 Pax', perKm: '₹24 / km', dayRate: '₹6,000 - ₹7,500 / day', driver: '₹500 / day' },
                  { name: 'Maharaja Luxury Traveller (1x1)', pax: '9-12 Pax', perKm: '₹28 / km', dayRate: '₹8,500 / day', driver: '₹600 / day' },
                  { name: 'Force Urbania VIP Van (10-13s)', pax: '10-13 Pax', perKm: '₹32 / km', dayRate: '₹9,500 / day', driver: '₹600 / day' },
                  { name: 'Kia Carnival Limousine', pax: '7 Pax', perKm: '₹30 / km', dayRate: '₹7,500 / day', driver: '₹600 / day' },
                  { name: 'Mercedes-Benz E / S-Class', pax: '4 Pax', perKm: '₹55 / km', dayRate: '₹14,000 / day', driver: '₹800 / day' },
                  { name: 'Toyota Vellfire VIP Lounge', pax: '6 Pax', perKm: '₹75 / km', dayRate: '₹18,000 / day', driver: '₹1,000 / day' },
                  { name: '27-Seater Deluxe Mini Bus', pax: '27 Pax', perKm: '₹42 / km', dayRate: '₹12,000 / day', driver: '₹800 / day' },
                  { name: '45 / 52-Seater Volvo Tourist Bus', pax: '45-52 Pax', perKm: '₹55 / km', dayRate: '₹16,500 / day', driver: '₹1,000 / day' }
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-[#F5F3EF]/60 transition-colors">
                    <td className="py-3 font-medium text-slate-900">{item.name}</td>
                    <td className="py-3 text-slate-600">{item.pax}</td>
                    <td className="py-3 font-bold text-brand-orange">{item.perKm}</td>
                    <td className="py-3 font-bold text-emerald-600">{item.dayRate}</td>
                    <td className="py-3 text-slate-500">{item.driver}</td>
                    <td className="py-3 text-right">
                      <button
                        onClick={() => {
                          setBookingForm(prev => ({ ...prev, vehicle: item.name }));
                          onOpenBookingModal(`Taxi Rental - ${item.name}`);
                        }}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg orange-gradient-btn text-white text-[11px] font-semibold cursor-pointer shadow-xs"
                      >
                        <span>Reserve</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
            <span>* Minimum outstation running: 250 km / day. Toll taxes, state border permits, and parking are payable at actuals.</span>
            <span className="text-brand-orange font-semibold">24/7 Roadside Assistance & GPS Verified Fleets</span>
          </div>
        </div>

        {/* Popular Inter-city Fixed Fare Table */}
        <div className="bg-white border border-[#E2DDD5] rounded-3xl p-8 sm:p-12 mb-16 shadow-sm">
          <h2 className="text-2xl font-bold font-display text-slate-900 mb-2">
            Popular Uttarakhand Taxi Routes & Approx Fares
          </h2>
          <p className="text-xs text-slate-600 mb-6">
            Prices include fuel, driver charges, and hill permits. Tolls and state entry taxes as actuals.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider">
                  <th className="pb-3 font-semibold">Origin Point</th>
                  <th className="pb-3 font-semibold">Destination</th>
                  <th className="pb-3 font-semibold">Driving Time</th>
                  <th className="pb-3 font-semibold">Starting Fare</th>
                  <th className="pb-3 font-semibold text-right">Instant Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {popularRoutes.map((route, idx) => (
                  <tr key={idx} className="hover:bg-[#F5F3EF]/60 transition-colors">
                    <td className="py-3.5 font-medium text-slate-900">{route.from}</td>
                    <td className="py-3.5 font-medium text-brand-orange">{route.to}</td>
                    <td className="py-3.5 text-slate-600">{route.time}</td>
                    <td className="py-3.5 font-bold text-emerald-600">{route.price}</td>
                    <td className="py-3.5 text-right">
                      <a
                        href={getWhatsAppUrl(`Hi UKYatra, I want to book a taxi from ${route.from} to ${route.to}.`)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#F5F3EF] hover:bg-brand-orange text-slate-800 hover:text-white border border-[#E2DDD5] text-[11px] font-semibold transition-colors"
                      >
                        <span>Book Taxi</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="text-center bg-white border border-brand-orange/30 rounded-3xl p-8 sm:p-12 shadow-sm">
          <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">
            Need an Outstation Taxi or Long-Term Custom Itinerary Cab?
          </h3>
          <p className="text-xs text-slate-600 max-w-lg mx-auto mb-6">
            Speak to our fleet manager for personalized multi-day taxi hires with flexible schedules and verified drivers.
          </p>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="inline-flex items-center gap-2 orange-gradient-btn px-8 py-3.5 rounded-xl font-display font-semibold text-white shadow-xl shadow-brand-orange/25"
          >
            <Phone className="w-4 h-4" />
            <span>Call Fleet Desk: {SITE_CONFIG.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

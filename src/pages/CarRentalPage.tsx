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
  const [selectedRoute, setSelectedRoute] = useState('All');

  const fleet = [
    {
      id: 'innova-crysta',
      name: 'Toyota Innova Crysta (Luxury 6+1 / 7+1)',
      category: 'Premium SUV',
      capacity: '6 - 7 Passengers',
      luggage: '4 Large Bags',
      rate: 'From ₹4,500 / day',
      tag: 'Most Popular for Families',
      features: ['Rear AC with individual vents', 'Reclining captain seats', 'Emergency hill first-aid kit', 'Carrier for luggage', 'Experienced hill driver'],
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'tempo-traveller',
      name: 'Force Tempo Traveller (12 / 16 / 26 Seater)',
      category: 'Mini Coach',
      capacity: '12 - 26 Passengers',
      luggage: '12+ Bags',
      rate: 'From ₹7,500 / day',
      tag: 'Best for Groups & Yatris',
      features: ['2x1 Pushback luxury seats', 'High-altitude heating & AC', 'LCD screen with sound system', 'Spacious aisle & boot space', 'Commercial hill permit'],
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'maruti-ertiga',
      name: 'Maruti Suzuki Ertiga (Economy MUV)',
      category: 'Budget MUV',
      capacity: '4 - 5 Passengers',
      luggage: '2 - 3 Bags',
      rate: 'From ₹3,200 / day',
      tag: 'Economical Family Choice',
      features: ['Comfortable 3-row seating', 'AC & Music system', 'High fuel efficiency', 'Clean sanitized interiors', 'Punctual pickup'],
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'force-urbania',
      name: 'Force Urbania Ultra-Luxury Van',
      category: 'VIP Luxury Coach',
      capacity: '10 - 13 Passengers',
      luggage: '8+ Bags',
      rate: 'From ₹9,500 / day',
      tag: 'Executive VIP Luxury',
      features: ['Aircraft style seating & ambient lighting', 'Panoramic tinted windows', 'Individual USB ports for each seat', 'Air suspension for smooth ghats', 'Uniformed driver'],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop'
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
    <div className="min-h-screen bg-[#000044] pt-28 pb-20">
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
                        className="w-full bg-[#000044] border border-slate-200 rounded-xl px-2.5 py-2 text-slate-800 focus:outline-none focus:border-brand-orange text-xs"
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
                        className="w-full bg-[#000044] border border-slate-200 rounded-xl px-2.5 py-2 text-slate-800 focus:outline-none focus:border-brand-orange text-xs"
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
                      className="w-full bg-[#000044] border border-slate-200 rounded-xl px-2.5 py-2 text-slate-900 font-medium focus:outline-none focus:border-brand-orange text-xs"
                    >
                      <option value="Toyota Innova Crysta (Luxury 6+1 / 7+1)">Toyota Innova Crysta (6+1 SUV) - ₹4,500/day</option>
                      <option value="Force Tempo Traveller (12 / 16 / 26 Seater)">Force Tempo Traveller (12-26s) - ₹7,500/day</option>
                      <option value="Maruti Suzuki Ertiga (Economy MUV)">Maruti Ertiga (4-5 Pax MUV) - ₹3,200/day</option>
                      <option value="Force Urbania Ultra-Luxury Van">Force Urbania (10-13 Pax VIP) - ₹9,500/day</option>
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
                        className="w-full bg-[#000044] border border-slate-200 rounded-xl px-2.5 py-2 text-slate-800 focus:outline-none focus:border-brand-orange text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Passengers</label>
                      <select
                        value={bookingForm.passengers}
                        onChange={(e) => setBookingForm({ ...bookingForm, passengers: e.target.value })}
                        className="w-full bg-[#000044] border border-slate-200 rounded-xl px-2.5 py-2 text-slate-800 focus:outline-none focus:border-brand-orange text-xs"
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
                        className="w-full bg-[#000044] border border-slate-200 rounded-xl px-2.5 py-2 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange text-xs"
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
                        className="w-full bg-[#000044] border border-slate-200 rounded-xl px-2.5 py-2 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange text-xs"
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

        {/* Vehicle Fleet Grid */}
        <div className="mb-20">
          <div className="mb-10">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">Our Maintained Fleet</span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 mt-1">
              Choose Your Vehicle
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {fleet.map(vehicle => (
              <div 
                key={vehicle.id}
                className="bg-white border border-[#E2DDD5] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all flex flex-col justify-between"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-orange-50 text-brand-orange text-[11px] font-bold uppercase border border-orange-200/80">
                      {vehicle.tag}
                    </span>
                    <span className="text-sm font-bold text-slate-800 bg-[#000044] border border-[#E2DDD5] px-3 py-1 rounded-full">
                      {vehicle.rate}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-900 mb-2">{vehicle.name}</h3>

                  <div className="flex items-center gap-6 text-xs text-slate-600 py-3 border-y border-slate-100 my-4">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-brand-orange" />
                      <span>{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Hill Certified</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-sky-600" />
                      <span>24/7 Available</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {vehicle.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 flex flex-wrap gap-3">
                  <button
                    onClick={() => onOpenBookingModal(`Taxi Rental - ${vehicle.name}`)}
                    className="flex-1 orange-gradient-btn py-3 rounded-xl font-display font-semibold text-xs text-white text-center shadow-lg"
                  >
                    Book This Vehicle
                  </button>
                  <a
                    href={getWhatsAppUrl(`Hi UKYatra, I want to rent ${vehicle.name} for my Uttarakhand journey.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 font-semibold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>
              </div>
            ))}
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
                  <tr key={idx} className="hover:bg-[#000044]/60 transition-colors">
                    <td className="py-3.5 font-medium text-slate-900">{route.from}</td>
                    <td className="py-3.5 font-medium text-brand-orange">{route.to}</td>
                    <td className="py-3.5 text-slate-600">{route.time}</td>
                    <td className="py-3.5 font-bold text-emerald-600">{route.price}</td>
                    <td className="py-3.5 text-right">
                      <a
                        href={getWhatsAppUrl(`Hi UKYatra, I want to book a taxi from ${route.from} to ${route.to}.`)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#000044] hover:bg-brand-orange text-slate-800 hover:text-white border border-[#E2DDD5] text-[11px] font-semibold transition-colors"
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

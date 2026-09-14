import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  CloudSun, 
  Star, 
  Settings, 
  LogOut, 
  ExternalLink, 
  Search, 
  Plus, 
  Download, 
  Filter, 
  Phone, 
  Mail, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  X, 
  Edit3, 
  Trash2, 
  Save, 
  Sparkles, 
  ChevronRight, 
  ArrowUpRight, 
  DollarSign, 
  TrendingUp, 
  Mountain,
  FileText,
  ShieldCheck,
  Check,
  Share2
} from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { AdminLoginPage } from './AdminLoginPage';
import { adminStorage, AdminBooking, BookingStatus, AdminWeatherAdvisory, AdminSettings } from '../../utils/adminStorage';
import { TourPackage } from '../../types';
import { getWhatsAppUrl, SITE_CONFIG } from '../../config/siteConfig';
import { Logo } from '../../components/Logo';
import { WhatsAppIcon } from '../../components/SocialIcons';

export const AdminPortalPage: React.FC = () => {
  const { isAuthenticated, user, logout, changePassword } = useAdminAuth();
  const navigate = useNavigate();

  // Active Tab state
  const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'packages' | 'weather' | 'reviews' | 'settings'>('overview');

  // Core Data States
  const [bookings, setBookings] = useState<AdminBooking[]>([]);
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [weatherList, setWeatherList] = useState<AdminWeatherAdvisory[]>([]);
  const [reviewsList, setReviewsList] = useState<any[]>([]);
  const [settings, setSettings] = useState<AdminSettings>(adminStorage.getSettings());

  // Search & Filter States for Bookings
  const [bookingSearch, setBookingSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedBooking, setSelectedBooking] = useState<AdminBooking | null>(null);

  // Modals
  const [isAddBookingOpen, setIsAddBookingOpen] = useState(false);
  const [isEditPackageOpen, setIsEditPackageOpen] = useState(false);
  const [editingPackage, setEditingPackage] = useState<TourPackage | null>(null);
  const [isNewPackageOpen, setIsNewPackageOpen] = useState(false);
  const [newItineraryDays, setNewItineraryDays] = useState<{ day: number; title: string; description: string; stay: string; meals: string }[]>([
    { day: 1, title: 'Arrival & Scenic Mountain Drive', description: 'Scenic transfer to base destination; check-in and evening temple/valley walk.', stay: 'Deluxe Resort / Camp', meals: 'Dinner' }
  ]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load data on mount & refresh
  const reloadData = () => {
    setBookings(adminStorage.getBookings());
    setPackages(adminStorage.getPackages());
    setWeatherList(adminStorage.getWeather());
    setReviewsList(adminStorage.getReviews());
    setSettings(adminStorage.getSettings());
  };

  useEffect(() => {
    if (isAuthenticated) {
      reloadData();
    }
  }, [isAuthenticated]);

  // Toast notification helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // If not authenticated, render Login view directly
  if (!isAuthenticated) {
    return <AdminLoginPage />;
  }

  // --- STATS CALCULATIONS ---
  const pendingCount = bookings.filter(b => b.status === 'Pending').length;
  const confirmedCount = bookings.filter(b => b.status === 'Confirmed').length;
  const contactedCount = bookings.filter(b => b.status === 'Contacted').length;
  const totalRevenueEstimated = bookings
    .filter(b => b.status === 'Confirmed' || b.status === 'Completed')
    .reduce((acc, b) => acc + (b.totalAmountEstimated || 0), 0);

  // --- BOOKING ACTIONS ---
  const handleUpdateStatus = (id: string, newStatus: BookingStatus) => {
    adminStorage.updateBookingStatus(id, newStatus);
    reloadData();
    if (selectedBooking && selectedBooking.id === id) {
      setSelectedBooking({ ...selectedBooking, status: newStatus });
    }
    showToast(`Booking ${id} marked as ${newStatus}`);
  };

  const handleSaveNotes = (id: string, notes: string) => {
    const b = bookings.find(item => item.id === id);
    if (!b) return;
    adminStorage.updateBookingStatus(id, b.status, notes);
    reloadData();
    if (selectedBooking && selectedBooking.id === id) {
      setSelectedBooking({ ...selectedBooking, staffNotes: notes });
    }
    showToast('Staff remarks saved successfully');
  };

  const handleDeleteBooking = (id: string) => {
    if (window.confirm(`Are you sure you want to delete lead ${id}?`)) {
      adminStorage.deleteBooking(id);
      setSelectedBooking(null);
      reloadData();
      showToast('Lead deleted');
    }
  };

  const handleDeletePackage = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete tour package "${title}"?`)) {
      adminStorage.deletePackage(id);
      reloadData();
      showToast(`Package "${title}" deleted`);
    }
  };

  // --- WEATHER ACTIONS ---
  const handleWeatherUpdate = (id: string, updates: Partial<AdminWeatherAdvisory>) => {
    adminStorage.updateWeatherHub(id, updates);
    reloadData();
    showToast('Weather & Yatra advisory updated');
  };

  // --- SETTINGS ACTIONS ---
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    adminStorage.saveSettings(settings);
    showToast('Portal and site contact settings saved');
  };

  return (
    <div className="min-h-screen bg-[#0A0F1D] text-slate-100 flex flex-col md:flex-row antialiased font-sans">
      {/* Toast Alert Banner */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-brand-orange text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-bold animate-in fade-in slide-in-from-top-4 duration-200">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* --- SIDEBAR NAVIGATION --- */}
      <aside className="w-full md:w-64 bg-[#000044] border-r border-slate-800/80 flex flex-col justify-between shrink-0">
        <div>
          {/* Brand Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Logo size="sm" />
            </Link>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-orange/20 text-brand-orange border border-brand-orange/30 font-bold">
              v2.5 Admin
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <LayoutDashboard className="w-4 h-4" />
                <span>Overview</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('bookings')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'bookings'
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Users className="w-4 h-4" />
                <span>Bookings & Leads</span>
              </span>
              {pendingCount > 0 && (
                <span className="px-1.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px]">
                  {pendingCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('packages')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'packages'
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Package className="w-4 h-4" />
                <span>Tour Packages</span>
              </span>
              <span className="text-slate-500 text-[11px] font-mono">{packages.length}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('weather')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'weather'
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <CloudSun className="w-4 h-4" />
                <span>Weather & Yatra Hub</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('reviews')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'reviews'
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Star className="w-4 h-4" />
                <span>Customer Reviews</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'settings'
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Settings className="w-4 h-4" />
                <span>Portal Settings</span>
              </span>
            </button>
          </nav>
        </div>

        {/* Footer Profile & Logout */}
        <div className="p-3 border-t border-slate-800/80 space-y-2">
          <Link
            to="/"
            target="_blank"
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-brand-orange" />
              <span>Preview Live Website</span>
            </span>
            <span className="text-[10px] text-slate-500 font-mono flex items-center gap-0.5">
              <span>Open</span>
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </Link>

          <div className="p-3 rounded-2xl bg-slate-800/40 border border-slate-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center font-bold text-xs text-brand-orange shrink-0">
                T
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">{user?.name}</div>
                <div className="text-[10px] text-slate-400 truncate">{user?.role}</div>
              </div>
            </div>

            <button
              type="button"
              onClick={logout}
              className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Executive Topbar */}
        <header className="h-16 px-6 border-b border-slate-800/80 bg-[#0B1222]/80 backdrop-blur-md flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-400 font-medium">
              Admin Workspace / <span className="text-white font-bold capitalize">{activeTab}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => adminStorage.exportBookingsCSV()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-brand-orange" />
              <span>Export CSV</span>
            </button>

            <button
              type="button"
              onClick={() => setIsAddBookingOpen(true)}
              className="orange-gradient-btn px-3.5 py-1.5 rounded-lg text-xs font-bold text-white shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>New Lead / Walk-in</span>
            </button>
          </div>
        </header>

        {/* --- VIEW 1: OVERVIEW TAB --- */}
        {activeTab === 'overview' && (
          <div className="p-6 sm:p-8 space-y-8 max-w-7xl w-full mx-auto">
            {/* Greeting Header */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                Executive Command Center
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Real-time tracking of pilgrimage bookings, revenue pipeline, and Himalayan expedition operations.
              </p>
            </div>

            {/* KPI Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider">Total Enquiries</span>
                  <Users className="w-4 h-4 text-brand-orange" />
                </div>
                <div className="text-3xl font-extrabold text-white font-display">{bookings.length}</div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-2 flex items-center gap-1">
                  <span>+18% from last month</span>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider">Pending Action</span>
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-3xl font-extrabold text-amber-400 font-display">{pendingCount}</div>
                <div className="text-[11px] text-amber-300 font-medium mt-2">
                  Requires callback or quote
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider">Confirmed Bookings</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl font-extrabold text-emerald-400 font-display">{confirmedCount}</div>
                <div className="text-[11px] text-slate-400 font-medium mt-2">
                  {contactedCount} in negotiation
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider">Revenue Pipeline</span>
                  <TrendingUp className="w-4 h-4 text-brand-orange" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  ₹{(totalRevenueEstimated / 100000).toFixed(2)} Lakh
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-2">
                  Estimated trip booking value
                </div>
              </div>
            </div>

            {/* Recent Leads & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Bookings Feed (2 Columns) */}
              <div className="lg:col-span-2 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-base font-bold text-white">Recent Pilgrimage Enquiries</h3>
                    <p className="text-xs text-slate-400">Direct inquiries from website travelers</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab('bookings')}
                    className="text-xs font-semibold text-brand-orange hover:text-brand-orangeHover flex items-center gap-1"
                  >
                    <span>View All ({bookings.length})</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="divide-y divide-slate-800/80">
                  {bookings.length === 0 ? (
                    <div className="py-10 text-center text-slate-400">
                      <Users className="w-8 h-8 mx-auto mb-2 text-slate-600" />
                      <p className="font-semibold text-sm text-slate-300">No customer enquiries yet</p>
                      <p className="text-xs text-slate-500 mt-1">Real incoming bookings and enquiries from the website will appear here.</p>
                    </div>
                  ) : (
                    bookings.slice(0, 5).map(lead => (
                      <div
                        key={lead.id}
                        onClick={() => {
                          setSelectedBooking(lead);
                          setActiveTab('bookings');
                        }}
                        className="py-3.5 flex items-center justify-between gap-4 hover:bg-slate-800/40 p-2 rounded-xl transition-colors cursor-pointer group"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white group-hover:text-brand-orange transition-colors truncate">
                              {lead.name}
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              lead.status === 'Confirmed' ? 'bg-emerald-500/20 text-emerald-300' :
                              lead.status === 'Pending' ? 'bg-amber-500/20 text-amber-300' :
                              lead.status === 'Contacted' ? 'bg-blue-500/20 text-blue-300' :
                              'bg-slate-700 text-slate-300'
                            }`}>
                              {lead.status}
                            </span>
                          </div>
                          <div className="text-xs text-slate-400 truncate mt-0.5">
                            {lead.destination} • {lead.travellers} • {lead.travelDate || 'Flexible dates'}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <a
                            href={getWhatsAppUrl(`Hi ${lead.name}, regarding your UKYatra enquiry (${lead.id}) for ${lead.destination}...`)}
                            target="_blank"
                            rel="noreferrer"
                            onClick={e => e.stopPropagation()}
                            className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
                            title="Message on WhatsApp"
                          >
                            <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-400" />
                          </a>
                          <span className="text-slate-500 group-hover:text-slate-300">
                            <ChevronRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Side Cards: Weather Overview & Fast Links */}
              <div className="space-y-6">
                {/* Weather Quick Snapshot */}
                <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <CloudSun className="w-4 h-4 text-brand-orange" />
                      <span>Live Yatra Status Hub</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab('weather')}
                      className="text-[11px] font-semibold text-brand-orange hover:underline"
                    >
                      Manage
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {weatherList.map(item => (
                      <div key={item.id} className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/60 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-bold text-white">{item.hub}</div>
                          <div className="text-[11px] text-slate-400">{item.temp} • {item.condition}</div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          {item.yatraStatus}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Support / Contact Snapshot */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 rounded-3xl p-6 shadow-xl text-xs space-y-3">
                  <div className="font-bold text-white flex items-center gap-1.5 text-sm">
                    <Phone className="w-4 h-4 text-brand-orange" />
                    <span>Configured Helpline Info</span>
                  </div>
                  <div className="space-y-1 text-slate-300">
                    <div>Official Phone: <strong className="text-white">{settings.phone}</strong></div>
                    <div>WhatsApp: <strong className="text-white">{settings.whatsapp}</strong></div>
                    <div>Booking Email: <strong className="text-white">{settings.email}</strong></div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab('settings')}
                    className="w-full mt-2 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold border border-white/10 transition-colors"
                  >
                    Edit Helplines & UPI Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW 2: BOOKINGS & LEADS CRM --- */}
        {activeTab === 'bookings' && (
          <div className="p-6 sm:p-8 space-y-6 max-w-7xl w-full mx-auto">
            {/* Header & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold font-display text-white">
                  Pilgrimage & Trek Bookings CRM
                </h2>
                <p className="text-xs text-slate-400">
                  Manage traveler inquiries, update confirmation statuses, log internal remarks, and message on WhatsApp.
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => adminStorage.exportBookingsCSV()}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4 text-brand-orange" />
                  <span>Export CSV</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddBookingOpen(true)}
                  className="orange-gradient-btn px-4 py-2 rounded-xl text-xs font-bold text-white shadow flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Lead</span>
                </button>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
              {/* Search input */}
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={bookingSearch}
                  onChange={e => setBookingSearch(e.target.value)}
                  placeholder="Search by name, phone, or package..."
                  className="w-full pl-9 pr-3 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-orange"
                />
              </div>

              {/* Status Filter Buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none">
                {['All', 'Pending', 'Contacted', 'Confirmed', 'Completed', 'Cancelled'].map(st => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      statusFilter === st
                        ? 'bg-brand-orange text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Bookings Table */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-800/60 text-slate-400 font-semibold border-b border-slate-800 uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Lead ID</th>
                      <th className="py-3.5 px-4">Customer Name</th>
                      <th className="py-3.5 px-4">Destination & Tour</th>
                      <th className="py-3.5 px-4">Date & Group</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {(() => {
                      const filtered = bookings.filter(b => {
                        const matchStatus = statusFilter === 'All' || b.status === statusFilter;
                        const matchSearch = !bookingSearch || 
                          b.name.toLowerCase().includes(bookingSearch.toLowerCase()) ||
                          b.phone.includes(bookingSearch) ||
                          b.destination.toLowerCase().includes(bookingSearch.toLowerCase()) ||
                          (b.packageName || '').toLowerCase().includes(bookingSearch.toLowerCase());
                        return matchStatus && matchSearch;
                      });

                      if (filtered.length === 0) {
                        return (
                          <tr>
                            <td colSpan={6} className="py-16 text-center text-slate-400">
                              <Users className="w-10 h-10 mx-auto mb-3 text-slate-600 opacity-60" />
                              <p className="font-bold text-sm text-slate-200">No Leads Found</p>
                              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                                {bookingSearch || statusFilter !== 'All' 
                                  ? 'No records match your current search or status filter criteria.' 
                                  : 'Real traveler inquiries submitted through the website forms will appear here.'}
                              </p>
                            </td>
                          </tr>
                        );
                      }

                      return filtered.map(lead => (
                        <tr
                          key={lead.id}
                          onClick={() => setSelectedBooking(lead)}
                          className="hover:bg-slate-800/40 cursor-pointer transition-colors"
                        >
                          <td className="py-3.5 px-4 font-mono text-[11px] text-brand-orange font-bold">
                            {lead.id}
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-white">{lead.name}</div>
                            <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                              <span>{lead.phone}</span>
                              {lead.email && <span>• {lead.email}</span>}
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="font-semibold text-slate-200 truncate max-w-xs">{lead.destination}</div>
                            <div className="text-[11px] text-slate-400 truncate max-w-xs">{lead.packageName || 'Customized Itinerary'}</div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="text-slate-200">{lead.travelDate || 'Flexible'}</div>
                            <div className="text-[11px] text-slate-400">{lead.travellers} • {lead.budget || 'Standard'}</div>
                          </td>
                          <td className="py-3.5 px-4">
                            <select
                              value={lead.status}
                              onClick={e => e.stopPropagation()}
                              onChange={e => handleUpdateStatus(lead.id, e.target.value as BookingStatus)}
                              className={`text-xs font-bold px-2.5 py-1 rounded-lg border outline-none cursor-pointer ${
                                lead.status === 'Confirmed' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' :
                                lead.status === 'Pending' ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' :
                                lead.status === 'Contacted' ? 'bg-blue-500/20 text-blue-300 border-blue-500/40' :
                                lead.status === 'Completed' ? 'bg-purple-500/20 text-purple-300 border-purple-500/40' :
                                'bg-slate-800 text-slate-400 border-slate-700'
                              }`}
                            >
                              <option value="Pending" className="bg-slate-900 text-white">Pending</option>
                              <option value="Contacted" className="bg-slate-900 text-white">Contacted</option>
                              <option value="Confirmed" className="bg-slate-900 text-white">Confirmed</option>
                              <option value="Completed" className="bg-slate-900 text-white">Completed</option>
                              <option value="Cancelled" className="bg-slate-900 text-white">Cancelled</option>
                            </select>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5" onClick={e => e.stopPropagation()}>
                              <a
                                href={getWhatsAppUrl(`Hi ${lead.name}, this is regarding your UKYatra booking inquiry #${lead.id} for ${lead.destination}.`)}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
                                title="Chat on WhatsApp"
                              >
                                <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-400" />
                              </a>
                              <a
                                href={`tel:${lead.phone}`}
                                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                                title="Call"
                              >
                                <Phone className="w-3.5 h-3.5" />
                              </a>
                              <button
                                type="button"
                                onClick={() => handleDeleteBooking(lead.id)}
                                className="p-2 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors"
                                title="Delete"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ));
                    })()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW 3: TOUR PACKAGES MANAGER --- */}
        {activeTab === 'packages' && (
          <div className="p-6 sm:p-8 space-y-6 max-w-7xl w-full mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold font-display text-white">
                  Tour Package Catalog ({packages.length})
                </h2>
                <p className="text-xs text-slate-400">
                  Manage active packages, update pricing, duration, and promotional highlights.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsNewPackageOpen(true)}
                className="orange-gradient-btn px-4 py-2 rounded-xl text-xs font-bold text-white shadow flex items-center gap-1.5 self-start"
              >
                <Plus className="w-4 h-4" />
                <span>Add Tour Package</span>
              </button>
            </div>

            {packages.length === 0 ? (
              <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-10 sm:p-14 text-center max-w-2xl mx-auto space-y-5 shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mx-auto text-brand-orange">
                  <Package className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display text-white">No Tour Packages Listed Yet</h3>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-md mx-auto">
                    All system-generated itineraries and placeholder prices have been cleared. You have full control to add your verified itineraries with your custom pricing, hotel stays, and route schedules.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsNewPackageOpen(true)}
                  className="orange-gradient-btn px-6 py-3 rounded-xl text-xs font-bold text-white shadow inline-flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Your First Tour Package</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map(pkg => (
                  <div key={pkg.id} className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between">
                    <div>
                      <div className="relative h-44 overflow-hidden">
                        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-white border border-white/20">
                          {pkg.duration}
                        </div>
                        <div className="absolute top-3 right-3 bg-brand-orange text-white px-2.5 py-1 rounded-full text-xs font-extrabold shadow">
                          {pkg.startingPrice}
                        </div>
                      </div>

                      <div className="p-5 space-y-2">
                        <div className="text-[10px] uppercase font-bold text-brand-orange tracking-wider">
                          {pkg.destination} • {pkg.category}
                        </div>
                        <h3 className="text-base font-bold text-white line-clamp-1">{pkg.title}</h3>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{pkg.overview}</p>
                      </div>
                    </div>

                    <div className="p-4 border-t border-slate-800/80 bg-slate-900/40 flex items-center justify-between gap-2">
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                        <span>{pkg.rating} ({pkg.reviewsCount} reviews)</span>
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingPackage(pkg);
                            setIsEditPackageOpen(true);
                          }}
                          className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors flex items-center gap-1"
                          title="Edit Package"
                        >
                          <Edit3 className="w-3 h-3 text-brand-orange" />
                          <span>Edit</span>
                        </button>
                        <Link
                          to={`/packages/${pkg.id}`}
                          target="_blank"
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                          title="View Public Page"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDeletePackage(pkg.id, pkg.title)}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors"
                          title="Delete Package"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* --- VIEW 4: WEATHER & YATRA ADVISORY CONTROL --- */}
        {activeTab === 'weather' && (
          <div className="p-6 sm:p-8 space-y-6 max-w-7xl w-full mx-auto">
            <div>
              <h2 className="text-2xl font-extrabold font-display text-white">
                Live Himalayan Weather & Temple Advisory Controls
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Updates configured here immediately reflect across the public Live Weather & Registration Hub.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {weatherList.map(item => (
                <div key={item.id} className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-brand-orange tracking-wider">Himalayan Station</div>
                      <h3 className="text-xl font-bold text-white">{item.hub}</h3>
                      <div className="text-xs text-slate-400">Elevation: {item.altitude}</div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{item.lastUpdated}</span>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 mb-1">Temperature</label>
                        <input
                          type="text"
                          value={item.temp}
                          onChange={e => handleWeatherUpdate(item.id, { temp: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-brand-orange"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 mb-1">Sky / Condition</label>
                        <input
                          type="text"
                          value={item.condition}
                          onChange={e => handleWeatherUpdate(item.id, { condition: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-brand-orange"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">Yatra Advisory Status</label>
                      <select
                        value={item.yatraStatus}
                        onChange={e => handleWeatherUpdate(item.id, { yatraStatus: e.target.value as any })}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-brand-orange"
                      >
                        <option value="Clear & Open">Clear & Open</option>
                        <option value="Registration Mandatory">Registration Mandatory</option>
                        <option value="Active Advisory">Active Advisory</option>
                        <option value="Rainfall / Precaution">Rainfall / Precaution</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">Road & Highway Status</label>
                      <input
                        type="text"
                        value={item.roadStatus}
                        onChange={e => handleWeatherUpdate(item.id, { roadStatus: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-brand-orange"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">Night & Health Advisory</label>
                      <textarea
                        rows={2}
                        value={item.nightAdvisory}
                        onChange={e => handleWeatherUpdate(item.id, { nightAdvisory: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-brand-orange resize-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW 5: REVIEWS MODERATION --- */}
        {activeTab === 'reviews' && (
          <div className="p-6 sm:p-8 space-y-6 max-w-7xl w-full mx-auto">
            <div>
              <h2 className="text-2xl font-extrabold font-display text-white">
                Customer Testimonials Moderation ({reviewsList.length})
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Approve, reject, or spotlight customer reviews showcased on the website.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviewsList.map(rev => (
                <div key={rev.id} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={rev.avatar} alt={rev.name} className="w-10 h-10 rounded-full object-cover border border-brand-orange" />
                      <div>
                        <div className="font-bold text-white text-sm">{rev.name}</div>
                        <div className="text-[11px] text-slate-400">{rev.location} • {rev.tripTaken}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {Array.from({ length: rev.rating }).map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "{rev.comment}"
                  </p>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500">{rev.reviewDate}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                      Verified Pilgrim
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW 6: SETTINGS TAB --- */}
        {activeTab === 'settings' && (
          <div className="p-6 sm:p-8 space-y-6 max-w-4xl w-full mx-auto">
            <div>
              <h2 className="text-2xl font-extrabold font-display text-white">
                Admin & Site Configuration
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Configure primary helplines, WhatsApp notification destination, and admin passcode.
              </p>
            </div>

            {/* Site Helplines Form */}
            <form onSubmit={handleSaveSettings} className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>Helpline & Communication Channels</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Official Calling Phone</label>
                  <input
                    type="text"
                    value={settings.phone}
                    onChange={e => setSettings({ ...settings, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">WhatsApp Inquiry Number</label>
                  <input
                    type="text"
                    value={settings.whatsapp}
                    onChange={e => setSettings({ ...settings, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Booking Support Email</label>
                  <input
                    type="email"
                    value={settings.email}
                    onChange={e => setSettings({ ...settings, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Official UPI ID for Token Deposits</label>
                  <input
                    type="text"
                    value={settings.upiId}
                    onChange={e => setSettings({ ...settings, upiId: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Registered Office Address</label>
                <input
                  type="text"
                  value={settings.address}
                  onChange={e => setSettings({ ...settings, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="orange-gradient-btn px-6 py-2.5 rounded-xl text-xs font-bold text-white shadow flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Configuration</span>
                </button>
              </div>
            </form>

            {/* Data Export & Download */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
              <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3">
                Data Export & Download
              </h3>
              <p className="text-xs text-slate-400">
                Download and export all customer leads, booking records, and inquiries at once.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    adminStorage.exportBookingsCSV();
                    showToast('Leads CSV downloaded successfully');
                  }}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-brand-orange" />
                  <span>Download Leads (CSV)</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    adminStorage.exportAllDataJSON();
                    showToast('Complete backup (JSON) downloaded successfully');
                  }}
                  className="px-4 py-2.5 rounded-xl bg-slate-850 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Download All Data (JSON)</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to clear all leads? This permanently removes leads and starts with a clean empty list. It will NOT restore any demo records.')) {
                      adminStorage.clearAllBookings();
                      reloadData();
                      showToast('All leads cleared');
                    }
                  }}
                  className="px-4 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-xs font-semibold text-rose-400 border border-rose-500/30 transition-colors flex items-center gap-2 sm:ml-auto"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Clear All Leads</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* --- MODAL 1: BOOKING DETAIL DRAWER --- */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
          <div className="w-full max-w-xl bg-slate-900 border-l border-slate-800 h-full overflow-y-auto p-6 sm:p-8 space-y-6 text-xs text-slate-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] font-mono text-brand-orange font-bold uppercase tracking-wider">
                  Lead Details • {selectedBooking.id}
                </span>
                <h3 className="text-xl font-bold text-white">{selectedBooking.name}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedBooking(null)}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Status Control */}
            <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-2">
              <label className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">
                Booking Status
              </label>
              <div className="flex flex-wrap gap-2">
                {(['Pending', 'Contacted', 'Confirmed', 'Completed', 'Cancelled'] as BookingStatus[]).map(st => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => handleUpdateStatus(selectedBooking.id, st)}
                    className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all ${
                      selectedBooking.status === st
                        ? 'bg-brand-orange text-white shadow-md'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Traveler Information */}
            <div className="space-y-3 bg-slate-800/30 p-4 rounded-2xl border border-slate-800">
              <div className="font-bold text-white text-sm border-b border-slate-800 pb-2">
                Traveler Profile & Contact
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 text-[11px]">Contact Phone:</span>
                  <div className="font-semibold text-white mt-0.5">{selectedBooking.phone}</div>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px]">Email Address:</span>
                  <div className="font-semibold text-white mt-0.5">{selectedBooking.email || 'Not provided'}</div>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px]">Destination / Yatra:</span>
                  <div className="font-semibold text-brand-orange mt-0.5">{selectedBooking.destination}</div>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px]">Package Preference:</span>
                  <div className="font-semibold text-white mt-0.5">{selectedBooking.packageName || 'Customized Itinerary'}</div>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px]">Preferred Travel Date:</span>
                  <div className="font-semibold text-white mt-0.5">{selectedBooking.travelDate || 'Flexible'}</div>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px]">Group Size:</span>
                  <div className="font-semibold text-white mt-0.5">{selectedBooking.travellers}</div>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px]">Budget Tier:</span>
                  <div className="font-semibold text-white mt-0.5">{selectedBooking.budget || 'Standard'}</div>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px]">Enquiry Source:</span>
                  <div className="font-semibold text-slate-300 mt-0.5">{selectedBooking.source}</div>
                </div>
              </div>

              {selectedBooking.specialRequests && (
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-slate-400 text-[11px]">Customer Special Notes:</span>
                  <p className="mt-1 text-slate-200 bg-black/20 p-2.5 rounded-xl border border-white/5 leading-relaxed">
                    {selectedBooking.specialRequests}
                  </p>
                </div>
              )}
            </div>

            {/* Staff Internal Notes */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-white">Staff Expedition Notes / Token Record</label>
              <textarea
                rows={3}
                defaultValue={selectedBooking.staffNotes || ''}
                id="staff-notes-input"
                placeholder="Log hotel booking confirmation numbers, helicopter tokens, advance payment receipts..."
                className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-brand-orange resize-none"
              />
              <button
                type="button"
                onClick={() => {
                  const val = (document.getElementById('staff-notes-input') as HTMLTextAreaElement)?.value;
                  handleSaveNotes(selectedBooking.id, val);
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors flex items-center gap-1.5"
              >
                <Save className="w-3.5 h-3.5 text-brand-orange" />
                <span>Save Staff Notes</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href={getWhatsAppUrl(`Hi ${selectedBooking.name}, this is UKYatra specialist team following up on your pilgrimage inquiry for ${selectedBooking.destination}. We have prepared customized hotel and transport options for you.`)}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Message Client on WhatsApp</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${selectedBooking.phone}`}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-slate-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Client</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleDeleteBooking(selectedBooking.id)}
                  className="px-4 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 font-semibold text-xs border border-rose-500/30 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL 2: ADD MANUAL / WALK-IN LEAD --- */}
      {isAddBookingOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 w-full max-w-lg shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Record New Booking / Walk-in Lead</h3>
              <button onClick={() => setIsAddBookingOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={e => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                adminStorage.addBooking({
                  name: fd.get('name') as string,
                  phone: fd.get('phone') as string,
                  email: (fd.get('email') as string) || undefined,
                  destination: fd.get('destination') as string,
                  packageName: (fd.get('packageName') as string) || undefined,
                  travelDate: (fd.get('travelDate') as string) || undefined,
                  travellers: (fd.get('travellers') as string) || '2 Adults',
                  budget: (fd.get('budget') as string) || 'Standard',
                  specialRequests: (fd.get('notes') as string) || undefined,
                  source: 'Direct Admin Entry',
                  totalAmountEstimated: Number(fd.get('amount')) || 0
                });
                setIsAddBookingOpen(false);
                reloadData();
                showToast('Manual booking lead recorded');
              }}
              className="space-y-3 text-xs"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Customer Name *</label>
                  <input required name="name" type="text" placeholder="e.g. Amit Kapoor" className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-orange" />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Phone Number *</label>
                  <input required name="phone" type="tel" placeholder="e.g. +91 98765 43210" className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-orange" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Destination</label>
                  <input required name="destination" defaultValue="Kedarnath Yatra" className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-orange" />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Package Name</label>
                  <input name="packageName" defaultValue="Kedarnath Divine Yatra" className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-orange" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Travel Date</label>
                  <input name="travelDate" type="date" className="w-full p-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-orange" />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Travellers</label>
                  <input name="travellers" defaultValue="2 Adults" className="w-full p-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-orange" />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Est. Amount (₹)</label>
                  <input name="amount" type="number" defaultValue="45000" className="w-full p-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-orange" />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Special Requirements / Notes</label>
                <textarea name="notes" rows={2} placeholder="Any specific vehicle or hotel requests..." className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-orange resize-none" />
              </div>

              <div className="pt-3 flex justify-end gap-2">
                <button type="button" onClick={() => setIsAddBookingOpen(false)} className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300">Cancel</button>
                <button type="submit" className="orange-gradient-btn px-5 py-2 rounded-xl font-bold text-white shadow">Save Lead</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- MODAL 3: EDIT PACKAGE MODAL --- */}
      {isEditPackageOpen && editingPackage && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 w-full max-w-lg shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Edit Tour Package</h3>
              <button onClick={() => setIsEditPackageOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={e => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const updatedList = packages.map(p => {
                  if (p.id === editingPackage.id) {
                    return {
                      ...p,
                      title: (fd.get('title') as string).trim(),
                      startingPrice: (fd.get('startingPrice') as string).trim(),
                      duration: (fd.get('duration') as string).trim(),
                      category: (fd.get('category') as string) || p.category,
                      pickupDrop: (fd.get('pickupDrop') as string)?.trim() || undefined,
                      pdfBrochure: (fd.get('pdfBrochure') as string)?.trim() || undefined,
                      overview: (fd.get('overview') as string).trim()
                    };
                  }
                  return p;
                });
                adminStorage.savePackages(updatedList as any);
                setPackages(updatedList);
                setIsEditPackageOpen(false);
                showToast(`Package "${editingPackage.title}" updated successfully`);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-slate-300 font-medium mb-1">Package Title</label>
                <input required name="title" defaultValue={editingPackage.title} className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-orange" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Starting Price (e.g. ₹18,500)</label>
                  <input required name="startingPrice" defaultValue={editingPackage.startingPrice} className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-orange" />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Duration (e.g. 5D / 4N)</label>
                  <input required name="duration" defaultValue={editingPackage.duration} className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-orange" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Category</label>
                  <select
                    name="category"
                    defaultValue={editingPackage.category || 'Pilgrimage'}
                    className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
                  >
                    <option value="Pilgrimage">Pilgrimage</option>
                    <option value="Helicopter Yatra">Helicopter Yatra</option>
                    <option value="Road & Heli Combo">Road & Heli Combo</option>
                    <option value="Classic Overland Road">Classic Overland Road</option>
                    <option value="Fixed Departure Group">Fixed Departure Group</option>
                    <option value="Leisure & Hill Station">Leisure & Hill Station</option>
                    <option value="Trek & Adventure">Trek & Adventure</option>
                    <option value="Spiritual Circuit">Spiritual Circuit</option>
                    <option value="Offbeat Uttarakhand">Offbeat Uttarakhand</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Departure Hub (Pickup / Drop)</label>
                  <select
                    name="pickupDrop"
                    defaultValue={editingPackage.pickupDrop || 'Ex-Dehradun'}
                    className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
                  >
                    <option value="Ex-Dehradun">Ex-Dehradun</option>
                    <option value="Ex-Haridwar">Ex-Haridwar</option>
                    <option value="Ex-Delhi">Ex-Delhi</option>
                    <option value="Ex-Rishikesh">Ex-Rishikesh</option>
                    <option value="Custom / Flexible">Custom / Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">PDF Brochure URL / File Path (Optional)</label>
                <input
                  name="pdfBrochure"
                  defaultValue={editingPackage.pdfBrochure || ''}
                  placeholder="e.g. /assets/itinerary/my-tour.pdf"
                  className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-orange text-[11px]"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Overview Description</label>
                <textarea required name="overview" rows={3} defaultValue={editingPackage.overview} className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-orange resize-none" />
              </div>

              <div className="pt-3 flex justify-end gap-2">
                <button type="button" onClick={() => setIsEditPackageOpen(false)} className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300">Cancel</button>
                <button type="submit" className="orange-gradient-btn px-5 py-2 rounded-xl font-bold text-white shadow">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- MODAL 4: CREATE NEW TOUR PACKAGE & ITINERARY --- */}
      {isNewPackageOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 w-full max-w-3xl shadow-2xl space-y-5 my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Package className="w-5 h-5 text-brand-orange" />
                  <span>Create Tour Package & Itinerary</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Add your verified tour package with customized pricing, hotel stays, and day-by-day route details.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsNewPackageOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={e => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const title = (fd.get('title') as string).trim();
                const destination = (fd.get('destination') as string).trim();
                const category = (fd.get('category') as string) || 'Pilgrimage';
                const pickupDrop = (fd.get('pickupDrop') as string)?.trim() || undefined;
                const pdfBrochure = (fd.get('pdfBrochure') as string)?.trim() || undefined;
                const duration = (fd.get('duration') as string).trim() || `${newItineraryDays.length} Days`;
                const daysCount = Number(fd.get('days')) || newItineraryDays.length || 1;
                const startingPrice = (fd.get('startingPrice') as string).trim() || 'Pricing on Request';
                const originalPrice = (fd.get('originalPrice') as string).trim() || undefined;
                const bestSeason = (fd.get('bestSeason') as string).trim() || 'May to October';
                const imageUrl = (fd.get('image') as string).trim() || 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80';
                const overview = (fd.get('overview') as string).trim();
                const highlightsStr = (fd.get('highlights') as string) || '';
                const inclusionsStr = (fd.get('inclusions') as string) || '';
                const exclusionsStr = (fd.get('exclusions') as string) || '';

                const highlights = highlightsStr
                  .split(/[,\n]/)
                  .map(s => s.trim())
                  .filter(Boolean);

                const inclusions = inclusionsStr
                  .split(/[,\n]/)
                  .map(s => s.trim())
                  .filter(Boolean);

                const exclusions = exclusionsStr
                  .split(/[,\n]/)
                  .map(s => s.trim())
                  .filter(Boolean);

                const validItinerary = newItineraryDays.filter(d => d.title.trim());

                const newPkg: TourPackage = {
                  id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `pkg-${Date.now()}`,
                  title,
                  destination,
                  category,
                  pickupDrop,
                  pdfBrochure,
                  duration,
                  days: daysCount,
                  startingPrice,
                  originalPrice,
                  bestSeason,
                  image: imageUrl,
                  rating: 4.9,
                  reviewsCount: 1,
                  overview,
                  highlights: highlights.length > 0 ? highlights : ['Scenic Himalayan Route', 'Verified Mountain Stay', 'Expert Driver & Guide'],
                  itinerary: validItinerary,
                  inclusions: inclusions.length > 0 ? inclusions : ['Accommodation in verified hotels/camps', 'Daily Breakfast & Dinner', 'Dedicated Mountain Transport with Driver', 'Tolls, Parking & Fuel Charges'],
                  exclusions: exclusions.length > 0 ? exclusions : ['Airfare / Train tickets to base hub', 'Helicopter / Pony / Palki tickets', 'Personal expenses & tips', 'Monument or temple VIP entry passes'],
                  isFeatured: true
                };

                adminStorage.addPackage(newPkg);
                reloadData();
                setIsNewPackageOpen(false);
                // Reset form state
                setNewItineraryDays([
                  { day: 1, title: 'Arrival & Scenic Mountain Drive', description: 'Scenic transfer to base destination; check-in and evening temple/valley walk.', stay: 'Deluxe Resort / Camp', meals: 'Dinner' }
                ]);
                showToast(`Tour Package "${newPkg.title}" published successfully!`);
              }}
              className="space-y-4 text-xs"
            >
              {/* Row 1: Title & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Package Title *</label>
                  <input
                    required
                    name="title"
                    type="text"
                    placeholder="e.g. Kedarnath & Badrinath Do Dham Deluxe"
                    className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Destination / Region *</label>
                  <input
                    required
                    name="destination"
                    type="text"
                    placeholder="e.g. Kedarnath & Badrinath"
                    className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              {/* Row 2: Category, Departure Hub, Duration, Best Season */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Category</label>
                  <select
                    name="category"
                    defaultValue="Pilgrimage"
                    className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
                  >
                    <option value="Pilgrimage">Pilgrimage</option>
                    <option value="Helicopter Yatra">Helicopter Yatra</option>
                    <option value="Road & Heli Combo">Road & Heli Combo</option>
                    <option value="Classic Overland Road">Classic Overland Road</option>
                    <option value="Fixed Departure Group">Fixed Departure Group</option>
                    <option value="Leisure & Hill Station">Leisure & Hill Station</option>
                    <option value="Trek & Adventure">Trek & Adventure</option>
                    <option value="Spiritual Circuit">Spiritual Circuit</option>
                    <option value="Offbeat Uttarakhand">Offbeat Uttarakhand</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Departure Hub</label>
                  <select
                    name="pickupDrop"
                    defaultValue="Ex-Dehradun"
                    className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
                  >
                    <option value="Ex-Dehradun">Ex-Dehradun</option>
                    <option value="Ex-Haridwar">Ex-Haridwar</option>
                    <option value="Ex-Delhi">Ex-Delhi</option>
                    <option value="Ex-Rishikesh">Ex-Rishikesh</option>
                    <option value="Custom / Flexible">Custom / Flexible</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Duration Text *</label>
                  <input
                    required
                    name="duration"
                    type="text"
                    defaultValue="5 Days / 4 Nights"
                    placeholder="e.g. 5 Days / 4 Nights"
                    className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Best Season</label>
                  <input
                    name="bestSeason"
                    type="text"
                    defaultValue="May – Oct"
                    className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              {/* Row 3: Pricing, Original Price, Cover Image, PDF Brochure */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Starting Price *</label>
                  <input
                    required
                    name="startingPrice"
                    type="text"
                    placeholder="e.g. ₹18,500 / person or Pricing on Request"
                    className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Original Price (Strikeout)</label>
                  <input
                    name="originalPrice"
                    type="text"
                    placeholder="e.g. ₹22,000"
                    className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Cover Image URL</label>
                  <input
                    name="image"
                    type="url"
                    defaultValue="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
                    className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-orange text-[11px]"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">PDF Brochure (Optional)</label>
                  <input
                    name="pdfBrochure"
                    type="text"
                    placeholder="e.g. /assets/itinerary/my-brochure.pdf"
                    className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-orange text-[11px]"
                  />
                </div>
              </div>

              {/* Overview Description */}
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Package Overview *</label>
                <textarea
                  required
                  name="overview"
                  rows={2}
                  placeholder="Provide an overview of the journey, experiences, and highlights for travelers..."
                  className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-orange resize-none"
                />
              </div>

              {/* Highlights */}
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Key Highlights (comma-separated)
                </label>
                <input
                  name="highlights"
                  type="text"
                  placeholder="VIP Darshan assistance, Scenic river confluences, Private Innova vehicle, Luxury cottages"
                  className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-orange"
                />
              </div>

              {/* Day-Wise Itinerary Builder */}
              <div className="space-y-3 pt-2 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white text-xs">Day-Wise Itinerary Plan</span>
                    <p className="text-[11px] text-slate-400">Add detailed daily plans with night stay and meal details.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const nextDay = newItineraryDays.length + 1;
                      setNewItineraryDays([
                        ...newItineraryDays,
                        {
                          day: nextDay,
                          title: `Day ${nextDay} Exploration & Sightseeing`,
                          description: 'Full day sightseeing, temple darshan, and scenic Himalayan vistas.',
                          stay: 'Deluxe Hotel / Resort',
                          meals: 'Breakfast & Dinner'
                        }
                      ]);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-brand-orange font-bold text-xs border border-slate-700 transition-colors flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Day {newItineraryDays.length + 1}</span>
                  </button>
                </div>

                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {newItineraryDays.map((item, index) => (
                    <div key={index} className="p-3 bg-slate-800/70 border border-slate-700/80 rounded-2xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded-md bg-brand-orange/20 text-brand-orange font-bold text-[10px] border border-brand-orange/30">
                          Day {item.day}
                        </span>
                        {newItineraryDays.length > 1 && (
                          <button
                            type="button"
                            onClick={() => {
                              const filtered = newItineraryDays
                                .filter((_, i) => i !== index)
                                .map((d, i) => ({ ...d, day: i + 1 }));
                              setNewItineraryDays(filtered);
                            }}
                            className="text-slate-400 hover:text-rose-400 text-xs p-1"
                            title="Remove Day"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div className="sm:col-span-1">
                          <input
                            type="text"
                            value={item.title}
                            onChange={e => {
                              const copy = [...newItineraryDays];
                              copy[index].title = e.target.value;
                              setNewItineraryDays(copy);
                            }}
                            placeholder="Day title (e.g. Haridwar to Guptkashi)"
                            className="w-full p-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-[11px] focus:outline-none focus:border-brand-orange"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            value={item.stay}
                            onChange={e => {
                              const copy = [...newItineraryDays];
                              copy[index].stay = e.target.value;
                              setNewItineraryDays(copy);
                            }}
                            placeholder="Night stay hotel/camp"
                            className="w-full p-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-[11px] focus:outline-none focus:border-brand-orange"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            value={item.meals}
                            onChange={e => {
                              const copy = [...newItineraryDays];
                              copy[index].meals = e.target.value;
                              setNewItineraryDays(copy);
                            }}
                            placeholder="Meals (e.g. Dinner included)"
                            className="w-full p-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-[11px] focus:outline-none focus:border-brand-orange"
                          />
                        </div>
                      </div>

                      <textarea
                        rows={2}
                        value={item.description}
                        onChange={e => {
                          const copy = [...newItineraryDays];
                          copy[index].description = e.target.value;
                          setNewItineraryDays(copy);
                        }}
                        placeholder="Day itinerary description (route, stops, elevation, experiences)..."
                        className="w-full p-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-[11px] focus:outline-none focus:border-brand-orange resize-none"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Inclusions (comma or line separated)
                  </label>
                  <textarea
                    name="inclusions"
                    rows={2}
                    defaultValue="Deluxe hotel stays, Daily breakfast & dinner, Dedicated mountain vehicle with driver, All tolls & parking"
                    className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-[11px] focus:outline-none focus:border-brand-orange resize-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Exclusions (comma or line separated)
                  </label>
                  <textarea
                    name="exclusions"
                    rows={2}
                    defaultValue="Train/Air tickets, Helicopter tickets, Personal shopping & porter charges, Entry fees"
                    className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-[11px] focus:outline-none focus:border-brand-orange resize-none"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-800 flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsNewPackageOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="orange-gradient-btn px-6 py-2 rounded-xl font-bold text-white shadow"
                >
                  Publish Package & Itinerary
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

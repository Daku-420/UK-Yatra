import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ChatbotWidget } from './components/ChatbotWidget';
import { StickyMobileBar } from './components/StickyMobileBar';
import { EnquiryModal } from './components/EnquiryModal';
import { ScrollToTop } from './components/ScrollToTop';

// Admin Context & Pages
import { AdminAuthProvider } from './context/AdminAuthContext';
import { AdminPortalPage } from './pages/admin/AdminPortalPage';

// Public Pages
import { HomePage } from './pages/HomePage';
import { DestinationsPage } from './pages/DestinationsPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { ActivityDetailPage } from './pages/ActivityDetailPage';
import { CollegeTripsPage } from './pages/CollegeTripsPage';
import { SchoolTripsPage } from './pages/SchoolTripsPage';
import { SummerLearningPage } from './pages/SummerLearningPage';
import { PackagesPage } from './pages/PackagesPage';
import { PackageDetailPage } from './pages/PackageDetailPage';
import { CustomizedTripPage } from './pages/CustomizedTripPage';
import { TrekkingPage } from './pages/TrekkingPage';
import { TrekDetailPage } from './pages/TrekDetailPage';
import { SpiritualPage } from './pages/SpiritualPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { FaqPage } from './pages/FaqPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { BookingEnquiryPage } from './pages/BookingEnquiryPage';
import { HelicopterPackagesPage } from './pages/HelicopterPackagesPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { OffersPage } from './pages/OffersPage';
import { GalleryPage } from './pages/GalleryPage';
import { GroupTravelPage } from './pages/GroupTravelPage';
import { CarRentalPage } from './pages/CarRentalPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { CancellationPolicyPage } from './pages/CancellationPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

function AppInner() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [prefilledPackage, setPrefilledPackage] = useState('');

  const handleOpenBookingModal = (packageName?: string) => {
    setPrefilledPackage(packageName || '');
    setBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setBookingModalOpen(false);
    setPrefilledPackage('');
  };

  // Render standalone dark SaaS Admin Portal if on /admin routes
  if (isAdminRoute) {
    return (
      <Routes>
        <Route path="/admin" element={<AdminPortalPage />} />
        <Route path="/admin/*" element={<AdminPortalPage />} />
      </Routes>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F3EF] text-slate-800 selection:bg-brand-orange selection:text-white">
      {/* Sticky Global Navigation */}
      <Navbar onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Dynamic Route Pages */}
      <main className="flex-1 pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<HomePage onOpenBookingModal={handleOpenBookingModal} />} />
          
          {/* Destinations */}
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destinations/:id" element={<DestinationDetailPage onOpenBookingModal={handleOpenBookingModal} />} />
          
          {/* Activities & Experiences */}
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/activities/:id" element={<ActivityDetailPage onOpenBookingModal={handleOpenBookingModal} />} />
          
          {/* Student, School & Youth Programmes */}
          <Route path="/college-trips" element={<CollegeTripsPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/activities/college-trips" element={<CollegeTripsPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/school-trips" element={<SchoolTripsPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/activities/school-trips" element={<SchoolTripsPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/summer-learning-programmes" element={<SummerLearningPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/summer-learning" element={<SummerLearningPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/activities/summer-learning-programmes" element={<SummerLearningPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/activities/summer-learning" element={<SummerLearningPage onOpenBookingModal={handleOpenBookingModal} />} />
          
          {/* Tour Packages */}
          <Route path="/packages" element={<PackagesPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/packages/:id" element={<PackageDetailPage onOpenBookingModal={handleOpenBookingModal} />} />
          
          {/* Customized Trip Planner */}
          <Route path="/customized-trip" element={<CustomizedTripPage />} />
          
          {/* Trekking */}
          <Route path="/trekking" element={<TrekkingPage />} />
          <Route path="/trekking/:id" element={<TrekDetailPage onOpenBookingModal={handleOpenBookingModal} />} />
          
          {/* Char Dham & Spiritual */}
          <Route path="/spiritual" element={<SpiritualPage onOpenBookingModal={handleOpenBookingModal} />} />
          
          {/* About & Contact */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Blog & Travel Stories */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          
          {/* FAQs & Reviews */}
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          
          {/* Specialized Section Pages */}
          <Route path="/booking-enquiry" element={<BookingEnquiryPage />} />
          <Route path="/helicopter-packages" element={<HelicopterPackagesPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/offers" element={<OffersPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/group-travel" element={<GroupTravelPage />} />
          <Route path="/car-rental" element={<CarRentalPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/book-vehicle" element={<CarRentalPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/vehicles" element={<CarRentalPage onOpenBookingModal={handleOpenBookingModal} />} />
          
          {/* Legal / Policy Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cancellation-policy" element={<CancellationPolicyPage />} />
          
          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating WhatsApp Action Widget (Left Corner) */}
      <WhatsAppButton />

      {/* Floating AI Travel Assistant Chatbot (Right Corner) */}
      <ChatbotWidget onOpenBookingModal={handleOpenBookingModal} />

      {/* Mobile Sticky Action Bar */}
      <StickyMobileBar onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Universal Trip Enquiry / Booking Modal */}
      <EnquiryModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBookingModal}
        prefillPackage={prefilledPackage}
      />
    </div>
  );
}

export function App() {
  return (
    <Router>
      <AdminAuthProvider>
        <ScrollToTop />
        <AppInner />
      </AdminAuthProvider>
    </Router>
  );
}

export default App;

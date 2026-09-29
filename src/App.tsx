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
import { OutdoorActivitiesPage } from './pages/OutdoorActivitiesPage';
import { OutdoorActivityDetailPage } from './pages/OutdoorActivityDetailPage';
import { CollegeTripsPage } from './pages/CollegeTripsPage';
import { SchoolTripsPage } from './pages/SchoolTripsPage';
import { SummerLearningPage } from './pages/SummerLearningPage';
import { EducationalProgrammesPage } from './pages/EducationalProgrammesPage';
import { EducationalProgrammeDetailPage } from './pages/EducationalProgrammeDetailPage';
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
          
          {/* Destinations Hub & 6 SEO Category Routes */}
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destinations/hill-stations" element={<DestinationsPage initialCategorySlug="hill-stations" />} />
          <Route path="/destinations/spiritual-destinations" element={<DestinationsPage initialCategorySlug="spiritual-destinations" />} />
          <Route path="/destinations/nature-escapes" element={<DestinationsPage initialCategorySlug="nature-escapes" />} />
          <Route path="/destinations/wildlife-national-parks" element={<DestinationsPage initialCategorySlug="wildlife-national-parks" />} />
          <Route path="/destinations/lakes-waterfalls" element={<DestinationsPage initialCategorySlug="lakes-waterfalls" />} />
          <Route path="/destinations/villages-hidden-gems" element={<DestinationsPage initialCategorySlug="villages-hidden-gems" />} />
          <Route path="/destinations/:id" element={<DestinationDetailPage onOpenBookingModal={handleOpenBookingModal} />} />
          
          {/* Outdoor Activities in Uttarakhand */}
          <Route path="/outdoor-activities" element={<OutdoorActivitiesPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/outdoor-activities/:id" element={<OutdoorActivityDetailPage onOpenBookingModal={handleOpenBookingModal} />} />

          {/* Activities & Experiences */}
          <Route path="/activities" element={<OutdoorActivitiesPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/activities/:id" element={<OutdoorActivityDetailPage onOpenBookingModal={handleOpenBookingModal} />} />
          
          {/* Student, School & Educational Programmes */}
          <Route path="/educational-programmes" element={<EducationalProgrammesPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/educational-programmes/:id" element={<EducationalProgrammeDetailPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/educational-programs" element={<EducationalProgrammesPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/educational-programs/:id" element={<EducationalProgrammeDetailPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/activities/educational-programmes" element={<EducationalProgrammesPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/activities/educational-programmes/:id" element={<EducationalProgrammeDetailPage onOpenBookingModal={handleOpenBookingModal} />} />
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
          <Route path="/tours" element={<PackagesPage onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/tours/:id" element={<PackageDetailPage onOpenBookingModal={handleOpenBookingModal} />} />
          
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

import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ChatbotWidget } from './components/ChatbotWidget';
import { StickyMobileBar } from './components/StickyMobileBar';
import { EnquiryModal } from './components/EnquiryModal';
import { ScrollToTop } from './components/ScrollToTop';

// Admin Context
import { AdminAuthProvider } from './context/AdminAuthContext';

// Lightweight fallback spinner while lazy route chunks load
const RouteLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh] py-20">
    <div className="w-10 h-10 border-4 border-slate-200 border-t-brand-orange rounded-full animate-spin" />
  </div>
);

// Lazy-loaded routes for optimal bundle code-splitting
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const DestinationsPage = lazy(() => import('./pages/DestinationsPage').then(m => ({ default: m.DestinationsPage })));
const DestinationDetailPage = lazy(() => import('./pages/DestinationDetailPage').then(m => ({ default: m.DestinationDetailPage })));
const OutdoorActivitiesPage = lazy(() => import('./pages/OutdoorActivitiesPage').then(m => ({ default: m.OutdoorActivitiesPage })));
const OutdoorActivityDetailPage = lazy(() => import('./pages/OutdoorActivityDetailPage').then(m => ({ default: m.OutdoorActivityDetailPage })));
const CollegeTripsPage = lazy(() => import('./pages/CollegeTripsPage').then(m => ({ default: m.CollegeTripsPage })));
const SchoolTripsPage = lazy(() => import('./pages/SchoolTripsPage').then(m => ({ default: m.SchoolTripsPage })));
const SummerLearningPage = lazy(() => import('./pages/SummerLearningPage').then(m => ({ default: m.SummerLearningPage })));
const EducationalProgrammesPage = lazy(() => import('./pages/EducationalProgrammesPage').then(m => ({ default: m.EducationalProgrammesPage })));
const EducationalProgrammeDetailPage = lazy(() => import('./pages/EducationalProgrammeDetailPage').then(m => ({ default: m.EducationalProgrammeDetailPage })));
const PackagesPage = lazy(() => import('./pages/PackagesPage').then(m => ({ default: m.PackagesPage })));
const PackageDetailPage = lazy(() => import('./pages/PackageDetailPage').then(m => ({ default: m.PackageDetailPage })));
const CustomizedTripPage = lazy(() => import('./pages/CustomizedTripPage').then(m => ({ default: m.CustomizedTripPage })));
const TrekkingPage = lazy(() => import('./pages/TrekkingPage').then(m => ({ default: m.TrekkingPage })));
const TrekDetailPage = lazy(() => import('./pages/TrekDetailPage').then(m => ({ default: m.TrekDetailPage })));
const SpiritualPage = lazy(() => import('./pages/SpiritualPage').then(m => ({ default: m.SpiritualPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage').then(m => ({ default: m.BlogDetailPage })));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage').then(m => ({ default: m.ArticlesPage })));
const ArticleDetailPage = lazy(() => import('./pages/ArticleDetailPage').then(m => ({ default: m.ArticleDetailPage })));
const FaqPage = lazy(() => import('./pages/FaqPage').then(m => ({ default: m.FaqPage })));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage').then(m => ({ default: m.ReviewsPage })));
const BookingEnquiryPage = lazy(() => import('./pages/BookingEnquiryPage').then(m => ({ default: m.BookingEnquiryPage })));
const HelicopterPackagesPage = lazy(() => import('./pages/HelicopterPackagesPage').then(m => ({ default: m.HelicopterPackagesPage })));
const WhyUsPage = lazy(() => import('./pages/WhyUsPage').then(m => ({ default: m.WhyUsPage })));
const OffersPage = lazy(() => import('./pages/OffersPage').then(m => ({ default: m.OffersPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then(m => ({ default: m.GalleryPage })));
const GroupTravelPage = lazy(() => import('./pages/GroupTravelPage').then(m => ({ default: m.GroupTravelPage })));
const CarRentalPage = lazy(() => import('./pages/CarRentalPage').then(m => ({ default: m.CarRentalPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const CancellationPolicyPage = lazy(() => import('./pages/CancellationPolicyPage').then(m => ({ default: m.CancellationPolicyPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));
const AdminPortalPage = lazy(() => import('./pages/admin/AdminPortalPage').then(m => ({ default: m.AdminPortalPage })));

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
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route path="/admin" element={<AdminPortalPage />} />
          <Route path="/admin/*" element={<AdminPortalPage />} />
        </Routes>
      </Suspense>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F3EF] text-slate-800 selection:bg-brand-orange selection:text-white">
      {/* Sticky Global Navigation */}
      <Navbar onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Dynamic Route Pages with Suspense */}
      <main className="flex-1 pb-16 md:pb-0">
        <Suspense fallback={<RouteLoader />}>
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
            
            {/* Dedicated SEO Articles & Travel Guides */}
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:slug" element={<ArticleDetailPage onOpenBookingModal={handleOpenBookingModal} />} />
            
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
        </Suspense>
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

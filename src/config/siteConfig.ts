// Central Site Configuration for UKYatra
// Edit here to update brand information across the entire website.

export const SITE_CONFIG = {
  name: "UKYatra",
  legalName: "UKYatra Adventures & Holidays Private Limited",
  tagline: "Capture Unforgettable Moments!",
  establishedYear: 2018,
  
  // Contact details (From live UKYatra.com)
  phone: "+91 78179 55737",
  altPhone: "+91 78179 55737",
  email: "info@UKYatra.com",
  bookingEmail: "bookings@UKYatra.com",
  
  // WhatsApp Configuration (Live UKYatra.com WhatsApp)
  whatsappNumber: "+91 78179 55737",
  rawWhatsappNumber: "917817955737",
  
  // Location & Office
  address: "Shop No. A-7, First Floor, Ganpati Plaza Complex, Birla Farm, Haripur Kalan, Dehradun, Motichur Range, Uttarakhand 249205",
  branchOffice: "Near Jolly Grant Airport, Dehradun, Uttarakhand - 248140, India",
  workingHours: "Mon - Sun: 8:00 AM - 10:00 PM IST (24/7 On-Trip Emergency & Heli Support)",

  // Registration & Trust Indicators
  registrationNo: "UK-TOUR-REG-55737",
  gstin: "05AAACU5573R1Z4 (Uttarakhand)",
  msmeReg: "UDYAM-UK-05-0055737",

  // Social Links (From live UKYatra.com)
  social: {
    instagram: "https://www.instagram.com/UKYatradotcom",
    facebook: "https://www.facebook.com/UKYatradotcom",
    youtube: "https://www.youtube.com/@UKYatradotcom",
    twitter: "https://x.com/UKYatradotcom",
  },

  // Trust statistics
  stats: [
    { label: "Trips Curated", value: "8,500+" },
    { label: "Happy Travellers", value: "43,250+" },
    { label: "Verified Local Guides", value: "45+" },
    { label: "Average Google Rating", value: "4.7 ★" },
  ]
};

// WhatsApp Contextual Message Helpers
export const getWhatsAppUrl = (message?: string): string => {
  const defaultMsg = "Hi UKYatra, I want to plan a trip to Uttarakhand.";
  const encodedMsg = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${SITE_CONFIG.rawWhatsappNumber}?text=${encodedMsg}`;
};

export const getPackageWhatsAppUrl = (packageName: string, duration?: string): string => {
  const msg = `Hi UKYatra, I am interested in booking/getting a quote for the "${packageName}" (${duration || 'custom duration'}) package. Please share details and best availability.`;
  return getWhatsAppUrl(msg);
};

export const getDestinationWhatsAppUrl = (destinationName: string): string => {
  const msg = `Hi UKYatra, I want to know more about travelling to ${destinationName} and custom itinerary options.`;
  return getWhatsAppUrl(msg);
};

export const getTrekWhatsAppUrl = (trekName: string): string => {
  const msg = `Hi UKYatra, I'm interested in the ${trekName} trek. Could you please share batch dates, inclusions, and difficulty guidelines?`;
  return getWhatsAppUrl(msg);
};

export const getCustomTripWhatsAppUrl = (details: { destination?: string; travellers?: string; dates?: string; budget?: string }): string => {
  const msg = `Hi UKYatra, I want help planning a customized Uttarakhand trip.\nDestination: ${details.destination || 'Flexible'}\nTravellers: ${details.travellers || '1-2'}\nApprox Date: ${details.dates || 'Upcoming'}\nBudget: ${details.budget || 'Standard'}`;
  return getWhatsAppUrl(msg);
};

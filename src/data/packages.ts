import { TourPackage } from '../types';
import { INITIAL_TOUR_PACKAGES } from './initialTourPackages';

/**
 * Official UK Yatra Tour Packages & Day-Wise Itineraries Catalog
 * Parsed and organized from verified itinerary documentation in public/assets/itinerary.
 * Covers Helicopter Charters, Overland Road circuits, Road & Heli Combos,
 * Fixed Departure Group Yatras, Leisure Tours, and Alpine Treks.
 */
export const TOUR_PACKAGES: TourPackage[] = [
  ...INITIAL_TOUR_PACKAGES,
  {
    "id": "uky-heli-01-luxury-char-dham-by-heli-ex-dehradun-5n-6d-2026",
    "title": "Luxury Char Dham Yatra by Helicopter (5N/6D)",
    "destination": "Yamunotri, Gangotri, Kedarnath & Badrinath",
    "duration": "5 Nights / 6 Days",
    "days": 6,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Helicopter Yatra",
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewsCount": 45,
    "overview": "UK Yatra is a premier Uttarakhand-based tour and travel company with extensive experience in operating and managing Char Dham Yatra by Helicopter. Over the years, we have emerged as a well-established and trusted name, becoming the preferred choice of lakhs of pilgrims undertaking Yamunotri, Gangotri, Kedarnath, and Badrinath Yatra by helicopter. “UK” represents Uttarakhand, the sacred land of the Himalayas and “Yatra” signifies a meaningful journey. Backed by a strong local operational network, professional ground teams at each destination, and deep sector expertise in helicopter logistics, UK Yatra delivers crystal-clear, transparent, and reliable pilgrimage solutions. Our personalized services, seamless coordination, and ethical travel practices ensure safety, comfort, and realistic itinerary planning for every guest. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra stands for trust, compliance, and excellence—offering customer-centric, professionally executed Char Dham and Do Dham helicopter journeys that create spiritually enriching and lifelong memories. Uttarakhand, also known as Dev Bhoomi or the Land of Gods, is home to numerous temples and welcome devotees all year round. In Hindi, ‘CHAR' means four and ‘DHAM' refers to religious destinations.",
    "highlights": [
      "VIP priority temple darshan at sacred Himalayan shrines",
      "Spectacular aerial views of snow-clad Garhwal Himalayan peaks",
      "Complete VIP ground handling and escort at Dehradun and helipads",
      "Luxury stays and premium curated dining throughout the yatra",
      "Time-efficient itinerary ideal for seniors and busy professionals"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival at Dehradun:",
        "description": "The tour Commences with pick up from Dehradun Airport or Railway Station one day prior to the Chardham Yatra departure, followed by drop to the hotel. In the evening, our team will brief the guests about the entire Chardham Yatra which will be conducted at 20:30Hrs. Duffle bag will be provided during the tour briefing in which necessary luggage will have to be packed by the passengers (Maximum 5Kg per person will be permitted). The overnight stay at Dehradun with dinner awaits you. Note: Our staff will take the body weight of each pilgrim during the tour briefing; hence kindly ensure you attend the same. Program Summary: Arrival, Relaxation and Refreshment at the Hotel.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "Visit to Yamunotri Dham:",
        "description": "6:00 AM - Departure Sahastradhara Helipad, Dehradun 6:30 AM - Arrival Kharsali Helipad, Yamunotri The auspicious Chardham Yatra will begin from the Sahastradhara Helipad, Dehradun. Guests will check out from the hotel at the designated time, our representative will pick them up and transport them to Sahastradhara Helipad. Our ground Personnel will warmly greet the guests and assist them in settling into the waiting lounge. Where, they will receive the Pre-Flight instructions before being boarded into the helicopter. Upon arrival at Kharsali guests are welcomed by ground staff and transfer to Yamunotri temple by Palkis/ Pony. This trek from Helipad to temple is 6 kms and return trip by palki takes about 5 hours. After Darshan return back to Helipad. Overnight stay at Kharsali. Program Summary: Flying from Dehradun to Kharsali Helipad. Kharsali Helipad to Yamunotri temple is 6 km trek (each side) by riding on a pony or by palki.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "Visit to Gangotri Dham:",
        "description": "06:30 AM Departure Kharsali Helipad, Yamunotri 07:00 AM Arrival Harsil Helipad Guests are expected to check out from the hotel at the designated time and will board the helicopter from Kharsali Helipad. Arrive at the Harsil Helipad, Gangotri within an estimated time. Harsil is one of the most beautiful and picturesque valleys in Uttarakhand. Some people also call it Mini Switzerland. Gangotri temple is about 22 kms from Harsil Helipad and the drive by car takes 50 minutes. It is advisable that passengers leave straight for temple from Helipad. Our ground staff will assist the passengers with darshan at Gangotri temple. After return from temple passengers can take lunch in resort and thereafter relax and have campfire in the evening. It is recommended to visit the nearby village for an evening walk and buy pure wool stuff (sweaters, shawls n mufflers) made by local tribal womenfolk. Program Summary: Flying from Kharsali Helipad to Harsil Helipad. Harsil to Gangotri temple by car. Dinner and Overnight stay at Kharsali / Harsil.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "Visit to Kedarnath Ji:",
        "description": "Departure Harsil Helipad | Arrival Kedarnath Helipad Guests are advised to check out from their hotel at the designated time, and will arrive at Harsil Helipad. From there they will fly towards the Guptkashi. Guests will be ferried to Kedarnath Dham from Guptkashi in helicopter shuttle. The helicopter will land at Kedarnath Helipad which is at a distance of 500 meters from the temple. Our ground staff will be there to assist you for VIP darshan. It takes approximately 2 hours for darshan and helicopter shuttle takes around 10 minutes one way. After Darshan Guests will be ferried back to Guptkashi and will be transferred by road to their hotel. Night halt will be at Guptkashi or Kedarnath. NOTE: Night halt at Kedarnath on triple and quad sharing basis on direct payment basis. The quality of accommodation available at Kedarnath Dham is just above average so passengers should not have very high expectations. Program Summary: Harsil Helipad to Sersi Helipad. Sersi to Kedarnath ji & VIP Kedarnath ji Darshan. In the Afternoon come back to Guptkashi for an Overnight stay.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "Visit to Badrinath Ji:",
        "description": "07:30 AM Departure Harsil Helipad 08:10 AM Arrival Kedarnath Helipad After breakfast, guest will check out from Guptkashi hotel and will be transferred to Guptkashi helipad. From there they will fly towards the Badrinath Dham. After arrival at Badrinath helipad passengers can check-in at Hotel which is Near to the temple. Our ground staff will assist the passengers in taking darshan at the temple. A visit to Mana village in evening is highly recommended as this is the first village after international border with China. Program Summary: Going to Kedarnath / Guptkashi Helipad From Kedarnath / Guptkashi Helipad to Badrinath Helipad Afternoon sightseeing at Mana Village Evening Swarna Aarti",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "Return to Dehradun:",
        "description": "Departure Badrinath Helipad | Arrival Sahastradhara helipad, Dehradun Early Morning ready for Special Abhishek Puja (at your own cost) at Badrinath temple is the highlight of this entire yatra. It starts sharp at 4.30 am in the morning and lasts for 2 hours. Passengers will get an opportunity to sit inside the temple and have darshan of the shringar of the deity from very close quarters. After darshan return back to hotel have breakfast and fly for Dehradun. On arrival at Dehradun helipad you will transfer to Airport / Railway station. Here Helicopter tour ends here with happy memories to be cherished forever. This is the end of Chardham Yatra. The tour ends here but memories build with UK Yatra remains ! CHAR DHAM ACCOMMODATION DETAILS OPTION #01 PACKAGE COST PER PERSON INR-2,15,000/-(Weight up to 75kg) | Extra Weight @2000/- per kg 05 Nights -06 Days | Inclusive of applicable GST Day Accommodation Hotel Name",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Helicopter Trip from Dehradun to Dehradun.",
      "All meals in hotels at all Dham (Breakfast, Lunch & Dinner).",
      "Breakfast & Dinner during the stay in Dehradun.",
      "Palki / Doli Charges service at Yamunotri.",
      "VIP darshan arrangement at all temples.",
      "Landing & Parking charges at Sersi /Sitapur/Guptkashi helipad.",
      "Local Transport for darshan and sightseeing at Gangotri, Badrinath and Kedarnath as per itinenary.",
      "Hotel accommodation in best Hotels for 04 nights at Yamunotri, Gangotri, Guptkashi and Badrinath."
    ],
    "exclusions": [
      "Any personal expenses such as laundry, phone calls, porter, pony, doli or palki charges",
      "Cost of lunch, packaged drinking water, extra beverages, or room service",
      "Special puja or VIP darshan slips not explicitly included in the package",
      "Expenses arising due to natural calamities, landslides, roadblocks, flight delays or weather disruptions",
      "Travel insurance, medical rescue, or emergency evacuation expenses",
      "Any item or service not explicitly listed under package inclusions"
    ],
    "isFeatured": true,
    "pdfBrochure": "/assets/itinerary/01. By Heli/01. Luxury Char Dham By Heli Ex_Dehradun - 5N 6D_2026.pdf",
    "pickupDrop": "Ex-Dehradun"
  },
  {
    "id": "uky-heli-02-do-dham-by-heli-ex-dehradun-3n-4d-2026",
    "title": "Do Dham (Kedarnath & Badrinath) by Helicopter (Luxury 3N/4D)",
    "destination": "Kedarnath & Badrinath",
    "duration": "3 Nights / 4 Days",
    "days": 4,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Helicopter Yatra",
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewsCount": 52,
    "overview": "UK Yatra is a premier Uttarakhand-based tour and travel company with proven expertise in operating and managing Do Dham Yatra by Helicopter, covering the sacred shrines of Kedarnath and Badrinath. With years of hands-on experience in helicopter pilgrimage operations, UK Yatra has built a strong reputation as a trusted and preferred partner for high-reliability Himalayan yatra services. “UK” stands for Uttarakhand, the spiritual heart of the Himalayas while “Yatra” signifies a purposeful and transformative journey. Supported by a robust local operational network, professional ground teams at each helipad and shrine, and deep domain knowledge of helicopter logistics, UK Yatra ensures safe, time-efficient, transparent, and well-coordinated Do Dham helicopter journeys. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra operates with complete regulatory integrity. Our customer-first approach, ethical practices, and realistic itinerary planning deliver comfort, clarity, and spiritual fulfillment, making every Do Dham helicopter yatra a seamless and memorable experience. KEDARNATH: Set in the beautiful Mandakini valley, cupped by lofty peaks, the majestic Kedarnath temple stands on a glacial terrace, remnant of an ancient glacier – long since melted. This is Lord Shiv's territory – and the region is a living testimony to his adventures and exploits. The temple is believed to have been built by the pandavs, protagonists of the Mahabharata, as a tribute to Lord Shiva having forgiven them for fratricide after an exciting chase through the Himalayas. The journey to Kedarnath – The most significant of the 12 Jyotirlingas located in different parts of India -- is to relive these ancient tales and legends, and to become one with God.",
    "highlights": [
      "VIP priority temple darshan at sacred Himalayan shrines",
      "Spectacular aerial views of snow-clad Garhwal Himalayan peaks",
      "Complete VIP ground handling and escort at Dehradun and helipads",
      "Luxury stays and premium curated dining throughout the yatra",
      "Time-efficient itinerary ideal for seniors and busy professionals"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival at Dehradun:",
        "description": "The tour Commences with pick up from Dehradun Airport or Railway Station one day prior to the Do Dham Yatra departure, followed by drop to the hotel. In the evening, our team will brief the guests about the entire Do Dham Yatra which will be conducted at 20:30Hrs. Duffle bag will be provided during the tour briefing in which necessary luggage will have to be packed by the passengers (Maximum 5Kg per person will be permitted). The overnight stay at Dehradun with dinner awaits you. Note: Our staff will take the body weight of each pilgrim during the tour briefing; hence kindly ensure you attend the same. Program Summary: Arrival, Relaxation and Refreshment at the Hotel.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "Visit to Kedarnath Dham : 12:00 Noon (Approx)",
        "description": "Departure Sahastradhara Helipad, DDN | Arrival Guptkashi Helipad After breakfast transfer you by road to Helipad. On arrival at Sahastradhara Helipad, we fly to Guptkashi Helipad then again fly to Kedarnath from same Helipad. Temple is approx. 500 meters away from helipad and will take approx. 15 min to reach. Ground Staff will accompany the group and lead us to the VIP darshan in Kedarnath temple. After darshan and Poojan, the group will fly back to Guptkashi helipad. We will have lunch & Overnight stay at hotel in Guptkashi located at the bank of river Mandakini or Kedarnath dham. NOTE: Night halt at Kedarnath on triple and quad sharing basis on direct payment basis. The quality of accommodation available at Kedarnath Dham is just above average so passengers should not have very high expectations. Program Summary: Sahastradhara Helipad to Guptkashi Helipad. Guptkashi to Kedarnath Dham. Kedarnath Dham Darshan. In Afternoon coming back to Guptkashi for an overnight stay.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "Visit to Badrinath Dham:",
        "description": "Departure Guptkashi Helipad | Arrival Badrinath Helipad The group is headed towards the Helipad at Guptkashi Helipad. From the Helipad we proceed to Badrinath. On arrival at Badrinath Helipad. The group will be Check-In to the hotel. After Lunch, we will be going to Mana village, the first Village of India after China border for sightseeing. Our ground staff will assist the guests in taking darshan at the temple. Dinner and stay at Badrinath. Program Summary: Going to Guptkashi Helipad From Guptkashi Helipad to Badrinath Helipad Afternoon sight-seeing at Mana village",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "Return to Dehradun:",
        "description": "Departure Badrinath Helipad | Arrival Sahastradhara Helipad, Dehradun After the breakfast, while we are heading back to Dehradun, see the beautiful overview of the Region, especially the picturesque view of the confluences, which is an eye-candy for nature lovers. We will fly between the beautiful valleys of thick forest and over five confluences like Vishnu Prayag, Nanda Prayag, Karna Prayag, Rudra Prayag and Dev Prayag. We will come back and drop Guests to Dehradun Airport or Railway Station. The tour ends here but memories build with UK Yatra remains! Note: Exact Schedule can be advised before a day of departure. Above mentioned schedule is tentative just for understanding the operational system & timing. Things can be changed last moment due to any operational or weather changes. DO DHAM ACCOMMODATION DETAILS PACKAGE COST PER PERSON INR-1,40,000/-(Weight up to 75 Kg.) | Extra Weight @1500/- per kg 03 Nights -04 Days | Inclusive of applicable GST Day Accommodation Hotel Name Meals",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Exclusive Helicopter services from Dehradun (Sahastradhara Helipad) to the Do Dham shrines & back.",
      "Night Accommodation at Do Dham's on double sharing basis only with all meals.",
      "Night Accommodation on double sharing basis with Dinner at Dehradun.",
      "VIP Darshans.",
      "Shri Kedarnath ji helicopter shuttle services: Guptkashi– Kedar Guptkashi.",
      "Helicopter handling charges.",
      "Taxes & other government levy.",
      "Pick up and drop from Dehradun airport or Railway Station."
    ],
    "exclusions": [
      "Any personal expenses such as laundry, phone calls, porter, pony, doli or palki charges",
      "Cost of lunch, packaged drinking water, extra beverages, or room service",
      "Special puja or VIP darshan slips not explicitly included in the package",
      "Expenses arising due to natural calamities, landslides, roadblocks, flight delays or weather disruptions",
      "Travel insurance, medical rescue, or emergency evacuation expenses",
      "Any item or service not explicitly listed under package inclusions"
    ],
    "isFeatured": true,
    "pdfBrochure": "/assets/itinerary/01. By Heli/02. Do Dham By Heli Ex_Dehradun - 3N 4D_2026.pdf",
    "pickupDrop": "Ex-Dehradun"
  },
  {
    "id": "uky-heli-03-do-dham-by-heli-ex-dehradun-same-day-2026",
    "title": "Do Dham (Kedarnath & Badrinath) by Helicopter (Luxury Same Day)",
    "destination": "Kedarnath & Badrinath",
    "duration": "Same Day VIP Return (1 Day)",
    "days": 1,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Helicopter Yatra",
    "image": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 5.0,
    "reviewsCount": 59,
    "overview": "UK Yatra is a premier Uttarakhand-based tour and travel company with proven expertise in operating and managing Do Dham Yatra by Helicopter, covering the sacred shrines of Kedarnath and Badrinath. With years of hands-on experience in helicopter pilgrimage operations, UK Yatra has built a strong reputation as a trusted and preferred partner for high-reliability Himalayan yatra services. “UK” stands for Uttarakhand, the spiritual heart of the Himalayas while “Yatra” signifies a purposeful and transformative journey. Supported by a robust local operational network, professional ground teams at each helipad and shrine, and deep domain knowledge of helicopter logistics, UK Yatra ensures safe, time-efficient, transparent, and well-coordinated Do Dham helicopter journeys. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra operates with complete regulatory integrity. Our customer-first approach, ethical practices, and realistic itinerary planning deliver comfort, clarity, and spiritual fulfillment, making every Do Dham helicopter yatra a seamless and memorable experience. KEDARNATH: Set in the beautiful Mandakini valley, cupped by lofty peaks, the majestic Kedarnath temple stands on a glacial terrace, remnant of an ancient glacier – long since melted. This is Lord Shiv's territory – and the region is a living testimony to his adventures and exploits. The temple is believed to have been built by the pandavs, protagonists of the Mahabharata, as a tribute to Lord Shiva having forgiven them for fratricide after an exciting chase through the Himalayas. The journey to Kedarnath – The most significant of the 12 Jyotirlingas located in different parts of India -- is to relive these ancient tales and legends, and to become one with God.",
    "highlights": [
      "VIP priority temple darshan at sacred Himalayan shrines",
      "Spectacular aerial views of snow-clad Garhwal Himalayan peaks",
      "Complete VIP ground handling and escort at Dehradun and helipads",
      "Luxury stays and premium curated dining throughout the yatra",
      "Time-efficient itinerary ideal for seniors and busy professionals"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Same Day VIP Helicopter Pilgrimage: Dehradun – Kedarnath – Badrinath – Dehradun",
        "description": "UK Yatra is a premier Uttarakhand-based tour and travel company with proven expertise in operating and managing Do Dham Yatra by Helicopter, covering the sacred shrines of Kedarnath and Badrinath. With years of hands-on experience in helicopter pilgrimage operations, UK Yatra has built a strong reputation as a trusted and preferred partner for high-reliability Himalayan yatra services. “UK” stands for Uttarakhand, the spiritual heart of the Himalayas while “Yatra” signifies a purposeful and transformative journey. Supported by a robust local operational network, professional ground teams at each helipad and shrine, and deep domain knowledge of helicopter logistics, UK Yatra ensures safe, time-efficient, transparent, and well-coordinated Do Dham helicopter journeys. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra operates with complete regulatory integrity. Our customer-first approach, ethical practices, and realistic itinerary planning deliver comfort, clarity, and spiritual fulfillment, making every Do Dham helicopter yatra a seamless and memorable experience. KEDARNATH: Set in the beautiful Mandakini valley, cupped by lofty peaks, the majestic Kedarnath temple stands on a glacial terrace, remnant of an ancient glacier – long since melted. This is Lord Shiv's territory – and the region is a living testimony to his adventures and exploits. The temple is believed to have been built by the pandavs, protagonists of the Mahabharata, as a tribute to Lord Shiva having forgiven them for fratricide after an exciting chase through the Himalayas. The journey to Kedarnath – The most significant of the 12 Jyotirlingas located in different parts of India -- is to relive these ancient tales and legends, and to become one with God. Dedicated staﬀ at both places for all coordination and comfortable Darshan. We have included every little detail, comfort & charge applicable from Dehradun Helipad to back Dehradun Helipad that you will encounter on your Do Dham Yatra. After booking with us you are ready to move on a journey of a lifetime.",
        "stay": "Same Day Return (No Night Stay Required)",
        "meals": "In-Flight Breakfast & Festive Lunch Included"
      }
    ],
    "inclusions": [
      "Helicopter ﬂying services by helicopter from Sahastradhara.",
      "Helipad to the Kedarnath ji, Badrinath Ji & back.",
      "VIP Darshan at Kedarnath Ji & Badrinath Ji",
      "Kedarnath Ji shuttle services",
      "Helicopter handling and landing charges.",
      "Dedicated staﬀ at both places for all coordination and comfortable Darshan.",
      "Vehicle at Badrinath Dham.",
      "All applicable Taxes."
    ],
    "exclusions": [
      "Any personal expenses such as laundry, phone calls, porter, pony, doli or palki charges",
      "Cost of lunch, packaged drinking water, extra beverages, or room service",
      "Special puja or VIP darshan slips not explicitly included in the package",
      "Expenses arising due to natural calamities, landslides, roadblocks, flight delays or weather disruptions",
      "Travel insurance, medical rescue, or emergency evacuation expenses",
      "Any item or service not explicitly listed under package inclusions"
    ],
    "isFeatured": true,
    "pdfBrochure": "/assets/itinerary/01. By Heli/03. Do Dham By Heli Ex_Dehradun - Same Day_2026.pdf",
    "pickupDrop": "Ex-Dehradun"
  },
  {
    "id": "uky-heli-04-do-dham-by-mi17-ex-dehradun-3n-4d-2026",
    "title": "Do Dham (Kedarnath & Badrinath) by Helicopter (MI-17 VIP 3N/4D)",
    "destination": "Kedarnath & Badrinath",
    "duration": "3 Nights / 4 Days",
    "days": 4,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Helicopter Yatra",
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewsCount": 66,
    "overview": "UK Yatra is a premier Uttarakhand-based tour and travel company with proven expertise in operating and managing Do Dham Yatra by Helicopter, covering the sacred shrines of Kedarnath and Badrinath. Building on our extensive experience in helicopter pilgrimage operations, we are now coming up with a more premium, safer, and highly convenient Do Dham Yatra by Helicopter using a Twin Engine Helicopter (MI-17) designed to elevate safety standards, passenger comfort, and operational reliability in the challenging Himalayan terrain. Over the years, UK Yatra has established itself as a trusted and preferred partner for high-reliability Himalayan yatra services. “UK” represents Uttarakhand, the spiritual heart of the Himalayas, while “Yatra” signifies a purposeful and transformative journey. Backed by a strong local operational network, professional ground teams deployed at every helipad and shrine, and deep domain expertise in helicopter logistics, UK Yatra ensures safe, time-efficient, transparent, and well-coordinated Do Dham helicopter journeys.",
    "highlights": [
      "VIP priority temple darshan at sacred Himalayan shrines",
      "Spectacular aerial views of snow-clad Garhwal Himalayan peaks",
      "Complete VIP ground handling and escort at Dehradun and helipads",
      "Luxury stays and premium curated dining throughout the yatra",
      "Time-efficient itinerary ideal for seniors and busy professionals"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival at Dehradun:",
        "description": "The tour Commences with pick up from Dehradun Airport or Railway Station one day prior to the Do Dham Yatra departure, followed by drop to the hotel. In the evening, our team will brief the guests about the entire Do Dham Yatra which will be conducted at 20:30Hrs. Duffle bag will be provided during the tour briefing in which necessary luggage will have to be packed by the passengers (Maximum 5Kg per person will be permitted). The overnight stay at Dehradun with dinner awaits you. Note: Our staff will take the body weight of each pilgrim during the tour briefing; hence kindly ensure you attend the same. Program Summary: Arrival, Relaxation and Refreshment at the Hotel.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "Kedarnath Dham Darshan : 07:45 – 08:30 | Dehradun to Guptkashi",
        "description": "Departure Jolly Grant Helipad, DDN | Arrival Guptkashi Helipad After breakfast, transfer you by road to Helipad (45 minutes drive). On arrival at Jolly Grant Helipad, we fly to Guptkashi Helipad and then again fly to Kedarnath from the same Helipad. Temple is approx. 500 meters away from the helipad and will take approx. 15 minutes to reach. Ground staff will accompany the group and lead us to the VIP darshan in Kedarnath temple. After Darshan and Poojan, the group of the two dham yatra by helicopter will fly back to the Guptkashi helipad. We will have lunch and an overnight stay at a hotel in Guptkashi located at the banks of the river Mandakini, or Kedarnath Dham. Note : From Guptkashi to Kedarnath, due to Govt. regulations, we will be changing from a double-engine to a shuttle service single-engine helicopter, and the passengers will be requested to maintain the same arrangement till the end of the trip for all safety reasons. Passengers travelling together in a double-engine helicopter may not travel in the same helicopter flight from Guptkashi to Kedarnath. NOTE: Night halt at Kedarnath on triple and quad sharing basis on direct payment basis. The quality of accommodation available at Kedarnath Dham is just above average so passengers should not have very high expectations. Program Summary: Jolly Grant Helipad to Guptkashi Helipad. Guptkashi to Kedarnath Dham. Kedarnath Dham Darshan. In Afternoon coming back to Guptkashi for an overnight stay.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "Badrinath Dham Darshan : 08:30 – 09:00 | Guptkashi to Badrinath",
        "description": "Departure Guptkashi Helipad | Arrival Badrinath Helipad The Kedarnath and Badrinath by Helicopter yatra group is headed towards the Helipad at Guptkashi Helipad. From the Helipad, we proceed to Badrinath. On arrival at Badrinath Helipad, the group will be Check-In to the hotel. After Lunch, we will be going to Mana village, the first Village of India after China border for sightseeing. Our ground staff will assist the guests in taking darshan at the temple. Dinner and stay at Badrinath. Program Summary: Going to Guptkashi Helipad From Guptkashi Helipad to Badrinath Helipad Afternoon sight-seeing at Mana village",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "Return to Dehradun : 07:45 – 08:45 | Badrinath to Dehradun",
        "description": "Departure Badrinath Helipad | Arrival Dehradun After the breakfast, while we are heading back to Dehradun, see the beautiful overview of the Region, especially the picturesque view of the confluences, which is an eye-candy for nature lovers. We will fly between the beautiful valleys of thick forest and over five confluences like Vishnu Prayag, Nanda Prayag, Karna Prayag, Rudra Prayag and Dev Prayag. We will come back and drop Guests to Dehradun Airport or Railway Station. The tour ends here but memories build with UK Yatra remains! Note: Exact Schedule can be advised before a day of departure. Above mentioned schedule is tentative just for understanding the operational system & timing. Things can be changed last moment due to any operational or weather changes. DO DHAM ACCOMMODATION DETAILS PACKAGE COST PER PERSON INR-1,50,000/-(Weight up to 75 Kg.) | Extra Weight @1500/- per kg 03 Nights -04 Days | Inclusive of applicable GST Day Accommodation Hotel Name Meals",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Helicopter ﬂying services by Double engine helicopter from SDRF Helipad near Jolly grant.",
      "Helipad to the Badrinath Ji, Kedarnath ji & back.",
      "In-Flight Breakfast.",
      "Lunch at Guptkashi.",
      "VIP Darshan at Kedarnath Ji & Badrinath Ji",
      "Kedarnath Ji shuttle services",
      "Helicopter handling and landing charges.",
      "Dedicated staﬀ at both places for all coordination and comfortable Darshan."
    ],
    "exclusions": [
      "Any personal expenses such as laundry, phone calls, porter, pony, doli or palki charges",
      "Cost of lunch, packaged drinking water, extra beverages, or room service",
      "Special puja or VIP darshan slips not explicitly included in the package",
      "Expenses arising due to natural calamities, landslides, roadblocks, flight delays or weather disruptions",
      "Travel insurance, medical rescue, or emergency evacuation expenses",
      "Any item or service not explicitly listed under package inclusions"
    ],
    "isFeatured": false,
    "pdfBrochure": "/assets/itinerary/01. By Heli/04. Do Dham By MI17 Ex_Dehradun - 3N 4D_2026.pdf",
    "pickupDrop": "Ex-Dehradun"
  },
  {
    "id": "uky-heli-05-do-dham-by-mi17-ex-dehradun-same-day-2026",
    "title": "Do Dham (Kedarnath & Badrinath) by Helicopter (MI-17 VIP Same Day)",
    "destination": "Kedarnath & Badrinath",
    "duration": "Same Day VIP Return (1 Day)",
    "days": 1,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Helicopter Yatra",
    "image": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewsCount": 73,
    "overview": "UK Yatra is a premier Uttarakhand-based tour and travel company with proven expertise in operating and managing Do Dham Yatra by Helicopter, covering the sacred shrines of Kedarnath and Badrinath. Building on our extensive experience in helicopter pilgrimage operations, we are now coming up with a more premium, safer, and highly convenient Do Dham Yatra by Helicopter using a Twin Engine Helicopter (MI-17) designed to elevate safety standards, passenger comfort, and operational reliability in the challenging Himalayan terrain. Over the years, UK Yatra has established itself as a trusted and preferred partner for high-reliability Himalayan yatra services. “UK” represents Uttarakhand, the spiritual heart of the Himalayas, while “Yatra” signifies a purposeful and transformative journey. Backed by a strong local operational network, professional ground teams deployed at every helipad and shrine, and deep domain expertise in helicopter logistics, UK Yatra ensures safe, time-efficient, transparent, and well-coordinated Do Dham helicopter journeys.",
    "highlights": [
      "VIP priority temple darshan at sacred Himalayan shrines",
      "Spectacular aerial views of snow-clad Garhwal Himalayan peaks",
      "Complete VIP ground handling and escort at Dehradun and helipads",
      "Luxury stays and premium curated dining throughout the yatra",
      "Time-efficient itinerary ideal for seniors and busy professionals"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Same Day VIP Helicopter Pilgrimage: Dehradun – Kedarnath – Badrinath – Dehradun",
        "description": "UK Yatra is a premier Uttarakhand-based tour and travel company with proven expertise in operating and managing Do Dham Yatra by Helicopter, covering the sacred shrines of Kedarnath and Badrinath. Building on our extensive experience in helicopter pilgrimage operations, we are now coming up with a more premium, safer, and highly convenient Do Dham Yatra by Helicopter using a Twin Engine Helicopter (MI-17) designed to elevate safety standards, passenger comfort, and operational reliability in the challenging Himalayan terrain. Over the years, UK Yatra has established itself as a trusted and preferred partner for high-reliability Himalayan yatra services. “UK” represents Uttarakhand, the spiritual heart of the Himalayas, while “Yatra” signifies a purposeful and transformative journey. Backed by a strong local operational network, professional ground teams deployed at every helipad and shrine, and deep domain expertise in helicopter logistics, UK Yatra ensures safe, time-efficient, transparent, and well-coordinated Do Dham helicopter journeys. Certified with Uttarakhand Tourism, GST registered, MSME registered, and fully compliant with the Shop & Establishment Act, UK Yatra operates with complete regulatory integrity. Our customer-first approach, ethical operating practices, and realistic itinerary planning deliver comfort, clarity, and spiritual fulfillment, making every Do Dham helicopter yatra. Now enhanced with MI-17 twin-engine capability; a seamless, secure, and memorable experience. KEDARNATH: Set in the beautiful Mandakini valley, cupped by lofty peaks, the majestic Kedarnath temple stands on a glacial terrace, remnant of an ancient glacier – long since melted. This is Lord Shiv's territory – and the region is a living testimony to his adventures and exploits. The temple is believed to have been built by the pandavs, protagonists of the Mahabharata, as a tribute to Lord Shiva having forgiven them for fratricide after an exciting chase through the Himalayas. The journey to Kedarnath – The most significant of the 12 Jyotirlingas located in different parts of India -- is to relive these ancient tales and legends, and to become one with God.",
        "stay": "Same Day Return (No Night Stay Required)",
        "meals": "In-Flight Breakfast & Festive Lunch Included"
      }
    ],
    "inclusions": [
      "Helicopter ﬂying services by Double engine helicopter from SDRF Helipad near Jolly grant.",
      "Helipad to the Badrinath Ji, Kedarnath ji & back.",
      "In-Flight Breakfast.",
      "Lunch at Guptkashi.",
      "VIP Darshan at Kedarnath Ji & Badrinath Ji",
      "Kedarnath Ji shuttle services",
      "Helicopter handling and landing charges.",
      "Dedicated staﬀ at both places for all coordination and comfortable Darshan."
    ],
    "exclusions": [
      "Any personal expenses such as laundry, phone calls, porter, pony, doli or palki charges",
      "Cost of lunch, packaged drinking water, extra beverages, or room service",
      "Special puja or VIP darshan slips not explicitly included in the package",
      "Expenses arising due to natural calamities, landslides, roadblocks, flight delays or weather disruptions",
      "Travel insurance, medical rescue, or emergency evacuation expenses",
      "Any item or service not explicitly listed under package inclusions"
    ],
    "isFeatured": false,
    "pdfBrochure": "/assets/itinerary/01. By Heli/05. Do Dham By MI17 Ex_Dehradun - Same Day_2026.pdf",
    "pickupDrop": "Ex-Dehradun"
  },
  {
    "id": "uky-roadheli-01-chardham-by-road-heli-ex-delhi-09n-10d",
    "title": "Char Dham Yatra by Road & Heli Shuttle (9N/10D)",
    "destination": "Yamunotri, Gangotri, Kedarnath & Badrinath",
    "duration": "9 Nights / 10 Days",
    "days": 10,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Road & Heli Combo",
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewsCount": 80,
    "overview": "UK Yatra is an Uttarakhand-based tour and travel company with hands-on experience in planning and operating Char Dham Yatra by road. Over the years, we have grown into a trusted name for pilgrims traveling to Yamunotri, Gangotri, Kedarnath, and Badrinath, offering journeys that are well-planned, comfortable, and spiritually fulfilling. “UK” stands for Uttarakhand, the sacred land of the Himalayas, and “Yatra” means a journey with purpose. With a strong local operational network, experienced ground teams at every key destination, and in-depth knowledge of mountain routes and pilgrimage logistics, we focus on delivering transparent and reliable road-based Char Dham journeys. Our approach is simple: personalized service, ethical travel practices, and realistic itinerary planning, so that every guest travels safely, comfortably, and without stress. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra stands for trust and professionalism, creating Char Dham Yatra experiences by road that pilgrims remember for a lifetime.",
    "highlights": [
      "Convenient helicopter shuttle flight for Kedarnath darshan (Phata/Sirsi/Guptkashi)",
      "Comfortable overland road journey through scenic river confluences (Panch Prayag)",
      "Full assistance with mandatory Char Dham biometric registration",
      "Handpicked clean mountain hotels with pure vegetarian meal plan",
      "Expert local mountain drivers with extensive hill driving experience"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "DELHI TO HARIDWAR",
        "description": "The tour begins from Delhi with a scenic drive to Haridwar, holy city located on the banks of river Ganges. Upon arrival, check-in to the hotel and explore the town on your own. In the evening, take an auto for Har Ki Pauri Ghat for the Ganga Aarti ceremony, a beautiful ritual where oil lamps are offered to the river. HT : 315 MTS. | Distance : 220 km | Time : 5-6 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "HARIDWAR TO BARKOT",
        "description": "Drive to Barkot via Mussoorie, can visit Kempty Fall (It is advisable to have lunch at Kempty Falls, as there are limited dining options available en route to Barkot). Later drive straight to Barkot, transfer to your hotel. The rest of the day is free to relax and store your energy for the Yamunotri trek the next day. Overnight stay at Barkot. Barkot Weather – Generally pleasant in summer, the temperature ranges from 25-30 °C, Winter: The Days are pleasantly cool but the nights are cold, temp ranges from 10 °C to 05 °C. HT : 1220 MTS. | Distance : 210 km | Time : 7-8 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "BARKOT TO YAMUNOTRI DHAM and RETURN BACK TO BARKOT",
        "description": "Early morning, Drive to Jankichatti/Phoolchatti, trek start from here to Yamunotri (5 km). Either by walk or by horse or by Doli at own cost. The trek passes through a lush green valley, a profusion of conifers, rhododendrons, cacti, and several species of Himalayan shrubs. | HT : 3293 MTS. | Distance : 36 km drive & 5 km Trek (one side)",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "BARKOT TO UTTARKASHI",
        "description": "Drive to Uttarkashi. Can visit Vishwanath Temple & Others. Check-in Hotel. Rest day at leisure. Overnight Stay. Uttarkashi Weather – Generally hot in summer, the temperature ranges from 30-35 °C but nights is pleasant, Cold in winters. HT : 1158 MTS | Distance : 90 km | Time : 4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "UTTARKASHI TO GANGOTRI DHAM and RETURN BACK TO UTTARKASHI",
        "description": "Early morning drive to Gangotri, en route at Gangnani take a holy dip in Garam Kund, further drive to Gangotri via beautiful Harsil Valley. Can visit Harsil, which is famous for its natural beauty and for the majestic views of the Deodar trees, and mountains. On arrival at Shree Gangotri, take a holy dip in the sacred river Ganges which is also called Bhagirathi at its origin. Perform Pooja and Darshan, after that relax for some time in the lovely surroundings. Return back to Uttarkashi. Overnight stay at Uttarkashi. HT : 3200 MTS. | Distance : 100 km | Time : 3-4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "UTTARKASHI TO PHATA / SIRSI / GUPTKASHI",
        "description": "Drive straight to Phata / Sirsi / Guptkashi via Moolgarh & Lambgaon as per ticket. This stay will be nearby helipad depending on your Heli Ticket of Kedarnath Dham. En route, you can see the beautiful river Mandakini at Tilwara. The Mandakini River comes from Kedarnath, drive alongside the river to reach Phata / Sirsi / Guptkashi. On arrival Check-In at the Hotel, evening can visit Ardh Narishwar Temple, if stay nearby temple. Overnight stay at the Hotel. HT : 1319 MTS. | Distance : 220 km | Time : 8-9 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 7,
        "title": "PHATA / SIRSI / GUPTKASHI TO KEDARNATH DHAM and RETURN BACK TO PHATA / SIRSI / GUPTKASHI",
        "description": "Early morning, proceed for Kedarnath Dham via helicopter. Upon arrival, undertake the sacred Kedarnath Darshan and subsequently return to Phata / Sirsi / Guptkashi as per the scheduled helicopter service. Our designated driver will facilitate a timely transfer to your pre-booked helipad in alignment with your helicopter departure schedule. Guests are requested to share their arrival time in advance to ensure seamless pick-up coordination. Post darshan, trek back to the helipad as per the allotted reporting time mentioned on the ticket and board the return helicopter to Phata / Sirsi / Guptkashi. On arrival, complete hotel check-in. Overnight stay at Phata / Sirsi / Guptkashi. Phata – HT: 1,319 m | 31 km | 10 min → Sirsi – HT: 1,370 m | 23 km | 8–10 min → Guptkashi – HT: 1,310 m | 23 km | 8–10 min NOTE: In case helicopter operations are disrupted due to weather, our team will guide guests on the best available alternative as per government advisories.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 8,
        "title": "PHATA / SIRSI / GUPTKASHI TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "After breakfast, proceed by road towards Badrinath. During the summer season, this sector generally experiences heavy traffic, therefore a substantial portion of the day is spent in transit. As per hill driving safety norms, night driving is not permitted and driver duty hours are regulated. Accordingly, the day’s journey and overnight halt will be planned at Chamoli / Bheemtala / Joshimath or the nearest feasible location en route to Badrinath, subject to traffic conditions, road status, and permissible driving hours. | HT : 1875 -1890 MTS. | Distance : 155 km | Time : 5 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 9,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO BADRINATH DHAM and RETURN BACK TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "Early morning head towards Badrinath, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal and Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are also few interesting sightseeing spot like Mana, Vyas Gufa, Mata Murti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River which you can do (Within the three km of Badrinath). Overnight stay at Chamoli / Bheemtala / Joshimath. If your stay is not in Badrinath leave early. Mana Village : Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. Vasundhara : As the name suggests, Vasundhara is a magnificent waterfall. This place is 5 km. From Badrinath out of which 2 km. is motorable upto Mana. Bhim Pul : On the other side of Mana village, a massive rock forming a natural bridge, lies over the roaring Saraswati river. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers. Vyas Gufa (cave): Near Mana Village, this is a rock-cave where Ved Vyas is believed to have composed the Mahabharata and the pauranic commentaries. Badrinath Weather: The average maximum temperature will be around 18° Celsius and the average minimum is 8° Celsius. Warm and woolen clothes are hence required for a stay in Badrinath throughout the year. Winter in Badrinath is often accompanied by snowfalls. Winter is very chilly with an average temperature of 5° Celsius. Due to the extreme climatic conditions, this time is usually closed for tourists. | HT : 3133 MTS. | Distance : 215-290 km | Time : 7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 10,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO DELHI VIA RISHIKESH / HARIDWAR",
        "description": "After breakfast, check out from the hotel and drive from Chamoli / Bheemtala / Joshimath towards Delhi. En route, visit Devprayag (the confluence of the Alaknanda and Bhagirathi rivers), Dhar Devi Temple, and witness the Ganga Aarti at Rishikesh, if time permits. Upon arrival in Delhi, the driver will drop you at Delhi Airport or Delhi Railway Station, marking the end of your Char Dham Yatra with UK Yatra. HT : 210 - 225 MTS. | Distance : 490 km | Time : 12 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Hotel accommodation as per package (Standard, Semi Deluxe, Deluxe, & Luxury).",
      "Breakfast and dinner; however, you can opt it out.",
      "Transportation as per the package booked.",
      "Kedarnath helicopter booking assistance and on-ground coordination.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseeing can be done, if time permits.",
      "Add-ons & sightseeing must be discussed before booking the package.",
      "This 09 Nights & 10 days Char Dham pilgrimage tour from Delhi offers sacred darshan of all four shrines with comfortable accommodations and facilities in between the yatra."
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea.",
      "Breakfast & Dinner in Kedarnath.",
      "Tax - GST 5%",
      "Pony, Doli or Porter for Kedarnath & Yamunotri Trek.",
      "Special Pooja or VIP Darshan in Kedarnath and Badrinath Temple.",
      "Any type of train and flight tickets."
    ],
    "isFeatured": true,
    "pdfBrochure": "/assets/itinerary/02. By Road_Heli/Delhi/01. Chardham by Road & Heli Ex Delhi - 09N 10D.pdf",
    "pickupDrop": "Ex-Delhi"
  },
  {
    "id": "uky-roadheli-02-chardham-by-road-heli-ex-delhi-10n-11d",
    "title": "Char Dham Yatra by Road & Heli Shuttle (10N/11D)",
    "destination": "Yamunotri, Gangotri, Kedarnath & Badrinath",
    "duration": "10 Nights / 11 Days",
    "days": 11,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Road & Heli Combo",
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewsCount": 87,
    "overview": "UK Yatra is an Uttarakhand-based tour and travel company with hands-on experience in planning and operating Char Dham Yatra by road. Over the years, we have grown into a trusted name for pilgrims traveling to Yamunotri, Gangotri, Kedarnath, and Badrinath, offering journeys that are well-planned, comfortable, and spiritually fulfilling. “UK” stands for Uttarakhand, the sacred land of the Himalayas, and “Yatra” means a journey with purpose. With a strong local operational network, experienced ground teams at every key destination, and in-depth knowledge of mountain routes and pilgrimage logistics, we focus on delivering transparent and reliable road-based Char Dham journeys. Our approach is simple: personalized service, ethical travel practices, and realistic itinerary planning, so that every guest travels safely, comfortably, and without stress. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra stands for trust and professionalism, creating Char Dham Yatra experiences by road that pilgrims remember for a lifetime.",
    "highlights": [
      "Convenient helicopter shuttle flight for Kedarnath darshan (Phata/Sirsi/Guptkashi)",
      "Comfortable overland road journey through scenic river confluences (Panch Prayag)",
      "Full assistance with mandatory Char Dham biometric registration",
      "Handpicked clean mountain hotels with pure vegetarian meal plan",
      "Expert local mountain drivers with extensive hill driving experience"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "DELHI TO HARIDWAR",
        "description": "The tour begins from Delhi with a scenic drive to Haridwar, holy city located on the banks of river Ganges. Upon arrival, check-in to the hotel and explore the town on your own. In the evening, take an auto for Har Ki Pauri Ghat for the Ganga Aarti ceremony, a beautiful ritual where oil lamps are offered to the river. HT : 315 MTS. | Distance : 220 km | Time : 5-6 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "HARIDWAR TO BARKOT",
        "description": "Drive to Barkot via Mussoorie, can visit Kempty Fall (It is advisable to have lunch at Kempty Falls, as there are limited dining options available en route to Barkot). Later drive straight to Barkot, transfer to your hotel. The rest of the day is free to relax and store your energy for the Yamunotri trek the next day. Overnight stay at Barkot. Barkot Weather – Generally pleasant in summer, the temperature ranges from 25-30 °C, Winter: The Days are pleasantly cool but the nights are cold, temp ranges from 10 °C to 05 °C. HT : 1220 MTS. | Distance : 210 km | Time : 7-8 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "BARKOT TO YAMUNOTRI DHAM and RETURN BACK TO BARKOT",
        "description": "Early morning, Drive to Jankichatti/Phoolchatti, trek start from here to Yamunotri (5 km). Either by walk or by horse or by Doli at own cost. The trek passes through a lush green valley, a profusion of conifers, rhododendrons, cacti, and several species of Himalayan shrubs. HT : 3293 MTS. | Distance : 36 km drive & 5 km Trek (one side)",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "BARKOT TO UTTARKASHI",
        "description": "Drive to Uttarkashi. Can visit Vishwanath Temple & Others. Check-in Hotel. Rest day at leisure. Overnight Stay. Uttarkashi Weather – Generally hot in summer, the temperature ranges from 30-35 °C but nights is pleasant, Cold in winters. HT : 1158 MTS | Distance : 90 km | Time : 4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "UTTARKASHI TO GANGOTRI DHAM and RETURN BACK TO UTTARKASHI",
        "description": "Early morning drive to Gangotri, en route at Gangnani take a holy dip in Garam Kund, further drive to Gangotri via beautiful Harsil Valley. Can visit Harsil, which is famous for its natural beauty and for the majestic views of the Deodar trees, and mountains. On arrival at Shree Gangotri, take a holy dip in the sacred river Ganges which is also called Bhagirathi at its origin. Perform Pooja and Darshan, after that relax for some time in the lovely surroundings. Return back to Uttarkashi. Overnight stay at Uttarkashi. HT : 3200 MTS. | Distance : 100 km | Time : 3-4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "UTTARKASHI TO PHATA / SIRSI / GUPTKASHI",
        "description": "Drive straight to Phata / Sirsi / Guptkashi via Moolgarh & Lambgaon as per ticket. This stay will be nearby helipad depending on your Heli Ticket of Kedarnath Dham. En route, you can see the beautiful river Mandakini at Tilwara. The Mandakini River comes from Kedarnath, drive alongside the river to reach Phata / Sirsi / Guptkashi. On arrival Check-In at the Hotel, evening can visit Ardh Narishwar Temple, if stay nearby temple. Overnight stay at the Hotel. HT : 1319 MTS. | Distance : 220 km | Time : 8-9 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 7,
        "title": "PHATA / SIRSI / GUPTKASHI TO KEDARNATH DHAM",
        "description": "Early Morning departure for Kedarnath Dham. Enjoy Kedarnath Darshan & overnight stay in Camp / Dormitory / Hotel (as per package). Morning our driver will transfer you your pre-book Helipad. You can inform the driver about your arrival time so that driver will be there to pick-up you. Phata – HT: 1,319 m | 31 km | 10 min → Sirsi – HT: 1,370 m | 23 km | 8–10 min → Guptkashi – HT: 1,310 m | 23 km | 8–10 min",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 8,
        "title": "KEDARNATH DHAM TO PHATA / SIRSI / GUPTKASHI",
        "description": "Early morning you get up before dawn and after taking bath you are at the temple by 4:45 am for the ‘Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostrate with your head touching the deity etc. After Temple Darshan, trek down to helipad as per ticket time and further flying to Phata / Sirsi / Guptkashi as per ticket. Check-in Hotel. Overnight stay at Phata / Sirsi / Guptkashi. Phata – HT: 1,319 m | 31 km | 10 min → Sirsi – HT: 1,370 m | 23 km | 8–10 min → Guptkashi – HT: 1,310 m | 23 km | 8–10 min",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 9,
        "title": "PHATA / SIRSI / GUPTKASHI TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "After breakfast, proceed by road towards Badrinath. During the summer season, this sector generally experiences heavy traffic, therefore a substantial portion of the day is spent in transit. As per hill driving safety norms, night driving is not permitted and driver duty hours are regulated. Accordingly, the day’s journey and overnight halt will be planned at Chamoli / Bheemtala / Joshimath or the nearest feasible location en route to Badrinath, subject to traffic conditions, road status, and permissible driving hours. | HT : 1875 -1890 MTS. | Distance : 155 km | Time : 5 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 10,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO BADRINATH DHAM and RETURN BACK TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "Early morning head towards Badrinath, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal and Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are also few interesting sightseeing spot like Mana, Vyas Gufa, Mata Murti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River which you can do (Within the three km of Badrinath). Overnight stay at Chamoli / Bheemtala / Joshimath. If your stay is not in Badrinath leave early. Mana Village : Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. Vasundhara : As the name suggests, Vasundhara is a magnificent waterfall. This place is 5 km. From Badrinath out of which 2 km. is motorable upto Mana. Bhim Pul : On the other side of Mana village, a massive rock forming a natural bridge, lies over the roaring Saraswati river. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers. Vyas Gufa (cave): Near Mana Village, this is a rock-cave where Ved Vyas is believed to have composed the Mahabharata and the pauranic commentaries. Badrinath Weather: The average maximum temperature will be around 18° Celsius and the average minimum is 8° Celsius. Warm and woolen clothes are hence required for a stay in Badrinath throughout the year. Winter in Badrinath is often accompanied by snowfalls. Winter is very chilly with an average temperature of 5° Celsius. Due to the extreme climatic conditions, this time is usually closed for tourists. | HT : 3133 MTS. | Distance : 215-290 km | Time : 7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 11,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO DELHI VIA RISHIKESH / HARIDWAR",
        "description": "After breakfast, check out from the hotel and drive from Chamoli / Bheemtala / Joshimath towards Delhi. En route, visit Devprayag (the confluence of the Alaknanda and Bhagirathi rivers), Dhar Devi Temple, and witness the Ganga Aarti at Rishikesh, if time permits. Upon arrival in Delhi, the driver will drop you at Delhi Airport or Delhi Railway Station, marking the end of your Char Dham Yatra with UK Yatra. HT : 210 - 225 MTS. | Distance : 490 km | Time : 12 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Hotel accommodation as per package (Standard, Semi Deluxe, Deluxe, & Luxury).",
      "Breakfast and dinner; however, you can opt it out.",
      "Transportation as per the package booked.",
      "Kedarnath helicopter booking assistance and on-ground coordination.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseeing can be done, if time permits.",
      "Add-ons & sightseeing must be discussed before booking the package.",
      "This 10 Nights & 11 days Char Dham pilgrimage tour from Delhi offers sacred darshan of all four shrines with comfortable accommodations and facilities in between the yatra."
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea.",
      "Breakfast & Dinner in Kedarnath.",
      "Tax - GST 5%",
      "Pony, Doli or Porter for Kedarnath & Yamunotri Trek.",
      "Special Pooja or VIP Darshan in Kedarnath and Badrinath Temple.",
      "Any type of train and flight tickets."
    ],
    "isFeatured": false,
    "pdfBrochure": "/assets/itinerary/02. By Road_Heli/Delhi/02. Chardham by Road & Heli Ex Delhi - 10N 11D.pdf",
    "pickupDrop": "Ex-Delhi"
  },
  {
    "id": "uky-roadheli-03-dodham-by-road-heli-ex-delhi-05n-06d",
    "title": "Do Dham Yatra by Road & Heli Shuttle (5N/6D)",
    "destination": "Kedarnath & Badrinath",
    "duration": "5 Nights / 6 Days",
    "days": 6,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Road & Heli Combo",
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewsCount": 94,
    "overview": "UK Yatra is an Uttarakhand-based tour and travel company with hands-on experience in planning and operating Do Dham Yatra by road. Over the years, we have grown into a trusted name for pilgrims traveling to Yamunotri, Gangotri, Kedarnath, and Badrinath, offering journeys that are well-planned, comfortable, and spiritually fulfilling. “UK” stands for Uttarakhand, the sacred land of the Himalayas, and “Yatra” means a journey with purpose. With a strong local operational network, experienced ground teams at every key destination, and in-depth knowledge of mountain routes and pilgrimage logistics, we focus on delivering transparent and reliable road-based Do Dham journeys. Our approach is simple: personalized service, ethical travel practices, and realistic itinerary planning, so that every guest travels safely, comfortably, and without stress. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra stands for trust and professionalism, creating Do Dham Yatra experiences by road that pilgrims remember for a lifetime.",
    "highlights": [
      "Convenient helicopter shuttle flight for Kedarnath darshan (Phata/Sirsi/Guptkashi)",
      "Comfortable overland road journey through scenic river confluences (Panch Prayag)",
      "Full assistance with mandatory Char Dham biometric registration",
      "Handpicked clean mountain hotels with pure vegetarian meal plan",
      "Expert local mountain drivers with extensive hill driving experience"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "DELHI TO HARIDWAR",
        "description": "The tour begins from Delhi with a scenic drive to Haridwar, holy city located on the banks of river Ganges. Upon arrival, check-in to the hotel and explore the town on your own. In the evening, take an auto for Har Ki Pauri Ghat for the Ganga Aarti ceremony, a beautiful ritual where oil lamps are offered to the river. HT : 315 MTS. | Distance : 220 km | Time : 5-6 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "HARIDWAR TO PHATA / SIRSI / GUPTKASHI",
        "description": "After breakfast, proceed by road from Haridwar towards Phata / Sirsi / Guptkashi via Rishikesh and Devprayag, en route to Kedarnath Dham. This sector involves a long-distance road journey and, during peak pilgrimage periods, may experience high traffic density, which could impact overall travel duration. In accordance with helicopter ticket allocation and helipad proximity, the day’s travel plan and overnight halt will be strategically finalized at Phata / Sirsi / Guptkashi, ensuring seamless coordination with the scheduled helicopter departure. Upon arrival, complete hotel check-in. In the evening, subject to time availability, visit the revered Ardh Narishwar Temple. Overnight stay at the hotel. HT : 1319 MTS. | Distance : 220 kms | Time : 8-9 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "PHATA / SIRSI / GUPTKASHI TO KEDARNATH DHAM and RETURN BACK TO PHATA / SIRSI / GUPTKASHI",
        "description": "Early morning, proceed for Kedarnath Dham via helicopter. Upon arrival, undertake the sacred Kedarnath Darshan and subsequently return to Phata / Sirsi / Guptkashi as per the scheduled helicopter service. Our designated driver will facilitate a timely transfer to your pre-booked helipad in alignment with your helicopter departure schedule. Guests are requested to share their arrival time in advance to ensure seamless pick-up coordination. Post darshan, trek back to the helipad as per the allotted reporting time mentioned on the ticket and board the return helicopter to Phata / Sirsi / Guptkashi. On arrival, complete hotel check-in. Overnight stay at Phata / Sirsi / Guptkashi. Phata – HT: 1,319 m | 31 km | 10 min → Sirsi – HT: 1,370 m | 23 km | 8–10 min → Guptkashi – HT: 1,310 m | 23 km | 8–10 min NOTE: In case helicopter operations are disrupted due to weather, our team will guide guests on the best available alternative as per government advisories.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "PHATA / SIRSI / GUPTKASHI TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "After breakfast, proceed by road towards Badrinath. During the summer season, this sector generally experiences heavy traffic, therefore a substantial portion of the day is spent in transit. As per hill driving safety norms, night driving is not permitted and driver duty hours are regulated. Accordingly, the day’s journey and overnight halt will be planned at Chamoli / Bheemtala / Joshimath or the nearest feasible location en route to Badrinath, subject to traffic conditions, road status, and permissible driving hours. | HT : 1875 -1890 MTS. | Distance : 155 km | Time : 5 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO BADRINATH DHAM and RETURN BACK TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "Early morning head towards Badrinath, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal and Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are also few interesting sightseeing spot like Mana, Vyas Gufa, Mata Murti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River which you can do (Within the three km of Badrinath). Overnight stay at Chamoli / Bheemtala / Joshimath. If your stay is not in Badrinath leave early. Mana Village : Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. Vasundhara : As the name suggests, Vasundhara is a magnificent waterfall. This place is 5 km. From Badrinath out of which 2 km. is motorable upto Mana. Bhim Pul : On the other side of Mana village, a massive rock forming a natural bridge, lies over the roaring Saraswati river. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers. Vyas Gufa (cave): Near Mana Village, this is a rock-cave where Ved Vyas is believed to have composed the Mahabharata and the pauranic commentaries. Badrinath Weather: The average maximum temperature will be around 18° Celsius and the average minimum is 8° Celsius. Warm and woolen clothes are hence required for a stay in Badrinath throughout the year. Winter in Badrinath is often accompanied by snowfalls. Winter is very chilly with an average temperature of 5° Celsius. Due to the extreme climatic conditions, this time is usually closed for tourists. | HT : 3133 MTS. | Distance : 215-290 km | Time : 7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO DELHI VIA RISHIKESH / HARIDWAR",
        "description": "After breakfast, check out from the hotel and drive from Chamoli / Bheemtala / Joshimath towards Delhi. En route, visit Devprayag (the confluence of the Alaknanda and Bhagirathi rivers), Dhar Devi Temple, and witness the Ganga Aarti at Rishikesh, if time permits. Upon arrival in Delhi, the driver will drop you at Delhi Airport or Delhi Railway Station, marking the end of your Do Dham Yatra with UK Yatra. HT : 210 - 225 MTS. | Distance : 490 km | Time : 12 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Hotel accommodation as per package (Standard, Semi Deluxe, Deluxe, & Luxury).",
      "Breakfast and dinner; however, you can opt it out.",
      "Transportation as per the package booked.",
      "Kedarnath helicopter booking assistance and on-ground coordination.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseeing can be done, if time permits.",
      "Add-ons & sightseeing must be discussed before booking the package.",
      "This 5 Nights & 6 days Do Dham pilgrimage tour from Delhi offers sacred darshan of all four shrines with comfortable accommodations and facilities in between the yatra."
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea.",
      "Breakfast & Dinner in Kedarnath.",
      "Tax - GST 5%",
      "Pony, Doli or Porter for Kedarnath & Yamunotri Trek.",
      "Special Pooja or VIP Darshan in Kedarnath and Badrinath Temple.",
      "Any type of train and flight tickets."
    ],
    "isFeatured": false,
    "pdfBrochure": "/assets/itinerary/02. By Road_Heli/Delhi/03. Dodham by Road & Heli Ex Delhi - 05N 06D.pdf",
    "pickupDrop": "Ex-Delhi"
  },
  {
    "id": "uky-roadheli-04-dodham-by-road-heli-ex-delhi-06n-07d",
    "title": "Do Dham Yatra by Road & Heli Shuttle (6N/7D)",
    "destination": "Kedarnath & Badrinath",
    "duration": "6 Nights / 7 Days",
    "days": 7,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Road & Heli Combo",
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 5.0,
    "reviewsCount": 101,
    "overview": "UK Yatra is an Uttarakhand-based tour and travel company with hands-on experience in planning and operating Do Dham Yatra by road. Over the years, we have grown into a trusted name for pilgrims traveling to Yamunotri, Gangotri, Kedarnath, and Badrinath, offering journeys that are well-planned, comfortable, and spiritually fulfilling. “UK” stands for Uttarakhand, the sacred land of the Himalayas, and “Yatra” means a journey with purpose. With a strong local operational network, experienced ground teams at every key destination, and in-depth knowledge of mountain routes and pilgrimage logistics, we focus on delivering transparent and reliable road-based Do Dham journeys. Our approach is simple: personalized service, ethical travel practices, and realistic itinerary planning, so that every guest travels safely, comfortably, and without stress. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra stands for trust and professionalism, creating Do Dham Yatra experiences by road that pilgrims remember for a lifetime.",
    "highlights": [
      "Convenient helicopter shuttle flight for Kedarnath darshan (Phata/Sirsi/Guptkashi)",
      "Comfortable overland road journey through scenic river confluences (Panch Prayag)",
      "Full assistance with mandatory Char Dham biometric registration",
      "Handpicked clean mountain hotels with pure vegetarian meal plan",
      "Expert local mountain drivers with extensive hill driving experience"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "DELHI TO HARIDWAR",
        "description": "The tour begins from Delhi with a scenic drive to Haridwar, holy city located on the banks of river Ganges. Upon arrival, check-in to the hotel and explore the town on your own. In the evening, take an auto for Har Ki Pauri Ghat for the Ganga Aarti ceremony, a beautiful ritual where oil lamps are offered to the river. HT : 315 MTS. | Distance : 220 km | Time : 5-6 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "HARIDWAR TO PHATA / SIRSI / GUPTKASHI",
        "description": "After breakfast, proceed by road from Haridwar towards Phata / Sirsi / Guptkashi via Rishikesh and Devprayag, en route to Kedarnath Dham. This sector involves a long-distance road journey and, during peak pilgrimage periods, may experience high traffic density, which could impact overall travel duration. In accordance with helicopter ticket allocation and helipad proximity, the day’s travel plan and overnight halt will be strategically finalized at Phata / Sirsi / Guptkashi, ensuring seamless coordination with the scheduled helicopter departure. Upon arrival, complete hotel check-in. In the evening, subject to time availability, visit the revered Ardh Narishwar Temple. Overnight stay at the hotel. HT : 1319 MTS. |Distance : 220 kms | Time : 8-9 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "PHATA / SIRSI / GUPTKASHI TO KEDARNATH DHAM",
        "description": "Early Morning departure for Kedarnath Dham. Enjoy Kedarnath Darshan & overnight stay in Camp / Dormitory / Hotel (as per package). Morning our driver will transfer you your pre-book Helipad. You can inform the driver about your arrival time so that driver will be there to pick-up you. Phata – HT: 1,319 m | 31 km | 10 min → Sirsi – HT: 1,370 m | 23 km | 8–10 min → Guptkashi – HT: 1,310 m | 23 km | 8–10 min",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "KEDARNATH DHAM TO PHATA / SIRSI / GUPTKASHI",
        "description": "Early morning you get up before dawn and after taking bath you are at the temple by 4:45 am for the ‘Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostrate with your head touching the deity etc. After Temple Darshan, trek down to helipad as per ticket time and further flying to Phata / Sirsi / Guptkashi as per ticket. Check-in Hotel. Overnight stay at Phata / Sirsi / Guptkashi. Phata – HT: 1,319 m | 31 km | 10 min → Sirsi – HT: 1,370 m | 23 km | 8–10 min → Guptkashi – HT: 1,310 m | 23 km | 8–10 min NOTE: In case helicopter operations are disrupted due to weather, our team will guide guests on the best available alternative as per government advisories.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "PHATA / SIRSI / GUPTKASHI TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "After breakfast, proceed by road towards Badrinath. During the summer season, this sector generally experiences heavy traffic, therefore a substantial portion of the day is spent in transit. As per hill driving safety norms, night driving is not permitted and driver duty hours are regulated. Accordingly, the day’s journey and overnight halt will be planned at Chamoli / Bheemtala / Joshimath or the nearest feasible location en route to Badrinath, subject to traffic conditions, road status, and permissible driving hours. HT : 1875 -1890 MTS. | Distance : 155 km | Time : 5 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO BADRINATH DHAM and RETURN BACK TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "Early morning head towards Badrinath, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal and Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are also few interesting sightseeing spot like Mana, Vyas Gufa, Mata Murti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River which you can do (Within the three km of Badrinath). Overnight stay at Chamoli / Bheemtala / Joshimath. If your stay is not in Badrinath leave early. Mana Village : Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. Vasundhara : As the name suggests, Vasundhara is a magnificent waterfall. This place is 5 km. From Badrinath out of which 2 km. is motorable upto Mana. Bhim Pul : On the other side of Mana village, a massive rock forming a natural bridge, lies over the roaring Saraswati river. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers. Vyas Gufa (cave): Near Mana Village, this is a rock-cave where Ved Vyas is believed to have composed the Mahabharata and the pauranic commentaries. Badrinath Weather: The average maximum temperature will be around 18° Celsius and the average minimum is 8° Celsius. Warm and woolen clothes are hence required for a stay in Badrinath throughout the year. Winter in Badrinath is often accompanied by snowfalls. Winter is very chilly with an average temperature of 5° Celsius. Due to the extreme climatic conditions, this time is usually closed for tourists. | HT : 3133 MTS. | Distance : 215-290 km | Time : 7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 7,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO DELHI VIA RISHIKESH / HARIDWAR",
        "description": "After breakfast, check out from the hotel and drive from Chamoli / Bheemtala / Joshimath towards Delhi. En route, visit Devprayag (the confluence of the Alaknanda and Bhagirathi rivers), Dhar Devi Temple, and witness the Ganga Aarti at Rishikesh, if time permits. Upon arrival in Delhi, the driver will drop you at Delhi Airport or Delhi Railway Station, marking the end of your Do Dham Yatra with UK Yatra. | HT : 210 - 225 MTS. | Distance : 490 km | Time : 12 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Hotel accommodation as per package (Standard, Semi Deluxe, Deluxe, & Luxury).",
      "Breakfast and dinner; however, you can opt it out.",
      "Transportation as per the package booked.",
      "Kedarnath helicopter booking assistance and on-ground coordination.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseeing can be done, if time permits.",
      "Add-ons & sightseeing must be discussed before booking the package.",
      "This 6 Nights & 7 days Do Dham pilgrimage tour from Delhi offers sacred darshan of all four shrines with comfortable accommodations and facilities in between the yatra."
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea.",
      "Breakfast & Dinner in Kedarnath.",
      "Tax - GST 5%",
      "Pony, Doli or Porter for Kedarnath & Yamunotri Trek.",
      "Special Pooja or VIP Darshan in Kedarnath and Badrinath Temple.",
      "Any type of train and flight tickets."
    ],
    "isFeatured": false,
    "pdfBrochure": "/assets/itinerary/02. By Road_Heli/Delhi/04. Dodham by Road & Heli Ex Delhi - 06N 07D.pdf",
    "pickupDrop": "Ex-Delhi"
  },
  {
    "id": "uky-roadheli-01-chardham-by-road-heli-ex-haridwar-08n-09d",
    "title": "Char Dham Yatra by Road & Heli Shuttle (8N/9D)",
    "destination": "Yamunotri, Gangotri, Kedarnath & Badrinath",
    "duration": "8 Nights / 9 Days",
    "days": 9,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Road & Heli Combo",
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewsCount": 108,
    "overview": "UK Yatra is an Uttarakhand-based tour and travel company with hands-on experience in planning and operating Char Dham Yatra by road. Over the years, we have grown into a trusted name for pilgrims traveling to Yamunotri, Gangotri, Kedarnath, and Badrinath, offering journeys that are well-planned, comfortable, and spiritually fulfilling. “UK” stands for Uttarakhand, the sacred land of the Himalayas, and “Yatra” means a journey with purpose. With a strong local operational network, experienced ground teams at every key destination, and in-depth knowledge of mountain routes and pilgrimage logistics, we focus on delivering transparent and reliable road-based Char Dham journeys. Our approach is simple: personalized service, ethical travel practices, and realistic itinerary planning, so that every guest travels safely, comfortably, and without stress. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra stands for trust and professionalism, creating Char Dham Yatra experiences by road that pilgrims remember for a lifetime.",
    "highlights": [
      "Convenient helicopter shuttle flight for Kedarnath darshan (Phata/Sirsi/Guptkashi)",
      "Comfortable overland road journey through scenic river confluences (Panch Prayag)",
      "Full assistance with mandatory Char Dham biometric registration",
      "Handpicked clean mountain hotels with pure vegetarian meal plan",
      "Expert local mountain drivers with extensive hill driving experience"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "HARIDWAR TO BARKOT",
        "description": "The journey commences from Haridwar, the sacred city situated on the banks of the River Ganga. Proceed towards Barkot via Mussoorie, with an optional stop at Kempty Falls. It is recommended to have lunch at Kempty Falls, as dining options are limited along the route thereafter. Continue the drive to Barkot and check in to the hotel. The remainder of the day is kept free for rest and acclimatization, allowing guests to conserve energy for the Yamunotri trek scheduled for the following day. Overnight stay at Barkot. Barkot Weather : Summers are generally pleasant, with temperatures ranging between 25°C and 30°C. During winters, days remain cool while nights can be cold, with temperatures ranging from 10°C to 5°C. HT : 1220 MTS. | Distance : 210 km | Time : 7-8 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "BARKOT TO YAMUNOTRI DHAM and RETURN BACK TO BARKOT",
        "description": "Early morning, Drive to Jankichatti/Phoolchatti, trek start from here to Yamunotri (5 km). Either by walk or by horse or by Doli at own cost. The trek passes through a lush green valley, a profusion of conifers, rhododendrons, cacti, and several species of Himalayan shrubs. | HT : 3293 MTS. | Distance : 36 km drive & 5 km Trek (one side)",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "BARKOT TO UTTARKASHI",
        "description": "Drive to Uttarkashi. Can visit Vishwanath Temple & Others. Check-in Hotel. Rest day at leisure. Overnight Stay. Uttarkashi Weather – Generally hot in summer, the temperature ranges from 30-35 °C but nights is pleasant, Cold in winters. HT : 1158 MTS | Distance : 90 km | Time : 4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "UTTARKASHI TO GANGOTRI DHAM and RETURN BACK TO UTTARKASHI",
        "description": "Early morning drive to Gangotri, en route at Gangnani take a holy dip in Garam Kund, further drive to Gangotri via beautiful Harsil Valley. Can visit Harsil, which is famous for its natural beauty and for the majestic views of the Deodar trees, and mountains. On arrival at Shree Gangotri, take a holy dip in the sacred river Ganges which is also called Bhagirathi at its origin. Perform Pooja and Darshan, after that relax for some time in the lovely surroundings. Return back to Uttarkashi. Overnight stay at Uttarkashi. HT : 3200 MTS. | Distance : 100 km | Time : 3-4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "UTTARKASHI TO PHATA / SIRSI / GUPTKASHI",
        "description": "Drive straight to Phata / Sirsi / Guptkashi via Moolgarh & Lambgaon as per ticket. This stay will be nearby helipad depending on your Heli Ticket of Kedarnath Dham. En route, you can see the beautiful river Mandakini at Tilwara. The Mandakini River comes from Kedarnath, drive alongside the river to reach Phata / Sirsi / Guptkashi. On arrival Check-In at the Hotel, evening can visit Ardh Narishwar Temple, if stay nearby temple. Overnight stay at the Hotel. HT : 1319 MTS. | Distance : 220 km | Time : 8-9 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "PHATA / SIRSI / GUPTKASHI TO KEDARNATH DHAM and RETURN BACK TO PHATA / SIRSI / GUPTKASHI",
        "description": "Early morning, proceed for Kedarnath Dham via helicopter. Upon arrival, undertake the sacred Kedarnath Darshan and subsequently return to Phata / Sirsi / Guptkashi as per the scheduled helicopter service. Our designated driver will facilitate a timely transfer to your pre-booked helipad in alignment with your helicopter departure schedule. Guests are requested to share their arrival time in advance to ensure seamless pick-up coordination. Post darshan, trek back to the helipad as per the allotted reporting time mentioned on the ticket and board the return helicopter to Phata / Sirsi / Guptkashi. On arrival, complete hotel check-in. Overnight stay at Phata / Sirsi / Guptkashi. Phata – HT: 1,319 m | 31 km | 10 min → Sirsi – HT: 1,370 m | 23 km | 8–10 min → Guptkashi – HT: 1,310 m | 23 km | 8–10 min NOTE: In case helicopter operations are disrupted due to weather, our team will guide guests on the best available alternative as per government advisories.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 7,
        "title": "PHATA / SIRSI / GUPTKASHI TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "After breakfast, proceed by road towards Badrinath. During the summer season, this sector generally experiences heavy traffic, therefore a substantial portion of the day is spent in transit. As per hill driving safety norms, night driving is not permitted and driver duty hours are regulated. Accordingly, the day’s journey and overnight halt will be planned at Chamoli / Bheemtala / Joshimath or the nearest feasible location en route to Badrinath, subject to traffic conditions, road status, and permissible driving hours. | HT : 1875 -1890 MTS. | Distance : 155 km | Time : 5 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 8,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO BADRINATH DHAM and RETURN BACK TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "Early morning head towards Badrinath, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal and Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are also few interesting sightseeing spot like Mana, Vyas Gufa, Mata Murti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River which you can do (Within the three km of Badrinath). Overnight stay at Chamoli / Bheemtala / Joshimath. If your stay is not in Badrinath leave early. Mana Village : Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. Vasundhara : As the name suggests, Vasundhara is a magnificent waterfall. This place is 5 km. From Badrinath out of which 2 km. is motorable upto Mana. Bhim Pul : On the other side of Mana village, a massive rock forming a natural bridge, lies over the roaring Saraswati river. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers. Vyas Gufa (cave): Near Mana Village, this is a rock-cave where Ved Vyas is believed to have composed the Mahabharata and the pauranic commentaries. Badrinath Weather: The average maximum temperature will be around 18° Celsius and the average minimum is 8° Celsius. Warm and woolen clothes are hence required for a stay in Badrinath throughout the year. Winter in Badrinath is often accompanied by snowfalls. Winter is very chilly with an average temperature of 5° Celsius. Due to the extreme climatic conditions, this time is usually closed for tourists. | HT : 3133 MTS. | Distance : 215-290 km | Time : 7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 9,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO HARIDWAR VIA RISHIKESH",
        "description": "After breakfast, check out from the hotel and drive from Chamoli / Bheemtala / Joshimath towards Haridwar. En route, visit Devprayag (the confluence of the Alaknanda and Bhagirathi rivers), Dhar Devi Temple, and witness the Ganga Aarti at Rishikesh, if time permits. Upon arrival in Haridwar, the driver will drop you at Haridwar Bus Stand / Railway Station / Dehradun Airport, marking the end of your Char Dham Yatra with UK Yatra. HT : 315 MTS. | Distance : 250 km | Time : 07 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Hotel accommodation as per package (Standard, Semi Deluxe, Deluxe, & Luxury).",
      "Breakfast and dinner; however, you can opt it out.",
      "Transportation as per the package booked.",
      "Kedarnath helicopter booking assistance and on-ground coordination.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseeing can be done, if time permits.",
      "Add-ons & sightseeing must be discussed before booking the package.",
      "This 08 Nights & 09 days Char Dham pilgrimage tour from Haridwar offers sacred darshan of all four shrines with comfortable accommodations and facilities in between the yatra."
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea.",
      "Breakfast & Dinner in Kedarnath.",
      "Tax - GST 5%",
      "Pony, Doli or Porter for Kedarnath & Yamunotri Trek.",
      "Special Pooja or VIP Darshan in Kedarnath and Badrinath Temple.",
      "Any type of train and flight tickets."
    ],
    "isFeatured": true,
    "pdfBrochure": "/assets/itinerary/02. By Road_Heli/Haridwar/01. Chardham by Road & Heli Ex Haridwar - 08N 09D.pdf",
    "pickupDrop": "Ex-Haridwar"
  },
  {
    "id": "uky-roadheli-02-chardham-by-road-heli-ex-haridwar-09n-10d",
    "title": "Char Dham Yatra by Road & Heli Shuttle (9N/10D)",
    "destination": "Yamunotri, Gangotri, Kedarnath & Badrinath",
    "duration": "9 Nights / 10 Days",
    "days": 10,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Road & Heli Combo",
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewsCount": 115,
    "overview": "UK Yatra is an Uttarakhand-based tour and travel company with hands-on experience in planning and operating Char Dham Yatra by road. Over the years, we have grown into a trusted name for pilgrims traveling to Yamunotri, Gangotri, Kedarnath, and Badrinath, offering journeys that are well-planned, comfortable, and spiritually fulfilling. “UK” stands for Uttarakhand, the sacred land of the Himalayas, and “Yatra” means a journey with purpose. With a strong local operational network, experienced ground teams at every key destination, and in-depth knowledge of mountain routes and pilgrimage logistics, we focus on delivering transparent and reliable road-based Char Dham journeys. Our approach is simple: personalized service, ethical travel practices, and realistic itinerary planning, so that every guest travels safely, comfortably, and without stress. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra stands for trust and professionalism, creating Char Dham Yatra experiences by road that pilgrims remember for a lifetime.",
    "highlights": [
      "Convenient helicopter shuttle flight for Kedarnath darshan (Phata/Sirsi/Guptkashi)",
      "Comfortable overland road journey through scenic river confluences (Panch Prayag)",
      "Full assistance with mandatory Char Dham biometric registration",
      "Handpicked clean mountain hotels with pure vegetarian meal plan",
      "Expert local mountain drivers with extensive hill driving experience"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "HARIDWAR TO BARKOT",
        "description": "The journey commences from Haridwar, the sacred city situated on the banks of the River Ganga. Proceed towards Barkot via Mussoorie, with an optional stop at Kempty Falls. It is recommended to have lunch at Kempty Falls, as dining options are limited along the route thereafter. Continue the drive to Barkot and check in to the hotel. The remainder of the day is kept free for rest and acclimatization, allowing guests to conserve energy for the Yamunotri trek scheduled for the following day. Overnight stay at Barkot. Barkot Weather : Summers are generally pleasant, with temperatures ranging between 25°C and 30°C. During winters, days remain cool while nights can be cold, with temperatures ranging from 10°C to 5°C. HT : 1220 MTS. | Distance : 210 km | Time : 7-8 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "BARKOT TO YAMUNOTRI DHAM and RETURN BACK TO BARKOT",
        "description": "Early morning, Drive to Jankichatti/Phoolchatti, trek start from here to Yamunotri (5 km). Either by walk or by horse or by Doli at own cost. The trek passes through a lush green valley, a profusion of conifers, rhododendrons, cacti, and several species of Himalayan shrubs. | HT : 3293 MTS. | Distance : 36 km drive & 5 km Trek (one side)",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "BARKOT TO UTTARKASHI",
        "description": "Drive to Uttarkashi. Can visit Vishwanath Temple & Others. Check-in Hotel. Rest day at leisure. Overnight Stay. Uttarkashi Weather – Generally hot in summer, the temperature ranges from 30-35 °C but nights is pleasant, Cold in winters. HT : 1158 MTS | Distance : 90 km | Time : 4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "UTTARKASHI TO GANGOTRI DHAM and RETURN BACK TO UTTARKASHI",
        "description": "Early morning drive to Gangotri, en route at Gangnani take a holy dip in Garam Kund, further drive to Gangotri via beautiful Harsil Valley. Can visit Harsil, which is famous for its natural beauty and for the majestic views of the Deodar trees, and mountains. On arrival at Shree Gangotri, take a holy dip in the sacred river Ganges which is also called Bhagirathi at its origin. Perform Pooja and Darshan, after that relax for some time in the lovely surroundings. Return back to Uttarkashi. Overnight stay at Uttarkashi. HT : 3200 MTS. | Distance : 100 km | Time : 3-4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "UTTARKASHI TO PHATA / SIRSI / GUPTKASHI",
        "description": "Drive straight to Phata / Sirsi / Guptkashi via Moolgarh & Lambgaon as per ticket. This stay will be nearby helipad depending on your Heli Ticket of Kedarnath Dham. En route, you can see the beautiful river Mandakini at Tilwara. The Mandakini River comes from Kedarnath, drive alongside the river to reach Phata / Sirsi / Guptkashi. On arrival Check-In at the Hotel, evening can visit Ardh Narishwar Temple, if stay nearby temple. Overnight stay at the Hotel. HT : 1319 MTS. | Distance : 220 km | Time : 8-9 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "PHATA / SIRSI / GUPTKASHI TO KEDARNATH DHAM",
        "description": "Early Morning departure for Kedarnath Dham. Enjoy Kedarnath Darshan & overnight stay in Camp / Dormitory / Hotel (as per package). Morning our driver will transfer you your pre-book Helipad. You can inform the driver about your arrival time so that driver will be there to pick-up you. Phata – HT: 1,319 m | 31 km | 10 min → Sirsi – HT: 1,370 m | 23 km | 8–10 min → Guptkashi – HT: 1,310 m | 23 km | 8–10 min",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 7,
        "title": "KEDARNATH DHAM TO PHATA / SIRSI / GUPTKASHI",
        "description": "Early morning you get up before dawn and after taking bath you are at the temple by 4:45 am for the ‘Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostrate with your head touching the deity etc. After Temple Darshan, trek down to helipad as per ticket time and further flying to Phata / Sirsi / Guptkashi as per ticket. Check-in Hotel. Overnight stay at Phata / Sirsi / Guptkashi. Phata – HT: 1,319 m | 31 km | 10 min → Sirsi – HT: 1,370 m | 23 km | 8–10 min → Guptkashi – HT: 1,310 m | 23 km | 8–10 min",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 8,
        "title": "PHATA / SIRSI / GUPTKASHI TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "After breakfast, proceed by road towards Badrinath. During the summer season, this sector generally experiences heavy traffic, therefore a substantial portion of the day is spent in transit. As per hill driving safety norms, night driving is not permitted and driver duty hours are regulated. Accordingly, the day’s journey and overnight halt will be planned at Chamoli / Bheemtala / Joshimath or the nearest feasible location en route to Badrinath, subject to traffic conditions, road status, and permissible driving hours. | HT : 1875 -1890 MTS. | Distance : 155 km | Time : 5 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 9,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO BADRINATH DHAM and RETURN BACK TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "Early morning head towards Badrinath, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal and Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are also few interesting sightseeing spot like Mana, Vyas Gufa, Mata Murti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River which you can do (Within the three km of Badrinath). Overnight stay at Chamoli / Bheemtala / Joshimath. If your stay is not in Badrinath leave early. Mana Village : Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. Vasundhara : As the name suggests, Vasundhara is a magnificent waterfall. This place is 5 km. From Badrinath out of which 2 km. is motorable upto Mana. Bhim Pul : On the other side of Mana village, a massive rock forming a natural bridge, lies over the roaring Saraswati river. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers. Vyas Gufa (cave): Near Mana Village, this is a rock-cave where Ved Vyas is believed to have composed the Mahabharata and the pauranic commentaries. Badrinath Weather: The average maximum temperature will be around 18° Celsius and the average minimum is 8° Celsius. Warm and woolen clothes are hence required for a stay in Badrinath throughout the year. Winter in Badrinath is often accompanied by snowfalls. Winter is very chilly with an average temperature of 5° Celsius. Due to the extreme climatic conditions, this time is usually closed for tourists. | HT : 3133 MTS. | Distance : 215-290 km | Time : 7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 10,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO HARIDWAR VIA RISHIKESH",
        "description": "After breakfast, check out from the hotel and drive from Chamoli / Bheemtala / Joshimath towards Haridwar. En route, visit Devprayag (the confluence of the Alaknanda and Bhagirathi rivers), Dhar Devi Temple, and witness the Ganga Aarti at Rishikesh, if time permits. Upon arrival in Haridwar, the driver will drop you at Haridwar Bus Stand / Railway Station / Dehradun Airport, marking the end of your Char Dham Yatra with UK Yatra. HT : 315 MTS. | Distance : 250 km | Time : 07 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Hotel accommodation as per package (Standard, Semi Deluxe, Deluxe, & Luxury).",
      "Breakfast and dinner; however, you can opt it out.",
      "Transportation as per the package booked.",
      "Kedarnath helicopter booking assistance and on-ground coordination.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseeing can be done, if time permits.",
      "Add-ons & sightseeing must be discussed before booking the package.",
      "This 09 Nights & 10 days Char Dham pilgrimage tour from Haridwar offers sacred darshan of all four shrines with comfortable accommodations and facilities in between the yatra."
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea.",
      "Breakfast & Dinner in Kedarnath.",
      "Tax - GST 5%",
      "Pony, Doli or Porter for Kedarnath & Yamunotri Trek.",
      "Special Pooja or VIP Darshan in Kedarnath and Badrinath Temple.",
      "Any type of train and flight tickets."
    ],
    "isFeatured": false,
    "pdfBrochure": "/assets/itinerary/02. By Road_Heli/Haridwar/02. Chardham by Road & Heli Ex Haridwar - 09N 10D.pdf",
    "pickupDrop": "Ex-Haridwar"
  },
  {
    "id": "uky-roadheli-03-dodham-by-road-heli-ex-haridwar-04n-05d",
    "title": "Do Dham Yatra by Road & Heli Shuttle (4N/5D)",
    "destination": "Kedarnath & Badrinath",
    "duration": "4 Nights / 5 Days",
    "days": 5,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Road & Heli Combo",
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewsCount": 122,
    "overview": "UK Yatra is an Uttarakhand-based tour and travel company with hands-on experience in planning and operating Do Dham Yatra by road. Over the years, we have grown into a trusted name for pilgrims traveling to Yamunotri, Gangotri, Kedarnath, and Badrinath, offering journeys that are well-planned, comfortable, and spiritually fulfilling. “UK” stands for Uttarakhand, the sacred land of the Himalayas, and “Yatra” means a journey with purpose. With a strong local operational network, experienced ground teams at every key destination, and in-depth knowledge of mountain routes and pilgrimage logistics, we focus on delivering transparent and reliable road-based Do Dham journeys. Our approach is simple: personalized service, ethical travel practices, and realistic itinerary planning, so that every guest travels safely, comfortably, and without stress. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra stands for trust and professionalism, creating Do Dham Yatra experiences by road that pilgrims remember for a lifetime.",
    "highlights": [
      "Convenient helicopter shuttle flight for Kedarnath darshan (Phata/Sirsi/Guptkashi)",
      "Comfortable overland road journey through scenic river confluences (Panch Prayag)",
      "Full assistance with mandatory Char Dham biometric registration",
      "Handpicked clean mountain hotels with pure vegetarian meal plan",
      "Expert local mountain drivers with extensive hill driving experience"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "HARIDWAR TO PHATA / SIRSI / GUPTKASHI",
        "description": "The journey commences from Haridwar, the sacred city situated on the banks of the River Ganga, proceeding towards Phata / Sirsi / Guptkashi via Rishikesh and Devprayag, en route to Kedarnath Dham. This sector involves an extended hill drive and, particularly during peak pilgrimage periods, may be subject to heavy traffic movement, which can impact overall travel duration. In alignment with helicopter ticket allocation and helipad proximity, the day’s travel plan and overnight halt will be strategically finalized at Phata / Sirsi / Guptkashi, ensuring smooth coordination with the scheduled helicopter service. Upon arrival, complete hotel check-in. In the evening, subject to time availability, visit the revered Ardh Narishwar Temple. Overnight stay at the hotel. HT : 1319 MTS. | Distance : 205 km | Time : 6-7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "PHATA / SIRSI / GUPTKASHI TO KEDARNATH DHAM and RETURN BACK TO PHATA / SIRSI / GUPTKASHI",
        "description": "Early morning, proceed for Kedarnath Dham via helicopter. Upon arrival, undertake the sacred Kedarnath Darshan and subsequently return to Phata / Sirsi / Guptkashi as per the scheduled helicopter service. Our designated driver will facilitate a timely transfer to your pre-booked helipad in alignment with your helicopter departure schedule. Guests are requested to share their arrival time in advance to ensure seamless pick-up coordination. Post darshan, trek back to the helipad as per the allotted reporting time mentioned on the ticket and board the return helicopter to Phata / Sirsi / Guptkashi. On arrival, complete hotel check-in. Overnight stay at Phata / Sirsi / Guptkashi. Phata – HT: 1,319 m | 31 km | 10 min → Sirsi – HT: 1,370 m | 23 km | 8–10 min → Guptkashi – HT: 1,310 m | 23 km | 8–10 min NOTE: In case helicopter operations are disrupted due to weather, our team will guide guests on the best available alternative as per government advisories.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "PHATA / SIRSI / GUPTKASHI TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "After breakfast, proceed by road towards Badrinath. During the summer season, this sector generally experiences heavy traffic, therefore a substantial portion of the day is spent in transit. As per hill driving safety norms, night driving is not permitted and driver duty hours are regulated. Accordingly, the day’s journey and overnight halt will be planned at Chamoli / Bheemtala / Joshimath or the nearest feasible location en route to Badrinath, subject to traffic conditions, road status, and permissible driving hours. | HT : 1875 -1890 MTS. | Distance : 155 km | Time : 5 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO BADRINATH DHAM and RETURN BACK TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "Early morning head towards Badrinath, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal and Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are also few interesting sightseeing spot like Mana, Vyas Gufa, Mata Murti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River which you can do (Within the three km of Badrinath). Overnight stay at Chamoli / Bheemtala / Joshimath. If your stay is not in Badrinath leave early. Mana Village : Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. Vasundhara : As the name suggests, Vasundhara is a magnificent waterfall. This place is 5 km. From Badrinath out of which 2 km. is motorable upto Mana. Bhim Pul : On the other side of Mana village, a massive rock forming a natural bridge, lies over the roaring Saraswati river. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers. Vyas Gufa (cave): Near Mana Village, this is a rock-cave where Ved Vyas is believed to have composed the Mahabharata and the pauranic commentaries. Badrinath Weather: The average maximum temperature will be around 18° Celsius and the average minimum is 8° Celsius. Warm and woolen clothes are hence required for a stay in Badrinath throughout the year. Winter in Badrinath is often accompanied by snowfalls. Winter is very chilly with an average temperature of 5° Celsius. Due to the extreme climatic conditions, this time is usually closed for tourists. | HT : 3133 MTS. | Distance : 215-290 km | Time : 7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO HARIDWAR VIA RISHIKESH",
        "description": "After breakfast, check out from the hotel and drive from Chamoli / Bheemtala / Joshimath towards Haridwar. En route, visit Devprayag (the confluence of the Alaknanda and Bhagirathi rivers), Dhar Devi Temple, and witness the Ganga Aarti at Rishikesh, if time permits. Upon arrival in Haridwar, the driver will drop you at Haridwar Bus Stand / Railway Station / Dehradun Airport, marking the end of your Do Dham Yatra with UK Yatra. HT : 315 MTS. | Distance : 250 km | Time : 07 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Hotel accommodation as per package (Standard, Semi Deluxe, Deluxe, & Luxury).",
      "Breakfast and dinner; however, you can opt it out.",
      "Transportation as per the package booked.",
      "Kedarnath helicopter booking assistance and on-ground coordination.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseeing can be done, if time permits.",
      "Add-ons & sightseeing must be discussed before booking the package.",
      "This 04 Nights & 05 days Do Dham pilgrimage tour from Haridwar offers sacred darshan of all four shrines with comfortable accommodations and facilities in between the yatra."
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea.",
      "Breakfast & Dinner in Kedarnath.",
      "Tax - GST 5%",
      "Pony, Doli or Porter for Kedarnath & Yamunotri Trek.",
      "Special Pooja or VIP Darshan in Kedarnath and Badrinath Temple.",
      "Any type of train and flight tickets."
    ],
    "isFeatured": false,
    "pdfBrochure": "/assets/itinerary/02. By Road_Heli/Haridwar/03. Dodham by Road & Heli Ex Haridwar - 04N 05D.pdf",
    "pickupDrop": "Ex-Haridwar"
  },
  {
    "id": "uky-roadheli-04-dodham-by-road-heli-ex-haridwar-05n-06d",
    "title": "Do Dham Yatra by Road & Heli Shuttle (5N/6D)",
    "destination": "Kedarnath & Badrinath",
    "duration": "5 Nights / 6 Days",
    "days": 6,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Road & Heli Combo",
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewsCount": 129,
    "overview": "UK Yatra is an Uttarakhand-based tour and travel company with hands-on experience in planning and operating Do Dham Yatra by road. Over the years, we have grown into a trusted name for pilgrims traveling to Yamunotri, Gangotri, Kedarnath, and Badrinath, offering journeys that are well-planned, comfortable, and spiritually fulfilling. “UK” stands for Uttarakhand, the sacred land of the Himalayas, and “Yatra” means a journey with purpose. With a strong local operational network, experienced ground teams at every key destination, and in-depth knowledge of mountain routes and pilgrimage logistics, we focus on delivering transparent and reliable road-based Do Dham journeys. Our approach is simple: personalized service, ethical travel practices, and realistic itinerary planning, so that every guest travels safely, comfortably, and without stress. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra stands for trust and professionalism, creating Do Dham Yatra experiences by road that pilgrims remember for a lifetime.",
    "highlights": [
      "Convenient helicopter shuttle flight for Kedarnath darshan (Phata/Sirsi/Guptkashi)",
      "Comfortable overland road journey through scenic river confluences (Panch Prayag)",
      "Full assistance with mandatory Char Dham biometric registration",
      "Handpicked clean mountain hotels with pure vegetarian meal plan",
      "Expert local mountain drivers with extensive hill driving experience"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "HARIDWAR TO PHATA / SIRSI / GUPTKASHI",
        "description": "The journey commences from Haridwar, the sacred city situated on the banks of the River Ganga, proceeding towards Phata / Sirsi / Guptkashi via Rishikesh and Devprayag, en route to Kedarnath Dham. This sector involves an extended hill drive and, particularly during peak pilgrimage periods, may be subject to heavy traffic movement, which can impact overall travel duration. In alignment with helicopter ticket allocation and helipad proximity, the day’s travel plan and overnight halt will be strategically finalized at Phata / Sirsi / Guptkashi, ensuring smooth coordination with the scheduled helicopter service. Upon arrival, complete hotel check-in. In the evening, subject to time availability, visit the revered Ardh Narishwar Temple. Overnight stay at the hotel. HT : 1319 MTS. | Distance : 205 km | Time : 6-7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "PHATA / SIRSI / GUPTKASHI TO KEDARNATH DHAM",
        "description": "Early Morning departure for Kedarnath Dham. Enjoy Kedarnath Darshan & overnight stay in Camp / Dormitory / Hotel (as per package). Morning our driver will transfer you your pre-book Helipad. You can inform the driver about your arrival time so that driver will be there to pick-up you. Phata – HT: 1,319 m | 31 km | 10 min → Sirsi – HT: 1,370 m | 23 km | 8–10 min → Guptkashi – HT: 1,310 m | 23 km | 8–10 min",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "KEDARNATH DHAM TO PHATA / SIRSI / GUPTKASHI",
        "description": "Early morning you get up before dawn and after taking bath you are at the temple by 4:45 am for the ‘Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostrate with your head touching the deity etc. After Temple Darshan, trek down to helipad as per ticket time and further flying to Phata / Sirsi / Guptkashi as per ticket. Check-in Hotel. Overnight stay at Phata / Sirsi / Guptkashi. Phata – HT: 1,319 m | 31 km | 10 min → Sirsi – HT: 1,370 m | 23 km | 8–10 min → Guptkashi – HT: 1,310 m | 23 km | 8–10 min",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "PHATA / SIRSI / GUPTKASHI TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "After breakfast, proceed by road towards Badrinath. During the summer season, this sector generally experiences heavy traffic, therefore a substantial portion of the day is spent in transit. As per hill driving safety norms, night driving is not permitted and driver duty hours are regulated. Accordingly, the day’s journey and overnight halt will be planned at Chamoli / Bheemtala / Joshimath or the nearest feasible location en route to Badrinath, subject to traffic conditions, road status, and permissible driving hours. | HT : 1875 -1890 MTS. | Distance : 155 km | Time : 5 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO BADRINATH DHAM and RETURN BACK TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "Early morning head towards Badrinath, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal and Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are also few interesting sightseeing spot like Mana, Vyas Gufa, Mata Murti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River which you can do (Within the three km of Badrinath). Overnight stay at Chamoli / Bheemtala / Joshimath. If your stay is not in Badrinath leave early. Mana Village : Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. Vasundhara : As the name suggests, Vasundhara is a magnificent waterfall. This place is 5 km. From Badrinath out of which 2 km. is motorable upto Mana. Bhim Pul : On the other side of Mana village, a massive rock forming a natural bridge, lies over the roaring Saraswati river. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers. Vyas Gufa (cave): Near Mana Village, this is a rock-cave where Ved Vyas is believed to have composed the Mahabharata and the pauranic commentaries. Badrinath Weather: The average maximum temperature will be around 18° Celsius and the average minimum is 8° Celsius. Warm and woolen clothes are hence required for a stay in Badrinath throughout the year. Winter in Badrinath is often accompanied by snowfalls. Winter is very chilly with an average temperature of 5° Celsius. Due to the extreme climatic conditions, this time is usually closed for tourists. | HT : 3133 MTS. | Distance : 215-290 km | Time : 7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO HARIDWAR VIA RISHIKESH",
        "description": "After breakfast, check out from the hotel and drive from Chamoli / Bheemtala / Joshimath towards Haridwar. En route, visit Devprayag (the confluence of the Alaknanda and Bhagirathi rivers), Dhar Devi Temple, and witness the Ganga Aarti at Rishikesh, if time permits. Upon arrival in Haridwar, the driver will drop you at Haridwar Bus Stand / Railway Station / Dehradun Airport, marking the end of your Do Dham Yatra with UK Yatra. HT : 315 MTS. | Distance : 250 km | Time : 07 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Hotel accommodation as per package (Standard, Semi Deluxe, Deluxe, & Luxury).",
      "Breakfast and dinner; however, you can opt it out.",
      "Transportation as per the package booked.",
      "Kedarnath helicopter booking assistance and on-ground coordination.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseeing can be done, if time permits.",
      "Add-ons & sightseeing must be discussed before booking the package.",
      "This 05 Nights & 06 days Do Dham pilgrimage tour from Haridwar offers sacred darshan of all four shrines with comfortable accommodations and facilities in between the yatra."
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea.",
      "Breakfast & Dinner in Kedarnath.",
      "Tax - GST 5%",
      "Pony, Doli or Porter for Kedarnath & Yamunotri Trek.",
      "Special Pooja or VIP Darshan in Kedarnath and Badrinath Temple.",
      "Any type of train and flight tickets."
    ],
    "isFeatured": false,
    "pdfBrochure": "/assets/itinerary/02. By Road_Heli/Haridwar/04. Dodham by Road & Heli Ex Haridwar - 05N 06D.pdf",
    "pickupDrop": "Ex-Haridwar"
  },
  {
    "id": "uky-road-01-chardham-by-road-ex-delhi-10n-11d",
    "title": "Char Dham Yatra by Overland Road (10N/11D)",
    "destination": "Yamunotri, Gangotri, Kedarnath & Badrinath",
    "duration": "10 Nights / 11 Days",
    "days": 11,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Classic Overland Road",
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewsCount": 136,
    "overview": "UK Yatra is an Uttarakhand-based tour and travel company with hands-on experience in planning and operating Char Dham Yatra by road. Over the years, we have grown into a trusted name for pilgrims traveling to Yamunotri, Gangotri, Kedarnath, and Badrinath, offering journeys that are well-planned, comfortable, and spiritually fulfilling. “UK” stands for Uttarakhand, the sacred land of the Himalayas, and “Yatra” means a journey with purpose. With a strong local operational network, experienced ground teams at every key destination, and in-depth knowledge of mountain routes and pilgrimage logistics, we focus on delivering transparent and reliable road-based Char Dham journeys. Our approach is simple: personalized service, ethical travel practices, and realistic itinerary planning, so that every guest travels safely, comfortably, and without stress. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra stands for trust and professionalism, creating Char Dham Yatra experiences by road that pilgrims remember for a lifetime.",
    "highlights": [
      "Complete sacred pilgrimage covering Yamunotri, Gangotri, Kedarnath & Badrinath",
      "Scenic drive through the holy Panch Prayags of the Alaknanda & Mandakini rivers",
      "Comfortable twin/triple sharing mountain accommodations with delicious pure veg meals",
      "Dedicated local fleet with experienced drivers familiar with mountain terrain",
      "Complete ground support from start to finish from Delhi"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "DELHI TO HARIDWAR",
        "description": "The tour begins from Delhi with a scenic drive to Haridwar, holy city located on the banks of river Ganges. Upon arrival, check-in to the hotel and explore the town on your own. In the evening, take an auto for Har Ki Pauri Ghat for the Ganga Aarti ceremony, a beautiful ritual where oil lamps are offered to the river. HT : 315 MTS. | Distance : 220 km | Time : 5-6 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "HARIDWAR TO BARKOT",
        "description": "Drive to Barkot via Mussoorie, can visit Kempty Fall (It is advisable to have lunch at Kempty Falls, as there are limited dining options available en route to Barkot). Later drive straight to Barkot, transfer to your hotel. The rest of the day is free to relax and store your energy for the Yamunotri trek the next day. Overnight stay at Barkot. Barkot Weather – Generally pleasant in summer, the temperature ranges from 25-30 °C, Winter: The Days are pleasantly cool but the nights are cold, temp ranges from 10 °C to 05 °C. HT : 1220 MTS. | Distance : 210 km | Time : 7-8 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "BARKOT TO YAMUNOTRI DHAM and RETURN BACK TO BARKOT",
        "description": "Early morning, Drive to Jankichatti/Phoolchatti, trek start from here to Yamunotri (5 km). Either by walk or by horse or by Doli at own cost. The trek passes through a lush green valley, a profusion of conifers, rhododendrons, cacti, and several species of Himalayan shrubs. | HT : 3293 MTS. | Distance : 36 km drive & 5 km Trek (one side)",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "BARKOT TO UTTARKASHI",
        "description": "Drive to Uttarkashi. Can visit Vishwanath Temple & Others. Check-in Hotel. Rest day at leisure. Overnight Stay. Uttarkashi Weather – Generally hot in summer, the temperature ranges from 30-35 °C but nights is pleasant, Cold in winters. | HT : 1158 MTS | Distance : 90 km | Time : 4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "UTTARKASHI TO GANGOTRI DHAM and RETURN BACK TO UTTARKASHI",
        "description": "Early morning drive to Gangotri, en route at Gangnani take a holy dip in Garam Kund, further drive to Gangotri via beautiful Harsil Valley. Can visit Harsil, which is famous for its natural beauty and for the majestic views of the Deodar trees, and mountains. On arrival at Shree Gangotri, take a holy dip in the sacred river Ganges which is also called Bhagirathi at its origin. Perform Pooja and Darshan, after that relax for some time in the lovely surroundings. Return back to Uttarkashi. Overnight stay at Uttarkashi. | HT : 3200 MTS. | Distance : 100 km | Time : 3-4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "UTTARKASHI TO RAMPUR / SITAPUR / GUPTKASHI / SONPRAYAG",
        "description": "After breakfast, proceed by road towards Rampur / Sitapur / Guptkashi / Sonprayag via Moolgarh and Lambgaon, en route to Kedarnath Dham. This sector involves a long driving distance and, during the peak season, typically experiences high traffic density, resulting in extended travel duration. En route, enjoy scenic views of the Mandakini River at Tilwara, flowing from Kedarnath alongside the route. In compliance with hill-driving safety regulations, night driving is not permitted and driver duty hours are strictly regulated. Accordingly, the day’s journey and overnight halt will be planned at Rampur / Sitapur / Guptkashi / Sonprayag or the nearest feasible location, depending on real-time traffic conditions, road status, and permissible driving hours. Upon arrival, check-in at the hotel. Evening visit to Ardh Narishwar Temple. Overnight stay at the hotel. | HT : 1319 MTS. | Distance : 220 kms | Time : 8-9 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 7,
        "title": "RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG TO KEDARNATH DHAM",
        "description": "Early morning departure for Kedarnath Dham. Upon arrival, proceed for Kedarnath Darshan and check in for an overnight stay at Camp / Dormitory / Dharamshala / Hotel as per the package booked. By Trek : In the morning, our driver will transfer you to Sonprayag. From Sonprayag, you will take a local shared jeep to Gaurikund, from where the trek to Kedarnath Ji commences. After completing darshan and overnight stay, the following day you will descend via the same route to Gaurikund and thereafter proceed onward to Sonprayag. Please note that due to heavy seasonal congestion and limited parking facilities at Sonprayag, the driver may be required to park the vehicle at a designated holding area nearby. Accordingly, pick-up and coordination will be managed based on prevailing traffic conditions and local regulations. Mobile network connectivity in this sector is intermittent; Jio or BSNL generally offer relatively better coverage. HT : 3583 MTS. | Approx. 30 km by road and 19 km trek (one way).",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 8,
        "title": "KEDARNATH DHAM TO RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG",
        "description": "Early morning you get up before dawn and after taking bath you are at the temple by 4:45 am for the ‘Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostrate with your head touching the deity etc. After Temple Darshan trek down to Rampur / Sitapur / Guptkashi / Sonprayag. Further drive to Guptkashi. Overnight stay at the hotel.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 9,
        "title": "RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "After breakfast, proceed by road towards Badrinath. During the summer season, this sector generally experiences heavy traffic, therefore a substantial portion of the day is spent in transit. As per hill driving safety norms, night driving is not permitted and driver duty hours are regulated. Accordingly, the day’s journey and overnight halt will be planned at Chamoli / Bheemtala / Joshimath or the nearest feasible location en route to Badrinath, subject to traffic conditions, road status, and permissible driving hours. | HT : 1875 -1890 MTS. | Distance : 155 km | Time : 5 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 10,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO BADRINATH DHAM and RETURN BACK TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "Early morning head towards Badrinath, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal and Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are also few interesting sightseeing spot like Mana, Vyas Gufa, Mata Murti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River which you can do (Within the three km of Badrinath). Overnight stay at Chamoli / Bheemtala / Joshimath. If your stay is not in Badrinath leave early. Mana Village : Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. Vasundhara : As the name suggests, Vasundhara is a magnificent waterfall. This place is 5 km. From Badrinath out of which 2 km. is motorable upto Mana. Bhim Pul : On the other side of Mana village, a massive rock forming a natural bridge, lies over the roaring Saraswati river. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers. Vyas Gufa (cave): Near Mana Village, this is a rock-cave where Ved Vyas is believed to have composed the Mahabharata and the pauranic commentaries. Badrinath Weather: The average maximum temperature will be around 18° Celsius and the average minimum is 8° Celsius. Warm and woolen clothes are hence required for a stay in Badrinath throughout the year. Winter in Badrinath is often accompanied by snowfalls. Winter is very chilly with an average temperature of 5° Celsius. Due to the extreme climatic conditions, this time is usually closed for tourists. | HT : 3133 MTS. | Distance : 215-290 km | Time : 7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 11,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO DELHI VIA RISHIKESH / HARIDWAR",
        "description": "After breakfast, check out from the hotel and drive from Chamoli / Bheemtala / Joshimath towards Delhi. En route, visit Devprayag (the confluence of the Alaknanda and Bhagirathi rivers), Dhar Devi Temple, and witness the Ganga Aarti at Rishikesh, if time permits. Upon arrival in Delhi, the driver will drop you at Delhi Airport or Delhi Railway Station, marking the end of your Char Dham Yatra with UK Yatra. HT : 210 - 225 MTS. | Distance : 490 km | Time : 12 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Hotel accommodation as per package (Standard, Semi Deluxe, Deluxe, & Luxury).",
      "Breakfast and dinner; however, you can opt it out.",
      "Transportation as per the package booked.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transportation taxes.",
      "Only on the way sightseeing can be done, if time permits.",
      "Add-ons & sightseeing must be discussed before booking the package.",
      "This 10 Nights & 11 days Char Dham pilgrimage tour from Delhi offers sacred darshan of all four shrines with comfortable accommodations and facilities in between the yatra.",
      "DAY 01 : DELHI TO HARIDWAR"
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea.",
      "Breakfast & Dinner in Kedarnath.",
      "Tax - GST 5%",
      "Pony, Doli or Porter for Kedarnath & Yamunotri Trek.",
      "Special Pooja or VIP Darshan in Kedarnath and Badrinath Temple.",
      "Any type of train and flight tickets."
    ],
    "isFeatured": true,
    "pdfBrochure": "/assets/itinerary/03. By Road/Delhi/01. Chardham by Road Ex Delhi - 10N 11D.pdf",
    "pickupDrop": "Ex-Delhi"
  },
  {
    "id": "uky-road-02-chardham-by-road-ex-delhi-11n-12d",
    "title": "Char Dham Yatra by Overland Road (11N/12D)",
    "destination": "Yamunotri, Gangotri, Kedarnath & Badrinath",
    "duration": "11 Nights / 12 Days",
    "days": 12,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Classic Overland Road",
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 5.0,
    "reviewsCount": 143,
    "overview": "UK Yatra is an Uttarakhand-based tour and travel company with hands-on experience in planning and operating Char Dham Yatra by road. Over the years, we have grown into a trusted name for pilgrims traveling to Yamunotri, Gangotri, Kedarnath, and Badrinath, offering journeys that are well-planned, comfortable, and spiritually fulfilling. “UK” stands for Uttarakhand, the sacred land of the Himalayas, and “Yatra” means a journey with purpose. With a strong local operational network, experienced ground teams at every key destination, and in-depth knowledge of mountain routes and pilgrimage logistics, we focus on delivering transparent and reliable road-based Char Dham journeys. Our approach is simple: personalized service, ethical travel practices, and realistic itinerary planning, so that every guest travels safely, comfortably, and without stress. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra stands for trust and professionalism, creating Char Dham Yatra experiences by road that pilgrims remember for a lifetime.",
    "highlights": [
      "Complete sacred pilgrimage covering Yamunotri, Gangotri, Kedarnath & Badrinath",
      "Scenic drive through the holy Panch Prayags of the Alaknanda & Mandakini rivers",
      "Comfortable twin/triple sharing mountain accommodations with delicious pure veg meals",
      "Dedicated local fleet with experienced drivers familiar with mountain terrain",
      "Complete ground support from start to finish from Delhi"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "DELHI TO HARIDWAR",
        "description": "The tour begins from Delhi with a scenic drive to Haridwar, holy city located on the banks of river Ganges. Upon arrival, check-in to the hotel and explore the town on your own. In the evening, take an auto for Har Ki Pauri Ghat for the Ganga Aarti ceremony, a beautiful ritual where oil lamps are offered to the river. HT : 315 MTS. | Distance : 220 km | Time : 5-6 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "HARIDWAR TO BARKOT",
        "description": "Drive to Barkot via Mussoorie, can visit Kempty Fall (It is advisable to have lunch at Kempty Falls, as there are limited dining options available en route to Barkot). Later drive straight to Barkot, transfer to your hotel. The rest of the day is free to relax and store your energy for the Yamunotri trek the next day. Overnight stay at Barkot. Barkot Weather – Generally pleasant in summer, the temperature ranges from 25-30 °C, Winter: The Days are pleasantly cool but the nights are cold, temp ranges from 10 °C to 05 °C. HT : 1220 MTS. | Distance : 210 km | Time : 7-8 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "BARKOT TO YAMUNOTRI DHAM and RETURN BACK TO BARKOT",
        "description": "Early morning, Drive to Jankichatti/Phoolchatti, trek start from here to Yamunotri (5 km). Either by walk or by horse or by Doli at own cost. The trek passes through a lush green valley, a profusion of conifers, rhododendrons, cacti, and several species of Himalayan shrubs. | HT : 3293 MTS. | Distance : 36 km drive & 5 km Trek (one side)",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "BARKOT TO UTTARKASHI",
        "description": "Drive to Uttarkashi. Can visit Vishwanath Temple & Others. Check-in Hotel. Rest day at leisure. Overnight Stay. Uttarkashi Weather – Generally hot in summer, the temperature ranges from 30-35 °C but nights is pleasant, Cold in winters. | HT : 1158 MTS | Distance : 90 km | Time : 4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "UTTARKASHI TO GANGOTRI DHAM and RETURN BACK TO UTTARKASHI",
        "description": "Early morning drive to Gangotri, en route at Gangnani take a holy dip in Garam Kund, further drive to Gangotri via beautiful Harsil Valley. Can visit Harsil, which is famous for its natural beauty and for the majestic views of the Deodar trees, and mountains. On arrival at Shree Gangotri, take a holy dip in the sacred river Ganges which is also called Bhagirathi at its origin. Perform Pooja and Darshan, after that relax for some time in the lovely surroundings. Return back to Uttarkashi. Overnight stay at Uttarkashi. | HT : 3200 MTS. | Distance : 100 km | Time : 3-4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "UTTARKASHI TO RAMPUR / SITAPUR / GUPTKASHI / SONPRAYAG",
        "description": "After breakfast, proceed by road towards Rampur / Sitapur / Guptkashi / Sonprayag via Moolgarh and Lambgaon, en route to Kedarnath Dham. This sector involves a long driving distance and, during the peak season, typically experiences high traffic density, resulting in extended travel duration. En route, enjoy scenic views of the Mandakini River at Tilwara, flowing from Kedarnath alongside the route. In compliance with hill-driving safety regulations, night driving is not permitted and driver duty hours are strictly regulated. Accordingly, the day’s journey and overnight halt will be planned at Rampur / Sitapur / Guptkashi / Sonprayag or the nearest feasible location, depending on real-time traffic conditions, road status, and permissible driving hours. Upon arrival, check-in at the hotel. Evening visit to Ardh Narishwar Temple. Overnight stay at the hotel. | HT : 1319 MTS. | Distance : 220 kms | Time : 8-9 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 7,
        "title": "RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG TO KEDARNATH DHAM",
        "description": "Early morning departure for Kedarnath Dham. Upon arrival, proceed for Kedarnath Darshan and check in for an overnight stay at Camp / Dormitory / Dharamshala / Hotel as per the package booked. By Trek : In the morning, our driver will transfer you to Sonprayag. From Sonprayag, you will take a local shared jeep to Gaurikund, from where the trek to Kedarnath Ji commences. After completing darshan and overnight stay, the following day you will descend via the same route to Gaurikund and thereafter proceed onward to Sonprayag. Please note that due to heavy seasonal congestion and limited parking facilities at Sonprayag, the driver may be required to park the vehicle at a designated holding area nearby. Accordingly, pick-up and coordination will be managed based on prevailing traffic conditions and local regulations. Mobile network connectivity in this sector is intermittent; Jio or BSNL generally offer relatively better coverage. HT : 3583 MTS. | Approx. 30 km by road and 19 km trek (one way).",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 8,
        "title": "KEDARNATH DHAM TO RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG",
        "description": "Early morning you get up before dawn and after taking bath you are at the temple by 4:45 am for the ‘Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostrate with your head touching the deity etc. After Temple Darshan trek down to Rampur / Sitapur / Guptkashi / Sonprayag. Further drive to Guptkashi. Overnight stay at the hotel.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 9,
        "title": "RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "After breakfast, proceed by road towards Badrinath. During the summer season, this sector generally experiences heavy traffic, therefore a substantial portion of the day is spent in transit. As per hill driving safety norms, night driving is not permitted and driver duty hours are regulated. Accordingly, the day’s journey and overnight halt will be planned at Chamoli / Bheemtala / Joshimath or the nearest feasible location en route to Badrinath, subject to traffic conditions, road status, and permissible driving hours. | HT : 1875 -1890 MTS. | Distance : 155 km | Time : 5 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 10,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO BADRINATH DHAM and RETURN BACK TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "Early morning head towards Badrinath, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal and Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are also few interesting sightseeing spot like Mana, Vyas Gufa, Mata Murti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River which you can do (Within the three km of Badrinath). Overnight stay at Chamoli / Bheemtala / Joshimath. If your stay is not in Badrinath leave early. Mana Village : Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. Vasundhara : As the name suggests, Vasundhara is a magnificent waterfall. This place is 5 km. From Badrinath out of which 2 km. is motorable upto Mana. Bhim Pul : On the other side of Mana village, a massive rock forming a natural bridge, lies over the roaring Saraswati river. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers. Vyas Gufa (cave): Near Mana Village, this is a rock-cave where Ved Vyas is believed to have composed the Mahabharata and the pauranic commentaries. Badrinath Weather: The average maximum temperature will be around 18° Celsius and the average minimum is 8° Celsius. Warm and woolen clothes are hence required for a stay in Badrinath throughout the year. Winter in Badrinath is often accompanied by snowfalls. Winter is very chilly with an average temperature of 5° Celsius. Due to the extreme climatic conditions, this time is usually closed for tourists. | HT : 3133 MTS. | Distance : 215-290 km | Time : 7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 11,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO HARIDWAR VIA RISHIKESH",
        "description": "After breakfast, check out from the hotel and drive from Chamoli / Bheemtala / Joshimath towards Haridwar. En route, visit Devprayag (the confluence of the Alaknanda and Bhagirathi rivers), Dhar Devi Temple, and witness the Ganga Aarti at Rishikesh, if time permits. Upon arrival in Haridwar, the driver will drop you at pre-booked hotel in Haridwar. Overnight stay at the hotel. | HT : 315 MTS. | Distance : 250 km | Time : 07 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 12,
        "title": "HARIDWAR TO DELHI",
        "description": "After breakfast, check out from the hotel and proceed by road from Haridwar towards Delhi. Upon arrival, you will be dropped at Delhi Airport or Delhi Railway Station as per your departure schedule, marking the formal conclusion of your Char Dham Yatra with UK Yatra. | HT : 210 - 225 MTS. | Distance : 220 km | Time : 5-6 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Hotel accommodation as per package (Standard, Semi Deluxe, Deluxe, & Luxury).",
      "Breakfast and dinner; however, you can opt it out.",
      "Transportation as per the package booked.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseeing can be done, if time permits.",
      "Add-ons & sightseeing must be discussed before booking the package.",
      "This 11 Nights & 12 days Char Dham pilgrimage tour from Delhi offers sacred darshan of all four shrines with comfortable accommodations and facilities in between the yatra.",
      "DAY 01 : DELHI TO HARIDWAR"
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea.",
      "Breakfast & Dinner in Kedarnath.",
      "Tax - GST 5%",
      "Pony, Doli or Porter for Kedarnath & Yamunotri Trek.",
      "Special Pooja or VIP Darshan in Kedarnath and Badrinath Temple.",
      "Any type of train and flight tickets."
    ],
    "isFeatured": false,
    "pdfBrochure": "/assets/itinerary/03. By Road/Delhi/02. Chardham by Road Ex Delhi - 11N 12D.pdf",
    "pickupDrop": "Ex-Delhi"
  },
  {
    "id": "uky-road-03-dodham-by-road-ex-delhi-06n-07d",
    "title": "Do Dham Yatra by Overland Road (6N/7D)",
    "destination": "Kedarnath & Badrinath",
    "duration": "6 Nights / 7 Days",
    "days": 7,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Classic Overland Road",
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewsCount": 150,
    "overview": "UK Yatra is an Uttarakhand-based tour and travel company with hands-on experience in planning and operating Do Dham Yatra by road. Over the years, we have grown into a trusted name for pilgrims traveling to Yamunotri, Gangotri, Kedarnath, and Badrinath, offering journeys that are well-planned, comfortable, and spiritually fulfilling. “UK” stands for Uttarakhand, the sacred land of the Himalayas, and “Yatra” means a journey with purpose. With a strong local operational network, experienced ground teams at every key destination, and in-depth knowledge of mountain routes and pilgrimage logistics, we focus on delivering transparent and reliable road-based Do Dham journeys. Our approach is simple: personalized service, ethical travel practices, and realistic itinerary planning, so that every guest travels safely, comfortably, and without stress. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra stands for trust and professionalism, creating Do Dham Yatra experiences by road that pilgrims remember for a lifetime.",
    "highlights": [
      "Complete sacred pilgrimage covering Kedarnath & Badrinath",
      "Scenic drive through the holy Panch Prayags of the Alaknanda & Mandakini rivers",
      "Comfortable twin/triple sharing mountain accommodations with delicious pure veg meals",
      "Dedicated local fleet with experienced drivers familiar with mountain terrain",
      "Complete ground support from start to finish from Delhi"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "DELHI TO HARIDWAR",
        "description": "The tour begins from Delhi with a scenic drive to Haridwar, holy city located on the banks of river Ganges. Upon arrival, check-in to the hotel and explore the town on your own. In the evening, take an auto for Har Ki Pauri Ghat for the Ganga Aarti ceremony, a beautiful ritual where oil lamps are offered to the river. HT : 315 MTS. | Distance : 220 km | Time : 5-6 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "HARIDWAR TO RAMPUR / SITAPUR / GUPTKASHI / SONPRAYAG",
        "description": "After breakfast, proceed by road from Haridwar towards Rampur / Sitapur / Guptkashi / Sonprayag via Rishikesh and Devprayag, en route to Kedarnath Dham. This sector involves a long driving distance and, during peak pilgrimage season, often experiences heavy traffic movement, which may extend the overall travel duration. Accordingly, the day’s journey and overnight halt will be operationally planned at Rampur / Sitapur / Guptkashi / Sonprayag or the nearest feasible location, depending on real-time traffic density, road conditions, weather factors, and permissible driving hours at the time of travel, ensuring safety, compliance, and seamless progression of the yatra. Upon arrival, check in at the hotel. In the evening, visit the revered Ardh Narishwar Temple. Overnight stay at the hotel. | HT : 1319 MTS. | Distance : 220 kms | Time : 8-9 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG TO KEDARNATH DHAM",
        "description": "Early morning departure for Kedarnath Dham. Upon arrival, proceed for Kedarnath Darshan and check in for an overnight stay at Camp / Dormitory / Dharamshala / Hotel as per the package booked. By Trek : In the morning, our driver will transfer you to Sonprayag. From Sonprayag, you will take a local shared jeep to Gaurikund, from where the trek to Kedarnath Ji commences. After completing darshan and overnight stay, the following day you will descend via the same route to Gaurikund and thereafter proceed onward to Sonprayag. Please note that due to heavy seasonal congestion and limited parking facilities at Sonprayag, the driver may be required to park the vehicle at a designated holding area nearby. Accordingly, pick-up and coordination will be managed based on prevailing traffic conditions and local regulations. Mobile network connectivity in this sector is intermittent; Jio or BSNL generally offer relatively better coverage. HT : 3583 MTS. | Approx. 30 km by road and 19 km trek (one way).",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "KEDARNATH DHAM TO RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG",
        "description": "Early morning you get up before dawn and after taking bath you are at the temple by 4:45 am for the ‘Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostrate with your head touching the deity etc. After Temple Darshan trek down to Rampur / Sitapur / Guptkashi / Sonprayag. Further drive to Guptkashi. Overnight stay at the hotel.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "After breakfast, proceed by road towards Badrinath. During the summer season, this sector generally experiences heavy traffic, therefore a substantial portion of the day is spent in transit. As per hill driving safety norms, night driving is not permitted and driver duty hours are regulated. Accordingly, the day’s journey and overnight halt will be planned at Chamoli / Bheemtala / Joshimath or the nearest feasible location en route to Badrinath, subject to traffic conditions, road status, and permissible driving hours. | HT : 1875 -1890 MTS. | Distance : 155 km | Time : 5 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO BADRINATH DHAM and RETURN BACK TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "Early morning head towards Badrinath, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal and Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are also few interesting sightseeing spot like Mana, Vyas Gufa, Mata Murti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River which you can do (Within the three km of Badrinath). Overnight stay at Chamoli / Bheemtala / Joshimath. If your stay is not in Badrinath leave early. Mana Village : Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. Vasundhara : As the name suggests, Vasundhara is a magnificent waterfall. This place is 5 km. From Badrinath out of which 2 km. is motorable upto Mana. Bhim Pul : On the other side of Mana village, a massive rock forming a natural bridge, lies over the roaring Saraswati river. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers. Vyas Gufa (cave): Near Mana Village, this is a rock-cave where Ved Vyas is believed to have composed the Mahabharata and the pauranic commentaries. Badrinath Weather: The average maximum temperature will be around 18° Celsius and the average minimum is 8° Celsius. Warm and woolen clothes are hence required for a stay in Badrinath throughout the year. Winter in Badrinath is often accompanied by snowfalls. Winter is very chilly with an average temperature of 5° Celsius. Due to the extreme climatic conditions, this time is usually closed for tourists. | HT : 3133 MTS. | Distance : 215-290 km | Time : 7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 7,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO DELHI VIA RISHIKESH / HARIDWAR",
        "description": "After breakfast, check out from the hotel and drive from Chamoli / Bheemtala / Joshimath towards Delhi. En route, visit Devprayag (the confluence of the Alaknanda and Bhagirathi rivers), Dhar Devi Temple, and witness the Ganga Aarti at Rishikesh, if time permits. Upon arrival in Delhi, the driver will drop you at Delhi Airport or Delhi Railway Station, marking the end of your Do Dham Yatra with UK Yatra. | HT : 210 - 225 MTS. | Distance : 490 km | Time : 12 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Hotel accommodation as per package (Standard, Semi Deluxe, Deluxe, & Luxury).",
      "Breakfast and dinner; however, you can opt it out.",
      "Transportation as per the package booked.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseeing can be done, if time permits.",
      "Add-ons & sightseeing must be discussed before booking the package.",
      "This 06 Nights & 07 days Do Dham pilgrimage tour from Delhi offers sacred darshan of all four shrines with comfortable accommodations and facilities in between the yatra.",
      "DAY 01 : DELHI TO HARIDWAR"
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea.",
      "Breakfast & Dinner in Kedarnath.",
      "Tax - GST 5%",
      "Pony, Doli or Porter for Kedarnath & Yamunotri Trek.",
      "Special Pooja or VIP Darshan in Kedarnath and Badrinath Temple.",
      "Any type of train and flight tickets."
    ],
    "isFeatured": false,
    "pdfBrochure": "/assets/itinerary/03. By Road/Delhi/03. Dodham by Road Ex Delhi - 06N 07D.pdf",
    "pickupDrop": "Ex-Delhi"
  },
  {
    "id": "uky-road-04-dodham-by-road-ex-delhi-07n-08d",
    "title": "Do Dham Yatra by Overland Road (7N/8D)",
    "destination": "Kedarnath & Badrinath",
    "duration": "7 Nights / 8 Days",
    "days": 8,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Classic Overland Road",
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewsCount": 47,
    "overview": "UK Yatra is an Uttarakhand-based tour and travel company with hands-on experience in planning and operating Do Dham Yatra by road. Over the years, we have grown into a trusted name for pilgrims traveling to Yamunotri, Gangotri, Kedarnath, and Badrinath, offering journeys that are well-planned, comfortable, and spiritually fulfilling. “UK” stands for Uttarakhand, the sacred land of the Himalayas, and “Yatra” means a journey with purpose. With a strong local operational network, experienced ground teams at every key destination, and in-depth knowledge of mountain routes and pilgrimage logistics, we focus on delivering transparent and reliable road-based Do Dham journeys. Our approach is simple: personalized service, ethical travel practices, and realistic itinerary planning, so that every guest travels safely, comfortably, and without stress. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra stands for trust and professionalism, creating Do Dham Yatra experiences by road that pilgrims remember for a lifetime.",
    "highlights": [
      "Complete sacred pilgrimage covering Kedarnath & Badrinath",
      "Scenic drive through the holy Panch Prayags of the Alaknanda & Mandakini rivers",
      "Comfortable twin/triple sharing mountain accommodations with delicious pure veg meals",
      "Dedicated local fleet with experienced drivers familiar with mountain terrain",
      "Complete ground support from start to finish from Delhi"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "DELHI TO HARIDWAR",
        "description": "The tour begins from Delhi with a scenic drive to Haridwar, holy city located on the banks of river Ganges. Upon arrival, check-in to the hotel and explore the town on your own. In the evening, take an auto for Har Ki Pauri Ghat for the Ganga Aarti ceremony, a beautiful ritual where oil lamps are offered to the river. HT : 315 MTS. | Distance : 220 km | Time : 5-6 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "HARIDWAR TO RAMPUR / SITAPUR / GUPTKASHI / SONPRAYAG",
        "description": "After breakfast, proceed by road from Haridwar towards Rampur / Sitapur / Guptkashi / Sonprayag via Rishikesh and Devprayag, en route to Kedarnath Dham. This sector involves a long driving distance and, during peak pilgrimage season, often experiences heavy traffic movement, which may extend the overall travel duration. Accordingly, the day’s journey and overnight halt will be operationally planned at Rampur / Sitapur / Guptkashi / Sonprayag or the nearest feasible location, depending on real-time traffic density, road conditions, weather factors, and permissible driving hours at the time of travel, ensuring safety, compliance, and seamless progression of the yatra. Upon arrival, check in at the hotel. In the evening, visit the revered Ardh Narishwar Temple. Overnight stay at the hotel. | HT : 1319 MTS. | Distance : 220 kms | Time : 8-9 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG TO KEDARNATH DHAM",
        "description": "Early morning departure for Kedarnath Dham. Upon arrival, proceed for Kedarnath Darshan and check in for an overnight stay at Camp / Dormitory / Dharamshala / Hotel as per the package booked. By Trek : In the morning, our driver will transfer you to Sonprayag. From Sonprayag, you will take a local shared jeep to Gaurikund, from where the trek to Kedarnath Ji commences. After completing darshan and overnight stay, the following day you will descend via the same route to Gaurikund and thereafter proceed onward to Sonprayag. Please note that due to heavy seasonal congestion and limited parking facilities at Sonprayag, the driver may be required to park the vehicle at a designated holding area nearby. Accordingly, pick-up and coordination will be managed based on prevailing traffic conditions and local regulations. Mobile network connectivity in this sector is intermittent; Jio or BSNL generally offer relatively better coverage. HT : 3583 MTS. | Approx. 30 km by road and 19 km trek (one way).",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "KEDARNATH DHAM TO RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG",
        "description": "Early morning you get up before dawn and after taking bath you are at the temple by 4:45 am for the ‘Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostrate with your head touching the deity etc. After Temple Darshan trek down to Rampur / Sitapur / Guptkashi / Sonprayag. Further drive to Guptkashi. Overnight stay at the hotel.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "After breakfast, proceed by road towards Badrinath. During the summer season, this sector generally experiences heavy traffic, therefore a substantial portion of the day is spent in transit. As per hill driving safety norms, night driving is not permitted and driver duty hours are regulated. Accordingly, the day’s journey and overnight halt will be planned at Chamoli / Bheemtala / Joshimath or the nearest feasible location en route to Badrinath, subject to traffic conditions, road status, and permissible driving hours. | HT : 1875 -1890 MTS. | Distance : 155 km | Time : 5 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO BADRINATH DHAM and RETURN BACK TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "Early morning head towards Badrinath, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal and Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are also few interesting sightseeing spot like Mana, Vyas Gufa, Mata Murti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River which you can do (Within the three km of Badrinath). Overnight stay at Chamoli / Bheemtala / Joshimath. If your stay is not in Badrinath leave early. Mana Village : Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. Vasundhara : As the name suggests, Vasundhara is a magnificent waterfall. This place is 5 km. From Badrinath out of which 2 km. is motorable upto Mana. Bhim Pul : On the other side of Mana village, a massive rock forming a natural bridge, lies over the roaring Saraswati river. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers. Vyas Gufa (cave): Near Mana Village, this is a rock-cave where Ved Vyas is believed to have composed the Mahabharata and the pauranic commentaries. Badrinath Weather: The average maximum temperature will be around 18° Celsius and the average minimum is 8° Celsius. Warm and woolen clothes are hence required for a stay in Badrinath throughout the year. Winter in Badrinath is often accompanied by snowfalls. Winter is very chilly with an average temperature of 5° Celsius. Due to the extreme climatic conditions, this time is usually closed for tourists. | HT : 3133 MTS. | Distance : 215-290 km | Time : 7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 7,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO HARIDWAR VIA RISHIKESH",
        "description": "After breakfast, check out from the hotel and drive from Chamoli / Bheemtala / Joshimath towards Haridwar. En route, visit Devprayag (the confluence of the Alaknanda and Bhagirathi rivers), Dhar Devi Temple, and witness the Ganga Aarti at Rishikesh, if time permits. Upon arrival in Haridwar, the driver will drop you at pre-booked hotel in Haridwar. Overnight stay at the hotel. | HT : 315 MTS. | Distance : 250 km | Time : 07 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 8,
        "title": "HARIDWAR TO DELHI",
        "description": "After breakfast, check out from the hotel and proceed by road from Haridwar towards Delhi. Upon arrival, you will be dropped at Delhi Airport or Delhi Railway Station as per your departure schedule, marking the formal conclusion of your Char Dham Yatra with UK Yatra. | HT : 210 - 225 MTS. | Distance : 220 km | Time : 5-6 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Hotel accommodation as per package (Standard, Semi Deluxe, Deluxe, & Luxury).",
      "Breakfast and dinner; however, you can opt it out.",
      "Transportation as per the package booked.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseeing can be done, if time permits.",
      "Add-ons & sightseeing must be discussed before booking the package.",
      "This 07 Nights & 08 days Do Dham pilgrimage tour from Delhi offers sacred darshan of all four shrines with comfortable accommodations and facilities in between the yatra.",
      "DAY 01 : DELHI TO HARIDWAR"
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea.",
      "Breakfast & Dinner in Kedarnath.",
      "Tax - GST 5%",
      "Pony, Doli or Porter for Kedarnath & Yamunotri Trek.",
      "Special Pooja or VIP Darshan in Kedarnath and Badrinath Temple.",
      "Any type of train and flight tickets."
    ],
    "isFeatured": false,
    "pdfBrochure": "/assets/itinerary/03. By Road/Delhi/04. Dodham by Road Ex Delhi - 07N 08D.pdf",
    "pickupDrop": "Ex-Delhi"
  },
  {
    "id": "uky-road-01-chardham-by-road-ex-haridwar-09n-10d",
    "title": "Char Dham Yatra by Overland Road (9N/10D)",
    "destination": "Yamunotri, Gangotri, Kedarnath & Badrinath",
    "duration": "9 Nights / 10 Days",
    "days": 10,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Classic Overland Road",
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewsCount": 54,
    "overview": "UK Yatra is an Uttarakhand-based tour and travel company with hands-on experience in planning and operating Char Dham Yatra by road. Over the years, we have grown into a trusted name for pilgrims traveling to Yamunotri, Gangotri, Kedarnath, and Badrinath, offering journeys that are well-planned, comfortable, and spiritually fulfilling. “UK” stands for Uttarakhand, the sacred land of the Himalayas, and “Yatra” means a journey with purpose. With a strong local operational network, experienced ground teams at every key destination, and in-depth knowledge of mountain routes and pilgrimage logistics, we focus on delivering transparent and reliable road-based Char Dham journeys. Our approach is simple: personalized service, ethical travel practices, and realistic itinerary planning, so that every guest travels safely, comfortably, and without stress. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra stands for trust and professionalism, creating Char Dham Yatra experiences by road that pilgrims remember for a lifetime.",
    "highlights": [
      "Complete sacred pilgrimage covering Yamunotri, Gangotri, Kedarnath & Badrinath",
      "Scenic drive through the holy Panch Prayags of the Alaknanda & Mandakini rivers",
      "Comfortable twin/triple sharing mountain accommodations with delicious pure veg meals",
      "Dedicated local fleet with experienced drivers familiar with mountain terrain",
      "Complete ground support from start to finish from Haridwar"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "HARIDWAR TO BARKOT",
        "description": "The journey commences from Haridwar, the sacred city situated on the banks of the River Ganga. Proceed towards Barkot via Mussoorie, with an optional stop at Kempty Falls. It is recommended to have lunch at Kempty Falls, as dining options are limited along the route thereafter. Continue the drive to Barkot and check in to the hotel. The remainder of the day is kept free for rest and acclimatization, allowing guests to conserve energy for the Yamunotri trek scheduled for the following day. Overnight stay at Barkot. Barkot Weather : Summers are generally pleasant, with temperatures ranging between 25°C and 30°C. During winters, days remain cool while nights can be cold, with temperatures ranging from 10°C to 5°C. HT : 1220 MTS. | Distance : 210 km | Time : 7-8 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "BARKOT TO YAMUNOTRI DHAM and RETURN BACK TO BARKOT",
        "description": "Early morning, Drive to Jankichatti / Phoolchatti, trek start from here to Yamunotri (5 km). Either by walk or by horse or by Doli at own cost. The trek passes through a lush green valley, a profusion of conifers, rhododendrons, cacti, and several species of Himalayan shrubs. | HT : 3293 MTS. | Distance : 36 km drive & 5 km Trek (one side)",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "BARKOT TO UTTARKASHI",
        "description": "Drive to Uttarkashi. Can visit Vishwanath Temple & Others. Check-in Hotel. Rest day at leisure. Overnight Stay. Uttarkashi Weather – Generally hot in summer, the temperature ranges from 30-35 °C but nights is pleasant, Cold in winters. | HT : 1158 MTS | Distance : 90 km | Time : 4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "UTTARKASHI TO GANGOTRI DHAM and RETURN BACK TO UTTARKASHI",
        "description": "Early morning drive to Gangotri, en route at Gangnani take a holy dip in Garam Kund, further drive to Gangotri via beautiful Harsil Valley. Can visit Harsil, which is famous for its natural beauty and for the majestic views of the Deodar trees, and mountains. On arrival at Shree Gangotri, take a holy dip in the sacred river Ganges which is also called Bhagirathi at its origin. Perform Pooja and Darshan, after that relax for some time in the lovely surroundings. Return back to Uttarkashi. Overnight stay at Uttarkashi. | HT : 3200 MTS. | Distance : 100 km | Time : 3-4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "UTTARKASHI TO RAMPUR / SITAPUR / GUPTKASHI / SONPRAYAG",
        "description": "After breakfast, proceed by road towards Rampur / Sitapur / Guptkashi / Sonprayag via Moolgarh and Lambgaon, en route to Kedarnath Dham. This sector involves a long driving distance and, during the peak season, typically experiences high traffic density, resulting in extended travel duration. En route, enjoy scenic views of the Mandakini River at Tilwara, flowing from Kedarnath alongside the route. In compliance with hill-driving safety regulations, night driving is not permitted and driver duty hours are strictly regulated. Accordingly, the day’s journey and overnight halt will be planned at Rampur / Sitapur / Guptkashi / Sonprayag or the nearest feasible location, depending on real-time traffic conditions, road status, and permissible driving hours. Upon arrival, check-in at the hotel. Evening visit to Ardh Narishwar Temple. Overnight stay at the hotel. HT : 1319 MTS. | Distance : 220 kms | Time : 8-9 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG TO KEDARNATH DHAM",
        "description": "Early morning departure for Kedarnath Dham. Upon arrival, proceed for Kedarnath Darshan and check in for an overnight stay at Camp / Dormitory / Dharamshala / Hotel as per the package booked. By Trek : In the morning, our driver will transfer you to Sonprayag. From Sonprayag, you will take a local shared jeep to Gaurikund, from where the trek to Kedarnath Ji commences. After completing darshan and overnight stay, the following day you will descend via the same route to Gaurikund and thereafter proceed onward to Sonprayag. Please note that due to heavy seasonal congestion and limited parking facilities at Sonprayag, the driver may be required to park the vehicle at a designated holding area nearby. Accordingly, pick-up and coordination will be managed based on prevailing traffic conditions and local regulations. Mobile network connectivity in this sector is intermittent; Jio or BSNL generally offer relatively better coverage. HT : 3583 MTS. | Approx. 30 km by road and 19 km trek (one way).",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 7,
        "title": "KEDARNATH DHAM TO RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG",
        "description": "Early morning you get up before dawn and after taking bath you are at the temple by 4:45 am for the ‘Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostrate with your head touching the deity etc. After Temple Darshan trek down to Rampur / Sitapur / Guptkashi / Sonprayag. Further drive to Guptkashi. Overnight stay at the hotel.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 8,
        "title": "RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "After breakfast, proceed by road towards Badrinath. During the summer season, this sector generally experiences heavy traffic, therefore a substantial portion of the day is spent in transit. As per hill driving safety norms, night driving is not permitted and driver duty hours are regulated. Accordingly, the day’s journey and overnight halt will be planned at Chamoli / Bheemtala / Joshimath or the nearest feasible location en route to Badrinath, subject to traffic conditions, road status, and permissible driving hours. | HT : 1875 -1890 MTS. | Distance : 155 km | Time : 5 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 9,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO BADRINATH DHAM and RETURN BACK TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "Early morning head towards Badrinath, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal and Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are also few interesting sightseeing spot like Mana, Vyas Gufa, Mata Murti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River which you can do (Within the three km of Badrinath). Overnight stay at Chamoli / Bheemtala / Joshimath. If your stay is not in Badrinath leave early. Mana Village : Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. Vasundhara : As the name suggests, Vasundhara is a magnificent waterfall. This place is 5 km. From Badrinath out of which 2 km. is motorable upto Mana. Bhim Pul : On the other side of Mana village, a massive rock forming a natural bridge, lies over the roaring Saraswati river. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers. Vyas Gufa (cave): Near Mana Village, this is a rock-cave where Ved Vyas is believed to have composed the Mahabharata and the pauranic commentaries. Badrinath Weather: The average maximum temperature will be around 18° Celsius and the average minimum is 8° Celsius. Warm and woolen clothes are hence required for a stay in Badrinath throughout the year. Winter in Badrinath is often accompanied by snowfalls. Winter is very chilly with an average temperature of 5° Celsius. Due to the extreme climatic conditions, this time is usually closed for tourists. | HT : 3133 MTS. | Distance : 215-290 km | Time : 7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 10,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO HARIDWAR VIA RISHIKESH",
        "description": "After breakfast, check out from the hotel and drive from Chamoli / Bheemtala / Joshimath towards Haridwar. En route, visit Devprayag (the confluence of the Alaknanda and Bhagirathi rivers), Dhar Devi Temple, and witness the Ganga Aarti at Rishikesh, if time permits. Upon arrival in Haridwar, the driver will drop you at Haridwar Bus Stand / Railway Station / Dehradun Airport, marking the end of your Char Dham Yatra with UK Yatra. HT : 315 MTS. | Distance : 250 km | Time : 07 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Hotel accommodation as per package (Standard, Semi Deluxe, Deluxe, & Luxury).",
      "Breakfast and dinner; however, you can opt it out.",
      "Transportation as per the package booked.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseeing can be done, if time permits.",
      "Add-ons & sightseeing must be discussed before booking the package.",
      "This 09 Nights & 10 days Char Dham pilgrimage tour from Haridwar offers sacred darshan of all four shrines with comfortable accommodations and facilities in between the yatra.",
      "DAY 01 : HARIDWAR TO BARKOT"
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea.",
      "Breakfast & Dinner in Kedarnath.",
      "Tax - GST 5%",
      "Pony, Doli or Porter for Kedarnath & Yamunotri Trek.",
      "Special Pooja or VIP Darshan in Kedarnath and Badrinath Temple.",
      "Any type of train and flight tickets."
    ],
    "isFeatured": true,
    "pdfBrochure": "/assets/itinerary/03. By Road/Haridwar/01. Chardham by Road Ex Haridwar - 09N 10D.pdf",
    "pickupDrop": "Ex-Haridwar"
  },
  {
    "id": "uky-road-02-dodham-by-road-haridwar-05n-06d",
    "title": "Do Dham Yatra by Overland Road (5N/6D)",
    "destination": "Kedarnath & Badrinath",
    "duration": "5 Nights / 6 Days",
    "days": 6,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Classic Overland Road",
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewsCount": 61,
    "overview": "UK Yatra is an Uttarakhand-based tour and travel company with hands-on experience in planning and operating Do Dham Yatra by road. Over the years, we have grown into a trusted name for pilgrims traveling to Yamunotri, Gangotri, Kedarnath, and Badrinath, offering journeys that are well-planned, comfortable, and spiritually fulfilling. “UK” stands for Uttarakhand, the sacred land of the Himalayas, and “Yatra” means a journey with purpose. With a strong local operational network, experienced ground teams at every key destination, and in-depth knowledge of mountain routes and pilgrimage logistics, we focus on delivering transparent and reliable road-based Do Dham journeys. Our approach is simple: personalized service, ethical travel practices, and realistic itinerary planning, so that every guest travels safely, comfortably, and without stress. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra stands for trust and professionalism, creating Do Dham Yatra experiences by road that pilgrims remember for a lifetime.",
    "highlights": [
      "Complete sacred pilgrimage covering Kedarnath & Badrinath",
      "Scenic drive through the holy Panch Prayags of the Alaknanda & Mandakini rivers",
      "Comfortable twin/triple sharing mountain accommodations with delicious pure veg meals",
      "Dedicated local fleet with experienced drivers familiar with mountain terrain",
      "Complete ground support from start to finish from Haridwar"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "HARIDWAR TO RAMPUR / SITAPUR / GUPTKASHI / SONPRAYAG",
        "description": "The tour begins from Haridwar, holy city located on the banks of river Ganges towards Rampur / Sitapur / Guptkashi / Sonprayag via Rishikesh and Devprayag, en route to Kedarnath Dham. This sector involves a long driving distance and, during peak pilgrimage season, often experiences heavy traffic movement, which may extend the overall travel duration. Accordingly, the day’s journey and overnight halt will be operationally planned at Rampur / Sitapur / Guptkashi / Sonprayag or the nearest feasible location, depending on real-time traffic density, road conditions, weather factors, and permissible driving hours at the time of travel, ensuring safety, compliance, and seamless progression of the yatra. Upon arrival, check in at the hotel. In the evening, visit the revered Ardh Narishwar Temple. Overnight stay at the hotel. HT : 1319 MTS. | Distance : 220 kms | Time : 8-9 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "RAMPUR / SITAPUR / GUPTKASHI / SONPRAYAG TO KEDARNATH DHAM",
        "description": "Early morning departure for Kedarnath Dham. Upon arrival, proceed for Kedarnath Darshan and check in for an overnight stay at Camp / Dormitory / Dharamshala / Hotel as per the package booked. By Trek : In the morning, our driver will transfer you to Sonprayag. From Sonprayag, you will take a local shared jeep to Gaurikund, from where the trek to Kedarnath Ji commences. After completing darshan and overnight stay, the following day you will descend via the same route to Gaurikund and thereafter proceed onward to Sonprayag. Please note that due to heavy seasonal congestion and limited parking facilities at Sonprayag, the driver may be required to park the vehicle at a designated holding area nearby. Accordingly, pick-up and coordination will be managed based on prevailing traffic conditions and local regulations. Mobile network connectivity in this sector is intermittent; Jio or BSNL generally offer relatively better coverage. HT : 3583 MTS. | Approx. 30 km by road and 19 km trek (one way).",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "KEDARNATH DHAM TO RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG",
        "description": "Early morning you get up before dawn and after taking bath you are at the temple by 4:45 am for the ‘Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostrate with your head touching the deity etc. After Temple Darshan trek down to Rampur / Sitapur / Guptkashi / Sonprayag. Further drive to Guptkashi. Overnight stay at the hotel.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "After breakfast, proceed by road towards Badrinath. During the summer season, this sector generally experiences heavy traffic, therefore a substantial portion of the day is spent in transit. As per hill driving safety norms, night driving is not permitted and driver duty hours are regulated. Accordingly, the day’s journey and overnight halt will be planned at Chamoli / Bheemtala / Joshimath or the nearest feasible location en route to Badrinath, subject to traffic conditions, road status, and permissible driving hours. | HT : 1875 -1890 MTS. | Distance : 155 km | Time : 5 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO BADRINATH DHAM and RETURN BACK TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "Early morning head towards Badrinath, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal and Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are also few interesting sightseeing spot like Mana, Vyas Gufa, Mata Murti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River which you can do (Within the three km of Badrinath). Overnight stay at Chamoli / Bheemtala / Joshimath. If your stay is not in Badrinath leave early. Mana Village : Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. Vasundhara : As the name suggests, Vasundhara is a magnificent waterfall. This place is 5 km. From Badrinath out of which 2 km. is motorable upto Mana. Bhim Pul : On the other side of Mana village, a massive rock forming a natural bridge, lies over the roaring Saraswati river. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers. Vyas Gufa (cave): Near Mana Village, this is a rock-cave where Ved Vyas is believed to have composed the Mahabharata and the pauranic commentaries. Badrinath Weather: The average maximum temperature will be around 18° Celsius and the average minimum is 8° Celsius. Warm and woolen clothes are hence required for a stay in Badrinath throughout the year. Winter in Badrinath is often accompanied by snowfalls. Winter is very chilly with an average temperature of 5° Celsius. Due to the extreme climatic conditions, this time is usually closed for tourists. | HT : 3133 MTS. | Distance : 215-290 km | Time : 7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO HARIDWAR VIA RISHIKESH",
        "description": "After breakfast, check out from the hotel and drive from Chamoli / Bheemtala / Joshimath towards Haridwar. En route, visit Devprayag (the confluence of the Alaknanda and Bhagirathi rivers), Dhar Devi Temple, and witness the Ganga Aarti at Rishikesh, if time permits. Upon arrival in Haridwar, the driver will drop you at Haridwar Bus Stand / Railway Station / Dehradun Airport, marking the end of your Do Dham Yatra with UK Yatra. HT : 315 MTS. | Distance : 250 km | Time : 07 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Hotel accommodation as per package (Standard, Semi Deluxe, Deluxe, & Luxury).",
      "Breakfast and dinner; however, you can opt it out.",
      "Transportation as per the package booked.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseeing can be done, if time permits.",
      "Add-ons & sightseeing must be discussed before booking the package.",
      "This 05 Nights & 06 days Do Dham pilgrimage tour from Haridwar offers sacred darshan of all four shrines with comfortable accommodations and facilities in between the yatra.",
      "DAY 01 : HARIDWAR TO RAMPUR / SITAPUR / GUPTKASHI / SONPRAYAG"
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea.",
      "Breakfast & Dinner in Kedarnath.",
      "Tax - GST 18%",
      "Pony, Doli or Porter for Kedarnath & Yamunotri Trek.",
      "Special Pooja or VIP Darshan in Kedarnath and Badrinath Temple.",
      "Any type of train and flight tickets."
    ],
    "isFeatured": false,
    "pdfBrochure": "/assets/itinerary/03. By Road/Haridwar/02. Dodham by Road Haridwar - 05N 06D.pdf",
    "pickupDrop": "Ex-Haridwar"
  },
  {
    "id": "uky-group-01-chardham-by-road-ex-haridwar-09n-10d",
    "title": "Char Dham Fixed Departure Group Tour (9N/10D)",
    "destination": "Yamunotri, Gangotri, Kedarnath & Badrinath",
    "duration": "9 Nights / 10 Days",
    "days": 10,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Fixed Departure Group",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewsCount": 68,
    "overview": "UK Yatra is an Uttarakhand-based tour and travel company with hands-on experience in planning and operating Char Dham Yatra by road. Over the years, we have grown into a trusted name for pilgrims traveling to Yamunotri, Gangotri, Kedarnath, and Badrinath, offering journeys that are well-planned, comfortable, and spiritually fulfilling. “UK” stands for Uttarakhand, the sacred land of the Himalayas, and “Yatra” means a journey with purpose. With a strong local operational network, experienced ground teams at every key destination, and in-depth knowledge of mountain routes and pilgrimage logistics, we focus on delivering transparent and reliable road-based Char Dham journeys. Our approach is simple: personalized service, ethical travel practices, and realistic itinerary planning, so that every guest travels safely, comfortably, and without stress. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra stands for trust and professionalism, creating Char Dham Yatra experiences by road that pilgrims remember for a lifetime.",
    "highlights": [
      "Complete sacred pilgrimage covering Yamunotri, Gangotri, Kedarnath & Badrinath",
      "Scenic drive through the holy Panch Prayags of the Alaknanda & Mandakini rivers",
      "Comfortable twin/triple sharing mountain accommodations with delicious pure veg meals",
      "Dedicated local fleet with experienced drivers familiar with mountain terrain",
      "Complete ground support from start to finish from Haridwar"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "HARIDWAR TO BARKOT",
        "description": "The journey commences from Haridwar, the sacred city situated on the banks of the River Ganga. Proceed towards Barkot via Mussoorie, with an optional stop at Kempty Falls. It is recommended to have lunch at Kempty Falls, as dining options are limited along the route thereafter. Continue the drive to Barkot and check in to the hotel. The remainder of the day is kept free for rest and acclimatization, allowing guests to conserve energy for the Yamunotri trek scheduled for the following day. Overnight stay at Barkot. Barkot Weather : Summers are generally pleasant, with temperatures ranging between 25°C and 30°C. During winters, days remain cool while nights can be cold, with temperatures ranging from 10°C to 5°C. HT : 1220 MTS. | Distance : 210 km | Time : 7-8 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "BARKOT TO YAMUNOTRI DHAM and RETURN BACK TO BARKOT",
        "description": "Early morning, Drive to Jankichatti / Phoolchatti, trek start from here to Yamunotri (5 km). Either by walk or by horse or by Doli at own cost. The trek passes through a lush green valley, a profusion of conifers, rhododendrons, cacti, and several species of Himalayan shrubs. | HT : 3293 MTS. | Distance : 36 km drive & 5 km Trek (one side)",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "BARKOT TO UTTARKASHI",
        "description": "Drive to Uttarkashi. Can visit Vishwanath Temple & Others. Check-in Hotel. Rest day at leisure. Overnight Stay. Uttarkashi Weather – Generally hot in summer, the temperature ranges from 30-35 °C but nights is pleasant, Cold in winters. | HT : 1158 MTS | Distance : 90 km | Time : 4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "UTTARKASHI TO GANGOTRI DHAM and RETURN BACK TO UTTARKASHI",
        "description": "Early morning drive to Gangotri, en route at Gangnani take a holy dip in Garam Kund, further drive to Gangotri via beautiful Harsil Valley. Can visit Harsil, which is famous for its natural beauty and for the majestic views of the Deodar trees, and mountains. On arrival at Shree Gangotri, take a holy dip in the sacred river Ganges which is also called Bhagirathi at its origin. Perform Pooja and Darshan, after that relax for some time in the lovely surroundings. Return back to Uttarkashi. Overnight stay at Uttarkashi. | HT : 3200 MTS. | Distance : 100 km | Time : 3-4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "UTTARKASHI TO RAMPUR / SITAPUR / GUPTKASHI / SONPRAYAG",
        "description": "After breakfast, proceed by road towards Rampur / Sitapur / Guptkashi / Sonprayag via Moolgarh and Lambgaon, en route to Kedarnath Dham. This sector involves a long driving distance and, during the peak season, typically experiences high traffic density, resulting in extended travel duration. En route, enjoy scenic views of the Mandakini River at Tilwara, flowing from Kedarnath alongside the route. In compliance with hill-driving safety regulations, night driving is not permitted and driver duty hours are strictly regulated. Accordingly, the day’s journey and overnight halt will be planned at Rampur / Sitapur / Guptkashi / Sonprayag or the nearest feasible location, depending on real-time traffic conditions, road status, and permissible driving hours. Upon arrival, check-in at the hotel. Evening visit to Ardh Narishwar Temple. Overnight stay at the hotel. HT : 1319 MTS. | Distance : 220 kms | Time : 8-9 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG TO KEDARNATH DHAM",
        "description": "Early morning departure for Kedarnath Dham. Upon arrival, proceed for Kedarnath Darshan and check in for an overnight stay at Camp / Dormitory / Dharamshala / Hotel as per the package booked. By Trek : In the morning, our driver will transfer you to Sonprayag. From Sonprayag, you will take a local shared jeep to Gaurikund, from where the trek to Kedarnath Ji commences. After completing darshan and overnight stay, the following day you will descend via the same route to Gaurikund and thereafter proceed onward to Sonprayag. Please note that due to heavy seasonal congestion and limited parking facilities at Sonprayag, the driver may be required to park the vehicle at a designated holding area nearby. Accordingly, pick-up and coordination will be managed based on prevailing traffic conditions and local regulations. Mobile network connectivity in this sector is intermittent; Jio or BSNL generally offer relatively better coverage. HT : 3583 MTS. | Approx. 30 km by road and 19 km trek (one way).",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 7,
        "title": "KEDARNATH DHAM TO RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG",
        "description": "Early morning you get up before dawn and after taking bath you are at the temple by 4:45 am for the ‘Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostrate with your head touching the deity etc. After Temple Darshan trek down to Rampur / Sitapur / Guptkashi / Sonprayag. Further drive to Guptkashi. Overnight stay at the hotel.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 8,
        "title": "RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "After breakfast, proceed by road towards Badrinath. During the summer season, this sector generally experiences heavy traffic, therefore a substantial portion of the day is spent in transit. As per hill driving safety norms, night driving is not permitted and driver duty hours are regulated. Accordingly, the day’s journey and overnight halt will be planned at Chamoli / Bheemtala / Joshimath or the nearest feasible location en route to Badrinath, subject to traffic conditions, road status, and permissible driving hours. | HT : 1875 -1890 MTS. | Distance : 155 km | Time : 5 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 9,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO BADRINATH DHAM and RETURN BACK TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "Early morning head towards Badrinath, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal and Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are also few interesting sightseeing spot like Mana, Vyas Gufa, Mata Murti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River which you can do (Within the three km of Badrinath). Overnight stay at Chamoli / Bheemtala / Joshimath. If your stay is not in Badrinath leave early. Mana Village : Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. Vasundhara : As the name suggests, Vasundhara is a magnificent waterfall. This place is 5 km. From Badrinath out of which 2 km. is motorable upto Mana. Bhim Pul : On the other side of Mana village, a massive rock forming a natural bridge, lies over the roaring Saraswati river. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers. Vyas Gufa (cave): Near Mana Village, this is a rock-cave where Ved Vyas is believed to have composed the Mahabharata and the pauranic commentaries. Badrinath Weather: The average maximum temperature will be around 18° Celsius and the average minimum is 8° Celsius. Warm and woolen clothes are hence required for a stay in Badrinath throughout the year. Winter in Badrinath is often accompanied by snowfalls. Winter is very chilly with an average temperature of 5° Celsius. Due to the extreme climatic conditions, this time is usually closed for tourists. | HT : 3133 MTS. | Distance : 215-290 km | Time : 7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 10,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO HARIDWAR VIA RISHIKESH",
        "description": "After breakfast, check out from the hotel and drive from Chamoli / Bheemtala / Joshimath towards Haridwar. En route, visit Devprayag (the confluence of the Alaknanda and Bhagirathi rivers), Dhar Devi Temple, and witness the Ganga Aarti at Rishikesh, if time permits. Upon arrival in Haridwar, the driver will drop you at Haridwar Bus Stand / Railway Station / Dehradun Airport, marking the end of your Char Dham Yatra with UK Yatra. HT : 315 MTS. | Distance : 250 km | Time : 07 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Hotel accommodation as per package (Standard, Semi Deluxe, Deluxe, & Luxury).",
      "Breakfast and dinner; however, you can opt it out.",
      "Transportation as per the package booked.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseeing can be done, if time permits.",
      "Add-ons & sightseeing must be discussed before booking the package.",
      "This 09 Nights & 10 days Char Dham pilgrimage tour from Haridwar offers sacred darshan of all four shrines with comfortable accommodations and facilities in between the yatra.",
      "DAY 01 : HARIDWAR TO BARKOT"
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea.",
      "Breakfast & Dinner in Kedarnath.",
      "Tax - GST 5%",
      "Pony, Doli or Porter for Kedarnath & Yamunotri Trek.",
      "Special Pooja or VIP Darshan in Kedarnath and Badrinath Temple.",
      "Any type of train and flight tickets."
    ],
    "isFeatured": false,
    "pdfBrochure": "/assets/itinerary/04. Group Tour/01. Chardham Group Tour by Road Ex Haridwar - 09N 10D.pdf",
    "pickupDrop": "Ex-Haridwar"
  },
  {
    "id": "uky-group-02-dodham-by-road-haridwar-05n-06d",
    "title": "Do Dham Fixed Departure Group Tour (5N/6D)",
    "destination": "Kedarnath & Badrinath",
    "duration": "5 Nights / 6 Days",
    "days": 6,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Fixed Departure Group",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 5.0,
    "reviewsCount": 75,
    "overview": "UK Yatra is an Uttarakhand-based tour and travel company with hands-on experience in planning and operating Do Dham Yatra by road. Over the years, we have grown into a trusted name for pilgrims traveling to Yamunotri, Gangotri, Kedarnath, and Badrinath, offering journeys that are well-planned, comfortable, and spiritually fulfilling. “UK” stands for Uttarakhand, the sacred land of the Himalayas, and “Yatra” means a journey with purpose. With a strong local operational network, experienced ground teams at every key destination, and in-depth knowledge of mountain routes and pilgrimage logistics, we focus on delivering transparent and reliable road-based Do Dham journeys. Our approach is simple: personalized service, ethical travel practices, and realistic itinerary planning, so that every guest travels safely, comfortably, and without stress. Certified with Uttarakhand Tourism, GST registered, MSME registered, and compliant with the Shop & Establishment Act, UK Yatra stands for trust and professionalism, creating Do Dham Yatra experiences by road that pilgrims remember for a lifetime.",
    "highlights": [
      "Complete sacred pilgrimage covering Kedarnath & Badrinath",
      "Scenic drive through the holy Panch Prayags of the Alaknanda & Mandakini rivers",
      "Comfortable twin/triple sharing mountain accommodations with delicious pure veg meals",
      "Dedicated local fleet with experienced drivers familiar with mountain terrain",
      "Complete ground support from start to finish from Haridwar"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "HARIDWAR TO RAMPUR / SITAPUR / GUPTKASHI / SONPRAYAG",
        "description": "The tour begins from Haridwar, holy city located on the banks of river Ganges towards Rampur / Sitapur / Guptkashi / Sonprayag via Rishikesh and Devprayag, en route to Kedarnath Dham. This sector involves a long driving distance and, during peak pilgrimage season, often experiences heavy traffic movement, which may extend the overall travel duration. Accordingly, the day’s journey and overnight halt will be operationally planned at Rampur / Sitapur / Guptkashi / Sonprayag or the nearest feasible location, depending on real-time traffic density, road conditions, weather factors, and permissible driving hours at the time of travel, ensuring safety, compliance, and seamless progression of the yatra. Upon arrival, check in at the hotel. In the evening, visit the revered Ardh Narishwar Temple. Overnight stay at the hotel. HT : 1319 MTS. | Distance : 220 kms | Time : 8-9 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "RAMPUR / SITAPUR / GUPTKASHI / SONPRAYAG TO KEDARNATH DHAM",
        "description": "Early morning departure for Kedarnath Dham. Upon arrival, proceed for Kedarnath Darshan and check in for an overnight stay at Camp / Dormitory / Dharamshala / Hotel as per the package booked. By Trek : In the morning, our driver will transfer you to Sonprayag. From Sonprayag, you will take a local shared jeep to Gaurikund, from where the trek to Kedarnath Ji commences. After completing darshan and overnight stay, the following day you will descend via the same route to Gaurikund and thereafter proceed onward to Sonprayag. Please note that due to heavy seasonal congestion and limited parking facilities at Sonprayag, the driver may be required to park the vehicle at a designated holding area nearby. Accordingly, pick-up and coordination will be managed based on prevailing traffic conditions and local regulations. Mobile network connectivity in this sector is intermittent; Jio or BSNL generally offer relatively better coverage. HT : 3583 MTS. | Approx. 30 km by road and 19 km trek (one way).",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "KEDARNATH DHAM TO RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG",
        "description": "Early morning you get up before dawn and after taking bath you are at the temple by 4:45 am for the ‘Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostrate with your head touching the deity etc. After Temple Darshan trek down to Rampur / Sitapur / Guptkashi / Sonprayag. Further drive to Guptkashi. Overnight stay at the hotel.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "RAMPUR/SITAPUR/GUPTKASHI/SONPRAYAG TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "After breakfast, proceed by road towards Badrinath. During the summer season, this sector generally experiences heavy traffic, therefore a substantial portion of the day is spent in transit. As per hill driving safety norms, night driving is not permitted and driver duty hours are regulated. Accordingly, the day’s journey and overnight halt will be planned at Chamoli / Bheemtala / Joshimath or the nearest feasible location en route to Badrinath, subject to traffic conditions, road status, and permissible driving hours. | HT : 1875 -1890 MTS. | Distance : 155 km | Time : 5 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO BADRINATH DHAM and RETURN BACK TO CHAMOLI / BHEEMTALA / JOSHIMATH",
        "description": "Early morning head towards Badrinath, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal and Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are also few interesting sightseeing spot like Mana, Vyas Gufa, Mata Murti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River which you can do (Within the three km of Badrinath). Overnight stay at Chamoli / Bheemtala / Joshimath. If your stay is not in Badrinath leave early. Mana Village : Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. Vasundhara : As the name suggests, Vasundhara is a magnificent waterfall. This place is 5 km. From Badrinath out of which 2 km. is motorable upto Mana. Bhim Pul : On the other side of Mana village, a massive rock forming a natural bridge, lies over the roaring Saraswati river. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers. Vyas Gufa (cave): Near Mana Village, this is a rock-cave where Ved Vyas is believed to have composed the Mahabharata and the pauranic commentaries. Badrinath Weather: The average maximum temperature will be around 18° Celsius and the average minimum is 8° Celsius. Warm and woolen clothes are hence required for a stay in Badrinath throughout the year. Winter in Badrinath is often accompanied by snowfalls. Winter is very chilly with an average temperature of 5° Celsius. Due to the extreme climatic conditions, this time is usually closed for tourists. | HT : 3133 MTS. | Distance : 215-290 km | Time : 7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "CHAMOLI / BHEEMTALA / JOSHIMATH TO HARIDWAR VIA RISHIKESH",
        "description": "After breakfast, check out from the hotel and drive from Chamoli / Bheemtala / Joshimath towards Haridwar. En route, visit Devprayag (the confluence of the Alaknanda and Bhagirathi rivers), Dhar Devi Temple, and witness the Ganga Aarti at Rishikesh, if time permits. Upon arrival in Haridwar, the driver will drop you at Haridwar Bus Stand / Railway Station / Dehradun Airport, marking the end of your Do Dham Yatra with UK Yatra. HT : 315 MTS. | Distance : 250 km | Time : 07 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Hotel accommodation as per package (Standard, Semi Deluxe, Deluxe, & Luxury).",
      "Breakfast and dinner; however, you can opt it out.",
      "Transportation as per the package booked.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseeing can be done, if time permits.",
      "Add-ons & sightseeing must be discussed before booking the package.",
      "This 05 Nights & 06 days Do Dham pilgrimage tour from Haridwar offers sacred darshan of all four shrines with comfortable accommodations and facilities in between the yatra.",
      "DAY 01 : HARIDWAR TO RAMPUR / SITAPUR / GUPTKASHI / SONPRAYAG"
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea.",
      "Breakfast & Dinner in Kedarnath.",
      "Tax - GST 5%",
      "Pony, Doli or Porter for Kedarnath & Yamunotri Trek.",
      "Special Pooja or VIP Darshan in Kedarnath and Badrinath Temple.",
      "Any type of train and flight tickets."
    ],
    "isFeatured": false,
    "pdfBrochure": "/assets/itinerary/04. Group Tour/02. Dodham Group Tour by Road Haridwar - 05N 06D.pdf",
    "pickupDrop": "Ex-Haridwar"
  },
  {
    "id": "uky-leisure-haridwar-rishikesh-dehradun-mussoorie-3n-4d",
    "title": "Haridwar Rishikesh Dehradun Mussoorie Leisure Tour (3N/4D)",
    "destination": "Haridwar, Rishikesh, Dehradun & Mussoorie",
    "duration": "3 Nights / 4 Days",
    "days": 4,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "All Year Round (Best: Oct - Jun)",
    "category": "Leisure & Hill Station",
    "image": "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewsCount": 82,
    "overview": "Welcome to UK Yatra – a premier tour and travel company specializing in exploring the majestic state of Uttarakhand, India. Our name “Yatra” in Sanskrit means “journey” and we believe that traveling is more than just visiting a destination, it’s an experience that creates lifelong memories and we at UK Yatra help you “Capture Unforgettable memories”. Experience the beauty and spirit of Uttarakhand with a journey covering Haridwar, Rishikesh, Dehradun, and Mussoorie.",
    "highlights": [
      "Mesmerizing Ganga Aarti at Har Ki Pauri, Haridwar & Triveni Ghat, Rishikesh",
      "Scenic Queen of the Hills Mussoorie: Kempty Falls, Gun Hill & Mall Road",
      "Explore historic landmarks: Forest Research Institute & Robber's Cave in Dehradun",
      "Thrilling white-water rafting, cafe hopping and suspension bridges in Rishikesh",
      "Comfortable family-friendly private cab transfers and premium stays"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival at Haridwar → Rishikesh (25 km / 1 hr)",
        "description": "Pickup from Haridwar Railway Station / Bus Stand. Holy dip at Har Ki Pauri. Darshan at Mansa Devi Temple (Ropeway) & Chandi Devi Temple. Proceed to Rishikesh. Visit Ram Jhula, Laxman Jhula, Parmarth Niketan Ashram. Evening: Attend Ganga Aarti at Triveni Ghat / Parmarth Niketan. Overnight Stay: Rishikesh",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "Rishikesh → Dehradun (45 km / 1.5 hrs) → Mussoorie (35 km / 1.5 hrs)",
        "description": "Breakfast & check-out. Drive to Dehradun. Sightseeing: Robber’s Cave, Sahastradhara, Tapkeshwar Mahadev Temple. Continue to Mussoorie. Evening leisure walk & shopping at Mall Road. Overnight Stay: Mussoorie",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "Mussoorie Local Sightseeing",
        "description": "Breakfast at hotel. Visit Kempty Falls, Company Garden, Camel’s Back Road. Ropeway to Gun Hill Point. Visit Lal Tibba Scenic Point – highest point of Mussoorie. Evening leisure time at Mall Road / Café hopping. Overnight Stay: Mussoorie",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "Mussoorie → Haridwar (90 km / 3.5–4 hrs)",
        "description": "Breakfast & check-out. Scenic drive back to Haridwar. En route visit Daksha Mahadev Temple, Bharat Mata Mandir & Shantikunj Ashram (time permitting). Drop at Haridwar Railway Station / Bus Stand for onward journey. UK YATRA : TERMS AND CONDITIONS TRAVEL DOCUMENTS It is your responsibility to ensure that you have the necessary travel documents, Aadhar Card copies are to be shared by all Indian passengers, & passport in case of foreign nationals. We are not responsible for any delays or costs incurred due to your failure to obtain the necessary travel documents. RETURN TICKET Our passengers are advised to keep at least one or two additional day at hand at the end of the tour, over & above the tour period, to avoid missing their return ticket in case they get stuck due any reasons. We would not compensate for missing of flights, train, bus ticket etc. HOTEL ACCOMMODATION Hotel accommodation as per the package (same or similar hotels) is subject to availability and varies based on the date, day, and booking time provided to the UK Yatra team. We offer standard, deluxe, and luxury categories, with the standard package considered the budget-friendly option. Hotel bookings are pre-arranged; therefore, changes in accommodation are not possible. Any change in hotel booking will incur additional charges. FOOD POLICY Menu is predetermined as per the package category, please discuss any extra food related requirements before booking the package, example - Jain Food, South Indian Food, Gujurati Food etc. If MAPAI Plan (breakfast and dinner) meals are included at the hotel and cannot be changed to another location. Any deviation from the designated meal area will not be compensated. Meals are served at fixed times determined by the hotel. Guests must be present on time to avail themselves of the meal service. If you leave the hotel early, breakfast will not be provided. During peak months or for personal preference reasons, we recommend booking the EP plan (room only) instead of MAPAI (breakfast and dinner) to avoid potential issues. The MAPAI plan includes breakfast and dinner. Generally, in Standard package - 4 Rotis, 1 portion Rice, Dal & Seasonable Veg Sabzi. If something is ordered beyond the thali of hotel it will be directly payable. Bisleri, Chocolate, Icecream, Dessert etc. are not included in the package. Deluxe & Luxury includes Paneer Sabzi, Pickles, Green Salad, Papad etc. Non Veg is strictly prohibited during Devotional Yatras. AC & NON AC VEHICLE For hilly regions, we provide non-air-conditioned vehicles by default to ensure better performance and safety on mountain roads. However, if you prefer an air-conditioned vehicle, the same can be arranged on request with an additional charge. Kindly inform us in advance so we can make the necessary arrangements. CHILD POLICY Children under 5 years old:No charge Children aged 5 to 9 years old:Half charge Children aged 10 years and above:Full charge The age of each child will be verified using their Aadhar card or birth certificate. It is mandatory to carry proof of age (Aadhar card or birth certificate) for all children traveling. If child is below 10 then Accommodation and meals for children will be provided on a sharing basis with parents or guardians. If a child is below 10 years old and requires an extra bed, extra bed charges will apply. This must be communicated at the time of booking. Parents or guardians are responsible for the safety and conduct of their children during the tour. Any special requests for children, such as infant seats or specific dietary requirements, should be communicated at the time of booking. Any additional services requested for children that are not included in the package will be chargeable separately. TRAVEL INSURANCE We strongly recommend that all passengers purchase comprehensive travel insurance to cover themselves against cancellation, medical emergencies, personal accidents, loss of baggage, etc. HEALTH AND MEDICAL CONDITIONS Passengers must inform UK Yatra team of any pre-existing medical conditions, disabilities, or special dietary requirements at the time of booking. VEHICLE BREAKDOWN We always provide government certified vehicle however such occurrences are beyond our control. We will endeavor to arrange an alternate vehicle within 12 hours. Your cooperation during these unforeseen circumstances is essential. We appreciate your understanding that vehicle breakdowns can happen unexpectedly. Our team will keep you informed about the progress and will work diligently to minimize any inconvenience caused. UNFORESEEN CIRCUMSTANCE In the event of adverse weather conditions, landslides, floods, earthquake, traffic jam or any unforeseen circumstances beyond our control that necessitate an extension of stay or change in the itinerary, passengers are responsible for any additional costs incurred as a result of such situations. We will make every effort to assist and arrange alternative accommodations or travel arrangements, but any extra expenses, including additional hotel nights, transportation, or meals, will be borne by the passengers themselves. ADD-ON SERVICES Additional services which are not mentioned in our inclusions will be extra chargeable, and the same must be confirmed to us at the time of booking. RIGHT TO CANCEL We reserve the right to cancel the participation of any passenger who exhibits unruly behavior, abusive language, intoxication, sickness, mental instability, or poses a safety risk to themselves, other passengers, or our staff. In such cases, no refund will be provided to the passenger(s) in question. While travelling in group we prioritize the safety and comfort of all our passengers and staff, and reserve the right to take necessary actions to ensure a safe and enjoyable travel experience for everyone involved. GUIDELINES FOR TRAVELING IN A GROUP UK Yatra will guide the group; therefore following the instructions and guidelines provided by UK Yatra throughout the tour is mandatory. Adhere to the itinerary and be punctual for all scheduled timings, including departure times, sightseeing schedules, and meal times. Travel together as a group rather than exploring places individually to ensure everyone's safety and convenience. Triple or quad room sharing will be provided by default. If you require a separate room, additional charges will apply. Please inform UK Yatra at the time of booking. The meal for everyone in the group will be the same. If you have specific dietary preferences or requirements, please inform UK Yatra at the time of booking, we would prefer you to book EP Plan and pay for meal as per need. Seating arrangements will be organized by the management based on the date and time of booking receipt. Respect cultural differences and be considerate of others in the group. Any behavior deemed inappropriate, offensive, or disruptive to the group's harmony will not be tolerated. UK Yatra reserves the right to cancel the participation of any passenger who misbehaves, exhibits abusive behavior, is intoxicated, sick, mentally unstable, or poses a safety risk to themselves or others. No refund will be provided in such cases. Clear and open communication is essential. Please promptly communicate any concerns or issues to UK Yatra's team for timely resolution. If group Yatra is cancelled before commencing of Yatra due to any reason caused by UK Yatra then refund will be provided. RESCHEDULING OF BOOKING Rescheduling your booking to any future or prior travel date, will be done subject to availability, and on payment of 10% of the total tour cost. This will be permitted only if informed at least 07 days before arrival date. In case rescheduling is requested less than 07 days prior to the travel date, then the booking would be treated as cancelled, & a fresh booking will be given subject to availability, after the levy of applicable cancellation charges. Passengers will not be permitted to board or commence the tour, unless full & final payment of the tour has been done. CANCELLATIONS POLICY Cancellation before 15 days & more: 10% deduction of total package cost Cancellation between 14 to 8 days prior: 20% deduction of total package cost Cancellation between 7 to 3 days prior: 40% deduction of total package cost Cancellation before 2 days & less: 100% deduction 100% deduction in case of no show or late arrival. Your refund request will be answered and processed promptly. All the refund/cancellation requests shall be sent through email/mail in writing and be sent at the earliest possible. No refund shall be processed unless a written request (email or mail). Refunds will be processed to your bank account only and may take upto 10-15 business days. All the refunds will be done through NEFT transfer only. No refund will be done through cash. TAX Any increase in government levies or taxes, after the confirmation of booking, will be extra chargeable to the passengers. Payment against the same will have to be done before the commencement of tour.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Accommodation in well-appointed hotels.",
      "Daily Breakfast & Dinner at hotel.",
      "All sightseeing & transfers by private vehicle.",
      "Parking, Toll Tax, Driver Allowance, Fuel charges.",
      "Assistance during the tour.",
      "Train / Airfare.",
      "Ropeway / Cable Car / Adventure sports charges.",
      "Personal expenses (laundry, shopping, tips, etc.)."
    ],
    "exclusions": [
      "Any personal expenses such as laundry, phone calls, porter, pony, doli or palki charges",
      "Cost of lunch, packaged drinking water, extra beverages, or room service",
      "Special puja or VIP darshan slips not explicitly included in the package",
      "Expenses arising due to natural calamities, landslides, roadblocks, flight delays or weather disruptions",
      "Travel insurance, medical rescue, or emergency evacuation expenses",
      "Any item or service not explicitly listed under package inclusions"
    ],
    "isFeatured": true,
    "pdfBrochure": "/assets/itinerary/04. Haridwar_Rishikesh_DDun_Massoorri/Haridwar Rishikesh Dehradun Mussoorie - 3N 4D.pdf",
    "pickupDrop": "Ex-Haridwar"
  },
  {
    "id": "uky-leisure-haridwar-rishikesh-dehradun-mussoorie-7n-8d",
    "title": "Haridwar Rishikesh Dehradun Mussoorie Leisure Tour (7N/8D)",
    "destination": "Haridwar, Rishikesh, Dehradun & Mussoorie",
    "duration": "7 Nights / 8 Days",
    "days": 8,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "All Year Round (Best: Oct - Jun)",
    "category": "Leisure & Hill Station",
    "image": "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewsCount": 89,
    "overview": "Welcome to UK Yatra – a premier tour and travel company specializing in exploring the majestic state of Uttarakhand, India. Our name “Yatra” in Sanskrit means “journey” and we believe that traveling is more than just visiting a destination, it’s an experience that creates lifelong memories and we at UK Yatra help you “Capture Unforgettable memories”. Comfortable and sanitized vehicle (as per group size) for sightseeing on all days as per the itinerary.",
    "highlights": [
      "Mesmerizing Ganga Aarti at Har Ki Pauri, Haridwar & Triveni Ghat, Rishikesh",
      "Scenic Queen of the Hills Mussoorie: Kempty Falls, Gun Hill & Mall Road",
      "Explore historic landmarks: Forest Research Institute & Robber's Cave in Dehradun",
      "Thrilling white-water rafting, cafe hopping and suspension bridges in Rishikesh",
      "Comfortable family-friendly private cab transfers and premium stays"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival at Haridwar - Visit and Stay",
        "description": "Reach Haridwar Bus Stand/Railway Station/Airport by morning. Upon arrival, place your belongings in your hotel room and get refreshed. Start your first day of a trip with a dip in the holy Ganga and visit Mansa and Chandi Devi (either by walk or cable-car), and Anjana Devi. Visit nearby places and explore the vintage market of Haridwar. Watch the sunset by the bank of the Ganga river and witness the stupendous holy Ganga Aarti at Har ki Pauri. Return to your hotel. Dinner and overnight stay.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "Explore at Haridwar - Visit Temple of Haridwar",
        "description": "After Breakfast, Driver to Daksh Temple (Susraal of God Shiva) and nearby Temple of Daksh Mandir like Shitla Mata Mandir, Sati Kund, etc. and Bank of Ganga River at Kankhal. After Pawan Dham, Vashno Mata Mandir, Bharat Mata Mandir, Adbhut Mandir. After visit of temples, Take lunch at Shanti Kunj Kenteen and visit Shanti Kunj, Haridwar. Return to your hotel. Dinner and overnight stay.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "Rishikesh - Sightseeing, adventure and stay",
        "description": "After a healthy breakfast at the hotel, leave for Rishikesh. Driver to Neelkanth Temple (Temple of God Shiva, where God Shiva take Vish after Samundra Manthan). After visit of Neelkanth, Stay in Camp at Evening, Near Ganga Beach and enjoy camp in Rishikesh.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "Rishikesh - Sightseeing, adventure and stay",
        "description": "After a healthy breakfast in camp, get ready for rishikesh rafting adventure and enjoy the thrilling, adventurous experience of a lifetime. After rafting, relax your muscles by having lunch at the local restaurants or explore the shades of cafes or simply find yourself amidst the natural beauty at Ganga Beach. Visit the famous tourist spots- The Beatles Ashram, HimShail and Neergarh waterfall, Phool Chatti Ashram. Visit Visit Ram Jhula and Laxman Jhula. Return to your camp or hotel. Take dinner and stay.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "Dehradun - Sightseeing and stay",
        "description": "Have breakfast and check out from the hotel in Rishikesh. Place your belongings in the hotel and freshen up. The day belongs to explore the City of Love - Dehradun. Explore the popular tourist places- Rover's cave, Sahastradhara, Malsi Deer Park, Tapkeshwar Mandir, Maldevta, and Buddhists relics. Also, enjoy the natural beauty in Malsi deer park and Rajaji National park. The streets of Dehradun are worth exploring. Take a relaxing walk on Rajpur Road and watch the sunset from any point. Return to your hotel. Dinner and stay.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "Drive to Mussoorie and Sightseeing",
        "description": "After checking out from Dehradun, reach Mussoorie through the woods and hills. After a scenic ride to your Mussoorie hotel, get ready to explore the Queen of Hills. First, take a soothing boat-ride in Mussoorie Lake. Further, visit Kempty Fall and take a dip into the chilly water. Explore variant flora and fauna at Company Garden and Jawahar Aquarium. Take a ropeway ride to Gun Hill Point and capture the awestruck view of the Himalayan Ranges. Admire the tranquil view surrounded by the views of the Garhwal range of the Himalayas from Lal Tibba along with a chai and Maggi. Take a trek to George Everest and witness the dreamlike sunset from the peak in the morning, Stroll on Mall Road and Camel's Road to call it an evening and return to your hotel. Dinner and overnight stay.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 7,
        "title": "Dhanolity and Surkhanda Devi Temple",
        "description": "Have breakfast and drive for Dhanolity and Surkhanda Devi Mandir. Dhanaulti is a quiet hill station at an elevation of 2286 meters above sea level, it offers panoramic views of the lofty Himalayas. Situated in the foothills of the Garhwal Himalayan range located 115 km from New Tehri, the district headquarter, 60 km from the hill station of Mussoorie and Surkanda Devi is a Hindu temple near Kanatal, Uttarakhand, India. It is at an altitude of about 2756 metres lies close to nearby hill stations of Dhanaulti and Chamba walking distance of approx 3 kilometres [1.9 mi] from Kaddukhal, the place where vehicles are parked. After visit both place return at Haridwar and Stay in pre-booked Haridwar Hotel.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 8,
        "title": "Departure day",
        "description": "This amazing trip to Uttarakhand ends here. Thanks, and Regards. !!! Team UK Yatra. WE ASSURE YOU OF A SAFE & MEMORABLE PILGRIMAGE. Regards, UK Yatra | +91 – 6396827796 --------------------------------------------- Bank Details for Booking Amount [Don’t send money to other A/c] Account Holder : UK Yatra Bank Name : HDFC Bank Current Account Number: 50200081776992 IFS Code: HDFC0005481",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Accommodation in Standard, Deluxe and Luxury properties.",
      "Driver Allowance.",
      "Experienced driver cum guide.",
      "All applicable Taxes & Parking.",
      "Haridwar (3N) - Rishikesh (2N) – Dehradun (1N) - Mussoorie (1N)",
      "Tour Package Highlights:",
      "Experience Ganga Aarti at Haridwar and Triveni Ghat in Rishikesh and feel the peace and divinity deep within your soul.",
      "Experience a thrilling trek to Robber's Cave, a rustic wonder where you can put your legs in the water while having snacks from the nearby restaurants."
    ],
    "exclusions": [
      "Any personal expenses such as laundry, phone calls, porter, pony, doli or palki charges",
      "Cost of lunch, packaged drinking water, extra beverages, or room service",
      "Special puja or VIP darshan slips not explicitly included in the package",
      "Expenses arising due to natural calamities, landslides, roadblocks, flight delays or weather disruptions",
      "Travel insurance, medical rescue, or emergency evacuation expenses",
      "Any item or service not explicitly listed under package inclusions"
    ],
    "isFeatured": false,
    "pdfBrochure": "/assets/itinerary/04. Haridwar_Rishikesh_DDun_Massoorri/Haridwar Rishikesh Dehradun Mussoorie - 3N 4D.pdf",
    "pickupDrop": "Ex-Haridwar"
  },
  {
    "id": "uky-trek-09-tungnath-by-road-ex-haridwar",
    "title": "Chopta Tungnath & Chandrashila Trek (2N/3D)",
    "destination": "Chopta, Tungnath & Chandrashila",
    "duration": "2 Nights / 3 Days",
    "days": 3,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "Apr - Jun & Sep - Nov",
    "category": "Trek & Adventure",
    "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewsCount": 96,
    "overview": "UK Yatra – a premier tour and travel company specializing in exploring the majestic state of Uttarakhand, India. Our name “Yatra” in Sanskrit means “journey” and we believe that traveling is more than just visiting a destination, it’s an experience that creates lifelong memories and we at UK Yatra help you “Capture Unforgettable memories”. Chopta, known as the \"Mini Switzerland of India\" offers breathtaking views of the Himalayas and lush meadows. It’s the base for the trek to Tungnath, the world’s highest Shiva temple. This serene destination is perfect for nature lovers and adventure seekers looking for a peaceful yet thrilling mountain escape.",
    "highlights": [
      "Trek to Tungnath (3,680m) - the highest Shiva shrine in the world",
      "Panoramic 360-degree summit vista of Chaukhamba, Nanda Devi & Trishul from Chandrashila",
      "Lush alpine meadows (Bugyals) of Chopta and scenic Deoriatal lake",
      "Experienced local mountain guides and safety-focused trek briefing",
      "Ideal weekend Himalayan adventure for nature lovers and photographers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Haridwar to Chopta (via Rishikesh Devprayag, Rudraprayag and Ukhimath)",
        "description": "The drive will commence from Haridwar between approximately 4:00 AM and 5:00 AM. Drive through the scenic corridors of the Garhwal Himalayas, experiencing captivating views of the Alaknanda and Mandakini rivers along the route. En route, visit the sacred Devprayag, the revered Dhari Devi Temple, Rudraprayag, and the Omkaleshwar Temple in Ukhimath. After seeking blessings, continue towards Chopta. Upon arrival, the evening is free for relaxation amidst serene pine forests and open meadows. Overnight stay will be arranged in cozy Swiss Camps at Chopta. HT : 2,680 MTS | Distance : 185 kms | Time : 5-6 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "Chopta – Tungnath – Chandrashila – Back to Chopta",
        "description": "Today is the day of trekking, which officially starts early in the morning around 3:00–4:00 AM to capture the enchanting sunrise from Chandrashila Peak. The trek begins from Chopta, covering a 3.5 km ascent to Tungnath. During winter, the Kapat of Tungnath remains closed, so darshan can be performed from outside the temple premises only. This journey is primarily focused on enjoying the trek, snow trails, and the breathtaking Himalayan views. After offering prayers from outside, continue the 1.5 km climb to Chandrashila Peak (4,000 MTS) for a spectacular 360° panorama. Post sunrise and sightseeing, descend from Chandrashila to Tungnath and further down to Chopta, reaching the campsite by 5:00–6:00 PM. Upon arrival, enjoy dinner, followed by a relaxed evening featuring a bonfire and DJ night. Overnight stay will be arranged in cozy Swiss Camps at Chopta, surrounded by serene mountain beauty. HT : 3,690 MTS | Trek Distance: 10 km (approx. round trip) | Trek Time: 5-6 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "Chopta to Haridwar (via Ukhimath, Rudraprayag, Devprayag and Rishikesh)",
        "description": "After breakfast, begin your return journey from Chopta with an early morning visit to the scenic Deoriatal, one of Uttarakhand’s most captivating high-altitude lakes. After exploring this picturesque destination, proceed towards Rishikesh. En route, take brief halts around Rudraprayag or Devprayag for refreshments or quick sightseeing before continuing further. Upon reaching Rishikesh, witness the soulful Ganga Aarti in the evening. Post Aarti, commence your overnight drive back to Haridwar. You are expected to reach Haridwar approx. 10:00 PM, marking the conclusion of your trip—leaving you with unforgettable spiritual experiences and adventure-filled memories. Distance : 185 kms | Time : 05-06 hrs This is the end of your Chopta – Tungnath – Chandrashila Trek. UK YATRA : TERMS AND CONDITIONS TRAVEL DOCUMENTS It is your responsibility to ensure that you have the necessary travel documents, Aadhar Card copies are to be shared by all Indian passengers, & passport in case of foreign nationals. We are not responsible for any delays or costs incurred due to your failure to obtain the necessary travel documents. RETURN TICKET Our passengers are advised to keep at least one or two additional day at hand at the end of the tour, over & above the tour period, to avoid missing their return ticket in case they get stuck due any reasons. We would not compensate for missing of flights, train, bus ticket etc. HOTEL ACCOMMODATION Hotel accommodation as per the package (same or similar hotels) is subject to availability and varies based on the date, day, and booking time provided to the UK Yatra team. We offer standard, deluxe, and luxury categories, with the standard package considered the budget-friendly option. Hotel bookings are pre-arranged; therefore, changes in accommodation are not possible. Any change in hotel booking will incur additional charges. FOOD POLICY Menu is predetermined as per the package category, please discuss any extra food related requirements before booking the package, example - Jain Food, South Indian Food, Gujurati Food etc. If MAPAI Plan (breakfast and dinner) meals are included at the hotel and cannot be changed to another location. Any deviation from the designated meal area will not be compensated. Meals are served at fixed times determined by the hotel. Guests must be present on time to avail themselves of the meal service. If you leave the hotel early, breakfast will not be provided. During peak months or for personal preference reasons, we recommend booking the EP plan (room only) instead of MAPAI (breakfast and dinner) to avoid potential issues. The MAPAI plan includes breakfast and dinner. Generally, in Standard package - 4 Rotis, 1 portion Rice, Dal & Seasonable Veg Sabzi. If something is ordered beyond the thali of hotel it will be directly payable. Bisleri, Chocolate, Icecream, Dessert etc. are not included in the package. Deluxe & Luxury includes Paneer Sabzi, Pickles, Green Salad, Papad etc. Non Veg is strictly prohibited during Devotional Yatras. AC & NON AC VEHICLE For hilly regions, we provide non-air-conditioned vehicles by default to ensure better performance and safety on mountain roads. However, if you prefer an air-conditioned vehicle, the same can be arranged on request with an additional charge. Kindly inform us in advance so we can make the necessary arrangements. CHILD POLICY Children under 5 years old:No charge Children aged 5 to 9 years old:Half charge Children aged 10 years and above:Full charge The age of each child will be verified using their Aadhar card or birth certificate. It is mandatory to carry proof of age (Aadhar card or birth certificate) for all children traveling. If child is below 10 then Accommodation and meals for children will be provided on a sharing basis with parents or guardians. If a child is below 10 years old and requires an extra bed, extra bed charges will apply. This must be communicated at the time of booking. Parents or guardians are responsible for the safety and conduct of their children during the tour. Any special requests for children, such as infant seats or specific dietary requirements, should be communicated at the time of booking. Any additional services requested for children that are not included in the package will be chargeable separately. TRAVEL INSURANCE We strongly recommend that all passengers purchase comprehensive travel insurance to cover themselves against cancellation, medical emergencies, personal accidents, loss of baggage, etc. HEALTH AND MEDICAL CONDITIONS Passengers must inform UK Yatra team of any pre-existing medical conditions, disabilities, or special dietary requirements at the time of booking. VEHICLE BREAKDOWN We always provide government certified vehicle however such occurrences are beyond our control. We will endeavor to arrange an alternate vehicle within 12 hours. Your cooperation during these unforeseen circumstances is essential. We appreciate your understanding that vehicle breakdowns can happen unexpectedly. Our team will keep you informed about the progress and will work diligently to minimize any inconvenience caused. UNFORESEEN CIRCUMSTANCE In the event of adverse weather conditions, landslides, floods, earthquake, traffic jam or any unforeseen circumstances beyond our control that necessitate an extension of stay or change in the itinerary, passengers are responsible for any additional costs incurred as a result of such situations. We will make every effort to assist and arrange alternative accommodations or travel arrangements, but any extra expenses, including additional hotel nights, transportation, or meals, will be borne by the passengers themselves. ADD-ON SERVICES Additional services which are not mentioned in our inclusions will be extra chargeable, and the same must be confirmed to us at the time of booking. RIGHT TO CANCEL We reserve the right to cancel the participation of any passenger who exhibits unruly behavior, abusive language, intoxication, sickness, mental instability, or poses a safety risk to themselves, other passengers, or our staff. In such cases, no refund will be provided to the passenger(s) in question. While travelling in group we prioritize the safety and comfort of all our passengers and staff, and reserve the right to take necessary actions to ensure a safe and enjoyable travel experience for everyone involved. GUIDELINES FOR TRAVELING IN A GROUP UK Yatra will guide the group; therefore following the instructions and guidelines provided by UK Yatra throughout the tour is mandatory. Adhere to the itinerary and be punctual for all scheduled timings, including departure times, sightseeing schedules, and meal times. Travel together as a group rather than exploring places individually to ensure everyone's safety and convenience. Triple or quad room sharing will be provided by default. If you require a separate room, additional charges will apply. Please inform UK Yatra at the time of booking. The meal for everyone in the group will be the same. If you have specific dietary preferences or requirements, please inform UK Yatra at the time of booking, we would prefer you to book EP Plan and pay for meal as per need. Seating arrangements will be organized by the management based on the date and time of booking receipt. Respect cultural differences and be considerate of others in the group. Any behavior deemed inappropriate, offensive, or disruptive to the group's harmony will not be tolerated. UK Yatra reserves the right to cancel the participation of any passenger who misbehaves, exhibits abusive behavior, is intoxicated, sick, mentally unstable, or poses a safety risk to themselves or others. No refund will be provided in such cases. Clear and open communication is essential. Please promptly communicate any concerns or issues to UK Yatra's team for timely resolution. If group Yatra is cancelled before commencing of Yatra due to any reason caused by UK Yatra then refund will be provided. RESCHEDULING OF BOOKING Rescheduling your booking to any future or prior travel date, will be done subject to availability, and on payment of 10% of the total tour cost. This will be permitted only if informed at least 07 days before arrival date. In case rescheduling is requested less than 07 days prior to the travel date, then the booking would be treated as cancelled, & a fresh booking will be given subject to availability, after the levy of applicable cancellation charges. Passengers will not be permitted to board or commence the tour, unless full & final payment of the tour has been done. CANCELLATIONS POLICY Cancellation before 15 days & more: 10% deduction of total package cost Cancellation between 14 to 8 days prior: 20% deduction of total package cost Cancellation between 7 to 3 days prior: 40% deduction of total package cost Cancellation before 2 days & less: 100% deduction 100% deduction in case of no show or late arrival. Your refund request will be answered and processed promptly. All the refund/cancellation requests shall be sent through email/mail in writing and be sent at the earliest possible. No refund shall be processed unless a written request (email or mail). Refunds will be processed to your bank account only and may take upto 10-15 business days. All the refunds will be done through NEFT transfer only. No refund will be done through cash. TAX Any increase in government levies or taxes, after the confirmation of booking, will be extra chargeable to the passengers. Payment against the same will have to be done before the commencement of tour.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "All guests will be accommodated in Swiss Camps on a consolidated 3–4 bed-sharing model.",
      "Breakfast and dinner.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseen can be done, if time permits."
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea.",
      "Tax - GST 5%",
      "Any type of train and flight tickets.",
      "Extra Sightseen out of the way.",
      "Any kind of personal expenses.",
      "Emergency evacuation, hospitalization charge, etc."
    ],
    "isFeatured": true,
    "pdfBrochure": "/assets/itinerary/05. Tungnath Chopta Trek/09. Tungnath By Road Ex Haridwar.pdf",
    "pickupDrop": "Ex-Haridwar"
  },
  {
    "id": "uky-trek-10-teendham-by-road-ex-haridwar-7n-08d-copy",
    "title": "Teen Dham (Gangotri, Kedarnath & Badrinath) by Road (7N/8D)",
    "destination": "Yamunotri, Gangotri, Kedarnath & Badrinath",
    "duration": "7 Nights / 8 Days",
    "days": 8,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "May - Jun & Sep - Nov",
    "category": "Trek & Adventure",
    "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewsCount": 103,
    "overview": "UK Yatra – a premier tour and travel company specializing in exploring the majestic state of Uttarakhand, India. Our name “Yatra” in Sanskrit means “journey” and we believe that traveling is more than just visiting a destination, it’s an experience that creates lifelong memories and we at UK Yatra help you “Capture Unforgettable memories”. Teen Dham is the famous religious circuit visited by lakhs of devotees every year. Located on the high Himalayas of Uttarakhand, Teen Dham Yatra complete after the visit of four Hindu pilgrimage destination – Gangotri, Kedarnath and Badrinath.",
    "highlights": [
      "Trek to Tungnath (3,680m) - the highest Shiva shrine in the world",
      "Panoramic 360-degree summit vista of Chaukhamba, Nanda Devi & Trishul from Chandrashila",
      "Lush alpine meadows (Bugyals) of Chopta and scenic Deoriatal lake",
      "Experienced local mountain guides and safety-focused trek briefing",
      "Ideal weekend Himalayan adventure for nature lovers and photographers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Barkot to Uttarkashi",
        "description": "Drive to Uttarkashi. Can visit Vishwanath Temple & Others. Check-in Hotel. Rest day at leisure. Night Halt. Uttarkashi Weather – Generally hot in summer, the temperature ranges from 30-35 degree Celsius but nights is pleasant, Cold in winters. HT : 1352 MTS | Distance : 90 kms | Time : 4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "Uttarkashi to Gangotri to Uttarkashi",
        "description": "Early morning drive to Gangotri, en route at Gangnani take a holy dip in Garam Kund, further drive to Gangotri via beautiful Harsil Valley. Can visit Harsil, which is famous for its natural beauty and for the majestic views of the Deodar trees, and mountains. On arrival at Shree Gangotri, take a holy dip in the sacred river Ganges which is also called Bhagirathi at its origin. Perform Pooja and Darshan, after that relax for some time in the lovely surroundings. Return back to Uttarkashi. Overnight stay at Uttarkashi. HT : 3048 MTS. | Distance : 100 kms | Time : 3-4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "Uttarkashi to Rampur / Sitapur / Guptkashi / Sonprayag",
        "description": "Drive straight to Rampur/Sitapur/Guptkashi/Sonprayag/Others via Moolgarh & Lambgoan. En route, you can see the beautiful river Mandakini at Tilwara. The Mandakini River comes from Kedarnath, drive alongside the river to reach Rampur/Sitapur/Guptkashi/Sonprayag/Others. On arrival Check-In at the Hotel, evening can visit Ardh Narishwar Temple. Overnight stay at the Hotel. HT : 1319 MTS. |Distance : 220 kms | Time : 8-9 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "Rampur / Sitapur / Guptkashi / Sonprayag to Kedarnath",
        "description": "Early Morning departure for Kedarnath Dham. Enjoy Kedarnath Darshan & overnight stay in Camp/Dormitory/Hotel. By Helicopter : If helicopter is booked. Morning our driver will transfer you your prebook Helipad. You can inform the driver about your arrival time whether it will by helicopter or by trek, so that driver will be there to pick you up. (Note : helicopter ticket is not included in this package). By Trek : Morning our driver will drop you at Sonprayag then you have to take local jeep for Gaurikund & then your trek starts for Kedarnath Ji. After darshan, you follow the same & back to Sonprayag. There is a big parking issue so the driver will locate somewhere else. If his contact no. is not working then you have to arrange another taxi or wait for your driver. Make sure you use Jio or BSNL while travelling to get signals. Distance : 30 kms by road & 19 kms Trek",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "Kedarnath to Rampur / Sitapur / Guptkashi / Sonprayag",
        "description": "Early morning you get up before dawn and after taking bath you are at the temple by 4:45 am for the ‘Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostrate with your head touching the deity etc. After Temple Darshan trek down to Sonprayag. Further drive to Guptkashi. Check-in Hotel. Night Halt. Distance : 19 kms Trek & 30kms/1hr by Road",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "Last Stay to Peepalkoti / Bheemtala / Joshimath / Badrinath",
        "description": "Morning after breakfast, drive to Peepalkoti / Bheemtala / Joshimath / Badrinath. During Summers this route has the most traffic therefore this day will be spend travelling for Rampur/Sitapur/Guptkashi/Sonprayag to Peepalkoti/Bheemtala/Joshimath/Badrinath. Overnight stay at Peepalkoti / Bheemtala / Joshimath / Badrinath.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 7,
        "title": "Last Stay to Badrinath to Srinagar / Devprayag / Rudraprayag / Badrinath",
        "description": "Early morning head towards Badrinath, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal. Pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal & Aarti in the evening. Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are also few interesting sightseen spot like Mana, Vyas Gufa, Maatamoorti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River which you can do (Within the three km of Badrinath) Overnight stay at Peepalkoti / Bheemtala / Joshimath / Badrinath. If your stay is not in Badrinath leave early. Mana Village : Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. Vasundhara : As the name suggests, Vasundhara is a magnificent waterfall. This place is 5 km. From Badrinath out of which 2 km. is motorable upto Mana. Bhim Pul : On the other side of Mana village, a massive rock forming a natural bridge, lies over the roaring Saraswati river. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers. Vyas Gufa (cave): Near Mana Village, this is a rock-cave where Ved Vyas is believed to have composed the Mahabharata and the pauranic commentaries. Badrinath Weather: The average maximum temperature will be around 18° Celsius and the average minimum is 8° Celsius. Warm and woolen clothes are hence required for a stay in Badrinath throughout the year. Winter in Badrinath is often accompanied by snowfalls. Winter is very chilly with an average temperature of 5° Celsius. Due to the extreme climatic conditions, this time is usually closed for tourists. HT : 3133 MTS. | Distance : 215-290 kms | Time : 7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 8,
        "title": "Last Stay to Rishikesh / Haridwar",
        "description": "Drive to Rishikesh, the ‘place of sages’ is a celebrated spiritual town on the bank of Ganga and is surrounded by the Shivalik range of the Himalayas on three sides. It is said that when Raibhya Rishi did hard penances, God appeared by the name of ‘Hrishikesh’ and this area hence firth came to be known as Rishikesh. Later transfer to Haridwar Railway Station / Dehradun Airport. Tour Terminate. Distance : 160 km | Time : 5 hrs This is the end of the Char Dham Yatra.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Hotel accommodation as per package (Standard, Semi Deluxe, Deluxe, & Luxury).",
      "Breakfast and dinner; however, you can opt it out.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseen can be done, if time permits.",
      "Addons & Sightseen must be discussed before booking the package."
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea. Breakfast & Dinner in Kedarnath.",
      "Tax - GST 5%",
      "Kedarnath Helicopter Ticket, Poni, Doli or Potter for Kedarnath Trek.",
      "Special Pooja or VIP Darshan in Kedarnath and Badrinath Temple.",
      "Any type of train and flight tickets.",
      "Extra Sightseen (Neelkanth Temple, Lakhamandal, Triyoginarayan , Ukhimath, Kalimath, Chopta, Auli)"
    ],
    "isFeatured": false,
    "pdfBrochure": "/assets/itinerary/05. Tungnath Chopta Trek/10. Tungnath By Road Ex Delhi.pdf",
    "pickupDrop": "Ex-Haridwar"
  },
  {
    "id": "uky-trek-10-tungnath-by-road-ex-haridwar-delhi",
    "title": "Chopta Tungnath & Chandrashila Trek (2N/3D)",
    "destination": "Chopta, Tungnath & Chandrashila",
    "duration": "2 Nights / 3 Days",
    "days": 4,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "Apr - Jun & Sep - Nov",
    "category": "Trek & Adventure",
    "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewsCount": 110,
    "overview": "UK Yatra – a premier tour and travel company specializing in exploring the majestic state of Uttarakhand, India. Our name “Yatra” in Sanskrit means “journey” and we believe that traveling is more than just visiting a destination, it’s an experience that creates lifelong memories and we at UK Yatra help you “Capture Unforgettable memories”. Chopta, known as the \"Mini Switzerland of India\" offers breathtaking views of the Himalayas and lush meadows. It’s the base for the trek to Tungnath, the world’s highest Shiva temple. This serene destination is perfect for nature lovers and adventure seekers looking for a peaceful yet thrilling mountain escape.",
    "highlights": [
      "Trek to Tungnath (3,680m) - the highest Shiva shrine in the world",
      "Panoramic 360-degree summit vista of Chaukhamba, Nanda Devi & Trishul from Chandrashila",
      "Lush alpine meadows (Bugyals) of Chopta and scenic Deoriatal lake",
      "Experienced local mountain guides and safety-focused trek briefing",
      "Ideal weekend Himalayan adventure for nature lovers and photographers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Delhi to Haridwar",
        "description": "Pickup from Delhi between 9:00–10:00 PM at Akshardham Metro Station, followed by an overnight transit to Haridwar. En route, the bus will halt at Meerut for tea, coffee, and refreshments, which will be payable directly. HT : 315 MTS | Distance : 240 kms | Time : 5-6 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "Haridwar to Chopta (via Rishikesh Devprayag, Rudraprayag and Ukhimath)",
        "description": "Guests choosing Haridwar Extention as their onboarding hub will assemble at OM Bridge, Mayapur, Haridwar at 4:00 AM for a streamlined start. The journey initiates between 4:00 AM and 5:00 AM, cruising through the scenic Garhwal corridors with sweeping views of the Alaknanda and Mandakini river landscapes. En route, the bus will halt at scheduled intervals for breakfast and lunch, and these meals will be payable directly by the guests. Key spiritual milestones include Devprayag, the revered Dhari Devi Temple, Rudraprayag, and the historic Omkaleshwar Temple in Ukhimath. After seeking blessings, the route proceeds toward Chopta. On arrival, guests can leverage a relaxed evening amid serene pine forests and open meadows. Overnight stay is provisioned in premium Swiss Camps for an elevated comfort experience. HT : 2,680 MTS | Distance : 185 kms | Time : 5-6 hrs | Dinner",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "Chopta – Tungnath – Chandrashila – Back to Chopta",
        "description": "Today is the day of trekking, which officially starts early in the morning around 3:00–4:00 AM to capture the enchanting sunrise from Chandrashila Peak. The trek begins from Chopta, covering a 3.5 km ascent to Tungnath. During winter, the Kapat of Tungnath remains closed, so darshan can be performed from outside the temple premises only. This journey is primarily focused on enjoying the trek, snow trails, and the breathtaking Himalayan views. After offering prayers from outside, continue the 1.5 km climb to Chandrashila Peak (4,000 MTS) for a spectacular 360° panorama. Post sunrise and sightseeing, descend from Chandrashila to Tungnath and further down to Chopta, reaching the campsite by 5:00–6:00 PM. Upon arrival, enjoy dinner, followed by a relaxed evening featuring a bonfire and DJ night. Overnight stay will be arranged in cozy Swiss Camps at Chopta, surrounded by serene mountain beauty. HT : 3,690 MTS | Trek Distance: 10 km (approx. round trip) | Trek Time: 5-6 hrs | Breakfast & Dinner",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "Chopta to Delhi (via Ukhimath, Rudraprayag, Devprayag and Rishikesh)",
        "description": "After breakfast, begin your return journey from Chopta with an early morning visit to the scenic Deoriatal, one of Uttarakhand’s most captivating high-altitude lakes. After exploring this picturesque destination, proceed towards Rishikesh. En route, take brief halts around Rudraprayag or Devprayag for refreshments or quick sightseeing before continuing further. Upon reaching Rishikesh, witness the soulful Ganga Aarti in the evening. Post Aarti, commence your overnight drive back to Delhi. You are expected to reach Delhi between 02:00 AM – 04:00 AM, marking the conclusion of your trip—leaving you with unforgettable spiritual experiences and adventure-filled memories. Distance : 425 kms | Time : 11-12 hrs | Breakfast This is the end of your Chopta – Tungnath – Chandrashila Trek. UK YATRA : TERMS AND CONDITIONS TRAVEL DOCUMENTS It is your responsibility to ensure that you have the necessary travel documents, Aadhar Card copies are to be shared by all Indian passengers, & passport in case of foreign nationals. We are not responsible for any delays or costs incurred due to your failure to obtain the necessary travel documents. RETURN TICKET Our passengers are advised to keep at least one or two additional day at hand at the end of the tour, over & above the tour period, to avoid missing their return ticket in case they get stuck due any reasons. We would not compensate for missing of flights, train, bus ticket etc. HOTEL ACCOMMODATION Hotel accommodation as per the package (same or similar hotels) is subject to availability and varies based on the date, day, and booking time provided to the UK Yatra team. We offer standard, deluxe, and luxury categories, with the standard package considered the budget-friendly option. Hotel bookings are pre-arranged; therefore, changes in accommodation are not possible. Any change in hotel booking will incur additional charges. FOOD POLICY Menu is predetermined as per the package category, please discuss any extra food related requirements before booking the package, example - Jain Food, South Indian Food, Gujurati Food etc. If MAPAI Plan (breakfast and dinner) meals are included at the hotel and cannot be changed to another location. Any deviation from the designated meal area will not be compensated. Meals are served at fixed times determined by the hotel. Guests must be present on time to avail themselves of the meal service. If you leave the hotel early, breakfast will not be provided. During peak months or for personal preference reasons, we recommend booking the EP plan (room only) instead of MAPAI (breakfast and dinner) to avoid potential issues. The MAPAI plan includes breakfast and dinner. Generally, in Standard package - 4 Rotis, 1 portion Rice, Dal & Seasonable Veg Sabzi. If something is ordered beyond the thali of hotel it will be directly payable. Bisleri, Chocolate, Icecream, Dessert etc. are not included in the package. Deluxe & Luxury includes Paneer Sabzi, Pickles, Green Salad, Papad etc. Non Veg is strictly prohibited during Devotional Yatras. AC & NON AC VEHICLE For hilly regions, we provide non-air-conditioned vehicles by default to ensure better performance and safety on mountain roads. However, if you prefer an air-conditioned vehicle, the same can be arranged on request with an additional charge. Kindly inform us in advance so we can make the necessary arrangements. CHILD POLICY Children under 5 years old:No charge Children aged 5 to 9 years old:Half charge Children aged 10 years and above:Full charge The age of each child will be verified using their Aadhar card or birth certificate. It is mandatory to carry proof of age (Aadhar card or birth certificate) for all children traveling. If child is below 10 then Accommodation and meals for children will be provided on a sharing basis with parents or guardians. If a child is below 10 years old and requires an extra bed, extra bed charges will apply. This must be communicated at the time of booking. Parents or guardians are responsible for the safety and conduct of their children during the tour. Any special requests for children, such as infant seats or specific dietary requirements, should be communicated at the time of booking. Any additional services requested for children that are not included in the package will be chargeable separately. TRAVEL INSURANCE We strongly recommend that all passengers purchase comprehensive travel insurance to cover themselves against cancellation, medical emergencies, personal accidents, loss of baggage, etc. HEALTH AND MEDICAL CONDITIONS Passengers must inform UK Yatra team of any pre-existing medical conditions, disabilities, or special dietary requirements at the time of booking. VEHICLE BREAKDOWN We always provide government certified vehicle however such occurrences are beyond our control. We will endeavor to arrange an alternate vehicle within 12 hours. Your cooperation during these unforeseen circumstances is essential. We appreciate your understanding that vehicle breakdowns can happen unexpectedly. Our team will keep you informed about the progress and will work diligently to minimize any inconvenience caused. UNFORESEEN CIRCUMSTANCE In the event of adverse weather conditions, landslides, floods, earthquake, traffic jam or any unforeseen circumstances beyond our control that necessitate an extension of stay or change in the itinerary, passengers are responsible for any additional costs incurred as a result of such situations. We will make every effort to assist and arrange alternative accommodations or travel arrangements, but any extra expenses, including additional hotel nights, transportation, or meals, will be borne by the passengers themselves. ADD-ON SERVICES Additional services which are not mentioned in our inclusions will be extra chargeable, and the same must be confirmed to us at the time of booking. RIGHT TO CANCEL We reserve the right to cancel the participation of any passenger who exhibits unruly behavior, abusive language, intoxication, sickness, mental instability, or poses a safety risk to themselves, other passengers, or our staff. In such cases, no refund will be provided to the passenger(s) in question. While travelling in group we prioritize the safety and comfort of all our passengers and staff, and reserve the right to take necessary actions to ensure a safe and enjoyable travel experience for everyone involved. GUIDELINES FOR TRAVELING IN A GROUP UK Yatra will guide the group; therefore following the instructions and guidelines provided by UK Yatra throughout the tour is mandatory. Adhere to the itinerary and be punctual for all scheduled timings, including departure times, sightseeing schedules, and meal times. Travel together as a group rather than exploring places individually to ensure everyone's safety and convenience. Triple or quad room sharing will be provided by default. If you require a separate room, additional charges will apply. Please inform UK Yatra at the time of booking. The meal for everyone in the group will be the same. If you have specific dietary preferences or requirements, please inform UK Yatra at the time of booking, we would prefer you to book EP Plan and pay for meal as per need. Seating arrangements will be organized by the management based on the date and time of booking receipt. Respect cultural differences and be considerate of others in the group. Any behavior deemed inappropriate, offensive, or disruptive to the group's harmony will not be tolerated. UK Yatra reserves the right to cancel the participation of any passenger who misbehaves, exhibits abusive behavior, is intoxicated, sick, mentally unstable, or poses a safety risk to themselves or others. No refund will be provided in such cases. Clear and open communication is essential. Please promptly communicate any concerns or issues to UK Yatra's team for timely resolution. If group Yatra is cancelled before commencing of Yatra due to any reason caused by UK Yatra then refund will be provided. RESCHEDULING OF BOOKING Rescheduling your booking to any future or prior travel date, will be done subject to availability, and on payment of 10% of the total tour cost. This will be permitted only if informed at least 07 days before arrival date. In case rescheduling is requested less than 07 days prior to the travel date, then the booking would be treated as cancelled, & a fresh booking will be given subject to availability, after the levy of applicable cancellation charges. Passengers will not be permitted to board or commence the tour, unless full & final payment of the tour has been done. CANCELLATIONS POLICY Cancellation before 15 days & more: 10% deduction of total package cost Cancellation between 14 to 8 days prior: 20% deduction of total package cost Cancellation between 7 to 3 days prior: 40% deduction of total package cost Cancellation before 2 days & less: 100% deduction 100% deduction in case of no show or late arrival. Your refund request will be answered and processed promptly. All the refund/cancellation requests shall be sent through email/mail in writing and be sent at the earliest possible. No refund shall be processed unless a written request (email or mail). Refunds will be processed to your bank account only and may take upto 10-15 business days. All the refunds will be done through NEFT transfer only. No refund will be done through cash. TAX Any increase in government levies or taxes, after the confirmation of booking, will be extra chargeable to the passengers. Payment against the same will have to be done before the commencement of tour.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "All guests will be accommodated in Swiss Camps on a consolidated 3–4 bed-sharing model.",
      "Breakfast and 2 Dinner.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseen can be done, if time permits."
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea.",
      "Tax - GST 5%",
      "Any type of train and flight tickets.",
      "Extra Sightseen out of the way.",
      "Any kind of personal expenses.",
      "Emergency evacuation, hospitalization charge, etc."
    ],
    "isFeatured": false,
    "pdfBrochure": "/assets/itinerary/05. Tungnath Chopta Trek/10. Tungnath By Road Ex Haridwar- Delhi.pdf",
    "pickupDrop": "Ex-Delhi"
  },
  {
    "id": "uky-trek-09-auli-by-road-ex-delhi-uk-yatra-4n5d",
    "title": "Char Dham Yatra with Auli & Chopta Excursion (9N/10D)",
    "destination": "Chopta, Tungnath & Chandrashila",
    "duration": "4 Nights / 5 Days",
    "days": 10,
    "startingPrice": "Pricing on Request",
    "originalPrice": null,
    "bestSeason": "Dec - Mar (Snow & Skiing) / Apr - Jun",
    "category": "Trek & Adventure",
    "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
    ],
    "rating": 5.0,
    "reviewsCount": 117,
    "overview": "UK Yatra – a premier tour and travel company specializing in exploring the majestic state of Uttarakhand, India. Our name “Yatra” in Sanskrit means “journey” and we believe that traveling is more than just visiting a destination, it’s an experience that creates lifelong memories and we at UK Yatra help you “Capture Unforgettable memories”. Char Dham is the famous religious circuit visited by lakhs of devotees every year. Located on the high Himalayas of Uttarakhand, Char Dham Yatra complete after the visit of four Hindu pilgrimage destination – Yamunotri, Gangotri, Kedarnath and Badrinath.",
    "highlights": [
      "Trek to Tungnath (3,680m) - the highest Shiva shrine in the world",
      "Panoramic 360-degree summit vista of Chaukhamba, Nanda Devi & Trishul from Chandrashila",
      "Lush alpine meadows (Bugyals) of Chopta and scenic Deoriatal lake",
      "Experienced local mountain guides and safety-focused trek briefing",
      "Ideal weekend Himalayan adventure for nature lovers and photographers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Haridwar to Barkot",
        "description": "Pickup from Haridwar Railway Station / Dehradun Airport / Railway Station. Drive to Barkot via Mussoorie, can visit Kempty Fall (Suggestible to have your lunch at Kempty fall as further no good restaurants are available before Barkot). Later drive straight to Barkot, transfer to your hotel. The rest of the day is free to relax and store your energy for the Yamunotri trek the next day. Overnight stay at Barkot. Barkot Weather – Generally pleasant in summer, the temperature ranges from 25-30 degree Celsius, Winter: The Days are pleasantly cool but the nights are cold, temp ranges from 10 deg to 05 deg. HT : 1352 MTS. | Distance : 210 kms | Time : 7-8 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 2,
        "title": "Barkot to Yamunotri to Barkot",
        "description": "Early morning, Drive to Jankichatti/Phoolchatti, trek start from here to Yamunotri (6kms). Either by walk or by horse or by Doli at own cost. The trek passes through a lush green valley, a profusion of conifers, rhododendrons, cacti, and several species of Himalayan shrubs. HT : 3291 MTS. | Distance : 36 kms drive & 5 kms Trek (one side)",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 3,
        "title": "Barkot to Uttarkashi",
        "description": "Drive to Uttarkashi. Can visit Vishwanath Temple & Others. Check-in Hotel. Rest day at leisure. Night Halt. Uttarkashi Weather – Generally hot in summer, the temperature ranges from 30-35 degree Celsius but nights is pleasant, Cold in winters. HT : 1352 MTS | Distance : 90 kms | Time : 4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 4,
        "title": "Uttarkashi to Gangotri to Uttarkashi",
        "description": "Early morning drive to Gangotri, en route at Gangnani take a holy dip in Garam Kund, further drive to Gangotri via beautiful Harsil Valley. Can visit Harsil, which is famous for its natural beauty and for the majestic views of the Deodar trees, and mountains. On arrival at Shree Gangotri, take a holy dip in the sacred river Ganges which is also called Bhagirathi at its origin. Perform Pooja and Darshan, after that relax for some time in the lovely surroundings. Return back to Uttarkashi. Overnight stay at Uttarkashi. HT : 3048 MTS. | Distance : 100 kms | Time : 3-4 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "Uttarkashi to Rampur/Sitapur/Guptkashi/Sonprayag",
        "description": "Drive straight to Rampur/Sitapur/Guptkashi/Sonprayag/Others via Moolgarh & Lambgoan. En route, you can see the beautiful river Mandakini at Tilwara. The Mandakini River comes from Kedarnath, drive alongside the river to reach Rampur/Sitapur/Guptkashi/Sonprayag/Others. On arrival Check-In at the Hotel, evening can visit Ardh Narishwar Temple. Overnight stay at the Hotel. HT : 1319 MTS. |Distance : 220 kms | Time : 8-9 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "Rampur/Sitapur/Guptkashi/Sonprayag to Kedarnath",
        "description": "Early Morning departure for Kedarnath Dham. Enjoy Kedarnath Darshan & overnight stay in Camp/Dormitory/Hotel. By Helicopter : If helicopter is booked. Morning our driver will transfer you your prebook Helipad. You can inform the driver about your arrival time whether it will by helicopter or by trek, so that driver will be there to pick you up. (Note : helicopter ticket is not included in this package). By Trek : Morning our driver will drop you at Sonprayag then you have to take local jeep for Gaurikund & then your trek starts for Kedarnath Ji. After darshan, you follow the same & back to Sonprayag. There is a big parking issue so the driver will locate somewhere else. If his contact no. is not working then you have to arrange another taxi or wait for your driver. Make sure you use Jio or BSNL while travelling to get signals. Distance : 30 kms by road & 19 kms Trek",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 7,
        "title": "Kedarnath to Rampur / Sitapur / Guptkashi / Sonprayag",
        "description": "Early morning you get up before dawn and after taking bath you are at the temple by 4:45 am for the ‘Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostrate with your head touching the deity etc. After Temple Darshan trek down to Sonprayag. Further drive to Guptkashi. Check-in Hotel. Night Halt. Distance : 19 kms Trek & 30kms/1hr by Road",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 8,
        "title": "Last Stay to Peepalkoti / Bheemtala / Joshimath / Badrinath",
        "description": "Morning after breakfast, drive to Peepalkoti / Bheemtala / Joshimath / Badrinath. During Summers this route has the most traffic therefore this day will be spend travelling for Rampur/Sitapur/Guptkashi/Sonprayag to Peepalkoti/Bheemtala/Joshimath/Badrinath. Overnight stay at Peepalkoti / Bheemtala / Joshimath / Badrinath.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 9,
        "title": "Last Stay to Badrinath to Srinagar / Devprayag / Rudraprayag / Badrinath",
        "description": "Early morning head towards Badrinath, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal. Pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal & Aarti in the evening. Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are also few interesting sightseen spot like Mana, Vyas Gufa, Maatamoorti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River which you can do (Within the three km of Badrinath) Overnight stay at Peepalkoti / Bheemtala / Joshimath / Badrinath. If your stay is not in Badrinath leave early. Mana Village : Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. Vasundhara : As the name suggests, Vasundhara is a magnificent waterfall. This place is 5 km. From Badrinath out of which 2 km. is motorable upto Mana. Bhim Pul : On the other side of Mana village, a massive rock forming a natural bridge, lies over the roaring Saraswati river. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers. Vyas Gufa (cave): Near Mana Village, this is a rock-cave where Ved Vyas is believed to have composed the Mahabharata and the pauranic commentaries. Badrinath Weather: The average maximum temperature will be around 18° Celsius and the average minimum is 8° Celsius. Warm and woolen clothes are hence required for a stay in Badrinath throughout the year. Winter in Badrinath is often accompanied by snowfalls. Winter is very chilly with an average temperature of 5° Celsius. Due to the extreme climatic conditions, this time is usually closed for tourists. HT : 3133 MTS. | Distance : 215-290 kms | Time : 7 hrs",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 10,
        "title": "Last Stay to Rishikesh / Haridwar",
        "description": "Drive to Rishikesh, the ‘place of sages’ is a celebrated spiritual town on the bank of Ganga and is surrounded by the Shivalik range of the Himalayas on three sides. It is said that when Raibhya Rishi did hard penances, God appeared by the name of ‘Hrishikesh’ and this area hence firth came to be known as Rishikesh. Later transfer to Haridwar Railway Station / Dehradun Airport. Tour Terminate. Distance : 160 km | Time : 5 hrs This is the end of the Char Dham Yatra. TERMS AND CONDITIONS AADHAR Card copies are to be shared by all Indian passengers, & passport in case of foreign nationals. HOTEL ACCOMMODATION as per package (same or similar hotels), depends upon date, day and booking time given to UK Yatra team. In MAPAI Breakfast and Dinner is included except in Kedarnath.",
        "stay": "Hotel / Resort Stay Included",
        "meals": "Breakfast & Dinner"
      }
    ],
    "inclusions": [
      "Hotel accommodation as per package (Standard, Semi Deluxe, Deluxe, & Luxury).",
      "Breakfast and dinner; however, you can opt it out.",
      "All toll tax, parking, fuel, driver allowances, applicable hotel and transport taxes.",
      "Only on the way sightseen can be done, if time permits.",
      "Addons & Sightseen must be discussed before booking the package."
    ],
    "exclusions": [
      "Lunch, Evening Snacks and Tea. Breakfast & Dinner in Kedarnath.",
      "Tax - GST 5%",
      "Kedarnath Helicopter Ticket, Poni , Doli or Potter for Kedarnath Trek.",
      "Special Pooja or VIP Darshan in Kedarnath and Badrinath Temple.",
      "Any type of train and flight tickets.",
      "Extra Sightseen (Neelkanth Temple, Lakhamandal, Triyoginarayan , Ukhimath, Kalimath, Chopta, Auli)"
    ],
    "isFeatured": true,
    "pdfBrochure": null,
    "pickupDrop": "Ex-Delhi"
  }
];

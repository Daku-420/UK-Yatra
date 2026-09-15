import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Phone,
  RefreshCw,
  ChevronRight,
  ExternalLink,
  MapPin,
  Calendar,
  Compass,
  Mountain,
  ShieldCheck,
  CheckCircle,
  Sun,
  Footprints,
  Car,
  MessageSquare,
  GripVertical,
  type LucideIcon
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: Array<{
    label: string;
    icon?: LucideIcon;
    action?: () => void;
    link?: string;
    isWhatsApp?: boolean;
    whatsAppMsg?: string;
  }>;
}

interface ChatbotWidgetProps {
  onOpenBookingModal?: (packageName?: string) => void;
}

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ onOpenBookingModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Movable Floating Button & Widget State
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{
    startX: number;
    startY: number;
    origOffsetX: number;
    origOffsetY: number;
    baseLeft: number;
    baseTop: number;
    width: number;
    height: number;
    hasMoved: boolean;
  }>({
    startX: 0,
    startY: 0,
    origOffsetX: 0,
    origOffsetY: 0,
    baseLeft: 0,
    baseTop: 0,
    width: 0,
    height: 0,
    hasMoved: false,
  });

  // Re-clamp on window resize if moved
  useEffect(() => {
    const handleResize = () => {
      setDragOffset((prev) => {
        if (prev.x === 0 && prev.y === 0) return prev;
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return prev;
        let adjX = 0;
        let adjY = 0;
        if (rect.right > window.innerWidth - 12) adjX = window.innerWidth - 12 - rect.right;
        if (rect.left < 12) adjX = 12 - rect.left;
        if (rect.bottom > window.innerHeight - 12) adjY = window.innerHeight - 12 - rect.bottom;
        if (rect.top < 12) adjY = 12 - rect.top;
        if (adjX === 0 && adjY === 0) return prev;
        return { x: prev.x + adjX, y: prev.y + adjY };
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    const target = e.currentTarget as HTMLElement;
    target.setPointerCapture?.(e.pointerId);

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      origOffsetX: dragOffset.x,
      origOffsetY: dragOffset.y,
      baseLeft: rect.left,
      baseTop: rect.top,
      width: rect.width,
      height: rect.height,
      hasMoved: false,
    };
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.startX;
    const dy = e.clientY - dragStartRef.current.startY;

    if (Math.hypot(dx, dy) > 4) {
      dragStartRef.current.hasMoved = true;
    }

    const intendedLeft = dragStartRef.current.baseLeft + dx;
    const intendedTop = dragStartRef.current.baseTop + dy;

    const margin = 12;
    const maxLeft = Math.max(margin, window.innerWidth - dragStartRef.current.width - margin);
    const maxTop = Math.max(margin, window.innerHeight - dragStartRef.current.height - margin);

    const clampedLeft = Math.min(Math.max(margin, intendedLeft), maxLeft);
    const clampedTop = Math.min(Math.max(margin, intendedTop), maxTop);

    const effectiveDx = clampedLeft - dragStartRef.current.baseLeft;
    const effectiveDy = clampedTop - dragStartRef.current.baseTop;

    setDragOffset({
      x: dragStartRef.current.origOffsetX + effectiveDx,
      y: dragStartRef.current.origOffsetY + effectiveDy,
    });
  };

  const handleButtonPointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {}

    // Only toggle chat window if it was a click/tap (not dragged)
    if (!dragStartRef.current.hasMoved) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleHeaderPointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {}
  };

  // Initial welcome message
  useEffect(() => {
    const welcomeTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages([
      {
        id: 'welcome-1',
        sender: 'bot',
        text: `Namaste! Welcome to **UKYatra**. I am your Himalayan AI Travel Assistant.\n\nI can help you with Char Dham guidelines, Kedarnath helicopter tickets, trekking routes, customized quotes, and taxi rentals. How may I assist you today?`,
        timestamp: welcomeTime,
        options: [
          { label: 'Char Dham Dates & Registration', icon: Sparkles, action: () => handleSendQuery('Char Dham Dates & Registration') },
          { label: 'Helicopter Packages & Rates', icon: Compass, action: () => handleSendQuery('Helicopter Packages & Rates') },
          { label: 'Best Season to Visit', icon: Sun, action: () => handleSendQuery('Best Season to Visit') },
          { label: 'Top Winter & Summer Treks', icon: Footprints, action: () => handleSendQuery('Top Treks') },
          { label: 'Car Rental & Taxi Rates', icon: Car, action: () => handleSendQuery('Car Rental & Taxi') },
          { label: 'Talk to Human Expert', icon: MessageSquare, isWhatsApp: true, whatsAppMsg: 'Hi UKYatra, I was chatting with your AI assistant and would like to talk to a travel specialist directly.' },
        ]
      }
    ]);
  }, []);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen, messages, isTyping]);

  // Knowledge base query resolver
  const getBotResponse = (query: string): Omit<Message, 'id' | 'timestamp'> => {
    const q = query.toLowerCase();

    // 1. Char Dham & Spiritual
    if (q.includes('char dham') || q.includes('chardham') || q.includes('do dham') || q.includes('dham') || q.includes('kedarnath') || q.includes('badrinath') || q.includes('gangotri') || q.includes('yamunotri')) {
      if (q.includes('register') || q.includes('registration') || q.includes('permit') || q.includes('pass')) {
        return {
          sender: 'bot',
          text: `** Char Dham Biometric Registration Guide:**\n\n• ** Mandatory **: Every pilgrim visiting Yamunotri, Gangotri, Kedarnath, or Badrinath must register.\n• ** Official Portal **: Uttarakhand Govt portal(* registrationandtouristcare.uk.gov.in *).\n• ** Documents Needed **: Aadhaar Card / Passport, active mobile number, and emergency contact.\n• ** UKYatra Complimentary Service **: When you book with UKYatra, our operations team handles all official biometric registrations, token slots, and helicopter slips for your entire group!`,
          options: [
            { label: 'View Char Dham Packages', link: '/spiritual' },
            { label: 'Book Char Dham Yatra', action: () => onOpenBookingModal?.('Char Dham Yatra') },
            { label: 'Chat on WhatsApp', isWhatsApp: true, whatsAppMsg: 'Hi UKYatra, please assist me with Char Dham registration and package availability.' }
          ]
        };
      }

      if (q.includes('heli') || q.includes('helicopter') || q.includes('chopper') || q.includes('fly')) {
        return {
          sender: 'bot',
          text: `** Kedarnath & Char Dham Helicopter Services:**\n\n• ** Char Dham by Helicopter(5N / 6D) **: Ex - Dehradun(Sahastradhara).Includes VIP darshans, 5 - star / luxury stays, and ground transfers.\n\n• ** Do Dham Heli(3N / 4D) **: Covering Kedarnath & Badrinath.\n\n• ** Kedarnath Same - Day Heli **: Return to Dehradun on the same day.\n\n• ** Shuttle Helipads **: Phata, Guptkashi, and Sirsi operate 8 - minute shuttle flights directly to Kedarnath Helipad.\n\nNote: * Strict 5kg luggage limit per guest in soft duffel bags.* `,
          options: [
            { label: 'View Helicopter Packages', link: '/helicopter-packages' },
            { label: 'Reserve Heli Seats', action: () => onOpenBookingModal?.('Char Dham Helicopter Charter') },
            { label: 'Check Heli Availability on WhatsApp', isWhatsApp: true, whatsAppMsg: 'Hi UKYatra, I am interested in Kedarnath/Char Dham Helicopter seats. Please check upcoming dates.' }
          ]
        };
      }

      return {
        sender: 'bot',
        text: `** Char Dham & Holy Shrines of Uttarakhand:**\n\n• ** Opening Dates **: Shrines typically open on Akshaya Tritiya(April / May) and close after Diwali / Bhai Dooj(October / November).\n• ** Traditional Sequence **: Yamunotri ➔ Gangotri ➔ Kedarnath ➔ Badrinath.\n• ** Trek Details **: Gaurikund to Kedarnath is ~16 km(moderate - steep).Ponies, palanquins(palki), and helicopter shuttles are readily available.\n• ** Packages **: We operate daily departures from Haridwar, Rishikesh, and Dehradun with seasoned mountain drivers and verified temple - side hotels.`,
        options: [
          { label: 'Explore Spiritual Packages', link: '/spiritual' },
          { label: 'Kedarnath Tour Details', link: '/destinations/kedarnath' },
          { label: 'Plan Custom Pilgrimage', action: () => onOpenBookingModal?.('Custom Char Dham Itinerary') }
        ]
      };
    }

    // 2. Helicopter Services (general)
    if (q.includes('heli') || q.includes('helicopter') || q.includes('chopper')) {
      return {
        sender: 'bot',
        text: `** UKYatra Helicopter Charter & Shuttle Services:**\n\n1. ** Char Dham 5N / 6D Charter **: Fly from Dehradun, VIP darshan at all 4 temples, luxury hotels, meals & local luxury SUVs included.\n2. ** Do Dham 3N / 4D Charter **: Fast - track pilgrimage for Kedarnath & Badrinath.\n3. ** Kedarnath Same - Day Shuttle **: Ideal for senior citizens and business executives with limited time.\n\nOur DGCA - certified helicopter partners maintain the highest safety protocols.`,
        options: [
          { label: 'Explore Heli Packages', link: '/helicopter-packages' },
          { label: 'Get Heli Quotation', action: () => onOpenBookingModal?.('Helicopter Charter Enquiry') },
          { label: 'Ask Heli Desk on WhatsApp', isWhatsApp: true, whatsAppMsg: 'Hi UKYatra, I need quick helicopter package details and price quotes.' }
        ]
      };
    }

    // 3. Best Time to Visit & Weather
    if (q.includes('best time') || q.includes('weather') || q.includes('season') || q.includes('when to visit') || q.includes('month') || q.includes('snow') || q.includes('snowfall') || q.includes('winter') || q.includes('monsoon')) {
      return {
        sender: 'bot',
        text: `** Uttarakhand Travel Calendar & Best Seasons:**\n\n• ** Spring & Summer(March - June) **: \n• Perfect for Char Dham, Rishikesh rafting, Mussoorie & Nainital lake retreats.\n• Daytime temps: 15°C - 28°C.\n\n• ** Monsoon(July - August) **: \n• Famous for ** Valley of Flowers ** in full bloom!\n• Rain - soaked hills; travel with trusted mountain drivers.\n\n• ** Autumn(September - November) **: \n• Crystal - clear Himalayan views & pristine skies.Ideal for high - altitude trekking and photography.\n\n• ** Winter(December - February) **: \n• Heavy snow in Auli(skiing paradise), Kedarkantha snow trek, and Chopta.Temperatures dip to - 5°C to 10°C.`,
        options: [
          { label: 'Plan Trip by Month', link: '/packages' },
          { label: 'Check Seasonal Offers', link: '/offers' },
          { label: 'Ask Weather on WhatsApp', isWhatsApp: true, whatsAppMsg: 'Hi UKYatra, what is the current weather condition and travel advisory for Uttarakhand?' }
        ]
      };
    }

    // 4. Trekking & Expeditions
    if (q.includes('trek') || q.includes('trekking') || q.includes('kedarkantha') || q.includes('chopta') || q.includes('tungnath') || q.includes('chandrashila') || q.includes('valley of flowers') || q.includes('kuari pass') || q.includes('dayara bugyal') || q.includes('har ki dun')) {
      return {
        sender: 'bot',
        text: `** Premier Himalayan Treks with UKYatra:**\n\n• ** Kedarkantha Winter Trek(12, 500 ft) **: India's favorite snow trek. Perfect for beginners and families.\n\n• **Chopta Tungnath & Chandrashila (13,100 ft)**: The highest Shiva shrine on earth with 360° views of Nanda Devi & Trishul.\n\n• **Valley of Flowers & Hemkund Sahib**: UNESCO World Heritage alpine meadow with over 500 wildflower species (July-Sept).\n\n• **Kuari Pass & Dayara Bugyal**: Majestic meadow treks offering unobstructed views of Mt. Nanda Devi.\n\n*All treks include certified mountaineering guides, safety gear, high-altitude oxygen cylinders & warm dining tents.*`,
options: [
  { label: 'Browse Trekking Expeditions', link: '/trekking' },
  { label: 'Kedarkantha Trek Details', link: '/trekking/kedarkantha-winter-trek' },
  { label: 'Ask Trek Leader on WhatsApp', isWhatsApp: true, whatsAppMsg: 'Hi UKYatra, I want details on upcoming trek batch dates and fitness requirements.' }
]
      };
    }

// 5. Adventure & Rishikesh
if (q.includes('rafting') || q.includes('adventure') || q.includes('bungee') || q.includes('camping') || q.includes('rishikesh') || q.includes('safari') || q.includes('corbett') || q.includes('auli') || q.includes('skiing')) {
  return {
    sender: 'bot',
    text: `**Adventure & Wildlife Experiences in Uttarakhand:**\n\n• **Rishikesh River Rafting**: 16 km (Shivpuri) or 24 km (Marine Drive) Class III/IV rapids with certified river guides.\n\n• **Bungee Jumping**: India's highest 83-meter platform in Mohan Chatti, Rishikesh.\n\n• **Jim Corbett National Park Safari**: Open Jeep 4x4 safaris in Bijrani, Dhikala & Jhirna zones for Royal Bengal Tiger spotting.\n\n• **Auli Skiing**: World-class ski slopes accessible via South Asia's longest ropeway cable car.\n\n*All activities follow stringent Ministry of Tourism safety norms.*`,
    options: [
      { label: 'View Adventure Activities', link: '/activities' },
      { label: 'Rafting Guidelines', link: '/activities/river-rafting' },
      { label: 'Book Adventure on WhatsApp', isWhatsApp: true, whatsAppMsg: 'Hi UKYatra, I want to book river rafting, camping, and adventure activities in Rishikesh.' }
    ]
  };
}

// 6. Car Rental, Taxi & Fleet
if (q.includes('taxi') || q.includes('cab') || q.includes('car') || q.includes('rental') || q.includes('innova') || q.includes('tempo') || q.includes('driver') || q.includes('fleet') || q.includes('transport')) {
  return {
    sender: 'bot',
    text: `**UKYatra Hill-Certified Fleet & Taxi Services:**\n\n **Available Vehicles**:\n• **Toyota Innova Crysta / Hycross**: Luxury & comfort for hill roads.\n• **Maruti Ertiga / Dzire**: Affordable family travel.\n• **Tempo Traveller (12/17/26 Seater)**: Perfect for group & family yatras.\n• **Force Urbania**: Ultra-luxury executive touring.\n\n **Highlights**:\n• Verified mountain drivers with minimum 7+ years of hill driving experience.\n• Clean, sanitized vehicles with GPS tracking.\n• Pickups available from Dehradun Airport (Jolly Grant), Haridwar, Rishikesh, and Delhi.`,
    options: [
      { label: 'Explore Car Rentals', link: '/car-rental' },
      { label: 'Get Taxi Quote', action: () => onOpenBookingModal?.('Car / Taxi Rental Enquiry') },
      { label: 'Call Fleet Desk on WhatsApp', isWhatsApp: true, whatsAppMsg: 'Hi UKYatra, I need a taxi quotation for our Uttarakhand itinerary.' }
    ]
  };
}

// 7. Pricing, Cost, Discounts & Custom Quotes
if (q.includes('cost') || q.includes('price') || q.includes('pricing') || q.includes('rate') || q.includes('how much') || q.includes('budget') || q.includes('discount') || q.includes('offer') || q.includes('custom') || q.includes('customize')) {
  return {
    sender: 'bot',
    text: `**Customized Packages & Pricing:**\n\nEvery journey with UKYatra is tailored to your travel dates, vehicle preference, and hotel category (Standard, Deluxe, Luxury):\n\n• **Weekend Escapes**: Starting from ₹7,499 per person\n• **Winter Treks**: Starting from ₹8,999 per person (all meals & gear)\n• **Char Dham by Road**: Starting from ₹28,500 per person (10N/11D)\n• **Char Dham by Helicopter**: Luxury charter pricing on request\n\n *We offer a 5% Early Bird discount and special concessions for groups of 6+ travellers!*`,
    options: [
      { label: '3-Step Trip Planner', link: '/customized-trip' },
      { label: 'View Active Offers', link: '/offers' },
      { label: 'Get Instant Free Quote on WhatsApp', isWhatsApp: true, whatsAppMsg: 'Hi UKYatra, please share a customized package cost estimate for my upcoming Uttarakhand trip.' }
    ]
  };
}

// 8. Cancellation & Policies
if (q.includes('cancel') || q.includes('refund') || q.includes('reschedule') || q.includes('policy') || q.includes('terms') || q.includes('advance')) {
  return {
    sender: 'bot',
    text: `**Booking & Cancellation Assurance:**\n\n• **Booking Advance**: Only 25% to 30% advance required to confirm your hotel and vehicle slots.\n• **Free Date Rescheduling**: Reschedule your trip free of charge up to 15 days before departure.\n• **Transparent Refunds**: Up to 80% refund if cancelled 30+ days prior to departure.\n• **Weather Protection**: If high-altitude roads or helicopter flights are cancelled due to bad weather, our on-ground ops team arranges alternate safe routes or pro-rata adjustments.`,
    options: [
      { label: 'View Cancellation Policy', link: '/cancellation-policy' },
      { label: 'Terms & Conditions', link: '/terms' },
      { label: 'Speak to Booking Desk', isWhatsApp: true, whatsAppMsg: 'Hi UKYatra, I have questions regarding booking terms and refund guarantees.' }
    ]
  };
}

// 9. Human Contact & Support
if (q.includes('human') || q.includes('agent') || q.includes('person') || q.includes('expert') || q.includes('talk') || q.includes('speak') || q.includes('call') || q.includes('phone') || q.includes('whatsapp') || q.includes('contact') || q.includes('office') || q.includes('help')) {
  return {
    sender: 'bot',
    text: `**Connect Directly with Our Uttarakhand Specialists:**\n\n• **Helpline**: [${SITE_CONFIG.phone}](tel:${SITE_CONFIG.phone})\n• **WhatsApp Desk**: ${SITE_CONFIG.whatsappNumber} (Instant Reply)\n• **Email**: ${SITE_CONFIG.email}\n• **Base Camp**: Tapovan, Rishikesh & Jolly Grant, Dehradun\n• **Operating Hours**: Mon - Sun: 8:00 AM - 10:00 PM IST (24/7 on-trip emergency assistance)`,
    options: [
      { label: 'Chat on WhatsApp Now', isWhatsApp: true, whatsAppMsg: 'Hi UKYatra, I would like to speak directly with an Uttarakhand travel expert.' },
      { label: 'Request Priority Callback', action: () => onOpenBookingModal?.('Direct Callback Request') },
      { label: 'Visit Contact Page', link: '/contact' }
    ]
  };
}

// 10. Greetings
if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('namaste') || q.includes('pranam') || q.includes('good morning') || q.includes('good afternoon') || q.includes('good evening')) {
  return {
    sender: 'bot',
    text: `Namaste! Glad you are here. Whether you're planning a sacred Char Dham pilgrimage, an exhilarating winter trek, or a peaceful hill station retreat, I'm here to guide you.\n\nWhat would you like to explore today?`,
    options: [
      { label: 'Char Dham Packages', icon: Sparkles, link: '/spiritual' },
      { label: 'Helicopter Charters', icon: Compass, link: '/helicopter-packages' },
      { label: 'Alpine Treks', icon: Footprints, link: '/trekking' },
      { label: 'Plan Custom Trip', icon: Sparkles, link: '/customized-trip' },
      { label: 'WhatsApp Us', icon: MessageSquare, isWhatsApp: true, whatsAppMsg: 'Hi UKYatra, I want to discuss customized travel plans for Uttarakhand.' }
    ]
  };
}

// Default Fallback
return {
  sender: 'bot',
  text: `Thank you for your question! Here is what I can quickly assist you with:\n\n• **Char Dham Yatra**: Shrines, registration, routes, and VIP helicopter charters.\n• **Trekking**: Kedarkantha, Tungnath, Kuari Pass, Valley of Flowers.\n• **Custom Trips**: Tailored itineraries for families, couples, and groups.\n• **Taxi & Rentals**: Verified mountain drivers and airport transfers.\n\nYou can also click below to chat directly with our senior travel planner on WhatsApp!`,
  options: [
    { label: 'Char Dham Yatra', icon: Sparkles, link: '/spiritual' },
    { label: 'Helicopter Packages', icon: Compass, link: '/helicopter-packages' },
    { label: 'Popular Treks', icon: Footprints, link: '/trekking' },
    { label: 'Custom Trip Planner', icon: Sparkles, link: '/customized-trip' },
    { label: 'Talk to Human on WhatsApp', icon: MessageSquare, isWhatsApp: true, whatsAppMsg: `Hi UKYatra, I have a question: "${query}". Please assist me.` }
  ]
};
  };

const handleSendQuery = (textToSend?: string) => {
  const query = (textToSend || inputText).trim();
  if (!query) return;

  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const userMsg: Message = {
    id: `user-${Date.now()}`,
    sender: 'user',
    text: query,
    timestamp: time
  };

  setMessages(prev => [...prev, userMsg]);
  setInputText('');
  setIsTyping(true);

  // Realistic bot response delay
  setTimeout(() => {
    const responseData = getBotResponse(query);
    const botMsg: Message = {
      id: `bot-${Date.now()}`,
      sender: responseData.sender,
      text: responseData.text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      options: responseData.options
    };
    setMessages(prev => [...prev, botMsg]);
    setIsTyping(false);
  }, 450);
};

const handleResetChat = () => {
  const welcomeTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  setMessages([
    {
      id: `welcome-${Date.now()}`,
      sender: 'bot',
      text: `Chat reset. Namaste! How can I help you explore Devbhoomi Uttarakhand today?`,
      timestamp: welcomeTime,
      options: [
        { label: 'Char Dham Dates & Registration', icon: Sparkles, action: () => handleSendQuery('Char Dham Dates & Registration') },
        { label: 'Helicopter Packages & Rates', icon: Compass, action: () => handleSendQuery('Helicopter Packages & Rates') },
        { label: 'Best Season to Visit', icon: Sun, action: () => handleSendQuery('Best Season to Visit') },
        { label: 'Top Winter & Summer Treks', icon: Footprints, action: () => handleSendQuery('Top Treks') },
        { label: 'Talk to Human on WhatsApp', icon: MessageSquare, isWhatsApp: true, whatsAppMsg: 'Hi UKYatra, I would like to speak with a human travel advisor.' }
      ]
    }
  ]);
};

  return (
    <div
      ref={containerRef}
      style={{
        transform: `translate3d(${dragOffset.x}px, ${dragOffset.y}px, 0)`,
      }}
      className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 flex flex-col items-end pointer-events-none select-none"
    >
      {/* ============================================================ */}
      {/* 1. CHATBOT POPUP WINDOW */}
      {/* ============================================================ */}
      {isOpen && (
        <div 
          className="pointer-events-auto mb-3 w-[calc(100vw-32px)] sm:w-[380px] md:w-[410px] h-[540px] max-h-[75vh] sm:max-h-[600px] flex flex-col rounded-3xl bg-white border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] overflow-hidden animate-in slide-in-from-bottom-5 duration-300"
        >
          {/* Header - Drag anywhere on header to move */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handleHeaderPointerUp}
            onPointerCancel={handleHeaderPointerUp}
            title="Drag here to move the chat window"
            className="cursor-grab active:cursor-grabbing px-4 py-3.5 bg-gradient-to-r from-[#FF5A1F] via-[#FF6A2A] to-[#E64A12] text-white flex items-center justify-between shadow-sm touch-none"
          >
            <div className="flex items-center gap-2.5 pointer-events-none">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-md">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-white font-display">UKYatra AI Guide</h3>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider bg-white/25 text-white">
                    24/7 AI
                  </span>
                </div>
                <p className="text-[11px] text-orange-100 font-medium flex items-center gap-1">
                  Online • Instant Himalayan Answers
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 pointer-events-auto">
              {/* WhatsApp direct connect */}
              <a
                href={getWhatsAppUrl("Hi UKYatra, I am contacting you from your website's AI Chatbot.")}
                target="_blank"
                rel="noreferrer"
                onPointerDown={(e) => e.stopPropagation()}
                title="Chat with human agent on WhatsApp"
                className="p-2 rounded-xl text-white/90 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Connect via WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Reset chat */}
              <button
                onClick={handleResetChat}
                onPointerDown={(e) => e.stopPropagation()}
                title="Reset conversation"
                className="p-2 rounded-xl text-white/90 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Reset chat"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>

              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                onPointerDown={(e) => e.stopPropagation()}
                title="Close chat"
                className="p-2 rounded-xl text-white/90 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-xl bg-orange-100 border border-orange-200 text-brand-orange flex-shrink-0 flex items-center justify-center mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                  </div>
                )}

                <div className={`max-w-[85%] flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`p-3.5 rounded-2xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-[#FF5A1F] to-[#E64A12] text-white rounded-tr-none shadow-md shadow-brand-orange/20 font-medium'
                        : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-xs font-normal'
                    }`}
                  >
                    <p className="whitespace-pre-line text-xs">{msg.text}</p>
                  </div>

                  {/* Bot Interactive Options/Actions */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5 w-full">
                      {msg.options.map((opt, idx) => {
                        const OptIcon = opt.icon;

                        if (opt.isWhatsApp) {
                          return (
                            <a
                              key={idx}
                              href={getWhatsAppUrl(opt.whatsAppMsg || 'Hi UKYatra')}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-medium transition-all shadow-xs"
                            >
                              <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                              <span>{opt.label}</span>
                              <ExternalLink className="w-2.5 h-2.5 opacity-80" />
                            </a>
                          );
                        }

                        if (opt.link) {
                          return (
                            <Link
                              key={idx}
                              to={opt.link}
                              onClick={() => setIsOpen(false)}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white hover:bg-orange-50 text-slate-700 hover:text-brand-orange border border-slate-200 hover:border-orange-200 text-[11px] font-medium transition-all shadow-xs"
                            >
                              {OptIcon && <OptIcon className="w-3.5 h-3.5 shrink-0 text-brand-orange" />}
                              <span>{opt.label}</span>
                              <ChevronRight className="w-3 h-3 text-slate-400" />
                            </Link>
                          );
                        }

                        return (
                          <button
                            key={idx}
                            onClick={opt.action}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white hover:bg-orange-50 text-slate-700 hover:text-brand-orange border border-slate-200 hover:border-orange-200 text-[11px] font-medium transition-all shadow-xs"
                          >
                            {OptIcon && <OptIcon className="w-3.5 h-3.5 shrink-0 text-brand-orange" />}
                            <span>{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <span className="text-[9px] text-slate-600 mt-1 px-1 font-medium">
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-xl bg-orange-100 text-brand-orange flex-shrink-0 flex items-center justify-center mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 items-center">
                <div className="w-7 h-7 rounded-xl bg-orange-100 border border-orange-200 text-brand-orange flex-shrink-0 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-3.5 py-2.5 text-slate-600 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="text-[11px] text-slate-600 font-medium ml-1">UKYatra AI is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Category Chips */}
          <div className="px-3 py-2 bg-white border-t border-slate-200 flex items-center gap-1.5 overflow-x-auto text-[11px] scrollbar-none">
            <button
              onClick={() => handleSendQuery('Char Dham Dates')}
              className="px-2.5 py-1 rounded-full bg-orange-50 hover:bg-orange-100 text-brand-orange border border-orange-200 whitespace-nowrap font-medium transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span>Char Dham</span>
            </button>
            <button
              onClick={() => handleSendQuery('Helicopter rates')}
              className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-orange-50 hover:text-brand-orange hover:border-orange-200 text-slate-700 border border-slate-200/80 whitespace-nowrap font-medium transition-colors flex items-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span>Heli Yatra</span>
            </button>
            <button
              onClick={() => handleSendQuery('Best Treks in Uttarakhand')}
              className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-orange-50 hover:text-brand-orange hover:border-orange-200 text-slate-700 border border-slate-200/80 whitespace-nowrap font-medium transition-colors flex items-center gap-1.5"
            >
              <Footprints className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Treks</span>
            </button>
            <button
              onClick={() => handleSendQuery('Taxi Rates')}
              className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-orange-50 hover:text-brand-orange hover:border-orange-200 text-slate-700 border border-slate-200/80 whitespace-nowrap font-medium transition-colors flex items-center gap-1.5"
            >
              <Car className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span>Taxi Rental</span>
            </button>
            <button
              onClick={() => handleSendQuery('Talk to human agent')}
              className="px-2.5 py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300/80 whitespace-nowrap font-semibold flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Human Support</span>
            </button>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendQuery();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about Char Dham, Treks, Hotels..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-600 focus:outline-none focus:border-brand-orange focus:bg-white transition-colors"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="w-10 h-10 rounded-2xl bg-gradient-to-r from-[#FF5A1F] to-[#E64A12] hover:brightness-105 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all shadow-md shadow-brand-orange/20"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* ============================================================ */}
      {/* 2. MOVABLE FLOATING LAUNCHER BUTTON & TOOLTIP */}
      {/* ============================================================ */}
      <div className="pointer-events-auto flex items-center gap-3">
        {!isOpen && !isDragging && (
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer hidden sm:flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 py-2 px-3.5 rounded-full text-xs shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span>Have travel queries? <strong className="text-brand-orange">Chat with AI</strong></span>
          </div>
        )}

        <div className="relative flex items-center">
          <button
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handleButtonPointerUp}
            onPointerCancel={handleButtonPointerUp}
            title="Drag anywhere to move, click to chat with AI"
            className={`relative group w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-150 touch-none ${
              isDragging
                ? 'cursor-grabbing scale-105 shadow-brand-orange/60'
                : 'cursor-grab hover:scale-110 active:scale-95'
            } ${
              isOpen
                ? 'bg-slate-800 text-white border border-slate-700'
                : 'bg-gradient-to-r from-[#FF5A1F] via-[#FF6A2A] to-[#E64A12] text-white shadow-brand-orange/40'
            }`}
            aria-label={isOpen ? "Close travel assistant chat" : "Open travel assistant chat"}
          >
            {isOpen ? (
              <X className="w-6 h-6 pointer-events-none" />
            ) : (
              <>
                <div className="relative pointer-events-none">
                  <Bot className="w-7 h-7" />
                  <Sparkles className="w-3.5 h-3.5 text-yellow-200 absolute -top-1 -right-1 animate-pulse" />
                </div>

                {/* Subtle drag grip indicator on hover */}
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-80 transition-opacity pointer-events-none">
                  <GripVertical className="w-3.5 h-3.5 text-white/90" />
                </div>

                {/* Unread indicator */}
                {hasUnread && (
                  <span className="absolute top-0 right-0 flex h-3.5 w-3.5 pointer-events-none">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
                  </span>
                )}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

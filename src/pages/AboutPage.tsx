import React, { useState } from 'react';
import { 
  Mountain, 
  Target, 
  Eye, 
  Heart, 
  ShieldCheck, 
  Users, 
  Award, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Sparkles, 
  ChevronDown, 
  Compass, 
  Globe2, 
  TrendingUp, 
  Star, 
  Phone,
  ArrowRight,
  Leaf
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';

export const AboutPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const milestones = [
    {
      year: 'July 2013',
      title: 'Our Humble Beginnings in Haridwar',
      desc: 'UK Yatra began as a small offline operation in Haridwar, focusing on transportation and pilgrim assistance. With honesty, local knowledge, and dedication, we started serving travelers one journey at a time.'
    },
    {
      year: 'Post-COVID Transformation',
      title: 'Digital-First Pan-India Expansion',
      desc: 'UK Yatra transformed into a digital-first brand, launching our website and social platforms. With 43,250+ satisfied guests, we expanded across India, bringing our trusted Uttarakhand expertise to a wider audience.'
    },
    {
      year: '2025 – 2026',
      title: 'Domestic & Curated Expeditions',
      desc: 'UK Yatra expanded into domestic and international tours, offering 100+ curated packages across India. From spiritual yatras to leisure holidays, we deliver complete travel experiences with professionalism and scale.'
    }
  ];

  const whyChoosePoints = [
    {
      icon: <Mountain className="w-7 h-7 text-brand-orange" />,
      title: 'Expertise in Uttarakhand',
      desc: 'Our team consists of locals who have a deep understanding and knowledge of the state, making us the perfect partner for exploring its hidden gems.'
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-emerald-600" />,
      title: 'Safety and Comfort',
      desc: 'We prioritize the safety and comfort of our clients and ensure that all our tours adhere to high standards of hygiene and safety protocols.'
    },
    {
      icon: <Users className="w-7 h-7 text-blue-600" />,
      title: 'Experienced Guides',
      desc: 'Our team of experienced guides ensures that you have a personalized and informative experience during your trip.'
    },
    {
      icon: <Globe2 className="w-7 h-7 text-purple-600" />,
      title: 'Range of Services',
      desc: 'We offer a range of services, including transportation, accommodation, food, and activities, ensuring that all aspects of your trip are taken care of.'
    },
    {
      icon: <Compass className="w-7 h-7 text-amber-500" />,
      title: 'Customized Itineraries',
      desc: "We understand that each traveler has unique preferences and interests. That's why we offer customized itineraries that cater to your individual needs and desires."
    },
    {
      icon: <MapPin className="w-7 h-7 text-rose-500" />,
      title: 'Local Connections',
      desc: 'Our strong network of local vendors and partners ensures that you have an authentic and hassle-free experience during your trip.'
    },
    {
      icon: <Award className="w-7 h-7 text-emerald-500" />,
      title: 'Worth of Money',
      desc: 'We offer competitive pricing without compromising on the quality of our services, making it accessible for all types of travelers.'
    },
    {
      icon: <Leaf className="w-7 h-7 text-green-600" />,
      title: 'Sustainable Tourism',
      desc: 'We believe in sustainable tourism and work towards minimizing the negative impact of tourism on the environment and local communities.'
    }
  ];

  const googleReviews = [
    {
      name: 'Nitesh Kesharwani',
      review: 'It was a wonderful experience with UK Yatra. Everything was very well organized!',
      rating: 5
    },
    {
      name: 'Vaibhav Deshmukh',
      review: 'Nice experience with UK YATRA well organised service, one of the best travel agency in UK. Had great time with them.',
      rating: 5
    },
    {
      name: 'Anurag Jakhmola',
      review: 'We did a trip with Ukyatra, which was very comfortable. The stays at every place were amazing... Thank you, Ukyatra.',
      rating: 5
    },
    {
      name: 'Aditya-RWT-Short',
      review: 'Hum Log Tungnath Chandrashila gaye the aur hmara pura package ukyatra ne bhaut ache se krvaya. Humein bilkul bhi dikkat nahi aai.',
      rating: 5
    },
    {
      name: 'Chandu Channdra',
      review: 'Ukyatra provided outstanding service for our Char Dham Yatra. We are really impressed by the dedication.',
      rating: 5
    },
    {
      name: 'Gopal Gupta',
      review: 'We had Chardham Yatra with UK Yatra by Heli service. We are thankful to UK Yatra to arrange such good arrangements, VIP Darshan and good hotels.',
      rating: 5
    },
    {
      name: 'Sanjay Pimoli',
      review: 'Thank you so much for wonderful tour. Service is excellent. We enjoyed a lot during tour. Made unforgettable memories.',
      rating: 5
    },
    {
      name: 'Prakash Bhati',
      review: 'It was a wonderful experience! The services were more than we expected. Special thanks to driver bhai and Shweta mam. All things well planned.',
      rating: 5
    }
  ];

  const faqs = [
    {
      q: 'Who is UK Yatra?',
      a: 'UK Yatra is an Uttarakhand-based tour and travel company rooted in Haridwar, offering well-planned pilgrimage, leisure, domestic, international, and business travel solutions. We combine strong ground operations with professional planning to deliver reliable travel experiences.'
    },
    {
      q: 'When was UK Yatra established?',
      a: 'UK Yatra was established in 2013 and began as an offline travel service provider in Uttarakhand. Over the years, we have served 43,250+ guests and evolved into a digitally enabled, pan-India travel brand.'
    },
    {
      q: 'What services does UK Yatra provide?',
      a: 'UK Yatra provides end-to-end travel services including pilgrimage tours (Char Dham & Do Dham), domestic and international leisure holidays, B2B travel services, group tours, corporate offsites, trekking experiences, educational tours, hotel bookings, cab services, and fully customized itineraries.'
    },
    {
      q: 'Does UK Yatra offer international tour packages?',
      a: 'Yes, along with domestic tours across India, UK Yatra offers curated international tour packages. We plan leisure holidays, group tours, honeymoon trips, and customized international itineraries with verified partners.'
    },
    {
      q: 'Does UK Yatra provide car rental and transportation services?',
      a: 'Yes, we provide reliable cab and transportation services including sedans, SUVs, tempo travellers, and luxury Volvo buses for local sightseeing, outstation travel, airport transfers, pilgrimages, and group movements.'
    },
    {
      q: 'Can UK Yatra assist with hotel and resort bookings?',
      a: 'Yes, UK Yatra offers hotel and resort bookings across Uttarakhand, India, and select international destinations. We work with verified properties to ensure comfort, quality, and value for money.'
    },
    {
      q: 'Can itineraries be customized?',
      a: 'Absolutely. All our tours—domestic and international—can be customized based on your preferences, budget, travel dates, and comfort requirements. We design personalized itineraries for individuals, families, groups, and corporates.'
    },
    {
      q: 'Who can travel with UK Yatra?',
      a: 'UK Yatra caters to pilgrims, families, senior citizens, group travelers, honeymoon couples, students, corporate teams, and travel partners. Our services are designed for spiritual, leisure, business, and experiential travel needs.'
    },
    {
      q: 'What makes UK Yatra different from other travel agencies?',
      a: 'UK Yatra stands out for its strong ground operations, transparent communication, ethical practices, B2B support capabilities, personalized service, and commitment to reliability. We focus on long-term relationships, not one-time transactions.'
    }
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'Who We Are (About Us)' }]} />

      {/* Hero Header */}
      <div className="relative rounded-3xl overflow-hidden cream-banner p-8 sm:p-14 mb-16 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Mountain className="w-3.5 h-3.5" />
            <span>Who We Are</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white leading-tight">
            Learn More - <span className="text-brand-orange">About UK Yatra</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            At UK Yatra, we provide the best travel services tailored to your needs. 
            Rooted in Haridwar, Uttarakhand since 2013, we combine deep local knowledge, passionate ground operations, and modern service standards to make every journey memorable.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="orange-gradient-btn px-6 py-3 rounded-xl font-display font-semibold text-xs text-white shadow-lg flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us: {SITE_CONFIG.phone}</span>
            </a>
            <a
              href={getWhatsAppUrl("Hi UK Yatra, I would like to know more about your services.")}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-brand-card border border-white/15 font-display font-semibold text-xs text-slate-200 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mission, Vision & Values Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="bg-brand-card border border-white/10 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all space-y-3">
          <div className="p-3 w-fit rounded-2xl bg-orange-500/10 text-brand-orange border border-orange-500/30">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-display text-white">Our Mission</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            To design and deliver safe, transparent, and customer-centric travel experiences through expert planning, operational excellence, and responsible tourism practices that consistently exceed expectations and build long-term traveller relationships.
          </p>
        </div>

        <div className="bg-brand-card border border-white/10 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all space-y-3">
          <div className="p-3 w-fit rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/30">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-display text-white">Our Vision</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            To become India’s most trusted travel brand by delivering spiritually enriching, culturally immersive, and seamlessly managed journeys that create lasting value for travellers, partners, and communities across every destination we serve.
          </p>
        </div>

        <div className="bg-brand-card border border-white/10 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all space-y-3">
          <div className="p-3 w-fit rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-display text-white">Our Values</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Customer trust, operational excellence, integrity, safety, cultural respect, and sustainability guide every decision, interaction, and journey, ensuring ethical growth, consistent quality, and meaningful experiences for all stakeholders.
          </p>
        </div>
      </div>

      {/* Leadership Messages: Founder & Co-Founder */}
      <div className="space-y-12 mb-20">
        {/* Founder Message - Seema Maindola */}
        <div className="bg-brand-card border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative group">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-xl border-4 border-slate-800 ring-1 ring-white/15 bg-slate-900">
                  <img 
                    src="/images/Seema%20Maindola.jpg" 
                    alt="Seema Maindola - Founder & CEO of UK Yatra" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
                  Founder & CEO
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-xl font-bold font-display text-white">Seema Maindola</h4>
                <p className="text-xs font-semibold text-brand-orange">Founder & CEO, UK Yatra</p>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Guiding brand vision, pilgrim hospitality & genuine Himalayan values</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase">
                <span>Leadership Note</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Message from the Founder & CEO
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  UK Yatra started with a simple idea and a lot of belief. From our roots in Uttarakhand, we’ve grown step by step into a travel brand that people trust. The journey hasn’t always been easy—it’s taken hard work, long days, and constant learning—but it’s been deeply rewarding. Most importantly, this journey has been built by Team UK Yatra. Nothing meaningful is ever created alone.
                </p>
                <p>
                  We don’t see ourselves as just a company. We see ourselves as a group of people working together with one goal—to create travel experiences that feel smooth, honest, and memorable. Team UK Yatra brings care, responsibility, and fresh thinking into everything we do. We respect each other’s strengths, learn from one another, and grow together.
                </p>
                <p>
                  As travel keeps changing, we continue to adapt—using better tools, listening to our guests, and improving how we work. Our focus is simple: to go beyond expectations and make every journey feel personal, comfortable, and worth remembering.
                </p>
                <p>
                  The trust our guests and partners place in us means everything. It comes from the effort, knowledge, and pride that Team UK Yatra puts into every trip. That passion is what defines us.
                </p>
                <p>
                  Thank you for getting to know us. I hope this gives you a clearer picture of who we are and what we believe in. We look forward to traveling this path together and creating experiences that truly matter.
                </p>
              </div>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">Seema Maindola</div>
                  <div className="text-xs text-brand-orange font-semibold">Founder & CEO, UK Yatra</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Co-Founder Message - Ravi Maindola */}
        <div className="bg-brand-card border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative group">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-xl border-4 border-slate-800 ring-1 ring-white/15 bg-slate-900">
                  <img 
                    src="/images/Ravi%20Maindola.jpg" 
                    alt="Ravi Maindola - Co-Founder & Director of UK Yatra" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
                  Co-Founder & Director
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-xl font-bold font-display text-white">Ravi Maindola</h4>
                <p className="text-xs font-semibold text-brand-orange">Co-Founder & Director, UK Yatra</p>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Directing ground operations, transport fleet & personalized trip execution</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-brand-orange text-xs font-bold uppercase">
                <span>Director's Perspective</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Message from the Co-Founder & Director
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  Thank you for taking the time to know UK Yatra a little better.
                </p>
                <p>
                  Every day at UK Yatra begins with a simple question: How can we do this better for our guests? From planning routes to choosing the right stays, from coordinating logistics to offering on-ground support, our focus remains on the details that turn a trip into a smooth and enjoyable experience.
                </p>
                <p>
                  Working closely with Team UK Yatra, I see the effort that goes into every journey we design. Behind each itinerary is careful planning, local knowledge, and a genuine desire to deliver what we promise. We believe travel should feel stress-free, transparent, and well-supported—and that belief guides our daily decisions.
                </p>
                <p>
                  Being deeply connected to Uttarakhand gives us a strong foundation, but our outlook is always expanding. We constantly learn from our travelers, adapt to changing needs, and improve our processes to ensure consistency, safety, and comfort across all destinations we serve.
                </p>
                <p>
                  What matters most to us is trust. When guests choose UK Yatra, they place their time, comfort, and expectations in our hands. We take that responsibility seriously. It is our commitment to listen, respond, and stand by our guests at every step of their journey.
                </p>
                <p>
                  Thank you for your interest and confidence in UK Yatra. We look forward to welcoming you, planning your next journey, and ensuring it becomes an experience you’ll remember fondly.
                </p>
              </div>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">Ravi Maindola</div>
                  <div className="text-xs text-brand-orange font-semibold">Co-Founder & Director, UK Yatra</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mt-1">
            Our Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-500 to-orange-600">Journey</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-xl mx-auto leading-relaxed">
            From offline roots in Haridwar to over <span className="font-semibold text-brand-orange">43,250+ delighted travelers</span> nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map((m, idx) => (
            <div key={idx} className="bg-brand-card border border-white/10 rounded-3xl p-8 shadow-sm relative overflow-hidden">
              <div className="text-2xl font-extrabold font-display text-brand-orange mb-2">
                {m.year}
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-2">
                {m.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us: 8 Pillars from the Official Website */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The UK Yatra Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mt-1">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-500 to-orange-600">Choose Us</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-xl mx-auto leading-relaxed">
            Discover what makes traveling with UK Yatra seamless, ethical, and trustworthy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoosePoints.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-brand-card border border-white/10 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-brand-orange/40 hover:bg-slate-800/90 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-base font-bold font-display text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust & Certifications */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Recognition</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 mt-1">
            Certified & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-500 to-orange-600">Recognized</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Operating with full legal compliance, state registration, and industry certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-brand-card rounded-3xl p-6 border border-white/10 shadow-sm space-y-2">
            <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
            <h3 className="font-bold text-white text-sm">Uttarakhand Tourism</h3>
            <p className="text-xs text-slate-300">Registered Tour Operator: {SITE_CONFIG.registrationNo}</p>
          </div>
          <div className="bg-brand-card rounded-3xl p-6 border border-white/10 shadow-sm space-y-2">
            <Award className="w-10 h-10 text-brand-orange mx-auto mb-2" />
            <h3 className="font-bold text-white text-sm">Government MSME</h3>
            <p className="text-xs text-slate-300">Registered Enterprise: {SITE_CONFIG.msmeReg}</p>
          </div>
          <div className="bg-brand-card rounded-3xl p-6 border border-white/10 shadow-sm space-y-2">
            <Users className="w-10 h-10 text-amber-400 mx-auto mb-2" />
            <h3 className="font-bold text-white text-sm">GST Compliant</h3>
            <p className="text-xs text-slate-300">GSTIN: {SITE_CONFIG.gstin}</p>
          </div>
        </div>
      </div>

      {/* Verified Google Guest Reviews */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 text-xs font-bold mb-2">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Google Verified Reviews (150+ 5-Star Ratings)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mt-1">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-500 to-orange-600">Travelers Say</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-xl mx-auto leading-relaxed">
            Real guest feedback from Char Dham yatras, Tungnath treks, and customized tours.
          </p>
        </div>

        {/* Moving Reviews 1-Line Slideshow */}
        <div className="relative w-full overflow-hidden py-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          {/* Left and Right Edge Fade Gradients */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#F5F3EF] via-[#F5F3EF]/90 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#F5F3EF] via-[#F5F3EF]/90 to-transparent z-10" />

          {/* Continuous Infinite Moving Track */}
          <div className="animate-marquee-infinite flex gap-6">
            {[...googleReviews, ...googleReviews].map((rev, idx) => (
              <div 
                key={idx} 
                className="w-[300px] sm:w-[350px] shrink-0 bg-brand-card border border-white/10 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all flex flex-col justify-between select-none group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      Google Review
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed line-clamp-4">
                    "{rev.review}"
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between mt-4">
                  <span className="font-bold text-white text-xs">{rev.name}</span>
                  <span className="text-[10px] text-slate-400 font-medium">Verified Guest</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-3 text-[11px] text-slate-600 font-medium flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Continuous live slideshow • Hover to pause reading</span>
        </div>
      </div>

      {/* General FAQs from official website */}
      <div className="mb-20 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mt-1">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-500 to-orange-600">Questions</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about UK Yatra and our tour services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-brand-card border border-white/10 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-white text-xs sm:text-sm hover:text-brand-orange transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-orange' : 'text-slate-400'}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-white/10 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Office & Direct Contact Section */}
      <div className="bg-brand-card border border-white/10 text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">Registered Head Office</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Visit or Contact Team UK Yatra
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Shop No. A-7, First Floor, Ganpati Plaza Complex, Near DSVV, Haripur Kalan, Haridwar, Uttarakhand - 249205
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-semibold text-white">
                <Phone className="w-3.5 h-3.5 text-brand-orange" /> +91-7817955737 / +91-8191955737
              </span>
              <span>•</span>
              <span className="text-slate-400">Working Hours: Mon to Sun - 24*7</span>
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <a
              href={getWhatsAppUrl("Hi UK Yatra, I'd like to consult with your travel specialists.")}
              target="_blank"
              rel="noreferrer"
              className="orange-gradient-btn px-6 py-3.5 rounded-xl font-display font-semibold text-xs text-white shadow-lg flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

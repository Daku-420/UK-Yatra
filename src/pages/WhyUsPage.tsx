import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  Users, 
  Compass, 
  Clock, 
  CheckCircle2, 
  Mountain, 
  Sparkles,
  Phone
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/SocialIcons';

export const WhyUsPage: React.FC = () => {
  const pillars = [
    {
      icon: <Mountain className="w-8 h-8 text-brand-orange" />,
      title: '100% Born & Based in Uttarakhand',
      desc: 'We are locals of the Garhwal and Kumaon Himalayas. We do not operate via remote call centers — our coordinators, guides, and drivers live in Rishikesh, Dehradun, and hill valleys.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      title: 'Government Certified & Tourism Registered',
      desc: 'Fully registered with Uttarakhand Tourism Development Board (UTDB) and MSME, strictly adhering to high-altitude safety mandates and disaster preparedness.'
    },
    {
      icon: <Award className="w-8 h-8 text-amber-400" />,
      title: 'Handpicked, Sanitized & Verified Stays',
      desc: 'We personally inspect every hotel, riverside camp, and alpine cottage before booking our guests. Clean linens, hot water facilities, and wholesome vegetarian food guaranteed.'
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-rose-400" />,
      title: 'Zero Hidden Costs & Honest Transparency',
      desc: 'What you see is what you pay. Tolls, state permits, parking fees, driver food/accommodation, and taxes are clearly detailed without last-minute surprise charges.'
    },
    {
      icon: <Clock className="w-8 h-8 text-sky-400" />,
      title: '24/7 Dedicated On-Trip Emergency Support',
      desc: 'Direct emergency hotline connected to our base operations. Vehicles are equipped with emergency medical kits, portable oxygen cylinders, and satellite weather tracking.'
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      title: 'Seasoned Himalayan Hill Drivers',
      desc: 'Mountain roads require expert handling. Our drivers have a minimum of 7+ years of experience navigating treacherous ghats, monsoon roads, and high passes.'
    },
    {
      icon: <Compass className="w-8 h-8 text-teal-400" />,
      title: 'Bespoke Customization For Every Traveler',
      desc: 'Whether traveling with elderly parents needing elevator access and palkis, or young adventurers wanting Class IV rapids, we tailor itineraries to individual pacing.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
      title: 'Eco-Conscious & Fair Wage Porter Ethics',
      desc: 'We practice Leave-No-Trace principles in high meadows and ensure ethical compensation for all local mountain guides, porters, and muleteers.'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Why Choose UKYatra' }]} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The UKYatra Difference</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Why Thousands of Travellers <br />
            <span className="text-brand-orange">Trust UKYatra</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Himalayan travel is about safety, local knowledge, and authentic moments. Discover why UKYatra is rated 4.9/5 by pilgrims, trekkers, and vacationers.
          </p>
        </div>

        {/* 8 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="bg-brand-card border border-white/10 p-6 rounded-3xl hover:border-brand-orange/40 hover:bg-slate-800/90 transition-all hover:translate-y-[-4px] shadow-sm hover:shadow-xl"
            >
              <div className="mb-4">{pillar.icon}</div>
              <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="bg-brand-card border border-white/10 rounded-3xl p-8 sm:p-12 mb-20 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {SITE_CONFIG.stats.map((stat, idx) => (
              <div key={idx} className="py-2 md:py-0 px-2">
                <div className="text-3xl sm:text-5xl font-display font-extrabold text-brand-orange mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="text-center bg-[#000044] border border-white/10 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
            Ready to Plan Your Safe & Memorable Himalayan Holiday?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-8">
            Connect directly with our local Uttarakhand specialists today for free customized itineraries, hotel recommendations, and honest advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/packages"
              className="orange-gradient-btn px-8 py-3.5 rounded-xl font-display font-semibold text-white shadow-xl shadow-brand-orange/25"
            >
              Browse Tour Packages
            </Link>
            <a
              href={getWhatsAppUrl("Hi UKYatra, I want to discuss why I should book my Uttarakhand trip with you.")}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 font-semibold flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

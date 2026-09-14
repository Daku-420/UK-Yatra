import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mountain, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Heart,
  ChevronRight,
  Lock
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { InstagramIcon, FacebookIcon, YoutubeIcon, TwitterIcon, WhatsAppIcon } from './SocialIcons';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10 text-slate-300 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter / Trust Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12 border-b border-white/10 items-center">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <Logo size="md" />
            </Link>
            <p className="mt-3 text-xs text-slate-400 leading-relaxed font-normal">
              Uttarakhand’s premier experiential travel agency and Himalayan pilgrimage & trekking company.
            </p>
          </div>

          <div className="lg:col-span-2 flex flex-wrap items-center justify-between gap-6 bg-brand-card border border-white/10 p-4 sm:p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Certified Local Team</h4>
                <p className="text-xs text-slate-400 font-normal">Registered with Uttarakhand Tourism & MSME</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">24/7 On-Trip Assistance</h4>
                <p className="text-xs text-slate-400 font-normal">Emergency oxygen & hill driver network</p>
              </div>
            </div>

            <a
              href={getWhatsAppUrl("Hi UKYatra, I would like to speak to a travel specialist.")}
              target="_blank"
              rel="noreferrer"
              className="orange-gradient-btn px-5 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2 shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Talk to an Expert</span>
            </a>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 xl:gap-8 py-12">
          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="text-slate-300 hover:text-brand-orange font-medium transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-brand-orange font-medium transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-slate-300 hover:text-brand-orange font-medium transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" /> Tour Packages
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-slate-300 hover:text-brand-orange font-medium transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" /> Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-slate-300 hover:text-brand-orange font-medium transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" /> Deals & Offers
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-300 hover:text-brand-orange font-medium transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" /> Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-brand-orange font-medium transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialized Services */}
          <div className="col-span-1">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/helicopter-packages" className="text-slate-300 hover:text-brand-orange font-medium transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" /> Helicopter Charters
                </Link>
              </li>
              <li>
                <Link to="/customized-trip" className="text-slate-300 hover:text-brand-orange font-medium transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" /> Custom Trip Planner
                </Link>
              </li>
              <li>
                <Link to="/group-travel" className="text-slate-300 hover:text-brand-orange font-medium transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" /> Group & Corporate
                </Link>
              </li>
              <li>
                <Link to="/college-trips" className="text-slate-300 hover:text-brand-orange font-medium transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" /> College Trips & Treks
                </Link>
              </li>
              <li>
                <Link to="/school-trips" className="text-slate-300 hover:text-brand-orange font-medium transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" /> School Excursions
                </Link>
              </li>
              <li>
                <Link to="/summer-learning-programmes" className="text-slate-300 hover:text-brand-orange font-medium transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" /> Summer Learning Camps
                </Link>
              </li>
              <li>
                <Link to="/book-vehicle" className="text-slate-300 hover:text-brand-orange font-medium transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" /> Book Your Vehicle / Taxi
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-slate-300 hover:text-brand-orange font-medium transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-orange shrink-0" /> Guest Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="col-span-1">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Top Destinations
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/destinations/kedarnath" className="text-slate-300 hover:text-brand-orange font-medium transition-colors">Kedarnath Dham</Link>
              </li>
              <li>
                <Link to="/destinations/badrinath" className="text-slate-300 hover:text-brand-orange font-medium transition-colors">Badrinath Dham</Link>
              </li>
              <li>
                <Link to="/destinations/rishikesh" className="text-slate-300 hover:text-brand-orange font-medium transition-colors">Rishikesh</Link>
              </li>
              <li>
                <Link to="/destinations/auli" className="text-slate-300 hover:text-brand-orange font-medium transition-colors">Auli Skiing</Link>
              </li>
              <li>
                <Link to="/destinations/chopta" className="text-slate-300 hover:text-brand-orange font-medium transition-colors">Chopta & Tungnath</Link>
              </li>
              <li>
                <Link to="/destinations/nainital" className="text-slate-300 hover:text-brand-orange font-medium transition-colors">Nainital Lakes</Link>
              </li>
              <li>
                <Link to="/destinations/mussoorie" className="text-slate-300 hover:text-brand-orange font-medium transition-colors">Mussoorie Hills</Link>
              </li>
              <li>
                <Link to="/destinations/jim-corbett" className="text-slate-300 hover:text-brand-orange font-medium transition-colors">Jim Corbett Safari</Link>
              </li>
            </ul>
          </div>

          {/* Travel Themes & Treks */}
          <div className="col-span-1">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Himalayan Treks
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/spiritual" className="text-slate-300 hover:text-brand-orange font-medium transition-colors">Char Dham Yatra 2026</Link>
              </li>
              <li>
                <Link to="/helicopter-packages" className="text-slate-300 hover:text-brand-orange font-medium transition-colors">Do Dham Heli Yatra</Link>
              </li>
              <li>
                <Link to="/trekking/kedarkantha-winter-trek" className="text-slate-300 hover:text-brand-orange font-medium transition-colors">Kedarkantha Winter Trek</Link>
              </li>
              <li>
                <Link to="/trekking/valley-of-flowers-trek" className="text-slate-300 hover:text-brand-orange font-medium transition-colors">Valley of Flowers Trek</Link>
              </li>
              <li>
                <Link to="/trekking/chopta-chandrashila-trek" className="text-slate-300 hover:text-brand-orange font-medium transition-colors">Chopta Tungnath</Link>
              </li>
              <li>
                <Link to="/trekking" className="text-slate-300 hover:text-brand-orange font-medium transition-colors">View All Treks</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3 text-slate-300 font-normal">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 font-normal">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-brand-orange transition-colors">{SITE_CONFIG.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="text-[#25D366] font-semibold hover:underline">
                  Chat on WhatsApp ({SITE_CONFIG.phone})
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300 font-normal">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-brand-orange transition-colors">{SITE_CONFIG.email}</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <div className="text-xs font-bold text-white mb-2.5">Follow Our Himalayan Journey:</div>
              <div className="flex items-center gap-2">
                <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-brand-card border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all shadow-xs" aria-label="Instagram">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-brand-card border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all shadow-xs" aria-label="Facebook">
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a href={SITE_CONFIG.social.youtube} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-brand-card border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all shadow-xs" aria-label="YouTube">
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a href={SITE_CONFIG.social.twitter} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-brand-card border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all shadow-xs" aria-label="Twitter">
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-normal">
          <div>
            © 2026 {SITE_CONFIG.name}. All Rights Reserved. Crafted with <Heart className="w-3.5 h-3.5 inline text-red-500 fill-red-500" /> for Uttarakhand.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/cancellation-policy" className="text-slate-400 hover:text-white transition-colors">Cancellation & Refund</Link>
            <Link to="/admin" className="text-slate-500 hover:text-brand-orange transition-colors flex items-center gap-1">
              <Lock className="w-3 h-3 text-slate-500 shrink-0" />
              <span>Staff Admin</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

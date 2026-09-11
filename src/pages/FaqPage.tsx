import React, { useState } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronUp, MessageSquare, Phone } from 'lucide-react';
import { FAQS } from '../data/faqs';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const FaqPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['All', 'General', 'Char Dham', 'Trekking', 'Booking & Payments', 'Weather & Packing'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

      {/* Header Banner */}
      <div className="text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-semibold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Help & Travel Information</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900">
          Frequently Asked <span className="text-brand-orange">Questions</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          Find direct answers about Char Dham biometric rules, trekking preparation, payment terms, and vehicle standards.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search question (e.g. Kedarnath helicopter, payment advance, packing)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white border border-slate-300 rounded-2xl pl-12 pr-4 py-3.5 text-xs text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange shadow-sm"
        />
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 hide-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/90 shadow-xs'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQs Accordion */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen ? 'bg-white border-brand-orange shadow-md' : 'bg-white border-[#E2DDD5] hover:border-slate-300 shadow-xs'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="font-display font-bold text-sm sm:text-base text-slate-900">
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-brand-orange shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed animate-in fade-in duration-150">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Need Help Box */}
      <div className="mt-16 bg-white rounded-3xl p-8 border border-[#E2DDD5] shadow-md text-center space-y-4">
        <h3 className="text-xl font-bold font-display text-slate-900">
          Still have an unanswered question?
        </h3>
        <p className="text-xs text-slate-600 max-w-md mx-auto">
          Our Himalayan coordinators are available to answer your specific queries directly.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={getWhatsAppUrl("Hi UKYatra, I have a specific question not covered in your FAQ.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-xl font-semibold text-xs shadow-md"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Ask on WhatsApp</span>
          </a>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="inline-flex items-center gap-2 bg-slate-50 text-slate-800 px-5 py-2.5 rounded-xl font-semibold text-xs border border-slate-200 hover:bg-slate-100 transition-colors shadow-xs"
          >
            <Phone className="w-4 h-4 text-brand-orange" />
            <span>Call Helpline: {SITE_CONFIG.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

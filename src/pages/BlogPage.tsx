import React, { useState } from 'react';
import { Sparkles, Search } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogs';
import { BlogCard } from '../components/BlogCard';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Spiritual', 'Travel Guides', 'Trekking', 'Weekend Escapes'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'Stories & Travel Guides' }]} />

      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden cream-banner p-8 sm:p-12 mb-12 shadow-sm">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Himalayan Journal</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 leading-tight">
            Stories From The <span className="text-brand-orange">Mountains</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            Insider travel guides, trekking checklists, seasonal weather forecasts, and sacred spiritual lore curated by native Himalayan guides.
          </p>
        </div>
      </div>

      {/* Filter toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search stories & guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange shadow-sm"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
                  : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/90 shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

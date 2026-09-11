import React, { useState } from 'react';
import { Star, CheckCircle, Quote, Plus, X, Send, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/reviews';
import { ReviewCard } from '../components/ReviewCard';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const ReviewsPage: React.FC = () => {
  const [reviewsList, setReviewsList] = useState(REVIEWS);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: '',
    location: '',
    tripTaken: 'Kedarnath Yatra',
    rating: 5,
    comment: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRev = {
      id: `rev-${Date.now()}`,
      name: form.name,
      location: form.location || 'India',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
      rating: Number(form.rating),
      tripTaken: form.tripTaken,
      reviewDate: 'Just Now',
      comment: form.comment,
      verified: true
    };
    setReviewsList([newRev, ...reviewsList]);
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'Traveller Reviews' }]} />

      {/* Header & Trust Breakdown */}
      <div className="cream-banner rounded-3xl p-8 sm:p-12 mb-12 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Experiences</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900">
              Stories From Our <span className="text-brand-orange">Travellers</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Read authentic feedback from families, couples, solo trekkers, and corporate teams who explored Uttarakhand with UKYatra.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col sm:flex-row items-center justify-end gap-6 bg-white p-6 rounded-3xl border border-[#DCD6CC] shadow-sm">
            <div className="text-center sm:text-left">
              <div className="font-display font-extrabold text-5xl text-slate-900">4.9</div>
              <div className="flex items-center gap-1 justify-center sm:justify-start my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-slate-500">Based on 850+ reviews</span>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="orange-gradient-btn px-6 py-3 rounded-2xl font-display font-bold text-xs text-white shadow-xl flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviewsList.map((rev) => (
          <ReviewCard key={rev.id} review={rev} />
        ))}
      </div>

      {/* Review Submission Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-white border border-[#DCD6CC] rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => { setShowModal(false); setSubmitted(false); }}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <h3 className="text-xl font-bold font-display text-slate-900">
                  Share Your UKYatra Experience
                </h3>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-medium mb-1">City / Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Mumbai"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-1">Trip Rating</label>
                    <select
                      value={form.rating}
                      onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                      className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-brand-orange"
                    >
                      <option value="5">5 Stars (Excellent)</option>
                      <option value="4">4 Stars (Good)</option>
                      <option value="3">3 Stars (Average)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">Trip / Trek Taken</label>
                  <input
                    type="text"
                    placeholder="e.g. Complete Char Dham Yatra (10D/9N)"
                    value={form.tripTaken}
                    onChange={(e) => setForm({ ...form, tripTaken: e.target.value })}
                    className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">Your Review *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How was the driver, hotel, coordinator, and overall Himalayan experience?"
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    className="w-full bg-[#F5F3EF] border border-[#DCD6CC] rounded-xl p-3 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-brand-orange"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-semibold text-white shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Traveller Review</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold font-display text-slate-900">Thank You for Your Review!</h4>
                <p className="text-xs text-slate-600">
                  Your feedback has been added to our guest showcase.
                </p>
                <button
                  onClick={() => { setShowModal(false); setSubmitted(false); }}
                  className="px-6 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 border border-[#DCD6CC]"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, MapPin, Package, Mountain, Compass, ArrowRight, CornerDownRight, FileText } from "lucide-react";
import { performDeepSearch, DeepSearchResult, SearchCategory, CATEGORY_STYLES } from "../utils/searchEngine";

const highlightText = (text: string, query: string): React.ReactNode => {
  if (!query.trim()) return text;
  const safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${safe})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-amber-400 text-slate-950 font-bold px-1 py-0.2 rounded shadow-xs not-italic">
        {part}
      </mark>
    ) : (
      part
    )
  );
};

interface SearchBarProps {
  onClose?: () => void;
  autoFocus?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onClose, autoFocus = false }) => {
  const [query, setQuery] = useState("");
  const [allResults, setAllResults] = useState<DeepSearchResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<DeepSearchResult[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  const doSearch = useCallback((q: string) => {
    const trimmed = q.trim();
    if (!trimmed || trimmed.length < 2) {
      setAllResults([]);
      setFilteredResults([]);
      setIsOpen(false);
      return;
    }
    const matches = performDeepSearch(trimmed);
    setAllResults(matches);
    setIsOpen(true);
    setActiveIndex(-1);
    setSelectedCategory("all");
  }, []);

  useEffect(() => {
    doSearch(query);
  }, [query, doSearch]);

  // Filter results by active category pill
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredResults(allResults);
    } else {
      setFilteredResults(allResults.filter(r => r.category === selectedCategory));
    }
  }, [selectedCategory, allResults]);

  const handleSelect = (result: DeepSearchResult) => {
    navigate(result.url);
    setQuery("");
    setIsOpen(false);
    onClose?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, filteredResults.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && activeIndex >= 0 && filteredResults[activeIndex]) {
      e.preventDefault();
      handleSelect(filteredResults[activeIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setQuery("");
      onClose?.();
    }
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(e.target as Node) && 
        inputRef.current && 
        !inputRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Compute unique categories present in the results
  const availableCategories = Array.from(new Set(allResults.map(r => r.category)));

  return (
    <div className="relative w-full">
      {/* Search Input Box */}
      <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:border-white/40 focus-within:border-brand-orange focus-within:bg-slate-900/95 px-3.5 py-2 transition-all duration-200 shadow-inner">
        <Search className="shrink-0 w-4 h-4 text-brand-orange" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          placeholder="Search anywhere (itinerary, temple, gear, advice)..."
          className="flex-1 bg-transparent outline-none placeholder-slate-400 text-white text-xs sm:text-sm w-44 lg:w-64"
          aria-label="Search site"
        />
        {query && (
          <button 
            type="button"
            onClick={() => { setQuery(""); setIsOpen(false); inputRef.current?.focus(); }} 
            className="text-slate-400 hover:text-white transition-colors p-0.5" 
            aria-label="Clear"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* --- RICH DEEP SEARCH DROPDOWN --- */}
      {isOpen && allResults.length > 0 && (
        <div 
          ref={dropdownRef} 
          className="absolute top-full mt-2 left-0 sm:left-auto sm:right-0 w-[92vw] sm:w-[540px] md:w-[620px] max-h-[80vh] bg-slate-950/98 backdrop-blur-2xl border border-slate-700/90 rounded-2xl shadow-2xl shadow-black/80 flex flex-col z-[999] animate-in fade-in slide-in-from-top-2 duration-150 overflow-hidden text-slate-200"
        >
          {/* Header Summary & Category Filters */}
          <div className="p-3.5 bg-slate-900/90 border-b border-slate-800 shrink-0 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-300 font-semibold flex items-center gap-1.5">
                <span>Matches found for</span>
                <span className="text-brand-orange font-bold font-mono">"{query}"</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white font-mono font-bold">
                  {allResults.length} occurrences
                </span>
              </div>
              <span className="text-[10px] text-slate-400 hidden sm:inline">
                Click any match to jump directly
              </span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-colors shrink-0 ${
                  selectedCategory === "all"
                    ? "bg-brand-orange text-white shadow-sm"
                    : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
                }`}
              >
                All ({allResults.length})
              </button>

              {availableCategories.map(cat => {
                const count = allResults.filter(r => r.category === cat).length;
                const meta = CATEGORY_STYLES[cat];
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-lg font-semibold transition-colors shrink-0 flex items-center gap-1 ${
                      selectedCategory === cat
                        ? "bg-brand-orange text-white shadow-sm"
                        : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
                    }`}
                  >
                    <span>{meta.icon}</span>
                    <span>{meta.label}</span>
                    <span className="text-[10px] opacity-75">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results List with "Where it is written" Snippets */}
          <div className="overflow-y-auto divide-y divide-slate-800/80 p-2 space-y-1">
            {filteredResults.map((result, idx) => {
              const meta = CATEGORY_STYLES[result.category];
              const isFocused = idx === activeIndex;

              return (
                <div
                  key={`${result.id}-${idx}`}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseDown={() => handleSelect(result)}
                  className={`p-3 rounded-xl cursor-pointer transition-all ${
                    isFocused ? "bg-white/10 ring-1 ring-brand-orange/40" : "hover:bg-white/5"
                  }`}
                >
                  {/* Top line: Category + Title + Price */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${result.categoryColor}`}>
                          <span>{meta.icon}</span>
                          <span>{result.categoryLabel}</span>
                        </span>
                        <span className="text-[11px] text-slate-400 truncate">
                          {result.subtitle}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-white group-hover:text-brand-orange transition-colors">
                        {highlightText(result.title, query)}
                      </h4>
                    </div>

                    {result.price && (
                      <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-1 rounded-lg border border-amber-500/20 shrink-0">
                        {result.price}
                      </span>
                    )}
                  </div>

                  {/* WHERE THAT PARTICULAR KEYWORD IS WRITTEN */}
                  {result.matches && result.matches.length > 0 && (
                    <div className="mt-2.5 space-y-1.5 pt-2 border-t border-slate-800/70">
                      {result.matches.map((occ, occIdx) => (
                        <div 
                          key={occIdx}
                          className="bg-slate-900/90 rounded-lg p-2 border border-slate-800 text-xs text-slate-300"
                        >
                          <div className="flex items-center gap-1.5 text-[11px] font-bold text-brand-orange mb-0.5">
                            <CornerDownRight className="w-3 h-3 text-brand-orange shrink-0" />
                            <span>Written in: {occ.sectionType}</span>
                          </div>
                          <p className="text-slate-300 leading-relaxed text-[11px] pl-4 font-normal">
                            "{highlightText(occ.snippet, query)}"
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bottom Action Hint */}
                  <div className="mt-2 flex items-center justify-end text-[10px] font-semibold text-brand-orange/90 hover:text-brand-orange">
                    <span>Jump to {result.categoryLabel} →</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Keyboard Guide */}
          <div className="px-4 py-2 bg-slate-900/90 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>↑↓ Navigate matches · Enter to open · Esc to close</span>
            <span className="text-brand-orange font-semibold">UKYatra Deep Search</span>
          </div>
        </div>
      )}

      {/* Empty State */}
      {isOpen && query.length >= 2 && allResults.length === 0 && (
        <div 
          ref={dropdownRef} 
          className="absolute top-full mt-2 left-0 sm:left-auto sm:right-0 w-[92vw] sm:w-[420px] bg-slate-950/98 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl p-6 z-[999] text-center animate-in fade-in duration-150"
        >
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-slate-400 mb-2">
            <Search className="w-5 h-5" />
          </div>
          <p className="text-slate-200 font-bold text-sm">
            No occurrences found for <span className="text-brand-orange font-mono">"{query}"</span>
          </p>
          <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
            Try searching for terms like <span className="text-amber-400">"helicopter"</span>, <span className="text-amber-400">"Tapt Kund"</span>, <span className="text-amber-400">"oxygen"</span>, <span className="text-amber-400">"biometric"</span>, or <span className="text-amber-400">"Auli"</span>.
          </p>
        </div>
      )}
    </div>
  );
};

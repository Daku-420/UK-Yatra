import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, MapPin, Package, Mountain, Zap, Compass } from "lucide-react";
import { DESTINATIONS } from "../data/destinations";
import { TOUR_PACKAGES } from "../data/packages";
import { TREKS } from "../data/treks";
import { ACTIVITIES } from "../data/activities";
import { SPIRITUAL_CIRCUITS } from "../data/spiritual";

type ResultCategory = "destination" | "package" | "trek" | "activity" | "spiritual";

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  category: ResultCategory;
  url: string;
  price?: string;
}

const CATEGORY_META: Record<ResultCategory, { label: string; color: string }> = {
  destination: { label: "Destination", color: "text-sky-400" },
  package:     { label: "Package",     color: "text-amber-400" },
  trek:        { label: "Trek",        color: "text-emerald-400" },
  activity:    { label: "Activity",    color: "text-pink-400" },
  spiritual:   { label: "Spiritual",   color: "text-purple-400" },
};

const buildIndex = (): SearchResult[] => {
  const results: SearchResult[] = [];
  DESTINATIONS.forEach(d => results.push({ id: d.id, title: d.name, subtitle: (d as any).tagline ?? d.category, category: "destination", url: `/destinations/${d.id}`, price: (d as any).startingPrice }));
  TOUR_PACKAGES.forEach(p => results.push({ id: p.id, title: p.title, subtitle: p.destination, category: "package", url: `/packages/${p.id}`, price: p.startingPrice }));
  TREKS.forEach(t => results.push({ id: t.id, title: t.name, subtitle: (t as any).tagline ?? `${t.duration} - ${t.difficulty}`, category: "trek", url: `/trekking/${t.id}`, price: t.startingPrice }));
  (ACTIVITIES ?? []).forEach((a: any) => results.push({ id: a.id, title: a.name ?? a.title, subtitle: a.location ?? a.category ?? "", category: "activity", url: `/activities/${a.id}`, price: a.startingPrice ?? a.price }));
  SPIRITUAL_CIRCUITS.forEach((s: any) => results.push({ id: s.id, title: s.name ?? s.title, subtitle: (s as any).tagline ?? s.duration ?? "", category: "spiritual", url: `/spiritual/${s.id}`, price: s.startingPrice }));
  return results;
};

const ALL_RESULTS = buildIndex();

const highlightText = (text: string, query: string): React.ReactNode => {
  if (!query.trim()) return text;
  const safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${safe})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? <mark key={i} className="bg-orange-500/40 text-white rounded px-0.5 not-italic">{part}</mark> : part
  );
};

interface SearchBarProps {
  onClose?: () => void;
  autoFocus?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onClose, autoFocus = false }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => { if (autoFocus) inputRef.current?.focus(); }, [autoFocus]);

  const doSearch = useCallback((q: string) => {
    const trimmed = q.trim().toLowerCase();
    if (!trimmed || trimmed.length < 2) { setResults([]); setIsOpen(false); return; }
    const filtered = ALL_RESULTS.filter(r => r.title.toLowerCase().includes(trimmed) || r.subtitle.toLowerCase().includes(trimmed)).slice(0, 8);
    setResults(filtered);
    setIsOpen(true);
    setActiveIndex(-1);
  }, []);

  useEffect(() => { doSearch(query); }, [query, doSearch]);

  const handleSelect = (result: SearchResult) => {
    navigate(result.url);
    setQuery("");
    setIsOpen(false);
    onClose?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex(i => Math.min(i + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActiveIndex(i => Math.max(i - 1, -1)); }
    else if (e.key === "Enter" && activeIndex >= 0) { e.preventDefault(); handleSelect(results[activeIndex]); }
    else if (e.key === "Escape") { setIsOpen(false); setQuery(""); onClose?.(); }
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node) && inputRef.current && !inputRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:border-white/40 focus-within:border-orange-500/60 focus-within:bg-white/15 px-3 py-2 transition-all duration-200">
        <Search className="shrink-0 w-4 h-4 text-slate-300" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          placeholder="Search destinations, treks, packages…"
          className="flex-1 bg-transparent outline-none placeholder-slate-400 text-white text-sm w-40 xl:w-52"
          aria-label="Search site"
        />
        {query && (
          <button onClick={() => { setQuery(""); setIsOpen(false); inputRef.current?.focus(); }} className="text-slate-400 hover:text-white transition-colors" aria-label="Clear">
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div ref={dropdownRef} className="absolute top-full mt-2 left-0 min-w-[340px] bg-slate-900/98 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden z-[999] animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-4 pt-3 pb-1 text-[10px] uppercase font-bold tracking-widest text-slate-500">{results.length} result{results.length !== 1 ? "s" : ""}</div>
          <ul>
            {results.map((result, idx) => {
              const meta = CATEGORY_META[result.category];
              return (
                <li key={result.id + result.category} onMouseEnter={() => setActiveIndex(idx)} onMouseDown={() => handleSelect(result)}
                  className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${idx === activeIndex ? "bg-white/10" : "hover:bg-white/5"}`}>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white truncate">{highlightText(result.title, query)}</p>
                    <p className="text-xs text-slate-400 truncate">{highlightText(result.subtitle, query)}</p>
                  </div>
                  <div className="flex flex-col items-end shrink-0 gap-0.5">
                    <span className={`text-[10px] font-bold uppercase tracking-wide ${meta.color}`}>{meta.label}</span>
                    {result.price && <span className="text-[11px] text-amber-400 font-semibold">{result.price}</span>}
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="px-4 py-2 border-t border-white/10 text-[10px] text-slate-500">↑↓ navigate · Enter select · Esc close</div>
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div ref={dropdownRef} className="absolute top-full mt-2 left-0 min-w-[300px] bg-slate-900/98 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl px-4 py-5 z-[999] text-center animate-in fade-in duration-150">
          <p className="text-slate-300 text-sm">No results for <span className="text-orange-400 font-semibold">"{query}"</span></p>
          <p className="text-slate-500 text-xs mt-1">Try "Kedarnath", "Auli", "rafting" or "Char Dham"</p>
        </div>
      )}
    </div>
  );
};


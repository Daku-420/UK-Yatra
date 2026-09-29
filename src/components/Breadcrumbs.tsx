import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; to?: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center text-xs text-slate-600 py-4 overflow-x-auto hide-scrollbar" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-brand-orange text-slate-700 font-medium flex items-center gap-1 transition-colors shrink-0">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400 shrink-0" />
          {item.to ? (
            <Link to={item.to} className="hover:text-brand-orange text-slate-700 font-medium transition-colors shrink-0">
              {item.label}
            </Link>
          ) : (
            <span className="text-brand-orange font-bold truncate max-w-xs shrink-0">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

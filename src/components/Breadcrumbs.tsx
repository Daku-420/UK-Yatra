import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; to?: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const baseUrl = 'https://uk-yatra.vercel.app';
  
  const schemaList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      },
      ...items.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 2,
        name: item.label,
        item: item.to ? `${baseUrl}${item.to}` : undefined
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaList) }}
      />
      <nav className="flex items-center text-xs text-slate-600 py-4 overflow-x-auto hide-scrollbar" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-1 sm:space-x-2 list-none p-0 m-0">
          <li className="inline-flex items-center">
            <Link to="/" className="hover:text-brand-orange text-slate-700 font-medium flex items-center gap-1 transition-colors shrink-0">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="inline-flex items-center">
              <ChevronRight className="w-3.5 h-3.5 mx-1.5 sm:mx-2 text-slate-400 shrink-0" aria-hidden="true" />
              {item.to ? (
                <Link to={item.to} className="hover:text-brand-orange text-slate-700 font-medium transition-colors shrink-0">
                  {item.label}
                </Link>
              ) : (
                <span className="text-brand-orange font-bold truncate max-w-xs shrink-0" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

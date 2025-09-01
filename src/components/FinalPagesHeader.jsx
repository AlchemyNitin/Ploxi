import React from 'react';

// Shared header for final pages (Trust & Vision section)
const FinalPagesHeader = ({ onNavigate, activeTab }) => (
  <header className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-3">
        <h1 className="text-xl font-bold text-brand-black">Trust & Vision</h1>
        <nav className="flex space-x-4">
          <button
            onClick={() => onNavigate('compliance')}
            className={`px-3 py-2 font-medium text-sm rounded-md transition-colors ${
              activeTab === 'compliance'
                ? 'bg-brand-blue text-white'
                : 'text-brand-teal hover:bg-brand-beige hover:text-brand-black'
            }`}
          >
            Compliance
          </button>
          <button
            onClick={() => onNavigate('integrations')}
            className={`px-3 py-2 font-medium text-sm rounded-md transition-colors ${
              activeTab === 'integrations'
                ? 'bg-brand-blue text-white'
                : 'text-brand-teal hover:bg-brand-beige hover:text-brand-black'
            }`}
          >
            Integrations
          </button>
        </nav>
      </div>
    </div>
  </header>
);

export default FinalPagesHeader;

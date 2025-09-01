import React from 'react';

// Shared header for project-related pages
// Provides consistent title and navigation for a specific project
const ProjectHeader = ({ onNavigate, activeTab }) => (
  <header className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-3">
        <h1 className="text-xl font-bold text-brand-black">
          Project: Rooftop Solar Installation
        </h1>
        <nav className="flex space-x-4">
          <button
            onClick={() => onNavigate('projectManagement')}
            className={`px-3 py-2 font-medium text-sm rounded-md transition-colors ${
              activeTab === 'management'
                ? 'bg-brand-blue text-white'
                : 'text-brand-teal hover:bg-brand-beige hover:text-brand-black'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => onNavigate('financialIntelligence')}
            className={`px-3 py-2 font-medium text-sm rounded-md transition-colors ${
              activeTab === 'financials'
                ? 'bg-brand-blue text-white'
                : 'text-brand-teal hover:bg-brand-beige hover:text-brand-black'
            }`}
          >
            Financials
          </button>
        </nav>
      </div>
    </div>
  </header>
);

export default ProjectHeader;

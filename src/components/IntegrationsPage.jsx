import React from 'react';

// Shared header for final pages
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

const IntegrationsPage = ({ onNavigate }) => {
  const integrationCategories = [
    {
      title: 'Enterprise Resource Planning',
      logos: ['SAP', 'Oracle'],
    },
    {
      title: 'Customer Relationship Management',
      logos: ['Salesforce', 'HubSpot'],
    },
    {
      title: 'Accounting & Finance',
      logos: ['Tally', 'QuickBooks'],
    },
    {
      title: 'IoT & Data Platforms',
      logos: ['IoT Sensors', 'Satellite Data'],
    },
  ];

  return (
    <div className="min-h-screen bg-brand-white">
      <FinalPagesHeader onNavigate={onNavigate} activeTab="integrations" />
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Page Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-brand-black">
              Seamless Integration Ecosystem
            </h1>
            <p className="text-lg text-brand-teal mt-2">
              Connect Ploxi with the tools you already use to automate data flow
              and enhance insights.
            </p>
          </header>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {integrationCategories.map((category, idx) => (
              <div key={category.title} className="space-y-6">
                <h2 className="text-2xl font-semibold text-brand-black border-b-2 border-brand-teal pb-2">
                  {category.title}
                </h2>
                {category.logos.map((logo, i) => (
                  <div
                    key={logo}
                    className={`flex items-center justify-between p-4 rounded-lg shadow ${
                      (i + idx) % 2 === 0
                        ? 'bg-brand-light-green'
                        : 'bg-white'
                    }`}
                  >
                    <span className="text-xl font-bold text-brand-black">
                      {logo}
                    </span>
                    <button className="bg-brand-beige text-brand-black font-bold py-2 px-4 rounded cursor-not-allowed">
                      Connect
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default IntegrationsPage;

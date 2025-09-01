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

const CompliancePage = ({ onNavigate }) => {
  const complianceData = [
    { title: 'GRI Standards', desc: 'The global standard for sustainability reporting on economic, environmental, and social impacts.', progress: 75, logo: 'GRI', color: 'bg-brand-blue' },
    { title: 'SASB Standards', desc: 'Industry-specific standards that identify the sustainability issues most relevant to investors.', progress: 60, logo: 'SASB', color: 'bg-brand-green' },
    { title: 'TCFD Framework', desc: 'Recommendations for disclosing climate-related financial risks and opportunities.', progress: 80, logo: 'TCFD', color: 'bg-brand-teal' },
    { title: 'India BRSR', desc: "Alignment with SEBI's Business Responsibility and Sustainability Reporting framework.", progress: 90, logo: 'BRSR', color: 'bg-brand-beige' },
  ];

  return (
    <div className="min-h-screen bg-brand-white">
      <FinalPagesHeader onNavigate={onNavigate} activeTab="compliance" />
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-brand-black">
              Streamlined Compliance & Reporting
            </h1>
            <p className="text-brand-teal mt-1">
              Track and report against major global and local frameworks with confidence.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceData.map(item => (
              <div
                key={item.title}
                className="bg-white border border-brand-light-green p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 ${item.color} text-white rounded-md flex items-center justify-center font-bold flex-shrink-0`}
                  >
                    {item.logo}
                  </div>
                  <h2 className="text-lg font-bold text-brand-black ml-4">{item.title}</h2>
                </div>
                <p className="text-sm text-brand-teal mb-4 h-24">{item.desc}</p>
                <div>
                  <div className="flex justify-between text-sm font-medium text-brand-black mb-1">
                    <span>Status</span>
                    <span>{item.progress}% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-brand-green h-2.5 rounded-full"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompliancePage;

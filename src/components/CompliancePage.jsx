import React, { useState } from 'react';

// 🔹 Checklist Item Component
const ChecklistItem = ({ status, text }) => {
  const statusIcons = {
    completed: (
      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    inProgress: (
      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"></path>
      </svg>
    ),
    upcoming: (
      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="9" strokeWidth="2"></circle>
      </svg>
    ),
  };

  const statusKey = status === '✔' ? 'completed' : status === '●' ? 'inProgress' : 'upcoming';

  return (
    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition">
      {statusIcons[statusKey]}
      <span className="text-gray-700">{text}</span>
    </div>
  );
};

// 🔹 Region-Specific Compliance Data
const complianceData = {
  India: {
    title: '🇮🇳 India: BRSR Mandate',
    description:
      "Track and manage your disclosures according to the Business Responsibility and Sustainability Reporting (BRSR) framework, mandated by SEBI.",
    checklist: [
      { status: '✔', text: 'Principle 1: Business Integrity & Ethics' },
      { status: '●', text: 'Principle 2: Sustainable & Safe Goods/Services' },
      { status: '✔', text: 'Principle 6: Environmental Responsibility' },
      { status: '○', text: 'Principle 8: Inclusive Development' },
    ],
  },
  UAE: {
    title: '🇦🇪 UAE: SCA & Exchange Guidelines',
    description:
      "Align your reporting with the Securities and Commodities Authority (SCA) and disclosure rules from DFM and ADX.",
    checklist: [
      { status: '✔', text: 'Governance Disclosures' },
      { status: '●', text: 'Environmental Metrics Reporting' },
      { status: '●', text: 'Social Contribution Data' },
      { status: '○', text: "DFM 'Comply or Explain' Submission" },
    ],
  },
  'United States': {
    title: '🇺🇸 United States: SEC Disclosures',
    description:
      "Manage disclosures in line with SEC guidance, focusing on climate-related financial risks and opportunities.",
    checklist: [
      { status: '✔', text: 'Climate-Related Risk Assessment' },
      { status: '●', text: 'GHG Emissions Data (Scope 1 & 2)' },
      { status: '✔', text: 'Governance of Climate Risks' },
      { status: '○', text: 'Financial Impact Analysis' },
    ],
  },
  'Asia Pacific': {
    title: '🇸🇬 Asia Pacific (SGX Example)',
    description:
      "Navigate key regional frameworks such as the mandatory sustainability reporting rules from the Singapore Exchange (SGX).",
    checklist: [
      { status: '✔', text: 'Board Diversity Policy' },
      { status: '●', text: 'Climate-Related Disclosures (TCFD aligned)' },
      { status: '✔', text: 'Sustainability Governance Structure' },
      { status: '○', text: 'Independent Assurance Statement' },
    ],
  },
};

// 🔹 Compliance Page Component
const CompliancePage = () => {
  const [selectedRegion, setSelectedRegion] = useState('India');
  const activeRegionData = complianceData[selectedRegion];

  return (
    <div className="min-h-screen bg-brand-gradient p-6 lg:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-10">
          <h1 className="text-3xl font-extrabold text-brand-black">
            Compliance & Frameworks
          </h1>
          <div className="mt-4 md:mt-0">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full md:w-64 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue text-gray-700"
            >
              <option>India</option>
              <option>UAE</option>
              <option>United States</option>
              <option>Asia Pacific</option>
            </select>
          </div>
        </div>

        {/* Region Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-10">
          <h2 className="text-2xl font-bold text-brand-black mb-2">
            {activeRegionData.title}
          </h2>
          <p className="text-gray-600 mb-6">{activeRegionData.description}</p>
          <div className="divide-y divide-gray-200">
            {activeRegionData.checklist.map((item, index) => (
              <ChecklistItem key={index} status={item.status} text={item.text} />
            ))}
          </div>
        </div>

        {/* Global Frameworks */}
        <div>
          <h2 className="text-2xl font-bold text-brand-black mb-6">
            Globally Recognized Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'GRI',
                desc: 'Track disclosures against the most widely used global standards for sustainability reporting.',
              },
              {
                title: 'SASB',
                desc: 'Report on industry-specific sustainability topics most material to investors.',
              },
              {
                title: 'TCFD',
                desc: 'Disclose climate-related financial risks and opportunities to stakeholders.',
              },
            ].map((framework, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition transform"
              >
                <h3 className="font-semibold text-lg mb-2 text-brand-black">
                  {framework.title}
                </h3>
                <p className="text-sm text-gray-600">{framework.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;

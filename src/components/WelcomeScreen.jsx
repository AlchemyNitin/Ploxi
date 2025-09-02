import React, { useState } from 'react';

const industries = [
  'Health Care', 'Financials', 'Technology & Communications',
  'Consumer Goods', 'Transportation', 'Infrastructure',
  'Extractives & Minerals Processing', 'Renewable Resources & Alternative Energy'
];

const WelcomeScreen = ({ onBuildDashboard }) => {
  const [region, setRegion] = useState('India');
  const [selectedIndustry, setSelectedIndustry] = useState('Technology & Communications');

  const handleSubmit = () => {
    onBuildDashboard({ region, industry: selectedIndustry });
  };

  return (
    <div className="min-h-screen bg-brand-gradient flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-10 text-center">
        
        {/* Logo */}
        <img 
          src="https://static.wixstatic.com/media/5f4a91_7d6f2906587845d08a57bdf88f5ed55d~mv2.jpg/v1/fill/w_262,h_200,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ploxi%20Final%20Logo.jpg" 
          alt="Ploxi Logo" 
          className="h-28 w-auto mx-auto mb-6 object-contain"
        />

        {/* Title */}
        <h1 className="text-4xl font-bold text-brand-black mb-3">Welcome to Ploxi</h1>
        <p className="text-gray-600 text-lg mb-10">
          Configure your sustainability dashboard based on your region and industry.
        </p>

        {/* Location Selector */}
        <div className="mb-10 max-w-md mx-auto text-left">
          <label 
            htmlFor="location" 
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Geographic Location
          </label>
          <select
            id="location"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-brand-blue text-base"
          >
            <option>India</option>
            <option>Asia-Pacific (Excl. India)</option>
            <option>Europe</option>
            <option>UAE</option>
            <option>America</option>
          </select>
        </div>

        {/* Industry Selector */}
        <div className="mb-12">
          <label className="block text-lg font-semibold text-gray-800 mb-4 text-center">
            Select Your Industry (based on SASB SICS™)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`p-4 text-sm rounded-lg border-2 transition-all duration-200 h-24 flex items-center justify-center text-center font-medium 
                  ${selectedIndustry === industry 
                    ? 'bg-brand-blue text-white border-brand-blue shadow-md' 
                    : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-700'}`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleSubmit}
          className="w-full max-w-md mx-auto bg-brand-green text-white 
                     font-bold py-4 px-6 rounded-lg 
                     hover:bg-opacity-90 transition duration-300 
                     text-lg shadow-lg"
        >
          View Dashboard
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;

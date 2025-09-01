import React from 'react';

// Helper components for star icons.
const StarIcon = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
      00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 
      2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 
      1.688-1.54 1.118l-2.8-2.034a1 1 0 
      00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
      1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 
      00.951-.69l1.07-3.292z" 
    />
  </svg>
);

const StarRating = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} filled={i < rating} />
    ))}
  </div>
);

const MarketplacePage = ({ onNavigateToCompare,onNavigateToProfile }) => {
  return (
    <div className="min-h-screen bg-brand-gradient p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-2xl font-bold text-brand-black mb-4 sm:mb-0">
            Marketplace: Energy Solutions
          </h1>
          <div className="relative w-full sm:w-64">
            <input
              type="search"
              placeholder="Search for vendors or services..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 
                  11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-1/4">
  <div className="bg-white p-6 rounded-lg shadow space-y-6 sticky top-24">
    {/* Location (Radio Buttons - only one selectable) */}
    <div>
      <h3 className="font-semibold text-brand-black mb-3">Location</h3>
      <label className="flex items-center space-x-2">
        <input type="radio" name="location" defaultChecked className="form-radio text-brand-blue" />
        <span>Pune</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="radio" name="location" className="form-radio text-brand-blue" />
        <span>Mumbai</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="radio" name="location" className="form-radio text-brand-blue" />
        <span>Bangalore</span>
      </label>
    </div>

    <hr />

    {/* Service Type (Checkboxes - multi-select allowed) */}
    <div>
      <h3 className="font-semibold text-brand-black mb-3">Service Type</h3>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox text-brand-blue" />
        <span>Rooftop Solar</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox text-brand-blue" />
        <span>Energy Storage</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox text-brand-blue" />
        <span>Energy Audits</span>
      </label>
    </div>

    <hr />

    {/* Certifications (Checkboxes - multi-select allowed) */}
    <div>
      <h3 className="font-semibold text-brand-black mb-3">Certifications</h3>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox text-brand-blue" />
        <span>ISO Certified</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox text-brand-blue" />
        <span>MNRE Approved</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox text-brand-blue" />
        <span>GreenPro Certified</span>
      </label>
    </div>

    <hr />

    {/* Compare Button */}
    <button
      onClick={onNavigateToCompare}
      className="w-full bg-brand-blue text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300"
    >
      Compare Selected (3)
    </button>
  </div>
</aside>


          {/* Vendor Cards */}
          <main className="w-full lg:w-3/4 space-y-6">
            {/* Vendor 1 */}
            <div
            onClick={onNavigateToProfile} className="bg-white p-6 rounded-lg shadow-md border-2 border-brand-blue cursor-pointer hover:scale-[1.01] transition-transform">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-brand-blue text-4xl font-bold flex-shrink-0">
                  ☀️
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-bold text-brand-black">Helios Solar</h2>
                    <StarRating rating={5} />
                  </div>
                  <p className="mt-2 text-gray-600">
                    Leading provider of commercial rooftop solar solutions. Specializing in end-to-end project
                    management for large-scale industrial clients in Maharashtra.
                  </p>
                </div>
              </div>
            </div>

            {/* Vendor 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-brand-blue">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-brand-green text-4xl font-bold flex-shrink-0">
                  🌿
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-bold text-brand-black">GreenSpark Renewables</h2>
                    <StarRating rating={4} />
                  </div>
                  <p className="mt-2 text-gray-600">
                    Experts in high-efficiency solar panel installation and energy storage solutions for
                    commercial and technology parks across India.
                  </p>
                </div>
              </div>
            </div>

            {/* Vendor 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-brand-blue">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-brand-teal text-4xl font-bold flex-shrink-0">
                  S
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-bold text-brand-black">SuryaTech Power</h2>
                    <StarRating rating={4} />
                  </div>
                  <p className="mt-2 text-gray-600">
                    Cost-effective solar solutions tailored for small to medium-sized enterprises (SMEs) with a
                    focus on rapid deployment and financing options.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;

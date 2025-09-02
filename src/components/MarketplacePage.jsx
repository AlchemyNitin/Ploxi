import React from 'react';

// Mock data for vendors. In a real app, this would be fetched and filtered from a database.
const allVendors = [
  {
    id: 1,
    name: 'Helios Solar',
    logo: '☀️', // Using emoji for simplicity
    rating: 5,
    description: "Leading provider of commercial rooftop solar solutions. Specializing in end-to-end project management for large-scale industrial clients in Maharashtra.",
    impact: '500+ MW installed',
    focus: 'Industrial & Commercial',
    location: 'Pune, MH',
    region: 'India'
  },
  {
    id: 2,
    name: 'GreenSpark Renewables',
    logo: '🌿',
    rating: 4,
    description: "Experts in high-efficiency solar panel installation and energy storage solutions for commercial and technology parks across India.",
    impact: '350+ MW installed',
    focus: 'Commercial & Tech Parks',
    location: 'Bangalore, KA',
    region: 'India'
  },
  {
    id: 3,
    name: 'SuryaTech Power',
    logo: 'S',
    rating: 4,
    description: "Cost-effective solar solutions tailored for small to medium-sized enterprises (SMEs) with a focus on rapid deployment and financing options.",
    impact: '200+ MW installed',
    focus: 'SME & Retail',
    location: 'Mumbai, MH',
    region: 'India'
  },
   {
    id: 4,
    name: 'EuroWind Systems',
    logo: '💨',
    rating: 5,
    description: "Pioneers in onshore wind turbine technology and development for the European industrial sector.",
    impact: '1.2 GW installed',
    focus: 'Wind Energy',
    location: 'Hamburg, DE',
    region: 'Europe'
  }
];


const MarketplacePage = ({ config, onNavigateToCompare, onNavigateToProfile }) => {
  // Set default config if none is passed, ensuring the component doesn't break.
  const { industry, region } = config || { industry: 'Manufacturing', region: 'India' };

  // Simulate filtering vendors based on the selected region from the welcome screen.
  const vendors = allVendors.filter(vendor => vendor.region === region);
  
  // Dynamically set filter options based on the selected region.
  const locationFilters = region === 'India' 
    ? ['Pune', 'Mumbai', 'Bangalore'] 
    : ['Hamburg', 'Paris', 'Madrid'];

  return (
    <div className="min-h-screen bg-brand-gradient p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with dynamic title */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-brand-black">Solutions for {industry} in {region}</h1>
            <p className="text-gray-500 mt-1">Discover pre-vetted vendors and services tailored to your needs.</p>
          </div>
          <div className="mt-4 md:mt-0 relative w-full md:w-72">
            <input 
              type="text" 
              placeholder="Search for vendors or services..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-blue focus:border-brand-blue"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar (Left) */}
          <aside className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow space-y-6">
              <h3 className="text-lg font-bold text-brand-black border-b pb-2">Filters</h3>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Location</h4>
                <div className="space-y-2">
                  {locationFilters.map(loc => (
                     <label key={loc} className="flex items-center">
                       <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue" defaultChecked={loc === 'Pune'}/>
                       <span className="ml-2 text-sm text-gray-600">{loc}</span>
                     </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Service</h4>
                 <div className="space-y-2">
                     <label className="flex items-center">
                       <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue" defaultChecked/>
                       <span className="ml-2 text-sm text-gray-600">Rooftop Solar</span>
                     </label>
                     <label className="flex items-center">
                       <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"/>
                       <span className="ml-2 text-sm text-gray-600">Energy Audit</span>
                     </label>
                 </div>
              </div>

               <div>
                <h4 className="font-semibold text-gray-700 mb-2">Vendor Rating</h4>
                <div className="flex items-center text-yellow-400">
                    {'★★★★☆'.split('').map((star, i) => <span key={i}>{star}</span>)}
                    <span className="ml-2 text-sm text-gray-600">4 stars & up</span>
                </div>
              </div>

            </div>
          </aside>

          {/* Vendor Cards (Right) */}
          <main className="w-full lg:w-3/4">
            <div className="space-y-6">
              {vendors.map(vendor => (
                <div 
                    key={vendor.id}
                    onClick={vendor.name === 'Helios Solar' ? onNavigateToProfile : undefined}
                    className={`bg-white rounded-lg shadow overflow-hidden transition-all duration-300 ${vendor.name === 'Helios Solar' ? 'cursor-pointer hover:shadow-xl hover:ring-2 hover:ring-brand-blue' : ''}`}
                >
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                          <div>
                              <div className="flex items-center gap-4">
                                  <div className="text-3xl">{vendor.logo}</div>
                                  <h2 className="text-xl font-bold text-brand-black">{vendor.name}</h2>
                              </div>
                              <div className="flex items-center mt-1 text-yellow-400">
                                  {'★'.repeat(vendor.rating)}{'☆'.repeat(5 - vendor.rating)}
                              </div>
                          </div>
                      </div>
                      <p className="text-gray-600 mt-4 text-sm">{vendor.description}</p>
                      <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                          <div><span className="font-semibold">Impact:</span> {vendor.impact}</div>
                          <div><span className="font-semibold">Focus:</span> {vendor.focus}</div>
                          <div><span className="font-semibold">Location:</span> {vendor.location}</div>
                      </div>
                    </div>
                </div>
              ))}
              {/* This message will show if the user selects a region with no mock vendors, like "North America" */}
              {vendors.length === 0 && (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                    <h3 className="text-lg font-semibold text-gray-700">No vendors found for your region.</h3>
                    <p className="text-gray-500 mt-2">Please expand your search criteria or check back later.</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;

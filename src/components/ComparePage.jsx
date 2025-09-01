import React from 'react';

// Helper component for star icons. It's good practice to keep this with the component that uses it,
// or move it to a shared 'icons.jsx' file in a larger project.
const StarIcon = ({ filled }) => (
  <svg className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const StarRating = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < rating} />)}
  </div>
);

const ComparePage = ({ onNavigateToProfile }) => {
  const vendors = [
    { name: 'Helios Solar', rating: 5, timeline: '4-6 Months', tech: 'Monocrystalline PERC Panels', impact: 'Highest CO2 Reduction', bestFor: 'Large-Scale Industrial' },
    { name: 'GreenSpark Renewables', rating: 4, timeline: '5-7 Months', tech: 'Bifacial Panels & Battery Storage', impact: 'High Energy Independence', bestFor: 'Commercial & Tech Parks' },
    { name: 'SuryaTech Power', rating: 4, timeline: '3-4 Months', tech: 'Polycrystalline Panels', impact: 'Fastest Payback Period', bestFor: 'Small to Medium Businesses' },
  ];

  return (
    <div className="min-h-screen bg-brand-gradient p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-brand-black">Compare Vendors</h1>
          <p className="text-gray-500 mt-1">Side-by-side comparison to help you choose the right partner.</p>
        </header>

        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-50 font-bold uppercase text-sm text-gray-600 border-b">Criteria</th>
                {vendors.map(vendor => (
                  <th key={vendor.name} className="py-4 px-6 bg-gray-50 font-bold uppercase text-sm text-gray-600 border-b">{vendor.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 border-b font-semibold">Vendor Rating</td>
                {vendors.map(vendor => <td key={vendor.name} className="py-4 px-6 border-b"><StarRating rating={vendor.rating} /></td>)}
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 border-b font-semibold">Avg. Project Timeline</td>
                {vendors.map(vendor => <td key={vendor.name} className="py-4 px-6 border-b">{vendor.timeline}</td>)}
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 border-b font-semibold">Key Technology</td>
                {vendors.map(vendor => <td key={vendor.name} className="py-4 px-6 border-b">{vendor.tech}</td>)}
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 border-b font-semibold">Sustainability Impact</td>
                {vendors.map(vendor => <td key={vendor.name} className="py-4 px-6 border-b">{vendor.impact}</td>)}
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 border-b font-semibold">Best For</td>
                {vendors.map(vendor => <td key={vendor.name} className="py-4 px-6 border-b">{vendor.bestFor}</td>)}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-brand-light-green text-brand-teal p-6 rounded-lg flex flex-col sm:flex-row items-center gap-4 shadow">
          <div className="text-4xl">💡</div>
          <div className="flex-grow text-center sm:text-left">
            <h3 className="font-bold text-lg">Recommendation</h3>
            <p>For the Pune factory's large-scale needs, <strong>Helios Solar</strong> appears to be the most suitable choice.</p>
          </div>
          <button onClick={onNavigateToProfile} className="w-full sm:w-auto bg-brand-green text-white font-bold py-2 px-6 rounded-md hover:bg-opacity-90 transition duration-300 flex-shrink-0">
            View Helios Solar Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComparePage;

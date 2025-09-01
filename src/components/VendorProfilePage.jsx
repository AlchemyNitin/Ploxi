import React from 'react';

// Helper components for star icons.
const StarIcon = ({ filled, className = 'w-5 h-5' }) => (
  <svg
    className={`${className} ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const StarRating = ({ rating, starClassName }) => (
  <div className="flex" role="img" aria-label={`${rating} out of 5 stars`}>
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} filled={i < rating} className={starClassName} />
    ))}
  </div>
);

const VendorProfilePage = ({ onNavigateToProject }) => {
  return (
    <div className="min-h-screen bg-brand-gradient p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start">
            <div>
              <div className="flex items-center gap-4">
                <div className="text-5xl">☀️</div>
                <h1 className="text-4xl font-bold text-brand-black">Helios Solar</h1>
              </div>
              <div className="text-gray-500 ml-16 flex items-center gap-2">
                <span>Pune, Maharashtra</span>
                <span>|</span>
                <StarRating rating={5} />
              </div>
            </div>
            <p className="mt-4 sm:mt-0 text-lg text-brand-teal italic">
              Powering Sustainable Futures for Industry Leaders
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-8">
            {/* About */}
            <section>
              <h2 className="text-2xl font-bold text-brand-black mb-3">About Helios Solar</h2>
              <p className="text-gray-700 leading-relaxed">
                Helios Solar is a premier engineering, procurement, and construction (EPC) firm
                specializing in high-capacity solar solutions for the industrial and manufacturing
                sectors. With over a decade of experience, we deliver end-to-end project management,
                ensuring seamless integration, maximum energy output, and significant long-term cost
                savings for our partners.
              </p>
            </section>

            {/* Proven Impact */}
            <section>
              <h2 className="text-2xl font-bold text-brand-black mb-4">Proven Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl mb-2">🏔️</div>
                  <h3 className="font-bold">500+ MW</h3>
                  <p className="text-sm text-gray-600">Installed Capacity</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl mb-2">💨</div>
                  <h3 className="font-bold">700,000+ Tonnes</h3>
                  <p className="text-sm text-gray-600">Annual CO2e Reduction</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl mb-2">💰</div>
                  <h3 className="font-bold">Up to 40%</h3>
                  <p className="text-sm text-gray-600">Reduction in Energy Costs</p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-2xl font-bold text-brand-black mb-3">Verified & Certified</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2 font-bold">✔</span>
                  ISO 9001: Quality Management
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2 font-bold">✔</span>
                  ISO 14001: Environmental Management
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2 font-bold">✔</span>
                  OHSAS 18001: Health & Safety
                </li>
              </ul>
            </section>

            {/* Testimonials */}
            <section>
              <h2 className="text-2xl font-bold text-brand-black mb-3">What Our Clients Say</h2>
              <blockquote className="bg-brand-light-green p-6 rounded-lg italic text-brand-teal shadow">
                <p>
                  "The professionalism and technical expertise of the Helios team were exceptional.
                  They managed the entire project flawlessly, and the rooftop solar installation at
                  our Pune plant has exceeded all performance expectations. They are a true partner
                  in our sustainability journey."
                </p>
                <footer className="text-right font-semibold mt-4 not-italic">
                  – Vikram Singh, Head of Operations, Fictional Manufacturing Corp.
                </footer>
              </blockquote>
            </section>
          </div>

          {/* Right Column */}
          <aside className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow overflow-hidden sticky top-24">
              <img
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Helios Solar rooftop solar panel installation in Pune"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <button
                  onClick={onNavigateToProject}
                  className="w-full bg-brand-green text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-90 focus:ring-2 focus:ring-brand-blue focus:outline-none transition duration-300 text-lg"
                >
                  Request a Quote
                </button>
                <a
                  href="/brochures/helios-solar.pdf"
                  className="block text-center mt-4 text-brand-blue hover:underline"
                  download
                >
                  Download Brochure (PDF)
                </a>
                <p className="text-center text-xs text-gray-500 mt-4">
                  Questions? Speak to an expert at +91 20 41XXXXXX
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default VendorProfilePage;

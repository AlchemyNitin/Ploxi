import React from 'react';

// Shared header for project-related pages
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

const FinancialIntelligencePage = ({ onNavigate, onNavigateToCompliance }) => {
  return (
    <div className="min-h-screen bg-brand-white">
      <ProjectHeader onNavigate={onNavigate} activeTab="financials" />
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-brand-black">
              Financial Intelligence
            </h1>
            <p className="text-brand-teal mt-1">
              Tracking the ROI of Your Sustainability Investments
            </p>
          </header>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: KPIs */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow text-center border border-brand-light-green">
                <h2 className="text-xl font-bold text-brand-black mb-2">
                  Investment Payback Period
                </h2>
                {/* Gauge Chart Simulation */}
                <div className="relative w-48 h-48 mx-auto">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      className="text-gray-200"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    ></path>
                    <path
                      className="text-brand-blue"
                      strokeDasharray="75, 100"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    ></path>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-brand-black">
                      4.8
                    </span>
                    <span className="text-lg text-brand-teal">Years</span>
                  </div>
                </div>
                <p className="text-sm text-brand-teal mt-2">
                  Projected to reach breakeven by Q4 2029.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow text-center border border-brand-light-green">
                <h2 className="text-xl font-bold text-brand-black mb-2">
                  Projected 10-Year ROI
                </h2>
                <p className="text-6xl font-bold text-brand-green">185%</p>
                <p className="text-sm text-brand-teal mt-2">
                  Based on current energy prices and projected operational
                  savings.
                </p>
              </div>
            </div>

            {/* Right Column: Line Chart */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow border border-brand-light-green">
              <h2 className="text-xl font-bold text-brand-black mb-4">
                Projected Cumulative Savings (Pune Solar Project)
              </h2>
              <div className="h-96 flex flex-col">
                <div className="flex-grow relative">
                  {/* Background Gradient Area */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-brand-light-green to-transparent"
                    style={{
                      clipPath:
                        'polygon(0 85%, 20% 70%, 40% 50%, 60% 40%, 80% 25%, 100% 0, 100% 100%, 0% 100%)',
                    }}
                  ></div>

                  {/* Savings Line */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,212 C100,175 200,125 300,100 C400,75 500,37 600,0"
                      stroke="#2A6041"
                      fill="none"
                      strokeWidth="3"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  {/* Data Callout */}
                  <div
                    className="absolute"
                    style={{ left: '48%', top: '48%' }}
                  >
                    <div className="w-3 h-3 bg-brand-green rounded-full -ml-1"></div>
                    <span className="bg-brand-green text-white text-xs font-bold px-2 py-1 rounded-full relative -top-8 -left-8">
                      ₹55 Lakhs
                    </span>
                  </div>
                </div>

                {/* Axes */}
                <div className="border-t border-gray-300 pt-2 flex justify-between text-sm text-brand-teal">
                  <span>Year 1</span>
                  <span>Year 2</span>
                  <span>...</span>
                  <span>Year 5</span>
                  <span>...</span>
                  <span>Year 10</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Button */}
          <div className="mt-8 text-right">
            <button
              onClick={onNavigateToCompliance}
              className="bg-brand-green text-white font-bold py-2 px-6 rounded-md hover:bg-opacity-90 transition duration-300"
            >
              Next: Review Compliance →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinancialIntelligencePage;

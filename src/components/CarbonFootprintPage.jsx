import React from "react";

// Chart Placeholder
const ChartPlaceholder = ({ title }) => (
  <div className="bg-gray-50 p-6 rounded-xl border border-dashed border-gray-300 h-64 flex items-center justify-center text-center">
    <p className="text-gray-400 font-medium">{title}</p>
  </div>
);

const CarbonFootprintPage = ({ onNavigate }) => {
  const scopeData = [
    { name: "Scope 1", value: 30, color: "bg-brand-teal" },
    { name: "Scope 2", value: 55, color: "bg-brand-blue" },
    { name: "Scope 3", value: 15, color: "bg-gray-400" },
  ];

  return (
    <div className="min-h-screen bg-brand-gradient p-6 sm:p-8 lg:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <button
            onClick={() => onNavigate("dashboard")}
            className="text-sm text-brand-blue hover:underline mb-3 inline-block"
          >
            &larr; Back to Dashboard
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-black">
            Carbon Footprint Details (GHG Protocol)
          </h1>
          <p className="text-gray-600 mt-2">
            Detailed breakdown of greenhouse gas emissions across all scopes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (Scopes) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Scope 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-brand-black">
                Scope 1: Direct Emissions
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Emissions from sources owned or controlled by the company.
              </p>
              <ChartPlaceholder title="[Bar Chart] Scope 1 Emissions by Source (e.g., Combustion, Mobile, Fugitive)" />
            </div>

            {/* Scope 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-brand-black">
                Scope 2: Indirect Emissions
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Emissions from purchased electricity, steam, heating, and cooling.
              </p>
              <ChartPlaceholder title="[Map/Chart] Scope 2 Emissions by Location" />
            </div>

            {/* Scope 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-brand-black">
                Scope 3: Indirect Value Chain Emissions
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Emissions from activities not owned or controlled by the company.
              </p>
              <ChartPlaceholder title="[Chart] Scope 3 Emissions by Category (e.g., Purchased Goods, Travel)" />
            </div>
          </div>

          {/* Right Column (Summary) */}
          <div className="space-y-8">
            {/* Total Emissions by Scope */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-brand-black mb-4">
                Total Emissions by Scope
              </h3>
              <div className="space-y-4">
                {scopeData.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">
                        {item.name}
                      </span>
                      <span className="font-semibold">{item.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`${item.color} h-3 rounded-full`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Metric */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="font-bold text-lg text-brand-black">
                Activity Metric
              </h3>
              <p className="text-3xl font-bold text-brand-blue mt-3">
                500,000
              </p>
              <p className="text-sm text-gray-500">Units Produced (YTD)</p>
            </div>

            {/* Normalized KPI */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="font-bold text-lg text-brand-black">
                Normalized KPI
              </h3>
              <p className="text-3xl font-bold text-brand-blue mt-3">
                25 tCO2e
              </p>
              <p className="text-sm text-gray-500">per 1,000 Units</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonFootprintPage;

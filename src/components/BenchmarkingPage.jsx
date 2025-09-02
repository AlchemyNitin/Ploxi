import React from 'react';

// Reusable Benchmark Chart
const BenchmarkChart = ({ metric, yourValue, industryMedian, top10, unit, lowerIsBetter = true }) => {
  const maxValue = Math.max(yourValue, industryMedian, top10) * 1.2;

  const getBarColor = (value) => {
    if (lowerIsBetter) {
      if (value <= top10) return 'bg-green-500';
      if (value <= industryMedian) return 'bg-yellow-500';
      return 'bg-red-500';
    } else {
      if (value >= top10) return 'bg-green-500';
      if (value >= industryMedian) return 'bg-yellow-500';
      return 'bg-red-500';
    }
  };

  const yourPerformanceColor = getBarColor(yourValue);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col">
      <h3 className="font-bold text-lg text-brand-black">{metric}</h3>
      <p className="text-sm text-gray-500 mb-4">{unit}</p>

      {/* Performance Bar */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-700">Your Performance</span>
          <span className={`text-sm font-bold ${yourPerformanceColor.replace('bg-', 'text-')}`}>
            {yourValue.toFixed(2)}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className={`${yourPerformanceColor} h-4 rounded-full transition-all`}
            style={{ width: `${(yourValue / maxValue) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Benchmarks displayed below */}
      <div className="mt-4 space-y-1 text-sm text-gray-600">
        <p><span className="font-semibold">Industry Median:</span> {industryMedian.toFixed(2)}</p>
        <p><span className="font-semibold text-green-600">Top 10%:</span> {top10.toFixed(2)}</p>
      </div>
    </div>
  );
};

const BenchmarkingPage = () => {
  return (
    <div className="min-h-screen bg-brand-gradient p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-brand-black">Benchmarking: Manufacturing Sector</h1>
          <p className="text-gray-500 mt-1">
            Comparing your ESG performance against industry peers.
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <BenchmarkChart
            metric="Carbon Intensity"
            unit="tCO2e / 1,000 Units Produced"
            yourValue={25.0}
            industryMedian={22.5}
            top10={15.2}
            lowerIsBetter={true}
          />
          <BenchmarkChart
            metric="Water Usage Intensity"
            unit="Megaliters / 1,000 Units Produced"
            yourValue={0.24}
            industryMedian={0.35}
            top10={0.18}
            lowerIsBetter={true}
          />
          <BenchmarkChart
            metric="Employee Safety (LTIFR)"
            unit="Lost Time Injury Frequency Rate"
            yourValue={0.85}
            industryMedian={1.10}
            top10={0.50}
            lowerIsBetter={true}
          />
        </div>

        {/* Info Card */}
        <div className="mt-8 bg-white/90 p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg text-brand-black mb-2">How to Interpret This Data</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            This page compares your key sustainability metrics against the median performance 
            and the top 10% of performers within your industry. The colored bar shows your company's 
            performance, while the benchmark values below allow you to easily see where you stand. 
            For these metrics, a lower value indicates better performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenchmarkingPage;

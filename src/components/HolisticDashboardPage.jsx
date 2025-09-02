import React, { useState } from 'react';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// 🔹 KPI Card
const KpiCard = ({ title, value, change, description, onClick }) => (
  <div
    className={`bg-white p-6 rounded-xl shadow-md transition-all ${
      onClick ? 'cursor-pointer hover:shadow-xl hover:ring-2 hover:ring-brand-blue' : ''
    }`}
    onClick={onClick}
  >
    <h3 className="text-sm font-semibold text-gray-600 truncate">{title}</h3>
    <p className="text-2xl font-bold text-brand-black mt-2">{value}</p>
    {change && (
      <p
        className={`text-sm font-semibold mt-2 ${
          change.startsWith('▲') ? 'text-red-500' : 'text-green-600'
        }`}
      >
        {change}
      </p>
    )}
    {description && <p className="text-xs text-gray-400 mt-2">{description}</p>}
  </div>
);

// 🔹 Sample data for charts
const carbonData = [
  { year: '2019', emissions: 14500 },
  { year: '2020', emissions: 13200 },
  { year: '2021', emissions: 12800 },
  { year: '2022', emissions: 12500 },
  { year: '2023', emissions: 12400 },
];

const energyMix = [
  { name: 'Renewable', value: 45 },
  { name: 'Grid Electricity', value: 40 },
  { name: 'Fossil Fuels', value: 15 },
];

const waterUsage = [
  { facility: 'Plant A', usage: 45 },
  { facility: 'Plant B', usage: 35 },
  { facility: 'Plant C', usage: 25 },
  { facility: 'Plant D', usage: 15 },
];

const wasteDiversion = [
  { year: '2019', diverted: 55 },
  { year: '2020', diverted: 60 },
  { year: '2021', diverted: 68 },
  { year: '2022', diverted: 72 },
  { year: '2023', diverted: 75 },
];

const COLORS = ['#34d399', '#60a5fa', '#fbbf24'];

const HolisticDashboardPage = ({ config, onNavigateToMarketplace, onNavigateToCarbon }) => {
  const { industry, region } = config || { industry: 'Manufacturing', region: 'India' };
  const [activeTab, setActiveTab] = useState('Environment');

  const tabs = [
    'Environment',
    'Social Capital',
    'Human Capital',
    'Business Model & Innovation',
    'Leadership & Governance',
  ];

  // 🔹 Tab Content
  const renderContent = () => {
    switch (activeTab) {
      case 'Environment':
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* ✅ Clickable KPI card */}
              <KpiCard
                title="GHG Emissions (Scope 1 & 2)"
                value="12,500 tCO2e"
                change="▲ 3% vs PY"
                onClick={onNavigateToCarbon}
              />
              <KpiCard title="Energy Consumption" value="2.5 GWh" change="▲ 8% vs PY" />
              <KpiCard title="Water Withdrawal" value="120 ML" change="▼ 2% vs PY" />
              <KpiCard title="Waste to Landfill" value="450 tonnes" change="▼ 5% vs PY" />

              {/* ✅ Replace placeholders with charts */}
              <div className="md:col-span-2 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Carbon Emissions Line Chart */}
                <div className="bg-white p-6 rounded-xl shadow-md h-64">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Carbon Emissions by Year</h4>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={carbonData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="emissions" stroke="#ef4444" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Energy Mix Pie Chart */}
                <div className="bg-white p-6 rounded-xl shadow-md h-64">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Energy Mix</h4>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={energyMix}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                      >
                        {energyMix.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Water Usage Bar Chart */}
                <div className="bg-white p-6 rounded-xl shadow-md h-64">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Water Usage by Facility</h4>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={waterUsage}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="facility" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="usage" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Waste Diversion Line Chart */}
                <div className="bg-white p-6 rounded-xl shadow-md h-64">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Waste Diversion Rate (%)</h4>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={wasteDiversion}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="diverted" stroke="#10b981" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <button
                onClick={onNavigateToMarketplace}
                className="bg-brand-green text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-600 transition-all shadow-md"
              >
                🌍 Explore Environmental Solutions
              </button>
            </div>
          </div>
        );

      // 🔹 Other tabs unchanged
      case 'Social Capital':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KpiCard title="Community Investment" value="₹85 Lakhs" change="▲ 10% vs PY" />
            <KpiCard title="Supply Chain Audits" value="92%" description="of Tier-1 suppliers audited" />
            <KpiCard title="Product Safety Recalls" value="0" change="Maintained" />
          </div>
        );

      case 'Human Capital':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KpiCard title="Employee Turnover" value="11.5%" change="▲ 1.2% vs PY" />
            <KpiCard title="Workplace Safety (LTIFR)" value="0.85" change="▼ 15% vs PY" />
            <KpiCard title="Diversity in Management" value="28%" description="% women in leadership" />
          </div>
        );

      case 'Business Model & Innovation':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KpiCard title="Revenue from Sustainable Products" value="18%" change="▲ 4% vs PY" />
            <KpiCard title="R&D in Green Tech" value="₹2.1 Cr" />
            <KpiCard title="Circular Economy Projects" value="4 Active" />
          </div>
        );

      case 'Leadership & Governance':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KpiCard title="ESG Oversight" value="Board-Level" />
            <KpiCard title="Ethics Training Completion" value="98%" />
            <KpiCard title="Whistleblower Reports" value="3 Filed" />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-brand-gradient p-6 lg:p-10">
      <div className="max-w-7xl mx-auto">
        {/* 🔹 Page Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-brand-black">
            ESG Dashboard for {industry} in {region}
          </h1>
          <p className="text-gray-500 mt-1">
            A holistic view of your sustainability performance, aligned with SASB dimensions.
          </p>
        </header>

        {/* 🔹 Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="flex space-x-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap py-3 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'border-brand-blue text-brand-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* 🔹 Tab Content */}
        <main>{renderContent()}</main>
      </div>
    </div>
  );
};

export default HolisticDashboardPage;

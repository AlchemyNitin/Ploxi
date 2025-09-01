import React from 'react';

const DashboardPage = ({ onNavigateToMarketplace, goal }) => {
    const TrendIcon = ({ direction }) => {
        const arrow = direction === 'up' ? 'M5 15l7-7 7 7' : 'M5 9l7 7 7-7';
        return (<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={arrow}></path></svg>);
    };
    const Trend = ({ direction, value, color }) => (<div className={`flex items-center text-sm font-semibold ${color}`}><TrendIcon direction={direction} />{value}</div>);
    
    // --- DYNAMIC DATA BASED ON GOAL ---
    const dashboardData = {
        Energy: {
            welcomeText: "reducing operational emissions by optimizing energy consumption.",
            kpis: [
                { title: 'Energy Consumption (YTD)', value: '2.5 GWh', trend: 'up', trendValue: '8%', color: 'text-red-500' },
                { title: 'Energy Cost', value: '₹1.2 Cr', trend: 'up', trendValue: '10%', color: 'text-red-500' },
                { title: 'Renewable Energy %', value: '15%', trend: 'up', trendValue: '2%', color: 'text-green-500' },
                { title: 'Grid Dependency', value: '85%', trend: 'down', trendValue: '1%', color: 'text-green-500' },
            ],
            primaryChartTitle: "Energy Consumption by Location (YTD)",
            primaryChartData: [ { label: 'Pune Factory', value: '1150 MWh', height: '100%', color: 'bg-red-500' }, { label: 'Bangalore R&D', value: '550 MWh', height: '48%', color: 'bg-brand-blue' }, { label: 'Mumbai HQ', value: '450 MWh', height: '39%', color: 'bg-brand-blue' }, { label: 'Delhi Office', value: '350 MWh', height: '30%', color: 'bg-brand-blue' } ],
            secondaryChartTitle: "Energy Mix",
            secondaryChartData: { background: 'conic-gradient(rgb(234 179 8) 0% 85%, #2A6041 85% 100%)', centerText: '15% Renewables', legend: [ { label: 'Grid Energy', color: 'bg-yellow-500', value: '85%' }, { label: 'Solar Power', color: 'bg-brand-green', value: '15%' } ] }
        },
        Water: {
            welcomeText: "improving water efficiency across your facilities.",
            kpis: [
                { title: 'Water Usage (YTD)', value: '120 ML', trend: 'down', trendValue: '2%', color: 'text-green-500' },
                { title: 'Water Cost', value: '₹45 L', trend: 'down', trendValue: '1%', color: 'text-green-500' },
                { title: 'Recycled Water Usage', value: '18%', trend: 'up', trendValue: '3%', color: 'text-green-500' },
                { title: 'Freshwater Dependency', value: '82%', trend: 'down', trendValue: '2%', color: 'text-green-500' },
            ],
            primaryChartTitle: "Water Usage by Location (YTD)",
            primaryChartData: [ { label: 'Pune Factory', value: '70 ML', height: '100%', color: 'bg-brand-blue' }, { label: 'Bangalore R&D', value: '25 ML', height: '35%', color: 'bg-red-500' }, { label: 'Mumbai HQ', value: '15 ML', height: '21%', color: 'bg-brand-blue' }, { label: 'Delhi Office', value: '10 ML', height: '14%', color: 'bg-brand-blue' } ],
            secondaryChartTitle: "Water Sources",
            secondaryChartData: { background: 'conic-gradient(#3b82f6 0% 82%, #10b981 82% 100%)', centerText: '18% Recycled', legend: [ { label: 'Municipal Supply', color: 'bg-blue-500', value: '82%' }, { label: 'Recycled On-site', color: 'bg-emerald-500', value: '18%' } ] }
        },
        Waste: {
            welcomeText: "increasing your waste diversion and recycling rates.",
            kpis: [
                { title: 'Waste Recycled', value: '75%', trend: 'up', trendValue: '3%', color: 'text-green-500' },
                { title: 'Waste to Landfill', value: '1,200 Tonnes', trend: 'down', trendValue: '5%', color: 'text-green-500' },
                { title: 'Hazardous Waste', value: '50 Tonnes', trend: 'up', trendValue: '1%', color: 'text-red-500' },
                { title: 'Waste Diversion Rate', value: '80%', trend: 'up', trendValue: '2%', color: 'text-green-500' },
            ],
            primaryChartTitle: "Waste Generation by Facility (Tonnes)",
            primaryChartData: [ { label: 'Pune Factory', value: '800 T', height: '100%', color: 'bg-red-500' }, { label: 'Bangalore R&D', value: '250 T', height: '31%', color: 'bg-brand-blue' }, { label: 'Mumbai HQ', value: '100 T', height: '12%', color: 'bg-brand-blue' }, { label: 'Delhi Office', value: '50 T', height: '6%', color: 'bg-brand-blue' } ],
            secondaryChartTitle: "Waste Composition",
            secondaryChartData: { background: 'conic-gradient(#ef4444 0% 20%, #f97316 20% 50%, #16a34a 50% 100%)', centerText: '20% Landfill', legend: [ { label: 'Landfill', color: 'bg-red-500', value: '20%' }, { label: 'Incineration', color: 'bg-orange-500', value: '30%' }, { label: 'Recycled', color: 'bg-green-600', value: '50%' } ] }
        },
        Air: {
            welcomeText: "tracking and reducing your Scope 1 & 2 air emissions.",
            kpis: [
                { title: 'Total CO2e Emissions (YTD)', value: '1,850 tonnes', trend: 'up', trendValue: '5%', color: 'text-red-500' },
                { title: 'Scope 1 Emissions', value: '462 tCO2e', trend: 'up', trendValue: '2%', color: 'text-red-500' },
                { title: 'Scope 2 Emissions', value: '1,202 tCO2e', trend: 'up', trendValue: '8%', color: 'text-red-500' },
                { title: 'Carbon Intensity', value: '0.5 tCO2e / unit', trend: 'down', trendValue: '3%', color: 'text-green-500' },
            ],
            primaryChartTitle: "CO2e Emissions vs. Target",
            primaryChartData: [ { label: 'Q1 Actual', value: '450 t', height: '90%', color: 'bg-brand-blue' }, { label: 'Q1 Target', value: '420 t', height: '84%', color: 'bg-gray-300' }, { label: 'Q2 Actual', value: '480 t', height: '96%', color: 'bg-red-500' }, { label: 'Q2 Target', value: '410 t', height: '82%', color: 'bg-gray-300' } ],
            secondaryChartTitle: "Emissions by Scope (YTD)",
            secondaryChartData: { background: 'conic-gradient(rgb(234 179 8) 0% 65%, rgb(59 130 246) 65% 90%, rgb(156 163 175) 90% 100%)', centerText: '1,850 tCO2e', legend: [ { label: 'Scope 2', color: 'bg-yellow-500', value: '65%' }, { label: 'Scope 1', color: 'bg-blue-500', value: '25%' }, { label: 'Scope 3', color: 'bg-gray-400', value: '10%' } ] }
        }
    };
    
    const currentData = dashboardData[goal] || dashboardData.Energy;

    return (
    <div className="min-h-screen bg-brand-gradient p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
            {/* --- Top Section --- */}
            <div>
                <header className="flex justify-between items-center mb-4"><h1 className="text-2xl font-bold text-brand-black">Executive Dashboard</h1><p className="text-sm text-gray-500">Data refreshed: August 19, 2025</p></header>
                <div className="bg-brand-light-green text-brand-teal p-4 rounded-lg mb-6 shadow-sm"><p>💡 Welcome, Ananya! We've prioritized your goal of {currentData.welcomeText}. Here's your current status.</p></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {currentData.kpis.map(kpi => (
                        <div key={kpi.title} className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-gray-500 text-sm font-medium">{kpi.title}</h2>
                            <p className="text-3xl font-bold text-brand-black mt-1">{kpi.value}</p>
                            <div className="mt-2"><Trend direction={kpi.trend} value={kpi.trendValue} color={kpi.color} /></div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-brand-black mb-4">{currentData.secondaryChartTitle}</h3>
                        <div className="relative flex items-center justify-center h-64">
                            <div className="absolute w-64 h-64 rounded-full" style={{ background: currentData.secondaryChartData.background }}></div>
                            <div className="relative w-40 h-40 bg-white rounded-full flex items-center justify-center text-center"><div><span className="text-2xl font-bold text-brand-black">{currentData.secondaryChartData.centerText}</span></div></div>
                        </div>
                        <div className="mt-4 space-y-2 text-sm text-gray-600">
                            {currentData.secondaryChartData.legend.map(item => (
                                <div key={item.label} className="flex items-center"><div className={`w-3 h-3 rounded-full ${item.color} mr-2`}></div>{item.label}: {item.value}</div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow flex flex-col">
                        <h3 className="text-lg font-semibold text-brand-black mb-4">{currentData.primaryChartTitle}</h3>
                        <div className="flex-grow flex items-end space-x-4 text-center">
                            {currentData.primaryChartData.map(item => (
                                <div key={item.label} className="flex-1">
                                    <div className={`${item.color} rounded-t-md`} style={{height: item.height}}></div>
                                    <p className="text-xs mt-1">{item.value}<br/>{item.label}</p>
                                </div>
                            ))}
                        </div>
                        <button onClick={onNavigateToMarketplace} className="mt-6 w-full sm:w-auto self-end bg-brand-green text-white font-bold py-2 px-6 rounded-md hover:bg-opacity-90 transition duration-300">Explore Solutions</button>
                    </div>
                </div>
            </div>

            {/* --- Other sections remain the same --- */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold text-brand-black mb-4">Active Project Portfolio</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead><tr className="border-b"><th className="p-2">Project Name</th><th className="p-2">Location</th><th className="p-2">Category</th><th className="p-2">Status</th><th className="p-2">Target Completion</th></tr></thead>
                        <tbody>
                            <tr className="border-b"><td className="p-2">Rooftop Solar Installation</td><td className="p-2">Pune</td><td className="p-2">Energy</td><td className="p-2"><span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">● In Progress</span></td><td className="p-2">Nov 2025</td></tr>
                            <tr className="border-b"><td className="p-2">Water Recycling Plant</td><td className="p-2">Bangalore</td><td className="p-2">Water</td><td className="p-2"><span className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">● On Track</span></td><td className="p-2">Q1 2026</td></tr>
                            <tr><td className="p-2">LED Lighting Retrofit</td><td className="p-2">Mumbai</td><td className="p-2">Energy</td><td className="p-2"><span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">✔ Completed</span></td><td className="p-2">Q2 2025</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl font-bold text-brand-black mb-4">Financial Snapshot</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow text-center"><h3 className="text-gray-500 text-sm font-medium">Projected 10-Year ROI</h3><p className="text-3xl font-bold text-brand-green mt-1">185%</p></div>
                        <div className="bg-white p-4 rounded-lg shadow text-center"><h3 className="text-gray-500 text-sm font-medium">Investment Payback</h3><p className="text-3xl font-bold text-brand-black mt-1">4.8 Years</p></div>
                        <div className="bg-white p-4 rounded-lg shadow text-center"><h3 className="text-gray-500 text-sm font-medium">YTD Savings</h3><p className="text-3xl font-bold text-brand-black mt-1">₹25 Lakhs</p></div>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-brand-black mb-4">Compliance Status</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow text-center"><h3 className="font-bold">GRI</h3><p className="text-2xl font-bold text-brand-blue mt-1">75%</p></div>
                        <div className="bg-white p-4 rounded-lg shadow text-center"><h3 className="font-bold">SASB</h3><p className="text-2xl font-bold text-brand-blue mt-1">60%</p></div>
                        <div className="bg-white p-4 rounded-lg shadow text-center"><h3 className="font-bold">TCFD</h3><p className="text-2xl font-bold text-brand-blue mt-1">80%</p></div>
                        <div className="bg-white p-4 rounded-lg shadow text-center"><h3 className="font-bold">BRSR</h3><p className="text-2xl font-bold text-brand-blue mt-1">90%</p></div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-bold text-brand-black mb-4">Opportunities & Alerts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-4 rounded-r-lg shadow">
                        <h3 className="font-bold">💡 New Rebate Available</h3>
                        <p className="text-sm">The Maharashtra state government has announced a new 15% subsidy for industrial battery storage solutions. <a href="#" className="font-semibold underline">Explore Vendors</a></p>
                    </div>
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-r-lg shadow">
                        <h3 className="font-bold">⚠️ High Water Usage</h3>
                        <p className="text-sm">Water consumption at the Bangalore R&D facility has increased by 12% month-over-month, exceeding projected targets. <a href="#" className="font-semibold underline">View Details</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default DashboardPage;

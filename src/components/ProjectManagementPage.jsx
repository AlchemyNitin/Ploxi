import React from 'react';

// Project Header with brand-consistent nav styling
const ProjectHeader = ({ onNavigate, activeTab }) => (
  <header className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-3">
        <h1 className="text-xl font-bold text-brand-black">Project: Rooftop Solar Installation</h1>
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

const ProjectManagementPage = ({ onNavigate }) => {
  // Data for the Gantt chart simulation
  const ganttPhases = [
    { name: 'Planning & Design', start: 2, end: 12, color: 'bg-blue-500' },
    { name: 'Procurement', start: 12, end: 22, color: 'bg-yellow-500' },
    { name: 'Installation', start: 22, end: 45, color: 'bg-red-500' },
    { name: 'Commissioning & Grid Sync', start: 45, end: 55, color: 'bg-purple-500' },
    { name: 'Project Handover', start: 55, end: 60, color: 'bg-green-500' },
  ];

  // Dynamic "today" marker (assume project runs from 0% to 60%)
  const projectStart = 0;
  const projectEnd = 60;
  const totalDuration = projectEnd - projectStart;
  const todayProgress = ((8 - projectStart) / totalDuration) * 100; // currently hardcoded to "day 8"
  // Replace `8` with actual days elapsed in a real app.

  return (
    <div className="min-h-screen bg-brand-gradient">
      <ProjectHeader onNavigate={onNavigate} activeTab="management" />
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Gantt Chart */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold text-brand-black mb-4">Project Timeline</h2>
              <div className="relative overflow-x-auto min-w-[600px]">
                {/* Timeline Labels */}
                <div className="flex justify-between text-sm text-gray-500 mb-2 px-2">
                  <span>Aug '25</span>
                  <span>Sep '25</span>
                  <span>Oct '25</span>
                  <span>Nov '25</span>
                  <span>Dec '25</span>
                </div>
                {/* Gantt Area */}
                <div className="space-y-3 relative border-t border-gray-200 pt-3 pb-6">
                  {ganttPhases.map(phase => (
                    <div key={phase.name} className="flex items-center">
                      <p className="w-1/4 text-sm font-medium text-gray-600 pr-2">{phase.name}</p>
                      <div className="w-3/4 relative h-8 bg-gray-200 rounded">
                        <div
                          className={`${phase.color} absolute h-full rounded`}
                          style={{ left: `${phase.start}%`, right: `${100 - phase.end}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  {/* Today Marker (restricted height to cover only bars) */}
                  {/* <div
                    className="absolute top-0 bottom-6 border-l-2 border-red-500 border-dashed"
                    style={{ left: `${todayProgress}%` }}
                  >
                    <span className="absolute top-0 -mt-5 -ml-4 text-xs text-red-500 font-bold">
                      Today
                    </span>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Right Column: Milestones & Budget */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold text-brand-black mb-4">Upcoming Milestones</h2>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-500">
                    <span className="text-green-500 mr-3 text-xl">✔</span>
                    Site Survey Complete
                    <span className="ml-auto text-xs font-medium">Aug 1, 2025</span>
                  </li>
                  <li className="flex items-center font-semibold text-brand-black">
                    <span className="text-blue-500 mr-3 text-xl">●</span>
                    Final Design Approval
                    <span className="ml-auto text-xs">Aug 15, 2025</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-gray-400 mr-3 text-xl">○</span>
                    Panel Procurement
                    <span className="ml-auto text-xs">Sep 10, 2025</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-gray-400 mr-3 text-xl">○</span>
                    Installation Start
                    <span className="ml-auto text-xs">Sep 20, 2025</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold text-brand-black mb-4">Budget Overview</h2>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Spent: ₹25,00,000</span>
                    <span className="text-gray-500">Total: ₹1,50,00,000</span>
                  </div>
                  <div
                    className="w-full bg-gray-200 rounded-full h-4"
                    aria-label="16.6% of budget spent"
                  >
                    <div className="bg-brand-blue h-4 rounded-full" style={{ width: '16.6%' }}></div>
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Status: <span className="font-semibold text-green-600">On Track</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectManagementPage;

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Reusable Milestone Component
const Milestone = ({ status, text, date }) => {
  const statusIcons = {
    completed: (
      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 
          00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 
          00-1.414 1.414l2 2a1 1 0 001.414 
          0l4-4z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    inProgress: (
      <svg className="w-5 h-5 text-yellow-500 animate-spin" fill="none" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 
          0 0 5.373 0 12h4zm2 
          5.291A7.962 7.962 0 014 12H0c0 
          3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    ),
    upcoming: (
      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
      </svg>
    ),
  };

  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 pt-1">{statusIcons[status]}</div>
      <div>
        <p
          className={`font-medium ${
            status === "completed" ? "text-gray-400 line-through" : "text-gray-800"
          }`}
        >
          {text}
        </p>
        <p className="text-xs text-gray-500">Due: {date}</p>
      </div>
    </div>
  );
};

// Dummy Gantt Data (phases with start & duration in weeks)
const ganttData = [
  { phase: "Site Survey", start: 0, duration: 2 },
  { phase: "Design Approval", start: 2, duration: 3 },
  { phase: "Procurement", start: 5, duration: 2 },
  { phase: "Installation", start: 7, duration: 4 },
  { phase: "Testing & Handover", start: 11, duration: 2 },
];

// Transform for stacked bars (start + duration)
const ganttTransformed = ganttData.map((d) => ({
  phase: d.phase,
  start: d.start,
  duration: d.duration,
}));

const ProjectManagementPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Project Dashboard: Rooftop Solar Installation
            </h1>
            <p className="text-gray-500 mt-1">Tracking progress for the Pune Factory initiative.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700">
              <svg className="-ml-1 mr-1.5 h-2 w-2 text-yellow-500" fill="currentColor" viewBox="0 0 8 8">
                <circle cx="4" cy="4" r="3" />
              </svg>
              In Progress
            </span>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline / Gantt */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Project Timeline</h3>
            <p className="text-sm text-gray-500 mb-4">
              Visual timeline showing project phases from August to December 2025.
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={ganttTransformed}
                  layout="vertical"
                  margin={{ top: 5, right: 20, left: 80, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" label={{ value: "Weeks", position: "insideBottomRight", offset: -5 }} />
                  <YAxis type="category" dataKey="phase" />
                  <Tooltip />
                  {/* Transparent offset bar */}
                  <Bar dataKey="start" stackId="a" fill="transparent" />
                  {/* Duration bar */}
                  <Bar dataKey="duration" stackId="a" fill="#3b82f6" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Milestones */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Milestones</h3>
              <div className="space-y-4">
                <Milestone status="completed" text="Site Survey Complete" date="Aug 1, 2025" />
                <Milestone status="inProgress" text="Final Design Approval" date="Sep 15, 2025" />
                <Milestone status="upcoming" text="Panel Procurement" date="Oct 10, 2025" />
                <Milestone status="upcoming" text="Installation Start" date="Oct 20, 2025" />
              </div>
            </div>

            {/* Budget */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Budget Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-600">Spent to Date</span>
                  <span className="font-semibold text-gray-800">₹25,00,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: "16.6%" }}></div>
                </div>
                <div className="text-right text-xs text-gray-500">Total Budget: ₹1,50,00,000</div>
                <div className="text-center pt-2">
                  <span className="text-sm font-medium text-green-600">✅ Status: On Track</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagementPage;

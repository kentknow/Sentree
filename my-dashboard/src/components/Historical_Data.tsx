"use client";

import Sidebar from "@/components/Sidebar";
import { 
  Bell, 
  LogOut, 
  User as UserIcon, 
  MoreVertical 
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Mock data for 12 Months
const historicalChartData = [
  { month: "Jan", "Node-01": 35, "Node-02": 80, "Node-03": 50, temp: 22, humidity: 60, avg: 20 },
  { month: "Feb", "Node-01": 95, "Node-02": 55, "Node-03": 90, temp: 32, humidity: 75, avg: 24 },
  { month: "Mar", "Node-01": 45, "Node-02": 95, "Node-03": 60, temp: 30, humidity: 85, avg: 22 },
  { month: "Apr", "Node-01": 100, "Node-02": 60, "Node-03": 95, temp: 28, humidity: 50, avg: 21 },
  { month: "May", "Node-01": 40, "Node-02": 38, "Node-03": 80, temp: 20, humidity: 40, avg: 18 },
  { month: "Jun", "Node-01": 70, "Node-02": 85, "Node-03": 50, temp: 25, humidity: 65, avg: 22 },
  { month: "Jul", "Node-01": 90, "Node-02": 92, "Node-03": 40, temp: 34, humidity: 70, avg: 25 },
  { month: "Aug", "Node-01": 85, "Node-02": 45, "Node-03": 80, temp: 33, humidity: 60, avg: 24 },
  { month: "Sep", "Node-01": 100, "Node-02": 95, "Node-03": 42, temp: 30, humidity: 55, avg: 23 },
  { month: "Oct", "Node-01": 55, "Node-02": 90, "Node-03": 85, temp: 26, humidity: 70, avg: 21 },
  { month: "Nov", "Node-01": 40, "Node-02": 45, "Node-03": 90, temp: 22, humidity: 80, avg: 19 },
  { month: "Dec", "Node-01": 95, "Node-02": 98, "Node-03": 40, temp: 30, humidity: 60, avg: 22 },
];

export default function HistoricalData() {
  return (
    <div className="flex min-h-screen bg-[#0d1f1a] text-slate-100 font-sans">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Top App Bar */}
        <header className="h-16 border-b border-emerald-900/40 px-8 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">Historical Data</span>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-emerald-900/30 text-slate-300">
              <UserIcon className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-emerald-900/30 text-slate-300">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-emerald-900/30 text-slate-300">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Dashboard Body with Teal Gradient */}
        <div className="p-8 flex-1 bg-gradient-to-br from-[#12a18d] via-[#0d7869] to-[#0a483f] rounded-tl-3xl shadow-inner overflow-y-auto">
          <h1 className="text-4xl font-semibold text-emerald-100 tracking-wide mb-6">
            Historical Data
          </h1>

          {/* Filter Controls Bar */}
          <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <span>Nodes to be Viewed:</span>
              <select className="bg-[#122822] text-slate-100 border border-emerald-700/50 rounded-full px-4 py-1 text-xs focus:outline-none cursor-pointer">
                <option>All Nodes</option>
                <option>Node-01</option>
                <option>Node-02</option>
                <option>Node-03</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span>Date Range:</span>
              <select className="bg-[#122822] text-slate-100 border border-emerald-700/50 rounded-full px-4 py-1 text-xs focus:outline-none cursor-pointer">
                <option>12 Months</option>
                <option>6 Months</option>
                <option>30 Days</option>
                <option>7 Days</option>
              </select>
            </div>
          </div>

          {/* Dashboard Layout: Charts + Analytics Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left 2 Columns: Graphs */}
            <div className="lg:col-span-2 space-y-6">
              {/* Soil Moisture Trend Card */}
              <div className="bg-[#182622]/90 border border-emerald-800/40 rounded-3xl p-5 shadow-xl">
                <h2 className="text-xl font-medium text-slate-100 mb-4">
                  Soil Moisture Trend
                </h2>
                <div className="h-60 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={historicalChartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#253a34" vertical={false} />
                      <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} tickLine={false} />
                      <YAxis stroke="#94a3b8" fontSize={11} domain={[0, 100]} tickLine={false} />
                      <Tooltip contentStyle={{ backgroundColor: "#12201c", borderColor: "#059669", borderRadius: "8px" }} />
                      <Legend wrapperStyle={{ fontSize: "11px", paddingTop: "10px" }} />
                      <Line type="monotone" dataKey="Node-01" stroke="#d97706" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="Node-02" stroke="#22c55e" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="Node-03" stroke="#06b6d4" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Temperature & Humidity Card */}
              <div className="bg-[#182622]/90 border border-emerald-800/40 rounded-3xl p-5 shadow-xl relative">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-medium text-slate-100">
                    Temperature & Humidity
                  </h2>
                  <button className="text-slate-400 hover:text-white">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                <div className="h-60 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={historicalChartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#253a34" vertical={false} />
                      <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} tickLine={false} />
                      <YAxis stroke="#94a3b8" fontSize={11} domain={[10, 35]} tickLine={false} />
                      <Tooltip contentStyle={{ backgroundColor: "#12201c", borderColor: "#059669", borderRadius: "8px" }} />
                      <Legend wrapperStyle={{ fontSize: "11px", paddingTop: "10px" }} />
                      <Line type="monotone" dataKey="avg" name="Average" stroke="#d97706" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="temp" name="Temperature" stroke="#22c55e" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="humidity" name="Humidity" stroke="#06b6d4" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Right Column: Key Analytics Insights */}
            <div className="bg-[#182622]/90 border border-emerald-800/40 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-slate-100 mb-6">
                  Key Analytics Insights
                </h2>

                {/* Maximum Temperature Card */}
                <div className="bg-[#111e1a] border border-emerald-900/50 rounded-2xl p-4 mb-4">
                  <p className="text-xs text-slate-300 mb-2">Maximum Temperature:</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-[#1f332c] text-slate-200 text-xs px-3 py-1 rounded-full border border-emerald-800/30">
                      Node-03
                    </span>
                    <span className="bg-[#1f332c] text-slate-200 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-800/30">
                      30°C
                    </span>
                  </div>
                </div>

                {/* Maximum Humidity Card */}
                <div className="bg-[#111e1a] border border-emerald-900/50 rounded-2xl p-4 mb-4">
                  <p className="text-xs text-slate-300 mb-2">Maximum Humidity:</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-[#1f332c] text-slate-200 text-xs px-3 py-1 rounded-full border border-emerald-800/30">
                      Node-02
                    </span>
                    <span className="bg-[#1f332c] text-slate-200 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-800/30">
                      50%
                    </span>
                  </div>
                </div>

                {/* Maximum VWC Card */}
                <div className="bg-[#111e1a] border border-emerald-900/50 rounded-2xl p-4 mb-6">
                  <p className="text-xs text-slate-300 mb-2">
                    Maximum VWC (volumetric water content):
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="bg-[#1f332c] text-slate-200 text-xs px-3 py-1 rounded-full border border-emerald-800/30">
                      Node-01
                    </span>
                    <span className="bg-[#1f332c] text-slate-200 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-800/30">
                      80%
                    </span>
                  </div>
                </div>

                {/* Averages Section */}
                <div className="space-y-4 pt-2 border-t border-emerald-900/40">
                  <div>
                    <p className="text-xs text-slate-300 mb-1">Average Temperature</p>
                    <span className="inline-block bg-[#1f332c] text-slate-200 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-800/30">
                      20°C
                    </span>
                  </div>

                  <div>
                    <p className="text-xs text-slate-300 mb-1">Average Humidity</p>
                    <span className="inline-block bg-[#1f332c] text-slate-200 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-800/30">
                      30%
                    </span>
                  </div>

                  <div>
                    <p className="text-xs text-slate-300 mb-1">Average Soil Moisture</p>
                    <span className="inline-block bg-[#1f332c] text-slate-200 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-800/30">
                      50%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
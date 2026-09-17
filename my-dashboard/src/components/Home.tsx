"use client";

import Sidebar from "@/components/Sidebar";
import { 
  Bell, 
  LogOut, 
  User as UserIcon, 
  CheckCircle2, 
  Signal, 
  Droplets, 
  AlertTriangle 
} from "lucide-react";

export default function HomeOverview() {
  return (
    <div className="flex min-h-screen bg-[#0d1f1a] text-slate-100 font-sans">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Top App Bar */}
        <header className="h-16 border-b border-emerald-900/40 px-8 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">Home/Overview</span>
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
          
          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left 2 Columns: Key Metrics & Active Warnings */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Key Metrics Section */}
              <div className="bg-[#182622]/90 border border-emerald-800/40 rounded-3xl p-6 shadow-xl">
                <h1 className="text-3xl font-semibold text-emerald-100 tracking-wide mb-6">
                  Key Metrics
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Total Active Nodes */}
                  <div className="bg-[#111e1a] border border-emerald-900/50 rounded-2xl p-5 relative">
                    <div className="flex items-center gap-2 text-slate-300 text-sm mb-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span>Total Active Nodes</span>
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">4/4</div>
                    <div className="flex items-center gap-1 text-xs text-amber-400">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>1 warning</span>
                    </div>
                  </div>

                  {/* Ave Temp & Humidity */}
                  <div className="bg-[#111e1a] border border-emerald-900/50 rounded-2xl p-5">
                    <div className="text-slate-300 text-sm mb-2">
                      Ave Temp & Humidity
                    </div>
                    <div className="flex items-center justify-around mt-3">
                      <div className="text-3xl font-bold text-white">
                        20°C
                      </div>
                      <div className="h-8 w-[1px] bg-emerald-800/60" />
                      <div className="text-3xl font-bold text-white">
                        30%
                      </div>
                    </div>
                  </div>

                  {/* Network Uptime */}
                  <div className="bg-[#111e1a] border border-emerald-900/50 rounded-2xl p-5">
                    <div className="flex items-center gap-2 text-slate-300 text-sm mb-2">
                      <Signal className="w-4 h-4 text-emerald-400" />
                      <span>Network Uptime</span>
                    </div>
                    <div className="text-4xl font-bold text-white mt-3">99%</div>
                  </div>

                  {/* Ave Soil Moisture */}
                  <div className="bg-[#111e1a] border border-emerald-900/50 rounded-2xl p-5">
                    <div className="flex items-center gap-2 text-slate-300 text-sm mb-2">
                      <Droplets className="w-4 h-4 text-cyan-400" />
                      <span>Ave Soil Moisture</span>
                    </div>
                    <div className="text-4xl font-bold text-white mt-3">40%</div>
                  </div>
                </div>
              </div>

              {/* Active Warnings & Alert Summaries */}
              <div className="bg-[#182622]/90 border border-emerald-800/40 rounded-3xl p-6 shadow-xl">
                <h2 className="text-xl font-semibold text-slate-100 mb-4">
                  Active Warnings & Alert Summaries
                </h2>

                {/* Warnings Section */}
                <div className="mb-4">
                  <div className="flex justify-between items-center bg-[#111e1a] px-4 py-2 rounded-t-xl border-b border-emerald-900/50 text-xs text-amber-400 font-medium">
                    <span>Warnings</span>
                    <span>▼</span>
                  </div>
                  <div className="bg-[#0e1714] rounded-b-xl p-3 space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-amber-400">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>Node-02: Low Battery (10%)</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-400">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>Node-03: Communication Failure</span>
                    </div>
                  </div>
                </div>

                {/* Alerts Section */}
                <div>
                  <div className="flex justify-between items-center bg-[#111e1a] px-4 py-2 rounded-t-xl border-b border-emerald-900/50 text-xs text-rose-500 font-medium">
                    <span>Alerts</span>
                    <span>▼</span>
                  </div>
                  <div className="bg-[#0e1714] rounded-b-xl p-3 space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-rose-500 font-medium">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>Node-01: High Temperature Alert</span>
                    </div>
                    <div className="flex items-center gap-2 text-rose-500 font-medium">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>Node-02: DHT22 sensor disconnected</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: MiniMap */}
            <div className="bg-[#182622]/90 border border-emerald-800/40 rounded-3xl p-6 shadow-xl flex flex-col">
              <h2 className="text-sm font-semibold text-slate-200 mb-4">
                MiniMap: Location of Plot
              </h2>
              
              {/* Map View Container */}
              <div className="flex-1 min-h-[300px] w-full bg-[#111e1a] rounded-2xl overflow-hidden border border-emerald-900/50 relative">
                <iframe
                  title="Plot Location Map"
                  src="https://maps.google.com/maps?q=14.5995,120.9842&z=13&output=embed"
                  className="w-full h-full min-h-[320px] border-0 opacity-80 hover:opacity-100 transition"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
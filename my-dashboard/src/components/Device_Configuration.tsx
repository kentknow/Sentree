"use client";

import Sidebar from "@/components/Sidebar";
import { 
  Bell, 
  LogOut, 
  User as UserIcon, 
  Calendar, 
  AlertTriangle, 
  Thermometer, 
  Droplets, 
  Battery, 
  Wind 
} from "lucide-react";

export default function DeviceConfiguration() {
  return (
    <div className="flex min-h-screen bg-[#0d1f1a] text-slate-100 font-sans">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Top Header Bar */}
        <header className="h-16 border-b border-emerald-900/40 px-8 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">Device Configuration</span>
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

        {/* Dashboard Body */}
        <div className="p-8 flex-1 bg-gradient-to-br from-[#12a18d] via-[#0d7869] to-[#0a483f] rounded-tl-3xl shadow-inner overflow-y-auto">
          <h1 className="text-3xl font-semibold text-emerald-100 tracking-wide mb-6">
            Sentree: Device & Network Configuration
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Left Panel: Threshold Configuration */}
            <div className="bg-[#182622]/90 border border-emerald-800/40 rounded-3xl p-6 shadow-xl space-y-6">
              <h2 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Threshold Configuration
              </h2>

              {/* Soil & Moisture Thresholds */}
              <div>
                <p className="text-sm font-medium text-slate-200 mb-3">Soil & Moisture Thresholds</p>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <span className="w-12">Low</span>
                    <input type="range" defaultValue={10} min={0} max={100} className="w-full accent-emerald-400 h-1.5 bg-[#0e1714] rounded-lg cursor-pointer" />
                    <span className="w-10 bg-[#111e1a] px-2 py-0.5 rounded text-center border border-emerald-900/50">10%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-12">Normal</span>
                    <input type="range" defaultValue={30} min={0} max={100} className="w-full accent-emerald-400 h-1.5 bg-[#0e1714] rounded-lg cursor-pointer" />
                    <span className="w-10 bg-[#111e1a] px-2 py-0.5 rounded text-center border border-emerald-900/50">30%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-12">High</span>
                    <input type="range" defaultValue={40} min={0} max={100} className="w-full accent-emerald-400 h-1.5 bg-[#0e1714] rounded-lg cursor-pointer" />
                    <span className="w-10 bg-[#111e1a] px-2 py-0.5 rounded text-center border border-emerald-900/50">40%</span>
                  </div>
                </div>
              </div>

              {/* Air Temperature Limits */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-slate-200">Air Temperature Limits</p>
                  <Thermometer className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <span className="w-12">min</span>
                    <input type="range" defaultValue={20} min={0} max={50} className="w-full accent-emerald-400 h-1.5 bg-[#0e1714] rounded-lg cursor-pointer" />
                    <span className="w-10 bg-[#111e1a] px-2 py-0.5 rounded text-center border border-emerald-900/50">20°C</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-12">max</span>
                    <input type="range" defaultValue={35} min={0} max={50} className="w-full accent-emerald-400 h-1.5 bg-[#0e1714] rounded-lg cursor-pointer" />
                    <span className="w-10 bg-[#111e1a] px-2 py-0.5 rounded text-center border border-emerald-900/50">35°C</span>
                  </div>
                </div>
              </div>

              {/* Humidity Range */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-slate-200">Humidity Range</p>
                  <Droplets className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <span className="w-12">min</span>
                    <input type="range" defaultValue={30} min={0} max={100} className="w-full accent-emerald-400 h-1.5 bg-[#0e1714] rounded-lg cursor-pointer" />
                    <span className="w-10 bg-[#111e1a] px-2 py-0.5 rounded text-center border border-emerald-900/50">30%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-12">max</span>
                    <input type="range" defaultValue={32} min={0} max={100} className="w-full accent-emerald-400 h-1.5 bg-[#0e1714] rounded-lg cursor-pointer" />
                    <span className="w-10 bg-[#111e1a] px-2 py-0.5 rounded text-center border border-emerald-900/50">32%</span>
                  </div>
                </div>
              </div>

              {/* Battery Alert Threshold */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-slate-200">Battery Alert Threshold</p>
                  <Battery className="w-4 h-4 text-amber-400" />
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <span className="w-12">max</span>
                  <input type="range" defaultValue={10} min={0} max={100} className="w-full accent-emerald-400 h-1.5 bg-[#0e1714] rounded-lg cursor-pointer" />
                  <span className="w-10 bg-[#111e1a] px-2 py-0.5 rounded text-center border border-emerald-900/50">10%</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 flex justify-center">
                <button className="w-full py-2.5 rounded-full border border-emerald-400 text-emerald-100 font-medium hover:bg-emerald-900/40 transition text-sm">
                  Save Thresholds
                </button>
              </div>
            </div>

            {/* Right Panel: MQTT Sensor Node Calibration */}
            <div className="space-y-6">
              <div className="bg-[#182622]/90 border border-emerald-800/40 rounded-3xl p-6 shadow-xl space-y-5">
                <h2 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  MQTT Sensor Node Calibration
                </h2>

                {/* Node 001 Box */}
                <div className="bg-[#111e1a] border border-emerald-900/50 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>NODE - 001 <span className="text-amber-400/90">(Calibration Status: Last 3 Days)</span></span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Calibration Date:</span>
                      <div className="flex items-center gap-2 bg-[#0a1210] px-3 py-1 rounded border border-emerald-900/60 text-slate-300">
                        <span>8/28/2026</span>
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Reference Instrument ID:</span>
                      <input type="text" placeholder="" className="w-36 bg-[#0a1210] px-3 py-1 rounded border border-emerald-900/60 text-slate-300 focus:outline-none" />
                    </div>

                    <div>
                      <span className="text-slate-400 block mb-1">Calibrated Factors:</span>
                      <div className="flex gap-2 text-slate-300">
                        <span className="bg-[#0a1210] px-2.5 py-1 rounded border border-emerald-900/60">Soil: 0</span>
                        <span className="bg-[#0a1210] px-2.5 py-1 rounded border border-emerald-900/60">Temp: 0</span>
                        <span className="bg-[#0a1210] px-2.5 py-1 rounded border border-emerald-900/60">Hum: 0</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-1.5 rounded-full bg-[#0d7869] hover:bg-[#12a18d] text-white text-xs font-medium transition">
                    Run Recalibration Wizard
                  </button>

                  <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                    <span>Last Recalibration Report:</span>
                    <span className="bg-[#0a1210] px-3 py-0.5 rounded border border-emerald-900/60 text-slate-300">&gt;&gt;</span>
                  </div>
                </div>

                {/* Node 002 Box */}
                <div className="bg-[#111e1a] border border-emerald-900/50 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-amber-400">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>NODE - 002 (Calibration Status: Due Soon)</span>
                  </div>
                  <p className="text-xs text-amber-300/80 pl-6">
                    Warning Calibration Status: Due Soon
                  </p>
                  <div className="flex justify-end">
                    <button className="py-1 px-4 rounded-full bg-[#0d7869] hover:bg-[#12a18d] text-white text-xs font-medium transition">
                      Start Calibration Now
                    </button>
                  </div>
                </div>

                {/* All Sensor Nodes Overview */}
                <div className="bg-[#111e1a] border border-emerald-900/50 rounded-2xl p-4 space-y-3">
                  <h3 className="text-xs font-semibold text-slate-300">All Sensor Nodes</h3>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span className="text-slate-300">NODE - 001</span>
                      </div>
                      <span className="bg-emerald-900/50 text-emerald-300 px-3 py-0.5 rounded-full border border-emerald-700/50">Normal</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span className="text-slate-300">NODE - 002</span>
                      </div>
                      <span className="bg-amber-900/50 text-amber-300 px-3 py-0.5 rounded-full border border-amber-700/50">Warning</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                        <span className="text-slate-300">NODE - 003</span>
                      </div>
                      <span className="bg-rose-950/60 text-rose-300 px-3 py-0.5 rounded-full border border-rose-800/50">Calibrating</span>
                    </div>
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
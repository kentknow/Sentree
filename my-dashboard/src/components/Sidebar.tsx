"use client";

import { 
  Home, 
  Activity, 
  History, 
  Bell, 
  Settings, 
  Users, 
  Radio 
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-emerald-900/40 p-6 flex flex-col justify-between bg-[#0b1a16] min-h-screen">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full border border-emerald-400/50 flex items-center justify-center bg-emerald-950/40 text-emerald-400">
            <Radio className="w-6 h-6" />
          </div>
          <span className="text-3xl font-bold tracking-wide text-white">Sentree</span>
        </div>

        {/* Nav Items */}
        <nav className="space-y-3">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-emerald-900/30 transition">
            <Home className="w-5 h-5" />
            <span>Home/Overview</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-emerald-900/50 text-emerald-300 font-medium border-l-4 border-emerald-400">
            <Activity className="w-5 h-5" />
            <span>Node Readings</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-emerald-900/30 transition">
            <History className="w-5 h-5" />
            <span>Historical Data</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-emerald-900/30 transition">
            <Bell className="w-5 h-5" />
            <span>Alerts & Incidents</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-emerald-900/30 transition">
            <Settings className="w-5 h-5" />
            <span>Device Configuration</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-emerald-900/30 transition">
            <Users className="w-5 h-5" />
            <span>User Management</span>
          </a>
        </nav>
      </div>
    </aside>
  );
}
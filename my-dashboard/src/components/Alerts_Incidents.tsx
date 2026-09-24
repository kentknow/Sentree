"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import {
  Bell,
  LogOut,
  User as UserIcon,
  Search,
  LayoutGrid,
  Calendar,
  AlertTriangle,
  Clock,
  CheckCircle2,
  BellRing,
  X,
  Thermometer,
  Droplets,
  Wifi,
  BatteryLow,
  Sprout,
} from "lucide-react";

type Status = "Active" | "Acknowledged" | "Resolved";

interface Alert {
  id: string;
  dateTime: string;
  type: string;
  description: string;
  nodeId: string;
  location: string;
  status: Status;
  currentValue: string;
  threshold: string;
  recommendedAction: string;
  icon: React.ElementType;
  notifications: {
    sms: { number: string; status: "Sent" | "Pending" };
    email: { address: string; status: "Sent" | "Pending" };
    dashboard: { status: "Viewed" | "Unread" };
  };
}

const alertsData: Alert[] = [
  {
    id: "1",
    dateTime: "October 8 | 9:38 AM",
    type: "Low soil moisture",
    description: "Soil moisture below threshold",
    nodeId: "Node 01",
    location: "Plot A - West",
    status: "Active",
    currentValue: "12%",
    threshold: "< 15.0%",
    recommendedAction: "Check irrigation system and schedule watering for the affected plot.",
    icon: Sprout,
    notifications: {
      sms: { number: "+63 9XX XXX XXXX", status: "Sent" },
      email: { address: "user@example.com", status: "Sent" },
      dashboard: { status: "Viewed" },
    },
  },
  {
    id: "2",
    dateTime: "October 15 | 10:47 PM",
    type: "High temperature",
    description: "Temperature above threshold",
    nodeId: "Node 02",
    location: "Plot A - East",
    status: "Active",
    currentValue: "33.8°C",
    threshold: "> 32.0°C",
    recommendedAction: "Check site for possible heat stress and ensure adequate water supply for affected trees.",
    icon: Thermometer,
    notifications: {
      sms: { number: "+63 9XX XXX XXXX", status: "Sent" },
      email: { address: "user@example.com", status: "Sent" },
      dashboard: { status: "Viewed" },
    },
  },
  {
    id: "3",
    dateTime: "October 29 | 3:59 AM",
    type: "Communication failure",
    description: "No data received for 1 hour",
    nodeId: "Node 01",
    location: "Plot B - West",
    status: "Acknowledged",
    currentValue: "No signal",
    threshold: "> 30 min offline",
    recommendedAction: "Inspect the node's gateway connection and battery, then restart if needed.",
    icon: Wifi,
    notifications: {
      sms: { number: "+63 9XX XXX XXXX", status: "Sent" },
      email: { address: "user@example.com", status: "Sent" },
      dashboard: { status: "Viewed" },
    },
  },
  {
    id: "4",
    dateTime: "November 5 | 7:03 AM",
    type: "Low Battery",
    description: "Battery level at 20%",
    nodeId: "Node 01",
    location: "Plot A - West",
    status: "Resolved",
    currentValue: "20%",
    threshold: "< 25%",
    recommendedAction: "Replace or recharge the node's battery pack during the next maintenance visit.",
    icon: BatteryLow,
    notifications: {
      sms: { number: "+63 9XX XXX XXXX", status: "Sent" },
      email: { address: "user@example.com", status: "Sent" },
      dashboard: { status: "Viewed" },
    },
  },
  {
    id: "5",
    dateTime: "November 17 | 11:02 PM",
    type: "Possible drought stress",
    description: "Soil moisture and temperature trend",
    nodeId: "Node 03",
    location: "Plot B - East",
    status: "Resolved",
    currentValue: "18% / 31.2°C",
    threshold: "< 20% & > 30°C",
    recommendedAction: "Monitor closely over the next 48 hours and increase watering frequency if the trend continues.",
    icon: Droplets,
    notifications: {
      sms: { number: "+63 9XX XXX XXXX", status: "Sent" },
      email: { address: "user@example.com", status: "Sent" },
      dashboard: { status: "Viewed" },
    },
  },
];

export default function AlertsIncidents() {
  const [query, setQuery] = useState("");
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);

  const getStatusBadge = (status: Status) => {
    switch (status) {
      case "Active":
        return "bg-rose-950/60 text-rose-300 border-rose-800/50";
      case "Acknowledged":
        return "bg-amber-900/50 text-amber-300 border-amber-700/50";
      case "Resolved":
        return "bg-emerald-900/50 text-emerald-300 border-emerald-700/50";
    }
  };

  const activeCount = alertsData.filter((a) => a.status === "Active").length;
  const pendingCount = alertsData.filter((a) => a.status === "Acknowledged").length;
  const resolvedCount = alertsData.filter((a) => a.status === "Resolved").length;

  const filteredAlerts = alertsData.filter(
    (a) =>
      a.type.toLowerCase().includes(query.toLowerCase()) ||
      a.nodeId.toLowerCase().includes(query.toLowerCase()) ||
      a.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-[#0d1f1a] text-slate-100 font-sans">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative">
        {/* Top Header Bar */}
        <header className="h-16 border-b border-emerald-900/40 px-8 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">Alerts & Incidents</span>
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
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-semibold text-emerald-100 tracking-wide">
                Alerts & Incidents
              </h1>
              <p className="text-sm text-emerald-100/70 mt-1">
                View and manage system alerts and incidents across nodes.
              </p>
            </div>
            <button className="flex items-center gap-2 bg-[#111e1a]/80 border border-emerald-900/50 rounded-full px-4 py-2 text-xs text-slate-200">
              <Calendar className="w-4 h-4" />
              Last 7 days
            </button>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-rose-950/50 border border-rose-800/40 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-rose-300 text-sm mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Active Alerts</span>
              </div>
              <div className="text-3xl font-bold text-rose-400">{activeCount}</div>
            </div>

            <div className="bg-amber-950/50 border border-amber-800/40 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-amber-300 text-sm mb-2">
                <Clock className="w-4 h-4" />
                <span>Pending</span>
              </div>
              <div className="text-3xl font-bold text-amber-400">{pendingCount}</div>
            </div>

            <div className="bg-[#111e1a]/80 border border-emerald-900/50 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-emerald-300 text-sm mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Resolved</span>
              </div>
              <div className="text-3xl font-bold text-emerald-400">{resolvedCount}</div>
            </div>

            <div className="bg-[#111e1a]/80 border border-emerald-900/50 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-slate-300 text-sm mb-2">
                <BellRing className="w-4 h-4" />
                <span>Total Alerts</span>
              </div>
              <div className="text-3xl font-bold text-white">{alertsData.length}</div>
            </div>
          </div>

          {/* Alert List Card */}
          <div className="bg-[#182622]/90 border border-emerald-800/40 rounded-3xl shadow-xl overflow-hidden">
            {/* Card Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-900/40">
              <h2 className="text-sm font-semibold text-slate-100">Alert List</h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-[#0f1c18] border border-emerald-900/50 rounded-full px-3 py-1.5">
                  <Search className="w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search alerts..."
                    className="bg-transparent text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none w-36"
                  />
                </div>
                <button className="p-2 rounded-lg bg-[#0f1c18] border border-emerald-900/50 text-slate-300 hover:bg-emerald-900/30">
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#2f4a43] text-slate-100 text-xs uppercase tracking-wide">
                    <th className="text-left font-semibold px-6 py-3">Date & Time</th>
                    <th className="text-left font-semibold px-6 py-3">Alert Type</th>
                    <th className="text-left font-semibold px-6 py-3">Node ID</th>
                    <th className="text-left font-semibold px-6 py-3">Location</th>
                    <th className="text-left font-semibold px-6 py-3">Status</th>
                    <th className="text-left font-semibold px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAlerts.map((alert, idx) => (
                    <tr
                      key={alert.id}
                      className={`text-slate-200 text-xs ${
                        idx % 2 === 0 ? "bg-[#152420]" : "bg-[#122019]"
                      } hover:bg-emerald-900/20 transition`}
                    >
                      <td className="px-6 py-3.5 whitespace-nowrap text-slate-400">{alert.dateTime}</td>
                      <td className="px-6 py-3.5">
                        <p className="font-medium text-slate-100">{alert.type}</p>
                        <p className="text-slate-400">{alert.description}</p>
                      </td>
                      <td className="px-6 py-3.5 whitespace-nowrap">{alert.nodeId}</td>
                      <td className="px-6 py-3.5 whitespace-nowrap text-slate-400">{alert.location}</td>
                      <td className="px-6 py-3.5 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-medium border ${getStatusBadge(
                            alert.status
                          )}`}
                        >
                          {alert.status}
                        </span>
                      </td>
                      <td className="px-6 py-3.5 whitespace-nowrap">
                        <button
                          onClick={() => setSelectedAlert(alert)}
                          className="text-emerald-400 hover:text-emerald-300 font-medium"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredAlerts.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-6 py-6 text-center text-xs text-slate-400">
                        No alerts match your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Alert Details Modal */}
        {selectedAlert && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
            <div className="w-full max-w-md bg-[#12271f] border border-emerald-800/50 rounded-3xl shadow-2xl overflow-hidden">
              {/* Modal Header */}
              <div className="flex items-start justify-between px-6 pt-6 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-950/60 border border-rose-800/50 flex items-center justify-center text-rose-300">
                    <selectedAlert.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{selectedAlert.type}</h3>
                    <p className="text-xs text-slate-400">{selectedAlert.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-medium border ${getStatusBadge(
                      selectedAlert.status
                    )}`}
                  >
                    {selectedAlert.status}
                  </span>
                  <button
                    onClick={() => setSelectedAlert(null)}
                    className="p-1 rounded-full hover:bg-emerald-900/40 text-slate-400"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Details List */}
              <div className="px-6 py-4 border-t border-emerald-900/40 space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Node ID</span>
                  <span className="text-slate-100 font-medium">{selectedAlert.nodeId}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Location</span>
                  <span className="text-slate-100 font-medium">{selectedAlert.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Detected At</span>
                  <span className="text-slate-100 font-medium">{selectedAlert.dateTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Current Value</span>
                  <span className="text-slate-100 font-medium">{selectedAlert.currentValue}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Threshold</span>
                  <span className="text-sky-400 font-medium">{selectedAlert.threshold}</span>
                </div>
              </div>

              {/* Recommended Action */}
              <div className="px-6 py-4 border-t border-emerald-900/40">
                <p className="text-xs font-semibold text-slate-200 mb-1.5">Recommended Action</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {selectedAlert.recommendedAction}
                </p>
              </div>

              {/* Notification Recipients */}
              <div className="px-6 py-4 border-t border-emerald-900/40 space-y-2.5">
                <p className="text-xs font-semibold text-slate-200 mb-1.5">Notification Recipients</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">SMS</span>
                  <span className="text-slate-300">{selectedAlert.notifications.sms.number}</span>
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-medium bg-emerald-900/50 text-emerald-300 border border-emerald-700/50">
                    {selectedAlert.notifications.sms.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Email</span>
                  <span className="text-slate-300">{selectedAlert.notifications.email.address}</span>
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-medium bg-emerald-900/50 text-emerald-300 border border-emerald-700/50">
                    {selectedAlert.notifications.email.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Dashboard</span>
                  <span className="text-slate-300">—</span>
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-medium bg-emerald-900/50 text-emerald-300 border border-emerald-700/50">
                    {selectedAlert.notifications.dashboard.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

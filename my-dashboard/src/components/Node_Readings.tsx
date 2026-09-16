"use client";

import Sidebar from "@/components/Sidebar";
import { 
  Bell, 
  Settings, 
  LogOut, 
  User as UserIcon,
  Trash2,
  Clock,
  Wifi
} from "lucide-react";

interface SensorNode {
  id: string;
  name: string;
  soilMoisture: { value: string; status: "Good" | "Moderate" | "Danger" };
  airTemp: { value: string; status: "Good" | "Moderate" | "Danger" };
  humidity: { value: string; status: "Good" | "Moderate" | "Danger" };
  devices: { name: string; online: boolean }[];
  batteryLevel: number;
}

const nodesData: SensorNode[] = [
  {
    id: "1",
    name: "NODE-01",
    soilMoisture: { value: "100%", status: "Good" },
    airTemp: { value: "30°C", status: "Good" },
    humidity: { value: "100%", status: "Good" },
    devices: [
      { name: "Soil Moisture Probe", online: true },
      { name: "Air & Humidity Sensor", online: false },
    ],
    batteryLevel: 65,
  },
  {
    id: "2",
    name: "NODE-02",
    soilMoisture: { value: "10%", status: "Danger" },
    airTemp: { value: "30°C", status: "Good" },
    humidity: { value: "100%", status: "Good" },
    devices: [
      { name: "Soil Moisture Probe", online: true },
      { name: "Air & Humidity Sensor", online: true },
    ],
    batteryLevel: 70,
  },
  {
    id: "3",
    name: "NODE-03",
    soilMoisture: { value: "50%", status: "Moderate" },
    airTemp: { value: "30°C", status: "Good" },
    humidity: { value: "100%", status: "Good" },
    devices: [
      { name: "Soil Moisture Probe", online: false },
      { name: "Air & Humidity Sensor", online: false },
    ],
    batteryLevel: 55,
  },
];

export default function NodeReadings() {
  const getStatusColor = (status: "Good" | "Moderate" | "Danger") => {
    switch (status) {
      case "Good":
        return "text-emerald-400";
      case "Moderate":
        return "text-amber-400";
      case "Danger":
        return "text-rose-500 font-bold";
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0d1f1a] text-slate-100 font-sans">
      {/* Extracted Sidebar */}
      <Sidebar />

      {/* Main Content Dashboard */}
      <main className="flex-1 flex flex-col">
        {/* Top App Bar */}
        <header className="h-16 border-b border-emerald-900/40 px-8 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">Node Reading</span>
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
          <h1 className="text-4xl font-semibold text-emerald-100 tracking-wide mb-8">
            Node Readings
          </h1>

          {/* Node Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {nodesData.map((node) => (
              <div
                key={node.id}
                className="bg-[#2a3835]/90 backdrop-blur border border-emerald-800/40 rounded-3xl p-6 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <h2 className="text-2xl font-bold tracking-wider text-slate-100 mb-6">
                    {node.name}
                  </h2>

                  {/* Metrics Table Header */}
                  <div className="grid grid-cols-3 gap-2 text-center text-xs text-slate-300 mb-2">
                    <span>Soil Moisture</span>
                    <span>Air Temp</span>
                    <span>Humidity</span>
                  </div>

                  {/* Metrics Values */}
                  <div className="grid grid-cols-3 gap-2 text-center text-sm font-semibold mb-1">
                    <span>{node.soilMoisture.value}</span>
                    <span>{node.airTemp.value}</span>
                    <span>{node.humidity.value}</span>
                  </div>

                  {/* Metrics Status Labels */}
                  <div className="grid grid-cols-3 gap-2 text-center text-xs font-medium mb-6">
                    <span className={getStatusColor(node.soilMoisture.status)}>
                      {node.soilMoisture.status}
                    </span>
                    <span className={getStatusColor(node.airTemp.status)}>
                      {node.airTemp.status}
                    </span>
                    <span className={getStatusColor(node.humidity.status)}>
                      {node.humidity.status}
                    </span>
                  </div>

                  {/* Attached Devices */}
                  <div className="bg-[#1f2b28] rounded-xl p-3 mb-6 border border-emerald-900/30">
                    <p className="text-xs text-slate-400 mb-2">Attached Devices</p>
                    {node.devices.map((device, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs py-1">
                        <span className="text-slate-200">{device.name}</span>
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            device.online ? "bg-emerald-400 shadow-[0_0_8px_#34d399]" : "bg-rose-500"
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Battery Health Indicator */}
                  <div className="mb-6">
                    <p className="text-xs text-slate-300 mb-2">Battery Health</p>
                    <div className="relative w-full h-4 rounded-full bg-gradient-to-r from-red-600 via-yellow-400 to-emerald-500">
                      <div
                        className="absolute top-1/2 -translate-y-1/2 -ml-2"
                        style={{ left: `${node.batteryLevel}%` }}
                      >
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-amber-400 mx-auto -mt-2" />
                        <div className="w-1 h-5 bg-amber-400 rounded-sm" />
                      </div>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-300 mt-1">
                      <span>0%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div>
                  <p className="text-xs text-slate-300 mb-2">Actions</p>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-600/60 hover:bg-slate-600 text-[10px] text-slate-100 transition">
                      <Settings className="w-4 h-4 mb-1" />
                      Configure Node
                    </button>
                    <button className="flex flex-col items-center justify-center p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-[10px] text-white transition">
                      <Clock className="w-4 h-4 mb-1" />
                      Alert History
                    </button>
                    <button className="flex flex-col items-center justify-center p-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-[10px] text-white transition">
                      <Trash2 className="w-4 h-4 mb-1" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Network Summary Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a2925]/90 border border-emerald-800/40 rounded-2xl p-4">
              <h3 className="text-xs font-semibold text-slate-300 mb-3">Network Summary</h3>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-[#121e1b] p-2 rounded-lg border border-emerald-900/30">
                  <p className="text-slate-400">Node-01</p>
                  <p className="text-slate-200">Signal: Good</p>
                  <div className="w-3 h-3 bg-emerald-400 rounded-full mx-auto mt-1" />
                </div>
                <div className="bg-[#121e1b] p-2 rounded-lg border border-emerald-900/30">
                  <p className="text-slate-400">Node-02</p>
                  <p className="text-slate-200">Signal: Moderate</p>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mx-auto mt-1" />
                </div>
                <div className="bg-[#121e1b] p-2 rounded-lg border border-emerald-900/30">
                  <p className="text-slate-400">Node-01</p>
                  <p className="text-slate-200">Signal: Bad</p>
                  <div className="w-3 h-3 bg-rose-500 rounded-full mx-auto mt-1" />
                </div>
              </div>
            </div>

            <div className="bg-[#1a2925]/90 border border-emerald-800/40 rounded-2xl p-4 flex flex-col justify-between">
              <h3 className="text-xs font-semibold text-slate-300">Network Summary</h3>
              <div className="flex items-center justify-between text-xs text-slate-200">
                <span>Internet Node-01</span>
                <Wifi className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Cellular Data Usage :</span>
                <span className="text-slate-200 font-bold">10 GB</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Gateway Status:</span>
                <span className="text-emerald-400 font-semibold">Online</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Network Provider:</span>
                <span className="text-slate-200">GOMO(Globe)</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
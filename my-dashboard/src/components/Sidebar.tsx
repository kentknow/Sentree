"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const navItems = [
    { name: "Home/Overview", href: "/", icon: Home },
    { name: "Node Readings", href: "/node-readings", icon: Activity },
    { name: "Historical Data", href: "/historical-data", icon: History },
    { name: "Alerts & Incidents", href: "/", icon: Bell },
    { name: "Device Configuration", href: "/device-configuration", icon: Settings },
    { name: "User Management", href: "/", icon: Users },
  ];

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
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
                  isActive
                    ? "bg-emerald-900/50 text-emerald-300 font-medium border-l-4 border-emerald-400"
                    : "text-slate-300 hover:bg-emerald-900/30"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
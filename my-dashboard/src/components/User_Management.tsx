"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import {
  Bell,
  LogOut,
  User as UserIcon,
  Search,
  LayoutGrid,
  Plus,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  X,
  Eye,
  EyeOff,
  Info,
} from "lucide-react";

type Role = "Administrator" | "Field Technician" | "Viewer";

interface AppUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  lastLogin: string;
}

const usersData: AppUser[] = [
  { id: "1", name: "Jillianne Cireneo", email: "jilliannecireneo@email.com", role: "Administrator", lastLogin: "August 23 | 7:38 AM" },
  { id: "2", name: "Christian Estremos", email: "christianestremos@email.com", role: "Administrator", lastLogin: "August 23 | 10:49 AM" },
  { id: "3", name: "Paul Laraze", email: "paularaze@email.com", role: "Administrator", lastLogin: "August 24 | 1:48 PM" },
  { id: "4", name: "Olive Reforba", email: "olivereforba@email.com", role: "Administrator", lastLogin: "August 24 | 2:03 PM" },
  { id: "5", name: "Ryu Perez", email: "ryuperez@email.com", role: "Field Technician", lastLogin: "August 25 | 11:24 AM" },
  { id: "6", name: "Ren Dela Cruz", email: "rendelacruz@email.com", role: "Viewer", lastLogin: "August 27 | 4:20 PM" },
  { id: "7", name: "Hans Reyes", email: "ryuperez@email.com", role: "Field Technician", lastLogin: "August 29 | 7:23 AM" },
];

export default function UserManagement() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const totalPages = 6;

  const [showAddUser, setShowAddUser] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [newUser, setNewUser] = useState({ fullName: "", email: "", role: "", password: "" });

  const closeModal = () => {
    setShowAddUser(false);
    setShowPassword(false);
    setNewUser({ fullName: "", email: "", role: "", password: "" });
  };

  const handleAddUser = () => {
    // Wire this up to your API/database call.
    console.log("New user:", newUser);
    closeModal();
  };

  const getRoleBadge = (role: Role) => {
    switch (role) {
      case "Administrator":
        return "bg-emerald-900/50 text-emerald-300 border-emerald-700/50";
      case "Field Technician":
        return "bg-fuchsia-950/60 text-fuchsia-300 border-fuchsia-800/50";
      case "Viewer":
        return "bg-sky-950/60 text-sky-300 border-sky-800/50";
    }
  };

  const filteredUsers = usersData.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-[#0d1f1a] text-slate-100 font-sans">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative">
        {/* Top Header Bar */}
        <header className="h-16 border-b border-emerald-900/40 px-8 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">User Management</span>
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
            User Management
          </h1>

          {/* Users Card */}
          <div className="bg-[#182622]/90 border border-emerald-800/40 rounded-3xl shadow-xl overflow-hidden">
            {/* Card Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-900/40">
              <h2 className="text-sm font-semibold text-slate-100">Users</h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-[#0f1c18] border border-emerald-900/50 rounded-full px-3 py-1.5">
                  <Search className="w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search users..."
                    className="bg-transparent text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none w-36"
                  />
                </div>
                <button className="p-2 rounded-lg bg-[#0f1c18] border border-emerald-900/50 text-slate-300 hover:bg-emerald-900/30">
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShowAddUser(true)}
                  className="flex items-center gap-1.5 bg-[#0d7869] hover:bg-[#12a18d] text-white text-xs font-medium px-4 py-2 rounded-full transition"
                >
                  <Plus className="w-4 h-4" />
                  Add User
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#2f4a43] text-slate-100 text-xs uppercase tracking-wide">
                    <th className="text-left font-semibold px-6 py-3">Name</th>
                    <th className="text-left font-semibold px-6 py-3">Email</th>
                    <th className="text-left font-semibold px-6 py-3">Role</th>
                    <th className="text-left font-semibold px-6 py-3">Last Login</th>
                    <th className="text-left font-semibold px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user, idx) => (
                    <tr
                      key={user.id}
                      className={`text-slate-200 text-xs ${
                        idx % 2 === 0 ? "bg-[#152420]" : "bg-[#122019]"
                      } hover:bg-emerald-900/20 transition`}
                    >
                      <td className="px-6 py-3.5 whitespace-nowrap">{user.name}</td>
                      <td className="px-6 py-3.5 whitespace-nowrap text-slate-400">{user.email}</td>
                      <td className="px-6 py-3.5 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-medium border ${getRoleBadge(
                            user.role
                          )}`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-3.5 whitespace-nowrap text-slate-400">{user.lastLogin}</td>
                      <td className="px-6 py-3.5 whitespace-nowrap">
                        <button className="p-1.5 rounded-lg hover:bg-emerald-900/30 text-slate-300">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredUsers.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-6 text-center text-xs text-slate-400">
                        No users match your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="flex items-center justify-between px-6 py-3 border-t border-emerald-900/40 text-[11px] text-slate-400">
              <span>Showing {page} of {totalPages} pages</span>
              <div className="flex items-center gap-1 bg-[#0d7869] rounded-full px-1 py-1">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="p-1 rounded-full hover:bg-emerald-700/60 text-white disabled:opacity-40"
                  disabled={page === 1}
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <span className="px-2 text-white font-medium">{page}</span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="p-1 rounded-full hover:bg-emerald-700/60 text-white disabled:opacity-40"
                  disabled={page === totalPages}
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Add New User Modal */}
        {showAddUser && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
            <div className="w-full max-w-sm bg-[#12271f] border border-emerald-800/50 rounded-3xl shadow-2xl overflow-hidden">
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4">
                <h3 className="text-lg font-semibold text-white">Add New User</h3>
                <button
                  onClick={closeModal}
                  className="p-1 rounded-full hover:bg-emerald-900/40 text-slate-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Form */}
              <div className="px-6 pb-4 space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={newUser.fullName}
                    onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full bg-[#0f1c18] border border-emerald-900/50 rounded-lg px-3 py-2.5 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    placeholder="Enter email address"
                    className="w-full bg-[#0f1c18] border border-emerald-900/50 rounded-lg px-3 py-2.5 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">Role</label>
                  <select
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                    className="w-full bg-[#0f1c18] border border-emerald-900/50 rounded-lg px-3 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-600"
                  >
                    <option value="" disabled>Select Role</option>
                    <option value="Administrator">Administrator</option>
                    <option value="Field Technician">Field Technician</option>
                    <option value="Viewer">Viewer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={newUser.password}
                      onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                      placeholder="Create a password"
                      className="w-full bg-[#0f1c18] border border-emerald-900/50 rounded-lg px-3 py-2.5 pr-9 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-600"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddUser}
                  className="w-full py-2.5 rounded-full bg-[#0d7869] hover:bg-[#12a18d] text-white text-sm font-medium transition"
                >
                  Add User
                </button>
              </div>

              {/* User Roles Info */}
              <div className="mx-6 mb-6 bg-[#0f1c18] border border-emerald-900/50 rounded-xl p-3.5">
                <div className="flex items-center gap-2 text-slate-300 font-semibold text-xs mb-2">
                  <Info className="w-3.5 h-3.5" />
                  <span>User Roles</span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-400 leading-relaxed">
                  <p><span className="text-slate-200 font-medium">Administrator</span> — Full access to all features</p>
                  <p><span className="text-slate-200 font-medium">Field Technician</span> — Can view sensor data, alerts and reports</p>
                  <p><span className="text-slate-200 font-medium">Viewer</span> — Read-only access to dashboard and reports</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

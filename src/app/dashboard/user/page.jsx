"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { 
  Mail, 
  Calendar, 
  LogOut, 
  Settings, 
  Compass, 
  CreditCard, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles,
  Loader2 
} from "lucide-react";

// better-auth er client hook standard import path
// Note: Tomar project er client configuration file er local path er sathe import ta match kore nio (e.g., @/lib/auth-client)
import { authClient } from "@/lib/auth-client"; 

export default function UserPage() {
  const router = useRouter();
  
  // Client component-e hook er madhyome session handle kora
  const { data: session, isPending } = authClient.useSession();

  // Loading State
  if (isPending) {
    return (
      <div className="min-h-screen bg-[#0B0F19] text-gray-200 flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
        <p className="text-sm text-gray-400 font-medium">Loading profile context...</p>
      </div>
    );
  }

  // Redirect to login if user session is not available
  if (!session?.user) {
    return (
      <div className="min-h-screen bg-[#0B0F19] text-gray-200 flex flex-col items-center justify-center p-6 text-center">
        <ShieldAlert className="w-12 h-12 text-rose-500 mb-3" />
        <h2 className="text-xl font-bold mb-1">Access Denied</h2>
        <p className="text-gray-400 mb-6 text-sm">Please log in to view your dashboard settings.</p>
        <button 
          onClick={() => router.push("/login")}
          className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all"
        >
          Go to Login
        </button>
      </div>
    );
  }

  const { user } = session;

  // Real data structure mapping based on better-auth user object
  const currentUser = {
    name: user.name || "Explorer",
    email: user.email,
    avatar: user.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde", // fallback picture
    memberSince: user.createdAt ? new Date(user.createdAt).toLocaleDateString("en-US", { month: 'short', year: 'numeric' }) : "Jan 2026",
    role: "Premium Explorer",
    tier: "Gold Elite",
  };

  // Structured active bookings representation
  const userBookings = [
    {
      id: "BK-9021",
      destination: "Amari Luxury Overwater Villa",
      location: "Maldives",
      checkIn: "Oct 14, 2026",
      status: "Confirmed",
      amount: 850,
    },
    {
      id: "BK-4311",
      destination: "Swiss Alpine Heritage Chalet",
      location: "Zermatt, Switzerland",
      checkIn: "Dec 20, 2026",
      status: "Pending Approval",
      amount: 610,
    }
  ];

  // Async Logout Action using better-auth client library
  const handleLogout = async () => {
    try {
      await authClient.signOut();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Error logging out. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0F19] text-gray-100 pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl space-y-8">
        
        {/* Top Header Banner Area */}
        <div className="relative bg-gradient-to-r from-indigo-950 via-[#111827] to-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 overflow-hidden shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="absolute top-[-50%] left-[-20%] w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-5 z-10">
            {/* Profile Avatar with status border */}
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-lg shadow-emerald-500/10">
              <Image 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                fill 
                className="object-cover"
              />
            </div>

            {/* Profile details */}
            <div className="text-center md:text-left space-y-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <h1 className="text-2xl md:text-3xl font-extrabold text-white">{currentUser.name}</h1>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                  <Sparkles className="w-3 h-3" />
                  {currentUser.tier}
                </span>
              </div>
              <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4 text-indigo-400" />
                {currentUser.email}
              </p>
              <p className="text-xs text-gray-500">
                Member since: {currentUser.memberSince} • Role: {currentUser.role}
              </p>
            </div>
          </div>

          {/* User Controls Panel */}
          <div className="flex gap-3 z-10">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 border border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white font-semibold text-sm rounded-xl transition-all">
              <Settings className="w-4 h-4" />
              Settings
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2.5 bg-rose-950/40 hover:bg-rose-900/60 border border-rose-500/25 text-rose-400 font-semibold text-sm rounded-xl transition-all"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {/* Dashboard Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column - Stats / Menu list (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Membership Loyalty / Wallet Balance */}
            <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Premium Wallet</h3>
              <div className="space-y-1">
                <span className="text-[10px] text-gray-500 block">Available travel credit</span>
                <div className="text-3xl font-black text-white">$1,450.00</div>
              </div>
              <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-[0_4px_12px_rgba(79,70,229,0.25)]">
                <CreditCard className="w-3.5 h-3.5" />
                Top Up Balance
              </button>
            </div>

            {/* Quick Actions Shortcuts */}
            <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-4">
              <nav className="space-y-1">
                <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/50 text-slate-300 hover:text-white transition-all text-sm font-medium">
                  <span className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-emerald-400" /> My Itineraries
                  </span>
                  <span className="text-xs bg-indigo-950 text-indigo-400 px-2 py-0.5 rounded font-bold">4 Active</span>
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/50 text-slate-300 hover:text-white transition-all text-sm font-medium">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-400" /> Booking History
                  </span>
                </button>
              </nav>
            </div>

          </div>

          {/* Right Column - Bookings List (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 space-y-6">
              <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                <h3 className="text-lg font-bold text-white">Active Reservations</h3>
                <span className="text-xs text-indigo-400 hover:underline cursor-pointer">View all past bookings</span>
              </div>

              {/* Reservations Grid List */}
              <div className="space-y-4">
                {userBookings.map((booking) => (
                  <div 
                    key={booking.id}
                    className="p-4 bg-slate-950/50 border border-slate-800/80 rounded-xl hover:border-slate-700/80 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500 font-mono font-semibold">{booking.id}</span>
                        <span className="text-xs text-slate-400">• Checked-in on {booking.checkIn}</span>
                      </div>
                      <h4 className="text-base font-bold text-slate-100">{booking.destination}</h4>
                      <p className="text-xs text-slate-400">{booking.location}</p>
                    </div>

                    <div className="flex items-center md:flex-col items-end gap-3 md:gap-1.5 w-full md:w-auto justify-between border-t border-slate-800 md:border-t-0 pt-2.5 md:pt-0">
                      <span className="text-sm font-black text-slate-100">${booking.amount} total</span>
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        booking.status === "Confirmed"
                          ? "bg-emerald-950 text-emerald-400 border border-emerald-500/20"
                          : "bg-amber-950 text-amber-400 border border-amber-500/20"
                      }`}>
                        {booking.status === "Confirmed" ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <ShieldAlert className="w-3 h-3" />
                        )}
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
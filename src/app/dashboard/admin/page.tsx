"use client";

import React from 'react';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Compass, 
  ArrowUpRight, 
  ArrowDownRight 
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';

// ডামি অ্যানালিটিক্স ডাটা
const revenueData = [
  { name: 'Jan', revenue: 4000, bookings: 240 },
  { name: 'Feb', revenue: 5000, bookings: 320 },
  { name: 'Mar', revenue: 6800, bookings: 400 },
  { name: 'Apr', revenue: 8200, bookings: 510 },
  { name: 'May', revenue: 7500, bookings: 480 },
  { name: 'Jun', revenue: 9400, bookings: 640 },
];

const categoryData = [
  { name: 'Beach', bookings: 340, vists: 840 },
  { name: 'Mountain', bookings: 280, vists: 710 },
  { name: 'Desert', bookings: 120, vists: 390 },
  { name: 'Forest', bookings: 210, vists: 520 },
];

const AdminPage = () => {
  return (
    <div className="p-6 space-y-8 bg-[#0B0F19] text-slate-100 min-h-screen">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-white tracking-tight">Admin Overview</h1>
          <p className="text-xs text-slate-500">Real-time platform analytics and booking operations.</p>
        </div>
        <div className="text-xs font-semibold px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-indigo-400">
          Live Updates Enabled
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Stat 1 */}
        <div className="p-6 bg-[#0F172A]/80 border border-slate-900 rounded-2xl space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Revenue</span>
            <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400"><DollarSign className="w-4 h-4" /></div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">$40,900</span>
            <span className="text-xs text-emerald-400 flex items-center"><ArrowUpRight className="w-3 h-3" /> +12%</span>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="p-6 bg-[#0F172A]/80 border border-slate-900 rounded-2xl space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Bookings</span>
            <div className="p-2 bg-indigo-500/10 rounded-xl text-indigo-400"><TrendingUp className="w-4 h-4" /></div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">2,590</span>
            <span className="text-xs text-indigo-400 flex items-center"><ArrowUpRight className="w-3 h-3" /> +8.4%</span>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="p-6 bg-[#0F172A]/80 border border-slate-900 rounded-2xl space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Users</span>
            <div className="p-2 bg-teal-500/10 rounded-xl text-teal-400"><Users className="w-4 h-4" /></div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">1,420</span>
            <span className="text-xs text-emerald-400 flex items-center"><ArrowUpRight className="w-3 h-3" /> +5%</span>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="p-6 bg-[#0F172A]/80 border border-slate-900 rounded-2xl space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Destinations</span>
            <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400"><Compass className="w-4 h-4" /></div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">512</span>
            <span className="text-xs text-rose-400 flex items-center"><ArrowDownRight className="w-3 h-3" /> -0.2%</span>
          </div>
        </div>

      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Area Chart: Revenue Analytics (Takes 2 Columns) */}
        <div className="lg:col-span-2 p-6 bg-[#0F172A]/60 border border-slate-900 rounded-2xl space-y-6">
          <div>
            <h3 className="text-sm font-bold text-white">Revenue & Growth Trend</h3>
            <p className="text-[11px] text-slate-500">Monthly breakdown of gross platform income.</p>
          </div>
          <div className="h-72 w-full text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tickLine={false} />
                <YAxis stroke="#64748b" tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#f8fafc' }} 
                />
                <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" name="Revenue ($)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart: Category Performance (Takes 1 Column) */}
        <div className="p-6 bg-[#0F172A]/60 border border-slate-900 rounded-2xl space-y-6">
          <div>
            <h3 className="text-sm font-bold text-white">Category Demand</h3>
            <p className="text-[11px] text-slate-500">Comparing bookings vs total user views.</p>
          </div>
          <div className="h-72 w-full text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tickLine={false} />
                <YAxis stroke="#64748b" tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#f8fafc' }}
                />
                <Legend iconSize={10} wrapperStyle={{ paddingTop: 10 }} />
                <Bar dataKey="bookings" fill="#10b981" radius={[4, 4, 0, 0]} name="Bookings" />
                <Bar dataKey="vists" fill="#334155" radius={[4, 4, 0, 0]} name="Views" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

    </div>
  );
};

export default AdminPage;
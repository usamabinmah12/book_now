"use client";

import React, { useState } from "react";
import Link from "next/link";

// Using Lucide icons to align perfectly with Gravity UI/Hero UI sleek style guidelines
import { Calendar, MapPin, Search, Sparkles, Award, Compass } from "lucide-react";

export const Banner: React.FC = () => {
  // Mini interactive feature tabs for visual flow
  const [activeTab, setActiveTab] = useState<"hotels">("hotels");

  return (
    <section className="relative w-full h-[65vh] min-h-[500px] max-h-[680px] flex items-center justify-center bg-[#0B0F19] overflow-hidden text-gray-100 border-b border-gray-800">
      
      {/* Gravity UI Style Radial & Mesh Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-indigo-600/20 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-tl from-emerald-600/15 to-transparent rounded-full blur-[150px] pointer-events-none" />
      
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 lg:px-8 z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
        
        {/* Left Side: Copy and Dynamic CTA flow */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left">
          
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold self-center lg:self-start w-fit backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.15)] animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Smart. Travel Smarter.</span>
          </div>

          {/* Main Typography Header */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
            Seamlessly Discover & <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-300 bg-clip-text text-transparent drop-shadow-sm">
              Reserve Luxury Stays
            </span>
          </h1>

          {/* Value Prop (No dummy content) */}
          <p className="text-gray-400 text-base md:text-lg max-w-xl font-normal leading-relaxed">
            Explore premium verified properties and curated getaways with instantaneous real-time confirmation, flexible cancellation, and custom zero-fee itinerary planning.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center lg:justify-start">
            <Link href="/explore" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-[#0B0F19] font-bold text-sm rounded-xl hover:opacity-90 transition-all transform hover:scale-[1.02] shadow-[0_4px_20px_rgba(16,185,129,0.3)]">
                Explore Stays Now
              </button>
            </Link>
            <Link href="#featured-offers" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 border border-gray-700 hover:border-gray-500 text-gray-300 font-semibold text-sm rounded-xl transition-all backdrop-blur-sm">
                View Seasonal Offers
              </button>
            </Link>
          </div>

          {/* Quick Stats Grid to establish the flow into the next section */}
          <div className="pt-4 grid grid-cols-3 gap-4 border-t border-gray-800/60 max-w-md mx-auto lg:mx-0">
            <div>
              <div className="text-xl font-bold text-white">4.9★</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">User Rating</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">12k+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Destinations</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">24/7</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Live Concierge</div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Hero UI Data Visualization Widget */}
        <div className="hidden lg:col-span-5 lg:flex items-center justify-center relative">
          
          {/* Main UI Interactive Container */}
          <div className="w-full max-w-[400px] bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            
            {/* Tab Selection Layout */}
            <div className="flex bg-gray-950 p-1 rounded-xl border border-gray-800/80 mb-6">
              {(["hotels"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 text-center py-2 text-xs font-semibold capitalize rounded-lg transition-all ${
                    activeTab === tab
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Simulated Live Search Inputs */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold tracking-wider text-gray-400 uppercase flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-indigo-400" /> Destination
                </label>
                <div className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm font-medium text-gray-200">
                  Manhattan, New York
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold tracking-wider text-gray-400 uppercase flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-emerald-400" /> Check In
                  </label>
                  <div className="w-full bg-gray-950 border border-gray-800 rounded-xl px-3 py-2.5 text-xs font-medium text-gray-300">
                    Oct 14, 2026
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold tracking-wider text-gray-400 uppercase flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-emerald-400" /> Check Out
                  </label>
                  <div className="w-full bg-gray-950 border border-gray-800 rounded-xl px-3 py-2.5 text-xs font-medium text-gray-300">
                    Oct 21, 2026
                  </div>
                </div>
              </div>
              
              {/* Context Trigger Card Component inside the widget */}
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-start gap-2.5">
                <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-amber-300/90 leading-normal">
                  <strong>Smart Rates Active:</strong> You are unlocking an extra 15% Member-only discount on premium luxury suites this week.
                </p>
              </div>

              {/* Mini CTA inside Hero Widget */}
              <Link href="/explore?search=manhattan" className="block w-full pt-2">
                <button className="w-full py-3 bg-gray-800 hover:bg-gray-750 border border-gray-700 text-white font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-2 tracking-wide group">
                  <Search className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  Scan Live Inventory
                </button>
              </Link>
            </div>

          </div>

          {/* Floating Aesthetic Overlay Elements to replicate gravity graph designs */}
          <div className="absolute -top-4 -right-4 bg-gray-900/90 border border-gray-700/60 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl backdrop-blur-sm animate-bounce [animation-duration:4s]">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium text-gray-200">98% Match Rate</span>
          </div>
        </div>

      </div>
    </section>
  );
};
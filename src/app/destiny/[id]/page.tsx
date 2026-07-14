import { GetAllDestination } from '@/lib/api/destination';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Destiny from '@/app/components/Destiny';
import { MapPin, Star, Calendar, ShieldCheck, UserCheck, Coffee, Wifi, Sparkles } from 'lucide-react';

interface Params {
  params: Promise<{ id: string }>;
}

const Details = async ({ params }: Params) => {
  const { id } = await params;
  console.log("ID is:", id);

  const allDestination = await GetAllDestination();
  
  // MongoDB object parsing formatting structure compatible matching logic
  const currDestination = allDestination.find((destiny) => {
    const itemDbId = typeof destiny._id === "object" ? destiny._id.$oid : destiny.id || destiny._id;
    return itemDbId === id;
  });

  // Fallback state logic handling
  if (!currDestination) {
    return (
      <div className="min-h-screen bg-[#0B0F19] text-gray-200 flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold text-red-400 mb-4">Destination Not Found</h2>
        <p className="text-gray-400 mb-6">The booking item you are looking for does not exist or has been removed.</p>
        <Link href="/explore">
          <button className="px-6 py-2.5 bg-primary text-white font-semibold rounded-xl hover:bg-opacity-95 transition-all">
            Back to Explore
          </button>
        </Link>
      </div>
    );
  }

  // Related Destination filtration logic matching rules
  const relatedDestinations = allDestination
    .filter((destiny) => {
      const itemDbId = typeof destiny._id === "object" ? destiny._id.$oid : destiny.id || destiny._id;
      return itemDbId !== id && destiny.category === currDestination.category;
    })
    .slice(0, 3); // Showing maximum 3 related offers matching categories

  return (
    <main className="min-h-screen bg-[#0B0F19] text-gray-100 pt-20 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl space-y-10">
        
        {/* Section 1: Dynamic Image Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[400px] md:h-[480px] rounded-2xl overflow-hidden border border-gray-800">
          {/* Main big image */}
          <div className="relative md:col-span-8 h-full bg-gray-900">
            <Image
              src={currDestination.images[0]}
              alt={currDestination.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
          {/* Secondary mini image */}
          <div className="relative md:col-span-4 hidden md:block h-full bg-gray-800">
            <Image
              src={currDestination.images[1] || currDestination.images[0]}
              alt={`${currDestination.title} room layout`}
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
        </div>

        {/* Section 2: Split Content Grid (Details vs Booking Panel) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Side: Specifications, Title, and Description (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-indigo-950 text-indigo-400 border border-indigo-500/30 text-xs font-bold rounded-lg uppercase tracking-wider">
                  {currDestination.category}
                </span>
                <span className={`px-3 py-1 text-xs font-bold rounded-lg border ${
                  currDestination.availability 
                    ? "bg-emerald-950/90 text-emerald-400 border-emerald-500/20" 
                    : "bg-rose-950/90 text-rose-400 border-rose-500/20"
                }`}>
                  {currDestination.availability ? "Immediate Booking Available" : "Sold Out"}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {currDestination.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 pt-2 border-b border-gray-800 pb-6">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  {currDestination.location}
                </span>
                <span className="flex items-center gap-1.5 bg-amber-500/10 text-amber-400 px-2.5 py-0.5 rounded-lg border border-amber-500/20 font-semibold text-xs">
                  <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
                  {currDestination.rating} ({currDestination.reviewsCount} verified reviews)
                </span>
              </div>
            </div>

            {/* Description / Overview Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Overview & Experience</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {currDestination.fullDescription || currDestination.shortDescription}
              </p>
            </div>

            {/* Key Information / Premium Specifications */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-white">Property Features</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-900/50 border border-gray-800/80 rounded-xl flex items-center gap-3">
                  <Wifi className="w-5 h-5 text-indigo-400" />
                  <span className="text-xs text-gray-300 font-medium">Ultra-Fast WiFi</span>
                </div>
                <div className="p-4 bg-gray-900/50 border border-gray-800/80 rounded-xl flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-indigo-400" />
                  <span className="text-xs text-gray-300 font-medium">Free Breakfast</span>
                </div>
                <div className="p-4 bg-gray-900/50 border border-gray-800/80 rounded-xl flex items-center gap-3">
                  <UserCheck className="w-5 h-5 text-indigo-400" />
                  <span className="text-xs text-gray-300 font-medium">24/7 Butler Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Sticky Checkout / Booking Panel (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 p-6 bg-gray-900/90 border border-gray-800 rounded-2xl space-y-6 shadow-xl backdrop-blur-md">
              <div className="flex justify-between items-end border-b border-gray-800 pb-4">
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block">Total Price</span>
                  <span className="text-3xl font-black text-white">${currDestination.price}</span>
                  <span className="text-gray-400 text-xs font-medium"> / night</span>
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded font-semibold border border-emerald-500/20">
                  Best Rate Promise
                </span>
              </div>

              {/* Secure Transaction Specs */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-2.5 text-xs text-gray-400">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span>Instant Reservation Confirmation</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  <span>Free Cancellation till 48h arrival</span>
                </div>
              </div>

              <button 
                disabled={!currDestination.availability}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-90 transition-all text-[#0B0F19] font-extrabold rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currDestination.availability ? "Proceed to Instant Booking" : "Fully Booked Currently"}
              </button>
            </div>
          </div>

        </div>

        {/* Section 3: Related Items Grid Section */}
        {relatedDestinations.length > 0 && (
          <div className="pt-12 border-t border-gray-800/80 space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h3 className="text-2xl font-bold text-white">Similar Hot Properties</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedDestinations.map((destiny) => (
                <Destiny key={destiny.id || destiny._id?.toString()} destiny={destiny} />
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
};

export default Details;
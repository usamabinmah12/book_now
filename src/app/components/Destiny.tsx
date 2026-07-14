import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Star, ArrowUpRight } from "lucide-react";

interface DestinyProps {
  destiny: {
    _id?: { $oid: string } | string;
    id?: string;
    title: string;
    shortDescription: string;
    images: string[];
    price: number;
    location: string;
    rating: number;
    reviewsCount: number;
    category: string;
    availability: boolean;
  };
}

const Destiny: React.FC<DestinyProps> = ({ destiny }) => {
  // MongoDB Object ID check
  const itemId = typeof destiny._id === "object" ? destiny._id.$oid : destiny.id || destiny._id;

  return (
    <div className="group relative w-full bg-[#0F172A]/80 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-700 hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)] flex flex-col h-[420px]">
      
      {/* Dynamic Visual Badges over Image */}
      <div className="relative h-48 w-full overflow-hidden">
        {/* Hover zoom effect */}
        <Image
          src={destiny.images[0] || "https://images.unsplash.com/photo-1506929562872-bb421503ef21"}
          alt={destiny.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
        
        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex justify-between items-center z-10">
          <span className="px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase bg-slate-900/90 text-emerald-400 border border-emerald-500/30 rounded-lg backdrop-blur-md">
            {destiny.category}
          </span>
          <span className={`px-2.5 py-1 text-[11px] font-bold rounded-lg backdrop-blur-md border ${
            destiny.availability 
              ? "bg-emerald-950/90 text-emerald-400 border-emerald-500/20" 
              : "bg-rose-950/90 text-rose-400 border-rose-500/20"
          }`}>
            {destiny.availability ? "Available" : "Sold Out"}
          </span>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div className="space-y-2">
          {/* Location and Rating info */}
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span className="flex items-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              {destiny.location}
            </span>
            <span className="flex items-center gap-1 bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-md border border-amber-500/20 font-semibold">
              <Star className="w-3 h-3 fill-current text-amber-400" />
              {destiny.rating}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors line-clamp-1">
            {destiny.title}
          </h3>

          {/* Short description */}
          <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
            {destiny.shortDescription}
          </p>
        </div>

        {/* Footer Meta Area */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-4">
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Price per Night</span>
            <span className="text-lg font-extrabold text-slate-100">
              ${destiny.price}
            </span>
          </div>

          {/* Styled Hero UI CTA Button */}
          <Link href={`/destiny/${itemId}`} className="inline-flex items-center">
            <button className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition-all shadow-[0_4px_12px_rgba(79,70,229,0.25)] group-hover:shadow-[0_4px_15px_rgba(16,185,129,0.2)]">
              Details
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Destiny;
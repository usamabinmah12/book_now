"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2, ArrowLeft, Plus, Landmark, DollarSign, Image as ImageIcon, Sparkles } from "lucide-react";
import { createDestiny } from "@/lib/actions/add"; 

export default function AddDestiny() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const [addForm, setAddForm] = useState({
    title: "",
    location: "",
    price: "",
    shortDescription: "",
    images: "",
    category: "Beach", 
    availability: true,
  });

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAddForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
     
      const payload = {
        title: addForm.title,
        location: addForm.location,
        price: parseFloat(addForm.price) || 0,
        shortDescription: addForm.shortDescription,
        images: addForm.images ? [addForm.images] : [], // ইমেজ স্ট্রিংকে অ্যারেতে কনভার্ট করা হচ্ছে
        category: addForm.category,
        availability: addForm.availability,
        rating: 5.0, // নতুন ডেস্টিনেশনের জন্য ডিফল্ট রেটিং
        reviewsCount: 0, // ডিফল্ট রিভিউ কাউন্ট
      };

      const result = await createDestiny(payload);

      if (result && result.success === false) {
        throw new Error(result.error || "Failed to add destination.");
      }

      toast.success("New destination added successfully!");
      router.refresh();
      router.push("/dashboard/admin/destiny"); // সাকসেসফুল হলে ব্যাকঅফিস বা ড্যাশবোর্ডে রিডাইরেক্ট করবে
    } catch (error: any) {
      console.error("Failed to add destination:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0F19] text-gray-100 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-2xl space-y-8">
        
       
        <div className="flex items-center gap-4">
          <button 
            type="button"
            onClick={() => router.back()}
            className="p-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-xl transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">Creation Panel</span>
            <h1 className="text-2xl font-black text-white">Add New Destination</h1>
          </div>
        </div>

       
        <form onSubmit={handleAddSubmit} className="bg-[#0F172A] border border-slate-800/80 rounded-2xl p-6 space-y-6 shadow-xl">
          
         
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Destination Title</label>
            <div className="relative">
              <Landmark className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                name="title"
                value={addForm.title}
                onChange={handleInputChange}
                required
                placeholder="e.g. Bali Tropical Bamboo Chalet" 
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Price */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Price per Night ($)</label>
              <div className="relative">
                <DollarSign className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                <input 
                  type="number" 
                  name="price"
                  value={addForm.price}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. 150" 
                  className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

          
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Location / Territory</label>
              <input 
                type="text" 
                name="location"
                value={addForm.location}
                onChange={handleInputChange}
                required
                placeholder="e.g. Bali, Indonesia" 
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Category</label>
              <select 
                name="category"
                value={addForm.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl text-sm text-slate-100 outline-none transition-all"
              >
                <option value="Beach">Beach</option>
                <option value="Mountain">Mountain</option>
                <option value="Desert">Desert</option>
                <option value="City">City</option>
                <option value="Forest">Forest</option>
              </select>
            </div>

           
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Status Availability</label>
              <select 
                name="availability"
                value={String(addForm.availability)}
                onChange={(e) => setAddForm(prev => ({ ...prev, availability: e.target.value === "true" }))}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl text-sm text-slate-100 outline-none transition-all"
              >
                <option value="true">Available</option>
                <option value="false">Sold Out</option>
              </select>
            </div>
          </div>

          
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Banner Image URL</label>
            <div className="relative">
              <ImageIcon className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                name="images"
                value={addForm.images}
                onChange={handleInputChange}
                placeholder="Paste landscape image URL" 
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Brief Overview / Description</label>
            <textarea 
              name="shortDescription"
              value={addForm.shortDescription}
              onChange={handleInputChange}
              rows={4}
              placeholder="Provide a compelling overview of the destination..."
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600 resize-none"
            />
          </div>

          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-extrabold rounded-xl transition-all shadow-[0_4px_20px_rgba(79,70,229,0.25)] flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Saving Destination...
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" /> Add Destination Asset
              </>
            )}
          </button>

        </form>

      </div>
    </main>
  );
}
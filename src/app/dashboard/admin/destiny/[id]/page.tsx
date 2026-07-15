"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// import { toast } from "sonner"; 
import { Loader2, ArrowLeft, Save, Landmark, DollarSign, Image as ImageIcon } from "lucide-react";
import { editDestiny } from "@/lib/actions/edit";
import { toast } from "react-toastify";

interface Params {
  params: Promise<{ id: string }>;
}

export default function UpdateDestiny({ params }: Params) {
  const router = useRouter();
  const [id, setId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states tracking
  const [editForm, setEditForm] = useState({
    title: "",
    location: "",
    price: "", 
    shortDescription: "",
    images: "",
  });

  
  useEffect(() => {
    const fetchExistingData = async () => {
      try {
        const resolvedParams = await params;
        const itemId = resolvedParams.id;
        setId(itemId);

        // Fetch target specific item endpoint directly instead of listing all items
        const res = await fetch(`/api/destination/${itemId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch destination details");
        }
        
        const currentItem = await res.json();
        console.log("Current item loaded:", currentItem);

        // Standard dynamic field assignments
        if (currentItem) {
          setEditForm({
            title: currentItem.title || "",
            location: currentItem.location || "",
            price: currentItem.price !== undefined && currentItem.price !== null ? String(currentItem.price) : "",
            shortDescription: currentItem.shortDescription || "",
            images: Array.isArray(currentItem.images) 
              ? (currentItem.images[0] || "") 
              : (currentItem.images || ""),
          });
        } else {
          toast.error("Destination item could not be located.");
        }

      } catch (error) {
        console.error("Error fetching destination data:", error);
        toast.error("Failed to load existing item details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchExistingData();
  }, [params]);

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Handle data saving
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    setIsSubmitting(true);
    try {
      const payload = {
        title: editForm.title,
        location: editForm.location,
        price: parseFloat(editForm.price) || 0,
        shortDescription: editForm.shortDescription,
        images: [editForm.images], 
      };

      console.log("Submitting updated payload to Server Action:", id, payload);
      
      const result = await editDestiny(id, payload);
      
      if (result && result.success === false) {
        throw new Error(result.error || "Update operation failed");
      }

      toast.success("Destination details updated successfully!");
      router.refresh(); 
      router.push("/dashboard/admin/destiny");
    } catch (error: any) {
      console.error("Failed to edit destination details:", error);
      toast.error(error.message || "Failed to update item. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0B0F19] text-gray-200 flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
        <p className="text-sm text-slate-400">Fetching original asset data...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B0F19] text-gray-100 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-2xl space-y-8">
        
        {/* Back Navigation Header */}
        <div className="flex items-center gap-4">
          <button 
            type="button"
            onClick={() => router.back()}
            className="p-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-xl transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">Modify Destination</span>
            <h1 className="text-2xl font-black text-white">Update Information</h1>
          </div>
        </div>

        
        <form onSubmit={handleEditSubmit} className="bg-[#0F172A] border border-slate-800/80 rounded-2xl p-6 space-y-6 shadow-xl">
          
          
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Destination Title</label>
            <div className="relative">
              <Landmark className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                name="title"
                value={editForm.title}
                onChange={handleInputChange}
                required
                placeholder="e.g. Bali Tropical Bamboo Chalet" 
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Price per Night ($)</label>
              <div className="relative">
                <DollarSign className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                <input 
                  type="text" 
                  name="price"
                  value={editForm.price}
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
                value={editForm.location}
                onChange={handleInputChange}
                required
                placeholder="e.g., Bali, Indonesia" 
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600"
              />
            </div>
          </div>

         
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Banner Image URL</label>
            <div className="relative">
              <ImageIcon className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                name="images"
                value={editForm.images}
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
              value={editForm.shortDescription}
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
                <Loader2 className="w-4 h-4 animate-spin" /> Saving Changes...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" /> Save Updated Changes
              </>
            )}
          </button>

        </form>

      </div>
    </main>
  );
}
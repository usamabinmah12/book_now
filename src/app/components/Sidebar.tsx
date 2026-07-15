"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  Map, 
  PlusCircle, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  ShieldCheck,
  Compass
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Client-side Session Handling
  const { data: session } = authClient.useSession();

  const adminProfile = {
    name: session?.user?.name || "Admin Executive",
    email: session?.user?.email || "admin@aerobook.com",
    avatar: session?.user?.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  };

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      router.push("/login");
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  // Navigation Links (with exact state active styles)
  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    
    {
      label: "Add Destiny",
      href: "/dashboard/admin/add",
      icon: PlusCircle,
    },
    {
      label: "All Destiny",
      href: "/dashboard/admin/destiny",
      icon: Compass,
    },
    {
      label: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ];

  return (
    <>
      {/* Mobile Menu Trigger (Sticky Top Bar for Mobile/Tablet) */}
      <div className="lg:hidden flex items-center justify-between bg-[#0F172A] border-b border-slate-800 px-4 py-3 sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <span className="font-extrabold text-slate-100 tracking-tight">AdminPortal</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-850"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}

      {/* Sidebar Panel Container */}
      <aside className={`
        fixed top-0 bottom-0 left-0 z-50 lg:z-30
        w-64 bg-[#0F172A] border-r border-slate-800/80 p-5 flex flex-col justify-between
        transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        
        <div className="space-y-7">
          {/* Brand/Logo Section */}
          <div className="hidden lg:flex items-center gap-2.5 pb-2 border-b border-slate-800/60">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-emerald-500 flex items-center justify-center shadow-lg shadow-indigo-500/15">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-black text-slate-100 tracking-tight text-lg block leading-none">AeroBook</span>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Control Hub</span>
            </div>
          </div>

          {/* Admin Profile Area */}
          <div className="p-3.5 bg-slate-950/40 border border-slate-800 rounded-xl flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-indigo-500/30">
              <Image 
                src={adminProfile.avatar} 
                alt={adminProfile.name} 
                fill 
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-xs font-black text-slate-100 truncate">{adminProfile.name}</h4>
              <span className="text-[10px] text-amber-400 font-bold tracking-wider uppercase block">System Admin</span>
            </div>
          </div>

          {/* Menu Navigation Links */}
          <nav className="space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pl-3 block mb-2">Management</span>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
                  <div className={`
                    flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-semibold transition-all group cursor-pointer
                    ${isActive 
                      ? "bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 shadow-sm" 
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-850/50 border border-transparent"
                    }
                  `}>
                    <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? "text-indigo-400" : "text-slate-400 group-hover:text-slate-200"}`} />
                    {item.label}
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Area: Logout Option */}
        <div className="pt-4 border-t border-slate-800/60">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3.5 py-3 text-slate-400 hover:text-rose-400 rounded-xl text-sm font-bold transition-all hover:bg-rose-950/20 hover:border-rose-500/10 border border-transparent"
          >
            <LogOut className="w-4 h-4 text-slate-400 group-hover:text-rose-400" />
            Sign Out
          </button>
        </div>

      </aside>
    </>
  );
}
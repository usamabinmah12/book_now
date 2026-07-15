"use client";

import React from "react";
import Link from "next/link";
import { toast } from "sonner";
import { 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUpRight, 
  Heart,
  Copy
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const personalEmail = "usamabinmahbub12@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalEmail);
    toast.success("Email copied to clipboard!");
  };

  return (
    <footer className="relative bg-[#070A13] text-slate-400 pt-16 pb-8 border-t border-slate-900 overflow-hidden">
      {/* Background Subtle Light Source */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-teal-500 flex items-center justify-center text-white font-black shadow-[0_4px_15px_rgba(79,70,229,0.3)]">
                B
              </span>
              <span className="text-xl font-black text-white tracking-wider">
                Book<span className="text-emerald-400">Now</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-slate-500 max-w-sm">
              Discover verified premium properties, tropical escapes, and mountain chalets with our fully-secured instant reservation booking ecosystem. Crafted for modern wanderers.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Explore Platform</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/destiny" className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                  All Destinations 
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-emerald-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/dashboard/admin/destiny" className="hover:text-emerald-400 transition-colors">
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Copy Email */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Direct Contact</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sylhet, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>+880 18-38669868</span>
              </li>
              
              {/* Copiable Email Container */}
              <li className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0F172A]/80 border border-slate-800 rounded-xl max-w-xs justify-between w-full group">
                  <div className="flex items-center gap-2 truncate">
                    <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span className="font-mono text-slate-300 truncate text-[11px]">{personalEmail}</span>
                  </div>
                  <button 
                    onClick={handleCopyEmail}
                    type="button"
                    title="Copy Email"
                    className="p-1 text-slate-500 hover:text-emerald-400 transition-colors hover:bg-slate-900 rounded-md"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Socials & Copyright Info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[11px] text-slate-600 flex items-center gap-1.5 order-2 sm:order-1">
            <span>© {currentYear} BookNow. All rights reserved.</span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-rose-500 fill-current" /> in Bangladesh
            </span>
          </p>

          {/* Social Profiles Grid using HTML SVGs to avoid package bundler export errors */}
          <div className="flex items-center gap-3 order-1 sm:order-2">
            
            {/* GitHub Profile */}
            <a 
              href="https://github.com/usamabinmah12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-950 border border-slate-900 hover:border-slate-800 text-slate-400 hover:text-white rounded-xl transition-all shadow-md hover:-translate-y-0.5 flex items-center justify-center"
              title="Visit GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>

            {/* LinkedIn Profile */}
            <a 
              href="https://linkedin.com/in/usamabinmahbub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-950 border border-slate-900 hover:border-slate-800 text-slate-400 hover:text-[#0A66C2] rounded-xl transition-all shadow-md hover:-translate-y-0.5 flex items-center justify-center"
              title="Connect on LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Direct Mail */}
            <a 
              href={`mailto:${personalEmail}`}
              className="p-2.5 bg-slate-950 border border-slate-900 hover:border-slate-800 text-slate-400 hover:text-rose-400 rounded-xl transition-all shadow-md hover:-translate-y-0.5 flex items-center justify-center"
              title="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}
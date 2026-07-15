"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  MapPin, Star, ShieldCheck, Clock, Award, 
  ChevronDown, ArrowRight, Mail, Sparkles, 
  BookOpen, Users, Compass, CheckCircle2 
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-[#0B0F19] text-slate-100 min-h-screen overflow-hidden">
      <HeroSection />
      <CategoriesSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

// ==========================================
// 1. HERO SECTION
// ==========================================
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-950/80 border border-indigo-500/30 rounded-full text-xs font-semibold text-indigo-300">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
          Discover Your Ultimate Gateway in 2026
        </div>

        <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white leading-tight">
          Book Your Next <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-500 bg-clip-text text-transparent">
            Dream Adventure
          </span>
        </h1>

        <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
          Skip the hassle of planning. Explore hand-picked, premium destinations globally with instant confirmation and secure transactions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/destiny">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-[0_4px_20px_rgba(79,70,229,0.3)] flex items-center gap-2 group text-sm">
              Start Exploring
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
          <a href="#features">
            <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold rounded-2xl transition-all text-sm">
              How It Works
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2. CATEGORIES SECTION
// ==========================================
const categories = [
  { name: "Beach", count: "120+ Places", icon: "🏖️", gradient: "from-blue-500/20 to-cyan-500/10" },
  { name: "Mountain", count: "85+ Places", icon: "🏔️", gradient: "from-emerald-500/20 to-teal-500/10" },
  { name: "Desert", count: "40+ Places", icon: "🌵", gradient: "from-amber-500/20 to-orange-500/10" },
  { name: "Forest", count: "65+ Places", icon: "🌲", gradient: "from-green-500/20 to-emerald-500/10" },
];

function CategoriesSection() {
  return (
    <section className="py-16 border-t border-slate-900 bg-slate-950/30">
      <div className="container mx-auto px-4 max-w-6xl space-y-10">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl font-extrabold text-white">Browse by Category</h2>
          <p className="text-slate-400 text-sm">Find the perfect climate and atmosphere for your next trip.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className={`group p-6 bg-[#0F172A]/80 border border-slate-800/80 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">{cat.icon}</span>
              <h3 className="text-md font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">{cat.name}</h3>
              <p className="text-xs text-slate-500 mt-1">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. FEATURES & SERVICES SECTION
// ==========================================
const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    title: "Secure Checkout",
    desc: "100% encrypted bank-grade checkout system with instant confirmation."
  },
  {
    icon: <Clock className="w-6 h-6 text-indigo-400" />,
    title: "Flexible Scheduling",
    desc: "Free cancellation options up to 48 hours before your planned arrival."
  },
  {
    icon: <Award className="w-6 h-6 text-amber-400" />,
    title: "Premium Handpicked",
    desc: "All properties and experiences are physically verified for top quality standards."
  }
];

function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-slate-950/20">
      <div className="container mx-auto px-4 max-w-6xl space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-400">Why BookNow</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Effortless Traveling Starts Here</h2>
          <p className="text-slate-400 text-sm">We manage the heavy lifting so you can focus on creating memories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div key={idx} className="p-6 bg-[#0F172A]/60 border border-slate-900 rounded-2xl space-y-4 hover:border-slate-800 transition-all">
              <div className="w-12 h-12 bg-slate-950/80 rounded-xl flex items-center justify-center border border-slate-800">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{feat.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 4. STATISTICS SECTION
// ==========================================
const stats = [
  { value: "15K+", label: "Happy Adventurers", icon: <Users className="w-5 h-5 text-emerald-400" /> },
  { value: "500+", label: "Exotic Destinations", icon: <Compass className="w-5 h-5 text-indigo-400" /> },
  { value: "4.9/5", label: "Client Star Rating", icon: <Star className="w-5 h-5 text-amber-400 fill-current" /> }
];

function StatsSection() {
  return (
    <section className="py-16 bg-[#0F172A]/40 border-y border-slate-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4 justify-center md:justify-start p-4">
              <div className="w-10 h-10 rounded-full bg-slate-950/80 flex items-center justify-center border border-slate-800">
                {stat.icon}
              </div>
              <div>
                <span className="text-3xl font-black text-white block">{stat.value}</span>
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 5. TESTIMONIALS SECTION
// ==========================================
const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Explorer & Photographer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    comment: "Booking my trip to Bali through BookNow was a breeze. The bamboo chalet looked exactly like the photos, and the premium supports were amazing!"
  },
  {
    name: "Michael Chen",
    role: "Digital Nomad",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    comment: "I travel non-stop for work. Having verified ultra-fast WiFi details on properties before booking is a complete game changer for me."
  }
];

function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-950/30">
      <div className="container mx-auto px-4 max-w-5xl space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">Reviews</span>
          <h2 className="text-3xl font-extrabold text-white">Loved by Global Travelers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((test, idx) => (
            <div key={idx} className="p-6 bg-[#0F172A]/80 border border-slate-800/80 rounded-2xl flex flex-col justify-between space-y-6">
              <p className="text-slate-300 text-sm leading-relaxed italic">"{test.comment}"</p>
              <div className="flex items-center gap-3.5">
                <img src={test.img} alt={test.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="text-sm font-bold text-slate-100">{test.name}</h4>
                  <span className="text-xs text-slate-500">{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 6. FAQ SECTION
// ==========================================
const faqs = [
  { q: "Is there a free cancellation policy?", a: "Yes! Most of our premium properties offer free cancellations up to 48 hours before your check-in date." },
  { q: "How do I receive my booking confirmation?", a: "Instantly! Once your checkout is complete, we generate a secured confirmation receipt and send it straight to your registered email." },
  { q: "Are the amenities verified?", a: "Absolutely. Our local team physically reviews property locations, WiFi strength, and other premium features listed." }
];

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-slate-950/10">
      <div className="container mx-auto px-4 max-w-3xl space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-white">Got Questions?</h2>
          <p className="text-slate-400 text-sm">Everything you need to know about booking with us.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-[#0F172A]/80 border border-slate-800/80 rounded-xl overflow-hidden transition-all"
            >
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-sm text-slate-100 hover:text-indigo-400 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openIdx === idx ? "rotate-180 text-indigo-400" : ""}`} />
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-5 pt-1 text-xs text-slate-400 leading-relaxed border-t border-slate-900">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 7. CALL TO ACTION (CTA) SECTION
// ==========================================
function CTASection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl bg-gradient-to-br from-indigo-950 to-slate-950 border border-indigo-500/20 rounded-3xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

        <h2 className="text-3xl md:text-5xl font-black text-white">Ready for your next journey?</h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
          Sign up now to receive limited winter vacation vouchers and 10% discount codes straight to your inbox.
        </p>

        {/* Minimal Newsletter Inline Form */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-4">
          <div className="relative w-full">
            <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl text-xs text-slate-100 outline-none transition-all placeholder:text-slate-600"
            />
          </div>
          <button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition-all whitespace-nowrap">
            Join Newsletter
          </button>
        </div>
      </div>
    </section>
  );
}
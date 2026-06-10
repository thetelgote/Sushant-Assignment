import React from "react";
import { FiAward, FiUsers, FiTrendingUp } from "react-icons/fi";

const BRANDS = [
  "Google",
  "Microsoft",
  "AWS",
  "Cloudflare",
  "GitHub",
];

const TRUST_ITEMS = [
  {
    icon: <FiAward size={22} />,
    title: "SOC 2 Certified",
    sub: "Enterprise-grade security compliance",
  },
  {
    icon: <FiUsers size={22} />,
    title: "500K+ Users",
    sub: "Growing community worldwide",
  },
  {
    icon: <FiTrendingUp size={22} />,
    title: "99.9% Uptime",
    sub: "Reliable 24/7 service",
  },
];

export default function Trust() {
  return (
    <section className="py-20 border-y border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <p className="text-xs text-slate-500 font-semibold tracking-widest uppercase mb-10">
          Trusted by security teams worldwide
        </p>

        {/* Brands */}
        <div className="flex flex-wrap justify-center items-center gap-10 mb-16">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="text-xl font-bold text-slate-600 hover:text-cyan-400 transition-colors"
            >
              {brand}
            </span>
          ))}
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="text-cyan-400 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-slate-400 text-sm">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
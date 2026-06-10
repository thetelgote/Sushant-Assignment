import React from "react";
import { FiShield, FiArrowRight, FiPlay } from "react-icons/fi";

const STATS = [
  { num: "10M+", label: "URLs Scanned" },
  { num: "99.7%", label: "Accuracy Rate" },
  { num: "50ms", label: "Avg Response" },
  { num: "24/7", label: "AI Protection" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%)]"></div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-8">
          <FiShield size={14} />
          AI-Powered Cybersecurity Platform
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Protect Your Digital World
          <br />
          with{" "}
          <span className="text-cyan-400">
            AI Intelligence
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-10">
          NetraSecure uses advanced AI to detect phishing URLs,
          analyze threats in real-time, and answer your security
          questions — all in one place.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#scanner"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition duration-300"
          >
            Get Protected Now
            <FiArrowRight />
          </a>

          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 border border-slate-700 hover:border-cyan-500 text-white px-8 py-4 rounded-lg font-semibold transition duration-300"
          >
            <FiPlay size={16} />
            Watch Demo
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((item) => (
            <div key={item.label}>
              <h3 className="text-3xl font-bold text-cyan-400">
                {item.num}
              </h3>
              <p className="text-slate-500 mt-2 text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from "react";
import {
  FiShield,
  FiSearch,
  FiMessageSquare,
  FiBell,
  FiBarChart2,
  FiGlobe,
} from "react-icons/fi";

const FEATURES = [
  {
    icon: <FiSearch size={22} />,
    title: "URL Scanner",
    desc: "Paste any URL and get an instant risk assessment with detailed threat breakdown and safety score.",
    tag: "Core",
  },
  {
    icon: <FiMessageSquare size={22} />,
    title: "AI Security Chatbot",
    desc: "Ask anything about cybersecurity. Get expert-level explanations powered by AI.",
    tag: "AI",
  },
  {
    icon: <FiShield size={22} />,
    title: "Phishing Detection",
    desc: "Advanced ML models identify phishing attempts with high accuracy across multiple threat categories.",
    tag: "ML",
  },
  {
    icon: <FiBell size={22} />,
    title: "Real-Time Alerts",
    desc: "Instant notifications when threats are detected. Stay ahead of attacks before they cause damage.",
    tag: "Live",
  },
  {
    icon: <FiBarChart2 size={22} />,
    title: "Threat Dashboard",
    desc: "Visual analytics of threats detected, response times, and security trends over time.",
    tag: "Analytics",
  },
  {
    icon: <FiGlobe size={22} />,
    title: "Global Threat Intel",
    desc: "Leverages a global threat database updated continuously from security researchers.",
    tag: "Intel",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold uppercase tracking-wider mb-3">
            Capabilities
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to{" "}
            <span className="text-cyan-400">
              Stay Safe
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            A full suite of AI-powered security tools designed
            for individuals and businesses alike.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  {feature.icon}
                </div>

                <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  {feature.tag}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
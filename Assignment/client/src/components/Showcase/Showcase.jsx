import React from "react";
import {
  FiShield,
  FiAlertTriangle,
  FiCheckCircle,
} from "react-icons/fi";

const METRICS = [
  {
    label: "Threats Blocked",
    val: "1,284",
    color: "text-red-400",
    icon: <FiAlertTriangle size={14} />,
  },
  {
    label: "Safe URLs",
    val: "48,920",
    color: "text-cyan-400",
    icon: <FiCheckCircle size={14} />,
  },
  {
    label: "Scans Today",
    val: "3,071",
    color: "text-violet-400",
    icon: <FiShield size={14} />,
  },
];

const SCANS = [
  {
    url: "https://secure-login-verify.net/paypal",
    risk: "High",
    color: "text-red-400 bg-red-400/10",
  },
  {
    url: "https://github.com/vercel/next.js",
    risk: "Safe",
    color: "text-cyan-400 bg-cyan-400/10",
  },
  {
    url: "https://free-iphone15-winner.tk",
    risk: "Critical",
    color: "text-red-600 bg-red-600/10",
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-cyan-400 font-semibold uppercase tracking-wider mb-3">
          Live Preview
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          See It in <span className="text-cyan-400">Action</span>
        </h2>

        <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-12">
          A glimpse of the NetraSecure dashboard analyzing threats
          in real time.
        </p>

        {/* Browser Window */}
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Browser Header */}
          <div className="flex items-center gap-2 px-5 py-4 bg-slate-800 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <div className="flex-1 text-center">
              <span className="text-xs text-slate-400">
                netrasecure.ai — Threat Dashboard
              </span>
            </div>
          </div>

          {/* Dashboard */}
          <div className="p-6">
            {/* Metric Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-slate-800 border border-slate-700 rounded-xl p-5"
                >
                  <div
                    className={`flex items-center gap-2 text-sm ${metric.color} mb-2`}
                  >
                    {metric.icon}
                    {metric.label}
                  </div>

                  <div className="text-2xl font-bold text-white">
                    {metric.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Scan Results */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
              <p className="text-sm text-slate-400 mb-4">
                Recent Scan Results
              </p>

              {SCANS.map((scan) => (
                <div
                  key={scan.url}
                  className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0"
                >
                  <span className="text-xs text-slate-400 font-mono truncate max-w-[220px] md:max-w-md">
                    {scan.url}
                  </span>

                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${scan.color}`}
                  >
                    {scan.risk}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
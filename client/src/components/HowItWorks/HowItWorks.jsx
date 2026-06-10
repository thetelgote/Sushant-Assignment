import React from "react";
import {
  FiLink,
  FiCpu,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

const STEPS = [
  {
    num: "01",
    icon: <FiLink size={22} />,
    title: "Submit a URL or Question",
    desc: "Paste any URL into the scanner or type a security question into the AI chatbot.",
  },
  {
    num: "02",
    icon: <FiCpu size={22} />,
    title: "AI Analyzes in Real Time",
    desc: "Our models check against 50+ threat indicators and our global threat database.",
  },
  {
    num: "03",
    icon: <FiShield size={22} />,
    title: "Get Instant Results",
    desc: "Receive a detailed risk score, threat breakdown, and actionable recommendations.",
  },
  {
    num: "04",
    icon: <FiCheckCircle size={22} />,
    title: "Stay Protected",
    desc: "Use your results to make informed decisions and keep your digital life secure.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-slate-900/20"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold uppercase tracking-wider mb-3">
            Process
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How <span className="text-cyan-400">It Works</span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            From input to insight in under 50 milliseconds.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <div
              key={step.num}
              className="text-center p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500/40 transition-all duration-300"
            >
              {/* Icon */}
              <div className="relative inline-block mb-6">
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 border-2 border-cyan-500/20 flex items-center justify-center text-cyan-400 mx-auto">
                  {step.icon}
                </div>

                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center text-slate-950 text-xs font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Step Number */}
              <p className="text-xs font-bold tracking-widest text-slate-500 mb-2">
                {step.num}
              </p>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
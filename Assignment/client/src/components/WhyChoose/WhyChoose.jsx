import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const POINTS = [
  "No technical expertise required — built for everyone",
  "Results in under 50ms with 99.7% accuracy",
  "Trained on 10M+ real phishing & malware samples",
  "Privacy-first: we never store your scanned URLs",
  "Free tier available with generous scan limits",
  "Enterprise API access for seamless integration",
];

const STATS = [
  { num: "10M+", label: "URLs Scanned", sub: "and counting" },
  { num: "99.7%", label: "Accuracy", sub: "industry-leading" },
  { num: "<50ms", label: "Response Time", sub: "blazing fast" },
  { num: "150+", label: "Countries", sub: "global coverage" },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="py-24 bg-slate-900/20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <div>
            <p className="text-cyan-400 font-semibold uppercase tracking-wider mb-3">
              Why NetraSecure?
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Thousands of{" "}
              <span className="text-cyan-400">
                Security Professionals
              </span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We built NetraSecure because existing tools were
              too complex, too slow, or too expensive.
              You deserve simple, powerful protection.
            </p>

            <div className="space-y-4">
              {POINTS.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3"
                >
                  <FiCheckCircle
                    className="text-cyan-400 mt-1 flex-shrink-0"
                    size={18}
                  />

                  <span className="text-slate-300">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Stats */}
          <div className="grid grid-cols-2 gap-5">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {stat.num}
                </div>

                <div className="font-semibold text-white mb-1">
                  {stat.label}
                </div>

                <div className="text-slate-500 text-sm">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
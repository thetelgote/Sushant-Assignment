import React from "react";
import { FiArrowRight, FiShield } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-cyan-500/5 p-12 md:p-16 text-center">
          
          {/* Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            
            {/* Icon */}
            <div className="text-6xl mb-6">
              🛡️
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Ready to Secure Your
              <br />
              <span className="text-cyan-400">
                Digital Life?
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-400 text-lg max-w-md mx-auto leading-relaxed mb-10">
              Join 500,000+ users who trust NetraSecure
              to protect them from online threats every day.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              
              <a
                href="#scanner"
                className="inline-flex items-center gap-2 px-9 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-xl transition-all"
              >
                Start for Free
                <FiArrowRight size={18} />
              </a>

              <a
                href="#features"
                className="inline-flex items-center gap-2 px-9 py-4 border border-slate-700 hover:border-cyan-500 text-white rounded-xl transition-all"
              >
                <FiShield size={16} />
                View Plans
              </a>

            </div>

            {/* Footer Text */}
            <p className="text-slate-500 text-xs">
              No credit card required · Free tier always available
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
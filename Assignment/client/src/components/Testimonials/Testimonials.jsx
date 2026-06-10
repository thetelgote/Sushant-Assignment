import React from "react";
import { FiStar } from "react-icons/fi";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Security Analyst, Infosys",
    text: "NetraSecure caught 3 phishing attempts in our organization within the first week. The accuracy is outstanding.",
  },
  {
    name: "James Carter",
    role: "CTO, FinanceFlow",
    text: "We integrated the API into our onboarding flow. It's fast, accurate, and our customers trust us more because of it.",
  },
  {
    name: "Anita Kulkarni",
    role: "Freelance Developer",
    text: "The chatbot actually teaches you about threats while answering questions. It's like having a personal security mentor.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-semibold uppercase tracking-wider mb-3">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Loved by{" "}
            <span className="text-cyan-400">
              Security Teams
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    size={14}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* User */}
              <div>
                <p className="font-semibold text-white text-sm">
                  {testimonial.name}
                </p>

                <p className="text-slate-500 text-xs mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
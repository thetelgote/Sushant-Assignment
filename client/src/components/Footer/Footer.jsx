import React from "react";
import {
  FiShield,
  FiGithub,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";

const LINKS = {
  Product: [
    "Features",
    "URL Scanner",
    "AI Chatbot",
    "API Access",
    "Pricing",
  ],
  Company: [
    "About",
    "Blog",
    "Careers",
    "Press",
    "Contact",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Security",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <FiShield className="text-cyan-400" />
              Netra
              <span className="text-cyan-400">
                Secure
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              AI-powered cybersecurity for everyone.
              Stay safe, stay informed.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[FiGithub, FiTwitter, FiLinkedin].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 cursor-pointer transition-all"
                  >
                    <Icon size={16} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(LINKS).map(
            ([heading, links]) => (
              <div key={heading}>
                <h3 className="font-semibold text-white text-sm mb-4">
                  {heading}
                </h3>

                <div className="flex flex-col gap-3">
                  {links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © 2026 NetraSecure AI.
            All rights reserved.
          </p>

          <p className="text-slate-500 text-xs">
            Built with ❤️ for a safer internet
          </p>
        </div>

      </div>
    </footer>
  );
}
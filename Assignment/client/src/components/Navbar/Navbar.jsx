import React, { useState, useEffect } from "react";
import { FiShield, FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Scanner", href: "#scanner" },
  { label: "Chatbot", href: "#chatbot" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-[68px] transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 font-bold text-xl text-white"
        >
          <FiShield className="text-cyan-400 text-2xl" />
          Netra<span className="text-cyan-400">Secure</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <a
            href="#scanner"
            className="hidden md:inline-flex bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
          >
            Get Started
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[68px] left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 flex flex-col gap-5 px-6 overflow-hidden transition-all duration-300 ${
          open ? "max-h-80 py-6" : "max-h-0 py-0"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-white transition-colors text-base"
          >
            {link.label}
          </a>
        ))}

        <a
          href="#scanner"
          onClick={() => setOpen(false)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg font-medium self-start transition-all duration-300"
        >
          Get Started
        </a>
      </div>
    </>
  );
}
import React, { useState } from "react";
import { FiSend, FiMail } from "react-icons/fi";
import { submitContact } from "../../services/api";
import { toast } from "react-toastify";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await submitContact(form);

      toast.success(
        "Message sent! We'll get back to you soon."
      );

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <p className="text-cyan-400 font-semibold uppercase tracking-wider mb-3">
          Get In Touch
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact{" "}
          <span className="text-cyan-400">
            Us
          </span>
        </h2>

        <p className="text-slate-400 text-lg mb-10">
          Have a question, partnership inquiry,
          or enterprise request? We'd love to
          hear from you.
        </p>

        {/* Form */}
        <div className="flex flex-col gap-4 text-left">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your message..."
            value={form.message}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 resize-y focus:outline-none focus:border-cyan-400"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all ${
              loading
                ? "bg-cyan-500/60 cursor-not-allowed text-slate-950"
                : "bg-cyan-500 hover:bg-cyan-600 text-slate-950"
            }`}
          >
            <FiSend size={16} />

            {loading
              ? "Sending..."
              : "Send Message"}
          </button>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center gap-2 text-slate-400 text-sm mt-6">
          <FiMail size={14} />
          support@netrasecure.ai
        </div>
      </div>
    </section>
  );
}
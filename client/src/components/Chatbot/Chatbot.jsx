import React, { useState, useRef, useEffect } from "react";
import { FiSend, FiMessageSquare, FiUser } from "react-icons/fi";
import { sendChatMessage } from "../../services/api";
import { toast } from "react-toastify";

const SUGGESTIONS = [
  "What is phishing?",
  "How do I spot a fake website?",
  "What is two-factor authentication?",
  "Is this email a scam?",
];

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm the NetraSecure AI assistant. Ask me anything about cybersecurity — threats, best practices, or how to stay safe online.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const send = async (text) => {
    const msg = (text || input).trim();

    if (!msg) return;

    setInput("");

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: msg,
      },
    ]);

    setLoading(true);

    try {
      const history = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const data = await sendChatMessage(msg, history);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      toast.error("Failed to get response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="chatbot"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-cyan-400 font-semibold uppercase tracking-wider mb-3">
            AI Assistant
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ask Our{" "}
            <span className="text-cyan-400">
              Security AI
            </span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Powered by AI. Get expert answers to any
            cybersecurity question instantly.
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 flex flex-col gap-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-3 items-end ${
                  m.role === "user"
                    ? "flex-row-reverse"
                    : "flex-row"
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center ${
                    m.role === "assistant"
                      ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                      : "bg-slate-800 text-slate-300"
                  }`}
                >
                  {m.role === "assistant" ? (
                    <FiMessageSquare size={13} />
                  ) : (
                    <FiUser size={13} />
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[75%] px-4 py-3 text-sm leading-relaxed rounded-2xl ${
                    m.role === "user"
                      ? "bg-cyan-500 text-slate-950 font-medium rounded-br-sm"
                      : "bg-slate-800 text-slate-200 rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {/* Loading */}
            {loading && (
              <div className="flex gap-3 items-end">
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FiMessageSquare size={13} />
                </div>

                <div className="bg-slate-800 rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-slate-400 animate-pulse"
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          <div className="px-6 pt-3 pb-2 flex flex-wrap gap-2 border-t border-slate-800">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-xs text-slate-400 px-3 py-1.5 rounded-full border border-slate-700 hover:text-white hover:border-cyan-500 transition-all"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 flex gap-3 border-t border-slate-800">
            <input
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" &&
                !e.shiftKey &&
                send()
              }
              placeholder="Ask a security question..."
              className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />

            <button
              onClick={() => send()}
              disabled={loading || !input.trim()}
              className={`p-3 rounded-xl transition-all ${
                loading || !input.trim()
                  ? "bg-cyan-500 opacity-40 cursor-not-allowed"
                  : "bg-cyan-500 hover:bg-cyan-600 text-slate-950"
              }`}
            >
              <FiSend size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
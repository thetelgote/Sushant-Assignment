import React, { useState } from "react";
import {
  FiSearch,
  FiAlertTriangle,
  FiCheckCircle,
} from "react-icons/fi";
import { scanUrl } from "../../services/api";
import { toast } from "react-toastify";

export default function UrlScanner() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleScan = async () => {
    if (!url.trim()) {
      toast.error("Please enter a URL");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const data = await scanUrl(url);
      setResult(data);
    } catch (error) {
      toast.error("Scan failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isSafe = result?.riskLevel === "safe";

  const riskColorClass = result
    ? isSafe
      ? "text-cyan-400 border-cyan-400/30 bg-cyan-400/10"
      : result.riskLevel === "medium"
      ? "text-yellow-400 border-yellow-400/30 bg-yellow-400/10"
      : "text-red-400 border-red-400/30 bg-red-400/10"
    : "";

  const scoreColor = result
    ? isSafe
      ? "text-cyan-400"
      : result.riskLevel === "medium"
      ? "text-yellow-400"
      : "text-red-400"
    : "";

  return (
    <section
      id="scanner"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-cyan-400 font-semibold uppercase tracking-wider mb-3">
          Try It Now
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Scan Any{" "}
          <span className="text-cyan-400">
            URL Instantly
          </span>
        </h2>

        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Enter any URL and our AI will analyze it for threats
          in real time.
        </p>

        {/* Input */}
        <div className="flex flex-col md:flex-row gap-3 mb-8">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && handleScan()
            }
            placeholder="https://example.com/suspicious-page"
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />

          <button
            onClick={handleScan}
            disabled={loading}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span>Scanning...</span>
            ) : (
              <>
                <FiSearch size={16} />
                Scan URL
              </>
            )}
          </button>
        </div>

        {/* Result */}
        {result && (
          <div
            className={`border rounded-2xl p-6 text-left bg-slate-900 ${riskColorClass}`}
          >
            <div className="flex items-center gap-3 mb-4">
              {isSafe ? (
                <FiCheckCircle
                  size={22}
                  className="text-cyan-400"
                />
              ) : (
                <FiAlertTriangle
                  size={22}
                  className="text-red-400"
                />
              )}

              <span
                className={`font-bold text-lg ${scoreColor}`}
              >
                {isSafe
                  ? "URL is Safe"
                  : `Risk Level: ${result.riskLevel?.toUpperCase()}`}
              </span>

              <span
                className={`ml-auto text-2xl font-bold ${scoreColor}`}
              >
                {result.score}/100
              </span>
            </div>

            {result.details && (
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {result.details}
              </p>
            )}

            {result.categories?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {result.categories.map((category) => (
                  <span
                    key={category}
                    className={`text-xs font-medium px-3 py-1 rounded-full border ${riskColorClass}`}
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="cta" className="py-24 px-6 bg-[#0D1B2A]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-blue-400" />
          <p className="text-xs text-blue-400 uppercase tracking-widest font-semibold">무료 체험</p>
          <div className="w-8 h-0.5 bg-blue-400" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          지금 바로 무료로 체험해보세요
        </h2>
        <p className="text-gray-400 mb-10 text-sm">
          신용카드 없이 14일 무료 체험. 언제든지 취소 가능합니다.
        </p>

        {submitted ? (
          <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg px-6 py-8 text-blue-300 text-sm">
            신청이 완료됐습니다. 확인 메일을 보내드렸습니다.<br />
            담당자가 24시간 이내에 연락드리겠습니다.
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="회사 이메일 주소"
                required
                className="flex-1 bg-white/5 border border-white/15 text-white placeholder-gray-500 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded text-sm transition-colors whitespace-nowrap"
              >
                {loading ? "신청 중…" : "데모 신청"}
              </button>
            </form>
            {error && (
              <p className="mt-3 text-red-400 text-sm">{error}</p>
            )}
          </>
        )}

        <p className="text-xs text-gray-600 mt-4">
          개인정보는 데모 안내 목적으로만 사용됩니다.
        </p>
      </div>
    </section>
  );
}

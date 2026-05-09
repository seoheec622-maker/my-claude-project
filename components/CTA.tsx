"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="cta" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          지금 바로 무료로 체험해보세요
        </h2>
        <p className="text-gray-400 mb-10">
          신용카드 없이 14일 무료 체험. 언제든지 취소 가능합니다.
        </p>
        {submitted ? (
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl px-6 py-8 text-blue-300">
            신청이 완료됐습니다. 담당자가 24시간 이내에 연락드리겠습니다.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="회사 이메일 주소"
              required
              className="flex-1 bg-[#111827] border border-[#1F2937] text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
            >
              데모 신청
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

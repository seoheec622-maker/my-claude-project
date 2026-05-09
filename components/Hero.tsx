export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-blue-400 text-sm mb-8">
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
          AI 기반 법무 자동화 플랫폼
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          법무팀의 모든 업무를,
          <br />
          <span className="text-blue-400">AI가 함께합니다</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          계약 검토부터 소송 관리까지 — 반복 업무는 줄이고,
          전략적 판단에 집중하세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cta"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            무료 데모 신청
          </a>
          <a
            href="#features"
            className="border border-[#1F2937] hover:border-gray-500 text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            기능 살펴보기
          </a>
        </div>
      </div>
    </section>
  );
}

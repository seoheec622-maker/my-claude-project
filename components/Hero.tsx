export default function Hero() {
  return (
    <section className="bg-[#0D1B2A] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-blue-300 mb-8 uppercase tracking-widest font-medium">
          <span>AI 기반 법무 자동화</span>
          <span className="text-white/20">•</span>
          <span>데이터 중심 분석</span>
          <span className="text-white/20">•</span>
          <span>기업 법무팀 전용</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
              법무팀의 반복 업무,<br />
              <span className="text-blue-400">AI로 자동화합니다</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              계약 검토부터 소송 일정 관리까지 —<br />
              전략적 판단에만 집중할 수 있도록, LegalAI가 함께합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#cta"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded text-sm transition-colors text-center"
              >
                무료 데모 신청
              </a>
              <a
                href="#features"
                className="border border-white/20 hover:border-white/50 text-gray-200 hover:text-white font-semibold px-7 py-3 rounded text-sm transition-colors text-center"
              >
                기능 살펴보기
              </a>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-3">
            {[
              { num: "85%", label: "계약 검토 시간 단축" },
              { num: "실시간", label: "법령 업데이트 반영" },
              { num: "0건", label: "소송 기일 누락" },
              { num: "3분", label: "계약서 초안 생성" },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded p-5">
                <p className="text-2xl font-bold text-blue-400 mb-1">{item.num}</p>
                <p className="text-xs text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

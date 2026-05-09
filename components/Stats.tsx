const stats = [
  { value: "85%", label: "계약 검토 시간 단축", sub: "평균 8시간 → 1.2시간" },
  { value: "실시간", label: "법령 업데이트 반영", sub: "최신 개정법 즉시 적용" },
  { value: "0건", label: "소송 기일 누락", sub: "자동 알림 시스템" },
  { value: "3분", label: "계약서 초안 생성", sub: "템플릿 기반 자동 작성" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-20 px-6 bg-white border-y border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-0.5 bg-blue-600" />
          <p className="text-xs text-blue-600 uppercase tracking-widest font-semibold">도입 성과</p>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-12">
          숫자로 증명된 효과
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-blue-600 pl-4">
              <p className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-1">{s.value}</p>
              <p className="text-sm font-semibold text-[#0D1B2A] mb-1">{s.label}</p>
              <p className="text-xs text-gray-400">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

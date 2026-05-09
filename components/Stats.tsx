const stats = [
  { value: "85%", label: "계약 검토 시간 단축" },
  { value: "실시간", label: "법령 업데이트 반영" },
  { value: "0건", label: "소송 기일 누락" },
  { value: "3분", label: "계약서 초안 생성 시간" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-20 px-6 border-y border-[#1F2937]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{s.value}</p>
              <p className="text-sm text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

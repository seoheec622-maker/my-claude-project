import { FileSearch, FilePen, Scale, ShieldCheck, Calendar } from "lucide-react";

const features = [
  {
    icon: FileSearch,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "계약서 자동 검토",
    desc: "AI가 계약서를 분석해 위험 조항, 불공정 조건, 누락 항목을 자동으로 감지합니다.",
  },
  {
    icon: FilePen,
    color: "text-purple-600",
    bg: "bg-purple-50",
    title: "계약서 초안 작성",
    desc: "조건을 입력하면 법적 요건을 갖춘 계약서 초안을 즉시 생성합니다.",
  },
  {
    icon: Scale,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    title: "법령 리서치",
    desc: "항상 최신 법령·판례를 기반으로 검색하며, 개정 사항을 실시간으로 반영합니다.",
  },
  {
    icon: ShieldCheck,
    color: "text-green-600",
    bg: "bg-green-50",
    title: "컴플라이언스 관리",
    desc: "규정 준수 현황을 시각화하고 미비 항목을 자동으로 알려줍니다.",
  },
  {
    icon: Calendar,
    color: "text-orange-500",
    bg: "bg-orange-50",
    title: "소송 일정·문서 관리",
    desc: "기일 자동 등록, 준비서면 기한 알림, 소송 관련 문서를 한곳에서 관리합니다.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-0.5 bg-blue-600" />
          <p className="text-xs text-blue-600 uppercase tracking-widest font-semibold">핵심 기능</p>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-3">
          법무팀에 꼭 필요한 5가지 자동화
        </h2>
        <p className="text-gray-500 mb-12 max-w-xl">반복적인 업무 시간을 줄이고, 고부가가치 업무에 집중할 수 있습니다.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex p-2.5 rounded-lg ${f.bg} mb-4`}>
                <f.icon className={`w-5 h-5 ${f.color}`} />
              </div>
              <h3 className="text-[#0D1B2A] font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
          {/* 빈 카드 자리 채우기 (3열 그리드 맞춤) */}
          <div className="bg-[#0D1B2A] rounded-lg p-6 flex flex-col justify-between">
            <p className="text-white font-semibold text-lg leading-snug mb-6">
              "검토 시간을 85% 줄이고<br />전략 업무에 집중합니다"
            </p>
            <a href="#cta" className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
              데모 신청 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

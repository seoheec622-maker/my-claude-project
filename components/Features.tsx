import { FileSearch, FilePen, Scale, ShieldCheck, Calendar } from "lucide-react";

const features = [
  {
    icon: FileSearch,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    title: "계약서 자동 검토",
    desc: "AI가 계약서를 분석해 위험 조항, 불공정 조건, 누락 항목을 자동으로 감지합니다.",
  },
  {
    icon: FilePen,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    title: "계약서 초안 작성",
    desc: "조건을 입력하면 법적 요건을 갖춘 계약서 초안을 즉시 생성합니다.",
  },
  {
    icon: Scale,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    title: "법령 리서치",
    desc: "항상 최신 법령·판례를 기반으로 검색하며, 개정 사항을 실시간으로 반영합니다.",
  },
  {
    icon: ShieldCheck,
    color: "text-green-400",
    bg: "bg-green-400/10",
    title: "컴플라이언스 관리",
    desc: "규정 준수 현황을 시각화하고 미비 항목을 자동으로 알려줍니다.",
  },
  {
    icon: Calendar,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    title: "소송 일정·문서 관리",
    desc: "기일 자동 등록, 준비서면 기한 알림, 소송 관련 문서를 한곳에서 관리합니다.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-gray-500 mb-4 uppercase tracking-widest">기능</p>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
          법무팀에 꼭 필요한 5가지 자동화
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 hover:border-gray-600 transition-colors"
            >
              <div className={`inline-flex p-2.5 rounded-lg ${f.bg} mb-4`}>
                <f.icon className={`w-5 h-5 ${f.color}`} />
              </div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  FileSearch,
  FilePen,
  Scale,
  ShieldCheck,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-0.5 bg-blue-600" />
          <p className="text-xs text-blue-600 uppercase tracking-widest font-semibold">대시보드 미리보기</p>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-3">
          법무팀 업무를 한눈에
        </h2>
        <p className="text-gray-500 mb-12 max-w-xl">모든 업무 현황을 하나의 화면에서 실시간으로 파악하세요.</p>

        <div className="bg-[#F8F9FA] border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-5 pb-4 border-b border-gray-200">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <span className="ml-3 text-xs text-gray-400 font-mono">LegalAI 대시보드</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 계약서 검토 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FileSearch className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-[#0D1B2A]">계약서 검토</span>
                </div>
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">진행 중</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <AlertTriangle className="w-3 h-3 text-amber-500 flex-shrink-0" />
                  위험 조항 3건 감지됨
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                  검토 완료율 87%
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
                  <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: "87%" }} />
                </div>
              </div>
            </div>

            {/* 계약서 초안 작성 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FilePen className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-semibold text-[#0D1B2A]">계약서 초안 작성</span>
                </div>
              </div>
              <div className="space-y-1.5">
                {["NDA 계약서_v2.docx", "용역계약서_초안.docx", "MOU_2026.docx"].map((doc) => (
                  <div key={doc} className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    {doc}
                  </div>
                ))}
              </div>
            </div>

            {/* 법령 리서치 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Scale className="w-4 h-4 text-cyan-600" />
                <span className="text-sm font-semibold text-[#0D1B2A]">법령 리서치</span>
              </div>
              <div className="text-xs text-gray-400 mb-2">최신 업데이트: 2026.05.09</div>
              <div className="bg-gray-50 border border-gray-200 rounded px-3 py-2 text-xs text-gray-400">
                개인정보보호법 검색...
              </div>
            </div>

            {/* 컴플라이언스 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-[#0D1B2A]">컴플라이언스</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14">
                  <svg viewBox="0 0 36 36" className="w-14 h-14 -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#16a34a" strokeWidth="3"
                      strokeDasharray="92 100" strokeLinecap="round" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-green-600">92%</span>
                </div>
                <div className="text-xs text-gray-500">
                  <p>규정 준수 현황</p>
                  <p className="text-amber-600 mt-1">미비 항목 2건</p>
                </div>
              </div>
            </div>

            {/* 소송 관리 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-[#0D1B2A]">소송 일정 관리</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  {[
                    { date: "05.15", event: "변론기일 (서울중앙)", color: "text-red-500" },
                    { date: "05.22", event: "준비서면 제출", color: "text-amber-500" },
                    { date: "06.03", event: "항소심 기일", color: "text-blue-600" },
                  ].map((item) => (
                    <div key={item.date} className="flex items-center gap-3 text-xs">
                      <span className={`font-mono font-bold ${item.color}`}>{item.date}</span>
                      <span className="text-gray-500">{item.event}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="w-3 h-3 text-gray-400" />
                  진행 중 소송 <span className="text-[#0D1B2A] font-semibold ml-1">7건</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

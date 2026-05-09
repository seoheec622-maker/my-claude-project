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
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-gray-500 mb-4 uppercase tracking-widest">대시보드 미리보기</p>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
          법무팀 업무를 한눈에
        </h2>

        <div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-6 shadow-2xl">
          {/* Top bar */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-4 text-xs text-gray-500">LegalAI 대시보드</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 계약서 검토 */}
            <div className="bg-[#0A0D14] border border-[#1F2937] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <FileSearch className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-white">계약서 검토</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <AlertTriangle className="w-3 h-3 text-yellow-400" />
                  <span className="text-gray-400">위험 조항 3건 감지됨</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span className="text-gray-400">검토 완료율 87%</span>
                </div>
                <div className="w-full bg-[#1F2937] rounded-full h-1.5 mt-2">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "87%" }} />
                </div>
              </div>
            </div>

            {/* 계약서 초안 작성 */}
            <div className="bg-[#0A0D14] border border-[#1F2937] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <FilePen className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white">계약서 초안 작성</span>
              </div>
              <div className="space-y-1.5">
                {["NDA 계약서_v2.docx", "용역계약서_초안.docx", "MOU_2026.docx"].map((doc) => (
                  <div key={doc} className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-1 h-1 rounded-full bg-purple-400" />
                    {doc}
                  </div>
                ))}
              </div>
            </div>

            {/* 법령 리서치 */}
            <div className="bg-[#0A0D14] border border-[#1F2937] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Scale className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-white">법령 리서치</span>
              </div>
              <div className="text-xs text-gray-400 mb-2">최신 업데이트: 2026.05.09</div>
              <div className="bg-[#1F2937] rounded-lg px-3 py-2 text-xs text-gray-500">
                개인정보보호법 검색...
              </div>
            </div>

            {/* 컴플라이언스 */}
            <div className="bg-[#0A0D14] border border-[#1F2937] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-white">컴플라이언스</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14">
                  <svg viewBox="0 0 36 36" className="w-14 h-14 -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#1F2937" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#22c55e" strokeWidth="3"
                      strokeDasharray="92 100" strokeLinecap="round" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-green-400">92%</span>
                </div>
                <div className="text-xs text-gray-400">
                  <p>규정 준수 현황</p>
                  <p className="text-yellow-400 mt-1">미비항목 2건</p>
                </div>
              </div>
            </div>

            {/* 소송 관리 */}
            <div className="bg-[#0A0D14] border border-[#1F2937] rounded-xl p-4 md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-white">소송 일정 관리</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  {[
                    { date: "05.15", event: "변론기일 (서울중앙)", color: "text-red-400" },
                    { date: "05.22", event: "준비서면 제출", color: "text-yellow-400" },
                    { date: "06.03", event: "항소심 기일", color: "text-blue-400" },
                  ].map((item) => (
                    <div key={item.date} className="flex items-center gap-3 text-xs">
                      <span className={`font-mono font-bold ${item.color}`}>{item.date}</span>
                      <span className="text-gray-400">{item.event}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>진행 중 소송 <span className="text-white font-semibold">7건</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

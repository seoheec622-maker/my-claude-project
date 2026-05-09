import { Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-blue-400" />
            <span className="text-white font-bold tracking-wide">LegalAI</span>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">기능</a>
            <a href="#stats" className="hover:text-white transition-colors">도입 성과</a>
            <a href="#cta" className="hover:text-white transition-colors">데모 신청</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600">© 2026 LegalAI. All rights reserved.</p>
          <p className="text-xs text-gray-600">Benchmarking excellence in legal automation since 2026</p>
        </div>
      </div>
    </footer>
  );
}

import { Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1F2937] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-blue-500" />
          <span className="text-white font-bold">LegalAI</span>
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-300 transition-colors">이용약관</a>
          <a href="#" className="hover:text-gray-300 transition-colors">개인정보처리방침</a>
          <a href="#" className="hover:text-gray-300 transition-colors">문의하기</a>
        </div>
        <p className="text-xs text-gray-600">© 2026 LegalAI. All rights reserved.</p>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "LegalAI — 기업 법무팀 자동화 플랫폼",
  description: "계약 검토부터 소송 관리까지, AI가 법무팀의 반복 업무를 자동화합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className={`${notoSansKR.className} min-h-full`}>{children}</body>
    </html>
  );
}

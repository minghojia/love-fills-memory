import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Love Fills Memory",
  description: "A gentle AI caregiver tool",
};

export const metadata = {
  title: "Love Fills Memory",
  description: "Helping families preserve love when memories fade.",
};

export const metadata = {
  title: "Love Fills Memory",
  description: "Helping families preserve love when memories fade.",
  openGraph: {
    title: "Love Fills Memory",
    description: "Helping families preserve love when memories fade.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className="bg-[#F8F7F4] text-[#2E2E2E] font-sans">
        
        {/* 全站容器 */}
        <div className="min-h-screen flex flex-col items-center px-4">

          {/* Header（極簡） */}
          <header className="w-full max-w-[680px] pt-8 pb-4">
            <div className="text-sm text-[#8A8A8A]">
              Love Fills Memory
            </div>
          </header>

          {/* Page Content Card */}
          <main className="w-full max-w-[680px] flex-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              {children}
            </div>
          </main>

          {/* Bottom spacing */}
          <div className="h-10" />

        </div>
      </body>
    </html>
  );
}
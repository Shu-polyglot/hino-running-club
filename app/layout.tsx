import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "日野ランニングクラブ | 一緒に走ろう。",
  description: "走ることをきっかけに、人とつながる。日野ランニングクラブは月の第2・第4土曜日、朝7:30から活動しています。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

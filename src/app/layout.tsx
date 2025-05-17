import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { notoSansJP, FONT, FONT_CSS_VARS } from "../components/constants/font/font";
import { THEME } from "../components/constants/colors";
import Script from 'next/script';

// Geistフォントの設定
// 注: Next.jsのフォントローダーはvariable引数に直接リテラルを要求するため例外的に直接指定
// 通常は FONT_CSS_VARS から参照することが望ましい
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", // 本来は FONT_CSS_VARS.NEXT_GEIST_MONO を使用したいがNext.jsの制約で不可
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.jsデザインシステム",
  description: "一貫したUIコンポーネント設計と使いやすいフォント表現",
};

// フォントとカラー設定をCSSカスタムプロパティに反映するインラインスクリプト
const setAppVariablesScript = `
  // フォント設定 - font.tsで定義した変数名を使用
  document.documentElement.style.setProperty('${FONT_CSS_VARS.APP_FONT_TITLE}', '${FONT.TITLE}');
  document.documentElement.style.setProperty('${FONT_CSS_VARS.APP_FONT_BODY}', '${FONT.BODY}');
  document.documentElement.style.setProperty('${FONT_CSS_VARS.APP_FONT_BODY_UNDERLINE}', '${FONT.BODY_UNDERLINE}');
  document.documentElement.style.setProperty('${FONT_CSS_VARS.THEME_FONT_SANS}', '${FONT.BODY}');
  document.documentElement.style.setProperty('${FONT_CSS_VARS.THEME_FONT_MONO}', '${FONT.MONO}');
  
  // カラー設定
  document.documentElement.style.setProperty('--color-background', '${THEME.LIGHT.BACKGROUND}');
  document.documentElement.style.setProperty('--color-foreground', '${THEME.LIGHT.FOREGROUND}');
  document.documentElement.style.setProperty('--color-background-dark', '${THEME.DARK.BACKGROUND}');
  document.documentElement.style.setProperty('--color-foreground-dark', '${THEME.DARK.FOREGROUND}');
  
  // ダークモード検出と適用
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    document.documentElement.classList.add('dark-theme');
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <Script id="set-app-variables" dangerouslySetInnerHTML={{ __html: setAppVariablesScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

/**
 * フォント定義ファイル
 * アプリケーション全体で使用するフォントファミリーとフォントスタック
 * このファイルがフォント設定の唯一の情報源（source of truth）となる
 */
import { Noto_Sans_JP } from "next/font/google";

/**
 * フォントCSS変数名の定義
 * CSS変数名もここで一元管理することで、命名の一貫性を保つ
 * 
 * 注意: Next.jsのフォントローダーはvariableプロパティに変数ではなく直接リテラルを要求するため、
 * 実際の使用時には文字列リテラルを使用する必要がある。それでもこれらの変数名を
 * ここで定義しておくことで、メンテナンス性を向上させる。
 */
export const FONT_CSS_VARS = {
  // Next.js生成変数（Next.js専用型に合わせた定義）
  NEXT_NOTO_SANS: '--font-noto-sans-jp' as const,
  NEXT_GEIST_MONO: '--font-geist-mono' as const,
  NEXT_GEIST_SANS: '--font-geist-sans' as const,
  
  // アプリ内変数
  APP_FONT_TITLE: '--app-font-title',
  APP_FONT_BODY: '--app-font-body',
  APP_FONT_BODY_UNDERLINE: '--app-font-body-underline',
  APP_FONT_MONO: '--app-font-mono',
  
  // テーマ変数
  THEME_FONT_SANS: '--font-sans',
  THEME_FONT_MONO: '--font-mono',
};

/**
 * Next.jsのフォントシステムを使用して、最適化されたフォントを読み込む
 * 注意: Next.jsの制約により、variableプロパティには直接文字列リテラルが必要
 */
export const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp", // 変数参照はできないためリテラルを使用
  display: "swap",
});

/**
 * フォントファミリー定義
 * アプリ内で使用するすべてのフォントファミリーを定義
 * フォントの変更はここでのみ行う
 */
export const FONT_FAMILIES = {
  // 最優先フォント
  PRIMARY: {
    // プラットフォーム別設定
    MAC: 'Noto Sans CJK JP',
    WINDOWS: 'Noto Sans CJK JP',
    // Next.js Font Optimization用
    NEXT_JS: `var(${FONT_CSS_VARS.NEXT_NOTO_SANS})`,
    // フォールバック
    FALLBACK: '"Helvetica Neue", "Arial", sans-serif',
  },
  
  // セカンダリ（代替）フォント
  SECONDARY: {
    MAC: 'Helvetica Neue',
    WINDOWS: 'Arial',
    FALLBACK: 'sans-serif',
  },
  
  // モノスペースフォント
  MONO: {
    COMMON: `var(${FONT_CSS_VARS.NEXT_GEIST_MONO}), Consolas, monospace`,
  }
};

/**
 * フォントスタック生成関数
 * 引数に渡されたフォント名を適切なスタック形式に変換
 */
const createFontStack = (primary: string, fallback: string): string => {
  return `${primary}, ${fallback}`;
};

/**
 * 完全なフォントスタック
 * 実際に使用する際のフォントファミリー設定
 */
export const FONT_STACK = {
  // Mac環境用
  MAC: createFontStack(
    FONT_FAMILIES.PRIMARY.MAC,
    FONT_FAMILIES.SECONDARY.MAC + ', ' + FONT_FAMILIES.PRIMARY.FALLBACK
  ),
  
  // Windows環境用
  WINDOWS: createFontStack(
    FONT_FAMILIES.PRIMARY.WINDOWS,
    FONT_FAMILIES.SECONDARY.WINDOWS + ', ' + FONT_FAMILIES.PRIMARY.FALLBACK
  ),
  
  // Next.js最適化あり（CSS変数使用）
  NEXT_JS: createFontStack(
    FONT_FAMILIES.PRIMARY.NEXT_JS,
    FONT_FAMILIES.PRIMARY.FALLBACK
  ),
};

/**
 * 各要素タイプごとのフォント設定
 * CSS変数やスタイル設定に使用
 */
export const FONT = {
  // タイトル用フォント
  TITLE: FONT_STACK.NEXT_JS,
  
  // 本文用フォント
  BODY: FONT_STACK.NEXT_JS,
  
  // 下線付き本文用フォント
  BODY_UNDERLINE: FONT_STACK.NEXT_JS,
  
  // モノスペースフォント
  MONO: FONT_FAMILIES.MONO.COMMON,
};

/**
 * フォントのウェイト
 */
export const FONT_WEIGHT = {
  REGULAR: 400,
  MEDIUM: 500,
  BOLD: 700,
};

/**
 * フォントサイズ（pxで指定）
 */
export const FONT_SIZE = {
  XS: '12px',
  SM: '14px',
  BASE: '16px',
  LG: '18px',
  XL: '20px',
  XXL: '24px',
  XXXL: '30px',
};

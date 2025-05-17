// 背景カラー定義
// ページや要素の背景として使用する色です。

import { BlueGray, Black, Common, withAlpha } from './Colors';

export const BACKGROUND_COLORS = {
  // 基本背景色
  primary: Common.WHITE,       // 白色（主要背景）
  secondary: BlueGray[50],     // 非常に薄いグレー（二次背景）
  thirdly: BlueGray[100],      // 薄いグレー（第三背景）
  
  // 特殊背景色
  black: BlueGray[800],        // 濃いグレー/黒（ダークモード用）
  dialog: withAlpha(Common.BLACK, 0.8), // 黒 80%透明度（ダイアログ背景）
  
  // テーマ背景色
  light: Common.WHITE,         // ライトモード背景
  dark: '#0a0a0a',             // ダークモード背景（カスタム暗黒色）
};

// 個別のカラー値にアクセスする際のエイリアス
export const BACKGROUND = {
  PRIMARY: BACKGROUND_COLORS.primary,
  SECONDARY: BACKGROUND_COLORS.secondary,
  THIRDLY: BACKGROUND_COLORS.thirdly,
  BLACK: BACKGROUND_COLORS.black,
  DIALOG: BACKGROUND_COLORS.dialog,
  
  // テーマ背景色
  LIGHT: BACKGROUND_COLORS.light,
  DARK: BACKGROUND_COLORS.dark,
};

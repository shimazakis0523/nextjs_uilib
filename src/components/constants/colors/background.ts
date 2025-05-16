// 背景カラー定義
// ページや要素の背景として使用する色です。

export const BACKGROUND_COLORS = {
  // 基本背景色
  primary: '#FFFFFF',      // KeyColor/White - 白色（主要背景）
  secondary: '#F8F9FA',    // BlueGray50 - 非常に薄いグレー（二次背景）
  thirdly: '#F0F2F5',      // BlueGray100 - 薄いグレー（第三背景）
  
  // 特殊背景色
  black: '#2F3845',        // BlueGray800 - 濃いグレー/黒（ダークモード用）
  dialog: 'rgba(0, 0, 0, 0.8)', // 黒 80%透明度（ダイアログ背景）
};

// 個別のカラー値にアクセスする際のエイリアス
export const BACKGROUND = {
  PRIMARY: BACKGROUND_COLORS.primary,
  SECONDARY: BACKGROUND_COLORS.secondary,
  THIRDLY: BACKGROUND_COLORS.thirdly,
  BLACK: BACKGROUND_COLORS.black,
  DIALOG: BACKGROUND_COLORS.dialog,
};

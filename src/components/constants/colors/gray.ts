// グレーカラー定義
// UIコンポーネントを構成するために使用する基本色です。

export const GRAY_COLORS = {
  // グレー階調
  high: '#1E2530',      // BlueGray900 - 濃いグレー（ほぼ黒）
  main: '#2F3845',      // BlueGray800 - 標準グレー
  low: '#5D6B82',       // BlueGray600 - 中間グレー
  lower: '#F0F0F0',     // Black200 - 薄いグレー
  lowest: '#F8F8F8',    // Black100 - 最も薄いグレー（ほぼ白）
  
  // コントラストテキスト（グレーカラー上のテキスト）
  contrastText: '#FFFFFF', // KeyColor/White - 白色
};

// 個別のカラー値にアクセスする際のエイリアス
export const GRAY = {
  HIGH: GRAY_COLORS.high,
  MAIN: GRAY_COLORS.main,
  LOW: GRAY_COLORS.low,
  LOWER: GRAY_COLORS.lower,
  LOWEST: GRAY_COLORS.lowest,
  CONTRAST_TEXT: GRAY_COLORS.contrastText,
};

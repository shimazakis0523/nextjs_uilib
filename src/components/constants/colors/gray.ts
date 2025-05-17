// グレーカラー定義
// UIコンポーネントを構成するために使用する基本色です。

import { BlueGray, Black, Common } from './Colors';

export const GRAY_COLORS = {
  // グレー階調
  high: BlueGray[900],      // 濃いグレー（ほぼ黒）
  main: BlueGray[800],      // 標準グレー
  low: BlueGray[600],       // 中間グレー
  lower: Black[200],        // 薄いグレー
  lowest: Black[100],       // 最も薄いグレー（ほぼ白）
  
  // コントラストテキスト（グレーカラー上のテキスト）
  contrastText: Common.WHITE, // 白色
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

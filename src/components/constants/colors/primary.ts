// プライマリカラー定義
// アプリ内の主要な箇所で使用する主要な色です。製品・サービスのブランドカラーをPrimaryにカスタマイズすることができます。

import { Blue } from './Colors';

export const PRIMARY_COLORS = {
  // メインカラー階調
  high: Blue[900],      // 濃い青色
  main: Blue[800],      // 標準プライマリ青色
  low: Blue[500],       // 薄い青色
  lower: Blue[200],     // さらに薄い青色
  lowest: Blue[50],     // 最も薄い青色
  
  // コントラストテキスト（プライマリカラー上のテキスト）
  contrastText: '#FFFFFF', // KeyColor/White - 白色
};

// 個別のカラー値にアクセスする際のエイリアス
export const PRIMARY = {
  HIGH: PRIMARY_COLORS.high,
  MAIN: PRIMARY_COLORS.main,
  LOW: PRIMARY_COLORS.low,
  LOWER: PRIMARY_COLORS.lower,
  LOWEST: PRIMARY_COLORS.lowest,
  CONTRAST_TEXT: PRIMARY_COLORS.contrastText,
};

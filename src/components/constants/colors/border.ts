// ボーダーカラー定義
// 境界線やフレームとして使用する色です。

import { BlueGray } from './Colors';

export const BORDER_COLORS = {
  // 基本ボーダー色
  primary: BlueGray[200],    // 薄いグレー（標準ボーダー）
  secondary: BlueGray[400],  // やや濃いグレー（強調ボーダー）
};

// 個別のカラー値にアクセスする際のエイリアス
export const BORDER = {
  PRIMARY: BORDER_COLORS.primary,
  SECONDARY: BORDER_COLORS.secondary,
};

// 無効状態（disabled）のカラー定義
// コンポーネントが無効状態の時に使用する色を定義します

import { GRAY } from './gray';

// 無効状態の色定義
export const DISABLED_COLORS = {
  // プライマリーカラーの無効状態
  primary: {
    background: 'rgba(30, 144, 255, 0.3)', // PRIMARY.LOWを薄くした色
    text: '#FFFFFF', // 白（低コントラスト）
  },
  
  // グレーカラーの無効状態
  gray: {
    background: GRAY.LOWEST, // 最も薄いグレー
    text: GRAY.LOW, // 明るいグレー
    border: GRAY.LOWER,
  },
  
  // エラー（危険）カラーの無効状態
  error: {
    background: 'rgba(211, 47, 47, 0.3)', // STATUSのエラー色を薄くした色
    text: '#FFFFFF', // 白（低コントラスト）
  },
  
  // テキストの無効状態
  text: {
    color: GRAY.LOW, // 明るいグレー
  },
  
  // 共通の無効状態のスタイル特性
  common: {
    opacity: 0.7,
    cursor: 'not-allowed',
  }
};

// 個別のカラー値にアクセスする際のエイリアス
export const DISABLED = {
  // プライマリー
  PRIMARY_BACKGROUND: DISABLED_COLORS.primary.background,
  PRIMARY_TEXT: DISABLED_COLORS.primary.text,
  
  // グレー
  GRAY_BACKGROUND: DISABLED_COLORS.gray.background,
  GRAY_TEXT: DISABLED_COLORS.gray.text,
  GRAY_BORDER: DISABLED_COLORS.gray.border,
  
  // エラー
  ERROR_BACKGROUND: DISABLED_COLORS.error.background,
  ERROR_TEXT: DISABLED_COLORS.error.text,
  
  // テキスト
  TEXT_COLOR: DISABLED_COLORS.text.color,
  
  // 共通
  OPACITY: DISABLED_COLORS.common.opacity,
  CURSOR: DISABLED_COLORS.common.cursor,
}; 
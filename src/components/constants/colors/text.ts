// テキストカラー定義
// テキストに使用する色です。見出し、本文、リンクなどで使用されます。

import { Blue } from './Colors';

export const TEXT_COLORS = {
  // 基本テキストカラー
  primary: '#333333',      // Black800 - メインテキストカラー
  secondary: '#5D6B82',    // BlueGray500 - 二次的なテキストカラー
  onColor: '#FFFFFF',      // KeyColor/White - 色付き背景上のテキスト
  
  // リンクカラー
  link: {
    default: Blue[800],    // 通常のリンク色
    hover: Blue[600],      // ホバー時のリンク色
    visited: '#683CCD',    // 紫色 - 訪問済みリンク色
  }
};

// 個別のカラー値にアクセスする際のエイリアス
export const TEXT = {
  PRIMARY: TEXT_COLORS.primary,
  SECONDARY: TEXT_COLORS.secondary,
  ON_COLOR: TEXT_COLORS.onColor,
  LINK_DEFAULT: TEXT_COLORS.link.default,
  LINK_HOVER: TEXT_COLORS.link.hover,
  LINK_VISITED: TEXT_COLORS.link.visited,
};

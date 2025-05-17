/**
 * テーマカラー定義
 * アプリケーション全体の基本的な色を定義
 */
import { GRAY } from './gray';
import { TEXT } from './text';
import { BACKGROUND } from './background';

/**
 * テーマカラー - ライトモード
 * アプリケーションの基本色を定義（明るいテーマ）
 */
export const LIGHT_THEME = {
  // バックグラウンドカラー
  BACKGROUND: BACKGROUND.LIGHT,
  
  // テキストカラー
  FOREGROUND: TEXT.PRIMARY_DARK,
  
  // ベースカラー
  BASE: {
    PRIMARY: GRAY.WHITE,
    SECONDARY: GRAY.LOWEST,
    TERTIARY: GRAY.LOWER,
  },
};

/**
 * テーマカラー - ダークモード
 * アプリケーションの基本色を定義（暗いテーマ）
 */
export const DARK_THEME = {
  // バックグラウンドカラー
  BACKGROUND: '#0a0a0a', // ダークグレー
  
  // テキストカラー
  FOREGROUND: '#ededed', // 明るいグレー
  
  // ベースカラー
  BASE: {
    PRIMARY: '#1a1a1a', // 暗いグレー
    SECONDARY: '#2a2a2a', // やや明るいグレー
    TERTIARY: '#3a3a3a', // さらに明るいグレー
  },
};

/**
 * 現在のテーマ設定
 * デフォルトではライトモードを使用
 */
export const THEME = {
  // システム設定によって自動的に切り替わる
  LIGHT: LIGHT_THEME,
  DARK: DARK_THEME,

  // 利便性のために直接アクセスできるエイリアス
  CURRENT: LIGHT_THEME,
}; 
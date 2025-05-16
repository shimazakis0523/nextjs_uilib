// インプットカラー定義
// ユーザーがデータを入力するためのフィールドに使用する色です。入力欄の背景色やプレースホルダーテキストの色が含まれます。

import { TEXT } from './text';
import { PRIMARY } from './primary';

export const INPUT_COLORS = {
  // コンテナカラー（背景色）
  container: {
    default: '#FFFFFF',       // KeyColor/White - 通常時の背景色
    inactive: '#F0F2F5',      // BlueGray100 - 非アクティブ時の背景色
    disabled: '#E0E0E0',      // Black300 - 無効時の背景色
  },
  
  // コンテナ上のテキスト・アイコン色
  onContainer: {
    text: TEXT.PRIMARY,       // Text/primary - 入力テキスト色
    icon: '#5D6B82',          // BlueGray600 - アイコン色
    inactive: '#5D6B82',      // BlueGray500 - 非アクティブ時のテキスト色
    disabled: '#9E9E9E',      // Black500 - 無効時のテキスト色
  },
  
  // プレースホルダー
  placeholder: '#9E9E9E',     // Black400 - プレースホルダーテキスト色
  
  // ボーダー
  border: {
    default: '#A9B6CB',       // BlueGray400 - 通常時のボーダー色
    focus: PRIMARY.MAIN,      // Primary/primary - フォーカス時のボーダー色
    error: '#A9B6CB',         // BlueGray400 - エラー時のボーダー色（エラーメッセージと併用）
  }
};

// 個別のカラー値にアクセスする際のエイリアス
export const INPUT = {
  CONTAINER: INPUT_COLORS.container.default,
  CONTAINER_INACTIVE: INPUT_COLORS.container.inactive,
  CONTAINER_DISABLED: INPUT_COLORS.container.disabled,
  
  ON_CONTAINER_TEXT: INPUT_COLORS.onContainer.text,
  ON_CONTAINER_ICON: INPUT_COLORS.onContainer.icon,
  ON_CONTAINER_INACTIVE: INPUT_COLORS.onContainer.inactive,
  ON_CONTAINER_DISABLED: INPUT_COLORS.onContainer.disabled,
  
  PLACEHOLDER: INPUT_COLORS.placeholder,
  
  BORDER: INPUT_COLORS.border.default,
  BORDER_FOCUS: INPUT_COLORS.border.focus,
  BORDER_ERROR: INPUT_COLORS.border.error,
};

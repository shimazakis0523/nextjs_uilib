// インプットカラー定義
// ユーザーがデータを入力するためのフィールドに使用する色です。入力欄の背景色やプレースホルダーテキストの色が含まれます。

import { TEXT } from './text';
import { PRIMARY } from './primary';
import { BlueGray, Black, Common } from './Colors';

export const INPUT_COLORS = {
  // コンテナカラー（背景色）
  container: {
    default: Common.WHITE,    // 通常時の背景色
    inactive: BlueGray[100],  // 非アクティブ時の背景色
    disabled: Black[300],     // 無効時の背景色
  },
  
  // コンテナ上のテキスト・アイコン色
  onContainer: {
    text: TEXT.PRIMARY,       // 入力テキスト色
    icon: BlueGray[600],      // アイコン色
    inactive: BlueGray[500],  // 非アクティブ時のテキスト色
    disabled: Black[500],     // 無効時のテキスト色
  },
  
  // プレースホルダー
  placeholder: Black[500],    // プレースホルダーテキスト色
  
  // ボーダー
  border: {
    default: BlueGray[400],   // 通常時のボーダー色
    focus: PRIMARY.MAIN,      // フォーカス時のボーダー色
    error: BlueGray[400],     // エラー時のボーダー色（エラーメッセージと併用）
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

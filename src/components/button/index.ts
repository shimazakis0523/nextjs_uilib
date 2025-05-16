// ボタンコンポーネントのエントリーポイント
// ユーザー向けインターフェースとしてボタンコンポーネントをエクスポート

import { BaseButtonProps } from './BaseButton';
import MainButton from './MainButton';
import SecondaryButton from './SecondaryButton';
import TertiaryButton from './TertiaryButton';
import TextButton from './TextButton';

// 既存の型定義を維持するためエクスポート
export type { ButtonSize } from './BaseButton';

// 各ボタンコンポーネントの型もエクスポート
export { MainButtonProps } from './MainButton';
export { SecondaryButtonProps } from './SecondaryButton';
export { TertiaryButtonProps } from './TertiaryButton';
export { TextButtonProps } from './TextButton';

// 各ボタンコンポーネントをエクスポート
export {
  MainButton,
  SecondaryButton,
  TertiaryButton,
  TextButton,
};

// デフォルトではすべてのボタンをエクスポート
export default {
  Main: MainButton,
  Secondary: SecondaryButton,
  Tertiary: TertiaryButton,
  Text: TextButton,
}; 
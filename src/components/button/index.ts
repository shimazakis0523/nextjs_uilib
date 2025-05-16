// ボタンコンポーネントのエントリーポイント
// ユーザー向けインターフェースとしてボタンコンポーネントをエクスポート

import MainButton from './MainButton';
import SecondaryButton from './SecondaryButton';
import TertiaryButton from './TertiaryButton';
import TextButton from './TextButton';

// 既存の型定義を維持するためエクスポート
export type { ButtonSize } from './BaseButton';
export type { MainButtonProps } from './MainButton';

// 各ボタンコンポーネントをエクスポート
export {
  MainButton,
  SecondaryButton,
  TertiaryButton,
  TextButton,
};

// デフォルトではすべてのボタンをエクスポート
const Buttons = {
  Main: MainButton,
  Secondary: SecondaryButton,
  Tertiary: TertiaryButton,
  Text: TextButton,
};

export default Buttons; 
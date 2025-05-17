// ラベルコンポーネントのエントリーポイント
// ユーザー向けインターフェースとしてラベルコンポーネントをエクスポート

import Label from './Label';
import IconLabel from './IconLabel';
import { LabelVariant, LabelSize } from './Label';
import { IconLabelProps } from './IconLabel';

// 型定義をエクスポート
export type { LabelVariant, LabelSize, IconLabelProps };

// コンポーネントをエクスポート
export { Label, IconLabel };

// デフォルトエクスポート
export default Label; 
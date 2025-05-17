/**
 * フォント定義のエントリーポイント
 */

import { FONT, FONT_WEIGHT, FONT_SIZE, FONT_STACK } from './font';
export { FONT, FONT_WEIGHT, FONT_SIZE };

// OS検出のための簡易ヘルパー関数
export const getSystemFontStack = () => {
  const isMac = typeof window !== 'undefined' && window.navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  
  return isMac ? FONT_STACK.MAC : FONT_STACK.WINDOWS;
}; 
/**
 * フォント定義のエントリーポイント
 */

import { FONT, FONT_WEIGHT, FONT_SIZE } from './font';
export { FONT, FONT_WEIGHT, FONT_SIZE };

// OS検出のための簡易ヘルパー関数
export const getSystemFontStack = (fontType: 'TITLE' | 'BODY' | 'BODY_UNDERLINE') => {
  const isMac = typeof window !== 'undefined' && window.navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  
  return isMac ? FONT[fontType].MAC : FONT[fontType].WINDOWS;
}; 
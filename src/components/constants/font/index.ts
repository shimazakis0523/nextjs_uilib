/**
 * フォント定義のエントリーポイント
 */

export { FONT, FONT_WEIGHT, FONT_SIZE } from './font';

// OS検出のための簡易ヘルパー関数
export const getSystemFontStack = (fontType: 'TITLE' | 'BODY' | 'BODY_UNDERLINE') => {
  const isMac = typeof window !== 'undefined' && window.navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const { FONT } = require('./font');
  
  return isMac ? FONT[fontType].MAC : FONT[fontType].WINDOWS;
}; 
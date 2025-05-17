"use client";

import React, { ReactNode } from 'react';
import { FONT, FONT_WEIGHT, FONT_SIZE } from '../constants/font/font';

type TextVariant = 'title' | 'body' | 'body-underline' | 'mono';
type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';

interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  size?: TextSize;
  weight?: 'regular' | 'medium' | 'bold';
  className?: string;
  asElement?: 'span' | 'p' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

/**
 * フォント設定を適用したテキストコンポーネント
 * font.ts の設定のみを使用し、独自設定は行わない
 */
export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  size = 'base',
  weight = 'regular',
  className = '',
  asElement = 'span',
}) => {
  // フォントサイズのマッピング
  const sizeMap: Record<TextSize, string> = {
    'xs': FONT_SIZE.XS,
    'sm': FONT_SIZE.SM,
    'base': FONT_SIZE.BASE,
    'lg': FONT_SIZE.LG,
    'xl': FONT_SIZE.XL,
    '2xl': FONT_SIZE.XXL,
    '3xl': FONT_SIZE.XXXL,
  };

  // フォントウェイトのマッピング
  const weightMap: Record<string, number> = {
    'regular': FONT_WEIGHT.REGULAR,
    'medium': FONT_WEIGHT.MEDIUM,
    'bold': FONT_WEIGHT.BOLD,
  };

  // フォントファミリーの選択 (font.tsから直接参照)
  let fontFamily: string;
  
  switch (variant) {
    case 'title':
      fontFamily = FONT.TITLE;
      break;
    case 'body-underline':
      fontFamily = FONT.BODY_UNDERLINE;
      break;
    case 'mono':
      fontFamily = FONT.MONO;
      break;
    case 'body':
    default:
      fontFamily = FONT.BODY;
      break;
  }

  // 下線の有無
  const textDecoration = variant === 'body-underline' ? 'underline' : 'none';

  const style: React.CSSProperties = {
    fontFamily,
    fontSize: sizeMap[size],
    fontWeight: weightMap[weight],
    textDecoration,
  };

  // 動的なHTML要素の生成
  const Element = asElement;
  
  return (
    <Element className={className} style={style}>
      {children}
    </Element>
  );
};

export default Text; 
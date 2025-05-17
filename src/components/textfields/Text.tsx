"use client";

import React, { ReactNode } from 'react';
import { BlueGray } from '../constants/colors/Colors';

export interface TextProps {
  /** テキストの内容 */
  children: ReactNode;
  /** 追加のCSSクラス */
  className?: string;
}

/**
 * シンプルなテキスト表示コンポーネント
 */
const Text: React.FC<TextProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div 
      className={`text-base text-gray-800 ${className}`}
      style={{ color: BlueGray[800] }}
    >
      {children}
    </div>
  );
};

export default Text; 
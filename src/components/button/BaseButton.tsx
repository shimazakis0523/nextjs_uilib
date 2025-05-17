"use client";

import React, { useState, CSSProperties } from 'react';

// ボタンのサイズ
export type ButtonSize = 'small' | 'medium' | 'large';

// ボタンの色バリアント
export type ButtonColorVariant = 'primary' | 'gray' | 'error';

// ボタン共通のプロパティ
export interface BaseButtonProps {
  /** ボタン内に表示するコンテンツ（テキストやアイコンなど） */
  children: React.ReactNode;
  
  /** クリック時のイベントハンドラ関数 */
  onClick?: () => void;
  
  /** ボタンのサイズ: 'small'、'medium'（デフォルト）、'large' */
  size?: ButtonSize;
  
  /** ボタンの色: 'primary'（デフォルト）、'gray'、'error' */
  colorVariant?: ButtonColorVariant;
  
  /** 無効状態のボタンにする場合はtrue */
  disabled?: boolean;
  
  /** 親要素の幅いっぱいに広げる場合はtrue */
  fullWidth?: boolean;
  
  /** スタイル定義 */
  style?: CSSProperties;

  /** hover時のスタイル定義 */
  hoverStyle?: CSSProperties;
  
  /** 追加のCSSクラス */
  className?: string;

  /** ボタンのタイプ: 'button', 'submit', 'reset' */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * 基底ボタンコンポーネント
 * すべてのボタンタイプの基盤となる共通コンポーネントです
 */
const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  onClick,
  disabled = false,
  size = 'medium',
  fullWidth = false,
  style = {},
  hoverStyle = {},
  className = '',
  type = 'button',
}) => {
  // hover状態を追跡
  const [isHovered, setIsHovered] = useState(false);
  
  // サイズに基づくスタイル
  const sizeStyles = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };
  
  // 基本のクラス
  const baseClasses = `
    font-medium 
    focus:outline-none 
    transition-all 
    duration-300
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // スタイルの適用
  const computedStyle = {
    ...style,
    ...(isHovered && !disabled ? hoverStyle : {}),
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  return (
    <button
      className={baseClasses}
      style={computedStyle}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default BaseButton; 
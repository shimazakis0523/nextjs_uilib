"use client";

import React from 'react';
import BaseButton, { ButtonSize, ButtonColorVariant } from './BaseButton';
import { PRIMARY } from '../constants/colors/primary';
import { GRAY } from '../constants/colors/gray';
import { TEXT } from '../constants/colors/text';
import { STATUS } from '../constants/colors/status';
import { DISABLED } from '../constants/colors/disabled';

// テキストボタンのプロパティ
export interface TextButtonProps {
  /** ボタン内に表示するコンテンツ（テキストやアイコンなど） */
  children: React.ReactNode;
  
  /** クリック時のイベントハンドラ関数 */
  onClick?: () => void;
  
  /** ボタンのサイズ: 'small'、'medium'（デフォルト）、'large' */
  size?: ButtonSize;
  
  /** ボタンの色: 'primary'（青・デフォルト）、'gray'（グレー）、'error'（赤） */
  colorVariant?: ButtonColorVariant;
  
  /** 無効状態のボタンにする場合はtrue */
  disabled?: boolean;
  
  /** 親要素の幅いっぱいに広げる場合はtrue */
  fullWidth?: boolean;
  
  /** 追加のCSSクラス */
  className?: string;
}

/**
 * テキストボタン
 * 強調する必要がなく、重要性の低い機能の呼び出しに使用します
 */
export const TextButton: React.FC<TextButtonProps> = ({
  children,
  onClick,
  size = 'medium',
  colorVariant = 'primary',
  disabled = false,
  fullWidth = false,
  className = '',
}) => {
  // 色の設定
  let textColor, hoverColor;

  switch (colorVariant) {
    case 'gray':
      textColor = GRAY.MAIN;
      hoverColor = GRAY.HIGH;
      break;
    case 'error':
      textColor = STATUS.ERROR_ON_CONTAINER;
      hoverColor = STATUS.ERROR_ON_CONTAINER;
      break;
    case 'primary':
    default:
      textColor = TEXT.LINK_DEFAULT;
      hoverColor = TEXT.LINK_HOVER;
      break;
  }

  // スタイル設定
  const style = {
    backgroundColor: 'transparent',
    color: disabled ? DISABLED.TEXT_COLOR : textColor,
    border: 'none',
    padding: '0',
    display: 'inline-flex',
    alignItems: 'center',
    opacity: disabled ? DISABLED.OPACITY : 1,
  };

  // ホバー時のスタイル
  const hoverStyle = {
    color: disabled ? DISABLED.TEXT_COLOR : hoverColor,
    textDecoration: 'underline',
  };

  return (
    <BaseButton
      onClick={onClick}
      size={size}
      colorVariant={colorVariant}
      disabled={disabled}
      fullWidth={fullWidth}
      style={style}
      hoverStyle={hoverStyle}
      className={`${className} text-button`}
    >
      {children}
    </BaseButton>
  );
};

export default TextButton; 
"use client";

import React from 'react';
import BaseButton, { ButtonSize, ButtonColorVariant } from './BaseButton';
import { PRIMARY } from '../constants/colors/primary';
import { GRAY } from '../constants/colors/gray';
import { STATUS } from '../constants/colors/status';
import { DISABLED } from '../constants/colors/disabled';

// 主要ボタンのプロパティ
export interface MainButtonProps {
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
 * メインボタン（Default/Main）
 * 重要なアクションボタンなどに使用します
 */
export const MainButton: React.FC<MainButtonProps> = ({
  children,
  onClick,
  size = 'medium',
  colorVariant = 'primary',
  disabled = false,
  fullWidth = false,
  className = '',
}) => {
  // 色の設定
  let backgroundColor, hoverBackgroundColor, textColor;

  switch (colorVariant) {
    case 'gray':
      backgroundColor = GRAY.MAIN;
      hoverBackgroundColor = GRAY.HIGH;
      textColor = GRAY.CONTRAST_TEXT;
      break;
    case 'error':
      backgroundColor = STATUS.ERROR_MAIN;
      hoverBackgroundColor = STATUS.ERROR_HIGH;
      textColor = STATUS.ERROR_CONTRAST_TEXT;
      break;
    case 'primary':
    default:
      backgroundColor = PRIMARY.MAIN;
      hoverBackgroundColor = PRIMARY.HIGH;
      textColor = PRIMARY.CONTRAST_TEXT;
      break;
  }

  // スタイル設定
  const style = {
    backgroundColor,
    color: textColor,
    opacity: disabled ? DISABLED.OPACITY : 1,
  };

  // ホバー時のスタイル
  const hoverStyle = {
    backgroundColor: hoverBackgroundColor,
    transform: !disabled ? 'scale(1.02)' : 'scale(1)',
    boxShadow: !disabled 
      ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' 
      : 'none',
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
      className={className}
    >
      {children}
    </BaseButton>
  );
};

export default MainButton; 
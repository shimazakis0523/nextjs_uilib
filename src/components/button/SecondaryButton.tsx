"use client";

import React from 'react';
import BaseButton, { ButtonSize, ButtonColorVariant } from './BaseButton';
import { PRIMARY } from '../constants/colors/primary';
import { GRAY } from '../constants/colors/gray';
import { STATUS } from '../constants/colors/status';
import { DISABLED } from '../constants/colors/disabled';

// セカンダリーボタンのプロパティ
export interface SecondaryButtonProps {
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

  /** ボタンのタイプ: 'button', 'submit', 'reset' */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * セカンダリーボタン
 * キャンセルなど、主要機能以外の実行に使用します。
 * プライマリーボタンと対になることが多く、否定的・中立的なアクションに適しています。
 * 背景は白基調で、テキストの色がバリアントによって変わります。
 */
export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onClick,
  size = 'medium',
  colorVariant = 'primary',
  disabled = false,
  fullWidth = false,
  className = '',
  type = 'button',
}) => {
  // 色の設定
  let textColor, borderColor, hoverBackgroundColor;

  switch (colorVariant) {
    case 'gray':
      textColor = GRAY.MAIN;
      borderColor = GRAY.MAIN;
      hoverBackgroundColor = GRAY.LOWEST;
      break;
    case 'error':
      textColor = STATUS.ERROR_ON_CONTAINER;
      borderColor = STATUS.ERROR_ON_CONTAINER;
      hoverBackgroundColor = STATUS.ERROR_CONTAINER;
      break;
    case 'primary':
    default:
      textColor = PRIMARY.MAIN;
      borderColor = PRIMARY.MAIN;
      hoverBackgroundColor = PRIMARY.LOWEST;
      break;
  }

  // スタイル設定
  const style = {
    backgroundColor: '#FFFFFF', // 白背景
    color: textColor,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: borderColor,
    opacity: disabled ? DISABLED.OPACITY : 1,
    borderRadius: '9999px', // 最大の丸み
  };

  // ホバー時のスタイル
  const hoverStyle = {
    backgroundColor: hoverBackgroundColor,
    transform: !disabled ? 'scale(1.02)' : 'scale(1)',
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
      className={`rounded-full ${className}`}
      type={type}
    >
      {children}
    </BaseButton>
  );
};

export default SecondaryButton; 
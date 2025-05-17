"use client";

import React from 'react';
import BaseButton, { ButtonSize, ButtonColorVariant } from './BaseButton';
import { PRIMARY } from '../constants/colors/primary';
import { GRAY } from '../constants/colors/gray';
import { BORDER } from '../constants/colors/border';
import { STATUS } from '../constants/colors/status';
import { DISABLED } from '../constants/colors/disabled';

// ターシャリーボタンのプロパティ
export interface TertiaryButtonProps {
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
 * ターシャリーボタン
 * 補助的な機能や、優先度の低いアクションに使用します。
 * 主要機能やキャンセル操作より重要度が低い追加オプションなどに適しています。
 */
export const TertiaryButton: React.FC<TertiaryButtonProps> = ({
  children,
  onClick,
  size = 'medium',
  colorVariant = 'primary',
  disabled = false,
  fullWidth = false,
  className = '',
}) => {
  // 色の設定
  let textColor, borderColor, hoverBackgroundColor;

  switch (colorVariant) {
    case 'gray':
      textColor = GRAY.HIGH;
      borderColor = BORDER.PRIMARY;
      hoverBackgroundColor = GRAY.LOWEST;
      break;
    case 'error':
      textColor = STATUS.ERROR_ON_CONTAINER;
      borderColor = STATUS.ERROR_ON_CONTAINER;
      hoverBackgroundColor = STATUS.ERROR_CONTAINER;
      break;
    case 'primary':
    default:
      textColor = PRIMARY.HIGH;
      borderColor = PRIMARY.LOW;
      hoverBackgroundColor = PRIMARY.LOWEST;
      break;
  }

  // スタイル設定
  const style = {
    backgroundColor: 'transparent',
    color: disabled ? DISABLED.TEXT_COLOR : textColor,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: disabled ? DISABLED.GRAY_BACKGROUND : borderColor,
    opacity: disabled ? DISABLED.OPACITY : 1,
    borderRadius: '6px',
  };

  // ホバー時のスタイル
  const hoverStyle = {
    backgroundColor: hoverBackgroundColor,
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

export default TertiaryButton; 
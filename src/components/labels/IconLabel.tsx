"use client";

import React from 'react';
import { PRIMARY } from '../constants/colors/primary';
import { GRAY } from '../constants/colors/gray';
import { STATUS } from '../constants/colors/status';
import { LabelVariant, LabelSize } from './Label';

// IconLabelのプロパティ
export interface IconLabelProps {
  /** ラベルに表示するテキスト */
  children: React.ReactNode;
  
  /** ラベルの左側に表示するアイコン */
  icon: React.ReactNode;
  
  /** アイコンとテキストの間隔 */
  iconGap?: number;
  
  /** ラベルの色テーマ */
  variant?: LabelVariant;
  
  /** ラベルのサイズ */
  size?: LabelSize;
  
  /** 追加のCSSクラス */
  className?: string;
  
  /** カスタムスタイル */
  style?: React.CSSProperties;
}

/**
 * アイコン付きラベルコンポーネント
 * 左側にアイコンを配置したラベル
 */
const IconLabel: React.FC<IconLabelProps> = ({
  children,
  icon,
  iconGap = 4,
  variant = 'primary',
  size = 'medium',
  className = '',
  style = {},
}) => {
  // バリエーションに基づく色の設定
  let backgroundColor, textColor, borderColor;
  
  switch (variant) {
    // 薄い背景色＋濃いテキスト色パターン
    case 'primary':
      backgroundColor = PRIMARY.LOWEST;
      textColor = PRIMARY.MAIN;
      borderColor = 'transparent';
      break;
    case 'secondary':
      backgroundColor = GRAY.LOWEST;
      textColor = GRAY.MAIN;
      borderColor = 'transparent';
      break;
    case 'outline':
      backgroundColor = 'transparent';
      textColor = GRAY.MAIN;
      borderColor = GRAY.LOWER;
      break;
    case 'info':
      backgroundColor = STATUS.OTHER1_CONTAINER;
      textColor = STATUS.OTHER1_ON_CONTAINER;
      borderColor = 'transparent';
      break;
    case 'purple':
      backgroundColor = STATUS.OTHER2_CONTAINER;
      textColor = STATUS.OTHER2_ON_CONTAINER;
      borderColor = 'transparent';
      break;
    
    // 濃い背景色＋白テキストパターン
    case 'error':
      backgroundColor = STATUS.ERROR_MAIN;
      textColor = STATUS.ERROR_CONTRAST_TEXT;
      borderColor = 'transparent';
      break;
    case 'warning':
      backgroundColor = STATUS.WARNING_MAIN;
      textColor = GRAY.HIGH;
      borderColor = 'transparent';
      break;
    case 'success':
      backgroundColor = STATUS.SUCCESS_MAIN;
      textColor = STATUS.SUCCESS_CONTRAST_TEXT;
      borderColor = 'transparent';
      break;
    default:
      backgroundColor = PRIMARY.LOWEST;
      textColor = PRIMARY.MAIN;
      borderColor = 'transparent';
  }
  
  // サイズに基づくスタイルの設定
  const sizeStyles = {
    small: {
      padding: '2px 8px',
      fontSize: '12px',
      borderRadius: '4px',
    },
    medium: {
      padding: '4px 12px',
      fontSize: '14px',
      borderRadius: '6px',
    },
  };
  
  // アイコンのサイズ調整
  const iconSize = {
    small: {
      width: '12px',
      height: '12px',
    },
    medium: {
      width: '16px',
      height: '16px',
    },
  };
  
  // スタイルの適用
  const labelStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    backgroundColor,
    color: textColor,
    border: `1px solid ${borderColor}`,
    ...sizeStyles[size],
    ...style,
  };
  
  const iconStyles = {
    display: 'inline-flex',
    marginRight: `${iconGap}px`,
    ...iconSize[size],
  };
  
  return (
    <span 
      className={className}
      style={labelStyles}
    >
      <span style={iconStyles}>
        {icon}
      </span>
      {children}
    </span>
  );
};

export default IconLabel; 
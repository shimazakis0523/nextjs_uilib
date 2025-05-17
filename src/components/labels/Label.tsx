"use client";

import React from 'react';
import { PRIMARY } from '../constants/colors/primary';
import { GRAY } from '../constants/colors/gray';
import { STATUS } from '../constants/colors/status';

// ラベルのバリエーション（色のテーマ）
export type LabelVariant = 
  | 'primary'   // 主要なラベル（薄い青背景＋青テキスト）
  | 'secondary' // 補助的なラベル（薄いグレー背景＋グレーテキスト）
  | 'outline'   // 枠線のみのラベル（白背景＋グレーテキスト＋枠線）
  | 'info'      // 情報ラベル（薄い水色背景＋水色テキスト）
  | 'purple'    // 紫ラベル（薄い紫背景＋紫テキスト）
  | 'error'     // エラーラベル（赤背景＋白テキスト）
  | 'warning'   // 警告ラベル（オレンジ背景＋白テキスト）
  | 'success';  // 成功ラベル（緑背景＋白テキスト）

// ラベルのサイズ
export type LabelSize = 'small' | 'medium';

// ラベルのプロパティ
export interface LabelProps {
  /** ラベルに表示するテキスト */
  children: React.ReactNode;
  
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
 * ラベルコンポーネント
 * さまざまな色とサイズのバリエーションを持つラベル
 */
const Label: React.FC<LabelProps> = ({
  children,
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
      textColor = GRAY.HIGH; // 暗い色のテキスト
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
  
  return (
    <span 
      className={className}
      style={labelStyles}
    >
      {children}
    </span>
  );
};

export default Label; 
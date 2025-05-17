"use client";

import React from 'react';
import { PRIMARY } from '../constants/colors/primary';
import { GRAY } from '../constants/colors/gray';

// アイコンバッジのバリエーション
export type IconBadgeVariant = 
  | 'primary'    // 青色の背景
  | 'light'      // 薄い青色の背景
  | 'gray';      // グレーの背景

// アイコンバッジのサイズ
export type IconBadgeSize = 
  | 'xs'     // 超小サイズ
  | 'small'  // 小サイズ
  | 'medium' // 中サイズ
  | 'large'; // 大サイズ

// アイコンバッジのプロパティ
export interface IconBadgeProps {
  /** バッジ内に表示するアイコン */
  icon: React.ReactNode;
  
  /** バッジの色テーマ */
  variant?: IconBadgeVariant;
  
  /** バッジのサイズ */
  size?: IconBadgeSize;
  
  /** 追加のCSSクラス */
  className?: string;
  
  /** カスタムスタイル */
  style?: React.CSSProperties;
  
  /** クリックイベントハンドラ */
  onClick?: () => void;
}

/**
 * アイコンバッジコンポーネント
 * 円形の背景にアイコンを表示する
 */
const IconBadge: React.FC<IconBadgeProps> = ({
  icon,
  variant = 'primary',
  size = 'medium',
  className = '',
  style = {},
  onClick,
}) => {
  // バリエーションに基づく色の設定
  let backgroundColor, iconColor;
  
  switch (variant) {
    case 'primary':
      backgroundColor = PRIMARY.MAIN;
      iconColor = 'white';
      break;
    case 'light':
      backgroundColor = PRIMARY.LOWEST;
      iconColor = PRIMARY.MAIN;
      break;
    case 'gray':
      backgroundColor = GRAY.HIGH;
      iconColor = 'white';
      break;
    default:
      backgroundColor = PRIMARY.MAIN;
      iconColor = 'white';
  }
  
  // サイズに基づくスタイルの設定
  const sizeStyles = {
    xs: {
      width: '32px',
      height: '32px',
      fontSize: '16px',
    },
    small: {
      width: '48px',
      height: '48px',
      fontSize: '20px',
    },
    medium: {
      width: '64px',
      height: '64px',
      fontSize: '28px',
    },
    large: {
      width: '96px',
      height: '96px',
      fontSize: '40px',
    },
  };
  
  // スタイルの適用
  const badgeStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor,
    color: iconColor,
    ...sizeStyles[size],
    ...style,
  };
  
  // アイコンのサイズ調整用スタイル
  const iconStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '50%',
  };
  
  return (
    <div 
      className={className}
      style={badgeStyles}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div style={iconStyles}>
        {icon}
      </div>
    </div>
  );
};

export default IconBadge; 
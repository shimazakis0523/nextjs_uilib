"use client";

import React, { useState } from 'react';
import { PRIMARY } from '../constants/colors/primary';
import { GRAY } from '../constants/colors/gray';

export interface ToggleSwitchProps {
  /** 現在の値 */
  checked: boolean;
  
  /** 値変更時のコールバック関数 */
  onChange: (checked: boolean) => void;
  
  /** 無効状態にする場合はtrue */
  disabled?: boolean;
  
  /** カラーバリエーション: 'primary', 'light-primary', 'light-gray', 'gray' */
  variant?: 'primary' | 'light-primary' | 'light-gray' | 'gray';
  
  /** 追加のCSSクラス */
  className?: string;
}

/**
 * トグルスイッチコンポーネント
 * オンとオフなど相互に排他的な2つ以上の状態を視覚的に切り替えるコントロールです。
 */
const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  variant = 'primary',
  className = '',
}) => {
  // 色の設定
  let backgroundColor, thumbColor;
  
  if (checked) {
    // ONの場合の色設定
    switch (variant) {
      case 'primary':
        backgroundColor = PRIMARY.MAIN;
        thumbColor = PRIMARY.CONTRAST_TEXT;
        break;
      case 'light-primary':
        backgroundColor = PRIMARY.LOWER;
        thumbColor = PRIMARY.CONTRAST_TEXT;
        break;
      case 'light-gray':
        backgroundColor = GRAY.LOWER;
        thumbColor = PRIMARY.CONTRAST_TEXT;
        break;
      case 'gray':
        backgroundColor = GRAY.LOW;
        thumbColor = PRIMARY.CONTRAST_TEXT;
        break;
    }
  } else {
    // OFFの場合の色設定
    backgroundColor = GRAY.LOWER;
    thumbColor = PRIMARY.CONTRAST_TEXT;
  }

  // スタイル設定
  const trackStyle = {
    backgroundColor: disabled ? GRAY.LOWER : backgroundColor,
    opacity: disabled ? 0.5 : 1,
  };

  // トグルのハンドル部分のスタイル
  const thumbStyle = {
    backgroundColor: thumbColor,
    transform: checked ? 'translateX(20px)' : 'translateX(0)',
  };

  return (
    <div
      className={`relative inline-block w-11 h-6 rounded-full cursor-pointer ${disabled ? 'cursor-not-allowed' : ''} ${className}`}
      style={trackStyle}
      onClick={() => {
        if (!disabled) {
          onChange(!checked);
        }
      }}
    >
      <div
        className="absolute w-5 h-5 rounded-full shadow transition-transform duration-300 ease-in-out"
        style={thumbStyle}
      />
    </div>
  );
};

export default ToggleSwitch; 
"use client";

import React, { useState, useRef, SelectHTMLAttributes, ReactNode } from 'react';
import { PRIMARY } from '../constants/colors/primary';
import { GRAY } from '../constants/colors/gray';
import { BORDER } from '../constants/colors/border';
import { BACKGROUND } from '../constants/colors/background';
import { TEXT } from '../constants/colors/text';
import { INPUT } from '../constants/colors/input';
import { Label } from '../labels';
import Text from '../typography/Text';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** 選択肢のリスト */
  options?: DropdownOption[];
  /** 入力フィールドの状態 */
  state?: 'default' | 'focus' | 'disabled';
  /** プレースホルダーテキスト */
  placeholder?: string;
  /** ラベルテキスト */
  label?: string;
  /** 必須フィールドかどうか */
  isRequired?: boolean;
  /** ドロップダウンアイコン（デフォルトはチェブロンアイコン） */
  dropdownIcon?: ReactNode;
  /** 追加のCSSクラス */
  className?: string;
  /** フィールドの幅 */
  width?: 'sm' | 'md' | 'lg' | 'full';
}

/**
 * ドロップダウンコンポーネント
 * 選択肢のリストからユーザーが選択するためのコンポーネント
 */
const Dropdown: React.FC<DropdownProps> = ({
  options = [],
  state = 'default',
  placeholder = '選択してください',
  label,
  isRequired = false,
  dropdownIcon,
  className = '',
  width = 'full',
  disabled,
  ...props
}) => {
  // 内部状態
  const [isFocused, setIsFocused] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);
  
  // 幅のクラス
  const widthClasses = {
    sm: 'w-32', // 128px
    md: 'w-64', // 256px
    lg: 'w-96', // 384px
    full: 'w-full'
  };
  
  // propsからdisabledが渡された場合はstate='disabled'に設定
  const currentState = disabled ? 'disabled' : state;
  
  // 状態に応じたスタイルの設定
  let borderColor, backgroundColor, textColor, iconColor;
  
  switch (currentState) {
    case 'focus':
      borderColor = PRIMARY.MAIN;
      backgroundColor = BACKGROUND.PRIMARY;
      textColor = TEXT.PRIMARY;
      iconColor = GRAY.LOW;
      break;
    case 'disabled':
      borderColor = BORDER.PRIMARY;
      backgroundColor = INPUT.CONTAINER_DISABLED;
      textColor = INPUT.ON_CONTAINER_DISABLED;
      iconColor = INPUT.ON_CONTAINER_DISABLED;
      break;
    default:
      borderColor = BORDER.PRIMARY;
      backgroundColor = BACKGROUND.PRIMARY;
      textColor = INPUT.ON_CONTAINER_TEXT;
      iconColor = INPUT.ON_CONTAINER_ICON;
  }
  
  // フォーカス状態の場合、borderColorを更新
  if (isFocused && currentState !== 'disabled') {
    borderColor = PRIMARY.MAIN;
  }
  
  // ドロップダウンコンテナスタイル
  const selectContainerStyle = {
    borderColor,
    backgroundColor,
    color: textColor,
    borderWidth: isFocused ? '2px' : '1px',
    transition: 'all 0.2s ease-in-out',
  };
  
  // フォーカスハンドラ
  const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
    setIsFocused(true);
    if (props.onFocus) {
      props.onFocus(e);
    }
  };
  
  // ブラーハンドラ
  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    setIsFocused(false);
    if (props.onBlur) {
      props.onBlur(e);
    }
  };
  
  // クリックハンドラ - ドロップダウンのコンテナをクリックしたときに、selectにフォーカスを移す
  const handleContainerClick = () => {
    if (currentState !== 'disabled') {
      selectRef.current?.focus();
    }
  };
  
  return (
    <div className={`flex flex-col ${widthClasses[width]} ${className}`}>
      <div className="flex items-center justify-between mb-1">
        {label && (
          <div className="flex items-center">
            <Text 
              size="sm" 
              weight="medium" 
              className="text-blueGray-700"
            >
              {label}
            </Text>
            {isRequired && (
              <Label 
                variant="warning" 
                size="small"
                className="ml-1"
              >
                必須
              </Label>
            )}
          </div>
        )}
      </div>
      
      <div 
        className="relative rounded-md"
        onClick={handleContainerClick}
        style={{ cursor: currentState === 'disabled' ? 'not-allowed' : 'pointer' }}
      >
        <div 
          className="flex items-center w-full rounded-md"
          style={selectContainerStyle}
        >
          <select
            ref={selectRef}
            className="w-full py-2 px-3 bg-transparent appearance-none outline-none"
            style={{ color: textColor }}
            disabled={currentState === 'disabled'}
            onFocus={handleFocus}
            onBlur={handleBlur}
            defaultValue=""
            {...props}
          >
            <option value="" disabled hidden>{placeholder}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          <div 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{ color: iconColor }}
          >
            {dropdownIcon && React.isValidElement(dropdownIcon) ? 
              React.cloneElement(dropdownIcon as React.ReactElement<{color?: string; key: string}>, { 
                color: iconColor,
                key: 'dropdown-icon'
              }) : 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9L12 15 18 9" />
              </svg>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown; 
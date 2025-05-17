"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback, useRef } from 'react';
import { PRIMARY } from '../constants/colors/primary';
import { GRAY } from '../constants/colors/gray';

// Switchコンテキストの型定義
interface SwitchContextType {
  selectedValue: string;
  onChange: (value: string) => void;
  itemCount: number;
  registerItem: () => number;
}

// デフォルト値
const defaultContext: SwitchContextType = {
  selectedValue: '',
  onChange: () => {},
  itemCount: 0,
  registerItem: () => 0,
};

// React Context の作成
const SwitchContext = createContext<SwitchContextType>(defaultContext);

// Switchコンポーネントのプロパティ
export interface SwitchProps {
  /** 現在選択されている値 */
  value: string;
  
  /** 値変更時のコールバック関数 */
  onChange: (value: string) => void;
  
  /** 子要素 (Switch.Item) */
  children: ReactNode;
  
  /** 幅を親要素に合わせるか */
  fullWidth?: boolean;
  
  /** サイズ */
  size?: 'small' | 'medium' | 'large';
  
  /** 追加のCSSクラス */
  className?: string;
}

/**
 * Switchコンポーネント
 * 複数の選択肢から一つを選ぶセグメントコントロール
 */
const Switch: React.FC<SwitchProps> & {
  Item: typeof SwitchItem;
} = ({
  value,
  onChange,
  children,
  fullWidth = false,
  size = 'medium',
  className = '',
}) => {
  // 子要素の数をカウント
  const [itemCount, setItemCount] = useState(0);
  
  // Item コンポーネントの登録用関数
  const registerItem = useCallback(() => {
    const index = itemCount;
    setItemCount(prev => prev + 1);
    return index;
  }, [itemCount]);
  
  // サイズに基づくスタイル
  const sizeClasses = {
    small: 'text-sm py-1',
    medium: 'text-base py-2',
    large: 'text-lg py-3',
  };

  return (
    <SwitchContext.Provider
      value={{
        selectedValue: value,
        onChange,
        itemCount,
        registerItem,
      }}
    >
      <div
        className={`inline-flex ${fullWidth ? 'w-full' : ''} ${sizeClasses[size]} ${className}`}
        style={{
          border: `1px solid ${GRAY.LOWER}`,
          overflow: 'hidden',
          padding: 0,
          background: 'white',
          borderRadius: '8px',
        }}
        role="tablist"
        aria-orientation="horizontal"
      >
        {children}
      </div>
    </SwitchContext.Provider>
  );
};

// SwitchItemコンポーネントのプロパティ
export interface SwitchItemProps {
  /** この項目の値 */
  value: string;
  
  /** 子要素（表示内容） */
  children: ReactNode;
  
  /** 追加のCSSクラス */
  className?: string;
  
  /** 無効状態にする */
  disabled?: boolean;
}

/**
 * Switch.Item コンポーネント
 * Switchの各選択肢
 */
const SwitchItem: React.FC<SwitchItemProps> = ({
  value,
  children,
  className = '',
  disabled = false,
}) => {
  // コンテキストから状態を取得
  const { selectedValue, onChange, registerItem } = useContext(SwitchContext);
  
  // この項目が選択されているか
  const isSelected = selectedValue === value;
  
  // コンポーネントのマウント時のみ登録を実行するためのフラグ
  const isRegistered = useRef(false);
  
  // コンポーネントのマウント時に登録
  React.useEffect(() => {
    if (!isRegistered.current) {
      registerItem();
      isRegistered.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // クリック時の処理
  const handleClick = () => {
    if (!disabled) {
      onChange(value);
    }
  };
  
  return (
    <button
      role="tab"
      aria-selected={isSelected}
      aria-disabled={disabled}
      className={`flex-1 px-4 transition-all relative ${className}`}
      style={{
        backgroundColor: isSelected ? PRIMARY.LOWER : 'transparent',
        color: isSelected ? PRIMARY.MAIN : GRAY.LOW,
        fontWeight: isSelected ? 500 : 400,
        border: 'none',
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        outline: 'none',
        margin: 0,
        height: '100%',
        borderRadius: 0,
      }}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// SwitchItemをSwitchの静的プロパティとして追加
Switch.Item = SwitchItem;

export default Switch;

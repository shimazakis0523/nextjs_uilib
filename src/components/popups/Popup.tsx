"use client";

import React, { ReactNode } from 'react';
import { InfoIcon, WarningIcon } from '../icons';
import { MainButton, SecondaryButton } from '../button';
import { PRIMARY } from '../constants/colors/primary';
import { STATUS } from '../constants/colors/status';

export type PopupVariant = 'info' | 'warning';

export interface PopupProps {
  /** ポップアップのタイトル */
  title: string;
  
  /** ポップアップのメッセージ */
  message: string;
  
  /** ポップアップのバリアント (info or warning) */
  variant?: PopupVariant;
  
  /** 確認ボタンのテキスト */
  confirmText?: string;
  
  /** キャンセルボタンのテキスト */
  cancelText?: string;
  
  /** 確認ボタンのクリックハンドラ */
  onConfirm?: () => void;
  
  /** キャンセルボタンのクリックハンドラ */
  onCancel?: () => void;
  
  /** ポップアップを表示するかどうか */
  isOpen?: boolean;
  
  /** ポップアップ外のクリックでクローズするかどうか */
  closeOnOutsideClick?: boolean;
  
  /** 追加のCSSクラス */
  className?: string;
  
  /** 子要素（オプション） */
  children?: ReactNode;
}

/**
 * ポップアップコンポーネント
 * 情報通知や警告メッセージを表示するためのモーダルポップアップ
 */
const Popup: React.FC<PopupProps> = ({
  title,
  message,
  variant = 'info',
  confirmText = '保存',
  cancelText = 'キャンセル',
  onConfirm,
  onCancel,
  isOpen = true,
  closeOnOutsideClick = true,
  className = '',
  children,
}) => {
  if (!isOpen) return null;
  
  // バリアントに基づくスタイルの設定
  const variantStyles = {
    info: {
      icon: <InfoIcon size={24} />,
      titleColor: PRIMARY.MAIN,
      buttonColor: 'primary' as const,
    },
    warning: {
      icon: <WarningIcon size={24} />,
      titleColor: STATUS.ERROR_MAIN,
      buttonColor: 'error' as const,
    },
  };
  
  // 現在のバリアントのスタイル
  const currentVariant = variantStyles[variant];
  
  // 背景オーバーレイクリック時の処理
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnOutsideClick && onCancel) {
      onCancel();
    }
  };
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className={`bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden max-w-lg w-full mx-4 transform transition-transform duration-300 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5">
          {/* ヘッダー部分 */}
          <div className="flex items-center gap-3 mb-3">
            {currentVariant.icon}
            <h3 
              className="text-xl font-bold"
              style={{ color: currentVariant.titleColor }}
            >
              {title}
            </h3>
          </div>
          
          {/* メッセージ部分 */}
          <div className="mb-6">
            <p className="text-gray-700">{message}</p>
            {children}
          </div>
          
          {/* ボタン部分 */}
          <div className="flex justify-end gap-3">
            <SecondaryButton 
              onClick={onCancel}
              colorVariant="gray"
            >
              {cancelText}
            </SecondaryButton>
            <MainButton 
              onClick={onConfirm}
              colorVariant={currentVariant.buttonColor}
            >
              {confirmText}
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup; 
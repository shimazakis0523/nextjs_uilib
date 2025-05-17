"use client";

import React from 'react';
import { PRIMARY } from '../constants/colors/primary';
import { GRAY } from '../constants/colors/gray';
import Image from 'next/image';
import { UserIcon } from '../icons';

export interface HeaderProps {
  /** サービス名 */
  serviceName?: string;
  
  /** ユーザーID (emailアドレス) */
  userId?: string;
  
  /** ユーザーアイコンURL */
  userIconUrl?: string;
  
  /** ログイン状態 */
  isLoggedIn?: boolean;
  
  /** ユーザーメニュークリック時のコールバック */
  onUserMenuClick?: () => void;
  
  /** カスタムクラス */
  className?: string;
  
  /** 背景色 */
  backgroundColor?: string;
}

/**
 * ヘッダーコンポーネント
 * アプリケーションの上部に表示するヘッダー
 */
const Header: React.FC<HeaderProps> = ({
  serviceName,
  userId,
  userIconUrl,
  isLoggedIn = false,
  onUserMenuClick,
  className = '',
  backgroundColor,
}) => {
  // デフォルトアイコン（ユーザーアイコンが提供されていない場合）
  const defaultIcon = (
    <div 
      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500"
      style={{ backgroundColor: GRAY.LOWER }}
    >
      <UserIcon size={20} color={GRAY.LOW} />
    </div>
  );

  // ユーザーアイコン
  const userIcon = userIconUrl ? (
    <Image 
      src={userIconUrl}
      alt="User Icon"
      width={32}
      height={32}
      className="rounded-full"
    />
  ) : defaultIcon;

  return (
    <header 
      className={`w-full py-3 px-6 flex items-center justify-between shadow-sm ${className}`}
      style={{ backgroundColor: backgroundColor || PRIMARY.MAIN }}
    >
      {/* 左側: サービス名（存在する場合のみ表示） */}
      {serviceName && (
        <div className="flex items-center">
          <h1 
            className="text-lg font-medium"
            style={{ color: 'white' }}
          >
            {serviceName}
          </h1>
        </div>
      )}

      {/* 右側: ユーザー情報 */}
      <div className="flex items-center ml-auto">
        {isLoggedIn ? (
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={onUserMenuClick}
            role="button"
            tabIndex={0}
          >
            <span className="text-sm hidden sm:block" style={{ color: 'white' }}>
              {userId}
            </span>
            {userIcon}
          </div>
        ) : (
          <button 
            className="text-sm px-4 py-1 rounded-md"
            style={{
              backgroundColor: 'white',
              color: PRIMARY.MAIN,
            }}
          >
            ログイン
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

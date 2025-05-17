"use client";

import React, { useState } from 'react';
import { Header } from '../headers';
import { SideMenu, MenuItem } from '../sidemenu';

interface AppLayoutProps {
  /** メインコンテンツ */
  children: React.ReactNode;
  
  /** 現在のアクティブページパス */
  activePath?: string;
  
  /** 画面ID */
  screenId?: string;
  
  /** 画面タイトル */
  screenTitle?: string;
}

/**
 * アプリケーション共通レイアウト
 * ヘッダーとサイドメニューを含むレイアウト
 */
export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  activePath = '/button',
  screenId = '',
  screenTitle = ''
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);
  
  // サービス名
  const serviceName = "デザインシステム";
  
  // サイドメニュー項目
  const menuItems: MenuItem[] = [
    {
      label: 'コンポーネント集',
      href: '#',
      isSection: true
    },
    {
      label: 'ボタン',
      href: '/button',
      isActive: activePath === '/button'
    },
    {
      label: 'トグルスイッチ',
      href: '/toggle',
      isActive: activePath === '/toggle'
    },
    {
      label: 'セグメントスイッチ',
      href: '/switch',
      isActive: activePath === '/switch'
    },
    {
      label: 'ラベル',
      href: '/label',
      isActive: activePath === '/label'
    },
    {
      label: 'アイコンラベル',
      href: '/icon-label',
      isActive: activePath === '/icon-label'
    },
    {
      label: 'アイコン',
      href: '/icon',
      isActive: activePath === '/icon'
    },
    {
      label: 'アイコンバッジ',
      href: '/icon-badge',
      isActive: activePath === '/icon-badge'
    },
    {
      label: 'テキストフィールド',
      href: '/textfields',
      isActive: activePath === '/textfields'
    },
    {
      label: 'ヘッダー',
      href: '/header',
      isActive: activePath === '/header'
    },
    {
      label: 'サンプルページ集',
      href: '#',
      isSection: true
    },
    {
      label: 'ユーザー登録',
      href: '/samples/user-registration',
      isActive: activePath === '/samples/user-registration'
    },
    {
      label: 'メニューC',
      href: '/menu6',
      isActive: activePath === '/menu6'
    },
    {
      label: 'メニューD',
      href: '/menu7',
      isActive: activePath === '/menu7'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      {/* サイドメニュー */}
      <SideMenu 
        items={menuItems}
        serviceName={serviceName}
        isOpen={menuOpen}
        onToggle={() => setMenuOpen(!menuOpen)}
      />
      
      <div className="flex-1 flex flex-col">
        {/* ヘッダー */}
        <Header 
          userId="user@example.com"
          isLoggedIn={isLoggedIn}
          onUserMenuClick={() => setIsLoggedIn(!isLoggedIn)}
        />
        
        {/* 画面タイトルエリア */}
        {(screenId || screenTitle) && (
          <div className="px-8 py-6">
            {screenId && (
              <div className="text-sm text-gray-600">{screenId}</div>
            )}
            {screenTitle && (
              <h1 className="text-2xl font-bold text-gray-900">{screenTitle}</h1>
            )}
          </div>
        )}
        
        {/* メインコンテンツ */}
        <main className="flex-1 w-full px-8 py-2 overflow-y-auto">
          <div className="w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout; 
"use client";

import React from 'react';
import { PRIMARY } from '../constants/colors/primary';
import { GRAY } from '../constants/colors/gray';
import Link from 'next/link';

export interface MenuItem {
  /** メニュー項目のラベル */
  label: string;
  
  /** メニュー項目のリンク先URL */
  href: string;
  
  /** メニュー項目のアイコン（オプション） */
  icon?: React.ReactNode;
  
  /** 現在のアクティブなページかどうか */
  isActive?: boolean;
  
  /** サブメニュー項目（オプション） */
  children?: MenuItem[];
  
  /** メニュー項目を展開しているかどうか */
  isOpen?: boolean;

  /** セクションタイトルかどうか */
  isSection?: boolean;
}

export interface SideMenuProps {
  /** メニュー項目の配列 */
  items: MenuItem[];
  
  /** サービス名 */
  serviceName: string;
  
  /** サービスロゴ（オプション） */
  serviceLogo?: React.ReactNode;
  
  /** メニューの幅（px、rem、%など） */
  width?: string | number;
  
  /** カスタムクラス名 */
  className?: string;
  
  /** クリック時のコールバック（任意） */
  onMenuItemClick?: (item: MenuItem) => void;
  
  /** モバイルでの表示状態（オープン/クローズ） */
  isOpen?: boolean;
  
  /** モバイルでのトグルコールバック */
  onToggle?: () => void;
}

/**
 * サイドメニューコンポーネント
 * アプリケーションのナビゲーションを提供するサイドバーメニュー
 */
const SideMenu: React.FC<SideMenuProps> = ({
  items,
  serviceName,
  serviceLogo,
  width = 240,
  className = '',
  onMenuItemClick,
  isOpen = true,
  onToggle,
}) => {
  // モバイル画面かどうかの状態
  const [isMobile, setIsMobile] = React.useState(false);
  
  // ホバー状態の管理用オブジェクト
  const [hoveredItems, setHoveredItems] = React.useState<Record<string, boolean>>({});
  
  // 画面サイズの変更を検知
  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // 初期チェック
    checkIfMobile();
    
    // リサイズイベントリスナー
    window.addEventListener('resize', checkIfMobile);
    
    // クリーンアップ
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  // メニュー項目のレンダリング
  const renderMenuItem = (item: MenuItem, index: number, depth = 0) => {
    const handleClick = () => {
      if (onMenuItemClick) {
        onMenuItemClick(item);
      }
    };
    
    // メニュー項目の一意のキー
    const itemKey = `${item.label}-${index}-${depth}`;
    
    // ホバー状態の設定
    const handleMouseEnter = () => {
      setHoveredItems(prev => ({ ...prev, [itemKey]: true }));
    };
    
    const handleMouseLeave = () => {
      setHoveredItems(prev => ({ ...prev, [itemKey]: false }));
    };
    
    const isHovered = hoveredItems[itemKey];

    // セクションタイトルの場合は特別なスタイルで表示
    if (item.isSection) {
      return (
        <li key={itemKey} className="mt-5 mb-2 first:mt-2">
          <div 
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-500"
            style={{ paddingLeft: `${depth * 12 + 16}px` }}
          >
            {item.label}
          </div>
        </li>
      );
    }
    
    return (
      <li key={itemKey} className="mb-1">
        <Link
          href={item.href}
          className={`flex items-center px-4 py-3 text-sm transition-colors ${
            item.isActive
              ? 'font-medium'
              : ''
          }`}
          style={{
            backgroundColor: item.isActive ? PRIMARY.LOWEST : isHovered ? PRIMARY.LOWEST : 'transparent',
            color: item.isActive ? PRIMARY.MAIN : GRAY.LOW,
            paddingLeft: `${depth * 12 + 16}px`
          }}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>{item.label}</span>
          {item.children && item.children.length > 0 && (
            <span className="ml-auto">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={`transition-transform ${item.isOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          )}
        </Link>
        
        {item.children && item.children.length > 0 && item.isOpen && (
          <ul className="mt-1">
            {item.children.map((subItem, subIndex) => 
              renderMenuItem(subItem, index, depth + 1)
            )}
          </ul>
        )}
      </li>
    );
  };
  
  // モバイル用メニュートグルボタン
  const renderMobileToggle = () => (
    <button
      className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md"
      style={{ backgroundColor: PRIMARY.MAIN }}
      onClick={onToggle}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="text-white"
      >
        {isOpen ? (
          <>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </>
        ) : (
          <>
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </>
        )}
      </svg>
    </button>
  );
  
  // メニュークラスとスタイル
  const menuClasses = `
    h-screen flex flex-col transition-all duration-300
    ${isMobile ? 'fixed top-0 left-0 z-40 h-full' : 'h-full'}
    ${isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'}
    ${className}
  `;
  
  return (
    <>
      {/* モバイル時のみ表示されるトグルボタン */}
      {isMobile && renderMobileToggle()}
      
      {/* オーバーレイ（モバイル＆オープン時のみ） */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onToggle}
        />
      )}
      
      {/* メインメニュー */}
      <nav 
        className={menuClasses}
        style={{ 
          width: isMobile ? '80%' : width,
          maxWidth: '300px',
          backgroundColor: 'white',
          borderRight: `1px solid ${GRAY.LOWER}`,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* サービス名とロゴ */}
        <div className="p-6 border-b" style={{ borderColor: GRAY.LOWER }}>
          <div className="flex items-center">
            {serviceLogo && (
              <div className="mr-2">
                {serviceLogo}
              </div>
            )}
            <h2 className="text-xl font-bold" style={{ color: PRIMARY.MAIN }}>
              {serviceName}
            </h2>
          </div>
        </div>
        
        {/* メインメニューリスト */}
        <ul className="flex-1 overflow-y-auto">
          {items.map((item, index) => renderMenuItem(item, index))}
        </ul>
      </nav>
    </>
  );
};

export default SideMenu; 
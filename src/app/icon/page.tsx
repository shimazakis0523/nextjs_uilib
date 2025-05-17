"use client";

import React from 'react';
import { Card } from '../../components/cards';
import { UserIcon, MailIcon, ImageIcon, InfoIcon, WarningIcon } from '../../components/icons';
import AppLayout from '../../components/layout';

export default function IconPage() {
  // アイコンサイズの配列
  const sizes = [16, 24, 32, 48];
  
  return (
    <AppLayout activePath="/icon">
      <h1 className="text-2xl font-bold mb-4">アイコンコンポーネント</h1>
      
      {/* ユーザーアイコン */}
      <Card title="ユーザーアイコン" className="mb-8">
        <div>
          <h3 className="text-lg font-medium mb-4">サイズバリエーション</h3>
          <div className="flex items-center gap-8 mb-6">
            {sizes.map((size) => (
              <div key={`user-size-${size}`} className="flex flex-col items-center">
                <UserIcon size={size} />
                <span className="text-sm text-gray-500 mt-2">{size}px</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
      
      {/* メールアイコン */}
      <Card title="メールアイコン" className="mb-8">
        <div>
          <h3 className="text-lg font-medium mb-4">サイズバリエーション</h3>
          <div className="flex items-center gap-8 mb-6">
            {sizes.map((size) => (
              <div key={`mail-size-${size}`} className="flex flex-col items-center">
                <MailIcon size={size} />
                <span className="text-sm text-gray-500 mt-2">{size}px</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
      
      {/* 画像アイコン */}
      <Card title="画像アイコン" className="mb-8">
        <div>
          <h3 className="text-lg font-medium mb-4">サイズバリエーション</h3>
          <div className="flex items-center gap-8 mb-6">
            {sizes.map((size) => (
              <div key={`image-size-${size}`} className="flex flex-col items-center">
                <ImageIcon size={size} />
                <span className="text-sm text-gray-500 mt-2">{size}px</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
      
      {/* 情報アイコン */}
      <Card title="情報アイコン" className="mb-8">
        <div>
          <h3 className="text-lg font-medium mb-4">サイズバリエーション</h3>
          <div className="flex items-center gap-8 mb-6">
            {sizes.map((size) => (
              <div key={`info-size-${size}`} className="flex flex-col items-center">
                <InfoIcon size={size} />
                <span className="text-sm text-gray-500 mt-2">{size}px</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">※ プライマリーカラーを使用</p>
        </div>
      </Card>
      
      {/* 警告アイコン */}
      <Card title="警告アイコン" className="mb-8">
        <div>
          <h3 className="text-lg font-medium mb-4">サイズバリエーション</h3>
          <div className="flex items-center gap-8 mb-6">
            {sizes.map((size) => (
              <div key={`warning-size-${size}`} className="flex flex-col items-center">
                <WarningIcon size={size} />
                <span className="text-sm text-gray-500 mt-2">{size}px</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">※ エラーカラーを使用</p>
        </div>
      </Card>
      
      {/* 使用方法 */}
      <Card title="アイコンの使用方法">
        <div>
          <h3 className="text-lg font-medium mb-2">インポート方法</h3>
          <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            {`import { UserIcon, MailIcon, ImageIcon, InfoIcon, WarningIcon } from '../components/icons';`}
          </pre>
          
          <h3 className="text-lg font-medium mb-2">基本的な使用方法</h3>
          <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            {`// デフォルト
<UserIcon />

// サイズ指定
<MailIcon size={32} />

// 情報アイコン
<InfoIcon />

// 警告アイコン
<WarningIcon />

// カスタムクラス追加
<UserIcon className="custom-class" />`}
          </pre>
        </div>
      </Card>
    </AppLayout>
  );
} 
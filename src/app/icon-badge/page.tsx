"use client";

import React from 'react';
import { IconBadge } from '../../components/icons';
import { Card } from '../../components/cards';
import AppLayout from '../../components/layout';

// メールアイコンコンポーネント
const MailIcon: React.FC<{ color?: string; size?: number }> = ({ color = 'currentColor', size = 16 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth="2" />
      <path d="M2 8L10.1649 12.7154C11.2511 13.3788 12.7489 13.3788 13.8351 12.7154L22 8" stroke={color} strokeWidth="2" />
    </svg>
  );
};

// カスタムメールアイコン（チェブロン付き）
const MailChevronIcon: React.FC<{ color?: string; size?: number }> = ({ color = 'currentColor', size = 16 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth="2" />
      <path d="M6 12L12 16L18 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default function IconBadgePage() {
  return (
    <AppLayout activePath="/icon-badge" screenId="IconBadge" screenTitle="アイコンバッジコンポーネント">
      {/* バリエーション表示 */}
      <Card title="アイコンバッジのバリエーション" className="mb-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium mb-4">サイズバリエーション - 青色</h2>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex flex-col items-center">
                <IconBadge 
                  size="xs"
                  variant="primary" 
                  icon={<MailIcon color="white" size={16} />} 
                />
                <span className="mt-2 text-sm">XS</span>
              </div>
              
              <div className="flex flex-col items-center">
                <IconBadge 
                  size="small"
                  variant="primary" 
                  icon={<MailIcon color="white" size={24} />} 
                />
                <span className="mt-2 text-sm">Small</span>
              </div>
              
              <div className="flex flex-col items-center">
                <IconBadge 
                  size="medium"
                  variant="primary" 
                  icon={<MailIcon color="white" size={32} />} 
                />
                <span className="mt-2 text-sm">Medium</span>
              </div>
              
              <div className="flex flex-col items-center">
                <IconBadge 
                  size="large"
                  variant="primary" 
                  icon={<MailIcon color="white" size={48} />} 
                />
                <span className="mt-2 text-sm">Large</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-medium mb-4">カラーバリエーション (Medium)</h2>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex flex-col items-center">
                <IconBadge 
                  variant="primary" 
                  icon={<MailIcon color="white" size={32} />} 
                />
                <span className="mt-2 text-sm">青色背景</span>
              </div>
              
              <div className="flex flex-col items-center">
                <IconBadge 
                  variant="light" 
                  icon={<MailIcon color="#1e40af" size={32} />} 
                />
                <span className="mt-2 text-sm">薄い青色背景</span>
              </div>
              
              <div className="flex flex-col items-center">
                <IconBadge 
                  variant="gray" 
                  icon={<MailIcon color="white" size={32} />} 
                />
                <span className="mt-2 text-sm">グレー背景</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-medium mb-4">アイコンバリエーション (Medium)</h2>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex flex-col items-center">
                <IconBadge 
                  variant="primary" 
                  icon={<MailIcon color="white" size={32} />} 
                />
                <span className="mt-2 text-sm">標準メール</span>
              </div>
              
              <div className="flex flex-col items-center">
                <IconBadge 
                  variant="primary" 
                  icon={<MailChevronIcon color="white" size={32} />} 
                />
                <span className="mt-2 text-sm">シェブロン付き</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* 使用例 */}
      <Card title="使用例">
        <div className="space-y-6">
          <div className="p-4 bg-white border rounded">
            <h3 className="text-lg font-medium mb-4">インタラクティブな例</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <IconBadge 
                    size="small"
                    variant="primary" 
                    icon={<MailIcon color="white" size={20} />}
                    onClick={() => alert('メールボタンがクリックされました')}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div>
                  <h4 className="font-medium">クリック可能なメールアイコン</h4>
                  <p className="text-sm text-gray-600">このアイコンはクリックするとアラートが表示されます</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded flex flex-col items-center">
                  <IconBadge 
                    size="medium"
                    variant="primary" 
                    icon={<MailIcon color="white" size={32} />} 
                  />
                  <h4 className="mt-3 font-medium">メール機能</h4>
                  <p className="text-sm text-center text-gray-600">メッセージの送受信</p>
                </div>
                
                <div className="p-4 border rounded flex flex-col items-center">
                  <IconBadge 
                    size="medium"
                    variant="light" 
                    icon={<MailIcon color="#1e40af" size={32} />} 
                  />
                  <h4 className="mt-3 font-medium">メール設定</h4>
                  <p className="text-sm text-center text-gray-600">通知やフィルターの設定</p>
                </div>
                
                <div className="p-4 border rounded flex flex-col items-center">
                  <IconBadge 
                    size="medium"
                    variant="gray" 
                    icon={<MailIcon color="white" size={32} />} 
                  />
                  <h4 className="mt-3 font-medium">メールアーカイブ</h4>
                  <p className="text-sm text-center text-gray-600">過去のメッセージ閲覧</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </AppLayout>
  );
} 
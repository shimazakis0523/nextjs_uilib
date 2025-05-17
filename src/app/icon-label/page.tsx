"use client";

import React from 'react';
import { Label, IconLabel } from '../../components/labels';
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

// 通知アイコンコンポーネント
const NotificationIcon: React.FC<{ color?: string; size?: number }> = ({ color = 'currentColor', size = 16 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V5.25C16.8113 6.1642 19 8.73753 19 11.9999V16.8572L20.5964 19.2535C20.8195 19.5889 20.7719 20.0368 20.4815 20.3149C20.1997 20.5853 19.7674 20.5761 19.4961 20.2947L19 19.9999H5L4.65488 20.2422C4.35112 20.5053 3.87361 20.475 3.60818 20.1778C3.33224 19.8668 3.33377 19.4101 3.61085 19.1012L5 16.8572V11.9999C5 8.73753 7.18869 6.1642 10 5.25V5Z" stroke={color} strokeWidth="2"/>
      <path d="M9 20C9 21.6569 10.3431 23 12 23C13.6569 23 15 21.6569 15 20" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

// クラウドアイコンコンポーネント
const CloudIcon: React.FC<{ color?: string; size?: number }> = ({ color = 'currentColor', size = 16 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 19C3.79086 19 2 17.2091 2 15C2 13.1368 3.27532 11.5701 5 11.126C5 8.84279 6.79086 7 9 7C10.8638 7 12.4299 8.27532 12.874 10C15.1572 10 17 11.7909 17 14C17 15.8632 15.7247 17.4299 14 17.874L14 19L6 19Z" stroke={color} strokeWidth="2"/>
      <path d="M18 19C20.2091 19 22 17.2091 22 15C22 13.1368 20.7247 11.5701 19 11.126V11C19 8.79086 17.2091 7 15 7" stroke={color} strokeWidth="2"/>
    </svg>
  );
};

// タグアイコンコンポーネント
const TagIcon: React.FC<{ color?: string; size?: number }> = ({ color = 'currentColor', size = 16 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 4H11.5858C11.851 4 12.1054 4.10536 12.2929 4.29289L20.7071 12.7071C21.0976 13.0976 21.0976 13.7308 20.7071 14.1213L14.1213 20.7071C13.7308 21.0976 13.0976 21.0976 12.7071 20.7071L4.29289 12.2929C4.10536 12.1054 4 11.851 4 11.5858V4Z" stroke={color} strokeWidth="2"/>
      <circle cx="9" cy="9" r="2" stroke={color} strokeWidth="2"/>
    </svg>
  );
};

export default function IconLabelPage() {
  // バリエーション一覧
  const variants = [
    'primary',
    'secondary',
    'outline',
    'success',
    'warning',
    'error',
    'info',
    'purple'
  ] as const;
  
  return (
    <AppLayout activePath="/icon-label" screenId="IconLabel" screenTitle="アイコン付きラベルコンポーネント">
      {/* バリエーション表示 */}
      <Card title="アイコン付きラベルのバリエーション" className="mb-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium mb-4">通常サイズ</h2>
            <div className="flex flex-wrap gap-4">
              {variants.map((variant) => (
                <IconLabel key={`medium-${variant}`} variant={variant as 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'outline' | 'purple'} icon={<MailIcon />}>
                  メッセージ
                </IconLabel>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-medium mb-4">小サイズ</h2>
            <div className="flex flex-wrap gap-4">
              {variants.map((variant) => (
                <IconLabel key={`small-${variant}`} variant={variant as 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'outline' | 'purple'} size="small" icon={<MailIcon size={12} />}>
                  メッセージ
                </IconLabel>
              ))}
            </div>
          </div>
        </div>
      </Card>
      
      {/* 通常のラベルとの比較 */}
      <Card title="通常のラベルとの比較" className="mb-8">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium min-w-32">通常ラベル:</span>
            <Label variant="primary">メッセージ</Label>
            <Label variant="success">メッセージ</Label>
            <Label variant="error">メッセージ</Label>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium min-w-32">アイコン付きラベル:</span>
            <IconLabel variant="primary" icon={<MailIcon />}>メッセージ</IconLabel>
            <IconLabel variant="success" icon={<MailIcon />}>メッセージ</IconLabel>
            <IconLabel variant="error" icon={<MailIcon />}>メッセージ</IconLabel>
          </div>
        </div>
      </Card>
      
      {/* アイコンギャップの設定 */}
      <Card title="アイコンとテキストの間隔" className="mb-8">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium min-w-32">標準間隔 (4px):</span>
            <IconLabel variant="primary" icon={<MailIcon />}>メッセージ</IconLabel>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium min-w-32">広い間隔 (8px):</span>
            <IconLabel variant="primary" icon={<MailIcon />} iconGap={8}>メッセージ</IconLabel>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium min-w-32">狭い間隔 (2px):</span>
            <IconLabel variant="primary" icon={<MailIcon />} iconGap={2}>メッセージ</IconLabel>
          </div>
        </div>
      </Card>
      
      {/* 様々なアイコンの表示例 */}
      <Card title="様々なアイコンの表示例" className="mb-8">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded">
              <h3 className="font-medium mb-2">メールアイコン</h3>
              <div className="flex flex-wrap gap-2">
                <IconLabel variant="primary" icon={<MailIcon />}>メール</IconLabel>
                <IconLabel variant="outline" icon={<MailIcon />}>受信トレイ</IconLabel>
                <IconLabel variant="error" icon={<MailIcon />}>未読</IconLabel>
              </div>
            </div>
            
            <div className="p-4 border rounded">
              <h3 className="font-medium mb-2">通知アイコン</h3>
              <div className="flex flex-wrap gap-2">
                <IconLabel variant="primary" icon={<NotificationIcon />}>通知</IconLabel>
                <IconLabel variant="warning" icon={<NotificationIcon />}>重要</IconLabel>
                <IconLabel variant="purple" icon={<NotificationIcon />}>新着</IconLabel>
              </div>
            </div>
            
            <div className="p-4 border rounded">
              <h3 className="font-medium mb-2">クラウドアイコン</h3>
              <div className="flex flex-wrap gap-2">
                <IconLabel variant="info" icon={<CloudIcon />}>クラウド</IconLabel>
                <IconLabel variant="success" icon={<CloudIcon />}>同期済み</IconLabel>
                <IconLabel variant="outline" icon={<CloudIcon />}>保存中</IconLabel>
              </div>
            </div>
            
            <div className="p-4 border rounded">
              <h3 className="font-medium mb-2">タグアイコン</h3>
              <div className="flex flex-wrap gap-2">
                <IconLabel variant="secondary" icon={<TagIcon />}>ラベル</IconLabel>
                <IconLabel variant="info" icon={<TagIcon />}>分類</IconLabel>
                <IconLabel variant="purple" icon={<TagIcon />}>特別</IconLabel>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* 実用的な表示例 */}
      <Card title="実用的な表示例" className="mb-8">
        <div className="space-y-6">
          <div className="p-4 border rounded">
            <h3 className="font-medium mb-3">ファイル管理インターフェース</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center p-2 border-b">
                <div className="flex items-center gap-2">
                  <span>プレゼンテーション.pptx</span>
                </div>
                <div className="flex gap-2">
                  <IconLabel size="small" variant="success" icon={<CloudIcon size={12} />}>同期済み</IconLabel>
                  <IconLabel size="small" variant="primary" icon={<TagIcon size={12} />}>プロジェクト</IconLabel>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 border-b">
                <div className="flex items-center gap-2">
                  <span>予算計画.xlsx</span>
                </div>
                <div className="flex gap-2">
                  <IconLabel size="small" variant="warning" icon={<CloudIcon size={12} />}>同期中</IconLabel>
                  <IconLabel size="small" variant="info" icon={<TagIcon size={12} />}>財務</IconLabel>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 border-b">
                <div className="flex items-center gap-2">
                  <span>会議議事録.docx</span>
                </div>
                <div className="flex gap-2">
                  <IconLabel size="small" variant="error" icon={<CloudIcon size={12} />}>未同期</IconLabel>
                  <IconLabel size="small" variant="secondary" icon={<TagIcon size={12} />}>会議</IconLabel>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border rounded">
            <h3 className="font-medium mb-3">通知センター</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center">
                  <NotificationIcon size={20} className="mr-2" />
                  <span>システムアップデートが利用可能です</span>
                </div>
                <IconLabel variant="info" size="small" icon={<TagIcon size={12} />}>システム</IconLabel>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center">
                  <MailIcon size={20} className="mr-2" />
                  <span>新しいメッセージが2件あります</span>
                </div>
                <IconLabel variant="primary" size="small" icon={<MailIcon size={12} />}>メール</IconLabel>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center">
                  <CloudIcon size={20} className="mr-2" />
                  <span>バックアップが完了しました</span>
                </div>
                <IconLabel variant="success" size="small" icon={<CloudIcon size={12} />}>完了</IconLabel>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* 使用例 */}
      <Card title="使用例">
        <div className="space-y-6">
          <div className="p-4 bg-white border rounded">
            <div className="flex items-center mb-2">
              <h3 className="text-lg font-medium">メッセージステータス</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center p-2 border rounded">
                <span className="mr-2">新着メール</span>
                <IconLabel variant="primary" size="small" icon={<MailIcon size={12} />}>3 件</IconLabel>
              </div>
              <div className="flex items-center p-2 border rounded">
                <span className="mr-2">重要メール</span>
                <IconLabel variant="error" size="small" icon={<MailIcon size={12} />}>1 件</IconLabel>
              </div>
              <div className="flex items-center p-2 border rounded">
                <span className="mr-2">下書き</span>
                <IconLabel variant="outline" size="small" icon={<MailIcon size={12} />}>2 件</IconLabel>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-white border rounded">
            <div className="flex items-center mb-2">
              <h3 className="text-lg font-medium">通知リスト</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 border rounded">
                <span>新規メッセージがあります</span>
                <div className="flex gap-2">
                  <IconLabel variant="primary" size="small" icon={<MailIcon size={12} />}>新着</IconLabel>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 border rounded">
                <span>パスワード変更メールが届いています</span>
                <div className="flex gap-2">
                  <IconLabel variant="warning" size="small" icon={<MailIcon size={12} />}>重要</IconLabel>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 border rounded">
                <span>メールボックスがほぼいっぱいです</span>
                <div className="flex gap-2">
                  <IconLabel variant="error" size="small" icon={<MailIcon size={12} />}>警告</IconLabel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </AppLayout>
  );
} 
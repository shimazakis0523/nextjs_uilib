"use client";

import React from 'react';
import { Label } from '../../components/labels';
import { Card } from '../../components/cards';
import AppLayout from '../../components/layout';

export default function LabelPage() {
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
    <AppLayout activePath="/label" screenId="Label" screenTitle="ラベルコンポーネント">
      {/* バリエーション表示 */}
      <Card title="ラベルのバリエーション" className="mb-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium mb-4">通常サイズ</h2>
            <div className="flex flex-wrap gap-4">
              {variants.map((variant) => (
                <Label key={`medium-${variant}`} variant={variant as any}>
                  ラベル
                </Label>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-medium mb-4">小サイズ</h2>
            <div className="flex flex-wrap gap-4">
              {variants.map((variant) => (
                <Label key={`small-${variant}`} variant={variant as any} size="small">
                  ラベル
                </Label>
              ))}
            </div>
          </div>
        </div>
      </Card>
      
      {/* 各種バリエーション詳細 */}
      <Card title="ラベル種類の解説" className="mb-8">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded">
              <div className="mb-2">プライマリ</div>
              <Label variant="primary">ラベル</Label>
              <div className="mt-2 text-sm text-gray-600">
                基本的なラベル。情報を表示するための主要なラベルとして使用。
              </div>
            </div>
            
            <div className="p-4 border rounded">
              <div className="mb-2">セカンダリ</div>
              <Label variant="secondary">ラベル</Label>
              <div className="mt-2 text-sm text-gray-600">
                補助的な情報を表示するためのラベル。
              </div>
            </div>
            
            <div className="p-4 border rounded">
              <div className="mb-2">アウトライン</div>
              <Label variant="outline">ラベル</Label>
              <div className="mt-2 text-sm text-gray-600">
                枠線のみのラベル。軽量な印象を与えます。
              </div>
            </div>
            
            <div className="p-4 border rounded">
              <div className="mb-2">成功</div>
              <Label variant="success">ラベル</Label>
              <div className="mt-2 text-sm text-gray-600">
                成功や完了状態を示すラベル。
              </div>
            </div>
            
            <div className="p-4 border rounded">
              <div className="mb-2">警告</div>
              <Label variant="warning">ラベル</Label>
              <div className="mt-2 text-sm text-gray-600">
                注意を促すための警告ラベル。
              </div>
            </div>
            
            <div className="p-4 border rounded">
              <div className="mb-2">エラー</div>
              <Label variant="error">ラベル</Label>
              <div className="mt-2 text-sm text-gray-600">
                エラーや問題を示すラベル。
              </div>
            </div>
            
            <div className="p-4 border rounded">
              <div className="mb-2">情報</div>
              <Label variant="info">ラベル</Label>
              <div className="mt-2 text-sm text-gray-600">
                補足情報を示すラベル。
              </div>
            </div>
            
            <div className="p-4 border rounded">
              <div className="mb-2">パープル</div>
              <Label variant="purple">ラベル</Label>
              <div className="mt-2 text-sm text-gray-600">
                特別なステータスを示すラベル。
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* ラベルの使用例 */}
      <Card title="使用例">
        <div className="space-y-6">
          <div className="p-4 bg-white border rounded">
            <div className="flex items-center mb-2">
              <h3 className="text-lg font-medium">商品ステータス</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center p-2 border rounded">
                <span className="mr-2">商品A</span>
                <Label variant="success" size="small">販売中</Label>
              </div>
              <div className="flex items-center p-2 border rounded">
                <span className="mr-2">商品B</span>
                <Label variant="warning" size="small">残りわずか</Label>
              </div>
              <div className="flex items-center p-2 border rounded">
                <span className="mr-2">商品C</span>
                <Label variant="error" size="small">売り切れ</Label>
              </div>
              <div className="flex items-center p-2 border rounded">
                <span className="mr-2">商品D</span>
                <Label variant="outline" size="small">入荷待ち</Label>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-white border rounded">
            <div className="flex items-center mb-2">
              <h3 className="text-lg font-medium">メッセージリスト</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 border rounded">
                <span>システムメンテナンス通知</span>
                <div className="flex gap-2">
                  <Label variant="primary" size="small">お知らせ</Label>
                  <Label variant="info" size="small">新着</Label>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 border rounded">
                <span>パスワード変更のお願い</span>
                <div className="flex gap-2">
                  <Label variant="warning" size="small">重要</Label>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 border rounded">
                <span>アカウント情報の確認</span>
                <div className="flex gap-2">
                  <Label variant="secondary" size="small">既読</Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </AppLayout>
  );
} 
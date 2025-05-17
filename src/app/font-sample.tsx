'use client';

import React from 'react';
import { Text } from '../components/typography/Text';
import { FONT, FONT_WEIGHT, FONT_SIZE } from '../components/constants/font/font';

export default function FontSample() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">フォント設定サンプル</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. フォントタイプ</h2>
        
        <div className="grid gap-6">
          <div className="p-4 border rounded">
            <h3 className="text-lg font-medium mb-2">タイトルフォント</h3>
            <Text variant="title" size="xl">これはタイトルフォントです</Text>
            <div className="text-gray-500 mt-2 text-sm">使用フォント: {FONT.TITLE}</div>
          </div>
          
          <div className="p-4 border rounded">
            <h3 className="text-lg font-medium mb-2">本文フォント</h3>
            <Text variant="body" size="base">これは本文フォントです。長い文章を表示する際に使用します。</Text>
            <div className="text-gray-500 mt-2 text-sm">使用フォント: {FONT.BODY}</div>
          </div>
          
          <div className="p-4 border rounded">
            <h3 className="text-lg font-medium mb-2">下線付き本文フォント</h3>
            <Text variant="body-underline" size="base">これは下線付き本文フォントです。</Text>
            <div className="text-gray-500 mt-2 text-sm">使用フォント: {FONT.BODY_UNDERLINE}</div>
          </div>
          
          <div className="p-4 border rounded">
            <h3 className="text-lg font-medium mb-2">モノスペースフォント</h3>
            <Text variant="mono" size="base">これはモノスペースフォントです。コードなどに使用します。</Text>
            <div className="text-gray-500 mt-2 text-sm">使用フォント: {FONT.MONO}</div>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. フォントサイズ</h2>
        
        <div className="grid gap-4">
          {Object.entries(FONT_SIZE).map(([name, size]) => (
            <div key={name} className="flex items-center">
              <div className="w-20">{name}:</div>
              <Text size={name.toLowerCase() as 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'}>{size} - これはサンプルテキストです</Text>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. フォントウェイト</h2>
        
        <div className="grid gap-4">
          <div className="flex items-center">
            <div className="w-32">Regular ({FONT_WEIGHT.REGULAR}):</div>
            <Text weight="regular">これは通常の太さのテキストです</Text>
          </div>
          <div className="flex items-center">
            <div className="w-32">Medium ({FONT_WEIGHT.MEDIUM}):</div>
            <Text weight="medium">これは中間の太さのテキストです</Text>
          </div>
          <div className="flex items-center">
            <div className="w-32">Bold ({FONT_WEIGHT.BOLD}):</div>
            <Text weight="bold">これは太字のテキストです</Text>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">4. フォントの組み合わせ</h2>
        
        <div className="p-6 border rounded">
          <Text variant="title" size="2xl" weight="bold" asElement="h1" className="mb-4">
            UIコンポーネントライブラリ
          </Text>
          
          <Text variant="body" size="lg" className="mb-6">
            このライブラリは、Next.jsプロジェクトでの一貫性のあるデザインシステム構築を支援します。
            すべてのフォント設定は<Text variant="mono" size="base">font.ts</Text>ファイルでのみ定義され、
            この<Text variant="body-underline">唯一の情報源</Text>から、アプリケーション全体のフォント設定が管理されます。
          </Text>
          
          <Text variant="body" size="base">
            フォント設定の変更は、<Text variant="mono">font.ts</Text>ファイルを編集するだけで、
            アプリケーション全体に反映されます。
          </Text>
        </div>
      </section>
    </div>
  );
} 
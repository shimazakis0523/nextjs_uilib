"use client";

import React from 'react';
import { MainButton, SecondaryButton, TertiaryButton, TextButton } from '../../components/button';
import { Card } from '../../components/cards';
import AppLayout from '../../components/layout';
import { ButtonSize } from '../../components/button/BaseButton';

export default function ButtonPage() {
  // ボタンサイズの配列
  const sizes: ButtonSize[] = ["small", "medium", "large"];
  
  return (
    <AppLayout activePath="/button" screenId="Button" screenTitle="ボタンコンポーネント">
      {/* メインボタン */}
      <Card title="メインボタン" className="mb-8">
        <div>
          <h3 className="text-lg font-medium mb-4">サイズバリエーション</h3>
          <div className="flex flex-col gap-8 mb-6">
            <div>
              <h4 className="text-md mb-4">Primaryカラー</h4>
              <div className="flex items-center gap-8">
                {sizes.map((size) => (
                  <div key={`main-primary-${size}`} className="flex flex-col items-center">
                    <MainButton size={size} colorVariant="primary">ボタン</MainButton>
                    <span className="text-sm text-gray-500 mt-2">{size}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-md mb-4">Grayカラー</h4>
              <div className="flex items-center gap-8">
                {sizes.map((size) => (
                  <div key={`main-gray-${size}`} className="flex flex-col items-center">
                    <MainButton size={size} colorVariant="gray">ボタン</MainButton>
                    <span className="text-sm text-gray-500 mt-2">{size}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-md mb-4">Errorカラー</h4>
              <div className="flex items-center gap-8">
                {sizes.map((size) => (
                  <div key={`main-error-${size}`} className="flex flex-col items-center">
                    <MainButton size={size} colorVariant="error">ボタン</MainButton>
                    <span className="text-sm text-gray-500 mt-2">{size}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* セカンダリーボタン */}
      <Card title="Secondaryボタン" className="mb-8">
        <div>
          <h3 className="text-lg font-medium mb-4">サイズバリエーション</h3>
          <div className="flex flex-col gap-8 mb-6">
            <div>
              <h4 className="text-md mb-4">Primaryカラー</h4>
              <div className="flex items-center gap-8">
                {sizes.map((size) => (
                  <div key={`secondary-primary-${size}`} className="flex flex-col items-center">
                    <SecondaryButton size={size} colorVariant="primary">ボタン</SecondaryButton>
                    <span className="text-sm text-gray-500 mt-2">{size}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-md mb-4">Grayカラー</h4>
              <div className="flex items-center gap-8">
                {sizes.map((size) => (
                  <div key={`secondary-gray-${size}`} className="flex flex-col items-center">
                    <SecondaryButton size={size} colorVariant="gray">ボタン</SecondaryButton>
                    <span className="text-sm text-gray-500 mt-2">{size}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-md mb-4">Errorカラー</h4>
              <div className="flex items-center gap-8">
                {sizes.map((size) => (
                  <div key={`secondary-error-${size}`} className="flex flex-col items-center">
                    <SecondaryButton size={size} colorVariant="error">ボタン</SecondaryButton>
                    <span className="text-sm text-gray-500 mt-2">{size}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* ターシャリーボタン */}
      <Card title="Tertiaryボタン" className="mb-8">
        <div>
          <h3 className="text-lg font-medium mb-4">サイズバリエーション</h3>
          <div className="flex flex-col gap-8 mb-6">
            <div>
              <h4 className="text-md mb-4">Primaryカラー</h4>
              <div className="flex items-center gap-8">
                {sizes.map((size) => (
                  <div key={`tertiary-primary-${size}`} className="flex flex-col items-center">
                    <TertiaryButton size={size} colorVariant="primary">ボタン</TertiaryButton>
                    <span className="text-sm text-gray-500 mt-2">{size}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-md mb-4">Grayカラー</h4>
              <div className="flex items-center gap-8">
                {sizes.map((size) => (
                  <div key={`tertiary-gray-${size}`} className="flex flex-col items-center">
                    <TertiaryButton size={size} colorVariant="gray">ボタン</TertiaryButton>
                    <span className="text-sm text-gray-500 mt-2">{size}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-md mb-4">Errorカラー</h4>
              <div className="flex items-center gap-8">
                {sizes.map((size) => (
                  <div key={`tertiary-error-${size}`} className="flex flex-col items-center">
                    <TertiaryButton size={size} colorVariant="error">ボタン</TertiaryButton>
                    <span className="text-sm text-gray-500 mt-2">{size}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* テキストボタン */}
      <Card title="Textボタン" className="mb-8">
        <div>
          <h3 className="text-lg font-medium mb-4">サイズバリエーション</h3>
          <div className="flex flex-col gap-8 mb-6">
            <div>
              <h4 className="text-md mb-4">Primaryカラー</h4>
              <div className="flex items-center gap-8">
                {sizes.map((size) => (
                  <div key={`text-primary-${size}`} className="flex flex-col items-center">
                    <TextButton size={size} colorVariant="primary">ボタン</TextButton>
                    <span className="text-sm text-gray-500 mt-2">{size}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-md mb-4">Grayカラー</h4>
              <div className="flex items-center gap-8">
                {sizes.map((size) => (
                  <div key={`text-gray-${size}`} className="flex flex-col items-center">
                    <TextButton size={size} colorVariant="gray">ボタン</TextButton>
                    <span className="text-sm text-gray-500 mt-2">{size}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-md mb-4">Errorカラー</h4>
              <div className="flex items-center gap-8">
                {sizes.map((size) => (
                  <div key={`text-error-${size}`} className="flex flex-col items-center">
                    <TextButton size={size} colorVariant="error">ボタン</TextButton>
                    <span className="text-sm text-gray-500 mt-2">{size}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </AppLayout>
  );
} 
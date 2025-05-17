"use client";

import React, { useState } from 'react';
import { Card } from '../../components/cards';
import { Popup } from '../../components/popups';
import AppLayout from '../../components/layout';
import { MainButton } from '../../components/button';

export default function PopupsPage() {
  // ポップアップの表示状態
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [showWarningPopup, setShowWarningPopup] = useState(false);
  
  // 通知系ポップアップの表示/非表示切り替え
  const toggleInfoPopup = () => {
    setShowInfoPopup(!showInfoPopup);
  };
  
  // 警告系ポップアップの表示/非表示切り替え
  const toggleWarningPopup = () => {
    setShowWarningPopup(!showWarningPopup);
  };
  
  return (
    <AppLayout activePath="/popups" screenId="Popups" screenTitle="ポップアップコンポーネント">
      {/* 基本のポップアップ */}
      <Card title="基本のポップアップ" className="mb-8">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-4">通知系ポップアップ</h3>
            <p className="mb-2">情報を表示するためのポップアップで、青色のアイコンとボタンを使用します。</p>
            <MainButton onClick={toggleInfoPopup} className="mt-2">
              通知系ポップアップを表示
            </MainButton>
            
            {showInfoPopup && (
              <Popup
                title="タイトル"
                message="メッセージを表示します。長文だった場合には、エリアを拡大させますが、既定値を超過次第、エリア内でのスクロールを想定いたします。"
                variant="info"
                onConfirm={toggleInfoPopup}
                onCancel={toggleInfoPopup}
              />
            )}
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">警告系ポップアップ</h3>
            <p className="mb-2">エラーや警告を表示するためのポップアップで、赤色のアイコンとボタンを使用します。</p>
            <MainButton 
              onClick={toggleWarningPopup} 
              colorVariant="error" 
              className="mt-2"
            >
              警告系ポップアップを表示
            </MainButton>
            
            {showWarningPopup && (
              <Popup
                title="タイトル"
                message="メッセージを表示します。長文だった場合には、エリアを拡大させますが、既定値を超過次第、エリア内でのスクロールを想定いたします。"
                variant="warning"
                onConfirm={toggleWarningPopup}
                onCancel={toggleWarningPopup}
              />
            )}
          </div>
        </div>
      </Card>
      
      {/* 使用方法 */}
      <Card title="使用方法">
        <div className="space-y-4">
          <h3 className="text-lg font-medium mb-2">インポート方法</h3>
          <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            {`import { Popup } from '../components/popups';`}
          </pre>
          
          <h3 className="text-lg font-medium mb-2">基本的な使い方</h3>
          <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            {`// 基本的な使い方
const [isOpen, setIsOpen] = useState(false);

// 表示切り替え
const togglePopup = () => {
  setIsOpen(!isOpen);
};

// JSX内
return (
  <div>
    <button onClick={togglePopup}>ポップアップを開く</button>
    
    {isOpen && (
      <Popup
        title="タイトル"
        message="メッセージテキスト"
        variant="info"
        onConfirm={() => {
          console.log('確認されました');
          togglePopup();
        }}
        onCancel={() => {
          console.log('キャンセルされました');
          togglePopup();
        }}
      />
    )}
  </div>
);`}
          </pre>
          
          <h3 className="text-lg font-medium mb-2">プロパティ一覧</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">プロパティ</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">タイプ</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">デフォルト</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">title</td>
                  <td className="border border-gray-300 px-4 py-2">string</td>
                  <td className="border border-gray-300 px-4 py-2">-</td>
                  <td className="border border-gray-300 px-4 py-2">ポップアップのタイトル</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">message</td>
                  <td className="border border-gray-300 px-4 py-2">string</td>
                  <td className="border border-gray-300 px-4 py-2">-</td>
                  <td className="border border-gray-300 px-4 py-2">ポップアップのメッセージ</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">variant</td>
                  <td className="border border-gray-300 px-4 py-2">'info' | 'warning'</td>
                  <td className="border border-gray-300 px-4 py-2">'info'</td>
                  <td className="border border-gray-300 px-4 py-2">ポップアップのバリアント</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">confirmText</td>
                  <td className="border border-gray-300 px-4 py-2">string</td>
                  <td className="border border-gray-300 px-4 py-2">'保存'</td>
                  <td className="border border-gray-300 px-4 py-2">確認ボタンのテキスト</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">cancelText</td>
                  <td className="border border-gray-300 px-4 py-2">string</td>
                  <td className="border border-gray-300 px-4 py-2">'キャンセル'</td>
                  <td className="border border-gray-300 px-4 py-2">キャンセルボタンのテキスト</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">onConfirm</td>
                  <td className="border border-gray-300 px-4 py-2">() => void</td>
                  <td className="border border-gray-300 px-4 py-2">-</td>
                  <td className="border border-gray-300 px-4 py-2">確認ボタンクリック時のコールバック</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">onCancel</td>
                  <td className="border border-gray-300 px-4 py-2">() => void</td>
                  <td className="border border-gray-300 px-4 py-2">-</td>
                  <td className="border border-gray-300 px-4 py-2">キャンセルボタンクリック時のコールバック</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">isOpen</td>
                  <td className="border border-gray-300 px-4 py-2">boolean</td>
                  <td className="border border-gray-300 px-4 py-2">true</td>
                  <td className="border border-gray-300 px-4 py-2">ポップアップの表示状態</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">closeOnOutsideClick</td>
                  <td className="border border-gray-300 px-4 py-2">boolean</td>
                  <td className="border border-gray-300 px-4 py-2">true</td>
                  <td className="border border-gray-300 px-4 py-2">外側クリックで閉じるかどうか</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </AppLayout>
  );
} 
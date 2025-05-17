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
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <p>{'import { Popup } from \'../components/popups\';'}</p>
          </div>
          
          <h3 className="text-lg font-medium mb-2">基本的な使い方</h3>
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <p className="mb-2">1. Popupコンポーネントをインポートする</p>
            <p className="mb-2">2. 表示状態を管理するstateを作成する</p>
            <p className="mb-2">3. 表示/非表示を切り替える関数を作成する</p>
            <p className="mb-2">4. ボタンクリック時にポップアップを表示し、確認/キャンセル時に非表示にする</p>
          </div>
          
          <h3 className="text-lg font-medium mb-2">プロパティ一覧</h3>
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <div className="font-bold">title</div>
              <div>タイプ: string</div>
              <div>デフォルト: -</div>
              <div>説明: ポップアップのタイトル</div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <div className="font-bold">message</div>
              <div>タイプ: string</div>
              <div>デフォルト: -</div>
              <div>説明: ポップアップのメッセージ</div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <div className="font-bold">variant</div>
              <div>タイプ: &apos;info&apos; または &apos;warning&apos;</div>
              <div>デフォルト: &apos;info&apos;</div>
              <div>説明: ポップアップのバリアント</div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <div className="font-bold">confirmText</div>
              <div>タイプ: string</div>
              <div>デフォルト: &apos;保存&apos;</div>
              <div>説明: 確認ボタンのテキスト</div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <div className="font-bold">cancelText</div>
              <div>タイプ: string</div>
              <div>デフォルト: &apos;キャンセル&apos;</div>
              <div>説明: キャンセルボタンのテキスト</div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <div className="font-bold">onConfirm</div>
              <div>タイプ: 関数</div>
              <div>デフォルト: -</div>
              <div>説明: 確認ボタンクリック時のコールバック</div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <div className="font-bold">onCancel</div>
              <div>タイプ: 関数</div>
              <div>デフォルト: -</div>
              <div>説明: キャンセルボタンクリック時のコールバック</div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <div className="font-bold">isOpen</div>
              <div>タイプ: boolean</div>
              <div>デフォルト: true</div>
              <div>説明: ポップアップの表示状態</div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <div className="font-bold">closeOnOutsideClick</div>
              <div>タイプ: boolean</div>
              <div>デフォルト: true</div>
              <div>説明: 外側クリックで閉じるかどうか</div>
            </div>
          </div>
        </div>
      </Card>
    </AppLayout>
  );
} 
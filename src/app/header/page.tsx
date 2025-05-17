"use client";

import React, { useState } from 'react';
import { Header } from '../../components/headers';
import { Card } from '../../components/cards';
import AppLayout from '../../components/layout';

export default function HeaderPage() {
  // ログイン状態の管理
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  // ログイン/ログアウトの切り替え
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  
  return (
    <AppLayout activePath="/header">
      <h1 className="text-2xl font-bold mb-8">ヘッダーコンポーネントの表示例</h1>
      
      <button
        className="mb-8 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={toggleLogin}
      >
        {isLoggedIn ? 'ログアウト状態にする' : 'ログイン状態にする'}
      </button>
      
      <Card title="サービス名付きヘッダー (従来型)" className="mb-8">
        <div className="border rounded">
          <Header
            serviceName="サンプルサービス"
            userId="user@example.com"
            isLoggedIn={isLoggedIn}
          />
        </div>
      </Card>
      
      <Card title="サービス名なしヘッダー (新デザイン)" className="mb-8">
        <div className="border rounded">
          <Header
            userId="user@example.com"
            isLoggedIn={isLoggedIn}
          />
        </div>
      </Card>
      
      <Card title="背景色付きヘッダー" className="mb-8">
        <div className="border rounded">
          <Header
            userId="color@example.com"
            isLoggedIn={isLoggedIn}
            backgroundColor="#f0f9ff"
          />
        </div>
      </Card>
      
      <Card title="非ログイン状態のヘッダー" className="mb-8">
        <div className="border rounded">
          <Header
            isLoggedIn={false}
          />
        </div>
      </Card>
    </AppLayout>
  );
} 
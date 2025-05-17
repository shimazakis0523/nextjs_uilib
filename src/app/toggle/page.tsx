"use client";

import React, { useState } from 'react';
import { ToggleSwitch } from '../../components/toggles';
import { Card } from '../../components/cards';
import AppLayout from '../../components/layout';

export default function ToggleSwitchPage() {
  // トグルの状態を管理
  const [primaryChecked, setPrimaryChecked] = useState(true);
  const [grayChecked, setGrayChecked] = useState(false);
  const [lightPrimaryChecked, setLightPrimaryChecked] = useState(true);
  const [lightGrayChecked, setLightGrayChecked] = useState(false);
  
  return (
    <AppLayout activePath="/toggle" screenId="ToggleSwitch" screenTitle="トグルスイッチ表示例">
      <Card title="トグルスイッチのバリエーション" className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* バリエーション1: 標準 */}
          <div className="flex flex-col items-center">
            <ToggleSwitch 
              checked={primaryChecked} 
              onChange={setPrimaryChecked}
              variant="primary"
              className="mb-2"
            />
            <p className="text-sm text-gray-600">Primary</p>
          </div>
          
          {/* バリエーション2: 標準(非アクティブ) */}
          <div className="flex flex-col items-center">
            <ToggleSwitch 
              checked={grayChecked} 
              onChange={setGrayChecked}
              variant="gray"
              className="mb-2"
            />
            <p className="text-sm text-gray-600">Gray</p>
          </div>
          
          {/* バリエーション3: 軽量版 */}
          <div className="flex flex-col items-center">
            <ToggleSwitch 
              checked={lightPrimaryChecked} 
              onChange={setLightPrimaryChecked}
              variant="light-primary"
              className="mb-2"
            />
            <p className="text-sm text-gray-600">Light Primary</p>
          </div>
          
          {/* バリエーション4: 軽量版(非アクティブ) */}
          <div className="flex flex-col items-center">
            <ToggleSwitch 
              checked={lightGrayChecked} 
              onChange={setLightGrayChecked}
              variant="light-gray"
              className="mb-2"
            />
            <p className="text-sm text-gray-600">Light Gray</p>
          </div>
        </div>
      </Card>
      
      <Card title="使用例">
        <div className="bg-gray-50 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <span>ダークモード</span>
            <ToggleSwitch 
              checked={primaryChecked} 
              onChange={setPrimaryChecked}
              variant="primary"
            />
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <span>通知を受け取る</span>
            <ToggleSwitch 
              checked={lightPrimaryChecked} 
              onChange={setLightPrimaryChecked}
              variant="light-primary"
            />
          </div>
        </div>
      </Card>
    </AppLayout>
  );
} 
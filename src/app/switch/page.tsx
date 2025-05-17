"use client";

import React, { useState } from 'react';
import { Switch } from '../../components/switch';
import { Card } from '../../components/cards';
import AppLayout from '../../components/layout';

export default function SwitchPage() {
  // 選択状態の管理
  const [selected3Items, setSelected3Items] = useState('tab1');
  const [selected5Items, setSelected5Items] = useState('tab1');
  const [selectedCustom, setSelectedCustom] = useState('all');
  
  return (
    <AppLayout activePath="/switch" screenId="SegmentSwitch" screenTitle="セグメントスイッチの表示例">
      <Card title="標準的なSwitch - 3つの項目" className="mb-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-lg mb-3">基本的な使用例</h2>
            <Switch 
              value={selected3Items} 
              onChange={setSelected3Items}
              className="mb-8"
            >
              <Switch.Item value="tab1">Select</Switch.Item>
              <Switch.Item value="tab2">Select</Switch.Item>
              <Switch.Item value="tab3">Select</Switch.Item>
            </Switch>
            
            <div className="mt-4">
              <p>選択された値: {selected3Items}</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg mb-3">幅の異なる使用例</h2>
            <Switch 
              value={selected3Items} 
              onChange={setSelected3Items}
              className="mb-8"
              fullWidth
            >
              <Switch.Item value="tab1">Select</Switch.Item>
              <Switch.Item value="tab2">Select</Switch.Item>
              <Switch.Item value="tab3">Select</Switch.Item>
            </Switch>
          </div>
        </div>
      </Card>
      
      <Card title="項目数が異なるSwitch - 5つの項目" className="mb-8">
        <Switch 
          value={selected5Items} 
          onChange={setSelected5Items}
          className="mb-8"
        >
          <Switch.Item value="tab1">Tab 1</Switch.Item>
          <Switch.Item value="tab2">Tab 2</Switch.Item>
          <Switch.Item value="tab3">Tab 3</Switch.Item>
          <Switch.Item value="tab4">Tab 4</Switch.Item>
          <Switch.Item value="tab5">Tab 5</Switch.Item>
        </Switch>
        
        <div className="mt-4">
          <p>選択された値: {selected5Items}</p>
        </div>
      </Card>
      
      <Card title="実際の使用例" className="mb-8">
        <div className="mb-2">フィルター:</div>
        <Switch 
          value={selectedCustom} 
          onChange={setSelectedCustom}
          size="small"
        >
          <Switch.Item value="all">すべて</Switch.Item>
          <Switch.Item value="active">アクティブ</Switch.Item>
          <Switch.Item value="archived">アーカイブ</Switch.Item>
        </Switch>
        
        <div className="mt-8 p-4 bg-gray-50 rounded">
          {selectedCustom === 'all' && (
            <p>すべてのアイテムが表示されています</p>
          )}
          {selectedCustom === 'active' && (
            <p>アクティブなアイテムのみ表示されています</p>
          )}
          {selectedCustom === 'archived' && (
            <p>アーカイブされたアイテムのみ表示されています</p>
          )}
        </div>
      </Card>
    </AppLayout>
  );
} 
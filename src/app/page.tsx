import Header from '../components/Header';
import Card from '../components/Card';
import { 
  MainButton, 
  SecondaryButton, 
  TertiaryButton, 
  TextButton 
} from '../components/button/index';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header title="ボタンコンポーネント" />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Card title="ボタンコンポーネント表示例">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* メインボタン (Default) */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-1">メインボタン (Default)</h3>
                <p className="text-sm text-gray-500 mb-4">重要なアクションボタンなどに使用</p>
                
                <h4 className="text-sm font-medium mb-2">Small</h4>
                <div className="space-y-2 mb-4">
                  <MainButton size="small" colorVariant="primary">
                    メインラベル
                  </MainButton>
                  <div>
                    <MainButton size="small" colorVariant="gray">
                      メインラベル
                    </MainButton>
                  </div>
                  <div>
                    <MainButton size="small" colorVariant="error">
                      メインラベル
                    </MainButton>
                  </div>
                </div>
              </div>
              
              {/* Secondary */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-1">Secondary</h3>
                <p className="text-sm text-gray-500 mb-4">白背景アクセントボタンなどに使用</p>
                
                <h4 className="text-sm font-medium mb-2">Small</h4>
                <div className="space-y-2 mb-4">
                  <SecondaryButton size="small" colorVariant="primary">
                    ラベル
                  </SecondaryButton>
                  <div>
                    <SecondaryButton size="small" colorVariant="gray">
                      ラベル
                    </SecondaryButton>
                  </div>
                  <div>
                    <SecondaryButton size="small" colorVariant="error">
                      ラベル
                    </SecondaryButton>
                  </div>
                </div>
              </div>
              
              {/* Tertiary */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-1">Tertiary</h3>
                <p className="text-sm text-gray-500 mb-4">補助的な機能や、優先度の低いアクションに使用</p>
                
                <h4 className="text-sm font-medium mb-2">Small</h4>
                <div className="space-y-2 mb-4">
                  <TertiaryButton size="small" colorVariant="primary">
                    ラベル
                  </TertiaryButton>
                  <div>
                    <TertiaryButton size="small" colorVariant="gray">
                      ラベル
                    </TertiaryButton>
                  </div>
                  <div>
                    <TertiaryButton size="small" colorVariant="error">
                      ラベル
                    </TertiaryButton>
                  </div>
                </div>
              </div>
              
              {/* テキストボタン */}
              <div className="border-t pt-4 md:col-span-3">
                <h3 className="text-lg font-semibold mb-1">Text Button</h3>
                <p className="text-sm text-gray-500 mb-4">強調する必要がなく、重要性の低い機能の呼び出しに使用</p>
                
                <h4 className="text-sm font-medium mb-2">Small</h4>
                <div className="flex space-x-8 mb-4">
                  <TextButton size="small" colorVariant="primary">
                    プライマリラベル
                  </TextButton>
                  <TextButton size="small" colorVariant="gray">
                    グレーラベル
                  </TextButton>
                  <TextButton size="small" colorVariant="error">
                    エラーラベル
                  </TextButton>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}


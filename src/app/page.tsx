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
                <h3 className="text-lg font-semibold mb-1">メインボタン</h3>
                <p className="text-sm text-gray-500 mb-4">重要なアクションボタンなどに使用</p>
                
                <h4 className="text-sm font-medium mb-2">Small</h4>
                <div className="space-y-2 mb-4">
                <h4 className="text-sm font-medium mb-2">Primaryカラー</h4>
                  <MainButton size="small" colorVariant="primary">
                    ラベル
                  </MainButton>
                <div>
                <h4 className="text-sm font-medium mb-2">Grayカラー</h4>
                  <MainButton size="small" colorVariant="gray">
                    ラベル
                  </MainButton>
                </div>
                <div>
                <h4 className="text-sm font-medium mb-2">Errorカラー</h4>
                    <MainButton size="small" colorVariant="error">
                      ラベル
                    </MainButton>
                </div>
              </div>
            </div>
              
              {/* Secondary */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-1">Secondary</h3>
                <p className="text-sm text-gray-500 mb-4">ページ内のアクションボタンなどに使用</p>
                
                <h4 className="text-sm font-medium mb-2">Small</h4>
                <div className="space-y-2 mb-4">
                  <SecondaryButton size="small" colorVariant="primary">
                    primary
                  </SecondaryButton>
                  <div>
                    <SecondaryButton size="small" colorVariant="gray">
                      gray
                    </SecondaryButton>
                  </div>
                  <div>
                    <SecondaryButton size="small" colorVariant="error">
                      error
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
                    primary
                  </TertiaryButton>
                  <div>
                    <TertiaryButton size="small" colorVariant="gray">
                      gray
                    </TertiaryButton>
                  </div>
                  <div>
                    <TertiaryButton size="small" colorVariant="error">
                      error
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
                    primary
                  </TextButton>
                  <TextButton size="small" colorVariant="gray">
                    gray
                  </TextButton>
                  <TextButton size="small" colorVariant="error">
                    error
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


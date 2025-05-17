"use client";

import React, { useState } from 'react';
import InputField from '../../components/textfields/InputField';
import TextArea from '../../components/textfields/TextArea';
import Dropdown from '../../components/textfields/Dropdown';
import SearchIcon from '../../components/icons/SearchIcon';
import CalendarIcon from '../../components/icons/CalendarIcon';
import AppLayout from '../../components/layout';
import { Card } from '../../components/cards';
import { 
  EMAIL_PATTERN,
  PHONE_PATTERN,
  POSTAL_CODE_PATTERN,
  URL_PATTERN,
  MOBILE_PHONE_PATTERN
} from '../../constant/regex';

export default function TextFieldsPage() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState(''); 
  const [inputValue4, setInputValue4] = useState('123456789'); // 初期値を設定
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [mobilePhoneValue, setMobilePhoneValue] = useState('');
  const [textAreaPostalCode, setTextAreaPostalCode] = useState('');
  const [textAreaUrl, setTextAreaUrl] = useState('');
  const [validationResult, setValidationResult] = useState<{
    email: boolean, 
    phone: boolean, 
    mobilePhone: boolean,
    postalCode: boolean, 
    url: boolean
  }>({
    email: true,
    phone: true,
    mobilePhone: true,
    postalCode: true,
    url: true
  });
  
  // 検証結果を表示するためのハンドラー
  const handleEmailValidation = (isValid: boolean, value: string) => {
    setValidationResult(prev => ({...prev, email: isValid}));
  };
  
  const handlePhoneValidation = (isValid: boolean, value: string) => {
    setValidationResult(prev => ({...prev, phone: isValid}));
  };
  
  const handleMobilePhoneValidation = (isValid: boolean, value: string) => {
    setValidationResult(prev => ({...prev, mobilePhone: isValid}));
  };
  
  const handlePostalCodeValidation = (isValid: boolean, value: string) => {
    setValidationResult(prev => ({...prev, postalCode: isValid}));
  };
  
  const handleUrlValidation = (isValid: boolean, value: string) => {
    setValidationResult(prev => ({...prev, url: isValid}));
  };
  
  return (
    <AppLayout activePath="/textfields" screenId="TextFields" screenTitle="テキストフィールド">
      <div className="space-y-8">
        {/* 標準的なテキストフィールド */}
        <Card title="入力フィールド" className="mb-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">通常状態</h3>
              <InputField 
                label="名前" 
                placeholder="山田太郎" 
                value={inputValue1}
                onChange={(e) => setInputValue1(e.target.value)}
              />
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">アイコン付き</h3>
              <InputField 
                label="検索" 
                placeholder="キーワードを入力" 
                leftIcon={<SearchIcon />}
                value={inputValue2}
                onChange={(e) => setInputValue2(e.target.value)}
              />
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">エラー状態</h3>
              <InputField 
                label="メールアドレス" 
                placeholder="example@mail.com" 
                state="error" 
                errorMessage="正しいメールアドレスを入力してください"
                value={inputValue3}
                onChange={(e) => setInputValue3(e.target.value)}
              />
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">無効状態</h3>
              <InputField 
                label="読み取り専用項目" 
                placeholder="この項目は編集できません" 
                disabled
              />
            </div>
          </div>
        </Card>
        
        {/* 正規表現バリデーションのサンプル */}
        <Card title="正規表現バリデーション" className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-2">メールアドレス検証</h3>
              <InputField
                label="メールアドレス"
                placeholder="example@example.com"
                validationPattern={EMAIL_PATTERN}
                patternErrorMessage="正しいメールアドレス形式で入力してください"
                patternHint="例: example@example.com"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                validateOn="change"
                onValidation={handleEmailValidation}
                width="md"
                isRequired
              />
              <p className="mt-2 text-sm">
                検証結果: 
                <span className={validationResult.email ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                  {validationResult.email ? "有効" : "無効"}
                </span>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">電話番号検証</h3>
              <InputField
                label="電話番号"
                placeholder="000-0000-0000"
                validationPattern={PHONE_PATTERN}
                patternErrorMessage="000-0000-0000形式で入力してください"
                patternHint="例: 03-1234-5678（ハイフン必須）"
                value={phoneValue}
                onChange={(e) => setPhoneValue(e.target.value)}
                validateOn="blur"
                onValidation={handlePhoneValidation}
                width="md"
              />
              <p className="mt-2 text-sm">
                検証結果: 
                <span className={validationResult.phone ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                  {validationResult.phone ? "有効" : "無効"}
                </span>
              </p>
            </div>
          </div>
        </Card>
        
        {/* 携帯電話番号バリデーションのサンプル */}
        <Card title="携帯電話番号バリデーション" className="mb-8">
          <div>
            <h3 className="text-lg font-medium mb-2">携帯電話番号（090, 080, 070, 060, 050のみ許可）</h3>
            <InputField
              label="携帯電話番号"
              placeholder="090-0000-0000"
              validationPattern={MOBILE_PHONE_PATTERN}
              patternErrorMessage="正しい携帯電話番号の形式で入力してください"
              patternHint="例: 090-1234-5678（090, 080, 070, 060, 050で始まる番号のみ、ハイフン必須）"
              value={mobilePhoneValue}
              onChange={(e) => setMobilePhoneValue(e.target.value)}
              validateOn="change"
              onValidation={handleMobilePhoneValidation}
              width="md"
            />
            <p className="mt-2 text-sm">
              検証結果: 
              <span className={validationResult.mobilePhone ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                {validationResult.mobilePhone ? "有効" : "無効"}
              </span>
            </p>
            <div className="mt-4 p-3 bg-gray-100 rounded-md">
              <p className="text-sm text-gray-700">
                <strong>有効な入力例:</strong> 090-1234-5678, 080-1234-5678, 070-1234-5678, 060-1234-5678, 050-1234-5678
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>無効な入力例:</strong> 03-1234-5678, 0120-123-456, 123-4567-8900
              </p>
            </div>
          </div>
        </Card>
        
        {/* 文字数制限サンプル */}
        <Card title="文字数制限の例" className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-2">上限10文字・カウンター右側</h3>
              <InputField
                label="短いテキスト入力"
                placeholder="最大10文字まで"
                maxLength={10}
                showCounter={true}
                counterPosition="right"
                value={inputValue4}
                onChange={(e) => setInputValue4(e.target.value)}
                width="md"
              />
              <p className="mt-2 text-sm text-gray-500">
                入力して10文字を超えるとエラー表示になります
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">上限5文字・カウンター下部</h3>
              <InputField
                label="制限付き入力"
                placeholder="5文字以内"
                maxLength={5}
                showCounter={true}
                counterPosition="bottom"
                isRequired={true}
                width="sm"
              />
              <p className="mt-6 text-sm text-gray-500">
                残り文字数が少なくなると警告色になります
              </p>
            </div>
          </div>
        </Card>
        
        {/* 幅のバリエーション */}
        <Card title="幅のバリエーション" className="mb-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">小 (sm)</h3>
              <InputField 
                label="郵便番号" 
                placeholder="123-4567"
                width="sm"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">中 (md)</h3>
              <InputField 
                label="市区町村" 
                placeholder="〇〇市△△区"
                width="md"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">大 (lg)</h3>
              <InputField 
                label="住所" 
                placeholder="〇〇町1-2-3"
                width="lg"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">フル幅 (full)</h3>
              <InputField 
                label="詳細住所" 
                placeholder="〇〇マンション101号室"
                width="full"
              />
            </div>
          </div>
        </Card>

        {/* テキストエリア */}
        <Card title="テキストエリア" className="mb-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">通常状態</h3>
              <TextArea 
                label="自己紹介" 
                placeholder="あなたについて教えてください"
                rows={4}
                width="full"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">必須項目</h3>
              <TextArea 
                label="お問い合わせ内容" 
                placeholder="具体的な内容をご記入ください"
                isRequired
                rows={4}
                width="lg"
              />
            </div>
            
            {/* 文字数制限のサンプル */}
            <div>
              <h3 className="text-lg font-medium mb-2">文字数制限付き（50文字まで）</h3>
              <TextArea 
                label="コメント" 
                placeholder="50文字以内でコメントを入力してください"
                maxLength={50}
                showCounter={true}
                counterPosition="bottom"
                rows={3}
                width="lg"
              />
              <p className="mt-2 text-sm text-gray-500">
                残り文字数がカウントされ、上限を超えるとエラー表示になります
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">文字数制限付き（右側カウンター）</h3>
              <TextArea 
                label="メッセージ" 
                placeholder="短いメッセージを入力してください"
                maxLength={20}
                showCounter={true}
                counterPosition="right"
                rows={2}
                width="md"
              />
            </div>
            
            {/* TextAreaの正規表現バリデーションサンプル */}
            <div>
              <h3 className="text-xl font-semibold mb-4">TextAreaでの正規表現バリデーション</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium mb-2">郵便番号検証</h4>
                  <TextArea 
                    label="郵便番号（テキストエリア）" 
                    placeholder="123-4567"
                    rows={2}
                    width="md"
                    validationPattern={POSTAL_CODE_PATTERN}
                    patternErrorMessage="正しい郵便番号形式（123-4567）で入力してください"
                    patternHint="例: 123-4567（ハイフン必須）"
                    value={textAreaPostalCode}
                    onChange={(e) => setTextAreaPostalCode(e.target.value)}
                    validateOn="change"
                    onValidation={handlePostalCodeValidation}
                  />
                  <p className="mt-2 text-sm">
                    検証結果: 
                    <span className={validationResult.postalCode ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                      {validationResult.postalCode ? "有効" : "無効"}
                    </span>
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">URL検証</h4>
                  <TextArea 
                    label="ウェブサイトURL" 
                    placeholder="https://example.com"
                    rows={2}
                    width="md"
                    validationPattern={URL_PATTERN}
                    patternErrorMessage="正しいURL形式で入力してください"
                    patternHint="例: https://example.com"
                    value={textAreaUrl}
                    onChange={(e) => setTextAreaUrl(e.target.value)}
                    validateOn="blur"
                    onValidation={handleUrlValidation}
                  />
                  <p className="mt-2 text-sm">
                    検証結果: 
                    <span className={validationResult.url ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                      {validationResult.url ? "有効" : "無効"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        {/* ドロップダウン */}
        <Card title="ドロップダウン" className="mb-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">通常状態</h3>
              <Dropdown 
                label="都道府県" 
                placeholder="選択してください"
                options={[
                  { value: 'tokyo', label: '東京都' },
                  { value: 'osaka', label: '大阪府' },
                  { value: 'kyoto', label: '京都府' },
                  { value: 'hokkaido', label: '北海道' },
                ]}
                width="md"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">必須項目</h3>
              <Dropdown 
                label="性別" 
                placeholder="選択してください"
                isRequired
                options={[
                  { value: 'male', label: '男性' },
                  { value: 'female', label: '女性' },
                  { value: 'other', label: 'その他' },
                  { value: 'no_answer', label: '回答しない' },
                ]}
                width="sm"
              />
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
} 
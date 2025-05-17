"use client";

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import AppLayout from '../../../components/layout';
import { Card } from '../../../components/cards';
import InputField from '../../../components/textfields/InputField';
import TextArea from '../../../components/textfields/TextArea';
import Dropdown from '../../../components/textfields/Dropdown';
import { MainButton, SecondaryButton } from '../../../components/button';
import { EyeIcon, EyeOffIcon } from '../../../components/icons';
import { Popup } from '../../../components/popups';
import { 
  EMAIL_PATTERN,
  MOBILE_PHONE_PATTERN,
  POSTAL_CODE_PATTERN,
  KATAKANA_ONLY_PATTERN,
  JAPANESE_PATTERN,
  STRONG_PASSWORD_PATTERN
} from '../../../constant/regex';

// フォーム入力データの型定義
interface UserFormData {
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  mobilePhone: string;
  postalCode: string;
  prefecture: string;
  email: string;
  password: string;
  passwordConfirm: string;
  notes: string;
}

export default function UserRegistrationPage() {
  // React Hook Formの設定
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset,
    watch,
    getValues
  } = useForm<UserFormData>({
    defaultValues: {
      lastName: '',
      firstName: '',
      lastNameKana: '',
      firstNameKana: '',
      mobilePhone: '',
      postalCode: '',
      prefecture: '',
      email: '',
      password: '',
      passwordConfirm: '',
      notes: ''
    }
  });
  
  // 送信完了状態
  const [isSubmitted, setIsSubmitted] = useState(false);
  // 送信データ保存用
  const [submittedData, setSubmittedData] = useState<UserFormData | null>(null);
  // パスワード表示状態
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  // ポップアップ表示状態
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  // 確認中のフォームデータ
  const [confirmData, setConfirmData] = useState<UserFormData | null>(null);
  
  // フォーム検証処理（ポップアップを表示するため）
  const validateAndShowPopup: SubmitHandler<UserFormData> = (data) => {
    setConfirmData(data);
    setShowConfirmPopup(true);
  };
  
  // フォーム送信処理
  const onSubmit = async () => {
    if (!confirmData) return;
    
    // 送信処理をシミュレート（実際はAPIリクエストなど）
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 送信データを保存
    setSubmittedData(confirmData);
    setIsSubmitted(true);
    setShowConfirmPopup(false);
    
    console.log('送信データ:', confirmData);
  };
  
  // 確認キャンセル
  const handleCancelConfirm = () => {
    setShowConfirmPopup(false);
    setConfirmData(null);
  };
  
  // フォームリセット
  const handleReset = () => {
    reset();
    setIsSubmitted(false);
    setSubmittedData(null);
  };
  
  // パスワード表示切り替え
  const togglePasswordVisibility = (e: React.MouseEvent) => {
    e.stopPropagation(); // クリックイベントの伝播を止める
    setShowPassword(!showPassword);
  };
  
  // パスワード確認表示切り替え
  const togglePasswordConfirmVisibility = (e: React.MouseEvent) => {
    e.stopPropagation(); // クリックイベントの伝播を止める
    setShowPasswordConfirm(!showPasswordConfirm);
  };
  
  // 都道府県選択肢
  const prefectureOptions = [
    { value: '北海道', label: '北海道' },
    { value: '青森県', label: '青森県' },
    { value: '岩手県', label: '岩手県' },
    { value: '宮城県', label: '宮城県' },
    { value: '秋田県', label: '秋田県' },
    { value: '山形県', label: '山形県' },
    { value: '福島県', label: '福島県' },
    { value: '茨城県', label: '茨城県' },
    { value: '栃木県', label: '栃木県' },
    { value: '群馬県', label: '群馬県' },
    { value: '埼玉県', label: '埼玉県' },
    { value: '千葉県', label: '千葉県' },
    { value: '東京都', label: '東京都' },
    { value: '神奈川県', label: '神奈川県' },
    { value: '新潟県', label: '新潟県' },
    { value: '富山県', label: '富山県' },
    { value: '石川県', label: '石川県' },
    { value: '福井県', label: '福井県' },
    { value: '山梨県', label: '山梨県' },
    { value: '長野県', label: '長野県' },
    { value: '岐阜県', label: '岐阜県' },
    { value: '静岡県', label: '静岡県' },
    { value: '愛知県', label: '愛知県' },
    { value: '三重県', label: '三重県' },
    { value: '滋賀県', label: '滋賀県' },
    { value: '京都府', label: '京都府' },
    { value: '大阪府', label: '大阪府' },
    { value: '兵庫県', label: '兵庫県' },
    { value: '奈良県', label: '奈良県' },
    { value: '和歌山県', label: '和歌山県' },
    { value: '鳥取県', label: '鳥取県' },
    { value: '島根県', label: '島根県' },
    { value: '岡山県', label: '岡山県' },
    { value: '広島県', label: '広島県' },
    { value: '山口県', label: '山口県' },
    { value: '徳島県', label: '徳島県' },
    { value: '香川県', label: '香川県' },
    { value: '愛媛県', label: '愛媛県' },
    { value: '高知県', label: '高知県' },
    { value: '福岡県', label: '福岡県' },
    { value: '佐賀県', label: '佐賀県' },
    { value: '長崎県', label: '長崎県' },
    { value: '熊本県', label: '熊本県' },
    { value: '大分県', label: '大分県' },
    { value: '宮崎県', label: '宮崎県' },
    { value: '鹿児島県', label: '鹿児島県' },
    { value: '沖縄県', label: '沖縄県' },
  ];

  // 入力値のウォッチ
  const formValues = watch();
  
  return (
    <AppLayout 
      activePath="/samples/user-registration" 
      screenId="サンプルページ" 
      screenTitle="ユーザー登録フォーム"
    >
      <div className="space-y-6 px-4 sm:px-6">
        <Card title="ユーザー登録情報" className="mb-8">
          <form onSubmit={handleSubmit(validateAndShowPopup)} className="space-y-6">
            {/* 氏名（漢字） */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <InputField
                  label="姓（漢字）"
                  placeholder="山田"
                  isRequired
                  maxLength={20}
                  showCounter
                  counterPosition="right"
                  width="full"
                  state={errors.lastName ? "error" : "default"}
                  errorMessage={errors.lastName?.message}
                  patternHint="日本語（ひらがな・カタカナ・漢字）で入力してください"
                  {...register("lastName", { 
                    required: "姓（漢字）は必須です",
                    maxLength: {
                      value: 20,
                      message: "20文字以内で入力してください"
                    },
                    pattern: {
                      value: JAPANESE_PATTERN,
                      message: "日本語（ひらがな・カタカナ・漢字）で入力してください"
                    }
                  })}
                />
              </div>
              <div>
                <InputField
                  label="名（漢字）"
                  placeholder="太郎"
                  isRequired
                  maxLength={20}
                  showCounter
                  counterPosition="right"
                  width="full"
                  state={errors.firstName ? "error" : "default"}
                  errorMessage={errors.firstName?.message}
                  patternHint="日本語（ひらがな・カタカナ・漢字）で入力してください"
                  {...register("firstName", { 
                    required: "名（漢字）は必須です",
                    maxLength: {
                      value: 20,
                      message: "20文字以内で入力してください"
                    },
                    pattern: {
                      value: JAPANESE_PATTERN,
                      message: "日本語（ひらがな・カタカナ・漢字）で入力してください"
                    }
                  })}
                />
              </div>
            </div>
            
            {/* 氏名（フリガナ） */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <InputField
                  label="姓（フリガナ）"
                  placeholder="ヤマダ"
                  isRequired
                  maxLength={30}
                  showCounter
                  counterPosition="right"
                  width="full"
                  state={errors.lastNameKana ? "error" : "default"}
                  errorMessage={errors.lastNameKana?.message}
                  {...register("lastNameKana", { 
                    required: "姓（フリガナ）は必須です",
                    maxLength: {
                      value: 30,
                      message: "30文字以内で入力してください"
                    },
                    pattern: {
                      value: KATAKANA_ONLY_PATTERN,
                      message: "カタカナで入力してください"
                    }
                  })}
                />
              </div>
              <div>
                <InputField
                  label="名（フリガナ）"
                  placeholder="タロウ"
                  isRequired
                  maxLength={30}
                  showCounter
                  counterPosition="right"
                  width="full"
                  state={errors.firstNameKana ? "error" : "default"}
                  errorMessage={errors.firstNameKana?.message}
                  {...register("firstNameKana", { 
                    required: "名（フリガナ）は必須です",
                    maxLength: {
                      value: 30,
                      message: "30文字以内で入力してください"
                    },
                    pattern: {
                      value: KATAKANA_ONLY_PATTERN,
                      message: "カタカナで入力してください"
                    }
                  })}
                />
              </div>
            </div>
            
            {/* 携帯電話番号 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <InputField
                  label="携帯電話番号"
                  placeholder="090-1234-5678"
                  isRequired
                  width="full"
                  state={errors.mobilePhone ? "error" : "default"}
                  errorMessage={errors.mobilePhone?.message}
                  patternHint="例: 090-1234-5678（090, 080, 070, 060, 050で始まる番号のみ、ハイフン必須）"
                  {...register("mobilePhone", { 
                    required: "携帯電話番号は必須です",
                    pattern: {
                      value: MOBILE_PHONE_PATTERN,
                      message: "正しい携帯電話番号の形式で入力してください"
                    }
                  })}
                />
              </div>
            
              {/* 郵便番号 */}
              <div>
                <InputField
                  label="郵便番号"
                  placeholder="123-4567"
                  isRequired
                  width="full"
                  state={errors.postalCode ? "error" : "default"}
                  errorMessage={errors.postalCode?.message}
                  patternHint="例: 123-4567（ハイフン必須）"
                  {...register("postalCode", { 
                    required: "郵便番号は必須です",
                    pattern: {
                      value: POSTAL_CODE_PATTERN,
                      message: "正しい郵便番号形式（123-4567）で入力してください"
                    }
                  })}
                />
              </div>
            </div>
            
            {/* 都道府県 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Dropdown
                  label="都道府県"
                  placeholder="選択してください"
                  isRequired
                  options={prefectureOptions}
                  width="full"
                  state={errors.prefecture ? "error" : "default"}
                  errorMessage={errors.prefecture?.message}
                  {...register("prefecture", { 
                    required: "都道府県は必須です"
                  })}
                />
              </div>
            
              {/* メールアドレス */}
              <div>
                <InputField
                  label="メールアドレス"
                  placeholder="example@example.com"
                  isRequired
                  width="full"
                  state={errors.email ? "error" : "default"}
                  errorMessage={errors.email?.message}
                  patternHint="例: example@example.com"
                  {...register("email", { 
                    required: "メールアドレスは必須です",
                    pattern: {
                      value: EMAIL_PATTERN,
                      message: "正しいメールアドレス形式で入力してください"
                    }
                  })}
                />
              </div>
            </div>
            
            {/* パスワード */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <InputField
                  label="パスワード"
                  placeholder="********"
                  isRequired
                  type={showPassword ? "text" : "password"}
                  width="full"
                  state={errors.password ? "error" : "default"}
                  errorMessage={errors.password?.message}
                  patternHint="8文字以上、大文字・小文字・数字・特殊文字をそれぞれ1つ以上含める必要があります"
                  rightIcon={
                    <div onClick={(e) => togglePasswordVisibility(e)}>
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </div>
                  }
                  {...register("password", { 
                    required: "パスワードは必須です",
                    minLength: {
                      value: 8,
                      message: "8文字以上で入力してください"
                    },
                    pattern: {
                      value: STRONG_PASSWORD_PATTERN,
                      message: "パスワードは大文字・小文字・数字・特殊文字をそれぞれ1つ以上含める必要があります"
                    }
                  })}
                />
              </div>
              
              {/* パスワード確認 */}
              <div>
                <InputField
                  label="パスワード確認"
                  placeholder="********"
                  isRequired
                  type={showPasswordConfirm ? "text" : "password"}
                  width="full"
                  state={errors.passwordConfirm ? "error" : "default"}
                  errorMessage={errors.passwordConfirm?.message}
                  rightIcon={
                    <div onClick={(e) => togglePasswordConfirmVisibility(e)}>
                      {showPasswordConfirm ? <EyeOffIcon /> : <EyeIcon />}
                    </div>
                  }
                  {...register("passwordConfirm", { 
                    required: "パスワード確認は必須です",
                    validate: value => 
                      value === getValues("password") || "パスワードが一致しません"
                  })}
                />
              </div>
            </div>
            
            {/* 備考（テキストエリア） */}
            <div>
              <TextArea
                label="備考"
                placeholder="その他の情報がありましたらご記入ください"
                rows={4}
                maxLength={300}
                showCounter
                counterPosition="bottom"
                width="full"
                state={errors.notes ? "error" : "default"}
                errorMessage={errors.notes?.message}
                {...register("notes", { 
                  maxLength: {
                    value: 300,
                    message: "300文字以内で入力してください"
                  }
                })}
              />
            </div>
            
            {/* 送信ボタン */}
            <div className="flex flex-wrap gap-4 justify-end">
              <SecondaryButton onClick={handleReset} type="button">
                リセット
              </SecondaryButton>
              <MainButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? '送信中...' : '登録する'}
              </MainButton>
            </div>
          </form>
        </Card>
        
        {/* 確認ポップアップ */}
        {showConfirmPopup && confirmData && (
          <Popup
            title="登録内容の確認"
            message="以下の内容で登録します。よろしいですか？"
            variant="info"
            confirmText="登録する"
            cancelText="キャンセル"
            onConfirm={onSubmit}
            onCancel={handleCancelConfirm}
          >
            <div className="mt-4 border-t pt-4 space-y-2 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">氏名：</div>
                <div>{confirmData.lastName} {confirmData.firstName}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">フリガナ：</div>
                <div>{confirmData.lastNameKana} {confirmData.firstNameKana}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">電話番号：</div>
                <div>{confirmData.mobilePhone}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">住所：</div>
                <div>〒{confirmData.postalCode} {confirmData.prefecture}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">メールアドレス：</div>
                <div>{confirmData.email}</div>
              </div>
            </div>
          </Popup>
        )}
        
        {/* 送信結果表示 */}
        {isSubmitted && submittedData && (
          <Card title="送信結果" className="mb-8">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-gray-500">姓（漢字）</p>
                  <p>{submittedData.lastName}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-500">名（漢字）</p>
                  <p>{submittedData.firstName}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-gray-500">姓（フリガナ）</p>
                  <p>{submittedData.lastNameKana}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-500">名（フリガナ）</p>
                  <p>{submittedData.firstNameKana}</p>
                </div>
              </div>
              
              <div>
                <p className="font-medium text-gray-500">携帯電話番号</p>
                <p>{submittedData.mobilePhone}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-gray-500">郵便番号</p>
                  <p>{submittedData.postalCode}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-500">都道府県</p>
                  <p>{submittedData.prefecture}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-gray-500">パスワード</p>
                  <p>••••••••</p>
                </div>
                <div>
                  <p className="font-medium text-gray-500">メールアドレス</p>
                  <p>{submittedData.email}</p>
                </div>
              </div>
              
              <div>
                <p className="font-medium text-gray-500">備考</p>
                <p className="whitespace-pre-wrap">{submittedData.notes || '（なし）'}</p>
              </div>
            </div>
          </Card>
        )}
        
        {/* 入力値デバッグ表示（開発用） */}
        <Card title="フォーム入力値（デバッグ表示）" className="mb-8" collapsible>
          <pre className="bg-gray-100 p-4 rounded overflow-auto text-xs">
            {JSON.stringify(formValues, null, 2)}
          </pre>
        </Card>
      </div>
    </AppLayout>
  );
} 
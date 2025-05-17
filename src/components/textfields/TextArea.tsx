"use client";

import React, { useState, useRef, TextareaHTMLAttributes, useEffect } from 'react';
import { withAlpha } from '../constants/colors/Colors';
import { PRIMARY } from '../constants/colors/primary';
import { GRAY } from '../constants/colors/gray';
import { STATUS } from '../constants/colors/status';
import { BORDER } from '../constants/colors/border';
import { BACKGROUND } from '../constants/colors/background';
import { TEXT } from '../constants/colors/text';
import { INPUT } from '../constants/colors/input';
import { Label } from '../labels';
import Text from '../typography/Text';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** 入力フィールドの状態 */
  state?: 'default' | 'focus' | 'error' | 'disabled';
  /** エラーメッセージ（state='error'の場合に表示） */
  errorMessage?: string;
  /** ラベルテキスト */
  label?: string;
  /** 必須フィールドかどうか */
  isRequired?: boolean;
  /** 追加のCSSクラス */
  className?: string;
  /** 行数 */
  rows?: number;
  /** 最大文字数 */
  maxLength?: number;
  /** 残り文字数を表示するかどうか */
  showCounter?: boolean;
  /** 残り文字数の表示位置 */
  counterPosition?: 'right' | 'bottom';
  /** フィールドの幅 */
  width?: 'sm' | 'md' | 'lg' | 'full';
  /** 入力値の検証に使用する正規表現パターン */
  validationPattern?: RegExp;
  /** パターンに一致しない場合のエラーメッセージ */
  patternErrorMessage?: string;
  /** パターンの説明（ユーザーへのヒント） */
  patternHint?: string;
  /** 正規表現のバリデーションを適用するタイミング */
  validateOn?: 'change' | 'blur' | 'submit';
  /** バリデーション結果を通知するコールバック関数 */
  onValidation?: (isValid: boolean, value: string) => void;
}

/**
 * テキストエリアコンポーネント
 * 複数行の入力を受け付けるためのコンポーネント
 */
const TextArea: React.FC<TextAreaProps> = ({
  state = 'default',
  errorMessage,
  label,
  isRequired = false,
  className = '',
  disabled,
  placeholder = 'テキスト',
  rows = 5,
  maxLength,
  showCounter = false,
  counterPosition = 'bottom',
  width = 'full',
  value = '',
  onChange,
  validationPattern,
  patternErrorMessage = '入力形式が正しくありません',
  patternHint,
  validateOn = 'blur',
  onValidation,
  ...props
}) => {
  // 内部状態
  const [isFocused, setIsFocused] = useState(false);
  const [textValue, setTextValue] = useState<string>(value as string);
  const [isOverMaxLength, setIsOverMaxLength] = useState(false);
  const [isPatternValid, setIsPatternValid] = useState(true);
  const [isDirty, setIsDirty] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // 幅のクラス
  const widthClasses = {
    sm: 'w-32', // 128px
    md: 'w-64', // 256px
    lg: 'w-96', // 384px
    full: 'w-full'
  };
  
  // 外部valueの変更を内部状態に反映
  useEffect(() => {
    setTextValue(value as string);
  }, [value]);
  
  // 文字数チェック
  useEffect(() => {
    if (maxLength && textValue.length > maxLength) {
      setIsOverMaxLength(true);
    } else {
      setIsOverMaxLength(false);
    }
  }, [textValue, maxLength]);
  
  // パターンに基づく検証
  const validatePattern = (val: string): boolean => {
    if (!validationPattern || val.length === 0) return true;
    return validationPattern.test(val);
  };
  
  // 検証を実行して結果を設定
  const runValidation = (val: string) => {
    // 最大文字数チェック
    const isLengthValid = !maxLength || val.length <= maxLength;
    
    // パターンチェック
    const isRegexValid = validatePattern(val);
    
    // パターン検証結果を更新
    setIsPatternValid(isRegexValid);
    
    // エラーメッセージを設定
    if (!isLengthValid) {
      setValidationError(`最大文字数（${maxLength}文字）を超えています`);
    } else if (!isRegexValid) {
      setValidationError(patternErrorMessage);
    } else {
      setValidationError(null);
    }
    
    // 検証結果をコールバックで通知
    if (onValidation) {
      onValidation(isLengthValid && isRegexValid, val);
    }
    
    return isLengthValid && isRegexValid;
  };
  
  // 必要なタイミングで検証を実行
  useEffect(() => {
    if (isDirty && validateOn === 'change') {
      runValidation(textValue);
    }
  }, [textValue, isDirty, validationPattern, maxLength, validateOn, runValidation]);
  
  // propsからdisabledが渡された場合はstate='disabled'に設定
  // 検証エラーの場合はエラー状態に
  const hasError = isOverMaxLength || (!isPatternValid && isDirty);
  const currentState = disabled ? 'disabled' : (hasError ? 'error' : state);
  
  // 状態に応じたスタイルの設定
  let borderColor, backgroundColor, textColor;
  
  switch (currentState) {
    case 'focus':
      borderColor = PRIMARY.MAIN;
      backgroundColor = BACKGROUND.PRIMARY;
      textColor = TEXT.PRIMARY;
      break;
    case 'error':
      borderColor = STATUS.ERROR_MAIN;
      backgroundColor = withAlpha(STATUS.ERROR_CONTAINER, 0.5);
      textColor = TEXT.PRIMARY;
      break;
    case 'disabled':
      borderColor = BORDER.PRIMARY;
      backgroundColor = INPUT.CONTAINER_DISABLED;
      textColor = INPUT.ON_CONTAINER_DISABLED;
      break;
    default:
      borderColor = BORDER.PRIMARY;
      backgroundColor = BACKGROUND.PRIMARY;
      textColor = INPUT.ON_CONTAINER_TEXT;
  }
  
  // フォーカス状態の場合、borderColorを更新
  if (isFocused && currentState !== 'disabled' && currentState !== 'error') {
    borderColor = PRIMARY.MAIN;
  }
  
  // テキストエリアスタイル
  const textareaStyle = {
    borderColor,
    backgroundColor,
    color: textColor,
    borderWidth: isFocused || currentState === 'error' ? '2px' : '1px',
    transition: 'all 0.2s ease-in-out',
  };
  
  // フォーカスハンドラ
  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true);
    if (props.onFocus) {
      props.onFocus(e);
    }
  };
  
  // ブラーハンドラ
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    if (props.onBlur) {
      props.onBlur(e);
    }
    
    // blur時の検証
    if (validateOn === 'blur') {
      runValidation(e.target.value);
    }
  };
  
  // 入力ハンドラ
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setTextValue(newValue);
    setIsDirty(true);
    
    // カスタムonChangeハンドラが提供されていれば呼び出す
    if (onChange) {
      onChange(e);
    }
  };
  
  // クリックハンドラ - テキストエリアのコンテナをクリックしたときに、textareaにフォーカスを移す
  const handleContainerClick = () => {
    if (currentState !== 'disabled') {
      textareaRef.current?.focus();
    }
  };
  
  // 残り文字数や文字数超過の計算
  const currentLength = textValue?.length || 0;
  const remainingChars = maxLength ? maxLength - currentLength : null;
  const isNearLimit = maxLength && remainingChars !== null && remainingChars <= Math.max(maxLength * 0.1, 5);
  
  // カウンター色の決定
  let counterColor = GRAY.LOW;
  if (isOverMaxLength) {
    counterColor = STATUS.ERROR_MAIN;
  } else if (isNearLimit) {
    counterColor = STATUS.WARNING_MAIN;
  }
  
  // 表示すべきエラーメッセージを決定
  const displayErrorMessage = validationError || errorMessage;
  
  return (
    <div className={`flex flex-col ${widthClasses[width]} ${className}`}>
      <div className="flex items-center justify-between mb-1">
        {label && (
          <div className="flex items-center">
            <Text 
              size="sm" 
              weight="medium" 
              className="text-blueGray-700"
            >
              {label}
            </Text>
            {isRequired && (
              <Label 
                variant="warning" 
                size="small"
                className="ml-1"
              >
                必須
              </Label>
            )}
          </div>
        )}
        
        {showCounter && maxLength && counterPosition === 'right' && (
          <div 
            className="text-xs ml-auto transition-colors duration-200"
            style={{ color: counterColor }}
          >
            {currentLength}/{maxLength}
          </div>
        )}
      </div>
      
      <div 
        className="relative rounded-md"
        onClick={handleContainerClick}
        style={{ cursor: currentState === 'disabled' ? 'not-allowed' : 'text' }}
      >
        <textarea
          ref={textareaRef}
          className="w-full p-3 rounded-md outline-none resize-none"
          style={textareaStyle}
          disabled={currentState === 'disabled'}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleTextChange}
          value={textValue}
          rows={rows}
          {...props}
        />
      </div>
      
      {/* パターンヒント */}
      {patternHint && (
        <div className="mt-1 text-xs text-gray-500">
          {patternHint}
        </div>
      )}
      
      {showCounter && maxLength && counterPosition === 'bottom' && (
        <div 
          className="text-xs mt-1 text-right transition-colors duration-200"
          style={{ color: counterColor }}
        >
          {currentLength}/{maxLength}
        </div>
      )}
      
      {/* エラーメッセージ表示 */}
      {currentState === 'error' && displayErrorMessage && (
        <p className="mt-1 text-sm" style={{ color: STATUS.ERROR_MAIN }}>
          {displayErrorMessage}
        </p>
      )}
    </div>
  );
};

export default TextArea; 
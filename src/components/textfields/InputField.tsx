"use client";

import React, { useState, useRef, InputHTMLAttributes, ReactNode, useEffect } from 'react';
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

export interface InputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** 入力フィールドの状態 */
  state?: 'default' | 'focus' | 'error' | 'disabled';
  /** 入力フィールドの左側に表示されるアイコン */
  leftIcon?: ReactNode;
  /** 入力フィールドの右側に表示されるアイコン */
  rightIcon?: ReactNode;
  /** エラーメッセージ（state='error'の場合に表示） */
  errorMessage?: string;
  /** 入力フィールドのラベル */
  label?: string;
  /** 必須フィールドかどうか */
  isRequired?: boolean;
  /** 追加のCSSクラス */
  className?: string;
  /** 最大文字数 */
  maxLength?: number;
  /** 残り文字数を表示するかどうか */
  showCounter?: boolean;
  /** 残り文字数の表示位置 */
  counterPosition?: 'right' | 'bottom';
  /** フィールドの幅 */
  width?: 'sm' | 'md' | 'lg' | 'full';
  /** 入力値の検証に使用する正規表現パターン（string型のpattern属性と区別するためvalidationPatternとして定義） */
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
 * 入力フィールドコンポーネント
 * ユーザーからの入力を受け付けるためのコンポーネント
 */
const InputField: React.FC<InputFieldProps> = ({
  state = 'default',
  leftIcon,
  rightIcon,
  errorMessage,
  label,
  isRequired = false,
  className = '',
  disabled,
  placeholder = 'テキスト',
  maxLength,
  showCounter = false,
  counterPosition = 'right',
  width = 'full',
  value = '',
  onChange,
  pattern, // HTML標準のpattern属性
  validationPattern, // 独自の正規表現検証
  patternErrorMessage = '入力形式が正しくありません',
  patternHint,
  validateOn = 'blur',
  onValidation,
  ...props
}) => {
  // 内部状態
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState<string>(value as string);
  const [isOverMaxLength, setIsOverMaxLength] = useState(false);
  const [isPatternValid, setIsPatternValid] = useState(true);
  const [isDirty, setIsDirty] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // 幅のクラス
  const widthClasses = {
    sm: 'w-32', // 128px
    md: 'w-64', // 256px
    lg: 'w-96', // 384px
    full: 'w-full'
  };
  
  // 外部valueの変更を内部状態に反映
  useEffect(() => {
    setInputValue(value as string);
  }, [value]);
  
  // 文字数チェック
  useEffect(() => {
    if (maxLength && inputValue.length > maxLength) {
      setIsOverMaxLength(true);
    } else {
      setIsOverMaxLength(false);
    }
  }, [inputValue, maxLength]);
  
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
      runValidation(inputValue);
    }
  }, [inputValue, isDirty, validationPattern, maxLength, validateOn]);
  
  // propsからdisabledが渡された場合はstate='disabled'に設定
  // 検証エラーの場合はエラー状態に
  const hasError = isOverMaxLength || (!isPatternValid && isDirty);
  const currentState = disabled ? 'disabled' : (hasError ? 'error' : state);
  
  // 状態に応じたスタイルの設定
  let borderColor, backgroundColor, textColor, iconColor;
  
  switch (currentState) {
    case 'focus':
      borderColor = PRIMARY.MAIN;
      backgroundColor = BACKGROUND.PRIMARY;
      textColor = TEXT.PRIMARY;
      iconColor = GRAY.LOW;
      break;
    case 'error':
      borderColor = STATUS.ERROR_MAIN;
      backgroundColor = withAlpha(STATUS.ERROR_CONTAINER, 0.5);
      textColor = TEXT.PRIMARY;
      iconColor = STATUS.ERROR_MAIN;
      break;
    case 'disabled':
      borderColor = BORDER.PRIMARY;
      backgroundColor = INPUT.CONTAINER_DISABLED;
      textColor = INPUT.ON_CONTAINER_DISABLED;
      iconColor = INPUT.ON_CONTAINER_DISABLED;
      break;
    default:
      borderColor = BORDER.PRIMARY;
      backgroundColor = BACKGROUND.PRIMARY;
      textColor = INPUT.ON_CONTAINER_TEXT;
      iconColor = INPUT.ON_CONTAINER_ICON;
  }
  
  // フォーカス状態の場合、borderColorを更新
  if (isFocused && currentState !== 'disabled' && currentState !== 'error') {
    borderColor = PRIMARY.MAIN;
  }
  
  // インプットフィールドスタイル
  const inputContainerStyle = {
    borderColor,
    backgroundColor,
    color: textColor,
    borderWidth: isFocused || currentState === 'error' ? '2px' : '1px',
    transition: 'all 0.2s ease-in-out',
  };
  
  // フォーカスハンドラ
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    props.onFocus && props.onFocus(e);
  };
  
  // ブラーハンドラ
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    props.onBlur && props.onBlur(e);
    
    // blur時の検証
    if (validateOn === 'blur') {
      runValidation(e.target.value);
    }
  };
  
  // 入力ハンドラ
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsDirty(true);
    
    // カスタムonChangeハンドラが提供されていれば呼び出す
    if (onChange) {
      onChange(e);
    }
  };
  
  // クリックハンドラ - 入力フィールドのコンテナをクリックしたときに、inputにフォーカスを移す
  const handleContainerClick = () => {
    inputRef.current?.focus();
  };
  
  // 残り文字数や文字数超過の計算
  const currentLength = inputValue?.length || 0;
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
        className="relative flex items-center rounded-md overflow-hidden"
        onClick={currentState !== 'disabled' ? handleContainerClick : undefined}
        style={{ cursor: currentState === 'disabled' ? 'not-allowed' : 'pointer' }}
      >
        <div 
          className="flex items-center w-full px-3 py-2 rounded-md"
          style={inputContainerStyle}
        >
          {leftIcon && (
            <div className="flex-shrink-0 mr-2" style={{ color: iconColor }}>
              {React.isValidElement(leftIcon) ? 
                React.cloneElement(leftIcon as React.ReactElement<any>, { 
                  color: iconColor,
                  key: 'left-icon' 
                }) : 
                leftIcon
              }
            </div>
          )}
          
          <input
            ref={inputRef}
            className="flex-grow bg-transparent outline-none w-full"
            style={{ color: textColor }}
            disabled={currentState === 'disabled'}
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleInputChange}
            value={inputValue}
            pattern={pattern}
            {...props}
          />
          
          {rightIcon && (
            <div className="flex-shrink-0 ml-2" style={{ color: iconColor }}>
              {React.isValidElement(rightIcon) ? 
                React.cloneElement(rightIcon as React.ReactElement<any>, { 
                  color: iconColor,
                  key: 'right-icon'
                }) : 
                rightIcon
              }
            </div>
          )}
        </div>
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

export default InputField; 
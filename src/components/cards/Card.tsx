"use client";

import React, { useState, ReactNode } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '../icons';
import { BACKGROUND } from '../constants/colors/background';
import { BORDER } from '../constants/colors/border';
import { TEXT } from '../constants/colors/text';
import { GRAY } from '../constants/colors/gray';

export interface CardProps {
  /** カードのタイトル（省略可能） */
  title?: string;
  /** カードの子要素 */
  children: ReactNode;
  /** 展開可能かどうか */
  collapsible?: boolean;
  /** 初期状態で展開するかどうか */
  defaultExpanded?: boolean;
  /** 追加のCSSクラス */
  className?: string;
}

/**
 * カードコンポーネント
 * 情報をグループ化して表示するための汎用的なコンテナ
 */
const Card: React.FC<CardProps> = ({
  title,
  children,
  collapsible = false,
  defaultExpanded = true,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  // 展開/折りたたみの切り替え
  const toggleExpand = () => {
    if (collapsible) {
      setIsExpanded(!isExpanded);
    }
  };

  // カードのスタイル
  const cardStyle = {
    backgroundColor: BACKGROUND.PRIMARY,
    borderColor: BORDER.PRIMARY
  };

  // タイトルのスタイル
  const titleStyle = {
    borderBottomColor: BORDER.PRIMARY,
  };

  // テキストスタイル
  const textStyle = {
    color: TEXT.PRIMARY
  };

  // アイコンスタイル
  const iconStyle = {
    color: GRAY.LOW
  };

  return (
    <div 
      className={`border rounded-lg shadow-sm overflow-hidden ${className}`}
      style={cardStyle}
    >
      {title && (
        <div 
          className={`flex justify-between items-center px-4 py-3 border-b ${collapsible ? 'cursor-pointer' : ''}`}
          onClick={toggleExpand}
          style={titleStyle}
        >
          <h3 className="text-lg font-medium" style={textStyle}>{title}</h3>
          {collapsible && (
            <div style={iconStyle}>
              {isExpanded ? (
                <ChevronUpIcon color={GRAY.LOW} />
              ) : (
                <ChevronDownIcon color={GRAY.LOW} />
              )}
            </div>
          )}
        </div>
      )}
      
      {(!title && collapsible) && (
        <div 
          className="flex justify-end items-center px-4 py-2 border-b cursor-pointer"
          onClick={toggleExpand}
          style={titleStyle}
        >
          <div style={iconStyle}>
            {isExpanded ? (
              <ChevronUpIcon color={GRAY.LOW} />
            ) : (
              <ChevronDownIcon color={GRAY.LOW} />
            )}
          </div>
        </div>
      )}
      
      {(!collapsible || isExpanded) && (
        <div className="p-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default Card; 
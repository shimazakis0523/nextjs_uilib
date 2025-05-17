import React from 'react';
import { IconProps } from './UserIcon';
import { PRIMARY } from '../constants/colors/primary';

/**
 * 情報アイコン（青い丸に感嘆符）
 */
export const InfoIcon: React.FC<IconProps> = ({
  size = 24,
  color = PRIMARY.MAIN, // プライマリーカラーを使用
  className = '',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={`info-icon ${className}`}
    >
      <circle cx="12" cy="12" r="10" fill={color} />
      <path
        d="M12 8v2M12 14v4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InfoIcon; 
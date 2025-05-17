import React from 'react';
import { IconProps } from './UserIcon';
import { STATUS } from '../constants/colors/status';

/**
 * 警告アイコン（赤い三角形に感嘆符）
 */
export const WarningIcon: React.FC<IconProps> = ({
  size = 24,
  color = STATUS.ERROR_MAIN, // ERRORカラーを使用
  className = '',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`warning-icon ${className}`}
    >
      <path
        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
        fill={color}
      />
      <path
        d="M12 9v4M12 17h.01"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WarningIcon; 
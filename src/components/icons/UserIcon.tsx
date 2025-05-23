import React from 'react';

export interface IconProps {
  /** アイコンのサイズ */
  size?: number | string;
  /** アイコンの色 */
  color?: string;
  /** カスタムクラス名 */
  className?: string;
}

/**
 * ユーザーアイコン
 */
export const UserIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className = '',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-user ${className}`}
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
};

export default UserIcon; 
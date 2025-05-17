"use client";

import React from 'react';
import { BlueGray } from '../constants/colors/Colors';

interface ChevronUpIconProps {
  color?: string;
  size?: number;
}

const ChevronUpIcon: React.FC<ChevronUpIconProps> = ({ 
  color = BlueGray[600], 
  size = 20 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" 
        fill={color}
      />
    </svg>
  );
};

export default ChevronUpIcon; 
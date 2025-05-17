"use client";

import React from 'react';
import { BlueGray } from '../constants/colors/Colors';

interface CalendarIconProps {
  color?: string;
  size?: number;
}

const CalendarIcon: React.FC<CalendarIconProps> = ({ 
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
        d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM7 12h5v5H7v-5z" 
        fill={color}
      />
    </svg>
  );
};

export default CalendarIcon; 
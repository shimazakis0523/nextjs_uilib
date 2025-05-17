"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/button');
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>リダイレクト中...</p>
    </div>
  );
}


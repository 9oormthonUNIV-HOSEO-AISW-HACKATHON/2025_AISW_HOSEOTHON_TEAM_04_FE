import React from 'react';
import './globals.css';

export const metadata = {
  title: '가족 이야기',
  description: '세대 간 소통을 돕는 따뜻한 가족 플랫폼',
};

// TypeScript 타입 정의: children은 "React가 렌더링할 수 있는 모든 것(Node)"입니다.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard 폰트 CDN */}
        <link 
          rel="stylesheet" 
          as="style" 
          crossOrigin="anonymous" 
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" 
        />
      </head>
      <body style={{ fontFamily: 'Pretendard, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
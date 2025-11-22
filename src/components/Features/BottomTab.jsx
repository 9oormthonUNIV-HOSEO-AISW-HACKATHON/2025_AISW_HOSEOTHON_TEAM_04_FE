'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Home, BookHeart, User } from 'lucide-react'; // 아이콘 변경
import styles from './BottomTab.module.css';

export default function BottomTab() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    // 1. 메인 화면 (오늘의 질문)
    { name: '홈', path: '/main', icon: Home },
    
    // 2. 질문 목록 화면 (이전 질문들) -> 요청하신대로 '질문'으로 변경
    { name: '질문', path: '/list', icon: BookHeart },
    
    // 3. 프로필 화면
    { name: '프로필', path: '/profile', icon: User },
  ];

  return (
    <div className={styles.wrapper}>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = pathname === tab.path;

        return (
          <button
            key={tab.path}
            className={`${styles.tabItem} ${isActive ? styles.active : ''}`}
            onClick={() => router.push(tab.path)}
          >
            <Icon size={24} />
            <span>{tab.name}</span>
          </button>
        );
      })}
    </div>
  );
}
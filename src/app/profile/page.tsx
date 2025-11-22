'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import BottomTab from '../../components/Features/BottomTab';
import styles from './profile.module.css';

export default function ProfilePage() {
  const router = useRouter();

  // 데이터: 이모지 없음
  const familyMembers = [
    { id: 1, name: '김철수', role: '아빠' },
    { id: 2, name: '이영희', role: '엄마' },
    { id: 3, name: '김민수', role: '나' }, 
    { id: 4, name: '김지민', role: '동생' },
  ];

  const handleLogout = () => {
    const check = confirm("정말 로그아웃 하시겠습니까?");
    if (check) {
      router.push('/'); 
    }
  };

  return (
    <div className="container" style={{ justifyContent: 'flex-start', paddingTop: '3rem' }}>
      
      {/* 1. 내 프로필 상단 (프사 확실히 없음!) */}
      <div className={styles.profileHeader}>
        <h2 className={styles.name}>김민수</h2>
        <span className={styles.familyBadge}>🏡 행복한 우리집</span>
        {/* 로그아웃 */}
      <button className={styles.logoutBtn} onClick={handleLogout}>
        로그아웃
      </button>
      </div>

      {/* 2. 가족 구성원 리스트 */}
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>가족 구성원</h3>
      </div>
      
      <div className={styles.familyList}>
        {familyMembers.map((member) => (
          <div key={member.id} className={styles.familyItem}>
            {/* 이름 */}
            <span className={styles.memberName}>{member.name}</span>
            
            {/* 역할 배지 */}
            <span className={styles.roleBadge}>{member.role}</span>
          </div>
        ))}
      </div>
      <BottomTab />
    </div>
  );
}
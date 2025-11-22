'use client';

import React, { useState } from 'react';
import { UserPlus, KeyRound, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import styles from './connect.module.css';

export default function FamilyConnectPage() {
  const router = useRouter();
  const [isCodeInputVisible, setIsCodeInputVisible] = useState(false);
  const [inviteCode, setInviteCode] = useState('');

  const handleCreateFamily = () => { router.push('/create-family'); };
  const handleToggleInput = () => { setIsCodeInputVisible(!isCodeInputVisible); };
  const handleSubmitCode = () => { 
    if (!inviteCode) return; // 빈 칸이면 실행 안 함

  // 나중에 여기에 실제 서버로 코드 보내는 로직이 들어갑니다.
  // ... API 요청 ...

  alert(`환영합니다! 가족에 참여했습니다.`);
  
  // 👇 [추가] 메인 화면으로 이동!
  router.push('/main');
  };

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          가족과 연결하기
        </h1>
        <p style={{ color: 'var(--color-gray)', lineHeight: '1.5' }}>
          새로운 가족을 만들거나<br />기존 가족에 참여하세요
        </p>
      </div>

      <div className={styles.wrapper}>
        {/* 1. 새 가족 만들기 */}
        <button className={styles.card} onClick={handleCreateFamily}>
          <div className={`${styles.iconCircle} ${styles.orange}`}>
            <UserPlus size={28} color="white" />
          </div>
          <div className={styles.textGroup}>
            <h3>새 가족 만들기</h3>
            <p>우리 가족을 시작해요</p>
          </div>
        </button>

        {/* 2. 가족 코드 입력 (드롭다운) */}
        <div>
          <button 
            className={`${styles.card} ${isCodeInputVisible ? styles.cardActive : ''}`} 
            onClick={handleToggleInput}
          >
            <div className={`${styles.iconCircle} ${styles.green}`}>
              <KeyRound size={28} color="white" />
            </div>
            <div className={styles.textGroup}>
              <h3>가족 코드 입력</h3>
              <p>초대받은 코드로 참여하기</p>
            </div>
          </button>

          {isCodeInputVisible && (
            <div className={styles.dropdownArea}>
              <input 
                type="text" 
                placeholder="초대 코드 입력" 
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                className={styles.input}
              />
              <button className={styles.submitBtn} onClick={handleSubmitCode}>
                <ArrowRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
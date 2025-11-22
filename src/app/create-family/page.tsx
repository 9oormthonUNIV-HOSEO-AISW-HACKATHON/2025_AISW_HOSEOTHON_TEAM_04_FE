'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Users, ArrowLeft } from 'lucide-react';
import styles from './create.module.css';

export default function CreateFamilyPage() {
  const router = useRouter();
  const [familyName, setFamilyName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = () => {
    if (!familyName) return; // 이름 안 썼으면 실행 안 함

  // 나중에 여기에 가족 생성 API 로직이 들어갑니다.
  // ... API 요청 ...

  alert(`'${familyName}' 공간이 생성되었습니다!`);
  
  // 👇 [추가] 메인 화면으로 이동!
  router.push('/main');
  };

  return (
    <div className="container">
      <button onClick={() => router.back()} className={styles.backBtn}>
        <ArrowLeft size={24} />
      </button>

      <div className={styles.logoWrapper}>
        <div className={styles.logoCircle}>
          <Users size={40} color="white" />
        </div>
        <h1>새 가족 만들기</h1>
        <p>우리 가족만의 공간을 만들어보세요</p>
      </div>

      <div className={styles.formWrapper}>
        <div>
          <label>가족 이름</label>
          <input
            type="text"
            placeholder="예: 행복한 우리집"
            value={familyName}
            onChange={(e) => setFamilyName(e.target.value)}
            className={styles.input}
          />
        </div>
        <div>
          <label>가족 소개 (선택)</label>
          <input
            type="text"
            placeholder="가족들에게 보일 한마디"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.input}
          />
        </div>

        <button className={styles.createBtn} onClick={handleCreate}>
          가족 공간 생성하기
        </button>
      </div>
    </div>
  );
}
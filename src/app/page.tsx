'use client';

import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css'; // 스타일 불러오기

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 성공 가정 -> 가족 연결 페이지로 이동
    router.push('/connect'); 
  };

  return (
    <div className="container">
      <div className={styles.logoWrapper}>
        <div className={styles.logoCircle}>
          <Heart size={48} color="white" />
        </div>
        <h1>가족 이야기</h1>
        <p>따뜻한 소통의 시작</p>
      </div>

      <div className={styles.formWrapper}>
        <div>
          <label>이메일</label>
          <input
            type="email"
            placeholder="이메일 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>

        <button className={styles.loginBtn} onClick={handleLogin}>
          로그인
        </button>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button className={styles.signupBtn} onClick={() => router.push('/signup')}>
            계정이 없으신가요? 회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
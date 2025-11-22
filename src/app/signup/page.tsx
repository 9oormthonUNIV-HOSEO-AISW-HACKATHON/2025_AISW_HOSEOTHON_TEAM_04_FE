'use client';

import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import styles from './signup.module.css'; // 👈 전용 스타일 연결

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // 회원가입 로직 (API 연동 예정)
    alert(`환영합니다, ${name}님! 로그인 페이지로 이동합니다.`);
    router.push('/'); // 가입 성공 시 로그인 화면(메인)으로 이동
  };

  return (
    <div className="container">
      {/* 로고 영역 */}
      <div className={styles.logoWrapper}>
        <div className={styles.logoCircle}>
          <UserPlus size={40} color="white" />
        </div>
        <h1>회원가입</h1>
        <p>가족의 일원이 되어보세요</p>
      </div>

      {/* 입력 폼 */}
      <div className={styles.formWrapper}>
        <div>
          <label>이름</label>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
        </div>
        <div>
          <label>성별</label>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
        </div>
        <div>
          <label>생년월일</label>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>

        <button className={styles.signupBtn} onClick={handleSignup}>
          가입하기
        </button>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button className={styles.loginLinkBtn} onClick={() => router.push('/')}>
            이미 계정이 있으신가요? 로그인
          </button>
        </div>
      </div>
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import './globals.css'; // CSS import

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`로그인 시도: ${email}`);
  };

  return (
    <div className="container">
      {/* 1. 로고 영역 */}
      <div className="logo-wrapper">
        <div className="logo-circle">
          <Heart size={48} color="white" />
        </div>
        <h1>가족 이야기</h1>
        <p>따뜻한 소통의 시작</p>
      </div>

      {/* 2. 입력 폼 */}
      <div className="form-wrapper">
        <div>
          <label>이메일</label>
          <input
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" onClick={handleLogin}>
          로그인
        </button>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button className="signup-btn">계정이 없으신가요? 회원가입</button>
        </div>
      </div>
    </div>
  );
}

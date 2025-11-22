'use client';

import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation'; // 라우터 추가
// globals.css는 layout.tsx에서 이미 불러오므로 여기서는 생략해도 되지만, 
// 명시적으로 두셔도 상관없습니다.

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 성공 시라고 가정하고 페이지 이동
    router.push('/connect'); 
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
          {/* 회원가입 페이지로 이동 */}
          <button className="signup-btn" onClick={() => router.push('/signup')}>
            계정이 없으신가요? 회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
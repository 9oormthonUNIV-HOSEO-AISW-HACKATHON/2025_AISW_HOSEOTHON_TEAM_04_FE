'use client';

import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { useRouter } from 'next/navigation'; // 페이지 이동 훅

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignup = () => {
    // 실제 회원가입 로직은 나중에 API 연결
    alert(`회원가입 완료! ${name}님 환영합니다.`);
    router.push('/'); // 로그인(메인) 페이지로 이동
  };

  return (
    <div className="container">
      <div className="logo-wrapper">
        <div className="logo-circle" style={{ backgroundColor: '#74c0fc' }}>
          <UserPlus size={40} color="white" />
        </div>
        <h1>회원가입</h1>
        <p>가족의 일원이 되어보세요</p>
      </div>

      <div className="form-wrapper">
        <div>
          <label>이름</label>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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

        <button className="login-btn" style={{ backgroundColor: '#74c0fc' }} onClick={handleSignup}>
          가입하기
        </button>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button className="signup-btn" onClick={() => router.push('/')}>
            이미 계정이 있으신가요? 로그인
          </button>
        </div>
      </div>
    </div>
  );
}
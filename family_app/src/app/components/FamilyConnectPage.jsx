'use client';

import React from 'react';
import { UserPlus, KeyRound } from 'lucide-react';

export default function FamilyConnectPage() {
  
  const handleCreateFamily = () => {
    alert("새 가족 만들기 클릭!");
    // 로직 추가 예정
  };

  const handleJoinFamily = () => {
    alert("가족 코드 입력 클릭!");
    // 로직 추가 예정
  };

  return (
    <div className="container" style={{ maxWidth: '450px', backgroundColor: 'transparent', boxShadow: 'none' }}>
      {/* 타이틀 영역 */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2rem', color: '#333', marginBottom: '0.5rem' }}>
          가족과 연결하기
        </h1>
        <p style={{ color: '#888', lineHeight: '1.5' }}>
          새로운 가족을 만들거나<br />
          기존 가족에 참여하세요
        </p>
      </div>

      {/* 선택 카드 영역 */}
      <div className="choice-container">
        {/* 1. 새 가족 만들기 카드 */}
        <button className="choice-card" onClick={handleCreateFamily}>
          <div className="icon-circle orange">
            <UserPlus size={28} color="white" />
          </div>
          <div className="text-group">
            <h3>새 가족 만들기</h3>
            <p>우리 가족을 시작해요</p>
          </div>
        </button>

        {/* 2. 가족 코드 입력 카드 */}
        <button className="choice-card" onClick={handleJoinFamily}>
          <div className="icon-circle green">
            <KeyRound size={28} color="white" />
          </div>
          <div className="text-group">
            <h3>가족 코드 입력</h3>
            <p>초대받은 코드로 참여하기</p>
          </div>
        </button>
      </div>
    </div>
  );
}
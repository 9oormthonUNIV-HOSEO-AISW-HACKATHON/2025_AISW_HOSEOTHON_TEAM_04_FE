'use client';

import React from 'react';
import { UserPlus, KeyRound } from 'lucide-react';

export default function FamilyConnectPage() {
  
  const handleCreateFamily = () => {
    alert("새 가족 만들기");
  };

  const handleJoinFamily = () => {
    alert("가족 코드 입력");
  };

  return (
    // container 클래스 하나면 CSS가 알아서 중앙에 띄워줍니다.
    <div className="container">
      
      {/* 타이틀 영역: 가운데 정렬 */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>
          가족과 연결하기
        </h1>
        <p style={{ color: '#666', lineHeight: '1.5' }}>
          새로운 가족을 만들거나<br />
          기존 가족에 참여하세요
        </p>
      </div>

      {/* 선택 카드 영역 */}
      <div className="connect-container">
        
        {/* 1. 새 가족 만들기 */}
        <button className="choice-card" onClick={handleCreateFamily}>
          <div className="icon-circle orange">
            <UserPlus size={28} color="white" />
          </div>
          <div className="text-group">
            <h3>새 가족 만들기</h3>
            <p>우리 가족을 시작해요</p>
          </div>
        </button>

        {/* 2. 가족 코드 입력 */}
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
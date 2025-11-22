'use client';

import React from 'react';
import BottomTab from '../../components/Features/BottomTab';
import styles from './main.module.css'; // 👈 스타일 연결

export default function MainPage() {
  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const questionData = {
    question: "오늘 가장 기억에 남는 순간은 무엇인가요?",
    answeredCount: 2,
    totalCount: 4,
  };

  return (
    // globals.css의 'container' 클래스와 main.module.css의 'container'를 같이 씁니다.
    // 주의: module css는 styles.container로 써야 적용됩니다.
    // 여기서는 레이아웃을 위해 기존 div 구조 안에 내용을 넣겠습니다.
    
    <div className="container" style={{ justifyContent: 'flex-start', paddingBottom: '90px' }}>
      
      <div className={styles.questionCard}>
        {/* 날짜 */}
        <p className={styles.dateText}>{today}</p>

        {/* 타이틀 */}
        <h1 className={styles.pageTitle}>오늘의 질문</h1>

        {/* 질문 텍스트 */}
        <p className={styles.questionText}>
          {questionData.question}
        </p>

        {/* 답변 현황 (점 + 텍스트) */}
        <div className={styles.statusWrapper}>
          <div className={styles.dotsContainer}>
            {Array.from({ length: questionData.totalCount }).map((_, index) => (
              <div
                key={index}
                // answeredCount보다 작으면 'answered' 클래스 추가
                className={`${styles.statusDot} ${index < questionData.answeredCount ? styles.answered : ''}`}
              ></div>
            ))}
          </div>
          <p className={styles.statusText}>
            {questionData.answeredCount}/{questionData.totalCount}명 답변
          </p>
        </div>

        {/* 답변하기 버튼 */}
        <button className={styles.answerBtn}>
          답변하기
        </button>

        {/* 이전 질문들 보기 링크 */}
        <button className={styles.viewHistoryBtn}>
          이전 질문들 보기 →
        </button>
      </div>

      {/* 하단 탭 */}
      <BottomTab />
    </div>
  );
}
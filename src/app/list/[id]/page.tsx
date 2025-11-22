'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Sparkles } from 'lucide-react'; // Sparkles 아이콘 추가
import BottomTab from '../../../components/Features/BottomTab'; // 경로 주의 (폴더가 깊어졌으므로 ../가 하나 더 필요)
import styles from './detail.module.css';

export default function QuestionDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  // 실제로는 params.id를 이용해서 서버에서 해당 질문 데이터를 가져와야 합니다.
  // 지금은 임시 데이터(Dummy Data)를 사용합니다.
  const questionData = {
    id: params.id,
    date: '2025년 11월 21일',
    text: '가족과 함께 가고 싶은 여행지는?',
    answers: [
      { id: 1, writer: '아빠', content: '나는 따뜻한 하와이에 가서 푹 쉬고 싶구나.' },
      { id: 2, writer: '엄마', content: '스위스 융프라우! 풍경 보면서 기차 타고 싶어.' },
      { id: 3, writer: '동생', content: '유니버셜 스튜디오 있는 오사카 가고 싶어!!' },
    ]
  };

  const handleAIAnalysis = () => {
    alert("가족들의 답변을 AI가 분석 중입니다... (기능 준비 중)");
    // 나중에 분석 결과 모달을 띄우거나 분석 페이지로 이동
  };

  return (
    <div className="container" style={{ justifyContent: 'flex-start', paddingTop: '2rem' }}>
      
      {/* 1. 헤더 (뒤로가기) */}
      <div className={styles.header}>
        <button onClick={() => router.back()} className={styles.backBtn}>
          <ArrowLeft size={24} />
        </button>
        <span className={styles.headerTitle}>질문 상세</span>
      </div>

      {/* 2. 질문 내용 & AI 분석 버튼 */}
      <div className={styles.questionSection}>
        <span className={styles.date}>{questionData.date}</span>
        <h2 className={styles.questionText}>{questionData.text}</h2>
        
        {/* AI 분석 버튼 */}
        <button className={styles.aiAnalysisBtn} onClick={handleAIAnalysis}>
          <Sparkles size={20} />
          이 질문 AI로 분석하기
        </button>
      </div>

      {/* 3. 가족들의 답변 리스트 */}
      <div className={styles.answerSection}>
        <h3 className={styles.sectionLabel}>가족들의 답변 ({questionData.answers.length})</h3>
        
        {questionData.answers.map((ans) => (
          <div key={ans.id} className={styles.answerCard}>
            <span className={styles.writerName}>{ans.writer}</span>
            <p className={styles.answerContent}>{ans.content}</p>
          </div>
        ))}
      </div>

      {/* 하단 탭 (유지) */}
      <BottomTab />
    </div>
  );
}
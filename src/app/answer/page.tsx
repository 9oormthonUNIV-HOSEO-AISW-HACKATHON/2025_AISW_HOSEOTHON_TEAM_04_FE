'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import styles from './answer.module.css';

export default function AnswerPage() {
  const router = useRouter();
  const [answer, setAnswer] = useState('');

  // 오늘의 질문 데이터 (메인과 동일하게 맞춤)
  const todayQuestion = {
    date: '2025년 11월 22일',
    text: '오늘 가장 기억에 남는 순간은 무엇인가요?'
  };

  const handleSubmit = () => {
    if (!answer.trim()) {
      alert("답변 내용을 입력해주세요!");
      return;
    }

    // 여기에 나중에 API로 답변 전송하는 로직 추가
    // await postAnswer(answer);

    alert("소중한 답변이 등록되었습니다. 💌");
    router.push('/main'); // 메인으로 돌아가서 답변 현황 확인
  };

  return (
    <div className="container">
      {/* 1. 헤더 */}
      <div className={styles.header}>
        <button onClick={() => router.back()} className={styles.backBtn}>
          <ArrowLeft size={24} />
        </button>
        <span className={styles.headerTitle}>답변하기</span>
      </div>

      {/* 2. 질문 카드 */}
      <div className={styles.questionBox}>
        <span className={styles.date}>{todayQuestion.date}</span>
        <h2 className={styles.questionText}>{todayQuestion.text}</h2>
      </div>

      {/* 3. 입력 영역 */}
      <p className={styles.inputLabel}>나의 이야기</p>
      <textarea 
        className={styles.textArea}
        placeholder="가족들에게 들려줄 이야기를 적어보세요..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      {/* 4. 등록 버튼 */}
      <button className={styles.submitBtn} onClick={handleSubmit}>
        등록하기
      </button>
    </div>
  );
}
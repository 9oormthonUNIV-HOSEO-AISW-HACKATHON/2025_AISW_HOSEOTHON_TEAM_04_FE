'use client';

import React from 'react';
import BottomTab from '../../components/Features/BottomTab';
import styles from './list.module.css';
import { useRouter } from 'next/navigation'; // 1. useRouter 추가

export default function QuestionListPage() {
    const router = useRouter(); // 2. 라우터 사용
  // 임시 데이터 (나중에 DB에서 가져올 부분)
  const historyList = [
    { id: 1, date: '2025. 11. 21', q: '가족과 함께 가고 싶은 여행지는?', count: 4 },
    { id: 2, date: '2025. 11. 20', q: '요즘 가장 고민이 되는 일은 무엇인가요?', count: 3 },
    { id: 3, date: '2025. 11. 19', q: '어릴 적 가장 기억에 남는 음식은?', count: 4 },
    { id: 4, date: '2025. 11. 18', q: '서로에게 고마웠던 순간 하나씩 말하기', count: 2 },
  ];

  const handleCardClick = (id: number) => {
    // 3. 상세 페이지로 이동 (id를 주소 뒤에 붙임)
    router.push(`/list/${id}`);
  };

  return (
    <div className="container" style={{ justifyContent: 'flex-start', paddingTop: '3rem' }}>
      <div className={styles.header}>
        <h1>질문 보관함</h1>
        <p>우리가 나눈 이야기들이에요</p>
      </div>

      <div className={styles.listContainer}>
        {historyList.map((item) => (
          <div 
            key={item.id} 
            className={styles.card} 
            onClick={() => handleCardClick(item.id)} // 4. 클릭 이벤트 연결
          >
            <span className={styles.date}>{item.date}</span>
            <h3 className={styles.question}>{item.q}</h3>
            <p className={styles.answerCount}>💬 {item.count}명 답변 완료</p>
          </div>
        ))}
      </div>

      <BottomTab />
    </div>
  );
}
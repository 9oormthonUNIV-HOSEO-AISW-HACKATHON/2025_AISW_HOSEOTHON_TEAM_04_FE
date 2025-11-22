// src/types/family.ts

import { SignupRequest } from './auth'; // 이전에 정의한 타입 활용

/**
 * 1. API에서 받아올 가족 구성원 정보 (Profile/Main 화면에 필요)
 * (SignupRequest에서 정의한 'role' 등을 활용할 수 있습니다.)
 */
export interface FamilyMemberRaw {
  // 백엔드에서 쓰는 변수명 (예시: snake_case)
  member_id: number;
  member_name: string;
  member_role: string;
  is_current_user: boolean; // 본인 여부
  has_answered_today: boolean; // 오늘 답변했는지 여부
}

/**
 * 2. UI 컴포넌트로 전달될 깔끔한 가족 구성원 데이터 (변환된 형태)
 */
export interface FamilyMemberUI {
  id: number;
  name: string;
  role: string; // 아빠, 엄마, 나...
  isSelf: boolean;
  answeredToday: boolean;
}

// ------------------------------------------------------------------

/**
 * 3. 질문 데이터
 */
export interface QuestionRaw {
  question_id: number;
  question_text: string;
  created_at: string; // 날짜 정보 (YYYY-MM-DD 형식)
  total_members: number;
  answer_count: number;
}

export interface QuestionUI {
  id: number;
  text: string;
  date: string;
  totalMembers: number;
  answeredCount: number;
}

// ------------------------------------------------------------------

/**
 * 4. 답변 상세 데이터 (Detail 페이지)
 */
export interface AnswerRaw {
  answer_id: number;
  writer_name: string;
  content_text: string;
  written_time: string; // 작성 시간
}

export interface AnswerUI {
  id: number;
  writer: string;
  content: string;
  time: string;
}
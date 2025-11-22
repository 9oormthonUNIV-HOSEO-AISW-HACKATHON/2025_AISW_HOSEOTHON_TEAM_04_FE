// src/types/auth.ts

/**
 * 1. 로그인 요청 시 서버로 전송할 데이터 구조 (Request Body)
 */
export interface LoginRequest {
  id: string; // 이메일 또는 사용자 이름
  password: string;
}

// ------------------------------------------------------------------

/**
 * 2. 회원가입 요청 시 서버로 전송할 데이터 구조 (Request Body)
 */
export interface SignupRequest {
  name: string;
  gender: 'male' | 'female'; 
  birthDate: string; // YYYY-MM-DD
  role: string; // 아빠, 엄마, 아들 등
  email: string;
  password: string;
}

// ------------------------------------------------------------------

/**
 * 3. 로그인 성공 후 서버에서 받아올 '원본' 데이터 구조 (Response Raw)
 * (백엔드에서 사용하는 snake_case 변수명을 가정)
 */
export interface AuthResponseRaw {
  access_token: string; // 👈 Raw 데이터
  user_id: number;      // 👈 Raw 데이터
  user_name: string;
  user_role: string;
  // 토큰 만료 시간도 종종 포함됨
  expires_in: number; 
}

/**
 * 4. 프론트엔드 UI 컴포넌트에서 사용할 데이터 구조 (Response UI)
 * (Hooks 레이어에서 Raw 데이터를 이 형태로 변환하여 사용)
 */
export interface AuthResponseUI {
  accessToken: string; // 👈 camelCase로 변환
  userId: number;      // 👈 camelCase로 변환
  userName: string;
  userRole: string;
  tokenExpiration: number; 
}
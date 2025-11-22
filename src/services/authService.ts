// src/services/authService.ts

import { LoginRequest, AuthResponseRaw } from '../types/auth'; // 정의한 타입 불러오기

// 네트워크 지연을 모방하기 위한 헬퍼 함수
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * [MOCK API] 로그인 요청을 시뮬레이션합니다.
 * 실제 서버 통신 대신 500ms 후 가짜 데이터를 리턴합니다.
 *
 * @param credentials - 사용자 ID와 비밀번호
 * @returns AuthResponseRaw 형태의 Promise
 */
export async function login(credentials: LoginRequest): Promise<AuthResponseRaw> {
  // 500ms 지연 (네트워크 상황 모방)
  await delay(500);

  // ID와 PW가 일치하는지 확인하는 로직 (Mock)
  if (credentials.id !== 'test@family.com' || credentials.password !== '1234') {
    // 실제 API라면 여기서 HTTP 401 에러를 던져야 합니다.
    throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');
  }

  // 백엔드에서 보낼 Raw Data 형식 (snake_case)
  const mockResponse: AuthResponseRaw = {
    access_token: 'mock_jwt_token_12345',
    user_id: 1001,
    user_name: '김민수',
    user_role: '나', // 현재 사용자 역할
    expires_in: 3600, // 1시간
  };

  return mockResponse;
}

// 💡 추가 구현 예정: 회원가입 (signup) 함수 등
// export async function signup(data: SignupRequest): Promise<AuthResponseRaw> { ... }
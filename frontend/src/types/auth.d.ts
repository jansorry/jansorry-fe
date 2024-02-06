export interface authResponse {
  oauthId?: string;
  kakaoNickname: string;
  nickname: string | null;
  accessToken: string | null;
}

export interface signupRequest {
  kakaoNickname: string;
  oauthId: string;
  birth: number | null;
  genderId: number;
}

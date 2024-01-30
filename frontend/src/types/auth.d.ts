export interface authResponse {
  oauthId?: string;
  nickname: string | null;
  accessToken: string | null;
}

export interface signupRequest {
  oauthId: string;
  birth: number | null;
  genderId: number;
}

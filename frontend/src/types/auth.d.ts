export interface authResponse {
  oauthId?: string;
  nickname: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

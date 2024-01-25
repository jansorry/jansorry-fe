import { api } from '@/services/index';
import { authResponse } from '@/types/auth';

export const getKakaoLogin = async (code: string | string[]): Promise<authResponse> => {
  try {
    return await api.get<authResponse>(`/oauth/login/kakao?code=${code}`);
  } catch (e) {
    console.log(e);
  }
  return { oauthId: '', nickname: null, accessToken: null, refreshToken: null } as authResponse;
};

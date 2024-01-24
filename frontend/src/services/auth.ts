import { api } from '@/services/index';

export const getKakaoLogin = async (code: string | string[]): Promise<void> => {
  try {
    return await api.get<void>(`/oauth/login/kakao?code=${code}`);
  } catch (e) {
    console.log(e);
  }
};

import { redirect, useRouter } from 'next/navigation';

import { apiClient, apiServer } from '@/services/index';
import { managementUserDataResponse } from '@/types/managementProfile';

export const getManagement = async (
  token: string = '',
): Promise<managementUserDataResponse> => {
  try {
    return await apiServer.get(`/members`, token);
  } catch (e) {
    console.log(e);
  }
  return redirect('/401');
};

export const postNewNickname = (nickname: string) => {
  return apiClient.post(`/members/rename`, { nickname });
};

export const logout = async (): Promise<void> => {
  try {
    await apiClient.post('/oauth/logout/kakao');
  } catch (error) {
    console.error('로그아웃 실패:', error);
  }
};

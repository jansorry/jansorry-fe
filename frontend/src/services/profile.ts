import { apiServer } from '@/services/index';
import { userDataResponse } from '@/types/userData';

export const getProfile = async (
  token: string = '',
): Promise<userDataResponse> => {
  try {
    return await apiServer.get(`/members`, token);
  } catch (e) {
    console.log(e);
  }
  return {
    nickname: '',
    imageUrl: '',
    followingCnt: 0,
    followerCnt: 0,
  };
};

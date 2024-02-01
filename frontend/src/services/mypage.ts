import { apiServer } from '@/services/index';
import { userDataResponse, action, actionTotalCount } from '@/types/userData';

export const getMyPage = async (
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

// export const getActionTotalCount = async (
//   token: string = '',
// ): Promise<actionTotalCount> => {
//   try {
//     return await apiServer.get<actionTotalCount>(`/actions`, token);
//   } catch (e) {
//     console.log(e);
//   }
//   return { content: [] };
// };

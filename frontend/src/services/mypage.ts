import { apiServer } from '@/services/index';
import { userDataResponse, actionTotalCount } from '@/types/userData';

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

export const getActionTotalCount = async (
  token: string = '',
): Promise<actionTotalCount> => {
  try {
    const response: actionTotalCount = await apiServer.get<actionTotalCount>(
      `/actions`,
      token,
    );
    if (response.empty) {
      throw new Error('No content available');
    }
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
  return {
    empty: false,
    first: false,
    last: false,
    number: -1,
    numberOfElements: -1,
    pageable: {
      offset: -1,
      pageNumber: -1,
      pageSize: -1,
      paged: false,
      sort: { empty: false, sorted: false, unsorted: false },
      unpaged: false,
    },
    size: -1,
    sort: { empty: false, sorted: false, unsorted: false },
    content: [],
  };
};

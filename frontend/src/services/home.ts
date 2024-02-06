import { apiServer } from '@/services/index';
import { homeCardsResponse } from '@/types/home';

export const getHomeCards = async (
  token: string = '',
): Promise<homeCardsResponse> => {
  try {
    return await apiServer.get(`/main`, token);
  } catch (error) {
    console.log(error);
  }
  return {
    count: -1,
    categoryList: [],
  };
};

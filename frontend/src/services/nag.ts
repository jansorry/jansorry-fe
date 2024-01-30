import { apiServer } from '@/services/index';
import { nagResponse } from '@/types/nag';

export const getNagCategory = async (token: string): Promise<nagResponse[]> => {
  try {
    return await apiServer.get(`/nags`, token);
  } catch (e) {
    console.log(e);
  }
  return [];
};

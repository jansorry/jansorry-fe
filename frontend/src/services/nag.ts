import { apiServer } from '@/services/index';
import { nag } from '@/types/nag';

export const getNagCategory = async (token: string): Promise<nag[]> => {
  try {
    return await apiServer.get(`/nags`, token);
  } catch (e) {
    console.log(e);
  }
  return [];
};

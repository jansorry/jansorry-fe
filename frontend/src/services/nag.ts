import { api } from '@/services/index';
import { nag } from '@/types/nag';

export const getNagCategory = async (): Promise<nag[]> => {
  try {
    return await api.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/nags`);
  } catch (e) {
    console.log(e);
  }
  return [];
};

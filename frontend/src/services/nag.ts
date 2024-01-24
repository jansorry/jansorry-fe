import { api } from '@/services/index';
import { nag } from '@/types/nag';

export const getNagCategory = async (): Promise<nag[]> => {
  try {
    return await api.get<nag[]>('/nags');
  } catch (e) {
    console.log(e);
  }
  return [];
};

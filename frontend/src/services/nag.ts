import { api } from '@/services/index';
import { nag } from '@/types/nag';

export const getNagCategory = async (): Promise<nag[] | null> => {
  try {
    const response: nag[] = await api.get('/nags');
    return response;
  } catch (e) {
    console.log(e);
  }
  return [];
};

import { redirect } from 'next/navigation';

import { apiClient } from '@/services/index';
import { homeCardsResponse } from '@/types/home';

export const getHomeCards = async (): Promise<homeCardsResponse> => {
  try {
    return await apiClient.get(`/main`);
  } catch (error) {
    console.log(error);
  }
  return redirect('/401');
};

import { apiServer } from '@/services/index';
import { nag, nagDetails, nagTotalResponse } from '@/types/nag';

export const getNagCategory = async (
  token: string = '',
): Promise<nagTotalResponse[]> => {
  try {
    return await apiServer.get<nagTotalResponse[]>(`/nags`, token);
  } catch (e) {
    console.log(e);
  }
  return [];
};

export const getNagDetails = async (
  nagId: number,
  token: string = '',
): Promise<nagDetails> => {
  try {
    return await apiServer.get<nagDetails>(`/nags/${nagId}`, token);
  } catch (e) {
    console.log(e);
  }
  return { nagId: -1, content: '', price: -1, categoryId: -1 };
};

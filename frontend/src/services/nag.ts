import { redirect } from 'next/navigation';

import { apiServer } from '@/services/index';
import { nagDetails, nagTotalResponse } from '@/types/nag';

export const getNagCategory = async (
  token: string = '',
): Promise<nagTotalResponse[]> => {
  try {
    return await apiServer.get<nagTotalResponse[]>(`/nags`, token);
  } catch (e) {
    console.log(e);
  }
  return redirect('/401');
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
  return redirect('/401');
};

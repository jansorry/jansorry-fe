import { redirect } from 'next/navigation';

import { apiClient } from '@/services/index';
import { userDataResponse, actionTotalDataResponse } from '@/types/userData';

export const getMyPage = async (): Promise<{
  userData: userDataResponse;
  actionsData: actionTotalDataResponse;
  receiptCountData: number;
}> => {
  try {
    const [userData, actionsData, receiptCountData] = await Promise.all([
      apiClient.get<userDataResponse>(`/members`),
      apiClient.get<actionTotalDataResponse>(`/actions`),
      apiClient.get<number>(`/receipts`),
    ]);
    return { userData, actionsData, receiptCountData };
  } catch (e) {
    console.log(e);
  }
  return redirect('/401');
};

export const getCards = async (
  lastActionId: number,
): Promise<actionTotalDataResponse> => {
  try {
    const url = `/actions?lastActionId=${lastActionId}`;
    return await apiClient.get<actionTotalDataResponse>(url);
  } catch (e) {
    console.log(e);
  }
  return redirect('/401');
};

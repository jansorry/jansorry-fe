import { redirect } from 'next/navigation';

import { apiClient, apiServer } from '@/services/index';
import { userDataResponse, actionTotalDataResponse } from '@/types/userData';
import { totalReceiptCountResponse } from '@/types/receipt';

export const getMyPage = async (
  token: string = '',
): Promise<{
  userData: userDataResponse;
  actionsData: actionTotalDataResponse;
  receiptCountData: totalReceiptCountResponse;
}> => {
  try {
    const [userData, actionsData, receiptCountData] = await Promise.all([
      apiServer.get<userDataResponse>(`/members`, token),
      apiServer.get<actionTotalDataResponse>(`/actions`, token),
      apiServer.get<totalReceiptCountResponse>(`/receipts`, token),
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

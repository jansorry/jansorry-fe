import { apiServer } from '@/services/index';
import { userDataResponse, actionTotalCount } from '@/types/userData';
import { totalReceiptCountResponse } from '@/types/receipt';

export const getMyPage = async (
  token: string = '',
): Promise<{
  userData: userDataResponse;
  actionsData: actionTotalCount;
  receiptCountData: totalReceiptCountResponse;
}> => {
  try {
    const [userData, actionsData, receiptCountData] = await Promise.all([
      apiServer.get<userDataResponse>(`/members`, token),
      apiServer.get<actionTotalCount>(`/actions`, token),
      apiServer.get<totalReceiptCountResponse>(`/receipts`, token),
    ]);
    return { userData, actionsData, receiptCountData };
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getMyPageTemp = async (
  token: string = '',
): Promise<userDataResponse> => {
  try {
    return await apiServer.get<userDataResponse>(`/members`, token);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

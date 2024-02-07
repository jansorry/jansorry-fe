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

export const getCards = async (): Promise<actionTotalDataResponse> => {
  try {
    return await apiClient.get<actionTotalDataResponse>('/actions');
  } catch (e) {
    console.log(e);
  }
  return {
    size: -1,
    content: [],
    number: -1,
    sort: {
      empty: false,
      sorted: false,
      unsorted: false,
    },
    pageable: {
      offset: -1,
      sort: {
        empty: false,
        sorted: false,
        unsorted: false,
      },
      pageNumber: -1,
      pageSize: -1,
      paged: false,
      unpaged: false,
    },
    numberOfElements: -1,
    first: false,
    last: true,
    empty: false,
  };
};

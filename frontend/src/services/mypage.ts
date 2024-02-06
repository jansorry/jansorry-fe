import { apiClient, apiServer } from '@/services/index';
import { userDataResponse, actionTotalCountResponse } from '@/types/userData';
import { totalReceiptCountResponse } from '@/types/receipt';

export const getMyPage = async (
  token: string = '',
): Promise<{
  userData: userDataResponse;
  actionsData: actionTotalCountResponse;
  receiptCountData: totalReceiptCountResponse;
}> => {
  try {
    const [userData, actionsData, receiptCountData] = await Promise.all([
      apiServer.get<userDataResponse>(`/members`, token),
      apiServer.get<actionTotalCountResponse>(`/actions`, token),
      apiServer.get<totalReceiptCountResponse>(`/receipts`, token),
    ]);
    return { userData, actionsData, receiptCountData };
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getCards = async (
  lastActionId: number,
): Promise<actionTotalCountResponse> => {
  try {
    const queryParams = new URLSearchParams({
      size: '20',
      ...(lastActionId !== -1 && { lastActionId: `${lastActionId}` }),
    }).toString();

    return await apiClient.get<actionTotalCountResponse>(
      `/actions/?${queryParams}`,
    );
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

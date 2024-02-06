import { apiClient, apiServer } from '@/services/index';
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

export const getCards = async (
  lastActionId: number,
): Promise<actionTotalCount> => {
  try {
    const actionIdParams =
      lastActionId !== -1 ? `?lastActionId=${lastActionId}` : '';
    const sizeParams = `?size=20`;
    return await apiClient.get<actionTotalCount>(
      `/actions/${sizeParams}${actionIdParams}`,
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

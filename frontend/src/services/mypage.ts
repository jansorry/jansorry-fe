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

// export const getActionTotalCount = async (
//   token: string = '',
// ): Promise<actionTotalCount> => {
//   try {
//     const response: actionTotalCount = await apiServer.get<actionTotalCount>(
//       `/actions`,
//       token,
//     );
//     if (response.empty) {
//       throw new Error('No content available');
//     }
//     return response;
//   } catch (e) {
//     console.log(e);
//     throw e;
//   }
//   return {
//     empty: false,
//     first: false,
//     last: false,
//     number: -1,
//     numberOfElements: -1,
//     pageable: {
//       offset: -1,
//       pageNumber: -1,
//       pageSize: -1,
//       paged: false,
//       sort: { empty: false, sorted: false, unsorted: false },
//       unpaged: false,
//     },
//     size: -1,
//     sort: { empty: false, sorted: false, unsorted: false },
//     content: [],
//   };
// };

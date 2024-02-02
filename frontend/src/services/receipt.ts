import { apiClient, apiServer } from '@/services/index';
import { nagStatisticResponse, receiptResponse } from '@/types/receipt';

export const getNagStatistic = async (): Promise<nagStatisticResponse> => {
  try {
    return await apiClient.get(`/nags/statistic`);
  } catch (error) {
    console.log(error);
  }
  return {
    data: [
      {
        nagId: -1,
        content: '서버 오류',
        price: -1,
        count: -1,
      },
    ],
  };
};

export const createReceipt = async (receiptInfo: receiptResponse) => {
  try {
    return await apiClient.post('/receipts');
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

export const getReceipts = async (seq: number): Promise<receiptResponse> => {
  try {
    return await apiClient.get(`/receipts/${seq}`);
  } catch (error) {
    console.log(error);
  }

  return {
    title: '서버오류',
    description: '서버오류',
    message: '서버오류',
    familyUrl: '서버오류',
    friendUrl: '서버오류',
  };
};

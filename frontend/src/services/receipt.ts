import { apiClient, apiServer } from '@/services/index';
import { nagStatisticResponse, receiptResponse } from '@/types/receipt';
import { nag, nagTotalResponse } from '@/types/nag';
import { flattenNags } from '@/utils/drawReceipt';

export const getNagStatistic = async (): Promise<nagStatisticResponse> => {
  try {
    return await apiClient.get(`/receipts/statistic`);
  } catch (error) {
    console.log(error);
  }
  return {
    totalPrice: -1,
    totalCount: -1,
    maxCountedNagId: -1,
    nagStatisticDtos: [
      {
        nagId: -1,
        content: '서버 오류',
        price: -1,
        count: -1,
      },
    ],
  };
};

export const createReceipt = async (
  receiptInfo: receiptResponse,
): Promise<number> => {
  try {
    return await apiClient.post('/receipts', receiptInfo);
  } catch (error) {
    console.log(error);
  }
  return -1;
};

export const getReceipts = async (
  seq: number,
  token: string = '',
): Promise<receiptResponse> => {
  try {
    return await apiServer.get(`/receipts/${seq}`, token);
  } catch (error) {
    console.log(error);
  }

  return {
    maxCountedNagId: -1,
    title: '서버오류',
    description: '서버오류',
    message: '서버오류',
    familyUrl: '서버오류',
    friendUrl: '서버오류',
    totalPrice: -1,
    totalCount: -1,
    createdAt: '없음',
  };
};

export const deleteReceipt = async (seq: number) => {
  try {
    return await apiClient.delete(`/receipts/${seq}`);
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

export const getAllNags = async (): Promise<nag[]> => {
  try {
    const response = await apiClient.get<nagTotalResponse[]>(`/nags`);
    return flattenNags(response);
  } catch (e) {
    console.log(e);
  }
  return [];
};

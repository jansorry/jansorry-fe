import { redirect } from 'next/navigation';

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

  return redirect('/401');
};

export const deleteReceipt = async (seq: number) => {
  try {
    return await apiClient.delete(`/receipts/${seq}`);
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

export const getAllNags = async (token: string = ''): Promise<nag[]> => {
  try {
    const response = await apiServer.get<nagTotalResponse[]>(`/nags`, token);
    return flattenNags(response);
  } catch (e) {
    console.log(e);
  }
  return [];
};

export const getReceiptCount = async (token: string = ''): Promise<number> => {
  try {
    return await apiServer.get<number>('/receipts', token);
  } catch (error) {
    console.error('Error fetching receipt count:', error);
    return 0;
  }
};

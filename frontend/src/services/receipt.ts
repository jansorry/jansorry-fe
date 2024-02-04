import { ReceiptData } from '@/types/receipt';

import { apiClient } from './index';

export const postReceipt = async (receiptData: ReceiptData): Promise<void> => {
  try {
    await apiClient.post('/receipts', receiptData);
  } catch (error) {
    console.error('Error saving receipt:', error);
  }
};

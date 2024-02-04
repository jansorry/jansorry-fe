export interface receiptData {
  nagId: number;
  content: string | null;
  price: number | null | string;
  count: number;
}

export interface receiptContent {
  type: 'adult' | 'normal';
  title: string;
  description: string;
  message: string;
  date: string;
  data: receiptData[];
  totalCount: number;
  totalPrice: number;
}

export interface ReceiptData {
  title: string;
  description: string;
  message: string;
  familyUrl: string;
  friendUrl: string;
  createdAt: string;
}

export interface totalReceiptCountResponse {
  receiptCount: number;
}

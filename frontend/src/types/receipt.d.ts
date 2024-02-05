export interface receiptData {
  nagId: number;
  content: string | null;
  price: number | null | string;
  count: number;
}

export interface receiptContent {
  type: 'family' | 'friend';
  title: string;
  description: string;
  message: string;
  date: string;
  data: receiptData[];
  familyUrl: string;
  friendUrl: string;
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
  receiptCount: 0 | 1 | 2;
}

export interface nagStatisticItem {
  nagId: number;
  content: string;
  price: number;
  count: number;
}
export interface nagStatisticResponse {
  data: nagStatisticItem[];
}

export interface receiptResponse {
  title: string | null;
  description: string | null;
  message: string | null;
  familyUrl: string | null;
  friendUrl: string | null;
  totalPrice: number | null;
  createdAt: string | null;
}

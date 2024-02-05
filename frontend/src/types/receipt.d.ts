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

export interface nagStatisticItem {
  nagId: number;
  content: string;
  price: number;
  count: number;
}
export interface nagStatisticResponse {
  totalPrice: number;
  totalCount: number;
  maxCountedNagId: number;
  data: nagStatisticItem[];
}

export interface receiptResponse {
  maxCountedNagId: number;
  title?: string;
  description?: string;
  message?: string;
  familyUrl: string;
  friendUrl: string;
  totalPrice: number;
  createdAt?: string;
}

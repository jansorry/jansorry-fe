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
  data: nagStatisticItem[];
}

export interface receiptResponse {
  title: string;
  description: string;
  message: string;
  familyUrl: string;
  friendUrl: string;
  totalPrice: number;
  //  date저장 어떻게 되는지 확인
  date?: string;
}

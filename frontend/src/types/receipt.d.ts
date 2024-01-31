export interface receiptData {
  nagId: number;
  content: string | null;
  price: number | null;
  count: number;
}

export interface receiptContent {
  title: string;
  description: string;
  message: string;
  date: string;
  data: receiptData;
}

export interface nag {
  nagId: number;
  content: string;
  price: number;
}

export interface nagDetails extends nag {
  categoryId: number;
}

export interface nagTotalResponse {
  categoryId: number;
  title: string;
  nags: nag[];
}

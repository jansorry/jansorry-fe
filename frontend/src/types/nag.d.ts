export interface nag {
  nagId: number;
  content: string;
  price: number;
}

export interface nagResponse {
  categoryId: number;
  title: string;
  nags: nag[];
}

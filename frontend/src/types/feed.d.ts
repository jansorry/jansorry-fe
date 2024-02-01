export interface feedContent {
  memberId: number;
  actionId: number;
  nickname: string;
  nag: string;
  action: string;
  categoryId: number;
  categoryTitle: string;
  favoriteCount: number;
  createdAt: string;
}

export interface feedSort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface liveFeedResponse {
  size: number;
  content: feedContent[];
  number: number;
  sort: feedSort;
  pageable: {
    offset: number;
    sort: feedSort;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}
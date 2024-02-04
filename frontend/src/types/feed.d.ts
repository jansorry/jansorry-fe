export interface feedContent {
  memberId: number;
  actionId: number;
  nickname: string;
  profileImage: number;
  nag: string;
  action: string;
  categoryId: number;
  categoryTitle: string;
  favoriteCount: number;
  isFollow: boolean | null;
  isFavorite: boolean;
  createdAt: string;
}

export interface feedSort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface feedResponse {
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
